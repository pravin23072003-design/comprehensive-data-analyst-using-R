import React from 'react';
import { X, CheckCircle, RotateCcw, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { StudentInfo } from '../types/report';

interface PlaceholderManagerProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentInfo;
  onUpdateStudent: (updated: Partial<StudentInfo>) => void;
  placeholders: Record<string, string>;
  onUpdatePlaceholder: (key: string, value: string) => void;
  onResetDefaults: () => void;
}

export const PlaceholderManager: React.FC<PlaceholderManagerProps> = ({
  isOpen,
  onClose,
  student,
  placeholders,
  onUpdatePlaceholder,
  onResetDefaults
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-lg bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-semibold text-base">Internship Details & Technical Verification</h3>
                <p className="text-xs text-slate-300">
                  Verified student credentials and optional technical overrides.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto">
            {/* GROUP A — VERIFIED DETAILS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  GROUP A — VERIFIED DETAILS
                </h4>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Completed & Verified
                </span>
              </div>

              <p className="text-xs text-slate-500">
                These credentials have been verified and are permanently applied across the report, title page, and DOCX export. No additional input is required.
              </p>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Name:</span>
                  <span className="font-bold text-slate-900">{student.name}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Register Number:</span>
                  <span className="font-bold text-slate-900 font-mono">{student.registerNumber}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">College:</span>
                  <span className="font-semibold text-slate-800">{student.college}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Department:</span>
                  <span className="font-semibold text-slate-800">{student.department}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Year / Semester:</span>
                  <span className="font-semibold text-slate-800">{student.yearSemester}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Organization:</span>
                  <span className="font-bold text-blue-900">{student.organization}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Internship Title:</span>
                  <span className="font-semibold text-slate-800">{student.internshipTitle}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Internship Period:</span>
                  <span className="font-semibold text-slate-800">{student.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Mentor:</span>
                  <span className="font-semibold text-slate-800">{student.mentor}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Faculty Coordinator:</span>
                  <span className="font-semibold text-slate-800">{student.coordinator}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Academic Year:</span>
                  <span className="font-semibold text-slate-800">{student.academicYear}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Submission Date:</span>
                  <span className="font-semibold text-slate-800">{student.submissionDate}</span>
                </div>
              </div>
            </div>

            {/* GROUP B — TECHNICAL VERIFICATION */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  GROUP B — TECHNICAL VERIFICATION (OPTIONAL)
                </h4>
                <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  Optional Fields
                </span>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900">
                <strong>No Mandatory Inputs Required:</strong> You do NOT need to fill these to preview or download the DOCX. If left empty, clean standard placeholders like <code>[Dataset row count – insert actual value]</code> will remain for final verification.
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Dataset Name:
                </label>
                <input
                  type="text"
                  value={
                    placeholders['[Dataset name – insert actual dataset name]'] === '[Dataset name – insert actual dataset name]'
                      ? ''
                      : placeholders['[Dataset name – insert actual dataset name]']
                  }
                  onChange={(e) =>
                    onUpdatePlaceholder(
                      '[Dataset name – insert actual dataset name]',
                      e.target.value.trim() === '' ? '[Dataset name – insert actual dataset name]' : e.target.value
                    )
                  }
                  placeholder="e.g. Employee Attrition Dataset (or leave blank)"
                  className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Dataset Source:
                </label>
                <input
                  type="text"
                  value={
                    placeholders['[Dataset source – insert actual source/repository]'] === '[Dataset source – insert actual source/repository]'
                      ? ''
                      : placeholders['[Dataset source – insert actual source/repository]']
                  }
                  onChange={(e) =>
                    onUpdatePlaceholder(
                      '[Dataset source – insert actual source/repository]',
                      e.target.value.trim() === '' ? '[Dataset source – insert actual source/repository]' : e.target.value
                    )
                  }
                  placeholder="e.g. Kaggle / UCI Repository (or leave blank)"
                  className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Rows:
                  </label>
                  <input
                    type="text"
                    value={
                      placeholders['[Dataset row count – insert actual value]'] === '[Dataset row count – insert actual value]'
                        ? ''
                        : placeholders['[Dataset row count – insert actual value]']
                    }
                    onChange={(e) =>
                      onUpdatePlaceholder(
                        '[Dataset row count – insert actual value]',
                        e.target.value.trim() === '' ? '[Dataset row count – insert actual value]' : e.target.value
                      )
                    }
                    placeholder="e.g. 1000 (or leave blank)"
                    className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Columns:
                  </label>
                  <input
                    type="text"
                    value={
                      placeholders['[Dataset column count – insert actual value]'] === '[Dataset column count – insert actual value]'
                        ? ''
                        : placeholders['[Dataset column count – insert actual value]']
                    }
                    onChange={(e) =>
                      onUpdatePlaceholder(
                        '[Dataset column count – insert actual value]',
                        e.target.value.trim() === '' ? '[Dataset column count – insert actual value]' : e.target.value
                      )
                    }
                    placeholder="e.g. 12 (or leave blank)"
                    className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Variable:
                </label>
                <input
                  type="text"
                  value={
                    placeholders['[Target variable – insert actual target feature]'] === '[Target variable – insert actual target feature]'
                      ? ''
                      : placeholders['[Target variable – insert actual target feature]']
                  }
                  onChange={(e) =>
                    onUpdatePlaceholder(
                      '[Target variable – insert actual target feature]',
                      e.target.value.trim() === '' ? '[Target variable – insert actual target feature]' : e.target.value
                    )
                  }
                  placeholder="e.g. AttritionStatus (or leave blank)"
                  className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Model Name:
                </label>
                <input
                  type="text"
                  value={
                    placeholders['[Actual model name from Week 3 – insert model name]'] === '[Actual model name from Week 3 – insert model name]'
                      ? ''
                      : placeholders['[Actual model name from Week 3 – insert model name]']
                  }
                  onChange={(e) =>
                    onUpdatePlaceholder(
                      '[Actual model name from Week 3 – insert model name]',
                      e.target.value.trim() === '' ? '[Actual model name from Week 3 – insert model name]' : e.target.value
                    )
                  }
                  placeholder="e.g. Logistic Regression (or leave blank)"
                  className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Accuracy:
                  </label>
                  <input
                    type="text"
                    value={
                      placeholders['[Actual model accuracy – insert from Week 3 R output]'] === '[Actual model accuracy – insert from Week 3 R output]'
                        ? ''
                        : placeholders['[Actual model accuracy – insert from Week 3 R output]']
                    }
                    onChange={(e) =>
                      onUpdatePlaceholder(
                        '[Actual model accuracy – insert from Week 3 R output]',
                        e.target.value.trim() === '' ? '[Actual model accuracy – insert from Week 3 R output]' : e.target.value
                      )
                    }
                    placeholder="e.g. 88.5% (or leave blank)"
                    className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    F1-Score:
                  </label>
                  <input
                    type="text"
                    value={
                      placeholders['[Insert actual F1-score from Week 3 R output]'] === '[Insert actual F1-score from Week 3 R output]'
                        ? ''
                        : placeholders['[Insert actual F1-score from Week 3 R output]']
                    }
                    onChange={(e) =>
                      onUpdatePlaceholder(
                        '[Insert actual F1-score from Week 3 R output]',
                        e.target.value.trim() === '' ? '[Insert actual F1-score from Week 3 R output]' : e.target.value
                      )
                    }
                    placeholder="e.g. 0.86 (or leave blank)"
                    className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Precision:
                  </label>
                  <input
                    type="text"
                    value={
                      placeholders['[Insert actual precision from Week 3 R output]'] === '[Insert actual precision from Week 3 R output]'
                        ? ''
                        : placeholders['[Insert actual precision from Week 3 R output]']
                    }
                    onChange={(e) =>
                      onUpdatePlaceholder(
                        '[Insert actual precision from Week 3 R output]',
                        e.target.value.trim() === '' ? '[Insert actual precision from Week 3 R output]' : e.target.value
                      )
                    }
                    placeholder="e.g. 0.85 (or leave blank)"
                    className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Recall:
                  </label>
                  <input
                    type="text"
                    value={
                      placeholders['[Insert actual recall from Week 3 R output]'] === '[Insert actual recall from Week 3 R output]'
                        ? ''
                        : placeholders['[Insert actual recall from Week 3 R output]']
                    }
                    onChange={(e) =>
                      onUpdatePlaceholder(
                        '[Insert actual recall from Week 3 R output]',
                        e.target.value.trim() === '' ? '[Insert actual recall from Week 3 R output]' : e.target.value
                      )
                    }
                    placeholder="e.g. 0.87 (or leave blank)"
                    className="w-full text-xs px-3 py-2 border rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium px-3 py-2 rounded border border-slate-200 hover:bg-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Technical Overrides
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            Done / Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
