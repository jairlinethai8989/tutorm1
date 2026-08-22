import { Question } from '@/types/question';

/**
 * คลังข้อสอบคณิตศาสตร์ โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย (Princess Chulabhorn Science High School)
 * ข้อสอบคัดเลือกรอบสองและข้อสอบแข่งขันคณิตศาสตร์ขั้นสูง สไตล์ สสวท.
 * ครอบคลุม: ทฤษฎีจำนวน, แฟกทอเรียล, เรขาคณิต, ลำดับและแบบรูป, พื้นที่บนกริด
 */

export const CHULABHORN_MATH_QUESTIONS: Question[] = [
  // ข้อ 1: ตัวประกอบและพีชคณิต
  {
    id: 'pcsh-math-001',
    subjectId: 'math',
    topicId: 'math-numbers',
    topicName: 'จำนวนและพีชคณิต',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['จุฬาภรณราชวิทยาลัย', 'คณิตศาสตร์', 'ตัวประกอบ', 'ทฤษฎีจำนวน'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 1',
    targetSchool: 'chulabhorn',
    content: 'กำหนดให้:\n- ตัวประกอบทั้งหมดของ $24$ คือ $1, 2, 3, a, b, c, 12, 24$\n- ตัวประกอบทั้งหมดของ $A$ คือ $1, 2, 3, 4, 6, 9, 12, 18, A$\n\nจงหาค่าของ $\\dfrac{A}{a + b + c}$',
    choices: [
      { id: 'c1', label: '1', content: '1.5', isCorrect: false },
      { id: 'c2', label: '2', content: '2', isCorrect: true },
      { id: 'c3', label: '3', content: '3', isCorrect: false },
      { id: 'c4', label: '4', content: '4', isCorrect: false },
    ],
    solution: {
      summary: 'ตัวประกอบของ 24 คือ 1, 2, 3, 4, 6, 8, 12, 24 ได้ a=4, b=6, c=8 และ A=36 ดังนั้น A/(a+b+c) = 36/18 = 2',
      trickTip: '💡 จับคู่หัวท้ายตัวประกอบ: $1 \\times 24 = 24$, $2 \\times 12 = 24$, $3 \\times 8 = 24$, $4 \\times 6 = 24$ หาค่าที่ไม่ทราบได้อย่างรวดเร็ว',
      steps: [
        {
          stepNumber: 1,
          title: 'หาค่า a, b, c จากตัวประกอบของ 24',
          content: 'ตัวประกอบของ 24 เรียงจากน้อยไปมาก: $1, 2, 3, \\mathbf{4}, \\mathbf{6}, \\mathbf{8}, 12, 24$\nดังนั้น $a=4, b=6, c=8$ จะได้ $a+b+c = 4+6+8 = 18$',
        },
        {
          stepNumber: 2,
          title: 'หาค่า A จากตัวประกอบของ A',
          content: 'จากตัวประกอบ: $1 \\times A = A$, $2 \\times 18 = 36$, $3 \\times 12 = 36$, $4 \\times 9 = 36$, $6 \\times 6 = 36$\nดังนั้น $A = 36$',
        },
        {
          stepNumber: 3,
          title: 'คำนวณคำตอบ',
          content: '$$\\frac{A}{a+b+c} = \\frac{36}{18} = 2$$',
        },
      ],
    },
  },

  // ข้อ 2: ห.ร.ม. และสมการ
  {
    id: 'pcsh-math-002',
    subjectId: 'math',
    topicId: 'math-numbers',
    topicName: 'จำนวนและพีชคณิต',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 120,
    tags: ['จุฬาภรณราชวิทยาลัย', 'คณิตศาสตร์', 'ห.ร.ม.', 'สมการ'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 2',
    targetSchool: 'chulabhorn',
    content: 'ให้ $d$ แทนตัวประกอบร่วมที่มากที่สุด (ห.ร.ม.) ของ $72$ และ $972$\nให้ $a, b$ เป็นจำนวนนับที่มากกว่า $1$ และสอดคล้องกับสมการ:\n$$a \\times [(2 \\times d) + b] = (10 \\times d) + 35$$\n\nจงหาค่าของ $5 \\times \\left(\\dfrac{d - 1}{a \\times b}\\right)$',
    choices: [
      { id: 'c1', label: '1', content: '3', isCorrect: false },
      { id: 'c2', label: '2', content: '5', isCorrect: true },
      { id: 'c3', label: '3', content: '7', isCorrect: false },
      { id: 'c4', label: '4', content: '10', isCorrect: false },
    ],
    solution: {
      summary: 'ห.ร.ม. ของ 72 และ 972 คือ d = 36 แทนค่าได้ a = 5, b = 7 จะได้คำตอบเท่ากับ 5',
      trickTip: '💡 แยกตัวประกอบ $395 = 5 \\times 79$ เมื่อ $a > 1$ และ $72+b > 72$ บังคับให้ $a=5$ ทันที!',
      steps: [
        {
          stepNumber: 1,
          title: 'หา ห.ร.ม. ของ 72 และ 972',
          content: '$72 = 36 \\times 2$\n$972 = 36 \\times 27$\nดังนั้น $\\text{ห.ร.ม.} = d = 36$',
        },
        {
          stepNumber: 2,
          title: 'แก้สมการหา a และ b',
          content: 'แทน $d=36$ ลงในสมการ:\n$$a \\times [(2 \\times 36) + b] = (10 \\times 36) + 35$$\n$$a \\times (72 + b) = 395$$\nเนื่องจาก $395 = 5 \\times 79$ (79 เป็นจำนวนเฉพาะ) และ $a, b$ เป็นจำนวนนับ $> 1$:\nจะได้ $a = 5$ และ $72 + b = 79 \\implies b = 7$',
        },
        {
          stepNumber: 3,
          title: 'คำนวณค่าที่โจทย์ถาม',
          content: '$$5 \\times \\left(\\frac{36 - 1}{5 \\times 7}\\right) = 5 \\times \\left(\\frac{35}{35}\\right) = 5 \\times 1 = 5$$',
        },
      ],
    },
  },

  // ข้อ 3: แฟกทอเรียลและเศษเหลือ
  {
    id: 'pcsh-math-003',
    subjectId: 'math',
    topicId: 'math-numbers',
    topicName: 'จำนวนและพีชคณิต',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['จุฬาภรณราชวิทยาลัย', 'คณิตศาสตร์', 'แฟกทอเรียล', 'เศษเหลือ'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 4',
    targetSchool: 'chulabhorn',
    content: 'นิยาม $n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 3 \\times 2 \\times 1$\n\nจงหาเศษที่เกิดจากการหาร $1! + 2! + 3! + 4! + 5! + \\dots + 100!$ ด้วย $5$',
    choices: [
      { id: 'c1', label: '1', content: '1', isCorrect: false },
      { id: 'c2', label: '2', content: '2', isCorrect: false },
      { id: 'c3', label: '3', content: '3', isCorrect: true },
      { id: 'c4', label: '4', content: '4', isCorrect: false },
    ],
    solution: {
      summary: 'ตั้งแต่ 5! ขึ้นไป ทุกพจน์มี 5 เป็นตัวประกอบจึงหารด้วย 5 ลงตัว (เศษ 0) พิจารณาเฉพาะ 1! + 2! + 3! + 4! = 33 ซึ่ง 33 หารด้วย 5 เหลือเศษ 3',
      trickTip: '💡 ตัดพจน์ที่เป็นศูนย์ทิ้ง: ตั้งแต่ $5! = 120$ หารด้วย 5 ลงตัวเสมอ เหลือคิดแค่ $1!+2!+3!+4! = 33$',
      steps: [
        {
          stepNumber: 1,
          title: 'พิจารณาพจน์ตั้งแต่ 5! ขึ้นไป',
          content: '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$ มี 5 เป็นตัวประกอบ\nดังนั้น $5!, 6!, 7!, \\dots, 100!$ หารด้วย 5 ลงตัวทั้งหมด (เศษเหลือ $= 0$)',
        },
        {
          stepNumber: 2,
          title: 'คำนวณผลรวมพจน์ 1! ถึง 4!',
          content: '$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$$',
        },
        {
          stepNumber: 3,
          title: 'หาเศษเหลือจากการหารด้วย 5',
          content: '$$33 = (5 \\times 6) + 3$$\nดังนั้น เศษเหลือเท่ากับ **3**',
        },
      ],
    },
  },

  // ข้อ 4: ค.ร.น. และเศษขาด
  {
    id: 'pcsh-math-004',
    subjectId: 'math',
    topicId: 'math-numbers',
    topicName: 'จำนวนและพีชคณิต',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 4,
    timeEstimateSeconds: 120,
    tags: ['จุฬาภรณราชวิทยาลัย', 'คณิตศาสตร์', 'ค.ร.น.', 'เศษเหลือขาด'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 5',
    targetSchool: 'chulabhorn',
    content: 'จงหาจำนวนนับ $N$ ที่น้อยที่สุดที่สอดคล้องกับเงื่อนไขต่อไปนี้:\n1. $N \\ge 1000$\n2. เศษที่เกิดจากการหาร $N$ ด้วย $5, 6, 7$ คือ $4, 5, 6$ ตามลำดับ',
    choices: [
      { id: 'c1', label: '1', content: '1049', isCorrect: true },
      { id: 'c2', label: '2', content: '1050', isCorrect: false },
      { id: 'c3', label: '3', content: '1051', isCorrect: false },
      { id: 'c4', label: '4', content: '1259', isCorrect: false },
    ],
    solution: {
      summary: 'เศษขาด 1 เสมอ (5-4=1, 6-5=1, 7-6=1) ดังนั้น N+1 หารด้วย ค.ร.น.(5,6,7)=210 ลงตัว จะได้ N = 210k - 1 เมื่อ N >= 1000 ค่าต่ำสุดคือ k=5 ได้ N = 1049',
      trickTip: '💡 เศษขาดเท่ากัน: "บวกส่วนที่ขาดเข้าไป" จะหารลงตัวพอดี $\\rightarrow N+1 = 210k$',
      steps: [
        {
          stepNumber: 1,
          title: 'สังเกตผลต่างระหว่างตัวหารกับเศษ',
          content: '$5 - 4 = 1$, $6 - 5 = 1$, $7 - 6 = 1$\nแสดงว่าถ้าเพิ่มค่า $N$ อีก $1$ ($N+1$) จะหารด้วย $5, 6, 7$ ลงตัวพอดี',
        },
        {
          stepNumber: 2,
          title: 'หา ค.ร.น. ของ 5, 6, 7',
          content: '$\\text{ค.ร.น.}(5, 6, 7) = 5 \\times 6 \\times 7 = 210$\nดังนั้น $N+1 = 210k$',
        },
        {
          stepNumber: 3,
          title: 'หาค่า k ที่ทำให้ N >= 1000',
          content: '$N = 210k - 1 \\ge 1000 \\implies 210k \\ge 1001 \\implies k \\ge 4.76$\nเลือกจำนวนเต็มบวก $k = 5$:\n$$N = (210 \\times 5) - 1 = 1050 - 1 = 1049$$',
        },
      ],
    },
  },

  // ข้อ 5: เลขยกกำลังและหลักหน่วย
  {
    id: 'pcsh-math-005',
    subjectId: 'math',
    topicId: 'math-numbers',
    topicName: 'จำนวนและพีชคณิต',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['จุฬาภรณราชวิทยาลัย', 'คณิตศาสตร์', 'เลขยกกำลัง', 'หลักหน่วย'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 6',
    targetSchool: 'chulabhorn',
    content: 'จงหาเศษที่เกิดจากการหาร $2^{45} + 3^{38} + 5^{21}$ ด้วย $10$',
    choices: [
      { id: 'c1', label: '1', content: '4', isCorrect: false },
      { id: 'c2', label: '2', content: '5', isCorrect: false },
      { id: 'c3', label: '3', content: '6', isCorrect: true },
      { id: 'c4', label: '4', content: '8', isCorrect: false },
    ],
    solution: {
      summary: 'การหาเศษจากการหารด้วย 10 คือการหาเลขโดดในหลักหน่วย: 2^45 ลงท้ายด้วย 2, 3^38 ลงท้ายด้วย 9, 5^21 ลงท้ายด้วย 5 รวมเป็น 2+9+5 = 16 ลงท้ายด้วย 6',
      trickTip: '💡 เศษจากการหารด้วย 10 = "เลขโดดในหลักหน่วยของจำนวนนั้น"',
      steps: [
        {
          stepNumber: 1,
          title: 'หาหลักหน่วยของ 2^45',
          content: 'วัฏจักรหลักหน่วยของ 2 คือ $2, 4, 8, 6$ (คาบ 4)\n$45 \\div 4 = 11$ เศษ $1 \\implies$ ลงท้ายด้วย **2**',
        },
        {
          stepNumber: 2,
          title: 'หาหลักหน่วยของ 3^38',
          content: 'วัฏจักรหลักหน่วยของ 3 คือ $3, 9, 7, 1$ (คาบ 4)\n$38 \\div 4 = 9$ เศษ $2 \\implies$ ลงท้ายด้วย **9**',
        },
        {
          stepNumber: 3,
          title: 'หาหลักหน่วยของ 5^21',
          content: 'เลข 5 ยกกำลังจำนวนเต็มบวกใดๆ จะลงท้ายด้วย **5** เสมอ',
        },
        {
          stepNumber: 4,
          title: 'รวมหลักหน่วย',
          content: 'หลักหน่วย $= 2 + 9 + 5 = 16 \\implies$ ลงท้ายด้วย **6**\nดังนั้น เศษจากการหารด้วย 10 คือ **6**',
        },
      ],
    },
  },

  // ข้อ 6: เส้นทแยงมุมในรูปหลายเหลี่ยม
  {
    id: 'pcsh-math-006',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและแบบรูป',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['จุฬาภรณราชวิทยาลัย', 'เรขาคณิต', 'เส้นทแยงมุม', 'รูปหลายเหลี่ยม'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 7',
    targetSchool: 'chulabhorn',
    content: 'ในรูปแปดเหลี่ยมด้านเท่ามุมเท่า (Regular Octagon):\nจงหาจำนวน "เส้นทแยงมุมทั้งหมด" ที่ลากเชื่อมระหว่างจุดยอดทุกจุด',
    choices: [
      { id: 'c1', label: '1', content: '14 เส้น', isCorrect: false },
      { id: 'c2', label: '2', content: '16 เส้น', isCorrect: false },
      { id: 'c3', label: '3', content: '20 เส้น', isCorrect: true },
      { id: 'c4', label: '4', content: '28 เส้น', isCorrect: false },
    ],
    solution: {
      summary: 'สูตรจำนวนเส้นทแยงมุมของรูป n-เหลี่ยมคือ n(n-3)/2 สำหรับรูปแปดเหลี่ยม (n=8) จะได้ 8(8-3)/2 = 8(5)/2 = 20 เส้น',
      trickTip: '💡 สูตรเส้นทแยงมุมทั้งหมดของรูป $n$-เหลี่ยม: $$\\text{จำนวนเส้น} = \\frac{n(n-3)}{2}$$',
      steps: [
        {
          stepNumber: 1,
          title: 'ใช้สูตรคำนวณเส้นทแยงมุม',
          content: 'สำหรับรูป 8 เหลี่ยม ($n=8$):\n$$\\text{จำนวนเส้นทแยงมุม} = \\frac{8 \\times (8 - 3)}{2} = \\frac{8 \\times 5}{2} = 20\\text{ เส้น}$$',
        },
      ],
    },
  },

  // ข้อ 7: พื้นที่สามเหลี่ยมบนตารางกริด
  {
    id: 'pcsh-math-007',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและการวัด',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['จุฬาภรณราชวิทยาลัย', 'เรขาคณิต', 'พื้นที่', 'ตารางกริด'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 8',
    targetSchool: 'chulabhorn',
    content: 'บนตารางกริดรูปสี่เหลี่ยมจัตุรัสขนาดช่องละ $1\\times 1$ หน่วย มีรูปสามเหลี่ยมที่มีพิกัดจุดยอด 3 จุด:\n- จุดยอดบนสุดอยู่ที่ความสูง 6 ช่อง\n- ฐานกว้าง 6 ช่อง\n- รูปสี่เหลี่ยมผืนผ้าล้อมรอบมีขนาดกว้าง 6 หน่วย สูง 6 หน่วย (พื้นที่ 36 ตร.หน่วย)\n- รูปสามเหลี่ยมมุมฉากที่ไม่แรเงารอบข้าง 3 รูปมีพื้นที่ 7.5, 9 และ 3 ตารางหน่วยตามลำดับ\n\nจงหาพื้นที่ของรูปสามเหลี่ยมที่แรเงา',
    choices: [
      { id: 'c1', label: '1', content: '15 ตารางหน่วย', isCorrect: false },
      { id: 'c2', label: '2', content: '16.5 ตารางหน่วย', isCorrect: true },
      { id: 'c3', label: '3', content: '18 ตารางหน่วย', isCorrect: false },
      { id: 'c4', label: '4', content: '19.5 ตารางหน่วย', isCorrect: false },
    ],
    solution: {
      summary: 'ใช้วิธีล้อมกรอบสี่เหลี่ยมผืนผ้า พื้นที่แรเงา = พื้นที่สี่เหลี่ยมผืนผ้าล้อมรอบ - ผลรวมพื้นที่สามเหลี่ยมมุมฉากโดยรอบ = 36 - (7.5 + 9 + 3) = 16.5 ตารางหน่วย',
      trickTip: '💡 วิธี Box Method: "พื้นที่แรเงา = พื้นที่กล่องสี่เหลี่ยม - พื้นที่ส่วนเกินรอบข้าง"',
      steps: [
        {
          stepNumber: 1,
          title: 'คำนวณพื้นที่กล่องสี่เหลี่ยมล้อมรอบ',
          content: '$$\\text{พื้นที่กล่อง} = 6 \\times 6 = 36\\text{ ตารางหน่วย}$$',
        },
        {
          stepNumber: 2,
          title: 'หักพื้นที่ส่วนเกินรอบนอก',
          content: '$$\\text{พื้นที่แรเงา} = 36 - (7.5 + 9 + 3) = 36 - 19.5 = 16.5\\text{ ตารางหน่วย}$$',
        },
      ],
    },
  },

  // ข้อ 8: การหามุมในวงกลมและสามเหลี่ยมหน้าจั่ว
  {
    id: 'pcsh-math-008',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมุม',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 120,
    tags: ['จุฬาภรณราชวิทยาลัย', 'เรขาคณิต', 'มุม', 'วงกลม', 'เส้นขนาน'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 9',
    targetSchool: 'chulabhorn',
    content: 'จากรูป วงกลม $O$ ถูกแบ่งมุมที่จุดศูนย์กลางเป็น 3 ส่วนเท่าๆ กัน ($120^\\circ$ แต่ละมุม) จุด $O, A, C$ อยู่ในแนวเส้นตรงเดียวกัน และ $A$ เป็นจุดบนวงกลม $O$\nถ้าส่วนของเส้นตรง $PO \\parallel QA$ โดยต่อ $OA$ ไปที่จุด $C$ และต่อ $QA$ ไปที่จุด $B$ ทำให้ $ABC$ เป็นรูปสามเหลี่ยมหน้าจั่ว ($AB = AC$) และลาก $AD \\perp BC$ ที่จุด $D$\n\nจงหาขนาดของมุม $DAQ$ ($\\\\angle DAQ$)',
    choices: [
      { id: 'c1', label: '1', content: '$120^\\circ$', isCorrect: false },
      { id: 'c2', label: '2', content: '$135^\\circ$', isCorrect: false },
      { id: 'c3', label: '3', content: '$150^\\circ$', isCorrect: true },
      { id: 'c4', label: '4', content: '$160^\\circ$', isCorrect: false },
    ],
    solution: {
      summary: 'มุมที่จุดศูนย์กลางเท่ากับ 120 องศา จากเส้นขนาน PO // QA ทำให้มุมภายนอก = 120 องศา และ AD แบ่งครึ่งมุมยอดของสามเหลี่ยมหน้าจั่ว 60 องศาได้มุมละ 30 องศา รวมเป็น มุม DAQ = 120 + 30 = 150 องศา',
      trickTip: '💡 สามเหลี่ยมหน้าจั่วเส้นตั้งฉากฐานจะแบ่งครึ่งมุมยอด: $60^\\circ \\div 2 = 30^\\circ$ รวมกับมุมภายนอก $120^\\circ$ ได้ $150^\\circ$',
      steps: [
        {
          stepNumber: 1,
          title: 'หามุมที่จุด A จากเส้นขนาน',
          content: 'เนื่องจาก $PO \\parallel QA$ และ $\\angle POA = 120^\\circ$\nจะได้มุมภายนอก $\\angle QAC = 120^\\circ$',
        },
        {
          stepNumber: 2,
          title: 'หามุมของสามเหลี่ยมหน้าจั่ว ABC',
          content: 'มุมยอด $\\angle BAC = 180^\\circ - 120^\\circ = 60^\\circ$\nเมื่อ $AD \\perp BC$ เส้น $AD$ จะแบ่งครึ่งมุมยอด $\\angle BAC$:\n$$\\angle CAD = \\frac{60^\\circ}{2} = 30^\\circ$$',
        },
        {
          stepNumber: 3,
          title: 'คำนวณมุม DAQ',
          content: '$$\\angle DAQ = \\angle QAC + \\angle CAD = 120^\\circ + 30^\\circ = 150^\\circ$$',
        },
      ],
    },
  },

  // ข้อ 9: ความยาวรอบรูปสี่เหลี่ยม
  {
    id: 'pcsh-math-009',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['จุฬาภรณราชวิทยาลัย', 'เรขาคณิต', 'พื้นที่', 'เส้นรอบรูป'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 10',
    targetSchool: 'chulabhorn',
    content: 'รูปสี่เหลี่ยมมุมฉาก $AEFG$ และรูปสี่เหลี่ยมจัตุรัส $ABCD$ มีพื้นที่เท่ากันคือ $36$ ตารางหน่วย โดยมีจุด $E$ เป็นจุดกึ่งกลางของด้าน $AB$\n\nจงหาความยาวเส้นรอบรูปของรูปสี่เหลี่ยมมุมฉาก $AEFG$',
    choices: [
      { id: 'c1', label: '1', content: '24 หน่วย', isCorrect: false },
      { id: 'c2', label: '2', content: '28 หน่วย', isCorrect: false },
      { id: 'c3', label: '3', content: '30 หน่วย', isCorrect: true },
      { id: 'c4', label: '4', content: '36 หน่วย', isCorrect: false },
    ],
    solution: {
      summary: 'จัตุรัส ABCD มีด้านยาว 6 หน่วย จุด E กึ่งกลางทำให้ AE = 3 หน่วย สี่เหลี่ยม AEFG มีพื้นที่ 36 จึงมีความยาวด้าน AG = 36/3 = 12 หน่วย เส้นรอบรูป = 2*(3+12) = 30 หน่วย',
      trickTip: '💡 จัตุรัสพื้นที่ $36 \\implies$ ด้านยาว $6$ ➔ กึ่งกลางคือ $3$ ➔ อีกด้านยาว $36 \\div 3 = 12$',
      steps: [
        {
          stepNumber: 1,
          title: 'หาความยาวด้านของสี่เหลี่ยมจัตุรัส ABCD',
          content: '$$\\text{ด้าน } AB = \\sqrt{36} = 6\\text{ หน่วย}$$',
        },
        {
          stepNumber: 2,
          title: 'หาขนาดด้านของสี่เหลี่ยมมุมฉาก AEFG',
          content: 'จุด $E$ อยู่กึ่งกลาง $AB \\implies AE = \\frac{6}{2} = 3\\text{ หน่วย}$\nพื้นที่ $AEFG = AE \\times AG = 36 \\implies 3 \\times AG = 36 \\implies AG = 12\\text{ หน่วย}$',
        },
        {
          stepNumber: 3,
          title: 'คำนวณเส้นรอบรูป',
          content: '$$\\text{เส้นรอบรูป } AEFG = 2 \\times (3 + 12) = 2 \\times 15 = 30\\text{ หน่วย}$$',
        },
      ],
    },
  },

  // ข้อ 10: อสมการรูปสามเหลี่ยม
  {
    id: 'pcsh-math-010',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและทฤษฎีสามเหลี่ยม',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 100,
    tags: ['จุฬาภรณราชวิทยาลัย', 'เรขาคณิต', 'อสมการสามเหลี่ยม', 'การนับ'],
    source: 'แนวข้อสอบคณิตศาสตร์ รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย ข้อ 11',
    targetSchool: 'chulabhorn',
    content: 'ในการสร้างรูปสามเหลี่ยมใดๆ มีกฎว่า "ผลบวกของความยาวด้านสองด้านใดๆ ต้องมากกว่าความยาวของด้านที่สามเสมอ ($a + b > c$)"\n\nถ้ากำหนดให้ความยาวของแต่ละด้านของรูปสามเหลี่ยมเป็น **จำนวนนับ** และมี **ความยาวเส้นรอบรูปเท่ากับ 18 หน่วย**\nเราสามารถสร้างรูปสามเหลี่ยมที่มีขนาดแตกต่างกัน (ไม่เท่ากันทุกประการ) ได้ทั้งหมดกี่รูป?',
    choices: [
      { id: 'c1', label: '1', content: '5 รูป', isCorrect: false },
      { id: 'c2', label: '2', content: '7 รูป', isCorrect: true },
      { id: 'c3', label: '3', content: '8 รูป', isCorrect: false },
      { id: 'c4', label: '4', content: '9 รูป', isCorrect: false },
    ],
    solution: {
      summary: 'จากเส้นรอบรูป a+b+c = 18 และ c < 9 (c ต้องน้อยกว่าครึ่งหนึ่งของเส้นรอบรูป) ด้านยาวที่สุด c ได้แก่ 8, 7, 6 จัดชุด (a,b,c) ที่เป็นจำนวนนับได้ทั้งหมด 7 รูป: (2,8,8), (3,7,8), (4,6,8), (5,5,8), (4,7,7), (5,6,7), (6,6,6)',
      trickTip: '💡 เงื่อนไขด้านยาวสุด: $c < \\frac{\\text{เส้นรอบรูป}}{2} \\implies c < 9$ ดังนั้น $c = 8, 7, 6$ แล้วไล่หาคู่ $(a,b)$',
      steps: [
        {
          stepNumber: 1,
          title: 'หาขอบเขตของด้านยาวที่สุด c',
          content: 'ให้ $a \\le b \\le c$ โดย $a+b+c = 18$\nจาก $a+b > c \\implies (18 - c) > c \\implies 2c < 18 \\implies c < 9$',
        },
        {
          stepNumber: 2,
          title: 'แจกแจงกรณีของ c',
          content: '- เมื่อ $c = 8$: $a+b = 10 \\implies (2,8,8), (3,7,8), (4,6,8), (5,5,8)$ (รวม 4 รูป)\n- เมื่อ $c = 7$: $a+b = 11 \\implies (4,7,7), (5,6,7)$ (รวม 2 รูป)\n- เมื่อ $c = 6$: $a+b = 12 \\implies (6,6,6)$ (รวม 1 รูป)',
        },
        {
          stepNumber: 3,
          title: 'รวมจำนวนรูปสามเหลี่ยมทั้งหมด',
          content: '$$4 + 2 + 1 = 7\\text{ รูป}$$',
        },
      ],
    },
  },
];

