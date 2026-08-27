import { Question } from '@/types/question';
import { BENCHAMA_ENGLISH_QUESTIONS } from './benchamaEnglish';
import { SAMSEN_ENGLISH_QUESTIONS } from './samsenEnglish';

export const ENGLISH_QUESTIONS: Question[] = [
  ...BENCHAMA_ENGLISH_QUESTIONS,
  ...SAMSEN_ENGLISH_QUESTIONS,
  {
    id: 'eng-gram-001',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Grammar & Structure',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'Tenses', 'Grammar'],
    source: 'SMA Benchama Maharat Entrance Exam Guide',
    targetSchool: 'benchama',
    content: 'Choose the correct option to complete the sentence:\n"Neither of the boys ________ able to solve the math puzzle yesterday."',
    choices: [
      { id: 'c1', label: 'A', content: 'is', isCorrect: false },
      { id: 'c2', label: 'B', content: 'are', isCorrect: false },
      { id: 'c3', label: 'C', content: 'was', isCorrect: true },
      { id: 'c4', label: 'D', content: 'were', isCorrect: false },
    ],
    solution: {
      summary: 'คำตอบที่ถูกต้องคือ "was" เพราะประธานขึ้นต้นด้วย "Neither of + นามพหูพจน์" ถือเป็นเอกพจน์ตามหลักไวยากรณ์มาตรฐาน และมีคำว่า "yesterday" บ่งบอกเวลาในอดีต (Past Tense)',
      trickTip: '💡 กฎเหล็ก: "Neither of / Either of / Each of / One of + Plural Noun" ➔ ใช้คำกริยาเอกพจน์เสมอ! + "yesterday" = อดีต (was)',
      commonMistake: '⚠️ ข้อควรระวัง: นักเรียนมักเห็นคำว่า "boys" มี s แล้วเผลอเลือก "were" ต้องดูที่ "Neither" ซึ่งเป็นสรรพนามเอกพจน์',
      steps: [
        {
          stepNumber: 1,
          title: 'แปลความหมายประโยค',
          content: 'แปล: "ไม่มีเด็กผู้ชายคนใดในสองคนนั้นที่สามารถแก้โจทย์คณิตศาสตร์เมื่อวานนี้ได้เลย"',
        },
        {
          stepNumber: 2,
          title: 'วิเคราะห์ประธานและกาล (Tense)',
          content: 'ประธาน "Neither of the boys" มีแกนหลักคือ Neither (เอกพจน์) และคำว่า "yesterday" กำหนดให้ใช้ Past Tense รูปอดีตเอกพจน์ของ Verb to be จึงเป็น **was**',
        },
      ],
    },
  },
  {
    id: 'eng-read-001',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'Reading', 'Inference'],
    source: 'SWU Model English Test',
    targetSchool: 'benchama',
    content: 'Read the short passage and answer the question:\n"Honeybees perform a unique \'waggle dance\' inside their hive. By waggling their bodies in specific angles and rhythms, they communicate the precise direction and distance of newly discovered flower fields to other bees."\n\nWhat is the main purpose of the waggle dance?',
    choices: [
      { id: 'c1', label: 'A', content: 'To protect the hive from enemy insects', isCorrect: false },
      { id: 'c2', label: 'B', content: 'To share navigation information about food locations', isCorrect: true },
      { id: 'c3', label: 'C', content: 'To entertain the queen bee in the hive', isCorrect: false },
      { id: 'c4', label: 'D', content: 'To keep themselves warm during winter', isCorrect: false },
    ],
    solution: {
      summary: 'การเต้นส่ายตัว (Waggle dance) ของผึ้งมีจุดประสงค์หลักเพื่อสื่อสารบอกทิศทางและระยะทางของทุ่งดอกไม้ (แหล่งอาหาร) ให้ผึ้งตัวอื่นทราบ',
      trickTip: '💡 วลีสำคัญในบทความ: "communicate the precise direction and distance of newly discovered flower fields" (สื่อสารทิศทางและระยะทางของแหล่งดอกไม้)',
      commonMistake: '📚 คำศัพท์สำคัญ: waggle dance = การเต้นส่ายตัวสื่อสาร, precise = แม่นยำ, navigation = การนำทาง',
      steps: [
        {
          stepNumber: 1,
          title: 'แปลเนื้อหาบทอ่าน',
          content: 'แปล: "ผึ้งงานจะเต้นส่ายตัว (waggle dance) อันเป็นเอกลักษณ์ภายในรัง โดยการส่ายลำตัวตามองศาและจังหวะเฉพาะ เพื่อสื่อสารบอกทิศทางและระยะทางที่แม่นยำของทุ่งดอกไม้ที่เพิ่งค้นพบใหม่ให้ผึ้งตัวอื่นรับรู้"',
        },
        {
          stepNumber: 2,
          title: 'จับคู่ใจความสำคัญกับตัวเลือก',
          content: 'ทุ่งดอกไม้ (flower fields) คือแหล่งอาหารของผึ้ง ดังนั้นตัวเลือก B (To share navigation information about food locations - เพื่อแชร์ข้อมูลการนำทางไปยังแหล่งอาหาร) จึงถูกต้องและตรงกับเนื้อเรื่องที่สุด',
        },
      ],
    },
  },
];
