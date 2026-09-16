'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  BookOpen,
  Clock,
  Zap,
  Target,
  Award,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Heart,
  Compass,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TutorialStep {
  id: string;
  stepNumber: number;
  title: string;
  shortTitle: string;
  badge: string;
  badgeColor: string;
  image: string;
  headline: string;
  description: string;
  features: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }[];
  quickAction?: {
    label: string;
    href: string;
  };
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: 'subjects',
    stepNumber: 1,
    title: '5 วิชาหลัก',
    shortTitle: 'วิชาหลัก',
    badge: 'คลังข้อสอบจริง 798+ ข้อ',
    badgeColor: 'from-blue-600 to-indigo-600',
    image: '/images/nav-icons/icon-subjects.png',
    headline: 'ฝึกทำข้อสอบตรงหลักสูตร 5 วิชาจากโรงเรียนแข่งขันสูง',
    description:
      'ครอบคลุมทั้งคณิตศาสตร์ วิทยาศาสตร์ ภาษาอังกฤษ ภาษาไทย และสังคมศึกษา คัดสรรจากแนวข้อสอบเข้า ม.1 ห้องเรียนพิเศษ (Gifted, SMA, SMTE, EP)',
    features: [
      {
        icon: <BookOpen className="w-4 h-4 text-blue-600" />,
        title: 'เฉลยละเอียดทุกข้อ',
        desc: 'มีคำอธิบายแนวคิด Step-by-Step พร้อมสูตรคิดลัดภาษาไทยเข้าใจง่าย',
      },
      {
        icon: <Sparkles className="w-4 h-4 text-amber-500" />,
        title: 'สูตรคณิต & สัญลักษณ์คมชัด',
        desc: 'แสดงผลด้วย KaTeX มาตรฐานระดับสากล ไม่เพี้ยนบนทุกอุปกรณ์',
      },
      {
        icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
        title: 'เลือกโรงเรียนดังได้',
        desc: 'ฝึกแนว รร.เบ็ญจะมะฯ, สวนกุหลาบ, สามเสน, จุฬาภรณ์, สตรีวิทยา ฯลฯ',
      },
    ],
    quickAction: {
      label: 'ดูคลังข้อสอบ 5 วิชา',
      href: '/',
    },
  },
  {
    id: 'mock-exam',
    stepNumber: 2,
    title: 'จำลองสอบจริง',
    shortTitle: 'จำลองสอบ',
    badge: 'Mock Exam จับเวลาจริง',
    badgeColor: 'from-violet-600 to-purple-600',
    image: '/images/nav-icons/icon-mock-exam.png',
    headline: 'ห้องสอบเสมือนจริง จับเวลาจริง และปรับตั้งเวลาได้',
    description:
      'สร้างความคุ้นเคยกับแรงกดดันในห้องสอบ ด้วยระบบจับเวลาถอยหลัง กระดาษคำตอบดิจิทัล และเกณฑ์ผ่านตัดตัวห้องเรียนพิเศษ',
    features: [
      {
        icon: <Clock className="w-4 h-4 text-purple-600" />,
        title: 'ปรับเวลาสอบได้อิสระ',
        desc: 'เลือกสอบ 15, 30, 45, 60, 90, 120 นาที หรือ ♾️ ซ้อมแบบไม่จำกัดเวลา',
      },
      {
        icon: <Target className="w-4 h-4 text-rose-500" />,
        title: 'ประเมินโอกาสสอบติด',
        desc: 'สรุปคะแนนทันที พร้อมวิเคราะห์ Pace ความเร็วเฉลี่ยต่อข้อ',
      },
      {
        icon: <Award className="w-4 h-4 text-amber-500" />,
        title: 'Review Mode ตรวจทาน',
        desc: 'กดทบทวนเฉพาะข้อที่ตอบผิด พร้อมกลับไปฝึกซ่อมได้ทันที',
      },
    ],
    quickAction: {
      label: 'ลองเข้าห้องสอบจำลอง',
      href: '/mock-exam',
    },
  },
  {
    id: 'speed-ai',
    stepNumber: 3,
    title: 'Speed Run & AI',
    shortTitle: 'Speed/AI',
    badge: 'แข่งความเร็ว & สุ่มโจทย์',
    badgeColor: 'from-orange-500 to-rose-500',
    image: '/images/nav-icons/icon-speed-run.png',
    headline: 'ประลองความเร็ว Speed Run และโจทย์คำนวณ AI ไม่จำกัด',
    description:
      'ฝึกคิดเลขไวและบริหารเวลาให้เฉียบคม พร้อมระบบ AI Practice สุ่มตัวเลขและเงื่อนไขโจทย์ 33 รูปแบบไม่มีวันหมด',
    features: [
      {
        icon: <Zap className="w-4 h-4 text-orange-500" />,
        title: 'Speed Run ⚡ ปั๊มคอมโบ',
        desc: 'ตอบถูกต่อเนื่องได้ตัวคูณคะแนน ฝึกความไวและความแม่นยำสูง',
      },
      {
        icon: <Sparkles className="w-4 h-4 text-fuchsia-500" />,
        title: 'AI Practice 33 รูปแบบ',
        desc: 'โจทย์เปลี่ยนตัวเลขคำนวณอัตโนมัติ ซ้อมคิดเลขซ้ำจนเชี่ยวชาญ',
      },
      {
        icon: <Heart className="w-4 h-4 text-rose-500" />,
        title: 'สะสม Level XP & Badges',
        desc: 'ทำเควสต์ประจำวัน สะสมคะแนนประสบการณ์ เลเวลอัปเพิ่มความมั่นใจ',
      },
    ],
    quickAction: {
      label: 'ลองโหมด Speed Run',
      href: '/speed-run',
    },
  },
  {
    id: 'analytics-mistake',
    stepNumber: 4,
    title: 'วินิจฉัยจุดอ่อน AI',
    shortTitle: 'จุดอ่อน',
    badge: 'วิเคราะห์ 16 บท & สมุดข้อผิด',
    badgeColor: 'from-indigo-600 to-blue-700',
    image: '/images/nav-icons/icon-ai-analytics.png',
    headline: 'ระบบวินิจฉัยจุดอ่อน AI และสมุดบันทึกข้อที่เคยทำผิด',
    description:
      'ไม่ปล่อยให้ข้อผิดหลุดมือ ระบบจะบันทึกข้อที่ตอบผิดลง Mistake Book อัตโนมัติ พร้อมชุดข้อสอบแก้มือตรงจุด',
    features: [
      {
        icon: <BookOpen className="w-4 h-4 text-rose-500" />,
        title: 'สมุดจุดอ่อน (Mistake Book)',
        desc: 'รวมข้อที่เคยตอบผิดไว้ในที่เดียว พร้อมปุ่ม "สอบซ่อม" เพื่อปลดล็อก',
      },
      {
        icon: <Target className="w-4 h-4 text-blue-600" />,
        title: 'ควิซแก้จุดอ่อน 10 ข้อใน 1 คลิก',
        desc: 'AI ดึงเฉพาะหัวข้อที่ได้คะแนนต่ำกว่า 60% มาจัดเป็นชุดฝึกซ่อมพิเศษ',
      },
      {
        icon: <Compass className="w-4 h-4 text-emerald-600" />,
        title: 'กราฟเรดาร์ทักษะ 5 ด้าน',
        desc: 'มองเห็นภาพรวมว่าบทไหนเก่งแล้ว และบทไหนต้องเร่งทบทวนเพิ่ม',
      },
    ],
    quickAction: {
      label: 'เปิดสมุดจุดอ่อน',
      href: '/mistake-book',
    },
  },
  {
    id: 'roadmap-report',
    stepNumber: 5,
    title: 'Roadmap & สรุปสูตร',
    shortTitle: 'Roadmap',
    badge: '28 ภารกิจ & รายงานผู้ปกครอง',
    badgeColor: 'from-emerald-600 to-teal-600',
    image: '/images/nav-icons/icon-cheat-sheets.png',
    headline: 'แผนที่เดินทางสู่ ม.1 คลังสรุปสูตร และรายงานผู้ปกครอง',
    description:
      'เตรียมตัวอย่างมีแบบแผนด้วย Checklist 4 ระยะ พร้อมคลังสรุปสูตรลับและระบบสร้างรายงานผลการเรียนทางการ',
    features: [
      {
        icon: <Compass className="w-4 h-4 text-indigo-600" />,
        title: 'Roadmap พิชิตห้อง Gifted',
        desc: 'เช็คลิสต์ 28 เงื่อนไขสู่ความสำเร็จ ปลดล็อกปลายทางเมื่อทำครบ 100%',
      },
      {
        icon: <BookOpen className="w-4 h-4 text-amber-600" />,
        title: 'คลังสรุปสูตร & แฟลชการ์ด',
        desc: 'หัวใจสำคัญ 5 วิชา พร้อมโหมดพิมพ์การ์ดคำศัพท์อ่านก่อนสอบ',
      },
      {
        icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
        title: 'รายงานผู้ปกครอง (Parent Report)',
        desc: 'พิมพ์ใบประเมินทักษะและผลการวิเคราะห์ AI ส่งให้คุณพ่อคุณแม่ดูได้',
      },
    ],
    quickAction: {
      label: 'ดูคลังสรุปสูตร',
      href: '/cheat-sheets',
    },
  },
];

interface AppTutorialModalProps {
  triggerButton?: boolean;
}

export const AppTutorialModal: React.FC<AppTutorialModalProps> = ({
  triggerButton = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    // Auto-open on first visit if not dismissed
    try {
      const dismissed = localStorage.getItem('tutor_m1_tutorial_dismissed');
      if (dismissed !== 'true') {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {}

    // Listen for manual trigger events from anywhere in the app
    const handleOpenEvent = () => {
      setCurrentStepIndex(0);
      setIsOpen(true);
    };

    window.addEventListener('tutor_m1_open_tutorial', handleOpenEvent);
    return () => {
      window.removeEventListener('tutor_m1_open_tutorial', handleOpenEvent);
    };
  }, []);

  const handleClose = () => {
    try {
      if (dontShowAgain) {
        localStorage.setItem('tutor_m1_tutorial_dismissed', 'true');
      } else {
        localStorage.removeItem('tutor_m1_tutorial_dismissed');
      }
    } catch {}
    setIsOpen(false);
  };

  const handleFinish = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}
    handleClose();
  };

  const step = TUTORIAL_STEPS[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === TUTORIAL_STEPS.length - 1;

  return (
    <>
      {/* Optional Trigger Button for Navbar / Menus */}
      {triggerButton && (
        <div className="relative group">
          <button
            type="button"
            onClick={() => {
              setCurrentStepIndex(0);
              setIsOpen(true);
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 hover:bg-blue-100/90 border border-blue-200/90 text-blue-900 flex items-center justify-center transition-all shadow-2xs hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer relative"
            aria-label="วิธีใช้งานระบบ (Tutorial)"
          >
            <Lightbulb className="w-4 h-4 text-amber-500 hover:text-amber-600 transition-colors" />
          </button>
          {/* Tooltip on hover */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-xl bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl z-50">
            วิธีใช้งานระบบ 💡
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </div>
      )}

      {/* Modal Overlay */}
      {isOpen &&
        mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col my-auto max-h-[92vh] overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 1. Header with Gradient & Close Button */}
              <div className="shrink-0 p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white flex items-center justify-between shadow-xs relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-base sm:text-lg font-black tracking-tight">
                        ยินดีต้อนรับสู่ Tutor M.1 🎓
                      </h2>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/20 text-blue-100">
                        คู่มือ 5 ขั้นตอนสู่ ม.1
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/90 font-medium">
                      แนะนำเครื่องมือและฟังก์ชันเด่นเพื่อเตรียมสอบเข้า ม.1 ห้องพิเศษ
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                  aria-label="ปิดคำแนะนำ"
                  title="ปิดหน้าต่าง"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 2. Redesigned Step Header (No Horizontal Scroll, 100% Visible & Responsive) */}
              <div className="shrink-0 p-3 sm:px-6 sm:py-3.5 bg-slate-50 border-b border-slate-200 space-y-2">
                {/* Visual Progress Segments (5 segments) */}
                <div className="grid grid-cols-5 gap-1 sm:gap-2">
                  {TUTORIAL_STEPS.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentStepIndex
                          ? 'bg-blue-600 shadow-xs'
                          : idx < currentStepIndex
                          ? 'bg-emerald-500'
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>

                {/* 5-Column Responsive Step Buttons */}
                <div className="grid grid-cols-5 gap-1 sm:gap-2 w-full">
                  {TUTORIAL_STEPS.map((s, idx) => {
                    const isActive = idx === currentStepIndex;
                    const isCompleted = idx < currentStepIndex;

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setCurrentStepIndex(idx)}
                        className={`w-full py-1.5 sm:py-2 px-1 rounded-xl text-center transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300'
                            : isCompleted
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                        title={`${s.stepNumber}. ${s.title}`}
                      >
                        <span
                          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-black shrink-0 ${
                            isActive
                              ? 'bg-white text-blue-700'
                              : isCompleted
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {isCompleted ? '✓' : s.stepNumber}
                        </span>
                        <span className="text-[10px] sm:text-xs font-black tracking-tight truncate max-w-full">
                          <span className="hidden sm:inline">{s.title}</span>
                          <span className="inline sm:hidden">{s.shortTitle}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Main Step Visual Card (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
                {/* Hero Step Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100/80 shadow-xs space-y-3.5">
                  <div className="flex items-start gap-4">
                    {/* 3D Clay Icon Showcase */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-md p-2 flex items-center justify-center shrink-0">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={72}
                        height={72}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-[10px] font-black px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r ${step.badgeColor} shadow-2xs`}
                        >
                          {step.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-bold">
                          ขั้นตอนที่ {step.stepNumber} จาก {TUTORIAL_STEPS.length}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {step.headline}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Key Feature Points */}
                <div className="space-y-2.5">
                  <div className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>ไฮไลต์สำคัญที่คุณไม่ควรพลาด:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {step.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-1 hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-center gap-2 font-black text-xs text-slate-900">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                            {feat.icon}
                          </div>
                          <span className="line-clamp-1">{feat.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed pl-1">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Link & Tip Box */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex items-center gap-2 text-xs text-amber-900">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      <strong>เคล็ดลับ:</strong> สามารถใช้งานระบบทั้งหมดได้ฟรี 100% บันทึกคะแนนลงเครื่องทันที
                    </span>
                  </div>

                  {step.quickAction && (
                    <Link
                      href={step.quickAction.href}
                      onClick={handleClose}
                      className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs transition-colors shrink-0 flex items-center gap-1 shadow-xs"
                    >
                      <span>{step.quickAction.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>

              {/* 4. Footer with 'Do Not Show Again' Checkbox & Next/Back Buttons */}
              <div className="shrink-0 p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Checkbox: Do not show again */}
                <label className="flex items-center gap-2.5 cursor-pointer select-none text-slate-700 hover:text-slate-900 group">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600"
                  />
                  <span className="text-xs font-extrabold group-hover:text-blue-600 transition-colors">
                    ไม่ต้องแสดงคำแนะนำนี้อีกเมื่อเข้าใช้งานใหม่
                  </span>
                </label>

                {/* Action Buttons: Prev, Next / Finish */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  {!isFirstStep && (
                    <button
                      type="button"
                      onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>ย้อนกลับ</span>
                    </button>
                  )}

                  {!isLastStep ? (
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentStepIndex((prev) => Math.min(TUTORIAL_STEPS.length - 1, prev + 1))
                      }
                      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center gap-1 hover:scale-102"
                    >
                      <span>ถัดไป</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFinish}
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center gap-1 hover:scale-105"
                    >
                      <span>เริ่มใช้งานทันที 🚀</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
