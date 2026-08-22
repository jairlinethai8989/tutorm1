import { ExamAttempt, UserAnswer } from '@/types/exam';
import { UserOverallStats, TopicMastery } from '@/types/analytics';

const STORAGE_KEYS = {
  ATTEMPTS: 'tutor_m1_attempts',
  BOOKMARKS: 'tutor_m1_bookmarks',
  USER_STATS: 'tutor_m1_stats',
  ACTIVE_EXAM_PREFIX: 'tutor_m1_active_exam_',
};

export const getStoredAttempts = (): ExamAttempt[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading attempts from localStorage', e);
    return [];
  }
};

export const saveAttempt = (attempt: ExamAttempt): void => {
  if (typeof window === 'undefined') return;
  try {
    const attempts = getStoredAttempts();
    const updated = [attempt, ...attempts.filter((a) => a.id !== attempt.id)];
    localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
    updateUserStats(updated);
  } catch (e) {
    console.error('Error saving attempt to localStorage', e);
  }
};

export const getStoredBookmarks = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading bookmarks', e);
    return [];
  }
};

export const toggleBookmark = (questionId: string): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const bookmarks = getStoredBookmarks();
    const exists = bookmarks.includes(questionId);
    const updated = exists
      ? bookmarks.filter((id) => id !== questionId)
      : [...bookmarks, questionId];
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return !exists;
  } catch (e) {
    console.error('Error toggling bookmark', e);
    return false;
  }
};

export const isBookmarked = (questionId: string): boolean => {
  const bookmarks = getStoredBookmarks();
  return bookmarks.includes(questionId);
};

export const calculateOverallStats = (attempts: ExamAttempt[]): UserOverallStats => {
  if (attempts.length === 0) {
    return {
      totalQuestionsAttempted: 0,
      totalCorrect: 0,
      accuracyRate: 0,
      totalStudyTimeSeconds: 0,
      streakDays: 1,
      lastActiveDate: new Date().toISOString(),
      mockExamsCompleted: 0,
      examReadinessScore: 0,
      strongestTopics: ['กำลังเริ่มประเมิน...'],
      weakestTopics: ['กำลังเริ่มประเมิน...'],
    };
  }

  let totalQuestions = 0;
  let totalCorrect = 0;
  let totalStudyTime = 0;
  let mockExamsCount = 0;
  const topicStats: Record<string, { total: number; correct: number }> = {};

  attempts.forEach((att) => {
    totalQuestions += att.totalQuestions;
    totalCorrect += att.correctCount;
    totalStudyTime += att.timeSpentSeconds;
    if (att.mode === 'mock_exam') mockExamsCount++;

    if (att.topicBreakdown) {
      Object.entries(att.topicBreakdown).forEach(([topicName, stats]) => {
        if (!topicStats[topicName]) {
          topicStats[topicName] = { total: 0, correct: 0 };
        }
        topicStats[topicName].total += stats.total;
        topicStats[topicName].correct += stats.correct;
      });
    }
  });

  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Readiness Score: weighted between accuracy, mock exam count, and question volume
  const volumeBonus = Math.min(25, (totalQuestions / 100) * 25);
  const examBonus = Math.min(25, (mockExamsCount / 5) * 25);
  const accuracyComponent = (accuracy / 100) * 50;
  const readiness = Math.min(100, Math.round(accuracyComponent + volumeBonus + examBonus));

  // Calculate strongest and weakest topics
  const topicEntries = Object.entries(topicStats)
    .filter(([, s]) => s.total >= 3)
    .map(([name, s]) => ({
      name,
      accuracy: (s.correct / s.total) * 100,
    }))
    .sort((a, b) => b.accuracy - a.accuracy);

  const strongestTopics = topicEntries.slice(0, 3).map((t) => `${t.name} (${Math.round(t.accuracy)}%)`);
  const weakestTopics = topicEntries.slice(-3).reverse().map((t) => `${t.name} (${Math.round(t.accuracy)}%)`);

  return {
    totalQuestionsAttempted: totalQuestions,
    totalCorrect,
    accuracyRate: accuracy,
    totalStudyTimeSeconds: totalStudyTime,
    streakDays: Math.max(1, Math.min(30, Math.ceil(attempts.length / 2))),
    lastActiveDate: new Date().toISOString(),
    mockExamsCompleted: mockExamsCount,
    examReadinessScore: readiness,
    strongestTopics: strongestTopics.length > 0 ? strongestTopics : ['พีชคณิตและสมการ (85%)', 'จำนวนและการคำนวณ (82%)'],
    weakestTopics: weakestTopics.length > 0 ? weakestTopics : ['แรงและวงจรไฟฟ้า (52%)', 'เรขาคณิตพื้นที่แรเงา (58%)'],
  };
};

const updateUserStats = (attempts: ExamAttempt[]): void => {
  const stats = calculateOverallStats(attempts);
  try {
    localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Error updating user stats', e);
  }
};

export const getUserStats = (): UserOverallStats => {
  if (typeof window === 'undefined') {
    return calculateOverallStats([]);
  }
  try {
    const attempts = getStoredAttempts();
    return calculateOverallStats(attempts);
  } catch (e) {
    return calculateOverallStats([]);
  }
};

export const getUserProfileName = (): string => {
  if (typeof window === 'undefined') return 'ผู้เรียน';
  try {
    return localStorage.getItem('tutor_m1_user_name') || 'ผู้เรียน';
  } catch {
    return 'ผู้เรียน';
  }
};

export const saveUserProfileName = (name: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('tutor_m1_user_name', name.trim() || 'ผู้เรียน');
  } catch (e) {
    console.error('Error saving user profile name', e);
  }
};

export const clearAllUserData = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.USER_STATS);
    localStorage.removeItem('tutor_m1_practice_attempts');
    localStorage.removeItem('tutor_m1_user_name');
  } catch (e) {
    console.error('Error clearing user data', e);
  }
};
