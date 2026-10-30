export interface FlutterFile {
  path: string;
  name: string;
  category: 'core' | 'model' | 'service' | 'screen' | 'widget' | 'config';
  description: string;
  content: string;
}

export const flutterProjectFiles: FlutterFile[] = [
  {
    path: 'pubspec.yaml',
    name: 'pubspec.yaml',
    category: 'config',
    description: 'Flutter dependencies including sqflite, google_mobile_ads, firebase_remote_config, and connectivity_plus',
    content: `name: al_hadith_app
description: "A production-grade offline-first Islamic Hadith Library Flutter App"
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.2.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  flutter_localizations:
    sdk: flutter

  # UI & Design
  cupertino_icons: ^1.0.8
  google_fonts: ^6.2.1

  # Database & Offline Storage
  sqflite: ^2.3.3+1
  path_provider: ^2.1.3
  path: ^1.9.0
  shared_preferences: ^2.2.3

  # Network & State Monitoring
  connectivity_plus: ^6.0.3

  # Monetization (Online-only Smart Banner)
  google_mobile_ads: ^5.1.0

  # Firebase Services (Remote Config for Notices & Force Updates)
  firebase_core: ^3.1.0
  firebase_remote_config: ^5.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/database/
    - assets/images/
`
  },
  {
    path: 'lib/main.dart',
    name: 'main.dart',
    category: 'core',
    description: 'Application entry point initializing SQLite, Firebase Remote Config, and AdMob',
    content: `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:firebase_core/firebase_core.dart';
import 'services/database_service.dart';
import 'services/remote_config_service.dart';
import 'screens/pentagon_home_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // 1. Initialize SQLite Database
  await DatabaseService.instance.database;

  // 2. Initialize AdMob
  await MobileAds.instance.initialize();

  // 3. Initialize Firebase & Remote Config safely
  try {
    await Firebase.initializeApp();
    await RemoteConfigService.instance.initialize();
  } catch (e) {
    debugPrint("Firebase init optional in offline/preview: \$e");
  }

  runApp(const AlHadithLibraryApp());
}

class AlHadithLibraryApp extends StatefulWidget {
  const AlHadithLibraryApp({super.key});

  @override
  State<AlHadithLibraryApp> createState() => _AlHadithLibraryAppState();
}

class _AlHadithLibraryAppState extends State<AlHadithLibraryApp> {
  ThemeMode _themeMode = ThemeMode.system;

  void toggleTheme() {
    setState(() {
      _themeMode = _themeMode == ThemeMode.dark ? ThemeMode.light : ThemeMode.dark;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'আল-হাদিস অফলাইন লাইব্রেরি',
      debugShowCheckedModeBanner: false,
      themeMode: _themeMode,
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.light,
        colorSchemeSeed: const Color(0xFF0D5C46),
        scaffoldBackgroundColor: const Color(0xFFFAFCFB),
        fontFamily: GoogleFonts.hindSiliguri().fontFamily,
      ),
      darkTheme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        colorSchemeSeed: const Color(0xFF0D5C46),
        scaffoldBackgroundColor: const Color(0xFF061712),
        fontFamily: GoogleFonts.hindSiliguri().fontFamily,
      ),
      home: PentagonHomeScreen(onToggleTheme: toggleTheme),
    );
  }
}
`
  },
  {
    path: 'lib/models/hadith_model.dart',
    name: 'hadith_model.dart',
    category: 'model',
    description: 'Data model representing a Hadith and its scholarly Tahqiq grading',
    content: `class ScholarVerdict {
  final String scholarName;
  final String grade;
  final String comment;

  ScholarVerdict({
    required this.scholarName,
    required this.grade,
    required this.comment,
  });

  factory ScholarVerdict.fromMap(Map<String, dynamic> map) {
    return ScholarVerdict(
      scholarName: map['scholar_name'] ?? '',
      grade: map['grade'] ?? 'সহীহ',
      comment: map['comment'] ?? '',
    );
  }
}

class Hadith {
  final int id;
  final int bookId;
  final int chapterId;
  final int hadithNumber;
  final String narratorBangla;
  final String narratorArabic;
  final String arabicText;
  final String banglaText;
  final String englishText;
  final String grade;
  final String sanadStatus;
  final String narratorChain;
  final String neutralAnalysis;
  final String references;
  final bool isBookmarked;

  Hadith({
    required this.id,
    required this.bookId,
    required this.chapterId,
    required this.hadithNumber,
    required this.narratorBangla,
    required this.narratorArabic,
    required this.arabicText,
    required this.banglaText,
    required this.englishText,
    required this.grade,
    required this.sanadStatus,
    required this.narratorChain,
    required this.neutralAnalysis,
    required this.references,
    this.isBookmarked = false,
  });

  factory Hadith.fromMap(Map<String, dynamic> map) {
    return Hadith(
      id: map['id'],
      bookId: map['book_id'],
      chapterId: map['chapter_id'],
      hadithNumber: map['hadith_number'],
      narratorBangla: map['narrator_bangla'] ?? '',
      narratorArabic: map['narrator_arabic'] ?? '',
      arabicText: map['arabic_text'] ?? '',
      banglaText: map['bangla_text'] ?? '',
      englishText: map['english_text'] ?? '',
      grade: map['grade'] ?? 'সহীহ',
      sanadStatus: map['sanad_status'] ?? '',
      narratorChain: map['narrator_chain'] ?? '',
      neutralAnalysis: map['neutral_analysis'] ?? '',
      references: map['references'] ?? '',
      isBookmarked: (map['is_bookmarked'] ?? 0) == 1,
    );
  }
}
`
  },
  {
    path: 'lib/services/database_service.dart',
    name: 'database_service.dart',
    category: 'service',
    description: 'SQLite database helper with indexing, search, and pre-bundled assets copy',
    content: `import 'dart:io';
import 'package:flutter/services.dart';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';
import '../models/hadith_model.dart';

class DatabaseService {
  static final DatabaseService instance = DatabaseService._init();
  static Database? _database;

  DatabaseService._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('hadith_library.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    // If database does not exist in app directory, copy from bundled asset
    final exists = await databaseExists(path);
    if (!exists) {
      try {
        await Directory(dirname(path)).create(recursive: true);
        ByteData data = await rootBundle.load('assets/database/hadith_library.db');
        List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
        await File(path).writeAsBytes(bytes, flush: true);
      } catch (e) {
        // Fallback: create schema and seed essentials
      }
    }

    return await openDatabase(
      path,
      version: 1,
      onCreate: _createDB,
    );
  }

  Future<void> _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE hadiths (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        book_id INTEGER NOT NULL,
        chapter_id INTEGER NOT NULL,
        hadith_number INTEGER NOT NULL,
        narrator_bangla TEXT,
        narrator_arabic TEXT,
        arabic_text TEXT NOT NULL,
        bangla_text TEXT NOT NULL,
        english_text TEXT,
        grade TEXT NOT NULL,
        sanad_status TEXT,
        narrator_chain TEXT,
        neutral_analysis TEXT,
        references TEXT,
        is_bookmarked INTEGER DEFAULT 0
      )
    ''');

    await db.execute('CREATE INDEX idx_book_chapter ON hadiths(book_id, chapter_id);');
    await db.execute('CREATE INDEX idx_hadith_number ON hadiths(hadith_number);');
  }

  Future<List<Hadith>> getHadithsByChapter(int bookId, int chapterId, {int limit = 50, int offset = 0}) async {
    final db = await instance.database;
    final result = await db.query(
      'hadiths',
      where: 'book_id = ? AND chapter_id = ?',
      whereArgs: [bookId, chapterId],
      orderBy: 'hadith_number ASC',
      limit: limit,
      offset: offset,
    );
    return result.map((json) => Hadith.fromMap(json)).toList();
  }

  Future<List<Hadith>> searchHadiths(String query) async {
    final db = await instance.database;
    final result = await db.rawQuery('''
      SELECT * FROM hadiths 
      WHERE bangla_text LIKE ? OR arabic_text LIKE ? OR narrator_bangla LIKE ? OR hadith_number = ?
      LIMIT 100
    ''', ['%\$query%', '%\$query%', '%\$query%', int.tryParse(query) ?? -1]);

    return result.map((json) => Hadith.fromMap(json)).toList();
  }
}
`
  },
  {
    path: 'lib/services/remote_config_service.dart',
    name: 'remote_config_service.dart',
    category: 'service',
    description: 'Firebase Remote Config service for force update checks and remote announcements',
    content: `import 'package:firebase_remote_config/firebase_remote_config.dart';

class RemoteConfigService {
  static final RemoteConfigService instance = RemoteConfigService._init();
  final FirebaseRemoteConfig _remoteConfig = FirebaseRemoteConfig.instance;

  RemoteConfigService._init();

  Future<void> initialize() async {
    await _remoteConfig.setConfigSettings(RemoteConfigSettings(
      fetchTimeout: const Duration(seconds: 10),
      minimumFetchInterval: const Duration(hours: 1),
    ));

    await _remoteConfig.setDefaults({
      'force_update_required': false,
      'minimum_app_version': '1.0.0',
      'remote_announcement': '',
      'enable_admob_banners': true,
    });

    await _remoteConfig.fetchAndActivate();
  }

  bool get isForceUpdateRequired => _remoteConfig.getBool('force_update_required');
  String get minimumAppVersion => _remoteConfig.getString('minimum_app_version');
  String get remoteAnnouncement => _remoteConfig.getString('remote_announcement');
  bool get areAdsEnabled => _remoteConfig.getBool('enable_admob_banners');
}
`
  },
  {
    path: 'lib/widgets/tahqiq_bottom_sheet.dart',
    name: 'tahqiq_bottom_sheet.dart',
    category: 'widget',
    description: 'হাদিসের মান ও তাহকিক scholarly analysis bottom sheet with neutral commentary',
    content: `import 'package:flutter/material.dart';
import '../models/hadith_model.dart';

class TahqiqBottomSheet extends StatelessWidget {
  final Hadith hadith;

  const TahqiqBottomSheet({super.key, required this.hadith});

  static void show(BuildContext context, Hadith hadith) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => TahqiqBottomSheet(hadith: hadith),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF0C241D) : Colors.white,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
      ),
      padding: const EdgeInsets.fromLTRB(20, 12, 20, 28),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey.withOpacity(0.4),
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'হাদিসের মান ও তাহকিক',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: isDark ? Colors.white : const Color(0xFF0D5C46),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFF0D5C46).withOpacity(0.15),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFF0D5C46)),
                ),
                child: Text(
                  hadith.grade,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF0D5C46),
                    fontSize: 12,
                  ),
                ),
              ),
            ],
          ),
          const Divider(height: 24),
          _buildInfoRow('সনদ স্তর:', hadith.sanadStatus),
          const SizedBox(height: 10),
          _buildInfoRow('রাবীদের পরম্পরা:', hadith.narratorChain),
          const SizedBox(height: 12),
          Text(
            'নিরপেক্ষ বিশ্লেষণ ও ব্যাখ্যা:',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 13,
              color: isDark ? Colors.amber[300] : const Color(0xFF0D5C46),
            ),
          ),
          const SizedBox(height: 6),
          Text(
            hadith.neutralAnalysis,
            style: TextStyle(
              fontSize: 13,
              height: 1.5,
              color: isDark ? Colors.grey[300] : Colors.grey[800],
            ),
          ),
          const SizedBox(height: 12),
          Text(
            'রেফারেন্স: \${hadith.references}',
            style: const TextStyle(fontSize: 11, color: Colors.grey),
          ),
        ],
      ),
    );
  }

  Widget _buildInfoRow(String label, String value) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.grey)),
        const SizedBox(height: 2),
        Text(value, style: const TextStyle(fontSize: 13)),
      ],
    );
  }
}
`
  },
  {
    path: 'lib/widgets/smart_ad_banner.dart',
    name: 'smart_ad_banner.dart',
    category: 'widget',
    description: 'Google AdMob banner widget that renders ONLY when connected to internet via connectivity_plus',
    content: `import 'package:flutter/material.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import '../services/remote_config_service.dart';

class SmartAdBanner extends StatefulWidget {
  const SmartAdBanner({super.key});

  @override
  State<SmartAdBanner> createState() => _SmartAdBannerState();
}

class _SmartAdBannerState extends State<SmartAdBanner> {
  BannerAd? _bannerAd;
  bool _isLoaded = false;
  bool _isOnline = false;

  @override
  void initState() {
    super.initState();
    _checkConnectivityAndLoadAd();
    Connectivity().onConnectivityChanged.listen((results) {
      final isOnline = results.any((r) => r != ConnectivityResult.none);
      if (isOnline != _isOnline) {
        setState(() => _isOnline = isOnline);
        if (_isOnline) {
          _loadAd();
        } else {
          _bannerAd?.dispose();
          setState(() {
            _bannerAd = null;
            _isLoaded = false;
          });
        }
      }
    });
  }

  Future<void> _checkConnectivityAndLoadAd() async {
    final result = await Connectivity().checkConnectivity();
    _isOnline = result.any((r) => r != ConnectivityResult.none);
    if (_isOnline && RemoteConfigService.instance.areAdsEnabled) {
      _loadAd();
    }
  }

  void _loadAd() {
    _bannerAd = BannerAd(
      adUnitId: 'ca-app-pub-3940256099942544/6300978111', // Test AdMob ID
      request: const AdRequest(),
      size: AdSize.banner,
      listener: BannerAdListener(
        onAdLoaded: (ad) => setState(() => _isLoaded = true),
        onAdFailedToLoad: (ad, err) {
          ad.dispose();
          setState(() => _isLoaded = false);
        },
      ),
    )..load();
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // If user is offline or ads disabled, widget occupies ZERO space!
    if (!_isOnline || !_isLoaded || _bannerAd == null) {
      return const SizedBox.shrink();
    }

    return Container(
      alignment: Alignment.center,
      width: _bannerAd!.size.width.toDouble(),
      height: _bannerAd!.size.height.toDouble(),
      child: AdWidget(ad: _bannerAd!),
    );
  }
}
`
  }
];
