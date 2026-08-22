import { Question } from '@/types/question';

/**
 * คลังข้อสอบภาษาอังกฤษ 100 ข้อ (มศว./เบ็ญจะมะมหาราช)
 * คลังข้อสอบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร)
 * จำนวน 100 ข้อ ครบทุกหมวดเนื้อหา
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
      "summary": "ประธานตามหลัง nor คือ his friends (พหูพจน์) กริยาจึงใช้ are",
      "trickTip": "💡 Neither...nor... ดูประธานตัวหลัง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "ประธานตามหลัง nor คือ his friends (พหูพจน์) กริยาจึงใช้ are"
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
      "summary": "First Conditional (If + Present Simple, will + V1)",
      "trickTip": "💡 If Present Simple -> will + V1",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "First Conditional (If + Present Simple, will + V1)"
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
      "summary": "Passive Voice ในอดีต: was/were + V3",
      "trickTip": "💡 Past Passive = was/were + V3",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Passive Voice ในอดีต: was/were + V3"
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
      "summary": "for ใช้กับช่วงระยะเวลา (period of time)",
      "trickTip": "💡 for + ช่วงเวลา / since + จุดเริ่มต้น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "for ใช้กับช่วงระยะเวลา (period of time)"
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
      "summary": "who ใช้แทนบุคคลทำหน้าที่เป็นประธานของ relative clause",
      "trickTip": "💡 คน + who + กริยา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "who ใช้แทนบุคคลทำหน้าที่เป็นประธานของ relative clause"
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
      "summary": "เหตุการณ์ที่เกิดและจบลงก่อนอีกเหตุการณ์ในอดีตใช้ Past Perfect (had + V3)",
      "trickTip": "💡 By the time + Past Simple, Past Perfect",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "เหตุการณ์ที่เกิดและจบลงก่อนอีกเหตุการณ์ในอดีตใช้ Past Perfect (had + V3)"
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
      "summary": "interested in = สนใจใน...",
      "trickTip": "💡 interested + in",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "interested in = สนใจใน..."
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
      "summary": "Everyone เป็น Indefinite Pronoun เอกพจน์ กริยาใช้ is",
      "trickTip": "💡 Everyone/Everybody ถือเป็นเอกพจน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Everyone เป็น Indefinite Pronoun เอกพจน์ กริยาใช้ is"
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
      "summary": "Second Conditional (If + Past Simple, would + V1)",
      "trickTip": "💡 If + Past Simple -> would + V1",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Second Conditional (If + Past Simple, would + V1)"
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
      "summary": "enjoy ตามด้วย Gerund (V-ing)",
      "trickTip": "💡 enjoy + V-ing",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "enjoy ตามด้วย Gerund (V-ing)"
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
      "summary": "salt เป็นคำนามนับไม่ได้ ใช้ a little",
      "trickTip": "💡 a little + นามนับไม่ได้ / a few + นามนับได้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "salt เป็นคำนามนับไม่ได้ ใช้ a little"
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
      "summary": "so + adjective + that = มากเสียจนกระทั่ง...",
      "trickTip": "💡 so + Adj + that",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "so + adjective + that = มากเสียจนกระทั่ง..."
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
      "summary": "mustn't แสดงข้อห้ามเด็ดขาด (prohibition)",
      "trickTip": "💡 mustn't = ห้ามเด็ดขาด",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "mustn't แสดงข้อห้ามเด็ดขาด (prohibition)"
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
      "summary": "เมื่อมี Although แล้ว ไม่ใช้ but ซ้ำซ้อน",
      "trickTip": "💡 ห้ามใช้ Although คู่กับ but",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "เมื่อมี Although แล้ว ไม่ใช้ but ซ้ำซ้อน"
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
      "summary": "postpone until = เลื่อนไปจนถึง...",
      "trickTip": "💡 until + เวลา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "postpone until = เลื่อนไปจนถึง..."
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
      "summary": "in order to + V.infinitive เพื่อบอกจุดประสงค์",
      "trickTip": "💡 in order to + V.inf",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "in order to + V.infinitive เพื่อบอกจุดประสงค์"
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
      "summary": "its = ของมัน (Possessive Determiner)",
      "trickTip": "💡 its = ของมัน / it's = it is",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "its = ของมัน (Possessive Determiner)"
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
      "summary": "Neither of + นามพหูพจน์ ถือเป็นเอกพจน์ กริยาใช้ is",
      "trickTip": "💡 Neither of + Plural Noun -> กริยาเอกพจน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Neither of + นามพหูพจน์ ถือเป็นเอกพจน์ กริยาใช้ is"
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
      "summary": "look forward to ตามด้วย Gerund (V-ing)",
      "trickTip": "💡 look forward to + V-ing",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "look forward to ตามด้วย Gerund (V-ing)"
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
      "summary": "ใช้วันที่มีวันระบุชัดเจนใช้ on (on Friday morning)",
      "trickTip": "💡 on + วันในสัปดาห์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "ใช้วันที่มีวันระบุชัดเจนใช้ on (on Friday morning)"
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
      "summary": "Hardly...when... = ทันทีที่...ก็...",
      "trickTip": "💡 Hardly had + S + V3 when + S + V2",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Hardly...when... = ทันทีที่...ก็..."
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
      "summary": "Neither + auxiliary verb + subject (คล้อยตามเชิงปฏิเสธ)",
      "trickTip": "💡 Neither + did + I",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Neither + auxiliary verb + subject (คล้อยตามเชิงปฏิเสธ)"
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
      "summary": "make someone do something (Causative verb ใช้ V.inf ไม่ผัน)",
      "trickTip": "💡 make + someone + V.inf",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "make someone do something (Causative verb ใช้ V.inf ไม่ผัน)"
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
      "summary": "Subjunctive mood: Important that + S + V.inf (be)",
      "trickTip": "💡 It is important that S + V.inf",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Subjunctive mood: Important that + S + V.inf (be)"
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
      "summary": "since ใช้กับจุดเริ่มต้นของเวลา",
      "trickTip": "💡 since + ปี ค.ศ.",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "since ใช้กับจุดเริ่มต้นของเวลา"
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
      "summary": "luggage เป็นนามนับไม่ได้ ถือเป็นเอกพจน์",
      "trickTip": "💡 luggage/baggage = นามนับไม่ได้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "luggage เป็นนามนับไม่ได้ ถือเป็นเอกพจน์"
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
      "summary": "No sooner...than... = พอ...ก็...",
      "trickTip": "💡 No sooner had... than...",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "No sooner...than... = พอ...ก็..."
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
      "summary": "whose แสดงความเป็นเจ้าของ (whose car)",
      "trickTip": "💡 whose + คำนาม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "whose แสดงความเป็นเจ้าของ (whose car)"
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
      "summary": "had better + V.inf = ควรจะ...",
      "trickTip": "💡 had better + V.inf",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "had better + V.inf = ควรจะ..."
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
      "summary": "capable of + V-ing = มีความสามารถในการ...",
      "trickTip": "💡 capable + of",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "capable of + V-ing = มีความสามารถในการ..."
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
      "summary": "Either...or... กริยาผันตามประธานตัวหลัง (students -> are)",
      "trickTip": "💡 Either...or... ตามประธานตัวหลัง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Either...or... กริยาผันตามประธานตัวหลัง (students -> are)"
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
      "summary": "Wish ในปัจจุบัน ใช้ were (Subjunctive)",
      "trickTip": "💡 wish + were",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Wish ในปัจจุบัน ใช้ were (Subjunctive)"
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
      "summary": "police เป็นคำนามพหูพจน์เสมอ ใช้ are",
      "trickTip": "💡 police = คำนามพหูพจน์เสมอ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "police เป็นคำนามพหูพจน์เสมอ ใช้ are"
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
      "summary": "prefer A to B = ชอบ A มากกว่า B",
      "trickTip": "💡 prefer + to",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "prefer A to B = ชอบ A มากกว่า B"
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
      "summary": "stop walking to buy = หยุดเดินเพื่อซื้อ",
      "trickTip": "💡 stop to do (หยุดเพื่อทำ) vs stop doing (เลิกทำ)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "stop walking to buy = หยุดเดินเพื่อซื้อ"
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
      "summary": "Physics เป็นชื่อวิชา นับเป็นเอกพจน์ ในอดีตใช้ was",
      "trickTip": "💡 ชื่อวิชาลงท้าย s = เอกพจน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Physics เป็นชื่อวิชา นับเป็นเอกพจน์ ในอดีตใช้ was"
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
      "summary": "be used to + V-ing = เคยชินกับ...",
      "trickTip": "💡 be used to + V-ing",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "be used to + V-ing = เคยชินกับ..."
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
      "summary": "Not only...but also... ผันตามประธานตัวหลัง (brothers -> are)",
      "trickTip": "💡 Not only...but also... ดูตัวหลัง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Not only...but also... ผันตามประธานตัวหลัง (brothers -> are)"
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
      "summary": "Third Conditional: If + had V3, would have V3",
      "trickTip": "💡 If had + V3 -> would have + V3",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Third Conditional: If + had V3, would have V3"
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
      "summary": "Indirect Question: S + V (บอกเล่า)",
      "trickTip": "💡 Indirect question ไม่กลับกริยา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Grammar Rule",
          "content": "Indirect Question: S + V (บอกเล่า)"
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
      "summary": "Honeybees are crucial pollinators for global food crops.",
      "trickTip": "💡 Main idea = ความสำคัญของผึ้งต่อพืชผล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Honeybees are crucial pollinators for global food crops."
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
      "summary": "Arid means very dry, having little or no rain.",
      "trickTip": "💡 arid = แห้งแล้ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Arid means very dry, having little or no rain."
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
      "summary": "At an exam room where silence is required.",
      "trickTip": "💡 examination hall = ห้องสอบ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "At an exam room where silence is required."
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
      "summary": "They mistake floating bags for jellyfish, their prey.",
      "trickTip": "💡 mistake plastic bags for jellyfish = นึกว่าเป็นแมงกะพรุน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "They mistake floating bags for jellyfish, their prey."
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
      "summary": "High initial installation costs.",
      "trickTip": "💡 initial costs remain high = ค่าติดตั้งเริ่มต้นยังสูง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "High initial installation costs."
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
      "summary": "Tom was tired due to lack of sleep.",
      "trickTip": "💡 eyes red and heavy = อ่อนเพลียอดนอน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Tom was tired due to lack of sleep."
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
      "summary": "Abstain means to choose not to do or consume something.",
      "trickTip": "💡 abstain = งดเว้น / หลีกเลี่ยง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Abstain means to choose not to do or consume something."
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
      "summary": "To inform parents of the early closing time on Friday.",
      "trickTip": "💡 notify about early dismissal = แจ้งเลิกเรียนเร็ว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "To inform parents of the early closing time on Friday."
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
      "summary": "Oxygen and glucose are the products.",
      "trickTip": "💡 product = ผลผลิต (ออกซิเจนและกลูโคส)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Oxygen and glucose are the products."
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
      "summary": "Fragile means easily broken.",
      "trickTip": "💡 fragile = แตกหักง่าย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Fragile means easily broken."
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
      "summary": "Preheat the oven to 180°C first.",
      "trickTip": "💡 First step = Preheat oven",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Preheat the oven to 180°C first."
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
      "summary": "They are mammals that nurse their calves with milk.",
      "trickTip": "💡 nurse calves with milk = เลี้ยงลูกด้วยนม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "They are mammals that nurse their calves with milk."
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
      "summary": "It reopens the day after June 15, which is June 16.",
      "trickTip": "💡 reopen = วันถัดจากปิดปรับปรุง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "It reopens the day after June 15, which is June 16."
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
      "summary": "Crucial means extremely important or vital.",
      "trickTip": "💡 crucial = สำคัญยิ่ง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Crucial means extremely important or vital."
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
      "summary": "$80 + $40 = $120.",
      "trickTip": "💡 $80 + (50% of $80 = $40) = $120",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "$80 + $40 = $120."
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
      "summary": "Rising sea levels.",
      "trickTip": "💡 leading to rising sea levels = ระดับน้ำทะเลสูงขึ้น",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Rising sea levels."
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
      "summary": "Reluctant means unwilling or hesitant.",
      "trickTip": "💡 reluctant = ลังเล / ไม่เต็มใจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Reluctant means unwilling or hesitant."
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
      "summary": "Stay safe indoors during thunderstorms.",
      "trickTip": "💡 thunderstorms = อยู่ในที่ร่มปลอดภัย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Stay safe indoors during thunderstorms."
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
      "summary": "Contrasts warm-blooded birds with cold-blooded reptiles.",
      "trickTip": "💡 contrast = เปรียบเทียบความต่าง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Contrasts warm-blooded birds with cold-blooded reptiles."
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
      "summary": "Innovative means featuring new and advanced ideas.",
      "trickTip": "💡 innovative = แปลกใหม่สร้างสรรค์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Innovative means featuring new and advanced ideas."
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
      "summary": "For camouflage, temperature control, and mood communication.",
      "trickTip": "💡 not only...but also... = หลากหลายสาเหตุ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "For camouflage, temperature control, and mood communication."
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
      "summary": "Do not step or walk on the grass.",
      "trickTip": "💡 Keep off = ห้ามเดินบน...",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Do not step or walk on the grass."
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
      "summary": "Focus and memory are negatively impaired.",
      "trickTip": "💡 negatively affects memory and focus",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Focus and memory are negatively impaired."
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
      "summary": "Resilience is the capacity to recover quickly from difficulties.",
      "trickTip": "💡 resilience = ความยืดหยุ่นฟื้นตัวเร็ว",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Resilience is the capacity to recover quickly from difficulties."
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
      "summary": "No direct exhaust air pollution.",
      "trickTip": "💡 zero tailpipe emissions = ไม่มีไอเสีย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "No direct exhaust air pollution."
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
      "summary": "Ambiguous means open to more than one interpretation; unclear.",
      "trickTip": "💡 ambiguous = กำกวม ไม่ชัดเจน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Ambiguous means open to more than one interpretation; unclear."
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
      "summary": "8,848.86 meters (~8,849 meters).",
      "trickTip": "💡 8,848.86 meters",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "8,848.86 meters (~8,849 meters)."
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
      "summary": "Only authorized individuals.",
      "trickTip": "💡 Authorized Personnel Only = เฉพาะผู้ได้รับอนุญาต",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Only authorized individuals."
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
      "summary": "Decreased CO2 absorption contributes to climate change.",
      "trickTip": "💡 reduces capacity to absorb CO2",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Decreased CO2 absorption contributes to climate change."
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
      "summary": "Concise means giving a lot of information clearly and in a few words.",
      "trickTip": "💡 concise = กระชับ รัดกุม",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Reading Comprehension",
          "content": "Concise means giving a lot of information clearly and in a few words."
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
      "summary": "The patient describes symptoms to the doctor.",
      "trickTip": "💡 บอกอาการเจ็บป่วยแก่แพทย์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "The patient describes symptoms to the doctor."
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
      "summary": "'Not at all' means no problem, willing to help.",
      "trickTip": "💡 Would you mind...? ตอบ Not at all = ยินดีช่วย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'Not at all' means no problem, willing to help."
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
      "summary": "Congratulating someone on their achievement.",
      "trickTip": "💡 แสดงความยินดี (Congratulations)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Congratulating someone on their achievement."
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
      "summary": "Providing the price of the item.",
      "trickTip": "💡 ตอบราคา 500 บาท",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Providing the price of the item."
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
      "summary": "'Under the weather' is an idiom meaning feeling ill/sick.",
      "trickTip": "💡 under the weather = รู้สึกไม่สบาย / ป่วย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'Under the weather' is an idiom meaning feeling ill/sick."
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
      "summary": "'Call it a day' means to stop working on something.",
      "trickTip": "💡 call it a day = เลิกงาน / พอก่อนสำหรับวันนี้",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'Call it a day' means to stop working on something."
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
      "summary": "Giving clear directions.",
      "trickTip": "💡 บอกเส้นทาง (Go straight and turn left)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Giving clear directions."
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
      "summary": "'You're welcome' is the polite response to 'Thank you'.",
      "trickTip": "💡 You're welcome = ด้วยความยินดี",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'You're welcome' is the polite response to 'Thank you'."
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
      "summary": "Forgiving an accident politely.",
      "trickTip": "💡 Don't mention it / It's fine = ไม่เป็นไร",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Forgiving an accident politely."
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
      "summary": "Feeling nervous before a performance.",
      "trickTip": "💡 butterflies in my stomach = ตื่นเต้นกังวล",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Feeling nervous before a performance."
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
      "summary": "Ordering food politely.",
      "trickTip": "💡 สั่งอาหาร: I'd like...",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Ordering food politely."
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
      "summary": "'Break a leg' is an idiom wishing someone good luck in performance.",
      "trickTip": "💡 break a leg = ขอให้โชคดี (ใช้กับการแสดง)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'Break a leg' is an idiom wishing someone good luck in performance."
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
      "summary": "Accepting an invitation enthusiastically.",
      "trickTip": "💡 I'd love to = ตอบรับคำชวน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Accepting an invitation enthusiastically."
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
      "summary": "'Give me a hand' means help me.",
      "trickTip": "💡 give me a hand = ช่วยหน่อย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'Give me a hand' means help me."
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
      "summary": "Raining heavily.",
      "trickTip": "💡 raining cats and dogs = ฝนตกหนักมาก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Raining heavily."
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
      "summary": "Confirming a room booking.",
      "trickTip": "💡 ยืนยันการจองห้องพัก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Confirming a room booking."
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
      "summary": "To make a decision.",
      "trickTip": "💡 make up one's mind = ตัดสินใจ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "To make a decision."
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
      "summary": "To submit work.",
      "trickTip": "💡 hand in = ส่งงาน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "To submit work."
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
      "summary": "Locating the lost keys.",
      "trickTip": "💡 บอกตำแหน่งสิ่งของ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Locating the lost keys."
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
      "summary": "Very rarely.",
      "trickTip": "💡 once in a blue moon = นานๆ ครั้ง / แทบไม่เคยเลย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Very rarely."
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
      "summary": "'It's my treat' means I will pay for you.",
      "trickTip": "💡 it's my treat = ฉันเลี้ยงเอง",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'It's my treat' means I will pay for you."
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
      "summary": "Appearance can be deceptive.",
      "trickTip": "💡 อย่าตัดสินคนจากภายนอก",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Appearance can be deceptive."
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
      "summary": "A positive and professional answer.",
      "trickTip": "💡 ตอบอย่างสร้างสรรค์และมีวิสัยทัศน์",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "A positive and professional answer."
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
      "summary": "Working late into the night.",
      "trickTip": "💡 burn the midnight oil = ทำงานดึกดื่นค่อนคืน",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Working late into the night."
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
      "summary": "Declining food politely when full.",
      "trickTip": "💡 No, thank you = ปฏิเสธอย่างสุภาพ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Declining food politely when full."
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
      "summary": "Cooperating with the officer politely.",
      "trickTip": "💡 ยื่นเอกสารให้ตรวจ (Here you are)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Cooperating with the officer politely."
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
      "summary": "'A piece of cake' means very easy.",
      "trickTip": "💡 a piece of cake = ง่ายเหมือนปอกกล้วย",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'A piece of cake' means very easy."
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
      "summary": "Encouraging a friend not to quit.",
      "trickTip": "💡 ให้กำลังใจเพื่อน (Don't give up)",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "Encouraging a friend not to quit."
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
      "summary": "'Just browsing' means just looking around politely.",
      "trickTip": "💡 I'm just browsing = ขอดูก่อนครับ/ค่ะ",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "'Just browsing' means just looking around politely."
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
      "summary": "It is better to complete something late than never do it.",
      "trickTip": "💡 better late than never = มาช้ายังดีกว่าไม่มา",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Situational English",
          "content": "It is better to complete something late than never do it."
        }
      ]
    }
  }
];
