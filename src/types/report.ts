export interface StudentInfo {
  name: string;
  registerNumber: string;
  yearSemester: string;
  internshipTitle: string;
  weekTitle: string;
  college: string;
  department: string;
  organization: string;
  duration: string;
  startDate: string;
  endDate: string;
  mentor: string;
  coordinator: string;
  academicYear: string;
  submissionDate: string;
}

export interface MetricPlaceholder {
  key: string;
  label: string;
  defaultValue: string;
  currentValue: string;
  description: string;
}

export interface CodeBlockData {
  title: string;
  purpose: string;
  code: string;
  explanation: string;
  outputPreview?: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface ReportTableData {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface FigureData {
  id: string;
  caption: string;
  plotType: 'ggplot2' | 'lattice' | 'base_r' | 'heatmap' | 'evaluation';
  rCode: string;
  description: string;
  placeholderText: string;
}
