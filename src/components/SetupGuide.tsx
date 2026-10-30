import React from 'react';
import {
  Terminal,
  ShieldCheck,
  Smartphone,
  Database,
  CloudDownload,
  CheckCircle2,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const SetupGuide: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto font-bengali text-slate-200">
      {/* Overview Card */}
      <div className="bg-[#0B1321] border border-amber-500/20 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <span>Flutter ইসলামিক হাদিস লাইব্রেরি: আর্কিটেকচার ও ডেপ্লয়মেন্ট নির্দেশিকা</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          এই প্রজেক্টটি একটি অফলাইন-ফার্স্ট (Offline-First) ফ্লাটার ইসলামিক লাইব্রেরি অ্যাপ্লিকেশন। এতে সম্পূর্ণ SQLite ডাটাবেজ, হাদিসের মান ও নিরপেক্ষ তাহকিক (Sanad Verification), স্মার্ট AdMob ব্যানার যা শুধুমাত্র ইন্টারনেট থাকলে দেখাবে, এবং ফায়ারবেস রিমোট কনফিগ (Firebase Remote Config) যুক্ত রয়েছে।
        </p>
      </div>

      {/* Database Decision Architecture Card - Directly addresses user query */}
      <div className="bg-[#0B1321] border border-emerald-500/30 rounded-2xl p-6 shadow-xl space-y-3">
        <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
          <Database className="w-5 h-5" />
          <span>ডাটাবেজ আর্কিটেকচার: অ্যাপের সাথে দেওয়া নাকি আলাদা ডাউনলোড?</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          আপনার প্রশ্নের সরাসরি বিশেষজ্ঞ পরামর্শ:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/80">
            <h4 className="font-bold text-emerald-300 text-sm mb-1">
              ১. প্রাক-যুক্ত ডাটাবেজ (Pre-bundled SQLite)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              <strong>সুবিধা:</strong> অ্যাপ ইনস্টল করার সাথে সাথেই সহীহ বুখারী ও মূল অধ্যায়সমূহ অফলাইনে চোখের পলকে ওপেন হবে। কোনো ইন্টারনেট ডাউনলোডের অপেক্ষা করতে হয় না।
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-amber-300 text-sm mb-1">
              ২. ইন-অ্যাপ অফলাইন ডাউনলোড ম্যানেজার (SQLite Downloader)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              <strong>সুবিধা:</strong> ৪০,০০০+ হাদিসের সম্পূর্ণ ডাটাবেজ অ্যাপের সাইজ বাড়িয়ে ২০০ এমবি করার বদলে, ব্যবহারকারী অ্যাপের ভেতর থেকে ১-ক্লিকে ১০ এমবির প্যাক ডাউনলোড করে অফলাইনে সেভ করে নিতে পারেন।
            </p>
          </div>
        </div>
        <p className="text-xs text-emerald-300 font-semibold pt-1">
          ✓ আমাদের প্রদত্ত সোর্স কোডে এই দুইয়ের সেরা হাইব্রিড সল্যুশন যুক্ত রয়েছে।
        </p>
      </div>

      {/* Setup Steps */}
      <div className="bg-[#0B1321] border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Terminal className="w-5 h-5 text-emerald-400" />
          <span>GitHub থেকে ক্লোন ও রান করার ধাপসমূহ</span>
        </h3>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-3 rounded-xl bg-[#060A12] border border-slate-800 font-mono text-emerald-300">
            git clone https://github.com/your-username/al_hadith_flutter_app.git
            <br />
            cd al_hadith_flutter_app
            <br />
            flutter pub get
            <br />
            flutter run
          </div>
        </div>
      </div>
    </div>
  );
};
