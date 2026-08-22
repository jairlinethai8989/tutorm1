# 🎓 Tutor M.1 — ระบบติวออนไลน์สอบเข้า ม.1 (แนว มศว. & สสวท.)
### เป้าหมาย: โรงเรียนเบ็ญจะมะมหาราช (อุบลราชธานี) & โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย มุกดาหาร

ระบบติวและฝึกทำข้อสอบออนไลน์สำหรับนักเรียนชั้น ป.5–ป.6 ที่มุ่งมั่นสอบเข้าโรงเรียนชั้นนำของประเทศไทย โดยเฉพาะห้องเรียนพิเศษ (SMA, Gifted, AP, EP) และห้องเรียนปกติ

---

## 🌟 ฟีเจอร์เด่น (Key Features)

- **📚 ครอบคลุม 5 วิชาหลัก**: คณิตศาสตร์, วิทยาศาสตร์, ภาษาอังกฤษ, ภาษาไทย และสังคมศึกษา
- **✏️ รองรับ 3 รูปแบบข้อสอบ**:
  - ปรนัย 4 ตัวเลือก (Multiple Choice)
  - อัตนัยเติมคำตอบสั้น (Short Answer) พร้อมระบบตรวจเลขอารบิก/ไทยและตัดหน่วยอัตโนมัติ
  - อัตนัยแสดงวิธีทำ (Long Answer) พร้อม Model Answer
- **💡 เฉลยละเอียด Step-by-Step**: แสดงวิธีคิดทีละขั้น, สูตรคณิตศาสตร์ KaTeX, ภาพประกอบ SVG เวกเตอร์คมชัด, กล่องเทคนิคคิดเร็ว และเตือนจุดที่มักโดนหลอก
- **⏱️ ระบบจำลองสอบจริง (Mock Exam)**: นาฬิกาจับเวลานับถอยหลัง, กระดาษคำตอบดิจิทัล (Answer Sheet), ส่งข้อสอบอัตโนมัติ และ Review Mode
- **📊 Smart Performance Dashboard**: กราฟเรดาร์ 6 มิติ (Radar Chart), วิเคราะห์จุดอ่อน (Top Weaknesses) และจุดแข็ง (Top Strengths)
- **⚡ Static-First Architecture**: ใช้งานได้ทันที 100% ฟรี ไม่ต้องล็อกอิน ข้อมูลบันทึกใน LocalStorage และพร้อม Deploy บน Vercel ได้ทันที

---

## 🚀 การติดตั้งและรันในเครื่อง (Local Development)

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. เริ่มต้น Development Server
npm run dev

# 3. หรือ Build และรัน Production Server
npm run build
npm start
```

เปิดเบราว์เซอร์ไปที่: `http://localhost:3000`

---

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS 4 + Glassmorphism + Responsive Design
- **Math Rendering**: KaTeX
- **Charts & Animations**: SVG Radar Charts + Framer Motion + Canvas Confetti
- **Icons**: Lucide React
- **Deployment**: Vercel Ready

---

## 📄 License

MIT License - จัดทำขึ้นเพื่อสนับสนุนการศึกษาของเยาวชนไทยทุกคน
