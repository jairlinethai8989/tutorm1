import { Question } from '@/types/question';
import { CHULABHORN_MATH_QUESTIONS } from './chulabhornMath';
import { BENCHAMA_MATH_QUESTIONS } from './benchamaMath';

export const MATH_QUESTIONS: Question[] = [
  ...BENCHAMA_MATH_QUESTIONS,
  ...CHULABHORN_MATH_QUESTIONS,
  // 1. เรขาคณิต - พื้นที่สี่เหลี่ยมคางหมู (แนว มศว.)
  {
    id: 'math-geo-001',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'เรขาคณิต', 'พื้นที่'],
    source: 'แนวข้อสอบคัดเลือก ม.1 มศว. & เบ็ญจะมะมหาราช',
    targetSchool: 'benchama',
    content: 'รูปสี่เหลี่ยมคางหมู ABCD มีด้านคู่ขนาน AD ยาว 8 เซนติเมตร และ BC ยาว 14 เซนติเมตร ถ้าความสูงของรูปสี่เหลี่ยมนี้เท่ากับ 6 เซนติเมตร จงหาพื้นที่ของรูปสี่เหลี่ยม ABCD',
    choices: [
      { id: 'c1', label: 'ก', content: '48 ตารางเซนติเมตร', isCorrect: false },
      { id: 'c2', label: 'ข', content: '56 ตารางเซนติเมตร', isCorrect: false },
      { id: 'c3', label: 'ค', content: '66 ตารางเซนติเมตร', isCorrect: true },
      { id: 'c4', label: 'ง', content: '84 ตารางเซนติเมตร', isCorrect: false },
    ],
    solution: {
      summary: 'พื้นที่สี่เหลี่ยมคางหมู ABCD คือ 66 ตารางเซนติเมตร',
      trickTip: '💡 วิธีคิดเร็ว: นำผลบวกด้านคู่ขนานคูณความสูงแล้วหารด้วย 2 ทันที -> (8 + 14) × 6 ÷ 2 = 22 × 3 = 66',
      commonMistake: '⚠️ จุดที่มักผิด: เด็กบางคนนำ 8 × 14 = 112 ตร.ซม. ซึ่งเป็นสูตรสี่เหลี่ยมผืนผ้า ไม่ใช่สี่เหลี่ยมคางหมู',
      steps: [
        {
          stepNumber: 1,
          title: 'ระบุข้อมูลที่โจทย์กำหนด',
          content: '• ด้านคู่ขนานที่ 1 ($a$) = 8 ซม.\n• ด้านคู่ขนานที่ 2 ($b$) = 14 ซม.\n• ความสูง ($h$) = 6 ซม.',
        },
        {
          stepNumber: 2,
          title: 'ใช้สูตรพื้นที่สี่เหลี่ยมคางหมู',
          content: '$$\\text{พื้นที่} = \\frac{1}{2} \\times (a + b) \\times h$$',
        },
        {
          stepNumber: 3,
          title: 'แทนค่าและคำนวณ',
          content: '$$\\text{พื้นที่} = \\frac{1}{2} \\times (8 + 14) \\times 6 = \\frac{1}{2} \\times 22 \\times 6 = 11 \\times 6 = 66\\text{ ตารางเซนติเมตร}$$',
        },
      ],
    },
  },

  // 2. ห.ร.ม. & ค.ร.น. - ปัญหาประยุกต์ตัดไม้ (แนว มศว. / สสวท.)
  {
    id: 'math-arith-001',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 120,
    tags: ['มศว.', 'จุฬาภรณราชวิทยาลัย', 'ห.ร.ม.', 'การตัดแบ่ง'],
    source: 'แนวข้อสอบ สสวท. & จุฬาภรณราชวิทยาลัย มุกดาหาร',
    targetSchool: 'chulabhorn',
    content: 'มีเชือก 3 เส้น ยาว 48 เมตร, 72 เมตร และ 108 เมตร ต้องการตัดแบ่งเป็นท่อนๆ ให้ยาวเท่ากันทุกท่อนและยาวที่สุดเท่าที่จะยาวได้ โดยไม่เหลือเศษ จะได้เชือกทั้งหมดกี่ท่อน?',
    choices: [
      { id: 'c1', label: 'ก', content: '12 ท่อน', isCorrect: false },
      { id: 'c2', label: 'ข', content: '19 ท่อน', isCorrect: true },
      { id: 'c3', label: 'ค', content: '24 ท่อน', isCorrect: false },
      { id: 'c4', label: 'ง', content: '36 ท่อน', isCorrect: false },
    ],
    solution: {
      summary: 'ตัดเชือกได้ยาวที่สุดท่อนละ 12 เมตร และได้จำนวนเชือกทั้งหมด 19 ท่อน',
      trickTip: '💡 หา ห.ร.ม. ของ 48, 72, 108 ได้ 12 เมตร จากนั้นนำเศษจากการหาร (4 + 6 + 9) มารวมกันทันที = 19 ท่อน',
      commonMistake: '⚠️ จุดระวัง: โจทย์ถาม "จำนวนท่อนทั้งหมด" ไม่ได้ถามว่า "ยาวท่อนละกี่เมตร" เด็กมักตอบ 12 ทันทีซึ่งผิด!',
      steps: [
        {
          stepNumber: 1,
          title: 'หาความยาวเชือกที่ยาวที่สุด (ห.ร.ม.)',
          content: 'หา ห.ร.ม. ของ 48, 72, 108:\n$$48 = 12 \\times 4$$\n$$72 = 12 \\times 6$$\n$$108 = 12 \\times 9$$\nห.ร.ม. คือ 12 เมตร (เชือกแต่ละท่อนยาว 12 เมตร)',
        },
        {
          stepNumber: 2,
          title: 'คำนวณจำนวนท่อนของเชือกแต่ละเส้น',
          content: '• เส้นที่ 1 ยาว 48 ม. ตัดได้: $48 \\div 12 = 4$ ท่อน\n• เส้นที่ 2 ยาว 72 ม. ตัดได้: $72 \\div 12 = 6$ ท่อน\n• เส้นที่ 3 ยาว 108 ม. ตัดได้: $108 \\div 12 = 9$ ท่อน',
        },
        {
          stepNumber: 3,
          title: 'รวมจำนวนท่อนทั้งหมด',
          content: '$$\\text{จำนวนท่อนทั้งหมด} = 4 + 6 + 9 = 19\\text{ ท่อน}$$',
        },
      ],
    },
  },

  // 3. พีชคณิตและแบบรูป - ลำดับตัวเลขชั้นสูง (แนว มศว.)
  {
    id: 'math-alg-001',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    type: 'short_answer',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'แบบรูป', 'ลำดับ', 'อนุกรม'],
    source: 'แนวข้อสอบคัดเลือก ม.1 สาธิต มศว. & ห้องพิเศษเบ็ญจะมะฯ',
    targetSchool: 'benchama',
    content: 'พิจารณาลำดับของตัวเลขต่อไปนี้: 3, 7, 13, 21, 31, 43, A จงหาค่าของ A',
    correctAnswer: '57',
    acceptableAnswers: ['57', '๕๗', 'ค่าของ A คือ 57', 'A = 57'],
    solution: {
      summary: 'ค่าของ A คือ 57',
      trickTip: '💡 ดูผลต่างชั้นที่ 1: +4, +6, +8, +10, +12 -> ตัวถัดไปต้องบวกด้วย +14 -> 43 + 14 = 57',
      commonMistake: '⚠️ เด็กอาจบวกเพิ่มทีละ 10 โดยไม่สังเกตว่าผลต่างเพิ่มขึ้นทีละ 2',
      steps: [
        {
          stepNumber: 1,
          title: 'หาผลต่างระหว่างพจน์ที่อยู่ติดกัน',
          content: '• $7 - 3 = 4$\n• $13 - 7 = 6$\n• $21 - 13 = 8$\n• $31 - 21 = 10$\n• $43 - 31 = 12$',
        },
        {
          stepNumber: 2,
          title: 'สังเกตรูปแบบของผลต่าง',
          content: 'ผลต่างเป็นลำดับเลขคู่: $4, 6, 8, 10, 12, ...$\nดังนั้น ผลต่างตัวถัดไปคือ $14$',
        },
        {
          stepNumber: 3,
          title: 'คำนวณหาค่า A',
          content: '$$A = 43 + 14 = 57$$',
        },
      ],
    },
  },

  // 4. โจทย์ปัญหา - กำไร ขาดทุน และการติดราคา (แนว เบ็ญจะมะฯ / มศว.)
  {
    id: 'math-wp-001',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 120,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'ร้อยละ', 'กำไรขาดทุน'],
    source: 'แนวข้อสอบ SMA เบ็ญจะมะมหาราช',
    targetSchool: 'benchama',
    content: 'พ่อค้าติดราคาขายจักรยานคันหนึ่งไว้โดยคิดกำไร 40% แต่ต่อมาพ่อค้าลดราคาให้ผู้ซื้อ 20% จากราคาป้ายที่ติดไว้ สรุปแล้วพ่อค้ายังคงได้กำไรกี่เปอร์เซ็นต์ของทุน?',
    choices: [
      { id: 'c1', label: 'ก', content: '12%', isCorrect: true },
      { id: 'c2', label: 'ข', content: '16%', isCorrect: false },
      { id: 'c3', label: 'ค', content: '20%', isCorrect: false },
      { id: 'c4', label: 'ง', content: '24%', isCorrect: false },
    ],
    solution: {
      summary: 'พ่อค้ายังคงได้กำไร 12% ของราคาทุน',
      trickTip: '💡 สมมติต้นทุน = 100 บาทเสมอ: ติดป้าย 140 บาท ลด 20% คือขาย 80% ของ 140 -> 140 × 0.8 = 112 บาท -> ได้กำไร 112 - 100 = 12%',
      commonMistake: '⚠️ กับดักข้อสอบ: เด็กชอบคิดว่า กำไร 40% ลบ ลดราคา 20% = ได้กำไร 20% (ผิดมหันต์! เพราะลด 20% จากราคาป้าย ไม่ใช่จากทุน)',
      steps: [
        {
          stepNumber: 1,
          title: 'สมมติราคาทุนเท่ากับ 100 บาท',
          content: '• ราคาทุน = $100$ บาท\n• คิดกำไร $40\\%$ $\\rightarrow$ ติดราคาป้าย $= 100 + 40 = 140$ บาท',
        },
        {
          stepNumber: 2,
          title: 'คำนวณราคาขายจริงหลังลด 20%',
          content: 'ลด $20\\%$ จากราคาป้าย $140$ บาท:\n$$\\text{ส่วนลด} = \\frac{20}{100} \\times 140 = 28\\text{ บาท}$$\n$$\\text{ราคาขายจริง} = 140 - 28 = 112\\text{ บาท}$$',
        },
        {
          stepNumber: 3,
          title: 'คิดเปอร์เซ็นต์กำไรเทียบกับราคาทุน',
          content: '$$\\text{กำไร} = 112 - 100 = 12\\text{ บาท}$$\nคิดเป็น **$12\\%$** ของทุน',
        },
      ],
    },
  },

  // 5. เรขาคณิต - พื้นที่แรเงาวงกลมในสี่เหลี่ยมจัตุรัส (แนว จภ. / สสวท.)
  {
    id: 'math-geo-002',
    subjectId: 'math',
    topicId: 'math-geometry',
    topicName: 'เรขาคณิตและมิติสัมพันธ์',
    type: 'short_answer',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 120,
    tags: ['สสวท.', 'จุฬาภรณราชวิทยาลัย', 'พื้นที่แรเงา', 'วงกลม'],
    source: 'แนวข้อสอบ จุฬาภรณราชวิทยาลัย มุกดาหาร (รอบ 1 & 2)',
    targetSchool: 'chulabhorn',
    content: 'รูปสี่เหลี่ยมจัตุรัสรูปหนึ่งมีความยาวด้านละ 14 เซนติเมตร แนบในด้วยวงกลมที่มีขนาดใหญ่ที่สุด จงหาพื้นที่ส่วนที่อยู่นอกวงกลมแต่อยู่ในรูปสี่เหลี่ยมจัตุรัส (กำหนดให้ $\\pi = \\frac{22}{7}$)',
    correctAnswer: '42',
    acceptableAnswers: ['42', '๔๒', '42 ตร.ซม.', '42 ตารางเซนติเมตร'],
    solution: {
      summary: 'พื้นที่ส่วนที่เหลือคือ 42 ตารางเซนติเมตร',
      trickTip: '💡 สูตรลัดพื้นที่มุมทั้ง 4 รอบวงกลมในจัตุรัสด้าน $a$: $\\text{พื้นที่} = \\frac{6}{7} \\times r^2 = \\frac{6}{7} \\times 7^2 = 6 \\times 7 = 42$ ตร.ซม.',
      commonMistake: '⚠️ เด็กมักใช้รัศมี $r = 14$ ซม. ทั้งที่ความยาวด้านคือเส้นผ่านศูนย์กลาง ดังนั้นรัศมีจริงคือ $r = 7$ ซม.',
      steps: [
        {
          stepNumber: 1,
          title: 'หาพื้นที่ของรูปสี่เหลี่ยมจัตุรัส',
          content: '$$\\text{พื้นที่สี่เหลี่ยม} = \\text{ด้าน} \\times \\text{ด้าน} = 14 \\times 14 = 196\\text{ ตารางเซนติเมตร}$$',
        },
        {
          stepNumber: 2,
          title: 'หารัศมีและพื้นที่ของวงกลมที่แนบใน',
          content: 'เส้นผ่านศูนย์กลางวงกลม $= 14$ ซม. $\\rightarrow$ รัศมี $r = 7$ ซม.\n$$\\text{พื้นที่วงกลม} = \\pi r^2 = \\frac{22}{7} \\times 7 \\times 7 = 154\\text{ ตารางเซนติเมตร}$$',
        },
        {
          stepNumber: 3,
          title: 'หาพื้นที่ส่วนที่เหลือ (พื้นที่สี่เหลี่ยม - พื้นที่วงกลม)',
          content: '$$\\text{พื้นที่ส่วนเหลือ} = 196 - 154 = 42\\text{ ตารางเซนติเมตร}$$',
        },
      ],
    },
  },

  // 6. พีชคณิต - ระบบสมการขาและหัวสัตว์ (แนว มศว. / เบ็ญจะมะฯ)
  {
    id: 'math-alg-002',
    subjectId: 'math',
    topicId: 'math-algebra',
    topicName: 'พีชคณิตและสมการเชิงซ้อน',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'สมการ', 'โจทย์ขาเป็ดหมู'],
    source: 'แนวข้อสอบเข้า ม.1 โรงเรียนเบ็ญจะมะมหาราช',
    targetSchool: 'benchama',
    content: 'ในฟาร์มแห่งหนึ่งมีเป็ดและวัวรวมกัน 35 ตัว เมื่อนับขารวมกันได้ 110 ขา จงหาว่าในฟาร์มนี้มีวัวมากกว่าเป็ดกี่ตัว?',
    choices: [
      { id: 'c1', label: 'ก', content: '5 ตัว', isCorrect: true },
      { id: 'c2', label: 'ข', content: '10 ตัว', isCorrect: false },
      { id: 'c3', label: 'ค', content: '15 ตัว', isCorrect: false },
      { id: 'c4', label: 'ง', content: '20 ตัว', isCorrect: false },
    ],
    solution: {
      summary: 'มีวัว 20 ตัว และเป็ด 15 ตัว ดังนั้นวัวมากกว่าเป็ด 5 ตัว',
      trickTip: '💡 วิธีคิดเร็ว: ถ้าสัตว์ทั้ง 35 ตัวเป็นเป็ดหมด จะมี $35 \\times 2 = 70$ ขา แต่มีจริง 110 ขา ขาเกินมา $110 - 70 = 40$ ขา วัวแต่ละตัวมีขาเกินมา $4 - 2 = 2$ ขา $\\rightarrow$ จำนวนวัว $= 40 \\div 2 = 20$ ตัว',
      commonMistake: '⚠️ โจทย์ถาม "วัวมากกว่าเป็ดกี่ตัว" ไม่ได้ถามจำนวนวัว ถ้าตอบ 20 จะผิดทันที!',
      steps: [
        {
          stepNumber: 1,
          title: 'กำหนดตัวแปรและตั้งระบบสมการ',
          content: 'ให้จำนวนเป็ด $= x$ ตัว, จำนวนวัว $= y$ ตัว\n1) $x + y = 35$\n2) เป็ดมี 2 ขา, วัวมี 4 ขา $\\rightarrow 2x + 4y = 110$',
        },
        {
          stepNumber: 2,
          title: 'แก้สมการหาค่า x และ y',
          content: 'นำสมการที่ 1 คูณ 2: $2x + 2y = 70$\nนำสมการที่ 2 ลบ: $(2x + 4y) - (2x + 2y) = 110 - 70$\n$$2y = 40 \\implies y = 20\\text{ ตัว (วัว)}$$\n$$x = 35 - 20 = 15\\text{ ตัว (เป็ด)}$$',
        },
        {
          stepNumber: 3,
          title: 'หาผลต่างระหว่างจำนวนวัวกับเป็ด',
          content: '$$\\text{ผลต่าง} = 20 - 15 = 5\\text{ ตัว}$$',
        },
      ],
    },
  },

  // 7. อัตนัยแสดงวิธีทำ - งานและการทำงานร่วมกัน (แนว จภ. รอบสอง)
  {
    id: 'math-long-001',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    type: 'long_answer',
    difficulty: 'olympiad',
    points: 5,
    timeEstimateSeconds: 180,
    tags: ['สสวท.', 'จุฬาภรณราชวิทยาลัย', 'อัตนัย', 'การทำงานร่วมกัน'],
    source: 'แนวข้อสอบอัตนัยรอบสอง รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย',
    targetSchool: 'chulabhorn',
    content: 'กานต์คนเดียวทำงานชิ้นหนึ่งเสร็จในเวลา 6 วัน ขวัญคนเดียวทำงานชิ้นเดียวกันเสร็จในเวลา 12 วัน ถ้าทั้งสองคนช่วยกันทำงานชิ้นนี้ จะทำงานเสร็จภายในกี่วัน? (จงแสดงวิธีทำอย่างละเอียด)',
    correctAnswer: '4 วัน',
    acceptableAnswers: ['4 วัน', '4', '๔ วัน', '๔', 'เสร็จใน 4 วัน'],
    solution: {
      summary: 'ทั้งสองคนช่วยกันทำงานจะเสร็จใน 4 วัน',
      trickTip: '💡 สูตรลัด 2 คนช่วยกันทำงาน: $\\text{เวลา} = \\frac{\\text{ผลคูณ}}{\\text{ผลบวก}} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4$ วัน',
      commonMistake: '⚠️ เด็กมักเอา $6 + 12 = 18$ วัน หรือเอา $(6+12)/2 = 9$ วัน ซึ่งผิดหลัก เพราะยิ่งคนเยอะขึ้นเวลาต้องน้อยลง',
      steps: [
        {
          stepNumber: 1,
          title: 'คิดอัตราการทำงานใน 1 วันของแต่ละคน',
          content: '• กานต์ 1 วันทำงานได้ $\\frac{1}{6}$ ของงานทั้งหมด\n• ขวัญ 1 วันทำงานได้ $\\frac{1}{12}$ ของงานทั้งหมด',
        },
        {
          stepNumber: 2,
          title: 'คิดอัตราการทำงานร่วมกันใน 1 วัน',
          content: '$$\\text{งานที่ทำได้ใน 1 วัน} = \\frac{1}{6} + \\frac{1}{12} = \\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}\\text{ ของงาน}$$',
        },
        {
          stepNumber: 3,
          title: 'สรุปเวลาที่ใช้ทำงานจนเสร็จสมบูรณ์',
          content: 'ใน 1 วัน ทำได้ $\\frac{1}{4}$ ของงาน\nดังนั้น งาน 1 ชิ้นเต็มจะใช้เวลา $1 \\div \\frac{1}{4} = 4$ วัน ✅',
        },
      ],
    },
  },

  // 8. สถิติและความน่าจะเป็น - แผนภูมิรูปวงกลม (แนว มศว.)
  {
    id: 'math-stat-001',
    subjectId: 'math',
    topicId: 'math-statistics',
    topicName: 'สถิติและความน่าจะเป็น',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'สถิติ', 'แผนภูมิวงกลม', 'มุม'],
    source: 'แนวข้อสอบเข้า ม.1 โรงเรียนเบ็ญจะมะมหาราช & สาธิต มศว.',
    targetSchool: 'benchama',
    content: 'นักเรียนชั้น ป.6 จำนวน 120 คน เลือกชมรมต่างๆ โดยแสดงด้วยแผนภูมิรูปวงกลม ถ้าชมรมคณิตศาสตร์มีขนาดมุมที่จุดศูนย์กลาง 108 องศา จะมีนักเรียนเลือกชมรมคณิตศาสตร์กี่คน?',
    choices: [
      { id: 'c1', label: 'ก', content: '24 คน', isCorrect: false },
      { id: 'c2', label: 'ข', content: '30 คน', isCorrect: false },
      { id: 'c3', label: 'ค', content: '36 คน', isCorrect: true },
      { id: 'c4', label: 'ง', content: '40 คน', isCorrect: false },
    ],
    solution: {
      summary: 'มีนักเรียนเลือกชมรมคณิตศาสตร์ 36 คน',
      trickTip: '💡 มุม 108° จาก 360° คือ $\\frac{108}{360} = \\frac{3}{10} = 30\\%$ ของทั้งหมด -> $120 \\times 0.30 = 36$ คน',
      commonMistake: '⚠️ ต้องจำว่ามุมรอบจุดศูนย์กลางของวงกลมรวมกันคือ 360 องศา ไม่ใช่ 100 องศา',
      steps: [
        {
          stepNumber: 1,
          title: 'หาสัดส่วนมุมของชมรมคณิตศาสตร์ต่อวงกลมทั้งหมด',
          content: 'วงกลมมีมุมทั้งหมด $360^\\circ$\nสัดส่วนชมรมคณิตศาสตร์ $= \\frac{108}{360} = \\frac{3}{10}$',
        },
        {
          stepNumber: 2,
          title: 'คำนวณจำนวนนักเรียนจากจำนวนทั้งหมด 120 คน',
          content: '$$\\text{จำนวนนักเรียน} = \\frac{3}{10} \\times 120 = 36\\text{ คน}$$',
        },
      ],
    },
  },

  // 9. เศษส่วนซ้อนและพีชคณิต - ลำดับเศษส่วนเทเลสโคปิก (แนว สสวท. / จภ.)
  {
    id: 'math-arith-002',
    subjectId: 'math',
    topicId: 'math-arithmetic',
    topicName: 'จำนวนและการคำนวณ (ห.ร.ม. / ค.ร.น. / เศษส่วน)',
    type: 'short_answer',
    difficulty: 'olympiad',
    points: 4,
    timeEstimateSeconds: 120,
    tags: ['สสวท.', 'จุฬาภรณราชวิทยาลัย', 'เศษส่วนเทเลสโคปิก', 'เทคนิคคิดลัด'],
    source: 'แนวข้อสอบ สสวท. & คัดเลือก จภ.มุกดาหาร',
    targetSchool: 'chulabhorn',
    content: 'จงหาค่าของผลบวกต่อไปนี้: $\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + ... + \\frac{1}{19 \\times 20}$ (ตอบเป็นเศษส่วนอย่างต่ำ เช่น a/b)',
    correctAnswer: '19/20',
    acceptableAnswers: ['19/20', '0.95', '๑๙/๒๐'],
    solution: {
      summary: 'ผลบวกมีค่าเท่ากับ 19/20',
      trickTip: '💡 เทคนิคเศษส่วน Telescoping: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ ผลรวมพจน์กลางจะหักล้างกันหมด เหลือเพียง $\\text{พจน์แรก} - \\text{พจน์สุดท้าย} = 1 - \\frac{1}{20} = \\frac{19}{20}$',
      commonMistake: '⚠️ การหา ค.ร.น. ของส่วนทั้งหมดจะเสียเวลามากและคำนวณไม่ทัน ต้องใช้สูตรแยกส่วน',
      steps: [
        {
          stepNumber: 1,
          title: 'แยกแต่ละพจน์ด้วยสมบัติ Telescoping',
          content: '• $\\frac{1}{1 \\times 2} = 1 - \\frac{1}{2}$\n• $\\frac{1}{2 \\times 3} = \\frac{1}{2} - \\frac{1}{3}$\n• $\\frac{1}{3 \\times 4} = \\frac{1}{3} - \\frac{1}{4}$\n• ...\n• $\\frac{1}{19 \\times 20} = \\frac{1}{19} - \\frac{1}{20}$',
        },
        {
          stepNumber: 2,
          title: 'รวมพจน์ทั้งหมดเข้าด้วยกัน',
          content: '$$(1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + (\\frac{1}{3} - \\frac{1}{4}) + ... + (\\frac{1}{19} - \\frac{1}{20})$$',
        },
        {
          stepNumber: 3,
          title: 'ตัดทอนพจน์ที่หักล้างกัน',
          content: '$$= 1 - \\frac{1}{20} = \\frac{19}{20}$$',
        },
      ],
    },
  },

  // 10. อัตราเร็วและระยะทาง (แนว มศว.)
  {
    id: 'math-wp-002',
    subjectId: 'math',
    topicId: 'math-word-problems',
    topicName: 'โจทย์ปัญหาและการประยุกต์',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 3,
    timeEstimateSeconds: 120,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'อัตราเร็ว', 'การเคลื่อนที่'],
    source: 'แนวข้อสอบ ม.1 โรงเรียนเบ็ญจะมะมหาราช',
    targetSchool: 'benchama',
    content: 'เมือง A และเมือง B อยู่ห่างกัน 180 กิโลเมตร รถยนต์คันหนึ่งออกเดินทางจากเมือง A ไปเมือง B ด้วยอัตราเร็ว 60 กิโลเมตรต่อชั่วโมง ในเวลาเดียวกัน รถยนต์อีกคันออกเดินทางจากเมือง B ไปเมือง A ด้วยอัตราเร็ว 30 กิโลเมตรต่อชั่วโมง รถทั้งสองคันจะแล่นสวนทางกันหลังจากออกเดินทางไปแล้วกี่ชั่วโมง?',
    choices: [
      { id: 'c1', label: 'ก', content: '1.5 ชั่วโมง', isCorrect: false },
      { id: 'c2', label: 'ข', content: '2 ชั่วโมง', isCorrect: true },
      { id: 'c3', label: 'ค', content: '2.5 ชั่วโมง', isCorrect: false },
      { id: 'c4', label: 'ง', content: '3 ชั่วโมง', isCorrect: false },
    ],
    solution: {
      summary: 'รถทั้งสองคันจะแล่นสวนทางกันหลังจากเดินทางไปแล้ว 2 ชั่วโมง',
      trickTip: '💡 วิ่งสวนทางกัน อัตราเร็วสัมพัทธ์รวมกัน: $v = 60 + 30 = 90$ กม./ชม. -> เวลา $= \\frac{s}{v} = \\frac{180}{90} = 2$ ชั่วโมง',
      commonMistake: '⚠️ ถ้ารถวิ่งตามกันถึงจะใช้อัตราเร็วลบกัน แต่วิ่งสวนกันต้องนำอัตราเร็วมารวมกัน',
      steps: [
        {
          stepNumber: 1,
          title: 'หาอัตราเร็วรวมในการเข้าหากัน (Relative Speed)',
          content: 'รถทั้งสองวิ่งเข้าหากัน: $v_{\\text{รวม}} = 60 + 30 = 90\\text{ กิโลเมตร/ชั่วโมง}$',
        },
        {
          stepNumber: 2,
          title: 'คำนวณเวลาที่ใช้จนพบกัน',
          content: '$$t = \\frac{s}{v} = \\frac{180}{90} = 2\\text{ ชั่วโมง}$$',
        },
      ],
    },
  },
];
