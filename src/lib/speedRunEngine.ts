import { Question } from '@/types/question';
import { SpeedRunGameMode, SpeedRunModeConfig, HighScoreRecord } from '@/types/speedRun';
import { ALL_QUESTIONS } from '@/lib/data-loader';
import { SAMSEN_2565_SPECIAL_MATH_QUESTIONS } from '@/data/questions/samsenMath';
import { PATUMWAN_MATH_QUESTIONS } from '@/data/questions/patumwanMath';
import { SUANKULARB_PRETEST_9_MATH_QUESTIONS } from '@/data/questions/suankularbMath';
import { CHULABHORN_MATH_QUESTIONS } from '@/data/questions/chulabhornMath';
import { CHULABHORN_SCIENCE_QUESTIONS } from '@/data/questions/chulabhornScience';

export const SPEED_RUN_MODES: SpeedRunModeConfig[] = [
  {
    id: 'blitz',
    name: 'Blitz 60s (สายฟ้าแลบ)',
    subtitle: 'ทำโจทย์ให้ได้มากที่สุดใน 60 วินาที',
    description: 'ตอบถูกได้คะแนน + ต่อเวลาพิเศษ +5 วินาที / ตอบผิดเสียเวลา -3 วินาที ฝึกสปีดและการตัดช้อยส์ไวขั้นสุด!',
    icon: 'Zap',
    color: '#F59E0B',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    initialTimeSeconds: 60,
  },
  {
    id: 'marathon',
    name: '10-Streak Marathon (มาราธอน 10 ข้อ)',
    subtitle: 'ตอบถูกต่อเนื่อง 10 ข้อโดยมี 3 หัวใจ',
    description: 'ท้าทายสมาธิและความแม่นยำ ตอบถูกต่อเนื่องสะสมคอมโบไฟลุก 🔥 หากผิดเสีย 1 หัวใจ ❤️ (มี 3 ชีวิต)',
    icon: 'Flame',
    color: '#EC4899',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    initialTimeSeconds: 45,
    initialLives: 3,
    targetCount: 10,
  },
  {
    id: 'boss_rush',
    name: 'School Boss Rush (ประลองบอส 5 ข้อ)',
    subtitle: 'ปะทะข้อสอบระดับแข่งขันจาก 5 โรงเรียนดัง',
    description: 'คัดโจทย์ระดับ Hard/Olympiad จาก รร.สามเสน, ปทุมวัน, สวนกุหลาบ, จุฬาภรณ์ฯ และเบ็ญจะมะฯ ข้อละ 90 วินาที!',
    icon: 'Crown',
    color: '#8B5CF6',
    gradient: 'from-violet-600 via-indigo-600 to-blue-700',
    initialTimeSeconds: 90,
    targetCount: 5,
  },
];

const HIGH_SCORE_STORAGE_KEY = 'tutor_m1_speedrun_highscores';

export const getHighScores = (): Record<SpeedRunGameMode, HighScoreRecord | null> => {
  if (typeof window === 'undefined') {
    return { blitz: null, marathon: null, boss_rush: null };
  }
  try {
    const raw = localStorage.getItem(HIGH_SCORE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { blitz: null, marathon: null, boss_rush: null };
  } catch (e) {
    console.error('Error loading speedrun high scores', e);
    return { blitz: null, marathon: null, boss_rush: null };
  }
};

export const saveHighScore = (record: HighScoreRecord): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const current = getHighScores();
    const existing = current[record.mode];
    if (record.score > 0 && (!existing || record.score > existing.score)) {
      current[record.mode] = record;
      localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(current));
      return true; // New High Score!
    }
    return false;
  } catch (e) {
    console.error('Error saving speedrun high score', e);
    return false;
  }
};

export const calculateQuestionScore = (isCorrect: boolean, combo: number, timeSpentSeconds: number): number => {
  if (!isCorrect) return 0;
  let multiplier = 1;
  if (combo >= 8) multiplier = 5;
  else if (combo >= 5) multiplier = 3;
  else if (combo >= 3) multiplier = 2;

  // Base score 100 + Speed Bonus (up to 50 pts if answered within 5 seconds)
  const speedBonus = Math.max(0, Math.round((10 - timeSpentSeconds) * 5));
  return (100 + speedBonus) * multiplier;
};

export const generateQuestionsForMode = (mode: SpeedRunGameMode): Question[] => {
  const allMCQuestions = ALL_QUESTIONS.filter((q) => q.type === 'multiple_choice' && q.choices && q.choices.length > 0);

  if (mode === 'boss_rush') {
    const bossPool = [
      ...SAMSEN_2565_SPECIAL_MATH_QUESTIONS,
      ...PATUMWAN_MATH_QUESTIONS,
      ...SUANKULARB_PRETEST_9_MATH_QUESTIONS,
      ...CHULABHORN_MATH_QUESTIONS,
      ...CHULABHORN_SCIENCE_QUESTIONS,
    ].filter((q) => q.type === 'multiple_choice' && q.choices && q.choices.length > 0);

    return shuffleArray(bossPool).slice(0, 5);
  }

  if (mode === 'marathon') {
    // Progressive: 3 easy, 4 medium, 3 hard
    const easy = shuffleArray(allMCQuestions.filter((q) => q.difficulty === 'easy')).slice(0, 3);
    const medium = shuffleArray(allMCQuestions.filter((q) => q.difficulty === 'medium' || !q.difficulty)).slice(0, 4);
    const hard = shuffleArray(allMCQuestions.filter((q) => q.difficulty === 'hard' || q.difficulty === 'olympiad')).slice(0, 3);
    return [...easy, ...medium, ...hard];
  }

  // Blitz mode: Return 40 shuffled questions
  return shuffleArray(allMCQuestions).slice(0, 40);
};

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
