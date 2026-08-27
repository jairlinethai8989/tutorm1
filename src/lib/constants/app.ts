export const APP_CONFIG = {
  name: 'Tutor M.1',
  title: 'เตรียมสอบเข้า ม.1 ห้องพิเศษ โรงเรียนชั้นนำ',
  titleFull: 'เตรียมสอบเข้า ม.1 ห้องพิเศษ โรงเรียนชั้นนำ — ระบบฝึกทำข้อสอบ & AI Practice',
  version: 'v2.18.0',
  versionLabel: 'Version 2.18.0 (Brand Identity, Mascot Footer, Capsule Profile & Topbar UI)',
  description:
    'ระบบเตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ โรงเรียนชั้นนำของไทย ครอบคลุม 5 วิชาหลัก ระบบจำลองสอบเสมือนจริง และ AI Practice สุ่มโจทย์ไม่จำกัด',
};

export interface ChangelogChange {
  type: 'fix' | 'feature' | 'verify' | 'system';
  title: string;
  description: string;
}

export interface ChangelogItem {
  version: string;
  date: string;
  title: string;
  badge: string;
  isLatest?: boolean;
  changes: ChangelogChange[];
}

export const APP_CHANGELOG: ChangelogItem[] = [
  {
    version: 'v2.18.0',
    date: '27 สิงหาคม 2026',
    title: 'เปิดตัว Brand Identity ไอคอนโปรแกรมทางการ, มาสคอตท้ายเว็บ & แคปซูลโปรไฟล์ผู้เรียน',
    badge: 'ล่าสุด (Latest)',
    isLatest: true,
    changes: [
      {
        type: 'feature',
        title: 'ไอคอนโปรแกรมทางการ & Favicon (Official App Icon & Favicon)',
        description:
          'ติดตั้งไอคอนทางการ M.1 สีน้ำเงินทองระดับพรีเมียมบน Navbar, Favicon และไอคอนเบราว์เซอร์ทุกขนาด',
      },
      {
        type: 'feature',
        title: 'มาสคอตการ์ตูน Tutor M.1 ประจำแถบท้ายเว็บ (Cartoon Mascot Footer Banner)',
        description:
          'เพิ่มภาพมาสคอตคู่หูนักเรียน ป.6 หมวกปริญญา พร้อมสโลแกน "ติวครบ จบมั่นใจ สอบติด ม.1" บริเวณ Footer',
      },
      {
        type: 'feature',
        title: 'ขยายปุ่มโปรไฟล์ผู้เรียนเป็นแบบแคปซูลการ์ด (Student Capsule Badge)',
        description:
          'แสดงรูป Avatar, ชื่อผู้เรียน, โรงเรียนเป้าหมาย และระดับชั้นอย่างสง่างามบน Topbar',
      },
      {
        type: 'feature',
        title: 'ขยายปุ่มคำแนะนำ & มีอะไรใหม่ (Expanded Advice & Updates Button)',
        description:
          'ปรับปุ่มกระดิ่งแจ้งเตือนให้เป็นปุ่มแคปซูลสวยเด่น พร้อมไฟกระพริบเมื่อมีการอัปเดตใหม่',
      },
      {
        type: 'feature',
        title: 'ปรับสัดส่วนเมนู Navbar ให้พอดีกับหน้าจออย่างลงตัว (Balanced Segmented Navigation)',
        description:
          'จัดวาง 7 เมนูหลักเต็มพื้นที่อย่างสมดุล ไม่เบียดเสียด และไม่เหลือช่องว่างโหวง',
      },
    ],
  },
  {
    version: 'v2.17.0',
    date: '27 สิงหาคม 2026',
    title: 'เปิดตัวระบบต้อนรับผู้เรียน, ลิ้นชัก Avatar 31 แบบ & ปรับ Navbar ขวาสุด',
    badge: 'เสถียร (Stable)',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'ระบบต้อนรับผู้เรียน & สมุดโปรไฟล์ประจำเครื่อง (Multi-Student Onboarding)',
        description:
          'หน้าต่างเด้งต้อนรับผู้เรียนใหม่ พร้อมบันทึกชื่อ, โรงเรียนเป้าหมาย, เลเวล และแยกระบบผู้เรียนในเครื่องเดียวกันได้อิสระ',
      },
      {
        type: 'feature',
        title: 'ลิ้นชักเลือก Avatar 31 แบบ (Expandable Avatar Drawer & Filter Tabs)',
        description:
          'คัดสรร 31 รูปนักเรียน & สัตว์เลี้ยงน่ารัก พร้อมแท็บคัดกรองหมวดหมู่ และลิ้นชักเปิด/ย่อ',
      },
      {
        type: 'feature',
        title: 'รองรับการพิมพ์ระบุชื่อโรงเรียนเป้าหมายเอง (Custom Target School Input)',
        description:
          'เลือก "โรงเรียนอื่น ๆ" เพื่อพิมพ์ชื่อโรงเรียนที่ต้องการสอบเข้าได้อิสระทุกแห่งทั่วประเทศ',
      },
      {
        type: 'feature',
        title: 'ระบบรีเซ็ตภารกิจประจำวันแยกตามโปรไฟล์ (Per-Student Gamification & Quest Reset)',
        description:
          'ผู้เรียนที่สร้างใหม่เริ่มต้นที่ 0 EXP และภารกิจสดใหม่ 0/3 ไม่ปะปนกับผู้เรียนอื่น',
      },
      {
        type: 'feature',
        title: 'ปรับปรุง Navbar UI ไอคอนผู้เรียนวงกลมขวาสุด & ไอคอนแจ้งเตือน Tooltip',
        description:
          'ย้ายปุ่มผู้เรียนไปขวาสุดเป็นรูปวงกลม และย่อปุ่มคำแนะนำเป็นไอคอนกระดิ่งพร้อม Hover Tooltip',
      },
    ],
  },
  {
    version: 'v2.16.0',
    date: '27 สิงหาคม 2026',
    title: 'ปรับปรุง UX/UI เมนูย่อยกระชับ, แถบภารกิจสีเหลืองส้มสดใส & ปุ่มให้กำลังใจผู้พัฒนา',
    badge: 'เสถียร (Stable)',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'ปุ่มลอยให้กำลังใจผู้พัฒนา & สนับสนุนค่ากาแฟ (Support Coffee Widget)',
        description:
          'เพิ่มปุ่มลอยมุมขวาบน พร้อมหน้าต่าง QR Code พร้อมเพย์คมชัด 100% สแกนง่าย และเพิ่มแท็บสนับสนุนในศูนย์ข้อมูล',
      },
      {
        type: 'feature',
        title: 'ปรับปรุง UI/UX เมนูย่อย 5 วิชาหลัก & จำลองสอบ (Compact Hub Layout)',
        description:
          'จัดเลย์เอาต์ 5 คอลัมน์แถวเดียวแนวนอน กระชับพื้นที่ ลดความสูงการ์ดลง 45% มองเห็นครบทุกวิชาทันที',
      },
      {
        type: 'feature',
        title: 'แถบ Gamification สีเหลืองส้มสดใส & ปุ่มย่อขยายเดี่ยว (Vibrant Amber Hub)',
        description:
          'ปรับโทนสีเป็นสีเหลืองส้ม Amber-Gold สดใส สวยงาม เข้ากับเลเวลสีทอง และแยกปุ่มพับขยายแถบภารกิจอิสระ',
      },
      {
        type: 'feature',
        title: 'Roadmap แยก Checklist รายวิชา & พับขยายรายด่าน (Granular Roadmap)',
        description:
          'แยกหัวข้อย่อยเฉพาะทางละเอียดขึ้น และรองรับการพับ/ขยายตามด่านที่ผ่านแล้ว',
      },
      {
        type: 'fix',
        title: 'อัปเดต Badge หัวข้อและระบบนำทาง 3D Floating Hover',
        description:
          'ปรับ Badge เป็น "แนวข้อสอบจากติวเตอร์ชั้นนำ" และเพิ่มมิติ 3D Floating Hover บน Navbar',
      },
    ],
  },
  {
    version: 'v2.15.0',
    date: '27 สิงหาคม 2026',
    title: 'เปิดตัวระบบสร้างแรงจูงใจ (Gamification, Level & EXP, Daily Quests & 12 Badges)',
    badge: 'เสถียร (Stable)',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'ระบบเลเวลและค่าประสบการณ์ (Level 1-10 & Total EXP)',
        description:
          'สะสม EXP จากการทำโจทย์ถูกต้อง, จำลองสอบ, ซ่อมข้อผิด และเช็คอินรายวัน ไต่ระดับจากน้องใหม่ ป.6 สู่มหาเทพพิชิต ม.1',
      },
      {
        type: 'feature',
        title: 'ภารกิจประจำวัน 3 ข้อ (Daily Quests)',
        description:
          'ภารกิจรีเซ็ตทุกวัน: วอร์มอัพสมอง, ซ่อมจุดอ่อน และตะลุยสนามสอบจริง พร้อมปุ่มกดรับรางวัล EXP ทันที',
      },
      {
        type: 'feature',
        title: 'หอเกียรติยศ 12 เหรียญรางวัล (Achievement Badges)',
        description:
          'สะสมเหรียญรางวัลเกียรติยศทั้งสายวิชาการ (คณิต, วิทย์, อังกฤษ), สาย รร.ดัง (สามเสน, สวนกุหลาบ, จุฬาภรณ์), และสายวินัยสม่ำเสมอ (Streak 3 & 7 วัน)',
      },
      {
        type: 'feature',
        title: 'ระบบเช็คอินประจำวัน & รักษาวันต่อเนื่อง (Daily Check-in & Streak)',
        description:
          'กดเช็คอินเพื่อรับโบนัส EXP พิเศษและรักษาไฟการเรียนรู้ต่อเนื่อง',
      },
    ],
  },
  {
    version: 'v2.14.0',
    date: '27 สิงหาคม 2026',
    title: 'เปิดตัวระบบ AI Personal Diagnostic & สมุดบันทึกจุดอ่อน (Mistake Book) เต็มรูปแบบ',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'สมุดบันทึกจุดอ่อน (Mistake Book) & ข้อสอบติดดาว (Bookmarks)',
        description:
          'รวบรวมข้อที่เคยทำผิดจากทุกการสอบโดยอัตโนมัติ พร้อมระบบตัวกรองวิชาและสถานะ (รอทบทวน / เข้าใจแล้ว)',
      },
      {
        type: 'feature',
        title: 'ระบบซ้อมสอบซ่อมจุดอ่อน (Re-Take Mistake Quiz)',
        description:
          'โหมดสร้างชุดข้อสอบจากข้อที่เคยตอบผิด เพื่อฝึกซ้ำจนเกิดความเข้าใจ 100% พร้อมเปลี่ยนสถานะเป็น Mastered อัตโนมัติเมื่อตอบถูก',
      },
      {
        type: 'feature',
        title: 'Flashcards สรุปจุดหลอก & หลุมพรางยอดฮิต (Common Pitfalls)',
        description:
          'การ์ดสรุปจุดลวงที่เด็ก ป.6 โดนหลอกบ่อยที่สุดในสนามสอบ รร.ดัง ครอบคลุมคณิตศาสตร์ วิทยาศาสตร์ และภาษาอังกฤษ พร้อมสูตรลัดแก้เกม',
      },
    ],
  },
  {
    version: 'v2.13.0',
    date: '27 สิงหาคม 2026',
    title: 'นำเข้าชุดข้อสอบ SAMSEN Pre-Test 2023 ภาษาอังกฤษ ห้องเรียนพิเศษ (EP/Gifted) 60 ข้อเต็ม',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'บรรจุข้อสอบ SAMSEN Pre-Test 2023 ภาษาอังกฤษ (60 ข้อ 100 คะแนน)',
        description:
          'ครอบคลุม 5 สาระสำคัญ: Grammar & Structure (Tenses/Conditionals/Passive/Participles), Vocabulary & Phrasal Verbs, Situational Dialogues, Reading Passages & Real-World Media (Health/USA travel/Infographics), และ Error Identification พร้อมโหมดจำลองสอบจับเวลา 60 นาที',
      },
      {
        type: 'feature',
        title: 'เฉลยวิเคราะห์ไวยากรณ์และเทคนิคตัดชอยส์ (Grammar Analysis & Fast Tricks)',
        description:
          'ทุกข้อมีคำอธิบายโครงสร้างไวยากรณ์ แปลไทย-อังกฤษ และสูตรตัดชอยส์อย่างแม่นยำ',
      },
    ],
  },
  {
    version: 'v2.12.0',
    date: '27 สิงหาคม 2026',
    title: 'นำเข้าชุดข้อสอบ SAMSEN Pre-Test 2022 วิทยาศาสตร์ ห้องเรียนพิเศษ (Gifted) 30 ข้อเต็ม',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'บรรจุข้อสอบ SAMSEN Pre-Test 2022 วิชาวิทยาศาสตร์ (30 ข้อ 100 คะแนน)',
        description:
          'ครอบคลุม 4 สาระวิทย์: ชีววิทยา (พันธุศาสตร์/การย่อย/พืชดอก), เคมี (การแยกสาร/ความแข็ง/สถานะ), ฟิสิกส์ (วงจรไฟฟ้า/แรงลอยตัว/อุณหภูมิ/เสียง), และโลก-ดาราศาสตร์ พร้อมโหมดจำลองสอบจับเวลา 70 นาที',
      },
      {
        type: 'feature',
        title: 'เฉลยละเอียดทุกขั้นตอน (Step-by-Step) & เทคนิคคิดเร็ว (Fast Trick)',
        description:
          'ทุกข้อมีคำอธิบายแนวคิดหลัก ขั้นตอนการวิเคราะห์อย่างเป็นระบบ และสูตรลัดเทคนิคคิดเร็วมาตรฐาน KaTeX 100%',
      },
    ],
  },
  {
    version: 'v2.11.1',
    date: '26 สิงหาคม 2026',
    title: 'ปรับปรุง UX/UI หน้าจอหลัก: ปุ่มโหมดหลักลอยได้ & เส้นทางถนน Roadmap แบบ Interactive Checklist',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'ย้ายและจัดวาง 3 โหมดหลักให้อยู่ด้านบนเด่นชัด ไม่ถูกบัง',
        description:
          'หมวดฝึกหัด 5 วิชา, จำลองสอบเสมือนจริง และ AI Practice แสดงผลด้านบนพร้อมปุ่มกดแบบ Floating 3D Lift และเอฟเฟกต์รูปนิ้วมือ (cursor-pointer) ตอบสนองทุกการชี้เมาส์',
      },
      {
        type: 'feature',
        title: 'แปลงหน้า Roadmap เป็นเส้นทางถนน (Learning Journey Road)',
        description:
          'ดีไซน์เส้นทางถนนพร้อมจุดแวะพัก (Milestones 1-4) เชื่อมต่อสู่เป้าหมายสอบติด ม.1 พร้อมระบบ Interactive Checklist บันทึกความคืบหน้าลง LocalStorage และแถบวัดระดับความพร้อมสอบอัตโนมัติ',
      },
      {
        type: 'feature',
        title: 'เพิ่มระบบย่อ/ขยาย (Collapsible) สำหรับกล่องคู่มือกลยุทธ์',
        description:
          'สามารถกดเปิด-ปิดแถบสรุปคู่มือได้อย่างอิสระ ไม่บดบังตัวเลือกแบบฝึกหัด',
      },
    ],
  },
  {
    version: 'v2.11.0',
    date: '26 สิงหาคม 2026',
    title: 'เจาะลึกแนวข้อสอบเข้า ม.1 โรงเรียนแข่งขันสูง & คู่มือเตรียมสอบ 5 วิชาหลัก',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'เปิดตัวโมดูล "สิ่งที่น้อง ป.6 และผู้ปกครองต้องรู้ก่อนสอบเข้า ม.1"',
        description:
          'คู่มือเตรียมความพร้อม 3 เสาหลัก: การปรับตัวสู่ระดับมัธยม, การเปรียบเทียบจุดเน้นห้อง Gifted vs EP vs ห้องปกติ, และโครงสร้างสัดส่วนคะแนน 5 วิชาหลัก',
      },
      {
        type: 'feature',
        title: 'เจาะลึกบทวิเคราะห์ 5 วิชาหลักโดยทีมติวเตอร์ผู้เชี่ยวชาญ',
        description:
          'บทวิเคราะห์เจาะลึก 5 วิชาหลัก (คณิตศาสตร์, วิทยาศาสตร์, ภาษาไทย, ภาษาอังกฤษ, สังคมศึกษา) พร้อม Checklist หัวข้อที่มักออกสอบบ่อย และแนวข้อสอบเข้าโรงเรียนดัง',
      },
      {
        type: 'feature',
        title: 'แผน Roadmap พิชิตข้อสอบเข้า ม.1 (4 ระยะ)',
        description:
          'ตารางไทม์ไลน์วางแผนการอ่านหนังสือและฝึกทำข้อสอบ 4 ระยะ ตั้งแต่เปิดเทอม 1 จนถึงโค้งสุดท้าย พร้อมแนวทางสำหรับน้อง ๆ และผู้ปกครอง',
      },
    ],
  },
  {
    version: 'v2.10.2',
    date: '26 สิงหาคม 2026',
    title: 'ปรับปรุงการแสดงผลสัญลักษณ์คณิตศาสตร์ & เทคนิคคิดเร็ว (KaTeX Standard 100%)',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'fix',
        title: 'แก้ไขสัญลักษณ์คณิตศาสตร์ในกล่องเทคนิคคิดเร็วและเฉลยละเอียด',
        description:
          'แปลงสัญลักษณ์ตัวคูณ (x, *), เลขยกกำลัง (^2, ^3), เศษส่วน, สัญลักษณ์ลูกศร (->, =>) และสัญลักษณ์เรขาคณิต (pi, sqrt) ในคำแนะนำเทคนิคคิดเร็ว (Fast Track) และเฉลยวิธีทำให้เป็น KaTeX ($...$) ครบถ้วนทุกข้อสอบ',
      },
      {
        type: 'feature',
        title: 'ยกระดับ MathText Parser สำหรับฟอร์แมตคณิตศาสตร์อัจฉริยะ',
        description:
          'เพิ่มระบบตรวจจับและเรนเดอร์คำสั่ง LaTeX อัตโนมัติ ป้องกันการแสดงผลตกหล่นในหน้าแบบฝึกหัดและหน้าเฉลย',
      },
    ],
  },
  {
    version: 'v2.10.1',
    date: '26 สิงหาคม 2026',
    title: 'แก้ไขระบบแสดงผลขั้นตอนวิธีทำเฉลยละเอียด (Step-by-Step Solution)',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'fix',
        title: 'แก้ไขกล่องวิธีทำว่างเปล่าในหน้าเฉลยข้อสอบ',
        description:
          'ปรับปรุงคอมโพเนนต์ StepByStep และ SolutionViewer ให้รองรับข้อมูลขั้นตอนวิธีทำทั้งรูปแบบ String Array และ Object Array พร้อมแสดงหัวข้อขั้นตอนและเนื้อหาคำนวณ KaTeX ชัดเจน 100%',
      },
      {
        type: 'feature',
        title: 'เพิ่มกล่องคำอธิบายแนวคิดภาพรวม & เทคนิคคิดลัด (Concept & Fast Track)',
        description:
          'แสดงกล่องคำอธิบายแนวคิดหลัก (Concept & Explanation) และกล่องสูตรคิดลัด (Fast Track Tip) สำหรับทุกข้อสอบในระบบจำลองสอบและ AI Practice',
      },
    ],
  },
  {
    version: 'v2.10.0',
    date: '26 สิงหาคม 2026',
    title: 'บรรจุข้อสอบคณิตศาสตร์ ป.6 เข้า ม.1 รร.สาธิตปทุมวัน — 19 ข้อเข้มข้นพร้อมเฉลยละเอียด',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'บรรจุข้อสอบคณิตศาสตร์สาธิตปทุมวัน ครบ 19 ข้อ',
        description:
          'แกะและสกัดข้อสอบจริงและข้อสอบคัดเลือกเข้มข้น รร.สาธิต มศว. ปทุมวัน ครบ 19 ข้อ ครอบคลุมเศษส่วนต่อเนื่องยูคลิด, ความน่าจะเป็นลูกบาศก์ทาสี, การจัดวางตัวเลขเมจิก 1-7, พื้นที่กลีบใบไม้ 4 กลีบ, และสมการประยุกต์',
      },
      {
        type: 'feature',
        title: 'เฉลยวิธีคิดละเอียด & เทคนิคคิดลัด (Fast Trick)',
        description:
          'แสดงขั้นตอนคำนวณอย่างละเอียดทุกข้อ พร้อมสูตรลัดลูกบาศก์ทาสีหน้าเดียว 6(n-2)^2, สูตรลัดพื้นที่กลีบใบไม้ 4/7*r^2, สูตรลัดเทเลสโคปิก และพิมพ์สูตรคณิตศาสตร์ด้วย KaTeX',
      },
      {
        type: 'feature',
        title: 'เปิดห้องสอบจำลอง Mock Exam สาธิตปทุมวัน',
        description:
          'สามารถกดเข้าสอบชุด "ข้อสอบคณิตศาสตร์ ป.6 เข้า ม.1 สาธิตปทุมวัน — 19 ข้อเข้มข้นพร้อมเฉลยละเอียด" ในหน้า Mock Exam พร้อมระบบจับเวลา 45 นาที และระบบประเมินผลโอกาสสอบติดทันที',
      },
    ],
  },
  {
    version: 'v2.9.0',
    date: '26 สิงหาคม 2026',
    title: 'บรรจุข้อสอบ Suankularb Pre-Test (ครั้งที่ 9) — วิชาคณิตศาสตร์ 30 ข้อเต็ม',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'บรรจุข้อสอบ Suankularb Pre-Test (ครั้งที่ 9) ครบ 30 ข้อ',
        description:
          'แกะและสกัดข้อสอบจริงจาก รร.สวนกุหลาบวิทยาลัย ครบ 30 ข้อ ครอบคลุมการหารย้อนกลับ, การแยกตัวประกอบ, ห.ร.ม./ค.ร.น. ประยุกต์, อัตราส่วน, วงกลมแนบใน, อัตราก้าวหน้าค่าไฟฟ้า พร้อมตรวจสอบเฉลยถูกต้อง 100%',
      },
      {
        type: 'feature',
        title: 'เฉลยวิธีคิดละเอียด & เทคนิคคิดลัด (Fast Trick)',
        description:
          'มีขั้นตอนแสดงวิธีทำอย่างละเอียดทุกข้อ สูตรลัดพื้นที่มุมจัตุรัสเหลือ 3/14*L^2, สูตรลัดบวกลดเปอร์เซ็นต์เท่ากัน x^2/100, และจัดสูตรคณิตศาสตร์ด้วย KaTeX',
      },
      {
        type: 'feature',
        title: 'เปิดห้องสอบจำลอง Mock Exam สวนกุหลาบวิทยาลัย',
        description:
          'สามารถกดเข้าสอบชุด "ข้อสอบ Suankularb Pre-Test (ครั้งที่ 9) — คณิตศาสตร์ 30 ข้อ" ในหน้า Mock Exam พร้อมระบบจับเวลา 60 นาที และระบบประเมินผลโอกาสสอบติดทันที',
      },
    ],
  },
  {
    version: 'v2.8.0',
    date: '26 สิงหาคม 2026',
    title: 'บรรจุข้อสอบ SAMSEN Pre-Test 2023 (ห้องเรียนพิเศษ Gifted) — วิชาคณิตศาสตร์ 34 ข้อเต็ม',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'บรรจุข้อสอบ SAMSEN Pre-Test 2023 ครบ 34 ข้อ',
        description:
          'แกะและสกัดข้อสอบจริงจาก รร.สามเสนวิทยาลัย (รอบห้องเรียนพิเศษ Gifted) ครบทั้งตอนที่ 1 (ปรนัย 25 ข้อ) และตอนที่ 2 (อัตนัย 9 ข้อ) พร้อมตรวจสอบเฉลยถูกต้อง 100%',
      },
      {
        type: 'feature',
        title: 'เฉลยวิธีคิดละเอียดแบบ Step-by-Step & สูตรคิดลัด (Fast Trick)',
        description:
          'ทุกข้อมีขั้นตอนการคำนวณอย่างละเอียด พิมพ์สูตรคณิตศาสตร์สวยงามด้วย KaTeX และเสริมเทคนิคคิดลัดเพื่อช่วยทำข้อสอบได้เร็วยิ่งขึ้น',
      },
      {
        type: 'feature',
        title: 'เปิดห้องสอบจำลอง Mock Exam สามเสนวิทยาลัย',
        description:
          'สามารถกดเข้าสอบชุด "SAMSEN Pre-Test 2023 ห้องเรียนพิเศษ" ในหน้า Mock Exam พร้อมระบบจับเวลา 90 นาที และตัดเกรดประเมินโอกาสสอบติดทันที',
      },
    ],
  },
  {
    version: 'v2.7.1',
    date: '26 สิงหาคม 2026',
    title: 'แก้ไข Client Exception ในห้องสอบจำลอง & เพิ่มระบบหยุดพักการสอบและกลับมาทำต่อได้',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'fix',
        title: 'แก้ไข Client-side Exception เมื่อเข้าสู่ห้องจำลองข้อสอบ',
        description:
          'ปรับโครงสร้างการประกาศ React Hooks (useState) ให้อยู่ระดับบนสุดของคอมโพเนนต์ ExamSimulator ก่อน conditional return ทำให้ไม่เกิดข้อผิดพลาดในการเรนเดอร์',
      },
      {
        type: 'feature',
        title: 'เพิ่มระบบหยุดพักการสอบชั่วคราว & บันทึกกลับมาทำต่อได้ (Pause & Resume)',
        description:
          'เพิ่มปุ่ม "พักชั่วคราว" ในห้องสอบ พร้อมระบบ Auto-save บันทึกข้อที่ตอบแล้วและเวลาที่เหลือลงในเครื่องอัตโนมัติ ทำให้ผู้เรียนสามารถพักสายตาหรือสลับหน้าจอแล้วกลับมาทำต่อจากเดิมได้ 100%',
      },
    ],
  },
  {
    version: 'v2.7.0',
    date: '26 สิงหาคม 2026',
    title: 'ยกระดับระบบประเมินผลรายครั้ง & แดชบอร์ดวิเคราะห์เชิงลึก (Comprehensive Evaluation)',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'ใบรายงานผลสอบรายครั้งฉบับสมบูรณ์ (Instant Exam Report Card)',
        description:
          'ประเมินระดับโอกาสสอบติดห้องพิเศษ (Admission Probability Tier), วิเคราะห์การบริหารเวลาต่อข้อ (Time Pacing Analysis), สรุปจุดแข็ง vs จุดที่เสียคะแนนในชุดนี้ พร้อมปุ่มสั่งพิมพ์/บันทึก PDF',
      },
      {
        type: 'feature',
        title: 'โหมดตรวจทานเฉลยเฉพาะข้อที่ตอบผิด (Review Mistakes Only)',
        description:
          'เพิ่มปุ่มให้เลือกดูเฉลยเฉพาะข้อที่ทำผิด ช่วยให้ผู้เรียนประหยัดเวลาและโฟกัสจุดที่ต้องพัฒนาได้อย่างแม่นยำ',
      },
      {
        type: 'feature',
        title: 'เกณฑ์วัดความพร้อมเทียบกับโรงเรียนเป้าหมาย (Target School Benchmark)',
        description:
          'เปรียบเทียบระดับความพร้อมของคะแนนสะสมกับเกณฑ์ตัดตัวจริงของ รร.เบ็ญจะมะมหาราช, จุฬาภรณฯ, สวนกุหลาบ/สามเสน และ สาธิต มศว.',
      },
      {
        type: 'feature',
        title: 'แผนการติวแนะนำเฉพาะบุคคล 3 ขั้นตอน & ตารางประวัติสอบละเอียด',
        description:
          'ระบบสร้างแผนพัฒนาการเรียนรู้ 3 ลำดับขั้นอัตโนมัติตามจุดอ่อนจริง พร้อมตารางประวัติผลการทดสอบแยกตามรายวิชา',
      },
    ],
  },
  {
    version: 'v2.6.5',
    date: '23 สิงหาคม 2026',
    title: 'แก้ไขข้อผิดพลาดการตรวจคำตอบในโหมด AI Practice & ปรับชื่อหมวดหมู่',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'fix',
        title: 'แก้ไข Client-side Exception เมื่อกดตรวจคำตอบใน AI Practice',
        description:
          'แก้ไขการส่ง props ให้กับคอมโพเนนต์ SolutionViewer ในโหมด AI Practice จากเดิมที่ส่ง object solution เปลี่ยนเป็นส่ง question เต็มรูปแบบ ทำให้ระบบแสดงเฉลยวิธีทำอย่างละเอียดได้ถูกต้อง 100% ไม่เกิด error',
      },
      {
        type: 'feature',
        title: 'ปรับปรุงข้อความชื่อหมวดหมู่ AI Practice',
        description:
          'ตัดคำว่า "0 บาท" ออกจากชื่อหมวดหมู่ AI Practice และข้อความแนะนำทั่วทั้งระบบ เพื่อความสวยงามและเป็นทางการ',
      },
    ],
  },
  {
    version: 'v2.6.4',
    date: '23 สิงหาคม 2026',
    title: 'แก้ไขการแสดงผลสัญลักษณ์คณิตศาสตร์ในกล่องเฉลยคำตอบ (Solution KaTeX Fix)',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'fix',
        title: 'แก้ไขการเรนเดอร์ KaTeX ในกล่อง "คำตอบที่ถูกต้อง" (SolutionViewer)',
        description:
          'ปรับปรุงให้ข้อความคำตอบที่ถูกต้อง (เช่น เศษส่วน 99/100, ทศนิยมซ้ำ 62/99, สแควร์รูท 3√3, และค่าพาย 36π) เรนเดอร์เป็นสูตรคณิตศาสตร์สวยงามผ่าน KaTeX 100% แทนการแสดงผลเป็นข้อความ raw text',
      },
      {
        type: 'fix',
        title: 'แก้ไขการเรนเดอร์ KaTeX ในกล่องคำตอบอัตนัย (ShortAnswer)',
        description:
          'ปรับปรุงการแสดงผลข้อความเฉลยคำตอบของข้อสอบอัตนัยให้รองรับสูตรคณิตศาสตร์ผ่าน MathText อัตโนมัติ',
      },
    ],
  },
  {
    version: 'v2.6.3',
    date: '23 สิงหาคม 2026',
    title: 'เพิ่ม Progress Bar แสดงความคืบหน้าการทำข้อสอบทุกโหมด',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'Progress Bar ในห้องสอบจำลองเสมือนจริง (Timed Mock Exam)',
        description:
          'แสดงแถบสถานะความคืบหน้าแบบ Real-time: บอกจำนวนข้อที่ทำไปแล้ว, จำนวนข้อทั้งหมด, จำนวนข้อที่ยังเหลือ, และคำนวณเป็นเปอร์เซ็นต์ความคืบหน้า (%) อย่างชัดเจน',
      },
      {
        type: 'feature',
        title: 'Progress Bar ในแบบฝึกหัดรายวิชา & AI Practice',
        description:
          'เพิ่มแถบความคืบหน้าระบุลำดับข้อในหมวดวิชา (เช่น ข้อ 4 จาก 100 ข้อ คิดเป็น 4%) และแถบแสดงสถิติความคืบหน้าในโหมด AI Practice',
      },
    ],
  },
  {
    version: 'v2.6.2',
    date: '23 สิงหาคม 2026',
    title: 'ระบบประเมินผลตามจริง 100% & ป๊อปอัปกรอกชื่อผู้เรียนก่อนสอบ',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'feature',
        title: 'ป๊อปอัปกรอกชื่อผู้เรียน (Student Profile Prompt)',
        description:
          'เพิ่มหน้าต่างให้กรอก/ยืนยันชื่อผู้เรียน และเลือกโรงเรียนเป้าหมายก่อนเริ่มทำข้อสอบ เพื่อนำชื่อไปผูกกับประวัติการประเมินผลเฉพาะบุคคล',
      },
      {
        type: 'fix',
        title: 'แก้ไขระบบวิเคราะห์จุดอ่อน & จุดแข็งตามผลจริง 100%',
        description:
          'แก้ไขบัคการแสดงคะแนน 0% ในจุดแข็ง โดยกำหนดเกณฑ์มาตรฐานวิชาการ: จุดแข็งต้องได้คะแนน ≥ 70% เท่านั้น และจุดอ่อนคือหมวดที่ < 70% พร้อมปุ่มคลิกลิงก์ไปฝึกทำข้อสอบหมวดนั้นทันที',
      },
      {
        type: 'feature',
        title: 'Radar Chart สมรรถนะ 6 ด้านคำนวณตามจริง',
        description:
          'ปรับกราฟ Radar Chart ให้คำนวณเปอร์เซ็นต์สมรรถนะจากประวัติการทำข้อสอบจริงของผู้เรียน พร้อมปรับแก้การแสดงผลข้อความไม่ให้ล้นขอบ SVG',
      },
    ],
  },
  {
    version: 'v2.6.1',
    date: '23 สิงหาคม 2026',
    title: 'อัปเดตความแม่นยำทางวิชาการ & แก้ไขการแสดงผลสูตรคณิตศาสตร์',
    badge: 'Previous',
    isLatest: false,
    changes: [
      {
        type: 'fix',
        title: 'แก้ไขการเรนเดอร์สูตร LaTeX ในตัวเลือกคณิตศาสตร์',
        description:
          'แก้ไขตัวเลือกเศษส่วนและสัญลักษณ์คณิตศาสตร์ (เช่น ข้ออนุกรมเศษส่วน 99/100, ทศนิยมซ้ำ 62/99, อนุกรมเรขาคณิต 63/64) ให้แสดงผลเป็นสูตรสวยงามถูกต้อง 100% ผ่าน KaTeX',
      },
      {
        type: 'feature',
        title: 'ระบบ Auto-Detect Math Formula (KaTeX Protection)',
        description:
          'เพิ่มระบบตรวจจับและห่อหุ้ม syntax คณิตศาสตร์อัตโนมัติในระดับ Component เพื่อป้องกันการแสดงผล raw LaTeX ในทุกหน้าจอ',
      },
      {
        type: 'verify',
        title: 'AI Math Verification ตรวจทานคลังข้อสอบ 120 ข้อ',
        description:
          'ผ่านการตรวจสอบความถูกต้องทางคณิตศาสตร์ 100% ครบทุกข้อ พร้อมปรับปรุงโจทย์ ห.ร.ม. (bm-math-006) และสมการเชิงซ้อน (bm-math-037) ให้ได้คำตอบตรงตามตัวเลือกอย่างแม่นยำ',
      },
      {
        type: 'system',
        title: 'ระบบ Automated Data Validation 15 กฎ',
        description:
          'ติดตั้งระบบตรวจสอบคุณภาพข้อมูลอัตโนมัติ ครอบคลุมโครงสร้างคำถาม ตัวเลือก เฉลย LaTeX และ metadata ครบ 625+ ข้อสอบ 13 สถาบันทั่วประเทศ (0 Errors, 0 Warnings)',
      },
    ],
  },
  {
    version: 'v2.6.0',
    date: '20 สิงหาคม 2026',
    title: 'Official Multi-User Edition & 3-Hub Architecture',
    badge: 'Major Release',
    changes: [
      {
        type: 'feature',
        title: 'ระบบแยกข้อมูลผู้เรียนแต่ละเครื่อง (Device Storage Isolation)',
        description: 'บันทึกสถิติและประวัติแยกเครื่อง 100% พร้อมระบบตั้งชื่อและล้างข้อมูลผู้เรียน',
      },
      {
        type: 'feature',
        title: 'AI Practice Dynamic Generator 33 รูปแบบ',
        description: 'สุ่มโจทย์ฝึกทำซ้ำไม่จำกัดชุด 0 บาท รองรับ 5 วิชาหลัก',
      },
    ],
  },
];

