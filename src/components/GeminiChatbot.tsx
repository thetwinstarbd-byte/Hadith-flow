import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  BookOpen,
  HelpCircle,
  RefreshCw,
  Copy,
  Check,
  ArrowLeft
} from 'lucide-react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface GeminiChatbotProps {
  onBack: () => void;
}

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। আমি আপনার ইসলামি হাদিস ও তাহকিক সহকারী। সহীহ বুখারী, মুসলিম, সুনান গ্রন্থসমূহের যে কোনো হাদিস, রেফারেন্স বা তাহকিক সংক্রান্ত যে কোনো প্রশ্ন জিজ্ঞাসা করতে পারেন।',
      timestamp: 'এখন'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) {
        throw new Error('সার্ভার থেকে উত্তর পাওয়া যায়নি।');
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি।',
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (err: any) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `দুঃখিত, একটি সমস্যা হয়েছে: ${err.message || 'নেটওয়ার্ক সংযোগ পরীক্ষা করুন।'}`,
        timestamp: 'ত্রুটি'
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const suggestedQuestions = [
    'সহীহ বুখারীর ১ নং হাদিসের তাহকিক কী?',
    'হাদিসে জিবরীলের মূল শিক্ষা কী?',
    'ওযুর ফজিলত নিয়ে বর্ণিত সহীহ হাদিস বলুন',
    'হাদিসের মান (সহীহ, হাসান, যইফ) কীভাবে নির্ধারিত হয়?'
  ];

  return (
    <div className="flex flex-col h-full bg-[#FAFCFB] dark:bg-[#061712] text-slate-800 dark:text-slate-100 font-bengali">
      {/* Top Header */}
      <div className="bg-[#0D5C46] text-white px-4 py-3 shadow-md flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            title="ফিরে যান"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h2 className="text-sm font-bold flex items-center gap-1.5">
              <span>তাহকিক সহকারী ও হাদিস গবেষক</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </h2>
            <p className="text-[10px] text-emerald-200">প্রামাণ্য হাদিস ও তাহকিক বিশ্লেষণ</p>
          </div>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 max-w-[90%] sm:max-w-[85%] ${
              msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                msg.role === 'user'
                  ? 'bg-amber-500 text-white'
                  : 'bg-[#0D5C46] text-amber-300'
              }`}
            >
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs relative group ${
                msg.role === 'user'
                  ? 'bg-emerald-700 text-white rounded-tr-xs'
                  : 'bg-white dark:bg-[#0C241D] text-slate-800 dark:text-slate-100 border border-emerald-100 dark:border-emerald-800 rounded-tl-xs'
              }`}
            >
              <p className="whitespace-pre-line">{msg.content}</p>
              
              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-black/5 dark:border-white/5 text-[10px] opacity-70">
                <span>{msg.timestamp}</span>
                <button
                  onClick={() => copyText(msg.id, msg.content)}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  {copiedId === msg.id ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  <span>কপি</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-2.5 items-center mr-auto text-xs text-slate-500 dark:text-emerald-300">
            <div className="w-7 h-7 rounded-full bg-[#0D5C46] text-amber-300 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-2xl bg-white dark:bg-[#0C241D] border border-emerald-100 dark:border-emerald-800 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0D5C46] dark:text-emerald-400" />
              <span>তাহকিক পর্যালোচনা করা হচ্ছে...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      {messages.length <= 2 && (
        <div className="px-3 pb-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            প্রস্তাবিত জিজ্ঞাসা:
          </p>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-[#0D5C46] dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-all shrink-0 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Box */}
      <div className="p-3 bg-white dark:bg-[#071F17] border-t border-emerald-100 dark:border-emerald-800/80 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="হাদিস নম্বর, সনদ বা তাহকিক সম্পর্কে জিজ্ঞাসা করুন..."
            className="flex-1 py-2 px-3.5 rounded-xl border border-emerald-200 dark:border-emerald-700 bg-slate-50 dark:bg-[#0C241D] text-xs text-slate-800 dark:text-slate-100 outline-none focus:border-[#0D5C46] transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="p-2 rounded-xl bg-[#0D5C46] hover:bg-[#094132] disabled:opacity-50 text-white transition-all cursor-pointer"
            title="পাঠান"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
