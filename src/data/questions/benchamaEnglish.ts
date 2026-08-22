import { Question } from '@/types/question';

/**
 * คลังข้อสอบภาษาอังกฤษ 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา พร้อมเฉลยละเอียดภาษาไทย
 */

export const BENCHAMA_ENGLISH_QUESTIONS: Question[] = [
  {
    "id": "bm-eng-001",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Neither John nor his friends ________ going to the cinema tonight.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "was",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "be",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'are' เพราะโครงสร้าง Neither...nor... กริยาต้องผันตามประธานตัวหลัง คือ his friends ซึ่งเป็นพหูพจน์ และมี tonight บ่งบอกเหตุการณ์ในปัจจุบัน/อนาคต",
      "trickTip": "💡 Neither...nor... ดูประธานตัวหลังสุดเสมอ",
      "commonMistake": "⚠️ ระวังเห็น John ข้างหน้าแล้วเผลอใช้ is หรือระวังจำสลับ tense",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ทั้งจอห์นและเพื่อนๆ ของเขาไม่ได้กำลังจะไปดูหนังในคืนนี้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "โครงสร้าง 'Neither A nor B + Verb' กริยาต้องผันตาม B (ประธานตัวหลัง) ในที่นี้ B คือ his friends (พหูพจน์) กริยาช่วยจึงต้องเป็น 'are'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-002",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "If it rains tomorrow, we ________ the football match.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "cancel",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "will cancel",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "canceled",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "would cancel",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'will cancel' เพราะเป็นประโยคเงื่อนไขแบบที่ 1 (First Conditional) ที่มีโอกาสเกิดขึ้นจริงในอนาคต: If + Present Simple, will + V.1",
      "trickTip": "💡 If + Present Simple คู่กับ will + V.1 เสมอ",
      "commonMistake": "⚠️ อย่าใช้ cancel ซ้ำ หรือเผลอใช้ would cancel ซึ่งเป็นเงื่อนไขสมมุติแบบที่ 2",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ถ้าพรุ่งนี้ฝนตก พวกเราจะยกเลิกการแข่งขันฟุตบอล'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "First Conditional ใช้กับเหตุการณ์ที่เป็นไปได้ในอนาคต: ประโยคหน้า 'If it rains (V.1)' ประโยคหลังต้องใช้ 'will + V.infinitive' คือ 'will cancel'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-003",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The novel ________ by Mark Twain in 1884.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "wrote",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "was written",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "is writing",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "has written",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'was written' เพราะประธานคือนวนิยาย (The novel) ซึ่งถูกเขียนขึ้นโดย Mark Twain ในปี 1884 (อดีต) จึงต้องใช้รูปประธานถูกกระทำ (Past Passive Voice: was/were + V.3)",
      "trickTip": "💡 ประธานเป็นสิ่งของที่ทำกริยาเองไม่ได้ ต้องใช้ Passive Voice (was/were + V.3)",
      "commonMistake": "⚠️ ระวังเลือก wrote ซึ่งแปลว่านวนิยายเป็นผู้ลงมือเขียนเอง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'นวนิยายเล่มนี้ถูกเขียนขึ้นโดย มาร์ก ทเวน ในปี ค.ศ. 1884'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "โครงสร้าง Passive Voice ในอดีต: Subject + was/were + V.3 ประธานเป็นเอกพจน์ (The novel) และมีระบุเวลาในอดีต (in 1884) จึงใช้ 'was written'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-004",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Sarah has lived in London ________ five years.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "since",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "for",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "during",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "from",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'for' เพราะ five years เป็นช่วงระยะเวลา (Period of time) ในโครงสร้าง Present Perfect Tense",
      "trickTip": "💡 for + จำนวนเวลา / since + จุดเริ่มต้นเวลา",
      "commonMistake": "⚠️ ระวังใช้ since นำหน้า five years ซึ่งผิดหลักไวยากรณ์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ซาร่าห์อาศัยอยู่ในลอนดอนมาเป็นเวลา 5 ปีแล้ว'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "การบอกเวลาใน Present Perfect: 'for + ช่วงระยะเวลา' (เช่น for 5 years, for two months) ส่วน 'since + จุดเริ่มต้นของเวลา' (เช่น since 2018, since Monday)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-005",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The boy ________ won the science competition is my cousin.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "who",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "which",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "whom",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "whose",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'who' เพราะใช้เชื่อมขยายคำนามที่เป็นบุคคล (The boy) และทำหน้าที่เป็นประธานของกริยา won",
      "trickTip": "💡 คน + who + คำกริยา",
      "commonMistake": "⚠️ ระวังใช้ which กับคน หรือใช้ whose เมื่อไม่มีคำนามตามหลัง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เด็กผู้ชายคนที่ชนะการแข่งขันวิทยาศาสตร์คือลูกพี่ลูกน้องของฉัน'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Relative Pronoun: ใช้ 'who' แทนคนเมื่อทำหน้าที่เป็นประธาน (คน + who + กริยา), ใช้ 'which' แทนสิ่งของ/สัตว์, ใช้ 'whom' แทนคนที่เป็นกรรม, และ 'whose' แสดงความเป็นเจ้าของ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-006",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "By the time we arrived at the station, the train ________.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "left",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "has left",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "had left",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "was leaving",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'had left' เพราะเป็นเหตุการณ์ที่เกิดขึ้นและสิ้นสุดลงก่อนอีกเหตุการณ์หนึ่งในอดีต จึงต้องใช้ Past Perfect (had + V.3)",
      "trickTip": "💡 By the time + อดีต, เหตุการณ์ที่เกิดก่อนใช้ had + V.3",
      "commonMistake": "⚠️ ระวังใช้ left (Past Simple) ทั้งคู่ ซึ่งไม่แสดงลำดับก่อนหลังที่ชัดเจน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เมื่อตอนที่เราไปถึงสถานีรถไฟ รถไฟก็ได้ออกไปเรียบร้อยแล้ว'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "โครงสร้าง By the time + Past Simple (arrived), ประโยคหลักใช้ Past Perfect (had + V.3) เพื่อเน้นย้ำว่ารถไฟออกไปก่อนที่พวกเราจะไปถึง"
        }
      ]
    }
  },
  {
    "id": "bm-eng-007",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "She is interested ________ learning new languages.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "in",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "at",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "on",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "about",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'in' เพราะคำคุณศัพท์ interested ต้องใช้คู่กับบุพบท 'in' เสมอ (interested in + Noun/V-ing)",
      "trickTip": "💡 interested in / good at / excited about",
      "commonMistake": "⚠️ อย่าเผลอใช้ interested about หรือ interested on ตามความเคยชินภาษาไทย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เธอมีความสนใจในการเรียนรู้ภาษาใหม่ๆ'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Prepositional Phrase: 'interested in' เป็นสำนวนเฉพาะที่ต้องจำ แปลว่า 'สนใจใน...'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-008",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Everyone in the classroom ________ listening to the teacher attentively.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "were",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "have been",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'is' เพราะสรรพนามไม่ชี้เฉพาะ Everyone ถือเป็นคำนามเอกพจน์เสมอ จึงต้องใช้กริยาเอกพจน์ 'is'",
      "trickTip": "💡 Every- / Some- / Any- / No- + one/body = ประธานเอกพจน์",
      "commonMistake": "⚠️ หลายคนเข้าใจผิดว่า Everyone แปลว่าทุกคนจึงเป็นพหูพจน์และเผลอใช้ are",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ทุกคนในห้องเรียนกำลังตั้งใจฟังครูอย่างจดจ่อ'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Indefinite Pronouns เช่น Everyone, Everybody, Someone, Somebody, Anyone, Nobody ถือเป็นประธานรูปเอกพจน์ ต้องใช้กริยาเอกพจน์ (is/was/V-s,es)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-009",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "If I ________ a million dollars, I would travel around the world.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "have",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "had",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "would have",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "will have",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'had' เพราะเป็นประโยคเงื่อนไขแบบที่ 2 (Second Conditional) แสดงเรื่องสมมุติที่ไม่เป็นจริงในปัจจุบัน: If + Past Simple (had), would + V.1",
      "trickTip": "💡 If + V.2 (Past Simple) คู่กับ would + V.1",
      "commonMistake": "⚠️ ห้ามใช้ would have ในประโยคส่วน If-clause เด็ดขาด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ถ้าฉันมีเงินหนึ่งล้านดอลลาร์ ฉันจะเดินทางท่องเที่ยวไปรอบโลก'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Second Conditional: โครงสร้าง If + Subject + V.2, Subject + would + V.infinitive ใช้สมมุติตรงข้ามกับความจริงในปัจจุบัน"
        }
      ]
    }
  },
  {
    "id": "bm-eng-010",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "My father enjoys ________ books in his free time.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "read",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "to read",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "reading",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "reads",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'reading' เพราะคำกริยา enjoy ต้องตามหลังด้วย Gerund (V-ing) เสมอ",
      "trickTip": "💡 enjoy + V-ing เสมอ (ไม่ใช้ to read)",
      "commonMistake": "⚠️ ระวังเผลอใช้ to read ตามความเคยชินแบบกริยา like/love",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'คุณพ่อของฉันชอบอ่านหนังสือในเวลาว่าง'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "กริยาที่ต้องตามด้วย Gerund (V-ing) เสมอ ได้แก่ enjoy, avoid, keep, finish, mind, practice, suggest"
        }
      ]
    }
  },
  {
    "id": "bm-eng-011",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "This soup tastes delicious, but it needs a ________ more salt.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "few",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "little",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "many",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "much",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'little' เพราะ salt (เกลือ) เป็นคำนามนับไม่ได้ จึงต้องใช้ปริมาณ a little",
      "trickTip": "💡 a little + นามนับไม่ได้ / a few + นามนับได้",
      "commonMistake": "⚠️ ห้ามใช้ a few กับ salt เพราะเกลือเป็นนามนับไม่ได้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ซุปนี้รสชาติอร่อยแล้ว แต่ต้องการเกลือเพิ่มอีกเล็กน้อย'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "คำบอกปริมาณ: 'a little' ใช้กับคำนามนับไม่ได้ (เช่น water, sugar, salt), ส่วน 'a few' ใช้กับคำนามนับได้พหูพจน์ (เช่น books, pens)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-012",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The car was ________ expensive that he couldn't afford it.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "such",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "so",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "too",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "very",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'so' เพราะโครงสร้างคือ 'so + adjective + that' แปลว่า '...มากเสียจนกระทั่ง...'",
      "trickTip": "💡 so + Adj + that / such + (a/an) + Adj + Noun + that",
      "commonMistake": "⚠️ ระวังใช้ too เพราะ too ต้องคู่กับ to + V.inf (too expensive to buy)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'รถยนต์คันนั้นมีราคาแพงมากเสียจนกระทั่งเขาไม่สามารถซื้อได้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "ไวยากรณ์: 'so + Adj + that' (so expensive that...) ถ้าเป็น such จะต้องตามด้วยนาม เช่น 'such an expensive car that...'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-013",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "You ________ smoke in the hospital. It is strictly prohibited.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "mustn't",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "needn't",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "don't have to",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "might not",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'mustn't' (must not) เพราะแสดงข้อห้ามเด็ดขาดและกฎหมาย (Prohibition)",
      "trickTip": "💡 mustn't = ห้ามเด็ดขาด (Prohibition)",
      "commonMistake": "⚠️ ระวังตอบ don't have to ซึ่งแปลว่าไม่จำเป็นต้องทำ แต่สูบได้ ซึ่งผิดบริบท",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'คุณต้องไม่สูบบุหรี่ในโรงพยาบาลเด็ดขาด เพราะเป็นข้อห้ามอย่างเคร่งครัด'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "ความแตกต่าง: 'mustn't' = ห้ามทำเด็ดขาด (มีโทษ/ฝ่าฝืนกฎ), ส่วน 'don't have to' / 'needn't' = ไม่จำเป็นต้องทำ (จะทำก็ได้ไม่ทำก็ได้)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-014",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Although she was tired, ________ she finished her homework.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "but",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "so",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "and",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "she still",
        "isCorrect": true
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'she still' เพราะในภาษาอังกฤษเมื่อมีคำเชื่อม Although (แม้ว่า) แล้ว จะไม่ใช้ but หรือ so ซ้ำซ้อนอีก",
      "trickTip": "💡 Although ห้ามใช้คู่กับ but ในประโยคเดียวกัน",
      "commonMistake": "⚠️ คนไทยมักติดแปลว่า 'แม้ว่า...แต่...' จึงเผลอเลือกข้อที่มี but",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'แม้ว่าเธอจะเหนื่อยมาก แต่เธอก็ยังคงทำการบ้านของเธอจนเสร็จ'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "กฎเหล็กไวยากรณ์: 'Although + Clause 1, Clause 2' ห้ามใส่ but คั่นระหว่างสองประโยค จึงใช้ 'she still' เพื่อเสริมความหมายว่ายังคงทำ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-015",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The meeting has been postponed ________ next Monday.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "until",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "at",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "on",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "by",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'until' เพราะสำนวน postpone until หมายถึง 'เลื่อนไปจนถึงวัน...'",
      "trickTip": "💡 postpone until + วัน/เวลาใหม่",
      "commonMistake": "⚠️ ระวังใช้ on next Monday เพราะคำว่า next นำหน้าวันอยู่แล้ว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'การประชุมได้ถูกเลื่อนออกไปจนถึงวันจันทร์หน้า'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "กริยา postpone / delay มักใช้คู่กับบุพบท 'until' หรือ 'to' เพื่อระบุเวลาใหม่ที่กำหนดขึ้น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-016",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "He ran fast ________ catch the school bus.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "in order to",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "so that",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "because",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "due to",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'in order to' เพราะตามด้วยคำกริยาไม่ผัน (catch) เพื่อบอกจุดประสงค์ แปลว่า 'เพื่อที่จะ...'",
      "trickTip": "💡 in order to + V.inf / so that + S + V",
      "commonMistake": "⚠️ ระวังใช้ so that เพราะข้างหลัง catch ไม่มีประธาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เขาวิ่งอย่างรวดเร็วเพื่อที่จะขึ้นรถโรงเรียนให้ทัน'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "การบอกจุดประสงค์: 'in order to / so as to + V.infinitive' ส่วน 'so that + Subject + Verb' (ต้องตามด้วยประโยคสมบูรณ์)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-017",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The dog wagged ________ tail when it saw its owner.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "it's",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "its",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "it",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "its'",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'its' (ไม่มี apostrophe) ซึ่งเป็นคำคุณศัพท์แสดงความเป็นเจ้าของ (Possessive Adjective) แปลว่า 'ของมัน'",
      "trickTip": "💡 its = ของมัน (ไม่มีขีด) / it's = it is (มีขีด)",
      "commonMistake": "⚠️ อย่าสับสนใส่ apostrophe ในคำว่า its เมื่อแสดงความเป็นเจ้าของ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'สุนัขกระดิกหางของมันเมื่อมันมองเห็นเจ้าของ'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "ความแตกต่าง: 'its' = ของมัน (แสดงความเป็นเจ้าของ เช่น its tail), ส่วน 'it's' = it is หรือ it has"
        }
      ]
    }
  },
  {
    "id": "bm-eng-018",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Neither of the answers ________ correct.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "were",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "being",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'is' เพราะกลุ่มคำ 'Neither of + คำนามพหูพจน์' มีประธานหลักคือคำว่า Neither ซึ่งเป็นสรรพนามเอกพจน์",
      "trickTip": "💡 Neither of + นามพหูพจน์ -> กริยาเอกพจน์",
      "commonMistake": "⚠️ เด็กๆ มักเห็น answers มี s แล้วเผลอเลือก are",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ไม่มีคำตอบข้อใดในสองข้อนี้ที่ถูกต้องเลย'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "หลักไวยากรณ์: 'Neither of / Either of / Each of / One of + Plural Noun' ต้องใช้กริยาเอกพจน์เสมอ (is/was)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-019",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "I look forward to ________ from you soon.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "hear",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "hearing",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "heard",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "to hear",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'hearing' เพราะในสำนวน look forward to คำว่า to เป็นบุพบท (Preposition) จึงต้องตามหลังด้วย Gerund (V-ing)",
      "trickTip": "💡 look forward to + V-ing เสมอ",
      "commonMistake": "⚠️ คนส่วนใหญ่เห็น to แล้วคิดว่าเป็น Infinitive จึงเผลอเลือก hear",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ฉันตั้งหน้าตั้งตารอคอยที่จะได้รับข่าวจากคุณเร็วๆ นี้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "สำนวน look forward to + V-ing แปลว่า 'เฝ้ารอคอยสิ่งใดสิ่งหนึ่งอย่างใจจดใจจ่อ'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-020",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The package was delivered ________ Friday morning.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "in",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "at",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "on",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "by",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'on' เพราะเมื่อมีการระบุวันในสัปดาห์ (Friday) แม้จะมีคำว่า morning ตามหลัง ก็ยังต้องใช้บุพบท 'on'",
      "trickTip": "💡 มีชื่อวันระบุชัดเจน ใช้ on เสมอ",
      "commonMistake": "⚠️ ระวังเห็น morning แล้วเผลอใช้ in",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'พัสดุถูกจัดส่งมาถึงในเช้าวันศุกร์'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "การใช้บุพบทบอกเวลา: 'on + วัน' (on Friday, on Friday morning), 'in + ช่วงเวลาทั่วไป' (in the morning), 'at + เวลาเป๊ะๆ' (at 8:00 AM)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-021",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Hardly had he entered the room ________ the phone rang.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "when",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "than",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "then",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "after",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'when' เพราะโครงสร้างไวยากรณ์ชั้นสูง (Inversion) ของคำว่า Hardly ต้องใช้คู่กับ 'when'",
      "trickTip": "💡 Hardly คู่กับ when / No sooner คู่กับ than",
      "commonMistake": "⚠️ ระวังจำสลับคู่ระหว่าง when และ than",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ทันทีที่เขาก้าวเท้าเข้ามาในห้อง เสียงโทรศัพท์ก็ดังขึ้นทันที'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "โครงสร้างคู่จำ: 'Hardly had + S + V.3 ... when + S + V.2' (แทบจะไม่ทัน...ก็...) และ 'No sooner had + S + V.3 ... than + S + V.2'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-022",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "She didn't know the answer, and ________.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "neither did I",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "neither I did",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "so did I",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "I didn't too",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'neither did I' เพราะเป็นการคล้อยตามประโยคปฏิเสธ (Negative Agreement) ด้วยโครงสร้าง Neither + กริยาช่วย + ประธาน",
      "trickTip": "💡 Neither + กริยาช่วย + ประธาน (คล้อยตามปฏิเสธ)",
      "commonMistake": "⚠️ ระวังใช้ so did I ซึ่งใช้คล้อยตามประโยคบอกเล่าเท่านั้น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เธอไม่รู้คำตอบ และฉันเองก็ไม่รู้เหมือนกัน'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "การคล้อยตาม: คล้อยตามประโยคปฏิเสธใช้ 'Neither + Helping Verb + Subject' (Neither did I) หรือ 'Subject + Verb ปฏิเสธ + either' (I didn't either)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-023",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The teacher made the students ________ the essay again.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "rewrite",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "to rewrite",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "rewriting",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "rewrote",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'rewrite' เพราะคำกริยา 'make' ในรูป Causative Verb (สั่ง/บังคับให้ทำ) ต้องตามด้วยกรรม + V.infinitive ไม่ผันและไม่มี to",
      "trickTip": "💡 make / let / have + คน + V.1 ไม่เติม to",
      "commonMistake": "⚠️ ระวังเผลอเลือก to rewrite",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'คุณครูสั่งให้นักเรียนเขียนเรียงความใหม่อีกรอบหนึ่ง'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Causative Verbs: 'make / let / have + someone + V.infinitive (V.1 ไม่ผัน)' เช่น make them rewrite, let him go"
        }
      ]
    }
  },
  {
    "id": "bm-eng-024",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "It is important that he ________ on time for the exam.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "be",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "was",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "will be",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'be' เพราะเป็นโครงสร้าง Subjunctive Mood หลังคำคุณศัพท์แสดงความสำคัญ (important, essential, necessary) กริยาใน that-clause ต้องเป็นรูป Base Form (V.infinitive ไม่ผัน)",
      "trickTip": "💡 important that + ประธาน + V.base form (be)",
      "commonMistake": "⚠️ หลายคนมองว่า he เป็นเอกพจน์แล้วเผลอเลือก is",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เป็นสิ่งสำคัญอย่างยิ่งที่เขาจะต้องมาให้ตรงเวลาสำหรับการสอบ'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Present Subjunctive: 'It is important/essential that + Subject + (should) + V.base form' กริยา Verb to be จึงต้องใช้ 'be' เสมอสำหรับทุกประธาน"
        }
      ]
    }
  },
  {
    "id": "bm-eng-025",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "She has been working here ________ 2018.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "for",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "since",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "during",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "in",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'since' เพราะ 2018 คือจุดเริ่มต้นของเวลาในอดีต (Point in time) ที่การกระทำดำเนินต่อเนื่องมาถึงปัจจุบัน",
      "trickTip": "💡 since + จุดเริ่มต้นเวลา / for + ช่วงเวลา",
      "commonMistake": "⚠️ ระวังใช้ in ซึ่งใช้กับ Past Simple ปกติ ไม่ใช่ Present Perfect",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เธอทำงานที่นี่มาตั้งแต่ปี ค.ศ. 2018'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Present Perfect Continuous: ใช้ 'since + ปี/จุดเริ่มต้น' (since 2018) ส่วน 'for + จำนวนปี' (for 5 years)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-026",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The luggage ________ too heavy for me to lift alone.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "were",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "have been",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'is' เพราะ luggage (สัมภาระ) เป็นคำนามนับไม่ได้ (Uncountable Noun) ในภาษาอังกฤษ จึงถือเป็นเอกพจน์เสมอ",
      "trickTip": "💡 luggage/baggage = คำนามนับไม่ได้ ถือเป็นเอกพจน์",
      "commonMistake": "⚠️ อย่านับกระเป๋าเป็นใบๆ ในภาษาไทยแล้วเผลอคิดว่าเป็นพหูพจน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'สัมภาระกระเป๋าเดินทางใบนี้หนักเกินกว่าที่ฉันจะยกคนเดียวได้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "คำนามนับไม่ได้ที่มักออกสอบ: luggage, baggage, furniture, information, advice, news, homework ทั้งหมดนี้ถือเป็นเอกพจน์และใช้กริยาเอกพจน์"
        }
      ]
    }
  },
  {
    "id": "bm-eng-027",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "No sooner had the bell rung ________ the students rushed out.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "when",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "than",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "as",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "then",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'than' เพราะสำนวน No sooner... ต้องใช้คู่กับ 'than' เสมอ",
      "trickTip": "💡 No sooner คู่กับ than / Hardly คู่กับ when",
      "commonMistake": "⚠️ ระวังจำสับสนนำ when มาใช้กับ No sooner",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'พอกระดิ่งส่งสัญญาณดังขึ้น นักเรียนก็กรูกันวิ่งออกไปทันที'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "โครงสร้าง: 'No sooner had + S + V.3 ... than + S + V.2' แปลว่า 'พอ...ก็...' จำคู่กับ Hardly...when..."
        }
      ]
    }
  },
  {
    "id": "bm-eng-028",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The man ________ car was stolen called the police.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "who",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "whom",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "whose",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "which",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'whose' เพราะใช้แสดงความเป็นเจ้าของรถยนต์ของชายคนนั้น (the man's car -> whose car)",
      "trickTip": "💡 คน + whose + คำนามสิ่งของ",
      "commonMistake": "⚠️ ระวังใช้ who หรือ which แทนความเป็นเจ้าของ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ชายคนที่รถยนต์ของเขาถูกขโมยได้โทรแจ้งเจ้าหน้าที่ตำรวจ'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Relative Pronoun แสดงความเป็นเจ้าของ: 'whose + คำนามที่เป็นของบุคคลนั้น' (whose car = รถของเขา)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-029",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "We had better ________ right now before the traffic gets heavy.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "leave",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "to leave",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "leaving",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "left",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'leave' เพราะคำว่า 'had better' เป็นกริยาช่วย (Modal) มีความหมายว่า 'ควรจะ' ต้องตามหลังด้วย V.infinitive ไม่ผันและไม่มี to",
      "trickTip": "💡 had better + V.1 ไม่เติม to",
      "commonMistake": "⚠️ อย่าเห็นคำว่า had แล้วคิดว่าเป็นอดีตแล้วเผลอเลือก left",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'พวกเราควรจะออกเดินทางเดี๋ยวนี้เลย ก่อนที่การจราจรจะติดขัด'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "ไวยากรณ์: 'had better + V.infinitive' (เช่น had better leave, had better study) รูปปฏิเสธคือ 'had better not + V.inf'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-030",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "He is capable ________ solving complex mathematical equations.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "of",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "to",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "in",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "with",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'of' เพราะคำคุณศัพท์ capable ต้องใช้คู่กับบุพบท 'of' เสมอ (capable of + V-ing) แปลว่า 'มีความสามารถในการ...'",
      "trickTip": "💡 capable of + V-ing / able to + V.inf",
      "commonMistake": "⚠️ ระวังใช้ capable to ซึ่งเป็นข้อผิดพลาดที่พบบ่อย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เขามีความสามารถในการแก้โจทย์สมการคณิตศาสตร์ที่ซับซ้อนได้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "สำนวนบุพบท: 'capable of + V-ing' เทียบเท่ากับ 'able to + V.inf'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-031",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Either the teacher or the students ________ responsible for this.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "was",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "be",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'are' เพราะโครงสร้าง Either A or B กริยาต้องผันตามประธานตัวหลัง (B) คือ the students ซึ่งเป็นพหูพจน์",
      "trickTip": "💡 Either...or... ผันตามประธานตัวหลังสุด",
      "commonMistake": "⚠️ อย่าผันตาม the teacher ที่อยู่ตัวแรก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ไม่คุณครูก็นักเรียนจะต้องเป็นผู้รับผิดชอบต่อสิ่งนี้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "กฎ Subject-Verb Agreement: 'Either A or B' และ 'Neither A nor B' กริยาจะผันตามประธานตัวที่อยู่ใกล้กริยาที่สุด (ประธานตัวหลัง)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-032",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "I wish I ________ taller so I could join the basketball team.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "am",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "was",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "were",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "have been",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'were' เพราะการใช้ wish เพื่อแสดงความปรารถนาในสิ่งที่ไม่เป็นจริงในปัจจุบัน ต้องใช้รูป Past Subjunctive ซึ่งใช้ 'were' กับประธานทุกตัว",
      "trickTip": "💡 I wish I were... (เรื่องสมมุติในปัจจุบันใช้ were เสมอ)",
      "commonMistake": "⚠️ แม้ประธานจะเป็น I แต่ในภาษาเขียนทางการของข้อสอบคัดเลือกจะใช้ were",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ฉันหวังว่าฉันจะสูงกว่านี้ เพื่อที่ฉันจะได้เข้าร่วมทีมบาสเกตบอล'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Subjunctive with Wish: 'Subject + wish + Subject + were / V.2' สำหรับความปรารถนาในปัจจุบันที่ตรงข้ามกับความจริง (I wish I were...)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-033",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "The police ________ investigating the robbery case.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "has been",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "was",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'are' เพราะคำว่า 'police' (ตำรวจ) เป็นคำนามพหูพจน์รวมหมู่ (Collective Plural Noun) เสมอในภาษาอังกฤษ",
      "trickTip": "💡 police = คำนามพหูพจน์เสมอ ใช้ are/were",
      "commonMistake": "⚠️ ระวังคิดว่า police เป็นเอกพจน์แล้วเผลอเลือก is (ถ้าต้องการเอกพจน์ต้องใช้ a police officer)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เจ้าหน้าที่ตำรวจกำลังสืบสวนคดีโจรกรรมนี้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "คำนามพหูพจน์เสมอ: police, people, cattle, poultry กริยาที่ใช้ตามหลังต้องเป็นรูปพหูพจน์ (are/were/have)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-034",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "She prefers tea ________ coffee in the morning.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "than",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "to",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "more than",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "over to",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'to' เพราะคำกริยา prefer ใช้คู่กับบุพบท 'to' ในโครงสร้าง 'prefer A to B' แปลว่า 'ชอบ A มากกว่า B'",
      "trickTip": "💡 prefer A to B = ชอบ A มากกว่า B (ใช้ to ไม่ใช้ than)",
      "commonMistake": "⚠️ คนไทยมักติดคำว่า 'มากกว่า' จึงเผลอเลือก than",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เธอชอบดื่มชามากกว่ากาแฟในตอนเช้า'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "โครงสร้างการเปรียบเทียบความชอบ: 'prefer + Noun/V-ing + to + Noun/V-ing' (ห้ามใช้ than คู่กับ prefer)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-035",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "He stopped ________ to buy some fresh flowers on his way home.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "walk",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "walking",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "to walk",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "walked",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'walking' เพราะบริบทคือเขาหยุดการเดิน (เลิกเดินชั่วคราว) เพื่อที่จะซื้อดอกไม้: stop + V-ing (หยุดทำสิ่งนั้น)",
      "trickTip": "💡 stop + V-ing = หยุดทำสิ่งนั้น",
      "commonMistake": "⚠️ ระวังความหมายสับสนระหว่างหยุดทำ กับหยุดเพื่อจะทำ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เขาหยุดเดินเพื่อที่จะซื้อดอกไม้สดระหว่างทางกลับบ้าน'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "ความแตกต่างของกริยา stop: 'stop doing something' = หยุดทำสิ่งนั้น (หยุดเดิน), ส่วน 'stop to do something' = หยุดเพื่อจะทำสิ่งใหม่"
        }
      ]
    }
  },
  {
    "id": "bm-eng-036",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Physics ________ my favorite subject when I was in school.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "was",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "were",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "are",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'was' เพราะ Physics (วิชาฟิสิกส์) แม้จะลงท้ายด้วย -s แต่เป็นชื่อวิชาจึงนับเป็นคำนามเอกพจน์ และบริบทอยู่ในอดีต (when I was)",
      "trickTip": "💡 ชื่อวิชาลงท้าย s = นามเอกพจน์",
      "commonMistake": "⚠️ ระวังเห็น -s ท้ายคำแล้วคิดว่าเป็นพหูพจน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'วิชาฟิสิกส์เคยเป็นวิชาที่ฉันชอบที่สุดตอนที่ฉันยังเรียนอยู่'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "ชื่อวิชาและชื่อโรคที่ลงท้ายด้วย -s เช่น Physics, Mathematics, Economics, News, Measles ถือเป็นคำนามเอกพจน์เสมอ และเมื่อมี when I was จึงใช้ Past Tense 'was'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-037",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "I am not used to ________ up so early in the morning.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "get",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "getting",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "got",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "gets",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'getting' เพราะโครงสร้าง 'be used to' แปลว่า 'เคยชินกับ...' คำว่า to ในที่นี้เป็นบุพบท จึงต้องตามด้วย Gerund (V-ing)",
      "trickTip": "💡 be used to + V-ing (เคยชิน) vs used to + V.1 (เคยทำในอดีต)",
      "commonMistake": "⚠️ ระวังจำสลับกับ used to ธรรมดาแล้วเผลอเลือก get",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ฉันยังไม่เคยชินกับการตื่นนอนแต่เช้าตรู่ขนาดนี้'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "เปรียบเทียบโครงสร้าง: 'be/get used to + V-ing' = เคยชินกับ..., ส่วน 'used to + V.inf' = เคยทำในอดีตแต่ปัจจุบันเลิกแล้ว"
        }
      ]
    }
  },
  {
    "id": "bm-eng-038",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Not only Tom but also his brothers ________ going to Japan.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "is",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "are",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "was",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "has been",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'are' เพราะโครงสร้าง 'Not only A but also B' กริยาต้องผันตามประธานตัวหลัง (B) คือ his brothers ซึ่งเป็นพหูพจน์",
      "trickTip": "💡 Not only...but also... ผันตามประธานตัวหลัง",
      "commonMistake": "⚠️ อย่าผันตาม Tom ที่อยู่ข้างหน้า",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ไม่ใช่แค่ทอมเท่านั้น แต่พี่น้องของเขาก็กำลังจะไปประเทศญี่ปุ่นด้วย'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "กฎไวยากรณ์: 'Not only A but also B + Verb' กริยาจะสอดคล้องกับประธานตัวหลังสุด (B) คือ his brothers จึงใช้ 'are'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-039",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "If you had studied harder, you ________ the entrance exam.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "would pass",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "will pass",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "would have passed",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "passed",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'would have passed' เพราะเป็นประโยคเงื่อนไขแบบที่ 3 (Third Conditional) แสดงเรื่องสมมุติในอดีตที่ไม่ได้เกิดขึ้นจริง: If + had + V.3, would have + V.3",
      "trickTip": "💡 If had + V.3 คู่กับ would have + V.3",
      "commonMistake": "⚠️ ระวังใช้ would pass ซึ่งเป็นเงื่อนไขแบบที่ 2",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'ถ้าในตอนนั้นเธอตั้งใจอ่านหนังสือมากกว่านี้ เธอคงจะสอบเข้าผ่านไปแล้ว'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "Third Conditional: 'If + Subject + had + V.3, Subject + would have + V.3' ใช้พูดถึงเหตุการณ์ในอดีตที่เสียดายและย้อนกลับไปแก้ไขไม่ได้"
        }
      ]
    }
  },
  {
    "id": "bm-eng-040",
    "subjectId": "english",
    "topicId": "eng-grammar",
    "topicName": "Grammar & Structure",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 60,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Grammar"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "She asked me where ________ during the summer vacation.",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "did I go",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "I had gone",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "had I gone",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "I go",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'I had gone' เพราะเป็นประโยคคำถามทางอ้อม (Indirect / Embedded Question) ที่ต้องเรียงลำดับประโยคแบบบอกเล่า (Question word + Subject + Verb) และถอย Tense ตาม Past Tense ข้างหน้า (asked)",
      "trickTip": "💡 Indirect Question: คำเชื่อม + ประธาน + กริยา (ห้ามกลับกริยาเหมือนคำถามตรง)",
      "commonMistake": "⚠️ ข้อผิดพลาดอันดับ 1 คือการเผลอเรียงประโยคเป็นคำถาม did I go",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลประโยคและวิเคราะห์บริบท",
          "content": "แปล: 'เธอถามฉันว่าฉันได้ไปเที่ยวที่ไหนมาในช่วงปิดเทอมฤดูร้อน'"
        },
        {
          "stepNumber": 2,
          "title": "หลักไวยากรณ์และการเลือกคำตอบ",
          "content": "กฎประโยค Indirect Question: เมื่อคำถามซ้อนอยู่ในประโยคอื่น ห้ามสลับกริยาช่วยมาไว้หน้าประธาน (ห้ามใช้ did I go หรือ had I gone) ต้องเรียงเป็น 'where + I + had gone'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-041",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read the text: 'Honeybees are essential pollinators for many crops. Without them, food production would drop drastically.' What is the main idea?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Bees produce sweet honey.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Honeybees play a vital role in food production.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Farmers do not like bees.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Bees live in large colonies.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ใจความสำคัญของบทความคือ ผึ้งมีบทบาทสำคัญอย่างยิ่งต่อการผสมเกสรพืชผลทางการเกษตรของโลก",
      "trickTip": "💡 Main Idea = ประเด็นหลักที่ผู้เขียนต้องการสื่อ (มักอยู่ที่ประโยคแรกหรือประโยคสุดท้าย)",
      "commonMistake": "📚 คำศัพท์สำคัญ: essential = จำเป็นอย่างยิ่ง, pollinators = ผู้ผสมเกสร, drastically = อย่างมหาศาล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'ผึ้งเป็นแมลงผสมเกสรที่จำเป็นอย่างยิ่งสำหรับพืชผลหลายชนิด หากไม่มีพวกมัน ผลผลิตอาหารของโลกจะลดลงอย่างมหาศาล'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "วิเคราะห์ตัวเลือก: ตัวเลือกที่ 2 สรุปใจความหลักได้ครอบคลุมและตรงกับข้อความมากที่สุด ส่วนตัวเลือก 1 และ 4 เป็นเพียงข้อเท็จจริงทั่วไปที่บทความไม่ได้เน้นย้ำ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-042",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the sentence 'The desert climate is extremely *arid*, with less than 10 cm of rain per year.' What does *arid* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Cold and windy",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Dry and lacking water",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Hot and humid",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Fertile and green",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'arid' หมายถึง 'แห้งแล้ง หรือขาดแคลนน้ำ' สอดคล้องกับตัวเลือกที่ 2 (Dry and lacking water)",
      "trickTip": "💡 เดาความหมายศัพท์จาก Context Clues (คำใบ้ในบริบทแวดล้อม)",
      "commonMistake": "📚 คำศัพท์สำคัญ: arid = แห้งแล้ง, fertile = อุดมสมบูรณ์, humid = ชื้น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'สภาพภูมิอากาศของทะเลทรายนั้นมีความแห้งแล้งอย่างยิ่ง โดยมีปริมาณน้ำฝนน้อยกว่า 10 เซนติเมตรต่อปี'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "บริบทชี้แนะ: คำว่า 'desert climate' (ภูมิอากาศทะเลทราย) และ 'less than 10 cm of rain' (ฝนตกน้อยมาก) เป็นตัวบอกความหมายว่า arid แปลว่าแห้งแล้ง"
        }
      ]
    }
  },
  {
    "id": "bm-eng-043",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Notice: 'Please silence all mobile devices before entering the examination hall.' Where would you most likely see this sign?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "In a public park",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "At a school exam room",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "In a supermarket",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "At a gas station",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ป้ายประกาศนี้มักพบที่ 'ห้องสอบของโรงเรียน' (At a school exam room) เพราะคำว่า examination hall หมายถึงห้องสอบ",
      "trickTip": "💡 examination hall = ห้องสอบ, silence = ปิดเสียง",
      "commonMistake": "📚 คำศัพท์สำคัญ: examination แปลว่าการสอบ สังเกตจากรากศัพท์ exam",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลป้ายประกาศ: 'กรุณาปิดเสียงอุปกรณ์มือถือทุกชนิดก่อนเข้าสู่ห้องสอบ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำสำคัญ: 'examination hall' แปลว่าห้องสอบ และการขอความร่วมมือให้ปิดเสียงโทรศัพท์ (silence mobile devices) เพื่อไม่ให้รบกวนสมาธิผู้สอบ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-044",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Plastic pollution in oceans harms marine animals when they mistake plastic bags for jellyfish.' Why do sea turtles eat plastic bags?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "They prefer plastic taste.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Plastic bags look similar to jellyfish.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "They need plastic for energy.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "They are trained to clean oceans.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "เต่าทะเลกินถุงพลาสติกเพราะถุงพลาสติกที่ลอยในน้ำมีลักษณะรูปร่างคล้ายกับแมงกะพรุนซึ่งเป็นอาหารของพวกมัน",
      "trickTip": "💡 mistake A for B = เข้าใจผิดคิดว่า A คือ B",
      "commonMistake": "📚 คำศัพท์สำคัญ: marine animals = สัตว์ทะเล, jellyfish = แมงกะพรุน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'มลพิษจากพลาสติกในมหาสมุทรเป็นอันตรายต่อสัตว์ทะเลเมื่อพวกมันเข้าใจผิดคิดว่าถุงพลาสติกคือแมงกะพรุน'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "สำนวน 'mistake A for B' แปลว่า เข้าใจผิดคิดว่า A คือ B ในที่นี้คือเข้าใจผิดว่าถุงพลาสติกคือแมงกะพรุน (jellyfish) สอดคล้องกับตัวเลือกที่ 2"
        }
      ]
    }
  },
  {
    "id": "bm-eng-045",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Although renewable energy is cleaner, initial installation costs remain high.' What is a disadvantage of renewable energy?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "It creates air pollution.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "It is expensive to install initially.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "It runs out quickly.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "It is unsafe to use.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ข้อเสียของพลังงานหมุนเวียนตามที่บทความระบุคือ 'มีค่าใช้จ่ายในการติดตั้งเริ่มต้นที่สูงมาก' (expensive to install initially)",
      "trickTip": "💡 คำถาม disadvantage / drawback = มองหาข้อเสียหรือข้อจำกัด",
      "commonMistake": "📚 คำศัพท์สำคัญ: renewable energy = พลังงานหมุนเวียน, installation = การติดตั้ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'แม้ว่าพลังงานหมุนเวียนจะสะอาดกว่า แต่ต้นทุนค่าติดตั้งในระยะเริ่มต้นยังคงสูงอยู่'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'disadvantage' ถามถึงข้อเสีย ซึ่งตรงกับท่อน 'initial installation costs remain high' (ต้นทุนติดตั้งเริ่มต้นยังสูง)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-046",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Tom stayed up all night studying for his science quiz. The next morning, his eyes were red and heavy.' What can be inferred?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Tom slept very well.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Tom was exhausted and sleepy.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Tom failed the quiz.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Tom dislikes science.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สามารถอนุมานได้ว่า 'ทอมรู้สึกเหนื่อยล้าและง่วงนอนอย่างมาก' (Tom was exhausted and sleepy) จากการอดนอนทั้งคืน",
      "trickTip": "💡 Inference = การตีความสิ่งที่ไม่ได้เขียนบอกตรงๆ จากหลักฐานในเนื้อเรื่อง",
      "commonMistake": "📚 คำศัพท์สำคัญ: exhausted = เหนื่อยล้าหมดแรง, stayed up = อดนอน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'ทอมอดนอนตลอดทั้งคืนเพื่ออ่านหนังสือสอบย่อยวิชาวิทยาศาสตร์ เช้าวันรุ่งขึ้น ดวงตาของเขาแดงก่ำและหนักอึ้ง'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "การอนุมาน (Inference): 'stayed up all night' (อดนอนทั้งคืน) และ 'eyes were red and heavy' (ตาแดงและลืมตาไม่ขึ้น) แสดงถึงความเหนื่อยล้าอดนอน (exhausted)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-047",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the sentence 'The doctor advised him to *abstain* from sugary drinks.' What does *abstain* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "To drink more",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "To avoid or stop consuming",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "To mix with water",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "To buy from stores",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'abstain from' หมายถึง 'งดเว้น หลีกเลี่ยง หรือหยุดบริโภค' ตรงกับตัวเลือกที่ 2 (To avoid or stop consuming)",
      "trickTip": "💡 abstain from = งดเว้น / หลีกเลี่ยง",
      "commonMistake": "📚 คำศัพท์สำคัญ: อย่าสับสนกับ attain (บรรลุ) หรือ obtain (ได้รับ)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'แพทย์ได้แนะนำให้เขางดเว้นจากเครื่องดื่มที่มีน้ำตาลสูง'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "วิเคราะห์คำศัพท์: สำนวน 'abstain from + Noun' แปลว่า งดเว้น ละเว้น ซึ่งหมอมักแนะนำกับของที่ส่งผลเสียต่อสุขภาพ เช่น sugary drinks หรือ alcohol"
        }
      ]
    }
  },
  {
    "id": "bm-eng-048",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Email: 'Dear Parents, School will be dismissed early at 12:00 PM this Friday for teacher training.' What is the purpose of this email?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "To cancel Friday classes",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "To notify parents about early dismissal",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "To invite parents to training",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "To request school donations",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "จุดประสงค์ของอีเมลนี้คือ 'เพื่อแจ้งให้ผู้ปกครองทราบเกี่ยวกับการเลิกเรียนเร็วกว่าปกติในวันศุกร์'",
      "trickTip": "💡 purpose = จุดประสงค์ของบทความ/จดหมาย",
      "commonMistake": "📚 คำศัพท์สำคัญ: dismiss = ปล่อยแถว/เลิกเรียน, notify = แจ้งให้ทราบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลอีเมล: 'เรียนท่านผู้ปกครอง โรงเรียนจะเลิกเรียนเร็วกว่าปกติในเวลา 12:00 น. ในวันศุกร์นี้ เนื่องจากการจัดอบรมครู'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'dismissed early' แปลว่า เลิกเรียนเร็วกว่าเวลาปกติ จึงตรงกับข้อ 2 (notify parents about early dismissal)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-049",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen.' What is a product of photosynthesis?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Carbon dioxide",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Oxygen",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Sunlight",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Nitrogen",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลผลิต (Product) ของกระบวนการสังเคราะห์ด้วยแสงคือ 'ออกซิเจน (Oxygen)' และน้ำตาลกลูโคส",
      "trickTip": "💡 product = ผลผลิตที่ได้ / reactant = สารตั้งต้น",
      "commonMistake": "📚 คำศัพท์สำคัญ: photosynthesis = การสังเคราะห์ด้วยแสง, convert into = เปลี่ยนเป็น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'กระบวนการสังเคราะห์ด้วยแสงเปลี่ยนพลังงานแสงแดด น้ำ และคาร์บอนไดออกไซด์ ให้กลายเป็นน้ำตาลกลูโคสและออกซิเจน'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'product' หมายถึง สารผลลัพธ์ที่เกิดขึ้นหลังปฏิกิริยา (glucose และ oxygen) ส่วน sunlight, water, CO2 เป็นสารตั้งต้น (reactants)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-050",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the sentence 'The antique vase was extremely *fragile*, so she handled it with great care.' What does *fragile* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Heavy and durable",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Easily broken or damaged",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Very inexpensive",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Extremely dirty",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'fragile' หมายถึง 'บอบบาง แตกหักเสียหายได้ง่าย' ตรงกับตัวเลือกที่ 2 (Easily broken or damaged)",
      "trickTip": "💡 fragile = แตกหักง่าย (มักพบป้ายนี้บนกล่องพัสดุ)",
      "commonMistake": "📚 คำศัพท์สำคัญ: fragile = แตกง่าย, durable = ทนทาน, antique = วัตถุโบราณ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'แจกันโบราณชิ้นนั้นบอบบางแตกหักง่ายอย่างยิ่ง ดังนั้นเธอจึงถือมันด้วยความระมัดระวังเป็นพิเศษ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "บริบทแวดล้อม: 'handled it with great care' (ถือด้วยความระมัดระวังอย่างยิ่ง) ชี้ชัดว่าสิ่งของนั้นแตกหักง่าย"
        }
      ]
    }
  },
  {
    "id": "bm-eng-051",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Recipe: 'Preheat oven to 180°C. Mix flour, sugar, and eggs in a bowl. Bake for 25 minutes.' What is the first step?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Mix the ingredients",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Bake for 25 minutes",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Preheat the oven",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Serve warm",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ขั้นตอนแรกสุดตามสูตรการทำอาหารคือ 'วอร์มเตาอบที่อุณหภูมิ 180°C' (Preheat the oven)",
      "trickTip": "💡 Preheat = อุ่นเตาล่วงหน้าก่อนอบจริง",
      "commonMistake": "📚 คำศัพท์สำคัญ: ingredients = ส่วนผสม, bake = อบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลสูตรทำขนม: '1. อุ่นเตาอบล่วงหน้าที่อุณหภูมิ 180°C 2. ผสมแป้ง น้ำตาล และไข่ลงในชามผสม 3. อบเป็นเวลา 25 นาที'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "โจทย์ถาม 'the first step' (ขั้นตอนแรก) ประโยคแรกของสูตรระบุชัดเจนว่า 'Preheat oven to 180°C'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-052",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Whales are mammals, not fish. They breathe air through blowholes and nurse their calves with milk.' Which is true about whales?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "They lay eggs.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "They breathe using gills.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "They feed their young with milk.",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "They are cold-blooded.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ข้อความที่ถูกต้องเกี่ยวกับวาฬคือ 'พวกมันเลี้ยงลูกอ่อนด้วยน้ำนม' (They feed their young with milk) เพราะเป็นสัตว์เลี้ยงลูกด้วยนม",
      "trickTip": "💡 nurse with milk = เลี้ยงลูกด้วยนม (ลักษณะของ mammals)",
      "commonMistake": "📚 คำศัพท์สำคัญ: mammals = สัตว์เลี้ยงลูกด้วยนม, gills = เหงือกปลา, calves = ลูกสัตว์ตัวใหญ่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'วาฬเป็นสัตว์เลี้ยงลูกด้วยนม ไม่ใช่ปลา พวกมันหายใจรับอากาศผ่านช่องพ่นน้ำด้านบน และเลี้ยงลูกอ่อนด้วยน้ำนม'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'nurse their calves with milk' แปลว่า เลี้ยงลูกอ่อนด้วยนม (calves = ลูกวาฬ) สอดคล้องกับข้อ 3 (feed their young with milk)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-053",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'The library will be closed for renovation from June 1 to June 15.' When will the library reopen?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "June 1",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "June 15",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "June 16",
        "isCorrect": true
      },
      {
        "id": "c4",
        "label": "4",
        "content": "July 1",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ห้องสมุดจะเปิดให้บริการอีกครั้งในวันที่ 16 มิถุนายน (June 16) ซึ่งเป็นวันแรกหลังจากสิ้นสุดการปิดปรับปรุงในวันที่ 15 มิถุนายน",
      "trickTip": "💡 ปิดถึงวันที่ 15 ➔ วันเปิดคือวันที่ 16",
      "commonMistake": "📚 คำศัพท์สำคัญ: ระวังตอบ June 15 ซึ่งเป็นวันสุดท้ายที่ยังปิดทำการอยู่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'ห้องสมุดจะปิดเพื่อปรับปรุงตั้งแต่วันที่ 1 มิถุนายน ถึง 15 มิถุนายน'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'reopen' ถามถึงวันที่เริ่มเปิดทำการใหม่ ซึ่งต้องเป็นวันถัดไปหลังจากวันสิ้นสุดการปิด (15 มิ.ย. ยังคงปิดอยู่ วันเปิดคือ 16 มิ.ย.)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-054",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the text: 'The detective found a *crucial* clue that solved the mysterious case.' What is a synonym for *crucial*?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Unimportant",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Extremely important / vital",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Tiny",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Funny",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'crucial' เป็นคำพ้องความหมาย (Synonym) กับ 'extremely important หรือ vital' แปลว่า สำคัญยิ่ง / มีความสำคัญชี้ขาด",
      "trickTip": "💡 crucial = สำคัญยิ่งยวด (ตรงข้ามกับ unimportant)",
      "commonMistake": "📚 คำศัพท์สำคัญ: clue = เบาะแส, mysterious = ลึกลับน่าพิศวง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'นักสืบได้ค้นพบเบาะแสสำคัญยิ่งที่สามารถคลี่คลายคดีปริศนานี้ได้'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'crucial' หมายถึง สิ่งที่สำคัญมากจนสามารถตัดสินผลลัพธ์ได้ (ตรงกับ vital / essential / extremely important)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-055",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Advertisement: 'Buy 1 pair of running shoes and get the second pair at 50% off!' If one pair costs $80, how much for 2 pairs?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "$100",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "$120",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "$140",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "$160",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ซื้อรองเท้า 2 คู่จ่ายเงินทั้งหมด $120 (คู่แรก $80 + คู่ที่สองลด 50% เหลือ $40)",
      "trickTip": "💡 50% off = ลดราคาครึ่งหนึ่ง (เหลือ 50% ของราคาเดิม)",
      "commonMistake": "📚 คำศัพท์สำคัญ: ระวังคิดลด 50% ทั้ง 2 คู่ หรือคิดราคาเต็ม 2 คู่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลโฆษณา: 'ซื้อรองเท้าวิ่ง 1 คู่ รับสิทธิ์ซื้อคู่ที่สองในราคาลด 50%!' ถ้ารองเท้าราคาคู่ละ 80 ดอลลาร์"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "การคำนวณ: คู่ที่ 1 = $80, คู่ที่ 2 = 50% ของ $80 = $40 รวมเป็น $80 + $40 = $120"
        }
      ]
    }
  },
  {
    "id": "bm-eng-056",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Global warming causes polar ice caps to melt, leading to rising sea levels.' What is the effect of melting polar ice caps?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Warmer summers",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Rising sea levels",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Decreased rainfall",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "More volcanic eruptions",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลกระทบจากการละลายของธารน้ำแข็งขั้วโลกคือ 'ทำให้ระดับน้ำทะเลสูงขึ้น' (Rising sea levels)",
      "trickTip": "💡 Cause (สาเหตุ) ➔ Effect (ผลลัพธ์: leading to...)",
      "commonMistake": "📚 คำศัพท์สำคัญ: ice caps = ธารน้ำแข็งขั้วโลก, sea levels = ระดับน้ำทะเล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'ภาวะโลกร้อนส่งผลให้ธารน้ำแข็งขั้วโลกละลาย นำไปสู่การเพิ่มสูงขึ้นของระดับน้ำทะเล'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "วลี 'leading to rising sea levels' บ่งชี้ผลลัพธ์ (Effect) โดยตรงว่าการละลายของน้ำแข็งทำให้ระดับน้ำทะเลสูงขึ้น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-057",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the text: 'The student was *reluctant* to speak in front of the class because of stage fright.' What does *reluctant* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Eager and excited",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Hesitant and unwilling",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Confident",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Angry",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'reluctant' หมายถึง 'ลังเลใจ หรือไม่เต็มใจ' ตรงกับตัวเลือกที่ 2 (Hesitant and unwilling)",
      "trickTip": "💡 reluctant = ลังเล / ไม่เต็มใจ (ตรงข้ามกับ eager / willing)",
      "commonMistake": "📚 คำศัพท์สำคัญ: stage fright = อาการตื่นเวที, hesitant = ลังเล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'นักเรียนคนนั้นรู้สึกลังเลไม่เต็มใจที่จะพูดหน้าชั้นเรียนเนื่องจากอาการตื่นเวที'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำใบ้ 'because of stage fright' (เพราะตื่นเวที) แสดงให้เห็นว่านักเรียนไม่อยากพูดหรือรู้สึกลังเล (hesitant)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-058",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Weather Report: 'Expect heavy thunderstorms and strong winds along the coastal areas tomorrow afternoon.' What should residents do?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Go swimming at the beach",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Stay indoors and prepare for storms",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Go sailing",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Wash their cars",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สิ่งที่ประชาชนควรปฏิบัติตามรายงานสภาพอากาศคือ 'อยู่ภายในอาคารที่ปลอดภัยและเตรียมรับมือพายุ' (Stay indoors)",
      "trickTip": "💡 thunderstorm = พายุฝนฟ้าคะนอง ➔ stay indoors",
      "commonMistake": "📚 คำศัพท์สำคัญ: coastal areas = พื้นที่ชายฝั่ง, residents = ผู้อยู่อาศัย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลพยากรณ์อากาศ: 'คาดว่าจะมีพายุฝนฟ้าคะนองรุนแรงและลมกระโชกแรงตามแนวชายฝั่งในบ่ายวันพรุ่งนี้'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "เมื่อมี 'heavy thunderstorms and strong winds' การทำกิจกรรมกลางแจ้งหรือลงเล่นน้ำทะเลจะเป็นอันตรายอย่างยิ่ง การหลบในอาคาร (stay indoors) จึงเป็นคำตอบที่ถูกต้องและปลอดภัยที่สุด"
        }
      ]
    }
  },
  {
    "id": "bm-eng-059",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Unlike reptiles, birds are warm-blooded and maintain a constant body temperature.' What does this text contrast?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Birds and reptiles' body temperature regulation",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Bird migration",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Reptile hunting",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Egg laying",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "บทความนี้เปรียบเทียบความแตกต่างระหว่าง 'การควบคุมอุณหภูมิร่างกายของนกและสัตว์เลื้อยคลาน' (Body temperature regulation)",
      "trickTip": "💡 contrast = เปรียบเทียบความแตกต่าง",
      "commonMistake": "📚 คำศัพท์สำคัญ: warm-blooded = สัตว์เลือดอุ่น, reptiles = สัตว์เลื้อยคลาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'นกแตกต่างจากสัตว์เลื้อยคลานตรงที่นกเป็นสัตว์เลือดอุ่นและสามารถรักษาอุณหภูมิร่างกายให้คงที่ได้'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'Unlike' (ไม่เหมือนกับ) ใช้เปรียบเทียบความแตกต่าง โดยประโยคพูดถึงสัตว์เลือดอุ่น (warm-blooded) และการรักษาอุณหภูมิร่างกาย (maintain constant temperature)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-060",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the sentence 'The scientist conducted an *innovative* experiment never done before.' What does *innovative* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Traditional",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Creative and new",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Boring",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Expensive",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'innovative' หมายถึง 'แปลกใหม่ สร้างสรรค์ หรือเป็นนวัตกรรมใหม่' ตรงกับตัวเลือกที่ 2 (Creative and new)",
      "trickTip": "💡 innovative = แปลกใหม่เชิงสร้างสรรค์ (รากศัพท์เดียวกับ innovation)",
      "commonMistake": "📚 คำศัพท์สำคัญ: conduct experiment = ทำการทดลอง, traditional = ดั้งเดิม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'นักวิทยาศาสตร์ได้ทำการทดลองที่แปลกใหม่สร้างสรรค์อย่างที่ไม่เคยมีใครทำมาก่อน'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำใบ้ 'never done before' (ไม่เคยทำมาก่อน) ชี้ชัดว่าการทดลองนั้นมีความแปลกใหม่และสร้างสรรค์ (innovative / creative)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-061",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Chameleons change color not only for camouflage, but also to regulate body temperature and express emotions.' Why do chameleons change color?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Only to hide from predators",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "To regulate temperature and communicate",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Because they are blind",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "To attract insects",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กิ้งก่าเปลี่ยนสีผิวด้วยหลายสาเหตุ ได้แก่ เพื่อพรางตัว ปรับอุณหภูมิร่างกาย และสื่อสารอารมณ์ สอดคล้องกับข้อ 2",
      "trickTip": "💡 not only A but also B = ไม่ใช่แค่ A แต่ยังมี B ด้วย",
      "commonMistake": "📚 คำศัพท์สำคัญ: camouflage = การพรางตัว, regulate = ควบคุมปรับเปลี่ยน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'กิ้งก่าเปลี่ยนสีผิวไม่ใช่เพียงเพื่อการพรางตัวเท่านั้น แต่ยังเพื่อควบคุมอุณหภูมิของร่างกายและแสดงอารมณ์อีกด้วย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "โครงสร้าง 'not only A, but also B' แสดงว่ามีเหตุผลมากกว่า 1 อย่าง ดังนั้นตัวเลือกที่ตอบว่า 'Only...' (เพียงอย่างเดียว) จึงผิด"
        }
      ]
    }
  },
  {
    "id": "bm-eng-062",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Notice: 'Keep off the grass during maintenance.' What is the rule?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "You can picnic on the grass.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Do not walk on the grass.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Cut the grass yourself.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Water the grass.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กฎระเบียบของป้ายนี้คือ 'ห้ามเดินเหยียบหรือเข้าไปบนสนามหญ้า' (Do not walk on the grass)",
      "trickTip": "💡 Keep off = ห้ามเข้าไปเหยียบ",
      "commonMistake": "📚 คำศัพท์สำคัญ: maintenance = การซ่อมบำรุงรักษา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลป้ายประกาศ: 'กรุณาอย่าย่ำบนสนามหญ้าในระหว่างการปรับปรุงบำรุงรักษา'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "สำนวน 'Keep off + สถานที่' แปลว่า ห้ามเข้าไป / ห้ามเหยียบย่ำ สอดคล้องกับ Do not walk on the grass"
        }
      ]
    }
  },
  {
    "id": "bm-eng-063",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Sleep deprivation negatively affects memory, focus, and immune function in adolescents.' What happens when teenagers lack sleep?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "They become stronger.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Their focus and memory deteriorate.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "They grow taller faster.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Their grades improve.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลกระทบเมื่อวัยรุ่นอดนอนคือ 'สมาธิและความจำจะเสื่อมถอยลง' (Their focus and memory deteriorate)",
      "trickTip": "💡 negatively affects = ส่งผลเสีย / deteriorate = แย่ลง",
      "commonMistake": "📚 คำศัพท์สำคัญ: sleep deprivation = การนอนไม่พอ, adolescents = วัยรุ่น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'การอดนอนส่งผลกระทบเชิงลบต่อความจำ สมาธิ และการทำงานของระบบภูมิคุ้มกันในวัยรุ่น'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'Sleep deprivation' (การอดนอน) และ 'negatively affects' (ส่งผลเสีย) ตรงกับคำว่า deteriorate (แย่ลง/เสื่อมถอย)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-064",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the text: 'The athlete showed remarkable *resilience* by winning gold after a severe knee injury.' What does *resilience* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Ability to recover quickly from hardship",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Physical weakness",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Arrogance",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Carelessness",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'resilience' หมายถึง 'ความสามารถในการฟื้นตัวจากความยากลำบากหรือบาดแผลได้อย่างรวดเร็ว' ตรงกับตัวเลือกที่ 1",
      "trickTip": "💡 resilience = ความยืดหยุ่นทางใจ / ความสามารถในการฟื้นตัว",
      "commonMistake": "📚 คำศัพท์สำคัญ: injury = อาการบาดเจ็บ, remarkable = ยอดเยี่ยมโดดเด่น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'นักกีฬาคนนั้นได้แสดงให้เห็นถึงพลังใจและการฟื้นตัวอันยอดเยี่ยม โดยสามารถคว้าเหรียญทองมาได้หลังจากอาการบาดเจ็บที่หัวเข่าอย่างรุนแรง'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "บริบท: การกลับมาชนะเหรียญทองได้หลังจากบาดเจ็บหนัก แสดงถึงพลังของการไม่ยอมแพ้และฟื้นตัวได้ไว (resilience)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-065",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Electric vehicles produce zero tailpipe emissions, making them environmentally friendly.' Why are EVs good for nature?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "They are cheaper to build.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "They produce no exhaust emissions while driving.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "They don't need electricity.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "They drive faster.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ยานยนต์ไฟฟ้าเป็นมิตรต่อสิ่งแวดล้อมเพราะ 'ไม่มีการปล่อยมลพิษจากท่อไอเสียขณะขับขี่' (produce no exhaust emissions)",
      "trickTip": "💡 zero emissions = ปลอดมลพิษ 100%",
      "commonMistake": "📚 คำศัพท์สำคัญ: tailpipe = ท่อไอเสีย, environmentally friendly = เป็นมิตรต่อสิ่งแวดล้อม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'รถยนต์ไฟฟ้าไม่ปล่อยไอเสียจากท่อไอเสียเลย จึงทำให้พวกมันเป็นมิตรต่อสิ่งแวดล้อม'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'zero tailpipe emissions' แปลว่า ปล่อยมลพิษจากท่อไอเสียเป็นศูนย์ (ไม่มีควันพิษ) สอดคล้องกับข้อ 2"
        }
      ]
    }
  },
  {
    "id": "bm-eng-066",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the text: 'The contract contained several *ambiguous* terms that confused both parties.' What does *ambiguous* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Clear and simple",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Unclear with multiple meanings",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Short",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Written in English",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'ambiguous' หมายถึง 'กำกวม ไม่ชัดเจน สามารถตีความได้หลายแง่' ตรงกับตัวเลือกที่ 2 (Unclear with multiple meanings)",
      "trickTip": "💡 ambiguous = กำกวม / ไม่ชัดเจน (ตรงข้ามกับ clear)",
      "commonMistake": "📚 คำศัพท์สำคัญ: contract = สัญญา, confused = สับสน, parties = คู่สัญญา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'สัญญาฉบับนั้นมีข้อความที่กำกวมหลายจุดซึ่งสร้างความสับสนให้แก่คู่สัญญาทั้งสองฝ่าย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำใบ้ 'confused both parties' (สร้างความสับสนให้ทั้งสองฝ่าย) บ่งชี้ว่าข้อความนั้นไม่ชัดเจนและตีความได้หลายแบบ (ambiguous)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-067",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Mount Everest is the highest mountain above sea level, reaching 8,848.86 meters.' How high is Mount Everest?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Around 8,849 meters",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "5,000 meters",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "10,000 meters",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "7,500 meters",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ยอดเขาเอเวอเรสต์มีความสูงประมาณ 8,849 เมตร (8,848.86 เมตร)",
      "trickTip": "💡 อ่านตัวเลขและจับคู่ตัวเลือกที่มีค่าใกล้เคียงที่สุด",
      "commonMistake": "📚 คำศัพท์สำคัญ: above sea level = เหนือระดับน้ำทะเล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'ยอดเขาเอเวอเรสต์เป็นภูเขาที่สูงที่สุดเหนือระดับน้ำทะเล โดยมีความสูงถึง 8,848.86 เมตร'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "ตัวเลข 8,848.86 เมตร เมื่อปัดเศษเป็นจำนวนเต็มจะได้ประมาณ 8,849 เมตร ตรงกับตัวเลือกที่ 1"
        }
      ]
    }
  },
  {
    "id": "bm-eng-068",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Sign: 'Danger: High Voltage. Authorized Personnel Only.' Who can enter this area?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Any curious visitor",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Only certified and permitted staff",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Children with parents",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Sales representatives",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผู้ที่สามารถเข้าไปในบริเวณนี้ได้คือ 'เฉพาะเจ้าหน้าที่ที่ได้รับอนุญาตเท่านั้น' (Authorized Personnel Only)",
      "trickTip": "💡 Authorized = ได้รับอนุญาต / Personnel = บุคลากร/เจ้าหน้าที่",
      "commonMistake": "📚 คำศัพท์สำคัญ: High Voltage = ไฟฟ้าแรงสูง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลป้ายเตือน: 'อันตราย: ไฟฟ้าแรงสูง เฉพาะเจ้าหน้าที่ที่ได้รับอนุญาตเท่านั้น'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'Authorized Personnel Only' เป็นสำนวนสากลแปลว่า เฉพาะพนักงานหรือเจ้าหน้าที่ที่ได้รับอนุญาตอย่างเป็นทางการเท่านั้น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-069",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Read: 'Deforestation reduces the Earth's capacity to absorb carbon dioxide from the atmosphere.' What is the result of deforestation?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Cleaner air",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Less carbon absorption and more warming",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Faster tree growth",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "More animal habitats",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "ผลลัพธ์ของการตัดไม้ทำลายป่าคือ 'ความสามารถในการดูดซับก๊าซคาร์บอนไดออกไซด์ลดลง ส่งผลให้โลกร้อนขึ้น'",
      "trickTip": "💡 deforestation = การตัดไม้ทำลายป่า, absorb = ดูดซับ",
      "commonMistake": "📚 คำศัพท์สำคัญ: atmosphere = ชั้นบรรยากาศ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลบทความ: 'การตัดไม้ทำลายป่าลดความสามารถของโลกลงในการดูดซับก๊าซคาร์บอนไดออกไซด์จากชั้นบรรยากาศ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำว่า 'reduces capacity to absorb CO2' แปลว่า ลดความสามารถในการดูดซับก๊าซคาร์บอนไดออกไซด์ ทำให้ก๊าซเรือนกระจกสะสมในชั้นบรรยากาศมากขึ้น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-070",
    "subjectId": "english",
    "topicId": "eng-reading",
    "topicName": "Reading Comprehension",
    "type": "multiple_choice",
    "difficulty": "medium",
    "points": 2,
    "timeEstimateSeconds": 75,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Reading"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "In the sentence 'She gave a *concise* summary that lasted only two minutes.' What does *concise* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Long and wordy",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Brief and to the point",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Confusing",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Incomplete",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำว่า 'concise' หมายถึง 'กระชับ สั้น รัดกุม และได้ใจความตรงประเด็น' ตรงกับตัวเลือกที่ 2 (Brief and to the point)",
      "trickTip": "💡 concise = กระชับ รัดกุม (ตรงข้ามกับ wordy / lengthy)",
      "commonMistake": "📚 คำศัพท์สำคัญ: brief = สั้นกระชับ, wordy = ใช้คำฟุ่มเฟือยเยิ่นเย้อ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลเนื้อหาและคำถาม",
          "content": "แปลประโยค: 'เธอได้ให้การสรุปความที่กระชับรัดกุมซึ่งใช้เวลาเพียงแค่สองนาทีเท่านั้น'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์ใจความและตัดตัวเลือก",
          "content": "คำใบ้ 'lasted only two minutes' (ใช้เวลาแค่ 2 นาที) และคำว่า summary บ่งบอกว่าเป็นการสรุปที่สั้นกระชับตรงประเด็น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-071",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Doctor: 'What seems to be the problem today?'\nPatient: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "I'm fine, thank you.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "I have a severe headache and fever.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "I like your office.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Nice to meet you.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'I have a severe headache and fever.' เพราะเป็นประโยคบอกอาการเจ็บป่วยแก่แพทย์อย่างถูกต้อง",
      "trickTip": "💡 ไปหาหมอ ตอบด้วยอาการเจ็บป่วย: I have a headache / stomachache / fever",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: severe = รุนแรง, fever = มีไข้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nหมอ: 'วันนี้คุณมีอาการผิดปกติอย่างไรบ้างครับ?'\nคนไข้: 'ฉันมีอาการปวดศีรษะอย่างรุนแรงและมีไข้ค่ะ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "เมื่อแพทย์ถาม 'What seems to be the problem?' หรือ 'What's the matter?' เป็นการถามอาการเจ็บป่วย คนไข้ต้องตอบด้วยอาการป่วย (I have...)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-072",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Would you mind passing me the salt, please?'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Yes, I mind.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Not at all. Here you go.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "No, you can't.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Thank you very much.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Not at all. Here you go.' แปลว่า 'ไม่รังเกียจเลยครับ/ค่ะ นี่ครับ' เป็นการตอบรับช่วยหยิบของให้อย่างสุภาพ",
      "trickTip": "💡 Would you mind...? ➔ ยินดีช่วยตอบ 'Not at all' (ไม่รังเกียจ)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: ระวังตอบ Yes เพราะจะแปลว่า 'รังเกียจ (ไม่ช่วย)'",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'คุณจะรังเกียจไหมถ้าช่วยส่งเกลือให้ฉันหน่อย?'\nB: 'ไม่รังเกียจเลยครับ นี่ครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "คำถาม 'Would you mind...?' (คุณจะรังเกียจไหม?) ถ้าเรายินดีช่วย ต้องตอบปฏิเสธความรังเกียจ เช่น 'Not at all' หรือ 'No, of course not'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-073",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I passed my math exam with a perfect score!'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "What a pity!",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Congratulations! That's wonderful news.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Better luck next time.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "I don't care.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Congratulations! That's wonderful news.' เป็นการกล่าวแสดงความยินดีเมื่อผู้อื่นประสบความสำเร็จ",
      "trickTip": "💡 ข่าวดี ➔ Congratulations! / ข่าวร้าย ➔ What a pity! หรือ I'm sorry to hear that.",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: What a pity = น่าเสียดายจัง (ใช้กับเรื่องน่าเสียดาย)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'ฉันสอบวิชาคณิตศาสตร์ผ่านด้วยคะแนนเต็มเลย!'\nB: 'ยินดีด้วยนะ! นั่นเป็นข่าวที่ยอดเยี่ยมมากเลย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "เมื่อได้ยินข่าวดีหรือความสำเร็จของผู้อื่น ควรใช้สำนวน 'Congratulations!' หรือ 'Well done!'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-074",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Customer: 'Could you tell me how much this shirt is?'\nClerk: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "It's 500 Baht.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "It's on the second floor.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "It's made of cotton.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "It's very nice.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'It's 500 Baht.' เพราะลูกค้าถามราคา ('how much')",
      "trickTip": "💡 How much = ถามราคา / How many = ถามจำนวนชิ้น",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: clerk = พนักงานขาย, cotton = ผ้าฝ้าย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nลูกค้า: 'ช่วยบอกหน่อยได้ไหมครับว่าเสื้อตัวนี้ราคาเท่าไหร่?'\nพนักงาน: 'ราคา 500 บาทครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "คำถาม 'How much is...?' เป็นการถามราคา คำตอบจึงต้องระบุจำนวนเงิน (500 Baht)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-075",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I'm feeling under the weather today.' What does *under the weather* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Feeling happy and energetic",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Feeling sick or unwell",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Enjoying the rain",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Traveling abroad",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'under the weather' หมายถึง 'รู้สึกไม่ค่อยสบาย หรือมีอาการป่วยเล็กน้อย' ตรงกับตัวเลือกที่ 2 (Feeling sick or unwell)",
      "trickTip": "💡 under the weather = ป่วย / ไม่สบาย",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: อย่าแปลตรงตัวว่าอยู่ใต้สภาพอากาศ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'วันนี้ฉันรู้สึกไม่ค่อยสบายเนื้อสบายตัวเลย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: 'under the weather' เป็นสำนวนยอดนิยมในข้อสอบ แปลว่า ป่วยหรือไม่สบาย"
        }
      ]
    }
  },
  {
    "id": "bm-eng-076",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Let's call it a day.' What does this idiom mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Let's start working.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Let's stop working for today.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Let's check the date.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Let's call our friends.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'call it a day' หมายถึง 'เลิกงาน หรือพอก่อนสำหรับวันนี้' ตรงกับตัวเลือกที่ 2 (Let's stop working for today)",
      "trickTip": "💡 call it a day = พอก่อนสำหรับวันนี้ / เลิกงาน",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: call it a night = เลิกกิจกรรมตอนกลางคืนเพื่อเข้านอน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'วันนี้พวกเราพอแค่นี้กันก่อนเถอะ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: 'call it a day' ใช้เมื่อทำงานหรือกิจกรรมมาพอสมควรแล้วและต้องการยุติการทำงานในวันนั้น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-077",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Tourist: 'Excuse me, how do I get to the train station?'\nLocal: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Yes, I take the train.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Go straight and turn left at the traffic light.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "The train is fast.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "I like trains.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Go straight and turn left at the traffic light.' เป็นการบอกทิศทางเส้นทางอย่างชัดเจน",
      "trickTip": "💡 ถามทาง ➔ ตอบด้วยคำบอกทิศทาง (Go straight / Turn left)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: traffic light = สัญญาณไฟจราจร",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nนักท่องเที่ยว: 'ขอโทษนะครับ ผมจะเดินทางไปสถานีรถไฟได้อย่างไรครับ?'\nคนท้องถิ่น: 'เดินตรงไปแล้วเลี้ยวซ้ายตรงสัญญาณไฟจราจรครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "เมื่อถูกถามทาง ('how do I get to...?') ต้องตอบด้วยคำบอกทิศทาง เช่น Go straight (ตรงไป), Turn left/right (เลี้ยวซ้าย/ขวา)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-078",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Thank you so much for your help.'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "You're welcome.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Never mind.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "I don't think so.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Yes, please.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'You're welcome.' (ด้วยความยินดี) เป็นการตอบรับคำขอบคุณที่เป็นทางการและสุภาพที่สุด",
      "trickTip": "💡 Thank you ➔ You're welcome",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: Never mind ใช้ตอบเมื่อมีคนมาขอโทษ (แปลว่า ไม่เป็นไร/ช่างมันเถอะ) ไม่นิยมใช้ตอบรับคำขอบคุณ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'ขอบคุณมากเลยนะสำหรับความช่วยเหลือของคุณ'\nB: 'ด้วยความยินดีเลยครับ/ค่ะ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "การตอบรับคำขอบคุณ: 'You're welcome / My pleasure / Don't mention it'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-079",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I accidentally broke your favorite mug. I'm so sorry.'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Don't mention it. It's fine.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Congratulations!",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "You must be joking.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Of course you did.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Don't mention it. It's fine.' แปลว่า 'ไม่เป็นไรหรอก ไม่ต้องคิดมากนะ' เป็นการให้อภัยต่ออุบัติเหตุอย่างสุภาพ",
      "trickTip": "💡 ตอบรับคำขอโทษ ➔ Don't worry / It's fine / Never mind",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: accidentally = โดยไม่ได้ตั้งใจ, favorite mug = แก้วใบโปรด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'ฉันเผลอทำแก้วมัคใบโปรดของเธอแตกโดยไม่ได้ตั้งใจ ฉันขอโทษจริงๆ นะ'\nB: 'ไม่เป็นไรเลย มันไม่เป็นไรหรอก'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "การตอบรับคำขอโทษ: 'Never mind / It's fine / Don't worry about it / That's okay'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-080",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I have butterflies in my stomach before the speech.' What does *butterflies in my stomach* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Feeling hungry",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Feeling very nervous and anxious",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Feeling sick from food",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Feeling confident",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'butterflies in my stomach' หมายถึง 'รู้สึกตื่นเต้น ประหม่า หรือกังวลใจอย่างมาก' ตรงกับตัวเลือกที่ 2",
      "trickTip": "💡 butterflies in my stomach = ตื่นเต้น / ประหม่า",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: speech = สุนทรพจน์, nervous = ประหม่า, anxious = กังวล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'ฉันรู้สึกประหม่าตื่นเต้นจนท้องไส้ปั่นป่วนไปหมดก่อนการขึ้นกล่าวสุนทรพจน์'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: อาการตื่นเต้นเหมือนมีผีเสื้อบินอยู่ในท้อง เกิดขึ้นก่อนการแสดง การพูด หรือการสอบ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-081",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Waiter: 'Are you ready to order, sir?'\nCustomer: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Yes, I'd like the grilled salmon, please.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "No, the table is dirty.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Check, please.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "The food is delicious.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Yes, I'd like the grilled salmon, please.' เป็นประโยคการสั่งอาหารที่สุภาพในร้านอาหาร",
      "trickTip": "💡 สั่งอาหารใช้: I'd like... / Could I have...",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: Check, please ใช้ตอนเรียกเช็คบิลเก็บเงินหลังทานเสร็จ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nบริกร: 'คุณผู้ชายพร้อมที่จะสั่งอาหารแล้วหรือยังครับ?'\nลูกค้า: 'พร้อมแล้วครับ ผมขอสั่งแซลมอนย่างครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวนสั่งอาหาร: 'I'd like + เมนูอาหาร, please' หรือ 'May I have...'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-082",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Break a leg in your drama audition!' What does *break a leg* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Be careful not to fall",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Good luck!",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Don't perform today",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Break the stage",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'Break a leg!' หมายถึง 'ขอให้โชคดีนะ!' (Good luck) มักใช้อวยพรนักแสดงก่อนขึ้นเวที",
      "trickTip": "💡 Break a leg = Good luck (ขอให้โชคดี)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: อย่าแปลตรงตัวว่าขาหักเด็ดขาด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'ขอให้โชคดีในการคัดเลือกนักแสดงละครเวทีนะ!'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "ที่มาของสำนวน: ในวงการการแสดงมีความเชื่อดั้งเดิมว่าการอวยพรว่า Good luck ตรงๆ จะทำให้โชคร้าย จึงใช้คำว่า Break a leg แทนเพื่อแก้เคล็ด"
        }
      ]
    }
  },
  {
    "id": "bm-eng-083",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Do you fancy going to the cinema tonight?'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "I don't like movies.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "I'd love to! What's playing?",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Yes, I fancy you.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "No, it is cinema.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'I'd love to! What's playing?' แปลว่า 'อยากไปมากเลย! มีเรื่องอะไรฉายอยู่บ้างล่ะ?' เป็นการตอบรับคำชวนอย่างกระตือรือร้น",
      "trickTip": "💡 Do you fancy...? = Do you want to...? (ชวนไปทำกิจกรรม)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: cinema = โรงภาพยนตร์, I'd love to = ยินดี/อยากไปมาก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'คืนนี้เธออยากไปดูหนังด้วยกันไหม?'\nB: 'อยากไปมากเลย! มีเรื่องอะไรฉายอยู่เหรอ?'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวน 'Do you fancy + V-ing?' (ภาษาอังกฤษแบบบริติช) แปลว่า 'อยากทำ...ไหม?' การตอบรับใช้ 'I'd love to!'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-084",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Can you give me a hand with this heavy box?'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Sure, I'd be glad to help.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "No, I have two hands.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Give me your hand.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "It is a box.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Sure, I'd be glad to help.' แปลว่า 'ได้แน่นอน ฉันยินดีช่วยนะ'",
      "trickTip": "💡 give a hand = help (ช่วยเหลือ)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: อย่าตอบ No, I have two hands เพราะเป็นการเข้าใจสำนวนผิด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'เธอช่วยฉันยกกล่องหนักๆ ใบนี้หน่อยได้ไหม?'\nB: 'ได้สิ ฉันยินดีช่วยเลย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวน 'give someone a hand' แปลว่า 'ช่วยเหลืองาน/ช่วยออกแรง' ไม่ได้แปลว่ายื่นมือให้"
        }
      ]
    }
  },
  {
    "id": "bm-eng-085",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'It's raining cats and dogs outside.' What does this mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Cats and dogs are falling from the sky",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "It is raining very heavily",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Animals are fighting",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "It is very cold",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'raining cats and dogs' หมายถึง 'ฝนกำลังตกหนักอย่างรุนแรง' ตรงกับตัวเลือกที่ 2 (It is raining very heavily)",
      "trickTip": "💡 raining cats and dogs = ฝนตกหนักมาก",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: ข้อสอบชอบนำสำนวนนี้มาลวงด้วยตัวเลือกเกี่ยวกับสัตว์ตกจากฟ้า",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'ข้างนอกฝนกำลังตกหนักเทกระหน่ำเลย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: สำนวนเปรียบเทียบฝนตกหนักมากจนมองไม่เห็นทาง"
        }
      ]
    }
  },
  {
    "id": "bm-eng-086",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Hotel Receptionist: 'Welcome to Grand Hotel. Do you have a reservation?'\nGuest: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Yes, under the name of Smith.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "No, I don't like hotels.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "I am very tired.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Where is the beach?",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Yes, under the name of Smith.' แปลว่า 'มีครับ จองไว้ในชื่อของคุณสมิธครับ'",
      "trickTip": "💡 reservation = การจองห้อง/โต๊ะล่วงหน้า",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: under the name of = ในชื่อของ...",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nพนักงานต้อนรับ: 'ยินดีต้อนรับสู่โรงแรมแกรนด์ครับ ท่านได้ทำการจองห้องพักไว้ล่วงหน้าไหมครับ?'\nแขก: 'จองไว้ครับ ในชื่อคุณสมิธครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "เมื่อพนักงานโรงแรมถามหาการจอง ('Do you have a reservation?') หากจองไว้จะตอบว่า 'Yes, under the name of + [ชื่อผู้จอง]'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-087",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I can't make up my mind which shirt to buy.' What does *make up one's mind* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "To clean up",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "To decide / make a decision",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "To change thoughts",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "To spend money",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'make up one's mind' หมายถึง 'การตัดสินใจ หรือเลือก' ตรงกับตัวเลือกที่ 2 (To decide / make a decision)",
      "trickTip": "💡 make up one's mind = ตัดสินใจ",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: อย่าสับสนกับ make up ที่แปลว่าแต่งหน้า หรือกุเรื่อง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'ฉันตัดสินใจไม่ได้เลยว่าจะซื้อเสื้อตัวไหนดี'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: 'make up one's mind' = decide (ตัดสินใจ)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-088",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Teacher: 'Please hand in your assignments by Friday.' What does *hand in* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "To hold hands",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "To submit / deliver",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "To write neatly",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "To read aloud",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "กริยาวลี 'hand in' หมายถึง 'ส่งงาน หรือส่งการบ้าน' (To submit / deliver)",
      "trickTip": "💡 hand in = turn in = submit (ส่งงาน)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: hand out = แจกจ่าย / hand in = ส่งคืน/ส่งงาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค:\nครู: 'กรุณาส่งงานที่ได้รับมอบหมายของพวกเธอภายในวันศุกร์นี้นะ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Phrasal Verb: 'hand in / turn in' = submit (ส่งเอกสาร/การบ้าน)"
        }
      ]
    }
  },
  {
    "id": "bm-eng-089",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I'm looking for my keys. Have you seen them?'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Yes, they're on the kitchen counter.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "No, I don't have keys.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Keys are made of metal.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Why do you ask?",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Yes, they're on the kitchen counter.' เป็นการบอกตำแหน่งของกุญแจที่ถามหาได้อย่างชัดเจน",
      "trickTip": "💡 look for = ตามหา / find = พบเจอ",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: kitchen counter = เคาน์เตอร์ครัว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'ฉันกำลังตามหากุญแจอยู่ เธอเห็นบ้างไหม?'\nB: 'เห็นสิ มันวางอยู่บนเคาน์เตอร์ในครัวน่ะ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "เมื่อมีคนถามหากุญแจหลายดอก ('my keys' เป็นพหูพจน์ สรรพนามแทนคือ them/they) คำตอบจึงต้องระบุที่อยู่ของกุญแจ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-090",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Once in a blue moon, he visits his hometown.' What does *once in a blue moon* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Very frequently",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Very rarely / hardly ever",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Every month",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "At night",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'once in a blue moon' หมายถึง 'นานๆ ครั้ง หรือแทบจะไม่เคยเกิดขึ้นเลย' ตรงกับตัวเลือกที่ 2 (Very rarely / hardly ever)",
      "trickTip": "💡 once in a blue moon = นานๆ ครั้ง / แทบไม่เคยเลย (Rarely)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: ตรงข้ามกับ frequently (บ่อยๆ)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'นานๆ ทีเขาถึงจะกลับไปเยี่ยมบ้านเกิดของเขาสักครั้งหนึ่ง'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: Blue moon คือพระจันทร์เต็มดวงครั้งที่สองในเดือนเดียวกัน ซึ่งเกิดขึ้นยากมาก จึงนำมาเปรียบกับเหตุการณ์ที่เกิดขึ้นแทบจะนานๆ ครั้ง"
        }
      ]
    }
  },
  {
    "id": "bm-eng-091",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Shall we split the bill for dinner?'\nB: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "No, it's my treat today.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Yes, break the bill.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "The food was good.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Where is the bill?",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'No, it's my treat today.' แปลว่า 'ไม่ต้องหรอก มื้อนี้ฉันเลี้ยงเองนะ'",
      "trickTip": "💡 split the bill = หารครึ่ง / It's my treat = ฉันเลี้ยงเอง",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: bill = ใบเสร็จค่าอาหาร",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'เรามาหารค่าอาหารเย็นมื้อนี้กันไหม?'\nB: 'ไม่ต้องหรอก มื้อนี้ฉันเลี้ยงเอง'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวน 'split the bill' / 'go Dutch' = แชร์ค่าอาหารคนละครึ่ง, ส่วน 'It's my treat' / 'It's on me' = มื้อนี้ฉันเลี้ยงเอง"
        }
      ]
    }
  },
  {
    "id": "bm-eng-092",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Don't judge a book by its cover.' What is the meaning of this proverb?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Read all books carefully.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Don't judge someone or something solely by appearance.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Buy beautiful books.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Covers are important.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สุภาษิตนี้หมายถึง 'อย่าตัดสินคุณค่าของคนหรือสิ่งใดสิ่งหนึ่งจากเพียงรูปลักษณ์ภายนอก' ตรงกับข้อ 2",
      "trickTip": "💡 Don't judge a book by its cover = อย่าตัดสินคนจากภายนอก",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: appearance = รูปลักษณ์ภายนอก, solely = เพียงแค่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลสุภาษิต: 'อย่าตัดสินหนังสือจากแค่หน้าปกของมัน'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Proverb: รูปลักษณ์ภายนอกอาจหลอกตาได้ สิ่งสำคัญคือคุณค่าเนื้อแท้ที่อยู่ข้างใน"
        }
      ]
    }
  },
  {
    "id": "bm-eng-093",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Interviewer: 'Why do you want to join our student council?'\nStudent: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Because I want to serve and help my school community.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "I have nothing else to do.",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "My mom forced me.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Council is boring.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่เหมาะสมและสร้างสรรค์ที่สุดในการสัมภาษณ์คือ 'เพราะผมต้องการรับใช้และช่วยเหลือชุมชนโรงเรียนของเราครับ'",
      "trickTip": "💡 การสัมภาษณ์ ➔ เลือกคำตอบเชิงบวกและสร้างสรรค์",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: student council = สภานักเรียน, serve = ทำประโยชน์/รับใช้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nผู้สัมภาษณ์: 'ทำไมคุณถึงต้องการเข้าร่วมสภานักเรียนของเราครับ?'\nนักเรียน: 'เพราะผมต้องการทำประโยชน์และช่วยเหลือส่วนรวมในโรงเรียนครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "การตอบคำถามสัมภาษณ์ (Interview) ต้องเลือกคำตอบที่มีทัศนคติเชิงบวก แสดงความรับผิดชอบ และมีจิตสาธารณะ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-094",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I have to *burn the midnight oil* to finish this project.' What does this mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "To burn candles",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "To study or work late into the night",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "To waste oil",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "To go to bed early",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'burn the midnight oil' หมายถึง 'ทำงานหรืออ่านหนังสือดึกดื่นค่อนคืน' ตรงกับตัวเลือกที่ 2 (To study or work late into the night)",
      "trickTip": "💡 burn the midnight oil = ทำงาน/อ่านหนังสือดึกดื่น",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: อย่าแปลตรงตัวว่าเผาน้ำมัน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'ฉันต้องอดนอนทำงานดึกดื่นเพื่อทำงานชิ้นนี้ให้เสร็จ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "ที่มาของสำนวน: ในสมัยโบราณยังไม่มีไฟฟ้า คนที่ต้องทำงานดึกจะต้องจุดตะเกียงน้ำมัน (oil lamp) นั่งทำงานยามค่ำคืน"
        }
      ]
    }
  },
  {
    "id": "bm-eng-095",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Would you like some more dessert?'\nB: '________, I'm completely full.'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Yes, please",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "No, thank you",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "I love it",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Of course",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'No, thank you' (ไม่รับแล้วครับ ขอบคุณครับ) เป็นการปฏิเสธการรับอาหารเพิ่มอย่างสุภาพเมื่ออิ่มแล้ว",
      "trickTip": "💡 รับ ➔ Yes, please / ไม่รับ ➔ No, thank you",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: completely full = อิ่มแปล้แล้ว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'คุณต้องการรับขนมหวานเพิ่มอีกไหมครับ?'\nB: 'ไม่แล้วครับ ขอบคุณครับ ตอนนี้ผมอิ่มมากแล้ว'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "มารยาทในการตอบรับ/ปฏิเสธอาหาร: ถ้าต้องการรับตอบ 'Yes, please' ถ้าต้องการปฏิเสธอย่างสุภาพตอบ 'No, thank you'"
        }
      ]
    }
  },
  {
    "id": "bm-eng-096",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Police Officer: 'May I see your driver's license, please?'\nDriver: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Here you are, officer.",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Why are you asking?",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "I don't drive.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "No, you may not.",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Here you are, officer.' แปลว่า 'นี่ครับเจ้าหน้าที่' เป็นประโยคยื่นส่งเอกสารให้อย่างสุภาพ",
      "trickTip": "💡 ยื่นของให้ผู้อื่นใช้ 'Here you are.'",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: driver's license = ใบขับขี่",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nตำรวจ: 'ขอดูใบอนุญาตขับขี่ของคุณหน่อยครับ?'\nคนขับ: 'นี่ครับเจ้าหน้าที่'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวนยื่นของให้ผู้อื่น: 'Here you are.' หรือ 'Here it is.' แปลว่า นี่ครับ/นี่ค่ะ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-097",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'The exam was a piece of cake!' What does *a piece of cake* mean?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "It was delicious",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "It was very easy",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "It was very hard",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "It had food questions",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สำนวน 'a piece of cake' หมายถึง 'ง่ายมากๆ เหมือนปอกกล้วยเข้าปาก' ตรงกับตัวเลือกที่ 2 (It was very easy)",
      "trickTip": "💡 a piece of cake = ง่ายมาก (Very easy)",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: อย่านำไปแปลเกี่ยวกับของหวานหรือความอร่อย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลประโยค: 'ข้อสอบชุดนี้ง่ายมากๆ เลย!'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Idiom: สำนวนเปรียบเทียบสิ่งที่ทำได้ง่ายดายเหมือนกับการรับประทานเค้กหนึ่งชิ้น"
        }
      ]
    }
  },
  {
    "id": "bm-eng-098",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'I'm thinking of giving up playing the guitar.'\nB: '________! Keep practicing!'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "Don't give up",
        "isCorrect": true
      },
      {
        "id": "c2",
        "label": "2",
        "content": "Give it to me",
        "isCorrect": false
      },
      {
        "id": "c3",
        "label": "3",
        "content": "Stop playing",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Forget it",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่ถูกต้องคือ 'Don't give up!' แปลว่า 'อย่ายอมแพ้นะ!' เพื่อให้กำลังใจเพื่อนคู่กับคำว่า Keep practicing (ฝึกต่อไปนะ)",
      "trickTip": "💡 give up = ยอมแพ้ / Don't give up = อย่ายอมแพ้",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: keep practicing = ฝึกฝนต่อไปเรื่อยๆ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nA: 'ฉันกำลังคิดว่าจะเลิกเล่นกีตาร์แล้วล่ะ'\nB: 'อย่ายอมแพ้สิ! พยายามฝึกต่อไปนะ!'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวนให้กำลังใจ: 'Don't give up / Hang in there / Keep it up' แปลว่า อย่ายอมแพ้ / พยายามต่อไป"
        }
      ]
    }
  },
  {
    "id": "bm-eng-099",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "Store Clerk: 'Can I help you find anything?'\nShopper: '________'",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "No, go away.",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "I'm just browsing, thank you.",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "I am shopping.",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "Where is money?",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "คำตอบที่สุภาพที่สุดเมื่อพนักงานร้านเข้ามาถามคือ 'I'm just browsing, thank you.' แปลว่า 'ฉันขอเดินดูรอบๆ ก่อนครับ ขอบคุณครับ'",
      "trickTip": "💡 I'm just browsing = ขอดูรอบๆ ก่อนครับ/ค่ะ",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: browse = เดินดูสินค้าเรื่อยๆ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลบทสนทนา:\nพนักงานร้าน: 'มีอะไรให้ผมช่วยหาไหมครับ?'\nลูกค้า: 'ขอดูก่อนรอบๆ ครับ ขอบคุณมากครับ'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "สำนวน 'just browsing / just looking' ใช้ตอบพนักงานอย่างสุภาพเมื่อเรายังไม่ได้ต้องการให้ช่วยหาของชิ้นใดเป็นพิเศษ"
        }
      ]
    }
  },
  {
    "id": "bm-eng-100",
    "subjectId": "english",
    "topicId": "eng-conversation",
    "topicName": "Conversations & Vocabulary",
    "type": "multiple_choice",
    "difficulty": "easy",
    "points": 2,
    "timeEstimateSeconds": 50,
    "tags": [
      "เบ็ญจะมะมหาราช",
      "มศว.",
      "English",
      "Conversation",
      "Idiom"
    ],
    "source": "ข้อสอบเข้า ม.1 ห้องพิเศษ เบ็ญจะมะมหาราช / มศว.",
    "targetSchool": "benchama",
    "content": "A: 'Better late than never!' When is this phrase used?",
    "choices": [
      {
        "id": "c1",
        "label": "1",
        "content": "When you are never late",
        "isCorrect": false
      },
      {
        "id": "c2",
        "label": "2",
        "content": "When it is better to arrive or do something late than not at all",
        "isCorrect": true
      },
      {
        "id": "c3",
        "label": "3",
        "content": "When you should cancel",
        "isCorrect": false
      },
      {
        "id": "c4",
        "label": "4",
        "content": "When you are on time",
        "isCorrect": false
      }
    ],
    "solution": {
      "summary": "สุภาษิต 'Better late than never' หมายถึง 'มาช้าหรือทำช้ายังดีกว่าไม่มาหรือไม่ทำเลย' ตรงกับตัวเลือกที่ 2",
      "trickTip": "💡 Better late than never = มาช้ายังดีกว่าไม่มา",
      "commonMistake": "📌 เกร็ดสำนวน/คำศัพท์: arrive late = มาสาย, not at all = ไม่ทำเลย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "แปลบทสนทนาและสถานการณ์",
          "content": "แปลสุภาษิต: 'มาช้ายังดีกว่าไม่มาเลย'"
        },
        {
          "stepNumber": 2,
          "title": "วิเคราะห์การใช้ภาษาและสำนวน",
          "content": "Proverb: ใช้พูดให้กำลังใจหรือผ่อนคลายเมื่อมีคนมาสายหรือทำงานเสร็จช้ากว่ากำหนด แต่อย่างน้อยก็ยังทำสำเร็จ"
        }
      ]
    }
  }
];
