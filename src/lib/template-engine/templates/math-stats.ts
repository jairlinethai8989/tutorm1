import { QuestionTemplate } from '../types';

export const MATH_STATS_TEMPLATES: QuestionTemplate[] = [
  // 1. ค่าเฉลี่ยเลขคณิต
  {
    id: 'stats-mean',
    title: 'การคำนวณค่าเฉลี่ยเลขคณิต',
    subjectId: 'math',
    topicId: 'math-statistics',
    topicName: 'สถิติและความน่าจะเป็น',
    difficulty: 'easy',
    tags: ['สถิติ', 'ค่าเฉลี่ย'],
    params: [
      { name: 'base', min: 60, max: 85, step: 5 },
      { name: 'd1', min: -8, max: -2, step: 2 },
      { name: 'd2', min: 2, max: 8, step: 2 },
      { name: 'd3', min: -4, max: 6, step: 2 },
    ],
    questionText: (p) => {
      const v1 = p.base + p.d1;
      const v2 = p.base + p.d2;
      const v3 = p.base + p.d3;
      const v4 = p.base - (p.d1 + p.d2 + p.d3);
      return `คะแนนสอบวิชาคณิตศาสตร์ของนักเรียน 4 คน เป็นดังนี้: ${v1}, ${v2}, ${v3}, ${v4} จงหาคะแนนเฉลี่ยของนักเรียนกลุ่มนี้`;
    },
    correctAnswer: (p) => p.base,
    answerUnit: 'คะแนน',
    distractors: [
      { label: 'บวก 3 คะแนน', compute: (p) => p.base + 3 },
      { label: 'ลบ 4 คะแนน', compute: (p) => p.base - 4 },
      { label: 'บวก 5 คะแนน', compute: (p) => p.base + 5 },
    ],
    solutionSteps: (p, ans) => {
      const v1 = p.base + p.d1;
      const v2 = p.base + p.d2;
      const v3 = p.base + p.d3;
      const v4 = p.base - (p.d1 + p.d2 + p.d3);
      const sum = v1 + v2 + v3 + v4;
      return [
        {
          stepNumber: 1,
          title: 'หาผลรวมคะแนนทั้งหมด',
          content: `$\\text{ผลรวม} = ${v1} + ${v2} + ${v3} + ${v4} = ${sum}$`,
        },
        {
          stepNumber: 2,
          title: 'หารด้วยจำนวนคน (4 คน)',
          content: `$\\text{ค่าเฉลี่ย} = \\frac{\\text{ผลรวม}}{\\text{จำนวนข้อมูล}} = \\frac{${sum}}{4} = **${ans}**$ คะแนน`,
        },
      ];
    },
    trickTip: () => '💡 สูตรค่าเฉลี่ยเลขคณิต = $\\frac{\\sum x}{N}$ (ผลรวมข้อมูลทั้งหมด $\\div$ จำนวนข้อมูล)',
  },

  // 2. มัธยฐาน
  {
    id: 'stats-median',
    title: 'การหามัธยฐานของชุดข้อมูล',
    subjectId: 'math',
    topicId: 'math-statistics',
    topicName: 'สถิติและความน่าจะเป็น',
    difficulty: 'medium',
    tags: ['สถิติ', 'มัธยฐาน'],
    params: [
      { name: 'm', min: 15, max: 40, step: 1 },
      { name: 'gap', min: 2, max: 5, step: 1 },
    ],
    questionText: (p) => {
      const sorted = [
        p.m - 3 * p.gap,
        p.m - 2 * p.gap,
        p.m - p.gap,
        p.m,
        p.m + p.gap,
        p.m + 2 * p.gap,
        p.m + 3 * p.gap,
      ];
      // Shuffle display order
      const display = [...sorted].sort(() => Math.random() - 0.5);
      return `กำหนดชุดข้อมูล 7 จำนวนดังนี้: ${display.join(', ')} จงหาค่ามัธยฐานของข้อมูลชุดนี้`;
    },
    correctAnswer: (p) => p.m,
    distractors: [
      { label: 'ค่าก่อนหน้ามัธยฐาน', compute: (p) => p.m - p.gap },
      { label: 'ค่าถัดไปจากมัธยฐาน', compute: (p) => p.m + p.gap },
      { label: 'ค่าต่ำสุด', compute: (p) => p.m - 3 * p.gap },
    ],
    solutionSteps: (p, ans) => {
      const sorted = [
        p.m - 3 * p.gap,
        p.m - 2 * p.gap,
        p.m - p.gap,
        p.m,
        p.m + p.gap,
        p.m + 2 * p.gap,
        p.m + 3 * p.gap,
      ];
      return [
        {
          stepNumber: 1,
          title: 'เรียงลำดับข้อมูลจากน้อยไปมาก',
          content: `ข้อมูลที่เรียงแล้ว: $${sorted.join(', ')}$`,
        },
        {
          stepNumber: 2,
          title: 'หาตำแหน่งกึ่งกลาง',
          content: `ตำแหน่งมัธยฐาน = $\\frac{N + 1}{2} = \\frac{7 + 1}{2} = 4$ (ตัวที่ 4)\nดังนั้น มัธยฐานคือ **$${ans}$**`,
        },
      ];
    },
    trickTip: () => '💡 จำให้ขึ้นใจ: ก่อนหามัธยฐาน ต้อง "เรียงข้อมูลจากน้อยไปมาก" ทุกครั้ง!',
  },

  // 3. ความน่าจะเป็นในการสุ่มหยิบลูกบอล
  {
    id: 'stats-prob-balls',
    title: 'ความน่าจะเป็นในการสุ่มหยิบลูกบอลจากกล่อง',
    subjectId: 'math',
    topicId: 'math-statistics',
    topicName: 'สถิติและความน่าจะเป็น',
    difficulty: 'medium',
    tags: ['ความน่าจะเป็น', 'การสุ่ม'],
    params: [
      { name: 'red', min: 3, max: 8, step: 1 },
      { name: 'blue', min: 4, max: 10, step: 1 },
      { name: 'green', min: 3, max: 7, step: 1 },
    ],
    questionText: (p) => {
      const total = p.red + p.blue + p.green;
      return `กล่องทึบใบหนึ่งมีลูกบอลสีแดง ${p.red} ลูก, สีน้ำเงิน ${p.blue} ลูก และสีเขียว ${p.green} ลูก (รวม ${total} ลูก) ถ้าสุ่มหยิบลูกบอลขึ้นมา 1 ลูก ความน่าจะเป็นที่จะได้ **ลูกบอลสีแดง** เท่ากับร้อยละเท่าใด (ตอบเป็นเปอร์เซ็นต์)`;
    },
    correctAnswer: (p) => {
      const total = p.red + p.blue + p.green;
      return Math.round((p.red / total) * 100);
    },
    answerUnit: '%',
    distractors: [
      {
        label: 'ความน่าจะเป็นของสีน้ำเงิน',
        compute: (p) => Math.round((p.blue / (p.red + p.blue + p.green)) * 100),
      },
      {
        label: 'ความน่าจะเป็นของสีเขียว',
        compute: (p) => Math.round((p.green / (p.red + p.blue + p.green)) * 100),
      },
      {
        label: 'ความน่าจะเป็นที่ไม่ใช่สีแดง',
        compute: (p) => Math.round(((p.blue + p.green) / (p.red + p.blue + p.green)) * 100),
      },
    ],
    solutionSteps: (p, ans) => {
      const total = p.red + p.blue + p.green;
      return [
        {
          stepNumber: 1,
          title: 'หา $n(E)$ และ $n(S)$',
          content: `จำนวนเหตุการณ์ที่สนใจ (สีแดง) $n(E) = ${p.red}$\nจำนวนแซมเปิลสเปซทั้งหมด $n(S) = ${p.red} + ${p.blue} + ${p.green} = ${total}$`,
        },
        {
          stepNumber: 2,
          title: 'คำนวณความน่าจะเป็นและแปลงเป็นเปอร์เซ็นต์',
          content: `$P(E) = \\frac{n(E)}{n(S)} = \\frac{${p.red}}{${total}}$\nคิดเป็นร้อยละ: $\\frac{${p.red}}{${total}} \\times 100 = **${ans}\\%**$`,
        },
      ];
    },
    trickTip: () => '💡 สูตรความน่าจะเป็น: $P(E) = \\frac{n(E)}{n(S)}$ (จำนวนเหตุการณ์ที่สนใจ $\\div$ เหตุการณ์ทั้งหมดที่เป็นไปได้)',
  },

  // 4. ทอยลูกเต๋า 2 ลูก
  {
    id: 'stats-dice-sum',
    title: 'ความน่าจะเป็นของผลรวมแต้มลูกเต๋า 2 ลูก',
    subjectId: 'math',
    topicId: 'math-statistics',
    topicName: 'สถิติและความน่าจะเป็น',
    difficulty: 'hard',
    tags: ['ความน่าจะเป็น', 'ลูกเต๋า'],
    params: [
      { name: 'targetSum', min: 7, max: 10, step: 1 },
    ],
    questionText: (p) => `ทอยลูกเต๋าที่เที่ยงตรง 2 ลูกพร้อมกัน 1 ครั้ง มีทั้งหมดกี่วิธีที่ผลรวมของแต้มบนหน้าลูกเต๋าทั้งสองจะเท่ากับ **${p.targetSum}**`,
    correctAnswer: (p) => {
      let count = 0;
      for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
          if (i + j === p.targetSum) count++;
        }
      }
      return count;
    },
    answerUnit: 'วิธี',
    distractors: [
      { label: 'คิดแค่ครึ่งเดียว (ลืมสลับลูกเต๋า)', compute: (p, ans) => Math.max(1, Math.floor(ans / 2)) },
      { label: 'บวกเกิน 1', compute: (p, ans) => ans + 2 },
      { label: 'ลืมกรณีเบิ้ล', compute: (p, ans) => Math.max(1, ans - 1) },
    ],
    solutionSteps: (p, ans) => {
      const pairs: string[] = [];
      for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
          if (i + j === p.targetSum) pairs.push(`(${i}, ${j})`);
        }
      }
      return [
        {
          stepNumber: 1,
          title: 'แจกแจงคู่แต้มที่ผลรวมได้ ' + p.targetSum,
          content: `คู่แต้มที่เป็นไปได้คือ: $${pairs.join(', ')}$`,
        },
        {
          stepNumber: 2,
          title: 'นับจำนวนวิธีทั้งหมด',
          content: `มีทั้งหมด **${ans}** วิธี (จากทั้งหมด $6 \\times 6 = 36$ วิธี)`,
        },
      ];
    },
    trickTip: () => '💡 ลูกเต๋า 2 ลูก ผลรวมแต้ม 7 มีโอกาสออกมากที่สุด (6 วิธี: 1-6, 2-5, 3-4, 4-3, 5-2, 6-1)',
  },
];
