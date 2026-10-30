export interface VerseItem {
  ayahNumber: number;
  arabicText: string;
  banglaText: string;
}

export interface SurahItem {
  id: number;
  number: number;
  nameArabic: string;
  nameBangla: string;
  nameMeaning: string;
  totalAyah: number;
  type: 'মাক্কী' | 'মাদানী';
  verses: VerseItem[];
}

// Complete 114 Surahs of the Holy Quran
export const sampleSurahs: SurahItem[] = [
  { id: 1, number: 1, nameArabic: 'الفاتحة', nameBangla: 'সূরা আল-ফাতিহা', nameMeaning: 'সূচনা', totalAyah: 7, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', banglaText: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।' },
    { ayahNumber: 2, arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', banglaText: 'সমস্ত প্রশংসা বিশ্বজগতের প্রতিপালক আল্লাহর জন্য।' },
    { ayahNumber: 3, arabicText: 'الرَّحْمَٰنِ الرَّحِيمِ', banglaText: 'যিনি পরম করুণাময় ও অতি দয়ালু।' },
    { ayahNumber: 4, arabicText: 'مَالِكِ يَوْمِ الدِّينِ', banglaText: 'যিনি প্রতিফল দিবসের একমাত্র মালিক।' },
    { ayahNumber: 5, arabicText: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', banglaText: 'আমরা কেবল আপনারই ইবাদত করি এবং কেবলমাত্র আপনারই কাছে সাহায্য প্রার্থনা করি।' },
    { ayahNumber: 6, arabicText: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', banglaText: 'আমাদের সরল-সঠিক পথ প্রদর্শন করুন।' },
    { ayahNumber: 7, arabicText: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', banglaText: 'তাদের পথ যাদের আপনি অনুগ্রহ করেছেন; তাদের পথ নয় যারা ক্রোধের শিকার এবং যারা পথভ্রষ্ট।' }
  ]},
  { id: 2, number: 2, nameArabic: 'البقرة', nameBangla: 'সূরা আল-বাকারা', nameMeaning: 'বকনা বাছুর', totalAyah: 286, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'الم', banglaText: 'আলিফ-লাম-মীম।' },
    { ayahNumber: 2, arabicText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ', banglaText: 'এ সেই কিতাব যাতে কোনো সন্দেহ নেই, মুত্তাকীদের জন্য হিদায়াত।' },
    { ayahNumber: 255, arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', banglaText: 'আল্লাহ! তিনি ছাড়া সত্য কোনো উপাস্য নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক... (আয়াতুল কুরসী)' }
  ]},
  { id: 3, number: 3, nameArabic: 'آل عمران', nameBangla: 'সূরা আলে-ইমরান', nameMeaning: 'ইমরানের পরিবার', totalAyah: 200, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'الم', banglaText: 'আলিফ-লাম-মীম।' },
    { ayahNumber: 2, arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', banglaText: 'আল্লাহ, তিনি ব্যতীত কোনো সত্য উপাস্য নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক।' }
  ]},
  { id: 4, number: 4, nameArabic: 'النساء', nameBangla: 'সূরা আন-নিসা', nameMeaning: 'নারীজাতি', totalAyah: 176, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ...', banglaText: 'হে মানবসমাজ! তোমরা তোমাদের রবকে ভয় কর, যিনি তোমাদেরকে এক ব্যক্তি থেকে সৃষ্টি করেছেন...' }
  ]},
  { id: 5, number: 5, nameArabic: 'المائدة', nameBangla: 'সূরা আল-মায়িদাহ', nameMeaning: 'খাদ্যপূর্ণ খাঞ্চা', totalAyah: 120, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ...', banglaText: 'হে মুমিনগণ! তোমরা প্রতিশ্রুতিসমূহ পূর্ণ কর...' }
  ]},
  { id: 6, number: 6, nameArabic: 'الأنعام', nameBangla: 'সূরা আল-আনআম', nameMeaning: 'গৃহপালিত পশু', totalAyah: 165, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ...', banglaText: 'সকল প্রশংসা আল্লাহর জন্য, যিনি আসমান ও জমিন সৃষ্টি করেছেন এবং অন্ধকার ও আলো তৈরি করেছেন...' }
  ]},
  { id: 7, number: 7, nameArabic: 'الأعراف', nameBangla: 'সূরা আল-আরাফ', nameMeaning: 'উঁচু স্থানসমূহ', totalAyah: 206, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'المص', banglaText: 'আলিফ-লাম-মীম-সোয়াদ।' }
  ]},
  { id: 8, number: 8, nameArabic: 'الأنفال', nameBangla: 'সূরা আল-আনফাল', nameMeaning: 'যুদ্ধলব্ধ সম্পদ', totalAyah: 75, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يَسْأَلُونَكَ عَنِ الْأَنفَالِ ۖ قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ...', banglaText: 'তারা আপনাকে যুদ্ধলব্ধ সম্পদ সম্পর্কে জিজ্ঞেস করে; বলুন: তা আল্লাহ ও তাঁর রাসূলের...' }
  ]},
  { id: 9, number: 9, nameArabic: 'التوبة', nameBangla: 'সূরা আত-তাওবাহ', nameMeaning: 'অনুশোচনা ও ক্ষমা', totalAyah: 129, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ', banglaText: 'আল্লাহ ও তাঁর রাসূলের পক্ষ থেকে মুশরিকদের সাথে কৃত চুক্তি থেকে সম্পর্কচ্ছেদ...' }
  ]},
  { id: 10, number: 10, nameArabic: 'يونس', nameBangla: 'সূরা ইউনুস', nameMeaning: 'নবী ইউনুস (আ.)', totalAyah: 109, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ', banglaText: 'আলিফ-লাম-রা; এগুলো মহাজ্ঞানময় কিতাবের আয়াত।' }
  ]},
  { id: 11, number: 11, nameArabic: 'هود', nameBangla: 'সূরা হূদ', nameMeaning: 'নবী হূদ (আ.)', totalAyah: 123, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الر ۚ كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ', banglaText: 'আলিফ-লাম-রা; এটি এমন এক কিতাব যার আয়াতসমূহ সুপ্রতিষ্ঠিত ও বিশদভাবে বর্ণিত...' }
  ]},
  { id: 12, number: 12, nameArabic: 'يوسف', nameBangla: 'সূরা ইউসুফ', nameMeaning: 'নবী ইউসুফ (আ.)', totalAyah: 111, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ', banglaText: 'আলিফ-লাম-রা; এগুলো সুস্পষ্ট কিতাবের আয়াত।' }
  ]},
  { id: 13, number: 13, nameArabic: 'الرعد', nameBangla: 'সূরা আর-রাদ', nameMeaning: 'বজ্রনাদ', totalAyah: 43, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'المر ۚ تِلْكَ آيَاتُ الْكِتَابِ...', banglaText: 'আলিফ-লাম-মীম-রা; এগুলো কিতাবের আয়াত...' }
  ]},
  { id: 14, number: 14, nameArabic: 'إبراهيم', nameBangla: 'সূরা ইব্রাহিম', nameMeaning: 'নবী ইব্রাহিম (আ.)', totalAyah: 52, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الر ۚ كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ...', banglaText: 'আলিফ-লাম-রা; এটি এক কিতাব যা আমি আপনার প্রতি অবতীর্ণ করেছি মানুষকে অন্ধকার থেকে আলোর দিকে আনতে...' }
  ]},
  { id: 15, number: 15, nameArabic: 'الحجر', nameBangla: 'সূরা আল-হিজর', nameMeaning: 'পাথুরে পাহাড়', totalAyah: 99, type: 'মাক্কী', verses: [
    { ayahNumber: 9, arabicText: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ', banglaText: 'নিশ্চয় আমি এই কুরআন অবতীর্ণ করেছি এবং আমি নিজেই এর সংরক্ষক।' }
  ]},
  { id: 16, number: 16, nameArabic: 'النحل', nameBangla: 'সূরা আন-নাহল', nameMeaning: 'মৌমাছি', totalAyah: 128, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'أَتَىٰ أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ...', banglaText: 'আল্লাহর নির্দেশ এসে গেছে, সুতরাং এর জন্য তাড়াহুড়ো করো না...' }
  ]},
  { id: 17, number: 17, nameArabic: 'الإسراء', nameBangla: 'সূরা আল-ইসরা', nameMeaning: 'রাত্রিকালীন ভ্রমণ', totalAyah: 111, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى...', banglaText: 'পরম পবিত্র মহিমাময় সত্তা তিনি, যিনি স্বীয় বান্দাকে রাতে মসজিদুল হারাম থেকে মসজিদুল আকসায় ভ্রমণ করিয়েছিলেন...' }
  ]},
  { id: 18, number: 18, nameArabic: 'الكهف', nameBangla: 'সূরা আল-কাহফ', nameMeaning: 'গুহা', totalAyah: 110, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا', banglaText: 'সকল প্রশংসা আল্লাহর জন্য যিনি তাঁর বান্দার ওপর এই কিতাব অবতীর্ণ করেছেন এবং এতে কোনো বক্রতা রাখেননি।' }
  ]},
  { id: 19, number: 19, nameArabic: 'مريم', nameBangla: 'সূরা মারইয়াম', nameMeaning: 'মারইয়াম (আ.)', totalAyah: 98, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'كهيعص', banglaText: 'কাফ-হা-ইয়া-আইন-সোয়াদ।' }
  ]},
  { id: 20, number: 20, nameArabic: 'طه', nameBangla: 'সূরা ত্বা-হা', nameMeaning: 'ত্বা-হা', totalAyah: 135, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'طه', banglaText: 'ত্বা-হা।' },
    { ayahNumber: 2, arabicText: 'مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ', banglaText: 'আপনাকে কষ্ট দেওয়ার জন্য আমি আপনার ওপর কুরআন অবতীর্ণ করিনি।' }
  ]},
  { id: 21, number: 21, nameArabic: 'الأنبياء', nameBangla: 'সূরা আল-আম্বিয়া', nameMeaning: 'নবী-রাসূলগণ', totalAyah: 112, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ', banglaText: 'মানুষের হিসাব-নিকাশের সময় সন্নিকট, অথচ তারা উদাসীনতায় মুখ ফিরিয়ে রয়েছে।' }
  ]},
  { id: 22, number: 22, nameArabic: 'الحج', nameBangla: 'সূরা আল-হাজ্জ', nameMeaning: 'হজ্জব্রত', totalAyah: 78, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ ۚ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ', banglaText: 'হে মানুষ! তোমরা তোমাদের রবকে ভয় কর; নিশ্চয় কিয়ামতের প্রকম্পন এক ভয়ঙ্কর ব্যাপার!' }
  ]},
  { id: 23, number: 23, nameArabic: 'المؤمنون', nameBangla: 'সূরা আল-মুমিনূন', nameMeaning: 'বিশ্বাসী মুমিনগণ', totalAyah: 118, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ', banglaText: 'নিশ্চয়ই মুমিনগণ সফলকাম হয়েছে।' },
    { ayahNumber: 2, arabicText: 'الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ', banglaText: 'যারা তাদের সালাতে বিনম্র ও একাগ্র।' }
  ]},
  { id: 24, number: 24, nameArabic: 'النور', nameBangla: 'সূরা আন-নূর', nameMeaning: 'জ্যোতি বা নূর', totalAyah: 64, type: 'মাদানী', verses: [
    { ayahNumber: 35, arabicText: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ...', banglaText: 'আল্লাহ আসমানসমূহ ও জমিনের নূর বা জ্যোতি...' }
  ]},
  { id: 25, number: 25, nameArabic: 'الفرقان', nameBangla: 'সূরা আল-ফুরকান', nameMeaning: 'সত্য ও মিথ্যার পার্থক্যকারী', totalAyah: 77, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا', banglaText: 'পরম কল্যাণময় তিনি যিনি তাঁর বান্দার ওপর ফুরকান অবতীর্ণ করেছেন যাতে সে বিশ্বজগতের জন্য সতর্ককারী হতে পারে।' }
  ]},
  { id: 26, number: 26, nameArabic: 'الشعراء', nameBangla: 'সূরা আশ-শুয়ারা', nameMeaning: 'কবি সম্প্রদায়', totalAyah: 227, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'طسم', banglaText: 'ত্বা-সীন-মীম।' }
  ]},
  { id: 27, number: 27, nameArabic: 'النمل', nameBangla: 'সূরা আন-নামল', nameMeaning: 'পিপীলিকা', totalAyah: 93, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'طس ۚ تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ', banglaText: 'ত্বা-সীন; এগুলো কুরআন ও সুস্পষ্ট কিতাবের আয়াত।' }
  ]},
  { id: 28, number: 28, nameArabic: 'القصص', nameBangla: 'সূরা আল-কাসাস', nameMeaning: 'ঐতিহাসিক ঘটনা', totalAyah: 88, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'طسم', banglaText: 'ত্বা-সীন-মীম।' }
  ]},
  { id: 29, number: 29, nameArabic: 'العنكبوت', nameBangla: 'সূরা আল-আনকাবুত', nameMeaning: 'মাকড়সা', totalAyah: 69, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الم', banglaText: 'আলিফ-লাম-মীম।' }
  ]},
  { id: 30, number: 30, nameArabic: 'الروم', nameBangla: 'সূরা আর-রূম', nameMeaning: 'রোমান জাতি', totalAyah: 60, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الم', banglaText: 'আলিফ-লাম-মীম।' }
  ]},
  { id: 31, number: 31, nameArabic: 'لقمان', nameBangla: 'সূরা লুকমান', nameMeaning: 'জ্ঞানী লুকমান', totalAyah: 34, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الم', banglaText: 'আলিফ-লাম-মীম।' }
  ]},
  { id: 32, number: 32, nameArabic: 'السجدة', nameBangla: 'সূরা আস-সাজদাহ', nameMeaning: 'সিজদা', totalAyah: 30, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الم', banglaText: 'আলিফ-লাম-মীম।' }
  ]},
  { id: 33, number: 33, nameArabic: 'الأحزاب', nameBangla: 'সূরা আল-আহযাব', nameMeaning: 'সম্মিলিত বাহিনী', totalAyah: 73, type: 'মাদানী', verses: [
    { ayahNumber: 21, arabicText: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ...', banglaText: 'নিশ্চয়ই আল্লাহর রাসূলের মধ্যে তোমাদের জন্য রয়েছে সর্বোত্তম আদর্শ...' }
  ]},
  { id: 34, number: 34, nameArabic: 'سبأ', nameBangla: 'সূরা সাবা', nameMeaning: 'সাবা জাতি', totalAyah: 54, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', banglaText: 'সকল প্রশংসা আল্লাহর জন্য যাঁর মালিকানায় রয়েছে আসমান ও জমিনের সবকিছু...' }
  ]},
  { id: 35, number: 35, nameArabic: 'فاطر', nameBangla: 'সূরা ফাতির', nameMeaning: 'আদি স্রষ্টা', totalAyah: 45, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ...', banglaText: 'সকল প্রশংসা আল্লাহর জন্য, যিনি আসমান ও জমিনের স্রষ্টা...' }
  ]},
  { id: 36, number: 36, nameArabic: 'يس', nameBangla: 'সূরা ইয়াসীন', nameMeaning: 'ইয়াসীন (কুরআনের হৃৎপিণ্ড)', totalAyah: 83, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'يس', banglaText: 'ইয়া-সীন।' },
    { ayahNumber: 2, arabicText: 'وَالْقُرْآنِ الْحَكِيمِ', banglaText: 'প্রজ্ঞাময় কুরআনের শপথ।' },
    { ayahNumber: 3, arabicText: 'إِنَّكَ لَمِنَ الْمُرْسَلِينَ', banglaText: 'নিশ্চয়ই আপনি রাসূলগণের অন্তর্ভুক্ত।' }
  ]},
  { id: 37, number: 37, nameArabic: 'الصافات', nameBangla: 'সূরা আস-সাফফাত', nameMeaning: 'সারিবদ্ধ দল', totalAyah: 182, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالصَّافَّاتِ صَفًّا', banglaText: 'শপথ সারিবদ্ধভাবে দণ্ডায়মানদের।' }
  ]},
  { id: 38, number: 38, nameArabic: 'ص', nameBangla: 'সূরা সাদ', nameMeaning: 'বর্ণ সাদ', totalAyah: 88, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'ص ۚ وَالْقُرْآنِ ذِي الذِّكْرِ', banglaText: 'সোয়াদ; উপদেশপূর্ণ কুরআনের শপথ।' }
  ]},
  { id: 39, number: 39, nameArabic: 'الزمر', nameBangla: 'সূরা আয-যুমার', nameMeaning: 'দলবদ্ধ জনতা', totalAyah: 75, type: 'মাক্কী', verses: [
    { ayahNumber: 53, arabicText: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ...', banglaText: 'বলুন: হে আমার বান্দাগণ যারা নিজেদের ওপর অবিচার করেছ, তোমরা আল্লাহর রহমত থেকে নিরাশ হয়ো না...' }
  ]},
  { id: 40, number: 40, nameArabic: 'غافر', nameBangla: 'সূরা গাফির (আল-মুমিন)', nameMeaning: 'ক্ষমাকারী', totalAyah: 85, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' }
  ]},
  { id: 41, number: 41, nameArabic: 'فصلت', nameBangla: 'সূরা ফুসসিলাত', nameMeaning: 'সুস্পষ্ট ব্যাখ্যাযুক্ত', totalAyah: 54, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' }
  ]},
  { id: 42, number: 42, nameArabic: 'الشورى', nameBangla: 'সূরা আশ-শূরা', nameMeaning: 'পরামর্শ', totalAyah: 53, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' },
    { ayahNumber: 2, arabicText: 'عسق', banglaText: 'আইন-সীন-ক্বাফ।' }
  ]},
  { id: 43, number: 43, nameArabic: 'الزخرف', nameBangla: 'সূরা আয-যুখরুফ', nameMeaning: 'সোনার অলঙ্কার', totalAyah: 89, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' }
  ]},
  { id: 44, number: 44, nameArabic: 'الدخان', nameBangla: 'সূরা আদ-দুখান', nameMeaning: 'ধোঁয়া', totalAyah: 59, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' }
  ]},
  { id: 45, number: 45, nameArabic: 'الجاثية', nameBangla: 'সূরা আল-জাসিয়াহ', nameMeaning: 'নতজানু', totalAyah: 37, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' }
  ]},
  { id: 46, number: 46, nameArabic: 'الأحقاف', nameBangla: 'সূরা আল-আহকাফ', nameMeaning: 'বালির পাহাড়', totalAyah: 35, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'حم', banglaText: 'হা-মীম।' }
  ]},
  { id: 47, number: 47, nameArabic: 'محمد', nameBangla: 'সূরা মুহাম্মদ', nameMeaning: 'নবী মুহাম্মদ (ﷺ)', totalAyah: 38, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'الَّذِينَ كَفَرُوا وَصَدُّوا عَن سَبِيلِ اللَّهِ أَضَلَّ أَعْمَالَهُمْ', banglaText: 'যারা কুফরী করেছে এবং আল্লাহর পথে বাধা সৃষ্টি করেছে, তিনি তাদের সকল আমল ব্যর্থ করে দিয়েছেন।' }
  ]},
  { id: 48, number: 48, nameArabic: 'الفتح', nameBangla: 'সূরা আল-ফাতহ', nameMeaning: 'সুস্পষ্ট বিজয়', totalAyah: 29, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا', banglaText: 'নিশ্চয় আমি আপনাকে সুস্পষ্ট এক বিজয় দান করেছি।' }
  ]},
  { id: 49, number: 49, nameArabic: 'الحجرات', nameBangla: 'সূরা আল-হুজুরাত', nameMeaning: 'বাসগৃহসমূহ', totalAyah: 18, type: 'মাদানী', verses: [
    { ayahNumber: 10, arabicText: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ...', banglaText: 'মুমিনগণ তো পরস্পরের ভাই; অতএব তোমরা তোমাদের দুই ভাইয়ের মধ্যে আপস মীমাংসা করে দাও...' }
  ]},
  { id: 50, number: 50, nameArabic: 'ق', nameBangla: 'সূরা ক্বাফ', nameMeaning: 'বর্ণ ক্বাফ', totalAyah: 45, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'ق ۚ وَالْقُرْآنِ الْمَجِيدِ', banglaText: 'ক্বাফ; মহিমান্বিত কুরআনের শপথ।' }
  ]},
  { id: 51, number: 51, nameArabic: 'الذاريات', nameBangla: 'সূরা আয-যারিয়াত', nameMeaning: 'বিক্ষিপ্তকারী বাতাস', totalAyah: 60, type: 'মাক্কী', verses: [
    { ayahNumber: 56, arabicText: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ', banglaText: 'আমি জিন ও মানব জাতিকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি।' }
  ]},
  { id: 52, number: 52, nameArabic: 'الطور', nameBangla: 'সূরা আত-তূর', nameMeaning: 'তূর পর্বত', totalAyah: 49, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالطُّورِ', banglaText: 'তূর পর্বতের শপথ!' }
  ]},
  { id: 53, number: 53, nameArabic: 'النجم', nameBangla: 'সূরা আন-নাজম', nameMeaning: 'নক্ষত্র', totalAyah: 62, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالنَّجْمِ إِذَا هَوَىٰ', banglaText: 'নক্ষত্রের শপথ যখন তা অস্তমিত হয়।' }
  ]},
  { id: 54, number: 54, nameArabic: 'القمر', nameBangla: 'সূরা আল-ক্বামার', nameMeaning: 'চন্দ্র', totalAyah: 55, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ', banglaText: 'কিয়ামত সন্নিকট এবং চাঁদ বিদীর্ণ হয়েছে।' }
  ]},
  { id: 55, number: 55, nameArabic: 'الرحمن', nameBangla: 'সূরা আর-রাহমান', nameMeaning: 'পরম দয়ালু', totalAyah: 78, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'الرَّحْمَٰنُ', banglaText: 'পরম দয়ালু আল্লাহ।' },
    { ayahNumber: 2, arabicText: 'عَلَّمَ الْقُرْآنَ', banglaText: 'তিনি কুরআন শিক্ষা দিয়েছেন।' },
    { ayahNumber: 13, arabicText: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ', banglaText: 'অতএব তোমরা তোমাদের রবের কোন কোন নিয়ামতকে অস্বীকার করবে?' }
  ]},
  { id: 56, number: 56, nameArabic: 'الواقعة', nameBangla: 'সূরা আল-ওয়াক্বিয়াহ', nameMeaning: 'নিশ্চিত মহাবিপ্লব', totalAyah: 96, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا وَقَعَتِ الْوَاقِعَةُ', banglaText: 'যখন সেই অবশ্যম্ভাবী ঘটনা (কিয়ামত) ঘটবে।' }
  ]},
  { id: 57, number: 57, nameArabic: 'الحديد', nameBangla: 'সূরা আল-হাদীদ', nameMeaning: 'লোহা', totalAyah: 29, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ...', banglaText: 'আসমানসমূহ ও জমিনে যা কিছু আছে সবই আল্লাহর পবিত্রতা মহিমা ঘোষণা করে...' }
  ]},
  { id: 58, number: 58, nameArabic: 'المجادلة', nameBangla: 'সূরা আল-মুজাদালাহ', nameMeaning: 'বাদানুবাদকারিণী', totalAyah: 22, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا...', banglaText: 'আল্লাহ অবশ্যই সেই নারীর কথা শুনেছেন যে তার স্বামীর ব্যাপারে আপনার সাথে বাদানুবাদ করছিল...' }
  ]},
  { id: 59, number: 59, nameArabic: 'الحشر', nameBangla: 'সূরা আল-হাশর', nameMeaning: 'মহাবেষ্টনী ও দেশত্যাগ', totalAyah: 24, type: 'মাদানী', verses: [
    { ayahNumber: 22, arabicText: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ', banglaText: 'তিনিই আল্লাহ, তিনি ব্যতীত কোনো সত্য উপাস্য নেই; তিনি দৃশ্য ও অদৃশ্যের জ্ঞাতা, তিনি পরম করুণাময় অতি দয়ালু।' }
  ]},
  { id: 60, number: 60, nameArabic: 'الممتحنة', nameBangla: 'সূরা আল-মুমতাহিনাহ', nameMeaning: 'পরীক্ষিত নারী', totalAyah: 13, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ...', banglaText: 'হে মুমিনগণ! তোমরা আমার শত্রু ও তোমাদের শত্রুকে বন্ধুরূপে গ্রহণ করো না...' }
  ]},
  { id: 61, number: 61, nameArabic: 'الصف', nameBangla: 'সূরা আস-সফ', nameMeaning: 'সারিবদ্ধ সৈন্যদল', totalAyah: 14, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', banglaText: 'আসমান ও জমিনে যা কিছু আছে সবই আল্লাহর মহিমা ঘোষণা করে...' }
  ]},
  { id: 62, number: 62, nameArabic: 'الجمعة', nameBangla: 'সূরা আল-জুমুআহ', nameMeaning: 'জুমু‘আর দিন', totalAyah: 11, type: 'মাদানী', verses: [
    { ayahNumber: 9, arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ...', banglaText: 'হে মুমিনগণ! যখন জুমু‘আর দিনে সালাতের জন্য আহবান করা হয়, তখন তোমরা দ্রুত আল্লাহর স্মরণে ধাবিত হও...' }
  ]},
  { id: 63, number: 63, nameArabic: 'المنافقون', nameBangla: 'সূরা আল-মুনাফিকুন', nameMeaning: 'কপট বিশ্বাসীগণ', totalAyah: 11, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا جَاءَكَ الْمُنَافِقُونَ قَالُوا نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ...', banglaText: 'যখন মুনাফিকরা আপনার কাছে আসে, তারা বলে: আমরা সাক্ষ্য দিচ্ছি আপনি নিশ্চয়ই আল্লাহর রাসূল...' }
  ]},
  { id: 64, number: 64, nameArabic: 'التغابن', nameBangla: 'সূরা আত-তাগাবুন', nameMeaning: 'হার-জিতের দিন', totalAyah: 18, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', banglaText: 'আসমান ও জমিনে যা কিছু আছে সবই আল্লাহর পবিত্রতা মহিমা বর্ণনা করে...' }
  ]},
  { id: 65, number: 65, nameArabic: 'الطلاق', nameBangla: 'সূরা আত-ত্বালাক', nameMeaning: 'তালাক ও বিচ্ছিন্নতা', totalAyah: 12, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا النَّبِيُّ إِذَا طَلَّقْتُمُ النِّسَاءَ فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ...', banglaText: 'হে নবী! তোমরা যখন স্ত্রীদের তালাক দেবে, তখন তাদের ইদ্দতের প্রতি লক্ষ্য রেখে তালাক দেবে...' }
  ]},
  { id: 66, number: 66, nameArabic: 'التحريم', nameBangla: 'সূরা আত-তাহরীম', nameMeaning: 'নিষিদ্ধকরণ', totalAyah: 12, type: 'মাদানী', verses: [
    { ayahNumber: 6, arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا...', banglaText: 'হে ঈমানদারগণ! তোমরা নিজেদেরকে এবং তোমাদের পরিবার-পরিজনকে জাহান্নামের আগুন থেকে রক্ষা কর...' }
  ]},
  { id: 67, number: 67, nameArabic: 'الملك', nameBangla: 'সূরা আল-মুলক', nameMeaning: 'সার্বভৌম কর্তৃত্ব', totalAyah: 30, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', banglaText: 'পরম বরকতময় তিনি, যাঁর হাতে সর্বময় কর্তৃত্ব; আর তিনি সব কিছুর উপর সর্বশক্তিমান।' },
    { ayahNumber: 2, arabicText: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا', banglaText: 'যিনি সৃষ্টি করেছেন মৃত্যু ও জীবন, তোমাদের পরীক্ষা করার জন্য যে কে কর্মে শ্রেষ্ঠ।' }
  ]},
  { id: 68, number: 68, nameArabic: 'القلم', nameBangla: 'সূরা আল-ক্বলম', nameMeaning: 'কলম', totalAyah: 52, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ', banglaText: 'নূন; কলমের শপথ এবং যা তারা লিপিবদ্ধ করে।' },
    { ayahNumber: 4, arabicText: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ', banglaText: 'এবং নিশ্চয় আপনি মহান চরিত্রের ওপর অধিষ্ঠিত।' }
  ]},
  { id: 69, number: 69, nameArabic: 'الحاقة', nameBangla: 'সূরা আল-হাক্কাহ', nameMeaning: 'অনিবার্য সত্য', totalAyah: 52, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الْحَاقَّةُ', banglaText: 'সেই নিশ্চিত সত্য ঘটনা।' }
  ]},
  { id: 70, number: 70, nameArabic: 'المعارج', nameBangla: 'সূরা আল-মাআরিজ', nameMeaning: 'ঊর্ধ্বগমনের সোপান', totalAyah: 44, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ', banglaText: 'এক প্রশ্নকারী চাইল এমন এক শাস্তি যা অবশ্যম্ভাবী।' }
  ]},
  { id: 71, number: 71, nameArabic: 'نوح', nameBangla: 'সূরা নূহ', nameMeaning: 'নবী নূহ (আ.)', totalAyah: 28, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ...', banglaText: 'নিশ্চয় আমি নূহকে তাঁর সম্প্রদায়ের নিকট পাঠিয়েছিলাম...' }
  ]},
  { id: 72, number: 72, nameArabic: 'الجن', nameBangla: 'সূরা আল-জিন', nameMeaning: 'জিন জাতি', totalAyah: 28, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ...', banglaText: 'বলুন: আমার প্রতি ওহী এসেছে যে জিনদের একটি দল মনোযোগ সহকারে কুরআন শ্রবণ করেছে...' }
  ]},
  { id: 73, number: 73, nameArabic: 'المزمل', nameBangla: 'সূরা আল-মুযযাম্মিল', nameMeaning: 'বস্ত্রাবৃত', totalAyah: 20, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا الْمُزَّمِّلُ', banglaText: 'হে বস্ত্রাবৃত!' },
    { ayahNumber: 2, arabicText: 'قُمِ اللَّيْلَ إِلَّا قَلِيلًا', banglaText: 'রাতের কিছু অংশ ছাড়া সালাতে দণ্ডায়মান হোন।' }
  ]},
  { id: 74, number: 74, nameArabic: 'المدثر', nameBangla: 'সূরা আল-মুদ্দাচ্ছির', nameMeaning: 'চাদরাবৃত', totalAyah: 56, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'يَا أَيُّهَا الْمُدَّثِّرُ', banglaText: 'হে চাদরাবৃত!' },
    { ayahNumber: 2, arabicText: 'قُمْ فَأَنذِرْ', banglaText: 'উঠুন এবং মানুষকে সতর্ক করুন!' }
  ]},
  { id: 75, number: 75, nameArabic: 'القيامة', nameBangla: 'সূরা আল-ক্বিয়ামাহ', nameMeaning: 'পুনরুত্থান দিবস', totalAyah: 40, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ', banglaText: 'আমি কিয়ামত দিবসের শপথ করছি।' }
  ]},
  { id: 76, number: 76, nameArabic: 'الإنسان', nameBangla: 'সূরা আল-ইনসান (আদ-দাহর)', nameMeaning: 'মানবজাতি', totalAyah: 31, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا', banglaText: 'মানুষের ওপর কি এমন সময় অতিক্রান্ত হয়নি যখন সে উল্লেখযোগ্য কিছুই ছিল না?' }
  ]},
  { id: 77, number: 77, nameArabic: 'المرسلات', nameBangla: 'সূরা আল-মুরসালাত', nameMeaning: 'প্রেরিত বাতাস', totalAyah: 50, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالْمُرْسَلَاتِ عُرْفًا', banglaText: 'শপথ কল্যাণের সাথে প্রেরিত বাতাসের।' }
  ]},
  { id: 78, number: 78, nameArabic: 'النبأ', nameBangla: 'সূরা আন-নাবা', nameMeaning: 'মহা সংবাদ', totalAyah: 40, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'عَمَّ يَتَسَاءَلُونَ', banglaText: 'তারা কোন বিষয়ে পরস্পরকে জিজ্ঞাসাবাদ করছে?' },
    { ayahNumber: 2, arabicText: 'عَنِ النَّبَإِ الْعَظِيمِ', banglaText: 'সেই মহাবার্তা সম্পর্কে।' }
  ]},
  { id: 79, number: 79, nameArabic: 'النازعات', nameBangla: 'সূরা আন-নাযিআত', nameMeaning: 'উৎপাটনকারী ফেরেশতাগণ', totalAyah: 46, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالنَّازِعَاتِ غَرْقًا', banglaText: 'শপথ সেই ফেরেশতাদের যারা কঠোরভাবে আত্মা উৎপাটন করে।' }
  ]},
  { id: 80, number: 80, nameArabic: 'عبس', nameBangla: 'সূরা আবাসা', nameMeaning: 'ভ্রুকুটি করলেন', totalAyah: 42, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'عَبَسَ وَتَوَلَّىٰ', banglaText: 'তিনি ভ্রুকুটি করলেন এবং মুখ ফিরিয়ে নিলেন।' }
  ]},
  { id: 81, number: 81, nameArabic: 'التكوير', nameBangla: 'সূরা আত-তাকভীর', nameMeaning: 'অন্ধকারাচ্ছন্নকরণ', totalAyah: 29, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا الشَّمْسُ كُوِّرَتْ', banglaText: 'যখন সূর্য আলোহীন হয়ে যাবে।' }
  ]},
  { id: 82, number: 82, nameArabic: 'الانفطار', nameBangla: 'সূরা আল-ইনফিতার', nameMeaning: 'বিদীর্ণ হওয়া', totalAyah: 19, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا السَّمَاءُ انفَطَرَتْ', banglaText: 'যখন আকাশ বিদীর্ণ হবে।' }
  ]},
  { id: 83, number: 83, nameArabic: 'المطففين', nameBangla: 'সূরা আল-মুতাফফিফীন', nameMeaning: 'মাপে কম দানকারী', totalAyah: 36, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَيْلٌ لِّلْمُطَفِّفِينَ', banglaText: 'ধ্বংস ও দুর্ভোগ তাদের জন্য যারা মাপে কম দেয়।' }
  ]},
  { id: 84, number: 84, nameArabic: 'الانشقاق', nameBangla: 'সূরা আল-ইনশিকাক', nameMeaning: 'খণ্ড-বিখণ্ড হওয়া', totalAyah: 25, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا السَّمَاءُ انشَقَّتْ', banglaText: 'যখন আকাশ খণ্ড-বিখণ্ড হয়ে যাবে।' }
  ]},
  { id: 85, number: 85, nameArabic: 'البروج', nameBangla: 'সূরা আল-বুরুজ', nameMeaning: 'নক্ষত্রমণ্ডল', totalAyah: 22, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالسَّمَاءِ ذَاتِ الْبُرُوجِ', banglaText: 'শপথ নক্ষত্রমণ্ডল শোভিত আকাশের।' }
  ]},
  { id: 86, number: 86, nameArabic: 'الطارق', nameBangla: 'সূরা আত-তারিক্ব', nameMeaning: 'রাতের আগমনকারী নক্ষত্র', totalAyah: 17, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالسَّمَاءِ وَالطَّارِقِ', banglaText: 'শপথ আকাশের এবং রাতের বেলা আগমনকারীর।' }
  ]},
  { id: 87, number: 87, nameArabic: 'الأعلى', nameBangla: 'সূরা আল-আলা', nameMeaning: 'সর্বোচ্চ মহান', totalAyah: 19, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى', banglaText: 'আপনার সর্বোচ্চ মহান রবের নামের পবিত্রতা মহিমা ঘোষণা করুন।' }
  ]},
  { id: 88, number: 88, nameArabic: 'الغاشية', nameBangla: 'সূরা আল-গাশিয়াহ', nameMeaning: 'আচ্ছন্নকারী মহাপ্রলয়', totalAyah: 26, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ', banglaText: 'আপনার কাছে কি সর্বগ্রাসী মহাপ্রলয়ের সংবাদ এসেছে?' }
  ]},
  { id: 89, number: 89, nameArabic: 'الفجر', nameBangla: 'সূরা আল-ফজর', nameMeaning: 'উষা বা প্রভাত', totalAyah: 30, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالْفَجْرِ', banglaText: 'শপথ উষার!' },
    { ayahNumber: 2, arabicText: 'وَلَيَالٍ عَشْرٍ', banglaText: 'এবং দশটি রাতের (জিলহজ্জের প্রথম দশ দিন)।' }
  ]},
  { id: 90, number: 90, nameArabic: 'البلد', nameBangla: 'সূরা আল-বালাদ', nameMeaning: 'মক্কা নগরী', totalAyah: 20, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ', banglaText: 'আমি শপথ করছি এই মর্যাদাময় নগরীর (মক্কা)।' }
  ]},
  { id: 91, number: 91, nameArabic: 'الشمس', nameBangla: 'সূরা আশ-শামস', nameMeaning: 'সূর্য', totalAyah: 15, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالشَّمْسِ وَضُحَاهَا', banglaText: 'শপথ সূর্যের এবং তার প্রখর কিরণের।' }
  ]},
  { id: 92, number: 92, nameArabic: 'الليل', nameBangla: 'সূরা আল-লাইল', nameMeaning: 'রজনী', totalAyah: 21, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَاللَّيْلِ إِذَا يَغْشَىٰ', banglaText: 'শপথ রাতের যখন তা অন্ধকার দ্বারা আচ্ছন্ন করে।' }
  ]},
  { id: 93, number: 93, nameArabic: 'الضحى', nameBangla: 'সূরা আদ-দুহা', nameMeaning: 'পূর্বাহ্ণ', totalAyah: 11, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالضُّحَىٰ', banglaText: 'শপথ উজ্জ্বল পূর্বাহ্ণের।' },
    { ayahNumber: 3, arabicText: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ', banglaText: 'আপনার রব আপনাকে পরিত্যাগ করেননি এবং অসন্তুষ্টও হননি।' }
  ]},
  { id: 94, number: 94, nameArabic: 'الشرح', nameBangla: 'সূরা আল-ইনশিরাহ', nameMeaning: 'বক্ষ সম্প্রসারণ', totalAyah: 8, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', banglaText: 'আমি কি আপনার বক্ষ আপনার জন্য প্রশস্ত করে দেইনি?' },
    { ayahNumber: 5, arabicText: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', banglaText: 'নিশ্চয়ই কষ্টের সাথেই স্বস্তি রয়েছে।' }
  ]},
  { id: 95, number: 95, nameArabic: 'التين', nameBangla: 'সূরা আত-তীন', nameMeaning: 'ডুমুর ফল', totalAyah: 8, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالتِّينِ وَالزَّيْتُونِ', banglaText: 'শপথ তীন ও যায়তূন ফলের।' },
    { ayahNumber: 4, arabicText: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ', banglaText: 'নিশ্চয় আমি মানুষকে সৃষ্টি করেছি সর্বোৎকৃষ্ট অবয়বে।' }
  ]},
  { id: 96, number: 96, nameArabic: 'العلق', nameBangla: 'সূরা আল-আলাক্ব', nameMeaning: 'রক্তপিণ্ড', totalAyah: 19, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', banglaText: 'পাঠ করুন আপনার রবের নামে যিনি সৃষ্টি করেছেন।' },
    { ayahNumber: 2, arabicText: 'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ', banglaText: 'তিনি মানুষকে সৃষ্টি করেছেন জমাট রক্তপিণ্ড থেকে।' }
  ]},
  { id: 97, number: 97, nameArabic: 'القدر', nameBangla: 'সূরা আল-ক্বদর', nameMeaning: 'মহিমান্বিত রজনী', totalAyah: 5, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', banglaText: 'নিশ্চয় আমি এটি অবতীর্ণ করেছি মহিমান্বিত ক্বদরের রাতে।' },
    { ayahNumber: 3, arabicText: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ', banglaText: 'ক্বদরের রাত হাজার মাসের চেয়েও শ্রেষ্ঠ।' }
  ]},
  { id: 98, number: 98, nameArabic: 'البينة', nameBangla: 'সূরা আল-বাইয়্যিনাহ', nameMeaning: 'সুস্পষ্ট প্রমাণ', totalAyah: 8, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ', banglaText: 'আহলে কিতাব ও মুশরিকদের মধ্যে যারা কুফরী করেছিল, তারা বিরত হওয়ার পাত্র ছিল না যতক্ষণ না তাদের কাছে সুস্পষ্ট প্রমাণ এলো।' }
  ]},
  { id: 99, number: 99, nameArabic: 'الزلزلة', nameBangla: 'সূরা আয-যিলযাল', nameMeaning: 'মহাকম্পন', totalAyah: 8, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا', banglaText: 'যখন জমিন তার প্রবল কম্পনে প্রকম্পিত হবে।' }
  ]},
  { id: 100, number: 100, nameArabic: 'العاديات', nameBangla: 'সূরা আল-আদিয়াত', nameMeaning: 'দ্রুতগামী অশ্বদল', totalAyah: 11, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالْعَادِيَاتِ ضَبْحًا', banglaText: 'শপথ উর্ধ্বশ্বাসে ধাবমান অশ্বরাজির।' }
  ]},
  { id: 101, number: 101, nameArabic: 'القارعة', nameBangla: 'সূরা আল-ক্বারিয়াহ', nameMeaning: 'মহাপ্রলয়ের করাঘাত', totalAyah: 11, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'الْقَارِعَةُ', banglaText: 'সেই মহাকরাঘাতকারী প্রলয়।' }
  ]},
  { id: 102, number: 102, nameArabic: 'التكاثر', nameBangla: 'সূরা আত-তাকাসুর', nameMeaning: 'প্রাচুর্যের প্রতিযোগিতা', totalAyah: 8, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'أَلْهَاكُمُ التَّكَاثُرُ', banglaText: 'প্রাচুর্যের পারস্পরিক মোহ ও প্রতিযোগিতা তোমাদের উদাসীন করে রেখেছে।' },
    { ayahNumber: 2, arabicText: 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ', banglaText: 'যতক্ষণ না তোমরা কবরে উপস্থিত হও।' }
  ]},
  { id: 103, number: 103, nameArabic: 'العصر', nameBangla: 'সূরা আল-আসর', nameMeaning: 'মহাকালের শপথ', totalAyah: 3, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَالْعَصْرِ', banglaText: 'মহাকালের শপথ!' },
    { ayahNumber: 2, arabicText: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', banglaText: 'নিশ্চয় সকল মানুষ চরম ক্ষতির মধ্যে নিমজ্জিত।' },
    { ayahNumber: 3, arabicText: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', banglaText: 'তারা ব্যতীত যারা ঈমান এনেছে, সৎকাজ করেছে এবং পরস্পরকে সত্যের উপদেশ ও ধৈর্যের উপদেশ দিয়েছে।' }
  ]},
  { id: 104, number: 104, nameArabic: 'الهمزة', nameBangla: 'সূরা আল-হুমাযাহ', nameMeaning: 'পরনিন্দাকারী', totalAyah: 9, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ', banglaText: 'ধ্বংস ও দুর্ভোগ এমন প্রত্যেক ব্যক্তির যে পশ্চাতে পরনিন্দা করে এবং সামনে অপবাদ দেয়।' }
  ]},
  { id: 105, number: 105, nameArabic: 'الفيل', nameBangla: 'সূরা আল-ফীল', nameMeaning: 'হাতি', totalAyah: 5, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', banglaText: 'আপনি কি দেখেননি আপনার রব হস্তীওয়ালাদের সাথে কিরূপ আচরণ করেছিলেন?' }
  ]},
  { id: 106, number: 106, nameArabic: 'قريش', nameBangla: 'সূরা কুরাইশ', nameMeaning: 'কুরাইশ গোত্র', totalAyah: 4, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'لِإِيلَافِ قُرَيْشٍ', banglaText: 'কুরাইশদের আসক্তির কারণে।' },
    { ayahNumber: 3, arabicText: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', banglaText: 'সুতরাং তারা যেন এই গৃহের (কাবা) রবের ইবাদত করে।' }
  ]},
  { id: 107, number: 107, nameArabic: 'الماعون', nameBangla: 'সূরা আল-মাউন', nameMeaning: 'নিত্যব্যবহার্য সাহায্য', totalAyah: 7, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', banglaText: 'আপনি কি দেখেছেন তাকে যে দ্বীন ও বিচার দিবসকে অস্বীকার করে?' }
  ]},
  { id: 108, number: 108, nameArabic: 'الكوثر', nameBangla: 'সূরা আল-কাউসার', nameMeaning: 'অফুরন্ত প্রাচুর্য', totalAyah: 3, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', banglaText: 'নিশ্চয় আমি আপনাকে কাউসার (অফুরন্ত কল্যাণ) দান করেছি।' },
    { ayahNumber: 2, arabicText: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', banglaText: 'অতএব আপনি আপনার রবের উদ্দেশ্যে সালাত আদায় করুন এবং কুরবানী করুন।' },
    { ayahNumber: 3, arabicText: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', banglaText: 'নিশ্চয় আপনার শত্রুই তো নির্বংশ, নির্বীজ।' }
  ]},
  { id: 109, number: 109, nameArabic: 'الكافرون', nameBangla: 'সূরা আল-কাফিরুন', nameMeaning: 'অবিশ্বাসীগণ', totalAyah: 6, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ', banglaText: 'বলুন, হে অবিশ্বাসী কাফিরগণ!' },
    { ayahNumber: 2, arabicText: 'لَا أَعْبُدُ مَا تَعْبُدُونَ', banglaText: 'আমি তাদের ইবাদত করি না যাদের তোমরা ইবাদত করো।' },
    { ayahNumber: 6, arabicText: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', banglaText: 'তোমাদের জন্য তোমাদের দ্বীন, আর আমার জন্য আমার দ্বীন।' }
  ]},
  { id: 110, number: 110, nameArabic: 'النصر', nameBangla: 'সূরা আন-নাসর', nameMeaning: 'বিজয় ও সাহায্য', totalAyah: 3, type: 'মাদানী', verses: [
    { ayahNumber: 1, arabicText: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', banglaText: 'যখন আসবে আল্লাহর সাহায্য ও বিজয়।' },
    { ayahNumber: 2, arabicText: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا', banglaText: 'এবং আপনি মানুষকে দলে দলে আল্লাহর দ্বীনে প্রবেশ করতে দেখবেন।' },
    { ayahNumber: 3, arabicText: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا', banglaText: 'তখন আপনি আপনার রবের প্রশংসাসহ পবিত্রতা ঘোষণা করুন এবং তাঁর নিকট ক্ষমা প্রার্থনা করুন। নিশ্চয় তিনি তওবা কবুলকারী।' }
  ]},
  { id: 111, number: 111, nameArabic: 'المسد', nameBangla: 'সূরা আল-লাহাব (আল-মাসাদ)', nameMeaning: 'খেজুর পাতার রশি', totalAyah: 5, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ', banglaText: 'ধ্বংস হোক আবু লাহাবের দুই হাত এবং সে নিজেও ধ্বংস হোক।' }
  ]},
  { id: 112, number: 112, nameArabic: 'الإخلاص', nameBangla: 'সূরা আল-ইখলাস', nameMeaning: 'একনিষ্ঠতা', totalAyah: 4, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ', banglaText: 'বলুন, তিনিই আল্লাহ, অদ্বিতীয়।' },
    { ayahNumber: 2, arabicText: 'اللَّهُ الصَّمَدُ', banglaText: 'আল্লাহ কারো মুখাপেক্ষী নন, সবাই তাঁর মুখাপেক্ষী।' },
    { ayahNumber: 3, arabicText: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', banglaText: 'তিনি কাউকে জন্ম দেননি এবং তিনিও কারো থেকে জন্ম নেননি।' },
    { ayahNumber: 4, arabicText: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', banglaText: 'এবং তাঁর সমকক্ষ কেউই নেই।' }
  ]},
  { id: 113, number: 113, nameArabic: 'الفلق', nameBangla: 'সূরা আল-ফালাক', nameMeaning: 'উষা বা প্রভাত', totalAyah: 5, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', banglaText: 'বলুন, আমি আশ্রয় প্রার্থনা করছি উষার রবের কাছে।' },
    { ayahNumber: 2, arabicText: 'مِن شَرِّ مَا خَلَقَ', banglaText: 'তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে।' },
    { ayahNumber: 3, arabicText: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', banglaText: 'এবং রাতের অন্ধকারের অনিষ্ট থেকে, যখন তা সমাগত হয়।' },
    { ayahNumber: 4, arabicText: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', banglaText: 'এবং গ্রন্থিতে ফুৎকারকারিণী জাদুকরদের অনিষ্ট থেকে।' },
    { ayahNumber: 5, arabicText: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', banglaText: 'এবং হিংসুকের অনিষ্ট থেকে, যখন সে হিংসা করে।' }
  ]},
  { id: 114, number: 114, nameArabic: 'الناس', nameBangla: 'সূরা আন-নাস', nameMeaning: 'মানবজাতি', totalAyah: 6, type: 'মাক্কী', verses: [
    { ayahNumber: 1, arabicText: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', banglaText: 'বলুন, আমি আশ্রয় চাই মানুষের পালনকর্তার কাছে।' },
    { ayahNumber: 2, arabicText: 'مَلِكِ النَّاسِ', banglaText: 'মানুষের অধিপতির কাছে।' },
    { ayahNumber: 3, arabicText: 'إِلَٰهِ النَّاسِ', banglaText: 'মানুষের মা\'বূদের কাছে।' },
    { ayahNumber: 4, arabicText: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', banglaText: 'আত্মগোপনকারী কুমন্ত্রণাদাতার অনিষ্ট থেকে।' },
    { ayahNumber: 5, arabicText: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', banglaText: 'যে মানুষের অন্তরে কুমন্ত্রণা দেয়।' },
    { ayahNumber: 6, arabicText: 'مِنَ الْجِنَّةِ وَالنَّاسِ', banglaText: 'জিনদের মধ্য থেকে কিংবা মানুষের মধ্য থেকে।' }
  ]}
];

export interface DuaItem {
  id: number;
  category: string;
  titleBangla: string;
  arabicText: string;
  pronunciationBangla: string;
  banglaMeaning: string;
  reference: string;
}

export const sampleDuas: DuaItem[] = [
  {
    id: 1,
    category: 'সকাল-সন্ধ্যার দু‘আ',
    titleBangla: 'সকাল-সন্ধ্যার শ্রেষ্ঠ ইস্তিগফার (সায়্যিদুল ইস্তিগফার)',
    arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
    pronunciationBangla: 'আল্লা-হুম্মা আনতা রব্বী লা ইলা-হা ইল্লা আনতা, খলাক্বতানী ওয়া আনা ‘আবদুকা...',
    banglaMeaning: 'হে আল্লাহ! আপনিই আমার রব। আপনি ছাড়া সত্য কোনো উপাস্য নেই। আপনি আমাকে সৃষ্টি করেছেন এবং আমি আপনার বান্দা...',
    reference: 'সহীহুল বুখারী (হাদিস নং ৬৩০৬)'
  },
  {
    id: 2,
    category: 'দৈনন্দিন দু‘আ',
    titleBangla: 'ঘুমানোর পূর্বের দু‘আ',
    arabicText: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.',
    pronunciationBangla: 'বিসমিকাল্লা-হুম্মা আমূতু ওয়া আহ্ইয়া।',
    banglaMeaning: 'হে আল্লাহ! আপনারই নামে আমি মৃত্যুবরণ করি (ঘুমাই) এবং আপনারই নামে পুনর্জীবিত হই।',
    reference: 'সহীহুল বুখারী (হাদিস নং ৬৩২৪)'
  },
  {
    id: 3,
    category: 'দৈনন্দিন দু‘আ',
    titleBangla: 'ঘুম থেকে জাগ্রত হওয়ার দু‘আ',
    arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.',
    pronunciationBangla: 'আলহামদু লিল্লা-হিল্লাযী আহ্ইয়ানা বা‘দা মা আমা-তানা ওয়া ইলাইহিন নুশূর।',
    banglaMeaning: 'সমস্ত প্রশংসা সেই আল্লাহর জন্য যিনি মৃত্যুর পর আমাদের পুনরায় জীবন দান করলেন এবং তাঁরই কাছে আমাদের ফিরে যেতে হবে।',
    reference: 'সহীহুল বুখারী (হাদিস নং ৬৩১২)'
  },
  {
    id: 4,
    category: 'দৈনন্দিন দু‘আ',
    titleBangla: 'ঘর থেকে বের হওয়ার দু‘আ',
    arabicText: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.',
    pronunciationBangla: 'বিসমিল্লা-হি তাওয়াক্কালতু ‘আলাল্লা-হি ওয়া লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লা-হ।',
    banglaMeaning: 'আল্লাহর নামে (বের হচ্ছি), আল্লাহর ওপর ভরসা করলাম। আল্লাহর সাহায্য ছাড়া কোনো পাপ থেকে বাঁচার বা পুণ্য করার শক্তি নেই।',
    reference: 'সুনানে আবু দাউদ (হাদিস নং ৫০৯৫)'
  },
  {
    id: 5,
    category: 'দৈনন্দিন দু‘আ',
    titleBangla: 'মসজিদে প্রবেশের দু‘আ',
    arabicText: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.',
    pronunciationBangla: 'আল্লা-হুম্মাফতাহ্ লী আবওয়াবা রহ্মাতিক।',
    banglaMeaning: 'হে আল্লাহ! আমার জন্য আপনার রহমতের সকল দুয়ার উন্মুক্ত করে দিন।',
    reference: 'সহীহ মুসলিম (হাদিস নং ৭১৩)'
  }
];

export interface IslamicBookItem {
  id: number;
  titleBangla: string;
  author: string;
  description: string;
  category: string;
  totalChapters: number;
}

export const sampleIslamicBooks: IslamicBookItem[] = [
  {
    id: 1,
    titleBangla: 'তাফসীর ইবনে কাসীর',
    author: 'ইমাদুদ্দীন হাফিজ ইবনে কাসীর (রহ.)',
    description: 'আল-কুরআনের সর্বশ্রেষ্ঠ বিশুদ্ধ প্রামাণ্য তাফসীর গ্রন্থ।',
    category: 'তাফসীর',
    totalChapters: 114
  },
  {
    id: 2,
    titleBangla: 'আর-রাহীকুল মাখতূম',
    author: 'আল্লামা সফিউর রহমান মুবারকপুরী (রহ.)',
    description: 'আন্তর্জাতিক সীরাত প্রতিযোগিতায় প্রথম পুরস্কারপ্রাপ্ত সীরাত গ্রন্থ।',
    category: 'সীরাতুন নবী',
    totalChapters: 36
  },
  {
    id: 3,
    titleBangla: 'ফিকহুস সুন্নাহ',
    author: 'সাইয়্যেদ সাবিক (রহ.)',
    description: 'সহজ ও প্রামাণ্য দলিলের আলোকে সংকলিত ইসলামি ফিকহের কিতাব।',
    category: 'ফিকহ ও আহকাম',
    totalChapters: 28
  },
  {
    id: 4,
    titleBangla: 'রিয়াদুস সালিহীন',
    author: 'ইমাম ইয়াহইয়া ইবনে শরাফ আন-নববী (রহ.)',
    description: 'আত্মশুদ্ধি, আখলাক ও দৈনন্দিন আমলের শ্রেষ্ঠ হাদিস সংকলন।',
    category: 'আখলাক ও হাদিস',
    totalChapters: 19
  }
];
