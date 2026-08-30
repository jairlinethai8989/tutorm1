import { QuestionTemplate } from '../types';

export const MATH_GEOMETRY_TEMPLATES: QuestionTemplate[] = [
  // 1. พื้นที่สามเหลี่ยม
  {
    id: 'geo-triangle-area',
    title: 'พื้นที่รูปสามเหลี่ยม',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'easy',
    tags: ['เรขาคณิต', 'พื้นที่', 'สามเหลี่ยม'],
    params: [
      { name: 'b', min: 6, max: 24, step: 2, unit: 'ซม.' },
      { name: 'h', min: 5, max: 18, step: 1, unit: 'ซม.' },
    ],
    questionText: (p) => `รูปสามเหลี่ยมรูปหนึ่งมีความยาวฐานเท่ากับ ${p.b} เซนติเมตร และมีความสูงเท่ากับ ${p.h} เซนติเมตร จงหาพื้นที่ของรูปสามเหลี่ยมนี้`,
    correctAnswer: (p) => (p.b * p.h) / 2,
    answerUnit: 'ตร.ซม.',
    distractors: [
      { label: 'ลืมหาร 2 (คิดเป็นสี่เหลี่ยม)', compute: (p) => p.b * p.h },
      { label: 'บวกกันแล้วคูณ 2', compute: (p) => (p.b + p.h) * 2 },
      { label: 'หาร 4', compute: (p) => (p.b * p.h) / 4 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'ใช้สูตรพื้นที่สามเหลี่ยม',
        content: `$\\text{พื้นที่} = \\frac{1}{2} \\times \\text{ฐาน} \\times \\text{สูง}$`,
      },
      {
        stepNumber: 2,
        title: `แทนค่า ฐาน = ${p.b} ซม., สูง = ${p.h} ซม.`,
        content: `$\\text{พื้นที่} = \\frac{1}{2} \\times ${p.b} \\times ${p.h} = ${p.b / 2} \\times ${p.h} = ${ans}$ ตร.ซม.`,
      },
    ],
    trickTip: () => '💡 พื้นที่สามเหลี่ยม = (ฐาน × สูง) ÷ 2 อย่าลืมหาร 2 เสมอ',
  },

  // 2. พื้นที่สี่เหลี่ยมคางหมู
  {
    id: 'geo-trapezoid-area',
    title: 'พื้นที่รูปสี่เหลี่ยมคางหมู',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'medium',
    tags: ['เรขาคณิต', 'พื้นที่', 'สี่เหลี่ยมคางหมู'],
    params: [
      { name: 'a', min: 6, max: 18, step: 2, unit: 'ซม.' },
      { name: 'b', min: 12, max: 28, step: 2, unit: 'ซม.' },
      { name: 'h', min: 4, max: 14, step: 2, unit: 'ซม.' },
    ],
    constraints: (p) => p.a < p.b,
    questionText: (p) => `รูปสี่เหลี่ยมคางหมูมีด้านคู่ขนานยาว ${p.a} เซนติเมตร และ ${p.b} เซนติเมตร โดยมีระยะห่างระหว่างด้านคู่ขนาน (ความสูง) เท่ากับ ${p.h} เซนติเมตร จงหาพื้นที่`,
    correctAnswer: (p) => ((p.a + p.b) * p.h) / 2,
    answerUnit: 'ตร.ซม.',
    distractors: [
      { label: 'ลืมหาร 2', compute: (p) => (p.a + p.b) * p.h },
      { label: 'ใช้ด้านเดียวยาวสุดคูณสูง', compute: (p) => p.b * p.h },
      { label: 'ลบคูณสูงหาร 2', compute: (p) => ((p.b - p.a) * p.h) / 2 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'สูตรพื้นที่สี่เหลี่ยมคางหมู',
        content: `$\\text{พื้นที่} = \\frac{1}{2} \\times \\text{ผลบวกด้านคู่ขนาน} \\times \\text{สูง}$`,
      },
      {
        stepNumber: 2,
        title: `แทนค่า ด้านคู่ขนาน = ${p.a}, ${p.b} ซม., สูง = ${p.h} ซม.`,
        content: `$\\text{พื้นที่} = \\frac{1}{2} \\times (${p.a} + ${p.b}) \\times ${p.h} = \\frac{1}{2} \\times ${p.a + p.b} \\times ${p.h} = ${ans}$ ตร.ซม.`,
      },
    ],
    trickTip: () => '💡 จำง่าย: (ผลบวกคู่ขนาน × สูง) ÷ 2',
  },

  // 3. พื้นที่วงกลม (ใช้ pi = 22/7)
  {
    id: 'geo-circle-area',
    title: 'พื้นที่รูปวงกลม',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'medium',
    tags: ['เรขาคณิต', 'วงกลม', 'พื้นที่'],
    params: [
      { name: 'm', min: 1, max: 5, step: 1 }, // radius = 7 * m
    ],
    questionText: (p) => `รูปวงกลมมีรัศมียาว ${7 * p.m} เซนติเมตร จงหาพื้นที่ของรูปวงกลมนี้ (กำหนดให้ $\\pi = \\frac{22}{7}$)`,
    correctAnswer: (p) => (22 / 7) * (7 * p.m) * (7 * p.m),
    answerUnit: 'ตร.ซม.',
    distractors: [
      { label: 'คิดเส้นรอบวงแทน (2*pi*r)', compute: (p) => 2 * (22 / 7) * (7 * p.m) },
      { label: 'ลืมยกกำลังสองรัศมี (pi*r)', compute: (p) => (22 / 7) * (7 * p.m) },
      { label: 'คูณผิดสัดส่วน', compute: (p) => (22 / 7) * (7 * p.m) * (7 * p.m) * 2 },
    ],
    solutionSteps: (p, ans) => {
      const r = 7 * p.m;
      return [
        {
          stepNumber: 1,
          title: 'สูตรพื้นที่วงกลม',
          content: `$\\text{พื้นที่วงกลม} = \\pi r^2$`,
        },
        {
          stepNumber: 2,
          title: `แทนค่ารัศมี $r = ${r}$ ซม.`,
          content: `$\\text{พื้นที่} = \\frac{22}{7} \\times ${r} \\times ${r} = 22 \\times ${p.m} \\times ${r} = ${ans}$ ตร.ซม.`,
        },
      ];
    },
    trickTip: () => '💡 ระวังจำสลับ: พื้นที่วงกลม = $\\pi r^2$ ส่วน เส้นรอบวง = $2\\pi r$',
  },

  // 4. พื้นที่วงแหวน
  {
    id: 'geo-ring-area',
    title: 'พื้นที่วงแหวน (พื้นที่ระหว่างวงกลมสองวง)',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'hard',
    tags: ['เรขาคณิต', 'วงกลม', 'วงแหวน'],
    params: [
      { name: 'rSmall', min: 7, max: 14, step: 7 },
      { name: 'rBig', min: 21, max: 28, step: 7 },
    ],
    questionText: (p) => `วงกลมสองวงมีจุดศูนย์กลางร่วมกัน วงใหญ่มีรัศมี ${p.rBig} เซนติเมตร และวงเล็กมีรัศมี ${p.rSmall} เซนติเมตร จงหาพื้นที่ของส่วนที่อยู่ระหว่างวงกลมทั้งสอง (พื้นที่วงแหวน) (กำหนด $\\pi = \\frac{22}{7}$)`,
    correctAnswer: (p) => (22 / 7) * (p.rBig * p.rBig - p.rSmall * p.rSmall),
    answerUnit: 'ตร.ซม.',
    distractors: [
      { label: 'เอาผลต่างรัศมียกกำลังสอง', compute: (p) => (22 / 7) * Math.pow(p.rBig - p.rSmall, 2) },
      { label: 'พื้นที่วงใหญ่เท่านั้น', compute: (p) => (22 / 7) * p.rBig * p.rBig },
      { label: 'พื้นที่วงเล็กรวมวงใหญ่', compute: (p) => (22 / 7) * (p.rBig * p.rBig + p.rSmall * p.rSmall) },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'สูตรพื้นที่วงแหวน',
        content: `$\\text{พื้นที่วงแหวน} = \\pi R^2 - \\pi r^2 = \\pi (R^2 - r^2) = \\pi (R - r)(R + r)$`,
      },
      {
        stepNumber: 2,
        title: `แทนค่าผลต่างกำลังสอง $R = ${p.rBig}, r = ${p.rSmall}$`,
        content: `$R - r = ${p.rBig} - ${p.rSmall} = ${p.rBig - p.rSmall}$\n$R + r = ${p.rBig} + ${p.rSmall} = ${p.rBig + p.rSmall}$\n$\\text{พื้นที่} = \\frac{22}{7} \\times (${p.rBig - p.rSmall}) \\times (${p.rBig + p.rSmall}) = ${ans}$ ตร.ซม.`,
      },
    ],
    trickTip: () => '💡 ใช้สูตรแยกตัวประกอบ: $R^2 - r^2 = (R - r)(R + r)$ จะช่วยให้ตัดทอนตัวเลขได้เร็วมาก!',
  },

  // 5. ทฤษฎีบทพีทาโกรัส
  {
    id: 'geo-pythagoras',
    title: 'ทฤษฎีบทพีทาโกรัสหาความยาวด้านตรงข้ามมุมฉาก',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'medium',
    tags: ['เรขาคณิต', 'พีทาโกรัส', 'สามเหลี่ยมมุมฉาก'],
    params: [
      { name: 'm', min: 2, max: 8, step: 1 }, // scaling base triple (3, 4, 5)
    ],
    questionText: (p) => `รูปสามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว ${3 * p.m} เซนติเมตร และ ${4 * p.m} เซนติเมตร จงหาความยาวของด้านตรงข้ามมุมฉาก`,
    correctAnswer: (p) => 5 * p.m,
    answerUnit: 'ซม.',
    distractors: [
      { label: 'นำสองด้านมาบวกกันตรงๆ', compute: (p) => 3 * p.m + 4 * p.m },
      { label: 'คิดผิดสัดส่วน', compute: (p) => 6 * p.m },
      { label: 'คูณกันแล้วหาร 2', compute: (p) => (3 * p.m * 4 * p.m) / 2 },
    ],
    solutionSteps: (p, ans) => {
      const a = 3 * p.m;
      const b = 4 * p.m;
      return [
        {
          stepNumber: 1,
          title: 'ใช้ทฤษฎีบทพีทาโกรัส $c^2 = a^2 + b^2$',
          content: `$c^2 = ${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${a * a + b * b}$`,
        },
        {
          stepNumber: 2,
          title: 'ถอดรากที่สองหาค่า $c$',
          content: `$c = \\sqrt{${a * a + b * b}} = ${ans}$ ซม.`,
        },
      ];
    },
    trickTip: () => '💡 จำอัตราส่วนชุดสามเหลี่ยมมุมฉากยอดนิยม: $3 : 4 : 5$, $5 : 12 : 13$, $7 : 24 : 25$',
  },

  // 6. ปริมาตรทรงกระบอก
  {
    id: 'geo-cylinder-vol',
    title: 'ปริมาตรทรงกระบอก',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'medium',
    tags: ['เรขาคณิต', 'ปริมาตร', 'ทรงกระบอก'],
    params: [
      { name: 'm', min: 1, max: 3, step: 1 }, // radius = 7 * m
      { name: 'h', min: 5, max: 20, step: 5, unit: 'ซม.' },
    ],
    questionText: (p) => `ทรงกระบอกตันมีรัศมีของฐานยาว ${7 * p.m} เซนติเมตร และมีความสูง ${p.h} เซนติเมตร จงหาปริมาตรของทรงกระบอกนี้ (กำหนด $\\pi = \\frac{22}{7}$)`,
    correctAnswer: (p) => (22 / 7) * (7 * p.m) * (7 * p.m) * p.h,
    answerUnit: 'ลบ.ซม.',
    distractors: [
      { label: 'คิดเป็นพื้นที่ผิวข้าง (2*pi*r*h)', compute: (p) => 2 * (22 / 7) * (7 * p.m) * p.h },
      { label: 'ลืมคูณความสูง', compute: (p) => (22 / 7) * (7 * p.m) * (7 * p.m) },
      { label: 'หาร 3 (คิดเป็นกรวย)', compute: (p) => ((22 / 7) * (7 * p.m) * (7 * p.m) * p.h) / 3 },
    ],
    solutionSteps: (p, ans) => {
      const r = 7 * p.m;
      return [
        {
          stepNumber: 1,
          title: 'สูตรปริมาตรทรงกระบอก',
          content: `$\\text{ปริมาตร} = \\text{พื้นที่ฐาน} \\times \\text{สูง} = \\pi r^2 h$`,
        },
        {
          stepNumber: 2,
          title: `แทนค่า $r = ${r}$ ซม., $h = ${p.h}$ ซม.`,
          content: `$\\text{ปริมาตร} = \\frac{22}{7} \\times ${r} \\times ${r} \\times ${p.h} = 22 \\times ${p.m} \\times ${r} \\times ${p.h} = ${ans}$ ลบ.ซม.`,
        },
      ];
    },
    trickTip: () => '💡 ปริมาตรทรงกระบอก = $\\pi r^2 h$ (พื้นที่ฐานวงกลม $\\times$ ความสูง)',
  },

  // 7. พื้นที่ผิวลูกบาศก์
  {
    id: 'geo-cube-surface',
    title: 'พื้นที่ผิวทั้งหมดของลูกบาศก์',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'easy',
    tags: ['เรขาคณิต', 'พื้นที่ผิว', 'ลูกบาศก์'],
    params: [
      { name: 's', min: 4, max: 15, step: 1, unit: 'ซม.' },
    ],
    questionText: (p) => `กล่องรูปลูกบาศก์มีความยาวด้านละ ${p.s} เซนติเมตร พื้นที่ผิวทั้งหมดของกล่องใบนี้เท่ากับกี่ตารางเซนติเมตร`,
    correctAnswer: (p) => 6 * p.s * p.s,
    answerUnit: 'ตร.ซม.',
    distractors: [
      { label: 'คิดเป็นปริมาตร (s^3)', compute: (p) => p.s * p.s * p.s },
      { label: 'คิดแค่ 4 ด้าน (พื้นที่ผิวข้าง)', compute: (p) => 4 * p.s * p.s },
      { label: 'คิดแค่ 1 หน้า (s^2)', compute: (p) => p.s * p.s },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'สูตรพื้นที่ผิวลูกบาศก์',
        content: `ลูกบาศก์ประกอบด้วยรูปสี่เหลี่ยมจัตุรัสที่มีขนาดเท่ากันทั้งหมด 6 หน้า\n$\\text{พื้นที่ผิวทั้งหมด} = 6 \\times s^2$`,
      },
      {
        stepNumber: 2,
        title: `แทนค่าความยาวด้าน $s = ${p.s}$ ซม.`,
        content: `$\\text{พื้นที่ผิว} = 6 \\times ${p.s}^2 = 6 \\times ${p.s * p.s} = ${ans}$ ตร.ซม.`,
      },
    ],
    trickTip: () => '💡 ระวัง: พื้นที่ผิวรวม = $6s^2$ ส่วนปริมาตร = $s^3$',
  },

  // 8. ปริมาตรกรวย
  {
    id: 'geo-cone-vol',
    title: 'ปริมาตรของรูปทรงกรวย',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    difficulty: 'hard',
    tags: ['เรขาคณิต', 'ปริมาตร', 'กรวย'],
    params: [
      { name: 'm', min: 1, max: 3, step: 1 }, // radius = 7 * m
      { name: 'h', min: 6, max: 18, step: 3, unit: 'ซม.' },
    ],
    questionText: (p) => `กรวยอันหนึ่งมีรัศมีของฐานยาว ${7 * p.m} เซนติเมตร และมีความสูงตรง ${p.h} เซนติเมตร จงหาปริมาตรของกรวยนี้ (กำหนด $\\pi = \\frac{22}{7}$)`,
    correctAnswer: (p) => (1 / 3) * (22 / 7) * (7 * p.m) * (7 * p.m) * p.h,
    answerUnit: 'ลบ.ซม.',
    distractors: [
      { label: 'ลืมหาร 3 (คิดเป็นทรงกระบอก)', compute: (p) => (22 / 7) * (7 * p.m) * (7 * p.m) * p.h },
      { label: 'หาร 2 แทนหาร 3', compute: (p) => (1 / 2) * (22 / 7) * (7 * p.m) * (7 * p.m) * p.h },
      { label: 'คูณผิดสัดส่วน', compute: (p) => (2 / 3) * (22 / 7) * (7 * p.m) * (7 * p.m) * p.h },
    ],
    solutionSteps: (p, ans) => {
      const r = 7 * p.m;
      return [
        {
          stepNumber: 1,
          title: 'สูตรปริมาตรกรวย',
          content: `$\\text{ปริมาตรกรวย} = \\frac{1}{3} \\pi r^2 h$ (เป็น $\\frac{1}{3}$ ของทรงกระบอกที่มีฐานและสูงเท่ากัน)`,
        },
        {
          stepNumber: 2,
          title: `แทนค่ารัศมี $r = ${r}$ ซม., สูง $h = ${p.h}$ ซม.`,
          content: `$\\text{ปริมาตร} = \\frac{1}{3} \\times \\frac{22}{7} \\times ${r} \\times ${r} \\times ${p.h} = \\frac{1}{3} \\times ${(22 / 7) * r * r * p.h} = ${ans}$ ลบ.ซม.`,
        },
      ];
    },
    trickTip: () => '💡 จำความสัมพันธ์: ปริมาตรกรวย = $\\frac{1}{3} \\times$ ปริมาตรทรงกระบอก',
  },
];
