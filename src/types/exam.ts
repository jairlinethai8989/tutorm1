import { Question } from './question';

export interface MockExam {
  id: string;
  name: string;
  targetSchool: 'เบ็ญจะมะมหาราช' | 'จุฬาภรณราชวิทยาลัย' | 'สตรีวิทยา' | 'ทั่วไป' | string;
  targetSchoolEn: 'benchama' | 'chulabhorn' | 'satriwit' | 'general' | string;
  subjectId: string;
  subjectName: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  passingScorePercent: number;
  description: string;
  questionIds: string[];
  questions?: Question[];
  badgeColor: string;
}

export interface UserAnswer {
  questionId: string;
  questionType: 'multiple_choice' | 'short_answer' | 'long_answer';
  selectedChoiceId?: string;
  textAnswer?: string;
  isCorrect?: boolean;
  scoreAwarded?: number;
  maxScore: number;
  timeSpentSeconds: number;
  markedForReview?: boolean;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  subjectId: string;
  mode: 'practice' | 'mock_exam';
  startedAt: string;
  completedAt: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  totalScore: number;
  maxPossibleScore: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  timeLimitSeconds: number;
  answers: Record<string, UserAnswer>;
  topicBreakdown: Record<string, { total: number; correct: number; score: number; maxScore: number }>;
}
