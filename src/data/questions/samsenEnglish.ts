import { Question } from '@/types/question';

export const SAMSEN_ENGLISH_QUESTIONS: Question[] = [
  // --- Part 1: Grammar & Structure (Items 1 - 22) ---
  {
    id: 'ss-eng-66-001',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Tenses & Verb Forms (Present Simple vs Present Continuous)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Tenses', 'Present Continuous', 'สามเสนวิทยาลัย'],
    content: `Lucy: Hey, Josh! _______ meet up later? I’d like you to meet my cousin Bella.
Josh: Sure. Is she at your house at the moment?
Lucy: Not quite yet. Her plane landed about ten minutes ago. I _______ for her at the airport.
Josh: OK. See you later.`,
    choices: [
      { id: '1', label: '1', content: 'Do you want to / wait', isCorrect: false },
      { id: '2', label: '2', content: 'Are you looking for / wait', isCorrect: false },
      { id: '3', label: '3', content: 'Do you want to / am waiting', isCorrect: true },
      { id: '4', label: '4', content: 'Are you looking for / am waiting', isCorrect: false },
    ],
    solution: {
      summary: 'ช่องแรกใช้ "Do you want to" เพื่อชวนนัดพบ และช่องสองใช้ "am waiting" (Present Continuous) เพราะกำลังรอน้องที่สนามบินในขณะที่พูด',
      text: '1. "Do you want to + V.inf" เป็นโครงสร้างการชวนที่ถูกต้องตามบริบท\n2. "I am waiting for her at the airport" กำลังรอน้องอยู่ที่สนามบิน ณ ตอนที่กำลังสนทนา จึงต้องใช้ Present Continuous (is/am/are + V-ing)',
      steps: [
        'ช่องว่างที่ 1: ถามความต้องการในการเจอกัน -> "Do you want to meet up later?"',
        'ช่องว่างที่ 2: บอกการกระทำที่กำลังดำเนินอยู่ในปัจจุบัน -> "I am waiting for her at the airport."',
      ],
      trickTip: '💡 "Do you want to...?" ใช้ถามชวน | "at the moment/now" บ่งบอกเหตุการณ์กำลังเกิดขึ้น -> Present Continuous',
    },
  },
  {
    id: 'ss-eng-66-002',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Present Perfect vs Past Simple',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Tenses', 'Present Perfect', 'Past Simple', 'สามเสนวิทยาลัย'],
    content: `I _______ really interested in old films recently. It’s weird, isn’t it? Loads of them are in black and white. Last month I _______ watching them online and watched about 30 of them.`,
    choices: [
      { id: '1', label: '1', content: 'got / started', isCorrect: false },
      { id: '2', label: '2', content: 'have got / started', isCorrect: true },
      { id: '3', label: '3', content: 'got / have started', isCorrect: false },
      { id: '4', label: '4', content: 'have got / have started', isCorrect: false },
    ],
    solution: {
      summary: 'คำว่า "recently" บ่งบอก Present Perfect (have got) ส่วน "Last month" บ่งบอกอดีตเจาะจงใช้ Past Simple (started)',
      text: '1. "recently" (ช่วงนี้/เมื่อเร็วๆ นี้) เป็น Time Marker ของ Present Perfect -> have/has + V.3 ("have got")\n2. "Last month" (เดือนที่แล้ว) ระบุเวลาในอดีตชัดเจน ต้องใช้ Past Simple -> V.2 ("started")',
      steps: [
        'พบคำว่า "recently" -> เลือก have got (Present Perfect)',
        'พบคำว่า "Last month" -> เลือก started (Past Simple V.2)',
      ],
      trickTip: '💡 recently/lately -> Present Perfect | last month/yesterday/ago -> Past Simple (V.2)',
    },
  },
  {
    id: 'ss-eng-66-003',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Second Conditional (If-Clause Type 2)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Conditionals', 'If-Clause Type 2', 'สามเสนวิทยาลัย'],
    content: `If I _______ the answer right now, I _______ you. But I really don’t.`,
    choices: [
      { id: '1', label: '1', content: 'know / tell', isCorrect: false },
      { id: '2', label: '2', content: 'know / will tell', isCorrect: false },
      { id: '3', label: '3', content: 'knew / told', isCorrect: false },
      { id: '4', label: '4', content: 'knew / would tell', isCorrect: true },
    ],
    solution: {
      summary: 'สมมุติเหตุการณ์ที่ตรงข้ามกับความจริงในปัจจุบัน ใช้ If-Clause Type 2: If + S + V.2, S + would + V.inf',
      text: 'ประโยคตามหลังบอกว่า "But I really don’t" (แต่ความจริงตอนนี้ฉันไม่รู้) แสดงว่าเป็นเหตุการณ์สมมุติตรงข้ามกับความจริงในปัจจุบัน ต้องใช้โครงสร้าง Second Conditional: If + S + V.2 (knew), S + would + V.inf (would tell)',
      steps: [
        'บริบทสมมุติตรงข้ามความจริงปัจจุบัน (Unreal in the present)',
        'โครงสร้าง If-Clause Type 2: If + S + V.2, S + would + V.infinitive',
        'แทนค่า: If I knew ..., I would tell you.',
      ],
      trickTip: '💡 สมมุติตรงข้ามปัจจุบัน: If + V.2 ..., would + V.inf',
    },
  },
  {
    id: 'ss-eng-66-004',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Past Continuous vs Past Simple (Interrupted Action)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Tenses', 'Past Continuous', 'Past Simple', 'สามเสนวิทยาลัย'],
    content: `When the guests _______, Jane _______ dinner. Therefore, she didn’t have a chance to greet the guests.`,
    choices: [
      { id: '1', label: '1', content: 'arrived / cooked', isCorrect: false },
      { id: '2', label: '2', content: 'arrived / was cooking', isCorrect: true },
      { id: '3', label: '3', content: 'were arriving / cooked', isCorrect: false },
      { id: '4', label: '4', content: 'were arriving / was cooking', isCorrect: false },
    ],
    solution: {
      summary: 'เหตุการณ์ที่กำลังดำเนินอยู่ (was cooking) ถูกแทรกด้วยเหตุการณ์สั้นๆ ในอดีต (arrived)',
      text: 'เจนกำลังทำอาหารอยู่ (เหตุการณ์ยาวกำลังดำเนินในอดีต -> Past Continuous: was cooking) แล้วแขกก็มาถึง (เหตุการณ์สั้นเข้ามาแทรก -> Past Simple: arrived) ทำให้เจนไม่มีโอกาสออกไปต้อนรับ',
      steps: [
        'เหตุการณ์เกิดก่อนและกำลังดำเนินอยู่: was/were + V-ing -> was cooking',
        'เหตุการณ์เกิดแทรก: V.2 -> arrived',
      ],
      trickTip: '💡 กำลังทำอยู่ (was/were + V-ing) + มีเหตุการณ์แทรกเข้ามา (V.2)',
    },
  },
  {
    id: 'ss-eng-66-005',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Future with "be going to" vs "will"',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 75,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Future Tense', 'will', 'be going to', 'สามเสนวิทยาลัย'],
    content: `Dad: The weather is below 10 degrees today. Without a coat on, I think Sara _______ a chill.
Mom: She has a waistcoat on under her shirt, but you’re right. I _______ her a coat.`,
    choices: [
      { id: '1', label: '1', content: 'will get / will give', isCorrect: false },
      { id: '2', label: '2', content: 'will get / is going to give', isCorrect: false },
      { id: '3', label: '3', content: 'is going to get / will give', isCorrect: true },
      { id: '4', label: '4', content: 'is going to get / is going to give', isCorrect: false },
    ],
    solution: {
      summary: 'การคาดการณ์จากหลักฐานสภาพอากาศหนาวจัดใช้ "is going to get" ส่วนการตัดสินใจทำทันทีตอนพูดใช้ "will give"',
      text: '1. "is going to" ใช้ทำนายเหตุการณ์ที่มีหลักฐานปรากฏชัดเจนในปัจจุบัน (อุณหภูมิต่ำกว่า 10 องศาและไม่ใส่เสื้อโค้ท)\n2. "will" ใช้กับการตัดสินใจอย่างปัจจุบันทันด่วนขณะกำลังพูด (Instant decision: แม่ตัดสินใจเดี๋ยวนั้นว่าจะเอาเสื้อโค้ทไปให้)',
      steps: [
        'ทำนายจากหลักฐานสภาพแวดล้อม -> is going to get a chill',
        'ตัดสินใจทำทันทีในบทสนทนา -> will give her a coat',
      ],
      trickTip: '💡 มีหลักฐานชัดเจน -> be going to | ตัดสินใจเดี๋ยวนั้น -> will',
    },
  },
  {
    id: 'ss-eng-66-006',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Adverb Modifying Participle Adjective',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Participles', 'Adverbs', 'สามเสนวิทยาลัย'],
    content: `We have never seen a more _______ presentation than the one you gave.`,
    choices: [
      { id: '1', label: '1', content: 'profession organized', isCorrect: false },
      { id: '2', label: '2', content: 'professional organizing', isCorrect: false },
      { id: '3', label: '3', content: 'professionally organized', isCorrect: true },
      { id: '4', label: '4', content: 'professionally organizing', isCorrect: false },
    ],
    solution: {
      summary: 'ใช้ Adverb (professionally) ขยาย Participle Adjective (organized) เพื่อทำหน้าที่เป็นคำคุณศัพท์ขยาย presentation',
      text: '"presentation" เป็นคำนามที่ถูกจัดเตรียม/จัดระเบียบอย่างมืออาชีพ จึงใช้ Past Participle คือ "organized" และต้องใช้ Adverb คือ "professionally" มาขยายคำว่า organized รวมเป็น "professionally organized presentation"',
      steps: [
        'presentation ถูกจัดระเบียบ (Passive meaning) -> organized (V.3)',
        'คำที่มาขยายคำคุณศัพท์ต้องเป็น Adverb (-ly) -> professionally',
        'รวมกัน: professionally organized',
      ],
      trickTip: '💡 โครงสร้าง: Adverb (-ly) + Participle (V.3) + Noun',
    },
  },
  {
    id: 'ss-eng-66-007',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Participle Adjectives (-ed vs -ing)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Adjectives', 'Participle', 'สามเสนวิทยาลัย'],
    content: `She was really _______ and went to bed early.`,
    choices: [
      { id: '1', label: '1', content: 'tried', isCorrect: false },
      { id: '2', label: '2', content: 'tired', isCorrect: true },
      { id: '3', label: '3', content: 'tiring', isCorrect: false },
      { id: '4', label: '4', content: 'trying', isCorrect: false },
    ],
    solution: {
      summary: 'บอกความรู้สึกของบุคคลว่า "รู้สึกเหนื่อย" ใช้ tired (-ed)',
      text: '1. tired (-ed) = รู้สึกเหนื่อย (ใช้บอกความรู้สึกของคน)\n2. tiring (-ing) = น่าเหน็ดเหนื่อย (ใช้บอกลักษณะของกิจกรรม/สิ่งของ)\n3. ประธาน "She" รู้สึกเหนื่อยจนต้องรีบเข้านอนแต่หัวค่ำ จึงใช้ "tired"',
      steps: [
        'บอกความรู้สึกของประธานคน -> ลงท้ายด้วย -ed (tired)',
      ],
      trickTip: '💡 คนรู้สึก (-ed) | สิ่งของ/เหตุการณ์น่า... (-ing)',
    },
  },
  {
    id: 'ss-eng-66-008',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Passive Voice with Modals',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Passive Voice', 'Modals', 'สามเสนวิทยาลัย'],
    content: `Coffee _______ before you _______ it.`,
    choices: [
      { id: '1', label: '1', content: 'is roasted / will sell', isCorrect: false },
      { id: '2', label: '2', content: 'roasted / sold', isCorrect: false },
      { id: '3', label: '3', content: 'must be roasted / sell', isCorrect: true },
      { id: '4', label: '4', content: 'should roast / sold', isCorrect: false },
    ],
    solution: {
      summary: 'กาแฟต้องถูกคั่ว (Passive Voice: must be roasted) ก่อนที่คุณจะนำไปขาย (Present Simple: sell)',
      text: '1. Coffee เป็นสิ่งของ ไม่สามารถคั่วตัวเองได้ ต้องถูกคั่ว -> Modal Passive: must be roasted (must + be + V.3)\n2. หลังคำเชื่อมบอกเวลา "before" ในประโยคแสดงข้อเท็จจริงทั่วไป ใช้ Present Simple: you sell it',
      steps: [
        'Coffee ถูกคั่ว -> must be roasted',
        'ประโยคหลัง before ใช้ Present Simple -> you sell it',
      ],
      trickTip: '💡 ประธานถูกกระทำ -> be + V.3 | หลัง before/after ใช้ Present Simple',
    },
  },
  {
    id: 'ss-eng-66-009',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Articles & Degrees of Comparison',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 75,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Comparison', 'Articles', 'Superlative', 'สามเสนวิทยาลัย'],
    content: `I’m having _______ time in Hong Kong. It is _______ city I’ve ever visited. The streets are _______ in London.`,
    choices: [
      { id: '1', label: '1', content: 'an amazing / nicer / the cleanest', isCorrect: false },
      { id: '2', label: '2', content: 'an amazing / the nicest / much cleaner than', isCorrect: true },
      { id: '3', label: '3', content: 'the most amazing / the nicest / the cleanest', isCorrect: false },
      { id: '4', label: '4', content: 'the most amazing / nicer / much cleaner than', isCorrect: false },
    ],
    solution: {
      summary: 'have an amazing time (สำนวน), the nicest city I’ve ever visited (ขั้นสูงสุด), much cleaner than in London (เปรียบเทียบขั้นกว่า)',
      text: '1. "have an amazing time" = มีช่วงเวลาที่ยอดเยี่ยมมาก (ใช้ article "an")\n2. "... I’ve ever visited" เป็นบริบทเปรียบเทียบขั้นสูงสุด ต้องใช้ "the nicest"\n3. มีคำว่า "in London" ต่อท้าย เป็นการเปรียบเทียบ 2 เมือง จึงใช้ขั้นกว่าพร้อมคำเน้น "much cleaner than"',
      steps: [
        'ช่อง 1: an amazing time (สำนวนทั่วไป)',
        'ช่อง 2: the nicest city (... I have ever visited บ่งบอกขั้นสูงสุด)',
        'ช่อง 3: much cleaner than (เปรียบเทียบขั้นกว่ากับ London)',
      ],
      trickTip: '💡 "... I have ever seen/visited" มักตามหลัง Superlative (ขั้นสูงสุด: the -est / the most)',
    },
  },
  {
    id: 'ss-eng-66-010',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Adjective + Enough',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Enough', 'Adjectives', 'สามเสนวิทยาลัย'],
    content: `Adam: Why don’t we have the party at Lisa’s house?
Thomas: We can’t. Her house isn’t _______ to have a party.`,
    choices: [
      { id: '1', label: '1', content: 'too big', isCorrect: false },
      { id: '2', label: '2', content: 'big too', isCorrect: false },
      { id: '3', label: '3', content: 'big enough', isCorrect: true },
      { id: '4', label: '4', content: 'enough big', isCorrect: false },
    ],
    solution: {
      summary: 'ตำแหน่งของ enough: ต้องวางไว้ "หลัง" คำคุณศัพท์ (Adjective + enough) เสมอ -> "big enough"',
      text: 'กฎตำแหน่งคำว่า enough:\n- Adjective / Adverb + enough (เช่น big enough, tall enough)\n- enough + Noun (เช่น enough money, enough time)\nในที่นี้ "big" เป็น Adjective จึงต้องเรียงเป็น "big enough"',
      steps: [
        'big (Adjective) + enough -> big enough',
      ],
      trickTip: '💡 ท่องจำ: "คุณศัพท์ + enough" แต่ "enough + คำนาม"',
    },
  },
  {
    id: 'ss-eng-66-011',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Subject-Verb Agreement (Gerund Subject)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Subject-Verb Agreement', 'Gerund', 'Cloze Test', 'สามเสนวิทยาลัย'],
    content: `(For items 11 – 13)
Balancing schoolwork and exams with busy social lives ____(11)____ quite hard. However, we’ve all had to deal with that! But don’t get stressed – here are a few tips to get you through the busy exam period. First you ____(12)____ get some exercise, even if it’s only light. Relaxation is also important. Do something that chills you out – have a laugh with your friends, listen to your favourite music or read a good book. If you find time for these activities, you ____(13)____ better.

Item 11: Choose the correct option for blank (11):`,
    choices: [
      { id: '1', label: '1', content: 'is', isCorrect: true },
      { id: '2', label: '2', content: 'are', isCorrect: false },
      { id: '3', label: '3', content: 'have been', isCorrect: false },
      { id: '4', label: '4', content: 'would be', isCorrect: false },
    ],
    solution: {
      summary: 'ประธานขึ้นต้นด้วย Gerund (Balancing...) ถือเป็นเอกพจน์ จึงใช้กริยา "is"',
      text: 'ประธานของประโยคคือ "Balancing" (การสร้างสมดุล) ซึ่งเป็น Gerund (V-ing) ทำหน้าที่เป็นคำนามเอกพจน์เสมอ กริยาแท้ที่ตามมาจึงต้องเป็นกริยาเอกพจน์ คือ "is"',
      steps: [
        'หาประธานหลัก: Balancing (Gerund) -> เอกพจน์',
        'กริยาต้องสอดคล้องกับประธานเอกพจน์ในรูป Present Simple -> is',
      ],
      trickTip: '💡 ประธานที่เป็น Gerund (V-ing) หรือ To + V.inf ถือเป็น "เอกพจน์" เสมอ -> ใช้ is/was/V-s',
    },
  },
  {
    id: 'ss-eng-66-012',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Modal Verbs of Obligation/Advice',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Modals', 'must', 'Cloze Test', 'สามเสนวิทยาลัย'],
    content: `(From passage "My tips for beating stress")
First you ____(12)____ get some exercise, even if it’s only light.

Item 12: Choose the correct option for blank (12):`,
    choices: [
      { id: '1', label: '1', content: 'must', isCorrect: true },
      { id: '2', label: '2', content: 'has to', isCorrect: false },
      { id: '3', label: '3', content: 'mustn’t', isCorrect: false },
      { id: '4', label: '4', content: 'don’t have to', isCorrect: false },
    ],
    solution: {
      summary: 'ประธานคือ "you" กริยาช่วยแสดงคำแนะนำเน้นย้ำคือ "must" (has to ผิดหลักไวยากรณ์เพราะใช้กับ you ไม่ได้)',
      text: '1. ประธานคือ "you" ไม่สามารถใช้ "has to" ได้ (ต้องเป็น have to)\n2. บริบทแนะนำให้ไปออกกำลังกายเพื่อลดความเครียด จึงมีความหมายเชิงบวก "must" (ต้องทำ)',
      steps: [
        'ประธาน "you" ตัด has to ออกทันที',
        'ความหมายเชิงแนะนำสิ่งควรทำ -> must',
      ],
      trickTip: '💡 You + must / have to | He/She/It + has to',
    },
  },
  {
    id: 'ss-eng-66-013',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'First Conditional (If-Clause Type 1)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Conditionals', 'Cloze Test', 'สามเสนวิทยาลัย'],
    content: `(From passage "My tips for beating stress")
If you find time for these activities, you ____(13)____ better.

Item 13: Choose the correct option for blank (13):`,
    choices: [
      { id: '1', label: '1', content: 'felt', isCorrect: false },
      { id: '2', label: '2', content: 'feel', isCorrect: false },
      { id: '3', label: '3', content: 'may feel', isCorrect: true },
      { id: '4', label: '4', content: 'would feel', isCorrect: false },
    ],
    solution: {
      summary: 'ประโยคเงื่อนไข Type 1: If + Present Simple (find), Main clause ใช้ may/can/will + V.inf ("may feel")',
      text: 'ประโยค If-clause ใช้ "If you find..." (Present Simple) ดังนั้นในประโยคหลัก (Main Clause) สามารถใช้ Modal verb บอกความเป็นไปได้ เช่น "may feel" + V.infinitive',
      steps: [
        'If + S + V.1 (find) -> Main clause ใช้ may/will + V.inf (may feel)',
      ],
      trickTip: '💡 If-clause Type 1: If + V.1, S + will/may/can + V.inf',
    },
  },
  {
    id: 'ss-eng-66-014',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Indefinite Pronouns (something vs anything)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Pronouns', 'something', 'สามเสนวิทยาลัย'],
    content: `(For items 14 – 16)
Would you like to have ____(14)____ to do this weekend? Visit Hampton Court ____(15)____ royal palaces. Now the palace ____(16)____ to the King of England, but it’s open to everyone throughout the year.

Item 14: Choose the correct option for blank (14):`,
    choices: [
      { id: '1', label: '1', content: 'something', isCorrect: true },
      { id: '2', label: '2', content: 'anything', isCorrect: false },
      { id: '3', label: '3', content: 'somewhere', isCorrect: false },
      { id: '4', label: '4', content: 'anywhere', isCorrect: false },
    ],
    solution: {
      summary: 'ในประโยคเชิญชวนหรือเสนอแนะ (Would you like...?) นิยมใช้ "something" แทน anything',
      text: 'แม้ประโยคจะเป็นรูปคำถาม แต่เป็นคำถามเชิงเสนอแนะ/เชิญชวน (Offer/Invitation: "Would you like...?") ตามหลักไวยากรณ์จึงใช้ "something" (สิ่งใดสิ่งหนึ่งทำ)',
      steps: [
        'ประโยคยื่นข้อเสนอ/ชักชวน (Would you like...?) -> ใช้ something',
      ],
      trickTip: '💡 Would you like + something...? (ประโยคเสนอแนะใช้ some/something)',
    },
  },
  {
    id: 'ss-eng-66-015',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Relative Clauses & Superlatives',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Relative Clause', 'Superlative', 'สามเสนวิทยาลัย'],
    content: `(From Hampton Court passage)
Visit Hampton Court ____(15)____ royal palaces.

Item 15: Choose the correct option for blank (15):`,
    choices: [
      { id: '1', label: '1', content: 'which is one of more beautiful', isCorrect: false },
      { id: '2', label: '2', content: 'which is one of the most beautiful', isCorrect: true },
      { id: '3', label: '3', content: 'where is one of more beautiful', isCorrect: false },
      { id: '4', label: '4', content: 'where is one of the most beautiful', isCorrect: false },
    ],
    solution: {
      summary: 'ใช้ which ทำหน้าที่เป็นประธานของ Relative clause ขยายชื่อพระราชวัง และใช้ "one of the most beautiful" (หนึ่งในพระราชวังที่สวยที่สุด)',
      text: '1. "Hampton Court" เป็นชื่อสถานที่ที่ทำหน้าที่เป็นประธานของอนุประโยคตามหลัง จึงต้องใช้ Relative Pronoun "which" (ไม่ใช่ where เพราะ where ต้องตามด้วย S+V)\n2. โครงสร้าง "one of the + Superlative + Plural Noun" -> one of the most beautiful royal palaces',
      steps: [
        'ประธานของอนุประโยค -> which is',
        'โครงสร้างหนึ่งในสิ่งที่ที่สุด -> one of the most beautiful',
      ],
      trickTip: '💡 one of the + ขั้นสูงสุด + คำนามพหูพจน์ (one of the most beautiful palaces)',
    },
  },
  {
    id: 'ss-eng-66-016',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Stative Verbs (belong to)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Stative Verbs', 'belongs to', 'สามเสนวิทยาลัย'],
    content: `(From Hampton Court passage)
Now the palace ____(16)____ to the King of England, but it’s open to everyone throughout the year.

Item 16: Choose the correct option for blank (16):`,
    choices: [
      { id: '1', label: '1', content: 'belongs', isCorrect: true },
      { id: '2', label: '2', content: 'is belonged', isCorrect: false },
      { id: '3', label: '3', content: 'is belonging', isCorrect: false },
      { id: '4', label: '4', content: 'is being belonged', isCorrect: false },
    ],
    solution: {
      summary: 'belong เป็น Stative Verb (กริยาบอกสถานะความเป็นเจ้าของ) ไม่ใช้รูป Continuous (-ing) และไม่มีรูป Passive Voice',
      text: '"belong to" แปลว่า เป็นของ... เป็น Stative Verb แสดงความเป็นเจ้าของ จึงต้องใช้ในรูป Present Simple เสมอ: The palace (เอกพจน์) + belongs to',
      steps: [
        'belong to เป็นกริยาบอกสถานะ ห้ามใช้รูป -ing และ Passive',
        'ประธาน the palace เป็นเอกพจน์ -> เติม s -> belongs',
      ],
      trickTip: '💡 belong to = เป็นของ... (ห้ามใช้ is belonged หรือ is belonging เด็ดขาด)',
    },
  },
  {
    id: 'ss-eng-66-017',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Preposition + Gerund (of drawing)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Gerund', 'Prepositions', 'สามเสนวิทยาลัย'],
    content: `(For items 17 – 19)
What’s the probability of ____(17)____ the ace of spades from a deck with no jokers? Normally it would be 1/50. But what if it is a brand new deck? The position of cards in a new deck are typically identical, so that means if you take out the jokers and ____(18)____ the card at the very bottom, it’s the ace of spades almost 100% of the time. Oh, that’s right! I ____(19)____ say a word about it being a new deck. In fact, you didn’t ask.

Item 17: Choose the correct option for blank (17):`,
    choices: [
      { id: '1', label: '1', content: 'draw', isCorrect: false },
      { id: '2', label: '2', content: 'drew', isCorrect: false },
      { id: '3', label: '3', content: 'drawn', isCorrect: false },
      { id: '4', label: '4', content: 'drawing', isCorrect: true },
    ],
    solution: {
      summary: 'หลังคำบุพบท (Preposition: of) กริยาที่ตามมาต้องอยู่ในรูป Gerund (V-ing) -> "drawing"',
      text: 'กฎไวยากรณ์: Preposition + V-ing เสมอ ดังนั้น "probability of" จึงต้องตามด้วย "drawing"',
      steps: [
        'preposition "of" + V-ing -> drawing',
      ],
      trickTip: '💡 หลัง Preposition (in, on, at, of, for, about) + V-ing เสมอ',
    },
  },
  {
    id: 'ss-eng-66-018',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Parallel Structure with Conjunctions',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Parallelism', 'Verbs', 'สามเสนวิทยาลัย'],
    content: `(From card probability passage)
...so that means if you take out the jokers and ____(18)____ the card at the very bottom, it’s the ace of spades almost 100% of the time.

Item 18: Choose the correct option for blank (18):`,
    choices: [
      { id: '1', label: '1', content: 'draw', isCorrect: true },
      { id: '2', label: '2', content: 'drew', isCorrect: false },
      { id: '3', label: '3', content: 'drawn', isCorrect: false },
      { id: '4', label: '4', content: 'drawing', isCorrect: false },
    ],
    solution: {
      summary: 'โครงสร้างคู่ขนาน (Parallel Structure) เชื่อมด้วย "and": take out (V.1) and draw (V.1)',
      text: 'คำเชื่อม "and" เชื่อมกริยาที่มีรูปแบบเดียวกัน ในประโยคคือ "if you take out ... and draw ..."',
      steps: [
        'กริยาหน้า and คือ "take out" (รูป Base Form/V.1)',
        'กริยาหลัง and จึงต้องเป็น "draw" (Base Form/V.1 เช่นกัน)',
      ],
      trickTip: '💡 Parallel Structure: V.inf + and + V.inf',
    },
  },
  {
    id: 'ss-eng-66-019',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Past Simple Negation (didn\'t)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Past Simple', 'Negation', 'สามเสนวิทยาลัย'],
    content: `(From card probability passage)
Oh, that’s right! I ____(19)____ say a word about it being a new deck. In fact, you didn’t ask.

Item 19: Choose the correct option for blank (19):`,
    choices: [
      { id: '1', label: '1', content: 'don\'t', isCorrect: false },
      { id: '2', label: '2', content: 'didn\'t', isCorrect: true },
      { id: '3', label: '3', content: 'won\'t', isCorrect: false },
      { id: '4', label: '4', content: 'shan\'t', isCorrect: false },
    ],
    solution: {
      summary: 'บริบทเล่าถึงเหตุการณ์ในอดีต (ประโยคถัดมาใช้ "you didn\'t ask") จึงใช้ "didn\'t say"',
      text: 'ประโยคถัดไประบุว่า "In fact, you didn’t ask." ชี้ชัดว่ากำลังพูดถึงสิ่งที่เกิดขึ้นไปแล้วในอดีต จึงใช้กริยาปฏิเสธอดีตคือ "didn\'t"',
      steps: [
        'ดูบริบทแวดล้อม: you didn\'t ask (Past Simple)',
        'เติมรูปอดีต: I didn\'t say',
      ],
      trickTip: '💡 ดูคำใบ้จากประโยคข้างเคียง -> you didn\'t ask ชี้ชัดว่าต้องใช้ didn\'t',
    },
  },
  {
    id: 'ss-eng-66-020',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Prepositions of Place (around the world)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Prepositions', 'Collocations', 'สามเสนวิทยาลัย'],
    content: `(For items 20 – 22)
New lab data suggest that vaccines and prior infections may not offer enough protection against several new COVID-19 variants cropping up in the U.S. and ____(20)____ the world. Dr. David Ho, director of Columbia University’s Aaron Diamond AIDS Research Center (ADARC), and his team ____(21)____ the results from a set of studies at an ADARC symposium. They showed how well some of the latest variants are evading both vaccine-derived ____(22)____ infection-derived immunity.

Item 20: Choose the correct option for blank (20):`,
    choices: [
      { id: '1', label: '1', content: 'in', isCorrect: false },
      { id: '2', label: '2', content: 'on', isCorrect: false },
      { id: '3', label: '3', content: 'across', isCorrect: false },
      { id: '4', label: '4', content: 'around', isCorrect: true },
    ],
    solution: {
      summary: 'สำนวน "around the world" แปลว่า ทั่วโลก',
      text: 'วลีที่ถูกต้องในการสื่อถึง "ทั่วโลก" คือ "around the world" หรือ "all around the world"',
      steps: [
        'สำนวนมาตรฐาน: around the world (ทั่วโลก)',
      ],
      trickTip: '💡 around the world = ทั่วโลก',
    },
  },
  {
    id: 'ss-eng-66-021',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Past Simple Verb Forms',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Tenses', 'Past Simple', 'สามเสนวิทยาลัย'],
    content: `(From COVID-19 research passage)
Dr. David Ho, director of Columbia University’s Aaron Diamond AIDS Research Center (ADARC), and his team ____(21)____ the results from a set of studies at an ADARC symposium.

Item 21: Choose the correct option for blank (21):`,
    choices: [
      { id: '1', label: '1', content: 'report', isCorrect: false },
      { id: '2', label: '2', content: 'reports', isCorrect: false },
      { id: '3', label: '3', content: 'reported', isCorrect: true },
      { id: '4', label: '4', content: 'reporting', isCorrect: false },
    ],
    solution: {
      summary: 'การรายงานผลการวิจัยในการประชุมที่จัดขึ้นแล้ว เล่าด้วย Past Simple (V.2) -> "reported"',
      text: 'ประโยคต่อมาใช้กริยา "They showed..." (Past Simple) แสดงว่าการนำเสนอผลงานวิจัยนี้เกิดขึ้นแล้วในอดีต จึงใช้ "reported" (V.2)',
      steps: [
        'สังเกตประโยคถัดมา: They showed... (V.2)',
        'กริยาในช่องว่างจึงต้องเป็น V.2 เช่นกัน -> reported',
      ],
      trickTip: '💡 เล่าผลการทดลอง/เหตุการณ์ที่เกิดแล้วในอดีต -> ใช้ Past Simple (V.2)',
    },
  },
  {
    id: 'ss-eng-66-022',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Correlative Conjunctions (both...and...)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Grammar', 'Conjunctions', 'both and', 'สามเสนวิทยาลัย'],
    content: `(From COVID-19 research passage)
They showed how well some of the latest variants are evading both vaccine-derived ____(22)____ infection-derived immunity.

Item 22: Choose the correct option for blank (22):`,
    choices: [
      { id: '1', label: '1', content: 'and', isCorrect: true },
      { id: '2', label: '2', content: 'but', isCorrect: false },
      { id: '3', label: '3', content: 'for', isCorrect: false },
      { id: '4', label: '4', content: 'with', isCorrect: false },
    ],
    solution: {
      summary: 'คำเชื่อมคู่ (Correlative Conjunction) ของ "both" คือ "and" (both ... and ... = ทั้งสองอย่าง)',
      text: 'โครงสร้างคำเชื่อมคู่: both A and B (ทั้ง A และ B)',
      steps: [
        'มีคำว่า "both" อยู่ข้างหน้า -> ต้องคู่กับ "and"',
      ],
      trickTip: '💡 both...and... | either...or... | neither...nor... | not only...but also...',
    },
  },

  // --- Part 2: Vocabulary & Phrasal Verbs (Items 23 - 30) ---
  {
    id: 'ss-eng-66-023',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Phrasal Verbs (give off vs take in)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Phrasal Verbs', 'give off', 'สามเสนวิทยาลัย'],
    content: `When food goes bad, it _______ a very unpleasant smell.`,
    choices: [
      { id: '1', label: '1', content: 'takes in', isCorrect: false },
      { id: '2', label: '2', content: 'takes off', isCorrect: false },
      { id: '3', label: '3', content: 'gives off', isCorrect: true },
      { id: '4', label: '4', content: 'gives away', isCorrect: false },
    ],
    solution: {
      summary: 'give off แปลว่า "ส่งกลิ่น/ปล่อยก๊าซหรือความร้อนออกมา"',
      text: '1. give off = ปล่อยกลิ่น/ปล่อยแสง/ปล่อยความร้อน\n2. take in = รับเข้าสู่ร่างกาย, หลอกลวง\n3. take off = เครื่องบินขึ้น, ถอดเสื้อผ้า\n4. give away = แจกฟรี, เผยความลับ\nเมื่ออาหารเน่าเสีย จึง "ส่งกลิ่นเหม็น" -> gives off',
      steps: [
        'อาหารบูดเน่าส่งกลิ่นเหม็น -> give off an unpleasant smell',
      ],
      trickTip: '💡 give off a smell = ส่งกลิ่นออกมา',
    },
  },
  {
    id: 'ss-eng-66-024',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Contextual Synonyms (damage vs injure/wound)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Word Choice', 'damaged', 'สามเสนวิทยาลัย'],
    content: `Max’s house was severely _______ after the earthquake.`,
    choices: [
      { id: '1', label: '1', content: 'injured', isCorrect: false },
      { id: '2', label: '2', content: 'wounded', isCorrect: false },
      { id: '3', label: '3', content: 'damaged', isCorrect: true },
      { id: '4', label: '4', content: 'destructed', isCorrect: false },
    ],
    solution: {
      summary: 'สิ่งของหรืออาคารบ้านเรือนได้รับความเสียหาย ใช้ "damaged" (injured/wounded ใช้กับคนหรือสิ่งมีชีวิต)',
      text: '1. damaged = เสียหาย ชำรุด (ใช้กับสิ่งไม่มีชีวิต สิ่งก่อสร้าง)\n2. injured = บาดเจ็บ (ใช้กับคน/สัตว์)\n3. wounded = ได้รับบาดแผลจากอาวุธ (ใช้กับสิ่งมีชีวิต)\n4. destructed ไม่มีรูปนี้ในภาษาอังกฤษ (ต้องเป็น destroyed)',
      steps: [
        'ประธานคือ "Max\'s house" (บ้าน) -> ใช้ damaged',
      ],
      trickTip: '💡 อาคาร/สิ่งของเสียหาย = damaged/destroyed | คนบาดเจ็บ = injured/wounded',
    },
  },
  {
    id: 'ss-eng-66-025',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Media & TV Program Types (chat shows)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Media', 'chat shows', 'สามเสนวิทยาลัย'],
    content: `Many of the _______ have famous guests that talk about their lives.`,
    choices: [
      { id: '1', label: '1', content: 'quiz shows', isCorrect: false },
      { id: '2', label: '2', content: 'reality shows', isCorrect: false },
      { id: '3', label: '3', content: 'chat shows', isCorrect: true },
      { id: '4', label: '4', content: 'nature shows', isCorrect: false },
    ],
    solution: {
      summary: 'chat show (หรือ talk show) คือรายการที่มีแขกรับเชิญมาพูดคุยสัมภาษณ์เกี่ยวกับชีวิตและผลงาน',
      text: '1. chat show = รายการทอล์กโชว์สัมภาษณ์แขกรับเชิญคนดัง\n2. quiz show = รายการตอบคำถามชิงรางวัล\n3. reality show = รายการเรียลลิตี้โชว์\n4. nature show = สารคดีธรรมชาติ',
      steps: [
        'มี famous guests มาพูดคุยเกี่ยวกับชีวิตตนเอง -> chat shows',
      ],
      trickTip: '💡 talk about their lives with famous guests = chat shows (talk shows)',
    },
  },
  {
    id: 'ss-eng-66-026',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Vocabulary (reveal vs cover/declare)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'reveal', 'Synonyms', 'สามเสนวิทยาลัย'],
    content: `All people have a side of themselves that they can’t _______ to others.`,
    choices: [
      { id: '1', label: '1', content: 'cover', isCorrect: false },
      { id: '2', label: '2', content: 'reveal', isCorrect: true },
      { id: '3', label: '3', content: 'declare', isCorrect: false },
      { id: '4', label: '4', content: 'present', isCorrect: false },
    ],
    solution: {
      summary: 'reveal แปลว่า "เปิดเผย" เข้ากับบริบทด้านมุมในตัวเองที่ไม่สามารถเปิดเผยให้ผู้อื่นรู้ได้',
      text: '1. reveal = เปิดเผย, เผยให้เห็น\n2. cover = ปกปิด, ปิดบัง\n3. declare = ประกาศอย่างเป็นทางการ\n4. present = นำเสนอ',
      steps: [
        'ด้านที่เก็บซ่อนไว้ไม่สามารถเปิดเผยให้คนอื่นเห็นได้ -> reveal to others',
      ],
      trickTip: '💡 reveal = make known / disclose (เปิดเผย)',
    },
  },
  {
    id: 'ss-eng-66-027',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Proverbs & Vocabulary (look back and regret)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Proverbs', 'regret', 'สามเสนวิทยาลัย'],
    content: `It’s better to look ahead and prepare than to look back and _______.`,
    choices: [
      { id: '1', label: '1', content: 'recall', isCorrect: false },
      { id: '2', label: '2', content: 'regret', isCorrect: true },
      { id: '3', label: '3', content: 'approve', isCorrect: false },
      { id: '4', label: '4', content: 'appreciate', isCorrect: false },
    ],
    solution: {
      summary: 'สุภาษิตเปรียบเทียบ: มองไปข้างหน้าและเตรียมตัว ดีกว่ามองย้อนกลับไปแล้ว "เสียใจภายหลัง" (regret)',
      text: '1. regret = เสียใจภายหลัง\n2. recall = หวนนึกถึง\n3. approve = อนุมัติ\n4. appreciate = ชื่นชม, ซาบซึ้ง',
      steps: [
        'look ahead and prepare (มองไปข้างหน้าและเตรียมพร้อม) ตรงข้ามกับ look back and regret (มองกลับมาแล้วเสียใจ)',
      ],
      trickTip: '💡 look back and regret = มองย้อนกลับไปแล้วเสียใจ',
    },
  },
  {
    id: 'ss-eng-66-028',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Work Vocabulary (resign vs retire/fire)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Career', 'resign', 'สามเสนวิทยาลัย'],
    content: `I don’t like my job very much. I’m going to _______ and look for another one.`,
    choices: [
      { id: '1', label: '1', content: 'fire', isCorrect: false },
      { id: '2', label: '2', content: 'finish', isCorrect: false },
      { id: '3', label: '3', content: 'resign', isCorrect: true },
      { id: '4', label: '4', content: 'retire', isCorrect: false },
    ],
    solution: {
      summary: 'resign แปลว่า "ลาออก" เพื่อไปหางานใหม่ (retire = เกษียณอายุ, fire = ไล่ออก)',
      text: '1. resign = ลาออกจากงาน (ด้วยความสมัครใจ)\n2. retire = เกษียณอายุตามเกณฑ์\n3. fire = ไล่ออก (นายจ้างกระทำ)\n4. finish = ทำให้เสร็จ',
      steps: [
        'ไม่ชอบงานเดิม จึงจะ "ลาออก" (resign) เพื่อหางานใหม่',
      ],
      trickTip: '💡 resign = ลาออก | retire = เกษียณ | get fired = โดนไล่ออก',
    },
  },
  {
    id: 'ss-eng-66-029',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Idioms (in time vs on time)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Idioms', 'in time', 'สามเสนวิทยาลัย'],
    content: `We nearly missed the plane—we were only just _______.`,
    choices: [
      { id: '1', label: '1', content: 'timely', isCorrect: false },
      { id: '2', label: '2', content: 'in time', isCorrect: true },
      { id: '3', label: '3', content: 'on time', isCorrect: false },
      { id: '4', label: '4', content: 'about time', isCorrect: false },
    ],
    solution: {
      summary: '"in time" หมายถึง ทันเวลา (ก่อนสาย/ก่อนเครื่องออกหวุดหวิด) ส่วน on time หมายถึง ตรงเวลาตามตาราง',
      text: '1. in time = ทันเวลาพอดี (ทันก่อนที่จะเกิดเหตุ เช่น ทันขึ้นเครื่องก่อนตกเครื่อง)\n2. on time = ตรงต่อเวลาตามตารางนัดหมายพอดีเป๊ะ\nประโยคบอกว่า "เกือบตกเครื่องแล้ว แต่มาทันแบบหวุดหวิด" จึงใช้ "just in time"',
      steps: [
        'just in time = ทันเวลาแบบฉิวเฉียด',
      ],
      trickTip: '💡 just in time = ทันเวลาพอดี (ก่อนสาย) | on time = ตรงเวลาตามตาราง',
    },
  },
  {
    id: 'ss-eng-66-030',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Idioms (take it easy)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Idioms', 'take it easy', 'สามเสนวิทยาลัย'],
    content: `I’ve been so busy all week. I don’t want to do anything at the weekend – I’ll just stay at home and _______.`,
    choices: [
      { id: '1', label: '1', content: 'make a rest', isCorrect: false },
      { id: '2', label: '2', content: 'make it easy', isCorrect: false },
      { id: '3', label: '3', content: 'take it easy', isCorrect: true },
      { id: '4', label: '4', content: 'have a relax', isCorrect: false },
    ],
    solution: {
      summary: 'สำนวน "take it easy" แปลว่า พักผ่อนสบายๆ ไม่ต้องเครียดหรือไม่ต้องทำอะไรหนักๆ',
      text: '"take it easy" เป็นสำนวนหมายถึง relax / rest (พักผ่อนชิลๆ อยู่บ้าน) ส่วนข้อ 1, 2, 4 ผิดโครงสร้างสำนวนภาษาอังกฤษ',
      steps: [
        'สำนวนพักผ่อนสบายๆ -> take it easy',
      ],
      trickTip: '💡 take it easy = relax (พักผ่อนสบายๆ)',
    },
  },

  // --- Part 3: Conversation & Situational Dialogues (Items 31 - 40) ---
  {
    id: 'ss-eng-66-031',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Asking for Opinion (How did you find...?)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Opinions', 'How did you find', 'สามเสนวิทยาลัย'],
    content: `Bob and Mark are talking about the new film they’ve just watched. You’re planning to watch the film, and you want to know their opinion about it. You say: “____________________”`,
    choices: [
      { id: '1', label: '1', content: 'What’s going on?', isCorrect: false },
      { id: '2', label: '2', content: 'How did you find the film?', isCorrect: true },
      { id: '3', label: '3', content: 'What’s your favourite film genre?', isCorrect: false },
      { id: '4', label: '4', content: 'Was there anything you’ve learnt from the film?', isCorrect: false },
    ],
    solution: {
      summary: '"How did you find the film?" เป็นสำนวนถามความคิดเห็น แปลว่า "คุณคิดว่าภาพยนตร์เรื่องนี้เป็นอย่างไรบ้าง?" (What did you think of the film?)',
      text: 'สำนวน "How did you find + something?" มีความหมายเหมือนกับ "What did you think of + something?" (ถามความคิดเห็นว่าชอบหรือไม่ รู้สึกอย่างไร) ไม่ได้แปลว่าไปหาหนังเจอที่ไหน',
      steps: [
        'ถามความเห็นเกี่ยวกับหนัง -> How did you find the film?',
      ],
      trickTip: '💡 How did you find...? = What do you think of...? (ถามความเห็น)',
    },
  },
  {
    id: 'ss-eng-66-032',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Social Expressions (Fancy meeting you here!)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Idioms', 'Coincidence', 'สามเสนวิทยาลัย'],
    content: `A: Fancy meeting you here!
B: ____________________`,
    choices: [
      { id: '1', label: '1', content: 'Yeah, what a coincidence!', isCorrect: true },
      { id: '2', label: '2', content: 'Yes, it’s a fancy restaurant.', isCorrect: false },
      { id: '3', label: '3', content: 'I haven’t seen him for ages.', isCorrect: false },
      { id: '4', label: '4', content: 'It’s a run-of-the-mill restaurant.', isCorrect: false },
    ],
    solution: {
      summary: '"Fancy meeting you here!" เป็นสำนวนแสดงความประหลาดใจเมื่อเจอคนรู้จักโดยบังเอิญ คำตอบที่เข้ากันคือ "Yeah, what a coincidence!" (บังเอิญจริงๆ!)',
      text: '1. "Fancy meeting you here!" = ไม่นึกเลยว่าจะมาเจอกันที่นี่!\n2. "What a coincidence!" = ช่างบังเอิญอะไรอย่างนี้!',
      steps: [
        'ทักทายแสดงความประหลาดใจที่เจอกันโดยบังเอิญ -> ตอบรับด้วยเรื่องความบังเอิญ (coincidence)',
      ],
      trickTip: '💡 Fancy meeting you here! <-> What a coincidence!',
    },
  },
  {
    id: 'ss-eng-66-033',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Expressing Agreement with Negative Statements',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Neither do I', 'Agreement', 'สามเสนวิทยาลัย'],
    content: `After watching a movie, your friend says that he doesn’t like that movie at all. You agree with him, and then you say: “____________________”`,
    choices: [
      { id: '1', label: '1', content: 'Neither do I.', isCorrect: true },
      { id: '2', label: '2', content: 'Do I have to?', isCorrect: false },
      { id: '3', label: '3', content: 'Why should I like it?', isCorrect: false },
      { id: '4', label: '4', content: 'It seems you’re right.', isCorrect: false },
    ],
    solution: {
      summary: 'การเห็นด้วยกับประโยคปฏิเสธ (doesn’t like) ใช้ "Neither do I." (ฉันก็ไม่ชอบเหมือนกัน)',
      text: 'การแสดงความเห็นพ้องกับประโยคปฏิเสธ:\n- ใช้ "Neither + auxiliary verb + subject" (เช่น Neither do I / Nor do I)\n- หรือ "Subject + negative auxiliary + either" (I don’t either)',
      steps: [
        'เพื่อนพูดปฏิเสธ: he doesn\'t like...\nเราเห็นด้วยกับปฏิเสธ -> Neither do I.',
      ],
      trickTip: '💡 เห็นด้วยกับบอกเล่า = So do I | เห็นด้วยกับปฏิเสธ = Neither do I',
    },
  },
  {
    id: 'ss-eng-66-034',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Forming Questions from Responses',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Questions', 'Yes/No Question', 'สามเสนวิทยาลัย'],
    content: `Bond: What is your favourite subject?
Anya: My favourite subject is English.
Bond: ____________________?
Anya: Yes, but I like doing homework.`,
    choices: [
      { id: '1', label: '1', content: 'Did you do your homework', isCorrect: false },
      { id: '2', label: '2', content: 'Don\'t you like other subjects', isCorrect: false },
      { id: '3', label: '3', content: 'How much homework does your teacher give', isCorrect: false },
      { id: '4', label: '4', content: 'Does your English teacher give much homework', isCorrect: true },
    ],
    solution: {
      summary: 'Anya ตอบว่า "Yes, but I like doing homework" (ให้การบ้านเยอะ แต่ฉันชอบทำ) คำถามจึงต้องเป็น Yes/No question ถามว่าครูให้การบ้านเยอะไหม',
      text: 'คำตอบขึ้นต้นด้วย "Yes, but..." แสดงว่าคำถามต้องเป็น Yes/No question ที่ถามเกี่ยวกับปริมาณการบ้านวิชาภาษาอังกฤษ -> "Does your English teacher give much homework?"',
      steps: [
        'Anya ตอบ Yes/No -> ตัดคำถาม Wh- (ข้อ 3) ออก',
        'ใจความเกี่ยวกับการบ้านเยอะ -> Does your English teacher give much homework?',
      ],
      trickTip: '💡 คำตอบ "Yes, but I like doing homework" บ่งบอกว่าถูกถามว่าครูให้การบ้านเยอะไหม',
    },
  },
  {
    id: 'ss-eng-66-035',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'School & Extracurricular Activities',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Extracurricular', 'Interviews', 'สามเสนวิทยาลัย'],
    content: `Interviewer: Were you in any extracurricular activities?
Lisa: Yes, ____________________`,
    choices: [
      { id: '1', label: '1', content: 'I could get along well with my classmates.', isCorrect: false },
      { id: '2', label: '2', content: 'I was the captain of the school’s football team.', isCorrect: true },
      { id: '3', label: '3', content: 'I went sightseeing with my parents every summer.', isCorrect: false },
      { id: '4', label: '4', content: 'I was a very hard-working student and I earned good grades.', isCorrect: false },
    ],
    solution: {
      summary: '"extracurricular activities" คือ กิจกรรมนอกหลักสูตร/กิจกรรมชมรม คำตอบที่ตรงหมวดคือการเป็นกัปตันทีมฟุตบอลของโรงเรียน',
      text: '"extracurricular activities" หมายถึงกิจกรรมเสริมหลักสูตร เช่น กีฬา ดนตรี ชมรม การเป็นกัปตันทีมฟุตบอล (captain of the school\'s football team) จึงเป็นคำตอบที่ตรงประเด็นที่สุด',
      steps: [
        'extracurricular activities = กิจกรรมนอกหลักสูตร (ชมรม/กีฬา)',
        'คำตอบที่ตรงกิจกรรม -> captain of the school\'s football team',
      ],
      trickTip: '💡 extracurricular activities = กิจกรรมชมรม / กีฬาโรงเรียน',
    },
  },
  {
    id: 'ss-eng-66-036',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Data Presentation & Graphs',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Graphs', 'Scientific discussion', 'สามเสนวิทยาลัย'],
    content: `(For items 36 – 37)
Scientist 1: I could use some help with my presentation materials.
Scientist 2: Sure. ____(36) ____?
Scientist 1: Yes. Rounds of testing are along the x-axis, and performance is on the y-axis.
Scientist 2: So, you want to show both components on the same graph?
Scientist 1: Right. I tried a scatter plot, but there’s just too much data.
Scientist 2: I see. I don’t think you need to include every test result. Just show the averages per round and connect them on a line graph. ____(37) ____.
Scientist 1: I’ll try it.

Item 36: Choose the best sentence to fill in blank (36):`,
    choices: [
      { id: '1', label: '1', content: 'What does each axis mean', isCorrect: false },
      { id: '2', label: '2', content: 'What do you need to compare', isCorrect: false },
      { id: '3', label: '3', content: 'Are you going to make a line graph', isCorrect: true },
      { id: '4', label: '4', content: 'Is this for the machine component comparison', isCorrect: false },
    ],
    solution: {
      summary: 'Scientist 1 ตอบรับว่า "Yes. Rounds of testing are along the x-axis..." แสดงว่าคำถามต้องเป็น Yes/No question เกี่ยวกับกราฟ',
      text: 'คำตอบขึ้นต้นด้วย "Yes." และอธิบายแกน x และ y แสดงว่าคำถามของ Scientist 2 ต้องเป็นคำถามประเภท Yes/No Question เกี่ยวกับรูปแบบกราฟ -> "Are you going to make a line graph?"',
      steps: [
        'สังเกตคำตอบ: Yes. Rounds... on x-axis...',
        'คำถามต้องเป็น Yes/No question เกี่ยวกับการทำกราฟ -> Are you going to make a line graph?',
      ],
      trickTip: '💡 ตอบ Yes -> คำถามต้องขึ้นต้นด้วย Are you / Is this / Do you',
    },
  },
  {
    id: 'ss-eng-66-037',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Giving Advice & Suggestions',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Suggestions', 'Graphs', 'สามเสนวิทยาลัย'],
    content: `(From scientist conversation)
Scientist 2: Just show the averages per round and connect them on a line graph. ____(37) ____.
Scientist 1: I’ll try it.

Item 37: Choose the best sentence to fill in blank (37):`,
    choices: [
      { id: '1', label: '1', content: 'That sounds easy', isCorrect: false },
      { id: '2', label: '2', content: 'There would be less data', isCorrect: false },
      { id: '3', label: '3', content: 'It’ll be much easier to read', isCorrect: true },
      { id: '4', label: '4', content: 'That would be difficult to understand', isCorrect: false },
    ],
    solution: {
      summary: 'การแนะนำให้ใช้กราฟเส้นแสดงค่าเฉลี่ยแทนจุดกระจัดกระจาย จะช่วยให้ "อ่านกราฟได้ง่ายขึ้นมาก" (It’ll be much easier to read)',
      text: 'Scientist 2 แนะนำวิธีแก้ปัญหากราฟที่ข้อมูลเยอะเกินไป โดยให้พล็อตเฉพาะค่าเฉลี่ยแล้วลากเส้นเชื่อม ซึ่งจะส่งผลให้กราฟ "อ่านและเข้าใจได้ง่ายขึ้นมาก"',
      steps: [
        'เหตุผลของการใช้กราฟเส้นแสดงค่าเฉลี่ย -> It\'ll be much easier to read',
      ],
      trickTip: '💡 แนะนำการสรุปกราฟเพื่อแก้ปัญหาข้อมูลล้น -> ช่วยให้อ่านง่ายขึ้น (easier to read)',
    },
  },
  {
    id: 'ss-eng-66-038',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'School Life Conversations',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'School Life', 'Contrast', 'สามเสนวิทยาลัย'],
    content: `(For items 38 – 40)
Steve: Hi, Sally. How are things at your new school? Did you make any new friends?
Sally: ____(38) ____, but now I’ve got quite a few friends.
Steve: What are they like?
Sally: Well, Jenny is the person I hang out with the most. She’s short with dark hair. She loves helping the elderly.
Steve: ____(39) ____
Sally: Yes, she is. Another person I like, but don’t get to see often, is Mark.
Steve: ____(40) ____ Is he so sociable you can’t get hold of him easily?
Sally: No, it’s just that he’s very hardworking. When he’s not studying, he helps his dad.

Item 38: Choose the best sentence to fill in blank (38):`,
    choices: [
      { id: '1', label: '1', content: 'I didn’t do anything', isCorrect: false },
      { id: '2', label: '2', content: 'I worked hard at first', isCorrect: false },
      { id: '3', label: '3', content: 'It was easy in the beginning', isCorrect: false },
      { id: '4', label: '4', content: 'It was difficult in the beginning', isCorrect: true },
    ],
    solution: {
      summary: 'มีคำเชื่อม "but now I\'ve got quite a few friends" (แต่ตอนนี้มีเพื่อนเยอะแล้ว) แสดงว่าช่วงแรก "ค่อนข้างลำบาก/ยาก" (It was difficult in the beginning)',
      text: 'คำเชื่อม "but" แสดงความขัดแย้งกับประโยคหลัง ในเมื่อตอนนี้หาเพื่อนได้เยอะแล้ว ความหมายก่อนหน้าจึงต้องเป็น "ตอนแรกๆ ก็ค่อนข้างยากลำบาก"',
      steps: [
        'สังเกตคำเชื่อม but now... -> ประโยคก่อนหน้าต้องมีความหมายตรงข้าม (It was difficult in the beginning)',
      ],
      trickTip: '💡 It was difficult in the beginning, BUT now...',
    },
  },
  {
    id: 'ss-eng-66-039',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Deduction & Character Descriptions',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Personality', 'must be', 'สามเสนวิทยาลัย'],
    content: `(From Steve & Sally conversation)
Sally: ...Jenny is the person I hang out with the most. She loves helping the elderly.
Steve: ____(39) ____
Sally: Yes, she is.

Item 39: Choose the best sentence to fill in blank (39):`,
    choices: [
      { id: '1', label: '1', content: 'Is she doing well?', isCorrect: false },
      { id: '2', label: '2', content: 'She is very impressed.', isCorrect: false },
      { id: '3', label: '3', content: 'She must be very kind.', isCorrect: true },
      { id: '4', label: '4', content: 'She gets on well with you, doesn’t she?', isCorrect: false },
    ],
    solution: {
      summary: 'Sally เล่าว่า Jenny ชอบช่วยเหลือคนชรา Steve จึงคาดคะเนว่า "เธอต้องเป็นคนใจดีมากแน่ๆ" (She must be very kind) และ Sally ตอบรับว่า "Yes, she is."',
      text: 'Jenny ชอบช่วยเหลือคนสูงอายุ (helping the elderly) แสดงถึงอุปนิสัยใจดี มีน้ำใจ การกล่าวว่า "She must be very kind." จึงสอดคล้องที่สุด และคำตอบรับ "Yes, she is." ก็ยืนยันคุณลักษณะนี้',
      steps: [
        'ชอบช่วยเหลือคนชรา -> สรุปอุปนิสัย: She must be very kind.',
      ],
      trickTip: '💡 loves helping others -> must be very kind',
    },
  },
  {
    id: 'ss-eng-66-040',
    subjectId: 'english',
    topicId: 'eng-conversation',
    topicName: 'Asking for Reason (Why\'s that?)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Conversation', 'Why is that', 'Clarification', 'สามเสนวิทยาลัย'],
    content: `(From Steve & Sally conversation)
Sally: Another person I like, but don’t get to see often, is Mark.
Steve: ____(40) ____ Is he so sociable you can’t get hold of him easily?
Sally: No, it’s just that he’s very hardworking.

Item 40: Choose the best sentence to fill in blank (40):`,
    choices: [
      { id: '1', label: '1', content: 'Why’s that?', isCorrect: true },
      { id: '2', label: '2', content: 'What happened?', isCorrect: false },
      { id: '3', label: '3', content: 'I’m afraid so.', isCorrect: false },
      { id: '4', label: '4', content: 'That’s right.', isCorrect: false },
    ],
    solution: {
      summary: 'Steve ถามเหตุผลว่าทำไมถึงไม่ค่อยได้เจอมาร์ค โดยใช้คำถามสั้นๆ ว่า "Why’s that?" (ทำไมถึงเป็นอย่างนั้นล่ะ?)',
      text: '"Why\'s that?" (ย่อมาจาก Why is that?) ใช้ถามซักถามเหตุผลในบทสนทนาอย่างเป็นธรรมชาติ เมื่อคู่สนทนาพูดถึงสิ่งที่ไม่คาดคิดหรือไม่ปกติ',
      steps: [
        'ถามเหตุผลที่ทำไมไม่ค่อยได้เจอกัน -> Why\'s that?',
      ],
      trickTip: '💡 Why\'s that? = Why? (ทำไมถึงเป็นแบบนั้นล่ะ?)',
    },
  },

  // --- Part 4: Reading Comprehension & Information Interpretation (Items 41 - 54) ---
  {
    id: 'ss-eng-66-041',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Main Purpose',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 75,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Main Idea', 'Breakfast', 'สามเสนวิทยาลัย'],
    content: `(For items 41 – 43)
Do you skip breakfast? Millions of people do, and if you are one of them, you are putting your ability to think and learn at risk. Skipping breakfast can cause you to be hungry, tired, or grumpy by the middle of the morning. Why is that? First, when you wake up, you have not eaten for about eight hours. Your body’s fuel, called glucose, is low. Eating breakfast raises the level of glucose in your brain. Your brain requires a constant flow of glucose to do mental work.
So eating breakfast will give you a mental edge at school. What if you don’t have enough time for breakfast or if you are not hungry when you wake up? Having something for breakfast is better than nothing. Drink some milk or juice. Then catch a nutritious snack later on in the morning. Yoghurt, dry cereal, cheeses, or fruit are good choices. What if you don’t like breakfast foods? Then eat healthy foods you do like. Even cold pizza or a fruit smoothie can power your morning. Any way you look at it, there’s no reason to skip this essential meal.

Item 41: What is the purpose of the text?`,
    choices: [
      { id: '1', label: '1', content: 'To explain the benefits of having breakfast', isCorrect: true },
      { id: '2', label: '2', content: 'To answer questions about skipping breakfast', isCorrect: false },
      { id: '3', label: '3', content: 'To inform about common breakfast habits', isCorrect: false },
      { id: '4', label: '4', content: 'To convince children to have a light breakfast', isCorrect: false },
    ],
    solution: {
      summary: 'จุดประสงค์หลักของบทความคือ อธิบายถึงประโยชน์และความสำคัญของการรับประทานอาหารเช้า (To explain the benefits of having breakfast)',
      text: 'บทความอธิบายว่าอาหารเช้าช่วยเพิ่มกลูโคสในสมอง ทำให้คิดและเรียนรู้ได้ดีขึ้น พร้อมทั้งแนะนำทางเลือกต่างๆ เพื่อไม่ให้งดอาหารเช้า',
      steps: [
        'ใจความหลักทั้งบทความเน้นย้ำถึงประโยชน์ของการกินอาหารเช้า -> explain the benefits of having breakfast',
      ],
      trickTip: '💡 Main Purpose: ดูใจความที่ผู้เขียนพยายามโน้มน้าวและอธิบายตลอดทั้งเรื่อง',
    },
  },
  {
    id: 'ss-eng-66-042',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Detail & Fact Finding',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Fact Finding', 'Breakfast', 'สามเสนวิทยาลัย'],
    content: `(From breakfast passage)
Item 42: Which of the following sentences is **INCORRECT**?`,
    choices: [
      { id: '1', label: '1', content: 'Breakfast can activate your brain and make you think better.', isCorrect: false },
      { id: '2', label: '2', content: 'When you skip breakfast, you can feel tired in the afternoon.', isCorrect: false },
      { id: '3', label: '3', content: 'If you don’t have time for breakfast, you can have a drink instead.', isCorrect: false },
      { id: '4', label: '4', content: 'If you don’t like your breakfast, skip it and eat a lot at lunch time.', isCorrect: true },
    ],
    solution: {
      summary: 'ข้อ 4 กล่าวไม่ถูกต้อง เพราะบทความแนะนำว่าถ้าไม่ชอบอาหารเช้าแบบเดิมๆ ให้หาอาหารสุขภาพอย่างอื่นที่ชอบทานแทน ไม่ใช่ให้งดอาหารเช้า',
      text: 'บทความระบุชัดเจนว่า "there\'s no reason to skip this essential meal" และแนะนำว่าถ้าไม่ชอบอาหารเช้าทั่วไป ให้ทานอาหารสุขภาพอื่นๆ ที่ชอบ เช่น พิซซ่าเย็นหรือสมูทตี้ผลไม้ ข้อ 4 ที่บอกให้งดจึงผิด',
      steps: [
        'ตรวจสอบข้อ 4: ผู้เขียนห้ามงดอาหารเช้าอย่างเด็ดขาด -> ข้อ 4 กล่าวผิด',
      ],
      trickTip: '💡 หาข้อผิด: มองหาตัวเลือกที่ขัดแย้งกับข้อความในบทความโดยตรง',
    },
  },
  {
    id: 'ss-eng-66-043',
    subjectId: 'english',
    topicId: 'eng-vocab',
    topicName: 'Vocabulary in Context (requires = needs)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Vocabulary', 'Context Clues', 'Synonyms', 'สามเสนวิทยาลัย'],
    content: `(From breakfast passage: "Your brain requires a constant flow of glucose...")
Item 43: What does the word ‘requires’ mean?`,
    choices: [
      { id: '1', label: '1', content: 'needs', isCorrect: true },
      { id: '2', label: '2', content: 'helps', isCorrect: false },
      { id: '3', label: '3', content: 'causes', isCorrect: false },
      { id: '4', label: '4', content: 'produces', isCorrect: false },
    ],
    solution: {
      summary: 'require แปลว่า "ต้องการ" หรือ "จำเป็นต้องมี" มีความหมายเหมือนกับ "need"',
      text: '"require" = need / demand (สมองจำเป็นต้องได้รับกลูโคสอย่างต่อเนื่อง)',
      steps: [
        'requires = needs (ต้องการ/จำเป็นต้องใช้)',
      ],
      trickTip: '💡 require = need (จำเป็นต้องมี/ต้องการ)',
    },
  },
  {
    id: 'ss-eng-66-044',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Scanning Details',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Travel in USA', 'Car Rental', 'สามเสนวิทยาลัย'],
    content: `(For items 44 – 46)
Getting around the USA
America is huge, so flying is the quickest way to get around the country. It can be expensive though, so here are some other ways of getting around.
If you aren’t in a hurry, the best alternative is to go by car. You have to be at least 25 years old to rent a car in the States, and you need a valid driver’s license and a major credit card to do so. There are a lot of rental car companies, and their prices vary a lot. Compare companies before you decide which one to use and remember it can be cheaper to book for a week than for a day.
If you prefer to be driven rather than driving yourself, the next best way to travel is by bus. Greyhound is the major long-distance bus company, and it has routes through the USA and Canada. Tickets are much cheaper if you buy them seven days in advance, and there are often other offers. If you’re travelling with a friend, your companion gets 50% off if you buy the tickets three days before you travel, and children aged between two and 11 get a 40% discount.
An alternative to using the bus is to take the train. Amtrak is the American rail company, and it has long-distance lines connecting all of America’s biggest cities. It also runs buses from major stations to smaller towns and national parks. Fares vary depending on the type of train and the seat, but you need to reserve at least three days ahead to get a discount. Students with an International Student Card get 15% off the standard fare. Bring your own food, as the dining car is quite expensive.

Item 44: What do you need to hire a car in America?`,
    choices: [
      { id: '1', label: '1', content: 'An International Student Card', isCorrect: false },
      { id: '2', label: '2', content: 'Aged of 25 and A valid driver’s license', isCorrect: false },
      { id: '3', label: '3', content: 'An ID card and a major credit card', isCorrect: false },
      { id: '4', label: '4', content: 'A valid driver’s license and a major credit card', isCorrect: true },
    ],
    solution: {
      summary: 'บทความระบุว่าในการเช่ารถต้องใช้: "a valid driver’s license and a major credit card"',
      text: 'ข้อความในย่อหน้าที่ 2 ระบุชัดเจนว่า "...you need a valid driver’s license and a major credit card to do so."',
      steps: [
        'ค้นหาคำสำคัญ "rent a car": พบประโยค "you need a valid driver’s license and a major credit card"',
      ],
      trickTip: '💡 สแกนหาคำว่า "rent a car" -> เจอ driver\'s license + major credit card',
    },
  },
  {
    id: 'ss-eng-66-045',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Specific Information',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Amtrak', 'Discount', 'สามเสนวิทยาลัย'],
    content: `(From Getting around the USA passage)
Item 45: How much do international students pay on Amtrak trains?`,
    choices: [
      { id: '1', label: '1', content: 'They get a 15% discount.', isCorrect: true },
      { id: '2', label: '2', content: 'They get a 50% discount.', isCorrect: false },
      { id: '3', label: '3', content: 'They get a 40% discount.', isCorrect: false },
      { id: '4', label: '4', content: 'They get a half price.', isCorrect: false },
    ],
    solution: {
      summary: 'นักเรียนที่มีบัตรนักเรียนนานาชาติจะได้รับส่วนลด 15% (Students with an International Student Card get 15% off)',
      text: 'ย่อหน้าสุดท้ายระบุว่า: "Students with an International Student Card get 15% off the standard fare."',
      steps: [
        'ค้นหาคำว่า "International Student Card" ในส่วนของรถไฟ Amtrak -> พบ 15% off',
      ],
      trickTip: '💡 15% off = 15% discount',
    },
  },
  {
    id: 'ss-eng-66-046',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Advice & Tips',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Amtrak', 'Food', 'สามเสนวิทยาลัย'],
    content: `(From Getting around the USA passage)
Item 46: What should long-distance rail passengers take with them?`,
    choices: [
      { id: '1', label: '1', content: 'They should take their own food.', isCorrect: true },
      { id: '2', label: '2', content: 'They don’t have to bring anything.', isCorrect: false },
      { id: '3', label: '3', content: 'They must take some water or coffee.', isCorrect: false },
      { id: '4', label: '4', content: 'They should take an International Student Card.', isCorrect: false },
    ],
    solution: {
      summary: 'ผู้โดยสารรถไฟระยะไกลควรนำอาหารมาเอง เพราะตู้เสบียงอาหารมีราคาค่อนข้างแพง (Bring your own food)',
      text: 'ประโยคสุดท้ายของบทความระบุว่า: "Bring your own food, as the dining car is quite expensive."',
      steps: [
        'ค้นหาคำแนะนำบนรถไฟ -> Bring your own food',
      ],
      trickTip: '💡 "Bring your own food" = "They should take their own food"',
    },
  },
  {
    id: 'ss-eng-66-047',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Negative Fact Finding',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Fruits', 'Fact Finding', 'สามเสนวิทยาลัย'],
    content: `(For items 47 – 49)
An apple a day keeps the doctor away. In winter, the antioxidant vitamin C in oranges and citrus fruits boosts the immune system. Grapes are high in nutrients; vitamins B1, B2, B6, C, and K; and essential minerals. Pineapple is a natural healer packed with vitamin C and bromelain, a potential anti-inflammatory. The list of healthy, healing fruits goes on and on, but when it comes to health, popularity, versatility, and overall usefulness, none can beat the banana.
A nine-inch-long banana is 75 percent water and 35 percent skin, and has between 110 and 140 calories. Bananas contain three sugars: sucrose, fructose, and glucose, making them an instant and sustained energy food.

Item 47: Which of the following fruits is **NOT** mentioned in the text?`,
    choices: [
      { id: '1', label: '1', content: 'orange', isCorrect: false },
      { id: '2', label: '2', content: 'banana', isCorrect: false },
      { id: '3', label: '3', content: 'kiwi', isCorrect: true },
      { id: '4', label: '4', content: 'pineapple', isCorrect: false },
    ],
    solution: {
      summary: 'ผลไม้ที่ไม่ถูกกล่าวถึงในบทความคือ กีวี (kiwi)',
      text: 'บทความกล่าวถึง apple, orange, citrus fruits, grapes, pineapple และ banana แต่ไม่มีการกล่าวถึง kiwi เลย',
      steps: [
        'ตรวจสอบผลไม้ที่ปรากฏ: Apple, Orange, Grape, Pineapple, Banana',
        'ไม่พบ: Kiwi',
      ],
      trickTip: '💡 กวาดสายตาหาชื่อผลไม้ 4 ช้อยส์ -> kiwi ไม่มีในเนื้อเรื่อง',
    },
  },
  {
    id: 'ss-eng-66-048',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Cause & Effect',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Bananas', 'Energy', 'สามเสนวิทยาลัย'],
    content: `(From healthy fruits passage)
Item 48: Why are bananas a good source of energy?`,
    choices: [
      { id: '1', label: '1', content: 'They contain a lot of water.', isCorrect: false },
      { id: '2', label: '2', content: 'There are a lot of vitamin C in them.', isCorrect: false },
      { id: '3', label: '3', content: 'They have three types of sugars.', isCorrect: true },
      { id: '4', label: '4', content: 'They are big enough to make your stomach full.', isCorrect: false },
    ],
    solution: {
      summary: 'กล้วยเป็นแหล่งพลังงานชั้นดีเพราะมีน้ำตาลถึง 3 ชนิด (sucrose, fructose, glucose)',
      text: 'ประโยคสุดท้ายระบุว่า: "Bananas contain three sugars: sucrose, fructose, and glucose, making them an instant and sustained energy food."',
      steps: [
        'หาเหตุผลเรื่องพลังงาน: contain three sugars -> instant and sustained energy',
      ],
      trickTip: '💡 contain three sugars = They have three types of sugars',
    },
  },
  {
    id: 'ss-eng-66-049',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension - Fact vs Error',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Bananas', 'Calculations', 'สามเสนวิทยาลัย'],
    content: `(From healthy fruits passage)
Item 49: Which of the following sentences is **INCORRECT**?`,
    choices: [
      { id: '1', label: '1', content: 'Vitamin C is an antioxidant.', isCorrect: false },
      { id: '2', label: '2', content: 'Two thirds of a banana is water.', isCorrect: true },
      { id: '3', label: '3', content: 'Grapes contain vitamins B1, B2, B6, C, and K.', isCorrect: false },
      { id: '4', label: '4', content: 'Bromelain is considered a potential anti-inflammatory.', isCorrect: false },
    ],
    solution: {
      summary: 'ข้อ 2 ผิด เพราะบทความระบุว่ากล้วยมีน้ำ 75% ซึ่งเท่ากับ 3 ใน 4 (Three quarters) ไม่ใช่ 2 ใน 3 (Two thirds = 66.7%)',
      text: 'บทความระบุว่า "A nine-inch-long banana is 75 percent water" (75% = 3/4) ดังนั้นข้อความที่บอกว่า "Two thirds (2/3)" จึงผิดข้อเท็จจริง',
      steps: [
        '75% = 3/4 (Three quarters)',
        'Two thirds = 2/3 ≈ 66.7% -> ข้อ 2 กล่าวไม่ถูกต้อง',
      ],
      trickTip: '💡 75% คือ 3 ใน 4 (three-quarters) ไม่ใช่ 2 ใน 3 (two-thirds)',
    },
  },
  {
    id: 'ss-eng-66-050',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Notice & School Announcements',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Notice', 'Inference', 'สามเสนวิทยาลัย'],
    content: `(For item 50)
Notice:
"Mr Thomas is away today. Class 6A, at 10 a.m. please go and join Class 6B in the Sports Hall for PE.
Mr Thomas will be back tomorrow."

According to the notice, which of the following sentences is **CORRECT**?`,
    choices: [
      { id: '1', label: '1', content: 'There are not any PE lessons tomorrow.', isCorrect: false },
      { id: '2', label: '2', content: 'Class 6A’s lesson starts at a different time today.', isCorrect: false },
      { id: '3', label: '3', content: 'There will be more students in the Sports Hall than usual today.', isCorrect: true },
      { id: '4', label: '4', content: 'Class 6B needs to cancel PE lesson because Mr. Thomas isn’t at school.', isCorrect: false },
    ],
    solution: {
      summary: 'เนื่องจากห้อง 6A ต้องไปเรียนพละร่วมกับห้อง 6B ที่ Sports Hall ทำให้มีจำนวนนักเรียนในโรงยิมมากกว่าปกติ',
      text: 'ประกาศแจ้งให้นักเรียนห้อง 6A ไปรวมเรียนพละกับห้อง 6B ดังนั้นที่ Sports Hall ในวันนี้จะมีนักเรียนทั้ง 2 ห้องรวมกัน ซึ่งมากกว่าปกติ (more students than usual)',
      steps: [
        'Class 6A + Class 6B เรียนพร้อมกันใน Sports Hall -> มีนักเรียนมากกว่าปกติ (ข้อ 3 ถูกต้อง)',
      ],
      trickTip: '💡 รวม 2 ห้องในห้องเดียวกัน -> more students than usual',
    },
  },
  {
    id: 'ss-eng-66-051',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Infographics - Purpose of Poster',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Infographics', 'Social Media', 'สามเสนวิทยาลัย'],
    content: `(For item 51)
Poster Header: **Age Restrictions on Social Media**
- **Age 13:** Facebook, Twitter, Instagram, Snapchat, TikTok, Kik, Ask.fm, Houseparty, Periscope, Tumblr, Pinterest, Reddit
- **Age 13+:** YouTube, WeChat, Whisper, Yubo (with parental consent)
- **Age 16:** LinkedIn, WhatsApp
- **Age 18:** Tinder, Bumble, Hinge

What is the purpose of this poster?`,
    choices: [
      { id: '1', label: '1', content: 'To persuade kids not to use social medias.', isCorrect: false },
      { id: '2', label: '2', content: 'To inform the variety of social media platforms.', isCorrect: false },
      { id: '3', label: '3', content: 'To show the huge number of social media at the present.', isCorrect: false },
      { id: '4', label: '4', content: 'To give information of the appropriate age of using different social medias.', isCorrect: true },
    ],
    solution: {
      summary: 'โปสเตอร์นี้มีจุดประสงค์เพื่อให้ข้อมูลเกี่ยวกับเกณฑ์อายุที่เหมาะสมในการใช้งานโซเชียลมีเดียแต่ละแพลตฟอร์ม',
      text: 'หัวข้อโปสเตอร์คือ "Age Restrictions on Social Media" (ข้อจำกัดด้านอายุบนโซเชียลมีเดีย) จึงเป็นการให้ข้อมูลเกณฑ์อายุที่เหมาะสม (appropriate age) ในการใช้แต่ละแพลตฟอร์ม',
      steps: [
        'หัวข้อ: Age Restrictions on Social Media',
        'จุดประสงค์ -> To give information of the appropriate age of using different social medias.',
      ],
      trickTip: '💡 Age Restrictions = appropriate age of using social media',
    },
  },
  {
    id: 'ss-eng-66-052',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Comics & Humor Interpretation',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Cartoons', 'Humor', 'Inference', 'สามเสนวิทยาลัย'],
    content: `(For item 52)
Cartoon Dialogue:
- Husband at laptop: "HONEY, WHAT’S THE PASSWORD?"
- Wife from another room: "OUR ANNIVERSARY DATE."
- Husband (looking stressed at night): "SHE DID THIS ON PURPOSE."

From the cartoon, why can **NOT** the man use the laptop?`,
    choices: [
      { id: '1', label: '1', content: 'The laptop is broken.', isCorrect: false },
      { id: '2', label: '2', content: 'He is waiting for his wife turn it on.', isCorrect: false },
      { id: '3', label: '3', content: 'He thinks the password is too difficult.', isCorrect: false },
      { id: '4', label: '4', content: 'He doesn’t remember the date they got married.', isCorrect: true },
    ],
    solution: {
      summary: 'มุกตลกของการ์ตูนคือ สามีจำวันครบรอบแต่งงาน (Anniversary date) ไม่ได้ จึงไม่สามารถใส่รหัสผ่านเข้าใช้งานโน้ตบุ๊กได้',
      text: 'ภรรยาบอกว่ารหัสผ่านคือ "วันครบรอบวันแต่งงาน" (Anniversary date) แล้วสามีบ่นว่าภรรยาจงใจแกล้ง นั่นหมายความว่าเขาจำวันแต่งงานไม่ได้',
      steps: [
        'Password = anniversary date (วันครบรอบแต่งงาน)',
        'สามีบอกภรรยาแกล้ง -> แปลว่าสามีจำวันแต่งงานไม่ได้ (doesn\'t remember the date they got married)',
      ],
      trickTip: '💡 Anniversary date = วันครบรอบแต่งงาน -> จำไม่ได้จึงเข้าเครื่องไม่ได้',
    },
  },
  {
    id: 'ss-eng-66-053',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading House Rules (Cat Café)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Rules', 'Cat Café', 'สามเสนวิทยาลัย'],
    content: `(For item 53)
HOUSE RULES at our Little Cat Café:
- No rough handling (Please do not carry the cats; if they get on your lap themselves, that’s OK)
- Do not wake a sleeping cat
- Taking photos is OK! (No flash photography)
- Please do not shout or run around loudly
- Please do not feed the cats any human food or drinks
- Children must be at least 7 years old and supervised by an adult

What can be done to the cats in the cat café?`,
    choices: [
      { id: '1', label: '1', content: 'Carry the cats to your laps.', isCorrect: false },
      { id: '2', label: '2', content: 'Use flash to take their photos.', isCorrect: false },
      { id: '3', label: '3', content: 'Give your food to the cats.', isCorrect: false },
      { id: '4', label: '4', content: 'None of the above', isCorrect: true },
    ],
    solution: {
      summary: 'กฎระเบียบของคาเฟ่แมว: ห้ามอุ้มแมว (do not carry), ห้ามใช้แฟลช (no flash), ห้ามให้อาหารคนแก่แมว (do not feed human food) ดังนั้นตัวเลือก 1, 2, 3 ล้วนเป็นข้อห้าม จึงตอบ "None of the above"',
      text: 'ข้อ 1 ผิดเพราะกฎบอกว่า "Please do not carry the cats", ข้อ 2 ผิดเพราะกฎบอก "No flash photography", ข้อ 3 ผิดเพราะกฎบอก "Please do not feed the cats any human food" ดังนั้นสิ่งที่ทำได้จึงไม่มีในตัวเลือก 1-3 ตอบ "None of the above"',
      steps: [
        'ข้อ 1, 2, 3 ล้วนเป็นข้อห้ามในกฎระเบียบ',
        'ตอบ None of the above (ไม่มีข้อใดถูก)',
      ],
      trickTip: '💡 ทุกข้อ 1-3 ขัดกับกฎของคาเฟ่ทั้งหมด -> ตอบ None of the above',
    },
  },
  {
    id: 'ss-eng-66-054',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Picture Interpretation & Inference',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'easy',
    points: 2,
    timeEstimateSeconds: 45,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Reading', 'Cartoons', 'Inference', 'สามเสนวิทยาลัย'],
    content: `(For item 54)
A man in Viking costume with an arrow stuck in his rear comes to the doctor’s reception:
- Patient: "I’d like to see the doctor."
- Receptionist: "Certainly, sir... Have a seat and he’ll see you shortly."
- Patient: "If you don’t mind, I’ll just stand."

What can be inferred from the picture and conversation?`,
    choices: [
      { id: '1', label: '1', content: 'The man does not want to sit.', isCorrect: true },
      { id: '2', label: '2', content: 'The man shot an arrow.', isCorrect: false },
      { id: '3', label: '3', content: 'The man does not have to wait.', isCorrect: false },
      { id: '4', label: '4', content: 'The man met the doctor.', isCorrect: false },
    ],
    solution: {
      summary: 'คนไข้ปฏิเสธการนั่งและขอยืนแทน ("I’ll just stand") เพราะมีลูกธนูปักอยู่ที่ก้น/ด้านหลัง',
      text: 'คนไข้บอกว่า "If you don’t mind, I’ll just stand." (ถ้าไม่ว่าอะไร ผมขอยืนรอดีกว่า) จึงอนุมานได้ชัดเจนว่า "The man does not want to sit."',
      steps: [
        'คนไข้พูดชัดเจน: I\'ll just stand -> The man does not want to sit.',
      ],
      trickTip: '💡 I\'ll just stand = The man does not want to sit',
    },
  },

  // --- Part 5: Error Identification (Items 55 - 60) ---
  {
    id: 'ss-eng-66-055',
    subjectId: 'english',
    topicId: 'eng-error-id',
    topicName: 'Error Identification - Gerund (spend time doing)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Error Identification', 'Gerund', 'spend time', 'สามเสนวิทยาลัย'],
    content: `Choose the underlined part which contains an error:

Selena Gomez has spent her time **<u>to do</u> (1)** lots of charity work **<u>for several years</u> (2)**. She has **<u>kindly</u> (3)** offered to help children **<u>who live</u> (4)** without enough food.`,
    choices: [
      { id: '1', label: '1', content: 'to do', isCorrect: true },
      { id: '2', label: '2', content: 'for several years', isCorrect: false },
      { id: '3', label: '3', content: 'kindly', isCorrect: false },
      { id: '4', label: '4', content: 'who live', isCorrect: false },
    ],
    solution: {
      summary: 'โครงสร้าง "spend time + V-ing" (ไม่ใช่ to + V.inf) ดังนั้น (1) to do ต้องแก้เป็น "doing"',
      text: 'สำนวนการใช้กริยา spend:\n- spend + time/money + V-ing (หรือ on + Noun)\nดังนั้น "spent her time to do" จึงผิดหลักไวยากรณ์ ต้องแก้ไขเป็น "spent her time doing lots of charity work"',
      steps: [
        'โครงสร้าง: spend + time + V-ing',
        'จุดที่ผิดคือหมายเลข (1) to do -> ต้องแก้เป็น doing',
      ],
      trickTip: '💡 spend time/money + V-ing (doing something) เสมอ',
    },
  },
  {
    id: 'ss-eng-66-056',
    subjectId: 'english',
    topicId: 'eng-error-id',
    topicName: 'Error Identification - Modal + Base Verb',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Error Identification', 'Infinitive', 'able to', 'สามเสนวิทยาลัย'],
    content: `Choose the underlined part which contains an error:

Thom Brown has **<u>finished</u> (1)** his university course, **<u>after</u> (2)** 24 years. He started his course in 1998, but he wasn’t able **<u>to finished</u> (3)** it until **<u>this June</u> (4)**.`,
    choices: [
      { id: '1', label: '1', content: 'finished', isCorrect: false },
      { id: '2', label: '2', content: 'after', isCorrect: false },
      { id: '3', label: '3', content: 'to finished', isCorrect: true },
      { id: '4', label: '4', content: 'this June', isCorrect: false },
    ],
    solution: {
      summary: 'หลัง "be able to" ต้องตามด้วยกริยาไม่ผันรูป (Base form: V.infinitive) ดังนั้น (3) to finished ต้องแก้เป็น "to finish"',
      text: 'โครงสร้าง: be able to + V.infinitive\nคำว่า "finished" ในจุดที่ (3) เป็นรูปอดีต/V.3 ซึ่งผิดหลักไวยากรณ์ ต้องแก้เป็น "to finish"',
      steps: [
        'be able to + V.infinitive (กริยารูปเดิมไม่ผัน)',
        'จุดที่ผิดคือหมายเลข (3) to finished -> ต้องแก้เป็น to finish',
      ],
      trickTip: '💡 to + V.infinitive (to finish ไม่เติม -ed/-s/-ing)',
    },
  },
  {
    id: 'ss-eng-66-057',
    subjectId: 'english',
    topicId: 'eng-error-id',
    topicName: 'Error Identification - would love to + V.inf',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Error Identification', 'would love', 'Infinitive', 'สามเสนวิทยาลัย'],
    content: `Choose the underlined part which contains an error:

Jenny wants to be a musician when she **<u>grows up</u> (1)**. She enjoys **<u>playing</u> (2)** the guitar and loves **<u>writing</u> (3)** her own songs. She’d love **<u>studying</u> (4)** music at university one day.`,
    choices: [
      { id: '1', label: '1', content: 'grows up', isCorrect: false },
      { id: '2', label: '2', content: 'playing', isCorrect: false },
      { id: '3', label: '3', content: 'writing', isCorrect: false },
      { id: '4', label: '4', content: 'studying', isCorrect: true },
    ],
    solution: {
      summary: 'โครงสร้าง "would love" (She’d love) ต้องตามด้วย "to + V.inf" เท่านั้น ดังนั้น (4) studying ต้องแก้เป็น "to study"',
      text: 'ความแตกต่างระหว่าง love และ would love:\n- love + V-ing หรือ to + V.inf ได้ทั้งสองแบบ\n- would love / would like / would prefer ต้องตามด้วย "to + V.infinitive" เท่านั้น\nดังนั้น "She’d love studying" จึงผิด ต้องแก้เป็น "She’d love to study"',
      steps: [
        'She\'d love = She would love',
        'would love + to + V.infinitive -> ต้องแก้ studying เป็น to study',
      ],
      trickTip: '💡 would like / would love / would prefer + to + V.inf เท่านั้น',
    },
  },
  {
    id: 'ss-eng-66-058',
    subjectId: 'english',
    topicId: 'eng-error-id',
    topicName: 'Error Identification - Preposition (with vs without)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Error Identification', 'Preposition', 'without', 'สามเสนวิทยาลัย'],
    content: `Choose the underlined part which contains an error:

You don’t marry someone you can **<u>live with</u> (1)**. You marry someone you **<u>cannot</u> (2)** live **<u>with</u> (3)**.`,
    choices: [
      { id: '1', label: '1', content: 'live with', isCorrect: false },
      { id: '2', label: '2', content: 'cannot', isCorrect: false },
      { id: '3', label: '3', content: 'with', isCorrect: true },
      { id: '4', label: '4', content: 'None', isCorrect: false },
    ],
    solution: {
      summary: 'สำนวนคำคมความรัก: "You marry someone you cannot live without." (คนที่คุณขาดเขาไม่ได้) ดังนั้น (3) with ต้องแก้เป็น "without"',
      text: 'คำคมภาษาอังกฤษกล่าวไว้ว่า: "You don’t marry someone you can live with. You marry someone you cannot live without." (คุณไม่ได้แต่งงานกับคนที่คุณอยู่ด้วยได้ แต่คุณแต่งงานกับคนที่คุณขาดเขาไปไม่ได้ในชีวิต) จุดผิดจึงเป็นคำว่า "with" ที่ต้องเปลี่ยนเป็น "without"',
      steps: [
        'สำนวนขาดไม่ได้: cannot live without someone',
        'จุดที่ (3) with จึงผิดความหมาย ต้องแก้เป็น without',
      ],
      trickTip: '💡 cannot live without = ขาดไม่ได้ / อยู่ไม่ได้ถ้าไม่มีเขา',
    },
  },
  {
    id: 'ss-eng-66-059',
    subjectId: 'english',
    topicId: 'eng-error-id',
    topicName: 'Error Identification - Conjunction (Because vs Even if)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'hard',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Error Identification', 'Conjunctions', 'Even if', 'สามเสนวิทยาลัย'],
    content: `Choose the underlined part which contains an error:

**<u>Because</u> (1)** I **<u>lose</u> (2)** my memory, I am **<u>sure</u> (3)** I will just fall in love with you **<u>all over again</u> (4)**.`,
    choices: [
      { id: '1', label: '1', content: 'Because', isCorrect: true },
      { id: '2', label: '2', content: 'lose', isCorrect: false },
      { id: '3', label: '3', content: 'sure', isCorrect: false },
      { id: '4', label: '4', content: 'all over again', isCorrect: false },
    ],
    solution: {
      summary: 'ประโยคนี้แสดงเงื่อนไขขัดแย้ง/สมมุติ ("แม้ว่า/ถึงแม้ฉันจะสูญเสียความทรงจำ...") จึงต้องใช้ "Even if" หรือ "Even though" แทน (1) Because',
      text: 'ความหมายของประโยค: "แม้ว่าฉันจะสูญเสียความทรงจำไป ฉันก็มั่นใจว่าจะตกหลุมรักคุณใหม่อีกครั้งอย่างแน่นอน" คำเชื่อมแสดงเงื่อนไขที่ถูกต้องคือ "Even if" ไม่ใช่ "Because" (เพราะว่า)',
      steps: [
        'ความหมายแสดงการสมมุติ/เงื่อนไขแย้ง -> แม้ว่า (Even if)',
        'จุดที่ผิดคือหมายเลข (1) Because -> ต้องแก้เป็น Even if',
      ],
      trickTip: '💡 Even if I lose my memory... (แม้ว่าฉันจะความจำเสื่อม...)',
    },
  },
  {
    id: 'ss-eng-66-060',
    subjectId: 'english',
    topicId: 'eng-error-id',
    topicName: 'Error Identification - Collocation (make a choice)',
    school: 'สามเสนวิทยาลัย',
    year: 2566,
    round: 'ห้องเรียนพิเศษ (EP / Gifted)',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    source: 'SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ)',
    tags: ['Error Identification', 'Collocations', 'make a choice', 'สามเสนวิทยาลัย'],
    content: `Choose the underlined part which contains an error:

Humans are **<u>creatures</u> (1)** that always **<u>get hurt</u> (2)** and feel regret whenever they **<u>do a choice</u> (3)** on **<u>something</u> (4)**.`,
    choices: [
      { id: '1', label: '1', content: 'creatures', isCorrect: false },
      { id: '2', label: '2', content: 'get hurt', isCorrect: false },
      { id: '3', label: '3', content: 'do a choice', isCorrect: true },
      { id: '4', label: '4', content: 'something', isCorrect: false },
    ],
    solution: {
      summary: 'คำว่า choice ใช้คู่กับกริยา make เสมอ (Collocation: "make a choice") ดังนั้น (3) do a choice ต้องแก้เป็น "make a choice"',
      text: 'กฎ Collocation ภาษาอังกฤษ:\n- make a choice = ตัดสินใจเลือก (ถูกต้อง)\n- do a choice = ผิดหลักการใช้คำคู่\nดังนั้นจุดที่ผิดคือหมายเลข (3) do a choice',
      steps: [
        'Collocation คู่กับ choice คือ "make" -> make a choice',
        'จุดที่ผิดคือหมายเลข (3) do a choice -> ต้องแก้เป็น make a choice',
      ],
      trickTip: '💡 make a choice / make a decision (ห้ามใช้ do a choice)',
    },
  },
];
