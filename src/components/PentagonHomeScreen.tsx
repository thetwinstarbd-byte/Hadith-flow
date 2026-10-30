import React from 'react';
import {
  BookOpen,
  BookMarked,
  Heart,
  Compass,
  Sparkles,
  ChevronRight,
  Menu,
  Settings,
  Home,
  Search,
  Bookmark,
  Bot
} from 'lucide-react';

interface PentagonHomeScreenProps {
  onSelectCategory: (categoryKey: 'quran' | 'hadith' | 'dua' | 'books' | 'thematic') => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenSettings?: () => void;
}

export const PentagonHomeScreen: React.FC<PentagonHomeScreenProps> = ({
  onSelectCategory,
  onOpenSearch,
  onOpenBookmarks,
  onOpenSettings,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-[#FAFCFB] dark:bg-[#061712] text-slate-800 dark:text-slate-100 font-bengali overflow-hidden select-none">
      {/* Top Header Bar matching user's reference */}
      <div className="bg-[#0D5C46] dark:bg-[#06382B] text-white px-4 pt-3 pb-3 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-full bg-white/10">
            <Menu className="w-4 h-4 text-emerald-200" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold tracking-wide">ইসলামিক লাইব্রেরি</h1>
            <p className="text-[10px] text-emerald-200">কুরআন, হাদিস ও আমল সমগ্র</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenSearch}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="অনুসন্ধান"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenBookmarks}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="সংরক্ষিত"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Center Area: Compact, Refined 5-Layer Islamic Geometric Ring */}
      <div className="flex-1 flex flex-col items-center justify-center p-3 relative overflow-hidden">
        {/* Subtle geometric ring */}
        <div className="relative w-60 h-60 sm:w-64 sm:h-64 flex items-center justify-center">
          {/* Decorative concentric circles */}
          <div className="absolute inset-2 rounded-full border border-emerald-500/20 dark:border-emerald-500/25 pointer-events-none"></div>
          <div className="absolute inset-8 rounded-full border border-dashed border-emerald-600/20 pointer-events-none"></div>

          {/* Center Center Hub */}
          <div className="absolute z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-[#083D2F] via-[#0D5C46] to-[#127258] text-white shadow-xl border-2 border-white dark:border-[#061712] flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-bold text-amber-300">নূর</span>
            <span className="text-[10px] font-bold text-white tracking-tight">ইসলাম</span>
          </div>

          {/* 1. TOP: আল-কুরআন */}
          <button
            onClick={() => onSelectCategory('quran')}
            className="absolute top-1 transform hover:scale-105 active:scale-95 transition-all group z-20 flex flex-col items-center cursor-pointer"
            title="আল-কুরআন পড়ুন"
          >
            <div
              className="w-18 h-18 bg-gradient-to-b from-[#0D5C46] to-[#073D2F] text-white shadow-md rounded-2xl flex flex-col items-center justify-center p-1 text-center border-2 border-emerald-400/30 group-hover:border-amber-300"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-300 mb-0.5 mt-0.5" />
              <span className="text-[10px] font-bold text-white leading-tight">আল-কুরআন</span>
              <span className="text-[8px] text-emerald-200 mt-0.5">১১৪ সুরা</span>
            </div>
          </button>

          {/* 2. TOP-RIGHT: হাদিসগ্রন্থ */}
          <button
            onClick={() => onSelectCategory('hadith')}
            className="absolute right-1 top-12 transform hover:scale-105 active:scale-95 transition-all group z-20 flex flex-col items-center cursor-pointer"
            title="হাদিসগ্রন্থ পড়ুন"
          >
            <div
              className="w-18 h-18 bg-gradient-to-b from-[#0D5C46] to-[#073D2F] text-white shadow-md rounded-2xl flex flex-col items-center justify-center p-1 text-center border-2 border-amber-400/80 group-hover:border-amber-300 ring-2 ring-amber-400/20"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
            >
              <BookMarked className="w-3.5 h-3.5 text-amber-300 mb-0.5 mt-0.5" />
              <span className="text-[10px] font-bold text-amber-200 leading-tight">হাদিসগ্রন্থ</span>
              <span className="text-[8px] text-amber-300 mt-0.5">সিহাহ সিত্তাহ</span>
            </div>
          </button>

          {/* 3. BOTTOM-RIGHT: দু‘আ ও যিকির */}
          <button
            onClick={() => onSelectCategory('dua')}
            className="absolute right-4 bottom-2 transform hover:scale-105 active:scale-95 transition-all group z-20 flex flex-col items-center cursor-pointer"
            title="দু‘আ ও যিকির"
          >
            <div
              className="w-18 h-18 bg-gradient-to-b from-[#0D5C46] to-[#073D2F] text-white shadow-md rounded-2xl flex flex-col items-center justify-center p-1 text-center border-2 border-emerald-400/30 group-hover:border-amber-300"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
            >
              <Heart className="w-3.5 h-3.5 text-emerald-200 mb-0.5 mt-0.5" />
              <span className="text-[9.5px] font-bold text-white leading-tight">দু‘আ ও যিকির</span>
              <span className="text-[8px] text-emerald-200 mt-0.5">হিসনুল মুসলিম</span>
            </div>
          </button>

          {/* 4. BOTTOM-LEFT: ইসলামিক বইসমূহ */}
          <button
            onClick={() => onSelectCategory('books')}
            className="absolute left-4 bottom-2 transform hover:scale-105 active:scale-95 transition-all group z-20 flex flex-col items-center cursor-pointer"
            title="ইসলামিক বইসমূহ"
          >
            <div
              className="w-18 h-18 bg-gradient-to-b from-[#0D5C46] to-[#073D2F] text-white shadow-md rounded-2xl flex flex-col items-center justify-center p-1 text-center border-2 border-emerald-400/30 group-hover:border-amber-300"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-200 mb-0.5 mt-0.5" />
              <span className="text-[9.5px] font-bold text-white leading-tight">ইসলামিক বই</span>
              <span className="text-[8px] text-emerald-200 mt-0.5">তাফসীর ও ফিকহ</span>
            </div>
          </button>

          {/* 5. TOP-LEFT: বিষয়ভিত্তিক হাদিস */}
          <button
            onClick={() => onSelectCategory('thematic')}
            className="absolute left-1 top-12 transform hover:scale-105 active:scale-95 transition-all group z-20 flex flex-col items-center cursor-pointer"
            title="বিষয়ভিত্তিক হাদিস"
          >
            <div
              className="w-18 h-18 bg-gradient-to-b from-[#0D5C46] to-[#073D2F] text-white shadow-md rounded-2xl flex flex-col items-center justify-center p-1 text-center border-2 border-emerald-400/30 group-hover:border-amber-300"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200 mb-0.5 mt-0.5" />
              <span className="text-[9.5px] font-bold text-white leading-tight">বিষয়ভিত্তিক</span>
              <span className="text-[8px] text-emerald-200 mt-0.5">আমল ও সনদ</span>
            </div>
          </button>
        </div>

        {/* Quick Launch Direct Buttons */}
        <div className="mt-3 w-full max-w-xs flex gap-2">
          <button
            onClick={() => onSelectCategory('quran')}
            className="flex-1 py-1.5 px-3 rounded-xl bg-white dark:bg-[#0C241D] border border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-emerald-100 flex items-center justify-between text-xs font-bold shadow-xs hover:border-[#0D5C46] transition-all cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#0D5C46] dark:text-emerald-400" />
              <span>কুরআন শরীফ</span>
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </button>

          <button
            onClick={() => onSelectCategory('hadith')}
            className="flex-1 py-1.5 px-3 rounded-xl bg-[#0D5C46] text-white flex items-center justify-between text-xs font-bold shadow-xs hover:bg-[#094132] transition-all cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5 text-amber-300" />
              <span>হাদিস লাইব্রেরি</span>
            </span>
            <ChevronRight className="w-3 h-3 text-emerald-200" />
          </button>
        </div>
      </div>

      {/* Screenshot matching bottom curved navigation bar with center Home */}
      <div className="relative bg-[#0D5C46] dark:bg-[#06382B] text-white pt-2.5 pb-3 px-6 shadow-2xl flex justify-between items-center rounded-t-3xl border-t border-emerald-700/50">
        {/* Floating Center Home Button */}
        <div className="absolute left-1/2 -top-5 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#084232] text-white border-[3px] border-[#FAFCFB] dark:border-[#061712] flex items-center justify-center shadow-lg cursor-pointer">
            <Home className="w-5 h-5 text-amber-300" />
          </div>
        </div>

        <button
          onClick={() => onSelectCategory('hadith')}
          className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-100 hover:text-white transition-colors cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span>গ্রন্থসমূহ</span>
        </button>

        <button
          onClick={onOpenBookmarks}
          className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-100 mr-5 hover:text-white transition-colors cursor-pointer"
        >
          <Bookmark className="w-4 h-4" />
          <span>সংরক্ষিত</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-100 ml-5 hover:text-white transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>খুঁজুন</span>
        </button>

        <button
          onClick={onOpenSettings}
          className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-100 hover:text-white transition-colors cursor-pointer"
          title="সেটিংস"
        >
          <Settings className="w-4 h-4" />
          <span>সেটিংস</span>
        </button>
      </div>
    </div>
  );
};
