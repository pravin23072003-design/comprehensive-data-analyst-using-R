import React, { useState } from 'react';
import { Copy, Check, BarChart2, Code2, Image } from 'lucide-react';
import { FigureData } from '../types/report';

interface FigureCardProps {
  figure: FigureData;
  placeholderText: string;
}

export const FigureCard: React.FC<FigureCardProps> = ({ figure, placeholderText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(figure.rCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-slate-300 bg-white shadow-sm overflow-hidden avoid-break">
      {/* Figure Title Header */}
      <div className="bg-slate-900 text-white px-5 py-3 border-b border-slate-800 flex items-center justify-between">
        <h4 className="text-xs sm:text-sm font-semibold font-serif flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-blue-400 shrink-0" />
          <span>{figure.caption}</span>
        </h4>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
          title="Copy R Code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      <div className="p-5 space-y-4 text-xs">
        {/* Purpose */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-lg p-3 text-slate-800">
          <strong className="text-blue-900 block font-semibold uppercase tracking-wider text-[10px] mb-1">
            Purpose:
          </strong>
          <p className="leading-relaxed text-slate-700">{figure.description}</p>
        </div>

        {/* R Code */}
        <div>
          <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-1.5 text-[11px] uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5 text-slate-500" />
            <span>R Code:</span>
          </div>
          <pre className="p-3.5 bg-slate-950 text-emerald-300 font-code text-xs rounded-lg overflow-x-auto whitespace-pre">
            {figure.rCode}
          </pre>
        </div>

        {/* Actual Output Slot */}
        <div>
          <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-1.5 text-[11px] uppercase tracking-wider">
            <Image className="w-3.5 h-3.5 text-slate-500" />
            <span>Actual Output:</span>
          </div>
          <div className="border-2 border-dashed border-amber-300 bg-amber-50/50 rounded-xl p-8 text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
              <Image className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs font-bold text-amber-900">
              [Insert actual graph generated from R]
            </div>
            <p className="text-[11px] text-amber-700 mt-1 max-w-md">
              Attach the authentic graphic exported from your Week 2 RStudio session (e.g. via <code>ggsave("{figure.id}.png", dpi = 300)</code>).
            </p>
          </div>
        </div>

        {/* Interpretation */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-700">
          <strong className="text-slate-900 block font-semibold uppercase tracking-wider text-[10px] mb-1">
            Interpretation:
          </strong>
          <p className="italic text-slate-600">
            [To be completed using the actual graph]
          </p>
        </div>
      </div>
    </div>
  );
};
