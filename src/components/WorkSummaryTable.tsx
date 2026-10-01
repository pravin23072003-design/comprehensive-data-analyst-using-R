import React from 'react';
import { ReportTableData } from '../types/report';

interface WorkSummaryTableProps {
  tableData: ReportTableData;
  highlightPlaceholders?: boolean;
}

export const WorkSummaryTable: React.FC<WorkSummaryTableProps> = ({
  tableData,
  highlightPlaceholders = true
}) => {
  const formatCellText = (text: string) => {
    // If text contains [PLACEHOLDERS], highlight them
    const parts = text.split(/(\[[A-Z0-9_\s–,/.:]+\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span
            key={index}
            className={`font-semibold rounded px-1 py-0.5 text-[11px] ${
              highlightPlaceholders
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'text-blue-900'
            }`}
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="my-6 avoid-break">
      <div className="text-xs font-serif font-bold text-slate-800 mb-2 italic">
        {tableData.caption}
      </div>
      <div className="overflow-x-auto rounded-lg border border-slate-300 bg-white shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white border-b border-slate-800">
              {tableData.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px] border-r border-slate-800 last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {tableData.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={rowIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}
              >
                {row.map((cell, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-4 py-3 text-slate-700 leading-relaxed border-r border-slate-200 last:border-r-0 align-top ${
                      colIdx === 0 ? 'font-semibold text-slate-900 whitespace-nowrap' : ''
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {formatCellText(cell)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
