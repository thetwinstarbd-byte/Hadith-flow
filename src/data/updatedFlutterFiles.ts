import { FlutterFile } from '../data/flutterFiles';

export const updatedHadithListScreenDart = `// lib/screens/hadith_list_screen.dart

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:share_plus/share_plus.dart';
import '../models/chapter_model.dart';
import '../models/hadith_model.dart';
import '../providers/hadith_provider.dart';
import '../providers/theme_provider.dart';
import '../widgets/ad_banner_widget.dart';
import '../widgets/tahqiq_bottom_sheet.dart';

class HadithListScreen extends StatefulWidget {
  final Chapter chapter;

  const HadithListScreen({super.key, required this.chapter});

  @override
  State<HadithListScreen> createState() => _HadithListScreenState();
}

class _HadithListScreenState extends State<HadithListScreen> {
  bool _isGridView = true; // গ্রিড ভিউ ডিফল্ট হিসেবে সক্রিয়

  @override
  Widget build(BuildContext context) {
    final hadithProvider = Provider.of<HadithProvider>(context);
    final themeProvider = Provider.of<ThemeProvider>(context);
    final isDark = themeProvider.isDarkMode;

    return Scaffold(
      appBar: AppBar(
        title: Column(
          children: [
            Text(
              widget.chapter.titleBangla,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
            Text(
              '\${hadithProvider.currentHadiths.length} টি হাদিস সংরক্ষিত',
              style: TextStyle(
                fontSize: 11,
                color: isDark ? const Color(0xFFFBBF24) : const Color(0xFF059669),
              ),
            ),
          ],
        ),
        actions: [
          // গ্রিড এবং লিস্ট ভিউ টগল বাটন
          IconButton(
            tooltip: _isGridView ? 'লিস্ট ভিউ' : 'গ্রিড ভিউ',
            icon: Icon(
              _isGridView ? Icons.view_agenda_outlined : Icons.grid_view_rounded,
              color: isDark ? const Color(0xFFFBBF24) : const Color(0xFF059669),
            ),
            onPressed: () {
              setState(() {
                _isGridView = !_isGridView;
              });
            },
          ),
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: hadithProvider.isLoading
                ? const Center(
                    child: CircularProgressIndicator(
                      color: Color(0xFF10B981),
                    ),
                  )
                : hadithProvider.currentHadiths.isEmpty
                    ? Center(
                        child: Text(
                          'এই অধ্যায়ের হাদিসসমূহ ডাটাবেজে লোড হচ্ছে...',
                          style: TextStyle(
                            color: isDark ? Colors.white70 : Colors.black54,
                          ),
                        ),
                      )
                    : _isGridView
                        ? _buildGridView(context, hadithProvider, themeProvider, isDark)
                        : _buildListView(context, hadithProvider, themeProvider, isDark),
          ),
          // Google AdMob ব্যানার অ্যাড (ইন্টারনেট কানেকশন থাকলেই লোড হবে)
          const SafeArea(top: false, child: AdBannerWidget()),
        ],
      ),
    );
  }

  // ১. লাক্সারি গ্রিড ভিউ (Luxury Card Grid)
  Widget _buildGridView(
    BuildContext context,
    HadithProvider hadithProvider,
    ThemeProvider themeProvider,
    bool isDark,
  ) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final crossAxisCount = constraints.maxWidth > 600 ? 2 : 1;

        return GridView.builder(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: crossAxisCount,
            childAspectRatio: crossAxisCount == 2 ? 0.95 : 0.85,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
          ),
          itemCount: hadithProvider.currentHadiths.length,
          itemBuilder: (context, index) {
            final hadith = hadithProvider.currentHadiths[index];
            return _buildLuxuryHadithCard(
              context,
              hadith,
              themeProvider,
              hadithProvider,
              isDark,
              isGrid: true,
            );
          },
        );
      },
    );
  }

  // ২. ক্লাসিক লিস্ট ভিউ
  Widget _buildListView(
    BuildContext context,
    HadithProvider hadithProvider,
    ThemeProvider themeProvider,
    bool isDark,
  ) {
    return ListView.builder(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      itemCount: hadithProvider.currentHadiths.length,
      itemBuilder: (context, index) {
        final hadith = hadithProvider.currentHadiths[index];
        return Padding(
          padding: const EdgeInsets.only(bottom: 14),
          child: _buildLuxuryHadithCard(
            context,
            hadith,
            themeProvider,
            hadithProvider,
            isDark,
            isGrid: false,
          ),
        );
      },
    );
  }

  // ৩. হাই-কন্ট্রাস্ট লাক্সারি হাদিস কার্ড
  Widget _buildLuxuryHadithCard(
    BuildContext context,
    Hadith hadith,
    ThemeProvider themeProvider,
    HadithProvider hadithProvider,
    bool isDark, {
    required bool isGrid,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF0F192C) : Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: isDark ? const Color(0xFFFBBF24).withOpacity(0.25) : const Color(0xFFE2E8F0),
          width: 1.2,
        ),
        boxShadow: [
          BoxShadow(
            color: isDark ? Colors.black.withOpacity(0.5) : Colors.black.withOpacity(0.04),
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // টপ বার: নম্বর ও বুকমার্ক
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: isDark
                        ? [const Color(0xFFF59E0B).withOpacity(0.2), const Color(0xFF10B981).withOpacity(0.2)]
                        : [const Color(0xFF10B981).withOpacity(0.12), const Color(0xFF047857).withOpacity(0.12)],
                  ),
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(
                    color: isDark ? const Color(0xFFF59E0B).withOpacity(0.3) : const Color(0xFF10B981).withOpacity(0.3),
                  ),
                ),
                child: Text(
                  'হাদিস নং: \${hadith.hadithNumberStr}',
                  style: TextStyle(
                    color: isDark ? const Color(0xFFFBBF24) : const Color(0xFF047857),
                    fontWeight: FontWeight.bold,
                    fontSize: 12.5,
                  ),
                ),
              ),
              Row(
                children: [
                  IconButton(
                    icon: Icon(
                      hadith.isBookmarked ? Icons.bookmark : Icons.bookmark_border,
                      color: hadith.isBookmarked
                          ? const Color(0xFFF59E0B)
                          : (isDark ? Colors.white60 : Colors.grey),
                      size: 20,
                    ),
                    onPressed: () => hadithProvider.toggleBookmark(hadith),
                  ),
                  IconButton(
                    icon: Icon(
                      Icons.share_outlined,
                      color: isDark ? Colors.white60 : Colors.grey,
                      size: 19,
                    ),
                    onPressed: () {
                      Share.share(
                        '[\${hadith.hadithNumberStr}] \${hadith.arabicText}\\n\\n\${hadith.banglaText}\\n\\n- আল-হাদিস অফলাইন অ্যাপ',
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: 8),

          // বর্ণনাকারী (হাই-কন্ট্রাস্ট)
          if (hadith.narratorBangla.isNotEmpty)
            Text(
              hadith.narratorBangla,
              style: TextStyle(
                fontSize: 12.5,
                fontWeight: FontWeight.w600,
                color: isDark ? const Color(0xFF38BDF8) : const Color(0xFF0284C7),
              ),
            ),
          const SizedBox(height: 8),

          // আরবি ক্যালিগ্রাফি মত্ন (ডার্ক মোডে উজ্জ্বল সাদা/গোল্ডেন)
          Expanded(
            child: SingleChildScrollView(
              physics: isGrid ? const BouncingScrollPhysics() : const NeverScrollableScrollPhysics(),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    hadith.arabicText,
                    textAlign: TextAlign.right,
                    textDirection: TextDirection.rtl,
                    style: TextStyle(
                      fontFamily: 'Amiri',
                      fontSize: themeProvider.arabicFontSize,
                      height: 1.85,
                      fontWeight: FontWeight.w500,
                      color: isDark ? const Color(0xFFFEF3C7) : const Color(0xFF0F172A),
                    ),
                  ),
                  const SizedBox(height: 10),

                  // বাংলা অনুবাদ (উচ্চ কনট্রাস্ট)
                  Text(
                    hadith.banglaText,
                    style: TextStyle(
                      fontSize: themeProvider.banglaFontSize,
                      height: 1.6,
                      color: isDark ? const Color(0xFFE2E8F0) : const Color(0xFF1E293B),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 12),

          // "হাদিসের মান ও তাহকিক" লাক্সারি গোল্ড/এমেরাল্ড বাটন
          ElevatedButton.icon(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF059669),
              foregroundColor: Colors.white,
              elevation: isDark ? 4 : 1,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              padding: const EdgeInsets.symmetric(vertical: 12),
            ),
            icon: const Icon(Icons.verified, size: 18, color: Color(0xFFFBBF24)),
            label: const Text(
              'হাদিসের মান ও তাহকিক',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13.5),
            ),
            onPressed: () {
              TahqiqBottomSheet.show(context, hadith);
            },
          ),
        ],
      ),
    );
  }
}
`;
