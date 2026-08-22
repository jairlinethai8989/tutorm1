import { Question } from '@/types/question';
import { CHULABHORN_THAI_QUESTIONS } from './chulabhornThai';

export const THAI_QUESTIONS: Question[] = [
  ...CHULABHORN_THAI_QUESTIONS,
  {
    id: 'thai-gram-001',
    subjectId: 'thai',
    topicId: 'thai-grammar',
    topicName: 'หลักภาษาและการใช้ภาษา',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'คำสมาส', 'คำสนธิ'],
    source: 'แนวข้อสอบเข้า ม.1 เบ็ญจะมะมหาราช (ห้องปกติ)',
    targetSchool: 'benchama',
    content: 'ข้อใดเป็น "คำสมาสแบบมีสนธิ" ทุกคำ?',
    choices: [
      { id: 'c1', label: 'ก', content: 'ภูมิศาสตร์, วารสาร', isCorrect: false },
      { id: 'c2', label: 'ข', content: 'วิทยาลัย, มหรรณพ', isCorrect: true },
      { id: 'c3', label: 'ค', content: 'ผลไม้, ทิพยเนตร', isCorrect: false },
      { id: 'c4', label: 'ง', content: 'ราชการ, มนัสการ', isCorrect: false },
    ],
    solution: {
      summary: 'วิทยาลัย (วิทยา + อาลัย) และ มหรรณพ (มหา + อรรณพ) เป็นคำสมาสที่มีการสนธิเชื่อมเสียง',
      trickTip: '💡 "สมาสชน สนธิเชื่อม" -> สมาสธรรมดาแค่วางต่อกัน (เช่น ภูมิ + ศาสตร์ = ภูมิศาสตร์) ส่วนสนธิจะมีการกลืนเสียงหรือเปลี่ยนรูปสระ (วิทยา + อาลัย = วิทยาลัย)',
      commonMistake: '⚠️ "ผลไม้" ไม่ใช่คำสมาส เพราะ "ไม้" เป็นคำไทยแท้ คำสมาสต้องมาจากภาษาบาลี-สันสกฤตเท่านั้น',
      steps: [
        {
          stepNumber: 1,
          title: 'แยกส่วนประกอบของคำในตัวเลือก ข',
          content: '• วิทยาลัย = วิทยา + อาลัย (สระ อา + อา เชื่อมเป็น อา)\n• มหรรณพ = มหา + อรรณพ (มหา + สระ อะ เชื่อมเป็น มหรร-)',
        },
      ],
    },
  },
  {
    id: 'thai-read-001',
    subjectId: 'thai',
    topicId: 'thai-reading',
    topicName: 'การอ่านวิเคราะห์และการตีความ',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'การอ่านจับใจความ', 'สำนวนไทย'],
    source: 'แนวข้อสอบภาษาไทย สไตล์ มศว.',
    targetSchool: 'benchama',
    content: 'สำนวนในข้อใดมีความหมายสอดคล้องกับพฤติกรรม "การกระทำสิ่งใดสิ่งหนึ่งที่ลงทุนมาก เสียค่าใช้จ่ายสูง แต่กลับได้ผลตอบแทนเพียงเล็กน้อยไม่คุ้มค่า"?',
    choices: [
      { id: 'c1', label: 'ก', content: 'จับปลาสองมือ', isCorrect: false },
      { id: 'c2', label: 'ข', content: 'ขี่ช้างจับตั๊กแตน', isCorrect: true },
      { id: 'c3', label: 'ค', content: 'ชี้โพรงให้กระรอก', isCorrect: false },
      { id: 'c4', label: 'ง', content: 'น้ำซึมบ่อทราย', isCorrect: false },
    ],
    solution: {
      summary: '"ขี่ช้างจับตั๊กแตน" หมายถึง ลงทุนมากแต่ได้ผลประโยชน์นิดเดียว ไม่คุ้มค่าเหนื่อยหรือค่าใช้จ่าย',
      trickTip: '💡 ขี่ช้าง (เรื่องใหญ่/ลงทุนสูง) เพื่อไปจับตั๊กแตน (สิ่งเล็กน้อยมาก)',
      steps: [
        {
          stepNumber: 1,
          title: 'วิเคราะห์ความหมายของแต่ละสำนวน',
          content: '• จับปลาสองมือ = มุ่งหวังจะเอาทั้งสองอย่างพร้อมกันจนไม่ได้สักอย่าง\n• ขี่ช้างจับตั๊กแตน = ลงทุนมากแต่ได้ผลตอบแทนไม่คุ้มค่า\n• ชี้โพรงให้กระรอก = บอกช่องทางให้คนทำผิดหรือแสวงหาประโยชน์\n• น้ำซึมบ่อทราย = สิ่งที่มีเข้ามาเรื่อยๆ ไม่ขาดสาย',
        },
      ],
    },
  },
];
