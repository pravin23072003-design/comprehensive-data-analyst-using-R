import React, { useState } from 'react';
import {
  FileDown,
  Printer,
  Sparkles,
  Sliders,
  Copy,
  Check,
  GraduationCap,
  Eye,
  EyeOff
} from 'lucide-react';
import { StudentInfo } from '../types/report';

interface HeaderProps {
  student: StudentInfo;
  onOpenCustomizer: () => void;
  onExportDocx: () => Promise<void>;
  isExporting: boolean;
  highlightPlaceholders: boolean;
  onToggleHighlightPlaceholders: () => void;
  onCopyMarkdown: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  student,
  onOpenCustomizer,
  onExportDocx,
  isExporting,
  highlightPlaceholders,
  onToggleHighlightPlaceholders,
  onCopyMarkdown
}) => {
  const [copiedMd, setCopiedMd] = useState(false);

  const handleCopyMd = () => {
    onCopyMarkdown();
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-inner">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-tight text-white line-clamp-1">
                Comprehensive Data Analysis and Reporting Using R
              </h1>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Week 4 Final
              </span>
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-1">
              {student.college} · {student.department} · {student.name} ({student.registerNumber})
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Highlight Placeholders Toggle */}
          <button
            onClick={onToggleHighlightPlaceholders}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              highlightPlaceholders
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            title="Highlight all missing value placeholders in amber"
          >
            {highlightPlaceholders ? (
              <>
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>Placeholders: ON</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Placeholders: OFF</span>
              </>
            )}
          </button>

          {/* Customize Drawer Button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Edit student details & placeholders"
          >
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Customize Details</span>
          </button>

          {/* Copy Markdown */}
          <button
            onClick={handleCopyMd}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Copy entire document as Markdown"
          >
            {copiedMd ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          {/* Print / Save PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Main Primary Action: Download DOCX */}
          <button
            onClick={onExportDocx}
            disabled={isExporting}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-900/40 hover:shadow-blue-900/60 transition-all disabled:opacity-50"
            title="Download formatted DOCX file for Microsoft Word"
          >
            <FileDown className="w-4 h-4" />
            <span>{isExporting ? 'Generating DOCX...' : 'Download DOCX'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
