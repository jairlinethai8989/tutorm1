import { ParentDiagnosticReport, SubjectReportSummary } from '@/types/parentReport';
import {
  getUserStats,
  getActiveStudentProfile,
  getStoredAttempts,
  getAllMistakeRecords,
} from '@/lib/storage';
import { getGamificationState } from '@/lib/gamification';

const SUBJECT_CONFIGS: {
  id: string;
  name: string;
  color: string;
  defaultStrengths: string[];
  defaultFocus: string[];
  tipsForParents: {
    high: string;
    medium: string;
    low: string;
  };
}[] = [
  {
    id: 'math',
    name: 'คณิตศาสตร์ (Math)',
    color: '#3578F6',
    defaultStrengths: ['จำนวนและการดำเนินการ', 'การคิดเลขเร็ว'],
    defaultFocus: ['เรขาคณิต 2D/3D', 'โจทย์ปัญหาสมการ'],
    tipsForParents: {
      high: 'น้องมีความแม่นยำสูง แนะนำให้เสริมโจทย์ระดับแข่งขัน (Gifted/ห้องพิเศษ) เพื่อเพิ่มความเร็วในการตัดช้อยส์',
      medium: 'น้องเข้าใจหลักการดี แนะนำให้คุณพ่อคุณแม่ช่วยตรวจทานเรื่องการวาดรูปเรขาคณิตและแปลงหน่วยเวลา/ระยะทาง',
      low: 'ควรฝึกทบทวน "สูตรลัดเรขาคณิต" และการตั้งสมการตัวแปร $x$ วันละ 3-5 ข้ออย่างสม่ำเสมอ',
    },
  },
  {
    id: 'science',
    name: 'วิทยาศาสตร์ (Science)',
    color: '#10B981',
    defaultStrengths: ['ชีววิทยาและพืช', 'สิ่งแวดล้อม'],
    defaultFocus: ['ฟิสิกส์คำนวณ (แรง/ไฟฟ้า)', 'การทดลองและตัวแปร'],
    tipsForParents: {
      high: 'น้องมีกระบวนการคิดแบบวิทยาศาสตร์ดีเยี่ยม แนะนำให้ฝึกวิเคราะห์กราฟและผลการทดลองที่ซับซ้อน',
      medium: 'แนะนำให้จำสูตรคำนวณฟิสิกส์ $D=m/V$ และวงจรไฟฟ้าอนุกรม/ขนาน พร้อมการแยกสารผสม',
      low: 'ควรทบทวนเรื่องกรด-เบส (pH), กระดาษลิตมัส, และการทดลองสังเคราะห์แสงด้วยสารละลายไอโอดีน',
    },
  },
  {
    id: 'english',
    name: 'ภาษาอังกฤษ (English)',
    color: '#8257F5',
    defaultStrengths: ['Vocabulary พื้นฐาน', 'Conversations'],
    defaultFocus: ['12 Tenses & Time Markers', 'Subject-Verb Agreement'],
    tipsForParents: {
      high: 'คลังคำศัพท์และไวยากรณ์แข็งแกร่งมาก แนะนำให้อ่าน Reading Passage ขนาดยาวเพื่อฝึกจับใจความเร็ว',
      medium: 'แนะนำให้ช่วยน้องสังเกต "คำบอกเวลา" (yesterday, since, for, always) ในประโยคก่อนเลือกกริยา',
      low: 'ควรท่องศัพท์หมวด Synonyms วันละ 5 คำ และทบทวนกริยา 3 ช่องที่ออกสอบบ่อย',
    },
  },
  {
    id: 'thai',
    name: 'ภาษาไทย (Thai)',
    color: '#F59E0B',
    defaultStrengths: ['การอ่านจับใจความ', 'สำนวนไทย'],
    defaultFocus: ['คำสมาส-สนธิ', 'คำราชาศัพท์ (การใช้ทรง)'],
    tipsForParents: {
      high: 'หลักภาษาและการจับใจความดีเยี่ยม แนะนำให้ฝึกแยกประโยคความรวม/ความซ้อนที่มีโครงสร้างซับซ้อน',
      medium: 'ทบทวนสูตรจำ "สมาสชน สนธิเชื่อม" และ "ไตรยางศ์ อักษร 3 หมู่" ให้ขึ้นใจ',
      low: 'เน้นย้ำเรื่องคำเป็น-คำตาย (นมยวง vs กบด) และข้อห้ามใช้ "ทรง" นำหน้ากริยาราชาศัพท์แท้',
    },
  },
  {
    id: 'social',
    name: 'สังคมศึกษา (Social Studies)',
    color: '#F05252',
    defaultStrengths: ['ศาสนาและวันสำคัญ', 'หน้าที่พลเมือง'],
    defaultFocus: ['ภูมิศาสตร์ (ละติจูด-ลองจิจูด)', 'เศรษฐศาสตร์ (อุปสงค์-อุปทาน)'],
    tipsForParents: {
      high: 'รอบรู้ทั้งประวัติศาสตร์และสังคม แนะนำให้อัปเดตเหตุการณ์ปัจจุบันและแผนที่ประเทศไทย',
      medium: 'จำสูตรลัดภูมิศาสตร์ "ละนอนลองตั้ง" และกฎอุปสงค์ (คนซื้อ) vs อุปทาน (คนขาย)',
      low: 'ทบทวนเรื่องอำนาจอธิปไตย 3 ฝ่าย และลำดับยุคสมัยประวัติศาสตร์ไทย สุโขทัย-อยุธยา-ธนบุรี-รัตนโกสินทร์',
    },
  },
];

export const generateParentDiagnosticReport = (): ParentDiagnosticReport => {
  const profile = getActiveStudentProfile();
  const stats = getUserStats();
  const gamification = getGamificationState();
  const attempts = getStoredAttempts();
  const mistakes = getAllMistakeRecords();

  const studentName = profile?.name || 'น้องนักเรียน ป.6';
  const targetSchool = profile?.targetSchool || 'โรงเรียนแข่งขันชั้นนำ (Gifted/ห้องพิเศษ)';
  const studentAvatar = profile?.avatar || '🎓';
  const currentLevel = gamification.level || 1;
  const currentExp = gamification.currentExp || 0;

  const totalQuestionsDone = stats?.totalQuestionsAnswered || 0;
  const totalExamsDone = attempts.length;
  const overallAccuracyPercent = stats?.overallAccuracy || (totalQuestionsDone > 0 ? Math.round((stats.totalCorrectAnswers / totalQuestionsDone) * 100) : 75);

  // Generate 5 Subjects Report
  const subjects: SubjectReportSummary[] = SUBJECT_CONFIGS.map((cfg) => {
    const subjectStat = stats?.subjectStats?.[cfg.id];
    const attempted = subjectStat?.questionsAnswered || 0;
    const correct = subjectStat?.correctAnswers || 0;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 72; // Default baseline if not attempted yet

    let readinessLevel: 'excellent' | 'moderate' | 'needs_improvement' = 'moderate';
    let readinessText = 'ระดับปานกลาง (พร้อมพัฒนา)';
    let aiAdvice = cfg.tipsForParents.medium;

    if (accuracy >= 80) {
      readinessLevel = 'excellent';
      readinessText = 'พร้อมสอบระดับดีเยี่ยม (ชำนาญ)';
      aiAdvice = cfg.tipsForParents.high;
    } else if (accuracy < 60) {
      readinessLevel = 'needs_improvement';
      readinessText = 'ต้องเร่งเสริมจุดอ่อนเร่งด่วน';
      aiAdvice = cfg.tipsForParents.low;
    }

    return {
      subjectId: cfg.id,
      subjectName: cfg.name,
      accuracyPercent: accuracy,
      totalQuestionsAttempted: attempted,
      totalCorrect: correct,
      readinessLevel,
      readinessText,
      color: cfg.color,
      topStrengths: cfg.defaultStrengths,
      focusAreas: cfg.defaultFocus,
      aiAdviceForParents: aiAdvice,
    };
  });

  let overallReadiness: 'excellent' | 'moderate' | 'needs_improvement' = 'moderate';
  let overallAssessmentText = 'น้องมีพื้นฐานการเรียนรู้อยู่ในเกณฑ์ดี มีโอกาสสอบติดสูง หากเน้นย้ำจุดที่มักผิดพลาดใน "สมุดจุดอ่อน" อย่างสม่ำเสมอ';

  if (overallAccuracyPercent >= 80) {
    overallReadiness = 'excellent';
    overallAssessmentText = 'ผลการประเมินอยู่ในเกณฑ์ยอดเยี่ยม มีความพร้อมสูงมากสำหรับโรงเรียนเป้าหมาย แนะนำให้ฝึกทำข้อสอบจับเวลาจริงเพื่อรักษาความมั่นใจ';
  } else if (overallAccuracyPercent < 60) {
    overallReadiness = 'needs_improvement';
    overallAssessmentText = 'ควรจัดตารางทบทวนสรุปสูตรและฝึกทำโจทย์วันละ 10-15 ข้อ โดยมีผู้ปกครองช่วยติดตามและให้กำลังใจอย่างใกล้ชิด';
  }

  const today = new Date();
  const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
  ];
  const assessmentDate = `${today.getDate()} ${thaiMonths[today.getMonth()]} ${today.getFullYear() + 543}`;

  return {
    studentName,
    targetSchool,
    studentAvatar,
    currentLevel,
    currentExp,
    totalQuestionsDone,
    totalExamsDone,
    overallAccuracyPercent,
    overallReadiness,
    overallAssessmentText,
    assessmentDate,
    subjects,
    topGlobalStrengths: [
      'ความกระตือรือร้นในการทำข้อสอบและสะสม EXP',
      'ทักษะการคิดคำนวณพื้นฐานและการอ่านจับใจความ',
      'ความคุ้นเคยกับการฝึกทำข้อสอบจับเวลา',
    ],
    topGlobalWeaknesses: [
      'การอ่านโจทย์ลวงที่มีเงื่อนไขซับซ้อนหลายชั้น',
      'การจัดสรรเวลาในข้อสอบคณิตศาสตร์และวิทยาศาสตร์คำนวณ',
      'การตรวจทานความถูกต้องก่อนกดยืนยันคำตอบ',
    ],
    studyPlanRoadmap: [
      {
        phase: 'สัปดาห์ที่ 1-2 (ปูพื้นฐาน & ปิดจุดอ่อน)',
        duration: '14 วัน',
        focus: 'ทบทวนคลังสรุปสูตร (Cheat Sheets) และทำซ้ำข้อสอบในสมุดจุดอ่อน',
        parentAction: 'ตรวจเช็คว่าน้องได้เคลียร์ข้อสอบที่เคยทำผิดวันละ 5 ข้อ และชมเชยเมื่อทำได้สำเร็จ',
      },
      {
        phase: 'สัปดาห์ที่ 3-4 (ฝึกจำลองสอบจับเวลาจริง)',
        duration: '14 วัน',
        focus: 'ทำชุดข้อสอบจำลองเสมือนจริงของโรงเรียนเป้าหมาย สัปดาห์ละ 2-3 ชุด',
        parentAction: 'สร้างบรรยากาศห้องสอบที่เงียบสงบ และช่วยดูเวลาให้อยู่ในกรอบ 60 นาที',
      },
      {
        phase: 'สัปดาห์สุดท้ายก่อนสอบ (รักษาพลังใจ & เตรียมความพร้อม)',
        duration: '7 วัน',
        focus: 'อ่านทบทวนชีทสรุปสูตรฉบับย่อ พักผ่อนให้เพียงพอ ไม่หักโหม',
        parentAction: 'ดูแลสุขภาพ อาหารการกิน และพูดให้กำลังใจเพื่อลดความกังวลใจของน้อง',
      },
    ],
  };
};
