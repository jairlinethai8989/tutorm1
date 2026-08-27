export type SubjectCategory = 'math' | 'science' | 'english' | 'thai' | 'social';

export interface FormulaItem {
  id: string;
  title: string;
  category: SubjectCategory;
  subCategory: string;
  formula?: string; // LaTeX formula string
  description: string;
  example?: string;
  fastTrick?: string;
  importance: 'must_know' | 'frequent' | 'advanced';
  tags: string[];
}

export interface CheatSheetSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: FormulaItem[];
}

export interface SubjectCheatSheetData {
  subjectId: SubjectCategory;
  subjectName: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
  sections: CheatSheetSection[];
}
