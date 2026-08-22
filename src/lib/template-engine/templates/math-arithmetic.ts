import { QuestionTemplate } from '../types';

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export const MATH_ARITHMETIC_TEMPLATES: QuestionTemplate[] = [
  // 1. ห.ร.ม. 2 จำนวน
  {
    id: 'arith-gcd-2',
    title: 'การหา ห.ร.ม. ของสองจำนวน',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    difficulty: 'medium',
    tags: ['จำนวนและการคำนวณ', 'ห.ร.ม.', 'ตัวประกอบ'],
    params: [
      { name: 'factor', min: 6, max: 36, step: 2 },
      { name: 'm1', min: 2, max: 9, step: 1 },
      { name: 'm2', min: 3, max: 11, step: 1 },
    ],
    constraints: (p) => p.m1 !== p.m2 && gcd(p.m1, p.m2) === 1,
    questionText: (p) => `จงหาค่า ห.ร.ม. ของ ${p.factor * p.m1} และ ${p.factor * p.m2}`,
    correctAnswer: (p) => p.factor,
    distractors: [
      { label: 'สับสนกับ ค.ร.น.', compute: (p) => (p.factor * p.m1 * p.m2) / 2 },
      { label: 'ตัวคูณร่วม', compute: (p, ans) => ans * 2 },
      { label: 'หารครึ่ง', compute: (p, ans) => Math.max(1, Math.floor(ans / 2)) },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'แยกตัวประกอบ',
        content: `$${p.factor * p.m1} = ${p.factor} \\times ${p.m1}$ และ $${p.factor * p.m2} = ${p.factor} \\times ${p.m2}$`,
      },
      {
        stepNumber: 2,
        title: 'หาตัวหารร่วมมากที่สุด',
        content: `เนื่องจาก ${p.m1} และ ${p.m2} เป็นจำนวนเฉพาะสัมพัทธ์ (ไม่มีตัวหารร่วมอื่นนอกจาก 1)\nดังนั้น ห.ร.ม. คือ **$${ans}$**`,
      },
    ],
    trickTip: (p) => `💡 หา ห.ร.ม. โดยการตั้งหารสั้น หรือแยกตัวประกอบร่วมที่ดึงออกมาได้มากที่สุด`,
    commonMistake: 'ระวังจำสลับระหว่าง ห.ร.ม. (ตัวหารร่วมมาก) และ ค.ร.น. (ตัวคูณร่วมน้อย)',
  },

  // 2. ค.ร.น. 2 จำนวน
  {
    id: 'arith-lcm-2',
    title: 'การหา ค.ร.น. ของสองจำนวน',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    difficulty: 'medium',
    tags: ['จำนวนและการคำนวณ', 'ค.ร.น.'],
    params: [
      { name: 'g', min: 2, max: 6, step: 1 },
      { name: 'm1', min: 3, max: 7, step: 1 },
      { name: 'm2', min: 4, max: 9, step: 1 },
    ],
    constraints: (p) => p.m1 !== p.m2 && gcd(p.m1, p.m2) === 1,
    questionText: (p) => `จงหา ค.ร.น. ของ ${p.g * p.m1} และ ${p.g * p.m2}`,
    correctAnswer: (p) => p.g * p.m1 * p.m2,
    distractors: [
      { label: 'ห.ร.ม. แทน', compute: (p) => p.g },
      { label: 'ผลคูณโดยตรง', compute: (p) => (p.g * p.m1) * (p.g * p.m2) },
      { label: 'ลืมคูณตัวประกอบร่วม', compute: (p) => p.m1 * p.m2 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'สูตรความสัมพันธ์ ห.ร.ม. และ ค.ร.น.',
        content: `$\\text{ค.ร.น.} = \\frac{A \\times B}{\\text{ห.ร.ม.}} = \\frac{${p.g * p.m1} \\times ${p.g * p.m2}}{${p.g}}$`,
      },
      {
        stepNumber: 2,
        title: 'คำนวณผลลัพธ์',
        content: `$\\text{ค.ร.น.} = ${p.g} \\times ${p.m1} \\times ${p.m2} = **${ans}**$`,
      },
    ],
    trickTip: () => '💡 ความสัมพันธ์สำคัญ: $A \\times B = \\text{ห.ร.ม.} \\times \\text{ค.ร.น.}$',
  },

  // 3. การบวกเศษส่วน
  {
    id: 'arith-fraction-add',
    title: 'การคำนวณเศษส่วนซ้อนและการบวกเศษส่วน',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    difficulty: 'medium',
    tags: ['เศษส่วน', 'การคำนวณ'],
    params: [
      { name: 'a', min: 1, max: 5, step: 1 },
      { name: 'b', min: 2, max: 6, step: 1 },
      { name: 'c', min: 1, max: 5, step: 1 },
      { name: 'd', min: 3, max: 8, step: 1 },
    ],
    constraints: (p) => p.b !== p.d && p.a < p.b && p.c < p.d,
    questionText: (p) => `ค่าของ $\\frac{${p.a}}{${p.b}} + \\frac{${p.c}}{${p.d}}$ มีตัวเศษเท่ากับเท่าใด เมื่อทำเป็นเศษส่วนอย่างต่ำ $\\frac{\\text{เศษ}}{\\text{ส่วน}}$`,
    correctAnswer: (p) => {
      const num = p.a * p.d + p.c * p.b;
      const den = p.b * p.d;
      const g = gcd(num, den);
      return num / g;
    },
    distractors: [
      { label: 'บวกเศษบวกส่วนตรงๆ', compute: (p) => p.a + p.c },
      { label: 'ลืมทอนเป็นเศษส่วนอย่างต่ำ', compute: (p) => p.a * p.d + p.c * p.b },
      { label: 'ผลคูณส่วน', compute: (p) => p.b * p.d },
    ],
    solutionSteps: (p, ans) => {
      const numRaw = p.a * p.d + p.c * p.b;
      const denRaw = p.b * p.d;
      const g = gcd(numRaw, denRaw);
      const denFinal = denRaw / g;
      return [
        {
          stepNumber: 1,
          title: 'ทำตัวส่วนให้เท่ากัน (หา ค.ร.น. ของตัวส่วน)',
          content: `$\\frac{${p.a} \\times ${p.d}}{${p.b} \\times ${p.d}} + \\frac{${p.c} \\times ${p.b}}{${p.d} \\times ${p.b}} = \\frac{${p.a * p.d} + ${p.c * p.b}}{${denRaw}} = \\frac{${numRaw}}{${denRaw}}$`,
        },
        {
          stepNumber: 2,
          title: 'ทอนเป็นเศษส่วนอย่างต่ำ',
          content: `นำ ห.ร.ม. (${g}) มาหารทั้งเศษและส่วน จะได้ $\\frac{${ans}}{${denFinal}}$\nดังนั้นตัวเศษคือ **$${ans}$**`,
        },
      ];
    },
    trickTip: () => '💡 ห้ามนำเศษบวกเศษ ส่วนบวกส่วนเด็ดขาด ต้องทำส่วนให้เท่ากันก่อนเสมอ!',
    commonMistake: 'ข้อควรระวัง: อย่าลืมทอนให้เป็นเศษส่วนอย่างต่ำตามที่โจทย์กำหนด',
  },

  // 4. เศษส่วนของจำนวนทั้งหมด
  {
    id: 'arith-fraction-whole',
    title: 'โจทย์ปัญหาเศษส่วนของจำนวนนับ',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    difficulty: 'easy',
    tags: ['เศษส่วน', 'โจทย์ปัญหา'],
    params: [
      { name: 'num', min: 2, max: 7, step: 1 },
      { name: 'den', min: 3, max: 9, step: 1 },
      { name: 'k', min: 10, max: 50, step: 5 },
    ],
    constraints: (p) => p.num < p.den && gcd(p.num, p.den) === 1,
    questionText: (p) => `นักเรียนห้องหนึ่งมีทั้งหมด ${p.den * p.k} คน ถ้ามีนักเรียนชายคิดเป็น $\\frac{${p.num}}{${p.den}}$ ของนักเรียนทั้งหมด จะมีนักเรียนหญิงกี่คน`,
    correctAnswer: (p) => (p.den - p.num) * p.k,
    distractors: [
      { label: 'คำนวณนักเรียนชาย', compute: (p) => p.num * p.k },
      { label: 'คิดผิดสัดส่วน', compute: (p) => (p.num + 1) * p.k },
      { label: 'ลบผิด', compute: (p) => (p.den * p.k) - p.num },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'หาสัดส่วนของนักเรียนหญิง',
        content: `นักเรียนหญิงคิดเป็น $1 - \\frac{${p.num}}{${p.den}} = \\frac{${p.den - p.num}}{${p.den}}$ ของทั้งหมด`,
      },
      {
        stepNumber: 2,
        title: 'คำนวณจำนวนคน',
        content: `$\\text{จำนวนนักเรียนหญิง} = \\frac{${p.den - p.num}}{${p.den}} \\times ${p.den * p.k} = (${p.den - p.num}) \\times ${p.k} = **${ans}**$ คน`,
      },
    ],
    answerUnit: 'คน',
    trickTip: () => '💡 ถ้าโจทย์ถาม "นักเรียนหญิง" ให้นำส่วนลบเศษเพื่อหาสัดส่วนผู้หญิงทันทีก่อนคูณ',
  },

  // 5. ตัวประกอบเฉพาะและผลรวมตัวประกอบ
  {
    id: 'arith-prime-factors',
    title: 'การแยกตัวประกอบเฉพาะและจำนวนตัวประกอบทั้งหมด',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    difficulty: 'hard',
    tags: ['จำนวนเฉพาะ', 'ตัวประกอบ'],
    params: [
      { name: 'a', min: 2, max: 4, step: 1 }, // power of 2
      { name: 'b', min: 1, max: 3, step: 1 }, // power of 3
      { name: 'c', min: 1, max: 2, step: 1 }, // power of 5
    ],
    questionText: (p) => {
      const N = Math.pow(2, p.a) * Math.pow(3, p.b) * Math.pow(5, p.c);
      return `จำนวนนับ $N = ${N}$ มีจำนวนนับที่หาร $N$ ลงตัวทั้งหมดกี่จำนวน`;
    },
    correctAnswer: (p) => (p.a + 1) * (p.b + 1) * (p.c + 1),
    distractors: [
      { label: 'ลืมบวก 1 เลขชี้กำลัง', compute: (p) => p.a * p.b * p.c },
      { label: 'บวกแค่ตัวฐาน', compute: (p) => 2 + 3 + 5 },
      { label: 'ผลรวมเลขชี้กำลัง', compute: (p) => p.a + p.b + p.c + 1 },
    ],
    solutionSteps: (p, ans) => {
      const N = Math.pow(2, p.a) * Math.pow(3, p.b) * Math.pow(5, p.c);
      return [
        {
          stepNumber: 1,
          title: 'เขียนในรูปผลคูณของเลขยกกำลังฐานเฉพาะ',
          content: `$${N} = 2^{${p.a}} \\times 3^{${p.b}} \\times 5^{${p.c}}$`,
        },
        {
          stepNumber: 2,
          title: 'ใช้สูตรจำนวนตัวประกอบ',
          content: `สูตร: นำเลขชี้กำลังแต่ละตัวมาบวก 1 แล้วนำมาคูณกัน\n$\\text{จำนวนตัวประกอบ} = (${p.a} + 1)(${p.b} + 1)(${p.c} + 1) = ${p.a + 1} \\times ${p.b + 1} \\times ${p.c + 1} = **${ans}**$ จำนวน`,
        },
      ];
    },
    answerUnit: 'จำนวน',
    trickTip: () => '💡 สูตรลัดจำนวนตัวประกอบของ $p_1^{a} \\times p_2^{b} \\times p_3^{c}$ คือ $(a+1)(b+1)(c+1)$',
  },
];
