import React from 'react';
import { BookOpen, FileText, Code, Table, BarChart2, CheckCircle, Clock, ClipboardCheck } from 'lucide-react';

interface TableOfContentsProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  activeSection,
  onSelectSection
}) => {
  const sections = [
    { id: 'sec-title', label: '1. Title Page', icon: FileText, tag: 'Cover' },
    { id: 'sec-decl', label: '2. Declaration', icon: FileText, tag: 'Formal' },
    { id: 'sec-ack', label: '3. Acknowledgement', icon: FileText, tag: 'Formal' },
    { id: 'sec-toc', label: '4. Table of Contents', icon: BookOpen, tag: 'Index' },
    { id: 'sec-exec', label: '5. Executive Summary', icon: FileText, tag: 'Summary' },
    { id: 'sec-intro', label: '6. Introduction', icon: FileText, tag: 'Concept' },
    { id: 'sec-obj', label: '7. Internship Objectives', icon: CheckCircle, tag: 'Goals' },
    { id: 'sec-week', label: '8. Week-Wise Work Summary', icon: Table, tag: 'Weeks 1-4' },
    { id: 'sec-dataset', label: '9. Dataset Description', icon: Table, tag: 'Metadata' },
    { id: 'sec-cleaning', label: '10. Data Preparation & Cleaning', icon: Code, tag: '9 R Chunks' },
    { id: 'sec-eda', label: '11. Exploratory Visualization', icon: BarChart2, tag: '4 Figures' },
    { id: 'sec-model', label: '12. Statistical Modeling', icon: Code, tag: 'Predictive' },
    { id: 'sec-week4', label: '13. Week 4 32.5-Hour Log', icon: Clock, tag: 'Worklog' },
    { id: 'sec-results', label: '14. Results & Insights', icon: FileText, tag: 'Analysis' },
    { id: 'sec-challenges', label: '15. Challenges & Solutions', icon: FileText, tag: 'Technical' },
    { id: 'sec-conclusion', label: '16. Conclusion & Future Scope', icon: FileText, tag: 'Closing' },
    { id: 'sec-ref', label: '17. References / Bibliography', icon: BookOpen, tag: 'Academic' },
    { id: 'sec-app', label: '18. Appendix & Session Info', icon: Code, tag: 'Script' },
    { id: 'sec-verify', label: '19. Verification Checklist', icon: ClipboardCheck, tag: 'Pre-flight' }
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto hidden lg:block no-print select-none">
      <div className="p-4 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Document Outline
          </h2>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">
          18 Sections · Complete Academic Report
        </p>
      </div>

      <nav className="p-3 space-y-1">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg font-medium transition-all text-left ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="truncate">{sec.label}</span>
              </div>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                  isActive ? 'bg-blue-200/70 text-blue-900' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {sec.tag}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
