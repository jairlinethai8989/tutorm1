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
  Layers,
} from 'lucide-react';

type MainCategory = 'subjects' | 'mock-exam' | 'ai-practice';

export const MainCategoryHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MainCategory>('subjects');

  const subjects = getSubjects();
  const mockExams = getMockExams();

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
    <section className="space-y-6 mb-12">
      {/* Section Header & Floating 3 Master Category Switcher Buttons */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
              เลือกโหมดการฝึกฝนหลัก (3 โหมดอัจฉริยะ):
            </span>
          </div>
          <span className="text-xs text-blue-600 font-bold hidden sm:inline">
            ✨ ชี้และคลิกเพื่อเปลี่ยนโหมด
          </span>
        </div>

        {/* 3 Floating Category Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Tab 1: 5 Core Subjects */}
          <button
            onClick={() => setActiveCategory('subjects')}
            className={`group relative p-5 sm:p-6 rounded-3xl text-left border-2 transition-all duration-300 transform flex flex-col justify-between cursor-pointer select-none ${
              activeCategory === 'subjects'
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-500 text-white shadow-xl shadow-blue-500/25 -translate-y-1.5 ring-4 ring-blue-100'
                : 'bg-white border-slate-200/90 text-slate-800 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 hover:bg-blue-50/20 active:translate-y-0'
            }`}
          >
            <div className="flex items-start justify-between w-full mb-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                  activeCategory === 'subjects'
                    ? 'bg-white/20 text-white scale-105'
                    : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110'
                }`}
              >
                <BookOpen className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-extrabold px-3 py-1 rounded-full transition-colors ${
                  activeCategory === 'subjects'
                    ? 'bg-white/20 text-blue-100 border border-white/20'
                    : 'bg-blue-50 text-blue-700 group-hover:bg-blue-100'
                }`}
              >
                500+ ข้อจริง
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold">1. หมวดฝึกหัด 5 วิชาหลัก</h3>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeCategory === 'subjects' ? 'translate-x-1 text-blue-200' : 'text-slate-400 group-hover:translate-x-1'
                  }`}
                />
              </div>
              <p
                className={`text-xs leading-relaxed ${
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
            className={`group relative p-5 sm:p-6 rounded-3xl text-left border-2 transition-all duration-300 transform flex flex-col justify-between cursor-pointer select-none ${
              activeCategory === 'mock-exam'
                ? 'bg-gradient-to-br from-violet-700 to-purple-800 border-violet-500 text-white shadow-xl shadow-violet-500/25 -translate-y-1.5 ring-4 ring-violet-100'
                : 'bg-white border-slate-200/90 text-slate-800 shadow-sm hover:shadow-xl hover:border-violet-400 hover:-translate-y-1.5 hover:bg-violet-50/20 active:translate-y-0'
            }`}
          >
            <div className="flex items-start justify-between w-full mb-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                  activeCategory === 'mock-exam'
                    ? 'bg-white/20 text-white scale-105'
                    : 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110'
                }`}
              >
                <Clock className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-extrabold px-3 py-1 rounded-full transition-colors ${
                  activeCategory === 'mock-exam'
                    ? 'bg-white/20 text-violet-100 border border-white/20'
                    : 'bg-violet-50 text-violet-700 group-hover:bg-violet-100'
                }`}
              >
                10+ ชุดโรงเรียนดัง
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold">2. จำลองสอบเสมือนจริง</h3>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeCategory === 'mock-exam' ? 'translate-x-1 text-violet-200' : 'text-slate-400 group-hover:translate-x-1'
                  }`}
                />
              </div>
              <p
                className={`text-xs leading-relaxed ${
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
            className={`group relative p-5 sm:p-6 rounded-3xl text-left border-2 transition-all duration-300 transform flex flex-col justify-between cursor-pointer select-none ${
              activeCategory === 'ai-practice'
                ? 'bg-gradient-to-br from-purple-700 to-fuchsia-800 border-purple-500 text-white shadow-xl shadow-purple-500/25 -translate-y-1.5 ring-4 ring-purple-100'
                : 'bg-white border-slate-200/90 text-slate-800 shadow-sm hover:shadow-xl hover:border-purple-400 hover:-translate-y-1.5 hover:bg-purple-50/20 active:translate-y-0'
            }`}
          >
            <div className="flex items-start justify-between w-full mb-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                  activeCategory === 'ai-practice'
                    ? 'bg-white/20 text-white scale-105'
                    : 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110'
                }`}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <span
                className={`text-[11px] font-extrabold px-3 py-1 rounded-full transition-colors ${
                  activeCategory === 'ai-practice'
                    ? 'bg-white/20 text-purple-100 border border-white/20'
                    : 'bg-purple-50 text-purple-700 group-hover:bg-purple-100'
                }`}
              >
                33 แบบ สุ่มไม่จำกัด
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold">3. หมวด AI Practice</h3>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeCategory === 'ai-practice' ? 'translate-x-1 text-purple-200' : 'text-slate-400 group-hover:translate-x-1'
                  }`}
                />
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  activeCategory === 'ai-practice' ? 'text-purple-100' : 'text-slate-500'
                }`}
              >
                สุ่มโจทย์และตัวเลขใหม่แบบไดนามิก ฝึกคิดคำนวณซ้ำไม่จำกัดชุด
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
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
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
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-violet-600" />
                  <span>หมวดระบบจำลองสอบเสมือนจริง (Timed Mock Exam)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  จับเวลาตามสนามสอบจริง พร้อมระบบตรวจคะแนนและวิเคราะห์จุดอ่อนอัตโนมัติ
                </p>
              </div>
              <Link
                href="/mock-exam"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700 cursor-pointer"
              >
                <span>ดูห้องสอบทั้งหมด</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {mockExams.map((exam) => (
                <div
                  key={exam.id}
                  className="group bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-violet-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
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
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-violet-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer"
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
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span>หมวด AI Practice (สุ่มโจทย์ไดนามิก 33 รูปแบบ)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  สุ่มตัวเลขและตัวเลือกใหม่ทุกครั้ง ฝึกคิดคำนวณซ้ำไม่จำกัดรอบ
                </p>
              </div>
              <Link
                href="/practice"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all hover:shadow-md cursor-pointer"
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
                    className="bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
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
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold text-xs border border-purple-200/80 transition-all group cursor-pointer"
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
