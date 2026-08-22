import { Question } from '@/types/question';

/**
 * คลังข้อสอบวิทยาศาสตร์ 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา
 */

export const BENCHAMA_SCIENCE_QUESTIONS: Question[] = [
  {
    "id": "bm-sci-001",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ออร์แกเนลล์ใดทำหน้าที่เป็นแหล่งสร้างพลังงานหลัก (ATP) ให้แก่เซลล์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ไรโบโซม",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ไมโทคอนเดรีย",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คลอโรพลาสต์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กอลจิบอดี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไมโทคอนเดรียทำหน้าที่สร้าง ATP (Powerhouse of cell)",
      "trickTip": "💡 ไมโทคอนเดรีย = แหล่งพลังงานของเซลล์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไมโทคอนเดรียทำหน้าที่สร้าง ATP (Powerhouse of cell)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-002",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โครงสร้างใดพบเฉพาะในเซลล์พืช แต่ไม่พบในเซลล์สัตว์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผนังเซลล์และคลอโรพลาสต์",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เยื่อหุ้มเซลล์และนิวเคลียส",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ไมโทคอนเดรียและไซโทพลาซึม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไรโบโซมและแวคิวโอล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เซลล์พืชมีผนังเซลล์ (Cell Wall) และคลอโรพลาสต์ (Chloroplast)",
      "trickTip": "💡 ผนังเซลล์และคลอโรพลาสต์พบเฉพาะในพืช",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "เซลล์พืชมีผนังเซลล์ (Cell Wall) และคลอโรพลาสต์ (Chloroplast)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-003",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เอนไซม์ไทยาลิน (อะไมเลส) ในน้ำลายทำหน้าที่ย่อยสารอาหารประเภทใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "โปรตีน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ไขมัน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คาร์โบไฮเดรต (แป้ง)",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วิตามิน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อะไมเลสย่อยแป้งให้เป็นน้ำตาลมอลโทส",
      "trickTip": "💡 น้ำลายย่อยแป้ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "อะไมเลสย่อยแป้งให้เป็นน้ำตาลมอลโทส"
        }
      ]
    }
  },
  {
    "id": "bm-sci-004",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลอดเลือดใดทำหน้าที่ลำเลียงเลือดที่มีออกซิเจนสูงจากปอดกลับเข้าสู่หัวใจ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พัลโมนารีอาร์เตอรี",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พัลโมนารีเวน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เอออร์ตา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ซุพีเรียเวนาคาวา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พัลโมนารีเวน (Pulmonary Vein) นำเลือดดีจากปอดสู่หัวใจห้องบนซ้าย",
      "trickTip": "💡 Pulmonary Vein เป็นเส้นเลือดดำเส้นเดียวที่มีออกซิเจนสูง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "พัลโมนารีเวน (Pulmonary Vein) นำเลือดดีจากปอดสู่หัวใจห้องบนซ้าย"
        }
      ]
    }
  },
  {
    "id": "bm-sci-005",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การปฏิสนธิของมนุษย์ตามธรรมชาติเกิดขึ้นที่บริเวณใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "รังไข่",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ท่อนำไข่ (ปีกมดลูก)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "โพรงมดลูก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ช่องคลอด",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การปฏิสนธิเกิดที่บริเวณท่อนำไข่ (Fallopian tube)",
      "trickTip": "💡 ปฏิสนธิที่ท่อนำไข่ ฝังตัวที่ผนังมดลูก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "การปฏิสนธิเกิดที่บริเวณท่อนำไข่ (Fallopian tube)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-006",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารสีใดทำหน้าที่ดูดกลืนพลังงานแสงในกระบวนการสังเคราะห์ด้วยแสงของพืช",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คลอโรฟิลล์",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แคโรทีนอยด์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แอนโทไซยานิน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แซนโทฟิลล์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คลอโรฟิลล์เป็นรงควัตถุหลักในการดูดกลืนแสง",
      "trickTip": "💡 คลอโรฟิลล์ดูดกลืนแสงสีน้ำเงินและแดงได้ดีที่สุด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "คลอโรฟิลล์เป็นรงควัตถุหลักในการดูดกลืนแสง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-007",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พืชลำเลียงน้ำและแร่ธาตุผ่านทางเนื้อเยื่อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "โฟลเอ็ม (Phloem)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ไซเล็ม (Xylem)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คอร์เทกซ์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เอพิเดอร์มิส",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุจากรากขึ้นสู่ใบ",
      "trickTip": "💡 Xylem = น้ำ (ทิศขึ้น), Phloem = อาหาร (ทุกทิศ)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุจากรากขึ้นสู่ใบ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-008",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ผู้ที่มีหมู่เลือด AB สามารถรับเลือดจากหมู่เลือดใดได้บ้างในกรณีฉุกเฉิน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เฉพาะหมู่ AB",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "หมู่ A และ B",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "หมู่ O และ AB",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "รับได้ทุกหมู่เลือด (A, B, AB, O)",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "หมู่ AB เป็น Universal Recipient รับได้ทุกหมู่",
      "trickTip": "💡 AB รับได้ทุกหมู่, O ให้ได้ทุกหมู่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "หมู่ AB เป็น Universal Recipient รับได้ทุกหมู่"
        }
      ]
    }
  },
  {
    "id": "bm-sci-009",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "อวัยวะใดทำหน้าที่หลักในการกรองของเสียและรักษาสมดุลน้ำในร่างกาย",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตับ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ไต",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ปอด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ผิวหนัง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไต (Kidney) ทำหน้าที่กรองของเสียออกจากเลือดและสร้างปัสสาวะ",
      "trickTip": "💡 หน่วยไตกรองของเสีย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไต (Kidney) ทำหน้าที่กรองของเสียออกจากเลือดและสร้างปัสสาวะ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-010",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กระบวนการแบ่งเซลล์แบบไมโอซิส (Meiosis) มีความสำคัญอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพิ่มจำนวนเซลล์ร่างกาย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สร้างเซลล์สืบพันธุ์และลดจำนวนโครโมโซมลงครึ่งหนึ่ง",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ซ่อมแซมส่วนที่สึกหรอ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เพิ่มขนาดของร่างกาย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไมโอซิสสร้างเซลล์สืบพันธุ์ ลดโครโมโซมจาก 2n เป็น n",
      "trickTip": "💡 ไมโทซิส = ร่างกาย (2n), ไมโอซิส = สืบพันธุ์ (n)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไมโอซิสสร้างเซลล์สืบพันธุ์ ลดโครโมโซมจาก 2n เป็น n"
        }
      ]
    }
  },
  {
    "id": "bm-sci-011",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดเย็นทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กบ จระเข้ ปลานิล",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "นกพิราบ แมว เต่า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ค้างคาว โลมา ลิง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เป็ด ไก่ กิ้งก่า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สัตว์สะเทินน้ำสะเทินบก สัตว์เลื้อยคลาน และปลา เป็นสัตว์เลือดเย็น",
      "trickTip": "💡 สัตว์ปีกและสัตว์เลี้ยงลูกด้วยนมเป็นสัตว์เลือดอุ่น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "สัตว์สะเทินน้ำสะเทินบก สัตว์เลื้อยคลาน และปลา เป็นสัตว์เลือดเย็น"
        }
      ]
    }
  },
  {
    "id": "bm-sci-012",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การตอบสนองของพืชต่อแสงสว่าง (Phototropism) ถูกควบคุมโดยฮอร์โมนใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ออกซิน (Auxin)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จิบเบอเรลลิน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ไซโทไคนิน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กรดแอบไซซิก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฮอร์โมนออกซินจะหนีแสง ทำให้เซลล์ด้านมืดขยายตัวและปลายยอดโค้งเข้าหาแสง",
      "trickTip": "💡 Auxin ควบคุมการเบนเข้าหาแสง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ฮอร์โมนออกซินจะหนีแสง ทำให้เซลล์ด้านมืดขยายตัวและปลายยอดโค้งเข้าหาแสง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-013",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ส่วนประกอบใดของเลือดทำหน้าที่หลักในการแข็งตัวของเลือดเมื่อเกิดบาดแผล",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เม็ดเลือดแดง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เม็ดเลือดขาว",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เกล็ดเลือด (Platelet)",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พลาสมา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เกล็ดเลือดช่วยในการแข็งตัวของเลือดและปิดปากแผล",
      "trickTip": "💡 เกล็ดเลือด = เลือดแข็งตัว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "เกล็ดเลือดช่วยในการแข็งตัวของเลือดและปิดปากแผล"
        }
      ]
    }
  },
  {
    "id": "bm-sci-014",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สิ่งมีชีวิตในข้อใดสืบพันธุ์แบบไม่อาศัยเพศโดยการแตกหน่อ (Budding)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "อะมีบา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พารามีเซียม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ไฮดราและยีสต์",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พลานาเรีย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไฮดราและยีสต์สืบพันธุ์โดยการแตกหน่อ",
      "trickTip": "💡 ไฮดรา/ยีสต์ = แตกหน่อ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไฮดราและยีสต์สืบพันธุ์โดยการแตกหน่อ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-015",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ความสัมพันธ์ระหว่าง 'ผึ้งกับดอกไม้' จัดเป็นความสัมพันธ์รูปแบบใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภาวะพึ่งพากัน (+/+ ขาดกันไม่ได้)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภาวะได้ประโยชน์ร่วมกัน (+/+ แยกกันได้)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาวะอิงอาศัย (+/0)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภาวะปรสิต (+/-)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ได้ประโยชน์ร่วมกัน ผึ้งได้น้ำหวาน ดอกไม้ได้รับการผสมเกสร",
      "trickTip": "💡 แยกกันอยู่ได้ = ได้ประโยชน์ร่วมกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ได้ประโยชน์ร่วมกัน ผึ้งได้น้ำหวาน ดอกไม้ได้รับการผสมเกสร"
        }
      ]
    }
  },
  {
    "id": "bm-sci-016",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แบคทีเรีย Rhizobium ในปมรากพืชตระกูลถั่วมีความสำคัญอย่างไรในระบบนิเวศ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตรึงแก๊สไนโตรเจนในอากาศมาเป็นสารประกอบไนเตรตในดิน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ย่อยสลายซากพืชซากสัตว์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สร้างสารพิษป้องกันแมลง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ผลิตฮอร์โมนเร่งการออกดอก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไรโซเบียมทำหน้าที่ตรึงไนโตรเจน ($N_2$ Fixation)",
      "trickTip": "💡 ไรโซเบียม = ตรึงไนโตรเจน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไรโซเบียมทำหน้าที่ตรึงไนโตรเจน ($N_2$ Fixation)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-017",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารอาหารใดต่อไปนี้ให้พลังงานแก่ร่างกาย 4 กิโลแคลอรีต่อกรัม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ไขมันและโปรตีน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คาร์โบไฮเดรตและโปรตีน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ไขมันและคาร์โบไฮเดรต",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วิตามินและเกลือแร่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คาร์โบไฮเดรตและโปรตีนให้ 4 kcal/g ส่วนไขมันให้ 9 kcal/g",
      "trickTip": "💡 คาร์บ/โปรตีน = 4, ไขมัน = 9",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "คาร์โบไฮเดรตและโปรตีนให้ 4 kcal/g ส่วนไขมันให้ 9 kcal/g"
        }
      ]
    }
  },
  {
    "id": "bm-sci-018",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วิตามินใดละลายในไขมันทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "วิตามิน B และ C",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "วิตามิน A, D, E, K",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วิตามิน A, B, C",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วิตามิน C และ D",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วิตามิน A, D, E, K เป็นวิตามินที่ละลายในไขมัน",
      "trickTip": "💡 สูตรจำ: A D E K ละลายในไขมัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "วิตามิน A, D, E, K เป็นวิตามินที่ละลายในไขมัน"
        }
      ]
    }
  },
  {
    "id": "bm-sci-019",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การทดสอบแป้งใช้สารละลายใด และให้ผลเปลี่ยนเป็นสีอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สารละลายเบเนดิกต์ - สีส้มอิฐ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สารละลายไอโอดีน - สีน้ำเงินเข้ม/ม่วง",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สารละลายไบยูเร็ต - สีม่วง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กระดาษลิตมัส - สีแดง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไอโอดีนทดสอบแป้ง เปลี่ยนจากสีน้ำตาลเป็นสีน้ำเงินเข้ม",
      "trickTip": "💡 ไอโอดีน + แป้ง = น้ำเงินเข้ม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไอโอดีนทดสอบแป้ง เปลี่ยนจากสีน้ำตาลเป็นสีน้ำเงินเข้ม"
        }
      ]
    }
  },
  {
    "id": "bm-sci-020",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "น้ำดีสร้างจากอวัยวะใด และทำหน้าที่อะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สร้างจากตับ ทำหน้าที่ทำให้ไขมันแตกตัวเป็นเม็ดเล็กๆ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สร้างจากถุงน้ำดี ทำหน้าที่ย่อยโปรตีน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สร้างจากตับอ่อน ทำหน้าที่ย่อยไขมัน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สร้างจากกระเพาะ ทำหน้าที่ย่อยแป้ง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "น้ำดีสร้างจากตับ เก็บที่ถุงน้ำดี ช่วยตีไขมันให้แตกตัว (Emulsification)",
      "trickTip": "💡 ตับสร้าง ถุงน้ำดีเก็บ น้ำดีไม่ใช่เอนไซม์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "น้ำดีสร้างจากตับ เก็บที่ถุงน้ำดี ช่วยตีไขมันให้แตกตัว (Emulsification)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-021",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ส่วนประกอบใดของเซลล์ทำหน้าที่สังเคราะห์โปรตีน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ไมโทคอนเดรีย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ไรโบโซม (Ribosome)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ไลโซโซม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เซนทริโอล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไรโบโซมทำหน้าที่สร้างโปรตีน",
      "trickTip": "💡 ไรโบโซม = โรงงานผลิตโปรตีน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ไรโบโซมทำหน้าที่สร้างโปรตีน"
        }
      ]
    }
  },
  {
    "id": "bm-sci-022",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การแพร่ (Diffusion) กับ การออสโมซิส (Osmosis) แตกต่างกันอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ออสโมซิสเป็นการเคลื่อนที่ของโมเลกุลน้ำผ่านเยื่อเลือกผ่าน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การแพร่ต้องใช้พลังงาน ATP",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ออสโมซิสไม่ผ่านเยื่อเลือกผ่าน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การแพร่เกิดเฉพาะในของเหลว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ออสโมซิสคือการแพร่ของน้ำผ่าน Semi-permeable membrane",
      "trickTip": "💡 Osmosis = การเคลื่อนที่ของน้ำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ออสโมซิสคือการแพร่ของน้ำผ่าน Semi-permeable membrane"
        }
      ]
    }
  },
  {
    "id": "bm-sci-023",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พืชสังเคราะห์ด้วยแสงได้ผลผลิตขั้นต้นคือสารใด และแก๊สใดถูกปล่อยออกมา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำตาลกลูโคส และ แก๊สออกซิเจน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แป้ง และ แก๊สคาร์บอนไดออกไซด์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กรดอะมิโน และ แก๊สไนโตรเจน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไขมัน และ แก๊สไฮโดรเจน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กลูโคส ($C_6H_{12}O_6$) และ แก๊สออกซิเจน ($O_2$)",
      "trickTip": "💡 สังเคราะห์แสงได้ กลูโคส + O2",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "กลูโคส ($C_6H_{12}O_6$) และ แก๊สออกซิเจน ($O_2$)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-024",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ในการทดลองเพื่อศึกษาปัจจัยที่มีผลต่อการเจริญเติบโตของพืช ปริมาณน้ำที่รดจัดเป็นตัวแปรชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตัวแปรต้น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตัวแปรตาม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตัวแปรควบคุม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตัวแปรแทรกซ้อน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สิ่งที่ผู้ทดลองจัดให้แตกต่างกันคือตัวแปรต้น (Independent Variable)",
      "trickTip": "💡 ตัวแปรต้น = สิ่งที่กำหนดให้ต่างกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "สิ่งที่ผู้ทดลองจัดให้แตกต่างกันคือตัวแปรต้น (Independent Variable)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-025",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โรคตาบอดสีและฮีโมฟีเลียเป็นโรคทางพันธุกรรมที่ถ่ายทอดผ่านทางใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ยีนเด่นบนออโตโซม",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ยีนด้อยบนโครโมโซมเพศ X",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ยีนบนโครโมโซมเพศ Y",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การติดเชื้อไวรัส",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เป็น Sex-linked recessive trait บนโครโมโซม X",
      "trickTip": "💡 ตาบอดสี/ฮีโมฟีเลีย = ยีนด้อยบน X",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "เป็น Sex-linked recessive trait บนโครโมโซม X"
        }
      ]
    }
  },
  {
    "id": "bm-sci-026",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กระเพาะอาหารของมนุษย์หลั่งกรดชนิดใดออกมาช่วยในการย่อยโปรตีน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กรดซัลฟิวริก",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กรดไฮโดรคลอริก (กรดเกลือ)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กรดแอซีติก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กรดไนทริก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หลั่งกรดไฮโดรคลอริก (HCl) เพื่อกระตุ้นเอนไซม์เพปซิน",
      "trickTip": "💡 กระเพาะอาหาร = กรดเกลือ (HCl)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "หลั่งกรดไฮโดรคลอริก (HCl) เพื่อกระตุ้นเอนไซม์เพปซิน"
        }
      ]
    }
  },
  {
    "id": "bm-sci-027",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วัคซีน (Vaccine) ทำมาจากสิ่งใด และช่วยเสริมสร้างภูมิคุ้มกันชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เชื้อโรคที่ตายแล้วหรืออ่อนแรง กระตุ้นภูมิคุ้มกันรับมา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เชื้อโรคที่ตายแล้วหรืออ่อนแรง กระตุ้นภูมิคุ้มกันก่อเอง",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เซรุ่มที่มีแอนติบอดีสำเร็จรูป",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ยาปฏิชีวนะฆ่าเชื้อ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วัคซีนคือเชื้อโรคที่ทำให้อ่อนฤทธิ์ กระตุ้นภูมิคุ้มกันแบบก่อเอง (Active immunity)",
      "trickTip": "💡 วัคซีน = ภูมิคุ้มกันก่อเอง, เซรุ่ม = ภูมิคุ้มกันรับมา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "วัคซีนคือเชื้อโรคที่ทำให้อ่อนฤทธิ์ กระตุ้นภูมิคุ้มกันแบบก่อเอง (Active immunity)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-028",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การตัดต่อยีนเพื่อสร้างสิ่งมีชีวิตดัดแปรพันธุกรรมเรียกว่าอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Cloning",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Genetic Engineering (GMOs)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Tissue Culture",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Hydroponics",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พันธุวิศวกรรม (Genetic Engineering)",
      "trickTip": "💡 GMOs = พันธุวิศวกรรม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "พันธุวิศวกรรม (Genetic Engineering)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-029",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "พืช C4 เช่น ข้าวโพด อ้อย มีความสามารถในการตรึง $CO_2$ ได้ดีในสภาวะใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สภาพอากาศร้อน แดดจัด และแห้งแล้ง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สภาพอากาศหนาวเย็น",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ในที่ร่มแสงน้อย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ในน้ำลึก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พืช C4 ปรับตัวได้ดีในสภาพอากาศร้อนจัดและแดดแรง",
      "trickTip": "💡 ข้าวโพด อ้อย = พืช C4 ทนร้อนแดดจัด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "พืช C4 ปรับตัวได้ดีในสภาพอากาศร้อนจัดและแดดแรง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-030",
    "subjectId": "science",
    "topicId": "sci-biology",
    "topicName": "สิ่งมีชีวิตและกระบวนการดำรงชีวิต",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ชีววิทยา",
      "สิ่งมีชีวิต"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ระบบประสาทอัตโนวัติ (Autonomic Nervous System) ควบคุมการทำงานของอวัยวะใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การยกแขนและขา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเต้นของหัวใจและการย่อยอาหาร",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การคิดวิเคราะห์คำนวณ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การพูดและเขียน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ควบคุมกล้ามเนื้อเรียบและกล้ามเนื้อหัวใจที่อยู่นอกอำนาจจิตใจ",
      "trickTip": "💡 ประสาทอัตโนวัติ = อยู่นอกอำนาจจิตใจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการวิทยาศาสตร์",
          "content": "ควบคุมกล้ามเนื้อเรียบและกล้ามเนื้อหัวใจที่อยู่นอกอำนาจจิตใจ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-031",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หลอดไฟ 3 หลอดต่อแบบขนาน หากหลอดไฟหนึ่งหลอดขาด หลอดที่เหลือจะเป็นอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ดับทั้งหมด",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ยังคงสว่างตามปกติ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สว่างจ้าขึ้นจนขาด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กะพริบ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การต่อขนานกระแสไฟฟ้าไหลแยกสาย หลอดที่เหลือยังทำงานได้ปกติ",
      "trickTip": "💡 ต่อขนาน = หลอดใดขาด ที่เหลือยังติด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "การต่อขนานกระแสไฟฟ้าไหลแยกสาย หลอดที่เหลือยังทำงานได้ปกติ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-032",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วัตถุมีมวล 50 กรัม ปริมาตร 25 ลูกบาศก์เซนติเมตร มีความหนาแน่นเท่าใด และจะลอยหรือจมในน้ำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความหนาแน่น 2 g/cm3 และจมน้ำ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ความหนาแน่น 2 g/cm3 และลอยน้ำ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ความหนาแน่น 0.5 g/cm3 และลอยน้ำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความหนาแน่น 0.5 g/cm3 และจมน้ำ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "D = M/V = 50/25 = 2 g/cm3 ซึ่งมากกว่าน้ำ (1 g/cm3) จึงจมน้ำ",
      "trickTip": "💡 ความหนาแน่นมากกว่าน้ำ = จม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "D = M/V = 50/25 = 2 g/cm3 ซึ่งมากกว่าน้ำ (1 g/cm3) จึงจมน้ำ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-033",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กฎของโอห์มกล่าวถึงความสัมพันธ์ตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$V = I \\times R$",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$I = V \\times R$",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$R = V \\times I$",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "$P = V \\times I$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$V = IR$ (ความต่างศักย์ = กระแสไฟฟ้า x ความต้านทาน)",
      "trickTip": "💡 สามเหลี่ยมโอห์ม: V = IR",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "$V = IR$ (ความต่างศักย์ = กระแสไฟฟ้า x ความต้านทาน)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-034",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เมื่อแสงเดินทางจากอากาศเข้าสู่น้ำ ลำแสงจะหักเหอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เบนออกจากเส้นแนวฉาก",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เบนเข้าหาเส้นแนวฉาก",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เดินทางเป็นเส้นตรงตามเดิม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สะท้อนกลับหมด 100%",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จากตัวกลางความหนาแน่นน้อยไปมาก มุมหักเหจะแคบลง (เบนเข้าหาเส้นแนวฉาก)",
      "trickTip": "💡 น้อยไปมาก = เบนเข้าหาเส้นฉาก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "จากตัวกลางความหนาแน่นน้อยไปมาก มุมหักเหจะแคบลง (เบนเข้าหาเส้นแนวฉาก)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-035",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คานอันหนึ่งยาว 2 เมตร มีจุดหมุนอยู่กึ่งกลาง แขวนมวล 10 กก. ไว้ที่ปลายข้างหนึ่ง ต้องแขวนมวลกี่กก. ที่ระยะ 0.5 เมตรจากจุดหมุนอีกข้างจึงจะสมดุล",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "10 กก.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "15 กก.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "20 กก.",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "25 กก.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โมเมนต์ตาม = โมเมนต์ทวน: $10 \\times 1 = W \\times 0.5 \\implies W = 20\\text{ กก.}$",
      "trickTip": "💡 โมเมนต์ทวน = โมเมนต์ตาม ($M = F \\times L$)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "โมเมนต์ตาม = โมเมนต์ทวน: $10 \\times 1 = W \\times 0.5 \\implies W = 20\\text{ กก.}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-036",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ออกแรง 50 นิวตัน ดึงกล่องให้เคลื่อนที่ไปตามแนวราบได้ระยะทาง 6 เมตร งานที่ทำมีค่ากี่จูล",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "200 จูล",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "250 จูล",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "300 จูล",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "350 จูล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "งาน $W = F \\times s = 50 \\times 6 = 300\\text{ จูล}$",
      "trickTip": "💡 $W = F \\times s$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "งาน $W = F \\times s = 50 \\times 6 = 300\\text{ จูล}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-037",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เครื่องใช้ไฟฟ้าขนาด 1,000 วัตต์ ใช้งานวันละ 3 ชั่วโมง ในเวลา 30 วัน จะใช้พลังงานไฟฟ้ากี่หน่วย (ยูนิต)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "30 หน่วย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "60 หน่วย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "90 หน่วย",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "120 หน่วย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ยูนิต = $(1000 \\times 3 \\times 30) / 1000 = 90\\text{ หน่วย}$",
      "trickTip": "💡 หน่วยไฟฟ้า = (วัตต์ x ชม. x วัน) / 1000",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "ยูนิต = $(1000 \\times 3 \\times 30) / 1000 = 90\\text{ หน่วย}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-038",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "กระจกเงาโค้งชนิดใดที่ให้ภาพเสมือนขนาดเล็กกว่าวัตถุเสมอในทุกระยะ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กระจกเงาระนาบ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กระจกนูน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กระจกเว้า",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เลนส์นูน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กระจกนูนจะให้ภาพเสมือน หัวตั้ง ขนาดเล็กกว่าวัตถุเสมอ (ใช้ทำกระจกมองข้างรถ)",
      "trickTip": "💡 กระจกนูน = ภาพเสมือน หัวตั้ง ขนาดเล็กกว่าวัตถุเสมอ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "กระจกนูนจะให้ภาพเสมือน หัวตั้ง ขนาดเล็กกว่าวัตถุเสมอ (ใช้ทำกระจกมองข้างรถ)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-039",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "รอกเดี่ยวตายตัวมีประโยชน์เชิงกลอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผ่อนแรงได้ครึ่งหนึ่ง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ช่วยอำนวยความสะดวกในการเปลี่ยนทิศทางของแรง",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เพิ่มระยะทาง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไม่ต้องออกแรง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รอกเดี่ยวตายตัวไม่ผ่อนแรง ($MA=1$) แต่ช่วยเปลี่ยนทิศทางของแรง",
      "trickTip": "💡 รอกเดี่ยวตายตัว = อำนวยความสะดวก ไม่ผ่อนแรง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "รอกเดี่ยวตายตัวไม่ผ่อนแรง ($MA=1$) แต่ช่วยเปลี่ยนทิศทางของแรง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-040",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เสียงไม่สามารถเดินทางผ่านตัวกลางในข้อใดได้",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ของแข็ง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ของเหลว",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แก๊ส",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สุญญากาศ",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "เสียงเป็นคลื่นกล ต้องอาศัยตัวกลาง จึงเดินทางผ่านสุญญากาศไม่ได้",
      "trickTip": "💡 เสียงผ่านสุญญากาศไม่ได้ แสงผ่านได้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "เสียงเป็นคลื่นกล ต้องอาศัยตัวกลาง จึงเดินทางผ่านสุญญากาศไม่ได้"
        }
      ]
    }
  },
  {
    "id": "bm-sci-041",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เมื่อวัตถุลอยนิ่งอยู่ในน้ำ แรงพยุงของน้ำจะมีค่าเท่ากับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำหนักของน้ำทั้งหมด",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "น้ำหนักของวัตถุ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ปริมาตรของวัตถุ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความดันบรรยากาศ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เมื่อวัตถุลอยนิ่ง แรงพยุงลอยตัว = น้ำหนักของวัตถุ",
      "trickTip": "💡 วัตถุลอยนิ่ง: $F_B = W$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "เมื่อวัตถุลอยนิ่ง แรงพยุงลอยตัว = น้ำหนักของวัตถุ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-042",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เซลล์สุริยะ (Solar Cell) เปลี่ยนพลังงานแสงอาทิตย์เป็นพลังงานชนิดใดโดยตรง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พลังงานกล",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พลังงานเคมี",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พลังงานไฟฟ้า",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พลังงานความร้อน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เปลี่ยนพลังงานแสงเป็นพลังงานไฟฟ้าโดยตรง",
      "trickTip": "💡 โซลาร์เซลล์ = แสงเป็นไฟฟ้า",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "เปลี่ยนพลังงานแสงเป็นพลังงานไฟฟ้าโดยตรง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-043",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การต่อหลอดไฟในบ้านเรือนส่วนใหญ่นิยมต่อแบบใด เพราะเหตุใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แบบอนุกรม เพราะประหยัดสายไฟ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แบบขนาน เพราะความต่างศักย์เท่ากันและเปิด-ปิดแยกกันได้",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แบบผสม เพื่อเพิ่มความต้านทาน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แบบใดก็ได้",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ต่อแบบขนานเพื่อให้เครื่องใช้ไฟฟ้าได้รับแรงดัน 220V เท่ากันและใช้งานอิสระต่อกัน",
      "trickTip": "💡 ไฟบ้านต่อแบบขนาน 220V",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "ต่อแบบขนานเพื่อให้เครื่องใช้ไฟฟ้าได้รับแรงดัน 220V เท่ากันและใช้งานอิสระต่อกัน"
        }
      ]
    }
  },
  {
    "id": "bm-sci-044",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วัตถุเคลื่อนที่ด้วยความเร็วคงที่ 20 เมตร/วินาที เป็นเวลา 15 วินาที จะได้ระยะทางกี่เมตร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "200 เมตร",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "250 เมตร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "300 เมตร",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "350 เมตร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$s = v \\times t = 20 \\times 15 = 300\\text{ เมตร}$",
      "trickTip": "💡 $s = vt$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "$s = v \\times t = 20 \\times 15 = 300\\text{ เมตร}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-045",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "อุณหภูมิ $25^\\circ\\text{C}$ คิดเป็นกี่องศาฟาเรนไฮต์ ($^\\circ\\text{F}$)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "68 °F",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "77 °F",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "86 °F",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "95 °F",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$F = \\frac{9}{5}C + 32 = \\frac{9}{5}(25) + 32 = 45 + 32 = 77^\\circ\\text{F}$",
      "trickTip": "💡 สูตร: $F = 1.8C + 32$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "$F = \\frac{9}{5}C + 32 = \\frac{9}{5}(25) + 32 = 45 + 32 = 77^\\circ\\text{F}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-046",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นการถ่ายโอนความร้อนโดยไม่ต้องอาศัยตัวกลาง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การนำความร้อน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การพาความร้อน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การแผ่รังสีความร้อน",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การระเหย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การแผ่รังสีความร้อน เช่น ความร้อนจากดวงอาทิตย์มายังโลกผ่านสุญญากาศ",
      "trickTip": "💡 แผ่รังสี = ไม่อาศัยตัวกลาง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "การแผ่รังสีความร้อน เช่น ความร้อนจากดวงอาทิตย์มายังโลกผ่านสุญญากาศ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-047",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สนามแม่เหล็กโลกมีทิศทางอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พุ่งออกจากขั้วโลกเหนือไปยังขั้วโลกใต้",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พุ่งออกจากขั้วโลกใต้ไปยังขั้วโลกเหนือ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วนรอบเส้นศูนย์สูตร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "พุ่งเข้าหาแกนโลก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ขั้วแม่เหล็กโลกใต้ตั้งอยู่ใกล้ขั้วโลกเหนือภูมิศาสตร์ เส้นแรงแม่เหล็กจึงพุ่งจากใต้ไปเหนือ",
      "trickTip": "💡 สนามแม่เหล็กโลกพุ่งจากใต้ขึ้นเหนือ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "ขั้วแม่เหล็กโลกใต้ตั้งอยู่ใกล้ขั้วโลกเหนือภูมิศาสตร์ เส้นแรงแม่เหล็กจึงพุ่งจากใต้ไปเหนือ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-048",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เครื่องกำเนิดไฟฟ้า (ไดนาโม) ทำงานโดยอาศัยหลักการใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การเหนี่ยวนำแม่เหล็กไฟฟ้า (Faraday's Law)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ผลของความร้อนจากกระแสไฟฟ้า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ปฏิกิริยาเคมีไฟฟ้า",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การปล่อยประจุไฟฟ้าสถิต",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การหมุนขดลวดตัดผ่านสนามแม่เหล็กเกิดการเหนี่ยวนำกระแสไฟฟ้า",
      "trickTip": "💡 ไดนาโม = เหนี่ยวนำแม่เหล็กไฟฟ้า",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "การหมุนขดลวดตัดผ่านสนามแม่เหล็กเกิดการเหนี่ยวนำกระแสไฟฟ้า"
        }
      ]
    }
  },
  {
    "id": "bm-sci-049",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เมื่อนำแท่งแก้วถูกับผ้าไหม แท่งแก้วจะมีประจุไฟฟ้าชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ประจุบวก",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ประจุลบ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เป็นกลางทางไฟฟ้า",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "มีทั้งบวกและลบเท่ากัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แท่งแก้วเสียอิเล็กตรอนให้ผ้าไหม ทำให้แท่งแก้วมีประจุบวก",
      "trickTip": "💡 แท่งแก้วถูผ้าไหม = แก้วเป็นบวก ผ้าไหมเป็นลบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "แท่งแก้วเสียอิเล็กตรอนให้ผ้าไหม ทำให้แท่งแก้วมีประจุบวก"
        }
      ]
    }
  },
  {
    "id": "bm-sci-050",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ภาพที่เกิดจากแว่นขยาย (เลนส์นูน) เมื่อวางวัตถุไว้ใกล้กว่าจุดโฟกัสจะเป็นภาพชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภาพจริง หัวกลับ ขนาดใหญ่กว่าวัตถุ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภาพเสมือน หัวตั้ง ขนาดใหญ่กว่าวัตถุ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาพจริง หัวตั้ง ขนาดเท่าวัตถุ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภาพเสมือน หัวกลับ ขนาดเล็กกว่าวัตถุ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ได้ภาพเสมือน หัวตั้ง ขนาดใหญ่กว่าวัตถุ อยู่ด้านเดียวกับวัตถุ",
      "trickTip": "💡 แว่นขยาย = ภาพเสมือน หัวตั้ง ขนาดใหญ่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "ได้ภาพเสมือน หัวตั้ง ขนาดใหญ่กว่าวัตถุ อยู่ด้านเดียวกับวัตถุ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-051",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ความถี่ของคลื่นเสียงมีผลต่อสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความดัง-ค่อยของเสียง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ระดับเสียงสูง-ต่ำ (Pitch)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คุณภาพเสียง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความเร็วเสียง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความถี่สูง = เสียงแหลม (สูง), ความถี่ต่ำ = เสียงทุ้ม (ต่ำ)",
      "trickTip": "💡 ความถี่ = เสียงสูงต่ำ / แอมพลิจูด = ความดัง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "ความถี่สูง = เสียงแหลม (สูง), ความถี่ต่ำ = เสียงทุ้ม (ต่ำ)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-052",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ลิฟต์มวล 500 กิโลกรัม เคลื่อนที่ขึ้นด้วยความเร็วคงที่เป็นระยะทาง 10 เมตร งานที่ใช้ยกมีค่ากี่จูล ($g = 10\\text{ m/s}^2$)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "5,000 จูล",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "25,000 จูล",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "50,000 จูล",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "100,000 จูล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$W = mgh = 500 \\times 10 \\times 10 = 50,000\\text{ จูล}$",
      "trickTip": "💡 $W = mgh$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "$W = mgh = 500 \\times 10 \\times 10 = 50,000\\text{ จูล}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-053",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารใดต่อไปนี้เป็นตัวนำไฟฟ้าที่ดีที่สุดที่อุณหภูมิห้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทองแดง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เงิน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทองคำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อะลูมิเนียม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โลหะเงิน (Silver) เป็นตัวนำไฟฟ้าและความร้อนที่ดีที่สุด",
      "trickTip": "💡 เงิน (Ag) นำไฟฟ้าดีที่สุด รองลงมาคือทองแดง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "โลหะเงิน (Silver) เป็นตัวนำไฟฟ้าและความร้อนที่ดีที่สุด"
        }
      ]
    }
  },
  {
    "id": "bm-sci-054",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แรงเสียดทานจลน์เกิดขึ้นเมื่อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เมื่อวัตถุอยู่นิ่ง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เมื่อวัตถุกำลังเคลื่อนที่",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เมื่อไม่มีแรงกระทำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เมื่อวัตถุลอยในอากาศ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แรงเสียดทานจลน์เกิดขณะที่วัตถุกำลังเคลื่อนที่ไถลไปบนพื้นผิว",
      "trickTip": "💡 สถิต = อยู่นิ่ง / จลน์ = เคลื่อนที่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "แรงเสียดทานจลน์เกิดขณะที่วัตถุกำลังเคลื่อนที่ไถลไปบนพื้นผิว"
        }
      ]
    }
  },
  {
    "id": "bm-sci-055",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ฟิวส์ไฟฟ้าทำหน้าที่อะไรในวงจรไฟฟ้าบ้าน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพิ่มแรงดันไฟฟ้า",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตัดวงจรไฟฟ้าอัตโนมัติเมื่อมีกระแสไฟฟ้าไหลเกินหรือไฟฟ้าลัดวงจร",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เปลี่ยนไฟฟ้ากระแสสลับเป็นกระแสตรง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ประหยัดพลังงานไฟฟ้า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฟิวส์จะหลอมละลายและตัดวงจรเมื่อมีกระแสเกินพิกัดเพื่อความปลอดภัย",
      "trickTip": "💡 ฟิวส์ = ป้องกันกระแสไฟเกิน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "ฟิวส์จะหลอมละลายและตัดวงจรเมื่อมีกระแสเกินพิกัดเพื่อความปลอดภัย"
        }
      ]
    }
  },
  {
    "id": "bm-sci-056",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แสงสีปฐมภูมิ (Primary Colors of Light) ประกอบด้วยสีใดบ้าง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แดง เขียว น้ำเงิน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แดง เหลือง น้ำเงิน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แดง เขียว เหลือง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ฟ้า ม่วงแดง เหลือง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แสงสีปฐมภูมิคือ แดง เขียว น้ำเงิน (RGB)",
      "trickTip": "💡 แสงสี = แดง เขียว น้ำเงิน (RGB)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "แสงสีปฐมภูมิคือ แดง เขียว น้ำเงิน (RGB)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-057",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดาวเทียมโคจรรอบโลกด้วยแรงใดที่ทำหน้าที่เป็นแรงสู่ศูนย์กลาง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แรงดึงดูดระหว่างมวลของโลก",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แรงผลักสนามแม่เหล็ก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แรงดันของลมสุริยะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แรงขับดันจากจรวดตลอดเวลา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แรงโน้มถ่วงของโลกทำหน้าที่เป็นแรงสู่ศูนย์กลาง ($F_c = F_g$)",
      "trickTip": "💡 แรงโน้มถ่วง = แรงสู่ศูนย์กลางของดาวเทียม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "แรงโน้มถ่วงของโลกทำหน้าที่เป็นแรงสู่ศูนย์กลาง ($F_c = F_g$)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-058",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เมื่อเราผลักกำแพงแล้วกำแพงไม่ขยับ งานทางฟิสิกส์มีค่าเท่าใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มีค่าเท่ากับแรงผลัก",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "0 จูล เพราะระยะทางในแนวแรงเป็นศูนย์",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มีค่ามหาศาล",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ขึ้นกับเวลาที่ออกแรง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "งาน $W = F \\times s$ เมื่อ $s = 0$ งานจึงเป็น 0 จูล",
      "trickTip": "💡 ระยะทางเป็น 0 ➔ งานเป็น 0",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "งาน $W = F \\times s$ เมื่อ $s = 0$ งานจึงเป็น 0 จูล"
        }
      ]
    }
  },
  {
    "id": "bm-sci-059",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สปริงมีค่านิจสปริง $k = 100\\text{ N/m}$ เมื่อถูกดึงให้ยืดออก 0.2 เมตร จะมีแรงดึงกลับกี่นิวตัน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "10 นิวตัน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "20 นิวตัน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "50 นิวตัน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "200 นิวตัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$F = kx = 100 \\times 0.2 = 20\\text{ นิวตัน}$",
      "trickTip": "💡 กฎของฮุก: $F = kx$",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "$F = kx = 100 \\times 0.2 = 20\\text{ นิวตัน}$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-060",
    "subjectId": "science",
    "topicId": "sci-physics",
    "topicName": "แรง พลังงาน และไฟฟ้าคำนวณ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ฟิสิกส์",
      "ไฟฟ้า",
      "แรงและพลังงาน"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "มิเตอร์ไฟฟ้าที่หน้าบ้านวัดปริมาณทางไฟฟ้าชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กระแสไฟฟ้า (แอมแปร์)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ความต่างศักย์ (โวลต์)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พลังงานไฟฟ้า (กิโลวัตต์-ชั่วโมง หรือ ยูนิต)",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กำลังไฟฟ้า (วัตต์)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กิโลวัตต์-ชั่วโมง มิเตอร์ (kWh Meter) วัดพลังงานไฟฟ้าที่ใช้ไป",
      "trickTip": "💡 มิเตอร์วัดพลังงานไฟฟ้าเป็นยูนิต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการฟิสิกส์",
          "content": "กิโลวัตต์-ชั่วโมง มิเตอร์ (kWh Meter) วัดพลังงานไฟฟ้าที่ใช้ไป"
        }
      ]
    }
  },
  {
    "id": "bm-sci-061",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "วิธีการแยกน้ำมันหอมระเหยออกจากพืชสมุนไพร เช่น ผิวมะกรูด นิยมใช้วิธีใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การกรอง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การกลั่นด้วยไอน้ำ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การตกผลึก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โครมาโทกราฟี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การกลั่นด้วยไอน้ำช่วยแยกสารระเหยง่ายที่ไม่ละลายน้ำออกจากพืชโดยไม่สลายตัว",
      "trickTip": "💡 น้ำมันหอมระเหย = กลั่นด้วยไอน้ำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "การกลั่นด้วยไอน้ำช่วยแยกสารระเหยง่ายที่ไม่ละลายน้ำออกจากพืชโดยไม่สลายตัว"
        }
      ]
    }
  },
  {
    "id": "bm-sci-062",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารละลายที่มีค่า pH = 3 มีสมบัติตรงตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เป็นเบสแก่ เปลี่ยนลิตมัสแดงเป็นน้ำเงิน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เป็นกรด เปลี่ยนลิตมัสจากน้ำเงินเป็นแดง",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เป็นกลาง ไม่เปลี่ยนสีกระดาษลิตมัส",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เป็นสารละลายเกลือ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "pH < 7 เป็นกรด เปลี่ยนกระดาษลิตมัสสีน้ำเงินเป็นแดง",
      "trickTip": "💡 pH < 7 กรด (น้ำเงิน->แดง) / pH > 7 เบส (แดง->น้ำเงิน)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "pH < 7 เป็นกรด เปลี่ยนกระดาษลิตมัสสีน้ำเงินเป็นแดง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-063",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดจัดเป็นการเปลี่ยนแปลงทางเคมี (Chemical Change)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การละลายของน้ำตาลในน้ำ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การระเหิดของลูกเหม็น",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเกิดสนิมเหล็ก",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การหลอมเหลวของเทียนไข",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การเกิดสนิมเหล็ก ($4Fe + 3O_2 + 6H_2O \\rightarrow 4Fe(OH)_3$) เป็นสารใหม่",
      "trickTip": "💡 สนิมเหล็ก = การเปลี่ยนแปลงทางเคมี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "การเกิดสนิมเหล็ก ($4Fe + 3O_2 + 6H_2O \\rightarrow 4Fe(OH)_3$) เป็นสารใหม่"
        }
      ]
    }
  },
  {
    "id": "bm-sci-064",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การแยกสารผสมระหว่างน้ำตาลทรายกับทราย ควรใช้กระบวนการใดตามลำดับ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ละลายน้ำ -> กรอง -> ระเหยแห้ง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กรอง -> ระเหิด -> ตกผลึก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ใช้แม่เหล็กดูด -> กลั่น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โครมาโทกราฟี -> สกัด",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เติมน้ำให้น้ำตาลละลาย กรองทรายออก แล้วนำสารละลายน้ำตาลไประเหยแห้ง",
      "trickTip": "💡 ละลายน้ำ -> กรองทราย -> ระเหยแห้งน้ำตาล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "เติมน้ำให้น้ำตาลละลาย กรองทรายออก แล้วนำสารละลายน้ำตาลไประเหยแห้ง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-065",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารละลายชนิดใดเปลี่ยนฟีนอล์ฟทาลีนจากไม่มีสีเป็นสีชมพู",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำมะนาว",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "น้ำส้มสายชู",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "น้ำขี้เถ้า / น้ำสบู่",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "น้ำเกลือ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฟีนอล์ฟทาลีนเปลี่ยนเป็นสีชมพูในสารละลายเบส (pH > 8.3)",
      "trickTip": "💡 ฟีนอล์ฟทาลีน = ชมพูในเบส",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "ฟีนอล์ฟทาลีนเปลี่ยนเป็นสีชมพูในสารละลายเบส (pH > 8.3)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-066",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ธาตุในข้อใดเป็นอโลหะทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เหล็ก ทองแดง สังกะสี",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คาร์บอน ออกซิเจน ไนโตรเจน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "โซเดียม แมกนีเซียม อะลูมิเนียม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ปรอท ตะกั่ว ดีบุก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คาร์บอน (C), ออกซิเจน (O), ไนโตรเจน (N) เป็นธาตุอโลหะ",
      "trickTip": "💡 C, O, N = อโลหะ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "คาร์บอน (C), ออกซิเจน (O), ไนโตรเจน (N) เป็นธาตุอโลหะ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-067",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เกลือแกง (NaCl) จัดเป็นสารประเภทใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ธาตุ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สารประกอบ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สารละลาย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สารแขวนลอย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โซเดียมคลอไรด์เกิดจากธาตุ Na และ Cl รวมตัวกันด้วยพันธะเคมี",
      "trickTip": "💡 เกลือแกง = สารประกอบบริสุทธิ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "โซเดียมคลอไรด์เกิดจากธาตุ Na และ Cl รวมตัวกันด้วยพันธะเคมี"
        }
      ]
    }
  },
  {
    "id": "bm-sci-068",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารละลายกรดทำปฏิกิริยากับหินปูน (แคลเซียมคาร์บอเนต) จะเกิดแก๊สชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แก๊สไฮโดรเจน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แก๊สออกซิเจน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แก๊สคาร์บอนไดออกไซด์",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แก๊สไนโตรเจนไดออกไซด์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กรด + หินปูน $\\rightarrow$ เกลือ + น้ำ + แก๊สคาร์บอนไดออกไซด์ ($CO_2$)",
      "trickTip": "💡 กรด + หินปูน = แก๊ส CO2",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "กรด + หินปูน $\\rightarrow$ เกลือ + น้ำ + แก๊สคาร์บอนไดออกไซด์ ($CO_2$)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-069",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นสารเนื้อเดียวที่ไม่ใช่สารบริสุทธิ์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำกลั่น",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทองคำ 24K",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "น้ำเชื่อม",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "น้ำตาลทราย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "น้ำเชื่อมเป็นสารละลายเนื้อเดียวที่ประกอบด้วยน้ำตาลละลายในน้ำ",
      "trickTip": "💡 น้ำเชื่อม/น้ำเกลือ = สารละลายเนื้อเดียว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "น้ำเชื่อมเป็นสารละลายเนื้อเดียวที่ประกอบด้วยน้ำตาลละลายในน้ำ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-070",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การตกผลึก (Crystallization) เหมาะสำหรับการแยกสารในข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ของแข็งที่ละลายได้ดีในตัวทำละลายร้อนและละลายน้อยในตัวทำละลายเย็น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ของเหลวที่ระเหยง่าย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ของแข็งที่ไม่ละลายน้ำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แก๊สในอากาศ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การตกผลึกอาศัยความสามารถในการละลายที่แตกต่างกันตามอุณหภูมิ",
      "trickTip": "💡 ตกผลึก = แยกของแข็งบริสุทธิ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "การตกผลึกอาศัยความสามารถในการละลายที่แตกต่างกันตามอุณหภูมิ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-071",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แก๊สชนิดใดมีสัดส่วนมากที่สุดในบรรยากาศโลก",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ออกซิเจน (~21%)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ไนโตรเจน (~78%)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คาร์บอนไดออกไซด์ (~0.04%)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อาร์กอน (~0.9%)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แก๊สไนโตรเจนมีปริมาณมากที่สุดประมาณ 78% ของบรรยากาศ",
      "trickTip": "💡 ไนโตรเจน 78% > ออกซิเจน 21%",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "แก๊สไนโตรเจนมีปริมาณมากที่สุดประมาณ 78% ของบรรยากาศ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-072",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เมื่อนำสารละลายกรดไฮโดรคลอริกทำปฏิกิริยากับโลหะสังกะสี จะได้แก๊สชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แก๊สออกซิเจน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แก๊สไฮโดรเจน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แก๊สคลอรีน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แก๊สมีเทน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กรด + โลหะ $\\rightarrow$ เกลือ + แก๊สไฮโดรเจน ($H_2$)",
      "trickTip": "💡 กรด + โลหะ = แก๊สไฮโดรเจน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "กรด + โลหะ $\\rightarrow$ เกลือ + แก๊สไฮโดรเจน ($H_2$)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-073",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดคือจุดเดือดของน้ำบริสุทธิ์ที่ระดับน้ำทะเล (ความดัน 1 บรรยากาศ)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$98^\\circ\\text{C}$",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$100^\\circ\\text{C}$",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$102^\\circ\\text{C}$",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "$105^\\circ\\text{C}$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "น้ำบริสุทธิ์เดือดที่ $100^\\circ\\text{C}$ ที่ความดัน 1 atm",
      "trickTip": "💡 จุดเดือดน้ำ = 100 °C ที่ 1 atm",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "น้ำบริสุทธิ์เดือดที่ $100^\\circ\\text{C}$ ที่ความดัน 1 atm"
        }
      ]
    }
  },
  {
    "id": "bm-sci-074",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารแขวนลอย สารคอลลอยด์ และสารละลาย เรียงลำดับขนาดของอนุภาคจากใหญ่ไปเล็กได้อย่างถูกต้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สารละลาย > คอลลอยด์ > สารแขวนลอย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สารแขวนลอย > คอลลอยด์ > สารละลาย",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คอลลอยด์ > สารแขวนลอย > สารละลาย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สารแขวนลอย > สารละลาย > คอลลอยด์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สารแขวนลอย ($>10^{-4}$ cm) > คอลลอยด์ ($10^{-7}-10^{-4}$ cm) > สารละลาย ($<10^{-7}$ cm)",
      "trickTip": "💡 แขวนลอย > คอลลอยด์ > สารละลาย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "สารแขวนลอย ($>10^{-4}$ cm) > คอลลอยด์ ($10^{-7}-10^{-4}$ cm) > สารละลาย ($<10^{-7}$ cm)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-075",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปรากฏการณ์ทินดอลล์ (Tyndall Effect) เป็นสมบัติเด่นของสารประเภทใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สารละลาย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สารคอลลอยด์",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สารบริสุทธิ์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แก๊ส",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การกระเจิงแสงของอนุภาคในคอลลอยด์ เช่น หมอก ควัน น้ำนม",
      "trickTip": "💡 คอลลอยด์ = ปรากฏการณ์ทินดอลล์ (ลำแสง)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "การกระเจิงแสงของอนุภาคในคอลลอยด์ เช่น หมอก ควัน น้ำนม"
        }
      ]
    }
  },
  {
    "id": "bm-sci-076",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารใดต่อไปนี้จัดเป็นเบสที่ใช้ในชีวิตประจำวัน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำยาล้างห้องน้ำ (กรดเกลือ)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "น้ำยาล้างจาน/ผงซักฟอก",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "น้ำมะขามเปียก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "น้ำอัดลม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผงซักฟอกและสบู่มีสมบัติเป็นเบส ลื่นมือ มี pH > 7",
      "trickTip": "💡 สบู่/ผงซักฟอก = เบส",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "ผงซักฟอกและสบู่มีสมบัติเป็นเบส ลื่นมือ มี pH > 7"
        }
      ]
    }
  },
  {
    "id": "bm-sci-077",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ในการเตรียมสารละลายน้ำตาลเข้มข้น 15% โดยมวล ต้องใช้น้ำตาลกี่กรัมในน้ำ 170 กรัม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "20 กรัม",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "25 กรัม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "30 กรัม",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "35 กรัม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "น้ำตาล 30 กรัม ในสารละลายทั้งหมด 200 กรัม $= \\frac{30}{200} \\times 100 = 15\\%$",
      "trickTip": "💡 % = (มวลตัวละลาย / มวลสารละลาย) x 100",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "น้ำตาล 30 กรัม ในสารละลายทั้งหมด 200 กรัม $= \\frac{30}{200} \\times 100 = 15\\%$"
        }
      ]
    }
  },
  {
    "id": "bm-sci-078",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นการระเหิด (Sublimation)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "น้ำแข็งกลายเป็นน้ำ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การบูรกลายเป็นไอโดยไม่ผ่านสถานะของเหลว",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ไอน้ำกลายเป็นหยดน้ำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ขี้ผึ้งหลอมเหลว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การบูร/ลูกเหม็นเปลี่ยนจากของแข็งเป็นแก๊สโดยตรง",
      "trickTip": "💡 ของแข็งเป็นแก๊ส = ระเหิด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "การบูร/ลูกเหม็นเปลี่ยนจากของแข็งเป็นแก๊สโดยตรง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-079",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สารใดทำหน้าที่เป็นตัวเร่งปฏิกิริยา (Catalyst) ในสิ่งมีชีวิต",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ฮอร์โมน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เอนไซม์",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วิตามิน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เกลือแร่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เอนไซม์เป็นสารโปรตีนที่ทำหน้าที่เป็นตัวเร่งปฏิกิริยาชีวเคมี",
      "trickTip": "💡 เอนไซม์ = ตัวเร่งปฏิกิริยาในร่างกาย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "เอนไซม์เป็นสารโปรตีนที่ทำหน้าที่เป็นตัวเร่งปฏิกิริยาชีวเคมี"
        }
      ]
    }
  },
  {
    "id": "bm-sci-080",
    "subjectId": "science",
    "topicId": "sci-chemistry",
    "topicName": "สารและการเปลี่ยนแปลง",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "เคมี",
      "สารและการเปลี่ยนแปลง"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การสกัดสารด้วยตัวทำละลายมีหลักการสำคัญอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตัวทำละลายต้องไม่ทำปฏิกิริยากับสารที่ต้องการสกัดและละลายสารนั้นได้ดี",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตัวทำละลายต้องมีจุดเดือดสูงกว่าน้ำ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตัวทำละลายต้องมีความหนาแน่นเท่ากับสารที่สกัด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ต้องใช้ความร้อนสูงตลอดเวลา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เลือกตัวทำละลายที่ละลายสารที่ต้องการได้ดีและแยกออกได้ง่าย",
      "trickTip": "💡 ตัวทำละลายต้องละลายสารที่ต้องการได้ดีและระเหยง่าย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางเคมี",
          "content": "เลือกตัวทำละลายที่ละลายสารที่ต้องการได้ดีและแยกออกได้ง่าย"
        }
      ]
    }
  },
  {
    "id": "bm-sci-081",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ชั้นบรรยากาศใดที่มีโอโซน ($O_3$) หนาแน่น ช่วยดูดกลืนรังสี UV จากดวงอาทิตย์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "โทรโพสเฟียร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สตราโตสเฟียร์",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มีโซสเฟียร์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เทอร์โมสเฟียร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ชั้นสตราโตสเฟียร์ (Stratosphere) มีชั้นโอโซนดูดซับรังสีอัลตราไวโอเลต",
      "trickTip": "💡 สตราโตสเฟียร์ = มีโอโซนกัน UV และเครื่องบินบิน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "ชั้นสตราโตสเฟียร์ (Stratosphere) มีชั้นโอโซนดูดซับรังสีอัลตราไวโอเลต"
        }
      ]
    }
  },
  {
    "id": "bm-sci-082",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หินชนิดใดเกิดจากการเย็นตัวและแข็งตัวของแมกมาหรือลาวา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "หินอัคนี",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "หินตะกอน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "หินแปร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "หินชนวน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หินอัคนี (Igneous Rock) เช่น หินแกรนิต หินบะซอลต์ หินออบซิเดียน",
      "trickTip": "💡 แมกมา/ลาวาเย็นตัว = หินอัคนี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "หินอัคนี (Igneous Rock) เช่น หินแกรนิต หินบะซอลต์ หินออบซิเดียน"
        }
      ]
    }
  },
  {
    "id": "bm-sci-083",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปรากฏการณ์น้ำเกิด (Spring Tide) จะเกิดขึ้นในวันใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "วันขึ้น 8 ค่ำ และ แรม 8 ค่ำ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "วันขึ้น 15 ค่ำ และ แรม 15 ค่ำ (วันเพ็ญและวันดับ)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วันขึ้น 1 ค่ำ และ แรม 1 ค่ำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วันขึ้น 4 ค่ำ และ แรม 4 ค่ำ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วันขึ้น 15 ค่ำ และแรม 15 ค่ำ ดวงอาทิตย์ โลก ดวงจันทร์ เรียงตรงกัน แรงดึงดูดเสริมกัน",
      "trickTip": "💡 น้ำเกิด = ขึ้น/แรม 15 ค่ำ (แนวเส้นตรง)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "วันขึ้น 15 ค่ำ และแรม 15 ค่ำ ดวงอาทิตย์ โลก ดวงจันทร์ เรียงตรงกัน แรงดึงดูดเสริมกัน"
        }
      ]
    }
  },
  {
    "id": "bm-sci-084",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดาวเคราะห์ดวงใดในระบบสุริยะมีขนาดใหญ่ที่สุด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ดาวเสาร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดาวยูเรนัส",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ดาวเนปจูน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ดาวพฤหัสบดี (Jupiter) เป็นดาวเคราะห์ก๊าซที่มีขนาดใหญ่ที่สุด",
      "trickTip": "💡 พฤหัสบดี = ดาวเคราะห์ใหญ่สุด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "ดาวพฤหัสบดี (Jupiter) เป็นดาวเคราะห์ก๊าซที่มีขนาดใหญ่ที่สุด"
        }
      ]
    }
  },
  {
    "id": "bm-sci-085",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สุริยุปราคาเกิดขึ้นเมื่อวัตถุบนท้องฟ้าเรียงตัวตามลำดับใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ดวงอาทิตย์ - โลก - ดวงจันทร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดวงจันทร์ - ดวงอาทิตย์ - โลก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โลก - ดวงอาทิตย์ - ดวงจันทร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สุริยุปราคา: ดวงจันทร์อยู่ระหว่างดวงอาทิตย์กับโลก (ดวงจันทร์บังดวงอาทิตย์)",
      "trickTip": "💡 สุริยุปราคา = อาทิตย์ - จันทร์ - โลก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "สุริยุปราคา: ดวงจันทร์อยู่ระหว่างดวงอาทิตย์กับโลก (ดวงจันทร์บังดวงอาทิตย์)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-086",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดาวเคราะห์หิน (Terrestrial Planets) ในระบบสุริยะมี 4 ดวง ได้แก่อะไรบ้าง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พุธ ศุกร์ โลก อังคาร",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พุธ ศุกร์ โลก พฤหัสบดี",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พฤหัสบดี เสาร์ ยูเรนัส เนปจูน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ศุกร์ โลก อังคาร เสาร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ดาวเคราะห์วงใน 4 ดวงเป็นดาวเคราะห์หิน: พุธ ศุกร์ โลก อังคาร",
      "trickTip": "💡 พุธ ศุกร์ โลก อังคาร = ดาวเคราะห์หิน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "ดาวเคราะห์วงใน 4 ดวงเป็นดาวเคราะห์หิน: พุธ ศุกร์ โลก อังคาร"
        }
      ]
    }
  },
  {
    "id": "bm-sci-087",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ลมบกและลมทะเลเกิดจากสาเหตุใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความกดอากาศเท่ากัน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ความจุความร้อนจำเพาะที่แตกต่างกันระหว่างพื้นดินกับพื้นน้ำ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การหมุนรอบตัวเองของโลก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แรงดึงดูดของดวงจันทร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พื้นดินรับและคายความร้อนได้เร็วกว่าพื้นน้ำ ทำให้เกิดความแตกต่างของอุณหภูมิและความกดอากาศ",
      "trickTip": "💡 กลางวัน: ลมทะเลพัดเข้าฝั่ง / กลางคืน: ลมบกพัดออกทะเล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "พื้นดินรับและคายความร้อนได้เร็วกว่าพื้นน้ำ ทำให้เกิดความแตกต่างของอุณหภูมิและความกดอากาศ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-088",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "หินปูนเมื่อถูกความร้อนและความดันใต้ผิวโลกจะแปรสภาพกลายเป็นหินชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "หินอ่อน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "หินชนวน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "หินควอร์ตไซต์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "หินไนส์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หินปูนแปรสภาพเป็นหินอ่อน (Marble)",
      "trickTip": "💡 หินปูน $\\rightarrow$ หินอ่อน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "หินปูนแปรสภาพเป็นหินอ่อน (Marble)"
        }
      ]
    }
  },
  {
    "id": "bm-sci-089",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดาวฤกษ์ที่มีอุณหภูมิผิวสูงที่สุดจะมีสีใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สีแดง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สีเหลือง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สีขาว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สีน้ำเงิน",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "ดาวฤกษ์สีน้ำเงินมีอุณหภูมิผิวสูงที่สุด (> 25,000 K) ส่วนสีแดงมีอุณหภูมิต่ำสุด",
      "trickTip": "💡 น้ำเงิน (ร้อนสุด) > ขาว > เหลือง > แดง (เย็นสุด)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "ดาวฤกษ์สีน้ำเงินมีอุณหภูมิผิวสูงที่สุด (> 25,000 K) ส่วนสีแดงมีอุณหภูมิต่ำสุด"
        }
      ]
    }
  },
  {
    "id": "bm-sci-090",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การที่โลกหมุนรอบตัวเองจากทิศตะวันตกไปทิศตะวันออกทำให้เกิดปรากฏการณ์ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ฤดูกาลทั้ง 4",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กลางวันและกลางคืน และการขึ้น-ตกของดวงดาว",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ข้างขึ้นข้างแรม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "น้ำขึ้นน้ำลง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การหมุนรอบตัวเองของโลกทำให้เห็นดวงอาทิตย์และดวงดาวขึ้นทางทิศตะวันออกและตกทางทิศตะวันตก",
      "trickTip": "💡 หมุนรอบตัวเอง = กลางวันกลางคืน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "การหมุนรอบตัวเองของโลกทำให้เห็นดวงอาทิตย์และดวงดาวขึ้นทางทิศตะวันออกและตกทางทิศตะวันตก"
        }
      ]
    }
  },
  {
    "id": "bm-sci-091",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แถบดาวเคราะห์น้อย (Asteroid Belt) อยู่ระหว่างวงโคจรของดาวเคราะห์คู่ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "โลกกับดาวอังคาร",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ดาวอังคารกับดาวพฤหัสบดี",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดาวพฤหัสบดีกับดาวเสาร์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ดาวเสาร์กับดาวยูเรนัส",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อยู่ระหว่างวงโคจรของดาวอังคารและดาวพฤหัสบดี",
      "trickTip": "💡 แถบดาวเคราะห์น้อย = อังคาร กับ พฤหัสบดี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "อยู่ระหว่างวงโคจรของดาวอังคารและดาวพฤหัสบดี"
        }
      ]
    }
  },
  {
    "id": "bm-sci-092",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แก๊สเรือนกระจกหลักที่เป็นสาเหตุสำคัญของภาวะโลกร้อนคือแก๊สใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แก๊สมีเทน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แก๊สคาร์บอนไดออกไซด์ ($CO_2$)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แก๊สโอโซน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แก๊สไนตรัสออกไซด์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$CO_2$ จากการเผาไหม้เชื้อเพลิงฟอสซิลเป็นตัวการหลัก",
      "trickTip": "💡 CO2 = ก๊าซเรือนกระจกตัวหลัก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "$CO_2$ จากการเผาไหม้เชื้อเพลิงฟอสซิลเป็นตัวการหลัก"
        }
      ]
    }
  },
  {
    "id": "bm-sci-093",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "การเกิดข้างขึ้น-ข้างแรม (Moon Phases) เกิดจากสาเหตุใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "โลกบังแสงจากดวงอาทิตย์ที่ส่องไปยังดวงจันทร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ดวงจันทร์โคจรรอบโลกทำให้มุมมองด้านสว่างที่หันมายังโลกเปลี่ยนไป",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดวงอาทิตย์ดับเป็นบางช่วง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เมฆบดบังดวงจันทร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตำแหน่งของดวงจันทร์เปลี่ยนไปตามการโคจรรอบโลก",
      "trickTip": "💡 ดวงจันทร์โคจรรอบโลก = ข้างขึ้นข้างแรม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "ตำแหน่งของดวงจันทร์เปลี่ยนไปตามการโคจรรอบโลก"
        }
      ]
    }
  },
  {
    "id": "bm-sci-094",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ฝนกรด (Acid Rain) เกิดจากแก๊สใดในอากาศรวมตัวกับละอองน้ำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$SO_2$ (ซัลเฟอร์ไดออกไซด์) และ $NO_x$ (ออกไซด์ของไนโตรเจน)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$CO_2$ และ $O_2$",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$CFCs$ และ $CH_4$",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "$H_2$ และ $He$",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "$SO_2$ และ $NO_2$ รวมตัวกับน้ำเกิดกรดซัลฟิวริกและกรดไนทริก",
      "trickTip": "💡 SO2 และ NOx = สาเหตุฝนกรด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "$SO_2$ และ $NO_2$ รวมตัวกับน้ำเกิดกรดซัลฟิวริกและกรดไนทริก"
        }
      ]
    }
  },
  {
    "id": "bm-sci-095",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เครื่องมือใดใช้วัดความกดอากาศ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เทอร์โมมิเตอร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "บารอมิเตอร์ (Barometer)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แอนีโมมิเตอร์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไฮโกรมิเตอร์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "บารอมิเตอร์ใช้วัดความกดอากาศ",
      "trickTip": "💡 บารอมิเตอร์ = วัดความกดอากาศ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "บารอมิเตอร์ใช้วัดความกดอากาศ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-096",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ซากดึกดำบรรพ์ (Fossil) มักพบในหินประเภทใดมากที่สุด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "หินอัคนีแทรกซอน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "หินอัคนีพุ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "หินตะกอน (หินชั้น)",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "หินแปร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หินตะกอนสะสมตัวทับถมซากสิ่งมีชีวิตโดยไม่ถูกหลอมละลาย",
      "trickTip": "💡 ฟอสซิล = หินตะกอน/หินชั้น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "หินตะกอนสะสมตัวทับถมซากสิ่งมีชีวิตโดยไม่ถูกหลอมละลาย"
        }
      ]
    }
  },
  {
    "id": "bm-sci-097",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ฤดูกาลของโลกเกิดขึ้นจากปัจจัยใดเป็นสำคัญ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ระยะห่างของโลกจากดวงอาทิตย์ที่เปลี่ยนไป",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แกนโลกเอียง $23.5^\\circ$ ขณะโคจรรอบดวงอาทิตย์",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ความเร็วในการหมุนรอบตัวเองของโลก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเกิดจุดดับบนดวงอาทิตย์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แกนโลกเอียงทำให้แต่ละซีกโลกได้รับแสงแดดไม่เท่ากันตลอดปี",
      "trickTip": "💡 แกนโลกเอียง 23.5° โคจรรอบดวงอาทิตย์ = ฤดูกาล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "แกนโลกเอียงทำให้แต่ละซีกโลกได้รับแสงแดดไม่เท่ากันตลอดปี"
        }
      ]
    }
  },
  {
    "id": "bm-sci-098",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ดาวศุกร์สว่างมากที่สุดบนท้องฟ้าเวลาเช้ามืดทางทิศตะวันออก เรียกว่าอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ดาวประกายพรึก (ดาวรุ่ง)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ดาวประจำเมือง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ดาวเหนือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ดาวหาง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เช้ามืดทิศตะวันออก = ดาวประกายพรึก, หัวค่ำทิศตะวันตก = ดาวประจำเมือง",
      "trickTip": "💡 เช้ามืด = ประกายพรึก / หัวค่ำ = ประจำเมือง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "เช้ามืดทิศตะวันออก = ดาวประกายพรึก, หัวค่ำทิศตะวันตก = ดาวประจำเมือง"
        }
      ]
    }
  },
  {
    "id": "bm-sci-099",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "แร่ชนิดใดมีความแข็งมากที่สุดตามมาตราโมห์ส (Mohs Scale)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คอรันดัม (ทับทิม/ไพลิน)",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เพชร (Diamond)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ควอตซ์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โทแพซ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เพชรมีความแข็งระดับ 10 ตามมาตราโมห์ส แข็งที่สุดในธรรมชาติ",
      "trickTip": "💡 เพชร = แข็งที่สุด (ระดับ 10)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "เพชรมีความแข็งระดับ 10 ตามมาตราโมห์ส แข็งที่สุดในธรรมชาติ"
        }
      ]
    }
  },
  {
    "id": "bm-sci-100",
    "subjectId": "science",
    "topicId": "sci-earth-space",
    "topicName": "โลก ดาราศาสตร์ และอวกาศ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "โลกและดาราศาสตร์",
      "อวกาศ"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ปรากฏการณ์เอลนีโญ (El Niño) ส่งผลกระทบต่อภูมิภาคเอเชียตะวันออกเฉียงใต้และไทยอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เกิดฝนตกชุกและน้ำท่วมหนัก",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เกิดภาวะแห้งแล้งและฝนทิ้งช่วงผิดปกติ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เกิดหิมะตกในฤดูหนาว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ไม่มีผลกระทบใดๆ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เอลนีโญทำให้อุณหภูมิมหาสมุทรแปซิฟิกฝั่งตะวันออกอุ่นขึ้น ฝั่งเอเชียจึงแห้งแล้ง",
      "trickTip": "💡 เอลนีโญ = แล้ง / ลานีญา = ฝนชุก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักการทางดาราศาสตร์และธรณีวิทยา",
          "content": "เอลนีโญทำให้อุณหภูมิมหาสมุทรแปซิฟิกฝั่งตะวันออกอุ่นขึ้น ฝั่งเอเชียจึงแห้งแล้ง"
        }
      ]
    }
  }
];
