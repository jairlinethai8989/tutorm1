import { QuestionTemplate } from '../types';

export const MATH_WORD_TEMPLATES: QuestionTemplate[] = [
  // 1. ร้อยละและเปอร์เซ็นต์
  {
    id: 'word-percentage',
    title: 'การคำนวณร้อยละและเปอร์เซ็นต์',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    difficulty: 'easy',
    tags: ['โจทย์ปัญหา', 'ร้อยละ', 'เปอร์เซ็นต์'],
    params: [
      { name: 'percent', min: 15, max: 75, step: 5 },
      { name: 'total', min: 200, max: 1200, step: 50 },
    ],
    questionText: (p) => `โรงเรียนแห่งหนึ่งมีนักเรียนทั้งหมด ${p.total} คน ในวันเปิดภาคเรียนมีนักเรียนมาเรียนร้อยละ ${p.percent} มีนักเรียนที่มาเรียนทั้งหมดกี่คน`,
    correctAnswer: (p) => (p.total * p.percent) / 100,
    answerUnit: 'คน',
    distractors: [
      { label: 'คิดเป็นนักเรียนที่ไม่มาเรียน', compute: (p) => (p.total * (100 - p.percent)) / 100 },
      { label: 'คูณผิดหลักสิบ', compute: (p) => (p.total * p.percent) / 10 },
      { label: 'บวกผิดสัดส่วน', compute: (p) => (p.total * (p.percent + 10)) / 100 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'เขียนร้อยละในรูปเศษส่วน',
        content: `ร้อยละ ${p.percent} = $\\frac{${p.percent}}{100}$`,
      },
      {
        stepNumber: 2,
        title: 'คำนวณจำนวนคน',
        content: `$\\text{จำนวนนักเรียนที่มาเรียน} = \\frac{${p.percent}}{100} \\times ${p.total} = ${ans}$ คน`,
      },
    ],
    trickTip: () => '💡 ร้อยละ $P$ ของ $X$ = $(P \\times X) \\div 100$',
  },

  // 2. กำไร-ขาดทุน
  {
    id: 'word-profit-loss',
    title: 'โจทย์ปัญหากำไรและขาดทุน',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    difficulty: 'medium',
    tags: ['โจทย์ปัญหา', 'กำไรขาดทุน'],
    params: [
      { name: 'cost', min: 400, max: 2500, step: 100, unit: 'บาท' },
      { name: 'profitPercent', min: 10, max: 40, step: 5 },
    ],
    questionText: (p) => `พ่อค้าซื้อสินค้ามาราคา ${p.cost} บาท ต้องการขายต่อให้ได้กำไร ${p.profitPercent}% พ่อค้าจะต้องตั้งราคาขายสินค้าชิ้นนี้กี่บาท`,
    correctAnswer: (p) => p.cost * (1 + p.profitPercent / 100),
    answerUnit: 'บาท',
    distractors: [
      { label: 'คิดแค่เงินกำไร (ลืมบวกทุน)', compute: (p) => (p.cost * p.profitPercent) / 100 },
      { label: 'คิดเป็นขาดทุน (ลบกำไรออก)', compute: (p) => p.cost * (1 - p.profitPercent / 100) },
      { label: 'บวกผิดสัดส่วน', compute: (p) => p.cost + p.profitPercent },
    ],
    solutionSteps: (p, ans) => {
      const profitBaht = (p.cost * p.profitPercent) / 100;
      return [
        {
          stepNumber: 1,
          title: 'หากำไรที่เป็นจำนวนเงิน',
          content: `$\\text{กำไร} = \\frac{${p.profitPercent}}{100} \\times ${p.cost} = ${profitBaht}$ บาท`,
        },
        {
          stepNumber: 2,
          title: 'หาราคาขาย (ทุน + กำไร)',
          content: `$\\text{ราคาขาย} = \\text{ต้นทุน} + \\text{กำไร} = ${p.cost} + ${profitBaht} = ${ans}$ บาท`,
        },
      ];
    },
    trickTip: () => '💡 ขายได้กำไร $P$% ➔ ราคาขาย = ต้นทุน $\\times (1 + \\frac{P}{100})$',
  },

  // 3. การลดราคาสินค้า
  {
    id: 'word-discount',
    title: 'การลดราคาและการหาราคาหลังหักส่วนลด',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    difficulty: 'easy',
    tags: ['โจทย์ปัญหา', 'ส่วนลด'],
    params: [
      { name: 'price', min: 500, max: 3000, step: 100, unit: 'บาท' },
      { name: 'discountPercent', min: 10, max: 50, step: 5 },
    ],
    questionText: (p) => `ร้านค้าติดป้ายราคารองเท้าไว้คู่ละ ${p.price} บาท ในช่วงเทศกาลจัดโปรโมชั่นลดราคา ${p.discountPercent}% ลูกค้าต้องจ่ายเงินซื้อรองเท้าคู่นี้กี่บาท`,
    correctAnswer: (p) => p.price * (1 - p.discountPercent / 100),
    answerUnit: 'บาท',
    distractors: [
      { label: 'คิดเฉพาะจำนวนเงินที่ลด', compute: (p) => (p.price * p.discountPercent) / 100 },
      { label: 'คิดเป็นบวกราคาเพิ่ม', compute: (p) => p.price * (1 + p.discountPercent / 100) },
      { label: 'ลบผิดสัดส่วน', compute: (p) => p.price - p.discountPercent },
    ],
    solutionSteps: (p, ans) => {
      const discountBaht = (p.price * p.discountPercent) / 100;
      return [
        {
          stepNumber: 1,
          title: 'หาสัดส่วนราคาที่ต้องจ่ายจริง',
          content: `ลดราคา ${p.discountPercent}% แปลว่าต้องจ่ายจริง $100\\% - ${p.discountPercent}\\% = ${100 - p.discountPercent}\\%$ ของราคาป้าย`,
        },
        {
          stepNumber: 2,
          title: 'คำนวณเงินที่ต้องจ่าย',
          content: `$\\text{ราคาที่ต้องจ่าย} = \\frac{${100 - p.discountPercent}}{100} \\times ${p.price} = ${ans}$ บาท (หรือลดไป ${discountBaht} บาท)`,
        },
      ];
    },
    trickTip: () => '💡 ลด $D$% ➔ จ่ายจริง = ป้าย $\\times \\frac{100 - D}{100}$ คิดขั้นตอนเดียวได้คำตอบทันที',
  },

  // 4. อัตราเร็ว ระยะทาง และเวลา
  {
    id: 'word-speed-time',
    title: 'โจทย์ปัญหาอัตราเร็ว ระยะทาง และเวลา ($s = vt$)',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    difficulty: 'medium',
    tags: ['โจทย์ปัญหา', 'อัตราเร็ว', 'ระยะทาง'],
    params: [
      { name: 'v', min: 60, max: 100, step: 10, unit: 'กม./ชม.' },
      { name: 'tHours', min: 2, max: 6, step: 1, unit: 'ชม.' },
    ],
    questionText: (p) => `รถยนต์คันหนึ่งแล่นด้วยอัตราเร็วสม่ำเสมอ ${p.v} กิโลเมตรต่อชั่วโมง ถ้าขับติดต่อกันเป็นเวลา ${p.tHours} ชั่วโมง รถยนต์คันนี้จะวิ่งได้ระยะทางทั้งหมดกี่กิโลเมตร`,
    correctAnswer: (p) => p.v * p.tHours,
    answerUnit: 'กม.',
    distractors: [
      { label: 'เอาความเร็วหารเวลา', compute: (p) => p.v / p.tHours },
      { label: 'บวกกันตรงๆ', compute: (p) => p.v + p.tHours },
      { label: 'คูณผิดสัดส่วน', compute: (p) => p.v * (p.tHours + 1) },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'สูตรความสัมพันธ์ $s = v \\times t$',
        content: `$\\text{ระยะทาง} = \\text{อัตราเร็ว} \\times \\text{เวลา}$`,
      },
      {
        stepNumber: 2,
        title: `แทนค่า $v = ${p.v}\\text{ กม./ชม.}, t = ${p.tHours}\\text{ ชม.}$`,
        content: `$\\text{ระยะทาง} = ${p.v} \\times ${p.tHours} = ${ans}$ กิโลเมตร`,
      },
    ],
    trickTip: () => '💡 จำสามเหลี่ยม $s-v-t$: ระยะทาง ($s$) อยู่บน, อัตราเร็ว ($v$) และเวลา ($t$) อยู่ล่าง',
  },

  // 5. การทำงานร่วมกัน
  {
    id: 'word-work-together',
    title: 'โจทย์ปัญหาการทำงานร่วมกัน',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    difficulty: 'hard',
    tags: ['โจทย์ปัญหา', 'การทำงานร่วมกัน'],
    params: [
      { name: 'a', min: 6, max: 12, step: 6 },
      { name: 'b', min: 12, max: 24, step: 12 },
    ],
    questionText: (p) => `แดงทำงานชิ้นหนึ่งเสร็จคนเดียวในเวลา ${p.a} วัน ดำทำงานชิ้นเดียวกันเสร็จคนเดียวในเวลา ${p.b} วัน ถ้าทั้งสองคนช่วยกันทำงานนี้พร้อมกัน จะทำงานเสร็จในเวลากี่วัน`,
    correctAnswer: (p) => (p.a * p.b) / (p.a + p.b),
    answerUnit: 'วัน',
    distractors: [
      { label: 'นำวันมาบวกกันแล้วหาร 2', compute: (p) => (p.a + p.b) / 2 },
      { label: 'นำวันมาบวกกันตรงๆ', compute: (p) => p.a + p.b },
      { label: 'ผลต่างวัน', compute: (p) => Math.abs(p.b - p.a) },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'หาอัตราการทำงานใน 1 วันของแต่ละคน',
        content: `ใน 1 วัน แดงทำงานได้ $\\frac{1}{${p.a}}$ ของงาน\nใน 1 วัน ดำทำงานได้ $\\frac{1}{${p.b}}$ ของงาน`,
      },
      {
        stepNumber: 2,
        title: 'รวมอัตราการทำงาน 1 วัน',
        content: `ทั้งสองช่วยกัน 1 วัน ได้งาน $\\frac{1}{${p.a}} + \\frac{1}{${p.b}} = \\frac{${p.a + p.b}}{${p.a * p.b}} = \\frac{1}{${ans}}$ ของงาน`,
      },
      {
        stepNumber: 3,
        title: 'สรุปเวลาทั้งหมด',
        content: `ดังนั้นจะทำงานเสร็จในเวลา **$${ans}$** วัน`,
      },
    ],
    trickTip: () => '💡 สูตรลัดทำงาน 2 คนพร้อมกัน: $\\text{เวลา} = \\frac{\\text{ผลคูณ}}{\\text{ผลบวก}} = \\frac{a \\times b}{a + b}$',
  },
];
