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
      strongestTopics: [],
      weakestTopics: [],
      radarCompetencyData: [
        { subject: 'พีชคณิต/สมการ', score: 0, fullMark: 100, questionsCount: 0 },
        { subject: 'เรขาคณิต/พื้นที่', score: 0, fullMark: 100, questionsCount: 0 },
        { subject: 'จำนวน/การคำนวณ', score: 0, fullMark: 100, questionsCount: 0 },
        { subject: 'ฟิสิกส์/ไฟฟ้า', score: 0, fullMark: 100, questionsCount: 0 },
        { subject: 'เคมี/การแยกสาร', score: 0, fullMark: 100, questionsCount: 0 },
        { subject: 'ชีววิทยา/สิ่งมีชีวิต', score: 0, fullMark: 100, questionsCount: 0 },
      ],
    };
  }

  let totalQuestions = 0;
  let totalCorrect = 0;
  let totalStudyTime = 0;
  let mockExamsCount = 0;
  const topicStats: Record<string, { total: number; correct: number }> = {};

  // 6 Domain Aggregators for Radar Chart
  const radarBuckets: Record<string, { total: number; correct: number }> = {
    'พีชคณิต/สมการ': { total: 0, correct: 0 },
    'เรขาคณิต/พื้นที่': { total: 0, correct: 0 },
    'จำนวน/การคำนวณ': { total: 0, correct: 0 },
    'ฟิสิกส์/ไฟฟ้า': { total: 0, correct: 0 },
    'เคมี/การแยกสาร': { total: 0, correct: 0 },
    'ชีววิทยา/สิ่งมีชีวิต': { total: 0, correct: 0 },
  };

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

        // Categorize into 6 Radar Competency Domains
        const lower = topicName.toLowerCase();
        if (lower.includes('พีชคณิต') || lower.includes('สมการ') || lower.includes('ลำดับ') || lower.includes('algebra')) {
          radarBuckets['พีชคณิต/สมการ'].total += stats.total;
          radarBuckets['พีชคณิต/สมการ'].correct += stats.correct;
        } else if (lower.includes('เรขาคณิต') || lower.includes('พื้นที่') || lower.includes('ปริมาตร') || lower.includes('geometry')) {
          radarBuckets['เรขาคณิต/พื้นที่'].total += stats.total;
          radarBuckets['เรขาคณิต/พื้นที่'].correct += stats.correct;
        } else if (lower.includes('จำนวน') || lower.includes('คำนวณ') || lower.includes('ห.ร.ม.') || lower.includes('ค.ร.น.') || lower.includes('arithmetic')) {
          radarBuckets['จำนวน/การคำนวณ'].total += stats.total;
          radarBuckets['จำนวน/การคำนวณ'].correct += stats.correct;
        } else if (lower.includes('ฟิสิกส์') || lower.includes('แรง') || lower.includes('ไฟฟ้า') || lower.includes('พลังงาน') || lower.includes('physics')) {
          radarBuckets['ฟิสิกส์/ไฟฟ้า'].total += stats.total;
          radarBuckets['ฟิสิกส์/ไฟฟ้า'].correct += stats.correct;
        } else if (lower.includes('สาร') || lower.includes('เคมี') || lower.includes('chemistry') || lower.includes('matter')) {
          radarBuckets['เคมี/การแยกสาร'].total += stats.total;
          radarBuckets['เคมี/การแยกสาร'].correct += stats.correct;
        } else if (lower.includes('สิ่งมีชีวิต') || lower.includes('ร่างกาย') || lower.includes('พืช') || lower.includes('สังเคราะห์') || lower.includes('biology')) {
          radarBuckets['ชีววิทยา/สิ่งมีชีวิต'].total += stats.total;
          radarBuckets['ชีววิทยา/สิ่งมีชีวิต'].correct += stats.correct;
        }
      });
    }
  });

  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Readiness Score: weighted between accuracy, mock exam count, and question volume
  const volumeBonus = Math.min(25, (totalQuestions / 100) * 25);
  const examBonus = Math.min(25, (mockExamsCount / 5) * 25);
  const accuracyComponent = (accuracy / 100) * 50;
  const readiness = Math.min(100, Math.round(accuracyComponent + volumeBonus + examBonus));

  // Calculate actual Topic Entries
  const topicEntries = Object.entries(topicStats)
    .filter(([, s]) => s.total >= 1)
    .map(([name, s]) => ({
      name,
      total: s.total,
      correct: s.correct,
      accuracy: Math.round((s.correct / s.total) * 100),
    }));

  // Strengths: Only topics with Accuracy >= 70%
  const strongestTopics = topicEntries
    .filter((t) => t.accuracy >= 70)
    .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)
    .slice(0, 3)
    .map((t) => `${t.name} (${t.accuracy}%)`);

  // Weaknesses: Topics with Accuracy < 70% (lowest accuracy first)
  const weakestTopics = topicEntries
    .filter((t) => t.accuracy < 70)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 3)
    .map((t) => `${t.name} (${t.accuracy}%)`);

  // Radar Competency calculation
  const radarCompetencyData = Object.entries(radarBuckets).map(([subject, stats]) => {
    const score = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    return {
      subject,
      score,
      fullMark: 100,
      questionsCount: stats.total,
    };
  });

  return {
    totalQuestionsAttempted: totalQuestions,
    totalCorrect,
    accuracyRate: accuracy,
    totalStudyTimeSeconds: totalStudyTime,
    streakDays: Math.max(1, Math.min(30, Math.ceil(attempts.length / 2))),
    lastActiveDate: new Date().toISOString(),
    mockExamsCompleted: mockExamsCount,
    examReadinessScore: readiness,
    strongestTopics,
    weakestTopics,
    radarCompetencyData,
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
