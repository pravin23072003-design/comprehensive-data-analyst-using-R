import React, { useState } from 'react';
import { Copy, Check, Terminal, Play } from 'lucide-react';

interface RCodeBlockProps {
  title?: string;
  code: string;
  purpose?: string;
  explanation?: string;
  outputPreview?: string;
  highlightPlaceholders?: boolean;
}

export const RCodeBlock: React.FC<RCodeBlockProps> = ({
  title,
  code,
  purpose,
  explanation,
  outputPreview,
  highlightPlaceholders = true
}) => {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden avoid-break">
      {title && (
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-rose-500"></span>
            <span className="flex h-3 w-3 rounded-full bg-amber-500"></span>
            <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-xs font-semibold tracking-wide text-slate-300 font-mono flex items-center gap-1.5">
              <span className="inline-block px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 text-[10px] font-bold">R</span>
              {title}
            </span>
          </div>
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
      )}

      {purpose && (
        <div className="px-4 py-2.5 bg-blue-50/70 border-b border-blue-100 text-xs text-blue-900">
          <strong className="text-blue-800 uppercase tracking-wider text-[11px] mr-1.5">Objective:</strong>
          {purpose}
        </div>
      )}

      <div className="p-4 bg-slate-950 overflow-x-auto text-slate-100 text-xs font-code leading-relaxed">
        <pre className="text-emerald-300/90 whitespace-pre">
          {code}
        </pre>
      </div>

      {outputPreview && (
        <div className="border-t border-slate-200">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-100 text-xs text-slate-600 font-medium border-b border-slate-200">
            <span className="flex items-center gap-1.5 text-slate-700">
              <Terminal className="w-3.5 h-3.5 text-slate-500" />
              Console Output Preview
            </span>
            <button
              onClick={() => setShowOutput(!showOutput)}
              className="text-[11px] text-blue-600 hover:text-blue-800 hover:underline"
            >
              {showOutput ? 'Hide Output' : 'Show Output'}
            </button>
          </div>
          {showOutput && (
            <div className="p-3 bg-slate-900 text-slate-300 text-xs font-code overflow-x-auto">
              <pre className="text-cyan-300 whitespace-pre-wrap">{outputPreview}</pre>
            </div>
          )}
        </div>
      )}

      {explanation && (
        <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-200">
          <strong className="text-slate-900 block mb-1 font-semibold uppercase tracking-wider text-[10px]">
            Technical Explanation:
          </strong>
          {explanation}
        </div>
      )}
    </div>
  );
};
