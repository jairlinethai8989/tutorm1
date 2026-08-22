import { QuestionTemplate } from '../types';

export const SCI_PHYSICS_TEMPLATES: QuestionTemplate[] = [
  // 1. กฎของโอห์ม (V = IR)
  {
    id: 'sci-ohms-law',
    title: 'การคำนวณตามกฎของโอห์ม ($V = IR$)',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    difficulty: 'easy',
    tags: ['วิทยาศาสตร์', 'ฟิสิกส์', 'ไฟฟ้า', 'กฎของโอห์ม'],
    params: [
      { name: 'I', min: 2, max: 8, step: 1, unit: 'A' },
      { name: 'R', min: 5, max: 25, step: 5, unit: 'Ω' },
    ],
    questionText: (p) => `หลอดไฟหลอดหนึ่งมีความต้านทาน ${p.R} โอห์ม ($\\Omega$) ถ้ามีกระแสไฟฟ้าไหลผ่านหลอดไฟนี้ ${p.I} แอมแปร์ (A) ความต่างศักย์ไฟฟ้าระหว่างปลายทั้งสองข้างของหลอดไฟนี้มีค่ากี่โวลต์ (V)`,
    correctAnswer: (p) => p.I * p.R,
    answerUnit: 'โวลต์',
    distractors: [
      { label: 'เอา R หาร I', compute: (p) => p.R / p.I },
      { label: 'เอา I หาร R', compute: (p) => p.I / p.R },
      { label: 'บวกกันตรงๆ', compute: (p) => p.I + p.R },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'ใช้สูตรกฎของโอห์ม $V = I \\times R$',
        content: `ความต่างศักย์ ($V$) = กระแสไฟฟ้า ($I$) $\\times$ ความต้านทาน ($R$)`,
      },
      {
        stepNumber: 2,
        title: 'แทนค่า $I = ${p.I}$ A, $R = ${p.R}$ $\\Omega$',
        content: `$V = ${p.I} \\times ${p.R} = **${ans}**$ โวลต์`,
      },
    ],
    trickTip: () => '💡 จำสามเหลี่ยม VIR: $V$ อยู่บนยอด, $I$ และ $R$ อยู่ข้างล่าง ($V=IR$, $I=V/R$, $R=V/I$)',
  },

  // 2. วงจรไฟฟ้าอนุกรม
  {
    id: 'sci-series-circuit',
    title: 'การคำนวณวงจรไฟฟ้าแบบอนุกรม',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    difficulty: 'medium',
    tags: ['วิทยาศาสตร์', 'ฟิสิกส์', 'ไฟฟ้า', 'วงจรอนุกรม'],
    params: [
      { name: 'r1', min: 4, max: 12, step: 2, unit: 'Ω' },
      { name: 'r2', min: 6, max: 18, step: 2, unit: 'Ω' },
      { name: 'V', min: 36, max: 120, step: 12, unit: 'V' },
    ],
    constraints: (p) => p.V % (p.r1 + p.r2) === 0,
    questionText: (p) => `นำตัวต้านทาน 2 ตัว ขนาด ${p.r1} โอห์ม และ ${p.r2} โอห์ม มาต่อแบบอนุกรมกัน แล้วต่อเข้ากับแหล่งกำเนิดไฟฟ้าขนาด ${p.V} โวลต์ กระแสไฟฟ้าในวงจรมีค่ากี่แอมแปร์`,
    correctAnswer: (p) => p.V / (p.r1 + p.r2),
    answerUnit: 'แอมแปร์',
    distractors: [
      { label: 'คิดตัวต้านทานแค่ตัวเดียว', compute: (p) => p.V / p.r1 },
      { label: 'คิดเป็นวงจรขนาน', compute: (p) => p.V / ((p.r1 * p.r2) / (p.r1 + p.r2)) },
      { label: 'คูณความต้านทาน', compute: (p) => p.V / (p.r1 * p.r2) },
    ],
    solutionSteps: (p, ans) => {
      const rTotal = p.r1 + p.r2;
      return [
        {
          stepNumber: 1,
          title: 'หาความต้านทานรวมแบบอนุกรม ($R_{\\text{รวม}}$)',
          content: `$R_{\\text{รวม}} = R_1 + R_2 = ${p.r1} + ${p.r2} = ${rTotal}$ $\\Omega$`,
        },
        {
          stepNumber: 2,
          title: 'หากระแสไฟฟ้ารวม ($I = V / R_{\\text{รวม}}$)',
          content: `$I = \\frac{${p.V}}{${rTotal}} = **${ans}**$ แอมแปร์`,
        },
      ];
    },
    trickTip: () => '💡 วงจรอนุกรม: ความต้านทานบวกกันตรงๆ ($R_{\\text{รวม}} = R_1 + R_2$) และกระแสไฟฟ้าไหลเท่ากันตลอดทั้งสาย',
  },

  // 3. วงจรไฟฟ้าขนาน
  {
    id: 'sci-parallel-circuit',
    title: 'ความต้านทานรวมของวงจรไฟฟ้าแบบขนาน',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    difficulty: 'hard',
    tags: ['วิทยาศาสตร์', 'ฟิสิกส์', 'ไฟฟ้า', 'วงจรขนาน'],
    params: [
      { name: 'r1', min: 10, max: 30, step: 10, unit: 'Ω' },
      { name: 'r2', min: 10, max: 30, step: 10, unit: 'Ω' },
    ],
    questionText: (p) => `ตัวต้านทาน 2 ตัว มีขนาด ${p.r1} โอห์ม และ ${p.r2} โอห์ม นำมาต่อแบบขนานกัน ความต้านทานรวมของวงจรนี้จะมีค่ากี่โอห์ม`,
    correctAnswer: (p) => (p.r1 * p.r2) / (p.r1 + p.r2),
    answerUnit: 'โอห์ม',
    distractors: [
      { label: 'คิดเป็นแบบอนุกรม (บวกกันตรงๆ)', compute: (p) => p.r1 + p.r2 },
      { label: 'ผลคูณตรงๆ', compute: (p) => p.r1 * p.r2 },
      { label: 'เฉลี่ยตรงๆ', compute: (p) => (p.r1 + p.r2) / 2 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'ใช้สูตรความต้านทานขนาน 2 ตัว',
        content: `สูตร: $R_{\\text{รวม}} = \\frac{R_1 \\times R_2}{R_1 + R_2}$ (ผลคูณส่วนด้วยผลบวก)`,
      },
      {
        stepNumber: 2,
        title: 'แทนค่าคำนวณ',
        content: `$R_{\\text{รวม}} = \\frac{${p.r1} \\times ${p.r2}}{${p.r1} + ${p.r2}} = \\frac{${p.r1 * p.r2}}{${p.r1 + p.r2}} = **${ans}**$ $\\Omega$`,
      },
    ],
    trickTip: () => '💡 ข้อสังเกต: ในวงจรขนาน ความต้านทานรวมจะ "น้อยกว่า" ตัวต้านทานที่น้อยที่สุดเสมอ!',
  },

  // 4. พลังงานไฟฟ้าและการคิดค่าไฟ (ยูนิต)
  {
    id: 'sci-electric-units',
    title: 'การคำนวณพลังงานไฟฟ้า (หน่วย/ยูนิต)',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    difficulty: 'medium',
    tags: ['วิทยาศาสตร์', 'ฟิสิกส์', 'พลังงานไฟฟ้า', 'ค่าไฟ'],
    params: [
      { name: 'watts', min: 500, max: 2000, step: 500, unit: 'W' },
      { name: 'hours', min: 3, max: 8, step: 1, unit: 'ชม.' },
      { name: 'days', min: 10, max: 30, step: 10, unit: 'วัน' },
    ],
    questionText: (p) => `เตารีดไฟฟ้าขนาด ${p.watts} วัตต์ เปิดใช้งานวันละ ${p.hours} ชั่วโมง เป็นเวลา ${p.days} วัน จะใช้พลังงานไฟฟ้าไปทั้งหมดกี่หน่วย (ยูนิต หรือ kWh)`,
    correctAnswer: (p) => (p.watts * p.hours * p.days) / 1000,
    answerUnit: 'หน่วย',
    distractors: [
      { label: 'ลืมหาร 1,000 (ตอบเป็นวัตต์-ชั่วโมง)', compute: (p) => (p.watts * p.hours * p.days) / 100 },
      { label: 'คิดแค่ 1 วัน', compute: (p) => (p.watts * p.hours) / 1000 },
      { label: 'คูณผิดหลัก', compute: (p) => (p.watts * p.hours * p.days) / 10 },
    ],
    solutionSteps: (p, ans) => {
      const totalWattHours = p.watts * p.hours * p.days;
      return [
        {
          stepNumber: 1,
          title: 'สูตรการหาจำนวนหน่วยไฟฟ้า (ยูนิต)',
          content: `$\\text{จำนวนยูนิต} = \\frac{\\text{กำลังไฟฟ้า (วัตต์)} \\times \\text{เวลา (ชั่วโมง)}}{1,000}$`,
        },
        {
          stepNumber: 2,
          title: 'แทนค่า $W = ${p.watts}$, $t = ${p.hours} \\times ${p.days} = ${p.hours * p.days}$ ชม.',
          content: `$\\text{จำนวนยูนิต} = \\frac{${p.watts} \\times ${p.hours * p.days}}{1,000} = \\frac{${totalWattHours}}{1,000} = **${ans}**$ หน่วย`,
        },
      ];
    },
    trickTip: () => '💡 1 หน่วย (Unit) = 1 กิโลวัตต์-ชั่วโมง (kWh) = 1,000 วัตต์ ใช้งาน 1 ชั่วโมง',
  },

  // 5. ความหนาแน่น ($D = m / V$)
  {
    id: 'sci-density',
    title: 'การคำนวณความหนาแน่นของวัตถุ ($D = \\frac{m}{V}$)',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    difficulty: 'easy',
    tags: ['วิทยาศาสตร์', 'ฟิสิกส์', 'ความหนาแน่น'],
    params: [
      { name: 'density', min: 2, max: 8, step: 1, unit: 'g/cm³' },
      { name: 'V', min: 15, max: 60, step: 5, unit: 'cm³' },
    ],
    questionText: (p) => `ก้อนโลหะก้อนหนึ่งมีปริมาตร ${p.V} ลูกบาศก์เซนติเมตร และมีมวล ${p.density * p.V} กรัม ก้อนโลหะนี้มีความหนาแน่นกี่กรัมต่อลูกบาศก์เซนติเมตร`,
    correctAnswer: (p) => p.density,
    answerUnit: 'g/cm³',
    distractors: [
      { label: 'เอาปริมาตรหารมวล', compute: (p) => Math.round((p.V / (p.density * p.V)) * 10) / 10 },
      { label: 'ผลคูณมวลกับปริมาตร', compute: (p) => (p.density * p.V) * p.V },
      { label: 'บวกกัน', compute: (p) => p.density + 3 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'ใช้สูตรความหนาแน่น $D = \\frac{m}{V}$',
        content: `$\\text{ความหนาแน่น} = \\frac{\\text{มวล (g)}}{\\text{ปริมาตร (cm}^3\\text{)}}$`,
      },
      {
        stepNumber: 2,
        title: 'แทนค่าคำนวณ',
        content: `$D = \\frac{${p.density * p.V}}{${p.V}} = **${ans}**$ $\\text{g/cm}^3$`,
      },
    ],
    trickTip: () => '💡 วัตถุจะลอยน้ำเมื่อความหนาแน่นน้อยกว่าน้ำ ($D_{\\text{น้ำ}} = 1\\text{ g/cm}^3$)',
  },

  // 6. งานและพลังงาน ($W = Fs$)
  {
    id: 'sci-work-energy',
    title: 'การคำนวณงานทางฟิสิกส์ ($W = F \\times s$)',
    subjectId: 'science',
    topicId: 'sci-physics',
    topicName: 'แรง พลังงาน และไฟฟ้าคำนวณ',
    difficulty: 'easy',
    tags: ['วิทยาศาสตร์', 'ฟิสิกส์', 'งานและพลังงาน'],
    params: [
      { name: 'F', min: 20, max: 120, step: 10, unit: 'N' },
      { name: 's', min: 4, max: 15, step: 1, unit: 'm' },
    ],
    questionText: (p) => `เด็กคนหนึ่งออกแรงขนาด ${p.F} นิวตัน (N) ดันกล่องไม้ให้เคลื่อนที่ไปตามพื้นราบในแนวเดียวกับแรง ได้ระยะทาง ${p.s} เมตร (m) เด็กคนนี้ทำงานได้กี่จูล (J)`,
    correctAnswer: (p) => p.F * p.s,
    answerUnit: 'จูล',
    distractors: [
      { label: 'เอาแรงหารระยะทาง', compute: (p) => p.F / p.s },
      { label: 'บวกกันตรงๆ', compute: (p) => p.F + p.s },
      { label: 'คูณ 2', compute: (p) => p.F * p.s * 2 },
    ],
    solutionSteps: (p, ans) => [
      {
        stepNumber: 1,
        title: 'สูตรการหางาน $W = F \\times s$',
        content: `$\\text{งาน (W)} = \\text{แรง (F)} \\times \\text{ระยะทางตามแนวแรง (s)}$`,
      },
      {
        stepNumber: 2,
        title: 'แทนค่า $F = ${p.F}$ N, $s = ${p.s}$ m',
        content: `$W = ${p.F} \\times ${p.s} = **${ans}**$ จูล (J)`,
      },
    ],
    trickTip: () => '💡 งานจะเกิดเมื่อ "มีแรงกระทำ" และ "วัตถุเคลื่อนที่ตามแนวแรง" (ถ้าแบกของเดินพื้นราบ งาน = 0 เพราะแรงตั้งฉากกับการเคลื่อนที่)',
  },
];
