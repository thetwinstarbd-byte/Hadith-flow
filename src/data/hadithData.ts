// Expanded Hadith Database with Sequential Continuity and Real Text
export interface ScholarVerdictItem {
  scholarName: string;
  grade: 'সহীহ' | 'হাসান' | 'যইফ' | 'হাসান সহীহ';
  comment: string;
}

export interface TahqiqItem {
  id: number;
  hadithId: number;
  overallGrade: string;
  gradeBadgeType: 'sahih' | 'hasan' | 'daif';
  sanadStatus: string;
  narratorChain: string;
  scholarVerdicts: ScholarVerdictItem[];
  neutralAnalysis: string;
  references: string;
}

export interface HadithItem {
  id: number;
  bookId: number;
  chapterId: number;
  hadithNumber: number;
  hadithNumberStr: string;
  narratorBangla: string;
  narratorArabic: string;
  arabicText: string;
  banglaText: string;
  englishText: string;
  grade: string;
  isBookmarked: boolean;
  themeCategory?: string;
  tahqiq: TahqiqItem;
}

export interface ChapterItem {
  id: number;
  bookId: number;
  chapterNumber: number;
  titleBangla: string;
  titleArabic: string;
  hadithStart: number;
  hadithEnd: number;
  hadithCount: number;
}

export interface BookItem {
  id: number;
  titleBangla: string;
  titleArabic: string;
  titleEnglish: string;
  author: string;
  totalHadith: number;
  totalChapters: number;
  description: string;
  badge: string;
}

export const sampleBooks: BookItem[] = [
  {
    id: 1,
    titleBangla: 'সহীহুল বুখারী',
    titleArabic: 'صحيح البخاري',
    titleEnglish: 'Sahih al-Bukhari',
    author: 'ইমাম মুহাম্মদ ইবনে ইসমাইল আল-বুখারী (রহ.)',
    totalHadith: 7563,
    totalChapters: 97,
    description: 'আল-কুরআনের পর উম্মাহর সর্বাধিক বিশুদ্ধ ও প্রামাণ্য গ্রন্থ।',
    badge: 'সর্বোচ্চ বিশুদ্ধ',
  },
  {
    id: 2,
    titleBangla: 'সহীহ মুসলিম',
    titleArabic: 'صحيح مسلم',
    titleEnglish: 'Sahih Muslim',
    author: 'ইমাম মুসলিম ইবনুল হাজ্জাজ আন-নিশাপুরী (রহ.)',
    totalHadith: 7500,
    totalChapters: 56,
    description: 'সনদ ও চমৎকার বিন্যাসে সুসংবদ্ধ প্রামাণ্য সংকলন।',
    badge: 'সহীহাইন',
  },
  {
    id: 3,
    titleBangla: 'জামে আত-তিরমিজী',
    titleArabic: 'جامع الترمذي',
    titleEnglish: 'Jami at-Tirmidhi',
    author: 'ইমাম আবু ঈসা মুহাম্মদ আত-তিরমিজী (রহ.)',
    totalHadith: 3956,
    totalChapters: 46,
    description: 'হাদিসের মান নির্ধারণ ও ফিকহি মতামতে সমৃদ্ধ।',
    badge: 'সুনান গ্রন্থ',
  },
  {
    id: 4,
    titleBangla: 'সুনানে আবু দাউদ',
    titleArabic: 'سنن أبي داود',
    titleEnglish: 'Sunan Abi Dawud',
    author: 'ইমাম সুলায়মান ইবনুল আশআছ আস-সিজিস্তানি (রহ.)',
    totalHadith: 5274,
    totalChapters: 43,
    description: 'শরিয়তের আহকাম ও ব্যবহারিক ফিকহি হাদিসসমূহের প্রধান উৎস।',
    badge: 'আহকামের কিতাব',
  },
  {
    id: 5,
    titleBangla: 'সুনানে নাসায়ী',
    titleArabic: 'سنن النسائي',
    titleEnglish: "Sunan an-Nasa'i",
    author: 'ইমাম আহমদ ইবনে শুআইব আন-নাসায়ী (রহ.)',
    totalHadith: 5761,
    totalChapters: 51,
    description: 'সনদ ও রাবীদের সূক্ষ্ম বিশ্লেষণ এবং কঠোর শর্তাবলীতে সম্পাদিত।',
    badge: 'সূক্ষ্ম তাহকিক',
  },
  {
    id: 6,
    titleBangla: 'সুনানে ইবনে মাজাহ',
    titleArabic: 'سنن ابن ماجه',
    titleEnglish: 'Sunan Ibn Majah',
    author: 'ইমাম মুহাম্মদ ইবনে ইয়াজিদ ইবনে মাজাহ (রহ.)',
    totalHadith: 4341,
    totalChapters: 37,
    description: 'চমৎকার তারতীব ও অধ্যায়ভিত্তিক সংকলিত সিহাহ সিত্তাহর ষষ্ঠ স্তম্ভ।',
    badge: 'সুনান গ্রন্থ',
  },
];

import { allSampleChapters } from './chaptersData';

export const sampleChapters: ChapterItem[] = allSampleChapters;

export function toBengaliNumber(num: number): string {
  const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(d => digits[parseInt(d, 10)] || d).join('');
}

import { allContinuousHadiths } from './allHadithsData';

export const sampleHadiths: HadithItem[] = allContinuousHadiths;
