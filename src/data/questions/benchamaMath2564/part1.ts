import { Question } from "@/types/question";

export const BENCHAMA_MATH_2564_PART1: Question[] = [
  {
    "id": "bm-m64-001",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "กำหนดให้ $[10] \\xrightarrow{+4} [14] \\xrightarrow{\\div 2} [7] \\xrightarrow{\\times 3} [21]$ หมายถึง ให้นำ $10 + 4$ ได้ 14 นำมาหารด้วย 2 ได้ 7 แล้วนำมาคูณกับ 3 ได้ 21 จงพิจารณาแผนภาพต่อไปนี้\nข้อใดกล่าวได้ถูกต้อง",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q1.svg",
    "choices": [
      {
        "id": "bm-m64-001-c1",
        "label": "1",
        "content": "$X + Y = 25$",
        "isCorrect": true
      },
      {
        "id": "bm-m64-001-c2",
        "label": "2",
        "content": "$X - Y = 5$",
        "isCorrect": false
      },
      {
        "id": "bm-m64-001-c3",
        "label": "3",
        "content": "$X \\times Y = 180$",
        "isCorrect": false
      },
      {
        "id": "bm-m64-001-c4",
        "label": "4",
        "content": "$X \\div Y = \\frac{4}{5}$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คิดย้อนกลับจากผลลัพธ์ 32 จะได้ความสัมพันธ์ $X + Y = 25$",
      "correctChoiceId": "bm-m64-001-c1",
      "steps": [
        "จากผลลัพธ์ปลายทาง 32 ย้อนกลับก่อน $\\times 8$ คือ $32 \\div 8 = 4$",
        "ก่อน $\\div 5$ คือ $4 \\times 5 = 20$ ดังนั้นค่าในกล่องรวมเท่ากับ 20",
        "พิจารณาความสัมพันธ์ของค่าที่เข้าสู่กล่องรวมจากสาย $X$ และ $Y$ จะได้ $X + Y = 25$ เป็นคำตอบที่ถูกต้อง"
      ]
    }
  },
  {
    "id": "bm-m64-002",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "กำหนดให้ $A = 2 + 8 \\times 9 \\div 6 + 25 - 14$ แล้ว $\\frac{2A + 19}{3}$ มีค่าตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-002-c1",
        "label": "1",
        "content": "17",
        "isCorrect": false
      },
      {
        "id": "bm-m64-002-c2",
        "label": "2",
        "content": "19",
        "isCorrect": false
      },
      {
        "id": "bm-m64-002-c3",
        "label": "3",
        "content": "21",
        "isCorrect": false
      },
      {
        "id": "bm-m64-002-c4",
        "label": "4",
        "content": "23",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "คำนวณตามลำดับการดำเนินการ ได้ $A = 25$ แทนค่าได้ 23",
      "correctChoiceId": "bm-m64-002-c4",
      "steps": [
        "คำนวณการคูณและหารก่อน: $8 \\times 9 \\div 6 = 72 \\div 6 = 12$",
        "หาค่า $A = 2 + 12 + 25 - 14 = 25$",
        "แทนค่า $\\frac{2(25) + 19}{3} = \\frac{50 + 19}{3} = \\frac{69}{3} = 23$"
      ]
    }
  },
  {
    "id": "bm-m64-003",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "โรงเรียนแห่งหนึ่งมีนักเรียนจำนวน 121 คน ครูให้นักเรียนเข้าแถวหนึ่งแถวเรียงตั้งแต่คนที่ 1 ถึงคนที่ 121 เพื่อรับสิ่งของที่ครู 3 คนจะเป็นคนแจก สิ่งของมีดังนี้ ขนม 73 ชิ้น ของเล่น 61 ชิ้น และตุ๊กตา 31 ชิ้น\nครูคนที่ 1 แจกขนมให้นักเรียนคนละ 1 ชิ้น เรียงตามลำดับ โดยเริ่มจากคนที่ 1 ไปเรื่อย ๆ จนขนมหมด\nครูคนที่ 2 แจกของเล่นให้นักเรียนคนละ 1 ชิ้น เรียงตามลำดับโดยเริ่มแจกจากคนสุดท้ายมาเรื่อย ๆ จนของเล่นหมด\nครูคนที่ 3 แจกตุ๊กตา ให้นักเรียนคนละ 1 ชิ้น เรียงตามลำดับ โดยเริ่มจากคนที่ 45 เป็นต้นไป จนตุ๊กตาหมด\nมีนักเรียนกี่คนที่ได้รับสิ่งของเพียงสองอย่างเท่านั้น",
    "choices": [
      {
        "id": "bm-m64-003-c1",
        "label": "1",
        "content": "17 คน",
        "isCorrect": false
      },
      {
        "id": "bm-m64-003-c2",
        "label": "2",
        "content": "18 คน",
        "isCorrect": true
      },
      {
        "id": "bm-m64-003-c3",
        "label": "3",
        "content": "19 คน",
        "isCorrect": false
      },
      {
        "id": "bm-m64-003-c4",
        "label": "4",
        "content": "20 คน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หาช่วงของนักเรียนที่ได้รับสิ่งของแต่ละชนิด แล้วนับคนที่ได้รับเพียง 2 ชนิด ได้ 18 คน",
      "correctChoiceId": "bm-m64-003-c2",
      "steps": [
        "ขนม (73 ชิ้น): คนที่ 1 ถึง 73",
        "ของเล่น (61 ชิ้น): จากคนสุดท้ายย้อนมา คือคนที่ $121 - 61 + 1 = 61$ ถึง 121",
        "ตุ๊กตา (31 ชิ้น): คนที่ 45 ถึง $45 + 31 - 1 = 75$",
        "คนที่ได้รับ ขนม และ ตุ๊กตา เท่านั้น: คนที่ 45 ถึง 60 มี $60 - 45 + 1 = 16$ คน",
        "คนที่ได้รับ ของเล่น และ ตุ๊กตา เท่านั้น: คนที่ 74 ถึง 75 มี $75 - 74 + 1 = 2$ คน",
        "รวมมีนักเรียนที่ได้รับสิ่งของเพียง 2 อย่าง $= 16 + 2 = 18$ คน"
      ]
    }
  },
  {
    "id": "bm-m64-004",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการ",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 2,
    "timeEstimateSeconds": 100,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ให้ $x$ เป็นจำนวนนับที่เป็นคำตอบของสมการ $\\frac{23 - x}{93} = \\frac{42 - x}{74} + 1 - \\frac{x}{116}$ แล้ว $2x - 7$ มีค่าตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-004-c1",
        "label": "1",
        "content": "225",
        "isCorrect": true
      },
      {
        "id": "bm-m64-004-c2",
        "label": "2",
        "content": "232",
        "isCorrect": false
      },
      {
        "id": "bm-m64-004-c3",
        "label": "3",
        "content": "239",
        "isCorrect": false
      },
      {
        "id": "bm-m64-004-c4",
        "label": "4",
        "content": "241",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จัดรูปสมการโดยใช้ตัวเศษร่วม $116 - x$ จะได้ $x = 116$ และ $2x - 7 = 225$",
      "correctChoiceId": "bm-m64-004-c1",
      "steps": [
        "สังเกตว่า $\\frac{23 - x}{93} + 1 = \\frac{116 - x}{93}$, $\\frac{42 - x}{74} + 1 = \\frac{116 - x}{74}$, และ $1 - \\frac{x}{116} = \\frac{116 - x}{116}$",
        "สมการจัดรูปได้เป็น $(116 - x)(\\frac{1}{93} - \\frac{1}{74} - \\frac{1}{116}) = 0$",
        "เนื่องจากพจน์ในวงเล็บไม่เป็นศูนย์ จึงได้ $116 - x = 0 \\implies x = 116$",
        "คำนวณ $2x - 7 = 2(116) - 7 = 232 - 7 = 225$"
      ]
    }
  },
  {
    "id": "bm-m64-005",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "สวนส้มแห่งหนึ่งใช้หุ่นยนต์ 2 ตัว คือ มั่งคั่ง และยั่งยืน ในการเก็บส้มแทนมนุษย์ ปรากฏว่า ในวันนี้ หุ่นยนต์ทั้งสองเก็บส้มมาได้ทั้งหมด 1,200 ผล โดยส้มที่มั่งคั่งเก็บมาได้จะบรรจุใส่กล่องใหญ่ขนาดเท่ากัน กล่องละ 20 ผล ส่วนส้มที่ยั่งยืนเก็บมาได้ จะบรรจุใส่กล่องเล็กขนาดเท่ากัน กล่องละ 10 ผล เมื่อบรรจุส้มทั้งหมดที่เก็บได้ในวันนี้ลงกล่องเรียบร้อยแล้วนับได้ทั้งหมด 80 กล่อง อยากทราบว่าหุ่นแต่ละตัวเก็บส้มในวันนี้ได้ตัวละกี่ผล เมื่อทุกกล่องมีจำนวนส้มตามที่กำหนด และไม่มีส้มเหลืออยู่ด้านนอกกล่อง",
    "choices": [
      {
        "id": "bm-m64-005-c1",
        "label": "1",
        "content": "มั่งคั่ง 400 ผล , ยั่งยืน 800 ผล",
        "isCorrect": false
      },
      {
        "id": "bm-m64-005-c2",
        "label": "2",
        "content": "มั่งคั่ง 800 ผล , ยั่งยืน 400 ผล",
        "isCorrect": true
      },
      {
        "id": "bm-m64-005-c3",
        "label": "3",
        "content": "มั่งคั่ง 600 ผล , ยั่งยืน 600 ผล",
        "isCorrect": false
      },
      {
        "id": "bm-m64-005-c4",
        "label": "4",
        "content": "มั่งคั่ง 1,000 ผล , ยั่งยืน 200 ผล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แก้ระบบสมการหาจำนวนกล่องใหญ่และกล่องเล็ก ได้มั่งคั่ง 800 ผล และยั่งยืน 400 ผล",
      "correctChoiceId": "bm-m64-005-c2",
      "steps": [
        "ให้มั่งคั่งเก็บได้ $x$ กล่องใหญ่ และยั่งยืนเก็บได้ $y$ กล่องเล็ก",
        "ระบบสมการ: $x + y = 80$ และ $20x + 10y = 1,200$",
        "แก้สมการได้ $x = 40$ กล่อง และ $y = 40$ กล่อง",
        "มั่งคั่งเก็บได้ $40 \\times 20 = 800$ ผล, ยั่งยืนเก็บได้ $40 \\times 10 = 400$ ผล"
      ]
    }
  },
  {
    "id": "bm-m64-006",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "กำหนดสมการ $\\frac{8M}{12} = 18$ และสมการ $N - \\frac{1}{6}N - \\frac{1}{5}N - \\frac{1}{4}N - \\frac{1}{3}N = 4.5$ แล้ว $\\frac{2}{3}$ ของผลรวมของ $M$ กับ $N$ มีค่าตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-006-c1",
        "label": "1",
        "content": "78",
        "isCorrect": true
      },
      {
        "id": "bm-m64-006-c2",
        "label": "2",
        "content": "90",
        "isCorrect": false
      },
      {
        "id": "bm-m64-006-c3",
        "label": "3",
        "content": "117",
        "isCorrect": false
      },
      {
        "id": "bm-m64-006-c4",
        "label": "4",
        "content": "119",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แก้สมการได้ $M = 27$ และ $N = 90$ นำมารวมกันและหา $\\frac{2}{3}$ ได้ 78",
      "correctChoiceId": "bm-m64-006-c1",
      "steps": [
        "จาก $\\frac{8M}{12} = 18 \\implies \\frac{2}{3}M = 18 \\implies M = 27$",
        "จาก $N(1 - \\frac{1}{6} - \\frac{1}{5} - \\frac{1}{4} - \\frac{1}{3}) = 4.5 \\implies N(\\frac{60 - 10 - 12 - 15 - 20}{60}) = N(\\frac{3}{60}) = \\frac{1}{20}N = 4.5 \\implies N = 90$",
        "ผลรวม $M + N = 27 + 90 = 117$",
        "คำนวณ $\\frac{2}{3}(M + N) = \\frac{2}{3}(117) = 78$"
      ]
    }
  },
  {
    "id": "bm-m64-007",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 2,
    "timeEstimateSeconds": 100,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "หนังสือเล่มหนึ่งประกอบไปด้วยปกหน้า เนื้อหา และปกหลัง กำหนดหมายเลขหน้าในส่วนที่เป็นเนื้อหาได้ไม่เกิน 100 หน้า ในหนึ่งแผ่นของเนื้อหาจะมีสองหน้าคือด้านหน้าและด้านหลัง โดยแผ่นแรกของเนื้อหาด้านหน้าคือหน้าที่ 1 ด้านหลังคือหน้าที่ 2 และในแผ่นสุดท้ายของเนื้อหามีเพียงหน้าเดียว ถ้านักเรียนคนหนึ่งทำหนังสือเล่มนี้ในส่วนที่เป็นเนื้อหาฉีกขาดออกไป 1 แผ่น ทำให้ผลรวมของหมายเลขหน้าของเนื้อหาที่เหลือเท่ากับ 2,280 พอดี อยากทราบว่าเดิมหนังสือเล่มนี้มีส่วนที่เป็นเนื้อหาทั้งหมดกี่หน้า",
    "choices": [
      {
        "id": "bm-m64-007-c1",
        "label": "1",
        "content": "65 หน้า",
        "isCorrect": false
      },
      {
        "id": "bm-m64-007-c2",
        "label": "2",
        "content": "67 หน้า",
        "isCorrect": false
      },
      {
        "id": "bm-m64-007-c3",
        "label": "3",
        "content": "69 หน้า",
        "isCorrect": true
      },
      {
        "id": "bm-m64-007-c4",
        "label": "4",
        "content": "71 หน้า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ใช้ผลรวมเลขหน้า $\\frac{n(n+1)}{2}$ หักหน้าที่ฉีกขาดออก พบว่า $n = 69$ หน้า",
      "correctChoiceId": "bm-m64-007-c3",
      "steps": [
        "แผ่นสุดท้ายมีหน้าเดียว ดังนั้นจำนวนหน้า $n$ ต้องเป็นจำนวนคี่",
        "ผลรวมหน้า $1$ ถึง $n$ คือ $\\frac{n(n+1)}{2}$ ซึ่งต้องมากกว่า 2,280",
        "เมื่อทดสอบ $n = 69$: $\\frac{69 \\times 70}{2} = 2,415$",
        "ผลรวมของหน้าที่ขาดหายไป $= 2,415 - 2,280 = 135$",
        "แผ่นที่ฉีกมีเลขหน้า $2k - 1$ และ $2k$ ซึ่งมีผลรวม $4k - 1 = 135 \\implies 4k = 136 \\implies k = 34$",
        "หน้าที่ขาดคือ 67 และ 68 ซึ่งอยู่ในช่วง $1$ ถึง $69$ พอดี"
      ]
    }
  },
  {
    "id": "bm-m64-008",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ผลบวกของ ห.ร.ม. และ ค.ร.น. ของ $\\frac{5}{4}$ , $\\frac{5}{12}$ , $\\frac{10}{16}$ คือ $\\frac{a}{b}$ แล้ว $a + b$ มีค่าตรงกับข้อใด เมื่อ $\\frac{a}{b}$ เป็นเศษส่วนอย่างต่ำ",
    "choices": [
      {
        "id": "bm-m64-008-c1",
        "label": "1",
        "content": "173",
        "isCorrect": true
      },
      {
        "id": "bm-m64-008-c2",
        "label": "2",
        "content": "171",
        "isCorrect": false
      },
      {
        "id": "bm-m64-008-c3",
        "label": "3",
        "content": "168",
        "isCorrect": false
      },
      {
        "id": "bm-m64-008-c4",
        "label": "4",
        "content": "165",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หา ห.ร.ม. และ ค.ร.น. ของเศษส่วนแล้วบวกกัน ได้ $\\frac{125}{48}$ ดังนั้น $a + b = 173$",
      "correctChoiceId": "bm-m64-008-c1",
      "steps": [
        "ห.ร.ม. ของเศษส่วน $= \\frac{\\text{ห.ร.ม.}(5, 5, 10)}{\\text{ค.ร.น.}(4, 12, 16)} = \\frac{5}{48}$",
        "ค.ร.น. ของเศษส่วน $= \\frac{\\text{ค.ร.น.}(5, 5, 10)}{\\text{ห.ร.ม.}(4, 12, 16)} = \\frac{10}{4} = \\frac{5}{2} = \\frac{120}{48}$",
        "ผลบวก $= \\frac{5}{48} + \\frac{120}{48} = \\frac{125}{48}$ (เป็นเศษส่วนอย่างต่ำแล้ว)",
        "ดังนั้น $a = 125, b = 48 \\implies a + b = 125 + 48 = 173$"
      ]
    }
  },
  {
    "id": "bm-m64-009",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ถ้า $x, y, z$ เป็นจำนวนนับ และ ห.ร.ม. ของ $x, y, z$ เท่ากับ ค.ร.น. ของ $x, y, z$ ถ้า $z = 256$ แล้วค่าของ $2x + \\frac{1}{2}y + z$ มีค่าตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-009-c1",
        "label": "1",
        "content": "128",
        "isCorrect": false
      },
      {
        "id": "bm-m64-009-c2",
        "label": "2",
        "content": "256",
        "isCorrect": false
      },
      {
        "id": "bm-m64-009-c3",
        "label": "3",
        "content": "512",
        "isCorrect": false
      },
      {
        "id": "bm-m64-009-c4",
        "label": "4",
        "content": "896",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "เนื่องจาก ห.ร.ม. เท่ากับ ค.ร.น. แสดงว่า $x = y = z = 256$ คำนวณได้ 896",
      "correctChoiceId": "bm-m64-009-c4",
      "steps": [
        "สำหรับจำนวนนับใด ๆ ห.ร.ม. $\\le$ ค.ร.น. เสมอ การที่ ห.ร.ม. เท่ากับ ค.ร.น. หมายความว่าจำนวนทั้งหมดต้องเท่ากัน",
        "ดังนั้น $x = y = z = 256$",
        "คำนวณ $2(256) + \\frac{1}{2}(256) + 256 = 512 + 128 + 256 = 896$"
      ]
    }
  },
  {
    "id": "bm-m64-010",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ร้านค้าขายอาหารทะเลแช่แข็งแห่งหนึ่ง ทุก ๆ 8 วัน จะต้องตรวจสอบวันหมดอายุของกุ้งครั้งหนึ่ง ทุก ๆ 10 วัน จะตรวจสอบวันหมดอายุของปู และทุก ๆ 15 วัน จะตรวจสอบวันหมดอายุของหมึก ถ้าในวันที่ 2 มกราคม 2564 ร้านค้าได้ตรวจสอบวันหมดอายุของกุ้ง ปู และหมึก พร้อมกันในวันเดียวกัน แล้วปี พ.ศ. 2564 ร้านค้าจะตรวจสอบอาหารทะเลแช่แข็งทั้ง 3 ชนิดในวันเดียวกันทั้งหมดกี่ครั้ง",
    "choices": [
      {
        "id": "bm-m64-010-c1",
        "label": "1",
        "content": "3 ครั้ง",
        "isCorrect": false
      },
      {
        "id": "bm-m64-010-c2",
        "label": "2",
        "content": "4 ครั้ง",
        "isCorrect": true
      },
      {
        "id": "bm-m64-010-c3",
        "label": "3",
        "content": "5 ครั้ง",
        "isCorrect": false
      },
      {
        "id": "bm-m64-010-c4",
        "label": "4",
        "content": "6 ครั้ง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค.ร.น. ของ 8, 10, 15 คือ 120 วัน ภายในปี 2564 มีการตรวจพร้อมกันทั้งหมด 4 ครั้ง",
      "correctChoiceId": "bm-m64-010-c2",
      "steps": [
        "หา ค.ร.น. ของ 8, 10 และ 15 ได้เท่ากับ 120 วัน",
        "ครั้งที่ 1 ตรวจพร้อมกันวันที่ 2 มกราคม 2564",
        "ครั้งถัดไปจะตรวจทุก ๆ 120 วัน: วันที่ 2, วันที่ $2 + 120 = 122$, วันที่ $122 + 120 = 242$, วันที่ $242 + 120 = 362$",
        "เนื่องจากปี 2564 มี 365 วัน วันที่ 362 ยังคงอยู่ในปี 2564 จึงตรวจพร้อมกันทั้งหมด 4 ครั้ง"
      ]
    }
  },
  {
    "id": "bm-m64-011",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "จากรูปที่กำหนดให้ ค่าของ $2x + y - z$ ตรงกับข้อใด",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q11.svg",
    "choices": [
      {
        "id": "bm-m64-011-c1",
        "label": "1",
        "content": "128",
        "isCorrect": false
      },
      {
        "id": "bm-m64-011-c2",
        "label": "2",
        "content": "74",
        "isCorrect": true
      },
      {
        "id": "bm-m64-011-c3",
        "label": "3",
        "content": "63",
        "isCorrect": false
      },
      {
        "id": "bm-m64-011-c4",
        "label": "4",
        "content": "43",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ใช้สมบัติเส้นขนานหามุม $y = 43^\\circ, z = 63^\\circ, x = 47^\\circ$ ได้ $2x + y - z = 74$",
      "correctChoiceId": "bm-m64-011-c2",
      "steps": [
        "จากมุมภายในข้างเดียวกันของเส้นตัด: $y + 137^\\circ = 180^\\circ \\implies y = 43^\\circ$",
        "จากเส้นขนาน: $z = 63^\\circ$",
        "มุมยอดของรูปสามเหลี่ยมใหญ่ $= 180^\\circ - 43^\\circ - 63^\\circ = 74^\\circ$",
        "จากเส้นขนานและมุมแย้ง ได้ $x = 47^\\circ$",
        "คำนวณ $2(47^\\circ) + 43^\\circ - 63^\\circ = 94^\\circ - 20^\\circ = 74^\\circ$"
      ]
    }
  },
  {
    "id": "bm-m64-012",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 2,
    "timeEstimateSeconds": 100,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "กำหนดให้ $\\square ABCD$ เป็นรูปสี่เหลี่ยมคางหมู และ $p = 4q$ แล้วค่าของ $p - q + r$ ตรงกับข้อใด",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q12.svg",
    "choices": [
      {
        "id": "bm-m64-012-c1",
        "label": "1",
        "content": "123",
        "isCorrect": false
      },
      {
        "id": "bm-m64-012-c2",
        "label": "2",
        "content": "132",
        "isCorrect": false
      },
      {
        "id": "bm-m64-012-c3",
        "label": "3",
        "content": "145",
        "isCorrect": false
      },
      {
        "id": "bm-m64-012-c4",
        "label": "4",
        "content": "152",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "ใช้สมบัติมุมภายในของรูปสี่เหลี่ยมคางหมูและรูปสามเหลี่ยม คำนวณได้ $p - q + r = 152$",
      "correctChoiceId": "bm-m64-012-c4",
      "steps": [
        "จากรูป $AD \\perp DC$ ดังนั้น $\\angle ADC = 90^\\circ$ และ $\\angle DAB = 90^\\circ$",
        "ใน $\\triangle ADC$: $\\angle DAC = 50^\\circ \\implies \\angle ACD = 40^\\circ \\implies \\angle BAC = 40^\\circ$",
        "ใน $\\triangle AEO$: มุมภายในรวมกันได้ $180^\\circ \\implies 40^\\circ + (180^\\circ - r) + q = 180^\\circ \\implies r - q = 40^\\circ$",
        "เส้นขนาน $AB \\parallel DC$ มีเส้นตัด $EF$ ดังนั้น $r + p = 180^\\circ$",
        "แทน $p = 4q$ และ $r = q + 40^\\circ$: $5q + 40^\\circ = 180^\\circ \\implies q = 28^\\circ$",
        "ได้ $p = 112^\\circ$ และ $r = 68^\\circ$",
        "คำนวณ $p - q + r = 112 - 28 + 68 = 152$"
      ]
    }
  },
  {
    "id": "bm-m64-013",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "จากรูป $\\overline{BO}$ แบ่งครึ่งมุม CBA , $\\overline{CO}$ แบ่งครึ่งมุม ACB , $\\overline{MN}$ ผ่านจุด O และขนานกับ $\\overline{BC}$ ถ้า $AB = 12$ หน่วย และ $AC = 18$ หน่วย แล้วความยาวเส้นรอบรูปสามเหลี่ยม AMN มีค่าตรงกับข้อใด",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q13.svg",
    "choices": [
      {
        "id": "bm-m64-013-c1",
        "label": "1",
        "content": "36",
        "isCorrect": false
      },
      {
        "id": "bm-m64-013-c2",
        "label": "2",
        "content": "30",
        "isCorrect": true
      },
      {
        "id": "bm-m64-013-c3",
        "label": "3",
        "content": "24",
        "isCorrect": false
      },
      {
        "id": "bm-m64-013-c4",
        "label": "4",
        "content": "20",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เส้นรอบรูป $\\triangle AMN$ เท่ากับ $AB + AC = 12 + 18 = 30$ หน่วย",
      "correctChoiceId": "bm-m64-013-c2",
      "steps": [
        "เนื่องจาก $\\overline{BO}$ แบ่งครึ่งมุม $B$ และ $\\overline{MN} \\parallel \\overline{BC}$ ทำให้ $\\angle MOB = \\angle OBC = \\angle MBO$",
        "ดังนั้น $\\triangle MBO$ เป็นรูปสามเหลี่ยมหน้าจั่ว ซึ่ง $MB = MO$",
        "ในทำนองเดียวกัน $\\triangle NCO$ เป็นรูปสามเหลี่ยมหน้าจั่ว ซึ่ง $NC = NO$",
        "ความยาวรอบรูป $\\triangle AMN = AM + MN + AN = AM + MO + ON + AN = (AM + MB) + (AN + NC) = AB + AC = 12 + 18 = 30$ หน่วย"
      ]
    }
  },
  {
    "id": "bm-m64-014",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "บ้านสุดา อยู่ห่างจากวัด 3.5 กิโลเมตร สุดาต้องการเขียนแผนผังการเดินทางจากบ้านไปวัด โดยใช้มาตราส่วน 1 เซนติเมตร : 200 เมตร ในแผนผังบ้านสุดาจะอยู่ห่างจากวัดเท่าใด",
    "choices": [
      {
        "id": "bm-m64-014-c1",
        "label": "1",
        "content": "15.5 เซนติเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-014-c2",
        "label": "2",
        "content": "17 เซนติเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-014-c3",
        "label": "3",
        "content": "17.5 เซนติเมตร",
        "isCorrect": true
      },
      {
        "id": "bm-m64-014-c4",
        "label": "4",
        "content": "19.5 เซนติเมตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แปลงระยะทางจริงเป็นเมตรแล้วหารด้วยมาตราส่วน ได้ 17.5 เซนติเมตร",
      "correctChoiceId": "bm-m64-014-c3",
      "steps": [
        "ระยะทางจริง 3.5 กิโลเมตร $= 3,500$ เมตร",
        "มาตราส่วน 1 ซม. แทนระยะจริง 200 เมตร",
        "ระยะทางในแผนผัง $= \\frac{3,500}{200} = 17.5$ เซนติเมตร"
      ]
    }
  },
  {
    "id": "bm-m64-015",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "นายไก่ เดินไปทางทิศตะวันตกเฉียงเหนือ 250 เมตร แล้วหมุนตัวไปทางซ้ายมือ 45 องศา จึงเดินต่อไปเป็นระยะทาง 300 เมตร จากนั้นเดินไปทางทิศตะวันออกเฉียงใต้เป็นระยะทาง 250 เมตร อยากทราบว่าขณะนี้นายไก่ยืนอยู่ทิศใดของจุดเริ่มต้น และยืนอยู่ห่างจากจุดเริ่มต้นเป็นระยะทางเท่าใด",
    "choices": [
      {
        "id": "bm-m64-015-c1",
        "label": "1",
        "content": "ทิศเหนือของจุดเริ่มต้น และห่างจากจุดเริ่มต้นเป็นระยะทาง 250 เมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-015-c2",
        "label": "2",
        "content": "ทิศใต้ของจุดเริ่มต้น และห่างจากจุดเริ่มต้นเป็นระยะทาง 250 เมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-015-c3",
        "label": "3",
        "content": "ทิศตะวันออกของจุดเริ่มต้น และห่างจากจุดเริ่มต้นเป็นระยะทาง 300 เมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-015-c4",
        "label": "4",
        "content": "ทิศตะวันตกของจุดเริ่มต้น และห่างจากจุดเริ่มต้นเป็นระยะทาง 300 เมตร",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "การเดินทิศตะวันตกเฉียงเหนือและตะวันออกเฉียงใต้หักล้างกัน เหลือการเดินไปทิศตะวันตก 300 เมตร",
      "correctChoiceId": "bm-m64-015-c4",
      "steps": [
        "เดินไปทิศตะวันตกเฉียงเหนือ 250 เมตร",
        "หมุนซ้าย 45 องศา: จากทิศตะวันตกเฉียงเหนือจะเปลี่ยนเป็น ทิศตะวันตก เดินต่อไป 300 เมตร",
        "เดินไปทิศตะวันออกเฉียงใต้ 250 เมตร ซึ่งทิศตรงข้ามกับการเดินครั้งแรก 250 เมตร จึงหักล้างกันพอดี",
        "สรุปเหลือนายไก่อยู่ทางทิศตะวันตกของจุดเริ่มต้น เป็นระยะทาง 300 เมตร"
      ]
    }
  },
  {
    "id": "bm-m64-016",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ถังน้ำทรงกระบอกใบหนึ่ง บรรจุน้ำไว้เต็มถัง ต่อมามีน้ำรั่วออกไป $\\frac{1}{3}$ ของน้ำในถัง และเมื่อตักน้ำไปใช้อีก 4 ลิตร ปรากฏว่าจะมีน้ำเหลืออยู่ครึ่งถังพอดี อยากทราบว่า ถังน้ำใบนี้จุน้ำเต็มถังได้กี่ลิตร",
    "choices": [
      {
        "id": "bm-m64-016-c1",
        "label": "1",
        "content": "12 ลิตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-016-c2",
        "label": "2",
        "content": "16 ลิตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-016-c3",
        "label": "3",
        "content": "24 ลิตร",
        "isCorrect": true
      },
      {
        "id": "bm-m64-016-c4",
        "label": "4",
        "content": "48 ลิตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตั้งสมการปริมาตรน้ำ จะได้ความจุเต็มถังเท่ากับ 24 ลิตร",
      "correctChoiceId": "bm-m64-016-c3",
      "steps": [
        "ให้ความจุเต็มถังคือ $V$ ลิตร",
        "น้ำรั่วไป $\\frac{1}{3}V$ เหลือ $\\frac{2}{3}V$",
        "ตักไปใช้อีก 4 ลิตร เหลือครึ่งถัง: $\\frac{2}{3}V - 4 = \\frac{1}{2}V$",
        "$(\\frac{2}{3} - \\frac{1}{2})V = 4 \\implies \\frac{1}{6}V = 4 \\implies V = 24$ ลิตร"
      ]
    }
  },
  {
    "id": "bm-m64-017",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ฟาร์มแห่งหนึ่งเลี้ยงสัตว์หลายชนิด โดยมีกวางกับนกกระจอกเทศรวมอยู่ด้วย ถ้าเลี้ยงกวางอยู่ 0.1875 ของสัตว์เลี้ยงทั้งหมด และเลี้ยงนกกระจอกเทศ อยู่ $\\frac{7}{12}$ ของสัตว์เลี้ยงทั้งหมด และฟาร์มแห่งนี้เลี้ยงนกกระจอกเทศมากกว่ากวาง 19 ตัว แล้วฟาร์มแห่งนี้เลี้ยงกวางกี่ตัว",
    "choices": [
      {
        "id": "bm-m64-017-c1",
        "label": "1",
        "content": "2 ตัว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-017-c2",
        "label": "2",
        "content": "9 ตัว",
        "isCorrect": true
      },
      {
        "id": "bm-m64-017-c3",
        "label": "3",
        "content": "23 ตัว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-017-c4",
        "label": "4",
        "content": "28 ตัว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แปลง 0.1875 เป็นเศษส่วน $\\frac{3}{16}$ แล้วแก้สมการหาจำนวนกวางได้ 9 ตัว",
      "correctChoiceId": "bm-m64-017-c2",
      "steps": [
        "แปลงทศนิยม: $0.1875 = \\frac{1875}{10000} = \\frac{3}{16}$",
        "ผลต่างของนกกระจอกเทศกับกวาง: $\\frac{7}{12} - \\frac{3}{16} = \\frac{28 - 9}{48} = \\frac{19}{48}$ ของสัตว์ทั้งหมด",
        "เนื่องจากนกกระจอกเทศมากกว่ากวาง 19 ตัว ดังนั้น สัตว์ทั้งหมด $= 19 \\div \\frac{19}{48} = 48$ ตัว",
        "เลี้ยงกวาง $= \\frac{3}{16} \\times 48 = 9$ ตัว"
      ]
    }
  },
  {
    "id": "bm-m64-018",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "น้ำใสซื้อโทรศัพท์เครื่องหนึ่ง โดยจ่ายเงินไป $\\frac{3}{4}$ ของราคาทั้งหมด คิดเป็นเงิน 8,398.80 บาท ส่วนที่เหลือ น้ำใสขอผ่อนส่ง 4 งวด งวดละเท่า ๆ กัน อยากทราบว่า น้ำใสต้องจ่ายค่าโทรศัพท์งวดละกี่บาท",
    "choices": [
      {
        "id": "bm-m64-018-c1",
        "label": "1",
        "content": "466.60 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-018-c2",
        "label": "2",
        "content": "699.90 บาท",
        "isCorrect": true
      },
      {
        "id": "bm-m64-018-c3",
        "label": "3",
        "content": "1,399.80 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-018-c4",
        "label": "4",
        "content": "1,699.80 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หาเงินส่วนที่เหลือ $\\frac{1}{4}$ แล้วหาร 4 งวด ได้งวดละ 699.90 บาท",
      "correctChoiceId": "bm-m64-018-c2",
      "steps": [
        "เงิน $\\frac{3}{4}$ ของราคาคือ 8,398.80 บาท",
        "เงินส่วนที่เหลือคือ $\\frac{1}{4}$ คิดเป็น $\\frac{8,398.80}{3} = 2,799.60$ บาท",
        "ผ่อนชำระ 4 งวด งวดละเท่า ๆ กัน: $\\frac{2,799.60}{4} = 699.90$ บาท"
      ]
    }
  },
  {
    "id": "bm-m64-019",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "พ่อแบ่งที่ดินทั้งหมดให้ลูก 2 คนคือวีระ และมงคล วีระได้ที่ดิน $\\frac{11}{18}$ ของที่ดินทั้งหมด มงคลได้ที่ดิน $\\frac{2}{5}$ เท่าของที่ดินที่วีระได้ ถ้าวีระได้ที่ดินมากกว่ามงคล 44 ไร่ แล้วพ่อมีที่ดินทั้งหมดกี่ไร่",
    "choices": [
      {
        "id": "bm-m64-019-c1",
        "label": "1",
        "content": "110 ไร่",
        "isCorrect": false
      },
      {
        "id": "bm-m64-019-c2",
        "label": "2",
        "content": "120 ไร่",
        "isCorrect": true
      },
      {
        "id": "bm-m64-019-c3",
        "label": "3",
        "content": "130 ไร่",
        "isCorrect": false
      },
      {
        "id": "bm-m64-019-c4",
        "label": "4",
        "content": "140 ไร่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตั้งสมการเศษส่วนของที่ดิน ได้ที่ดินทั้งหมด 120 ไร่",
      "correctChoiceId": "bm-m64-019-c2",
      "steps": [
        "วีระได้ $\\frac{11}{18}$ ของที่ดินทั้งหมด",
        "มงคลได้ $\\frac{2}{5} \\times \\frac{11}{18} = \\frac{11}{45}$ ของที่ดินทั้งหมด",
        "ผลต่าง $= \\frac{11}{18} - \\frac{11}{45} = \\frac{55 - 22}{90} = \\frac{33}{90} = \\frac{11}{30}$ ของที่ดินทั้งหมด",
        "ที่ดินทั้งหมด $= 44 \\div \\frac{11}{30} = 44 \\times \\frac{30}{11} = 120$ ไร่"
      ]
    }
  },
  {
    "id": "bm-m64-020",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "วันจันทร์ใช้เงินไป 28.75 บาท วันอังคารใช้เงินมากกว่าวันจันทร์ 7.75 บาท วันพุธใช้เงินน้อยกว่าวันอังคาร 50 สตางค์ วันพฤหัสบดีใช้เงินไป $\\frac{4}{5}$ ของวันจันทร์ วันศุกร์ใช้เงินเป็นสามเท่าของวันอังคาร เฉลี่ยแล้วตั้งแต่วันจันทร์ถึงวันศุกร์ใช้เงินวันละเท่าไร",
    "choices": [
      {
        "id": "bm-m64-020-c1",
        "label": "1",
        "content": "46.75 บาท",
        "isCorrect": true
      },
      {
        "id": "bm-m64-020-c2",
        "label": "2",
        "content": "42.25 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-020-c3",
        "label": "3",
        "content": "40.25 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-020-c4",
        "label": "4",
        "content": "39.50 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หาค่าใช้จ่ายในแต่ละวันรวม 5 วันได้ 233.75 บาท เฉลี่ยวันละ 46.75 บาท",
      "correctChoiceId": "bm-m64-020-c1",
      "steps": [
        "วันจันทร์: 28.75 บาท",
        "วันอังคาร: $28.75 + 7.75 = 36.50$ บาท",
        "วันพุธ: $36.50 - 0.50 = 36.00$ บาท",
        "วันพฤหัสบดี: $\\frac{4}{5} \\times 28.75 = 23.00$ บาท",
        "วันศุกร์: $3 \\times 36.50 = 109.50$ บาท",
        "รวม 5 วัน $= 28.75 + 36.50 + 36.00 + 23.00 + 109.50 = 233.75$ บาท",
        "ค่าเฉลี่ย $= \\frac{233.75}{5} = 46.75$ บาท"
      ]
    }
  },
  {
    "id": "bm-m64-021",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ผลลัพธ์ของ $\\frac{\\frac{1}{2} - \\frac{1}{3}}{\\frac{1}{3} - \\frac{1}{4}} \\times \\frac{\\frac{1}{4} - \\frac{1}{5}}{\\frac{1}{5} - \\frac{1}{6}} \\times \\frac{\\frac{1}{6} - \\frac{1}{7}}{\\frac{1}{7} - \\frac{1}{8}} \\times \\frac{\\frac{1}{8} - \\frac{1}{9}}{\\frac{1}{9} - \\frac{1}{10}} \\times \\frac{\\frac{1}{10} - \\frac{1}{11}}{\\frac{1}{11} - \\frac{1}{12}}$ มีค่าตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-021-c1",
        "label": "1",
        "content": "12",
        "isCorrect": false
      },
      {
        "id": "bm-m64-021-c2",
        "label": "2",
        "content": "10",
        "isCorrect": false
      },
      {
        "id": "bm-m64-021-c3",
        "label": "3",
        "content": "8",
        "isCorrect": false
      },
      {
        "id": "bm-m64-021-c4",
        "label": "4",
        "content": "6",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "จัดรูปเศษส่วนแต่ละก้อนแล้วตัดทอน จะได้ผลลัพธ์เท่ากับ 6",
      "correctChoiceId": "bm-m64-021-c4",
      "steps": [
        "สังเกตว่า $\\frac{\\frac{1}{n} - \\frac{1}{n+1}}{\\frac{1}{n+1} - \\frac{1}{n+2}} = \\frac{\\frac{1}{n(n+1)}}{\\frac{1}{(n+1)(n+2)}} = \\frac{n+2}{n}$",
        "ผลคูณคือ $\\frac{4}{2} \\times \\frac{6}{4} \\times \\frac{8}{6} \\times \\frac{10}{8} \\times \\frac{12}{10}$",
        "ตัดทอนตัวเศษและตัวส่วนที่เหมือนกัน เหลือ $\\frac{12}{2} = 6$"
      ]
    }
  },
  {
    "id": "bm-m64-022",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ห้องรูปสี่เหลี่ยมผืนผ้า ยาว 14 เมตร และกว้าง 7 เมตร ต้องการวางโต๊ะรูปวงกลมแบบเดียวกันที่มีรัศมียาว 0.7 เมตร จะสามารถวางโต๊ะได้มากที่สุดกี่ตัว และเหลือพื้นที่ว่างในห้องอีกเท่าไร (กำหนด $\\pi \\approx \\frac{22}{7}$)",
    "choices": [
      {
        "id": "bm-m64-022-c1",
        "label": "1",
        "content": "6 ตัว และเหลือพื้นที่ 8 ตารางเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-022-c2",
        "label": "2",
        "content": "18 ตัว และเหลือพื้นที่ 11 ตารางเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-022-c3",
        "label": "3",
        "content": "50 ตัว และเหลือพื้นที่ 21 ตารางเมตร",
        "isCorrect": true
      },
      {
        "id": "bm-m64-022-c4",
        "label": "4",
        "content": "63 ตัว และเหลือพื้นที่ 35 ตารางเมตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วางโต๊ะตามแนวตารางได้มากที่สุด 50 ตัว และเหลือพื้นที่ว่าง 21 ตารางเมตร",
      "correctChoiceId": "bm-m64-022-c3",
      "steps": [
        "โต๊ะมีเส้นผ่านศูนย์กลาง $2 \\times 0.7 = 1.4$ เมตร",
        "แนวกว้าง 7 เมตร วางได้ $\\frac{7}{1.4} = 5$ ตัว",
        "แนวยาว 14 เมตร วางได้ $\\frac{14}{1.4} = 10$ ตัว",
        "วางโต๊ะได้มากที่สุด $= 5 \\times 10 = 50$ ตัว",
        "พื้นที่ห้อง $= 7 \\times 14 = 98$ ตารางเมตร",
        "พื้นที่โต๊ะ 50 ตัว $= 50 \\times (\\frac{22}{7} \\times 0.7 \\times 0.7) = 50 \\times 1.54 = 77$ ตารางเมตร",
        "เหลือพื้นที่ว่าง $= 98 - 77 = 21$ ตารางเมตร"
      ]
    }
  },
  {
    "id": "bm-m64-023",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 70,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 เซนติเมตร มีพื้นที่เท่ากับรูปสี่เหลี่ยมคางหมูรูปหนึ่งซึ่งสูง 8 เซนติเมตร แล้วผลบวกของความยาวด้านคู่ขนานของรูปสี่เหลี่ยมคางหมูรูปนี้ ตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-023-c1",
        "label": "1",
        "content": "49 เซนติเมตร",
        "isCorrect": true
      },
      {
        "id": "bm-m64-023-c2",
        "label": "2",
        "content": "52 เซนติเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-023-c3",
        "label": "3",
        "content": "96 เซนติเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-023-c4",
        "label": "4",
        "content": "144 เซนติเมตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่สี่เหลี่ยมจัตุรัสคือ 196 ตร.ซม. นำไปเทียบกับสูตรสี่เหลี่ยมคางหมูได้ผลบวกด้านคู่ขนาน 49 ซม.",
      "correctChoiceId": "bm-m64-023-c1",
      "steps": [
        "พื้นที่สี่เหลี่ยมจัตุรัส $= 14 \\times 14 = 196$ ตารางเซนติเมตร",
        "พื้นที่สี่เหลี่ยมคางหมู $= \\frac{1}{2} \\times \\text{ผลบวกด้านคู่ขนาน} \\times 8$",
        "$196 = 4 \\times \\text{ผลบวกด้านคู่ขนาน} \\implies \\text{ผลบวกด้านคู่ขนาน} = \\frac{196}{4} = 49$ เซนติเมตร"
      ]
    }
  },
  {
    "id": "bm-m64-024",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 2,
    "timeEstimateSeconds": 100,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "จากรูป $\\square ABCD$ เป็นรูปสี่เหลี่ยมจัตุรัส ถ้ารูปสามเหลี่ยม CEF มีพื้นที่ 361 ตารางหน่วย แล้วความยาวรอบรูปสี่เหลี่ยม ABCD มีค่าตรงกับข้อใด",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q24.svg",
    "choices": [
      {
        "id": "bm-m64-024-c1",
        "label": "1",
        "content": "76 หน่วย",
        "isCorrect": false
      },
      {
        "id": "bm-m64-024-c2",
        "label": "2",
        "content": "152 หน่วย",
        "isCorrect": false
      },
      {
        "id": "bm-m64-024-c3",
        "label": "3",
        "content": "228 หน่วย",
        "isCorrect": false
      },
      {
        "id": "bm-m64-024-c4",
        "label": "4",
        "content": "304 หน่วย",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "หาความยาวด้านสี่เหลี่ยมจัตุรัสได้ 76 หน่วย ความยาวรอบรูปจึงเท่ากับ 304 หน่วย",
      "correctChoiceId": "bm-m64-024-c4",
      "steps": [
        "ให้ด้านของสี่เหลี่ยมจัตุรัสยาว $a$ หน่วย",
        "จุด $E$ เป็นจุดกึ่งกลางของด้าน $BC$ ดังนั้น $CE = \\frac{a}{2}$",
        "$\\triangle CEF$ เป็นรูปสามเหลี่ยมมุมฉากหน้าจั่วที่มี $CE$ เป็นด้านตรงข้ามมุมฉาก: $CF = EF = \\frac{a}{2\\sqrt{2}}$",
        "พื้นที่ $\\triangle CEF = \\frac{1}{2} \\times CF \\times EF = \\frac{a^2}{16} = 361$",
        "แก้สมการได้ $a = \\sqrt{16 \\times 361} = 4 \\times 19 = 76$ หน่วย",
        "ความยาวรอบรูปสี่เหลี่ยมจัตุรัส $ABCD = 4a = 4 \\times 76 = 304$ หน่วย"
      ]
    }
  },
  {
    "id": "bm-m64-025",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 95,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "รถยนต์โดยสารคันหนึ่ง แล่นออกจากเมืองหนึ่งไปยังอีกเมืองหนึ่งเป็นประจำทุกวัน คนขับสังเกตเห็นว่า ถ้าเขาขับรถด้วยความเร็ว 60 กิโลเมตรต่อชั่วโมง จะถึงปลายทางช้าไป 10 นาที ถ้าเขาขับรถด้วยความเร็ว 65 กิโลเมตรต่อชั่วโมง จะถึงปลายทางช้าไปเพียง 1 นาที 30 วินาที เท่านั้น แล้วเมืองทั้งสองอยู่ห่างกันเท่าไร",
    "choices": [
      {
        "id": "bm-m64-025-c1",
        "label": "1",
        "content": "110.5 กิโลเมตร",
        "isCorrect": true
      },
      {
        "id": "bm-m64-025-c2",
        "label": "2",
        "content": "112.5 กิโลเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-025-c3",
        "label": "3",
        "content": "115.5 กิโลเมตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-025-c4",
        "label": "4",
        "content": "117.5 กิโลเมตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ใช้ผลต่างของเวลา $8.5$ นาที แก้สมการหาระยะทางได้ 110.5 กิโลเมตร",
      "correctChoiceId": "bm-m64-025-c1",
      "steps": [
        "ผลต่างของเวลาที่ใช้ $= 10 - 1.5 = 8.5$ นาที $= \\frac{17}{120}$ ชั่วโมง",
        "ให้ระยะทางคือ $S$ กิโลเมตร: $\\frac{S}{60} - \\frac{S}{65} = \\frac{17}{120}$",
        "$S(\\frac{5}{3900}) = \\frac{17}{120} \\implies \\frac{S}{780} = \\frac{17}{120}$",
        "$S = \\frac{17 \\times 780}{120} = \\frac{17 \\times 13}{2} = 110.5$ กิโลเมตร"
      ]
    }
  },
  {
    "id": "bm-m64-026",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ถ้าผู้ใหญ่ 9 คน และเด็ก 6 คน ใช้เวลาทำงาน 2 วัน จะได้งานเท่ากับ ผู้ใหญ่ 5 คน และเด็ก 7 คน ทำงานในเวลา 3 วัน แล้วผู้ใหญ่ 2 คน และเด็ก 5 คน ทำงานจำนวนเท่ากันจะใช้เวลากี่วันจึงจะแล้วเสร็จ เมื่อผู้ใหญ่แต่ละคนทำงานได้เท่ากัน และเด็กแต่ละคนทำงานได้เท่ากัน",
    "choices": [
      {
        "id": "bm-m64-026-c1",
        "label": "1",
        "content": "5 วัน",
        "isCorrect": false
      },
      {
        "id": "bm-m64-026-c2",
        "label": "2",
        "content": "6 วัน",
        "isCorrect": true
      },
      {
        "id": "bm-m64-026-c3",
        "label": "3",
        "content": "7 วัน",
        "isCorrect": false
      },
      {
        "id": "bm-m64-026-c4",
        "label": "4",
        "content": "8 วัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เทียบอัตราการทำงาน ผู้ใหญ่ 1 คน เท่ากับเด็ก 3 คน คำนวณเวลาได้ 6 วัน",
      "correctChoiceId": "bm-m64-026-c2",
      "steps": [
        "งาน $= (9A + 6C) \\times 2 = 18A + 12C$",
        "งาน $= (5A + 7C) \\times 3 = 15A + 21C$",
        "$18A + 12C = 15A + 21C \\implies 3A = 9C \\implies A = 3C$",
        "ปริมาณงานทั้งหมดในรูป $C = 18(3C) + 12C = 66C$",
        "กลุ่มใหม่ ผู้ใหญ่ 2 คน เด็ก 5 คน มีอัตราการทำงาน $= 2(3C) + 5C = 11C$ ต่อวัน",
        "เวลาที่ใช้ $= \\frac{66C}{11C} = 6$ วัน"
      ]
    }
  },
  {
    "id": "bm-m64-027",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ในการซื้อรถยนต์แบบเงินผ่อน ผู้ซื้อต้องจ่ายเงินส่วนหนึ่งของราคารถยนต์ทั้งหมดไว้ก่อน ซึ่งเรียกว่า เงินดาวน์ ราคารถยนต์ส่วนที่เหลือจากเงินดาวน์ ผู้ขายจะนำไปคิดดอกเบี้ยเต็มช่วงเวลาที่ขอผ่อนชำระ แล้วนำดอกเบี้ยที่คำนวณได้ไปรวมกับราคารถยนต์ที่เหลือ เพื่อเฉลี่ยเงินรวมตามจำนวนงวดที่ต้องการผ่อนชำระ เพื่อหาว่าจะต้องผ่อนชำระงวดละกี่บาท ถ้าพ่อต้องการซื้อรถยนต์คันหนึ่งราคา 450,000 บาท โดยวางเงินดาวน์ไว้ 25% ของราคารถยนต์ทั้งหมด ส่วนที่เหลือ พ่อขอผ่อนชำระเป็นเวลา 24 เดือน เดือนละเท่า ๆ กัน โดยบริษัทขายรถยนต์คิดอัตราดอกเบี้ย 20% ต่อปี พ่อต้องผ่อนชำระเดือนละกี่บาท",
    "choices": [
      {
        "id": "bm-m64-027-c1",
        "label": "1",
        "content": "19,687.50 บาท",
        "isCorrect": true
      },
      {
        "id": "bm-m64-027-c2",
        "label": "2",
        "content": "19,867.50 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-027-c3",
        "label": "3",
        "content": "18,967.50 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-027-c4",
        "label": "4",
        "content": "17,687.50 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำนวณเงินต้นคงเหลือและดอกเบี้ย 2 ปี แล้วเฉลี่ยผ่อน 24 งวด ได้งวดละ 19,687.50 บาท",
      "correctChoiceId": "bm-m64-027-c1",
      "steps": [
        "เงินดาวน์ 25%: $450,000 \\times 0.25 = 112,500$ บาท",
        "เงินต้นที่เหลือผ่อน $= 450,000 - 112,500 = 337,500$ บาท",
        "ดอกเบี้ย 20% ต่อปี เป็นเวลา 2 ปี (24 เดือน): $337,500 \\times 20\\% \\times 2 = 135,000$ บาท",
        "ยอดเงินรวมที่ต้องผ่อน $= 337,500 + 135,000 = 472,500$ บาท",
        "ผ่อนเดือนละ $= \\frac{472,500}{24} = 19,687.50$ บาท"
      ]
    }
  },
  {
    "id": "bm-m64-028",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "เครื่องดูดฝุ่นเครื่องหนึ่ง ถ้าผู้ขายกำหนดราคาขายโดยคิดกำไร 15% จะได้เงินกำไรน้อยกว่า การกำหนดราคาขายโดยคิดกำไร 24% อยู่ 288 บาท แล้วถ้าผู้ขาย ต้องการขายให้ได้กำไร 25% จะต้องกำหนดราคาขายกี่บาท",
    "choices": [
      {
        "id": "bm-m64-028-c1",
        "label": "1",
        "content": "2,200 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-028-c2",
        "label": "2",
        "content": "3,200 บาท",
        "isCorrect": false
      },
      {
        "id": "bm-m64-028-c3",
        "label": "3",
        "content": "4,000 บาท",
        "isCorrect": true
      },
      {
        "id": "bm-m64-028-c4",
        "label": "4",
        "content": "4,200 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หาราคาต้นทุนได้ 3,200 บาท คิดกำไร 25% จะต้องขายราคา 4,000 บาท",
      "correctChoiceId": "bm-m64-028-c3",
      "steps": [
        "กำไรต่างกัน $24\\% - 15\\% = 9\\%$ ของต้นทุน",
        "ต้นทุน $= \\frac{288}{0.09} = 3,200$ บาท",
        "ต้องการกำไร 25% ราคาขาย $= 3,200 \\times 1.25 = 4,000$ บาท"
      ]
    }
  },
  {
    "id": "bm-m64-029",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ผลการสำรวจปริมาณการใช้น้ำในชีวิตประจำวันของคนกรุงเทพฯ พบว่า ใช้น้ำเฉลี่ยวันละ 200 ลิตร อยากทราบว่า ในแต่ละวันของคนกรุงเทพฯ กิจกรรมที่ใช้น้ำมากที่สุด มากกว่า กิจกรรมที่ใช้น้ำน้อยที่สุด กี่ลิตร",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q29.svg",
    "choices": [
      {
        "id": "bm-m64-029-c1",
        "label": "1",
        "content": "4 ลิตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-029-c2",
        "label": "2",
        "content": "60 ลิตร",
        "isCorrect": false
      },
      {
        "id": "bm-m64-029-c3",
        "label": "3",
        "content": "66 ลิตร",
        "isCorrect": true
      },
      {
        "id": "bm-m64-029-c4",
        "label": "4",
        "content": "70 ลิตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กิจกรรมใช้น้ำมากสุดคือ 35% น้อยสุดคือ 2% ต่างกัน 33% คิดเป็น 66 ลิตร",
      "correctChoiceId": "bm-m64-029-c3",
      "steps": [
        "จากแผนภูมิ กิจกรรมรดน้ำต้นไม้/ล้างรถ $= 100\\% - (2 + 5 + 9 + 23 + 26)\\% = 35\\%$ (มากที่สุด)",
        "กิจกรรมทำความสะอาดบ้าน $= 2\\%$ (น้อยที่สุด)",
        "ผลต่าง $= 35\\% - 2\\% = 33\\%$",
        "คิดเป็นปริมาณน้ำ $= 33\\% \\times 200 = 66$ ลิตร"
      ]
    }
  },
  {
    "id": "bm-m64-030",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ข้อมูลแสดงอายุ (ปี) ของสมาชิกชุมนุมจิตอาสาจำนวน 5 คน เป็นดังนี้ 13 , 12 , 15 , 14 , 11 ถ้ามีสมาชิกเข้าใหม่ 1 คน แล้วทำให้ค่าเฉลี่ยของอายุของสมาชิกในกลุ่มเพิ่มขึ้น 1 ปี อยากทราบว่า สมาชิกที่เข้ามาใหม่มีอายุกี่ปี",
    "choices": [
      {
        "id": "bm-m64-030-c1",
        "label": "1",
        "content": "15 ปี",
        "isCorrect": false
      },
      {
        "id": "bm-m64-030-c2",
        "label": "2",
        "content": "17 ปี",
        "isCorrect": false
      },
      {
        "id": "bm-m64-030-c3",
        "label": "3",
        "content": "18 ปี",
        "isCorrect": false
      },
      {
        "id": "bm-m64-030-c4",
        "label": "4",
        "content": "19 ปี",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "ค่าเฉลี่ยเดิม 13 ปี ค่าเฉลี่ยใหม่ 14 ปี (รวม 6 คน) สมาชิกใหม่มีอายุ 19 ปี",
      "correctChoiceId": "bm-m64-030-c4",
      "steps": [
        "ผลรวมอายุเดิม 5 คน $= 13 + 12 + 15 + 14 + 11 = 65$ ปี (ค่าเฉลี่ยเดิม $= 13$ ปี)",
        "มีสมาชิกใหม่ 1 คน รวมเป็น 6 คน ค่าเฉลี่ยเพิ่ม 1 ปี เป็น $13 + 1 = 14$ ปี",
        "ผลรวมอายุ 6 คน $= 6 \\times 14 = 84$ ปี",
        "อายุสมาชิกใหม่ $= 84 - 65 = 19$ ปี"
      ]
    }
  },
  {
    "id": "bm-m64-031",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ขวัญข้าวออกแบบลวดลายการปูกระเบื้องห้องด้วยกระเบื้องรูปสี่เหลี่ยมจัตุรัส ยาวด้านละ 20 เซนติเมตร โดยใช้สี 2 สี ปูสลับกันเป็นชั้น ๆ โดยเริ่มปูชั้นที่ 1 ด้วยสีฟ้า ดังรูป ถ้าพื้นที่ห้องของขวัญข้าวเป็นรูปสี่เหลี่ยมจัตุรัสยาวด้านละ 3 เมตร ขวัญข้าวต้องใช้กระเบื้องสีใดมากกว่าและมากกว่าอยู่เท่าใด",
    "contentImage": "/images/questions/benchama-math-64/bm-m64-q31.svg",
    "choices": [
      {
        "id": "bm-m64-031-c1",
        "label": "1",
        "content": "สีเหลือง มากกว่า สีฟ้า อยู่ 15 แผ่น",
        "isCorrect": false
      },
      {
        "id": "bm-m64-031-c2",
        "label": "2",
        "content": "สีเหลือง มากกว่า สีฟ้า อยู่ 27 แผ่น",
        "isCorrect": false
      },
      {
        "id": "bm-m64-031-c3",
        "label": "3",
        "content": "สีฟ้า มากกว่า สีเหลือง อยู่ 15 แผ่น",
        "isCorrect": true
      },
      {
        "id": "bm-m64-031-c4",
        "label": "4",
        "content": "สีฟ้า มากกว่า สีเหลือง อยู่ 29 แผ่น",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปูกระเบื้อง 15 ชั้น สลับสีฟ้าและเหลือง สีฟ้ามากกว่าสีเหลืองอยู่ 15 แผ่น",
      "correctChoiceId": "bm-m64-031-c3",
      "steps": [
        "ห้องกว้างด้านละ 3 เมตร $= 300$ ซม. ปูกระเบื้องได้ $\\frac{300}{20} = 15$ แผ่นต่อด้าน รวม 15 ชั้น",
        "ชั้นที่ $k$ มีกระเบื้อง $2k - 1$ แผ่น (ชั้นคี่สีฟ้า, ชั้นคู่สีเหลือง)",
        "ชั้น 1 (สีฟ้า) มี 1 แผ่น",
        "ผลต่างแต่ละคู่ชั้นถัดไป (ชั้น 3 - ชั้น 2, ชั้น 5 - ชั้น 4, ..., ชั้น 15 - ชั้น 14) มีค่าเท่ากับ 2 แผ่นต่อคู่ (รวม 7 คู่)",
        "ผลต่างรวม $= 1 + (7 \\times 2) = 15$ แผ่น (สีฟ้ามากกว่าสีเหลือง)"
      ]
    }
  },
  {
    "id": "bm-m64-032",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "กำหนดแบบรูปของจำนวน 2 ชุด ดังตาราง\n\n| ลำดับที่ | 1 | 2 | 3 | 4 | 5 | ... |\n| :--- | :---: | :---: | :---: | :---: | :---: | :---: |\n| ชุด ก | 3 | 5 | 7 | 9 | 11 | ... |\n| ชุด ข | 2 | 7 | 12 | 17 | 22 | ... |\n\nแล้วผลบวกของจำนวนลำดับที่ 99 ของชุด ก และชุด ข มีค่าตรงกับข้อใด",
    "choices": [
      {
        "id": "bm-m64-032-c1",
        "label": "1",
        "content": "691",
        "isCorrect": true
      },
      {
        "id": "bm-m64-032-c2",
        "label": "2",
        "content": "492",
        "isCorrect": false
      },
      {
        "id": "bm-m64-032-c3",
        "label": "3",
        "content": "293",
        "isCorrect": false
      },
      {
        "id": "bm-m64-032-c4",
        "label": "4",
        "content": "198",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พจน์ที่ 99 ของชุด ก คือ 199 และชุด ข คือ 492 ผลบวกเท่ากับ 691",
      "correctChoiceId": "bm-m64-032-c1",
      "steps": [
        "ชุด ก: ลำดับเลขคณิต $a_n = 2n + 1 \\implies a_{99} = 2(99) + 1 = 199$",
        "ชุด ข: ลำดับเลขคณิต $b_n = 5n - 3 \\implies b_{99} = 5(99) - 3 = 492$",
        "ผลบวก $= 199 + 492 = 691$"
      ]
    }
  },
  {
    "id": "bm-m64-033",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "จากชุดข้อมูลที่กำหนดให้ ผลต่างของตัวเลขที่อยู่ในชุดที่ 77 นับจากทางซ้ายมือตัวที่ 10 กับตัวเลขที่มากที่สุดที่อยู่ในชุดเดียวกันมีค่าตรงกับข้อใด\n\nชุดที่ 1 : 1\nชุดที่ 2 : 2, 3, 4\nชุดที่ 3 : 5, 6, 7, 8, 9\nชุดที่ 4 : 10, 11, 12, 13, 14, 15, 16\n...",
    "choices": [
      {
        "id": "bm-m64-033-c1",
        "label": "1",
        "content": "173",
        "isCorrect": false
      },
      {
        "id": "bm-m64-033-c2",
        "label": "2",
        "content": "143",
        "isCorrect": true
      },
      {
        "id": "bm-m64-033-c3",
        "label": "3",
        "content": "133",
        "isCorrect": false
      },
      {
        "id": "bm-m64-033-c4",
        "label": "4",
        "content": "125",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ชุดที่ 77 มีสมาชิก 153 ตัว ผลต่างระหว่างตัวที่ 153 กับตัวที่ 10 คือ 143",
      "correctChoiceId": "bm-m64-033-c2",
      "steps": [
        "จำนวนสมาชิกในชุดที่ $n$ คือ $2n - 1$ ตัว",
        "ชุดที่ 77 มีสมาชิก $2(77) - 1 = 153$ ตัว",
        "เนื่องจากตัวเลขในชุดเรียงต่อกันทีละ 1 ตัวที่มากที่สุดคือตัวที่ 153",
        "ผลต่างกับตัวที่ 10 $= 153 - 10 = 143$"
      ]
    }
  },
  {
    "id": "bm-m64-034",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "ดินน้ำมันทรงสี่เหลี่ยมมุมฉากก้อนหนึ่งซึ่งมีขนาด $6 \\times 9 \\times 10$ เซนติเมตร นำมาปั้นเป็นลูกบาศก์ขนาดเท่า ๆ กันได้ 20 ลูก พอดี ลูกบาศก์แต่ละลูกมีความยาวด้านละประมาณกี่นิ้ว ($1\\text{ นิ้ว} \\approx 2.54\\text{ เซนติเมตร}$)",
    "choices": [
      {
        "id": "bm-m64-034-c1",
        "label": "1",
        "content": "3.10 นิ้ว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-034-c2",
        "label": "2",
        "content": "3.00 นิ้ว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-034-c3",
        "label": "3",
        "content": "1.18 นิ้ว",
        "isCorrect": true
      },
      {
        "id": "bm-m64-034-c4",
        "label": "4",
        "content": "1.52 นิ้ว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ลูกบาศก์มีปริมาตร 27 ลบ.ซม. ยาวด้านละ 3 ซม. แปลงเป็นนิ้วได้ประมาณ 1.18 นิ้ว",
      "correctChoiceId": "bm-m64-034-c3",
      "steps": [
        "ปริมาตรรวม $= 6 \\times 9 \\times 10 = 540$ ลูกบาศก์เซนติเมตร",
        "แบ่งเป็น 20 ลูก ปริมาตรลูกละ $\\frac{540}{20} = 27$ ลูกบาศก์เซนติเมตร",
        "ความยาวด้านของลูกบาศก์ $= \\sqrt[3]{27} = 3$ เซนติเมตร",
        "แปลงเป็นนิ้ว $= \\frac{3}{2.54} \\approx 1.18$ นิ้ว"
      ]
    }
  },
  {
    "id": "bm-m64-035",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 90,
    "tags": [
      "คณิตศาสตร์",
      "เบ็ญจะมะมหาราช",
      "Math Contest 2564"
    ],
    "source": "โครงการเบ็ญจะมะมหาราชส่งเสริมคณิตศาสตร์ 2564",
    "school": "เบ็ญจะมะมหาราช",
    "year": 2564,
    "targetSchool": "benchama",
    "content": "โรงงานผลิตสบู่ยี่ห้อหนึ่ง บรรจุสบู่ใส่ลังกระดาษที่มีความกว้าง 36 เซนติเมตร ยาว 50 เซนติเมตร สูง 40 เซนติเมตร ไว้จำนวน 1,600 กล่อง ถ้าต้องการนำสินค้าทั้งหมดที่บรรจุไว้ไปส่งให้ลูกค้า โดยใช้รถตู้ขนส่ง โดยมีส่วนที่ใช้บรรทุกเป็นทรงสี่เหลี่ยมมุมฉาก วัดขนาดภายในได้ความกว้าง 1.80 เมตร ยาว 3 เมตร และสูง 1.60 เมตร จะต้องขนส่งลังกระดาษที่บรรจุสบู่ไว้ทั้งหมด อย่างน้อยกี่เที่ยว",
    "choices": [
      {
        "id": "bm-m64-035-c1",
        "label": "1",
        "content": "11 เที่ยว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-035-c2",
        "label": "2",
        "content": "12 เที่ยว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-035-c3",
        "label": "3",
        "content": "13 เที่ยว",
        "isCorrect": false
      },
      {
        "id": "bm-m64-035-c4",
        "label": "4",
        "content": "14 เที่ยว",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "รถตู้บรรทุกได้เที่ยวละ 120 ลัง ต้องขน 1,600 ลัง จึงต้องใช้ 14 เที่ยว",
      "correctChoiceId": "bm-m64-035-c4",
      "steps": [
        "ขนาดภายในรถตู้: กว้าง 180 ซม., ยาว 300 ซม., สูง 160 ซม.",
        "แนวกว้างวางได้ $\\frac{180}{36} = 5$ ลัง, แนวยาว $\\frac{300}{50} = 6$ ลัง, แนวสูง $\\frac{160}{40} = 4$ ลัง",
        "บรรทุกได้เที่ยวละ $5 \\times 6 \\times 4 = 120$ ลัง",
        "จำนวนเที่ยว $= \\frac{1,600}{120} = 13.33...$ จึงต้องขนส่งอย่างน้อย 14 เที่ยว"
      ]
    }
  }
];
