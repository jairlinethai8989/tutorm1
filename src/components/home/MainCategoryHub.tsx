'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SubjectCard } from './SubjectCard';
import { getSubjects, getMockExams } from '@/lib/data-loader';
import { ALL_TEMPLATES } from '@/lib/template-engine';
import {
  BookOpen,
  Clock,
  Sparkles,
  ArrowRight,
  Calculator,
  Atom,
  Languages,
  BookMarked,
  Compass,
  Zap,
  Variable,
  Shapes,
  FileQuestion,
  BarChart2,
  ChevronRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';

type MainCategory = 'subjects' | 'mock-exam' | 'ai-practice';

export const MainCategoryHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MainCategory>('subjects');

  const subjects = getSubjects();
  const mockExams = getMockExams();

  const mathTemplates = ALL_TEMPLATES.filter((t) => t.subjectId === 'math');
  const sciTemplates = ALL_TEMPLATES.filter((t) => t.subjectId === 'science');

  const aiCategories = [
    {
      id: 'math-arithmetic',
      name: 'จำนวนและการคำนวณ',
      icon: Calculator,
      count: '5 รูปแบบ',
      desc: 'ห.ร.ม., ค.ร.น., การบวกเศษส่วน, สัดส่วน, ตัวประกอบเฉพาะ',
      color: '#3B82F6',
      href: '/practice/math-arithmetic',
    },
    {
      id: 'math-algebra',
      name: 'พีชคณิตและสมการ',
      icon: Variable,
      count: '5 รูปแบบ',
      desc: 'สมการเชิงเส้น, ระบบสมการ 2 ตัวแปร, ลำดับเลขคณิต, สมการอายุ',
      color: '#8B5CF6',
      href: '/practice/math-algebra',
    },
    {
      id: 'math-geometry',
      name: 'เรขาคณิตและมิติสัมพันธ์',
      icon: Shapes,
      count: '8 รูปแบบ',
      desc: 'พื้นที่สามเหลี่ยม/คางหมู, วงกลม, วงแหวน, พีทาโกรัส, ปริมาตร',
      color: '#EC4899',
      href: '/practice/math-geometry',
    },
    {
      id: 'math-word-problems',
      name: 'โจทย์ปัญหาและการประยุกต์',
      icon: FileQuestion,
      count: '5 รูปแบบ',
      desc: 'ร้อยละ, กำไร-ขาดทุน, ส่วนลด, อัตราเร็ว s=vt, งานร่วมกัน',
      color: '#F59E0B',
      href: '/practice/math-word-problems',
    },
    {
      id: 'math-statistics',
      name: 'สถิติและความน่าจะเป็น',
      icon: BarChart2,
      count: '4 รูปแบบ',
      desc: 'ค่าเฉลี่ย, มัธยฐาน, ความน่าจะเป็นลูกบอล/ลูกเต๋า',
      color: '#10B981',
      href: '/practice/math-statistics',
    },
    {
      id: 'sci-physics',
      name: 'วิทยาศาสตร์และฟิสิกส์คำนวณ',
      icon: Zap,
      count: '6 รูปแบบ',
      desc: 'กฎของโอห์ม V=IR, วงจรอนุกรม/ขนาน, ค่าไฟ, ความหนาแน่น, งาน W=Fs',
      color: '#EF4444',
      href: '/practice/sci-physics',
    },
  ];

  return (
    <section className="space-y-8 mb-16">
      {/* 3 Master Category Switcher Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              เลือกโหมดการฝึกฝนหลัก:
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            (คลิกเพื่อสลับหมวดหมู่ย่อย)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Tab 1: 5 Core Subjects */}
          <button
            onClick={() => setActiveCategory('subjects')}
            className={`group relative p-5 rounded-3xl text-left border-2 transition-all flex flex-col justify-between ${
              activeCategory === 'subjects'
                ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20 scale-[1.02]'
                : 'bg-white border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 text-slate-800 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between w-full mb-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  activeCategory === 'subjects'
                    ? 'bg-white/20 text-white'
                    : 'bg-blue-50 text-blue-600'
                }`}
              >
                <BookOpen className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                  activeCategory === 'subjects'
                    ? 'bg-white/20 text-blue-100'
                    : 'bg-blue-50 text-blue-700'
                }`}
              >
                500+ ข้อจริง
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold">1. หมวดฝึกหัด 5 วิชาหลัก</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  activeCategory === 'subjects' ? 'text-blue-100' : 'text-slate-500'
                }`}
              >
                คลังข้อสอบจริง ครอบคลุมคณิต วิทย์ อังกฤษ ไทย สังคม พร้อมเฉลยละเอียด
              </p>
            </div>
          </button>

          {/* Tab 2: Mock Exam Simulation */}
          <button
            onClick={() => setActiveCategory('mock-exam')}
            className={`group relative p-5 rounded-3xl text-left border-2 transition-all flex flex-col justify-between ${
              activeCategory === 'mock-exam'
                ? 'bg-violet-700 border-violet-700 text-white shadow-xl shadow-violet-500/20 scale-[1.02]'
                : 'bg-white border-slate-200/80 hover:border-violet-300 hover:bg-violet-50/30 text-slate-800 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between w-full mb-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  activeCategory === 'mock-exam'
                    ? 'bg-white/20 text-white'
                    : 'bg-violet-50 text-violet-600'
                }`}
              >
                <Clock className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                  activeCategory === 'mock-exam'
                    ? 'bg-white/20 text-violet-100'
                    : 'bg-violet-50 text-violet-700'
                }`}
              >
                10+ ชุดโรงเรียนดัง
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold">2. จำลองสอบเสมือนจริง</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  activeCategory === 'mock-exam' ? 'text-violet-100' : 'text-slate-500'
                }`}
              >
                จับเวลาจริง มีกระดาษคำตอบดิจิทัล และเกณฑ์ผ่านของสนามสอบดัง
              </p>
            </div>
          </button>

          {/* Tab 3: AI Practice */}
          <button
            onClick={() => setActiveCategory('ai-practice')}
            className={`group relative p-5 rounded-3xl text-left border-2 transition-all flex flex-col justify-between ${
              activeCategory === 'ai-practice'
                ? 'bg-purple-700 border-purple-700 text-white shadow-xl shadow-purple-500/20 scale-[1.02]'
                : 'bg-white border-slate-200/80 hover:border-purple-300 hover:bg-purple-50/30 text-slate-800 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between w-full mb-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  activeCategory === 'ai-practice'
                    ? 'bg-white/20 text-white'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                  activeCategory === 'ai-practice'
                    ? 'bg-white/20 text-purple-100'
                    : 'bg-purple-50 text-purple-700'
                }`}
              >
                33 แบบ สุ่มไม่จำกัด
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold">3. หมวด AI Practice</h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  activeCategory === 'ai-practice' ? 'text-purple-100' : 'text-slate-500'
                }`}
              >
                สุ่มโจทย์และตัวเลขใหม่แบบไดนามิก ฝึกคิดคำนวณซ้ำไม่จำกัดชุด 0 บาท
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Sub-menu Content Sections (Revealed smoothly based on Active Category) */}
      <div className="pt-2 animate-in fade-in duration-300">
        {/* VIEW 1: 5 Core Subjects */}
        {activeCategory === 'subjects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>หมวดฝึกหัด 5 วิชาหลัก (คลังข้อสอบจริง)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  เลือกวิชาเพื่อดูรายละเอียดหมวดความรู้ย่อย และเริ่มฝึกทำข้อสอบ
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Mock Exam Simulation */}
        {activeCategory === 'mock-exam' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200 gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-violet-600" />
                  <span>หมวดระบบจำลองสอบเสมือนจริง (Timed Mock Exam)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  จับเวลาตามสนามสอบจริง พร้อมระบบตรวจคะแนนและวิเคราะห์จุดอ่อนอัตโนมัติ
                </p>
              </div>
              <Link
                href="/mock-exam"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700"
              >
                <span>ดูห้องสอบทั้งหมด</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {mockExams.map((exam) => (
                <div
                  key={exam.id}
                  className="group bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs hover:shadow-xl hover:border-violet-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="text-xs font-extrabold px-3 py-1 rounded-full text-white shadow-xs"
                        style={{ backgroundColor: exam.badgeColor }}
                      >
                        {exam.targetSchool}
                      </span>

                      <span className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {exam.timeLimitMinutes} นาที
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-1.5">
                      {exam.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {exam.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-5">
                      <div>
                        ข้อสอบ: <span className="font-bold text-slate-900">{exam.totalQuestions} ข้อ</span>
                      </div>
                      <div>•</div>
                      <div>
                        เกณฑ์ผ่าน: <span className="font-bold text-emerald-600">{exam.passingScorePercent}%</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/mock-exam/${exam.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-violet-600 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <span>เริ่มสอบจำลอง</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: AI Practice (Dynamic Templates) */}
        {activeCategory === 'ai-practice' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200 gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span>หมวด AI Practice (สุ่มโจทย์ไดนามิก 33 รูปแบบ 0 บาท)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  สุ่มตัวเลขและตัวเลือกใหม่ทุกครั้ง ฝึกคิดคำนวณซ้ำไม่จำกัดรอบ
                </p>
              </div>
              <Link
                href="/practice"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>สุ่มรวมทุกหมวด (Infinite Pool)</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.id}
                    className="bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div
                          className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-xs"
                          style={{ backgroundColor: cat.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                          {cat.count}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        {cat.name}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {cat.desc}
                      </p>
                    </div>

                    <Link
                      href={cat.href}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold text-xs border border-purple-200/80 transition-all group"
                    >
                      <span>สุ่มฝึกหมวดนี้</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
