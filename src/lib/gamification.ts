import {
  DailyQuest,
  UserBadge,
  UserLevelInfo,
  GamificationState,
} from '@/types/gamification';
import {
  getStoredAttempts,
  getResolvedMistakeIds,
  getAllMistakeRecords,
  getUserStats,
  getActiveStudentProfile,
} from '@/lib/storage';

const STORAGE_KEYS = {
  GAMIFICATION: 'tutor_m1_gamification',
};

export const LEVEL_TIERS: {
  level: number;
  title: string;
  minExp: number;
  maxExp: number;
  color: string;
  badgeBg: string;
}[] = [
  {
    level: 1,
    title: 'น้องใหม่เตรียมสอบ (Novice Explorer)',
    minExp: 0,
    maxExp: 100,
    color: 'text-slate-700',
    badgeBg: 'bg-slate-100 border-slate-300 text-slate-700',
  },
  {
    level: 2,
    title: 'นักฝึกฝนวิชาการ (Academic Trainee)',
    minExp: 100,
    maxExp: 300,
    color: 'text-blue-600',
    badgeBg: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    level: 3,
    title: 'ผู้กล้าตะลุยโจทย์ (Challenger)',
    minExp: 300,
    maxExp: 600,
    color: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  {
    level: 4,
    title: 'มือปราบข้อสอบ ป.6 (Exam Conqueror)',
    minExp: 600,
    maxExp: 1000,
    color: 'text-indigo-600',
    badgeBg: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  },
  {
    level: 5,
    title: 'นักคิดเลขไว & ปรมาจารย์วิทย์ (Speed Master)',
    minExp: 1000,
    maxExp: 1600,
    color: 'text-purple-600',
    badgeBg: 'bg-purple-50 border-purple-200 text-purple-700',
  },
  {
    level: 6,
    title: 'เซียนแก้โจทย์ยาก (Problem Solver)',
    minExp: 1600,
    maxExp: 2400,
    color: 'text-amber-600',
    badgeBg: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    level: 7,
    title: 'ดาวรุ่งห้องพิเศษ (Gifted Candidate)',
    minExp: 2400,
    maxExp: 3500,
    color: 'text-orange-600',
    badgeBg: 'bg-orange-50 border-orange-200 text-orange-700',
  },
  {
    level: 8,
    title: 'ว่าที่ตัวจริง รร.ดัง (Top School Star)',
    minExp: 3500,
    maxExp: 5000,
    color: 'text-rose-600',
    badgeBg: 'bg-rose-50 border-rose-200 text-rose-700',
  },
  {
    level: 9,
    title: 'อัจฉริยะติวเตอร์ ม.1 (Elite Scholar)',
    minExp: 5000,
    maxExp: 7000,
    color: 'text-violet-700',
    badgeBg: 'bg-violet-100 border-violet-300 text-violet-800',
  },
  {
    level: 10,
    title: 'มหาเทพพิชิต ม.1 (Grandmaster of M.1)',
    minExp: 7000,
    maxExp: 10000,
    color: 'text-amber-500',
    badgeBg: 'bg-gradient-to-r from-amber-400 to-yellow-500 border-amber-300 text-white shadow-sm',
  },
];

export const getGamificationState = (): GamificationState => {
  if (typeof window === 'undefined') {
    return {
      totalExp: 0,
      claimedQuestIds: [],
      claimedCheckInDates: [],
      unlockedBadgeIds: [],
      lastActiveDate: new Date().toISOString().slice(0, 10),
      streakDays: 1,
    };
  }

  const active = getActiveStudentProfile();
  const storageKey = active
    ? `${STORAGE_KEYS.GAMIFICATION}_${active.id}`
    : STORAGE_KEYS.GAMIFICATION;

  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      const state: GamificationState = {
        totalExp: 0,
        claimedQuestIds: [],
        claimedCheckInDates: [],
        unlockedBadgeIds: [],
        lastActiveDate: new Date().toISOString().slice(0, 10),
        streakDays: 1,
      };
      localStorage.setItem(storageKey, JSON.stringify(state));
      return state;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading gamification state', e);
    return {
      totalExp: 0,
      claimedQuestIds: [],
      claimedCheckInDates: [],
      unlockedBadgeIds: [],
      lastActiveDate: new Date().toISOString().slice(0, 10),
      streakDays: 1,
    };
  }
};

export const saveGamificationState = (state: GamificationState): void => {
  if (typeof window === 'undefined') return;
  const active = getActiveStudentProfile();
  const storageKey = active
    ? `${STORAGE_KEYS.GAMIFICATION}_${active.id}`
    : STORAGE_KEYS.GAMIFICATION;
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving gamification state', e);
  }
};

export const addExp = (amount: number): { newTotal: number; levelUp: boolean } => {
  const state = getGamificationState();
  const oldLevel = calculateUserLevel(state.totalExp).level;
  const newTotal = state.totalExp + amount;
  const newLevel = calculateUserLevel(newTotal).level;

  state.totalExp = newTotal;
  saveGamificationState(state);

  return {
    newTotal,
    levelUp: newLevel > oldLevel,
  };
};

export const calculateUserLevel = (totalExp: number): UserLevelInfo => {
  let tier = LEVEL_TIERS[0];
  for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (totalExp >= LEVEL_TIERS[i].minExp) {
      tier = LEVEL_TIERS[i];
      break;
    }
  }

  const expInCurrentLevel = Math.max(0, totalExp - tier.minExp);
  const expRange = Math.max(1, tier.maxExp - tier.minExp);
  const expNeededForNextLevel = Math.max(0, tier.maxExp - totalExp);
  const progressPercent = Math.min(100, Math.round((expInCurrentLevel / expRange) * 100));

  return {
    level: tier.level,
    title: tier.title,
    currentExp: totalExp,
    minExpForCurrentLevel: tier.minExp,
    maxExpForCurrentLevel: tier.maxExp,
    expInCurrentLevel,
    expNeededForNextLevel,
    progressPercent,
    color: tier.color,
    badgeBg: tier.badgeBg,
  };
};

export const getTodayDateKey = (): string => {
  return new Date().toISOString().slice(0, 10);
};

export const getDailyQuests = (): DailyQuest[] => {
  const attempts = getStoredAttempts();
  const resolvedMistakes = getResolvedMistakeIds();
  const state = getGamificationState();
  const todayKey = getTodayDateKey();

  // Filter attempts completed today
  const todayAttempts = attempts.filter((a) => a.completedAt && a.completedAt.startsWith(todayKey));
  const questionsDoneToday = todayAttempts.reduce((sum, a) => sum + (a.totalQuestions || 0), 0);
  const hasMockOrPracticeToday = todayAttempts.length > 0;
  const hasHighScoreToday = todayAttempts.some((a) => (a.score || 0) >= 70);
  const hasResolvedMistake = resolvedMistakes.length > 0;

  const quest1Id = `quest-warmup-${todayKey}`;
  const quest2Id = `quest-mastery-${todayKey}`;
  const quest3Id = `quest-mock-${todayKey}`;

  return [
    {
      id: quest1Id,
      title: '🧠 วอร์มอัพลับสมอง',
      description: 'ทำข้อสอบใดๆ ในระบบสะสมครบ 5 ข้อวันนี้',
      target: 5,
      current: Math.min(5, questionsDoneToday),
      rewardExp: 50,
      isCompleted: questionsDoneToday >= 5,
      isClaimed: state.claimedQuestIds.includes(quest1Id),
      iconName: 'brain',
    },
    {
      id: quest2Id,
      title: '⚡ ซ่อมจุดอ่อน หรือสอบได้คะแนน 70%+',
      description: 'เคลียร์ข้อผิดในสมุดจุดอ่อน หรือสอบจำลองได้เกิน 70%',
      target: 1,
      current: hasResolvedMistake || hasHighScoreToday ? 1 : 0,
      rewardExp: 60,
      isCompleted: hasResolvedMistake || hasHighScoreToday,
      isClaimed: state.claimedQuestIds.includes(quest2Id),
      iconName: 'zap',
    },
    {
      id: quest3Id,
      title: '🎯 ตะลุยสนามสอบจริง',
      description: 'เข้าทำข้อสอบจำลองเสมือนจริง หรือ AI Practice ครบ 1 ชุด',
      target: 1,
      current: hasMockOrPracticeToday ? 1 : 0,
      rewardExp: 75,
      isCompleted: hasMockOrPracticeToday,
      isClaimed: state.claimedQuestIds.includes(quest3Id),
      iconName: 'target',
    },
  ];
};

export const claimQuestReward = (questId: string, rewardExp: number): boolean => {
  const state = getGamificationState();
  if (state.claimedQuestIds.includes(questId)) return false;

  state.claimedQuestIds.push(questId);
  state.totalExp += rewardExp;
  saveGamificationState(state);
  return true;
};

export const isCheckedInToday = (): boolean => {
  const state = getGamificationState();
  const todayKey = getTodayDateKey();
  return state.claimedCheckInDates.includes(todayKey);
};

export const checkInToday = (): { success: boolean; streak: number; expGained: number } => {
  const state = getGamificationState();
  const todayKey = getTodayDateKey();

  if (state.claimedCheckInDates.includes(todayKey)) {
    return { success: false, streak: state.streakDays || 1, expGained: 0 };
  }

  // Check if yesterday was active
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (state.claimedCheckInDates.includes(yesterday) || state.lastActiveDate === yesterday) {
    state.streakDays = (state.streakDays || 1) + 1;
  } else {
    state.streakDays = 1;
  }

  state.claimedCheckInDates.push(todayKey);
  state.lastActiveDate = todayKey;
  const expGained = 50 + Math.min(50, state.streakDays * 5); // Base 50 + Streak bonus
  state.totalExp += expGained;

  saveGamificationState(state);
  return { success: true, streak: state.streakDays, expGained };
};

export const getAllUserBadges = (): UserBadge[] => {
  const attempts = getStoredAttempts();
  const resolvedMistakes = getResolvedMistakeIds();
  const state = getGamificationState();

  const totalQuestions = attempts.reduce((sum, a) => sum + (a.totalQuestions || 0), 0);
  const totalCorrect = attempts.reduce((sum, a) => sum + (a.correctAnswers || 0), 0);
  const mockCount = attempts.filter((a) => a.examId && a.examId.includes('pretest')).length;
  const hasSamsen = attempts.some((a) => a.examId?.includes('samsen') || a.examTitle?.includes('สามเสน'));
  const hasSuankularb = attempts.some((a) => a.examId?.includes('suankularb') || a.examTitle?.includes('สวนกุหลาบ'));
  const hasChulabhorn = attempts.some((a) => a.examId?.includes('chulabhorn') || a.examTitle?.includes('จุฬาภรณ'));

  // Calculate subject counts
  let mathCorrect = 0;
  let sciCorrect = 0;
  let engCorrect = 0;

  attempts.forEach((a) => {
    if (a.subjectId === 'math' || a.examId?.includes('math')) {
      mathCorrect += a.correctAnswers || 0;
    } else if (a.subjectId === 'science' || a.examId?.includes('sci')) {
      sciCorrect += a.correctAnswers || 0;
    } else if (a.subjectId === 'english' || a.examId?.includes('eng')) {
      engCorrect += a.correctAnswers || 0;
    }
  });

  return [
    {
      id: 'badge-first-step',
      name: 'ก้าวแรกสู่ ม.1',
      description: 'ทำข้อสอบข้อแรกสำเร็จในระบบ',
      iconName: 'footprints',
      category: 'special',
      isUnlocked: totalQuestions >= 1,
      progress: Math.min(100, (totalQuestions / 1) * 100),
      progressLabel: `${Math.min(1, totalQuestions)}/1 ข้อ`,
    },
    {
      id: 'badge-math-prodigy',
      name: 'เซียนคณิตคิดไว',
      description: 'ตอบคำถามคณิตศาสตร์ถูกต้องสะสมครบ 20 ข้อ',
      iconName: 'calculator',
      category: 'subject',
      isUnlocked: mathCorrect >= 20,
      progress: Math.min(100, (mathCorrect / 20) * 100),
      progressLabel: `${Math.min(20, mathCorrect)}/20 ข้อ`,
    },
    {
      id: 'badge-sci-explorer',
      name: 'นักวิทยาศาสตร์น้อย',
      description: 'ตอบคำถามวิทยาศาสตร์ถูกต้องสะสมครบ 20 ข้อ',
      iconName: 'atom',
      category: 'subject',
      isUnlocked: sciCorrect >= 20,
      progress: Math.min(100, (sciCorrect / 20) * 100),
      progressLabel: `${Math.min(20, sciCorrect)}/20 ข้อ`,
    },
    {
      id: 'badge-eng-master',
      name: 'เจ้าแห่งภาษาอังกฤษ',
      description: 'ตอบคำถามภาษาอังกฤษถูกต้องสะสมครบ 20 ข้อ',
      iconName: 'languages',
      category: 'subject',
      isUnlocked: engCorrect >= 20,
      progress: Math.min(100, (engCorrect / 20) * 100),
      progressLabel: `${Math.min(20, engCorrect)}/20 ข้อ`,
    },
    {
      id: 'badge-samsen',
      name: 'ผู้พิชิตสามเสน',
      description: 'ทำข้อสอบจำลองชุดสามเสนวิทยาลัยจบ 1 ชุด',
      iconName: 'award',
      category: 'exam',
      isUnlocked: hasSamsen,
      progress: hasSamsen ? 100 : 0,
      progressLabel: hasSamsen ? 'สำเร็จ' : 'ยังไม่เคยทำ',
    },
    {
      id: 'badge-suan',
      name: 'ผู้ท้าชิงสวนกุหลาบ',
      description: 'ทำข้อสอบจำลองชุดสวนกุหลาบวิทยาลัยจบ 1 ชุด',
      iconName: 'rose',
      category: 'exam',
      isUnlocked: hasSuankularb,
      progress: hasSuankularb ? 100 : 0,
      progressLabel: hasSuankularb ? 'สำเร็จ' : 'ยังไม่เคยทำ',
    },
    {
      id: 'badge-pcsh',
      name: 'จิตวิญญาณจุฬาภรณ์',
      description: 'ทำข้อสอบคัดเลือกจุฬาภรณราชวิทยาลัยจบ 1 ชุด',
      iconName: 'sparkles',
      category: 'exam',
      isUnlocked: hasChulabhorn,
      progress: hasChulabhorn ? 100 : 0,
      progressLabel: hasChulabhorn ? 'สำเร็จ' : 'ยังไม่เคยทำ',
    },
    {
      id: 'badge-mistake-destroyer',
      name: 'ผู้ทำลายจุดอ่อน',
      description: 'ซ่อมข้อสอบที่เคยทำผิดใน Mistake Book สำเร็จ 5 ข้อ',
      iconName: 'shield',
      category: 'special',
      isUnlocked: resolvedMistakes.length >= 5,
      progress: Math.min(100, (resolvedMistakes.length / 5) * 100),
      progressLabel: `${Math.min(5, resolvedMistakes.length)}/5 ข้อ`,
    },
    {
      id: 'badge-streak-3',
      name: 'ไฟไม่มอดดับ (3 Days)',
      description: 'เข้าเรียนและฝึกทำข้อสอบต่อเนื่องครบ 3 วัน',
      iconName: 'flame',
      category: 'streak',
      isUnlocked: (state.streakDays || 1) >= 3,
      progress: Math.min(100, ((state.streakDays || 1) / 3) * 100),
      progressLabel: `${Math.min(3, state.streakDays || 1)}/3 วัน`,
    },
    {
      id: 'badge-streak-7',
      name: 'เทพแห่งความสม่ำเสมอ (7 Days)',
      description: 'เข้าเรียนและฝึกทำข้อสอบต่อเนื่องครบ 7 วัน',
      iconName: 'crown',
      category: 'streak',
      isUnlocked: (state.streakDays || 1) >= 7,
      progress: Math.min(100, ((state.streakDays || 1) / 7) * 100),
      progressLabel: `${Math.min(7, state.streakDays || 1)}/7 วัน`,
    },
    {
      id: 'badge-high-scorer',
      name: 'ยอดฝีมือคะแนน 85%+',
      description: 'ทำข้อสอบจำลองได้คะแนนเกิน 85% ในการสอบ 1 ครั้ง',
      iconName: 'zap',
      category: 'exam',
      isUnlocked: attempts.some((a) => (a.score || 0) >= 85),
      progress: attempts.some((a) => (a.score || 0) >= 85) ? 100 : 0,
      progressLabel: attempts.some((a) => (a.score || 0) >= 85) ? 'สำเร็จ' : 'ยังไม่ถึง 85%',
    },
    {
      id: 'badge-mock-master',
      name: 'ผู้ช่ำชองห้องสอบจำลอง',
      description: 'ทำข้อสอบจำลองสนามจริงสะสมครบ 3 ชุด',
      iconName: 'clock',
      category: 'exam',
      isUnlocked: mockCount >= 3,
      progress: Math.min(100, (mockCount / 3) * 100),
      progressLabel: `${Math.min(3, mockCount)}/3 ชุด`,
    },
  ];
};
