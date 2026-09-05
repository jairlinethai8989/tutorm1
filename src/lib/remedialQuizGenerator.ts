import { Question } from '@/types/question';
import { ALL_QUESTIONS, getQuestionById } from '@/lib/data-loader';
import { getTemplatesByTopic, generateQuestionFromTemplate } from '@/lib/template-engine/engine';
import { SUBJECTS } from '@/lib/constants/subjects';
import { getAllMistakeRecords } from '@/lib/storage';
import { shuffleQuestionChoices } from '@/lib/utils';

/**
 * โครงสร้างข้อมูลคำใบ้แบบ 3 ระดับ
 */
export interface QuestionHintBundle {
  concept: string;     // 💡 สูตรและคอนเซปต์หลัก
  stepGuide: string;   // 🔍 แนวทางการวิเคราะห์ขั้นตอนแรก
  pitfall: string;     // ⚠️ จุดลวงที่คนมักพลาดบ่อย
}

/**
 * สุ่มลำดับอาเรย์ (Fisher-Yates Shuffle)
 */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * ดึงคำใบ้แบบ 3 ระดับจากข้อมูล Solution และ Topic ของข้อสอบ
 */
export function extractQuestionHints(q: Question): QuestionHintBundle {
  const sol = (q.solution || {}) as any;

  // 1. Concept & Formula (💡)
  let concept = '';
  if (sol.trickTip) {
    concept = sol.trickTip;
  } else if (sol.fastTrick) {
    concept = sol.fastTrick;
  } else if (sol.steps && sol.steps.length > 0) {
    const firstStep = sol.steps[0];
    if (typeof firstStep === 'object' && firstStep.formula) {
      concept = `สูตรที่ใช้: ${firstStep.formula}`;
    } else if (typeof firstStep === 'object' && firstStep.content) {
      concept = firstStep.content;
    } else if (typeof firstStep === 'string') {
      concept = firstStep;
    }
  }

  if (!concept) {
    if (q.subjectId === 'math') {
      concept = 'พิจารณาสูตรคำนวณและสมบัติทางคณิตศาสตร์ของบทนี้ จัดรูปตัวแปรหรือมองหาแบบรูปความสัมพันธ์';
    } else if (q.subjectId === 'science') {
      concept = 'วิเคราะห์จากหลักการทางวิทยาศาสตร์ ตัวแปรต้น-ตัวแปรตาม และผลการทดลองที่กำหนดให้';
    } else if (q.subjectId === 'english') {
      concept = 'สังเกตรูปประโยค (Subject-Verb Agreement), Tense Marker หรือบริบทของคำศัพท์ (Context Clues)';
    } else if (q.subjectId === 'thai') {
      concept = 'พิจารณาชนิดของคำ โครงสร้างประโยค หรือใจความสำคัญของข้อความ';
    } else {
      concept = 'เชื่อมโยงข้อมูลเหตุการณ์ กฎหมาย หรือหลักการสำคัญในหมวดวิชา';
    }
  }

  // 2. Step Guide (🔍)
  let stepGuide = '';
  if (sol.steps && sol.steps.length > 1) {
    const stepObj = sol.steps[0];
    stepGuide = typeof stepObj === 'object' ? (stepObj.content || stepObj.title || '') : stepObj;
  }
  if (!stepGuide && sol.summary) {
    stepGuide = sol.summary.split('.')[0] || sol.summary;
  }
  if (!stepGuide) {
    stepGuide = 'ขั้นที่ 1: กำหนดสิ่งที่โจทย์ถาม และสิ่งที่โจทย์ให้มา\nขั้นที่ 2: แปลงหน่วยให้สอดคล้องกันก่อนลงมือคำนวณหรือเลือกช้อยส์';
  }

  // 3. Pitfall Alert (⚠️)
  let pitfall = '';
  if (sol.commonMistake) {
    pitfall = sol.commonMistake;
  } else {
    if (q.subjectId === 'math') {
      pitfall = 'ระวังการลืมแปลงหน่วยความยาว/พื้นที่ หรือสับสนเครื่องหมายบวก-ลบในการย้ายข้างสมการ';
    } else if (q.subjectId === 'science') {
      pitfall = 'ระวังการอ่านคำถามไม่ละเอียด เช่น โจทย์ถามข้อที่ไม่ถูกต้อง หรือสับสนระหว่างตัวแปรควบคุม';
    } else if (q.subjectId === 'english') {
      pitfall = 'ระวังคำหลอกที่มีความหมายใกล้เคียงกัน หรือการเปลี่ยนรูปของกริยาในช่อง 2 และ 3';
    } else {
      pitfall = 'ระวังช้อยส์ที่มีข้อความถูกต้องบางส่วน แต่ตอบไม่ตรงกับคำถามหลักของโจทย์';
    }
  }

  return {
    concept,
    stepGuide,
    pitfall,
  };
}

/**
 * สร้างชุดข้อสอบซ่อมจุดอ่อน 10 ข้อแบบ 3-Layer Weighted Mix
 */
export function generateRemedialQuiz(topicId: string, limit: number = 10): {
  topicName: string;
  subjectName: string;
  subjectColor: string;
  subjectId: string;
  questions: Question[];
  fromMistakeCount: number;
} {
  // 1. ค้นหาข้อมูล topic และ subject
  let topicName = 'แบบฝึกหัดเฉพาะบท';
  let subjectName = 'ทั่วไป';
  let subjectColor = '#3578F6';
  let subjectId = 'math';

  for (const s of SUBJECTS) {
    const found = s.topics.find((t) => t.id === topicId);
    if (found) {
      topicName = found.name;
      subjectName = s.name;
      subjectColor = s.color;
      subjectId = s.id;
      break;
    }
  }

  const cleanTopic = topicName.split('(')[0].trim().toLowerCase();
  const selectedList: Question[] = [];
  const seenIds = new Set<string>();

  // Layer 1: ดึงข้อที่น้อง "เคยตอบผิด" ใน Mistake Book ที่ตรงกับหมวดนี้ (สูงสุด 4 ข้อ)
  const mistakeRecords = getAllMistakeRecords();
  const unresolvedTopicMistakes = mistakeRecords
    .filter((m) => !m.isResolved)
    .map((m) => getQuestionById(m.questionId))
    .filter((q): q is Question => {
      if (!q) return false;
      return (
        q.topicId === topicId ||
        q.topicName?.toLowerCase().includes(cleanTopic) ||
        cleanTopic.includes(q.topicName?.toLowerCase() || '')
      );
    });

  for (const q of unresolvedTopicMistakes) {
    if (selectedList.length >= Math.ceil(limit * 0.4)) break;
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      selectedList.push(q);
    }
  }
  const fromMistakeCount = selectedList.length;

  // Layer 2: ดึงข้อสอบจริงตรงหมวดจาก ALL_QUESTIONS (สูงสุด 4-6 ข้อ)
  const directTopicQuestions = ALL_QUESTIONS.filter(
    (q) =>
      q.topicId === topicId ||
      q.topicName?.toLowerCase().includes(cleanTopic) ||
      cleanTopic.includes(q.topicName?.toLowerCase() || '')
  );

  const shuffledDirect = shuffle(directTopicQuestions);
  for (const q of shuffledDirect) {
    if (selectedList.length >= Math.ceil(limit * 0.8)) break;
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      selectedList.push(q);
    }
  }

  // Layer 3: เติมด้วย Dynamic Template Engine (สุ่มตัวเลขเพื่อฝึกคิดจริง)
  const templates = getTemplatesByTopic(topicId);
  if (templates && templates.length > 0) {
    const shuffledTemplates = shuffle(templates);
    for (const tmpl of shuffledTemplates) {
      if (selectedList.length >= limit) break;
      try {
        const generated = generateQuestionFromTemplate(tmpl);
        if (!seenIds.has(generated.id)) {
          seenIds.add(generated.id);
          selectedList.push(generated);
        }
      } catch {
        // Ignore template errors
      }
    }
  }

  // Layer 4 Fallback: ถ้ายังไม่ครบ 10 ข้อ ให้ดึงข้อสอบในวิชาเดียวกันมาเสริม
  if (selectedList.length < limit) {
    const sameSubjectQuestions = shuffle(
      ALL_QUESTIONS.filter((q) => q.subjectId === subjectId)
    );
    for (const q of sameSubjectQuestions) {
      if (selectedList.length >= limit) break;
      if (!seenIds.has(q.id)) {
        seenIds.add(q.id);
        selectedList.push(q);
      }
    }
  }

  return {
    topicName,
    subjectName,
    subjectColor,
    subjectId,
    questions: selectedList.slice(0, limit).map((q) => shuffleQuestionChoices(q)),
    fromMistakeCount,
  };
}
