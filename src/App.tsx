import React, { useState } from 'react';
import {
  Code2,
  Smartphone,
  BookOpen,
  Download,
  FolderGit2,
  Sparkles,
  ExternalLink,
  Layers,
  Database,
  Radio,
  FileCode,
  ShieldCheck,
  CheckCircle,
  Crown,
  LayoutGrid,
  Bot
} from 'lucide-react';
import { CodeExplorer } from './components/CodeExplorer';
import { MobileSimulator } from './components/MobileSimulator';
import { SetupGuide } from './components/SetupGuide';
import { FeatureRoadmapModal } from './components/FeatureRoadmapModal';
import { GeminiChatbot } from './components/GeminiChatbot';
import { downloadFlutterProjectZip } from './utils/zipExporter';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'files' | 'guide' | 'chatbot'>('simulator');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [showRoadmap, setShowRoadmap] = useState<boolean>(false);

  const handleDownloadAll = async () => {
    try {
      setIsDownloading(true);
      await downloadFlutterProjectZip();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-bengali">
      {/* Top Luxury Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0B1321]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-emerald-600 to-teal-400 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#060A12] rounded-[10px] flex items-center justify-center text-amber-400">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base sm:text-lg text-white tracking-wide flex items-center gap-1.5">
                  <span>আল-হাদিস: অফলাইন ফ্লাটার লাইব্রেরি</span>
                  <Crown className="w-4 h-4 text-amber-400" />
                </h1>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  ৫ বিভাগ • অফলাইন SQLite
                </span>
              </div>
              <p className="text-xs text-slate-300 hidden sm:block">
                ধারাবাহিক হাদিস ১..N • মান ও তাহকিক • স্মার্ট AdMob • হাই-কন্ট্রাস্ট ডার্ক মোড
              </p>
            </div>
          </div>

          {/* Action Buttons: Roadmap & Download .zip */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowRoadmap(true)}
              className="py-2 px-3.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">নতুন ফিচার রোডম্যাপ</span>
              <span className="sm:hidden">ফিচারসমূহ</span>
            </button>

            <button
              onClick={handleDownloadAll}
              disabled={isDownloading}
              className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-emerald-900 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isDownloading ? 'ডাউনলোড হচ্ছে...' : 'সম্পূর্ণ Flutter কোড (.zip)'}
              </span>
              <span className="sm:hidden">কোড (.zip)</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 border-t border-white/5 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>লাইভ মোবাইল প্রিভিউ (৫-বিভাগ ও হাদিস)</span>
          </button>

          <button
            onClick={() => setActiveTab('chatbot')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'chatbot'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span>তাহকিক সহকারী এআই (Gemini)</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'files'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Flutter কোড ভিউয়ার (GitHub Code)</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            <span>সেটআপ নির্দেশিকা ও ডাটাবেজ সমাধান</span>
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8">
        {activeTab === 'simulator' && (
          <div className="space-y-4">
            <div className="bg-[#0B1321] border border-amber-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>আপডেটকৃত লাক্সারি মোবাইল অ্যাপ সিমুলেটর</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                      গ্রিড ও ধারাবাহিক হাদিস চালু
                    </span>
                  </h2>
                  <p className="text-xs text-slate-300">
                    কমপ্যাক্ট ৫-স্তম্ভ গোলকীয় হোমপেজ, ধারাবাহিক হাদিস ১..N, কুরআনের সুরা ও আয়াত, এবং তাহকিক অ্যানালাইসিস।
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowRoadmap(true)}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 px-3 py-1.5 rounded-xl border border-amber-500/30 font-medium transition-all cursor-pointer"
                >
                  ফিচার রোডম্যাপ
                </button>
              </div>
            </div>
            <MobileSimulator />
          </div>
        )}

        {activeTab === 'chatbot' && (
          <div className="space-y-4">
            <div className="bg-[#0B1321] border border-amber-500/20 rounded-2xl p-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    তাহকিক সহকারী ও হাদিস গবেষক (Powered by Gemini)
                  </h2>
                  <p className="text-xs text-slate-300">
                    হাদিসের সনদ, রাবী পরম্পরা ও তাহকিক সংক্রান্ত প্রশ্ন জিজ্ঞাসা করুন।
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[620px] max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/80 bg-[#061712]">
              <GeminiChatbot onBack={() => setActiveTab('simulator')} />
            </div>
          </div>
        )}

        {activeTab === 'files' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0B1321] border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <FileCode className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    Flutter সোর্স কোড (Ready-to-use Codebase)
                  </h2>
                  <p className="text-xs text-slate-300">
                    SQLite, তাহকিক বটম শিট, স্মার্ট AdMob এবং ফায়ারবেস রিমোট কনফিগ সম্বলিত ফাইলসমূহ।
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs bg-amber-950/80 text-amber-300 border border-amber-800 px-3 py-1 rounded-lg font-mono">
                  Core Files Ready
                </span>
              </div>
            </div>
            <CodeExplorer />
          </div>
        )}

        {activeTab === 'guide' && <SetupGuide />}
      </main>

      {/* Feature Roadmap Modal */}
      <FeatureRoadmapModal isOpen={showRoadmap} onClose={() => setShowRoadmap(false)} />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#050811] py-6 px-4 text-center text-xs text-slate-400 font-bengali">
        <p>
          আল-হাদিস অফলাইন লাইব্রেরি • Flutter Architecture with SQLite, Tahqiq Analysis, AdMob & Firebase Remote Config
        </p>
      </footer>
    </div>
  );
}
