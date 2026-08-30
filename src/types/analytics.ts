export interface TopicMastery {
  topicId: string;
  topicName: string;
  subjectId: string;
  totalAttempted: number;
  totalCorrect: number;
  accuracyRate: number; // 0 - 100
  averageTimePerQuestion: number;
  masteryLevel: 'needs_work' | 'improving' | 'mastered';
}

export interface SubjectAnalytics {
  subjectId: string;
  subjectName: string;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  averageScorePercent: number;
  topicsMastery: TopicMastery[];
}

export interface RadarCompetencyItem {
  subject: string;
  score: number;
  fullMark: number;
  questionsCount: number;
}

export interface AdmissionChanceTier {
  tier: 'excellent' | 'good' | 'moderate' | 'needs_improvement';
  title: string;
  description: string;
  color: string;
  bgLight: string;
  badgeBg: string;
  probabilityText: string;
}

export interface PaceAnalysis {
  averageSecondsPerQuestion: number;
  formattedPace: string;
  status: 'fast' | 'optimal' | 'slow';
  statusText: string;
  tip: string;
}

export interface ActionPlanItem {
  step: number;
  title: string;
  description: string;
  actionLabel: string;
  actionUrl: string;
  priority: 'high' | 'medium' | 'normal';
}

export interface UserOverallStats {
  totalQuestionsAttempted: number;
  totalCorrect: number;
  accuracyRate: number;
  totalStudyTimeSeconds: number;
  streakDays: number;
  lastActiveDate: string;
  mockExamsCompleted: number;
  examReadinessScore: number; // 0 - 100
  strongestTopics: string[];
  weakestTopics: string[];
  radarCompetencyData?: RadarCompetencyItem[];
  admissionChanceTier?: AdmissionChanceTier;
  actionPlan?: ActionPlanItem[];
  totalQuestionsAnswered?: number;
  overallAccuracy?: number;
  totalCorrectAnswers?: number;
  subjectStats?: SubjectAnalytics[];
}

/** ผลวิเคราะห์รายบทย่อยของแต่ละวิชา */
export interface SubTopicDiagnostic {
  topicId: string;           // เช่น 'math-algebra', 'sci-physics'
  topicName: string;         // ชื่อบทย่อย
  subjectId: string;         // วิชาแม่
  totalAttempted: number;
  totalCorrect: number;
  accuracyPercent: number;   // 0–100
  status: 'excellent' | 'good' | 'warning' | 'critical' | 'no_data';
  // excellent ≥ 80%, good ≥ 65%, warning ≥ 50%, critical < 50%
  avgTimePerQuestion: number; // วินาที
  trend: 'improving' | 'stable' | 'declining' | 'unknown';
}

/** ผลวิเคราะห์รายวิชา พร้อมข้อมูลบทย่อย */
export interface SubjectDiagnosticResult {
  subjectId: string;
  subjectName: string;
  subjectNameEn: string;
  color: string;             // Hex theme color
  bgColor: string;
  borderColor: string;
  icon: string;              // Lucide icon name
  overallAccuracy: number;
  totalAttempted: number;
  totalCorrect: number;
  status: 'excellent' | 'good' | 'warning' | 'critical' | 'no_data';
  subTopics: SubTopicDiagnostic[];
  weakestTopic: SubTopicDiagnostic | null;  // บทที่อ่อนที่สุดเพื่อเสนอซ่อม
}

/** ข้อมูลสำหรับ 5-Subject Radar Chart */
export interface SubjectRadarPoint {
  subject: string;           // ชื่อวิชา
  subjectId: string;
  score: number;             // 0–100 accuracy
  fullMark: number;          // 100
  questionsCount: number;
  color: string;             // Theme color
}

/** ผลลัพธ์รวมจาก AI Diagnostic Engine */
export interface AIDiagnosticResult {
  studentName: string;
  targetSchool: string;
  assessmentDate: string;
  overallAccuracy: number;
  overallReadiness: number;
  totalQuestionsAnalyzed: number;
  totalMockExamsDone: number;
  streakDays: number;
  subjectResults: SubjectDiagnosticResult[];
  subjectRadarData: SubjectRadarPoint[];
  rankedWeaknesses: SubTopicDiagnostic[];
  rankedStrengths: SubTopicDiagnostic[];
}


