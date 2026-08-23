export const APP_CONFIG = {
  name: 'Tutor M.1',
  title: 'เตรียมสอบเข้า ม.1 ห้องพิเศษ โรงเรียนชั้นนำ',
  titleFull: 'เตรียมสอบเข้า ม.1 ห้องพิเศษ โรงเรียนชั้นนำ — ระบบฝึกทำข้อสอบ & AI Practice',
  version: 'v2.6.2',
  versionLabel: 'Version 2.6.2 (Real-Time Analytics & Student Profile)',
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
    version: 'v2.6.2',
    date: '23 สิงหาคม 2026',
    title: 'ระบบประเมินผลตามจริง 100% & ป๊อปอัปกรอกชื่อผู้เรียนก่อนสอบ',
    badge: 'ล่าสุด (Latest)',
    isLatest: true,
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

