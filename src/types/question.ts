export type QuestionType = 'multiple_choice' | 'short_answer' | 'long_answer';
export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'olympiad';

export interface Choice {
  id: string;
  label: 'ก' | 'ข' | 'ค' | 'ง' | string;
  content: string;
  contentImage?: string;
  isCorrect: boolean;
}

export interface SolutionStep {
  stepNumber?: number;
  title?: string;
  content: string;
  imageUrl?: string;
  imageCaption?: string;
  formula?: string;
}

export interface Solution {
  summary: string;
  text?: string;
  steps: (SolutionStep | string)[];
  trickTip?: string;
  fastTrick?: string;
  commonMistake?: string;
  videoUrl?: string;
  correctChoiceId?: string;
}

export interface Question {
  id: string;
  subjectId: string;
  topicId: string;
  topicName: string;
  type: QuestionType;
  difficulty: DifficultyLevel;
  points: number;
  timeEstimateSeconds: number;
  tags: string[];
  source: string;
  targetSchool?: 'benchama' | 'chulabhorn' | 'all';
  content: string;
  contentImage?: string;
  choices?: Choice[];
  correctAnswer?: string; // For short_answer or long_answer reference
  acceptableAnswers?: string[]; // Variations of acceptable answers for short_answer
  solution: Solution;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  totalQuestions: number;
  order: number;
}

export interface Subject {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  topics: Topic[];
  totalQuestions: number;
  order: number;
}
