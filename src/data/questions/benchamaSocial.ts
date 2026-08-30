import { Question } from '@/types/question';

/**
 * คลังข้อสอบสังคมศึกษา 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา
 */

export const BENCHAMA_SOCIAL_QUESTIONS: Question[] = [
  {
    "id": "bm-soc-001",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เส้นสมมุติในแนวนอนที่ลากขนานกับเส้นศูนย์สูตรเพื่อบอกตำแหน่งเหนือ-ใต้ของโลก เรียกว่าอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เส้นละติจูด (Latitude)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เส้นลองจิจูด (Longitude)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เส้นเมริเดียนแรก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เส้นวันที่สากล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เส้นละติจูด (รุ้ง) บอกพิกัดเหนือ-ใต้ ส่วนลองจิจูด (แวง) บอกพิกัดตะวันออก-ตก",
      "trickTip": "💡 ละติจูด = แนวนอนบอกเหนือ-ใต้ / ลองจิจูด = แนวตั้งบอกเวลา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เส้นละติจูด (รุ้ง) บอกพิกัดเหนือ-ใต้ ส่วนลองจิจูด (แวง) บอกพิกัดตะวันออก-ตก"
        }
      ]
    }
  },
  {
    "id": "bm-soc-002",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ประเทศไทยใช้เวลามาตรฐานตามเส้นเมริเดียนที่เท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ลองจิจูด $100^\\circ$ ตะวันออก",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ลองจิจูด $105^\\circ$ ตะวันออก (เร็วกว่า UTC 7 ชั่วโมง)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ลองจิจูด $90^\\circ$ ตะวันออก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ลองจิจูด $120^\\circ$ ตะวันออก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ประเทศไทยใช้เส้นลองจิจูด $105^\\circ\\text{E}$ ซึ่งพาดผ่าน อ.โขงเจียม จ.อุบลราชธานี เป็นเวลามาตรฐาน (UTC+7)",
      "trickTip": "💡 เวลาไทย = ลองจิจูด 105°E ผ่านอุบลราชธานี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ประเทศไทยใช้เส้นลองจิจูด $105^\\circ\\text{E}$ ซึ่งพาดผ่าน อ.โขงเจียม จ.อุบลราชธานี เป็นเวลามาตรฐาน (UTC+7)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-003",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หากประเทศอังกฤษ (UTC+0) เวลา 12:00 น. ประเทศไทย (UTC+7) จะเป็นเวลาเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "05:00 น.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "17:00 น.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "19:00 น.",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "21:00 น.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เวลาไทยเร็วกว่าอังกฤษ 7 ชั่วโมง: $12:00 + 7 = 19:00\\text{ น.}$",
      "trickTip": "💡 อังกฤษเที่ยงวัน ➔ ไทย 1 ทุ่ม (เร็วกว่า 7 ชม.)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เวลาไทยเร็วกว่าอังกฤษ 7 ชั่วโมง: $12:00 + 7 = 19:00\\text{ น.}$"
        }
      ]
    }
  },
  {
    "id": "bm-soc-004",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มาตราส่วนในแผนที่ $1 : 100,000$ หมายความว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ระยะทาง 1 ซม. ในแผนที่ แทนระยะทางจริง 1 กิโลเมตร",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ระยะทาง 1 ซม. ในแผนที่ แทนระยะทางจริง 10 กิโลเมตร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ระยะทาง 1 ซม. ในแผนที่ แทนระยะทางจริง 100 เมตร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ระยะทาง 1 ซม. ในแผนที่ แทนระยะทางจริง 10 เมตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "100,000 ซม. = 1,000 ม. = 1 กม.",
      "trickTip": "💡 1 ซม. = 1 กิโลเมตร",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "100,000 ซม. = 1,000 ม. = 1 กม."
        }
      ]
    }
  },
  {
    "id": "bm-soc-005",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพิ่มขึ้น",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ลดลง",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คงที่",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เท่ากับอุปทาน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตามกฎอุปสงค์ ราคาและปริมาณซื้อมีความสัมพันธ์ในทิศทางตรงกันข้าม ($P \\uparrow \\implies Q_d \\downarrow$)",
      "trickTip": "💡 ราคาแพงขึ้น ➔ คนซื้อน้อยลง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ตามกฎอุปสงค์ ราคาและปริมาณซื้อมีความสัมพันธ์ในทิศทางตรงกันข้าม ($P \\uparrow \\implies Q_d \\downarrow$)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-006",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ธนาคารแห่งประเทศไทย (แบงก์ชาติ) ทำหน้าที่หลักตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "รับฝากเงินและปล่อยกู้ให้ประชาชนทั่วไป",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ออกธนบัตรและควบคุมเสถียรภาพทางการเงินของประเทศ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "จัดเก็บภาษีอากร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ลงทุนในตลาดหลักทรัพย์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ธนาคารกลางมีหน้าที่พิมพ์ธนบัตร กำหนดอัตราดอกเบี้ยนโยบาย และควบคุมเงินเฟ้อ",
      "trickTip": "💡 แบงก์ชาติ = พิมพ์ธนบัตร ควบคุมการเงิน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ธนาคารกลางมีหน้าที่พิมพ์ธนบัตร กำหนดอัตราดอกเบี้ยนโยบาย และควบคุมเงินเฟ้อ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-007",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ภาษีชนิดใดจัดเป็น 'ภาษีทางตรง'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภาษีมูลค่าเพิ่ม (VAT)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภาษีสรรพสามิต",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาษีเงินได้บุคคลธรรมดา",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภาษีศุลกากร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ภาษีเงินได้ผู้มีหน้าที่เสียภาษีต้องรับภาระเอง ไม่สามารถผลักภาระให้ผู้อื่นได้",
      "trickTip": "💡 ภาษีทางตรง = ภาษีเงินได้ / ภาษีทางอ้อม = VAT",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ภาษีเงินได้ผู้มีหน้าที่เสียภาษีต้องรับภาระเอง ไม่สามารถผลักภาระให้ผู้อื่นได้"
        }
      ]
    }
  },
  {
    "id": "bm-soc-008",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ระบบเศรษฐกิจแบบใดที่รัฐบาลควบคุมและวางแผนกิจกรรมทางเศรษฐกิจทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ระบบทุนนิยม (เสรีนิยม)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ระบบสังคมนิยมคอมมิวนิสต์ (ระบบวางแผนจากส่วนกลาง)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ระบบเศรษฐกิจแบบผสม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ระบบเศรษฐกิจพอเพียง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ระบบสังคมนิยมแบบรวมศูนย์ รัฐเป็นเจ้าของปัจจัยการผลิตทั้งหมด",
      "trickTip": "💡 คอมมิวนิสต์ = รัฐบาลควบคุม 100%",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ระบบสังคมนิยมแบบรวมศูนย์ รัฐเป็นเจ้าของปัจจัยการผลิตทั้งหมด"
        }
      ]
    }
  },
  {
    "id": "bm-soc-009",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แม่น้ำสายใดมีความยาวมากที่สุดในภาคตะวันออกเฉียงเหนือของไทย และไหลผ่าน จ.อุบลราชธานี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แม่น้ำเจ้าพระยา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แม่น้ำมูล",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แม่น้ำชี",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แม่น้ำปิง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แม่น้ำมูลมีความยาวประมาณ 640 กิโลเมตร ไหลลงสู่แม่น้ำโขงที่ อ.โขงเจียม",
      "trickTip": "💡 แม่น้ำมูล = แม่น้ำสายหลักของอีสานใต้และอุบลฯ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "แม่น้ำมูลมีความยาวประมาณ 640 กิโลเมตร ไหลลงสู่แม่น้ำโขงที่ อ.โขงเจียม"
        }
      ]
    }
  },
  {
    "id": "bm-soc-010",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จุดที่แม่น้ำมูลไหลมาบรรจบกับแม่น้ำโขงใน จ.อุบลราชธานี ทำให้เกิดปรากฏการณ์ธรรมชาติที่มีชื่อเสียง เรียกว่าอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำตกแสงจันทร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แม่น้ำสองสี (โขงสีปูน มูลสีคราม)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สามพันโบก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ผาแต้ม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แม่น้ำสองสี เกิดจากแม่น้ำโขง (สีขุ่น) บรรจบกับแม่น้ำมูล (สีครามใส) ที่ปากน้ำมูล อ.โขงเจียม",
      "trickTip": "💡 แม่น้ำสองสี = โขงสีปูน มูลสีคราม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "แม่น้ำสองสี เกิดจากแม่น้ำโขง (สีขุ่น) บรรจบกับแม่น้ำมูล (สีครามใส) ที่ปากน้ำมูล อ.โขงเจียม"
        }
      ]
    }
  },
  {
    "id": "bm-soc-011",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ลมมรสุมใดที่พัดพาฝนตกชุกเข้าสู่ประเทศไทยในช่วงเดือนพฤษภาคมถึงตุลาคม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ลมมรสุมตะวันออกเฉียงเหนือ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ลมมรสุมตะวันตกเฉียงใต้",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ลมสินค้า",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ลมว่าว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ลมมรสุมตะวันตกเฉียงใต้นำความชื้นจากมหาสมุทรอินเดียเข้าสู่ไทยในฤดูฝน",
      "trickTip": "💡 มรสุมตะวันตกเฉียงใต้ = ฤดูฝน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ลมมรสุมตะวันตกเฉียงใต้นำความชื้นจากมหาสมุทรอินเดียเข้าสู่ไทยในฤดูฝน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-012",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ภาวะเงินเฟ้อ (Inflation) ส่งผลกระทบต่อประชาชนอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ราคาสินค้าและบริการโดยทั่วไปแพงขึ้น ค่าของเงินลดลง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สินค้าลดราคาถูกลง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดอกเบี้ยเงินฝากเพิ่มขึ้นมาก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ทุกคนรวยขึ้น",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เงินเฟ้อทำให้เงินจำนวนเท่าเดิมซื้อสินค้าได้น้อยลง",
      "trickTip": "💡 เงินเฟ้อ = ข้าวของแพงขึ้น ค่าเงินลด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เงินเฟ้อทำให้เงินจำนวนเท่าเดิมซื้อสินค้าได้น้อยลง"
        }
      ]
    }
  },
  {
    "id": "bm-soc-013",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กลุ่มประเทศอาเซียน (ASEAN) ก่อตั้งขึ้นเมื่อปี พ.ศ. 2510 โดยมีการลงนามในปฏิญญาใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ปฏิญญากรุงเทพฯ (Bangkok Declaration)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ปฏิญญาจาการ์ตา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ปฏิญญากัวลาลัมเปอร์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ปฏิญญามะนิลา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ก่อตั้งที่พระราชวังสราญรมย์ กรุงเทพมหานคร วันที่ 8 สิงหาคม 2510",
      "trickTip": "💡 ปฏิญญากรุงเทพฯ = จุดกำเนิดอาเซียน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ก่อตั้งที่พระราชวังสราญรมย์ กรุงเทพมหานคร วันที่ 8 สิงหาคม 2510"
        }
      ]
    }
  },
  {
    "id": "bm-soc-014",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สามพันโบก จ.อุบลราชธานี มีลักษณะภูมิประเทศที่เกิดจากสาเหตุใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การระเบิดของภูเขาไฟ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การกัดเซาะของกระแสน้ำวนในแม่น้ำโขงจนเกิดเป็นแอ่งหินจำนวนมาก",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเคลื่อนที่ของแผ่นเปลือกโลก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การกระทำของมนุษย์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แก่งหินใต้ลำน้ำโขงถูกกระแสน้ำวนกัดเซาะเป็นหลุมกุมภลักษณ์ (Potholes) มากกว่า 3,000 หลุม",
      "trickTip": "💡 สามพันโบก = หลุมกุมภลักษณ์จากน้ำวนกัดเซาะ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "แก่งหินใต้ลำน้ำโขงถูกกระแสน้ำวนกัดเซาะเป็นหลุมกุมภลักษณ์ (Potholes) มากกว่า 3,000 หลุม"
        }
      ]
    }
  },
  {
    "id": "bm-soc-015",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ภาพเขียนสีโบราณก่อนประวัติศาสตร์อายุราว 3,000-4,000 ปี พบได้ที่อุทยานแห่งชาติใดใน จ.อุบลราชธานี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "อุทยานแห่งชาติเขาใหญ่",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "อุทยานแห่งชาติผาแต้ม",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อุทยานแห่งชาติภูกระดึง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อุทยานแห่งชาติดอยอินทนนท์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผาแต้ม อ.โขงเจียม มีภาพเขียนสีโบราณรูปช้าง ปลา ตุ้มดักปลา และมือคน",
      "trickTip": "💡 ผาแต้ม = ภาพเขียนสีก่อนประวัติศาสตร์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ผาแต้ม อ.โขงเจียม มีภาพเขียนสีโบราณรูปช้าง ปลา ตุ้มดักปลา และมือคน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-016",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปัจจัยการผลิตในทางเศรษฐศาสตร์ประกอบด้วย 4 สิ่ง ได้แก่อะไรบ้าง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ที่ดิน แรงงาน ทุน ผู้ประกอบการ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เงิน เครื่องจักร อาคาร พนักงาน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วัตถุดิบ ตลาด ลูกค้า ธนาคาร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สินค้า บริการ เงินตรา การขนส่ง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปัจจัยการผลิต 4 อย่าง: ที่ดิน (ผลตอบแทนคือค่าเช่า), แรงงาน (ค่าจ้าง), ทุน (ดอกเบี้ย), ผู้ประกอบการ (กำไร)",
      "trickTip": "💡 ที่ดิน แรงงาน ทุน ผู้ประกอบการ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ปัจจัยการผลิต 4 อย่าง: ที่ดิน (ผลตอบแทนคือค่าเช่า), แรงงาน (ค่าจ้าง), ทุน (ดอกเบี้ย), ผู้ประกอบการ (กำไร)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-017",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ตลาดในระบบเศรษฐกิจที่มีผู้ขายเพียงรายเดียวและสามารถกำหนดราคาได้ เรียกว่าอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตลาดแข่งขันสมบูรณ์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตลาดผู้ขายน้อยราย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตลาดผูกขาด (Monopoly)",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตลาดนัด",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตลาดผูกขาดมีผู้ผลิตรายเดียว เช่น การประปา รถไฟ",
      "trickTip": "💡 ผูกขาด = ผู้ขายเจ้าเดียว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ตลาดผูกขาดมีผู้ผลิตรายเดียว เช่น การประปา รถไฟ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-018",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เครื่องมือใดใช้ระบุพิกัดตำแหน่งบนพื้นผิวโลกผ่านสัญญาณดาวเทียม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "GPS (Global Positioning System)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "GIS",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เข็มทิศ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "บารอมิเตอร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "GPS ใช้ดาวเทียมระบุพิกัดละติจูด ลองจิจูด และระดับความสูง",
      "trickTip": "💡 GPS = ระบุพิกัดผ่านดาวเทียม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "GPS ใช้ดาวเทียมระบุพิกัดละติจูด ลองจิจูด และระดับความสูง"
        }
      ]
    }
  },
  {
    "id": "bm-soc-019",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ภูมิอากาศแบบใดที่ครอบคลุมพื้นที่ส่วนใหญ่ของประเทศไทย",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภูมิอากาศแบบทรอปิคอลสะวันนา (Aw)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภูมิอากาศแบบป่าดิบชื้น (Af)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภูมิอากาศแบบทะเลทราย (BWh)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภูมิอากาศแบบอบอุ่นชื้น (Cfa)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ภาคกลาง เหนือ อีสาน เป็นแบบสะวันนา (ร้อนชื้นสลับแล้ง) ยกเว้นภาคใต้ที่เป็นแบบมรสุมเมืองร้อน",
      "trickTip": "💡 ไทยส่วนใหญ่ = ทรอปิคอลสะวันนา (Aw)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ภาคกลาง เหนือ อีสาน เป็นแบบสะวันนา (ร้อนชื้นสลับแล้ง) ยกเว้นภาคใต้ที่เป็นแบบมรสุมเมืองร้อน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-020",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การดำเนินชีวิตตามหลัก 'ปรัชญาเศรษฐกิจพอเพียง' ของรัชกาลที่ 9 ยึดหลักการ 3 ห่วง 2 เงื่อนไข คือข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พอประมาณ มีเหตุผล มีภูมิคุ้มกัน + เงื่อนไขความรู้และคุณธรรม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ประหยัด อดออม ไม่ใช้เงิน + เงื่อนไขการศึกษาและกฎหมาย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทำงานหนัก สะสมทองคำ + เงื่อนไขโชคชะตา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ช่วยเหลือตนเอง พึ่งพารัฐบาล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "3 ห่วง: พอประมาณ มีเหตุผล มีภูมิคุ้มกันในตัวที่ดี / 2 เงื่อนไข: ความรู้คู่คุณธรรม",
      "trickTip": "💡 3 ห่วง 2 เงื่อนไข = เศรษฐกิจพอเพียง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "3 ห่วง: พอประมาณ มีเหตุผล มีภูมิคุ้มกันในตัวที่ดี / 2 เงื่อนไข: ความรู้คู่คุณธรรม"
        }
      ]
    }
  },
  {
    "id": "bm-soc-021",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดุลการค้าเกินดุล (Trade Surplus) เกิดขึ้นในสภาวะใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มูลค่าสินค้าส่งออกมากกว่ามูลค่าสินค้านำเข้า",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "มูลค่านำเข้ามากกว่าส่งออก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มูลค่านำเข้าเท่ากับส่งออก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไม่มีการค้าขายกับต่างประเทศ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ส่งออก > นำเข้า ➔ ได้ดุลการค้า (เกินดุล)",
      "trickTip": "💡 ส่งออกมากกว่านำเข้า = เกินดุล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ส่งออก > นำเข้า ➔ ได้ดุลการค้า (เกินดุล)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-022",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เทือกเขาภูพานและเทือกเขาเพชรบูรณ์มีความสำคัญทางภูมิศาสตร์อย่างไรต่อภาคอีสาน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เป็นแนวกั้นลมมรสุมและแบ่งแอ่งโคราชกับแอ่งสกลนคร",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เป็นแนวภูเขาไฟที่ยังมีพลัง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เป็นเทือกเขาสูงที่สุดในไทย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เป็นแหล่งน้ำมันดิบ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เทือกเขาภูพานแบ่งภาคอีสานออกเป็น 2 แอ่ง คือ แอ่งโคราช (ใต้) และ แอ่งสกลนคร (เหนือ)",
      "trickTip": "💡 ภูพาน = แบ่งแอ่งโคราชและสกลนคร",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เทือกเขาภูพานแบ่งภาคอีสานออกเป็น 2 แอ่ง คือ แอ่งโคราช (ใต้) และ แอ่งสกลนคร (เหนือ)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-023",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การลดอัตราดอกเบี้ยนโยบายของธนาคารกลางมีเป้าหมายเพื่ออะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพื่อกระตุ้นเศรษฐกิจและการลงทุนให้คนกู้เงินไปทำธุรกิจง่ายขึ้น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เพื่อลดเงินเฟ้อ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เพื่อเพิ่มเงินออมในธนาคาร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เพื่อลดการใช้จ่าย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ดอกเบี้ยต่ำ ➔ ต้นทุนกู้ยืมลด ➔ กระตุ้นการใช้จ่ายและลงทุน",
      "trickTip": "💡 ลดดอกเบี้ย = กระตุ้นเศรษฐกิจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ดอกเบี้ยต่ำ ➔ ต้นทุนกู้ยืมลด ➔ กระตุ้นการใช้จ่ายและลงทุน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-024",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เส้นศูนย์สูตร (Equator) มีค่าละติจูดกี่องศา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "0 องศา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "23.5 องศาเหนือ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "66.5 องศาเหนือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "90 องศา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เส้นศูนย์สูตรคือ ละติจูด $0^\\circ$ แบ่งโลกออกเป็นซีกโลกเหนือและซีกโลกใต้",
      "trickTip": "💡 ศูนย์สูตร = 0 องศา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เส้นศูนย์สูตรคือ ละติจูด $0^\\circ$ แบ่งโลกออกเป็นซีกโลกเหนือและซีกโลกใต้"
        }
      ]
    }
  },
  {
    "id": "bm-soc-025",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จังหวัดใดในประเทศไทยเห็นดวงอาทิตย์ขึ้นเป็นแห่งแรกของสยาม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "จ.เชียงใหม่",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จ.อุบลราชธานี (ผาชะนะได อ.โขงเจียม)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "จ.ตราด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "จ.นราธิวาส",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผาชะนะได อ.โขงเจียม จ.อุบลราชธานี ตั้งอยู่ทางทิศตะวันออกสุดของประเทศไทย ($105^\\circ 37'\\text{E}$)",
      "trickTip": "💡 รับตะวันก่อนใครในสยาม = ผาชะนะได อุบลราชธานี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ผาชะนะได อ.โขงเจียม จ.อุบลราชธานี ตั้งอยู่ทางทิศตะวันออกสุดของประเทศไทย ($105^\\circ 37'\\text{E}$)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-026",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สินค้าทดแทนกัน (Substitute Goods) ในทางเศรษฐศาสตร์คือคู่ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "รถยนต์กับน้ำมัน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ชาเขียวกับกาแฟ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดินสอกับยางลบ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ช้อนกับส้อม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ชาเขียวและกาแฟใช้ดื่มทดแทนกันได้เมื่ออย่างใดอย่างหนึ่งราคาแพงขึ้น",
      "trickTip": "💡 ชา-กาแฟ = สินค้าทดแทนกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ชาเขียวและกาแฟใช้ดื่มทดแทนกันได้เมื่ออย่างใดอย่างหนึ่งราคาแพงขึ้น"
        }
      ]
    }
  },
  {
    "id": "bm-soc-027",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "องค์กรการค้าโลก (WTO) มีบทบาทหน้าที่หลักอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ส่งเสริมการค้าเสรีและลดอุปสรรคกำแพงภาษีระหว่างประเทศสมาชิก",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ปล่อยกู้เงินสร้างเขื่อน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "รักษาความสงบสุขของโลก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อนุรักษ์สิ่งแวดล้อม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "WTO มุ่งเน้นการเปิดเสรีทางการค้าและแก้ไขข้อพิพาททางการค้าระหว่างประเทศ",
      "trickTip": "💡 WTO = ส่งเสริมการค้าเสรี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "WTO มุ่งเน้นการเปิดเสรีทางการค้าและแก้ไขข้อพิพาททางการค้าระหว่างประเทศ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-028",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดินในภาคตะวันออกเฉียงเหนือส่วนใหญ่เป็นดินชนิดใดที่ทำให้กักเก็บน้ำได้ไม่ดี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ดินเหนียว",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ดินทราย / ดินร่วนปนทราย",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดินตะกอนปากแม่น้ำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ดินภูเขาไฟ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ดินทรายไม่อุ้มน้ำและมีการชะล้างพังทลายของหน้าดินสูง",
      "trickTip": "💡 ดินอีสาน = ดินร่วนปนทราย ไม่อุ้มน้ำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ดินทรายไม่อุ้มน้ำและมีการชะล้างพังทลายของหน้าดินสูง"
        }
      ]
    }
  },
  {
    "id": "bm-soc-029",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สหกรณ์ (Cooperative) จัดตั้งขึ้นโดยมีวัตถุประสงค์หลักตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพื่อช่วยเหลือสมาชิกในการประกอบอาชีพโดยไม่หวังผลกำไรสูงสุด",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เพื่อแข่งขันกับบริษัทข้ามชาติ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เพื่อผูกขาดสินค้าในท้องถิ่น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เพื่อหลีกเลี่ยงการเสียภาษี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ยึดหลักการช่วยเหลือตนเองและช่วยเหลือซึ่งกันและกัน (Self-help and Mutual-help)",
      "trickTip": "💡 สหกรณ์ = รวมกลุ่มช่วยเหลือสมาชิก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ยึดหลักการช่วยเหลือตนเองและช่วยเหลือซึ่งกันและกัน (Self-help and Mutual-help)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-030",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปรากฏการณ์ 'ดินเค็ม' ในภาคอีสานเกิดจากสาเหตุทางธรณีวิทยาข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มีชั้นหินเกลือ (Rock Salt) ใต้ดิน และน้ำใต้ดินดันเกลือขึ้นสู่ผิวดิน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การทิ้งขยะอุตสาหกรรม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "น้ำทะเลหนุนสูง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การใส่ปุ๋ยเคมีมากเกินไป",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ภาคอีสานในอดีตเคยเป็นทะเลโบราณ มีชั้นหินเกลือใต้ผิวดินในหมวดหินมหาสารคาม",
      "trickTip": "💡 ดินเค็ม = ชั้นหินเกลือใต้ดินโบราณ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ภาคอีสานในอดีตเคยเป็นทะเลโบราณ มีชั้นหินเกลือใต้ผิวดินในหมวดหินมหาสารคาม"
        }
      ]
    }
  },
  {
    "id": "bm-soc-031",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดัชนีราคาผู้บริโภค (CPI) ใช้เป็นเครื่องมือชี้วัดสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ระดับเงินเฟ้อและค่าครองชีพของประชาชน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จำนวนคนว่างงาน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มูลค่า GDP รวม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ปริมาณเงินสำรองระหว่างประเทศ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "CPI วัดการเปลี่ยนแปลงของราคาสินค้าและบริการที่ผู้บริโภคซื้อ",
      "trickTip": "💡 CPI = วัดเงินเฟ้อและค่าครองชีพ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "CPI วัดการเปลี่ยนแปลงของราคาสินค้าและบริการที่ผู้บริโภคซื้อ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-032",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เขื่อนสิรินธร จ.อุบลราชธานี สร้างกั้นลำน้ำใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ลำโดมน้อย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แม่น้ำชี",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แม่น้ำมูล",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แม่น้ำโขง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เขื่อนสิรินธรสร้างปิดกั้นลำโดมน้อยเพื่อผลิตกระแสไฟฟ้าพลังน้ำและกักเก็บน้ำ",
      "trickTip": "💡 เขื่อนสิรินธร = ปิดกั้นลำโดมน้อย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เขื่อนสิรินธรสร้างปิดกั้นลำโดมน้อยเพื่อผลิตกระแสไฟฟ้าพลังน้ำและกักเก็บน้ำ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-033",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นบทบาทของผู้บริโภคที่ฉลาดและมีเหตุผล",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ซื้อสินค้าตามคำโฆษณาชวนเชื่อ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เปรียบเทียบคุณภาพ ราคา และตรวจสอบฉลาก/อย. ก่อนซื้อเสมอ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เลือกซื้อเฉพาะสินค้าราคาแพงที่สุด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ซื้อสินค้าตามกระแสนิยม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตรวจสอบมาตรฐาน ฉลาก วันหมดอายุ และความคุ้มค่า",
      "trickTip": "💡 ผู้บริโภคฉลาด = ตรวจสอบฉลากและเปรียบเทียบราคา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ตรวจสอบมาตรฐาน ฉลาก วันหมดอายุ และความคุ้มค่า"
        }
      ]
    }
  },
  {
    "id": "bm-soc-034",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เส้นทรอปิกออฟแคนเซอร์ (Tropic of Cancer) อยู่ที่ตำแหน่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ละติจูด $23.5^\\circ$ เหนือ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ละติจูด $23.5^\\circ$ ใต้",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ละติจูด $66.5^\\circ$ เหนือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ละติจูด $0^\\circ$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทรอปิกออฟแคนเซอร์คือ $23.5^\\circ\\text{N}$",
      "trickTip": "💡 Tropic of Cancer = 23.5° เหนือ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ทรอปิกออฟแคนเซอร์คือ $23.5^\\circ\\text{N}$"
        }
      ]
    }
  },
  {
    "id": "bm-soc-035",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปัญหาเศรษฐกิจพื้นฐาน (Basic Economic Problems) ของทุกสังคมคืออะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผลิตอะไร ผลิตอย่างไร และผลิตเพื่อใคร (What, How, for Whom)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "หาเงินจากไหน ฝากธนาคารใด และซื้ออะไร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทำงานอะไร พักผ่อนที่ไหน และกินอะไร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ส่งออกอะไร นำเข้าอะไร และเก็บภาษีเท่าใด",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปัญหาพื้นฐานเกิดจากทรัพยากรมีจำกัด แต่ความต้องการของมนุษย์มีไม่จำกัด",
      "trickTip": "💡 What, How, For Whom = ปัญหาพื้นฐานเศรษฐกิจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ปัญหาพื้นฐานเกิดจากทรัพยากรมีจำกัด แต่ความต้องการของมนุษย์มีไม่จำกัด"
        }
      ]
    }
  },
  {
    "id": "bm-soc-036",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ภาพถ่ายดาวเทียมและภาพถ่ายทางอากาศแตกต่างกันอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภาพถ่ายดาวเทียมถ่ายจากนอกบรรยากาศโลก ส่วนภาพถ่ายทางอากาศถ่ายจากอากาศยานในบรรยากาศ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภาพถ่ายดาวเทียมเป็นภาพขาวดำเสมอ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาพถ่ายทางอากาศไม่บอกความสูง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไม่มีข้อแตกต่าง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ดาวเทียมโคจรนอกบรรยากาศ บันทึกข้อมูลด้วยคลื่นแม่เหล็กไฟฟ้า",
      "trickTip": "💡 ดาวเทียม = นอกโลก / ทางอากาศ = โดรนหรือเครื่องบินในโลก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ดาวเทียมโคจรนอกบรรยากาศ บันทึกข้อมูลด้วยคลื่นแม่เหล็กไฟฟ้า"
        }
      ]
    }
  },
  {
    "id": "bm-soc-037",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เงินฝากประเภทใดที่ผู้ฝากได้รับดอกเบี้ยสูงที่สุดแต่มีเงื่อนไขกำหนดระยะเวลาฝากถอนแน่นอน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เงินฝากประจำ (Fixed Deposit)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เงินฝากออมทรัพย์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เงินฝากกระแสรายวัน (ใช้เช็ค)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เงินฝากเผื่อเรียก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เงินฝากประจำให้ผลตอบแทนดอกเบี้ยสูงกว่าเพราะกำหนดระยะเวลาแน่นอน (3, 6, 12 เดือน)",
      "trickTip": "💡 เงินฝากประจำ = ดอกเบี้ยสูงสุด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เงินฝากประจำให้ผลตอบแทนดอกเบี้ยสูงกว่าเพราะกำหนดระยะเวลาแน่นอน (3, 6, 12 เดือน)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-038",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เขตเวลามาตรฐานโลก (Time Zones) แบ่งออกเป็นกี่เขต แต่ละเขตห่างกันกี่องศาลองจิจูด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "24 เขต เขตละ 15 องศา (1 ชั่วโมง)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "12 เขต เขตละ 30 องศา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "24 เขต เขตละ 10 องศา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "36 เขต เขตละ 10 องศา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โลกมี 360 องศา หมุน 24 ชม. $\\implies 360/24 = 15^\\circ$ ต่อ 1 ชั่วโมง",
      "trickTip": "💡 1 เขตเวลา = 15° ลองจิจูด = 1 ชั่วโมง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "โลกมี 360 องศา หมุน 24 ชม. $\\implies 360/24 = 15^\\circ$ ต่อ 1 ชั่วโมง"
        }
      ]
    }
  },
  {
    "id": "bm-soc-039",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สินค้าในข้อใดที่มีความยืดหยุ่นของอุปสงค์ต่อราคาน้อยมาก (Inelastic Demand)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ยารักษาโรคและข้าวสาร",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กระเป๋าแบรนด์เนม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตั๋วเครื่องบินไปเที่ยว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เครื่องประดับเพชรพลอย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สินค้าจำเป็นต่อชีวิต แม้ราคาขึ้นคนก็ยังจำเป็นต้องซื้อ",
      "trickTip": "💡 สินค้าจำเป็น = ยืดหยุ่นน้อย (Inelastic)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "สินค้าจำเป็นต่อชีวิต แม้ราคาขึ้นคนก็ยังจำเป็นต้องซื้อ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-040",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดอกเบี้ยทบต้น (Compound Interest) มีหลักการคำนวณอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "นำดอกเบี้ยที่ได้รับในงวดก่อนมารวมเป็นเงินต้นในงวดถัดไป",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คิดดอกเบี้ยจากเงินต้นคงที่ตลอดสัญญา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ลดเงินต้นลงทุกเดือน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "หักภาษีล่วงหน้า 50%",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ดอกเบี้ยคิดทบกับเงินต้นเดิม เกิดผลตอบแทนแบบทวีคูณ",
      "trickTip": "💡 ดอกเบี้ยทบต้น = คิดดอกเบี้ยบนดอกเบี้ย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ดอกเบี้ยคิดทบกับเงินต้นเดิม เกิดผลตอบแทนแบบทวีคูณ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-041",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "องค์กรใดทำหน้าที่คุ้มครองผู้บริโภคในประเทศไทย",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สำนักงานคณะกรรมการคุ้มครองผู้บริโภค (สคบ.)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สำนักงานตำรวจแห่งชาติ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กรมที่ดิน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กรมศุลกากร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สคบ. สังกัดสำนักนายกรัฐมนตรี ทำหน้าที่ดูแลสิทธิผู้บริโภค",
      "trickTip": "💡 สคบ. = คุ้มครองผู้บริโภค",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "สคบ. สังกัดสำนักนายกรัฐมนตรี ทำหน้าที่ดูแลสิทธิผู้บริโภค"
        }
      ]
    }
  },
  {
    "id": "bm-soc-042",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ระบบเศรษฐกิจของประเทศไทยในปัจจุบันจัดเป็นระบบเศรษฐกิจแบบใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ระบบเศรษฐกิจแบบผสม (Mixed Economy)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ระบบทุนนิยมแท้",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ระบบสังคมนิยม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ระบบคอมมิวนิสต์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เอกชนมีเสรีภาพในการดำเนินธุรกิจโดยมีรัฐบาลกำกับดูแลและให้บริการสาธารณะ",
      "trickTip": "💡 ระบบเศรษฐกิจไทย = แบบผสม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "เอกชนมีเสรีภาพในการดำเนินธุรกิจโดยมีรัฐบาลกำกับดูแลและให้บริการสาธารณะ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-043",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปรากฏการณ์ 'ฝนแล้งทิ้งช่วง' ในภาคอีสานมักเกิดขึ้นในช่วงเดือนใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มิถุนายน - กรกฎาคม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ธันวาคม - มกราคม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เมษายน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตุลาคม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ช่วงรอยต่อระหว่างมรสุมตะวันตกเฉียงใต้กับร่องมรสุมที่เลื่อนขึ้นไปทางจีน",
      "trickTip": "💡 ฝนทิ้งช่วง = มิ.ย. - ก.ค.",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ช่วงรอยต่อระหว่างมรสุมตะวันตกเฉียงใต้กับร่องมรสุมที่เลื่อนขึ้นไปทางจีน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-044",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สถาบันการเงินเฉพาะกิจของรัฐที่มีหน้าที่ช่วยเหลือเกษตรกรคือข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ธนาคารออมสิน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ธนาคารอาคารสงเคราะห์ (ธอส.)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ธนาคารกรุงไทย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ธ.ก.ส. มุ่งเน้นสินเชื่อและส่งเสริมอาชีพเกษตรกรไทย",
      "trickTip": "💡 เกษตรกร = ธ.ก.ส.",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ธ.ก.ส. มุ่งเน้นสินเชื่อและส่งเสริมอาชีพเกษตรกรไทย"
        }
      ]
    }
  },
  {
    "id": "bm-soc-045",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เส้นเมริเดียนปฐม (Prime Meridian) ลากผ่านเมืองใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เมืองกรีนิช ประเทศอังกฤษ ($0^\\circ$ ลองจิจูด)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กรุงปารีส ประเทศฝรั่งเศส",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กรุงวอชิงตัน ดี.ซี. สหรัฐอเมริกา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กรุงเทพมหานคร ประเทศไทย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หอดูดาวหลวงกรีนิช ลอนดอน สหราชอาณาจักร กำหนดเป็นจุดเริ่มต้นลองจิจูด 0 องศา",
      "trickTip": "💡 เมริเดียนปฐม = กรีนิช อังกฤษ (0° ลองจิจูด)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "หอดูดาวหลวงกรีนิช ลอนดอน สหราชอาณาจักร กำหนดเป็นจุดเริ่มต้นลองจิจูด 0 องศา"
        }
      ]
    }
  },
  {
    "id": "bm-soc-046",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดไม่ใช่ปัจจัยที่ส่งผลต่อการเปลี่ยนแปลงของอุปทาน (Supply)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ต้นทุนการผลิตและราคาวัตถุดิบ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เทคโนโลยีการผลิต",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สภาพดินฟ้าอากาศ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความชอบและรสนิยมของผู้ซื้อ",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "รสนิยมของผู้ซื้อเป็นปัจจัยกำหนด 'อุปสงค์' ไม่ใช่อุปทาน",
      "trickTip": "💡 รสนิยม = กำหนดอุปสงค์ ไม่ใช่อุปทาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "รสนิยมของผู้ซื้อเป็นปัจจัยกำหนด 'อุปสงค์' ไม่ใช่อุปทาน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-047",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ตลาดหุ้น หรือ ตลาดหลักทรัพย์แห่งประเทศไทย (SET) ทำหน้าที่อะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เป็นแหล่งระดมทุนระยะยาวของภาคธุรกิจและการลงทุนของประชาชน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "รับฝากเงินออมทรัพย์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ออกพันธบัตรรัฐบาลเท่านั้น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พิมพ์ธนบัตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตลาดทุนช่วยให้บริษัทระดมทุนขยายกิจการและประชาชนร่วมลงทุนถือหุ้น",
      "trickTip": "💡 ตลาดหลักทรัพย์ = แหล่งระดมทุนระยะยาว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ตลาดทุนช่วยให้บริษัทระดมทุนขยายกิจการและประชาชนร่วมลงทุนถือหุ้น"
        }
      ]
    }
  },
  {
    "id": "bm-soc-048",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อตกลงเขตการค้าเสรีอาเซียน (AFTA) มีเป้าหมายสำคัญที่สุดคือข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ลดหย่อนและยกเลิกอัตราภาษีศุลกากรระหว่างประเทศสมาชิกอาเซียน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การใช้เงินสกุลเดียวกัน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การรวมประเทศเป็นชาติเดียว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การยกเลิกหนังสือเดินทาง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "AFTA มุ่งเน้นการเปิดเสรีทางการค้าและลดภาษีนำเข้าเป็น 0%",
      "trickTip": "💡 AFTA = ลดภาษีศุลกากรในอาเซียนเป็น 0%",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "AFTA มุ่งเน้นการเปิดเสรีทางการค้าและลดภาษีนำเข้าเป็น 0%"
        }
      ]
    }
  },
  {
    "id": "bm-soc-049",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เขตร้อนชื้น (Torrid Zone) ของโลกอยู่ระหว่างละติจูดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ระหว่าง $23.5^\\circ\\text{N}$ (Tropic of Cancer) ถึง $23.5^\\circ\\text{S}$ (Tropic of Capricorn)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ระหว่าง $0^\\circ$ ถึง $66.5^\\circ\\text{N}$",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ระหว่าง $66.5^\\circ\\text{N}$ ถึงขั้วโลกเหนือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แถบขั้วโลก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "บริเวณรอบเส้นศูนย์สูตรที่ได้รับรังสีดวงอาทิตย์ตั้งฉากเกือบตลอดปี",
      "trickTip": "💡 เขตร้อน = 23.5°N ถึง 23.5°S",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "บริเวณรอบเส้นศูนย์สูตรที่ได้รับรังสีดวงอาทิตย์ตั้งฉากเกือบตลอดปี"
        }
      ]
    }
  },
  {
    "id": "bm-soc-050",
    "subjectId": "social",
    "topicId": "soc-geography-econ",
    "topicName": "ภูมิศาสตร์และเศรษฐศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "ภูมิศาสตร์",
      "เศรษฐศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ค่าเสียโอกาส (Opportunity Cost) ในทางเศรษฐศาสตร์หมายถึงสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มูลค่าของทางเลือกที่ดีที่สุดที่ต้องสละทิ้งไปเมื่อตัดสินใจเลือกอย่างใดอย่างหนึ่ง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ค่าใช้จ่ายในการเดินทาง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เงินที่ทำหาย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ราคาสินค้าที่ซื้อมา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลประโยชน์สูงสุดที่ยอมสูญเสียไปเพื่อเลือกทำสิ่งอื่น",
      "trickTip": "💡 ค่าเสียโอกาส = มูลค่าของทางเลือกอันดับรองที่ไม่ได้เลือก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระภูมิศาสตร์และเศรษฐศาสตร์",
          "content": "ผลประโยชน์สูงสุดที่ยอมสูญเสียไปเพื่อเลือกทำสิ่งอื่น"
        }
      ]
    }
  },
  {
    "id": "bm-soc-051",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กฎหมายสูงสุดในการปกครองประเทศไทยคือข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "รัฐธรรมนูญแห่งราชอาณาจักรไทย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พระราชบัญญัติ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พระราชกำหนด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ประมวลกฎหมายแพ่งและพาณิชย์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รัฐธรรมนูญเป็นกฎหมายสูงสุด กฎหมายอื่นใดจะขัดหรือแย้งไม่ได้",
      "trickTip": "💡 รัฐธรรมนูญ = กฎหมายสูงสุด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "รัฐธรรมนูญเป็นกฎหมายสูงสุด กฎหมายอื่นใดจะขัดหรือแย้งไม่ได้"
        }
      ]
    }
  },
  {
    "id": "bm-soc-052",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่าย ตามหลักการแบ่งแยกอำนาจ ได้แก่อะไรบ้าง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "อำนาจนิติบัญญัติ, อำนาจบริหาร, อำนาจตุลาการ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทหาร, ตำรวจ, ข้าราชการ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "นายกรัฐมนตรี, ประธานสภา, ผบ.ทบ.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กระทรวงการคลัง, มหาดไทย, ศึกษาธิการ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "นิติบัญญัติ (รัฐสภา), บริหาร (คณะรัฐมนตรี), ตุลาการ (ศาล)",
      "trickTip": "💡 นิติบัญญัติ - บริหาร - ตุลาการ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "นิติบัญญัติ (รัฐสภา), บริหาร (คณะรัฐมนตรี), ตุลาการ (ศาล)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-053",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "บุคคลจะมีสิทธิเลือกตั้งสมาชิกสภาผู้แทนราษฎร (ส.ส.) ต้องมีอายุไม่ต่ำกว่ากี่ปีในวันเลือกตั้ง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "18 ปีบริบูรณ์",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "20 ปีบริบูรณ์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "21 ปีบริบูรณ์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "25 ปีบริบูรณ์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผู้มีสิทธิเลือกตั้งต้องมีสัญชาติไทยและมีอายุไม่ต่ำกว่า 18 ปีบริบูรณ์ในวันเลือกตั้ง",
      "trickTip": "💡 สิทธิเลือกตั้ง = อายุ 18 ปีบริบูรณ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ผู้มีสิทธิเลือกตั้งต้องมีสัญชาติไทยและมีอายุไม่ต่ำกว่า 18 ปีบริบูรณ์ในวันเลือกตั้ง"
        }
      ]
    }
  },
  {
    "id": "bm-soc-054",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วันสำคัญทางพระพุทธศาสนาวันใดที่ได้รับการยกย่องจาก UNESCO ให้เป็น 'วันสำคัญสากลของโลก'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "วันวิสาขบูชา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "วันมาฆบูชา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วันอาสาฬหบูชา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วันเข้าพรรษา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วันวิสาขบูชาเป็นวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า ตรงกับวันเพ็ญเดือน 6",
      "trickTip": "💡 วิสาขบูชา = วันสำคัญสากลของโลก (ประสูติ ตรัสรู้ ปรินิพพาน)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "วันวิสาขบูชาเป็นวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า ตรงกับวันเพ็ญเดือน 6"
        }
      ]
    }
  },
  {
    "id": "bm-soc-055",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระธรรมเทศนากัณฑ์แรกที่พระพุทธเจ้าทรงแสดงแก่ปัญจวัคคีย์คือข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ธัมมจักกัปปวัตตนสูตร",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "อนัตตลักขณสูตร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อาทิตตปริยายสูตร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โอวาทปาติโมกข์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทรงแสดงธัมมจักกัปปวัตตนสูตร ณ ป่าอิสิปตนมฤคทายวัน ในวันอาสาฬหบูชา (ขึ้น 15 ค่ำ เดือน 8)",
      "trickTip": "💡 ปฐมเทศนา = ธัมมจักกัปปวัตตนสูตร",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ทรงแสดงธัมมจักกัปปวัตตนสูตร ณ ป่าอิสิปตนมฤคทายวัน ในวันอาสาฬหบูชา (ขึ้น 15 ค่ำ เดือน 8)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-056",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลักธรรมสำคัญที่เป็น 'หัวใจของพระพุทธศาสนา' ที่พระพุทธองค์ทรงแสดงในวันมาฆบูชาคืออะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "โอวาทปาติโมกข์ (การไม่ทำชั่ว ทำความดี ทำจิตใจให้บริสุทธิ์)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "อริยสัจ 4",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มรรค 8",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อิทธิบาท 4",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โอวาทปาติโมกข์แสดงในวันเพ็ญเดือน 3 ท่ามกลางพระอรหันต์ 1,250 องค์ (จาตุรงคสันนิบาต)",
      "trickTip": "💡 มาฆบูชา = โอวาทปาติโมกข์ ละชั่ว ทำดี จิตใจบริสุทธิ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "โอวาทปาติโมกข์แสดงในวันเพ็ญเดือน 3 ท่ามกลางพระอรหันต์ 1,250 องค์ (จาตุรงคสันนิบาต)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-057",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ประเพณีแห่เทียนพรรษาอันยิ่งใหญ่และงดงามตระการตาที่สุดในประเทศไทย จัดขึ้นที่จังหวัดใดเป็นประจำทุกปี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "จ.อุบลราชธานี",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จ.นครราชสีมา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "จ.ขอนแก่น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "จ.เชียงใหม่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ประเพณีแห่เทียนเข้าพรรษาจังหวัดอุบลราชธานี มีชื่อเสียงระดับโลก สะท้อนศิลปะการแกะสลักและติดพิมพ์เทียน",
      "trickTip": "💡 แห่เทียนพรรษา = เอกลักษณ์เมืองอุบลราชธานี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ประเพณีแห่เทียนเข้าพรรษาจังหวัดอุบลราชธานี มีชื่อเสียงระดับโลก สะท้อนศิลปะการแกะสลักและติดพิมพ์เทียน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-058",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระมหากษัตริย์ผู้ทรงประดิษฐ์อักษรไทย (ลายสือไทย) ในสมัยสุโขทัยคือพระองค์ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พ่อขุนรามคำแหงมหาราช (พ.ศ. 1826)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พ่อขุนศรีอินทราทิตย์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พระมหาธรรมราชาที่ 1 (ลิไทย)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พ่อขุนผาเมือง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พ่อขุนรามคำแหงทรงประดิษฐ์ลายสือไทยและจารึกบนศิลาจารึกหลักที่ 1",
      "trickTip": "💡 พ่อขุนรามคำแหง = ประดิษฐ์อักษรไทย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "พ่อขุนรามคำแหงทรงประดิษฐ์ลายสือไทยและจารึกบนศิลาจารึกหลักที่ 1"
        }
      ]
    }
  },
  {
    "id": "bm-soc-059",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วรรณกรรมทางพระพุทธศาสนาเรื่องแรกของไทยที่แต่งขึ้นในสมัยสุโขทัยโดยพระมหาธรรมราชาที่ 1 (ลิไทย) คือเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ไตรภูมิพระร่วง (เตภูมิกถา)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "มหาเวสสันดรชาดก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ลิลิตพระลอ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สมบัติพ่อสอนลูก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไตรภูมิพระร่วงบรรยายเกี่ยวกับนรก สวรรค์ และกฎแห่งกรรมเพื่อกล่อมเกลาจิตใจประชาชน",
      "trickTip": "💡 ไตรภูมิพระร่วง = วรรณกรรมชิ้นแรกสมัยสุโขทัย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ไตรภูมิพระร่วงบรรยายเกี่ยวกับนรก สวรรค์ และกฎแห่งกรรมเพื่อกล่อมเกลาจิตใจประชาชน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-060",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สมเด็จพระนเรศวรมหาราชทรงกระทำยุทธหัตถีมีชัยชนะเหนือพระมหาอุปราชา ณ สถานที่ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตำบลหนองสาหร่าย จ.สุพรรณบุรี",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทุ่งภูเขาทอง จ.อยุธยา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดอนเจดีย์ จ.กาญจนบุรี",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ค่ายบางระจัน จ.สิงห์บุรี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ยุทธหัตถี ณ ต.หนองสาหร่าย ในปี พ.ศ. 2135 (ตรงกับวันกองทัพไทย 18 มกราคม)",
      "trickTip": "💡 ยุทธหัตถี = ชนะศึก ณ หนองสาหร่าย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ยุทธหัตถี ณ ต.หนองสาหร่าย ในปี พ.ศ. 2135 (ตรงกับวันกองทัพไทย 18 มกราคม)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-061",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การปฏิรูปการปกครองประเทศครั้งใหญ่ในสมัยรัชกาลที่ 5 มีการจัดตั้งระบบใดขึ้นมาแทนจตุสดมภ์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การจัดตั้ง 12 กระทรวง และระบบมณฑลเทศาภิบาล",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การปกครองแบบสภาร่างรัฐธรรมนูญ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ระบอบประชาธิปไตย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การรวมศูนย์แบบเทศบาล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รัชกาลที่ 5 ทรงยกเลิกจตุสดมภ์ (เวียง วัง คลัง นา) และจัดตั้งกระทรวงแบบสากล",
      "trickTip": "💡 ร.5 = ตั้ง 12 กระทรวง เลิกทาส รวมศูนย์อำนาจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "รัชกาลที่ 5 ทรงยกเลิกจตุสดมภ์ (เวียง วัง คลัง นา) และจัดตั้งกระทรวงแบบสากล"
        }
      ]
    }
  },
  {
    "id": "bm-soc-062",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 5) ทรงได้รับการถวายพระราชสมัญญานามว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สมเด็จพระปิยมหาราช (พระมหากษัตริย์ผู้เป็นที่รักยิ่งของปวงชน)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สมเด็จพระภัทรมหาราช",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พระบิดาแห่งวิทยาศาสตร์ไทย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พระผู้ทรงเป็นครูของแผ่นดิน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปิยมหาราช หมายถึง กษัตริย์ผู้เป็นที่รักยิ่ง วันที่ 23 ตุลาคม คือวันปิยมหาราช",
      "trickTip": "💡 ร.5 = พระปิยมหาราช",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ปิยมหาราช หมายถึง กษัตริย์ผู้เป็นที่รักยิ่ง วันที่ 23 ตุลาคม คือวันปิยมหาราช"
        }
      ]
    }
  },
  {
    "id": "bm-soc-063",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โรงเรียนเบ็ญจะมะมหาราช จ.อุบลราชธานี ก่อตั้งขึ้นเพื่อเฉลิมพระเกียรติพระมหากษัตริย์พระองค์ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 5)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัว (รัชกาลที่ 6)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พระบาทสมเด็จพระปกเกล้าเจ้าอยู่หัว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เบ็ญจะมะ แปลว่า รัชกาลที่ 5 ทรงพระราชทานกำเนิดการศึกษาและโรงเรียนหลวงในภูมิภาค",
      "trickTip": "💡 เบ็ญจะมะมหาราช = อุทิศถวายรัชกาลที่ 5",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "เบ็ญจะมะ แปลว่า รัชกาลที่ 5 ทรงพระราชทานกำเนิดการศึกษาและโรงเรียนหลวงในภูมิภาค"
        }
      ]
    }
  },
  {
    "id": "bm-soc-064",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การเปลี่ยนแปลงการปกครองของไทยจากระบอบสมบูรณาญาสิทธิราชย์มาเป็นระบอบประชาธิปไตยเกิดขึ้นเมื่อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "วันที่ 24 มิถุนายน พ.ศ. 2475",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "วันที่ 10 ธันวาคม พ.ศ. 2475",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วันที่ 6 เมษายน พ.ศ. 2325",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วันที่ 23 ตุลาคม พ.ศ. 2453",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คณะราษฎรทำการเปลี่ยนแปลงการปกครองในสมัยรัชกาลที่ 7 เมื่อ 24 มิ.ย. 2475",
      "trickTip": "💡 24 มิถุนายน 2475 = กำเนิดประชาธิปไตยไทย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "คณะราษฎรทำการเปลี่ยนแปลงการปกครองในสมัยรัชกาลที่ 7 เมื่อ 24 มิ.ย. 2475"
        }
      ]
    }
  },
  {
    "id": "bm-soc-065",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลักธรรม 'อิทธิบาท 4' ประกอบด้วยอะไรบ้าง ซึ่งเป็นธรรมะแห่งความสำเร็จในการเรียนและการทำงาน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ฉันทะ วิริยะ จิตตะ วิมังสา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เมตตา กรุณา มุทิตา อุเบกขา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทาน ศีล ภาวนา ปัญญา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สัจจะ ทมะ ขันติ จาคะ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฉันทะ (รักในงาน), วิริยะ (ขยันเพียร), จิตตะ (ตั้งใจจดจ่อ), วิมังสา (คิดทบทวนปรับปรุง)",
      "trickTip": "💡 อิทธิบาท 4 = ฉันทะ วิริยะ จิตตะ วิมังสา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ฉันทะ (รักในงาน), วิริยะ (ขยันเพียร), จิตตะ (ตั้งใจจดจ่อ), วิมังสา (คิดทบทวนปรับปรุง)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-066",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พรหมวิหาร 4 ซึ่งเป็นธรรมของผู้ปกครองและครูอาจารย์ ประกอบด้วยข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เมตตา กรุณา มุทิตา อุเบกขา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กตัญญู กตเวที สัจจะ สุจริต",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "หิริ โอตตัปปะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ศีล สมาธิ ปัญญา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เมตตา (รักปรารถนาดี), กรุณา (อยากให้พ้นทุกข์), มุทิตา (ยินดีเมื่อได้ดี), อุเบกขา (วางใจเป็นกลาง)",
      "trickTip": "💡 พรหมวิหาร 4 = เมตตา กรุณา มุทิตา อุเบกขา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "เมตตา (รักปรารถนาดี), กรุณา (อยากให้พ้นทุกข์), มุทิตา (ยินดีเมื่อได้ดี), อุเบกขา (วางใจเป็นกลาง)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-067",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โบราณสถาน 'วัดทุ่งศรีเมือง' ใน จ.อุบลราชธานี มีชื่อเสียงโดดเด่นในเรื่องสิ่งปลูกสร้างใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "หอไตรกลางน้ำ ศิลปะผสมผสานไทย-พม่า-ลาว",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พระปรางค์สามยอด",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เจดีย์ทรงพุ่มข้าวบิณฑ์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พระพุทธชินราช",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หอไตรกลางน้ำวัดทุ่งศรีเมือง สร้างอยู่กลางสระน้ำเพื่อป้องกันปลวกและแมลงทำลายคัมภีร์ใบลาน",
      "trickTip": "💡 วัดทุ่งศรีเมือง = หอไตรกลางน้ำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "หอไตรกลางน้ำวัดทุ่งศรีเมือง สร้างอยู่กลางสระน้ำเพื่อป้องกันปลวกและแมลงทำลายคัมภีร์ใบลาน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-068",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระอุบาลีคุณูปมาจารย์ (สิริจันโท จันทร์) และ หลวงปู่มั่น ภูริทัตโต มีบทบาทสำคัญยิ่งต่อวงการพระพุทธศาสนาในฐานะใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผู้นำและพระมหาเถระต้นแบบสายพระกัมมัฏฐาน (พระป่า)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แม่ทัพผู้กอบกู้เอกราช",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กวีเอกแห่งราชสำนัก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ผู้คิดค้นยาสมุนไพร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หลวงปู่มั่น ภูริทัตโต (ชาวอุบลฯ) ได้รับการยกย่องจาก UNESCO เป็นบุคคลสำคัญของโลก สาขาสันติภาพ",
      "trickTip": "💡 หลวงปู่มั่น = พระอาจารย์ใหญ่สายวัดป่า ชาวอุบลฯ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "หลวงปู่มั่น ภูริทัตโต (ชาวอุบลฯ) ได้รับการยกย่องจาก UNESCO เป็นบุคคลสำคัญของโลก สาขาสันติภาพ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-069",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สิทธิมนุษยชนขั้นพื้นฐานตามรัฐธรรมนูญไทยคุ้มครองสิทธิในข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สิทธิในชีวิตและร่างกาย และสิทธิการได้รับศึกษาขั้นพื้นฐาน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สิทธิที่จะไม่ปฏิบัติตามกฎหมาย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สิทธิที่จะละเมิดสิทธิผู้อื่น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สิทธิในการไม่เสียภาษี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทุกคนมีศักดิ์ศรีความเป็นมนุษย์และสิทธิเสรีภาพเท่าเทียมกันภายใต้กฎหมาย",
      "trickTip": "💡 สิทธิขั้นพื้นฐาน = ศักดิ์ศรีความเป็นมนุษย์และเสรีภาพ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ทุกคนมีศักดิ์ศรีความเป็นมนุษย์และสิทธิเสรีภาพเท่าเทียมกันภายใต้กฎหมาย"
        }
      ]
    }
  },
  {
    "id": "bm-soc-070",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สนธิสัญญาเบาว์ริง (Bowring Treaty) ทำขึ้นในสมัยรัชกาลใด และส่งผลต่อเศรษฐกิจไทยอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สมัยรัชกาลที่ 4 ส่งผลให้ไทยเปิดการค้าเสรีกับชาติตะวันตกและยกเลิกการผูกขาดของพระคลังสินค้า",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สมัยรัชกาลที่ 1",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สมัยรัชกาลที่ 3",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สมัยรัชกาลที่ 5",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เซอร์จอห์น เบาว์ริง ทำสัญญาในปี พ.ศ. 2398 เก็บภาษีปากเรือขาเข้าคงที่ 3%",
      "trickTip": "💡 สนธิสัญญาเบาว์ริง = รัชกาลที่ 4 เปิดการค้าเสรี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "เซอร์จอห์น เบาว์ริง ทำสัญญาในปี พ.ศ. 2398 เก็บภาษีปากเรือขาเข้าคงที่ 3%"
        }
      ]
    }
  },
  {
    "id": "bm-soc-071",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วันจักรี (6 เมษายน) เป็นวันระลึกถึงเหตุการณ์ประวัติศาสตร์ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การสถาปนากรุงรัตนโกสินทร์และราชวงศ์จักรี โดยรัชกาลที่ 1 (พ.ศ. 2325)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การประกาศเอกราชของสมเด็จพระนเรศวร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเลิกทาสในสยาม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การลงนามสนธิสัญญาไมตรี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราชทรงปราบดาภิเษกขึ้นครองราชย์เมื่อ 6 เม.ย. 2325",
      "trickTip": "💡 วันจักรี = 6 เมษายน รัชกาลที่ 1 ตั้งกรุงรัตนโกสินทร์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราชทรงปราบดาภิเษกขึ้นครองราชย์เมื่อ 6 เม.ย. 2325"
        }
      ]
    }
  },
  {
    "id": "bm-soc-072",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นหน้าที่ของชนชาวไทยตามรัฐธรรมนูญที่ทุกคนต้องปฏิบัติ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การไปใช้สิทธิเลือกตั้งและการเสียภาษีอากร",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การบริจาคเงินให้วัด",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเดินทางไปต่างประเทศ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเป็นสมาชิกพรรคการเมือง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การพิทักษ์ชาติ ศาสนา พระมหากษัตริย์ เสียภาษี และไปใช้สิทธิเลือกตั้งเป็นหน้าที่ตามกฎหมาย",
      "trickTip": "💡 หน้าที่พลเมือง = เสียภาษีและไปเลือกตั้ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "การพิทักษ์ชาติ ศาสนา พระมหากษัตริย์ เสียภาษี และไปใช้สิทธิเลือกตั้งเป็นหน้าที่ตามกฎหมาย"
        }
      ]
    }
  },
  {
    "id": "bm-soc-073",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระราชบัญญัติการศึกษาแห่งชาติกำหนดให้เด็กไทยได้รับการศึกษาภาคบังคับกี่ปี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "9 ปี (ตั้งแต่ ป.1 ถึง ม.3)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "6 ปี (ป.1 ถึง ป.6)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "12 ปี (ป.1 ถึง ม.6)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "15 ปี (อนุบาลถึง ม.6)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การศึกษาภาคบังคับ 9 ปี (ป.1 - ม.3) ส่วนการศึกษาขั้นพื้นฐานที่รัฐจัดให้อย่างมีคุณภาพคือ 12-15 ปี",
      "trickTip": "💡 การศึกษาภาคบังคับ = 9 ปี (ถึง ม.3)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "การศึกษาภาคบังคับ 9 ปี (ป.1 - ม.3) ส่วนการศึกษาขั้นพื้นฐานที่รัฐจัดให้อย่างมีคุณภาพคือ 12-15 ปี"
        }
      ]
    }
  },
  {
    "id": "bm-soc-074",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "อริยสัจ 4 ซึ่งเป็นความจริงอันประเสริฐ 4 ประการ ประกอบด้วยอะไรบ้าง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทุกข์ สมุทัย นิโรธ มรรค",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "อนิจจัง ทุกขัง อนัตตา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ศีล สมาธิ ปัญญา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "รูป เวทนา สัญญา สังขาร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทุกข์ (ความไม่สบายกายใจ), สมุทัย (สาเหตุแห่งทุกข์), นิโรธ (การดับทุกข์), มรรค (หนทางดับทุกข์)",
      "trickTip": "💡 อริยสัจ 4 = ทุกข์ สมุทัย นิโรธ มรรค",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ทุกข์ (ความไม่สบายกายใจ), สมุทัย (สาเหตุแห่งทุกข์), นิโรธ (การดับทุกข์), มรรค (หนทางดับทุกข์)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-075",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วรรณกรรมเรื่อง 'ท้าวฮุ่ง ท้าวเจือง' และ 'ผาแดงนางไอ่' เป็นมรดกทางวัฒนธรรมและนิทานพื้นบ้านของภูมิภาคใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภาคตะวันออกเฉียงเหนือ (อีสาน) และล้านช้าง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภาคเหนือ (ล้านนา)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาคใต้",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภาคกลาง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผาแดงนางไอ่ เป็นตำนานที่เกี่ยวข้องกับประเพณีบุญบั้งไฟและหนองหาน",
      "trickTip": "💡 ผาแดงนางไอ่ = นิทานพื้นบ้านอีสาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ผาแดงนางไอ่ เป็นตำนานที่เกี่ยวข้องกับประเพณีบุญบั้งไฟและหนองหาน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-076",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ประเพณี 'บุญบั้งไฟ' ของชาวอีสานจัดขึ้นเพื่อวัตถุประสงค์ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพื่อบูชาพญาแถนขอให้ฝนตกต้องตามฤดูกาลก่อนเริ่มทำนา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เพื่อเฉลิมฉลองการเก็บเกี่ยว",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เพื่อขับไล่ภูตผีปีศาจ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เพื่อแข่งขันทักษะทางวิทยาศาสตร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จัดในเดือน 6 (พฤษภาคม-มิถุนายน) เพื่อขอฝนจากพญาแถน",
      "trickTip": "💡 บุญบั้งไฟ = บูชาพญาแถนขอฝน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "จัดในเดือน 6 (พฤษภาคม-มิถุนายน) เพื่อขอฝนจากพญาแถน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-077",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ศาลรัฐธรรมนูญมีอำนาจหน้าที่หลักตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พิจารณาวินิจฉัยว่ากฎหมายใดขัดหรือแย้งต่อรัฐธรรมนูญหรือไม่",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตัดสินคดีอาญาทั่วไป",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตัดสินคดีพิพาทระหว่างประชาชนกับหน่วยงานรัฐ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ควบคุมการทำงานของตำรวจ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ศาลรัฐธรรมนูญทำหน้าที่พิทักษ์ความศักดิ์สิทธิ์ของรัฐธรรมนูญ",
      "trickTip": "💡 ศาลรัฐธรรมนูญ = วินิจฉัยกฎหมายขัดรัฐธรรมนูญ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ศาลรัฐธรรมนูญทำหน้าที่พิทักษ์ความศักดิ์สิทธิ์ของรัฐธรรมนูญ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-078",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "บุคคลที่ทำความผิดทางอาญาจะต้องได้รับโทษตามที่กฎหมายบัญญัติ โทษทางอาญาสูงสุดคือข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ประหารชีวิต",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จำคุกตลอดชีวิต",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กักขัง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ริบทรัพย์สิน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โทษทางอาญา 5 สถาน: ประหารชีวิต, จำคุก, กักขัง, ปรับ, ริบทรัพย์สิน",
      "trickTip": "💡 โทษอาญาสูงสุด = ประหารชีวิต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "โทษทางอาญา 5 สถาน: ประหารชีวิต, จำคุก, กักขัง, ปรับ, ริบทรัพย์สิน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-079",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระมหากษัตริย์ไทยพระองค์ใดที่ได้รับการยกย่องให้เป็น 'พระบิดาแห่งวิทยาศาสตร์ไทย'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 4)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 5)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว (รัชกาลที่ 3)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พระบาทสมเด็จพระบรมชนกาธิเบศรฯ (รัชกาลที่ 9)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รัชกาลที่ 4 ทรงคำนวณการเกิดสุริยุปราคาเต็มดวงที่บ้านหว้ากอ จ.ประจวบคีรีขันธ์ ได้แม่นยำล่วงหน้า 2 ปี",
      "trickTip": "💡 ร.4 = พระบิดาแห่งวิทยาศาสตร์ไทย (หว้ากอ 2411)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "รัชกาลที่ 4 ทรงคำนวณการเกิดสุริยุปราคาเต็มดวงที่บ้านหว้ากอ จ.ประจวบคีรีขันธ์ ได้แม่นยำล่วงหน้า 2 ปี"
        }
      ]
    }
  },
  {
    "id": "bm-soc-080",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระพุทธรูปคู่บ้านคู่เมืองที่สำคัญของจังหวัดอุบลราชธานี ประดิษฐาน ณ วัดพระธาตุหนองบัว คือพระพุทธรูปใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระเจ้าใหญ่อินทร์แปลง (วัดป่าใหญ่)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พระพุทธชินราช",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พระแก้วมรกต",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พระพุทธโสธร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระเจ้าใหญ่อินทร์แปลง ประดิษฐาน ณ วัดมหาวนาราม (วัดป่าใหญ่) เป็นที่เคารพสักการะของชาวอุบลฯ",
      "trickTip": "💡 พระเจ้าใหญ่อินทร์แปลง = พระคู่บ้านคู่เมืองอุบลฯ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "พระเจ้าใหญ่อินทร์แปลง ประดิษฐาน ณ วัดมหาวนาราม (วัดป่าใหญ่) เป็นที่เคารพสักการะของชาวอุบลฯ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-081",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โบราณวัตถุ 'กลองมโหระทึก' สำริดที่ขุดพบในแถบลุ่มน้ำมูล-ชี สะท้อนถึงสิ่งใดในยุคก่อนประวัติศาสตร์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การมีชุมชนโบราณในยุคโลหะและเครือข่ายการติดต่อค้าขายทางวัฒนธรรมดงซอน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การล่าสัตว์ในยุคหิน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเข้ามาของชาติตะวันตก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การนับถือศาสนาคริสต์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กลองมโหระทึกยุคสำริดแสดงถึงความเจริญทางโลหกรรมและความเชื่อเรื่องการขอฝน",
      "trickTip": "💡 กลองมโหระทึก = ชุมชนยุคสำริดลุ่มน้ำมูลชี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "กลองมโหระทึกยุคสำริดแสดงถึงความเจริญทางโลหกรรมและความเชื่อเรื่องการขอฝน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-082",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลักการทรงงาน 'เข้าใจ เข้าถึง พัฒนา' เป็นแนวพระราชดำริของพระมหากษัตริย์พระองค์ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร (รัชกาลที่ 9)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "รัชกาลที่ 5",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "รัชกาลที่ 7",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "รัชกาลที่ 10",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รัชกาลที่ 9 ทรงใช้หลักการนี้ในการพัฒนาโครงการอันเนื่องมาจากพระราชดำริกว่า 4,000 โครงการ",
      "trickTip": "💡 เข้าใจ เข้าถึง พัฒนา = พระราชดำริ ร.9",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "รัชกาลที่ 9 ทรงใช้หลักการนี้ในการพัฒนาโครงการอันเนื่องมาจากพระราชดำริกว่า 4,000 โครงการ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-083",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เบญจศีล หรือ ศีล 5 ในทางพระพุทธศาสนา ข้อที่ 2 ห้ามกระทำสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ห้ามลักทรัพย์ (อทินนาทานา)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ห้ามฆ่าสัตว์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ห้ามประพฤติผิดในกาม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ห้ามพูดเท็จ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ศีลข้อ 2: เว้นจากการถือเอาสิ่งของที่เจ้าของไม่ได้ให้ (ลักทรัพย์)",
      "trickTip": "💡 ศีลข้อ 2 = อทินนาทาน (ห้ามลักทรัพย์)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ศีลข้อ 2: เว้นจากการถือเอาสิ่งของที่เจ้าของไม่ได้ให้ (ลักทรัพย์)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-084",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ทวีปใดเป็นทวีปที่มีขนาดพื้นที่ใหญ่ที่สุดและมีประชากรมากที่สุดในโลก",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทวีปเอเชีย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทวีปแอฟริกา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทวีปอเมริกาเหนือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ทวีปยุโรป",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทวีปเอเชียมีพื้นที่ประมาณ 44.58 ล้าน ตร.กม. และมีประชากรกว่า 60% ของโลก",
      "trickTip": "💡 เอเชีย = ทวีปใหญ่และประชากรมากที่สุด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ทวีปเอเชียมีพื้นที่ประมาณ 44.58 ล้าน ตร.กม. และมีประชากรกว่า 60% ของโลก"
        }
      ]
    }
  },
  {
    "id": "bm-soc-085",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ระบบการปกครองระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุขของไทย ได้รับอิทธิพลจากประเทศใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สหราชอาณาจักร (อังกฤษ)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สหรัฐอเมริกา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ฝรั่งเศส",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สวิตเซอร์แลนด์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไทยใช้ระบบรัฐสภา (Parliamentary System) แบบเวสต์มินสเตอร์เหมือนอังกฤษ",
      "trickTip": "💡 ระบบรัฐสภา = ต้นแบบจากอังกฤษ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ไทยใช้ระบบรัฐสภา (Parliamentary System) แบบเวสต์มินสเตอร์เหมือนอังกฤษ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-086",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ประเพณี 'ฮีตสิบสอง คองสิบสี่' ของชาวอีสานหมายถึงข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "จารีตประเพณี 12 เดือน และแนวทางความประพฤติ 14 ข้อในการดำเนินชีวิต",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตำราอาหาร 12 ชนิด",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การละเล่นพื้นบ้าน 12 อย่าง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กฎหมายโบราณ 14 มาตรา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฮีต 12 คือบุญประเพณีประจำเดือนทั้ง 12 เดือน เช่น บุญข้าวจี่ บุญบั้งไฟ บุญเข้าพรรษา",
      "trickTip": "💡 ฮีตสิบสอง = บุญประเพณี 12 เดือนของชาวอีสาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ฮีต 12 คือบุญประเพณีประจำเดือนทั้ง 12 เดือน เช่น บุญข้าวจี่ บุญบั้งไฟ บุญเข้าพรรษา"
        }
      ]
    }
  },
  {
    "id": "bm-soc-087",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สงครามโลกครั้งที่สองสิ้นสุดลงเมื่อปี ค.ศ. ใด หลังสหรัฐฯ ทิ้งระเบิดปรมาณูที่เมืองฮิโรชิมาและนางาซากิ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ค.ศ. 1945 (พ.ศ. 2488)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ค.ศ. 1939",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ค.ศ. 1918",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ค.ศ. 1950",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สงครามโลกครั้งที่ 2 สิ้นสุดลงในเดือนสิงหาคม ค.ศ. 1945",
      "trickTip": "💡 สิ้นสุดสงครามโลกครั้งที่ 2 = ค.ศ. 1945",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "สงครามโลกครั้งที่ 2 สิ้นสุดลงในเดือนสิงหาคม ค.ศ. 1945"
        }
      ]
    }
  },
  {
    "id": "bm-soc-088",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ผู้ตรวจการแผ่นดิน (Ombudsman) มีหน้าที่หลักตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตรวจสอบการปฏิบัติหน้าที่ของหน่วยงานรัฐและเจ้าหน้าที่รัฐเมื่อประชาชนร้องเรียนเรื่องความไม่เป็นธรรม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จับกุมคนร้าย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พิจารณาคดีล้มละลาย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตั้งงบประมาณรายจ่าย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เป็นองค์กรอิสระตามรัฐธรรมนูญที่รับเรื่องร้องเรียนจากประชาชน",
      "trickTip": "💡 ผู้ตรวจการแผ่นดิน = ตรวจสอบความไม่เป็นธรรมของรัฐ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "เป็นองค์กรอิสระตามรัฐธรรมนูญที่รับเรื่องร้องเรียนจากประชาชน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-089",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "จังหวัดอุบลราชธานีได้รับการสถาปนาขึ้นเป็นเมืองในสมัยรัชกาลใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ 1, พ.ศ. 2335)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สมเด็จพระเจ้าตากสินมหาราช",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "รัชกาลที่ 3",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "รัชกาลที่ 5",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ท้าวคำผง (พระประทุมวรราชสุริยวงศ์) ได้รับการโปรดเกล้าฯ แต่งตั้งเป็นเจ้าเมืองอุบลฯ คนแรกในปี พ.ศ. 2335",
      "trickTip": "💡 เมืองอุบลฯ = สถาปนา พ.ศ. 2335 สมัย ร.1",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ท้าวคำผง (พระประทุมวรราชสุริยวงศ์) ได้รับการโปรดเกล้าฯ แต่งตั้งเป็นเจ้าเมืองอุบลฯ คนแรกในปี พ.ศ. 2335"
        }
      ]
    }
  },
  {
    "id": "bm-soc-090",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สมเด็จพระเจ้าตากสินมหาราชทรงกอบกู้เอกราชของชาติไทยคืนมาได้หลังเสียกรุงศรีอยุธยาครั้งที่ 2 ภายในเวลากี่เดือน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "7 เดือน (พ.ศ. 2310)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "12 เดือน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "2 ปี",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "5 ปี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทรงยกทัพเรือจากจันทบุรีเข้าตีค่ายโพธิ์สามต้นแตกและกอบกู้เอกราชได้สำเร็จใน 7 เดือน",
      "trickTip": "💡 กอบกู้เอกราช = 7 เดือน สถาปนากรุงธนบุรี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ทรงยกทัพเรือจากจันทบุรีเข้าตีค่ายโพธิ์สามต้นแตกและกอบกู้เอกราชได้สำเร็จใน 7 เดือน"
        }
      ]
    }
  },
  {
    "id": "bm-soc-091",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "องค์กรปกครองส่วนท้องถิ่น (อปท.) รูปแบบพิเศษในประเทศไทยมี 2 แห่ง ได้แก่อะไรบ้าง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กรุงเทพมหานคร และ เมืองพัทยา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เทศบาลนครเชียงใหม่ และ ภูเก็ต",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อบจ. และ อบต.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เมืองหาดใหญ่ และ หัวหิน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กรุงเทพมหานครและเมืองพัทยาเป็น อปท. รูปแบบพิเศษ",
      "trickTip": "💡 อปท. พิเศษ = กทม. และ เมืองพัทยา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "กรุงเทพมหานครและเมืองพัทยาเป็น อปท. รูปแบบพิเศษ"
        }
      ]
    }
  },
  {
    "id": "bm-soc-092",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลักธรรม 'กัลยาณมิตร 7' คือหลักธรรมสำหรับบุคคลใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ครูบาอาจารย์และเพื่อนที่ดีที่ควรคบหา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทหารตำรวจ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พ่อค้าแม่ค้า",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ผู้ป่วย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คุณสมบัติของมิตรแท้และครูผู้เปี่ยมด้วยเมตตา (ปิโย คะรุ ภาวะนีโย...)",
      "trickTip": "💡 กัลยาณมิตร = มิตรดี ครูผู้สอน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "คุณสมบัติของมิตรแท้และครูผู้เปี่ยมด้วยเมตตา (ปิโย คะรุ ภาวะนีโย...)"
        }
      ]
    }
  },
  {
    "id": "bm-soc-093",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระธาตุพนม ศูนย์รวมจิตใจของชาวอีสานและสองฝั่งโขง ประดิษฐานอยู่ที่จังหวัดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "จ.นครพนม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จ.อุบลราชธานี",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "จ.มุกดาหาร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "จ.สกลนคร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระธาตุพนมประดิษฐาน ณ วัดพระธาตุพนมวรมหาวิหาร อ.ธาตุพนม จ.นครพนม",
      "trickTip": "💡 พระธาตุพนม = จ.นครพนม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "พระธาตุพนมประดิษฐาน ณ วัดพระธาตุพนมวรมหาวิหาร อ.ธาตุพนม จ.นครพนม"
        }
      ]
    }
  },
  {
    "id": "bm-soc-094",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สิทธิในการได้รับการคุ้มครองข้อมูลส่วนบุคคล (PDPA) มีจุดประสงค์เพื่ออะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ป้องกันการละเมิดสิทธิเสรีภาพและความเป็นส่วนตัวของประชาชนจากการนำข้อมูลไปใช้โดยไม่ได้รับอนุญาต",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ป้องกันการซื้อขายของออนไลน์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ห้ามถ่ายรูปในที่สาธารณะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ควบคุมการใช้โทรศัพท์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "PDPA คุ้มครองสิทธิของเจ้าของข้อมูลส่วนบุคคล",
      "trickTip": "💡 PDPA = คุ้มครองข้อมูลส่วนบุคคล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "PDPA คุ้มครองสิทธิของเจ้าของข้อมูลส่วนบุคคล"
        }
      ]
    }
  },
  {
    "id": "bm-soc-095",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การทำสนธิสัญญาเบอร์นีย์ (Burney Treaty) ในสมัยรัชกาลที่ 3 เป็นการเจรจาทางการทูตกับชาติใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สหราชอาณาจักร (อังกฤษ)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "โปรตุเกส",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สหรัฐอเมริกา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ฝรั่งเศส",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ร้อยเอกเฮนรี เบอร์นีย์ เป็นทูตอังกฤษเข้ามาเจรจาการค้าในปี พ.ศ. 2369",
      "trickTip": "💡 สนธิสัญญาเบอร์นีย์ = อังกฤษ สมัย ร.3",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ร้อยเอกเฮนรี เบอร์นีย์ เป็นทูตอังกฤษเข้ามาเจรจาการค้าในปี พ.ศ. 2369"
        }
      ]
    }
  },
  {
    "id": "bm-soc-096",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ศาลปกครองมีอำนาจหน้าที่พิจารณาคดีประเภทใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คดีพิพาทระหว่างหน่วยงานของรัฐหรือเจ้าหน้าที่ของรัฐกับเอกชน หรือระหว่างหน่วยงานของรัฐด้วยกัน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คดีลักทรัพย์วิ่งราว",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คดีสมรสและหย่าร้าง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คดีค้าประเวณี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ศาลปกครองวินิจฉัยคดีเกี่ยวกับการกระทำทางปกครองที่ไม่ชอบด้วยกฎหมาย",
      "trickTip": "💡 ศาลปกครอง = คดีพิพาทกับหน่วยงานรัฐ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ศาลปกครองวินิจฉัยคดีเกี่ยวกับการกระทำทางปกครองที่ไม่ชอบด้วยกฎหมาย"
        }
      ]
    }
  },
  {
    "id": "bm-soc-097",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วันครูแห่งชาติของไทยตรงกับวันที่เท่าใดของทุกปี",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "16 มกราคม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "18 มกราคม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "23 ตุลาคม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "5 ธันวาคม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วันที่ 16 มกราคม เป็นวันครูแห่งชาติ เพื่อระลึกถึงพระคุณของครูอาจารย์",
      "trickTip": "💡 วันครู = 16 มกราคม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "วันที่ 16 มกราคม เป็นวันครูแห่งชาติ เพื่อระลึกถึงพระคุณของครูอาจารย์"
        }
      ]
    }
  },
  {
    "id": "bm-soc-098",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พระพุทธศาสนานิกายเถรวาท ยึดถือคัมภีร์ใดเป็นหลักคำสอนสูงสุด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระไตรปิฎก (พระวินัย, พระสุตตันตปิฎก, พระอภิธรรมปิฎก)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คัมภีร์พระเวท",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คัมภีร์มหาภารตะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คัมภีร์เต๋า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระไตรปิฎกเป็นคลังคำสอน 84,000 พระธรรมขันธ์",
      "trickTip": "💡 พระไตรปิฎก = 3 ปิฎก 84,000 พระธรรมขันธ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "พระไตรปิฎกเป็นคลังคำสอน 84,000 พระธรรมขันธ์"
        }
      ]
    }
  },
  {
    "id": "bm-soc-099",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แม่น้ำ 2 สายสำคัญที่ไหลมาบรรจบกันเป็น 'แม่น้ำเจ้าพระยา' ที่ปากน้ำโพ จ.นครสวรรค์ คือแม่น้ำสายใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แม่น้ำปิงและแม่น้ำน่าน (รวมยมและวัง)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แม่น้ำมูลและแม่น้ำชี",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แม่น้ำท่าจีนและแม่น้ำแม่กลอง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แม่น้ำป่าสักและแม่น้ำลพบุรี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปิง วัง ยม น่าน ไหลมารวมกันเป็นแม่น้ำเจ้าพระยาที่ ต.ปากน้ำโพ จ.นครสวรรค์",
      "trickTip": "💡 ปิง วัง ยม น่าน ➔ แม่น้ำเจ้าพระยา (นครสวรรค์)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ปิง วัง ยม น่าน ไหลมารวมกันเป็นแม่น้ำเจ้าพระยาที่ ต.ปากน้ำโพ จ.นครสวรรค์"
        }
      ]
    }
  },
  {
    "id": "bm-soc-100",
    "subjectId": "social",
    "topicId": "soc-civics-history",
    "topicName": "หน้าที่พลเมือง ศาสนา และประวัติศาสตร์",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "สังคมศึกษา",
      "หน้าที่พลเมือง",
      "ประวัติศาสตร์"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลักการสำคัญของระบอบประชาธิปไตยคือ 'การเคารพเสียงข้างมาก' แต่ต้องควบคู่กับสิ่งใดเสมอ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การรับฟังและคุ้มครองสิทธิของเสียงข้างน้อย (Minority Rights)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การใช้อำนาจเด็ดขาด",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การห้ามฝ่ายค้านแสดงความคิดเห็น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การแจกเงินให้ประชาชน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ประชาธิปไตยที่แท้จริงต้องเคารพมติเสียงส่วนใหญ่และปกป้องสิทธิของเสียงส่วนน้อยอย่างเป็นธรรม",
      "trickTip": "💡 เสียงข้างมาก + คุ้มครองสิทธิเสียงข้างน้อย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "สาระหน้าที่พลเมืองและประวัติศาสตร์",
          "content": "ประชาธิปไตยที่แท้จริงต้องเคารพมติเสียงส่วนใหญ่และปกป้องสิทธิของเสียงส่วนน้อยอย่างเป็นธรรม"
        }
      ]
    }
  }
];
