export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  rewardExp: number;
  isCompleted: boolean;
  isClaimed: boolean;
  iconName: 'brain' | 'target' | 'zap' | 'check' | 'award';
}

export interface UserBadge {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: 'subject' | 'streak' | 'exam' | 'special';
  isUnlocked: boolean;
  unlockedAt?: string;
  progress: number; // 0 - 100
  progressLabel: string;
}

export interface UserLevelInfo {
  level: number;
  title: string;
  currentExp: number;
  minExpForCurrentLevel: number;
  maxExpForCurrentLevel: number;
  expInCurrentLevel: number;
  expNeededForNextLevel: number;
  progressPercent: number;
  color: string;
  badgeBg: string;
}

export interface GamificationState {
  totalExp: number;
  claimedQuestIds: string[];
  claimedCheckInDates: string[];
  unlockedBadgeIds: string[];
  lastActiveDate: string;
  streakDays: number;
  level?: number;
  currentExp?: number;
}
