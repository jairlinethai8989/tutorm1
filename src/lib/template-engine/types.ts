import { Question, SolutionStep } from '@/types/question';

export interface ParamDef {
  name: string;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export interface DistractorStrategy {
  label: string;
  compute: (params: Record<string, number>, correctAnswer: number) => number;
}

export interface QuestionTemplate {
  id: string;
  title: string;
  subjectId: 'math' | 'science';
  topicId: string;
  topicName: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  params: ParamDef[];
  constraints?: (params: Record<string, number>) => boolean;
  questionText: (params: Record<string, number>) => string;
  correctAnswer: (params: Record<string, number>) => number;
  answerUnit?: string;
  answerFormat?: 'integer' | 'decimal1' | 'decimal2';
  distractors: DistractorStrategy[];
  solutionSteps: (params: Record<string, number>, correctAnswer: number) => SolutionStep[];
  trickTip?: (params: Record<string, number>) => string;
  commonMistake?: string;
}

export interface GeneratedQuestionMetadata {
  isAiGenerated: boolean;
  templateId: string;
  templateTitle: string;
  params: Record<string, number>;
  generatedAt: string;
}

export interface TemplatePracticeSession {
  topicId: string;
  topicName: string;
  subjectId: string;
  totalAnswered: number;
  totalCorrect: number;
  currentStreak: number;
  maxStreak: number;
  startedAt: string;
}
