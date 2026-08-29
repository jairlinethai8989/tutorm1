import { Question } from '@/types/question';

/**
 * คลังข้อสอบคณิตศาสตร์ 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา พร้อมเฉลยละเอียดและเทคนิคคิดเร็ว
 */

export const BENCHAMA_MATH_QUESTIONS: Question[] = [
  {
    "id": "bm-math-001",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ห.ร.ม. ของ 168 และ 252 มีค่าเท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "42",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "56",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "84",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "126",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ห.ร.ม. ของ 168 และ 252 คือ 84",
      "trickTip": "💡 แยกตัวประกอบหรือตั้งหารสั้น: $168 = 84 \\times 2$, $252 = 84 \\times 3 \\implies \\text{ห.ร.ม.} = 84$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แยกตัวประกอบของแต่ละจำนวน",
          "content": "แยกตัวประกอบเฉพาะ:\n- $168 = 2^3 \\times 3 \\times 7$\n- $252 = 2^2 \\times 3^2 \\times 7$"
        },
        {
          "stepNumber": 2,
          "title": "หาตัวหารร่วมมาก (ห.ร.ม.)",
          "content": "เลือกตัวประกอบเฉพาะที่ซ้ำกันโดยใช้เลขชี้กำลังที่น้อยที่สุด:\n$$\\text{ห.ร.ม.} = 2^2 \\times 3^1 \\times 7^1 = 4 \\times 3 \\times 7 = 84$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-002",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ค.ร.น. ของ 12, 18 และ 30 มีค่าเท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "90",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "120",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "180",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "360",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค.ร.น. ของ 12, 18 และ 30 คือ 180",
      "trickTip": "💡 หา ค.ร.น. จากตัวประกอบสูงสุด: $2^2 \\times 3^2 \\times 5 = 180$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แยกตัวประกอบของทั้งสามจำนวน",
          "content": "- $12 = 2^2 \\times 3$\n- $18 = 2 \\times 3^2$\n- $30 = 2 \\times 3 \\times 5$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณหา ค.ร.น.",
          "content": "นำตัวประกอบเฉพาะทุกตัวมาคูณกันโดยเลือกเลขชี้กำลังที่มากที่สุด:\n$$\\text{ค.ร.น.} = 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-003",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ผลบวกของจำนวนเฉพาะทุกจำนวนที่อยู่ระหว่าง 20 ถึง 40 เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "118",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "120",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "122",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "143",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลบวกของจำนวนเฉพาะระหว่าง 20 ถึง 40 คือ 120",
      "trickTip": "💡 จำนวนเฉพาะระหว่าง 20 ถึง 40 คือ $23 + 29 + 31 + 37 = 120$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนเฉพาะที่อยู่ระหว่าง 20 ถึง 40",
          "content": "จำนวนเฉพาะระหว่าง 20 ถึง 40 ได้แก่: $23, 29, 31, 37$"
        },
        {
          "stepNumber": 2,
          "title": "หาผลรวมของจำนวนเฉพาะทั้งหมด",
          "content": "$$23 + 29 + 31 + 37 = (23 + 37) + (29 + 31) = 60 + 60 = 120$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-004",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จงหาค่าของ $\\frac{1}{1\\times 2} + \\frac{1}{2\\times 3} + \\dots + \\frac{1}{99\\times 100}$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$\\frac{99}{100}$",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$\\frac{100}{101}$",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$\\frac{1}{100}$",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลบวกของอนุกรมเท่ากับ $\\frac{99}{100}$",
      "trickTip": "💡 สูตรเทเลสโคปิก (Telescoping Series): $1 - \\frac{1}{100} = \\frac{99}{100}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กระจายพจน์ด้วยหลักการ Telescoping",
          "content": "ใช้เอกลักษณ์ $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ จะได้:\n$$\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{99} - \\frac{1}{100}\\right)$$"
        },
        {
          "stepNumber": 2,
          "title": "หักล้างพจน์ตรงกลางและคำนวณผลลัพธ์",
          "content": "พจน์ตรงกลางจะหักล้างกันหมด เหลือเฉพาะพจน์แรกและพจน์สุดท้าย:\n$$1 - \\frac{1}{100} = \\frac{99}{100}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-005",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $A = 2^3 \\times 3^2 \\times 5$ และ $B = 2^2 \\times 3^3 \\times 7$ แล้ว ห.ร.ม. ของ $A$ และ $B$ เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "18",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "36",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "72",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "108",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ห.ร.ม. ของ A และ B เท่ากับ 36",
      "trickTip": "💡 เลือกตัวประกอบร่วมกำลังน้อยสุด: $2^2 \\times 3^2 = 36$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "พิจารณาตัวประกอบเฉพาะที่โจทย์กำหนด",
          "content": "- $A = 2^3 \\times 3^2 \\times 5$\n- $B = 2^2 \\times 3^3 \\times 7$"
        },
        {
          "stepNumber": 2,
          "title": "หา ห.ร.ม. จากเลขชี้กำลังที่น้อยที่สุด",
          "content": "เลือกเฉพาะฐานที่มีร่วมกันทั้งสองจำนวน:\n- สำหรับฐาน 2: $\\min(3, 2) = 2 \\implies 2^2$\n- สำหรับฐาน 3: $\\min(2, 3) = 2 \\implies 3^2$\n$$\\text{ห.ร.ม.} = 2^2 \\times 3^2 = 4 \\times 9 = 36$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-006",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จำนวนนับที่มากที่สุดที่หาร 85 และ 137 แล้วเหลือเศษ 1 และ 5 ตามลำดับ คือจำนวนใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "14",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "16",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "18",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จำนวนนับที่มากที่สุดคือ 12",
      "trickTip": "💡 หา ห.ร.ม. ของ $(85 - 1) = 84$ และ $(137 - 5) = 132$ จะได้ $12$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ลบเศษออกจากตัวตั้ง",
          "content": "เพื่อให้หารได้ลงตัว:\n- $85 - 1 = 84$\n- $137 - 5 = 132$"
        },
        {
          "stepNumber": 2,
          "title": "หา ห.ร.ม. ของ 84 และ 132",
          "content": "- $84 = 12 \\times 7$\n- $132 = 12 \\times 11$\nดังนั้น $\\text{ห.ร.ม.} = 12$"
        }
      ]
    }
  },
  {
    "id": "bm-math-007",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จงหาเลขโดดในหลักหน่วยของ $7^{2024}$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "7",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "9",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เลขโดดในหลักหน่วยของ $7^{2024}$ คือ 1",
      "trickTip": "💡 รูปแบบหลักหน่วยของ $7^n$ วนซ้ำทุก 4 รอบ: $7, 9, 3, 1 \\implies 2,024 \\div 4$ ลงตัว ได้ $1$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สังเกตคาบการวนซ้ำของเลขยกกำลังฐาน 7",
          "content": "- $7^1 = 7$ (ลงท้ายด้วย 7)\n- $7^2 = 49$ (ลงท้ายด้วย 9)\n- $7^3 = 343$ (ลงท้ายด้วย 3)\n- $7^4 = 2,401$ (ลงท้ายด้วย 1)\nรูปแบบจะวนซ้ำทุก ๆ 4 ลำดับ คือ $(7, 9, 3, 1)$"
        },
        {
          "stepNumber": 2,
          "title": "นำเลขชี้กำลังมาหารด้วย 4",
          "content": "$$2,024 \\div 4 = 506 \\text{ เศษ } 0$$\nเมื่อเศษเป็น 0 จะตรงกับตัวสุดท้ายของคาบ คือ $1$"
        }
      ]
    }
  },
  {
    "id": "bm-math-008",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จำนวนตัวประกอบบวกทั้งหมดของ 360 มีกี่จำนวน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "18",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "20",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "24",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "30",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จำนวนตัวประกอบบวกของ 360 มีทั้งหมด 24 จำนวน",
      "trickTip": "💡 สูตรจำนวนตัวประกอบ: แยก $360 = 2^3 \\times 3^2 \\times 5^1 \\implies (3+1)(2+1)(1+1) = 24$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แยกตัวประกอบเฉพาะของ 360",
          "content": "$$360 = 2^3 \\times 3^2 \\times 5^1$$"
        },
        {
          "stepNumber": 2,
          "title": "ใช้สูตรคำนวณจำนวนตัวประกอบ",
          "content": "นำเลขชี้กำลังแต่ละตัวบวก 1 แล้วคูณกัน:\n$$(3 + 1)(2 + 1)(1 + 1) = 4 \\times 3 \\times 2 = 24 \\text{ จำนวน}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-009",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จงหาค่าของ $1 - 2 + 3 - 4 + \\dots + 99 - 100$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "-100",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "-50",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "0",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "50",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลบวกเท่ากับ -50",
      "trickTip": "💡 จัดกลุ่มคู่ละ $-1$: มีทั้งหมด 50 คู่ $\\implies (-1) \\times 50 = -50$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "จัดกลุ่มจำนวนเป็นคู่ ๆ",
          "content": "จัดกลุ่มคู่ที่อยู่ติดกัน:\n$$(1 - 2) + (3 - 4) + (5 - 6) + \\dots + (99 - 100)$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณผลรวม",
          "content": "แต่ละคู่มีผลต่างเป็น $-1$ และมีทั้งหมด $\\frac{100}{2} = 50$ คู่:\n$$(-1) \\times 50 = -50$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-010",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $\\frac{a}{b} = \\frac{3}{5}$ และ $a + b = 96$ แล้ว $b - a$ มีค่าเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "18",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "24",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "36",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $b - a = 24$",
      "trickTip": "💡 คิดแบบสัดส่วน: $8\\text{ ส่วน} = 96 \\implies 1\\text{ ส่วน} = 12 \\implies (5-3)\\text{ ส่วน} = 24$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดตัวแปรตามอัตราส่วน",
          "content": "จาก $\\frac{a}{b} = \\frac{3}{5}$ ให้ $a = 3k$ และ $b = 5k$"
        },
        {
          "stepNumber": 2,
          "title": "หาค่า k และคำนวณ $b - a$",
          "content": "$$a + b = 8k = 96 \\implies k = 12$$\n$$b - a = 5k - 3k = 2k = 2(12) = 24$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-011",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เศษส่วน $\\frac{13}{250}$ เขียนให้อยู่ในรูปทศนิยมได้เท่ากับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "0.013",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "0.026",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "0.052",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "0.52",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$\\frac{13}{250}$ เขียนเป็นทศนิยมได้ $0.052$",
      "trickTip": "💡 ปรับตัวส่วนให้เป็น 1,000: $\\frac{13 \\times 4}{250 \\times 4} = \\frac{52}{1,000} = 0.052$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ปรับตัวส่วนเป็น 1,000",
          "content": "$$\\frac{13}{250} = \\frac{13 \\times 4}{250 \\times 4} = \\frac{52}{1,000}$$"
        },
        {
          "stepNumber": 2,
          "title": "แปลงเป็นทศนิยม",
          "content": "$$\\frac{52}{1,000} = 0.052$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-012",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จงหาค่าของ $\\sqrt{121} + \\sqrt{144} - \\sqrt{81}$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "14",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "16",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "18",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$\\sqrt{121} + \\sqrt{144} - \\sqrt{81} = 14$",
      "trickTip": "💡 ถอดรากที่สอง: $11 + 12 - 9 = 14$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ถอดรากที่สองของแต่ละพจน์",
          "content": "- $\\sqrt{121} = 11$\n- $\\sqrt{144} = 12$\n- $\\sqrt{81} = 9$"
        },
        {
          "stepNumber": 2,
          "title": "บวกลบผลลัพธ์",
          "content": "$$11 + 12 - 9 = 23 - 9 = 14$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-013",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เศษที่ได้จากการหาร $3^{50}$ ด้วย 8 เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "7",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เศษที่ได้จากการหาร $3^{50}$ ด้วย 8 เท่ากับ 1",
      "trickTip": "💡 ทฤษฎีเศษเหลือ: $3^2 = 9 \\equiv 1 \\pmod 8 \\implies 9^{25} \\equiv 1^{25} = 1$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "จัดรูปฐานยกกำลังสอง",
          "content": "$$3^{50} = (3^2)^{25} = 9^{25}$$"
        },
        {
          "stepNumber": 2,
          "title": "หาเศษเมื่อหารด้วย 8",
          "content": "เนื่องจาก $9 = 8(1) + 1$ (หารด้วย 8 เหลือเศษ 1)\nดังนั้น $9^{25}$ เมื่อหารด้วย 8 จะเหลือเศษ $1^{25} = 1$"
        }
      ]
    }
  },
  {
    "id": "bm-math-014",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จำนวนนับตั้งแต่ 1 ถึง 100 มีกี่จำนวนที่หารด้วย 3 หรือ 5 ลงตัว",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "47",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "51",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "53",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "60",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีจำนวนนับทั้งหมด 47 จำนวน",
      "trickTip": "💡 กฎรวมเข้าและตัดออก: $n(A \\cup B) = 33 + 20 - 6 = 47$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนที่หารด้วย 3 และ 5 ลงตัว",
          "content": "- หารด้วย 3 ลงตัว: $\\lfloor 100 \\div 3 \\rfloor = 33$ จำนวน\n- หารด้วย 5 ลงตัว: $\\lfloor 100 \\div 5 \\rfloor = 20$ จำนวน"
        },
        {
          "stepNumber": 2,
          "title": "หาจำนวนที่หารด้วยทั้ง 3 และ 5 ลงตัว (ค.ร.น. คือ 15)",
          "content": "- หารด้วย 15 ลงตัว: $\\lfloor 100 \\div 15 \\rfloor = 6$ จำนวน"
        },
        {
          "stepNumber": 3,
          "title": "คำนวณผลรวม",
          "content": "$$\\text{จำนวนทั้งหมด} = 33 + 20 - 6 = 47 \\text{ จำนวน}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-015",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กำหนด $A = 0.\\dot{4}$ และ $B = 0.\\dot{1}\\dot{8}$ จงหาค่าของ $A + B$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$\\frac{31}{99}$",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$\\frac{58}{99}$",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$\\frac{62}{99}$",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "$\\frac{2}{3}$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $A + B = \\frac{62}{99}$",
      "trickTip": "💡 แปลงทศนิยมซ้ำ: $0.\\dot{4} = \\frac{4}{9} = \\frac{44}{99}$, $0.\\dot{1}\\dot{8} = \\frac{18}{99} \\implies \\frac{62}{99}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลงทศนิยมซ้ำเป็นเศษส่วน",
          "content": "- $A = 0.\\dot{4} = \\frac{4}{9} = \\frac{44}{99}$\n- $B = 0.\\dot{1}\\dot{8} = \\frac{18}{99}$"
        },
        {
          "stepNumber": 2,
          "title": "บวกเศษส่วน",
          "content": "$$A + B = \\frac{44}{99} + \\frac{18}{99} = \\frac{62}{99}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-016",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $x$ เป็นจำนวนเต็มบวกที่น้อยที่สุดที่ทำให้ $720x$ เป็นกำลังสองสมบูรณ์ แล้ว $x$ เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "2",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "6",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x$ ที่น้อยที่สุดคือ 5",
      "trickTip": "💡 แยกตัวประกอบ $720 = 2^4 \\times 3^2 \\times 5^1 \\implies$ คูณด้วย $5$ เพื่อให้เลขชี้กำลังเป็นเลขคู่ทั้งหมด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แยกตัวประกอบเฉพาะของ 720",
          "content": "$$720 = 2^4 \\times 3^2 \\times 5^1$$"
        },
        {
          "stepNumber": 2,
          "title": "พิจารณาเงื่อนไขกำลังสองสมบูรณ์",
          "content": "กำลังสองสมบูรณ์ต้องมีเลขชี้กำลังเป็นเลขคู่ทั้งหมด\n- ฐาน 2 มีกำลัง 4 (คู่แล้ว)\n- ฐาน 3 มีกำลัง 2 (คู่แล้ว)\n- ฐาน 5 มีกำลัง 1 (เป็นเลขคี่) จึงต้องคูณด้วย $5^1$ เพื่อให้กลายเป็น $5^2$\nดังนั้น $x = 5$"
        }
      ]
    }
  },
  {
    "id": "bm-math-017",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ห.ร.ม. และ ค.ร.น. ของจำนวนนับสองจำนวนคือ 12 และ 360 ตามลำดับ ถ้าจำนวนหนึ่งคือ 60 อีกจำนวนหนึ่งคือเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "48",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "64",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "72",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "96",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อีกจำนวนหนึ่งคือ 72",
      "trickTip": "💡 สูตรความสัมพันธ์: $\\text{ห.ร.ม.} \\times \\text{ค.ร.น.} = A \\times B \\implies B = \\frac{12 \\times 360}{60} = 72$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
          "content": "$$\\text{ห.ร.ม.} \\times \\text{ค.ร.น.} = A \\times B$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและแก้สมการหาจำนวนที่สอง",
          "content": "$$12 \\times 360 = 60 \\times B$$\n$$B = \\frac{12 \\times 360}{60} = 12 \\times 6 = 72$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-018",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จงหาค่าของ $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\frac{1}{32} + \\frac{1}{64}$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$\\frac{31}{32}$",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$\\frac{63}{64}$",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$\\frac{127}{128}$",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลบวกเท่ากับ $\\frac{63}{64}$",
      "trickTip": "💡 อนุกรมเรขาคณิต: $1 - \\frac{1}{64} = \\frac{63}{64}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ปรับตัวส่วนร่วมเป็น 64",
          "content": "$$\\frac{32}{64} + \\frac{16}{64} + \\frac{8}{64} + \\frac{4}{64} + \\frac{2}{64} + \\frac{1}{64}$$"
        },
        {
          "stepNumber": 2,
          "title": "รวมตัวเศษ",
          "content": "$$\\frac{32 + 16 + 8 + 4 + 2 + 1}{64} = \\frac{63}{64}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-019",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เลขสามหลักที่น้อยที่สุดที่หารด้วย 6, 8 และ 10 ลงตัว คือจำนวนใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "120",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "240",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "360",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "480",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เลขสามหลักที่น้อยที่สุดคือ 120",
      "trickTip": "💡 หา ค.ร.น. ของ 6, 8, 10 ได้ 120 ซึ่งเป็นเลขสามหลักที่น้อยที่สุดพอดี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หา ค.ร.น. ของ 6, 8 และ 10",
          "content": "- $6 = 2 \\times 3$\n- $8 = 2^3$\n- $10 = 2 \\times 5$\n$$\\text{ค.ร.น.} = 2^3 \\times 3 \\times 5 = 120$$"
        },
        {
          "stepNumber": 2,
          "title": "ตรวจสอบเงื่อนไขเลขสามหลัก",
          "content": "พหุคูณของ 120 ได้แก่ $120, 240, 360, \\dots$\nจำนวนแรกที่เป็นเลขสามหลักคือ $120$"
        }
      ]
    }
  },
  {
    "id": "bm-math-020",
    "subjectId": "math",
    "topicId": "math-arithmetic",
    "topicName": "จำนวนและการคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "จำนวนและการคำนวณ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กำหนด $a * b = 2a + 3b - 1$ จงหาค่าของ $4 * 5$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "20",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "22",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "24",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "26",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $4 * 5 = 22$",
      "trickTip": "💡 แทนค่าตามกฎ: $2(4) + 3(5) - 1 = 8 + 15 - 1 = 22$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ดูเงื่อนไขตัวดำเนินการพิเศษ",
          "content": "โจทย์กำหนด $a * b = 2a + 3b - 1$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่า $a = 4, b = 5$",
          "content": "$$4 * 5 = 2(4) + 3(5) - 1 = 8 + 15 - 1 = 22$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-021",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $3x + 7 = 28$ แล้วค่าของ $2x - 3$ เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "9",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "11",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "13",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "15",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $2x - 3 = 11$",
      "trickTip": "💡 $3x = 21 \\implies x = 7 \\implies 2(7) - 3 = 11$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แก้สมการหา $x$",
          "content": "$$3x + 7 = 28$$\n$$3x = 21 \\implies x = 7$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณค่า $2x - 3$",
          "content": "$$2(7) - 3 = 14 - 3 = 11$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-022",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $\\frac{x - 3}{4} = \\frac{x + 1}{6}$ จงหาค่าของ $x$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "7",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "9",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "11",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "13",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x = 11$",
      "trickTip": "💡 คูณไขว้: $6(x - 3) = 4(x + 1) \\implies 2x = 22 \\implies x = 11$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "คูณไขว้กำจัดเศษส่วน",
          "content": "$$\\frac{x - 3}{4} = \\frac{x + 1}{6}$$\n$$6(x - 3) = 4(x + 1)$$"
        },
        {
          "stepNumber": 2,
          "title": "กระจายและแก้สมการ",
          "content": "$$6x - 18 = 4x + 4$$\n$$2x = 22 \\implies x = 11$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-023",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กำหนดระบบสมการ $x + y = 25$ และ $x - y = 7$ จงหาค่าของ $x \\times y$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "124",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "144",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "156",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "168",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x \\times y = 144$",
      "trickTip": "💡 บวกและลบสมการ: $x = 16, y = 9 \\implies 16 \\times 9 = 144$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ตั้งระบบสมการ",
          "content": "1) $x + y = 25$\n2) $x - y = 7$"
        },
        {
          "stepNumber": 2,
          "title": "แก้หาระบบสมการ",
          "content": "นำ (1) + (2): $2x = 32 \\implies x = 16$\nแทนใน (1): $16 + y = 25 \\implies y = 9$"
        },
        {
          "stepNumber": 3,
          "title": "คำนวณผลคูณ",
          "content": "$$x \\times y = 16 \\times 9 = 144$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-024",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แบบรูป $2, 5, 10, 17, 26, \\dots$ พจน์ที่ 10 มีค่าเท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "82",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "99",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "101",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "122",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พจน์ที่ 10 คือ 101",
      "trickTip": "💡 พจน์ทั่วไปคือ $n^2 + 1 \\implies 10^2 + 1 = 101$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หารูปแบบของลำดับ",
          "content": "สังเกตรูปแบบ: $1^2+1=2, 2^2+1=5, 3^2+1=10, 4^2+1=17, 5^2+1=26$\nรูปทั่วไปคือ $a_n = n^2 + 1$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่า $n = 10$",
          "content": "$$a_{10} = 10^2 + 1 = 100 + 1 = 101$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-025",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $a + b = 10$ และ $ab = 21$ จงหาค่าของ $a^2 + b^2$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "54",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "58",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "62",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "68",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $a^2 + b^2 = 58$",
      "trickTip": "💡 กำลังสองสมบูรณ์: $a^2 + b^2 = (a+b)^2 - 2ab = 100 - 42 = 58$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้เอกลักษณ์ผลบวกกำลังสอง",
          "content": "$$(a + b)^2 = a^2 + 2ab + b^2 \\implies a^2 + b^2 = (a + b)^2 - 2ab$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่า $a + b = 10$ และ $ab = 21$",
          "content": "$$a^2 + b^2 = 10^2 - 2(21) = 100 - 42 = 58$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-026",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ผลบวกของจำนวนเต็มสามจำนวนเรียงติดกันเท่ากับ 72 จงหาจำนวนที่มากที่สุด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "23",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "24",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "25",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "26",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จำนวนที่มากที่สุดคือ 25",
      "trickTip": "💡 เฉลี่ย 3 จำนวน $= 24 \\implies 23, 24, 25 \\implies$ มากสุดคือ $25$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ตั้งสมการแทนจำนวนเรียงติดกัน",
          "content": "ให้สามจำนวนเป็น $x, x + 1, x + 2$"
        },
        {
          "stepNumber": 2,
          "title": "แก้สมการหา $x$",
          "content": "$$x + (x + 1) + (x + 2) = 72$$\n$$3x + 3 = 72 \\implies 3x = 69 \\implies x = 23$$"
        },
        {
          "stepNumber": 3,
          "title": "หาจำนวนที่มากที่สุด",
          "content": "$$\\text{จำนวนมากที่สุด} = x + 2 = 23 + 2 = 25$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-027",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $2^{x+1} = 64$ แล้วค่าของ $x^2$ เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "16",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "25",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "36",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "49",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x^2 = 25$",
      "trickTip": "💡 $2^{x+1} = 64 = 2^6 \\implies x = 5 \\implies x^2 = 25$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แก้สมการเลขยกกำลัง",
          "content": "$$2^{x+1} = 64 = 2^6$$\n$$x + 1 = 6 \\implies x = 5$$"
        },
        {
          "stepNumber": 2,
          "title": "หาค่า $x^2$",
          "content": "$$x^2 = 5^2 = 25$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-028",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $3x - 2y = 12$ และ $y = 3$ แล้ว $x$ มีค่าเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "4",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "5",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "6",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "7",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x = 6$",
      "trickTip": "💡 แทน $y = 3$: $3x - 6 = 12 \\implies 3x = 18 \\implies x = 6$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แทนค่า $y = 3$ ในสมการ",
          "content": "$$3x - 2(3) = 12$$\n$$3x - 6 = 12$$"
        },
        {
          "stepNumber": 2,
          "title": "แก้สมการหา $x$",
          "content": "$$3x = 18 \\implies x = 6$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-029",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ผลบวกของอนุกรมเลขคณิต $1 + 3 + 5 + \\dots + 39$ เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "360",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "400",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "420",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "441",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลบวกของอนุกรมเท่ากับ 400",
      "trickTip": "💡 สูตรผลบวกเลขคี่ $n$ พจน์แรก $= n^2$: มี 20 พจน์ $\\implies 20^2 = 400$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนพจน์ $n$",
          "content": "$$n = \\frac{39 - 1}{2} + 1 = 19 + 1 = 20$$"
        },
        {
          "stepNumber": 2,
          "title": "ใช้สูตรผลบวกเลขคี่",
          "content": "$$S_{20} = n^2 = 20^2 = 400$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-030",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $\\frac{2}{x} + \\frac{3}{x} = 10$ จงหาค่าของ $x$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "0.25",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "0.5",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "2",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x = 0.5$",
      "trickTip": "💡 รวมตัวเศษ: $\\frac{5}{x} = 10 \\implies x = \\frac{5}{10} = 0.5$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "รวมพจน์เศษส่วน",
          "content": "$$\\frac{2 + 3}{x} = 10 \\implies \\frac{5}{x} = 10$$"
        },
        {
          "stepNumber": 2,
          "title": "แก้สมการหา $x$",
          "content": "$$10x = 5 \\implies x = \\frac{5}{10} = 0.5$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-031",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปัจจุบันพ่อมีอายุเป็น 4 เท่าของลูก อีก 5 ปีข้างหน้า พ่อจะมีอายุเป็น 3 เท่าของลูก ปัจจุบันลูกมีอายุกี่ปี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "8 ปี",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "10 ปี",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12 ปี",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "15 ปี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปัจจุบันลูกมีอายุ 10 ปี",
      "trickTip": "💡 สมการอายุ: $4x + 5 = 3(x + 5) \\implies 4x + 5 = 3x + 15 \\implies x = 10$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดตัวแปร",
          "content": "ให้ปัจจุบันลูกอายุ $x$ ปี ดังนั้นพ่อมีอายุ $4x$ ปี"
        },
        {
          "stepNumber": 2,
          "title": "ตั้งสมการตามเงื่อนไขในอีก 5 ปีข้างหน้า",
          "content": "- อีก 5 ปี ลูกอายุ $x + 5$ ปี\n- อีก 5 ปี พ่ออายุ $4x + 5$ ปี\n$$4x + 5 = 3(x + 5)$$"
        },
        {
          "stepNumber": 3,
          "title": "แก้สมการหาอายุของลูก",
          "content": "$$4x + 5 = 3x + 15$$\n$$4x - 3x = 15 - 5 \\implies x = 10 \\text{ ปี}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-032",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $x^2 - y^2 = 45$ และ $x - y = 5$ แล้วค่าของ $x + y$ เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "7",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "9",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "11",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "15",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x + y = 9$",
      "trickTip": "💡 ผลต่างกำลังสอง: $(x - y)(x + y) = 45 \\implies 5(x + y) = 45 \\implies x + y = 9$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้เอกลักษณ์ผลต่างกำลังสอง",
          "content": "$$x^2 - y^2 = (x - y)(x + y)$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าที่โจทย์กำหนด",
          "content": "$$45 = 5(x + y)$$\n$$x + y = \\frac{45}{5} = 9$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-033",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5}$ และ $a + b + c = 60$ แล้ว $c$ มีค่าเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "15",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "20",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "25",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "30",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $c = 25$",
      "trickTip": "💡 รวมสัดส่วน $3+4+5=12\\text{ ส่วน} = 60 \\implies 1\\text{ ส่วน} = 5 \\implies c = 5 \\times 5 = 25$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดตัวแปรร่วม $k$",
          "content": "ให้ $\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k$\nจะได้ $a = 3k, b = 4k, c = 5k$"
        },
        {
          "stepNumber": 2,
          "title": "หาค่า $k$ จากผลรวม",
          "content": "$$a + b + c = 3k + 4k + 5k = 12k = 60 \\implies k = 5$$"
        },
        {
          "stepNumber": 3,
          "title": "คำนวณค่า $c$",
          "content": "$$c = 5k = 5(5) = 25$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-034",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $5(2x - 1) - 3(x + 2) = 17$ จงหาค่าของ $x$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "3",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "4",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "6",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x = 4$",
      "trickTip": "💡 กระจายวงเล็บ: $10x - 5 - 3x - 6 = 17 \\implies 7x = 28 \\implies x = 4$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กระจายวงเล็บ",
          "content": "$$5(2x - 1) - 3(x + 2) = 17$$\n$$10x - 5 - 3x - 6 = 17$$"
        },
        {
          "stepNumber": 2,
          "title": "รวมพจน์และแก้สมการ",
          "content": "$$7x - 11 = 17$$\n$$7x = 28 \\implies x = 4$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-035",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แบบรูป $1, 4, 9, 16, 25, \\dots$ พจน์ที่เท่าใดมีค่าเท่ากับ 225",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "13",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "14",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "15",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "16",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พจน์ที่ 15 มีค่าเท่ากับ 225",
      "trickTip": "💡 ลำดับกำลังสอง: $n^2 = 225 \\implies n = 15$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สังเกตรูปแบบของลำดับ",
          "content": "ลำดับ $1, 4, 9, 16, 25, \\dots$ คือลำดับกำลังสอง $a_n = n^2$"
        },
        {
          "stepNumber": 2,
          "title": "แก้สมการหาพจน์ $n$",
          "content": "$$n^2 = 225$$\n$$n = \\sqrt{225} = 15$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-036",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $2a + 3b = 19$ และ $3a + 2b = 21$ จงหาค่าของ $a + b$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "7",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "8",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "9",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "10",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $a + b = 8$",
      "trickTip": "💡 นำสองสมการมาบวกกัน: $5a + 5b = 40 \\implies a + b = 8$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ตั้งสมการทั้งสอง",
          "content": "1) $2a + 3b = 19$\n2) $3a + 2b = 21$"
        },
        {
          "stepNumber": 2,
          "title": "นำสมการ (1) + (2)",
          "content": "$$(2a + 3a) + (3b + 2b) = 19 + 21$$\n$$5a + 5b = 40$$\n$$5(a + b) = 40 \\implies a + b = 8$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-037",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จงหาค่า $x$ จากสมการ $\\frac{3x-1}{2} + \\frac{x+1}{4} = 5$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "2",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "4",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "5",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x = 3$",
      "trickTip": "💡 คูณ 4 ตลอดสมการ: $2(3x - 1) + (x + 1) = 20 \\implies 7x = 21 \\implies x = 3$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "คูณสมการด้วย ค.ร.น. ของตัวส่วน (4)",
          "content": "$$4 \\times \\left(\\frac{3x - 1}{2}\\right) + 4 \\times \\left(\\frac{x + 1}{4}\\right) = 4 \\times 5$$\n$$2(3x - 1) + (x + 1) = 20$$"
        },
        {
          "stepNumber": 2,
          "title": "กระจายและแก้สมการ",
          "content": "$$6x - 2 + x + 1 = 20$$\n$$7x - 1 = 20$$\n$$7x = 21 \\implies x = 3$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-038",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $x + \\frac{1}{x} = 4$ จงหาค่าของ $x^2 + \\frac{1}{x^2}$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "14",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "16",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "18",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x^2 + \\frac{1}{x^2} = 14$",
      "trickTip": "💡 ยกกำลังสองทั้งสองข้าง: $\\left(x + \\frac{1}{x}\\right)^2 - 2 = 16 - 2 = 14$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ยกกำลังสองทั้งสองข้าง",
          "content": "$$\\left(x + \\frac{1}{x}\\right)^2 = 4^2$$\n$$x^2 + 2(x)\\left(\\frac{1}{x}\\right) + \\frac{1}{x^2} = 16$$\n$$x^2 + 2 + \\frac{1}{x^2} = 16$$"
        },
        {
          "stepNumber": 2,
          "title": "ย้ายข้างคำนวณผลลัพธ์",
          "content": "$$x^2 + \\frac{1}{x^2} = 16 - 2 = 14$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-039",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ผลคูณของเลขสองจำนวนเท่ากับ 120 และผลบวกเท่ากับ 23 จงหาผลต่างของเลขสองจำนวนนี้",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "5",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "7",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "9",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "11",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลต่างของเลขสองจำนวนนี้คือ 7",
      "trickTip": "💡 หาคู่คูณ 120 ที่บวกกันได้ 23: คือ 15 และ 8 $\\implies 15 - 8 = 7$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิเคราะห์คู่ตัวเลข",
          "content": "หาเลขสองจำนวน $x$ และ $y$ ที่ $x + y = 23$ และ $xy = 120$\nคู่ตัวคูณของ 120 ได้แก่ $(1, 120), (2, 60), (3, 40), (4, 30), (5, 24), (6, 20), (8, 15)$\nคู่ที่บวกกันได้ 23 คือ $15$ และ $8$"
        },
        {
          "stepNumber": 2,
          "title": "หาผลต่าง",
          "content": "$$\\text{ผลต่าง} = 15 - 8 = 7$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-040",
    "subjectId": "math",
    "topicId": "math-algebra",
    "topicName": "พีชคณิตและสมการเชิงซ้อน",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 80,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "พีชคณิตและสมการ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า $f(n) = 3n - 2$ จงหาค่าของ $f(1) + f(2) + f(3) + f(4) + f(5)$",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "30",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "35",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "40",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "45",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลรวมเท่ากับ 35",
      "trickTip": "💡 คำนวณแต่ละพจน์: $1 + 4 + 7 + 10 + 13 = 35$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาค่าของฟังก์ชันในแต่ละพจน์",
          "content": "- $f(1) = 3(1) - 2 = 1$\n- $f(2) = 3(2) - 2 = 4$\n- $f(3) = 3(3) - 2 = 7$\n- $f(4) = 3(4) - 2 = 10$\n- $f(5) = 3(5) - 2 = 13$"
        },
        {
          "stepNumber": 2,
          "title": "หาผลรวมทั้งหมด",
          "content": "$$1 + 4 + 7 + 10 + 13 = 35$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-041",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รูปสามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 6 ซม. และ 8 ซม. ด้านตรงข้ามมุมฉากยาวกี่ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "9 ซม.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "10 ซม.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12 ซม.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "14 ซม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ด้านตรงข้ามมุมฉากยาว 10 ซม.",
      "trickTip": "💡 ทฤษฎีบทพีทาโกรัส: $c = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้ทฤษฎีบทพีทาโกรัส",
          "content": "$$c^2 = a^2 + b^2$$\n$$c^2 = 6^2 + 8^2 = 36 + 64 = 100$$"
        },
        {
          "stepNumber": 2,
          "title": "ถอดรากที่สอง",
          "content": "$$c = \\sqrt{100} = 10 \\text{ ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-042",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รูปสี่เหลี่ยมจัตุรัสมีเส้นทแยงมุมยาว $10\\sqrt{2}$ ซม. จะมีพื้นที่กี่ตารางซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "50",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "100",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "150",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "200",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสี่เหลี่ยมจัตุรัสเท่ากับ 100 ตารางซม.",
      "trickTip": "💡 สูตรพื้นที่จากเส้นทแยงมุม: $\\frac{1}{2} \\times d^2 = \\frac{1}{2} \\times (10\\sqrt{2})^2 = 100\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาความยาวด้านของสี่เหลี่ยมจัตุรัส",
          "content": "จากเส้นทแยงมุม $d = a\\sqrt{2} = 10\\sqrt{2}$ จะได้ความยาวด้าน $a = 10$ ซม."
        },
        {
          "stepNumber": 2,
          "title": "คำนวณพื้นที่",
          "content": "$$\\text{พื้นที่} = a^2 = 10^2 = 100 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-043",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วงกลมที่มีเส้นผ่านศูนย์กลางยาว 14 ซม. มีพื้นที่กี่ตารางซม. (กำหนด $\\pi \\approx \\frac{22}{7}$)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "154",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "308",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "44",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "88",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่วงกลมเท่ากับ 154 ตารางซม.",
      "trickTip": "💡 พื้นที่วงกลม: $\\pi r^2 = \\frac{22}{7} \\times 7^2 = 154\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หารัศมีของวงกลม",
          "content": "$$r = \\frac{\\text{เส้นผ่านศูนย์กลาง}}{2} = \\frac{14}{2} = 7 \\text{ ซม.}$$"
        },
        {
          "stepNumber": 2,
          "title": "ใช้สูตรพื้นที่วงกลม",
          "content": "$$\\text{พื้นที่} = \\pi r^2 = \\frac{22}{7} \\times 7 \\times 7 = 22 \\times 7 = 154 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-044",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มุมภายในของรูปหกเหลี่ยมด้านเท่ามุมเท่าแต่ละมุมมีขนาดกี่องศา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "108 องศา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "120 องศา",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "135 องศา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "140 องศา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มุมภายในแต่ละมุมมีขนาด 120 องศา",
      "trickTip": "💡 ขนาดแต่ละมุม: $\\frac{(6 - 2) \\times 180^\\circ}{6} = 120^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาผลรวมมุมภายในรูปหกเหลี่ยม",
          "content": "$$\\text{ผลรวมมุมภายใน} = (n - 2) \\times 180^\\circ = (6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ$$"
        },
        {
          "stepNumber": 2,
          "title": "หามุมภายในแต่ละมุม",
          "content": "$$\\text{ขนาดแต่ละมุม} = \\frac{720^\\circ}{6} = 120^\\circ$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-045",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กล่องทรงสี่เหลี่ยมมุมฉากมีขนาดกว้าง 5 ซม. ยาว 8 ซม. สูง 10 ซม. มีปริมาตรกี่ลูกบาศก์ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "300",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "360",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "400",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "450",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปริมาตรกล่องเท่ากับ 400 ลูกบาศก์ซม.",
      "trickTip": "💡 ปริมาตรทรงสี่เหลี่ยมมุมฉาก: $5 \\times 8 \\times 10 = 400\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรปริมาตรทรงสี่เหลี่ยมมุมฉาก",
          "content": "$$\\text{ปริมาตร} = \\text{กว้าง} \\times \\text{ยาว} \\times \\text{สูง}$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและคำนวณ",
          "content": "$$\\text{ปริมาตร} = 5 \\times 8 \\times 10 = 40 \\times 10 = 400 \\text{ ลูกบาศก์ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-046",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พื้นที่ผิวทั้งหมดของลูกบาศก์ที่มีปริมาตร 64 ลูกบาศก์ซม. เท่ากับกี่ตารางซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "64",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "96",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "128",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "144",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่ผิวทั้งหมดเท่ากับ 96 ตารางซม.",
      "trickTip": "💡 ด้าน $a = \\sqrt[3]{64} = 4 \\implies \\text{พื้นที่ผิว} = 6a^2 = 6(16) = 96\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาความยาวด้านของลูกบาศก์",
          "content": "$$\\text{ปริมาตร} = a^3 = 64 \\implies a = \\sqrt[3]{64} = 4 \\text{ ซม.}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณพื้นที่ผิวทั้งหมด 6 ด้าน",
          "content": "$$\\text{พื้นที่ผิวทั้งหมด} = 6 \\times a^2 = 6 \\times 4^2 = 6 \\times 16 = 96 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-047",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้ามุมสองมุมประกอบกันเป็นมุมตรง ($180^\\circ$) ในอัตราส่วน $4 : 5$ มุมที่มีขนาดใหญ่กว่ามีขนาดกี่องศา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "80 องศา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "90 องศา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "100 องศา",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "110 องศา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มุมที่มีขนาดใหญ่กว่ามีขนาด 100 องศา",
      "trickTip": "💡 สัดส่วน: $4+5=9\\text{ ส่วน} = 180^\\circ \\implies 1\\text{ ส่วน} = 20^\\circ \\implies 5\\text{ ส่วน} = 100^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดสัดส่วนของสองมุม",
          "content": "อัตราส่วน $4 : 5$ รวมกันได้ $4 + 5 = 9$ ส่วน เท่ากับ $180^\\circ$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณขนาดของมุมที่ใหญ่กว่า (5 ส่วน)",
          "content": "$$\\text{ขนาดของมุม} = \\frac{5}{9} \\times 180^\\circ = 5 \\times 20^\\circ = 100^\\circ$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-048",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รูปสี่เหลี่ยมขนมเปียกปูนมีเส้นทแยงมุมยาว 12 ซม. และ 16 ซม. จะมีพื้นที่กี่ตารางซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "48",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "96",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "144",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "192",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสี่เหลี่ยมขนมเปียกปูนเท่ากับ 96 ตารางซม.",
      "trickTip": "💡 พื้นที่สี่เหลี่ยมขนมเปียกปูน: $\\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 12 \\times 16 = 96\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรพื้นที่จากเส้นทแยงมุม",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times \\text{ผลคูณของความยาวเส้นทแยงมุม}$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและคำนวณ",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times 12 \\times 16 = 6 \\times 16 = 96 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-049",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มุมภายนอกของรูปแปดเหลี่ยมด้านเท่ามุมเท่ามีขนาดกี่องศา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "30 องศา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "45 องศา",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "60 องศา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "72 องศา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มุมภายนอกของรูปแปดเหลี่ยมมีขนาด 45 องศา",
      "trickTip": "💡 มุมภายนอกรูปหลายเหลี่ยม: $\\frac{360^\\circ}{8} = 45^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สมบัติผลรวมมุมภายนอก",
          "content": "ผลรวมมุมภายนอกของรูปหลายเหลี่ยมทุกรูปมีขนาดเท่ากับ $360^\\circ$"
        },
        {
          "stepNumber": 2,
          "title": "หามุมภายนอกแต่ละมุมของรูปแปดเหลี่ยมด้านเท่ามุมเท่า",
          "content": "$$\\text{ขนาดมุมภายนอก} = \\frac{360^\\circ}{8} = 45^\\circ$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-050",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ทรงกระบอกที่มีรัศมีฐาน 7 ซม. และสูง 10 ซม. มีปริมาตรกี่ลูกบาศก์ซม. (กำหนด $\\pi \\approx \\frac{22}{7}$)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1540",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1680",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1760",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1820",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปริมาตรทรงกระบอกเท่ากับ 1,540 ลูกบาศก์ซม.",
      "trickTip": "💡 ปริมาตรทรงกระบอก: $\\pi r^2 h = \\frac{22}{7} \\times 7^2 \\times 10 = 1,540\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรปริมาตรทรงกระบอก",
          "content": "$$\\text{ปริมาตร} = \\pi r^2 h$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่า $r = 7, h = 10, \\pi = \\frac{22}{7}$",
          "content": "$$\\text{ปริมาตร} = \\frac{22}{7} \\times 7 \\times 7 \\times 10 = 22 \\times 7 \\times 10 = 1,540 \\text{ ลูกบาศก์ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-051",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สามเหลี่ยมรูปหนึ่งมีฐานยาว 14 ซม. สูง 9 ซม. มีพื้นที่กี่ตารางซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "56",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "63",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "72",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "126",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสามเหลี่ยมเท่ากับ 63 ตารางซม.",
      "trickTip": "💡 พื้นที่สามเหลี่ยม: $\\frac{1}{2} \\times \\text{ฐาน} \\times \\text{สูง} = \\frac{1}{2} \\times 14 \\times 9 = 63\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรพื้นที่รูปสามเหลี่ยม",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times \\text{ฐาน} \\times \\text{สูง}$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและคำนวณ",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times 14 \\times 9 = 7 \\times 9 = 63 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-052",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รูปสี่เหลี่ยมคางหมูมีด้านคู่ขนานยาว 8 ซม. และ 14 ซม. สูง 6 ซม. มีพื้นที่กี่ตารางซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "54",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "66",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "72",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "88",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสี่เหลี่ยมคางหมูเท่ากับ 66 ตารางซม.",
      "trickTip": "💡 พื้นที่สี่เหลี่ยมคางหมู: $\\frac{1}{2} \\times (8 + 14) \\times 6 = 66\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรพื้นที่รูปสี่เหลี่ยมคางหมู",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times (\\text{ผลบวกด้านคู่ขนาน}) \\times \\text{สูง}$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและคำนวณ",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times (8 + 14) \\times 6 = \\frac{1}{2} \\times 22 \\times 6 = 11 \\times 6 = 66 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-053",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วงแหวนมีรัศมีวงนอก 10 ซม. และรัศมีวงใน 7 ซม. มีพื้นที่ประมาณกี่ตารางซม. (กำหนด $\\pi \\approx \\frac{22}{7}$)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "150.8",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "160.3",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "168.5",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "172.4",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่วงแหวนประมาณ 160.3 ตารางซม.",
      "trickTip": "💡 พื้นที่วงแหวน: $\\pi(R^2 - r^2) = \\frac{22}{7} \\times (10^2 - 7^2) = \\frac{22 \\times 51}{7} \\approx 160.3\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรพื้นที่วงแหวน",
          "content": "$$\\text{พื้นที่วงแหวน} = \\pi R^2 - \\pi r^2 = \\pi (R^2 - r^2)$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่ารัศมีวงนอก $R = 10$ และวงใน $r = 7$",
          "content": "$$\\text{พื้นที่} = \\frac{22}{7} \\times (10^2 - 7^2) = \\frac{22}{7} \\times (100 - 49) = \\frac{22}{7} \\times 51 = \\frac{1,122}{7} \\approx 160.3 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-054",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เส้นรอบรูปของสี่เหลี่ยมผืนผ้าเท่ากับ 40 ซม. ถ้าด้านยาวยาวกว่าด้านกว้าง 4 ซม. พื้นที่จะเป็นกี่ตารางซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "84",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "96",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "100",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "108",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสี่เหลี่ยมผืนผ้าเท่ากับ 96 ตารางซม.",
      "trickTip": "💡 กว้าง $= 8$, ยาว $= 12 \\implies \\text{พื้นที่} = 8 \\times 12 = 96\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ตั้งสมการหาความกว้างและความยาว",
          "content": "ให้ด้านกว้างยาว $x$ ซม. ดังนั้นด้านยาวยาว $x + 4$ ซม.\nเส้นรอบรูป $= 2(\\text{กว้าง} + \\text{ยาว}) = 40$\n$$2(x + x + 4) = 40$$\n$$2x + 4 = 20 \\implies 2x = 16 \\implies x = 8 \\text{ ซม.}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณพื้นที่",
          "content": "ด้านกว้าง $= 8$ ซม. และด้านยาว $= 8 + 4 = 12$ ซม.\n$$\\text{พื้นที่} = 8 \\times 12 = 96 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-055",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้าเพิ่มรัศมีของวงกลมเป็น 2 เท่า พื้นที่ของวงกลมจะเพิ่มขึ้นเป็นกี่เท่าของเดิม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "2 เท่า",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3 เท่า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "4 เท่า",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "8 เท่า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่วงกลมจะเพิ่มขึ้นเป็น 4 เท่าของเดิม",
      "trickTip": "💡 อัตราส่วนพื้นที่: พื้นที่แปรผันตรงกับกำลังสองของรัศมี $\\implies 2^2 = 4\\text{ เท่า}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "พิจารณาพื้นที่วงกลมเดิมและวงกลมใหม่",
          "content": "- พื้นที่เดิม: $A_1 = \\pi r^2$\n- เมื่อรัศมีเพิ่มเป็น 2 เท่า รัศมีใหม่คือ $2r$\n- พื้นที่ใหม่: $A_2 = \\pi (2r)^2 = \\pi (4r^2) = 4\\pi r^2$"
        },
        {
          "stepNumber": 2,
          "title": "เปรียบเทียบสัดส่วนพื้นที่",
          "content": "$$\\frac{A_2}{A_1} = \\frac{4\\pi r^2}{\\pi r^2} = 4$$\nดังนั้น พื้นที่จะเพิ่มขึ้นเป็น $4$ เท่าของเดิม"
        }
      ]
    }
  },
  {
    "id": "bm-math-056",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปริซึมฐานสามเหลี่ยมมุมฉากมีด้านประกอบมุมฉาก 3 ซม. และ 4 ซม. ปริซึมยาว 10 ซม. มีปริมาตรกี่ลบ.ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "50",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "60",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "70",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "80",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปริมาตรของปริซึมเท่ากับ 60 ลูกบาศก์ซม.",
      "trickTip": "💡 ปริมาตรปริซึม: $\\text{พื้นที่ฐาน} \\times \\text{สูง} = \\left(\\frac{1}{2} \\times 3 \\times 4\\right) \\times 10 = 60\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาพื้นที่ฐานสามเหลี่ยมมุมฉาก",
          "content": "$$\\text{พื้นที่ฐาน} = \\frac{1}{2} \\times 3 \\times 4 = 6 \\text{ ตารางซม.}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณปริมาตรปริซึม",
          "content": "$$\\text{ปริมาตร} = \\text{พื้นที่ฐาน} \\times \\text{ความยาว} = 6 \\times 10 = 60 \\text{ ลูกบาศก์ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-057",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มุมตรงข้ามของเส้นตัดที่ตัดเส้นขนานคู่หนึ่งจะมีขนาดเป็นอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "รวมกันได้ 180 องศา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เท่ากันเสมอ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "รวมกันได้ 90 องศา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไม่แน่นอน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มุมตรงข้ามจะมีขนาดเท่ากันเสมอ",
      "trickTip": "💡 สมบัติมุมตรงข้าม: เมื่อเส้นตรงสองเส้นตัดกัน มุมตรงข้ามจะมีขนาดเท่ากันเสมอ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "พิจารณาทฤษฎีบทเส้นตัด",
          "content": "เมื่อเส้นตรงสองเส้นตัดกัน จะเกิดมุมประชิด 2 มุมที่รวมกันได้ $180^\\circ$"
        },
        {
          "stepNumber": 2,
          "title": "สรุปสมบัติของมุมตรงข้าม",
          "content": "มุมตรงข้ามกับมุมใด ๆ จะมีขนาดเท่ากันเสมอตามหลักเรขาคณิตพื้นฐาน"
        }
      ]
    }
  },
  {
    "id": "bm-math-058",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เส้นทแยงมุมของรูปสี่เหลี่ยมด้านขนานมีสมบัติตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ยาวเท่ากันเสมอ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตัดกันเป็นมุมฉาก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แบ่งครึ่งซึ่งกันและกัน",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตั้งฉากกับด้าน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เส้นทแยงมุมของรูปสี่เหลี่ยมด้านขนานแบ่งครึ่งซึ่งกันและกัน",
      "trickTip": "💡 สมบัติสี่เหลี่ยมด้านขนาน: เส้นทแยงมุมจะตัดกันและแบ่งครึ่งซึ่งกันและกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "พิจารณารูปสี่เหลี่ยมด้านขนาน",
          "content": "รูปสี่เหลี่ยมด้านขนานมีด้านตรงข้ามขนานกันและยาวเท่ากัน"
        },
        {
          "stepNumber": 2,
          "title": "สรุปสมบัติของเส้นทแยงมุม",
          "content": "จุดตัดของเส้นทแยงมุมทั้งสองเส้นจะเป็นจุดกึ่งกลางของเส้นทแยงมุมทั้งสอง นั่นคือ \"แบ่งครึ่งซึ่งกันและกัน\""
        }
      ]
    }
  },
  {
    "id": "bm-math-059",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รูปสามเหลี่ยมด้านเท่ามีด้านยาวด้านละ 6 ซม. จะมีความสูงประมาณเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$3\\sqrt{2}$ ซม.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$3\\sqrt{3}$ ซม.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$4\\sqrt{3}$ ซม.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "6 ซม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความสูงของรูปสามเหลี่ยมด้านเท่าคือ $3\\sqrt{3}$ ซม.",
      "trickTip": "💡 สูตรความสูงสามเหลี่ยมด้านเท่า: $h = \\frac{\\sqrt{3}}{2}a = \\frac{\\sqrt{3}}{2}(6) = 3\\sqrt{3}\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้ทฤษฎีบทพีทาโกรัสแบ่งครึ่งฐาน",
          "content": "ลากเส้นความสูงลงมาตั้งฉาก จะแบ่งครึ่งฐานออกเป็นข้างละ $\\frac{6}{2} = 3$ ซม.\nเกิดเป็นรูปสามเหลี่ยมมุมฉากที่มีด้านตรงข้ามมุมฉากยาว $6$ ซม. และฐานยาว $3$ ซม."
        },
        {
          "stepNumber": 2,
          "title": "คำนวณหาความสูง $h$",
          "content": "$$h^2 + 3^2 = 6^2$$\n$$h^2 + 9 = 36$$\n$$h^2 = 27 \\implies h = \\sqrt{27} = 3\\sqrt{3} \\text{ ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-060",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้าพื้นที่ผิวข้างของทรงกระบอกรัศมี 7 ซม. เท่ากับ 440 ตร.ซม. ทรงกระบอกนี้สูงกี่ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "8",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "10",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "14",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทรงกระบอกนี้สูง 10 ซม.",
      "trickTip": "💡 พื้นที่ผิวข้างทรงกระบอก: $2\\pi rh = 440 \\implies 2 \\times \\frac{22}{7} \\times 7 \\times h = 440 \\implies 44h = 440 \\implies h = 10$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรพื้นที่ผิวข้างของทรงกระบอก",
          "content": "$$\\text{พื้นที่ผิวข้าง} = 2\\pi rh$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและแก้สมการหาความสูง $h$",
          "content": "$$440 = 2 \\times \\frac{22}{7} \\times 7 \\times h$$\n$$440 = 44 \\times h$$\n$$h = \\frac{440}{44} = 10 \\text{ ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-061",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พื้นที่ของรูปสี่เหลี่ยมรูปว่าวที่มีเส้นทแยงมุมยาว 10 ซม. และ 15 ซม. คือกี่ตร.ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "60",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "75",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "90",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "150",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสี่เหลี่ยมรูปว่าวเท่ากับ 75 ตารางซม.",
      "trickTip": "💡 พื้นที่รูปว่าว: $\\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 10 \\times 15 = 75\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรพื้นที่รูปสี่เหลี่ยมรูปว่าว",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times \\text{ผลคูณของเส้นทแยงมุม}$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและคำนวณ",
          "content": "$$\\text{พื้นที่} = \\frac{1}{2} \\times 10 \\times 15 = 5 \\times 15 = 75 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-062",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กรวยกลมตรงมีรัศมีฐาน 3 ซม. สูงตรง 4 ซม. จะมีความสูงเอียงกี่ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "4.5 ซม.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "5 ซม.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5.5 ซม.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "6 ซม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความสูงเอียงของกรวยเท่ากับ 5 ซม.",
      "trickTip": "💡 พีทาโกรัสความสูงเอียง: $l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = 5\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้ความสัมพันธ์ในรูปสามเหลี่ยมมุมฉากของกรวย",
          "content": "รัศมีฐาน ($r$), ความสูงตรง ($h$) และความสูงเอียง ($l$) สัมพันธ์กันด้วยทฤษฎีบทพีทาโกรัส:\n$$l^2 = r^2 + h^2$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและหาความสูงเอียง",
          "content": "$$l^2 = 3^2 + 4^2 = 9 + 16 = 25$$\n$$l = \\sqrt{25} = 5 \\text{ ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-063",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ทรงกลมรัศมี 3 ซม. มีปริมาตรกี่ลูกบาศก์ซม. (ติดค่า $\\pi$)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$12\\pi$",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$24\\pi$",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$36\\pi$",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "$48\\pi$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปริมาตรทรงกลมเท่ากับ $36\\pi$ ลูกบาศก์ซม.",
      "trickTip": "💡 ปริมาตรทรงกลม: $\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3^3) = 36\\pi\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรปริมาตรทรงกลม",
          "content": "$$\\text{ปริมาตร} = \\frac{4}{3}\\pi r^3$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่ารัศมี $r = 3$",
          "content": "$$\\text{ปริมาตร} = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi (27) = 4 \\times 9\\pi = 36\\pi \\text{ ลูกบาศก์ซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-064",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มุมภายในรวมของรูปเจ็ดเหลี่ยมเท่ากับกี่องศา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "720 องศา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "900 องศา",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1080 องศา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1260 องศา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลรวมมุมภายในรูปเจ็ดเหลี่ยมเท่ากับ 900 องศา",
      "trickTip": "💡 ผลรวมมุมภายใน: $(n - 2) \\times 180^\\circ = (7 - 2) \\times 180^\\circ = 5 \\times 180^\\circ = 900^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรผลรวมมุมภายในรูป $n$ เหลี่ยม",
          "content": "$$\\text{ผลรวมมุมภายใน} = (n - 2) \\times 180^\\circ$$"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าจำนวนด้าน $n = 7$",
          "content": "$$\\text{ผลรวม} = (7 - 2) \\times 180^\\circ = 5 \\times 180^\\circ = 900^\\circ$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-065",
    "subjectId": "math",
    "topicId": "math-geometry",
    "topicName": "เรขาคณิตและมิติสัมพันธ์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 85,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เรขาคณิตและมิติสัมพันธ์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รูปสี่เหลี่ยมผืนผ้ามีเส้นทแยงมุมยาว 13 ซม. กว้าง 5 ซม. จะมีพื้นที่กี่ตร.ซม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "50",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "60",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "65",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "70",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นที่รูปสี่เหลี่ยมผืนผ้าเท่ากับ 60 ตารางซม.",
      "trickTip": "💡 หาด้านยาวด้วยพีทาโกรัส: $\\sqrt{13^2 - 5^2} = 12 \\implies \\text{พื้นที่} = 5 \\times 12 = 60\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาความยาวของสี่เหลี่ยมผืนผ้าด้วยพีทาโกรัส",
          "content": "จากรูปสามเหลี่ยมมุมฉากที่มีเส้นทแยงมุมเป็นด้านตรงข้ามมุมฉาก:\n$$\\text{ยาว} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\text{ ซม.}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณพื้นที่",
          "content": "$$\\text{พื้นที่} = \\text{กว้าง} \\times \\text{ยาว} = 5 \\times 12 = 60 \\text{ ตารางซม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-066",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ซื้อเสื้อมาตัวละ 400 บาท ติดป้ายขายเอากำไร 25% แต่ลดราคาให้ผู้ซื้อ 10% จากป้าย จะได้กำไรกี่บาท",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "40 บาท",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "50 บาท",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "60 บาท",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "70 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จะได้กำไรทั้งหมด 50 บาท",
      "trickTip": "💡 คิดราคาขาย: ติดป้าย $400 \\times 1.25 = 500$, ขายจริง $500 \\times 0.90 = 450 \\implies$ กำไร $450 - 400 = 50$ บาท",
      "steps": [
        {
          "stepNumber": 1,
          "title": "คำนวณราคาป้ายที่ติดขาย (กำไร 25%)",
          "content": "ทุน 400 บาท กำไร 25%:\n$$\\text{ราคาป้าย} = 400 + \\left(\\frac{25}{100} \\times 400\\right) = 400 + 100 = 500 \\text{ บาท}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณราคาขายจริงหลังลด 10%",
          "content": "ลดราคา 10% จากราคาป้าย 500 บาท:\n$$\\text{ราคาขายจริง} = 500 - \\left(\\frac{10}{100} \\times 500\\right) = 500 - 50 = 450 \\text{ บาท}$$"
        },
        {
          "stepNumber": 3,
          "title": "หากำไรสุทธิ",
          "content": "$$\\text{กำไร} = \\text{ราคาขายจริง} - \\text{ราคาทุน} = 450 - 400 = 50 \\text{ บาท}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-067",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รถยนต์แล่นด้วยอัตราเร็ว 80 กม./ชม. เป็นเวลา 2 ชั่วโมง 15 นาที จะได้ระยะทางกี่กิโลเมตร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "160 กม.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "175 กม.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "180 กม.",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "200 กม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จะได้ระยะทางทั้งหมด 180 กิโลเมตร",
      "trickTip": "💡 ระยะทาง $= \\text{อัตราเร็ว} \\times \\text{เวลา} = 80 \\times 2.25 = 180\\text{ กม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลงหน่วยเวลาเป็นชั่วโมง",
          "content": "เวลา 2 ชั่วโมง 15 นาที\nเนื่องจาก 1 ชั่วโมง มี 60 นาที ดังนั้น 15 นาทีคิดเป็น:\n$$\\frac{15}{60} = 0.25 \\text{ ชั่วโมง}$$\nเวลารวมทั้งหมดคือ $2 + 0.25 = 2.25$ ชั่วโมง"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณระยะทางจากสูตร",
          "content": "ใช้สูตร $\\text{ระยะทาง} = \\text{อัตราเร็ว} \\times \\text{เวลา}$\n$$\\text{ระยะทาง} = 80 \\text{ กม./ชม.} \\times 2.25 \\text{ ชม.} = 180 \\text{ กิโลเมตร}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-068",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "นายเอทำงานชิ้นหนึ่งเสร็จใน 6 วัน นายบีทำงานชิ้นเดียวกันเสร็จใน 12 วัน ถ้าทั้งสองคนช่วยกันทำจะเสร็จในกี่วัน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "3 วัน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "4 วัน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5 วัน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "8 วัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ถ้าทั้งสองคนช่วยกันทำจะเสร็จใน 4 วัน",
      "trickTip": "💡 อัตราการทำงานรวม: $\\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies 4\\text{ วัน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาอัตราการทำงานใน 1 วันของแต่ละคน",
          "content": "- นายเอ ทำงาน 1 วันได้ $\\frac{1}{6}$ ของงาน\n- นายบี ทำงาน 1 วันได้ $\\frac{1}{12}$ ของงาน"
        },
        {
          "stepNumber": 2,
          "title": "รวมอัตราการทำงานและหาจำนวนวัน",
          "content": "ใน 1 วัน ทั้งสองคนช่วยกันทำงานได้:\n$$\\frac{1}{6} + \\frac{1}{12} = \\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4} \\text{ ของงาน}$$\nดังนั้น งานจะเสร็จสมบูรณ์ใน $\\frac{1}{1/4} = 4$ วัน"
        }
      ]
    }
  },
  {
    "id": "bm-math-069",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "น้ำเกลือเข้มข้น 10% จำนวน 200 กรัม ผสมกับน้ำเกลือเข้มข้น 20% จำนวน 300 กรัม จะได้น้ำเกลือเข้มข้นกี่เปอร์เซ็นต์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "14%",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "15%",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "16%",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "18%",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จะได้น้ำเกลือเข้มข้น 16%",
      "trickTip": "💡 ความเข้มข้นรวม: $\\frac{\\text{เนื้อเกลือรวม}}{\\text{น้ำหนักรวม}} = \\frac{20 + 60}{500} = \\frac{80}{500} = 16\\%$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาปริมาณเกลือบริสุทธิ์ในแต่ละส่วนผสม",
          "content": "- น้ำเกลือชุดแรก 200 กรัม เข้มข้น 10%: มีเกลือ $\\frac{10}{100} \\times 200 = 20$ กรัม\n- น้ำเกลือชุดสอง 300 กรัม เข้มข้น 20%: มีเกลือ $\\frac{20}{100} \\times 300 = 60$ กรัม"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณความเข้มข้นของน้ำเกลือผสม",
          "content": "- เกลือรวม $= 20 + 60 = 80$ กรัม\n- น้ำเกลือรวม $= 200 + 300 = 500$ กรัม\n$$\\text{ความเข้มข้น} = \\left(\\frac{80}{500}\\right) \\times 100\\% = 16\\%$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-070",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ฝากเงิน 20,000 บาท อัตราดอกเบี้ย 2.5% ต่อปี เมื่อครบ 2 ปี จะได้รับดอกเบี้ยเชิงเดี่ยวรวมกี่บาท",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "800 บาท",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1,000 บาท",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1,200 บาท",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1,500 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จะได้รับดอกเบี้ยเชิงเดี่ยวรวม 1,000 บาท",
      "trickTip": "💡 สูตรดอกเบี้ยเชิงเดี่ยว: $I = P \\times r \\times t = 20,000 \\times 0.025 \\times 2 = 1,000\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรคำนวณดอกเบี้ยเชิงเดี่ยว",
          "content": "$$I = P \\times r \\times t$$\nโดยที่ $P = 20,000$ บาท, $r = 2.5\\% = 0.025$, $t = 2$ ปี"
        },
        {
          "stepNumber": 2,
          "title": "แทนค่าและคำนวณ",
          "content": "$$I = 20,000 \\times 0.025 \\times 2 = 500 \\times 2 = 1,000 \\text{ บาท}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-071",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มีเหรียญ 5 บาท และ 10 บาท รวมกัน 30 เหรียญ คิดเป็นเงินรวม 220 บาท มีเหรียญ 10 บาทกี่เหรียญ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12 เหรียญ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "14 เหรียญ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "16 เหรียญ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "18 เหรียญ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีเหรียญ 10 บาททั้งหมด 14 เหรียญ",
      "trickTip": "💡 สมการเหรียญ: $10x + 5(30 - x) = 220 \\implies 5x = 70 \\implies x = 14\\text{ เหรียญ}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดตัวแปรแทนจำนวนเหรียญ",
          "content": "ให้มีเหรียญ 10 บาทจำนวน $x$ เหรียญ\nดังนั้นจะมีเหรียญ 5 บาทจำนวน $30 - x$ เหรียญ"
        },
        {
          "stepNumber": 2,
          "title": "ตั้งสมการตามมูลค่าเงินรวม",
          "content": "$$10(x) + 5(30 - x) = 220$$\n$$10x + 150 - 5x = 220$$\n$$5x = 220 - 150 = 70$$\n$$x = \\frac{70}{5} = 14 \\text{ เหรียญ}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-072",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รถไฟยาว 150 เมตร แล่นด้วยความเร็ว 72 กม./ชม. จะแล่นผ่านเสาไฟฟ้าต้นหนึ่งในเวลากี่วินาที",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "6 วินาที",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "7.5 วินาที",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "8 วินาที",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "10 วินาที",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รถไฟแล่นผ่านเสาไฟฟ้าในเวลา 7.5 วินาที",
      "trickTip": "💡 แปลงความเร็วเป็น ม./วิ: $72 \\times \\frac{5}{18} = 20\\text{ ม./วิ} \\implies \\text{เวลา} = \\frac{150}{20} = 7.5\\text{ วินาที}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลงหน่วยอัตราเร็วจาก กม./ชม. เป็น เมตร/วินาที",
          "content": "$$72 \\text{ กม./ชม.} = 72 \\times \\frac{5}{18} = 4 \\times 5 = 20 \\text{ เมตร/วินาที}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณเวลาที่ใช้แล่นผ่านความยาวขบวน",
          "content": "การแล่นผ่านเสาไฟฟ้า ระยะทางที่เคลื่อนที่ได้เท่ากับความยาวของขบวนรถไฟ ($150$ เมตร)\n$$\\text{เวลา} = \\frac{\\text{ระยะทาง}}{\\text{อัตราเร็ว}} = \\frac{150}{20} = 7.5 \\text{ วินาที}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-073",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "นักเรียนห้องหนึ่งมี 40 คน เป็นนักเรียนชาย 60% ถ้ามีนักเรียนหญิงย้ายเข้ามาเพิ่ม 10 คน สัดส่วนนักเรียนชายจะเป็นกี่เปอร์เซ็นต์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "40%",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "48%",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "50%",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "52%",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สัดส่วนนักเรียนชายคิดเป็น 48%",
      "trickTip": "💡 ชาย 24 คน จากทั้งหมด 50 คน $\\implies \\frac{24}{50} \\times 100\\% = 48\\%$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนนักเรียนชายและหญิงเดิม",
          "content": "เดิมมีนักเรียน 40 คน:\n- นักเรียนชาย $60\\% = \\frac{60}{100} \\times 40 = 24$ คน\n- นักเรียนหญิง $= 40 - 24 = 16$ คน"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณร้อยละของนักเรียนชายหลังหญิงย้ายเข้า",
          "content": "มีนักเรียนหญิงย้ายเข้า 10 คน ทำให้จำนวนนักเรียนทั้งหมดเป็น $40 + 10 = 50$ คน\n$$\\text{ร้อยละของนักเรียนชาย} = \\left(\\frac{24}{50}\\right) \\times 100\\% = 48\\%$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-074",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ท่อน้ำ A เปิดน้ำเข้าถังเต็มใน 4 ชม. ท่อน้ำ B ไขน้ำออกหมดถังใน 6 ชม. ถ้าเปิดพร้อมกันน้ำจะเต็มถังในกี่ชม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "10 ชม.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "12 ชม.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "14 ชม.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "16 ชม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "น้ำจะเต็มถังในเวลา 12 ชั่วโมง",
      "trickTip": "💡 อัตราไหลสุทธิ: $\\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12} \\implies 12\\text{ ชั่วโมง}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาอัตราการไหลใน 1 ชั่วโมงของแต่ละท่อ",
          "content": "- ท่อ A เปิดเข้าได้ $\\frac{1}{4}$ ถัง/ชั่วโมง\n- ท่อ B ไขออกได้ $\\frac{1}{6}$ ถัง/ชั่วโมง"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณอัตราการเพิ่มของน้ำต่อชั่วโมง",
          "content": "$$\\text{อัตราไหลสุทธิ} = \\frac{1}{4} - \\frac{1}{6} = \\frac{3}{12} - \\frac{2}{12} = \\frac{1}{12} \\text{ ถัง/ชั่วโมง}$$\nดังนั้น จะใช้น้ำเต็มถังในเวลา $12$ ชั่วโมง"
        }
      ]
    }
  },
  {
    "id": "bm-math-075",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ขายสินค้าชิ้นหนึ่งขาดทุน 15% ถ้าขายได้เงิน 1,700 บาท สินค้านี้มีราคาทุนกี่บาท",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1,950 บาท",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "2,000 บาท",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "2,100 บาท",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "2,200 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สินค้านี้มีราคาทุน 2,000 บาท",
      "trickTip": "💡 ขายขาดทุน 15% คือราคาขาย 85%: $\\text{ทุน} = \\frac{1,700 \\times 100}{85} = 2,000\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "เทียบสัดส่วนเปอร์เซ็นต์ราคาขาย",
          "content": "ขายขาดทุน 15% แสดงว่าราคาขายคิดเป็น $100\\% - 15\\% = 85\\%$ ของราคาทุน"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณหาราคาทุน",
          "content": "$$\\text{ราคาทุน} = \\frac{1,700}{85} \\times 100 = 20 \\times 100 = 2,000 \\text{ บาท}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-076",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "อัตราส่วนของเงินเดือน ก : ข = 3 : 4 และ ข : ค = 2 : 3 ถ้า ก มีเงินเดือน 18,000 บาท ค มีเงินเดือนกี่บาท",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "24,000 บาท",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "32,000 บาท",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "36,000 บาท",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "40,000 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค มีเงินเดือน 36,000 บาท",
      "trickTip": "💡 เชื่อมโยงอัตราส่วน ก:ข:ค $= 3:4:6 \\implies$ ก มี 3 ส่วน $= 18,000 \\implies$ ค มี 6 ส่วน $= 36,000\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "รวมอัตราส่วนต่อเนื่อง ก : ข : ค",
          "content": "- ก : ข $= 3 : 4$\n- ข : ค $= 2 : 3 = 4 : 6$\nดังนั้น ก : ข : ค $= 3 : 4 : 6$"
        },
        {
          "stepNumber": 2,
          "title": "หาเงินเดือนของ ค",
          "content": "ก มี 3 ส่วน คิดเป็น $18,000$ บาท $\\implies 1 \\text{ ส่วน} = \\frac{18,000}{3} = 6,000$ บาท\nค มี 6 ส่วน คิดเป็น:\n$$\\text{เงินเดือน ค} = 6 \\times 6,000 = 36,000 \\text{ บาท}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-077",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เลี้ยงเป็ดและวัวรวมกัน 25 ตัว นับขารวมกันได้ 70 ขา มีวัวกี่ตัว",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "8 ตัว",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "10 ตัว",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12 ตัว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "15 ตัว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีวัวทั้งหมด 10 ตัว",
      "trickTip": "💡 เป็ด 2 ขา, วัว 4 ขา: $2(25 - x) + 4x = 70 \\implies 2x = 20 \\implies x = 10\\text{ ตัว}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดตัวแปรแทนจำนวนสัตว์",
          "content": "ให้มีวัว $x$ ตัว (วัวมี 4 ขา)\nมีเป็ด $25 - x$ ตัว (เป็ดมี 2 ขา)"
        },
        {
          "stepNumber": 2,
          "title": "ตั้งสมการตามจำนวนขารวม",
          "content": "$$4x + 2(25 - x) = 70$$\n$$4x + 50 - 2x = 70$$\n$$2x = 20 \\implies x = 10 \\text{ ตัว}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-078",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "นาฬิกาเรือนหนึ่งเดินเร็วไปวันละ 2 นาที ถ้าตั้งเวลาให้ตรงเมื่อเที่ยงวันอาทิตย์ อีก 3 วันต่อมาเวลาเที่ยงวันจะบอกเวลากี่โมง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12:04 น.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "12:06 น.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12:08 น.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "12:10 น.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อีก 3 วันต่อมาเวลาเที่ยงวันจะบอกเวลา 12:06 น.",
      "trickTip": "💡 เดินเร็ววันละ 2 นาที $\\times 3\\text{ วัน} = 6\\text{ นาที} \\implies 12:06\\text{ น.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "คำนวณเวลาที่นาฬิกาเดินเร็วไปทั้งหมด",
          "content": "$$\\text{เวลาที่เดินเร็ว} = 3 \\text{ วัน} \\times 2 \\text{ นาที/วัน} = 6 \\text{ นาที}$$"
        },
        {
          "stepNumber": 2,
          "title": "หาเวลาที่นาฬิกาบอกจริง",
          "content": "เวลาจริงคือ 12:00 น. แต่นาฬิกาเดินเร็วไป 6 นาที จึงบอกเวลา $12:06$ น."
        }
      ]
    }
  },
  {
    "id": "bm-math-079",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้า 15 คน ทำงานเสร็จใน 10 วัน ถ้าต้องการให้งานเสร็จใน 6 วัน ต้องใช้คนทำงานกี่คน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "20 คน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "25 คน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "30 คน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "35 คน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ต้องใช้คนทำงานทั้งหมด 25 คน",
      "trickTip": "💡 บัญญัติไตรยางค์แปรผกผัน: $15 \\times 10 = N \\times 6 \\implies N = \\frac{150}{6} = 25\\text{ คน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาปริมาณงานทั้งหมด (คน-วัน)",
          "content": "$$\\text{ปริมาณงาน} = 15 \\text{ คน} \\times 10 \\text{ วัน} = 150 \\text{ คน-วัน}$$"
        },
        {
          "stepNumber": 2,
          "title": "หาจำนวนคนที่ต้องใช้เมื่อต้องการให้เสร็จใน 6 วัน",
          "content": "$$\\text{จำนวนคน} = \\frac{150 \\text{ คน-วัน}}{6 \\text{ วัน}} = 25 \\text{ คน}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-080",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ขับรถจากเมือง A ไปเมือง B ระยะทาง 120 กม. ขาไปใช้อัตราเร็ว 60 กม./ชม. ขากลับใช้อัตราเร็ว 40 กม./ชม. อัตราเร็วเฉลี่ยตลอดการเดินทางคือกี่กม./ชม.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "48 กม./ชม.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "50 กม./ชม.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "52 กม./ชม.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "54 กม./ชม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อัตราเร็วเฉลี่ยตลอดการเดินทางคือ 48 กม./ชม.",
      "trickTip": "💡 อัตราเร็วเฉลี่ย: $\\frac{\\text{ระยะทางรวม}}{\\text{เวลารวม}} = \\frac{240}{\\frac{120}{60} + \\frac{120}{40}} = \\frac{240}{2 + 3} = 48\\text{ กม./ชม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาเวลาที่ใช้เดินทางขาไปและขากลับ",
          "content": "- เวลาขาไป: $t_1 = \\frac{120}{60} = 2$ ชั่วโมง\n- เวลาขากลับ: $t_2 = \\frac{120}{40} = 3$ ชั่วโมง\n- เวลารวม $= 2 + 3 = 5$ ชั่วโมง"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณอัตราเร็วเฉลี่ย",
          "content": "ระยะทางรวม $= 120 + 120 = 240$ กิโลเมตร\n$$\\text{อัตราเร็วเฉลี่ย} = \\frac{\\text{ระยะทางรวม}}{\\text{เวลารวม}} = \\frac{240}{5} = 48 \\text{ กม./ชม.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-081",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ซื้อส้มมา 50 กก. เน่าเสียไป 10% ที่เหลือนำไปขายกก.ละ 40 บาท ได้เงินรวม 1,800 บาท เดิมซื้อส้มมากก.ละกี่บาท ถ้าได้กำไร 20%",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "25 บาท",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "30 บาท",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "32 บาท",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "35 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เดิมซื้อส้มมากิโลกรัมละ 30 บาท",
      "trickTip": "💡 ต้นทุนรวม $= \\frac{1,800}{1.20} = 1,500 \\implies \\frac{1,500}{50} = 30\\text{ บาท/กก.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาต้นทุนรวมจากกำไร 20%",
          "content": "ขายได้เงิน 1,800 บาท ได้กำไร 20%:\n$$\\text{ต้นทุนรวม} = \\frac{1,800}{1.20} = 1,500 \\text{ บาท}$$"
        },
        {
          "stepNumber": 2,
          "title": "หาราคาทุนต่อกิโลกรัมเดิม (50 กก.)",
          "content": "$$\\text{ราคาทุนต่อ กก.} = \\frac{1,500 \\text{ บาท}}{50 \\text{ กก.}} = 30 \\text{ บาท/กก.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-082",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แม่ค้าผสมถั่วลิสงกก.ละ 50 บาท กับถั่วลิสงกก.ละ 80 บาท ให้ได้ 30 กก. ขายกก.ละ 70 บาทแล้วเท่าทุนพอดี ต้องใช้ถั่วชนิดแรกกี่กก.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "8 กก.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "10 กก.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12 กก.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "15 กก.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ต้องใช้ถั่วชนิดแรกจำนวน 10 กิโลกรัม",
      "trickTip": "💡 สมการผสมสินค้า: $50x + 80(30 - x) = 70(30) = 2,100 \\implies 30x = 300 \\implies x = 10\\text{ กก.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "กำหนดตัวแปรแทนน้ำหนักถั่วแต่ละชนิด",
          "content": "ให้ใช้ถั่วชนิดแรก (กก.ละ 50 บาท) จำนวน $x$ กก.\nดังนั้นใช้ถั่วชนิดที่สอง (กก.ละ 80 บาท) จำนวน $30 - x$ กก."
        },
        {
          "stepNumber": 2,
          "title": "ตั้งสมการตามมูลค่ารวมของถั่วผสม",
          "content": "$$50x + 80(30 - x) = 70 \\times 30$$\n$$50x + 2,400 - 80x = 2,100$$\n$$30x = 300 \\implies x = 10 \\text{ กก.}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-083",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แผนผังมาตราส่วน 1 : 50,000 ระยะทางในแผนผัง 6 ซม. จะแทนระยะทางจริงกี่กิโลเมตร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "2.5 กม.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3.0 กม.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "3.5 กม.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "4.0 กม.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แทนระยะทางจริง 3.0 กิโลเมตร",
      "trickTip": "💡 มาตราส่วน: $6 \\times 50,000 = 300,000\\text{ ซม.} = 3,000\\text{ ม.} = 3\\text{ กม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "คำนวณระยะทางจริงในหน่วยเซนติเมตร",
          "content": "$$\\text{ระยะจริง} = 6 \\text{ ซม.} \\times 50,000 = 300,000 \\text{ ซม.}$$"
        },
        {
          "stepNumber": 2,
          "title": "แปลงเซนติเมตรเป็นกิโลเมตร",
          "content": "- $300,000 \\text{ ซม.} \\div 100 = 3,000 \\text{ เมตร}$\n- $3,000 \\text{ เมตร} \\div 1,000 = 3.0 \\text{ กิโลเมตร}$"
        }
      ]
    }
  },
  {
    "id": "bm-math-084",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เงินฝาก 10,000 บาท ดอกเบี้ยทบต้นปีละ 10% สิ้นปีที่ 2 จะมีเงินรวมทั้งหมดกี่บาท",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "12,000 บาท",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "12,100 บาท",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12,200 บาท",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "12,500 บาท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สิ้นปีที่ 2 จะมีเงินรวม 12,100 บาท",
      "trickTip": "💡 สูตรดอกเบี้ยทบต้น: $10,000 \\times (1.10)^2 = 10,000 \\times 1.21 = 12,100\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาเงินรวมเมื่อสิ้นปีที่ 1",
          "content": "$$\\text{สิ้นปีที่ 1} = 10,000 + (10\\% \\times 10,000) = 10,000 + 1,000 = 11,000 \\text{ บาท}$$"
        },
        {
          "stepNumber": 2,
          "title": "หาเงินรวมเมื่อสิ้นปีที่ 2",
          "content": "$$\\text{สิ้นปีที่ 2} = 11,000 + (10\\% \\times 11,000) = 11,000 + 1,100 = 12,100 \\text{ บาท}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-085",
    "subjectId": "math",
    "topicId": "math-word-problems",
    "topicName": "โจทย์ปัญหาและการประยุกต์",
    "type": "multiple_choice",
    "difficulty": "hard",
    "points": 3,
    "timeEstimateSeconds": 90,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โจทย์ปัญหาและการประยุกต์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กระเบื้องปูพื้นสี่เหลี่ยมจัตุรัสยาวด้านละ 30 ซม. ต้องใช้กี่แผ่นจึงจะปูห้องขนาด 6 ม. x 9 ม. ได้พอดี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "500 แผ่น",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "600 แผ่น",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "700 แผ่น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "800 แผ่น",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ต้องใช้กระเบื้องทั้งหมด 600 แผ่น",
      "trickTip": "💡 หาพื้นที่ห้อง $\\div$ พื้นที่กระเบื้อง: $\\frac{6 \\times 9}{0.3 \\times 0.3} = \\frac{54}{0.09} = 600\\text{ แผ่น}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "คำนวณพื้นที่ห้องและพื้นที่กระเบื้อง 1 แผ่น",
          "content": "- พื้นที่ห้อง $= 6 \\text{ ม.} \\times 9 \\text{ ม.} = 54 \\text{ ตารางเมตร}$\n- กระเบื้องกว้าง $30 \\text{ ซม.} = 0.3 \\text{ ม.}$ พื้นที่ $= 0.3 \\times 0.3 = 0.09 \\text{ ตารางเมตร}$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณจำนวนแผ่นกระเบื้อง",
          "content": "$$\\text{จำนวนแผ่น} = \\frac{54}{0.09} = 600 \\text{ แผ่น}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-086",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อมูลชุดหนึ่งมี 5 จำนวน ได้แก่ 8, 12, 15, x, 20 ถ้าค่าเฉลี่ยเลขคณิตเท่ากับ 14 แล้ว x มีค่าเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "13",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "15",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "17",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "19",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าของ $x = 15$",
      "trickTip": "💡 ผลรวมข้อมูล $= 5 \\times 14 = 70 \\implies x = 70 - (8+12+15+20) = 15$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "ใช้สูตรค่าเฉลี่ยเลขคณิต",
          "content": "$$\\bar{x} = \\frac{\\sum x}{N} = \\frac{8 + 12 + 15 + x + 20}{5} = 14$$"
        },
        {
          "stepNumber": 2,
          "title": "แก้สมการหา $x$",
          "content": "$$\\frac{55 + x}{5} = 14$$\n$$55 + x = 70 \\implies x = 70 - 55 = 15$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-087",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มัธยฐานของข้อมูลชุดนี้: 12, 7, 19, 15, 8, 22, 10 มีค่าเท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "10",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "12",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "15",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "17",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มัธยฐานของข้อมูลชุดนี้คือ 12",
      "trickTip": "💡 เรียงลำดับจากน้อยไปมาก: $7, 8, 10, \\mathbf{12}, 15, 19, 22 \\implies$ ค่ากึ่งกลางคือ $12$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "เรียงลำดับข้อมูลจากน้อยไปมาก",
          "content": "ข้อมูลมี 7 จำนวน เรียงได้ดังนี้:\n$$7, 8, 10, 12, 15, 19, 22$$"
        },
        {
          "stepNumber": 2,
          "title": "หาตำแหน่งกึ่งกลาง (มัธยฐาน)",
          "content": "ตำแหน่งมัธยฐาน $= \\frac{N + 1}{2} = \\frac{7 + 1}{2} = 4$\nข้อมูลตัวที่ 4 คือ $12$"
        }
      ]
    }
  },
  {
    "id": "bm-math-088",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ฐานนิยมของข้อมูล: 4, 6, 8, 6, 9, 6, 7, 8, 5 คือจำนวนใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "6",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "7",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "8",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไม่มีฐานนิยม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฐานนิยมของข้อมูลคือ 6",
      "trickTip": "💡 ฐานนิยมคือข้อมูลที่มีความถี่มากที่สุด: เลข $6$ ซ้ำกัน 3 ครั้ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "นับความถี่ของข้อมูลแต่ละจำนวน",
          "content": "- 4 ปรากฏ 1 ครั้ง\n- 5 ปรากฏ 1 ครั้ง\n- 6 ปรากฏ 3 ครั้ง\n- 7 ปรากฏ 1 ครั้ง\n- 8 ปรากฏ 2 ครั้ง\n- 9 ปรากฏ 1 ครั้ง"
        },
        {
          "stepNumber": 2,
          "title": "สรุปค่าฐานนิยม",
          "content": "เลข $6$ มีความถี่สูงสุด ($3$ ครั้ง) ดังนั้น ฐานนิยมคือ $6$"
        }
      ]
    }
  },
  {
    "id": "bm-math-089",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โยนเหรียญที่เที่ยงตรง 2 เหรียญพร้อมกัน 1 ครั้ง ความน่าจะเป็นที่จะออกหัวอย่างน้อย 1 เหรียญเท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1/4",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1/2",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "3/4",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่จะออกหัวอย่างน้อย 1 เหรียญเท่ากับ $\\frac{3}{4}$",
      "trickTip": "💡 ผลลัพธ์ทั้งหมด $\\{HH, HT, TH, TT\\} \\implies$ มีหัวอย่างน้อย 1 เหรียญ 3 แบบ $\\implies \\frac{3}{4}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาแซมเปิลสเปซ ($S$) ทั้งหมดของการโยนเหรียญ 2 เหรียญ",
          "content": "$$S = \\{HH, HT, TH, TT\\} \\implies n(S) = 4$$"
        },
        {
          "stepNumber": 2,
          "title": "หาเหตุการณ์ ($E$) ที่ออกหัวอย่างน้อย 1 เหรียญ",
          "content": "$$E = \\{HH, HT, TH\\} \\implies n(E) = 3$$\n$$P(E) = \\frac{n(E)}{n(S)} = \\frac{3}{4}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-090",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ทอยลูกเต๋า 1 ลูก 1 ครั้ง ความน่าจะเป็นที่จะได้แต้มเป็นจำนวนเฉพาะคือเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1/6",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1/3",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1/2",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "2/3",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่จะได้แต้มจำนวนเฉพาะเท่ากับ $\\frac{1}{2}$",
      "trickTip": "💡 แต้มจำนวนเฉพาะบนลูกเต๋าคือ $\\{2, 3, 5\\} \\implies \\frac{3}{6} = \\frac{1}{2}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาผลลัพธ์ทั้งหมดของการทอยลูกเต๋า 1 ลูก",
          "content": "$$S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$$"
        },
        {
          "stepNumber": 2,
          "title": "หาแต้มที่เป็นจำนวนเฉพาะ",
          "content": "แต้มเฉพาะได้แก่ $\\{2, 3, 5\\} \\implies n(E) = 3$\n$$P(E) = \\frac{3}{6} = \\frac{1}{2}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-091",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ในกล่องมีลูกแก้วสีแดง 4 ลูก สีเขียว 3 ลูก และสีเหลือง 5 ลูก สุ่มหยิบ 1 ลูก ความน่าจะเป็นที่จะได้ลูกแก้วสีเขียวคือเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1/4",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1/3",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5/12",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1/2",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่จะได้ลูกแก้วสีเขียวคือ $\\frac{1}{4}$",
      "trickTip": "💡 ความน่าจะเป็น: $\\frac{3}{4 + 3 + 5} = \\frac{3}{12} = \\frac{1}{4}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนลูกแก้วทั้งหมด",
          "content": "$$\\text{จำนวนลูกแก้วรวม} = 4 + 3 + 5 = 12 \\text{ ลูก}$$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณความน่าจะเป็น",
          "content": "ลูกแก้วสีเขียวมี 3 ลูก:\n$$P(\\text{เขียว}) = \\frac{3}{12} = \\frac{1}{4}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-092",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คะแนนสอบของนักเรียน 4 คน มีค่าเฉลี่ย 75 คะแนน ถ้านำคะแนนของนักเรียนคนที่ 5 มารวมด้วย ทำให้ค่าเฉลี่ยกลายเป็น 78 คะแนน นักเรียนคนที่ 5 ได้กี่คะแนน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "85",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "88",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "90",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "92",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "นักเรียนคนที่ 5 ได้ 90 คะแนน",
      "trickTip": "💡 ผลรวม 5 คน $- $ ผลรวม 4 คน: $5(78) - 4(75) = 390 - 300 = 90\\text{ คะแนน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาผลรวมคะแนนเดิมของนักเรียน 4 คน",
          "content": "$$\\text{ผลรวมคะแนน 4 คน} = 4 \\times 75 = 300 \\text{ คะแนน}$$"
        },
        {
          "stepNumber": 2,
          "title": "หาผลรวมคะแนนใหม่ของนักเรียน 5 คน",
          "content": "$$\\text{ผลรวมคะแนน 5 คน} = 5 \\times 78 = 390 \\text{ คะแนน}$$"
        },
        {
          "stepNumber": 3,
          "title": "หาคะแนนของนักเรียนคนที่ 5",
          "content": "$$\\text{คะแนนคนที่ 5} = 390 - 300 = 90 \\text{ คะแนน}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-093",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แผนภูมิรูปวงกลมแสดงค่าใช้จ่าย มุมที่จุดศูนย์กลางของค่าอาหารคือ 144 องศา คิดเป็นกี่เปอร์เซ็นต์ของค่าใช้จ่ายทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "35%",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "40%",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "45%",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "50%",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าอาหารคิดเป็น 40% ของค่าใช้จ่ายทั้งหมด",
      "trickTip": "💡 สัดส่วนวงกลม: $\\frac{144^\\circ}{360^\\circ} \\times 100\\% = 40\\%$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "เทียบสัดส่วนมุมกับวงกลมเต็มวง ($360^\\circ$)",
          "content": "$$\\text{สัดส่วน} = \\frac{144^\\circ}{360^\\circ} = \\frac{2}{5}$$"
        },
        {
          "stepNumber": 2,
          "title": "แปลงเป็นเปอร์เซ็นต์",
          "content": "$$\\text{ร้อยละ} = \\frac{2}{5} \\times 100\\% = 40\\%$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-094",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สุ่มหยิบไพ่ 1 ใบจากสำรับมาตรฐาน (52 ใบ) ความน่าจะเป็นที่จะได้ไพ่แต้ม King หรือ Queen เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1/13",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "2/13",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1/4",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "4/13",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่จะได้ไพ่ King หรือ Queen คือ $\\frac{2}{13}$",
      "trickTip": "💡 King 4 ใบ + Queen 4 ใบ $= 8$ ใบ $\\implies \\frac{8}{52} = \\frac{2}{13}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนไพ่ที่ต้องการในสำรับ",
          "content": "- ไพ่ King มี 4 ใบ\n- ไพ่ Queen มี 4 ใบ\nรวมไพ่ที่ต้องการ $= 4 + 4 = 8$ ใบ"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณความน่าจะเป็นจากไพ่ทั้งหมด 52 ใบ",
          "content": "$$P(E) = \\frac{8}{52} = \\frac{2}{13}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-095",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ค่าเฉลี่ยของเลข 6 จำนวนคือ 20 ถ้าตัดเลข 30 ออกไป 1 จำนวน ค่าเฉลี่ยของ 5 จำนวนที่เหลือจะเป็นเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "16",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "18",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "19",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "20",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ค่าเฉลี่ยของ 5 จำนวนที่เหลือคือ 18",
      "trickTip": "💡 ผลรวมใหม่: $6(20) - 30 = 90 \\implies \\text{ค่าเฉลี่ยใหม่} = \\frac{90}{5} = 18$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาผลรวมเดิมของเลข 6 จำนวน",
          "content": "$$\\text{ผลรวมเดิม} = 6 \\times 20 = 120$$"
        },
        {
          "stepNumber": 2,
          "title": "หาผลรวมและค่าเฉลี่ยใหม่หลังตัด 30 ออก",
          "content": "$$\\text{ผลรวมใหม่} = 120 - 30 = 90$$\n$$\\text{ค่าเฉลี่ยใหม่} = \\frac{90}{5} = 18$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-096",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ความน่าจะเป็นที่สุ่มได้เลขคู่จากการหยิบบัตรตัวเลข 1 ถึง 20 หนึ่งใบคือเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1/4",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1/2",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "3/4",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่สุ่มได้เลขคู่คือ $\\frac{1}{2}$",
      "trickTip": "💡 บัตร 1 ถึง 20 มีเลขคู่ 10 ใบ $\\implies \\frac{10}{20} = \\frac{1}{2}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนเลขคู่ตั้งแต่ 1 ถึง 20",
          "content": "เลขคู่ได้แก่: $2, 4, 6, 8, 10, 12, 14, 16, 18, 20$ (รวม 10 จำนวน)"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณความน่าจะเป็น",
          "content": "$$P(E) = \\frac{10}{20} = \\frac{1}{2}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-097",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พิสัย (Range) ของข้อมูลชุดนี้: 23, 45, 12, 67, 34, 89, 56 เท่ากับเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "66",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "75",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "77",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "89",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พิสัยของข้อมูลชุดนี้เท่ากับ 77",
      "trickTip": "💡 พิสัย $= \\text{ค่าสูงสุด} - \\text{ค่าต่ำสุด} = 89 - 12 = 77$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาค่าสูงสุดและค่าต่ำสุดของข้อมูล",
          "content": "- ค่าสูงสุด ($x_{\\max}$) คือ $89$\n- ค่าต่ำสุด ($x_{\\min}$) คือ $12$"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณหาพิสัย",
          "content": "$$\\text{พิสัย} = x_{\\max} - x_{\\min} = 89 - 12 = 77$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-098",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สุ่มหยิบลูกบอล 1 ลูกจากกล่องที่มีสีดำ 6 ลูก ขาว 4 ลูก ความน่าจะเป็นที่จะไม่ได้ลูกบอลสีดำคือเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "2/5",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "3/5",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "1/2",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "4/5",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่จะไม่ได้ลูกบอลสีดำคือ $\\frac{2}{5}$",
      "trickTip": "💡 ไม่ได้สีดำ = ได้สีขาว: $\\frac{4}{6 + 4} = \\frac{4}{10} = \\frac{2}{5}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิเคราะห์เหตุการณ์",
          "content": "การ \"ไม่ได้ลูกบอลสีดำ\" มีค่าเท่ากับ \"ได้ลูกบอลสีขาว\"\n- ลูกบอลสีขาวมี 4 ลูก\n- ลูกบอลทั้งหมดมี $6 + 4 = 10$ ลูก"
        },
        {
          "stepNumber": 2,
          "title": "คำนวณความน่าจะเป็น",
          "content": "$$P(\\text{ขาว}) = \\frac{4}{10} = \\frac{2}{5}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-099",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ถ้าโยนลูกเต๋า 2 ลูกพร้อมกัน ความน่าจะเป็นที่ผลรวมของแต้มเท่ากับ 7 คือเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "1/12",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "1/6",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "5/36",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "1/4",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความน่าจะเป็นที่ผลรวมแต้มเท่ากับ 7 คือ $\\frac{1}{6}$",
      "trickTip": "💡 ผลรวมได้ 7 มี 6 แบบ: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1) \\implies \\frac{6}{36} = \\frac{1}{6}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หาจำนวนผลลัพธ์ทั้งหมด ($n(S)$)",
          "content": "$$n(S) = 6 \\times 6 = 36$$"
        },
        {
          "stepNumber": 2,
          "title": "หาเหตุการณ์ที่ผลรวมแต้มเป็น 7",
          "content": "$$E = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\} \\implies n(E) = 6$$\n$$P(E) = \\frac{6}{36} = \\frac{1}{6}$$"
        }
      ]
    }
  },
  {
    "id": "bm-math-100",
    "subjectId": "math",
    "topicId": "math-statistics",
    "topicName": "สถิติและความน่าจะเป็น",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สถิติและความน่าจะเป็น"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อมูลชุดหนึ่งมีค่ามัธยฐานเท่ากับ 15 ฐานนิยมเท่ากับ 12 และค่าเฉลี่ยเลขคณิตเท่ากับ 16 ข้อมูลชุดนี้มีการกระจายแบบใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เบ้ขวา (เบ้บวก)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เบ้ซ้าย (เบ้ลบ)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สมมาตร (โค้งปกติ)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "บอกไม่ได้",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ข้อมูลชุดนี้มีการกระจายแบบเบ้ขวา (เบ้บวก)",
      "trickTip": "💡 ความสัมพันธ์: $\\text{ฐานนิยม}(12) < \\text{มัธยฐาน}(15) < \\text{ค่าเฉลี่ย}(16) \\implies$ การแจกแจงแบบเบ้ขวา (Right-skewed)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "เปรียบเทียบค่ากลางทั้ง 3 ค่า",
          "content": "- ฐานนิยม (Mode) $= 12$\n- มัธยฐาน (Median) $= 15$\n- ค่าเฉลี่ยเลขคณิต (Mean) $= 16$\nจะเห็นว่า $\\text{Mode} < \\text{Median} < \\text{Mean}$"
        },
        {
          "stepNumber": 2,
          "title": "สรุปลักษณะรูปทรงการกระจาย",
          "content": "เมื่อค่าเฉลี่ยมีค่ามากกว่ามัธยฐานและฐานนิยม ข้อมูลจะมีหางยาวลาดไปทางด้านขวา เรียกว่า \"การกระจายแบบเบ้ขวา\" หรือ \"เบ้บวก\" (Positively Skewed)"
        }
      ]
    }
  }
];
