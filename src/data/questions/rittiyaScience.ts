import { Question } from '@/types/question';

/**
 * คลังข้อสอบวิทยาศาสตร์ โรงเรียนฤทธิยะวรรณาลัย (Rittiyawannalai School)
 * ชุด Pre-Entrance ปี 2564 (ข้อ 61 - 80) พร้อมเฉลยละเอียดและวิเคราะห์แนวคิด
 */

export const RITTIYA_2564_QUESTIONS: Question[] = [
  // ข้อ 61: การเปลี่ยนแปลงหลังปฏิสนธิ
  {
    id: 'rit-sci-64-061',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ชีววิทยา', 'พืช', 'การสืบพันธุ์ของพืช'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 61',
    targetSchool: 'all',
    content: 'หลังเกิดการปฏิสนธิของพืชดอกแล้ว ข้อใดกล่าว **ผิด**?',
    choices: [
      { id: 'c1', label: '1', content: 'รังไข่เจริญไปเป็นผล', isCorrect: false },
      { id: 'c2', label: '2', content: 'ออวุลเจริญไปเป็นเปลือกผล', isCorrect: true },
      { id: 'c3', label: '3', content: 'ไข่ที่ได้รับการผสมเจริญไปเป็นต้นอ่อน (Embryo)', isCorrect: false },
      { id: 'c4', label: '4', content: 'กลีบดอก เกสรเพศผู้ ยอดเกสรเพศเมีย เหี่ยวแห้งและหลุดร่วงไป', isCorrect: false },
    ],
    solution: {
      summary: 'ออวุลจะเจริญไปเป็น "เมล็ด" ส่วนผนังรังไข่จะเจริญไปเป็น "เปลือกและเนื้อผล" ข้อ 2 จึงผิด',
      trickTip: '💡 ท่องจำ: "รังไข่เป็นผล - ออวุลเป็นเมล็ด - ไข่เป็นต้นอ่อน"',
      steps: [
        {
          stepNumber: 1,
          title: 'จำแนกส่วนประกอบผลไม้',
          content: 'ออวุล (Ovule) $\\rightarrow$ เมล็ด (Seed)',
        },
      ],
    },
  },

  // ข้อ 62: วิตามิน
  {
    id: 'rit-sci-64-062',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 75,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ชีววิทยา', 'สารอาหาร', 'วิตามิน'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 62',
    targetSchool: 'all',
    content: 'พิจารณาข้อความต่อไปนี้:\nA = วิตามินเค มีส่วนสำคัญต่อการแข็งตัวของเลือด\nB = ร่างกายสามารถสังเคราะห์วิตามินดีเมื่อได้รับแสงแดดอ่อนๆ และแบคทีเรียในลำไส้ใหญ่ช่วยสังเคราะห์วิตามินเคและบี12\nC = วิตามินที่ละลายในน้ำ ได้แก่ วิตามินเอ วิตามินดี วิตามินอี วิตามินเค\nD = รับประทานวิตามินที่ละลายในไขมันปริมาณมากเกินไปจะไม่มีการสะสมในร่างกายและขับออกทางปัสสาวะ\n\nข้อใดกล่าวถูกต้อง?',
    choices: [
      { id: 'c1', label: '1', content: 'ข้อ A เท่านั้น', isCorrect: false },
      { id: 'c2', label: '2', content: 'ข้อ B เท่านั้น', isCorrect: false },
      { id: 'c3', label: '3', content: 'ข้อ A และ B', isCorrect: true },
      { id: 'c4', label: '4', content: 'ข้อ B, C และ D', isCorrect: false },
    ],
    solution: {
      summary: 'A ถูกต้อง (วิตามิน K ช่วยการแข็งตัวของเลือด), B ถูกต้อง (ผิวหนังสร้างวิตามิน D และแบคทีเรียลำไส้สร้าง K, B12)',
      trickTip: '💡 วิตามินละลายในไขมัน: A, D, E, K (สะสมในร่างกายได้ ขับทางปัสสาวะไม่ได้)',
      steps: [
        {
          stepNumber: 1,
          title: 'วิเคราะห์ข้อความ A-D',
          content: 'A ถูก, B ถูก, C ผิด (ADEK ละลายในไขมัน), D ผิด (ADEK สะสมในตับ)',
        },
      ],
    },
  },

  // ข้อ 63: ดอกครบส่วน
  {
    id: 'rit-sci-64-063',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ชีววิทยา', 'พืช', 'ดอกไม้'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 63',
    targetSchool: 'all',
    content: 'ข้อใดกล่าวได้ถูกต้องตามหลักพฤกษศาสตร์มากที่สุด?',
    choices: [
      { id: 'c1', label: '1', content: 'ดอกสมบูรณ์เพศทุกชนิดเป็นดอกครบส่วน', isCorrect: false },
      { id: 'c2', label: '2', content: 'ดอกครบส่วนทุกชนิดเป็นดอกสมบูรณ์เพศ', isCorrect: true },
      { id: 'c3', label: '3', content: 'ดอกสมบูรณ์เพศทุกชนิดเป็นดอกไม่ครบส่วน', isCorrect: false },
      { id: 'c4', label: '4', content: 'ดอกไม่ครบส่วนทุกชนิดเป็นดอกไม่สมบูรณ์เพศ', isCorrect: false },
    ],
    solution: {
      summary: 'ดอกครบส่วนต้องมีครบ 4 ชั้น (กลีบเลี้ยง กลีบดอก เกสรผู้ เกสรเมีย) จึงต้องเป็นดอกสมบูรณ์เพศเสมอ',
      trickTip: '💡 จำเป็นเซต: "เซตดอกครบส่วน อยู่ใน เซตดอกสมบูรณ์เพศ"',
      steps: [
        {
          stepNumber: 1,
          title: 'เปรียบเทียบคำนิยาม',
          content: 'มีครบ 4 ส่วน ➔ มีเกสรผู้และเมียแน่นอน ➔ เป็นดอกสมบูรณ์เพศ 100%',
        },
      ],
    },
  },

  // ข้อ 64: โซ่อาหาร
  {
    id: 'rit-sci-64-064',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ชีววิทยา', 'ระบบนิเวศ', 'โซ่อาหาร'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 64',
    targetSchool: 'all',
    content: 'ความสัมพันธ์ในข้อใดแสดงถึงห่วงโซ่อาหาร (Food Chain) ได้อย่างถูกต้อง?',
    choices: [
      { id: 'c1', label: '1', content: 'นก ➔ หนอน ➔ พืช', isCorrect: false },
      { id: 'c2', label: '2', content: 'ผักกาด ➔ กระต่าย ➔ คน', isCorrect: true },
      { id: 'c3', label: '3', content: 'คน ➔ หมู ➔ รำข้าว', isCorrect: false },
      { id: 'c4', label: '4', content: 'กบ ➔ แมลง ➔ งู', isCorrect: false },
    ],
    solution: {
      summary: 'ลูกศรในโซ่อาหารจะชี้จากผู้ถูกกิน (เหยื่อ) ไปยังผู้กิน (ผู้ล่า): ผักกาด ➔ กระต่าย ➔ คน',
      trickTip: '💡 หัวลูกศรชี้ไปหา "คนกิน / คนที่ได้รับพลังงาน"',
      steps: [
        {
          stepNumber: 1,
          title: 'ตรวจสอบทิศทางลูกศร',
          content: 'ผู้ผลิต (ผักกาด) ➔ ผู้บริโภคพืช (กระต่าย) ➔ ผู้บริโภคสัตว์ (คน)',
        },
      ],
    },
  },

  // ข้อ 65: ยุงเปลี่ยนรูปร่าง
  {
    id: 'rit-sci-64-065',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ชีววิทยา', 'การเจริญเติบโต', 'แมลง', 'ยุง'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 65',
    targetSchool: 'all',
    content: 'การเจริญเติบโตแบบเปลี่ยนรูปร่างสมบูรณ์ (Complete Metamorphosis) ของยุง ข้อใดเรียงลำดับได้ถูกต้อง?',
    choices: [
      { id: 'c1', label: '1', content: 'ไข่ ➔ ลูกน้ำ ➔ ตัวอ่อน ➔ ตัวเต็มวัย', isCorrect: false },
      { id: 'c2', label: '2', content: 'ไข่ ➔ ตัวอ่อน ➔ ลูกน้ำ ➔ ตัวเต็มวัย', isCorrect: false },
      { id: 'c3', label: '3', content: 'ไข่ ➔ ลูกน้ำ ➔ ตัวเต็มวัย ➔ ตัวโมง', isCorrect: false },
      { id: 'c4', label: '4', content: 'ไข่ ➔ ลูกน้ำ (ตัวหนอน) ➔ ตัวโม่ง (ดักแด้) ➔ ยุงตัวเต็มวัย', isCorrect: true },
    ],
    solution: {
      summary: 'วงจรชีวิตของยุงมี 4 ระยะ: ไข่ ➔ ลูกน้ำ (Larva) ➔ ตัวโม่ง (Pupa) ➔ ยุงตัวเต็มวัย (Adult)',
      trickTip: '💡 จำระยะยุง: "ไข่ ➔ ลูกน้ำ ➔ ตัวโม่ง ➔ ยุง"',
      steps: [
        {
          stepNumber: 1,
          title: 'ลำดับวัฏจักรชีวิตยุง',
          content: 'Egg $\\rightarrow$ Larva (ลูกน้ำ) $\\rightarrow$ Pupa (ตัวโม่ง) $\\rightarrow$ Adult (ยุง)',
        },
      ],
    },
  },

  // ข้อ 70: ความเข้มข้นสารละลาย
  {
    id: 'rit-sci-64-070',
    subjectId: 'science',
    topicId: 'sci-chemistry',
    topicName: 'สารและสมบัติของสาร',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'เคมี', 'สารละลาย', 'การคำนวณความเข้มข้น'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 70',
    targetSchool: 'all',
    content: 'สารละลายคอปเปอร์ซัลเฟตเข้มข้น $5\\%\\text{ โดยมวลต่อปริมาตร (\\% w/v)}$ ถ้านำสารละลายนี้มา $20\\text{ ลูกบาศก์เซนติเมตร}$ จะมีเนื้อสารคอปเปอร์ซัลเฟตละลายอยู่กี่กรัม?',
    choices: [
      { id: 'c1', label: '1', content: '1 กรัม', isCorrect: true },
      { id: 'c2', label: '2', content: '2 กรัม', isCorrect: false },
      { id: 'c3', label: '3', content: '3 กรัม', isCorrect: false },
      { id: 'c4', label: '4', content: '4 กรัม', isCorrect: false },
    ],
    solution: {
      summary: 'มวลตัวละลาย = (5 / 100) x 20 = 1 กรัม',
      trickTip: '💡 สูตร: มวล = (% x ปริมาตร) / 100',
      steps: [
        {
          stepNumber: 1,
          title: 'แทนค่าในสูตร',
          content: '$$\\text{มวล} = \\frac{5 \\times 20}{100} = 1\\text{ g}$$',
        },
      ],
    },
  },

  // ข้อ 71: เลนส์และกระจกรวมแสง
  {
    id: 'rit-sci-64-071',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ฟิสิกส์', 'แสง', 'เลนส์นูน', 'กระจกเว้า'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 71',
    targetSchool: 'all',
    content: 'ถ้านักเรียนต้องการเผากอหญ้าแห้งเล็กๆ โดยใช้ความร้อนจากการรวมแสงอาทิตย์ ควรเลือกใช้ทัศนูปกรณ์ในข้อใด?',
    choices: [
      { id: 'c1', label: '1', content: 'กระจกเว้า และ เลนส์นูน (อุปกรณ์รวมแสง)', isCorrect: true },
      { id: 'c2', label: '2', content: 'กระจกเว้า และ เลนส์เว้า', isCorrect: false },
      { id: 'c3', label: '3', content: 'กระจกนูน และ เลนส์เว้า', isCorrect: false },
      { id: 'c4', label: '4', content: 'กระจกนูน และ เลนส์นูน', isCorrect: false },
    ],
    solution: {
      summary: 'เลนส์นูนและกระจกเว้ามีคุณสมบัติรวมแสงตกกระทบที่จุดโฟกัส ทำให้เกิดพลังงานความร้อนสูงจนจุดไฟติดได้',
      trickTip: '💡 ท่องจำ: "เลนส์นูนคู่กระจกเว้า รวมแสง"',
      steps: [
        {
          stepNumber: 1,
          title: 'จำแนกสมบัติทัศนูปกรณ์',
          content: 'เลนส์นูน (หักเหมารวมแสง) + กระจกเว้า (สะท้อนมารวมแสง)',
        },
      ],
    },
  },

  // ข้อ 72: แรงพยุงเรือเหล็ก
  {
    id: 'rit-sci-64-072',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ฟิสิกส์', 'แรงพยุง', 'ความหนาแน่น'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 72',
    targetSchool: 'all',
    content: 'เหตุที่เรือบรรทุกสินค้าสร้างขึ้นด้วยเหล็กขนาดมหึมา แต่สามารถลอยน้ำได้เนื่องจากสาเหตุใด?',
    choices: [
      { id: 'c1', label: '1', content: 'เนื้อเหล็กแท้มีความหนาแน่นน้อยกว่าน้ำ', isCorrect: false },
      { id: 'c2', label: '2', content: 'เนื้อเหล็กแท้มีความหนาแน่นเท่ากับน้ำ', isCorrect: false },
      { id: 'c3', label: '3', content: 'การต่อเรือให้มีช่องว่างอากาศภายใน ทำให้ความหนาแน่นเฉลี่ยของลำเรือน้อยกว่าความหนาแน่นของน้ำ', isCorrect: true },
      { id: 'c4', label: '4', content: 'ลำเรือมีความหนาแน่นมากกว่าน้ำแต่น้ำมีแรงต้านทานสูง', isCorrect: false },
    ],
    solution: {
      summary: 'เรือเหล็กมีโพรงอากาศขนาดใหญ่ ทำให้ปริมาตรรวมเพิ่มขึ้นมาก ส่งผลให้ความหนาแน่นเฉลี่ยของเรือน้อยกว่าความหนาแน่นของน้ำ จึงลอยน้ำได้',
      trickTip: '💡 วัตถุจะลอยน้ำได้เมื่อ: "ความหนาแน่นเฉลี่ย < ความหนาแน่นของน้ำ"',
      steps: [
        {
          stepNumber: 1,
          title: 'คำนวณความหนาแน่นเฉลี่ย',
          content: '$D_{\\text{เฉลี่ย}} = \\frac{\\text{มวล}}{\\text{ปริมาตรรวม}} < 1.0\\text{ g/cm}^3$',
        },
      ],
    },
  },

  // ข้อ 79: ดาวเสาร์
  {
    id: 'rit-sci-64-079',
    subjectId: 'science',
    topicId: 'sci-earth-space',
    topicName: 'โลก ดาราศาสตร์ และอวกาศ',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'ดาราศาสตร์', 'ดาวเสาร์', 'ระบบสุริยะ'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 79',
    targetSchool: 'all',
    content: 'พิจารณาข้อมูลของดาวเคราะห์ในระบบสุริยะ:\nA: มีความหนาแน่นเฉลี่ยน้อยกว่าน้ำ ($0.687\\text{ g/cm}^3$ สามารถลอยน้ำได้)\nB: มีระบบวงแหวนที่กว้างและสว่างชัดเจนสวยงามที่สุด\nC: จัดอยู่ในกลุ่มดาวเคราะห์แก๊สยักษ์ (Gas Giant)\n\nข้อมูลดังกล่าวตรงกับดาวเคราะห์ดวงใด?',
    choices: [
      { id: 'c1', label: '1', content: 'ดาวพฤหัสบดี', isCorrect: false },
      { id: 'c2', label: '2', content: 'ดาวอังคาร', isCorrect: false },
      { id: 'c3', label: '3', content: 'ดาวเสาร์ (Saturn)', isCorrect: true },
      { id: 'c4', label: '4', content: 'ดาวยูเรนัส', isCorrect: false },
    ],
    solution: {
      summary: 'ดาวเสาร์มีความหนาแน่นเฉลี่ยต่ำที่สุดในระบบสุริยะ (น้อยกว่าน้ำ) และมีวงแหวนสว่างสวยงามโดดเด่น',
      trickTip: '💡 คีย์เวิร์ด "ลอยน้ำได้ / ความหนาแน่น < น้ำ" = ดาวเสาร์ แน่นอน!',
      steps: [
        {
          stepNumber: 1,
          title: 'ระบุสมบัติดาวเสาร์',
          content: 'ความหนาแน่น $0.687\\text{ g/cm}^3 < 1.0\\text{ g/cm}^3$ + วงแหวนสวยงาม = ดาวเสาร์',
        },
      ],
    },
  },

  // ข้อ 80: บรรยากาศโทรโพสเฟียร์
  {
    id: 'rit-sci-64-080',
    subjectId: 'science',
    topicId: 'sci-earth-space',
    topicName: 'โลก ดาราศาสตร์ และอวกาศ',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['ฤทธิยะวรรณาลัย', 'Pretest 2564', 'วิทยาศาสตร์กายภาพ', 'บรรยากาศ', 'โทรโพสเฟียร์'],
    source: 'Pre-Entrance วิทย์ รร.ฤทธิยะวรรณาลัย 2564 ข้อ 80',
    targetSchool: 'all',
    content: 'เครื่องบินปีกหมุน (เฮลิคอปเตอร์) และปรากฏการณ์สภาพอากาศส่วนใหญ่ เช่น เมฆ หมอก ลม ฝน พายุ ฟ้าแลบ เกิดขึ้นในชั้นบรรยากาศใด?',
    choices: [
      { id: 'c1', label: '1', content: 'สตราโตสเฟียร์ (Stratosphere)', isCorrect: false },
      { id: 'c2', label: '2', content: 'เอกโซสเฟียร์ (Exosphere)', isCorrect: false },
      { id: 'c3', label: '3', content: 'เทอร์โมสเฟียร์ (Thermosphere)', isCorrect: false },
      { id: 'c4', label: '4', content: 'โทรโพสเฟียร์ (Troposphere)', isCorrect: true },
    ],
    solution: {
      summary: 'โทรโพสเฟียร์เป็นชั้นบรรยากาศชั้นล่างสุดติดผิวโลก มีไอน้ำและความชื้นหนาแน่นที่สุด ทำให้เกิดลมฟ้าอากาศทั้งหมด',
      trickTip: '💡 ท่องจำ: "โทรโพ-ฝนฟ้า, สตราโต-โอโซน, มีโซ-ดาวตก, เทอร์โม-วิทยุ"',
      steps: [
        {
          stepNumber: 1,
          title: 'ระบุชั้นบรรยากาศ',
          content: 'เมฆ ฝน พายุ เฮลิคอปเตอร์ ➔ โทรโพสเฟียร์ (Troposphere)',
        },
      ],
    },
  },
];

export const RITTIYA_SCIENCE_QUESTIONS: Question[] = [
  ...RITTIYA_2564_QUESTIONS,
];
