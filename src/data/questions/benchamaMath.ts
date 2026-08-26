import { Question } from '@/types/question';

/**
 * คลังข้อสอบคณิตศาสตร์ 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา
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
      "summary": "ห.ร.ม. คือ 84",
      "trickTip": "💡 แยกตัวประกอบ: $168 = 84 \\times 2$, $252 = 84 \\times 3 \\implies \\text{ห.ร.ม.} = 84$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ห.ร.ม. คือ 84"
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
      "summary": "ค.ร.น. คือ 180",
      "trickTip": "💡 หา ค.ร.น. จากตัวประกอบ: $2^2 \\times 3^2 \\times 5 = 180$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ค.ร.น. คือ 180"
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
      "summary": "จำนวนเฉพาะคือ 23, 29, 31, 37 รวมได้ 120",
      "trickTip": "💡 จำนวนเฉพาะระหว่าง 20 ถึง 40 คือ $23 + 29 + 31 + 37 = 120$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "จำนวนเฉพาะคือ 23, 29, 31, 37 รวมได้ 120"
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
      "summary": "ผลบวกเท่ากับ 99/100",
      "trickTip": "💡 สูตรเทเลสโคปิก (Telescoping): $1 - \\frac{1}{100} = \\frac{99}{100}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ผลบวกเท่ากับ 99/100"
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
      "summary": "ห.ร.ม. คือ 36",
      "trickTip": "💡 ค.ร.น. ของ 12 และ 18: $2^2 \\times 3^2 = 36$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ห.ร.ม. คือ 36"
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
      "summary": "จำนวนนั้นคือ 12",
      "trickTip": "💡 หา ห.ร.ม. ของ $(85 - 1) = 84$ และ $(137 - 5) = 132$ จะได้ $12$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "จำนวนนั้นคือ 12"
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
      "summary": "หลักหน่วยคือ 1",
      "trickTip": "💡 $7^4$ ลงท้ายด้วย $1$, เนื่องจาก $2,024$ หารด้วย $4$ ลงตัว เลขหลักหน่วยจึงเป็น $1$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "หลักหน่วยคือ 1"
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
      "summary": "มี 24 จำนวน",
      "trickTip": "💡 แยกตัวประกอบ $360 = 2^3 \\times 3^2 \\times 5^1 \\implies (3+1)(2+1)(1+1) = 24\\text{ ตัว}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "มี 24 จำนวน"
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
      "summary": "เท่ากับ -50",
      "trickTip": "💡 จัดกลุ่มคู่ละ $-1$: $(-1) \\times 50 = -50$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เท่ากับ -50"
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
      "summary": "b - a = 24",
      "trickTip": "💡 $8\\text{ ส่วน} = 96 \\implies 1\\text{ ส่วน} = 12 \\implies 2\\text{ ส่วน} = 24$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "b - a = 24"
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
      "summary": "0.052",
      "trickTip": "💡 แปลงเป็นทศนิยม: $\\frac{13 \\times 4}{1,000} = \\frac{52}{1,000} = 0.052$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "0.052"
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
      "summary": "เท่ากับ 14",
      "trickTip": "💡 สูตรเซต: $n(A \\cup B) = 11 + 12 - 9 = 14$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เท่ากับ 14"
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
      "summary": "เศษ 1",
      "trickTip": "💡 ทฤษฎีเศษเหลือ: $9 \\equiv 1 \\pmod 8 \\implies 9^{25} \\equiv 1^{25} = 1$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เศษ 1"
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
      "summary": "47 จำนวน",
      "trickTip": "💡 รวมจำนวนนักเรียน: $33 + 20 - 6 = 47\\text{ คน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "47 จำนวน"
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
      "summary": "62/99",
      "trickTip": "💡 ทศนิยมซ้ำ: $\\frac{44}{99} + \\frac{18}{99} = \\frac{62}{99}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "62/99"
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
      "summary": "x = 5",
      "trickTip": "💡 $720 = 2^4 \\times 3^2 \\times 5^1 \\implies$ ทำให้เป็นกำลังสองสมบูรณ์ต้องคูณด้วย $5$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x = 5"
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
      "summary": "คือ 72",
      "trickTip": "💡 คำนวณองศา: $\\frac{12 \\times 360^\\circ}{60} = 72^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "คือ 72"
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
      "summary": "63/64",
      "trickTip": "💡 อนุกรมเศษส่วน: $1 - \\frac{1}{64} = \\frac{63}{64}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "63/64"
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
      "summary": "คือ 120",
      "trickTip": "💡 หาเวลาพร้อมกัน: $\\text{ค.ร.น.}(6, 8, 10) = 120\\text{ นาที} = 2\\text{ ชั่วโมง}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "คือ 120"
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
      "summary": "เท่ากับ 22",
      "trickTip": "💡 แทนค่าตัวแปร: $2(4) + 3(5) - 1 = 8 + 15 - 1 = 22$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เท่ากับ 22"
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
      "summary": "2x - 3 = 11",
      "trickTip": "💡 $3x = 21 \\implies x = 7 \\implies 2(7) - 3 = 11$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "2x - 3 = 11"
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
      "summary": "x = 11",
      "trickTip": "💡 $6(x - 3) = 4(x + 1) \\implies 2x = 22 \\implies x = 11$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x = 11"
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
      "summary": "x * y = 144",
      "trickTip": "💡 ผลคูณตัวแปร: $x = 16, y = 9 \\implies 16 \\times 9 = 144$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x * y = 144"
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
      "trickTip": "💡 ลำดับรูปทั่วไป $n^2 + 1 \\implies 10^2 + 1 = 101$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "พจน์ที่ 10 คือ 101"
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
      "summary": "$a^2 + b^2 = 58$",
      "trickTip": "💡 กำลังสองสมบูรณ์: $a^2 + b^2 = (a+b)^2 - 2ab = 100 - 42 = 58$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "$a^2 + b^2 = 58$"
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
      "summary": "จำนวนมากสุดคือ 25",
      "trickTip": "💡 ผลรวม 3 จำนวนเรียงกัน: $3x = 72 \\implies x = 24 \\implies$ ตัวมากสุดคือ $25$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "จำนวนมากสุดคือ 25"
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
      "summary": "$x^2 = 25$",
      "trickTip": "💡 $x + 1 = 6 \\implies x = 5 \\implies x^2 = 25$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "$x^2 = 25$"
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
      "summary": "x = 6",
      "trickTip": "💡 $3x - 6 = 12 \\implies 3x = 18 \\implies x = 6$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x = 6"
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
      "summary": "ผลรวมคือ 400",
      "trickTip": "💡 ผลบวกเลขคี่ $n$ พจน์แรก: $n = 20 \\implies n^2 = 20^2 = 400$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ผลรวมคือ 400"
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
      "summary": "x = 0.5",
      "trickTip": "💡 $\\frac{5}{x} = 10 \\implies x = 0.5$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x = 0.5"
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
      "summary": "ลูกอายุ 10 ปี",
      "trickTip": "💡 สมการอายุ: $4x + 5 = 3(x + 5) \\implies x = 10$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ลูกอายุ 10 ปี"
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
      "summary": "x + y = 9",
      "trickTip": "💡 ผลต่างกำลังสอง: $(x - y)(x + y) = 45 \\implies 5(x + y) = 45 \\implies x + y = 9$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x + y = 9"
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
      "summary": "c = 25",
      "trickTip": "💡 อัตราส่วน: $12k = 60 \\implies k = 5 \\implies c = 5 \\times 5 = 25$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "c = 25"
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
      "summary": "x = 4",
      "trickTip": "💡 แก้สมการ: $10x - 5 - 3x - 6 = 17 \\implies 7x = 28 \\implies x = 4$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x = 4"
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
      "summary": "พจน์ที่ 15",
      "trickTip": "💡 พื้นที่จัตุรัส $n^2 = 225 \\implies n = 15$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "พจน์ที่ 15"
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
      "summary": "a + b = 8",
      "trickTip": "💡 แก้สมการ: $5(a + b) = 40 \\implies a + b = 8$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "a + b = 8"
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
      "summary": "x = 3",
      "trickTip": "💡 คูณตลอดด้วย $4$: $2(3x - 1) + (x + 1) = 20 \\implies 7x - 1 = 20 \\implies x = 3$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "คูณสมการตลอดด้วย ค.ร.น. ของ 2 และ 4 คือ 4: 2(3x-1) + (x+1) = 20 จะได้ 6x - 2 + x + 1 = 20 ดังนั้น 7x - 1 = 20 จะได้ 7x = 21 ดังนั้น x = 3"
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
      "summary": "เท่ากับ 14",
      "trickTip": "💡 $x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2 = 4^2 - 2 = 14$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เท่ากับ 14"
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
      "summary": "ผลต่างคือ 7",
      "trickTip": "💡 ตัวประกอบ: $15$ และ $8 \\implies 15 - 8 = 7$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ผลต่างคือ 7"
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
      "summary": "ผลรวมคือ 35",
      "trickTip": "💡 ผลรวม 5 พจน์แรก: $1 + 4 + 7 + 10 + 13 = 35$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ผลรวมคือ 35"
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
      "summary": "ยาว 10 ซม.",
      "trickTip": "💡 พีทาโกรัส: $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ยาว 10 ซม."
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
      "summary": "พื้นที่ 100 ตร.ซม.",
      "trickTip": "💡 ด้านยาว $10\\text{ ซม.} \\implies \\text{พื้นที่} = 10 \\times 10 = 100\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "พื้นที่ 100 ตร.ซม."
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
      "summary": "พื้นที่ 154 ตร.ซม.",
      "trickTip": "💡 พื้นที่วงกลม: $\\pi r^2 = \\frac{22}{7} \\times 7 \\times 7 = 154\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "พื้นที่ 154 ตร.ซม."
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
      "summary": "120 องศา",
      "trickTip": "💡 มุมภายในรูป 6 เหลี่ยม: $\\frac{(6 - 2) \\times 180^\\circ}{6} = \\frac{720^\\circ}{6} = 120^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "120 องศา"
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
      "summary": "ปริมาตร 400 ลบ.ซม.",
      "trickTip": "💡 ปริมาตรทรงสี่เหลี่ยม: $5 \\times 8 \\times 10 = 400\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ปริมาตร 400 ลบ.ซม."
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
      "summary": "พื้นที่ผิว 96 ตร.ซม.",
      "trickTip": "💡 ด้านยาว $4\\text{ ซม.} \\implies \\text{พื้นที่ผิว } 6 \\times 4^2 = 96\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "พื้นที่ผิว 96 ตร.ซม."
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
      "summary": "100 องศา",
      "trickTip": "💡 มุมในสามเหลี่ยม: $9\\text{ ส่วน} = 180^\\circ \\implies 1\\text{ ส่วน} = 20^\\circ \\implies 5\\text{ ส่วน} = 100^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "100 องศา"
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
      "summary": "พื้นที่ 96 ตร.ซม.",
      "trickTip": "💡 พื้นที่สี่เหลี่ยมขนมเปียกปูน: $\\frac{1}{2} \\times 12 \\times 16 = 96\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "พื้นที่ 96 ตร.ซม."
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
      "summary": "45 องศา",
      "trickTip": "💡 มุมภายนอกรูป 8 เหลี่ยม: $\\frac{360^\\circ}{8} = 45^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "45 องศา"
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
      "summary": "1540 ลบ.ซม.",
      "trickTip": "💡 ปริมาตรทรงกระบอก: $\\pi r^2 h = 154 \\times 10 = 1,540\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "1540 ลบ.ซม."
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
      "summary": "63 ตร.ซม.",
      "trickTip": "💡 พื้นที่สามเหลี่ยม: $\\frac{1}{2} \\times 14 \\times 9 = 63\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "63 ตร.ซม."
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
      "summary": "66 ตร.ซม.",
      "trickTip": "💡 พื้นที่สี่เหลี่ยมคางหมู: $\\frac{1}{2} \\times (8 + 14) \\times 6 = 66\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "66 ตร.ซม."
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
      "summary": "ประมาณ 160.3 ตร.ซม.",
      "trickTip": "💡 พื้นที่วงแหวน: $\\pi(R^2 - r^2) = \\frac{22}{7} \\times (100 - 49) = 160.28\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ประมาณ 160.3 ตร.ซม."
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
      "summary": "96 ตร.ซม.",
      "trickTip": "💡 พื้นที่ผืนผ้า: $8 \\times 12 = 96\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "96 ตร.ซม."
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
      "summary": "4 เท่า",
      "trickTip": "💡 เมื่อรัศมีเพิ่ม $2$ เท่า พื้นที่จะเพิ่ม $2^2 = 4$ เท่า",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "4 เท่า"
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
      "summary": "60 ลบ.ซม.",
      "trickTip": "💡 ปริมาตรปริซึม: $\\text{พื้นที่ฐาน} \\times \\text{สูง} = 6 \\times 10 = 60\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "60 ลบ.ซม."
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
      "summary": "เท่ากันเสมอ",
      "trickTip": "💡 สมบัติเส้นตรงตัดกัน: มุมตรงข้ามมีขนาดเท่ากันเสมอ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เท่ากันเสมอ"
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
      "summary": "แบ่งครึ่งซึ่งกันและกัน",
      "trickTip": "💡 สมบัติสี่เหลี่ยมด้านขนาน: มุมตรงข้ามกางเท่ากัน และมุมประชิดรวมกันได้ $180^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "แบ่งครึ่งซึ่งกันและกัน"
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
      "summary": "$3\\sqrt{3}$ ซม.",
      "trickTip": "💡 ความสูงสามเหลี่ยมด้านเท่า: $h = \\frac{\\sqrt{3}}{2} \\times \\text{ด้าน} = 3\\sqrt{3}\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "$3\\sqrt{3}$ ซม."
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
      "summary": "สูง 10 ซม.",
      "trickTip": "💡 พื้นที่ผิวข้างทรงกระบอก: $2\\pi rh = 440 \\implies 44 \\times h = 440 \\implies h = 10\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "สูง 10 ซม."
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
      "summary": "75 ตร.ซม.",
      "trickTip": "💡 พื้นที่รูปว่าว: $\\frac{1}{2} \\times 10 \\times 15 = 75\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "75 ตร.ซม."
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
      "summary": "5 ซม.",
      "trickTip": "💡 เส้นทแยงมุม: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\text{ ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "5 ซม."
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
      "summary": "$36\\pi$",
      "trickTip": "💡 ปริมาตรทรงกลม: $\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3^3) = 36\\pi\\text{ ลบ.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "$36\\pi$"
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
      "summary": "900 องศา",
      "trickTip": "💡 ผลรวมมุมภายในรูป 7 เหลี่ยม: $(7 - 2) \\times 180^\\circ = 900^\\circ$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "900 องศา"
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
      "summary": "60 ตร.ซม.",
      "trickTip": "💡 ด้านยาว $= 12\\text{ ซม.} \\implies \\text{พื้นที่} = 5 \\times 12 = 60\\text{ ตร.ซม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "60 ตร.ซม."
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
      "summary": "กำไร 50 บาท",
      "trickTip": "💡 ติดป้าย $500$ ลด $10\\%$ ขาย $450$ บาท $\\implies$ กำไร $450 - 400 = 50$ บาท",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "กำไร 50 บาท"
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
      "summary": "180 กิโลเมตร",
      "trickTip": "💡 ระยะทาง $= 80 \\times 2.25 = 180\\text{ กม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "180 กิโลเมตร"
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
      "summary": "เสร็จใน 4 วัน",
      "trickTip": "💡 ทำงานร่วมกัน: $\\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies 4\\text{ วัน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เสร็จใน 4 วัน"
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
      "summary": "16%",
      "trickTip": "💡 ความเข้มข้น: $\\frac{20 + 60}{500} = \\frac{80}{500} = 16\\%$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "16%"
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
      "summary": "1,000 บาท",
      "trickTip": "💡 ดอกเบี้ยธรรมดา: $I = P \\times r \\times t = 20,000 \\times 0.025 \\times 2 = 1,000\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "1,000 บาท"
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
      "summary": "14 เหรียญ",
      "trickTip": "💡 สมการเหรียญ: $5(30 - x) + 10x = 220 \\implies 5x = 70 \\implies x = 14\\text{ เหรียญ}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "14 เหรียญ"
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
      "summary": "7.5 วินาที",
      "trickTip": "💡 $72\\text{ กม./ชม.} = 20\\text{ ม./วินาที} \\implies \\frac{150}{20} = 7.5\\text{ วินาที}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "7.5 วินาที"
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
      "summary": "48%",
      "trickTip": "💡 ชาย $24$ คน จากทั้งหมด $50$ คน $\\implies \\frac{24}{50} = 48\\%$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "48%"
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
      "summary": "12 ชั่วโมง",
      "trickTip": "💡 อัตราไหลสุทธิ: $\\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12} \\implies 12\\text{ ชั่วโมง}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "12 ชั่วโมง"
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
      "summary": "2,000 บาท",
      "trickTip": "💡 ราคาขาย $85\\% = 1,700 \\implies 100\\% = \\frac{1,700 \\times 100}{85} = 2,000\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "2,000 บาท"
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
      "summary": "36,000 บาท",
      "trickTip": "💡 อัตราส่วน $3:4:6 \\implies \\text{ก} = 18,000 \\implies \\text{ค} = 6 \\times 6,000 = 36,000\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "36,000 บาท"
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
      "summary": "10 ตัว",
      "trickTip": "💡 ขาของสัตว์: $2(25 - x) + 4x = 70 \\implies 2x = 20 \\implies x = 10\\text{ ตัว}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "10 ตัว"
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
      "summary": "12:06 น.",
      "trickTip": "💡 เวลาเดินเร็ว: $3\\text{ วัน} \\times 2\\text{ นาที/วัน} = 6\\text{ นาที} \\implies 12:06\\text{ น.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "12:06 น."
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
      "summary": "25 คน",
      "trickTip": "💡 งานเท่าเดิม: $15 \\times 10 = 6 \\times N \\implies N = 25\\text{ วัน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "25 คน"
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
      "summary": "48 กม./ชม.",
      "trickTip": "💡 อัตราเร็วเฉลี่ย: $\\frac{\\text{ระยะทางรวม}}{\\text{เวลารวม}} = \\frac{240}{2 + 3} = \\frac{240}{5} = 48\\text{ กม./ชม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "48 กม./ชม."
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
      "summary": "30 บาท",
      "trickTip": "💡 ต้นทุนรวม $= \\frac{1,800}{1.2} = 1,500\\text{ บาท} \\implies \\frac{1,500}{50} = 30\\text{ บาท/กก.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "30 บาท"
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
      "summary": "10 กิโลกรัม",
      "trickTip": "💡 ผสมสินค้า: $50x + 80(30 - x) = 2,100 \\implies 30x = 300 \\implies x = 10\\text{ กก.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "10 กิโลกรัม"
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
      "summary": "3.0 กิโลเมตร",
      "trickTip": "💡 ระยะทางจริง: $6 \\times 50,000 = 300,000\\text{ ซม.} = 3,000\\text{ ม.} = 3\\text{ กม.}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "3.0 กิโลเมตร"
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
      "summary": "12,100 บาท",
      "trickTip": "💡 ดอกเบี้ยทบต้น: $10,000 \\times 1.1 \\times 1.1 = 12,100\\text{ บาท}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "12,100 บาท"
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
      "summary": "600 แผ่น",
      "trickTip": "💡 จำนวนกระเบื้อง: $\\frac{54\\text{ ตร.ม.}}{0.09\\text{ ตร.ม./แผ่น}} = 600\\text{ แผ่น}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "600 แผ่น"
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
      "summary": "x = 15",
      "trickTip": "💡 ผลรวมข้อมูล: $14 \\times 5 = 70 \\implies x = 70 - 55 = 15$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "x = 15"
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
      "summary": "มัธยฐานคือ 12",
      "trickTip": "💡 มัธยฐาน: เรียง $7, 8, 10, \\mathbf{12}, 15, 19, 22 \\implies$ ค่ากึ่งกลางคือ $12$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "มัธยฐานคือ 12"
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
      "summary": "ฐานนิยมคือ 6",
      "trickTip": "💡 ฐานนิยม: ค่า $6$ มีความถี่สูงสุด ($3$ ครั้ง)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "ฐานนิยมคือ 6"
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
      "summary": "3/4",
      "trickTip": "💡 ผลลัพธ์ $\\{\\text{HH, HT, TH, TT}\\} \\implies$ ออกหัวอย่างน้อย $1$ เหรียญมี $3$ แบบ $= \\frac{3}{4}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "3/4"
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
      "summary": "1/2",
      "trickTip": "💡 แต้มเฉพาะ $\\{2, 3, 5\\} \\implies \\frac{3}{6} = \\frac{1}{2}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "1/2"
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
      "summary": "1/4",
      "trickTip": "💡 ความน่าจะเป็น: $\\frac{3}{4 + 3 + 5} = \\frac{3}{12} = \\frac{1}{4}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "1/4"
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
      "summary": "90 คะแนน",
      "trickTip": "💡 ผลรวม 5 คน $= 390$, ผลรวม 4 คน $= 300 \\implies$ คนที่ 5 ได้ $390 - 300 = 90\\text{ คะแนน}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "90 คะแนน"
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
      "summary": "40%",
      "trickTip": "💡 สัดส่วนแผนภูมิรูปวงกลม: $\\frac{144^\\circ}{360^\\circ} \\times 100\\% = 40\\%$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "40%"
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
      "summary": "2/13",
      "trickTip": "💡 ไพ่ $\\text{King } 4\\text{ ใบ} + \\text{Queen } 4\\text{ ใบ} = 8\\text{ ใบ} \\implies \\frac{8}{52} = \\frac{2}{13}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "2/13"
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
      "summary": "18",
      "trickTip": "💡 ผลรวมเดิม $120 \\implies$ นำข้อมูล $30$ ออก เหลือ $\\frac{90}{5} = 18$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "18"
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
      "summary": "1/2",
      "trickTip": "💡 เลขคู่ $10$ ตัว จาก $20$ ตัว $\\implies \\frac{10}{20} = \\frac{1}{2}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "1/2"
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
      "summary": "77",
      "trickTip": "💡 $\\text{พิสัย} = \\text{ค่าสูงสุด} - \\text{ค่าต่ำสุด} = 89 - 12 = 77$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "77"
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
      "summary": "2/5",
      "trickTip": "💡 ความน่าจะเป็นลูกบอลสีขาว: $\\frac{4}{10} = \\frac{2}{5}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "2/5"
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
      "summary": "1/6",
      "trickTip": "💡 ผลรวมแต้มได้ $7$ มี $6$ แบบ จาก $36$ แบบ $\\implies \\frac{6}{36} = \\frac{1}{6}$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "1/6"
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
      "summary": "เบ้ขวา (เบ้บวก)",
      "trickTip": "💡 $\\text{ฐานนิยม}(12) < \\text{มัธยฐาน}(15) < \\text{ค่าเฉลี่ย}(16) \\implies$ การกระจายแบบเบ้ขวา (Right-skewed)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "วิธีทำ",
          "content": "เบ้ขวา (เบ้บวก)"
        }
      ]
    }
  }
];
