import { QuestionTemplate } from '../types';

export const MATH_ALGEBRA_TEMPLATES: QuestionTemplate[] = [
  // 1. สมการเชิงเส้นตัวแปรเดียว
  {
    id: 'alg-linear-1',
    title: 'การแก้สมการเชิงเส้นตัวแปรเดียว',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    difficulty: 'easy',
    tags: ['พีชคณิต', 'สมการ'],
    params: [
      { name: 'a', min: 3, max: 9, step: 1 },
      { name: 'b', min: 5, max: 35, step: 2 },
      { name: 'x', min: 4, max: 20, step: 1 },
    ],
    questionText: (p) => `กำหนดให้ $${p.a}x - ${p.b} = ${p.a * p.x - p.b}$ ค่าของ $x + 5$ เท่ากับเท่าใด`,
    correctAnswer: (p) => p.x + 5,
    distractors: [
      { label: 'ตอบแค่ค่า x', compute: (p) => p.x },
      { label: 'ลืมบวก 5 แต่บวกเลขอื่น', compute: (p) => p.x + 3 },
      { label: 'ย้ายข้างผิดเครื่องหมาย', compute: (p) => Math.max(1, p.x - 5) },
    ],
    solutionSteps: (p, ans) => {
      const c = p.a * p.x - p.b;
      return [
        {
          stepNumber: 1,
          title: 'แก้สมการหาค่า x',
          content: `$${p.a}x - ${p.b} = ${c}$\n$${p.a}x = ${c} + ${p.b} = ${c + p.b}$\n$x = \\frac{${c + p.b}}{${p.a}} = ${p.x}$`,
        },
        {
          stepNumber: 2,
          title: 'หาค่าสิ่งที่โจทย์ถาม (x + 5)',
          content: `$x + 5 = ${p.x} + 5 = **${ans}**$`,
        },
      ];
    },
    trickTip: () => '💡 อ่านโจทย์ให้รอบคอบว่าโจทย์ถามค่า $x$ หรือถามนิพจน์อื่น เช่น $x+5$',
    commonMistake: 'อย่าเพิ่งรีบตอบค่า x ทันทีที่แก้สมการเสร็จ ต้องดูสิ่งที่โจทย์ถามจริง',
  },

  // 2. ระบบสมการ 2 ตัวแปร
  {
    id: 'alg-system-2',
    title: 'ระบบสมการเชิงเส้นสองตัวแปร (ผลบวกและผลต่าง)',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    difficulty: 'medium',
    tags: ['พีชคณิต', 'ระบบสมการ'],
    params: [
      { name: 'x', min: 15, max: 50, step: 1 },
      { name: 'y', min: 5, max: 25, step: 1 },
    ],
    constraints: (p) => p.x > p.y,
    questionText: (p) => `เลขสองจำนวนมีผลบวกเท่ากับ ${p.x + p.y} และมีผลต่างเท่ากับ ${p.x - p.y} จงหาผลคูณของเลขทั้งสองจำนวนนี้`,
    correctAnswer: (p) => p.x * p.y,
    distractors: [
      { label: 'ตอบค่า x', compute: (p) => p.x },
      { label: 'ตอบค่า y', compute: (p) => p.y },
      { label: 'ตอบผลบวก', compute: (p) => p.x + p.y },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'ตั้งสมการ',
        content: `ให้เลขสองจำนวนคือ $x$ และ $y$ ($x > y$)\n$x + y = ${p.x + p.y}$ ---(1)\n$x - y = ${p.x - p.y}$ ---(2)`,
      },
      {
        stepNumber: 2,
        title: 'แก้สมการหาค่าแต่ละจำนวน',
        content: `นำ $(1) + (2)$: $2x = ${(p.x + p.y) + (p.x - p.y)} \\implies x = ${p.x}$\nแทนใน (1): $y = ${p.x + p.y} - ${p.x} = ${p.y}$`,
      },
      {
        stepNumber: 3,
        title: 'หาผลคูณของทั้งสองจำนวน',
        content: `$x \\times y = ${p.x} \\times ${p.y} = **${ans}**$`,
      },
    ],
    trickTip: () => '💡 สูตรลัด: ตัวมาก = (ผลบวก + ผลต่าง) ÷ 2, ตัวน้อย = (ผลบวก - ผลต่าง) ÷ 2',
  },

  // 3. ลำดับและอนุกรมเลขคณิต
  {
    id: 'alg-arith-seq',
    title: 'การหาพจน์ที่ n ของลำดับเลขคณิต',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    difficulty: 'medium',
    tags: ['ลำดับและแบบรูป', 'พีชคณิต'],
    params: [
      { name: 'a1', min: 3, max: 15, step: 2 },
      { name: 'd', min: 3, max: 8, step: 1 },
      { name: 'n', min: 20, max: 50, step: 5 },
    ],
    questionText: (p) => {
      const s1 = p.a1;
      const s2 = p.a1 + p.d;
      const s3 = p.a1 + 2 * p.d;
      const s4 = p.a1 + 3 * p.d;
      return `จากแบบรูปของจำนวน: $${s1}, ${s2}, ${s3}, ${s4}, \\dots$ พจน์ที่ ${p.n} ของแบบรูปนี้มีค่าเท่ากับเท่าใด`;
    },
    correctAnswer: (p) => p.a1 + (p.n - 1) * p.d,
    distractors: [
      { label: 'ลืมลบ 1 ใน (n-1)', compute: (p) => p.a1 + p.n * p.d },
      { label: 'คูณ d ตรงๆ', compute: (p) => p.n * p.d },
      { label: 'ลืมบวกพจน์แรก a1', compute: (p) => (p.n - 1) * p.d },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'วิเคราะห์ผลต่างร่วม (d) และพจน์แรก (a1)',
        content: `พจน์แรก ($a_1$) = $${p.a1}$\nผลต่างร่วม ($d$) = $${p.a1 + p.d} - ${p.a1} = ${p.d}$`,
      },
      {
        stepNumber: 2,
        title: 'ใช้สูตรพจน์ทั่วไป $a_n = a_1 + (n - 1)d$',
        content: `$a_{${p.n}} = ${p.a1} + (${p.n} - 1)(${p.d}) = ${p.a1} + (${p.n - 1})(${p.d}) = ${p.a1} + ${(p.n - 1) * p.d} = **${ans}**$`,
      },
    ],
    trickTip: () => '💡 สูตรพจน์ทั่วไปของลำดับเลขคณิต: $a_n = a_1 + (n-1)d$',
  },

  // 4. โจทย์ปัญหาอายุ
  {
    id: 'alg-age-problem',
    title: 'โจทย์ปัญหาสมการอายุในอดีตและอนาคต',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    difficulty: 'medium',
    tags: ['โจทย์ปัญหา', 'สมการอายุ'],
    params: [
      { name: 'childAge', min: 8, max: 16, step: 1 },
      { name: 'diff', min: 24, max: 32, step: 2 },
      { name: 'futureYears', min: 4, max: 10, step: 1 },
    ],
    questionText: (p) => {
      const parentAge = p.childAge + p.diff;
      return `ปัจจุบันพ่อมีอายุมากกว่าลูก ${p.diff} ปี ถ้าอีก ${p.futureYears} ปีข้างหน้า ผลรวมอายุของพ่อและลูกจะเท่ากับ ${(parentAge + p.futureYears) + (p.childAge + p.futureYears)} ปี จงหาว่าปัจจุบันลูกมีอายุกี่ปี`;
    },
    correctAnswer: (p) => p.childAge,
    distractors: [
      { label: 'ตอบอายุพ่อ', compute: (p) => p.childAge + p.diff },
      { label: 'ตอบอายุลูกในอนาคต', compute: (p) => p.childAge + p.futureYears },
      { label: 'ลืมบวกปีอนาคตทั้ง 2 คน', compute: (p) => p.childAge + Math.floor(p.futureYears / 2) },
    ],
    solutionSteps: (p, ans) => {
      const parentAge = p.childAge + p.diff;
      const totalFuture = (parentAge + p.futureYears) + (p.childAge + p.futureYears);
      return [
        {
          stepNumber: 1,
          title: 'กำหนดตัวแปร',
          content: `ให้ปัจจุบันลูกอายุ $x$ ปี ดังนั้นพ่ออายุ $x + ${p.diff}$ ปี`,
        },
        {
          stepNumber: 2,
          title: 'ตั้งสมการในอีก ' + p.futureYears + ' ปีข้างหน้า',
          content: `ลูกอายุ $x + ${p.futureYears}$ ปี และพ่ออายุ $(x + ${p.diff}) + ${p.futureYears} = x + ${p.diff + p.futureYears}$ ปี\nผลรวมอายุ: $(x + ${p.futureYears}) + (x + ${p.diff + p.futureYears}) = ${totalFuture}$\n$2x + ${2 * p.futureYears + p.diff} = ${totalFuture}$\n$2x = ${totalFuture - (2 * p.futureYears + p.diff)}$\n$x = **${ans}**$ ปี`,
        },
      ];
    },
    answerUnit: 'ปี',
    trickTip: () => '💡 เวลาผ่านไป $N$ ปี ต้องบวกอายุเพิ่มคนละ $N$ ปี (สองคนต้องบวก $2N$ ในผลรวม)',
  },

  // 5. จำนวนเต็มเรียงต่อกัน
  {
    id: 'alg-consecutive-int',
    title: 'ผลบวกของจำนวนนับเรียงติดต่อกัน',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    difficulty: 'easy',
    tags: ['พีชคณิต', 'จำนวนนับ'],
    params: [
      { name: 'start', min: 10, max: 40, step: 1 },
      { name: 'count', min: 3, max: 5, step: 2 }, // 3 or 5 numbers (odd count for clean center)
    ],
    questionText: (p) => {
      let sum = 0;
      for (let i = 0; i < p.count; i++) sum += (p.start + i);
      return `จำนวนนับ ${p.count} จำนวนเรียงติดต่อกัน มีผลบวกเท่ากับ ${sum} จงหาจำนวนที่มากที่สุดในกลุ่มนี้`;
    },
    correctAnswer: (p) => p.start + p.count - 1,
    distractors: [
      { label: 'ตอบตัวน้อยสุด', compute: (p) => p.start },
      { label: 'ตอบตัวตรงกลาง (ค่าเฉลี่ย)', compute: (p) => p.start + Math.floor(p.count / 2) },
      { label: 'คำนวณเกินไป 1', compute: (p) => p.start + p.count },
    ],
    solutionSteps: (p, ans) => {
      let sum = 0;
      for (let i = 0; i < p.count; i++) sum += (p.start + i);
      const center = p.start + Math.floor(p.count / 2);
      return [
        {
          stepNumber: 1,
          title: 'หาค่าเฉลี่ย (จำนวนตรงกลาง)',
          content: `เนื่องจากเป็นจำนวนเรียงกัน ${p.count} จำนวน (จำนวนคี่)\nจำนวนตรงกลาง = $\\frac{\\text{ผลรวม}}{${p.count}} = \\frac{${sum}}{${p.count}} = ${center}$`,
        },
        {
          stepNumber: 2,
          title: 'หาจำนวนที่มากที่สุด',
          content: `เขียนเรียง: $${Array.from({ length: p.count }, (_, i) => p.start + i).join(', ')}$\nดังนั้นจำนวนที่มากที่สุดคือ **$${ans}$**`,
        },
      ];
    },
    trickTip: () => '💡 จำนวนคี่ตัวเรียงกัน: เอาผลรวม ÷ จำนวนตัว จะได้ตัวตรงกลางทันที!',
  },
];
