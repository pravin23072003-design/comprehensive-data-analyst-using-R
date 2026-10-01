import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TableOfContents } from './components/TableOfContents';
import { ReportViewer } from './components/ReportViewer';
import { PlaceholderManager } from './components/PlaceholderManager';
import { StudentInfo } from './types/report';
import { defaultStudentInfo, defaultPlaceholders } from './data/reportData';
import { exportReportToDocx } from './utils/docxExport';
import { ArrowUp, Sparkles, Check, FileDown } from 'lucide-react';

export default function App() {
  const [student, setStudent] = useState<StudentInfo>(() => {
    const saved = localStorage.getItem('fxec_internship_student');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.name !== '[YOUR NAME]') {
          return { ...defaultStudentInfo, ...parsed };
        }
      } catch (e) {
        // ignore error
      }
    }
    return defaultStudentInfo;
  });

  const [placeholders, setPlaceholders] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('fxec_internship_placeholders');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...defaultPlaceholders, ...parsed };
      } catch (e) {
        // ignore error
      }
    }
    return defaultPlaceholders;
  });

  const [highlightPlaceholders, setHighlightPlaceholders] = useState<boolean>(true);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('sec-title');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('fxec_internship_student', JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    localStorage.setItem('fxec_internship_placeholders', JSON.stringify(placeholders));
  }, [placeholders]);

  // Track scroll position for active section & scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionIds = [
        'sec-title',
        'sec-decl',
        'sec-ack',
        'sec-toc',
        'sec-exec',
        'sec-intro',
        'sec-obj',
        'sec-week',
        'sec-dataset',
        'sec-cleaning',
        'sec-eda',
        'sec-model',
        'sec-week4',
        'sec-results',
        'sec-challenges',
        'sec-conclusion',
        'sec-ref',
        'sec-app',
        'sec-verify'
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleUpdateStudent = (updated: Partial<StudentInfo>) => {
    setStudent((prev) => ({ ...prev, ...updated }));
  };

  const handleUpdatePlaceholder = (key: string, value: string) => {
    setPlaceholders((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetDefaults = () => {
    setStudent(defaultStudentInfo);
    setPlaceholders(defaultPlaceholders);
    localStorage.removeItem('fxec_internship_student');
    localStorage.removeItem('fxec_internship_placeholders');
    showToast('Reset all details to verified defaults.');
  };

  const handleExportDocx = async () => {
    try {
      setIsExporting(true);
      await exportReportToDocx(student, placeholders);
      showToast('DOCX report successfully generated and downloaded!');
    } catch (err) {
      console.error('Failed to export DOCX:', err);
      showToast('Error generating DOCX document. Please check console.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyMarkdown = () => {
    // Generate clean text/markdown representation
    const textContent = `# COMPREHENSIVE DATA ANALYSIS AND REPORTING USING R
## ${student.internshipTitle} - Week 4 Final Report

Submitted by:
${student.name}
Register Number: ${student.registerNumber}
${student.yearSemester}
Department of ${student.department}
${student.college}

Internship Organization: ${student.organization}
Internship Period: ${student.duration}
Mentor: ${student.mentor}
Faculty Coordinator: ${student.coordinator}
Academic Year: ${student.academicYear}
Submission Date: ${student.submissionDate}

(Full academic report compiled with all 18 sections, annotated R code blocks, and 32.5-hour Week 4 activity log. Use the 'Download DOCX' button for the official Microsoft Word file).`;

    navigator.clipboard.writeText(textContent);
    showToast('Summary and report metadata copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Application Header */}
      <Header
        student={student}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onExportDocx={handleExportDocx}
        isExporting={isExporting}
        highlightPlaceholders={highlightPlaceholders}
        onToggleHighlightPlaceholders={() => setHighlightPlaceholders(!highlightPlaceholders)}
        onCopyMarkdown={handleCopyMarkdown}
      />

      {/* Main Container: Sidebar + Paper Document */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-2 sm:px-4 lg:px-6">
        {/* Table of Contents Sidebar */}
        <TableOfContents
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />

        {/* Report Content View */}
        <main className="flex-1 min-w-0 pb-16">
          <ReportViewer
            student={student}
            placeholders={placeholders}
            highlightPlaceholders={highlightPlaceholders}
          />
        </main>
      </div>

      {/* Customizer Drawer */}
      <PlaceholderManager
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        student={student}
        onUpdateStudent={handleUpdateStudent}
        placeholders={placeholders}
        onUpdatePlaceholder={handleUpdatePlaceholder}
        onResetDefaults={handleResetDefaults}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all z-30 no-print"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
