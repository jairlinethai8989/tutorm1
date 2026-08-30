import { SUBJECTS } from '@/lib/constants/subjects';
import { getStoredAttempts, getActiveStudentProfile, getUserStats } from '@/lib/storage';
import {
  AIDiagnosticResult,
  SubjectDiagnosticResult,
  SubTopicDiagnostic,
  SubjectRadarPoint,
} from '@/types/analytics';
import { ExamAttempt } from '@/types/exam';

/**
 * คำนวณสถานะความแม่นยำ (Tier)
 */
function getAccuracyStatus(
  totalAttempted: number,
  accuracyPercent: number
): 'excellent' | 'good' | 'warning' | 'critical' | 'no_data' {
  if (totalAttempted === 0) return 'no_data';
  if (accuracyPercent >= 80) return 'excellent';
  if (accuracyPercent >= 65) return 'good';
  if (accuracyPercent >= 50) return 'warning';
  return 'critical';
}

/**
 * รูปแบบวันที่ไทย เช่น "30 สิงหาคม 2569"
 */
function formatThaiDate(date: Date = new Date()): string {
  const thaiMonths = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];
  const day = date.getDate();
  const month = thaiMonths[date.getMonth()];
  const year = date.getFullYear() + 543;
  return `${day} ${month} ${year}`;
}

/**
 * Helper ค้นหา Topic จาก key หรือชื่อหัวข้อ
 */
function findMatchingTopic(key: string, subjectIdHint?: string) {
  const cleanKey = key.trim().toLowerCase();

  // 1. ค้นหาแบบตรงกับ topic.id หรือ topic.slug
  for (const s of SUBJECTS) {
    for (const t of s.topics) {
      if (
        t.id.toLowerCase() === cleanKey ||
        t.slug.toLowerCase() === cleanKey ||
        t.name.toLowerCase() === cleanKey
      ) {
        return t;
      }
    }
  }

  // 2. ค้นหาแบบ Partial match
  for (const s of SUBJECTS) {
    if (subjectIdHint && s.id !== subjectIdHint && subjectIdHint !== 'all') continue;
    for (const t of s.topics) {
      if (
        cleanKey.includes(t.name.toLowerCase()) ||
        cleanKey.includes(t.slug.toLowerCase()) ||
        t.name.toLowerCase().includes(cleanKey)
      ) {
        return t;
      }
    }
  }

  // 3. Keyword Heuristic Fallback
  if (cleanKey.includes('พีชคณิต') || cleanKey.includes('สมการ')) {
    return SUBJECTS.find((s) => s.id === 'math')?.topics.find((t) => t.id === 'math-algebra');
  }
  if (cleanKey.includes('เรขาคณิต') || cleanKey.includes('พื้นที่') || cleanKey.includes('ปริมาตร')) {
    return SUBJECTS.find((s) => s.id === 'math')?.topics.find((t) => t.id === 'math-geometry');
  }
  if (cleanKey.includes('จำนวน') || cleanKey.includes('ห.ร.ม.') || cleanKey.includes('ค.ร.น.')) {
    return SUBJECTS.find((s) => s.id === 'math')?.topics.find((t) => t.id === 'math-arithmetic');
  }
  if (cleanKey.includes('โจทย์ปัญหา') || cleanKey.includes('ร้อยละ') || cleanKey.includes('กำไร')) {
    return SUBJECTS.find((s) => s.id === 'math')?.topics.find((t) => t.id === 'math-word-problems');
  }
  if (cleanKey.includes('สถิติ') || cleanKey.includes('ความน่าจะเป็น')) {
    return SUBJECTS.find((s) => s.id === 'math')?.topics.find((t) => t.id === 'math-statistics');
  }
  if (cleanKey.includes('สิ่งมีชีวิต') || cleanKey.includes('พืช') || cleanKey.includes('ร่างกาย')) {
    return SUBJECTS.find((s) => s.id === 'science')?.topics.find((t) => t.id === 'sci-biology');
  }
  if (cleanKey.includes('แรง') || cleanKey.includes('ไฟฟ้า') || cleanKey.includes('ฟิสิกส์')) {
    return SUBJECTS.find((s) => s.id === 'science')?.topics.find((t) => t.id === 'sci-physics');
  }
  if (cleanKey.includes('สาร') || cleanKey.includes('เคมี') || cleanKey.includes('กรด-เบส')) {
    return SUBJECTS.find((s) => s.id === 'science')?.topics.find((t) => t.id === 'sci-chemistry');
  }
  if (cleanKey.includes('โลก') || cleanKey.includes('ดาราศาสตร์') || cleanKey.includes('อวกาศ')) {
    return SUBJECTS.find((s) => s.id === 'science')?.topics.find((t) => t.id === 'sci-earth-space');
  }
  if (cleanKey.includes('grammar') || cleanKey.includes('tense')) {
    return SUBJECTS.find((s) => s.id === 'english')?.topics.find((t) => t.id === 'eng-grammar');
  }
  if (cleanKey.includes('reading') || cleanKey.includes('passage')) {
    return SUBJECTS.find((s) => s.id === 'english')?.topics.find((t) => t.id === 'eng-reading');
  }
  if (cleanKey.includes('vocab') || cleanKey.includes('conversation')) {
    return SUBJECTS.find((s) => s.id === 'english')?.topics.find((t) => t.id === 'eng-conversation');
  }
  if (cleanKey.includes('ราชาศัพท์') || cleanKey.includes('หลักภาษา')) {
    return SUBJECTS.find((s) => s.id === 'thai')?.topics.find((t) => t.id === 'thai-grammar');
  }
  if (cleanKey.includes('จับใจความ') || cleanKey.includes('การอ่าน')) {
    return SUBJECTS.find((s) => s.id === 'thai')?.topics.find((t) => t.id === 'thai-reading');
  }
  if (cleanKey.includes('ภูมิศาสตร์') || cleanKey.includes('เศรษฐศาสตร์')) {
    return SUBJECTS.find((s) => s.id === 'social')?.topics.find((t) => t.id === 'soc-geography-econ');
  }
  if (cleanKey.includes('ประวัติศาสตร์') || cleanKey.includes('พลเมือง') || cleanKey.includes('ศาสนา')) {
    return SUBJECTS.find((s) => s.id === 'social')?.topics.find((t) => t.id === 'soc-civics-history');
  }

  return undefined;
}

/**
 * AI Diagnostic Engine: ประมวลผลและวิเคราะห์จุดอ่อนจุดแข็งรายบทย่อย 5 วิชา
 */
// In-memory cache for diagnostic reports to avoid re-aggregating thousands of answers repeatedly
let cachedReportAttemptsRef: ExamAttempt[] | null = null;
let cachedReportResult: AIDiagnosticResult | null = null;

export function generateAIDiagnosticReport(): AIDiagnosticResult {
  const attempts = getStoredAttempts();

  if (attempts === cachedReportAttemptsRef && cachedReportResult !== null) {
    return cachedReportResult;
  }

  const overallStats = getUserStats();
  const activeProfile = getActiveStudentProfile();

  const studentName = activeProfile?.name || 'ผู้เรียน';
  const targetSchool = activeProfile?.targetSchool || 'โรงเรียนแข่งขันสูง / ห้องพิเศษ';

  // Map เพื่อสะสมข้อมูลรายบทย่อย: topicId -> { total, correct, timeSpent, recentRuns: { total, correct }[] }
  const topicStatsMap: Record<
    string,
    {
      total: number;
      correct: number;
      timeSpent: number;
      recentRuns: { total: number; correct: number }[];
    }
  > = {};

  // Initialize map สำหรับทุกหัวข้อใน SUBJECTS
  SUBJECTS.forEach((subject) => {
    subject.topics.forEach((topic) => {
      topicStatsMap[topic.id] = {
        total: 0,
        correct: 0,
        timeSpent: 0,
        recentRuns: [],
      };
    });
  });

  // วนลูปอ่านข้อมูล attempts จากประวัติ
  attempts.forEach((att) => {
    // 1. ตรวจสอบ topicBreakdown ใน attempt
    if (att.topicBreakdown) {
      Object.entries(att.topicBreakdown).forEach(([key, stats]) => {
        const matchedTopic = findMatchingTopic(key, att.subjectId);
        if (matchedTopic) {
          const entry = topicStatsMap[matchedTopic.id];
          if (entry) {
            entry.total += stats.total;
            entry.correct += stats.correct;
            entry.recentRuns.push({ total: stats.total, correct: stats.correct });
          }
        }
      });
    }
  });

  // สร้างผลลัพธ์ระดับรายวิชาและบทย่อย
  const subjectResults: SubjectDiagnosticResult[] = SUBJECTS.map((subj) => {
    let subjectTotal = 0;
    let subjectCorrect = 0;
    let subjectTime = 0;

    const subTopics: SubTopicDiagnostic[] = subj.topics.map((t) => {
      const stat = topicStatsMap[t.id] || { total: 0, correct: 0, timeSpent: 0, recentRuns: [] };
      const accuracyPercent = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
      const status = getAccuracyStatus(stat.total, accuracyPercent);
      const avgTime = stat.total > 0 ? Math.round(stat.timeSpent / stat.total) || 45 : 45;

      // คำนวณแนวโน้ม (Trend)
      let trend: 'improving' | 'stable' | 'declining' | 'unknown' = 'unknown';
      if (stat.recentRuns.length >= 2) {
        const recent = stat.recentRuns.slice(-2);
        const firstAcc = recent[0].total > 0 ? (recent[0].correct / recent[0].total) * 100 : 0;
        const lastAcc = recent[1].total > 0 ? (recent[1].correct / recent[1].total) * 100 : 0;
        if (lastAcc > firstAcc + 5) trend = 'improving';
        else if (lastAcc < firstAcc - 5) trend = 'declining';
        else trend = 'stable';
      }

      subjectTotal += stat.total;
      subjectCorrect += stat.correct;
      subjectTime += stat.timeSpent;

      return {
        topicId: t.id,
        topicName: t.name,
        subjectId: subj.id,
        totalAttempted: stat.total,
        totalCorrect: stat.correct,
        accuracyPercent,
        status,
        avgTimePerQuestion: avgTime,
        trend,
      };
    });

    const overallAccuracy = subjectTotal > 0 ? Math.round((subjectCorrect / subjectTotal) * 100) : 0;
    const subjStatus = getAccuracyStatus(subjectTotal, overallAccuracy);

    // หาบทที่อ่อนที่สุดในวิชานี้ (เฉพาะที่มีการทำข้อสอบแล้ว และ accuracy < 70)
    const testedSubTopics = subTopics.filter((st) => st.totalAttempted > 0);
    const weakestTopic =
      testedSubTopics.length > 0
        ? [...testedSubTopics].sort((a, b) => a.accuracyPercent - b.accuracyPercent)[0]
        : null;

    return {
      subjectId: subj.id,
      subjectName: subj.name,
      subjectNameEn: subj.nameEn,
      color: subj.color,
      bgColor: subj.bgColor,
      borderColor: subj.borderColor,
      icon: subj.icon,
      overallAccuracy,
      totalAttempted: subjectTotal,
      totalCorrect: subjectCorrect,
      status: subjStatus,
      subTopics,
      weakestTopic,
    };
  });

  // สร้าง 5-Subject Radar Chart Data
  const subjectRadarData: SubjectRadarPoint[] = subjectResults.map((s) => ({
    subject: s.subjectName,
    subjectId: s.subjectId,
    score: s.overallAccuracy,
    fullMark: 100,
    questionsCount: s.totalAttempted,
    color: s.color,
  }));

  // รวบรวมทุกบทย่อยที่มีการทำข้อสอบแล้ว
  const allTestedSubTopics: SubTopicDiagnostic[] = [];
  subjectResults.forEach((s) => {
    s.subTopics.forEach((st) => {
      if (st.totalAttempted > 0) {
        allTestedSubTopics.push(st);
      }
    });
  });

  // จัดอันดับจุดอ่อน (เรียงจาก accuracy น้อยสุดไปมากสุด)
  const rankedWeaknesses = [...allTestedSubTopics]
    .filter((st) => st.accuracyPercent < 70)
    .sort((a, b) => a.accuracyPercent - b.accuracyPercent || b.totalAttempted - a.totalAttempted);

  // จัดอันดับจุดแข็ง (เรียงจาก accuracy มากสุดไปน้อยสุด)
  const rankedStrengths = [...allTestedSubTopics]
    .filter((st) => st.accuracyPercent >= 70)
    .sort((a, b) => b.accuracyPercent - a.accuracyPercent || b.totalAttempted - a.totalAttempted);

  const totalQuestionsAnalyzed = overallStats.totalQuestionsAttempted;
  const overallAccuracy = overallStats.accuracyRate;
  const overallReadiness = overallStats.examReadinessScore;

  const result: AIDiagnosticResult = {
    studentName,
    targetSchool,
    assessmentDate: formatThaiDate(new Date()),
    overallAccuracy,
    overallReadiness,
    totalQuestionsAnalyzed,
    totalMockExamsDone: overallStats.mockExamsCompleted,
    streakDays: overallStats.streakDays,
    subjectResults,
    subjectRadarData,
    rankedWeaknesses,
    rankedStrengths,
  };

  cachedReportAttemptsRef = attempts;
  cachedReportResult = result;

  return result;
}
