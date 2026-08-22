import { Question } from '@/types/question';

/**
 * คลังข้อสอบภาษาไทย 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา
 */

export const BENCHAMA_THAI_QUESTIONS: Question[] = [
  {
    "id": "bm-thai-001",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'คำสมาสแบบมีสนธิ' ทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภูมิศาสตร์, ประวัติศาสตร์",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "วิทยาลัย, มหรรณพ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ผลไม้, กิจการ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ราชการ, สรรพสิ่ง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วิทยาลัย (วิทยา+อาลัย) และ มหรรณพ (มหา+อรรณพ) มีการเชื่อมเสียงสระ",
      "trickTip": "💡 สมาสชน สนธิเชื่อม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "วิทยาลัย (วิทยา+อาลัย) และ มหรรณพ (มหา+อรรณพ) มีการเชื่อมเสียงสระ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-002",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำในข้อใดเป็น 'คำเป็น' ทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กบด, สด, ปด",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "แม่, กอง, นคร",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "บท, กวี, รัก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตาก, แดด, ร้อน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สะกดในแม่กง กน กม เกย เกอว หรือสระเสียงยาวในแม่ ก กา",
      "trickTip": "💡 คำเป็น = นมยวง และสระเสียงยาว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "สะกดในแม่กง กน กม เกย เกอว หรือสระเสียงยาวในแม่ ก กา"
        }
      ]
    }
  },
  {
    "id": "bm-thai-003",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นคำยืมที่มาจาก 'ภาษาเขมร' ทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ถนน, จมูก, เสวย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "บะหมี่, เก้าอี้, โต๊ะ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ซอฟต์แวร์, คลินิก, ฟุตบอล",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กุหลาบ, คาราวาน, สบู่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ถนน, จมูก, เสวย เป็นคำยืมภาษาเขมร มักขึ้นต้นด้วย สระอำ, บัง, บัน, บำ หรือมีอักษรนำ",
      "trickTip": "💡 เขมร = ถนน จมูก เสวย ตรวจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ถนน, จมูก, เสวย เป็นคำยืมภาษาเขมร มักขึ้นต้นด้วย สระอำ, บัง, บัน, บำ หรือมีอักษรนำ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-004",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ 'คำราชาศัพท์' สำหรับพระมหากษัตริย์ได้ถูกต้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทรงพระราชสมภพ, สวรรคต",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทรงสิ้นพระชนม์, ประสูติ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ถึงแก่อสัญกรรม, นอน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "มรณภาพ, ทรงฉัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระมหากษัตริย์ใช้ พระราชสมภพ (เกิด) และ สวรรคต (ตาย)",
      "trickTip": "💡 กษัตริย์ = พระราชสมภพ, เสด็จสวรรคต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "พระมหากษัตริย์ใช้ พระราชสมภพ (เกิด) และ สวรรคต (ตาย)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-005",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ประโยคในข้อใดจัดเป็น 'ประโยคความซ้อน (สังกรประโยค)'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พ่อและแม่ไปทำงานที่กรุงเทพฯ",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คุณครูชอบนักเรียนที่ตั้งใจเรียนสม่ำเสมอ",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "น้องร้องไห้แต่พี่หัวเราะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ฝนตกหนักน้ำจึงท่วมขัง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีประโยคย่อย 'ที่ตั้งใจเรียนสม่ำเสมอ' ขยายคำว่านักเรียน เชื่อมด้วย 'ที่'",
      "trickTip": "💡 ประโยคซ้อน มีตัวเชื่อม 'ที่ ซึ่ง อัน ผู้ ว่า ให้'",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มีประโยคย่อย 'ที่ตั้งใจเรียนสม่ำเสมอ' ขยายคำว่านักเรียน เชื่อมด้วย 'ที่'"
        }
      ]
    }
  },
  {
    "id": "bm-thai-006",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'มัจจุราช' เกิดจากการสมาสคำบาลี-สันสกฤตคู่ใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มัจจุ + ราช",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "มัจฉา + อุราช",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มฤตยู + ราช",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "มัต + จุราช",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มัจจุ (ความตาย) + ราช (ราชา) = มัจจุราช (พญามัจจุราช)",
      "trickTip": "💡 มัจจุ (ความตาย) + ราช",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มัจจุ (ความตาย) + ราช (ราชา) = มัจจุราช (พญามัจจุราช)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-007",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดมีอักษรควบไม่แท้ทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กวาง, ขวาน, พลาด",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "จริง, ไซร้, เศร้า",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กราบ, ปลอบ, ตราด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ครู, พระ, กลอง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จริง (ออกเสียง จ), ไซร้ (ออกเสียง ซ), เศร้า (ออกเสียง ซ) ออกเสียงเฉพาะพยัญชนะต้นตัวแรก",
      "trickTip": "💡 ควบไม่แท้ = ไม่ออกเสียง ร หรือออกเสียงเป็น ซ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "จริง (ออกเสียง จ), ไซร้ (ออกเสียง ซ), เศร้า (ออกเสียง ซ) ออกเสียงเฉพาะพยัญชนะต้นตัวแรก"
        }
      ]
    }
  },
  {
    "id": "bm-thai-008",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำในข้อใดใช้ลักษณนามว่า 'ปื้น' ได้ถูกต้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เลื่อย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ร่ม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ช้างป่า",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แห",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เลื่อย 1 ปื้น (ถ้าเป็นร่มใช้ คัน, แหใช้ ปาก, ช้างป่าใช้ ตัว/โขลง)",
      "trickTip": "💡 เลื่อย = ปื้น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เลื่อย 1 ปื้น (ถ้าเป็นร่มใช้ คัน, แหใช้ ปาก, ช้างป่าใช้ ตัว/โขลง)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-009",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ 'เครื่องหมายไม้ยมก (ๆ)' ได้ถูกต้องตามหลักภาษา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "นายกๆ แถลงข่าว",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เขาวิ่งเร็วๆ เข้าเส้นชัย",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "วันๆ หนึ่งเขาไม่ทำอะไร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ที่ๆ ดินแปลงนี้สวย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไม้ยมกใช้ซ้ำคำขยายกริยา เช่น เร็วๆ, สวยๆ (ห้ามซ้ำคำคนละหน้าที่)",
      "trickTip": "💡 ซ้ำคำบอกน้ำหนัก/อาการ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ไม้ยมกใช้ซ้ำคำขยายกริยา เช่น เร็วๆ, สวยๆ (ห้ามซ้ำคำคนละหน้าที่)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-010",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำราชาศัพท์หมวดเครื่องใช้ 'พระฉาย' หมายถึงสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "หวี",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กระจกเงา",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "แว่นตา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "รองเท้า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระฉาย แปลว่า กระจกส่องหน้า (ถ้าพระสาง แปลว่า หวี, พระเนตร แปลว่า ตา)",
      "trickTip": "💡 พระฉาย = กระจกเงา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "พระฉาย แปลว่า กระจกส่องหน้า (ถ้าพระสาง แปลว่า หวี, พระเนตร แปลว่า ตา)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-011",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'โทรทัศน์' เป็นคำที่สร้างขึ้นด้วยวิธีการใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คำซ้อน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คำประสม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คำสมาส",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คำสนธิ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โทร (ไกล) + ทัศน์ (การมองเห็น) เป็นคำสมาสที่แปลจากบาลี-สันสกฤต",
      "trickTip": "💡 โทร + ทัศน์ = คำสมาส",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "โทร (ไกล) + ทัศน์ (การมองเห็น) เป็นคำสมาสที่แปลจากบาลี-สันสกฤต"
        }
      ]
    }
  },
  {
    "id": "bm-thai-012",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'ประโยคความรวม (สม Nob/อเนกรรถประโยค)' ที่มีเนื้อหาขัดแย้งกัน",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เขารวยมากแต่ตระหนี่ถี่เหนียว",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เพราะเขาขยันเขาจึงสอบผ่าน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทั้งพ่อและแม่รักลูกทุกคน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เธอจะกินข้าวหรือก๋วยเตี๋ยว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เชื่อมด้วยคำสันธาน 'แต่' แสดงความขัดแย้ง",
      "trickTip": "💡 ขัดแย้งกัน = แต่, แต่ทว่า",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เชื่อมด้วยคำสันธาน 'แต่' แสดงความขัดแย้ง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-013",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'ก๋วยเตี๋ยว, เกาลัด, ตะหลิว' เป็นคำยืมมาจากภาษาใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภาษาเขมร",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภาษาจีน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาษาชวา-มลายู",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภาษาบาลี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เป็นคำยืมภาษาจีนที่เกี่ยวกับอาหารและเครื่องครัว",
      "trickTip": "💡 อาหาร/ค้าขาย = ภาษาจีน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เป็นคำยืมภาษาจีนที่เกี่ยวกับอาหารและเครื่องครัว"
        }
      ]
    }
  },
  {
    "id": "bm-thai-014",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำซ้ำในข้อใดแสดงความหมายเป็น 'พหูพจน์'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เด็กๆ วิ่งเล่นในสนาม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เสื้อตัวนี้สีแดงๆ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พูดเบาๆ หน่อย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "นั่งอยู่ข้างๆ ฉัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เด็กๆ หมายถึง เด็กหลายคน (แสดงพหูพจน์)",
      "trickTip": "💡 เด็กๆ = พหูพจน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เด็กๆ หมายถึง เด็กหลายคน (แสดงพหูพจน์)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-015",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดสะกดคำได้ถูกต้องทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผูกพัน, อนุญาต, กะเพรา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ผูกพันธ์, อนุณาต, กะเพรา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ผูกพัน, อนุญาต, กระเพรา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ผูกพันธ์, อนุญาต, กะเพราะ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผูกพัน (ไม่มี ธ์), อนุญาต (ไม่มี ิ), กะเพรา (ไม่มี ร ที่ กะ)",
      "trickTip": "💡 จำ: ผูกพัน, อนุญาต, กะเพรา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ผูกพัน (ไม่มี ธ์), อนุญาต (ไม่มี ิ), กะเพรา (ไม่มี ร ที่ กะ)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-016",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'ปาน' ในสำนวน 'งามปานเทพอัปสร' ทำหน้าที่เป็นคำชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คำนาม",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คำสรรพนาม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คำบุพบท",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คำสันธาน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำบุพบทบอกการเปรียบเทียบ (ปาน, ราว, ดั่ง, ดุจ)",
      "trickTip": "💡 ปาน = บุพบทเปรียบเทียบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "คำบุพบทบอกการเปรียบเทียบ (ปาน, ราว, ดั่ง, ดุจ)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-017",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'คำซ้อนเพื่อความหมาย' ทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "บ้านเรือน, เสื่อสาด, ไร่นา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "งูๆ ปลาๆ, กล้วยๆ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กระโดดโลดเต้น, ร้องรำทำเพลง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เก่งกาจ, สวยสดงดงาม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "บ้านเรือน, เสื่อสาด, ไร่นา นำคำที่มีความหมายเหมือนหรือคล้ายกันมารวมกัน",
      "trickTip": "💡 คำซ้อน = ความหมายคล้ายกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "บ้านเรือน, เสื่อสาด, ไร่นา นำคำที่มีความหมายเหมือนหรือคล้ายกันมารวมกัน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-018",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "เสียงวรรณยุกต์ของคำว่า 'มาร์เก็ตติ้ง' ตรงกับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตรี, ตรี, เอก",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "โท, เอก, โท",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตรี, เอก, โท",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "สามัญ, เอก, โท",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มาร์ (ตรี/โทตามบริบท), เก็ต (เอก), ติ้ง (โท)",
      "trickTip": "💡 วิเคราะห์เสียงวรรณยุกต์คำทับศัพท์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มาร์ (ตรี/โทตามบริบท), เก็ต (เอก), ติ้ง (โท)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-019",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ประโยค 'ตำรวจจับโจรผู้ร้าย' มีโครงสร้างตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ประธาน + กริยา",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ประธาน + กริยา + กรรม",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ประธาน + กริยา + ส่วนเติมเต็ม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ประธาน + ส่วนขยายประธาน + กริยา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตำรวจ (ประธาน) + จับ (กริยา) + โจรผู้ร้าย (กรรม)",
      "trickTip": "💡 ประธาน + กริยา + กรรม (อกรรมกริยา/สกรรมกริยา)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ตำรวจ (ประธาน) + จับ (กริยา) + โจรผู้ร้าย (กรรม)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-020",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำราชาศัพท์ของคำว่า 'กิน' สำหรับพระสงฆ์คือคำใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เสวย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ฉัน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "รับประทาน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "บริโภค",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พระสงฆ์ใช้คำว่า 'ฉัน' (ถ้ากษัตริย์ใช้ 'เสวย')",
      "trickTip": "💡 พระสงฆ์ = ฉัน, กษัตริย์ = เสวย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "พระสงฆ์ใช้คำว่า 'ฉัน' (ถ้ากษัตริย์ใช้ 'เสวย')"
        }
      ]
    }
  },
  {
    "id": "bm-thai-021",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำยืมภาษาชวา-มลายูในข้อใดปรากฏในวรรณคดีเรื่องอิเหนา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "บุษบา, บุหลัน, กุญชร",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ระเด่น, บุษบา, อิเหนา",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มโนราห์, กากี, วันทอง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กริช, ซากุระ, กิโมโน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ระเด่น, บุษบา, อิเหนา มาจากภาษาชวา",
      "trickTip": "💡 อิเหนา = ภาษาชวา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ระเด่น, บุษบา, อิเหนา มาจากภาษาชวา"
        }
      ]
    }
  },
  {
    "id": "bm-thai-022",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นคำนามประเภท 'อาการนาม' ที่ถูกต้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การบ้าน, การเรือน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเรียน, ความดี",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ความวัว, ความควาย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การไฟฟ้า, การประปา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การ/ความ นำหน้าคำกริยาหรือคำวิเศษณ์ เช่น การเรียน, ความดี",
      "trickTip": "💡 อาการนาม = การ/ความ + กริยา/วิเศษณ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "การ/ความ นำหน้าคำกริยาหรือคำวิเศษณ์ เช่น การเรียน, ความดี"
        }
      ]
    }
  },
  {
    "id": "bm-thai-023",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'เบ็ญจะมะ' ในชื่อโรงเรียนเบ็ญจะมะมหาราช มีความหมายตรงกับเลขใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เลข 3",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เลข 5",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เลข 7",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เลข 9",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เบญจ / เบ็ญจะ แปลว่า ห้า (๕) หมายถึง รัชกาลที่ 5",
      "trickTip": "💡 เบญจ/เบ็ญจะ = 5",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เบญจ / เบ็ญจะ แปลว่า ห้า (๕) หมายถึง รัชกาลที่ 5"
        }
      ]
    }
  },
  {
    "id": "bm-thai-024",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำในข้อใดเป็น 'คำประสม' ทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พัดลม, ตู้เย็น, แม่น้ำ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คนเดิน, นกบิน, หมาเห่า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "มะม่วง, มะละกอ, มะพร้าว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "นาฬิกา, ราชา, กากี",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พัดลม, ตู้เย็น, แม่น้ำ นำคำมูลที่มีความหมายต่างกันมารวมเกิดความหมายใหม่",
      "trickTip": "💡 คำประสม = เกิดความหมายใหม่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "พัดลม, ตู้เย็น, แม่น้ำ นำคำมูลที่มีความหมายต่างกันมารวมเกิดความหมายใหม่"
        }
      ]
    }
  },
  {
    "id": "bm-thai-025",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ขี่ช้างจับตั๊กแตน' มีความหมายตรงกับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทำงานใหญ่แต่ได้ผลประโยชน์นิดเดียว ไม่คุ้มค่า",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทำการใหญ่โดยไม่กลัวอันตราย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ลงทุนน้อยแต่ได้กำไรมาก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ทำอะไรเกินฐานะ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ลงทุนหรือลงแรงมากแต่ได้ผลตอบแทนเพียงเล็กน้อย",
      "trickTip": "💡 ขี่ช้างจับตั๊กแตน = ได้ไม่คุ้มเสีย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ลงทุนหรือลงแรงมากแต่ได้ผลตอบแทนเพียงเล็กน้อย"
        }
      ]
    }
  },
  {
    "id": "bm-thai-026",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'แพทย์' ยืมมาจากภาษาใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "บาลี",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สันสกฤต",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เขมร",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อังกฤษ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มาจากภาษาสันสกฤต (ถ้าบาลีคือ 'เวชช' หรือ เวช)",
      "trickTip": "💡 มี ศ ษ ฤ รร หรือควบกล้ำ = สันสกฤต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มาจากภาษาสันสกฤต (ถ้าบาลีคือ 'เวชช' หรือ เวช)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-027",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ 'ไม้ยมก' ผิดหลักเกณฑ์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เขากินข้าวๆ อยู่",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คุณครูสอนเด็กๆ อย่างเมตตา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "นานๆ เจอกันที",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ในแต่ละวันๆ มีเรื่องมากมาย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ห้ามใช้ไม้ยมกในกรณีที่เป็นคำคนละประโยคหรือคนละหน้าที่ เช่น กินข้าว / ข้าวต้ม",
      "trickTip": "💡 ห้ามใช้ข้ามประโยค",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ห้ามใช้ไม้ยมกในกรณีที่เป็นคำคนละประโยคหรือคนละหน้าที่ เช่น กินข้าว / ข้าวต้ม"
        }
      ]
    }
  },
  {
    "id": "bm-thai-028",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'มหาราช' ในประวัติศาสตร์ไทย มักเฉลิมพระเกียรติกษัตริย์ที่ทรงมีพระปรีชาสามารถ เป็นคำชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คำสมาส",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คำสนธิ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คำประสม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คำมูล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มหา (ยิ่งใหญ่) + ราช (ราชา) = มหาราช (คำสมาส)",
      "trickTip": "💡 มหา + ราช = คำสมาส",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มหา (ยิ่งใหญ่) + ราช (ราชา) = มหาราช (คำสมาส)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-029",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'บันดาล, บันได, บันทึก, บันเทิง, บันลือ' ใช้ 'บัน' ตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คำไทยแท้ทั้งหมด",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คำที่บัญญัติให้เขียน บัน ในภาษาไทย",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คำยืมบาลี",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คำยืมอังกฤษ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เป็นคำโบราณ 5 คำที่ใช้ 'บัน' ตามหลักภาษาไทย",
      "trickTip": "💡 บันดาล บันได บันทึก บันเทิง บันลือ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เป็นคำโบราณ 5 คำที่ใช้ 'บัน' ตามหลักภาษาไทย"
        }
      ]
    }
  },
  {
    "id": "bm-thai-030",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'ประโยคบอกเล่า'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ใครมาเคาะประตู",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ฉันชอบอ่านวรรณคดีไทย",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อย่าส่งเสียงดังในห้องสมุด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โปรดถอดรองเท้า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "บอกเรื่องราวหรือแจ้งข้อความให้ทราบ",
      "trickTip": "💡 ประโยคบอกเล่า = แจ้งให้ทราบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "บอกเรื่องราวหรือแจ้งข้อความให้ทราบ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-031",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'กรรมกร' อ่านออกเสียงอย่างไรตามหลักภาษา",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กำ-มะ-กอน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กำ-กอน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "กัม-มะ-กอน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "กัม-กอน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อ่านแบบสมาสมีเสียงสระอะกึ่งเสียง: กำ-มะ-กอน",
      "trickTip": "💡 กรรมกร อ่าน กำ-มะ-กอน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "อ่านแบบสมาสมีเสียงสระอะกึ่งเสียง: กำ-มะ-กอน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-032",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'อักษรนำ' ทุกคำ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ขนม, ฉลาม, ตลาด",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กราบ, ปลอบ, พลอย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สร้าง, เสริม, จริง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ทราบ, ไทร, ทราย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ขนม (ขะ-หนม), ฉลาม (ฉะ-หลาม), ตลาด (ตะ-หลาด) ออกเสียงสองพยางค์มี ห นำ",
      "trickTip": "💡 อักษรนำ = อ่านมีเสียง ห นำพยางค์หลัง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ขนม (ขะ-หนม), ฉลาม (ฉะ-หลาม), ตลาด (ตะ-หลาด) ออกเสียงสองพยางค์มี ห นำ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-033",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'อุทกภัย' หมายถึงภัยธรรมชาติชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ภัยจากไฟไหม้",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ภัยจากน้ำท่วม",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภัยจากลมพายุ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ภัยจากแผ่นดินไหว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อุทก แปลว่า น้ำ ➔ อุทกภัย คือ ภัยที่เกิดจากน้ำท่วม",
      "trickTip": "💡 อุทก = น้ำ, วาต = ลม, อัคคี = ไฟ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "อุทก แปลว่า น้ำ ➔ อุทกภัย คือ ภัยที่เกิดจากน้ำท่วม"
        }
      ]
    }
  },
  {
    "id": "bm-thai-034",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ 'คำสุภาพ' แทนคำสามัญได้ถูกต้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กล้วยไข่ -> กล้วยเปลือกบาง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ฟักทอง -> ฟักเหลือง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ผักบุ้ง -> ผักทอดยอด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ถูกทุกข้อ",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "ทุกข้อเป็นคำราชาศัพท์/คำสุภาพของผลไม้และพืชผักไทย",
      "trickTip": "💡 คำสุภาพ: ฟักเหลือง, ผักทอดยอด, กล้วยเปลือกบาง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ทุกข้อเป็นคำราชาศัพท์/คำสุภาพของผลไม้และพืชผักไทย"
        }
      ]
    }
  },
  {
    "id": "bm-thai-035",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำสรรพนามบุรุษที่ 1 ในข้อใดใช้แสดงความถ่อมตนเมื่อพูดกับผู้ใหญ่",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ข้าพเจ้า",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กระผม / ดิฉัน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เรา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "หนู",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กระผม / ดิฉัน ใช้พูดกับผู้ใหญ่หรือในพิธีการ",
      "trickTip": "💡 บุรุษที่ 1 สุภาพ = กระผม/ดิฉัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "กระผม / ดิฉัน ใช้พูดกับผู้ใหญ่หรือในพิธีการ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-036",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'ประโยคคำสั่ง'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ห้ามเดินลัดสนาม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ช่วยหยิบปากกาให้หน่อย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เธอจะไปไหน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "วันนี้อากาศดีจัง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีคำว่า 'ห้าม' หรือ 'จง' แสดงการบังคับสั่งการ",
      "trickTip": "💡 ห้าม / จง = คำสั่ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มีคำว่า 'ห้าม' หรือ 'จง' แสดงการบังคับสั่งการ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-037",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'กาลเทศะ' แปลว่าอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เวลาและสถานที่ที่เหมาะสม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ความสุขและความทุกข์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเดินทางไกล",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ประเพณีโบราณ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กาล (เวลา) + เทศะ (สถานที่)",
      "trickTip": "💡 กาล = เวลา, เทศะ = สถานที่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "กาล (เวลา) + เทศะ (สถานที่)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-038",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำคู่ใดเป็น 'คำพ้องรูป' (เขียนเหมือนกันแต่อ่านต่างกัน)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพลา (เพ-ลา / เพลา), เพลา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "กาน, การ, กาล",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "จันทร์, จัน, จันทน์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "หน้า, น่า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เพลา อ่านว่า เพ-ลา (เวลา) หรือ เพลา (เบาลง/เพลารถ)",
      "trickTip": "💡 พ้องรูป = เขียนเหมือน แต่อ่านต่าง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "เพลา อ่านว่า เพ-ลา (เวลา) หรือ เพลา (เบาลง/เพลารถ)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-039",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำคู่ใดเป็น 'คำพ้องเสียง' (อ่านเหมือนกันแต่เขียนต่างกัน)",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "กาล, กานต์, การณ์",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ขัน (ขันน้ำ / ไก่ขัน)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ตา (ดวงตา / คุณตา)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "มัน (มันเทศ / น้ำมัน)",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กาล, กานต์, การณ์ อ่านออกเสียง 'กาน' เหมือนกันแต่สะกดต่างกัน",
      "trickTip": "💡 พ้องเสียง = เสียงเหมือน เขียนต่าง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "กาล, กานต์, การณ์ อ่านออกเสียง 'กาน' เหมือนกันแต่สะกดต่างกัน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-040",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'คำเป็น' ทั้งหมด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "มอง, ดู, ดาว, บน, ฟ้า",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คิด, ถึง, คน, รัก, มาก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "นก, บิน, ผ่าน, ไป, มา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "มด, กัด, เจ็บ, นัก, หนา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มอง (แม่กง), ดู (สระอูยาว), ดาว (แม่เกอว), บน (แม่กน), ฟ้า (สระอายาว)",
      "trickTip": "💡 คำเป็นทุกคำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มอง (แม่กง), ดู (สระอูยาว), ดาว (แม่เกอว), บน (แม่กน), ฟ้า (สระอายาว)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-041",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'ราชดำเนิน' เป็นคำประเภทใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คำสมาส",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คำประสม",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คำสนธิ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คำซ้อน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ราช (บาลี/สันสกฤต) + ดำเนิน (เขมร) ไม่สามารถสมาสกันได้ จึงจัดเป็นคำประสม",
      "trickTip": "💡 ภาษาบาลี+เขมร = คำประสม ไม่ใช่สมาส",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ราช (บาลี/สันสกฤต) + ดำเนิน (เขมร) ไม่สามารถสมาสกันได้ จึงจัดเป็นคำประสม"
        }
      ]
    }
  },
  {
    "id": "bm-thai-042",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ 'เครื่องหมายอัญประกาศ (\" \")' ได้ถูกต้อง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ใช้เน้นคำหรือข้อความที่เป็นคำพูด",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ใช้ละข้อความตอนท้าย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ใช้บอกความหมายของคำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ใช้แสดงความตกใจ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อัญประกาศ (เครื่องหมายคำพูด) ใช้คร่อมบทสนทนาหรือข้อความที่ยกมา",
      "trickTip": "💡 อัญประกาศ = เครื่องหมายคำพูด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "อัญประกาศ (เครื่องหมายคำพูด) ใช้คร่อมบทสนทนาหรือข้อความที่ยกมา"
        }
      ]
    }
  },
  {
    "id": "bm-thai-043",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'ทัณฑฆาต' ($\\,^\\text{์}\\,$) มีหน้าที่อย่างไรในภาษาไทย",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ใช้บังคับเสียงสั้น",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ใช้ฆ่าเสียงพยัญชนะหรือสระที่ไม่ต้องการออกเสียง (ตัวการันต์)",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ใช้เชื่อมคำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ใช้บอกเสียงวรรณยุกต์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทัณฑฆาตใช้กำกับบนตัวอักษรเพื่อไม่ให้ออกเสียงตัวนั้น",
      "trickTip": "💡 ทัณฑฆาต = ไม้ฆ่าเสียง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ทัณฑฆาตใช้กำกับบนตัวอักษรเพื่อไม่ให้ออกเสียงตัวนั้น"
        }
      ]
    }
  },
  {
    "id": "bm-thai-044",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'พงศาวดาร' มีความหมายตรงกับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เรื่องราวประวัติศาสตร์เกี่ยวกับพระมหากษัตริย์และบ้านเมือง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ตำนานพื้นบ้าน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "นิทานชาดก",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "บันทึกรายรับรายจ่าย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พงศ (ตระกูล) + อวตาร = เรื่องราวประวัติศาสตร์ของกษัตริย์",
      "trickTip": "💡 พงศาวดาร = ประวัติศาสตร์กษัตริย์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "พงศ (ตระกูล) + อวตาร = เรื่องราวประวัติศาสตร์ของกษัตริย์"
        }
      ]
    }
  },
  {
    "id": "bm-thai-045",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'คำอุทานเสริมบท'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "วัดวาอาราม, หนังสือหนังหา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "โอ๊ย!, ว้าย!",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ชิชะ!, แหม!",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "โอย!, พุทโธ่!",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "วัดวาอาราม, หนังสือหนังหา เป็นคำอุทานเสริมบทเพื่อเน้นเสียงและความสละสลวย",
      "trickTip": "💡 อุทานเสริมบท = หนังสือหนังหา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "วัดวาอาราม, หนังสือหนังหา เป็นคำอุทานเสริมบทเพื่อเน้นเสียงและความสละสลวย"
        }
      ]
    }
  },
  {
    "id": "bm-thai-046",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'มโนราห์' เป็นคำที่ได้รับอิทธิพลมาจากภาษาใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "บาลี-สันสกฤต",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เขมร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "จีน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "อังกฤษ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มโนหรา / มโนราห์ มาจากภาษาสันสกฤต แปลว่า ผู้มีเสน่ห์จับใจ",
      "trickTip": "💡 มโนราห์ = สันสกฤต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "มโนหรา / มโนราห์ มาจากภาษาสันสกฤต แปลว่า ผู้มีเสน่ห์จับใจ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-047",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ 'เครื่องหมายปรัศนี (?)' ตามสากลนิยม",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ประโยคคำถาม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ประโยคปฏิเสธ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ประโยคคำสั่ง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ประโยคบอกเล่า",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ปรัศนี (Question Mark) ใช้ท้ายประโยคคำถาม",
      "trickTip": "💡 ปรัศนี = เครื่องหมายคำถาม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ปรัศนี (Question Mark) ใช้ท้ายประโยคคำถาม"
        }
      ]
    }
  },
  {
    "id": "bm-thai-048",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'อักษรควบแท้' ออกเสียงอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ออกเสียงพยัญชนะต้นควบกับ ร ล ว พร้อมกันกลมกลืน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ออกเสียงเฉพาะพยัญชนะตัวแรก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เปลี่ยนเสียงเป็น ซ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ออกเสียงเป็นสองพยางค์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ออกเสียงพยัญชนะต้นและ ร, ล, ว พร้อมกันในพยางค์เดียว",
      "trickTip": "💡 ควบแท้ = กล้ำเสียงพร้อมกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ออกเสียงพยัญชนะต้นและ ร, ล, ว พร้อมกันในพยางค์เดียว"
        }
      ]
    }
  },
  {
    "id": "bm-thai-049",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'ศิลาจารึก' มีความหมายว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "แผ่นหินที่เขียนหรือสลักเป็นตัวอักษรบันทึกเรื่องราว",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "หนังสือใบลาน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ภาพวาดฝาผนัง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เครื่องปั้นดินเผา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ศิลา (หิน) + จารึก (สลักข้อความ)",
      "trickTip": "💡 ศิลาจารึก = สลักบนหิน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "ศิลา (หิน) + จารึก (สลักข้อความ)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-050",
    "subjectId": "thai",
    "topicId": "thai-grammar",
    "topicName": "หลักภาษาและการใช้ภาษา",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "หลักภาษา"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดคือหน้าที่ของ 'คำวิเศษณ์' ในประโยค",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทำหน้าที่เป็นประธาน",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทำหน้าที่ขยายคำนาม สรรพนาม กริยา หรือวิเศษณ์ด้วยกัน",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทำหน้าที่เชื่อมประโยค",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ทำหน้าที่แสดงอาการ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำวิเศษณ์ทำหน้าที่ขยายความเพื่อให้ชัดเจนยิ่งขึ้น",
      "trickTip": "💡 คำวิเศษณ์ = คำขยาย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "หลักภาษาไทย",
          "content": "คำวิเศษณ์ทำหน้าที่ขยายความเพื่อให้ชัดเจนยิ่งขึ้น"
        }
      ]
    }
  },
  {
    "id": "bm-thai-051",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อความ: 'การไม่อ่านหนังสือก็เหมือนกับการปิดประตูล็อคตัวเองไว้ในห้องมืด' ผู้เขียนต้องการสื่อสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การอ่านหนังสือเปิดโลกทัศน์และสร้างปัญญา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ห้องมืดเป็นอันตราย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทุกคนควรอ่านหนังสือในที่สว่าง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การอ่านทำให้เหนื่อยสายตา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เปรียบเทียบการอ่านกับการเปิดรับแสงสว่างแห่งปัญญา",
      "trickTip": "💡 ใจความสำคัญ = การอ่านเปิดโลกทัศน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "เปรียบเทียบการอ่านกับการเปิดรับแสงสว่างแห่งปัญญา"
        }
      ]
    }
  },
  {
    "id": "bm-thai-052",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดจัดเป็น 'ข้อคิดเห็น (Opinion)' ไม่ใช่ข้อเท็จจริง",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ดอยอินทนนท์เป็นยอดเขาที่สูงที่สุดในประเทศไทย",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "อาหารไทยรสชาติกลมกล่อมและอร่อยที่สุดในโลก",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "น้ำเดือดที่อุณหภูมิ 100 องศาเซลเซียสที่ระดับน้ำทะเล",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "จังหวัดอุบลราชธานีตั้งอยู่ในภาคตะวันออกเฉียงเหนือ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความอร่อยเป็นความรู้สึกส่วนบุคคล ไม่สามารถวัดเป็นข้อเท็จจริงสากลได้",
      "trickTip": "💡 อร่อยที่สุด/สวยที่สุด = ข้อคิดเห็น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ความอร่อยเป็นความรู้สึกส่วนบุคคล ไม่สามารถวัดเป็นข้อเท็จจริงสากลได้"
        }
      ]
    }
  },
  {
    "id": "bm-thai-053",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำประพันธ์: 'อันอ้อยตาลหวานลิ้นแล้วสิ้นซาก แต่ลมปากหวานหูไม่รู้หาย' ให้ข้อคิดเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คุณค่าของการพูดจาไพเราะสุภาพ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ประโยชน์ของต้นอ้อย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเลือกกินของหวาน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความรักของหนุ่มสาว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สุนทรภู่สอนให้เห็นความสำคัญของคำพูดที่อ่อนหวานจับใจ",
      "trickTip": "💡 คำพูดหวานหู = มารยาทการพูด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "สุนทรภู่สอนให้เห็นความสำคัญของคำพูดที่อ่อนหวานจับใจ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-054",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'น้ำขึ้นให้รีบตัก' มีความหมายตรงกับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เมื่อมีโอกาสดีควรรีบขวนขวายทำ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ให้เตรียมน้ำไว้ใช้ในหน้าแล้ง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อย่าปล่อยให้น้ำล้นตลิ่ง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ทำอะไรให้รวดเร็วเสมอ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีโอกาสดีเข้ามาต้องรีบฉวยไว้ทำประโยชน์",
      "trickTip": "💡 น้ำขึ้นให้รีบตัก = รีบคว้าโอกาส",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "มีโอกาสดีเข้ามาต้องรีบฉวยไว้ทำประโยชน์"
        }
      ]
    }
  },
  {
    "id": "bm-thai-055",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โวหารภาพพจน์ในข้อใดใช้ 'อุปมา (Simile)'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เธอสวยดั่งนางฟ้าจำแลง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ทหารเป็นรั้วของชาติ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คลื่นทะเลหัวเราะร่าเริง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เสียงฟ้าร้องคำรามกึกก้อง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีคำเชื่อมเปรียบเทียบ 'ดั่ง' (เหมือน, ดั่ง, คล้าย, ดุจ = อุปมา)",
      "trickTip": "💡 ดั่ง/เหมือน = อุปมา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "มีคำเชื่อมเปรียบเทียบ 'ดั่ง' (เหมือน, ดั่ง, คล้าย, ดุจ = อุปมา)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-056",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "โวหารภาพพจน์แบบ 'อุปลักษณ์ (Metaphor)' ปรากฏในข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ครูคือแม่พิมพ์ของชาติ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เขาวิ่งเร็วราวกับพายุ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ใบไม้ไหวเหมือนกำลังเต้นระบำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "น้ำตาไหลพรากดั่งสายเลือด",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ใช้คำว่า 'คือ' หรือ 'เป็น' เปรียบเทียบสิ่งหนึ่งเป็นอีกสิ่งหนึ่งโดยตรง",
      "trickTip": "💡 เป็น/คือ = อุปลักษณ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ใช้คำว่า 'คือ' หรือ 'เป็น' เปรียบเทียบสิ่งหนึ่งเป็นอีกสิ่งหนึ่งโดยตรง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-057",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'วัวหายล้อมคอก' ตรงกับพฤติกรรมในข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ติดตั้งกล้องวงจรปิดหลังจากบ้านถูกขโมยขึ้นแล้ว",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ฉีดวัคซีนป้องกันไข้หวัดใหญ่ล่วงหน้า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เก็บออมเงินไว้ใช้ยามฉุกเฉิน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ตรวจเช็กรถก่อนเดินทางไกล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เกิดความเสียหายขึ้นแล้วจึงค่อยคิดหาทางป้องกัน",
      "trickTip": "💡 เกิดเรื่องแล้วค่อยป้องกัน = วัวหายล้อมคอก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "เกิดความเสียหายขึ้นแล้วจึงค่อยคิดหาทางป้องกัน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-058",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อความ: 'ความซื่อสัตย์เป็นสมบัติของผู้ดี หากขาดความซื่อสัตย์ สังคมจะไร้ซึ่งความไว้วางใจ' สาระสำคัญคืออะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความซื่อสัตย์เป็นรากฐานสำคัญของความสงบสุขในสังคม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ผู้ดีต้องมีทรัพย์สินมาก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คนจนไม่มีความซื่อสัตย์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความไว้วางใจสร้างได้ด้วยเงิน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความซื่อสัตย์สุจริตคือคุณธรรมพื้นฐานในการอยู่ร่วมกัน",
      "trickTip": "💡 ความซื่อสัตย์ = เสาหลักสังคม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ความซื่อสัตย์สุจริตคือคุณธรรมพื้นฐานในการอยู่ร่วมกัน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-059",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ชักแม่น้ำทั้งห้า' มีความหมายว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พูดจาหว่านล้อมยกเหตุผลต่างๆ มาอ้างเพื่อให้ได้สิ่งที่ต้องการ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ท่องเที่ยวไปตามแม่น้ำสายใหญ่",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การขุดลอกคูคลอง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การทำเกษตรกรรมริมฝั่งแม่น้ำ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ยกเหตุผลมากมายมาพูดจาโน้มน้าวใจ",
      "trickTip": "💡 ชักแม่น้ำทั้งห้า = พูดหว่านล้อม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ยกเหตุผลมากมายมาพูดจาโน้มน้าวใจ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-060",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สุภาษิต 'เข้าเมืองตาหลิ่ว ต้องหลิ่วตาตาม' สอนเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การปรับตัวให้เข้ากับขนบธรรมเนียมและสิ่งแวดล้อมของท้องถิ่นนั้น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การรักษาสุขภาพดวงตา",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเลียนแบบผู้อื่นทุกเรื่อง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเดินทางท่องเที่ยว",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สอนให้รู้จักปรับตัวเคารพวัฒนธรรมท้องถิ่น",
      "trickTip": "💡 หลิ่วตาตาม = ปรับตัวตามสภาพแวดล้อม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "สอนให้รู้จักปรับตัวเคารพวัฒนธรรมท้องถิ่น"
        }
      ]
    }
  },
  {
    "id": "bm-thai-061",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นเจตนาของผู้เขียนในข้อความ: 'การทิ้งขยะไม่เป็นที่สร้างมลพิษและทำลายภาพลักษณ์ของชุมชน ขอเชิญชวนทุกท่านช่วยกันรักษาความสะอาด'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ตักเตือนและเชิญชวนให้ร่วมมือรักษาความสะอาด",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ประชดประชันคนในชุมชน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สั่งลงโทษผู้ทิ้งขยะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "รายงานข่าวประจำวัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ชี้ให้เห็นโทษและวิงวอนเชิญชวนให้ช่วยกันดูแล",
      "trickTip": "💡 เจตนา = ชวนร่วมมือรักษาความสะอาด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ชี้ให้เห็นโทษและวิงวอนเชิญชวนให้ช่วยกันดูแล"
        }
      ]
    }
  },
  {
    "id": "bm-thai-062",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ไก่งามเพราะขน คนงามเพราะแต่ง' ให้คติธรรมในเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การรู้จักดูแลเอาใจใส่บุคลิกภาพและการแต่งกายให้เหมาะสม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเลี้ยงไก่ชน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การใช้เครื่องสำอางราคาแพง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ความงามตามธรรมชาติ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คนเราจะดูดีได้ต้องรู้จักดูแลบุคลิกภาพและการประพฤติตน",
      "trickTip": "💡 คนงามเพราะแต่ง = รู้จักดูแลตนเอง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "คนเราจะดูดีได้ต้องรู้จักดูแลบุคลิกภาพและการประพฤติตน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-063",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำประพันธ์: 'ความรู้คู่เปรียบด้วย กำลัง กายแฮ สุจริตคือเกราะบัง ศาสตร์พ้อง' สอนให้ยึดมั่นในสิ่งใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความรู้และความสุจริต",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พละกำลังทางร่างกาย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การสวมชุดเกราะ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การรบชนะศัตรู",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีปัญญาเป็นกำลัง และมีความซื่อสัตย์สุจริตเป็นเกราะป้องกันภัย",
      "trickTip": "💡 ความรู้ + ความสุจริต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "มีปัญญาเป็นกำลัง และมีความซื่อสัตย์สุจริตเป็นเกราะป้องกันภัย"
        }
      ]
    }
  },
  {
    "id": "bm-thai-064",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดใช้ภาษาแสดง 'น้ำเสียงชื่นชมและยกย่อง'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผลงานจิตรกรรมชิ้นนี้สะท้อนความประณีตและอัจฉริยภาพของศิลปินได้อย่างไร้ที่ติ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เขาทำงานเสร็จเร็วแต่ยังไม่เรียบร้อย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ทำไมเธอถึงมาสายประจำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เรื่องแค่นี้ใครๆ ก็ทำได้",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ใช้คำว่า 'ประณีต', 'อัจฉริยภาพ', 'ไร้ที่ติ' แสดงการชื่นชมอย่างสูง",
      "trickTip": "💡 น้ำเสียงชื่นชม = ยกย่องด้วยคำเชิงบวก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ใช้คำว่า 'ประณีต', 'อัจฉริยภาพ', 'ไร้ที่ติ' แสดงการชื่นชมอย่างสูง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-065",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ดินพอกหางหมู' หมายถึงอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การปล่อยให้งานคั่งค้างสะสมจนพอกพูนทำไม่ทัน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเลี้ยงหมูในคอกสกปรก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การทำนาในฤดูฝน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การประหยัดมัธยัสถ์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผัดวันประกันพรุ่งจนงานสะสมมาก",
      "trickTip": "💡 ดินพอกหางหมู = งานคั่งค้าง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ผัดวันประกันพรุ่งจนงานสะสมมาก"
        }
      ]
    }
  },
  {
    "id": "bm-thai-066",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'ข้อเท็จจริง' ทางประวัติศาสตร์",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัวทรงประกาศเลิกทาสในสยาม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สถาปัตยกรรมยุคอยุธยางดงามกว่ายุคสุโขทัย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อาหารอีสานมีรสชาติแซ่บที่สุดในประเทศ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คนโบราณมีความสุขมากกว่าคนปัจจุบัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การเลิกทาสมีหลักฐานจารึกและประกาศพระราชบัญญัติชัดเจน (Fact)",
      "trickTip": "💡 มีหลักฐานบันทึกแน่ชัด = ข้อเท็จจริง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "การเลิกทาสมีหลักฐานจารึกและประกาศพระราชบัญญัติชัดเจน (Fact)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-067",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ชุบมือเปิบ' มีความหมายตรงกับข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ฉวยประโยชน์จากผลงานที่ผู้อื่นลงแรงทำไว้โดยตนเองไม่ได้ออกแรง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การล้างมือก่อนรับประทานอาหาร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การรับประทานอาหารด้วยมือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การแย่งอาหารผู้อื่น",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ฉวยเอาผลประโยชน์โดยไม่ลงทุนลงแรง",
      "trickTip": "💡 ชุบมือเปิบ = ฉวยผลประโยชน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ฉวยเอาผลประโยชน์โดยไม่ลงทุนลงแรง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-068",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "บทร้อยกรอง: 'พฤษภกาสร อีกกุญชรอันปลดปลง โททนต์เสน่ห์คง สำคัญหมายในกายมี นรชาติวางวาย มลายสิ้นทั้งอินทรีย์ สถิตทั่วแต่ชั่วดี ประดับไว้ในโลกา' มุ่งสอนเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การทำความดีทิ้งไว้เป็นอนุสรณ์หลังความตาย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การอนุรักษ์ช้างและวัวควาย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การสะสมทรัพย์สมบัติ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การดูแลสุขภาพร่างกาย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กฤษณาสอนน้องคำฉันท์: เมื่อตายไป ร่างกายสูญสลาย เหลือไว้เพียงชื่อเสียงความดีความชั่ว",
      "trickTip": "💡 เหลือไว้แต่ความดีความชั่ว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "กฤษณาสอนน้องคำฉันท์: เมื่อตายไป ร่างกายสูญสลาย เหลือไว้เพียงชื่อเสียงความดีความชั่ว"
        }
      ]
    }
  },
  {
    "id": "bm-thai-069",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ขวานผ่าซาก' หมายถึงคนที่มีลักษณะนิสัยอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "พูดจาโผงผาง ตรงเกินไปจนไม่เกรงใจใครและไม่ดูกาลเทศะ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ขยันตัดฟืน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ชอบทำลายข้าวของ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "แข็งแรงกำยำ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "พูดจาตรงเกินไป ขาดความนุ่มนวล",
      "trickTip": "💡 ขวานผ่าซาก = พูดตรงเกินไปไม่เกรงใจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "พูดจาตรงเกินไป ขาดความนุ่มนวล"
        }
      ]
    }
  },
  {
    "id": "bm-thai-070",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อความ: 'ต้นไม้ใหญ่ยืนต้นตระหง่านท้าทายสายลมและแสงแดด ราวกับนักรบผู้กล้าหาญ' มีการใช้ภาพพจน์ชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "อุปมาและบุคคลวัต (สวมบทบาทคน)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "อติพจน์ (กล่าวเกินจริง)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "สัทพจน์ (เลียนเสียงธรรมชาติ)",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ปฏิปุจฉา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เปรียบเทียบด้วยคำว่า 'ราวกับ' (อุปมา) และให้ต้นไม้ท้าทายลมแดดเหมือนนักรบ",
      "trickTip": "💡 ราวกับ = อุปมา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "เปรียบเทียบด้วยคำว่า 'ราวกับ' (อุปมา) และให้ต้นไม้ท้าทายลมแดดเหมือนนักรบ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-071",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'กบในกะลาครอบ' หมายถึงบุคคลในข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ผู้ที่มีความรู้น้อยแต่สำคัญตนเองว่ามีความรู้มากเพราะอยู่ในโลกแคบ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ผู้ที่ชอบจับกบ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คนประหยัดเงิน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คนรักความสะอาด",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คนที่มองเห็นแต่สิ่งรอบตัวแคบๆ นึกว่าตนรู้ทุกอย่าง",
      "trickTip": "💡 กบในกะลา = โลกทัศน์แคบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "คนที่มองเห็นแต่สิ่งรอบตัวแคบๆ นึกว่าตนรู้ทุกอย่าง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-072",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อความ: 'การออกกำลังกายสม่ำเสมอช่วยลดความเครียดและเสริมสร้างภูมิคุ้มกันให้แข็งแรง' จัดเป็นข้อความประเภทใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ข้อเท็จจริงทางการแพทย์และสุขศึกษา",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ข้อคิดเห็นส่วนบุคคล",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การโฆษณาชวนเชื่อ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "นิทานเปรียบเทียบ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มีผลการวิจัยทางวิทยาศาสตร์รองรับชัดเจน",
      "trickTip": "💡 มีหลักฐานวิจัยรองรับ = ข้อเท็จจริง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "มีผลการวิจัยทางวิทยาศาสตร์รองรับชัดเจน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-073",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ตำน้ำพริกละลายแม่น้ำ' มีความหมายว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ลงทุนไปเป็นจำนวนมากแต่ได้ผลประโยชน์กลับมาไม่คุ้มค่า",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การทำอาหารรสจัด",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การทิ้งขยะลงในแม่น้ำ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การปรุงอาหารไม่ถูกสุขลักษณะ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เสียทรัพย์จำนวนมากโดยไม่ได้ผลประโยชน์คุ้มค่า",
      "trickTip": "💡 ตำน้ำพริกละลายแม่น้ำ = เสียเปล่าไม่คุ้ม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "เสียทรัพย์จำนวนมากโดยไม่ได้ผลประโยชน์คุ้มค่า"
        }
      ]
    }
  },
  {
    "id": "bm-thai-074",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำกล่าว: 'อย่านอนตื่นสาย อย่าอายทำกิน อย่าหมิ่นเงินน้อย อย่าคอยวาสนา' มุ่งสอนเรื่องใดเป็นหลัก",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความขยันหมั่นเพียรและพึ่งพาตนเอง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การนอนหลับพักผ่อน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเสี่ยงโชคซื้อลอตเตอรี่",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเลือกงานที่มีเกียรติ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สอนให้ไม่เกียจคร้านและขยันขันแข็งในการประกอบสัมมาอาชีพ",
      "trickTip": "💡 ขยันหมั่นเพียรพึ่งตนเอง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "สอนให้ไม่เกียจคร้านและขยันขันแข็งในการประกอบสัมมาอาชีพ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-075",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'นกสองหัว' หมายถึงคนที่มีพฤติกรรมอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คนที่ทำตัวเข้าด้วยทั้งสองฝ่ายที่ไม่ถูกกันเพื่อหวังผลประโยชน์ส่วนตน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คนที่มีสายตากว้างไกล",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คนที่พูดเก่งสองภาษา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คนที่ชอบเลี้ยงสัตว์ปีก",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คนทรยศที่ไม่จริงใจกับฝ่ายใด หวังแต่ผลประโยชน์",
      "trickTip": "💡 นกสองหัว = ทำเข้าทั้งสองฝ่าย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "คนทรยศที่ไม่จริงใจกับฝ่ายใด หวังแต่ผลประโยชน์"
        }
      ]
    }
  },
  {
    "id": "bm-thai-076",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำประพันธ์: 'ถึงบางพูดพูดดีเป็นศรีศักดิ์ มีคนรักรสถ้อยอร่อยจิต แม้นพูดชั่วตัวตายทำลายมิตร จะชอบผิดในมนุษย์เพราะพูดจา' เป็นผลงานของกวีท่านใด ในเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สุนทรภู่ ใน นิราศภูเขาทอง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "พระบาทสมเด็จพระพุทธเลิศหล้านภาลัย ใน สังข์ทอง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ศรีปราชญ์ ใน โคลงกำสรวล",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เจ้าพระยาพระคลัง (หน) ใน ราชาธิราช",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สุนทรภู่แต่งนิราศภูเขาทองเมื่อเดินทางผ่านตำบลบางพูด",
      "trickTip": "💡 สุนทรภู่ - นิราศภูเขาทอง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "สุนทรภู่แต่งนิราศภูเขาทองเมื่อเดินทางผ่านตำบลบางพูด"
        }
      ]
    }
  },
  {
    "id": "bm-thai-077",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'มือไม่พายเอาเท้าราน้ำ' หมายถึงบุคคลใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คนที่ไม่ยอมช่วยงานแล้วยังทำตัวเกะกะขัดขวางการทำงานของผู้อื่น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คนที่ชอบเล่นน้ำ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คนพายเรือไม่เป็น",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คนเกียจคร้านชอบนอน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไม่ช่วยแล้วยังขัดขวางผู้อื่น",
      "trickTip": "💡 ไม่ช่วยแถมขัดขวาง = มือไม่พายเอาเท้าราน้ำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ไม่ช่วยแล้วยังขัดขวางผู้อื่น"
        }
      ]
    }
  },
  {
    "id": "bm-thai-078",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อความ: 'การรู้หนังสือเป็นสะพานทอดยาวเชื่อมโยงมนุษย์สู่คลังปัญญาอันไร้ขอบเขต' ผู้เขียนใช้ภาพพจน์แบบใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "อุปลักษณ์ (เปรียบการรู้หนังสือเป็นสะพาน)",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สัทพจน์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "อติพจน์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "นามนัย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เปรียบ 'การรู้หนังสือ' เป็น 'สะพาน' โดยตรง",
      "trickTip": "💡 เป็น/คือ = อุปลักษณ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "เปรียบ 'การรู้หนังสือ' เป็น 'สะพาน' โดยตรง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-079",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'จับปลาสองมือ' สื่อความหมายถึงอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การทำสิ่งยากสองอย่างพร้อมกันจนอาจทำให้ล้มเหลวทั้งสองอย่าง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การหาปลาเก่ง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การร่วมมือกันสองคน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การจับปลาตัวใหญ่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "มุ่งหวังสองอย่างพร้อมกันจนสูญเสียทั้งหมด",
      "trickTip": "💡 จับปลาสองมือ = เสี่ยงพลาดทั้งคู่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "มุ่งหวังสองอย่างพร้อมกันจนสูญเสียทั้งหมด"
        }
      ]
    }
  },
  {
    "id": "bm-thai-080",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดคือจุดประสงค์ของการอ่านแบบ 'Skimming'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การอ่านแบบกวาดสายตาเพื่อจับใจความสำคัญหรือภาพรวมของเนื้อหาอย่างรวดเร็ว",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การอ่านเพื่อค้นหาคำเฉพาะเจาะจง",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การอ่านวิเคราะห์ไวยากรณ์",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การอ่านออกเสียงจับจังหวะ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "Skimming คือการอ่านเร็วเพื่อหาภาพรวม (Main idea)",
      "trickTip": "💡 Skimming = อ่านหาภาพรวม / Scanning = หาข้อมูลเฉพาะ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "Skimming คือการอ่านเร็วเพื่อหาภาพรวม (Main idea)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-081",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'หมาหวงก้าง' หมายถึงคนเช่นไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คนที่หวงแหนสิ่งของที่ตนเองไม่ได้ใช้ประโยชน์ แต่ก็ไม่ยอมให้ผู้อื่นนำไปใช้",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สุนัขที่ชอบกินกระดูก",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คนตระหนี่ถี่เหนียว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คนดุร้าย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ตนเองใช้ไม่ได้ แต่ไม่ยอมแบ่งปันให้ใคร",
      "trickTip": "💡 หมาหวงก้าง = หวงของที่ตนไม่ได้ใช้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ตนเองใช้ไม่ได้ แต่ไม่ยอมแบ่งปันให้ใคร"
        }
      ]
    }
  },
  {
    "id": "bm-thai-082",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'อติพจน์ (Hyperbole)' คือโวหารภาพพจน์ลักษณะใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การกล่าวเกินจริงเพื่อเน้นความรู้สึกและอารมณ์ให้เด่นชัด",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเปรียบเทียบว่าเหมือน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเลียนเสียงธรรมชาติ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การใช้คำตรงข้าม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กล่าวเกินจริง เช่น ร้องไห้น้ำตาเป็นสายเลือด, หิวจนจะกินช้างได้ทั้งตัว",
      "trickTip": "💡 อติพจน์ = กล่าวเกินจริง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "กล่าวเกินจริง เช่น ร้องไห้น้ำตาเป็นสายเลือด, หิวจนจะกินช้างได้ทั้งตัว"
        }
      ]
    }
  },
  {
    "id": "bm-thai-083",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ผักชีโรยหน้า' มีความหมายว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การทำความดีเพียงผิวเผินเพื่อให้ดูเรียบร้อยเฉพาะหน้า",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การปรุงอาหารให้อร่อย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การปลูกผักสวนครัว",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การตกแต่งจานอาหาร",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทำดีแค่ฉากหน้าเพื่อลวงตา",
      "trickTip": "💡 ผักชีโรยหน้า = ทำดีแค่ผิวเผิน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ทำดีแค่ฉากหน้าเพื่อลวงตา"
        }
      ]
    }
  },
  {
    "id": "bm-thai-084",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็นมารยาทที่ดีในการอ่านในห้องสมุด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ปิดเสียงเครื่องมือสื่อสารและไม่พูดคุยส่งเสียงรบกวนผู้อื่น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "นำอาหารกลิ่นแรงเข้าไปรับประทาน",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "พับมุมกระดาษหนังสือของห้องสมุด",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ขีดเขียนข้อความลงในหนังสือ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "รักษาความเงียบและเคารพสิทธิของผู้อื่นในห้องสมุด",
      "trickTip": "💡 มารยาทห้องสมุด = รักษาความสงบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "รักษาความเงียบและเคารพสิทธิของผู้อื่นในห้องสมุด"
        }
      ]
    }
  },
  {
    "id": "bm-thai-085",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ฆ่าช้างเอางา' สอนเตือนใจเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การทำลายสิ่งที่มีค่ามหาศาลเพื่อหวังผลประโยชน์เพียงเล็กน้อย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การลักลอบล่าสัตว์ป่า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การค้าขายงาช้างผิดกฎหมาย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การทำงานเสี่ยงอันตราย",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทำลายของใหญ่เพื่อประโยชน์เล็กน้อย ไม่คุ้มค่า",
      "trickTip": "💡 ฆ่าช้างเอางา = ทำลายของใหญ่เพื่อผลนิดเดียว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ทำลายของใหญ่เพื่อประโยชน์เล็กน้อย ไม่คุ้มค่า"
        }
      ]
    }
  },
  {
    "id": "bm-thai-086",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำประพันธ์: 'เสียงลือเสียงเล่าอ้าง อันใด พี่เอย เสียงย่อมยอยศใคร ทั่วหล้า' มาจากวรรณคดีเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ลิลิตพระลอ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "ลิลิตตะเลงพ่าย",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "ขุนช้างขุนแผน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "มัทนะพาธา",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โคลงสองสุภาพ/โคลงสี่สุภาพบทเปิดเรื่องลิลิตพระลอ",
      "trickTip": "💡 ลิลิตพระลอ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "โคลงสองสุภาพ/โคลงสี่สุภาพบทเปิดเรื่องลิลิตพระลอ"
        }
      ]
    }
  },
  {
    "id": "bm-thai-087",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'พูดไปสองไพเบี้ย นิ่งเสียตำลึงทอง' สอนเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การรู้จักนิ่งเงียบในสถานการณ์ที่ไม่ควรพูด ย่อมมีคุณค่ามากกว่าการพูดพล่อยๆ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การค้าขายเงินโบราณ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การพูดเพื่อต่อรองราคา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเจรจาธุรกิจ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "บางสถานการณ์การนิ่งสงบมีประโยชน์กว่าการโต้เถียง",
      "trickTip": "💡 นิ่งเสียตำลึงทอง = นิ่งดีกว่าพูดไร้สาระ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "บางสถานการณ์การนิ่งสงบมีประโยชน์กว่าการโต้เถียง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-088",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อความ: 'สายฝนโปรยปรายลงมาอย่างชุ่มฉ่ำ ปลุกผืนแผ่นดินที่แห้งแล้งให้กลับมามีชีวิตชีวาอีกครั้ง' มีจุดเด่นด้านใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การใช้ภาษาที่เกิดจินตภาพและสื่ออารมณ์งดงาม",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การใช้ศัพท์แสงวิชาการ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การประชดประชัน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การสั่งการ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทำให้ผู้อ่านเห็นภาพความสดชื่นแจ่มชัด (จินตภาพ)",
      "trickTip": "💡 เห็นภาพชัดเจน = เกิดจินตภาพ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ทำให้ผู้อ่านเห็นภาพความสดชื่นแจ่มชัด (จินตภาพ)"
        }
      ]
    }
  },
  {
    "id": "bm-thai-089",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'หนีเสือปะจระเข้' ตรงกับความหมายในข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "หนีพ้นจากภัยอันตรายอย่างหนึ่งแล้วกลับมาเจออันตรายอีกอย่างที่ร้ายแรงพอกัน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การท่องเที่ยวในป่าดงดิบ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเผชิญหน้ากับสัตว์ร้าย",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเป็นนักล่าสัตว์",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "หนีเคราะห์กรรมหนึ่งไปเจออีกเคราะห์กรรมหนึ่ง",
      "trickTip": "💡 หนีเสือปะจระเข้ = หนีภัยหนึ่งไปเจออีกภัยหนึ่ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "หนีเคราะห์กรรมหนึ่งไปเจออีกเคราะห์กรรมหนึ่ง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-090",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'การอ่านเชิงวิเคราะห์'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การแยกแยะองค์ประกอบ ข้อเท็จจริง ข้อคิดเห็น และเจตนาของผู้เขียน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การอ่านออกเสียงตามตัวหนังสือ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การจำจำนวนหน้าหนังสือ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การอ่านเฉพาะหัวข้อใหญ่",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "การแยกแยะโครงสร้างและประเมินคุณค่าสาร",
      "trickTip": "💡 วิเคราะห์ = แยกแยะข้อเท็จจริงและเจตนา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "การแยกแยะโครงสร้างและประเมินคุณค่าสาร"
        }
      ]
    }
  },
  {
    "id": "bm-thai-091",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ขิงก็รา ข่าก็แรง' หมายถึงลักษณะของคนเช่นไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ต่างฝ่ายต่างอารมณ์ร้อน ไม่ยอมลดละให้แก่กัน",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "คนชอบกินสมุนไพร",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "คนทำอาหารเก่ง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "คนที่มีความสามารถเสมอกัน",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ทั้งสองฝ่ายแข็งกร้าวใส่กัน ไม่มีใครยอมใคร",
      "trickTip": "💡 ขิงก็รา ข่าก็แรง = อารมณ์ร้อนใส่กันไม่ยอมกัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ทั้งสองฝ่ายแข็งกร้าวใส่กัน ไม่มีใครยอมใคร"
        }
      ]
    }
  },
  {
    "id": "bm-thai-092",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำว่า 'สัทพจน์ (Onomatopoeia)' คือโวหารภาพพจน์ชนิดใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การใช้คำเลียนเสียงธรรมชาติ เช่น เสียงคลื่นซัดซ่า เสียงฟ้าร้องเปรี้ยง",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเปรียบเทียบ",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การกล่าวเกินจริง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การเล่นคำพ้อง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เลียนเสียงธรรมชาติ เช่น ซ่า, โครม, กริ๊ง",
      "trickTip": "💡 สัทพจน์ = เลียนเสียงธรรมชาติ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "เลียนเสียงธรรมชาติ เช่น ซ่า, โครม, กริ๊ง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-093",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'ช้างตายทั้งตัว เอาใบบัวมาปิด' หมายความว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ความผิดร้ายแรงที่คนรู้ทั่วกันแล้ว ไม่สามารถปกปิดได้มิด",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การขนย้ายซากสัตว์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การปลูกบัวในบึงใหญ่",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การทำงานที่ไม่รอบคอบ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ความผิดใหญ่หลวงย่อมไม่อาจซ่อนเร้น",
      "trickTip": "💡 ช้างตายใบบัวปิด = ปิดความชั่วใหญ่ไม่มิด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ความผิดใหญ่หลวงย่อมไม่อาจซ่อนเร้น"
        }
      ]
    }
  },
  {
    "id": "bm-thai-094",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ในการเขียนย่อความ สิ่งใดที่ 'ไม่ควรมี' ในเนื้อหาย่อความ",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "คำราชาศัพท์ที่ยังไม่ได้ดัดแปลง",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "สรรพนามบุรุษที่ 1 และ 2 (ให้เปลี่ยนเป็นบุรุษที่ 3)",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เครื่องหมายอัญประกาศและบทสนทนาตรง",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "ข้อ 2 และ 3 ถูก",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "ย่อความต้องเปลี่ยนเป็นสรรพนามบุรุษที่ 3 และเขียนเป็นความเรียงโดยไม่มีเครื่องหมายคำพูด",
      "trickTip": "💡 ย่อความ = ใช้บุรุษที่ 3 และไม่มีอัญประกาศ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ย่อความต้องเปลี่ยนเป็นสรรพนามบุรุษที่ 3 และเขียนเป็นความเรียงโดยไม่มีเครื่องหมายคำพูด"
        }
      ]
    }
  },
  {
    "id": "bm-thai-095",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'เข้าเถื่อนอย่าลืมพร้า' สอนเตือนใจเรื่องใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การมีความรอบคอบเตรียมพร้อมรับมือกับอุปสรรคและอันตรายเสมอ",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การเดินทางเข้าป่าหาของป่า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การพกพาอาวุธ",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การทำเกษตรกรรม",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สอนให้มีความรอบคอบเตรียมเครื่องมือป้องกันตัว",
      "trickTip": "💡 เข้าเถื่อนอย่าลืมพร้า = เตรียมพร้อมรอบคอบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "สอนให้มีความรอบคอบเตรียมเครื่องมือป้องกันตัว"
        }
      ]
    }
  },
  {
    "id": "bm-thai-096",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดเป็น 'การอ่านเพื่อความบันเทิงและจรรโลงใจ'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "การอ่านนิทาน นวนิยาย และบทกวีเพื่อผ่อนคลายอารมณ์",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การอ่านคู่มือซ่อมเครื่องยนต์",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การอ่านรายงานการประชุม",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การอ่านข่าวพยากรณ์อากาศ",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "อ่านวรรณกรรมเพื่อความเพลิดเพลินและเสริมสร้างสติปัญญา",
      "trickTip": "💡 อ่านบันเทิง = นิทาน/บทกวี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "อ่านวรรณกรรมเพื่อความเพลิดเพลินและเสริมสร้างสติปัญญา"
        }
      ]
    }
  },
  {
    "id": "bm-thai-097",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'สอนจระเข้ให้ว่ายน้ำ' หมายถึงอะไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "สอนสิ่งที่ผู้นั้นมีความชำนาญเชี่ยวชาญอยู่แล้ว",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การฝึกสัตว์ป่า",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การเรียนว่ายน้ำอย่างถูกวิธี",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การช่วยเหลือคนเก่ง",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ไปสอนคนที่มีความรู้ความชำนาญเหนือกว่าตน",
      "trickTip": "💡 สอนจระเข้ว่ายน้ำ = สอนคนชำนาญอยู่แล้ว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ไปสอนคนที่มีความรู้ความชำนาญเหนือกว่าตน"
        }
      ]
    }
  },
  {
    "id": "bm-thai-098",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "คำประพันธ์ประเภท 'โคลงสี่สุภาพ' บังคับรูปวรรณยุกต์เอก-โท ตามข้อใด",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เอก ๗ โท ๔",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เอก ๔ โท ๗",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เอก ๕ โท ๕",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เอก ๖ โท ๔",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "โคลงสี่สุภาพบังคับ เอก 7 ตำแหน่ง และ โท 4 ตำแหน่ง",
      "trickTip": "💡 โคลงสี่สุภาพ = เอก 7 โท 4",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "โคลงสี่สุภาพบังคับ เอก 7 ตำแหน่ง และ โท 4 ตำแหน่ง"
        }
      ]
    }
  },
  {
    "id": "bm-thai-099",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "สำนวน 'เอาหูไปนา เอาตาไปไร่' หมายความว่าอย่างไร",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "ทำเป็นไม่รู้ไม่ชี้ แกล้งทำเป็นไม่ได้ยินไม่ได้เห็นเรื่องที่เกิดขึ้น",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "การไปทำนาทำไร่",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "การตรวจสุขภาพหูและตา",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "การดูแลรักษาพืชผล",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "แกล้งทำเป็นไม่รู้ไม่เห็นเพื่อหลีกเลี่ยงความยุ่งยาก",
      "trickTip": "💡 เอาหูไปนาเอาตาไปไร่ = ทำเป็นไม่รู้ไม่เห็น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "แกล้งทำเป็นไม่รู้ไม่เห็นเพื่อหลีกเลี่ยงความยุ่งยาก"
        }
      ]
    }
  },
  {
    "id": "bm-thai-100",
    "subjectId": "thai",
    "topicId": "thai-reading",
    "topicName": "การอ่านวิเคราะห์และการตีความ",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 65,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "ภาษาไทย",
      "การอ่านจับใจความ",
      "วรรณคดี"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "ข้อใดคือคุณค่าสูงสุดของการศึกษาภาษาและวรรณคดีไทย",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "เพื่อสืบทอดมรดกทางวัฒนธรรม ภาษา และภูมิปัญญาของบรรพบุรุษไทย",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "เพื่อสอบให้ได้คะแนนเต็ม",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "เพื่อท่องจำบทกลอน",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "เพื่อคุยอวดผู้อื่น",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ธำรงรักษาเอกลักษณ์และมรดกทางภูมิปัญญาของชาติไทย",
      "trickTip": "💡 คุณค่า = สืบทอดมรดกวัฒนธรรมและภูมิปัญญา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "การวิเคราะห์วรรณศิลป์และจับใจความ",
          "content": "ธำรงรักษาเอกลักษณ์และมรดกทางภูมิปัญญาของชาติไทย"
        }
      ]
    }
  }
];
