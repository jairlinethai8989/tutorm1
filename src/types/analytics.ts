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
}

