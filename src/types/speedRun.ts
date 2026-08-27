import { Question } from '@/types/question';

export type SpeedRunGameMode = 'blitz' | 'marathon' | 'boss_rush';

export interface SpeedRunModeConfig {
  id: SpeedRunGameMode;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  initialTimeSeconds: number;
  initialLives?: number;
  targetCount?: number;
}

export interface SpeedRunQuestionAnswer {
  question: Question;
  selectedChoiceId?: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface HighScoreRecord {
  mode: SpeedRunGameMode;
  score: number;
  maxCombo: number;
  correctCount: number;
  totalAnswered: number;
  date: string;
}

export interface SpeedRunGameState {
  mode: SpeedRunGameMode;
  timeRemaining: number;
  lives: number;
  score: number;
  currentCombo: number;
  maxCombo: number;
  correctCount: number;
  totalAnswered: number;
  isGameOver: boolean;
  history: SpeedRunQuestionAnswer[];
}
