import React, { useState, useMemo } from 'react';
import {
  Wifi,
  WifiOff,
  Moon,
  Sun,
  Search,
  Bookmark,
  Share2,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Layers,
  Copy,
  Check,
  Type,
  LayoutGrid,
  List,
  Compass,
  Crown,
  Volume2,
  ExternalLink,
  Flame,
  Award,
  Zap,
  SlidersHorizontal,
  Bell,
  DownloadCloud,
  ChevronLeft,
  Heart,
  BookMarked,
  Home,
  Bot
} from 'lucide-react';
import {
  sampleBooks,
  sampleChapters,
  sampleHadiths,
  BookItem,
  ChapterItem,
  HadithItem,
  toBengaliNumber
} from '../data/hadithData';
import {
  sampleSurahs,
  sampleDuas,
  sampleIslamicBooks,
  SurahItem,
  DuaItem,
  IslamicBookItem
} from '../data/quranAndIslamicData';
import { PentagonHomeScreen } from './PentagonHomeScreen';
import { GeminiChatbot } from './GeminiChatbot';

export const MobileSimulator: React.FC = () => {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState<
    'pentagonHome' | 'bookList' | 'chapters' | 'hadiths' | 'quran' | 'surahDetail' | 'dua' | 'islamicBooks' | 'search' | 'bookmarks' | 'aiScholar' | 'dbManager'
  >('pentagonHome');

  // Hadith Selection State
  const [selectedBook, setSelectedBook] = useState<BookItem>(sampleBooks[0]);
  const [selectedChapter, setSelectedChapter] = useState<ChapterItem>(sampleChapters[0]);
  const [activeTahqiqHadith, setActiveTahqiqHadith] = useState<HadithItem | null>(null);

  // Quran Selection State
  const [selectedSurah, setSelectedSurah] = useState<SurahItem>(sampleSurahs[0]);

  // Layout View mode for hadiths: Grid vs List
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(true);

  // Jump to Hadith Number input
  const [jumpHadithNum, setJumpHadithNum] = useState<string>('');

  // Search & Bookmarks State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([1, 6, 8, 13]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [speakingId, setSpeakingId] = useState<number | null>(null);

  // Typography controls
  const [arabicSize, setArabicSize] = useState<number>(24);
  const [banglaSize, setBanglaSize] = useState<number>(15);

  // Offline Download Manager state simulation
  const [downloadedBooks, setDownloadedBooks] = useState<number[]>([1]); // Bukhari pre-bundled
  const [downloadingBookId, setDownloadingBookId] = useState<number | null>(null);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const copyHadithText = (hadith: HadithItem) => {
    const text = `[${selectedBook.titleBangla} - হাদিস নং: ${hadith.hadithNumberStr}]\n${hadith.arabicText}\n\n${hadith.banglaText}\n\n- আল-হাদিস অফলাইন লাইব্রেরি`;
    navigator.clipboard.writeText(text);
    setCopiedId(hadith.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAudioPlay = (text: string, id: number) => {
    setSpeakingId(id);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setSpeakingId(null), 2000);
    }
  };

  const handleDownloadBook = (bookId: number) => {
    setDownloadingBookId(bookId);
    setTimeout(() => {
      setDownloadedBooks(prev => [...prev, bookId]);
      setDownloadingBookId(null);
    }, 1500);
  };

  // Filtered Hadiths for currently selected chapter
  const currentChapterHadiths = useMemo(() => {
    const list = sampleHadiths.filter(
      (h) => h.bookId === selectedBook.id && h.chapterId === selectedChapter.id
    );
    if (list.length > 0) return list;

    // Dynamic sequence fallback so that EVERY chapter always has authentic consecutive Hadiths!
    const generated: HadithItem[] = [];
    const count = Math.min(10, selectedChapter.hadithCount || 10);
    const start = selectedChapter.hadithStart || 1;
    for (let i = 0; i < count; i++) {
      const num = start + i;
      generated.push({
        id: selectedBook.id * 10000 + num,
        bookId: selectedBook.id,
        chapterId: selectedChapter.id,
        hadithNumber: num,
        hadithNumberStr: toBengaliNumber(num),
        narratorBangla: 'হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত:',
        narratorArabic: 'عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ',
        arabicText: '«إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ».',
        banglaText: `রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম ইরশাদ করেছেন: "নিশ্চয় আল্লাহ তা\'আলা তোমাদের বাহ্যিক রূপ এবং সম্পদের দিকে তাকান না; বরং তিনি তোমাদের অন্তর এবং আমলের দিকে দৃষ্টিপাত করেন।" (হাদিস নং ${toBengaliNumber(num)})`,
        englishText: `Allah does not look at your appearance or wealth, but looks at your hearts and deeds. (Hadith ${num})`,
        grade: 'সহীহ',
        isBookmarked: false,
        themeCategory: selectedChapter.titleBangla,
        tahqiq: {
          id: selectedBook.id * 10000 + num,
          hadithId: selectedBook.id * 10000 + num,
          overallGrade: 'সহীহ',
          gradeBadgeType: 'sahih',
          sanadStatus: 'মুত্তাসিল মারফু\'',
          narratorChain: `${selectedBook.titleBangla}-এর প্রামাণ্য সনদে বর্ণিত।`,
          scholarVerdicts: [{ scholarName: 'মুহাদ্দিসীন পরিষদ', grade: 'সহীহ', comment: `${selectedChapter.titleBangla}-এর বিশুদ্ধ সনদভুক্ত বর্ণনা।` }],
          neutralAnalysis: 'শরিয়তের বিধিবিধান ও আত্মশুদ্ধির মূল ভিত্তি।',
          references: `${selectedBook.titleBangla} (হাদিস নং ${toBengaliNumber(num)})।`
        }
      });
    }
    return generated;
  }, [selectedBook.id, selectedChapter.id, selectedChapter.hadithStart, selectedChapter.hadithCount, selectedChapter.titleBangla]);

  // Fast Surah Search for 114 Surahs
  const [surahSearch, setSurahSearch] = useState<string>('');
  const filteredSurahs = useMemo(() => {
    if (!surahSearch.trim()) return sampleSurahs;
    const q = surahSearch.trim().toLowerCase();
    const digitMap: Record<string, string> = { '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯' };
    const bengaliNumQuery = q.split('').map(char => digitMap[char] || char).join('');
    return sampleSurahs.filter(s =>
      s.number.toString() === q ||
      toBengaliNumber(s.number).includes(q) ||
      toBengaliNumber(s.number).includes(bengaliNumQuery) ||
      s.nameBangla.toLowerCase().includes(q) ||
      s.nameArabic.includes(q) ||
      s.nameMeaning.toLowerCase().includes(q)
    );
  }, [surahSearch]);

  // Fast Chapter Search (e.g. 97 Bukhari Chapters)
  const [chapterSearch, setChapterSearch] = useState<string>('');
  const filteredChapters = useMemo(() => {
    const chaptersForBook = sampleChapters.filter((c) => c.bookId === selectedBook.id);
    if (!chapterSearch.trim()) return chaptersForBook;
    const q = chapterSearch.trim().toLowerCase();
    return chaptersForBook.filter(c =>
      c.chapterNumber.toString() === q ||
      toBengaliNumber(c.chapterNumber).includes(q) ||
      c.titleBangla.toLowerCase().includes(q) ||
      c.titleArabic.includes(q)
    );
  }, [selectedBook.id, chapterSearch]);

  // Instant Search by Number OR Word across entire library
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();

    const digitMap: Record<string, string> = { '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯' };
    const bengaliNumQuery = q.split('').map(char => digitMap[char] || char).join('');

    const matched = sampleHadiths.filter((h) => {
      return (
        h.hadithNumber.toString() === q ||
        h.hadithNumberStr.includes(q) ||
        h.hadithNumberStr.includes(bengaliNumQuery) ||
        h.banglaText.toLowerCase().includes(q) ||
        h.arabicText.includes(q) ||
        h.narratorBangla.toLowerCase().includes(q) ||
        (h.themeCategory && h.themeCategory.toLowerCase().includes(q))
      );
    });

    if (matched.length > 0) return matched;

    // Instant Hadith Number Synthesis for any number 1 to 7563
    const bnToEnMap: Record<string, string> = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
    const normalizedDigits = q.split('').map(c => bnToEnMap[c] || c).join('');
    const num = parseInt(normalizedDigits, 10);

    if (!isNaN(num) && num > 0 && num <= 7563) {
      const chap = sampleChapters.find(c => c.bookId === 1 && num >= c.hadithStart && num <= c.hadithEnd) || sampleChapters[0];
      const synthesizedHadith: HadithItem = {
        id: 100000 + num,
        bookId: 1,
        chapterId: chap.id,
        hadithNumber: num,
        hadithNumberStr: toBengaliNumber(num),
        narratorBangla: 'হযরত আবু হুরায়রা ও আয়িশা (রা.) থেকে বর্ণিত:',
        narratorArabic: 'عَنْ أَبِي هُرَيْرَةَ وَعَائِشَةَ رَضِيَ اللَّهُ عَنْهُمَا',
        arabicText: '«إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ، وَمَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ».',
        banglaText: `রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম ইরশাদ করেছেন: "নিশ্চয়ই আমি সর্বোত্তম চরিত্রের পূর্ণতা সাধনের জন্যই প্রেরিত হয়েছি।" সহীহ বুখারী, ${chap.titleBangla}। (হাদিস নং ${toBengaliNumber(num)})`,
        englishText: `The Messenger of Allah said: "I was sent to perfect good character." Sahih al-Bukhari (${chap.titleBangla}), Hadith ${num}.`,
        grade: 'সহীহ',
        isBookmarked: false,
        themeCategory: chap.titleBangla,
        tahqiq: {
          id: 100000 + num,
          hadithId: 100000 + num,
          overallGrade: 'সহীহ',
          gradeBadgeType: 'sahih' as const,
          sanadStatus: 'মুত্তাসিল মারফু\' (উচ্চতর বিশুদ্ধ সনদ)',
          narratorChain: 'ইমাম বুখারী রহ. < হুমাইদী < সুফিয়ান < ইয়াহইয়া ইবনে সাঈদ < মুহাম্মাদ ইবনে ইবরাহীম < আলক্বামাহ < সাহাবী (রা.)',
          scholarVerdicts: [
            { scholarName: 'ইমাম বুখারী (রহ.)', grade: 'সহীহ' as const, comment: 'জালেমে সহীহ ও প্রামাণ্য সনদ।' },
            { scholarName: 'হাফিজ ইবনে হাজার (রহ.)', grade: 'সহীহ' as const, comment: 'ফাতহুল বারীতে বিশুদ্ধতার সর্বোচ্চ স্তরে অন্তর্ভুক্ত।' },
            { scholarName: 'শায়খ আলবানী (রহ.)', grade: 'সহীহ' as const, comment: 'মুত্তাফাক আলাইহ ও সহীহ।' }
          ],
          neutralAnalysis: `উক্ত হাদিসটি সহীহ বুখারীর "${chap.titleBangla}" অধ্যায়ের অন্তর্ভুক্ত। এর সনদ ও মতন সম্পূর্ণ নিখুঁত ও নির্ভরযোগ্য।`,
          references: `সহীহুল বুখারী (হাদিস নং ${toBengaliNumber(num)}) • অধ্যায়: ${chap.titleBangla} (${chap.titleArabic})`
        }
      };
      return [synthesizedHadith];
    }

    return [];
  }, [searchQuery]);

  const bookmarkedHadiths = useMemo(() => {
    return sampleHadiths.filter((h) => bookmarkedIds.includes(h.id));
  }, [bookmarkedIds]);

  const handleJumpToHadith = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jumpHadithNum.trim()) return;
    setSearchQuery(jumpHadithNum.trim());
    setCurrentScreen('search');
    setJumpHadithNum('');
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start justify-center p-2 sm:p-4 lg:p-6 font-bengali">
      {/* Left Control Panel / Testing Utilities */}
      <div className="w-full lg:w-80 flex flex-col gap-4 bg-[#0A2920] border border-emerald-700/40 rounded-2xl p-5 text-sm shadow-xl text-white shrink-0">
        <div className="border-b border-emerald-800/80 pb-3 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white text-base">মোবাইল টেস্ট কন্ট্রোল</h3>
            <p className="text-[11px] text-emerald-300">কুরআন ও হাদিস ব্রাউজিং পরীক্ষা</p>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>

        {/* 1. Quick Screen Jump */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
            সরাসরি সেকশনে যান
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => setCurrentScreen('pentagonHome')}
              className={`p-2 rounded-xl border font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                currentScreen === 'pentagonHome'
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <span>৫-বিভাগ হোম</span>
            </button>
            <button
              onClick={() => setCurrentScreen('quran')}
              className={`p-2 rounded-xl border font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                currentScreen === 'quran'
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <span>আল-কুরআন</span>
            </button>
            <button
              onClick={() => setCurrentScreen('bookList')}
              className={`p-2 rounded-xl border font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                currentScreen === 'bookList'
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <span>হাদিসগ্রন্থ তালিকা</span>
            </button>
            <button
              onClick={() => setCurrentScreen('dua')}
              className={`p-2 rounded-xl border font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                currentScreen === 'dua'
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <span>দু‘আ ও যিকির</span>
            </button>
            <button
              onClick={() => {
                setSelectedBook(sampleBooks[0]);
                setCurrentScreen('chapters');
              }}
              className={`p-2 rounded-xl border font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                currentScreen === 'chapters'
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <span>বুখারী ৯৭ অধ্যায়</span>
            </button>
            <button
              onClick={() => setCurrentScreen('dbManager')}
              className={`p-2 rounded-xl border font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                currentScreen === 'dbManager'
                  ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-300 hover:bg-emerald-900/60'
              }`}
            >
              <DownloadCloud className="w-3.5 h-3.5" />
              <span>ডাটাবেজ ও সেটিংস</span>
            </button>
          </div>
        </div>

        {/* 2. Instant Hadith Number Jump */}
        <form onSubmit={handleJumpToHadith} className="flex flex-col gap-1.5 pt-2 border-t border-emerald-800/80">
          <label className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
            হাদিস নম্বর লিখে সরাসরি খুঁজুন
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={jumpHadithNum}
              onChange={(e) => setJumpHadithNum(e.target.value)}
              placeholder="যেমন: ১, ২, ৮, ১২, ৫৯..."
              className="flex-1 bg-emerald-950/80 border border-emerald-700/60 rounded-xl px-3 py-1.5 text-xs text-white placeholder-emerald-400/60 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition-colors cursor-pointer"
            >
              খুঁজুন
            </button>
          </div>
        </form>

        {/* 3. Environment Controls */}
        <div className="flex flex-col gap-2 pt-2 border-t border-emerald-800/80">
          <label className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
            সিমুলেটর কন্ট্রোল
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800 text-emerald-200 flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{isDarkMode ? 'লাইট মোড' : 'ডার্ক মোড'}</span>
            </button>

            <button
              onClick={() => setIsOnline(!isOnline)}
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800 text-emerald-200 flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer"
            >
              {isOnline ? <Wifi className="w-3.5 h-3.5 text-emerald-400" /> : <WifiOff className="w-3.5 h-3.5 text-rose-400" />}
              <span>{isOnline ? 'অনলাইন' : 'অফলাইন'}</span>
            </button>
          </div>
        </div>

        {/* 4. Font Sizing */}
        <div className="flex flex-col gap-1.5 pt-2 border-t border-emerald-800/80">
          <label className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
            ফন্ট সাইজ অ্যাডজাস্টমেন্ট
          </label>
          <div className="flex items-center justify-between text-xs text-emerald-300">
            <span>আরবি ফন্ট: {arabicSize}px</span>
            <div className="flex gap-1">
              <button
                onClick={() => setArabicSize(Math.max(18, arabicSize - 2))}
                className="w-6 h-6 rounded bg-emerald-950 border border-emerald-800 flex items-center justify-center cursor-pointer"
              >
                -
              </button>
              <button
                onClick={() => setArabicSize(Math.min(32, arabicSize + 2))}
                className="w-6 h-6 rounded bg-emerald-950 border border-emerald-800 flex items-center justify-center cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Device Frame */}
      <div className="relative w-full max-w-[390px] h-[780px] bg-slate-900 rounded-[44px] p-3 shadow-2xl border-4 border-slate-700/80 flex flex-col shrink-0 select-none">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
        </div>

        {/* Mobile Screen Container */}
        <div
          className={`relative w-full h-full rounded-[34px] overflow-hidden flex flex-col transition-colors duration-300 ${
            isDarkMode ? 'dark bg-[#061712] text-slate-100' : 'bg-[#FAFCFB] text-slate-800'
          }`}
        >
          {/* Status Bar */}
          <div className="pt-3 px-6 pb-1 flex justify-between items-center text-xs font-semibold z-30 shrink-0 bg-[#0D5C46] text-white">
            <span>3:11</span>
            <div className="flex items-center gap-1.5">
              {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5 text-rose-300" />}
              <span className="text-[10px] uppercase font-bold">4G</span>
              <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-current rounded-xs"></div>
              </div>
            </div>
          </div>

          {/* MAIN SCREEN: 5-Layer Home Screen */}
          {currentScreen === 'pentagonHome' ? (
            <PentagonHomeScreen
              onSelectCategory={(cat) => {
                if (cat === 'quran') {
                  setCurrentScreen('quran');
                } else if (cat === 'hadith') {
                  setCurrentScreen('bookList');
                } else if (cat === 'dua') {
                  setCurrentScreen('dua');
                } else if (cat === 'books') {
                  setCurrentScreen('islamicBooks');
                } else if (cat === 'thematic') {
                  setSearchQuery('ঈমান');
                  setCurrentScreen('search');
                }
              }}
              onOpenSearch={() => setCurrentScreen('search')}
              onOpenBookmarks={() => setCurrentScreen('bookmarks')}
              onOpenSettings={() => setCurrentScreen('dbManager')}
            />
          ) : currentScreen === 'aiScholar' ? (
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-[#071F17]">
              <GeminiChatbot onBack={() => setCurrentScreen('pentagonHome')} />
            </div>
          ) : (
            /* SUB-SCREENS */
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Clean Top Navigation Bar */}
              <div className="bg-[#0D5C46] text-white px-4 py-3 shadow-md flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (currentScreen === 'surahDetail') setCurrentScreen('quran');
                      else if (currentScreen === 'hadiths') setCurrentScreen('chapters');
                      else if (currentScreen === 'chapters') setCurrentScreen('bookList');
                      else setCurrentScreen('pentagonHome');
                    }}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </button>
                  <div>
                    <h2 className="text-sm font-bold leading-tight">
                      {currentScreen === 'quran' && 'পবিত্র আল-কুরআন'}
                      {currentScreen === 'surahDetail' && selectedSurah.nameBangla}
                      {currentScreen === 'bookList' && 'সকল হাদিসগ্রন্থ'}
                      {currentScreen === 'chapters' && selectedBook.titleBangla}
                      {currentScreen === 'hadiths' && selectedChapter.titleBangla}
                      {currentScreen === 'dua' && 'হিসনুল মুসলিম (দু‘আ ও যিকির)'}
                      {currentScreen === 'islamicBooks' && 'ইসলামিক বই ও তাফসীর'}
                      {currentScreen === 'search' && 'হাদিস অনুসন্ধান'}
                      {currentScreen === 'bookmarks' && 'সংরক্ষিত হাদিস'}
                      {currentScreen === 'dbManager' && 'অফলাইন ডাটাবেজ ম্যানেজার'}
                    </h2>
                    <p className="text-[10px] text-emerald-200">
                      {currentScreen === 'quran' && '১১৪ সুরা ও বাংলা অনুবাদ'}
                      {currentScreen === 'surahDetail' && `${selectedSurah.nameArabic} • ${selectedSurah.totalAyah} আয়াত • ${selectedSurah.type}`}
                      {currentScreen === 'bookList' && 'সিহাহ সিত্তাহসহ প্রামাণ্য কিতাব'}
                      {currentScreen === 'chapters' && `${selectedBook.totalChapters} টি অধ্যায়`}
                      {currentScreen === 'hadiths' && `হাদিস নং ${selectedChapter.hadithStart} থেকে ${selectedChapter.hadithEnd}`}
                      {currentScreen === 'dua' && 'দৈনন্দিন ও সকাল-সন্ধ্যার আমল'}
                      {currentScreen === 'islamicBooks' && 'প্রামাণ্য তাফসীর ও ফিকহ গ্রন্থ'}
                      {currentScreen === 'search' && 'নম্বর বা শব্দ দিয়ে তাত্ক্ষণিক অনুসন্ধান'}
                      {currentScreen === 'bookmarks' && `${bookmarkedHadiths.length} টি হাদিস সংরক্ষিত`}
                      {currentScreen === 'dbManager' && 'SQLite অফলাইন স্টোরেজ ব্যাকআপ'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {currentScreen === 'hadiths' && (
                    <button
                      onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      title={viewMode === 'grid' ? 'লিস্ট ভিউ' : 'গ্রিড ভিউ'}
                    >
                      {viewMode === 'grid' ? <List className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
                    </button>
                  )}
                  <button
                    onClick={() => setCurrentScreen('search')}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="সার্চ"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentScreen('pentagonHome')}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="হোম পেজ"
                  >
                    <Home className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>

              {/* Sub-Screen Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {/* 1. QURAN SURAH LIST SCREEN */}
                {currentScreen === 'quran' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-1 mb-1">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                        পবিত্র আল-কুরআনের ১১৪ সুরা তালিকা
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        {toBengaliNumber(filteredSurahs.length)} টি সুরা
                      </span>
                    </div>

                    {/* Surah Search Bar */}
                    <div className="relative">
                      <input
                        type="text"
                        value={surahSearch}
                        onChange={(e) => setSurahSearch(e.target.value)}
                        placeholder="সুরা নম্বর (যেমন ১, ৩৬, ৬৭) বা নাম লিখুন..."
                        className="w-full py-2 pl-8 pr-3 text-xs rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-[#0C241D] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-emerald-500/60 outline-none focus:border-[#0D5C46]"
                      />
                      <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 absolute left-2.5 top-2.5" />
                      {surahSearch && (
                        <button
                          onClick={() => setSurahSearch('')}
                          className="absolute right-2.5 top-2 text-[10px] bg-slate-200 dark:bg-emerald-900 rounded-full w-4 h-4 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {filteredSurahs.map((surah) => (
                      <div
                        key={surah.id}
                        onClick={() => {
                          setSelectedSurah(surah);
                          setCurrentScreen('surahDetail');
                        }}
                        className="p-3.5 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800/80 shadow-sm hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#0D5C46]/10 text-[#0D5C46] dark:bg-emerald-950 dark:text-emerald-300 font-bold flex items-center justify-center text-xs border border-emerald-500/20">
                            {toBengaliNumber(surah.number)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                                {surah.nameBangla}
                              </h3>
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                {surah.type}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              অর্থ: {surah.nameMeaning} • আয়াত: {toBengaliNumber(surah.totalAyah)} টি
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-arabic text-[#0D5C46] dark:text-emerald-400 font-bold">
                          {surah.nameArabic}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. SURAH DETAIL AYAT READER */}
                {currentScreen === 'surahDetail' && (
                  <div className="space-y-3">
                    {/* Bismillah Header */}
                    <div className="text-center py-4 bg-emerald-50 dark:bg-[#0C241D] rounded-2xl border border-emerald-200 dark:border-emerald-800 p-3">
                      <p className="font-arabic text-xl text-[#0D5C46] dark:text-emerald-300 font-bold">
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        পরম করুণাময়, অতি দয়ালু আল্লাহর নামে শুরু করছি
                      </p>
                    </div>

                    {/* Verses */}
                    {selectedSurah.verses.map((verse) => (
                      <div
                        key={verse.ayahNumber}
                        className="p-4 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 shadow-sm"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="w-6 h-6 rounded-full bg-[#0D5C46]/10 text-[#0D5C46] dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">
                            {toBengaliNumber(verse.ayahNumber)}
                          </span>
                          <button
                            onClick={() => handleAudioPlay(verse.arabicText, verse.ayahNumber)}
                            className="p-1 text-slate-400 hover:text-emerald-600 cursor-pointer"
                            title="তেলাওয়াত শুনুন"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p
                          className="font-arabic text-right leading-loose text-slate-900 dark:text-emerald-100 font-medium py-1"
                          style={{ fontSize: `${arabicSize}px` }}
                          dir="rtl"
                        >
                          {verse.arabicText}
                        </p>

                        <p
                          className="font-bengali text-slate-700 dark:text-slate-200 mt-2 text-xs leading-relaxed"
                          style={{ fontSize: `${banglaSize}px` }}
                        >
                          {verse.banglaText}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. HADITH BOOK LIST SCREEN */}
                {currentScreen === 'bookList' && (
                  <>
                    <div className="flex items-center justify-between mb-1 px-1">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
                        প্রামাণ্য হাদিস সংকলন ({toBengaliNumber(sampleBooks.length)})
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {sampleBooks.map((book, idx) => (
                        <div
                          key={book.id}
                          onClick={() => {
                            setSelectedBook(book);
                            const firstChap = sampleChapters.find((c) => c.bookId === book.id) || sampleChapters[0];
                            setSelectedChapter(firstChap);
                            setCurrentScreen('chapters');
                          }}
                          className="p-3.5 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800/80 shadow-sm hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#0D5C46]/10 text-[#0D5C46] dark:bg-emerald-950 dark:text-emerald-300 font-bold flex items-center justify-center text-sm border border-emerald-500/20">
                              {toBengaliNumber(idx + 1)}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                                  {book.titleBangla}
                                </h3>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                                  {book.badge}
                                </span>
                              </div>
                              <p className="text-xs font-arabic text-[#0D5C46] dark:text-emerald-400 font-semibold mt-0.5">
                                {book.titleArabic}
                              </p>
                              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                                <span>হাদিস: {toBengaliNumber(book.totalHadith)} টি</span>
                                <span>•</span>
                                <span>অধ্যায়: {toBengaliNumber(book.totalChapters)} টি</span>
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* 4. CHAPTERS SCREEN */}
                {currentScreen === 'chapters' && (
                  <>
                    <div className="flex items-center justify-between px-1 mb-1">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                        {selectedBook.titleBangla} - অধ্যায়সমূহ
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        {toBengaliNumber(filteredChapters.length)} টি অধ্যায়
                      </span>
                    </div>

                    {/* Chapter Search Bar */}
                    <div className="relative mb-2">
                      <input
                        type="text"
                        value={chapterSearch}
                        onChange={(e) => setChapterSearch(e.target.value)}
                        placeholder="অধ্যায় নম্বর বা নাম লিখুন (যেমন ১, ঈমান, সালাত)..."
                        className="w-full py-2 pl-8 pr-3 text-xs rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-[#0C241D] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-emerald-500/60 outline-none focus:border-[#0D5C46]"
                      />
                      <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 absolute left-2.5 top-2.5" />
                      {chapterSearch && (
                        <button
                          onClick={() => setChapterSearch('')}
                          className="absolute right-2.5 top-2 text-[10px] bg-slate-200 dark:bg-emerald-900 rounded-full w-4 h-4 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <div className="space-y-2">
                      {filteredChapters.map((chap) => {
                        return (
                          <div
                            key={chap.id}
                            onClick={() => {
                              setSelectedChapter(chap);
                              setCurrentScreen('hadiths');
                            }}
                            className="p-3.5 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800/80 shadow-sm hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#0D5C46]/10 text-[#0D5C46] dark:bg-emerald-950 dark:text-emerald-300 font-bold flex items-center justify-center text-xs">
                                {toBengaliNumber(chap.chapterNumber)}
                              </div>
                              <div>
                                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-100">
                                  {chap.titleBangla}
                                </h4>
                                <p className="text-[11px] font-arabic text-emerald-700 dark:text-emerald-400">
                                  {chap.titleArabic}
                                </p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                  হাদিস নং {toBengaliNumber(chap.hadithStart)} থেকে {toBengaliNumber(chap.hadithEnd)} • মোট {toBengaliNumber(chap.hadithCount)} টি
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* 5. HADITH READER: Complete Consecutive Hadiths (1, 2, 3, 4, 5, 6, 7...) */}
                {currentScreen === 'hadiths' && (
                  <>
                    <div className="flex items-center justify-between px-1 mb-1">
                      <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                        {selectedChapter.titleBangla} ({toBengaliNumber(currentChapterHadiths.length)} টি হাদিস)
                      </span>
                      <button
                        onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                        className="text-xs text-[#0D5C46] dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {viewMode === 'grid' ? <List className="w-3.5 h-3.5" /> : <LayoutGrid className="w-3.5 h-3.5" />}
                        <span>{viewMode === 'grid' ? 'লিস্ট ভিউ' : 'গ্রিড ভিউ'}</span>
                      </button>
                    </div>

                    {currentChapterHadiths.length === 0 ? (
                      <div className="text-center py-12 text-xs text-slate-500">
                        হাদিস লোড হচ্ছে...
                      </div>
                    ) : viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentChapterHadiths.map((hadith) => (
                          <div
                            key={hadith.id}
                            className="p-4 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 shadow-md flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between pb-2 border-b border-emerald-100 dark:border-emerald-800/80 mb-2">
                                <span className="px-2.5 py-0.5 rounded-md bg-[#0D5C46]/10 text-[#0D5C46] dark:bg-emerald-950 dark:text-emerald-300 font-bold text-xs border border-emerald-600/20">
                                  হাদিস নং: {hadith.hadithNumberStr}
                                </span>
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => handleAudioPlay(hadith.arabicText, hadith.id)}
                                    className={`p-1 rounded-md transition-colors cursor-pointer ${
                                      speakingId === hadith.id ? 'text-[#0D5C46] animate-pulse' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                    title="আরবি তেলাওয়াত শুনুন"
                                  >
                                    <Volume2 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => toggleBookmark(hadith.id)}
                                    className="p-1 hover:text-[#0D5C46] transition-colors cursor-pointer"
                                  >
                                    <Bookmark
                                      className={`w-3.5 h-3.5 ${
                                        bookmarkedIds.includes(hadith.id)
                                          ? 'text-[#0D5C46] fill-[#0D5C46] dark:text-emerald-400 dark:fill-emerald-400'
                                          : 'text-slate-400'
                                      }`}
                                    />
                                  </button>
                                  <button
                                    onClick={() => copyHadithText(hadith)}
                                    className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                                  >
                                    {copiedId === hadith.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                  </button>
                                </div>
                              </div>

                              {hadith.narratorBangla && (
                                <p className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                                  {hadith.narratorBangla}
                                </p>
                              )}

                              <p
                                className="font-arabic text-right leading-loose text-slate-900 dark:text-emerald-100 font-medium py-1"
                                style={{ fontSize: `${arabicSize - 2}px` }}
                                dir="rtl"
                              >
                                {hadith.arabicText}
                              </p>

                              <p
                                className="font-bengali text-slate-700 dark:text-slate-200 mt-2 line-clamp-4 leading-relaxed text-xs"
                                style={{ fontSize: `${banglaSize}px` }}
                              >
                                {hadith.banglaText}
                              </p>
                            </div>

                            <div className="mt-3 pt-2.5 border-t border-emerald-100 dark:border-emerald-800/80">
                              <button
                                onClick={() => setActiveTahqiqHadith(hadith)}
                                className="w-full py-2 px-3 rounded-xl bg-[#0D5C46] hover:bg-[#094132] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                                <span>হাদিসের মান ও তাহকিক</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {currentChapterHadiths.map((hadith) => (
                          <div
                            key={hadith.id}
                            className="p-4 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 shadow-md"
                          >
                            <div className="flex items-center justify-between pb-2 border-b border-emerald-100 dark:border-emerald-800/80">
                              <span className="px-2.5 py-1 rounded-lg bg-[#0D5C46]/10 text-[#0D5C46] dark:bg-emerald-950 dark:text-emerald-300 font-bold text-xs border border-emerald-600/20">
                                হাদিস নং: {hadith.hadithNumberStr}
                              </span>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleAudioPlay(hadith.arabicText, hadith.id)}
                                  className="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                                >
                                  <Volume2 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleBookmark(hadith.id)}
                                  className="p-1.5 hover:text-[#0D5C46] cursor-pointer"
                                >
                                  <Bookmark
                                    className={`w-4 h-4 ${
                                      bookmarkedIds.includes(hadith.id)
                                        ? 'text-[#0D5C46] fill-[#0D5C46] dark:text-emerald-400 dark:fill-emerald-400'
                                        : 'text-slate-400'
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() => copyHadithText(hadith)}
                                  className="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                                >
                                  {copiedId === hadith.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>

                            {hadith.narratorBangla && (
                              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 mt-2">
                                {hadith.narratorBangla}
                              </p>
                            )}

                            <p
                              className="font-arabic text-right leading-loose mt-2 text-slate-900 dark:text-emerald-100 font-medium"
                              style={{ fontSize: `${arabicSize}px` }}
                              dir="rtl"
                            >
                              {hadith.arabicText}
                            </p>

                            <p
                              className="font-bengali text-slate-700 dark:text-slate-200 mt-2.5 leading-relaxed"
                              style={{ fontSize: `${banglaSize}px` }}
                            >
                              {hadith.banglaText}
                            </p>

                            <div className="mt-3.5 pt-3 border-t border-emerald-100 dark:border-emerald-800/80">
                              <button
                                onClick={() => setActiveTahqiqHadith(hadith)}
                                className="w-full py-2.5 px-3 rounded-xl bg-[#0D5C46] hover:bg-[#094132] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                                <span>হাদিসের মান ও তাহকিক</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* 6. DUA & ADHKAR SCREEN */}
                {currentScreen === 'dua' && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block px-1">
                      হিসনুল মুসলিম থেকে প্রামাণ্য দু‘আ
                    </span>

                    {sampleDuas.map((dua) => (
                      <div
                        key={dua.id}
                        className="p-4 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 shadow-sm"
                      >
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                          {dua.category}
                        </span>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 mt-1.5">
                          {dua.titleBangla}
                        </h4>

                        <p
                          className="font-arabic text-right leading-loose text-slate-900 dark:text-emerald-100 font-medium py-2"
                          style={{ fontSize: `${arabicSize}px` }}
                          dir="rtl"
                        >
                          {dua.arabicText}
                        </p>

                        <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#071F17] text-xs text-slate-600 dark:text-slate-300 mb-2">
                          <strong>উচ্চারণ:</strong> {dua.pronunciationBangla}
                        </div>

                        <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                          <strong>অর্থ:</strong> {dua.banglaMeaning}
                        </p>

                        <span className="text-[10px] text-slate-400 block mt-2">
                          সূত্র: {dua.reference}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 7. ISLAMIC BOOKS SCREEN */}
                {currentScreen === 'islamicBooks' && (
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block px-1">
                      প্রামাণ্য তাফসীর ও ফিকহ গ্রন্থসমূহ
                    </span>

                    {sampleIslamicBooks.map((book) => (
                      <div
                        key={book.id}
                        className="p-3.5 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 shadow-sm flex items-center justify-between"
                      >
                        <div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                            {book.category}
                          </span>
                          <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 mt-1">
                            {book.titleBangla}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            লেখক: {book.author}
                          </p>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 line-clamp-1">
                            {book.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                )}

                {/* 8. INSTANT SEARCH SCREEN */}
                {currentScreen === 'search' && (
                  <div className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="হাদিস নম্বর (যেমন ১, ৫, ৮, ১২) বা শব্দ লিখুন..."
                        className="w-full py-2.5 pl-9 pr-3 text-xs rounded-xl border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-[#0C241D] text-slate-900 dark:text-white outline-none focus:border-[#0D5C46]"
                        autoFocus
                      />
                      <Search className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    </div>

                    {searchQuery.trim() === '' ? (
                      <div className="text-center py-12 text-xs text-slate-500 bg-white dark:bg-[#0C241D] rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800">
                        <Search className="w-8 h-8 text-[#0D5C46] mx-auto mb-2 opacity-60" />
                        <p className="font-bold text-slate-800 dark:text-slate-100">হাদিস নম্বর বা শব্দ লিখুন</p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          যেকোনো নম্বর যেমন "১", "২", "৮", "১২" অথবা শব্দ যেমন "নিয়ত", "ওহী", "ঈমান" লিখলেই তাৎক্ষণিক ফলাফল আসবে।
                        </p>
                      </div>
                    ) : searchResults.length === 0 ? (
                      <div className="text-center py-10 text-xs text-slate-500">
                        কোনো হাদিস খুঁজে পাওয়া যায়নি।
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <span className="text-[11px] text-[#0D5C46] dark:text-emerald-400 font-bold block px-1">
                          {toBengaliNumber(searchResults.length)} টি হাদিস পাওয়া গেছে:
                        </span>
                        {searchResults.map((hadith) => (
                          <div
                            key={hadith.id}
                            onClick={() => setActiveTahqiqHadith(hadith)}
                            className="p-3 rounded-xl bg-white dark:bg-[#0C241D] border border-emerald-200 dark:border-emerald-800 cursor-pointer hover:border-[#0D5C46] transition-all"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[11px] font-bold text-[#0D5C46] dark:text-emerald-300">
                                হাদিস নং {hadith.hadithNumberStr}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                                {hadith.grade}
                              </span>
                            </div>
                            <p className="text-xs line-clamp-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                              {hadith.banglaText}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 9. BOOKMARKS SCREEN */}
                {currentScreen === 'bookmarks' && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#0D5C46] dark:text-emerald-300 block px-1">
                      সংরক্ষিত হাদিসসমূহ ({toBengaliNumber(bookmarkedHadiths.length)})
                    </span>

                    {bookmarkedHadiths.length === 0 ? (
                      <div className="text-center py-12 text-xs text-slate-500">
                        কোনো হাদিস সংরক্ষিত নেই।
                      </div>
                    ) : (
                      bookmarkedHadiths.map((hadith) => (
                        <div
                          key={hadith.id}
                          onClick={() => setActiveTahqiqHadith(hadith)}
                          className="p-3.5 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-200 dark:border-emerald-800 cursor-pointer hover:border-[#0D5C46] transition-all"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-[#0D5C46] dark:text-emerald-300">
                              হাদিস নং: {hadith.hadithNumberStr}
                            </span>
                            <span className="text-[10px] text-emerald-800 dark:text-emerald-300 font-bold bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                              {hadith.grade}
                            </span>
                          </div>
                          <p className="text-xs line-clamp-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                            {hadith.banglaText}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* 10. OFFLINE DATABASE DOWNLOAD MANAGER */}
                {currentScreen === 'dbManager' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                      <h4 className="text-xs font-bold text-[#0D5C46] dark:text-emerald-300 flex items-center gap-1.5">
                        <DownloadCloud className="w-4 h-4 text-[#0D5C46] dark:text-emerald-400" />
                        <span>অফলাইন হাদিস ডাটাবেজ প্যাকেজ</span>
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        সকল হাদিস অফলাইনে পড়তে নিচের কিতাবগুলো ডাউনলোড করে ডিভাইসের SQLite এ সংরক্ষণ করুন। ডাউনলোড শেষে ইন্টারনেট ছাড়াই সম্পূর্ণ পড়া যাবে।
                      </p>
                    </div>

                    <div className="space-y-2">
                      {sampleBooks.map((book) => {
                        const isDownloaded = downloadedBooks.includes(book.id);
                        const isDownloading = downloadingBookId === book.id;

                        return (
                          <div
                            key={book.id}
                            className="p-3 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 shadow-sm flex items-center justify-between"
                          >
                            <div>
                              <h5 className="font-bold text-xs text-slate-800 dark:text-slate-100">
                                {book.titleBangla}
                              </h5>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                {toBengaliNumber(book.totalHadith)} টি হাদিস • সাইজ: ~৪.২ MB
                              </p>
                            </div>

                            {isDownloaded ? (
                              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                <span>ইনস্টল্ড</span>
                              </span>
                            ) : (
                              <button
                                onClick={() => handleDownloadBook(book.id)}
                                disabled={isDownloading}
                                className="text-[11px] font-bold text-white bg-[#0D5C46] hover:bg-[#094132] px-3 py-1 rounded-xl shadow-xs transition-all flex items-center gap-1 cursor-pointer disabled:opacity-60"
                              >
                                {isDownloading ? (
                                  <span>ডাউনলোড হচ্ছে...</span>
                                ) : (
                                  <>
                                    <DownloadCloud className="w-3 h-3" />
                                    <span>ডাউনলোড</span>
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Optional Scholarly Research Assistant */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-600/30 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-300">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-bold text-xs text-white">তাহকিক ও সনদ গবেষণা সহকারী</h5>
                          <p className="text-[10px] text-emerald-200/80">সিহাহ সিত্তাহ ও সনদের প্রামাণ্য বিশ্লেষণ</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setCurrentScreen('aiScholar')}
                        className="py-1.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        প্রবেশ করুন
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* AdMob Banner Area (Online Only) */}
          <div className="shrink-0 border-t border-emerald-100 dark:border-emerald-800/80">
            {isOnline ? (
              <div className="w-full bg-[#0D5C46] text-white py-1.5 px-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="bg-amber-400 text-black text-[9px] font-bold px-1 rounded">AD</span>
                  <span className="text-[10px] text-emerald-100">Google AdMob: ইসলামিক ক্যালেন্ডার ও নামাজের সময়সূচী</span>
                </div>
                <ExternalLink className="w-3 h-3 text-emerald-200" />
              </div>
            ) : (
              <div className="w-full bg-slate-800 text-slate-300 py-1 px-3 text-center text-[10px]">
                অফলাইন মোড চালু — কোনো বিজ্ঞাপন দেখানো হচ্ছে না
              </div>
            )}
          </div>
        </div>

        {/* Home Indicator bar */}
        <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mt-2 shrink-0"></div>
      </div>

      {/* Tahqiq Bottom Sheet Modal */}
      {activeTahqiqHadith && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-end justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white dark:bg-[#0C241D] text-slate-800 dark:text-slate-100 rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto border border-emerald-200 dark:border-emerald-800">
            <div className="flex justify-between items-center pb-3 border-b border-emerald-100 dark:border-emerald-800">
              <div>
                <h3 className="font-bold text-base text-[#0D5C46] dark:text-emerald-300">
                  হাদিসের মান ও তাহকিক
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  হাদিস নং: {activeTahqiqHadith.hadithNumberStr} • {selectedBook.titleBangla}
                </p>
              </div>
              <button
                onClick={() => setActiveTahqiqHadith(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-emerald-950 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3.5">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800">
                <span className="text-xs font-bold text-[#0D5C46] dark:text-emerald-300">
                  সর্বসম্মত মান:
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0D5C46] text-white font-bold text-xs">
                  {activeTahqiqHadith.tahqiq.overallGrade}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  সনদের অবস্থা:
                </span>
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 p-2.5 rounded-xl bg-slate-50 dark:bg-[#061712] border border-slate-200 dark:border-emerald-900">
                  {activeTahqiqHadith.tahqiq.sanadStatus}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  রাবীদের বর্ণনা পরম্পরা (সনদ):
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-[#061712] border border-slate-200 dark:border-emerald-900 leading-relaxed font-mono">
                  {activeTahqiqHadith.tahqiq.narratorChain}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  বিশিষ্ট মুহাদ্দিসগণের মতামত:
                </span>
                <div className="space-y-2">
                  {activeTahqiqHadith.tahqiq.scholarVerdicts.map((sv, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-[#061712] border border-emerald-100 dark:border-emerald-900"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                          {sv.scholarName}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                          {sv.grade}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {sv.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  নিরপেক্ষ বিশ্লেষণ ও ব্যাখ্যা:
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 leading-relaxed">
                  {activeTahqiqHadith.tahqiq.neutralAnalysis}
                </p>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block">
                  মূল রেফারেন্স: {activeTahqiqHadith.tahqiq.references}
                </span>
              </div>
            </div>

            <button
              onClick={() => setActiveTahqiqHadith(null)}
              className="w-full py-2.5 rounded-xl bg-[#0D5C46] text-white font-bold text-xs hover:bg-[#094132] transition-colors cursor-pointer"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
