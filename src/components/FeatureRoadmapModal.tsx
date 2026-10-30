import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  LayoutGrid,
  Volume2,
  BookmarkCheck,
  Search,
  Bell
} from 'lucide-react';

interface FeatureRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeatureRoadmapModal: React.FC<FeatureRoadmapModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const features = [
    {
      title: '৫-স্তম্ভ গোলকীয় মূল মেনু (Pentagon Radial Hub)',
      desc: 'কুরআন, হাদিস, দু‘আ ও বইসমূহ নিয়ে সুসংবদ্ধ কম্প্যাক্ট হোম পেজ।',
      status: 'সম্পন্ন',
      badge: 'v1.2'
    },
    {
      title: 'ধারাবাহিক হাদিস সিকোয়েন্স (1 to N)',
      desc: 'প্রতিটি অধ্যায়ে ১ নম্বর থেকে শুরু করে সকল হাদিস ধারাবাহিক তালিকা ও গ্রিড আকারে পড়ার সুবিধা।',
      status: 'সম্পন্ন',
      badge: 'v1.2'
    },
    {
      title: 'হাদিস নম্বর ও শব্দ ভিত্তিক তাৎক্ষণিক সার্চ',
      desc: 'যেকোনো নম্বর (যেমন ১, ৫, ১২) অথবা শব্দ লিখলেই পুরো লাইব্রেরি থেকে সেকেন্ডের ভগ্নাংশে রেজাল্ট।',
      status: 'সম্পন্ন',
      badge: 'v1.2'
    },
    {
      title: 'হাদিসের মান ও তাহকিক বটম শিট',
      desc: 'ইমাম বুখারী, মুসলিম, আল-আলবানী ও শায়খ আরনাউতের রায়সহ নিরপেক্ষ বিশ্লেষণ।',
      status: 'সম্পন্ন',
      badge: 'v1.2'
    },
    {
      title: 'অফলাইন ডাটাবেজ ডাউনলোড ম্যানেজার',
      desc: 'বড় হাদিসগ্রন্থসমূহ অ্যাপ সাইজ না বাড়িয়ে ১-ক্লিকে SQLite এ ডাউনলোড করার সুবিধা।',
      status: 'সম্পন্ন',
      badge: 'v1.2'
    },
    {
      title: 'তাহকিক সহকারী এআই (Gemini 3.8 Flash)',
      desc: 'হাদিসের সনদ, রাবী এবং তাহকিক সংক্রান্ত প্রশ্নোত্তরের জন্য প্রাজ্ঞ ইসলামিক স্কলার সহকারী।',
      status: 'সম্পন্ন',
      badge: 'v1.2'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 font-bengali">
      <div className="w-full max-w-xl bg-[#0B1321] text-slate-100 rounded-3xl p-6 shadow-2xl border border-amber-500/20 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">ফিচার রোডম্যাপ ও অগ্রগতি</h3>
              <p className="text-xs text-slate-400">আপডেটকৃত লাক্সারি ফিচারসমূহ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="py-4 space-y-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#060A12] border border-slate-800 flex items-start justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-xs sm:text-sm text-white">{item.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <span className="shrink-0 text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{item.status}</span>
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all cursor-pointer"
        >
          বুঝেছি
        </button>
      </div>
    </div>
  );
};
