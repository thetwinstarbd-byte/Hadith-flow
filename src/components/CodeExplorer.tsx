import React, { useState } from 'react';
import {
  FileCode,
  Copy,
  Check,
  Search,
  FolderTree,
  ChevronRight,
  Code2
} from 'lucide-react';
import { flutterProjectFiles, FlutterFile } from '../data/flutterFiles';

export const CodeExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<FlutterFile>(flutterProjectFiles[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const filteredFiles = flutterProjectFiles.filter((file) =>
    file.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-[#0B1321] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-bengali">
      {/* File Tree / Sidebar */}
      <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-slate-800 bg-[#060A12] flex flex-col shrink-0">
        <div className="p-3.5 border-b border-slate-800">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ফাইল সার্চ করুন..."
              className="w-full py-1.5 pl-8 pr-3 text-xs bg-slate-900 border border-slate-700/80 rounded-xl text-slate-200 placeholder-slate-500 outline-none focus:border-emerald-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto max-h-[500px] lg:max-h-[650px] p-2 space-y-1">
          {filteredFiles.map((file) => (
            <button
              key={file.path}
              onClick={() => setSelectedFile(file)}
              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                selectedFile.path === file.path
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <FileCode className={`w-4 h-4 shrink-0 ${selectedFile.path === file.path ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span className="truncate font-mono">{file.path}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
            </button>
          ))}
        </div>
      </div>

      {/* Code Viewer */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#080E1A]">
        {/* File Header */}
        <div className="p-3.5 border-b border-slate-800/90 flex items-center justify-between bg-[#060A12]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-bold text-white">
                {selectedFile.path}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {selectedFile.category}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {selectedFile.description}
            </p>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-semibold border border-slate-700 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'কপি হয়েছে' : 'কোড কপি করুন'}</span>
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto max-h-[600px] overflow-y-auto">
          <pre className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
            <code>{selectedFile.content}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
