import { ExamAttempt, UserAnswer } from '@/types/exam';
import { UserOverallStats, TopicMastery } from '@/types/analytics';

const STORAGE_KEYS = {
  ATTEMPTS: 'tutor_m1_attempts',
  BOOKMARKS: 'tutor_m1_bookmarks',
  USER_STATS: 'tutor_m1_stats',
  ACTIVE_EXAM_PREFIX: 'tutor_m1_active_exam_',
  RESOLVED_MISTAKES: 'tutor_m1_resolved_mistakes',
};

export interface MistakeRecord {
  questionId: string;
  attemptId: string;
  examTitle: string;
  date: string;
  userSelectedChoiceId?: string;
  userTextAnswer?: string;
  timeSpentSeconds?: number;
  isResolved: boolean;
}

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

export const getResolvedMistakeIds = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.RESOLVED_MISTAKES);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading resolved mistakes', e);
    return [];
  }
};

export const toggleResolvedMistake = (questionId: string): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const resolved = getResolvedMistakeIds();
    const exists = resolved.includes(questionId);
    const updated = exists
      ? resolved.filter((id) => id !== questionId)
      : [...resolved, questionId];
    localStorage.setItem(STORAGE_KEYS.RESOLVED_MISTAKES, JSON.stringify(updated));
    return !exists;
  } catch (e) {
    console.error('Error toggling resolved mistake', e);
    return false;
  }
};

export const isMistakeResolved = (questionId: string): boolean => {
  const resolved = getResolvedMistakeIds();
  return resolved.includes(questionId);
};

export const getAllMistakeRecords = (): MistakeRecord[] => {
  const attempts = getStoredAttempts();
  const resolvedIds = new Set(getResolvedMistakeIds());
  const mistakeMap = new Map<string, MistakeRecord>();

  // Scan attempts from newest to oldest
  for (const attempt of attempts) {
    if (!attempt.answers) continue;
    for (const [qId, ans] of Object.entries(attempt.answers)) {
      if (ans.isCorrect === false) {
        if (!mistakeMap.has(qId)) {
          mistakeMap.set(qId, {
            questionId: qId,
            attemptId: attempt.id,
            examTitle: attempt.examTitle || 'แบบทดสอบจำลอง',
            date: attempt.completedAt,
            userSelectedChoiceId: ans.selectedChoiceId,
            userTextAnswer: ans.textAnswer,
            timeSpentSeconds: ans.timeSpentSeconds,
            isResolved: resolvedIds.has(qId),
          });
        }
      }
    }
  }

  return Array.from(mistakeMap.values());
};

export const getUnresolvedMistakeCount = (): number => {
  const mistakes = getAllMistakeRecords();
  return mistakes.filter((m) => !m.isResolved).length;
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

  const admissionChanceTier = getAdmissionChanceTier(accuracy);
  const actionPlan = generateActionPlan(weakestTopics, accuracy);

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
    admissionChanceTier,
    actionPlan,
  };
};

export const getAdmissionChanceTier = (percent: number) => {
  if (percent >= 80) {
    return {
      tier: 'excellent' as const,
      title: 'ระดับยอดเยี่ยม (Mastery)',
      description: 'โอกาสสอบติดห้องพิเศษสูงมาก (> 90%) มีความแม่นยำและทักษะพร้อมสอบจริง',
      color: 'text-emerald-700',
      bgLight: 'bg-emerald-50 border-emerald-200',
      badgeBg: 'bg-emerald-600 text-white',
      probabilityText: 'โอกาสสอบติด: สูงมาก (> 90%)',
    };
  }
  if (percent >= 65) {
    return {
      tier: 'good' as const,
      title: 'ระดับดี (Proficient)',
      description: 'ผ่านเกณฑ์มาตรฐานห้องเรียนพิเศษ รักษาฟอร์มและเก็บจุดอ่อนเพิ่มอีกนิดจะมั่นใจ 100%',
      color: 'text-blue-700',
      bgLight: 'bg-blue-50 border-blue-200',
      badgeBg: 'bg-blue-600 text-white',
      probabilityText: 'โอกาสสอบติด: สูง (70 - 89%)',
    };
  }
  if (percent >= 50) {
    return {
      tier: 'moderate' as const,
      title: 'ระดับปานกลาง (Developing)',
      description: 'มีพื้นฐานที่ดี แต่ยังมีหัวข้อที่เสียคะแนนเรื่อยๆ แนะนำฝึกทำโจทย์จุดอ่อนเพิ่ม',
      color: 'text-amber-700',
      bgLight: 'bg-amber-50 border-amber-200',
      badgeBg: 'bg-amber-600 text-white',
      probabilityText: 'โอกาสสอบติด: ปานกลาง (50 - 69%)',
    };
  }
  return {
    tier: 'needs_improvement' as const,
    title: 'ระดับต้องเร่งเสริมทักษะ (Foundational)',
    description: 'ต้องการการทบทวนเนื้อหาและฝึกทำข้อสอบอย่างสม่ำเสมอเพื่อก้าวสู่เกณฑ์ผ่าน',
    color: 'text-rose-700',
    bgLight: 'bg-rose-50 border-rose-200',
    badgeBg: 'bg-rose-600 text-white',
    probabilityText: 'โอกาสสอบติด: กำลังพัฒนา (< 50%)',
  };
};

export const calculatePaceAnalysis = (
  timeSpentSeconds: number,
  totalQuestions: number,
  standardPaceSeconds = 120
) => {
  if (totalQuestions <= 0 || timeSpentSeconds <= 0) {
    return {
      averageSecondsPerQuestion: 0,
      formattedPace: '0 วินาที/ข้อ',
      status: 'optimal' as const,
      statusText: 'เวลาพอดี',
      tip: 'บริหารเวลาได้เหมาะสมตามมาตรฐานห้องสอบ',
    };
  }

  const avgSec = Math.round(timeSpentSeconds / totalQuestions);
  const minutes = Math.floor(avgSec / 60);
  const remainingSeconds = avgSec % 60;
  const formattedPace = minutes > 0 ? `${minutes} นาที ${remainingSeconds} วินาที/ข้อ` : `${remainingSeconds} วินาที/ข้อ`;

  if (avgSec < standardPaceSeconds * 0.5) {
    return {
      averageSecondsPerQuestion: avgSec,
      formattedPace,
      status: 'fast' as const,
      statusText: '⚡ ทำเร็วมาก (Speed)',
      tip: 'ระวังเรื่องความรอบคอบและการอ่านโจทย์ไม่ครบถ้วน',
    };
  }

  if (avgSec > standardPaceSeconds * 1.2) {
    return {
      averageSecondsPerQuestion: avgSec,
      formattedPace,
      status: 'slow' as const,
      statusText: '⏳ ใช้เวลาค่อนข้างนาน',
      tip: 'ควรฝึกเทคนิคคิดลัด (Fast Track) เพื่อประหยัดเวลาในห้องสอบ',
    };
  }

  return {
    averageSecondsPerQuestion: avgSec,
    formattedPace,
    status: 'optimal' as const,
    statusText: '🎯 จังหวะเวลาเหมาะสม (Optimal Pace)',
    tip: 'รักษาจังหวะการทำข้อสอบแบบนี้ไว้ในสนามสอบจริง',
  };
};

export const generateActionPlan = (weakestTopics: string[], accuracyRate: number) => {
  const plan = [];
  const unresolvedMistakes = typeof window !== 'undefined' ? getUnresolvedMistakeCount() : 0;

  if (unresolvedMistakes > 0) {
    plan.push({
      step: 1,
      title: `ทบทวนและซ่อมข้อที่เคยตอบผิด (${unresolvedMistakes} ข้อ)`,
      description: 'ระบบตรวจพบข้อสอบที่คุณเคยตอบผิดในแบบทดสอบ แนะนำให้เปิดโหมดซ้อมสอบซ่อมจุดอ่อนทันที',
      actionLabel: 'เปิดสมุดจุดอ่อน (Mistake Book)',
      actionUrl: '/mistake-book',
      priority: 'high' as const,
    });
  } else if (weakestTopics.length > 0) {
    const rawTopic = weakestTopics[0].split('(')[0].trim();
    plan.push({
      step: 1,
      title: `เจาะลึกติวเพิ่มหัวข้อ "${rawTopic}"`,
      description: 'ระบบตรวจพบว่าเป็นจุดที่เสียคะแนนบ่อยที่สุด ควรอ่านเฉลยละเอียดและฝึกทำโจทย์ซ้ำ',
      actionLabel: 'ฝึกทำโจทย์หัวข้อนี้ทันที',
      actionUrl: '/practice',
      priority: 'high' as const,
    });
  } else {
    plan.push({
      step: 1,
      title: 'ทำข้อสอบจำลองสนามจริงชุดถัดไป',
      description: 'ทดสอบความพร้อมรอบด้านด้วยชุดข้อสอบโรงเรียนดังชุดใหม่',
      actionLabel: 'เลือกชุดข้อสอบจำลอง',
      actionUrl: '/mock-exam',
      priority: 'high' as const,
    });
  }

  if (weakestTopics.length > 1) {
    const secondTopic = weakestTopics[1].split('(')[0].trim();
    plan.push({
      step: 2,
      title: `เสริมความแม่นยำหัวข้อ "${secondTopic}"`,
      description: 'ฝึกทำโจทย์ระดับปานกลาง-ยาก เพื่อปิดช่องโหว่ทางวิชาการ',
      actionLabel: 'ฝึกใน AI Practice',
      actionUrl: '/practice',
      priority: 'medium' as const,
    });
  } else {
    plan.push({
      step: 2,
      title: 'ฝึกคำนวณแบบสุ่มใน AI Practice',
      description: 'เพิ่มความเร็วและความแม่นยำในการคิดเลขเร็วและแก้สมการ',
      actionLabel: 'เริ่ม AI Practice',
      actionUrl: '/practice',
      priority: 'medium' as const,
    });
  }

  plan.push({
    step: 3,
    title: 'จับเวลาสอบจำลองแบบจับเวลาจริง 60-90 นาที',
    description: 'จำลองบรรยากาศห้องสอบเพื่อฝึกสมาธิและการบริหารเวลาภายใต้ความกดดัน',
    actionLabel: 'เข้าห้องสอบจำลอง',
    actionUrl: '/mock-exam',
    priority: 'normal' as const,
  });

  return plan;
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
  const profile = getActiveStudentProfile();
  if (profile) return profile.name;
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem('tutor_m1_user_name') || '';
  } catch {
    return '';
  }
};

export const saveUserProfileName = (name: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('tutor_m1_user_name', name.trim());
    const current = getActiveStudentProfile();
    if (current) {
      saveStudentProfile({
        ...current,
        name: name.trim(),
      });
    }
  } catch (e) {
    console.error('Error saving user profile name', e);
  }
};

import { StudentProfile } from '@/types/student';

const STUDENT_STORAGE_KEYS = {
  ACTIVE_PROFILE_ID: 'tutor_m1_active_student_id',
  PROFILES_LIST: 'tutor_m1_student_profiles_list',
};

export const getAllStudentProfiles = (): StudentProfile[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STUDENT_STORAGE_KEYS.PROFILES_LIST);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error getting student profiles list', e);
    return [];
  }
};

export const getActiveStudentProfile = (): StudentProfile | null => {
  if (typeof window === 'undefined') return null;
  try {
    const activeId = localStorage.getItem(STUDENT_STORAGE_KEYS.ACTIVE_PROFILE_ID);
    const profiles = getAllStudentProfiles();
    if (!profiles.length) return null;
    if (activeId) {
      const found = profiles.find((p) => p.id === activeId);
      if (found) return found;
    }
    return profiles[0] || null;
  } catch (e) {
    console.error('Error getting active student profile', e);
    return null;
  }
};

export const hasStudentProfile = (): boolean => {
  return getActiveStudentProfile() !== null;
};

export const saveStudentProfile = (
  profileData: Omit<StudentProfile, 'id' | 'createdAt'> & { id?: string }
): StudentProfile => {
  const profiles = getAllStudentProfiles();
  const id = profileData.id || `student-${Date.now()}`;
  const now = new Date().toISOString();

  const newProfile: StudentProfile = {
    id,
    name: profileData.name.trim(),
    targetSchool: profileData.targetSchool,
    targetSchoolShort: profileData.targetSchoolShort || profileData.targetSchool,
    avatar: profileData.avatar || '🎓',
    grade: profileData.grade || 'ป.6',
    createdAt: now,
  };

  const existingIndex = profiles.findIndex((p) => p.id === id);
  let updatedProfiles: StudentProfile[];
  if (existingIndex >= 0) {
    updatedProfiles = profiles.map((p) => (p.id === id ? newProfile : p));
  } else {
    updatedProfiles = [newProfile, ...profiles];
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STUDENT_STORAGE_KEYS.PROFILES_LIST, JSON.stringify(updatedProfiles));
      localStorage.setItem(STUDENT_STORAGE_KEYS.ACTIVE_PROFILE_ID, id);
      localStorage.setItem('tutor_m1_user_name', newProfile.name);
      window.dispatchEvent(new Event('tutor_m1_student_profile_changed'));
    } catch (e) {
      console.error('Error saving student profile', e);
    }
  }

  return newProfile;
};

export const setActiveStudentProfileId = (profileId: string): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STUDENT_STORAGE_KEYS.ACTIVE_PROFILE_ID, profileId);
    const profiles = getAllStudentProfiles();
    const active = profiles.find((p) => p.id === profileId);
    if (active) {
      localStorage.setItem('tutor_m1_user_name', active.name);
    }
    window.dispatchEvent(new Event('tutor_m1_student_profile_changed'));
  } catch (e) {
    console.error('Error setting active student profile id', e);
  }
};

export const deleteStudentProfile = (profileId: string): void => {
  if (typeof window === 'undefined') return;
  try {
    const profiles = getAllStudentProfiles().filter((p) => p.id !== profileId);
    localStorage.setItem(STUDENT_STORAGE_KEYS.PROFILES_LIST, JSON.stringify(profiles));
    const activeId = localStorage.getItem(STUDENT_STORAGE_KEYS.ACTIVE_PROFILE_ID);
    if (activeId === profileId) {
      if (profiles.length > 0) {
        setActiveStudentProfileId(profiles[0].id);
      } else {
        localStorage.removeItem(STUDENT_STORAGE_KEYS.ACTIVE_PROFILE_ID);
        localStorage.removeItem('tutor_m1_user_name');
        window.dispatchEvent(new Event('tutor_m1_student_profile_changed'));
      }
    }
  } catch (e) {
    console.error('Error deleting student profile', e);
  }
};

export const clearAllUserData = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.RESOLVED_MISTAKES);
    localStorage.removeItem(STORAGE_KEYS.USER_STATS);
    localStorage.removeItem('tutor_m1_practice_attempts');
    localStorage.removeItem('tutor_m1_user_name');
    localStorage.removeItem(STUDENT_STORAGE_KEYS.ACTIVE_PROFILE_ID);
    localStorage.removeItem(STUDENT_STORAGE_KEYS.PROFILES_LIST);
    localStorage.removeItem('tutor_m1_gamification_state');
    localStorage.removeItem('tutor_m1_roadmap_checklist_v1');
    window.dispatchEvent(new Event('tutor_m1_student_profile_changed'));
  } catch (e) {
    console.error('Error clearing user data', e);
  }
};
