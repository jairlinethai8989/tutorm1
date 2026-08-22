import { Question } from '@/types/question';

export const SOCIAL_QUESTIONS: Question[] = [
  {
    id: 'soc-geo-001',
    subjectId: 'social',
    topicId: 'soc-geography-econ',
    topicName: 'ภูมิศาสตร์และเศรษฐศาสตร์',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'ภูมิศาสตร์', 'แผนที่'],
    source: 'แนวข้อสอบสังคมศึกษา ม.1 เบ็ญจะมะมหาราช',
    targetSchool: 'benchama',
    content: 'ถ้ามาตราส่วนในแผนที่ระบุเป็น 1 : 50,000 และวัดระยะทางระหว่างจุด A กับจุด B บนแผนที่ได้ 6 เซนติเมตร ระยะทางจริงในภูมิประเทศเท่ากับกี่กิโลเมตร?',
    choices: [
      { id: 'c1', label: 'ก', content: '3 กิโลเมตร', isCorrect: true },
      { id: 'c2', label: 'ข', content: '30 กิโลเมตร', isCorrect: false },
      { id: 'c3', label: 'ค', content: '300 กิโลเมตร', isCorrect: false },
      { id: 'c4', label: 'ง', content: '0.3 กิโลเมตร', isCorrect: false },
    ],
    solution: {
      summary: 'ระยะทางจริงในภูมิประเทศคือ 3 กิโลเมตร',
      trickTip: '💡 มาตราส่วน 1 : 50,000 หมายถึง 1 ซม. ในแผนที่ = 50,000 ซม. (500 เมตร หรือ 0.5 กม.) ในพื้นที่จริง -> 6 ซม. × 0.5 กม. = 3 กม.',
      commonMistake: '⚠️ การแปลงหน่วย: 100 เซนติเมตร = 1 เมตร และ 1,000 เมตร = 1 กิโลเมตร (ดังนั้น 100,000 เซนติเมตร = 1 กิโลเมตร)',
      steps: [
        {
          stepNumber: 1,
          title: 'คำนวณระยะทางในหน่วยเซนติเมตร',
          content: '$$\\text{ระยะทางจริง} = 6 \\times 50,000 = 300,000\\text{ เซนติเมตร}$$',
        },
        {
          stepNumber: 2,
          title: 'แปลงเซนติเมตรเป็นกิโลเมตร',
          content: '$$300,000 \\text{ ซม.} = \\frac{300,000}{100} \\text{ ม.} = 3,000 \\text{ ม.} = \\frac{3,000}{1,000} \\text{ กม.} = 3\\text{ กิโลเมตร}$$',
        },
      ],
    },
  },
  {
    id: 'soc-civ-001',
    subjectId: 'social',
    topicId: 'soc-civics-history',
    topicName: 'หน้าที่พลเมือง ศาสนา และประวัติศาสตร์',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['มศว.', 'เศรษฐศาสตร์', 'อุปสงค์อุปทาน'],
    source: 'แนวข้อสอบสังคมศึกษา สไตล์ มศว.',
    targetSchool: 'benchama',
    content: 'ตามกฎของอุปทาน (Law of Supply) เมื่อราคาสินค้าชนิดหนึ่งในตลาดปรับตัวสูงขึ้นอย่างมาก ผู้ผลิตจะมีพฤติกรรมอย่างไร?',
    choices: [
      { id: 'c1', label: 'ก', content: 'ลดปริมาณการผลิตลง เพื่อประหยัดต้นทุน', isCorrect: false },
      { id: 'c2', label: 'ข', content: 'เพิ่มปริมาณการผลิตสินค้าออกสู่ตลาดมากขึ้น เพื่อหวังผลกำไรที่สูงขึ้น', isCorrect: true },
      { id: 'c3', label: 'ค', content: 'หยุดการผลิตชั่วคราว เพื่อรอให้ราคาลดลง', isCorrect: false },
      { id: 'c4', label: 'ง', content: 'เปลี่ยนไปผลิตสินค้าชนิดอื่นที่ไม่เกี่ยวข้องทันที', isCorrect: false },
    ],
    solution: {
      summary: 'ผู้ผลิตจะเพิ่มปริมาณการผลิตเมื่อราคาสินค้าสูงขึ้น ตามกฎของอุปทาน (ความสัมพันธ์แปรผันตรง)',
      trickTip: '💡 กฎของอุปทาน (ผู้ขาย): ราคาสูง 📈 อยากขายเยอะ 📈 (แปรผันตรง)\nกฎของอุปสงค์ (ผู้ซื้อ): ราคาสูง 📈 อยากซื้อน้อย 📉 (แปรผกผัน)',
      steps: [
        {
          stepNumber: 1,
          title: 'ทำความเข้าใจกฎของอุปทาน',
          content: 'อุปทานคือปริมาณความต้องการเสนอขายสินค้าของผู้ผลิต ซึ่งมีแรงจูงใจจากผลกำไร เมื่อราคาสินค้าในตลาดสูงขึ้น ผู้ผลิตจะได้กำไรต่อหน่วยมากขึ้น จึงเพิ่มกำลังการผลิต',
        },
      ],
    },
  },
];
