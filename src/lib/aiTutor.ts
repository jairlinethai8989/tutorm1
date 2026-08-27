import { Question } from '@/types/question';

export interface AITutorAssistance {
  hint: string;
  formulaAndTricks: string[];
  kidExplanation: string;
  keyConcepts: string[];
}

/**
 * Intelligent, topic-aware and solution-integrated AI Tutor generator.
 * Analyzes question content, subjectId, topicName, tags, and solution tricks/steps
 * to produce accurate, contextual hints, formulas, and kid-friendly explanations.
 */
export const generateAITutorAssistance = (question: Question): AITutorAssistance => {
  const subjectId = (question.subjectId || (question as any).subject || '').toLowerCase();
  const topicName = (question.topicName || '').toLowerCase();
  const content = (question.content || '').toLowerCase();
  const tags = (question.tags || []).map((t) => t.toLowerCase());

  // Extract custom tricks & steps from question data if available
  const solution = question.solution || ({} as any);
  const fastTrick = solution.fastTrick || solution.trickTip;
  const commonMistake = solution.commonMistake;
  const rawSteps = solution.steps || [];
  const firstStep = rawSteps.length > 0
    ? typeof rawSteps[0] === 'string'
      ? rawSteps[0]
      : rawSteps[0].content
    : '';

  // 1. Math Analysis
  if (
    subjectId === 'math' ||
    topicName.includes('คณิต') ||
    content.includes('พื้นที่') ||
    content.includes('สมการ') ||
    content.includes('ห.ร.ม.') ||
    content.includes('ค.ร.น.') ||
    content.includes('อัตราเร็ว') ||
    content.includes('ร้อยละ') ||
    content.includes('\\frac')
  ) {
    return analyzeMathQuestion(question, content, topicName, fastTrick, commonMistake, firstStep);
  }

  // 2. Science Analysis
  if (
    subjectId === 'science' ||
    topicName.includes('วิทย์') ||
    content.includes('ทดลอง') ||
    content.includes('เซลล์') ||
    content.includes('พลังงาน') ||
    content.includes('สาร') ||
    content.includes('ไฟฟ้า') ||
    content.includes('แรง') ||
    content.includes('ระบบ')
  ) {
    return analyzeScienceQuestion(question, content, topicName, fastTrick, commonMistake, firstStep);
  }

  // 3. English Analysis
  if (
    subjectId === 'english' ||
    topicName.includes('english') ||
    topicName.includes('อังกฤษ') ||
    content.includes('passage') ||
    content.includes('grammar') ||
    content.includes('tense') ||
    content.includes('vocabulary') ||
    content.includes('conversation')
  ) {
    return analyzeEnglishQuestion(question, content, topicName, fastTrick, commonMistake, firstStep);
  }

  // 4. Thai Language Analysis
  if (
    subjectId === 'thai' ||
    topicName.includes('ไทย') ||
    content.includes('คำสมาส') ||
    content.includes('คำสนธิ') ||
    content.includes('ราชาศัพท์') ||
    content.includes('กลอน') ||
    content.includes('สุภาษิต') ||
    content.includes('ประโยค')
  ) {
    return analyzeThaiQuestion(question, content, topicName, fastTrick, commonMistake, firstStep);
  }

  // 5. Social Studies Analysis
  if (
    subjectId === 'social' ||
    topicName.includes('สังคม') ||
    topicName.includes('ภูมิศาสตร์') ||
    topicName.includes('ประวัติศาสตร์') ||
    topicName.includes('ศาสนา') ||
    topicName.includes('หน้าที่พลเมือง') ||
    topicName.includes('เศรษฐศาสตร์')
  ) {
    return analyzeSocialQuestion(question, content, topicName, fastTrick, commonMistake, firstStep);
  }

  // General Fallback with custom extracted data
  const formulas: string[] = [];
  if (fastTrick) formulas.push(`⚡ ${fastTrick}`);
  formulas.push('📌 ดึงข้อมูลจากโจทย์: สรุปสิ่งที่โจทย์ "กำหนดให้" และสิ่งที่โจทย์ "ต้องการหา"');
  formulas.push('🔍 เทคนิคตัดช้อยส์: ตัดตัวเลือกที่มีข้อความสุดโต่งหรือไม่สมเหตุสมผลออกก่อน');

  return {
    hint: firstStep
      ? `💡 จุดเริ่มต้นความคิด: ${firstStep}`
      : 'อ่านโจทย์อย่างละเอียด สังเกตเงื่อนไขสำคัญที่โจทย์กำหนด แล้วค่อย ๆ พิจารณาความสัมพันธ์ทีละขั้นครับ',
    formulaAndTricks: formulas,
    kidExplanation: solution.summary
      ? `💡 สรุปแนวคิด:\n${solution.summary}`
      : 'โจทย์ข้อนี้วัดความเข้าใจเรื่องพื้นฐานและการคิดอย่างเป็นระบบ ลองทำตามขั้นตอนทีละขั้นดูนะ!',
    keyConcepts: [question.topicName || 'การคิดวิเคราะห์', 'การตัดช้อยส์', 'ความเข้าใจพื้นฐาน'],
  };
};

function analyzeSocialQuestion(
  q: Question,
  content: string,
  topicName: string,
  fastTrick?: string,
  commonMistake?: string,
  firstStep?: string
): AITutorAssistance {
  const formulas: string[] = [];
  const keyConcepts: string[] = [];
  let hint = '';
  let kidExplanation = '';

  if (fastTrick) formulas.push(`⚡ ${fastTrick}`);

  // 1. ภูมิศาสตร์ & เครื่องมือทางภูมิศาสตร์ (Geography)
  const isGeo =
    content.includes('ละติจูด') ||
    content.includes('ลองจิจูด') ||
    content.includes('ศูนย์สูตร') ||
    content.includes('เส้นสมมุติ') ||
    content.includes('แผนที่') ||
    content.includes('มาตราส่วน') ||
    content.includes('พิกัด') ||
    content.includes('เมริเดียน') ||
    content.includes('เส้นวัน') ||
    content.includes('ทวีป') ||
    content.includes('แม่น้ำ') ||
    content.includes('ภูเขา') ||
    content.includes('ลมมรสุม') ||
    content.includes('เวลาสากล') ||
    content.includes('gmt') ||
    content.includes('utc') ||
    content.includes('เขตเวลา') ||
    content.includes('แผ่นดินไหว') ||
    content.includes('สึนามิ') ||
    content.includes('โอโซน') ||
    content.includes('ภูมิประเทศ') ||
    content.includes('ภาคเหนือ') ||
    content.includes('ภาคใต้') ||
    content.includes('ภาคอีสาน') ||
    content.includes('ภาคกลาง') ||
    content.includes('ป่าไม้') ||
    content.includes('ดิน') ||
    content.includes('ทรัพยากร');

  // 2. เศรษฐศาสตร์ & กลไกราคา (Economics)
  const isEcon =
    content.includes('อุปสงค์') ||
    content.includes('อุปทาน') ||
    content.includes('กลไกราคา') ||
    content.includes('ผู้ผลิต') ||
    content.includes('ผู้บริโภค') ||
    content.includes('สหกรณ์') ||
    content.includes('เงินเฟ้อ') ||
    content.includes('เงินฝืด') ||
    content.includes('ภาษี') ||
    content.includes('ธนาคาร') ||
    content.includes('ดอกเบี้ย') ||
    content.includes('ปัจจัยการผลิต') ||
    content.includes('เศรษฐกิจพอเพียง') ||
    content.includes('ดุลการค้า') ||
    content.includes('gdp') ||
    content.includes('การออม') ||
    content.includes('ค่าครองชีพ');

  // 3. ประวัติศาสตร์ (History)
  const isHistory =
    content.includes('สุโขทัย') ||
    content.includes('อยุธยา') ||
    content.includes('ธนบุรี') ||
    content.includes('รัตนโกสินทร์') ||
    content.includes('ศิลาจารึก') ||
    content.includes('ยุคหิน') ||
    content.includes('ยุคโลหะ') ||
    content.includes('สมเด็จพระ') ||
    content.includes('พระบาทสมเด็จ') ||
    content.includes('พ่อขุน') ||
    content.includes('ร.1') ||
    content.includes('ร.2') ||
    content.includes('ร.3') ||
    content.includes('ร.4') ||
    content.includes('ร.5') ||
    content.includes('เลิกทาส') ||
    content.includes('สนธิสัญญา') ||
    content.includes('เบาว์ริง') ||
    content.includes('พงศาวดาร') ||
    content.includes('หลักฐานชั้นต้น') ||
    content.includes('หลักฐานชั้นรอง') ||
    content.includes('ยุคก่อนประวัติศาสตร์') ||
    content.includes('โบราณคดี') ||
    content.includes('บ้านเชียง') ||
    content.includes('ประวัติศาสตร์');

  // 4. ศาสนาและศีลธรรม (Religion & Culture)
  const isReligion =
    content.includes('ศาสนา') ||
    content.includes('พุทธ') ||
    content.includes('อิสลาม') ||
    content.includes('คริสต์') ||
    content.includes('พราหมณ์') ||
    content.includes('ฮินดู') ||
    content.includes('อริยสัจ') ||
    content.includes('ขันธ์') ||
    content.includes('ไตรสิกขา') ||
    content.includes('เบญจศีล') ||
    content.includes('เบญจธรรม') ||
    content.includes('มาฆบูชา') ||
    content.includes('วิสาขบูชา') ||
    content.includes('อาสาฬหบูชา') ||
    content.includes('อัฏฐมีบูชา') ||
    content.includes('วันเข้าพรรษา') ||
    content.includes('วันออกพรรษา') ||
    content.includes('กฐิน') ||
    content.includes('ประเพณี') ||
    content.includes('มารยาท') ||
    content.includes('วันสำคัญ') ||
    content.includes('พระสงฆ์') ||
    content.includes('พระพุทธเจ้า') ||
    content.includes('ตรัสรู้') ||
    content.includes('ปรินิพพาน') ||
    content.includes('ปฐมเทศนา') ||
    content.includes('ศีล') ||
    content.includes('โอวาทปาติโมกข์');

  // 5. หน้าที่พลเมือง & กฎหมาย (Civics & Politics)
  const isCivics =
    content.includes('รัฐธรรมนูญ') ||
    content.includes('กฎหมาย') ||
    content.includes('ประชาธิปไตย') ||
    content.includes('อำนาจอธิปไตย') ||
    content.includes('นิติบัญญัติ') ||
    content.includes('บริหาร') ||
    content.includes('ตุลาการ') ||
    content.includes('สิทธิ') ||
    content.includes('เสรีภาพ') ||
    content.includes('หน้าที่') ||
    content.includes('อบต') ||
    content.includes('อบจ') ||
    content.includes('เทศบาล') ||
    content.includes('ผู้ว่าราชการ') ||
    content.includes('นายอำเภอ') ||
    content.includes('สภาผู้แทนราษฎร') ||
    content.includes('วุฒิสภา') ||
    content.includes('ศาล') ||
    content.includes('บัตรประชาชน') ||
    content.includes('การเลือกตั้ง') ||
    content.includes('คณะรัฐมนตรี') ||
    content.includes('สิทธิเด็ก') ||
    content.includes('พลเมืองดี');

  if (isGeo) {
    keyConcepts.push('ภูมิศาสตร์และแผนที่', 'เครื่องมือทางภูมิศาสตร์', 'พิกัดโลก');
    formulas.push('💡 ท่องจำพิกัด: "ละนอนลองตั้ง" (ละติจูด = แนวนอนบอกเหนือ-ใต้/อากาศ, ลองจิจูด = แนวตั้งบอกเวลา)');
    formulas.push('🗺️ มาตราส่วน: ระยะจริง = ระยะในแผนที่ × ตัวเลขมาตราส่วน (เช่น 1:50,000 คือ 1 ซม. = 500 ม. หรือ 0.5 กม.)');
    formulas.push('⏰ เวลาสากล: ลองจิจูดต่างกัน 15° = เวลาต่างกัน 1 ชั่วโมง (ทิศตะวันออกเวลาเร็วกว่า)');
    hint = 'สังเกตลักษณะของเส้น: เส้นสมมุติในแนวนอนที่ขนานกับเส้นศูนย์สูตรคือ "เส้นละติจูด (Latitude)" บอกพิกัดเหนือ-ใต้และเขตภูมิอากาศ ส่วนเส้นแนวตั้งคือ "เส้นลองจิจูด (Longitude)" เชื่อมขั้วโลกเพื่อบอกเวลาครับ!';
    kidExplanation = 'จำง่าย ๆ: ละติจูดเหมือน "รุ้งนอนราบ" (รุ้งกินน้ำนอนแผ่) คาดเอวโลกไว้บอกร้อนหนาว ส่วนลองจิจูดเหมือน "แวงตั้งตรง" (ก้านร่มตั้งตรง) เชื่อมหัวท้ายโลกไว้ดูเวลาว่ากี่โมงแล้ว!';
  } else if (isEcon) {
    keyConcepts.push('เศรษฐศาสตร์', 'กลไกราคาและการเงิน', 'ปัจจัยการผลิต');
    formulas.push('📈 กฎอุปสงค์ (Demand - ผู้ซื้อ): ราคาแพง ➔ ซื้อลดลง / ราคาถูก ➔ ซื้อเพิ่มขึ้น (แปรผกผัน)');
    formulas.push('📉 กฎอุปทาน (Supply - ผู้ขาย): ราคาแพง ➔ ผลิต/ขายเพิ่มขึ้น / ราคาถูก ➔ ผลิต/ขายลดลง (แปรผันตรง)');
    formulas.push('🌾 ปัจจัยการผลิต 4 อย่าง: ที่ดิน (ค่าเช่า), แรงงาน (ค่าจ้าง), ทุน (ดอกเบี้ย), ผู้ประกอบการ (กำไร)');
    hint = 'สังเกตบทบาทในโจทย์: ถ้าเป็น "ผู้ซื้อ/ผู้บริโภค" จะคิดแบบกฎอุปสงค์ (ชอบของราคาถูก) แต่ถ้าเป็น "ผู้ผลิต/ผู้ขาย" จะคิดแบบกฎอุปทาน (ชอบของราคาแพงเพื่อกำไร) ครับ!';
    kidExplanation = 'นึกถึงเวลาเราไปซื้อของ! ถ้าขนมลดราคา เราก็อยากซื้อกินเยอะ ๆ (อุปสงค์) แต่ถ้าเราเป็นพ่อค้าขายขนม เราก็อยากเอามาขายตอนขนมราคาแพง ๆ จะได้กำไรเยอะ ๆ (อุปทาน)';
  } else if (isHistory) {
    keyConcepts.push('ประวัติศาสตร์ไทย', 'ยุคสมัยและเหตุการณ์สำคัญ', 'หลักฐานทางประวัติศาสตร์');
    formulas.push('🏛️ ลำดับยุคสมัยไทย: สุโขทัย ➔ อยุธยา (417 ปี) ➔ ธนบุรี (15 ปี) ➔ รัตนโกสินทร์');
    formulas.push('📜 หลักฐานประวัติศาสตร์: ชั้นต้น (ร่วมสมัย เช่น ศิลาจารึก จดหมายเหตุ) > ชั้นรอง (เขียนขึ้นภายหลัง เช่น ตำรา บทความวิจัย)');
    formulas.push('👑 พระราชกรณียกิจสำคัญ: ร.5 เลิกทาส-ปฏิรูปการปกครอง, ร.1 สถาปนากรุงเทพฯ, พ่อขุนรามคำแหง ประดิษฐ์อักษรไทย');
    hint = 'สังเกตชื่อบุคคลสำคัญ พระมหากษัตริย์ หรือโบราณวัตถุในโจทย์ แล้วเทียบเคียงกับช่วงเวลาของแต่ละยุคสมัยในประวัติศาสตร์ครับ';
    kidExplanation = 'ประวัติศาสตร์เหมือนการสืบคดีของนักสืบ! หลักฐานชั้นต้น (ของจริงในที่เกิดเหตุ เช่น ภาพถ่าย ศิลาจารึก) จะน่าเชื่อถือที่สุด และให้จำยุคสมัยเรียงตามลำดับ สุโขทัย-อยุธยา-ธนบุรี-รัตนโกสินทร์';
  } else if (isReligion) {
    keyConcepts.push('ศาสนาและศีลธรรม', 'วันสำคัญทางศาสนา', 'หลักธรรมคำสอน');
    formulas.push('☸️ วันสำคัญทางพุทธศาสนา: มาฆะ (โอวาทปาติโมกข์ - เพ็ญเดือน 3) / วิสาขะ (ประสูติ ตรัสรู้ ปรินิพพาน - เพ็ญเดือน 6) / อาสาฬหะ (ปฐมเทศนา พระสงฆ์องค์แรก - เพ็ญเดือน 8)');
    formulas.push('☸️ อริยสัจ 4: ทุกข์ (ปัญหาที่เกิด) ➔ สมุทัย (สาเหตุ) ➔ นิโรธ (การดับทุกข์/เป้าหมาย) ➔ มรรค (แนวทางปฏิบัติ)');
    formulas.push('🕊️ ศาสนาสากล: อิสลาม (อัลกุรอาน/นบีมุฮัมมัด), คริสต์ (คัมภีร์ไบเบิล/พระเยซู), ฮินดู (ตรีมูรติ: พระพรหม พระวิษณุ พระศิวะ)');
    hint = 'วิเคราะห์ความหมายของหลักธรรมหรือวันสำคัญ: สังเกตคีย์เวิร์ดว่าเป็นเรื่องเกี่ยวกับ "การดับทุกข์ (อริยสัจ)", "ความสามัคคี (สาราณียธรรม)" หรือ "เหตุการณ์สำคัญในวันเพ็ญเดือนต่าง ๆ" ครับ';
    kidExplanation = 'หลักธรรมอริยสัจ 4 เหมือนคุณหมอรักษาไข้! "ทุกข์" คือเป็นไข้ตัวร้อน, "สมุทัย" คือหาสาเหตุว่าไปตากฝนมา, "นิโรธ" คือหายป่วยแข็งแรง, และ "มรรค" คือกินยาและนอนพักผ่อนตามหมอสั่ง';
  } else if (isCivics) {
    keyConcepts.push('หน้าที่พลเมืองและกฎหมาย', 'การปกครองระบอบประชาธิปไตย', 'สิทธิและเสรีภาพ');
    formulas.push('⚖️ อำนาจอธิปไตย 3 ฝ่าย: นิติบัญญัติ (รัฐสภา-ออกกฎหมาย) / บริหาร (ครม.-บริหารประเทศ) / ตุลาการ (ศาล-ตัดสินคดี)');
    formulas.push('🏛️ การปกครองส่วนท้องถิ่น: อบจ. (ระดับจังหวัด), เทศบาล (ระดับเมือง), อบต. (ระดับตำบล), องค์กรปกครองรูปแบบพิเศษ (กทม. และ เมืองพัทยา)');
    formulas.push('📜 ลำดับชั้นกฎหมาย: รัฐธรรมนูญ (สูงสุด) > พ.ร.บ. / พ.ร.ก. > พ.ร.ฎ. > กฎกระทรวง > ข้อบัญญัติท้องถิ่น');
    hint = 'วิเคราะห์ตามหลักการปกครองและกฎหมาย: รัฐธรรมนูญเป็นกฎหมายแม่บทสูงสุด กฎหมายอื่นจะขัดหรือแย้งไม่ได้ และอำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายเพื่อคานอำนาจกันครับ';
    kidExplanation = 'หน้าที่พลเมืองคือการเล่นตามกติกาสังคม! รัฐธรรมนูญคือกฎกติกาแม่บทสูงสุด ทุกคนต้องมีบัตรประชาชนตั้งแต่อายุ 7 ขวบ และมีสิทธิเสรีภาพที่ไม่ไปละเมิดสิทธิของคนอื่น';
  } else {
    keyConcepts.push(q.topicName || 'สังคมศึกษา ม.1', 'การคิดวิเคราะห์');
    formulas.push('🏛️ กฎหมายรัฐธรรมนูญ = กฎหมายสูงสุดของประเทศ กฎหมายอื่นจะขัดหรือแย้งไม่ได้');
    formulas.push('📌 เทคนิคตัดช้อยส์: ตัดตัวเลือกที่มีข้อความสุดโต่งหรือขัดแย้งกับหลักเหตุผลออกก่อน');
    hint = firstStep
      ? `💡 แนวคิดหลัก: ${firstStep}`
      : 'อ่านคำถามอย่างละเอียด สังเกตคีย์เวิร์ดสำคัญ และตัดตัวเลือกที่ขัดแย้งกับความเป็นจริงออกก่อนครับ';
    kidExplanation = 'สังคมศึกษาคือเรื่องรอบตัวเรา! ลองนึกถึงชีวิตประจำวัน กฎระเบียบโรงเรียน และหน้าที่ของพลเมืองดีในการอยู่ร่วมกันอย่างมีความสุข';
  }

  if (commonMistake) formulas.push(`⚠️ จุดที่มักพลาด: ${commonMistake}`);
  if (q.solution?.summary) kidExplanation += `\n\n📌 สรุปสาระสำคัญ: ${q.solution.summary}`;

  return {
    hint: hint || (firstStep ? `💡 แนวคิด: ${firstStep}` : 'วิเคราะห์ข้อมูลทางสังคม ประวัติศาสตร์ และหน้าที่พลเมืองครับ'),
    formulaAndTricks: formulas,
    kidExplanation,
    keyConcepts,
  };
}

function analyzeMathQuestion(
  q: Question,
  content: string,
  topicName: string,
  fastTrick?: string,
  commonMistake?: string,
  firstStep?: string
): AITutorAssistance {
  const formulas: string[] = [];
  const keyConcepts: string[] = [q.topicName || 'คณิตศาสตร์ ม.1'];
  let hint = '';
  let kidExplanation = '';

  if (fastTrick) {
    formulas.push(`⚡ ${fastTrick}`);
  }

  if (content.includes('อัตราเร็ว') || content.includes('ระยะทาง') || content.includes('กิโลเมตร') || content.includes('ความเร็ว')) {
    keyConcepts.push('อัตราเร็วและเวลา', 'โจทย์ปัญหา');
    formulas.push('🚗 สูตรหลัก: $ระยะทาง (s) = อัตราเร็ว (v) \\times เวลา (t)$');
    formulas.push('⏱️ แปลงเวลา: นาทีเป็นชั่วโมงให้นำไป $\\div 60$ (เช่น 12 นาที $= \\frac{12}{60}$ ชม.)');
    hint = 'หาอัตราเร็ว (กม./ชม.) ของแต่ละคนก่อน โดยนำระยะทางหารด้วยเวลาที่แปลงเป็นชั่วโมงแล้ว จากนั้นนำผลลัพธ์มาเปรียบเทียบกันครับ!';
    kidExplanation = 'อัตราเร็วคือการดูว่า "ใน 1 ชั่วโมงวิ่งได้ไกลแค่ไหน"! ถ้าโจทย์ให้เวลาเป็นนาที ต้องแปลงเป็นเศษส่วนของชั่วโมงก่อนนะ เช่น 12 นาทีคือ 12/60 ชั่วโมง';
  } else if (content.includes('เลขโดด') || content.includes('สลับหลัก') || content.includes('สร้างจำนวน') || content.includes('หลักร้อย') || content.includes('หลักสิบ')) {
    keyConcepts.push('การสร้างจำนวน', 'ค่าประจำหลัก');
    formulas.push('🔢 ค่าประจำหลัก: จำนวน $\\overline{abc} = 100a + 10b + c$');
    formulas.push('⚡ สูตรผลรวมเลข 3 หลักไม่ซ้ำ: $(\\text{ผลรวมเลขโดด}) \\times (n-1)! \\times 111$');
    hint = 'สังเกตว่าเลขโดดแต่ละตัวจะสลับมาปรากฏในหลักร้อย หลักสิบ และหลักหน่วยเท่า ๆ กัน ลองหาผลรวมของแต่ละหลักแล้วคูณด้วย 111 ดูครับ!';
    kidExplanation = 'เหมือนแจกการ์ดให้ผลัดกันยืนหัวแถว! เลขทุกตัวจะได้ผลัดกันยืนหลักร้อย หลักสิบ หลักหน่วย รอบละเท่า ๆ กัน รวมกันแล้วคูณ 111 ได้คำตอบเป๊ะ';
  } else if (content.includes('พื้นที่') || content.includes('สี่เหลี่ยม') || content.includes('สามเหลี่ยม') || content.includes('วงกลม') || content.includes('ปริมาตร') || content.includes('ทรงกระบอก')) {
    keyConcepts.push('เรขาคณิต', 'การคำนวณพื้นที่');
    formulas.push('📐 พื้นที่สามเหลี่ยม = $\\frac{1}{2} \\times ฐาน \\times สูง$');
    formulas.push('📐 พื้นที่วงกลม = $\\pi r^2$ (เส้นรอบวง = $2\\pi r$)');
    formulas.push('📐 ปริมาตรทรงกระบอก = $\\pi r^2 h$ / ทรงสี่เหลี่ยมมุมฉาก = $กว้าง \\times ยาว \\times สูง$');
    hint = 'ลองวาดรูปตามที่โจทย์บอก แบ่งรูปที่ซับซ้อนให้กลายเป็นรูปเรขาคณิตพื้นฐาน (สี่เหลี่ยม + สามเหลี่ยม) แล้วค่อยรวมพื้นที่ครับ!';
    kidExplanation = 'มองรูปเรขาคณิตเหมือนชิ้นส่วนตัวต่อจิ๊กซอว์! ถ้ารูปทรงแปลกตา ให้ลองลากเส้นประแบ่งเป็นชิ้นย่อย ๆ ที่เราหาพื้นที่ง่าย ๆ แล้วนำมาบวกกันนะ';
  } else if (content.includes('ห.ร.ม.') || content.includes('ค.ร.น.') || content.includes('หารลงตัว') || content.includes('จำนวนเฉพาะ')) {
    keyConcepts.push('จำนวนนับ', 'ห.ร.ม. และ ค.ร.น.');
    formulas.push('⚡ ความสัมพันธ์: $ห.ร.ม. \\times ค.ร.น. = ผลคูณของเลขทั้งสองจำนวน (A \\times B)$');
    formulas.push('🔍 ห.ร.ม. = แบ่งเท่า ๆ กันให้ได้มากที่สุด / ค.ร.น. = วิ่งมาพบกันครั้งแรก / พร้อมกันอีกครั้ง');
    hint = 'สังเกตคำในโจทย์: ถ้าเจอคำว่า "แบ่งเท่ากันมากที่สุด" คือ ห.ร.ม. แต่ถ้าเจอ "พร้อมกันครั้งถัดไป/น้อยที่สุด" ให้คิดถึง ค.ร.น. ทันทีครับ!';
    kidExplanation = 'จำง่าย ๆ: ห.ร.ม. คือ "ตัวหารร่วมที่มากสุด" ไว้ตัดแบ่งของเป็นชิ้นเล็กเท่ากัน ส่วน ค.ร.น. คือ "เวลานัดเจอกัน" ของเลขสองตัวที่จะวนมาจ๊ะเอ๋พร้อมกัน!';
  } else if (content.includes('สมการ') || content.includes('เท่าของ') || content.includes('อายุ') || content.includes('ตัวแปร') || content.includes('x')) {
    keyConcepts.push('พีชคณิต', 'การแก้สมการ');
    formulas.push('⚡ ขั้นตอน: กำหนดสิ่งที่โจทย์ถามเป็น $x$ ➔ เขียนประโยคสัญลักษณ์ ➔ ย้ายข้างเครื่องหมายตรงข้าม');
    formulas.push('💡 คำเชื่อม: "ของ" = คูณ $(\\times)$, "มากกว่า/น้อยกว่า" = ผลต่าง $(-)$, "เป็น/อยู่/คือ" = $(=)$');
    hint = 'กำหนดให้สิ่งที่เราไม่รู้ค่าเป็น $x$ แล้วค่อย ๆ แปลงข้อความภาษาไทยในโจทย์ให้กลายเป็นประโยคสัญลักษณ์ทางคณิตศาสตร์ครับ';
    kidExplanation = 'สมการเหมือนตราชั่ง 2 ข้างที่ต้องหนักเท่ากันเสมอ! ถ้าย้ายตัวเลขข้ามเครื่องหมาย = ให้เปลี่ยนร่างมันเป็นตรงข้าม เช่น + ย้ายไปเป็น -, คูณ ย้ายไปเป็น หาร';
  } else if (content.includes('ร้อยละ') || content.includes('เปอร์เซ็นต์') || content.includes('กำไร') || content.includes('ขาดทุน') || content.includes('ลดราคา')) {
    keyConcepts.push('ร้อยละและเปอร์เซ็นต์', 'กำไร-ขาดทุน');
    formulas.push('💰 กำไร $x\\% = \\text{ราคาทุน} \\times (1 + \\frac{x}{100})$');
    formulas.push('🏷️ ลดราคา $y\\% = \\text{ราคาป้าย} \\times (1 - \\frac{y}{100})$');
    hint = 'ระวังให้ดี! กำไรหรือขาดทุนคิดเทียบกับ "ราคาทุนเสมอ" ส่วนการลดราคาจะคิดเทียบกับ "ราคาป้าย/ราคาตั้งขาย" ครับ';
    kidExplanation = 'คิดง่าย ๆ เปอร์เซ็นต์คือเทียบกับ 100 เช่น ลดราคา 20% แปลว่าถ้าของราคา 100 บาท เราจ่ายจริงแค่ 80 บาท (หรือคูณด้วย 0.80 ได้เลย ไวมาก!)';
  } else if (content.includes('อนุกรม') || content.includes('แบบรูป') || content.includes('ลำดับ')) {
    keyConcepts.push('แบบรูปและความสัมพันธ์', 'อนุกรม');
    formulas.push('🔢 ผลบวก $1 + 2 + 3 + ... + n = \\frac{n(n + 1)}{2}$');
    formulas.push('🔢 อนุกรมเศษส่วน Telescoping: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$');
    hint = 'สังเกตผลต่างระหว่างตัวเลขที่อยู่ติดกัน ว่าเพิ่มขึ้นทีละเท่าไหร่ หรือคูณด้วยอะไรเป็นจังหวะที่แน่นอนครับ';
    kidExplanation = 'ตัวเลขในแบบรูปเหมือนดนตรีที่มีจังหวะ! ลองดูว่ามันก้าวกระโดดทีละ +2, +4, +6 หรือเปล่า ถ้าจับจังหวะได้ จะรู้ตัวถัดไปทันที';
  } else {
    keyConcepts.push('การคำนวณและวิเคราะห์', 'คณิตศาสตร์ ม.1');
    formulas.push('⚡ ลำดับการคำนวณ (PEMDAS): วงเล็บ ➔ ยกกำลัง ➔ คูณ/หาร ➔ บวก/ลบ');
    hint = firstStep
      ? `💡 จุดเริ่มต้นความคิด: ${firstStep}`
      : 'เช็คหน่วยและลำดับการคำนวณให้ดี ทำในวงเล็บก่อน แล้วค่อยทำคูณหรือหาร ก่อนบวกหรือลบครับ';
    kidExplanation = 'อย่าเพิ่งรีบร้อนคำนวณก้อนใหญ่! ลองแยกคิดทีละขั้น และตรวจทานหน่วยที่โจทย์ถามว่าเป็นบาท กรัม หรือกิโลกรัมด้วยนะ';
  }

  if (commonMistake) {
    formulas.push(`⚠️ จุดที่มักพลาด: ${commonMistake}`);
  }

  if (q.solution?.summary) {
    kidExplanation += `\n\n📌 คีย์เวิร์ดแนวคิด: ${q.solution.summary}`;
  }

  return {
    hint: hint || (firstStep ? `💡 คำใบ้สเต็ปแรก: ${firstStep}` : 'พิจารณาเงื่อนไขที่โจทย์กำหนดและแปลงเป็นประโยคสัญลักษณ์เพื่อคำนวณทีละขั้นครับ'),
    formulaAndTricks: formulas,
    kidExplanation,
    keyConcepts,
  };
}

function analyzeScienceQuestion(
  q: Question,
  content: string,
  topicName: string,
  fastTrick?: string,
  commonMistake?: string,
  firstStep?: string
): AITutorAssistance {
  const formulas: string[] = [];
  const keyConcepts: string[] = [q.topicName || 'วิทยาศาสตร์ ม.1'];
  let hint = '';
  let kidExplanation = '';

  if (fastTrick) formulas.push(`⚡ ${fastTrick}`);

  if (content.includes('เซลล์') || content.includes('พืช') || content.includes('สังเคราะห์แสง') || content.includes('คลอโรพลาสต์')) {
    keyConcepts.push('ชีววิทยา', 'เซลล์และพืช');
    formulas.push('🌿 สังเคราะห์แสง: $น้ำ + แก๊สคาร์บอนไดออกไซด์ \\xrightarrow{แสง, คลอโรฟิลล์} น้ำตาลกลูโคส + แก๊สออกซิเจน$');
    formulas.push('🔬 เซลล์พืชมีผนังเซลล์และคลอโรพลาสต์ แต่เซลล์สัตว์ไม่มี');
    hint = 'นึกถึงความแตกต่างระหว่างพืชกับสัตว์: พืชสร้างอาหารเองได้ด้วยแสงแดดและมีผนังเซลล์ที่แข็งแรงครับ!';
    kidExplanation = 'ใบไม้เปรียบเหมือนห้องครัวของต้นไม้! คลอโรฟิลล์สีเขียวคือกระทะที่รับแสงแดดมาปรุงน้ำกับอากาศให้กลายเป็นน้ำตาลแสนอร่อย';
  } else if (content.includes('ไฟฟ้า') || content.includes('วงจร') || content.includes('อนุกรม') || content.includes('ขนาน')) {
    keyConcepts.push('ฟิสิกส์', 'วงจรไฟฟ้า');
    formulas.push('💡 วงจรอนุกรม: หลอดดับ 1 ดวง ดับทั้งสาย (ทางเดินกระแสทางเดียว)');
    formulas.push('💡 วงจรขนาน: หลอดดับ 1 ดวง หลอดอื่นยังสว่างปกติ (แยกทางเดินกระแส)');
    hint = 'ลองไล่นิ้วตามสายไฟจากขั้วบวกไปขั้วลบ ถ้ามีทางแยกแสดงว่าเป็นวงจรขนาน แต่ถ้าต่อเป็นเส้นเดียวคืออนุกรมครับ!';
    kidExplanation = 'สายไฟเหมือนถนน! ถ้ารถวิ่งบนถนนเลนเดียวแล้วมีสะพานขาด (อนุกรม) รถจะไปไม่ได้ทั้งหมด แต่ถ้ามีถนนคู่ขนาน (ขนาน) คันอื่นก็อ้อมไปได้สบาย';
  } else if (content.includes('สาร') || content.includes('กรด') || content.includes('เบส') || content.includes('ph') || content.includes('สารละลาย')) {
    keyConcepts.push('เคมี', 'สารและสมบัติของสาร');
    formulas.push('🧪 กรด: pH < 7, รสเปรี้ยว, เปลี่ยนกระดาษลิตมัส น้ำเงิน ➔ แดง');
    formulas.push('🧪 เบส: pH > 7, รสฝาด/ลื่นมือ, เปลี่ยนกระดาษลิตมัส แดง ➔ น้ำเงิน');
    hint = 'จำคู่สีลิตมัส: "แดง = กรด (แรง)", "น้ำเงิน = เบส (เย็น)" และสารละลายที่เป็นกลาง pH = 7 ครับ';
    kidExplanation = 'นึกถึงน้ำมะนาว (กรด) เปรี้ยวจี๊ด ลิตมัสจะกลายเป็นสีแดงเตือนความเปรี้ยว! ส่วนน้ำสบู่ (เบส) จะลื่น ๆ ลิตมัสจะเป็นสีน้ำเงิน';
  } else if (content.includes('แรง') || content.includes('การเคลื่อนที่') || content.includes('คาน') || content.includes('รอก') || content.includes('ความหนาแน่น')) {
    keyConcepts.push('ฟิสิกส์', 'แรงและพลังงาน');
    formulas.push('⚖️ ความหนาแน่น: $D = \\frac{m}{V} (มวล \\div ปริมาตร)$ (ลอยน้ำเมื่อ $D < 1$ g/cm³)');
    formulas.push('🏗️ คานสมดุล: โมเมนต์ทวน = โมเมนต์ตาม $(F_1 \\times L_1 = F_2 \\times L_2)$');
    hint = 'วิเคราะห์ทิศทางของแรงหรือจุดหมุนของคาน: วัตถุจะลอยน้ำได้ก็ต่อเมื่อมีความหนาแน่นน้อยกว่าน้ำครับ!';
    kidExplanation = 'ความหนาแน่นเหมือนคนเบียดกันในลิฟต์! ถ้าเนื้อแน่นจัด ๆ ก็จะจมลงก้นน้ำ แต่ถ้าเนื้อโปร่ง ๆ เบากว่าน้ำ ก็จะลอยตัวตุ๊บป่อง';
  } else {
    keyConcepts.push('กระบวนการทางวิทยาศาสตร์', 'การทดลอง');
    formulas.push('🔬 ตัวแปรต้น = สิ่งที่เราจัดให้ต่างกันเพื่อทดลอง');
    formulas.push('🔬 ตัวแปรตาม = ผลลัพธ์ที่เกิดขึ้นจากการทดลอง');
    formulas.push('🔬 ตัวแปรควบคุม = สิ่งที่ต้องคุมให้เหมือนกันทุกชุดทดลอง');
    hint = firstStep
      ? `💡 สังเกตจากการทดลอง: ${firstStep}`
      : 'แยกตัวแปรให้ชัดเจน: อะไรคือ "สิ่งที่เราเปลี่ยน (ตัวแปรต้น)" และอะไรคือ "สิ่งที่เราต้องการวัดผล (ตัวแปรตาม)" ครับ!';
    kidExplanation = 'การทดลองเหมือนแข่งวิ่ง! ถ้าอยากรู้ว่ารองเท้าคู่ไหนวิ่งไวกว่า (ตัวแปรต้น) คนวิ่งและสนามวิ่งต้องเหมือนกันเป๊ะ (ตัวแปรควบคุม) ถึงจะยุติธรรม';
  }

  if (commonMistake) formulas.push(`⚠️ จุดที่มักพลาด: ${commonMistake}`);
  if (q.solution?.summary) kidExplanation += `\n\n📌 คีย์เวิร์ดเฉลย: ${q.solution.summary}`;

  return {
    hint: hint || (firstStep ? `💡 ข้อสังเกต: ${firstStep}` : 'วิเคราะห์ตามหลักการและผลการทดลองทางวิทยาศาสตร์ครับ'),
    formulaAndTricks: formulas,
    kidExplanation,
    keyConcepts,
  };
}

function analyzeEnglishQuestion(
  q: Question,
  content: string,
  topicName: string,
  fastTrick?: string,
  commonMistake?: string,
  firstStep?: string
): AITutorAssistance {
  const formulas: string[] = [];
  const keyConcepts: string[] = [q.topicName || 'English Grammar & Reading'];
  let hint = '';
  let kidExplanation = '';

  if (fastTrick) formulas.push(`⚡ ${fastTrick}`);

  if (content.includes('tense') || content.includes('yesterday') || content.includes('tomorrow') || content.includes('since') || content.includes('for') || content.includes('always')) {
    keyConcepts.push('Tenses & Time Expressions', 'Grammar');
    formulas.push('⏰ Past Simple (V.2): yesterday, last week, ago, in 2020');
    formulas.push('⏰ Present Simple (V.1/V.s): always, usually, every day, facts');
    formulas.push('⏰ Future Simple (will + V.inf): tomorrow, next year, soon');
    hint = 'Look for the "Time Marker" in the sentence first! Words like yesterday, always, or tomorrow will immediately tell you the correct verb tense.';
    kidExplanation = 'ตามล่าหาคำบอกเวลาก่อนเลย! ถ้าเจอ yesterday แปลว่าอดีตต้องใช้ Verb ช่อง 2 แต่ถ้าเจอ always แปลว่าทำเป็นประจำใช้ Verb ช่อง 1 นะครับ';
  } else if (content.includes('subject-verb') || content.includes('singular') || content.includes('plural') || content.includes('agreement')) {
    keyConcepts.push('Subject-Verb Agreement', 'Grammar');
    formulas.push('👤 ประธานเอกพจน์ (He/She/It/A boy) ➔ กริยาเติม s/es (is, does, has)');
    formulas.push('👥 ประธานพหูพจน์ (They/We/Boys) ➔ กริยาไม่เติม s (are, do, have)');
    hint = 'Find the REAL subject! Ignore prepositional phrases (like "of...", "with...") between the subject and the verb.';
    kidExplanation = 'ประธานกับกริยาต้องเป็นเพื่อนรักที่เข้าคู่กัน! ถ้าประธานคนเดียว (เอกพจน์) กริยาเหงาต้องเติม -s ไปเป็นเพื่อน แต่ถ้าประธานหลายคน กริยาไม่ต้องเติม -s แล้ว';
  } else {
    keyConcepts.push('Context Clues & Vocabulary', 'Reading & Conversation');
    formulas.push('📖 Skimming: อ่านกวาดสายตาหาภาพรวมและ Main Idea');
    formulas.push('🔍 Scanning: ค้นหาคำเฉพาะ เช่น ชื่อคน, ตัวเลข, หรือสถานที่');
    hint = firstStep
      ? `💡 Clue from passage: ${firstStep}`
      : 'Read the question carefully to know what specific information you need before searching the passage or dialogue.';
    kidExplanation = 'บทสนทนาภาษาอังกฤษให้สังเกตความสุภาพและสถานการณ์ เช่น ถ้าเพื่อนพูดทักทายหรือขอบคุณ เราต้องตอบรับอย่างไรให้ถูกมารยาทสากล';
  }

  if (commonMistake) formulas.push(`⚠️ Common Trap: ${commonMistake}`);
  if (q.solution?.summary) kidExplanation += `\n\n📌 Summary: ${q.solution.summary}`;

  return {
    hint: hint || (firstStep ? `💡 Clue: ${firstStep}` : 'Find keywords in the question and look for synonyms in the choices!'),
    formulaAndTricks: formulas,
    kidExplanation,
    keyConcepts,
  };
}

function analyzeThaiQuestion(
  q: Question,
  content: string,
  topicName: string,
  fastTrick?: string,
  commonMistake?: string,
  firstStep?: string
): AITutorAssistance {
  const formulas: string[] = [];
  const keyConcepts: string[] = [q.topicName || 'ภาษาไทย ม.1'];
  let hint = '';
  let kidExplanation = '';

  if (fastTrick) formulas.push(`⚡ ${fastTrick}`);

  if (content.includes('สมาส') || content.includes('สนธิ')) {
    keyConcepts.push('คำสมาส-สนธิ', 'หลักภาษาไทย');
    formulas.push('📜 สมาสชน สนธิเชื่อม (ต้องมาจาก บาลี-สันสกฤต ทั้งคู่)');
    formulas.push('📜 คำสมาส: นำคำมาต่อกัน แปลจากหลังมาหน้า (เช่น ภูมิศาสตร์ = ศาสตร์แห่งแผ่นดิน)');
    formulas.push('📜 คำสนธิ: มีการกลืนเสียง สระ/พยัญชนะ/นฤคหิต (เช่น สุขาภิบาล = สุข + อภิบาล)');
    hint = 'ท่องจำให้ขึ้นใจ: "สมาสชน สนธิเชื่อม" คำสมาสจะแค่วางชนกัน ส่วนสนธิจะกลืนเสียงสระสมานเนื้อเดียวกันครับ';
    kidExplanation = 'คำสมาสเหมือนเอารถไฟสองขบวนมาเกี่ยวหัวต่อท้ายกันเฉย ๆ ส่วนคำสนธิเหมือนเอาดินน้ำมันสองก้อนมานวดหลอมรวมเป็นเนื้อเดียวกันเลย!';
  } else if (content.includes('ราชาศัพท์') || content.includes('พระราช')) {
    keyConcepts.push('คำราชาศัพท์', 'ระดับภาษา');
    formulas.push('👑 ทรง + กริยาสามัญ = กริยาราชาศัพท์ (ห้ามใช้ "ทรง" นำหน้ากริยาราชาศัพท์แท้ เช่น ห้ามใช้ ทรงเสวย, ทรงโปรด)');
    formulas.push('👑 พระบรมราช (กษัตริย์) > พระราช (พระราชินี/เจ้าฟ้า) > พระ (พระองค์เจ้า)');
    hint = 'ระวังข้อสอบหลอกเรื่อง "ทรงซ้อน" กริยาราชาศัพท์แท้อยู่แล้ว เช่น เสด็จ, เสวย, กริ้ว, โปรด ห้ามใส่คำว่า "ทรง" นำหน้าเด็ดขาดครับ!';
    kidExplanation = 'คำราชาศัพท์เหมือนหมวกยศ! คำไหนที่มียศเป็นราชาศัพท์อยู่แล้ว (เช่น เสวย แปลว่า กิน) ไม่ต้องเอาหมวก "ทรง" ไปใส่ซ้ำอีกรอบนะ';
  } else {
    keyConcepts.push('การใช้ภาษาและการอ่านจับใจความ', 'ภาษาไทย ม.1');
    formulas.push('📝 ใจความสำคัญ = ประโยคหลักที่สรุปเนื้อหาทั้งหมด มักอยู่ต้นย่อหน้า ท้ายย่อหน้า หรือทั้งคู่');
    hint = firstStep
      ? `💡 สังเกตจากเนื้อหา: ${firstStep}`
      : 'ตัดพลความ (ส่วนขยาย ตัวอย่าง คำอธิบายเสริม) ออกไป จะเหลือใจความสำคัญที่แท้จริงของบทความครับ';
    kidExplanation = 'การหาใจความสำคัญเหมือนคั้นน้ำส้ม! เนื้อส้มกับเปลือก (ตัวอย่าง/คำอธิบายยาว ๆ) ให้กรองออก แล้วเก็บเฉพาะน้ำส้มแท้ ๆ ที่เป็นแก่นเรื่อง';
  }

  if (commonMistake) formulas.push(`⚠️ จุดที่มักพลาด: ${commonMistake}`);
  if (q.solution?.summary) kidExplanation += `\n\n📌 คีย์เวิร์ดเฉลย: ${q.solution.summary}`;

  return {
    hint: hint || (firstStep ? `💡 ข้อสังเกต: ${firstStep}` : 'วิเคราะห์หลักภาษาและใจความสำคัญของข้อสอบครับ'),
    formulaAndTricks: formulas,
    kidExplanation,
    keyConcepts,
  };
}
