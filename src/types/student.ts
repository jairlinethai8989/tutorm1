export interface StudentProfile {
  id: string;
  name: string;
  targetSchool: string;
  targetSchoolShort: string;
  customSchoolName?: string;
  avatar: string;
  grade: string;
  createdAt: string;
}

export const TARGET_SCHOOL_OPTIONS = [
  {
    id: 'benchama',
    name: 'รร.เบ็ญจะมะมหาราช (ห้อง SMA / Gifted / วิทย์-คณิต)',
    shortName: 'เบ็ญจะมะมหาราช',
  },
  {
    id: 'chulabhorn',
    name: 'รร.จุฬาภรณราชวิทยาลัย (โรงเรียนวิทยาศาสตร์ภูมิภาค)',
    shortName: 'จุฬาภรณราชวิทยาลัย',
  },
  {
    id: 'samsen',
    name: 'รร.สามเสนวิทยาลัย (MSEP / EP / Gifted)',
    shortName: 'สามเสนวิทยาลัย',
  },
  {
    id: 'suankularb',
    name: 'รร.สวนกุหลาบวิทยาลัย (GATE / Gifted)',
    shortName: 'สวนกุหลาบวิทยาลัย',
  },
  {
    id: 'satriwit',
    name: 'รร.สตรีวิทยา (Gifted / ห้องพิเศษ)',
    shortName: 'สตรีวิทยา',
  },
  {
    id: 'patumwan-satit',
    name: 'รร.สาธิต มศว ปทุมวัน / ประสานมิตร',
    shortName: 'สาธิตปทุมวัน / มศว',
  },
  {
    id: 'triam-pattanakarn',
    name: 'รร.เตรียมอุดมศึกษาพัฒนาการ / นวมินทราชูทิศ',
    shortName: 'เตรียมพัฒนาการ',
  },
  {
    id: 'other',
    name: 'โรงเรียนอื่น ๆ (พิมพ์ระบุชื่อโรงเรียนเอง)',
    shortName: 'โรงเรียนอื่น ๆ',
  },
];

export interface AvatarItem {
  id: string;
  src: string;
  title: string;
  category: 'boys' | 'girls' | 'animals' | 'explorers';
}

export const STUDENT_AVATARS: AvatarItem[] = [
  // Row 1: Students
  { id: 'av-1', src: '/avatars/avatar_1.png', title: 'น้องนักเรียนชาย', category: 'boys' },
  { id: 'av-2', src: '/avatars/avatar_2.png', title: 'น้องนักเรียนหญิง', category: 'girls' },
  { id: 'av-3', src: '/avatars/avatar_3.png', title: 'น้องลูกเสือสำรอง', category: 'boys' },
  { id: 'av-4', src: '/avatars/avatar_4.png', title: 'น้องนักอ่านสมุดชมพู', category: 'girls' },
  { id: 'av-5', src: '/avatars/avatar_5.png', title: 'น้องแว่นยอดนักคิด', category: 'boys' },

  // Row 2: Students
  { id: 'av-6', src: '/avatars/avatar_6.png', title: 'น้องมวยผมโบว์เหลือง', category: 'girls' },
  { id: 'av-7', src: '/avatars/avatar_7.png', title: 'น้องนักบาสเกตบอล', category: 'boys' },
  { id: 'av-8', src: '/avatars/avatar_8.png', title: 'น้องทวินเทลโบว์ฟ้า', category: 'girls' },
  { id: 'av-9', src: '/avatars/avatar_9.png', title: 'น้องศิลปินวาดภาพ', category: 'boys' },
  { id: 'av-10', src: '/avatars/avatar_10.png', title: 'น้องผมหยิกสุดเท่', category: 'boys' },

  // Row 3: Animals
  { id: 'av-11', src: '/avatars/avatar_11.png', title: 'น้องหมาคอร์กี้สะพายเป้', category: 'animals' },
  { id: 'av-12', src: '/avatars/avatar_12.png', title: 'น้องแมวส้มชุดนักเรียน', category: 'animals' },
  { id: 'av-13', src: '/avatars/avatar_13.png', title: 'น้องกระต่ายขาวเนคไทม่วง', category: 'animals' },
  { id: 'av-14', src: '/avatars/avatar_14.png', title: 'น้องแพนด้าแดงอ่านหนังสือ', category: 'animals' },
  { id: 'av-15', src: '/avatars/avatar_15.png', title: 'น้องช้างน้อยหมวกฟ้า', category: 'animals' },
  { id: 'av-16', src: '/avatars/avatar_16.png', title: 'น้องนกแก้วสะพายย่าม', category: 'animals' },

  // Row 4: Students & Explorers
  { id: 'av-17', src: '/avatars/avatar_17.png', title: 'น้องแว่นแท็บเล็ต', category: 'girls' },
  { id: 'av-18', src: '/avatars/avatar_18.png', title: 'น้องนักสืบแว่นขยาย', category: 'boys' },
  { id: 'av-19', src: '/avatars/avatar_19.png', title: 'น้องหางม้าถือหนังสือ', category: 'girls' },
  { id: 'av-20', src: '/avatars/avatar_20.png', title: 'น้องเปิดโลกหนังสือ', category: 'boys' },
  { id: 'av-21', src: '/avatars/avatar_21.png', title: 'น้องผมบันสองนิ้วสู้ตาย', category: 'girls' },

  // Row 5: Activities & Hobbies
  { id: 'av-22', src: '/avatars/avatar_22.png', title: 'น้องนักฟุตบอล', category: 'boys' },
  { id: 'av-23', src: '/avatars/avatar_23.png', title: 'น้องนักดนตรีขลุ่ย', category: 'girls' },
  { id: 'av-24', src: '/avatars/avatar_24.png', title: 'น้องแว่นกลมเป้ชมพู', category: 'boys' },
  { id: 'av-25', src: '/avatars/avatar_25.png', title: 'น้องจดบันทึกด้วยขนนก', category: 'girls' },
  { id: 'av-26', src: '/avatars/avatar_26.png', title: 'น้องนักสำรวจส่องกล้อง', category: 'explorers' },

  // Row 6: Passions
  { id: 'av-27', src: '/avatars/avatar_27.png', title: 'น้องรักต้นไม้', category: 'girls' },
  { id: 'av-28', src: '/avatars/avatar_28.png', title: 'น้องจรวดเครื่องบินกระดาษ', category: 'boys' },
  { id: 'av-29', src: '/avatars/avatar_29.png', title: 'น้องเชฟตัวน้อยตะกร้อมือ', category: 'girls' },
  { id: 'av-30', src: '/avatars/avatar_30.png', title: 'น้องโปรแกรมเมอร์แท็บเล็ต', category: 'boys' },
  { id: 'av-31', src: '/avatars/avatar_31.png', title: 'น้องกระเป๋าเป้เขียว', category: 'girls' },
];

export const CUTE_AVATARS = STUDENT_AVATARS.map((a) => a.src);
