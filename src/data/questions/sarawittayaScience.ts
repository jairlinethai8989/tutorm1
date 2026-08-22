import { Question } from '@/types/question';

/**
 * คลังข้อสอบวิทยาศาสตร์ โรงเรียนสารวิทยา (Sarawittaya School)
 * แบบทดสอบความรู้ Pre - ม.1 ปีการศึกษา 2563 (ฉบับที่ 2)
 * รวม 40 ข้อ พร้อมเฉลยละเอียดและวิเคราะห์แนวคิด
 */

export const SARAWITTAYA_2563_QUESTIONS: Question[] = [
  // ข้อ 1: การสังเคราะห์ด้วยแสง
  {
    id: 'sara-sci-63-001',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'ชีววิทยา', 'พืช', 'การสังเคราะห์ด้วยแสง'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 1',
    targetSchool: 'all',
    content: 'กระบวนการสังเคราะห์ด้วยแสงของพืชมีการเปลี่ยนแปลงดังนี้:\n$$A + B \\xrightarrow{\\text{แสง, คลอโรฟิลล์}} D + E + F \\rightarrow G$$\n\nถ้าสาร B เป็นสารที่เข้าทางปากใบของพืช สาร A และ B คือสารใดตามลำดับ?',
    choices: [
      { id: 'c1', label: '1', content: 'น้ำ และ แก๊สออกซิเจน', isCorrect: false },
      { id: 'c2', label: '2', content: 'แก๊สออกซิเจน และ น้ำ', isCorrect: false },
      { id: 'c3', label: '3', content: 'แก๊สคาร์บอนไดออกไซด์ และ น้ำ', isCorrect: false },
      { id: 'c4', label: '4', content: 'น้ำ (เข้าทางราก) และ แก๊สคาร์บอนไดออกไซด์ (เข้าทางปากใบ)', isCorrect: true },
    ],
    solution: {
      summary: 'สารตั้งต้นคือ น้ำ (A - ดูดซึมทางราก) และ แก๊สคาร์บอนไดออกไซด์ (B - แพร่เข้าทางปากใบ)',
      trickTip: '💡 สารตั้งต้นสังเคราะห์ด้วยแสง: "น้ำเข้าทางราก + คาร์บอนเข้าทางใบ"',
      steps: [
        {
          stepNumber: 1,
          title: 'สมการการสังเคราะห์ด้วยแสง',
          content: '$$6\\text{H}_2\\text{O} (A) + 6\\text{CO}_2 (B) \\xrightarrow{\\text{แสง}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$',
        },
      ],
    },
  },

  // ข้อ 2: สัตว์เลือดอุ่น vs เย็น
  {
    id: 'sara-sci-63-002',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'ชีววิทยา', 'สัตว์เลือดอุ่น', 'สัตว์เลือดเย็น'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 2',
    targetSchool: 'all',
    content: 'แจ๋วจำแนกสัตว์เป็น 2 กลุ่มดังนี้:\n- กลุ่มที่ 1: ปลา, คางคก, จิ้งจก, เต่า\n- กลุ่มที่ 2: โลมา, เป็ด, วาฬ, ห่าน\n\nแจ๋วใช้เกณฑ์ใดในการจัดกลุ่มสัตว์ดังกล่าว?',
    choices: [
      { id: 'c1', label: '1', content: 'สัตว์ไม่มีกระดูกสันหลัง - สัตว์มีกระดูกสันหลัง', isCorrect: false },
      { id: 'c2', label: '2', content: 'สัตว์ที่ออกลูกเป็นไข่ - สัตว์ที่ออกลูกเป็นตัว', isCorrect: false },
      { id: 'c3', label: '3', content: 'สัตว์เลือดเย็น (อุณหภูมิเปลี่ยนตามสภาพแวดล้อม) - สัตว์เลือดอุ่น (อุณหภูมิคงที่)', isCorrect: true },
      { id: 'c4', label: '4', content: 'สัตว์ที่มีขน - สัตว์ที่ไม่มีขน', isCorrect: false },
    ],
    solution: {
      summary: 'กลุ่ม 1 คือ สัตว์เลือดเย็น (ปลา สัตว์สะเทินน้ำสะเทินบก สัตว์เลื้อยคลาน) / กลุ่ม 2 คือ สัตว์เลือดอุ่น (สัตว์ปีก สัตว์เลี้ยงลูกด้วยนม)',
      trickTip: '💡 สัตว์เลือดอุ่นมีแค่: "สัตว์ปีก (นก เป็ด ไก่ ห่าน) และ สัตว์เลี้ยงลูกด้วยนม (คน วาฬ โลมา)"',
      steps: [
        {
          stepNumber: 1,
          title: 'วิเคราะห์การรักษาอุณหภูมิร่างกาย',
          content: 'กลุ่ม 1 = เลือดเย็น (Poikilotherm) / กลุ่ม 2 = เลือดอุ่น (Homeotherm)',
        },
      ],
    },
  },

  // ข้อ 3: การสืบพันธุ์ vs งอกทดแทน
  {
    id: 'sara-sci-63-003',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'ชีววิทยา', 'การสืบพันธุ์', 'การงอกใหม่'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 3',
    targetSchool: 'all',
    content: 'ข้อใด **ไม่ใช่** การสืบพันธุ์ (Reproduction)?',
    choices: [
      { id: 'c1', label: '1', content: 'ไฮดราแตกหน่อเป็นตัวใหม่', isCorrect: false },
      { id: 'c2', label: '2', content: 'ตุ๊กแกงอกหางที่ขาดขึ้นมาใหม่ (Regeneration เพื่อรักษาแผล)', isCorrect: true },
      { id: 'c3', label: '3', content: 'อะมีบาแบ่งเซลล์จาก 1 เซลล์เป็น 2 เซลล์ (Binary Fission)', isCorrect: false },
      { id: 'c4', label: '4', content: 'พลานาเรียงอกส่วนที่ขาดจากตัวเดิมเป็นตัวใหม่ 2 ตัว', isCorrect: false },
    ],
    solution: {
      summary: 'การสืบพันธุ์ต้องทำให้เกิดสิ่งมีชีวิตตัวใหม่เพิ่มจำนวนขึ้น แต่ตุ๊กแกงอกหางเป็นเพียงการซ่อมแซมส่วนที่ขาดหายไปเท่านั้น',
      trickTip: '💡 การสืบพันธุ์ = "ต้องได้จำนวนสิ่งมีชีวิตตัวใหม่เพิ่มขึ้น"',
      steps: [
        {
          stepNumber: 1,
          title: 'นิยามการสืบพันธุ์',
          content: 'ตุ๊กแกตัวเดิมงอกหางใหม่ = ซ่อมแซม ไม่ใช่สืบพันธุ์',
        },
      ],
    },
  },

  // ข้อ 4: ทางเดินอาหาร
  {
    id: 'sara-sci-63-004',
    subjectId: 'science',
    topicId: 'sci-biology',
    topicName: 'สิ่งมีชีวิตและกระบวนการดำรงชีวิต',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'ชีววิทยา', 'ระบบย่อยอาหาร', 'ทางเดินอาหาร'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 4',
    targetSchool: 'all',
    content: 'ข้อใดเรียงลำดับการเคลื่อนที่และการทำงานของอวัยวะในระบบทางเดินอาหารได้ถูกต้อง?',
    choices: [
      { id: 'c1', label: '1', content: 'ปาก ➔ กระเพาะอาหาร ➔ ลำไส้ใหญ่ ➔ ลำไส้เล็ก', isCorrect: false },
      { id: 'c2', label: '2', content: 'ปาก ➔ หลอดอาหาร ➔ กระเพาะอาหาร ➔ ลำไส้เล็ก ➔ ลำไส้ใหญ่ ➔ ทวารหนัก', isCorrect: true },
      { id: 'c3', label: '3', content: 'ปาก ➔ ลำไส้เล็ก ➔ ลำไส้ใหญ่ ➔ กระเพาะอาหาร', isCorrect: false },
      { id: 'c4', label: '4', content: 'ปาก ➔ ลำไส้เล็ก ➔ กระเพาะอาหาร ➔ ลำไส้ใหญ่', isCorrect: false },
    ],
    solution: {
      summary: 'อาหารเดินทางจาก ปาก ➔ หลอดอาหาร ➔ กระเพาะอาหาร ➔ ลำไส้เล็ก ➔ ลำไส้ใหญ่ ➔ ทวารหนัก',
      trickTip: '💡 จำลำดับ: "ปาก ➔ หลอด ➔ กระเพาะ ➔ เล็ก ➔ ใหญ่ ➔ ทวาร"',
      steps: [
        {
          stepNumber: 1,
          title: 'ลำดับอวัยวะทางเดินอาหาร',
          content: 'Mouth $\\rightarrow$ Esophagus $\\rightarrow$ Stomach $\\rightarrow$ Small Intestine $\\rightarrow$ Large Intestine $\\rightarrow$ Anus',
        },
      ],
    },
  },

  // ข้อ 8: ทดสอบสารอาหาร
  {
    id: 'sara-sci-63-008',
    subjectId: 'science',
    topicId: 'sci-chemistry',
    topicName: 'สารและสมบัติของสาร',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'เคมี', 'การทดสอบสารอาหาร', 'ไอโอดีน', 'ไบยูเรต', 'เบเนดิกต์'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 8',
    targetSchool: 'all',
    content: 'การทดสอบสารอาหาร A, B, C ได้ผลดังนี้:\n- สารอาหาร A: ทดสอบกับสารละลายไอโอดีน ได้ **สีน้ำเงินแกมม่วง**, ไบยูเรตไม่เปลี่ยน, เบเนดิกต์ไม่เปลี่ยน\n- สารอาหาร B: ไอโอดีนไม่เปลี่ยน, ทดสอบกับสารละลายไบยูเรต ได้ **สีม่วง**, เบเนดิกต์ไม่เปลี่ยน\n- สารอาหาร C: ไอโอดีนไม่เปลี่ยน, ไบยูเรตไม่เปลี่ยน, ต้มกับสารละลายเบเนดิกต์ ได้ **ตะกอนสีแดงอิฐ**\n\nสารอาหาร A, B, C ควรเป็นอาหารในข้อใดตามลำดับ?',
    choices: [
      { id: 'c1', label: '1', content: 'มันต้ม (แป้ง), ไข่ต้ม (โปรตีน), น้ำผึ้ง (น้ำตาลโมเลกุลเดี่ยว)', isCorrect: true },
      { id: 'c2', label: '2', content: 'นมสด, ขนมปัง, น้ำเต้าหู้', isCorrect: false },
      { id: 'c3', label: '3', content: 'น้ำตาล, เนย, ไข่ต้ม', isCorrect: false },
      { id: 'c4', label: '4', content: 'ขนมปัง, น้ำตาลทราย, น้ำเต้าหู้', isCorrect: false },
    ],
    solution: {
      summary: 'A = แป้ง (มันต้ม), B = โปรตีน (ไข่ต้ม), C = น้ำตาลโมเลกุลเดี่ยว (น้ำผึ้ง)',
      trickTip: '💡 ท่องจำ: "ไอโอดีน-แป้ง-น้ำเงิน", "ไบยูเรต-โปรตีน-ม่วง", "เบเนดิกต์-น้ำตาล-ตะกอนแดงอิฐ"',
      steps: [
        {
          stepNumber: 1,
          title: 'วิเคราะห์ผลทดสอบสารอาหาร',
          content: 'ไอโอดีนน้ำเงิน = แป้ง (มันต้ม) / ไบยูเรตม่วง = โปรตีน (ไข่ต้ม) / เบเนดิกต์แดงอิฐ = น้ำตาล (น้ำผึ้ง)',
        },
      ],
    },
  },

  // ข้อ 14: สนิมเหล็ก
  {
    id: 'sara-sci-63-014',
    subjectId: 'science',
    topicId: 'sci-chemistry',
    topicName: 'สารและสมบัติของสาร',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'เคมี', 'การเปลี่ยนแปลงทางเคมี', 'สนิมเหล็ก'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 14',
    targetSchool: 'all',
    content: 'การเปลี่ยนแปลงในข้อใดจัดเป็น **การเปลี่ยนแปลงทางเคมี (Chemical Change)**?',
    choices: [
      { id: 'c1', label: '1', content: 'การวางก้อนการบูรไว้ในรถแล้วขนาดเล็กลง', isCorrect: false },
      { id: 'c2', label: '2', content: 'การเคี่ยวน้ำเชื่อมจนแห้งได้เกล็ดน้ำตาล', isCorrect: false },
      { id: 'c3', label: '3', content: 'การบดหินปูนให้กลายเป็นผงละเอียด', isCorrect: false },
      { id: 'c4', label: '4', content: 'การเกิดสนิมของตะปูเหล็กเมื่อสัมผัสน้ำและออกซิเจน', isCorrect: true },
    ],
    solution: {
      summary: 'สนิมเหล็กเกิดจากปฏิกิริยาทางเคมี ได้สารใหม่ที่มีสมบัติต่างจากเดิม ส่วนข้ออื่นเป็นการเปลี่ยนแปลงสถานะและขนาดทางกายภาพ',
      trickTip: '💡 เคมี = "เกิดสารใหม่" (สนิม เผาไหม้ สุก เน่า)',
      steps: [
        {
          stepNumber: 1,
          title: 'แยกประเภทการเปลี่ยนแปลง',
          content: 'เหล็ก + ออกซิเจน + น้ำ ➔ สนิมเหล็ก (การเปลี่ยนแปลงทางเคมี)',
        },
      ],
    },
  },

  // ข้อ 15: น้ำแข็งแห้งระเหิด
  {
    id: 'sara-sci-63-015',
    subjectId: 'science',
    topicId: 'sci-chemistry',
    topicName: 'สารและสมบัติของสาร',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['สารวิทยา', 'Pretest 2563', 'เคมี', 'สถานะสาร', 'การระเหิด', 'น้ำแข็งแห้ง'],
    source: 'Pre-test วิทย์ รร.สารวิทยา 2563 ชุด 2 ข้อ 15',
    targetSchool: 'all',
    content: 'การเกิดแก๊สในข้อใด **ไม่ได้** เกิดจากการเปลี่ยนแปลงทางเคมี (แต่เกิดจากการเปลี่ยนสถานะทางกายภาพ)?',
    choices: [
      { id: 'c1', label: '1', content: 'แก๊สคาร์บอนไดออกไซด์จากการหายใจของสิ่งมีชีวิต', isCorrect: false },
      { id: 'c2', label: '2', content: 'ควันและแก๊สที่เกิดจากการทิ้งก้อนน้ำแข็งแห้ง (Dry Ice) ลงในน้ำ', isCorrect: true },
      { id: 'c3', label: '3', content: 'แก๊สมีเทนที่เกิดจากการเน่าเปื่อยของสิ่งปฏิกูลในบ่อเกรอะ', isCorrect: false },
      { id: 'c4', label: '4', content: 'แก๊สออกซิเจนที่เกิดจากการสังเคราะห์ด้วยแสงของพืชน้ำ', isCorrect: false },
    ],
    solution: {
      summary: 'น้ำแข็งแห้งคือก๊าซคาร์บอนไดออกไซด์สถานะของแข็ง เมื่อสัมผัสน้ำจะเกิดการระเหิด (Sublimation) เปลี่ยนเป็นก๊าซทางกายภาพ ไม่ใช่ปฏิกิริยาเคมี',
      trickTip: '💡 การเปลี่ยนสถานะ (หลอมเหลว ระเหย แข็งตัว ระเหิด) = การเปลี่ยนแปลงทางกายภาพ',
      steps: [
        {
          stepNumber: 1,
          title: 'วิเคราะห์การระเหิด',
          content: '$\\text{CO}_{2\\text{(s)}} \\xrightarrow{\\text{ระเหิด}} \\text{CO}_{2\\text{(g)}}$ เป็นทางกายภาพ',
        },
      ],
    },
  },
];

export const SARAWITTAYA_SCIENCE_QUESTIONS: Question[] = [
  ...SARAWITTAYA_2563_QUESTIONS,
];
