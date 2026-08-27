export interface SubjectReportSummary {
  subjectId: string;
  subjectName: string;
  accuracyPercent: number;
  totalQuestionsAttempted: number;
  totalCorrect: number;
  readinessLevel: 'excellent' | 'moderate' | 'needs_improvement';
  readinessText: string;
  color: string;
  topStrengths: string[];
  focusAreas: string[];
  aiAdviceForParents: string;
}

export interface ParentDiagnosticReport {
  studentName: string;
  targetSchool: string;
  studentAvatar: string;
  currentLevel: number;
  currentExp: number;
  totalQuestionsDone: number;
  totalExamsDone: number;
  overallAccuracyPercent: number;
  overallReadiness: 'excellent' | 'moderate' | 'needs_improvement';
  overallAssessmentText: string;
  assessmentDate: string;
  subjects: SubjectReportSummary[];
  topGlobalStrengths: string[];
  topGlobalWeaknesses: string[];
  studyPlanRoadmap: {
    phase: string;
    duration: string;
    focus: string;
    parentAction: string;
  }[];
}
