'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ROOM_TYPES_DATA,
  SUBJECT_BREAKDOWNS,
  PREP_ROADMAP_DATA,
  SubjectExamBreakdown,
} from '@/lib/constants/examGuide';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Calendar,
  Compass,
  Award,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  Zap,
  Target,
  School,
  HeartHandshake,
  Brain,
  Calculator,
  Atom,
  Languages,
  BookMarked,
} from 'lucide-react';

interface ExamStrategicGuideProps {
  initialTab?: 'things-to-know' | 'subject-breakdown' | 'roadmap';
  initialSubject?: string;
  className?: string;
}

export const ExamStrategicGuide: React.FC<ExamStrategicGuideProps> = ({
  initialTab = 'things-to-know',
  initialSubject = 'math',
  className = '',
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'things-to-know' | 'subject-breakdown' | 'roadmap'>(
    initialTab
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubject);

  const selectedSubject: SubjectExamBreakdown =
    SUBJECT_BREAKDOWNS[selectedSubjectId] || SUBJECT_BREAKDOWNS['math'];

  const subjectIconMap: Record<string, any> = {
    math: Calculator,
    science: Atom,
    thai: BookMarked,
    english: Languages,
    social: Compass,
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 ${className}`}>
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>เจาะลึกข้อสอบเข้า ม.1 โรงเรียนแข่งขันสูง & คู่มือผู้ปกครอง</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            สิ่งที่น้อง ป.6 & ผู้ปกครองต้องรู้ก่อนเตรียมตัวสอบเข้า ม.1
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            วิเคราะห์ข้อสอบเชิงลึก 5 วิชาหลัก โดยทีมพี่ ๆ ติวเตอร์ผู้เชี่ยวชาญ พร้อมแผนที่ Roadmap สู่ความสำเร็จ
          </p>
        </div>

        {/* 3 Main Mode Selectors */}
        <div className="flex items-center p-1 bg-slate-100 rounded-2xl shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveMainTab('things-to-know')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeMainTab === 'things-to-know'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>3 สิ่งที่ต้องรู้ก่อนสอบ</span>
          </button>
          <button
            onClick={() => setActiveMainTab('subject-breakdown')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeMainTab === 'subject-breakdown'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>เจาะลึก 5 วิชาหลัก</span>
          </button>
          <button
            onClick={() => setActiveMainTab('roadmap')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeMainTab === 'roadmap'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>แผน Roadmap ป.6</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 3 Things to Know */}
      {activeMainTab === 'things-to-know' && (
        <div className="space-y-6 animate-in fade-in-50 duration-300">
          {/* Pillar 1: Environment & Teen Transition */}
          <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/70 rounded-2xl p-5 sm:p-6 border border-blue-100/80 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                การเปลี่ยนแปลงด้านการเรียนและสภาพแวดล้อม (ก้าวข้ามสู่วัยรุ่น)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
              การเลื่อนชั้นสู่ระดับ ม.1 เนื้อหาจะเข้มข้นและมีวิชาเรียนย่อยเพิ่มขึ้นอย่างก้าวกระโดด สังคมเพื่อนและสิ่งแวดล้อมจะกว้างขึ้น
              ผู้ปกครองมีบทบาทสำคัญอย่างยิ่งในการสังเกตพฤติกรรม รับฟัง และสนับสนุนกำลังใจ เพื่อให้น้อง ๆ ก้าวสู่รั้วมัธยมได้อย่างราบรื่นและมั่นใจ
            </p>
          </div>

          {/* Pillar 2: Room Types Comparison */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                เลือกประเภทห้องเรียนให้ตรงกับเป้าหมายอนาคต
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {ROOM_TYPES_DATA.map((room) => (
                <div
                  key={room.type}
                  className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        {room.tag}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {room.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs">
                    <div>
                      <span className="font-bold text-slate-700">จุดเน้น: </span>
                      <span className="text-slate-600">{room.focusSubjects}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-700">ข้อได้เปรียบ: </span>
                      <span className="text-slate-600">{room.pros}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 3: 5 Core Subjects Overview */}
          <div className="bg-amber-50/60 rounded-2xl p-5 sm:p-6 border border-amber-200/70 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                สัดส่วน 5 วิชาหลักในการสอบเข้า ม.1
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9 mb-3">
              โดยทั่วไปการสอบเข้า ม.1 จะสอบ 5 วิชาหลัก (คณิตศาสตร์, วิทยาศาสตร์, ภาษาไทย, ภาษาอังกฤษ, สังคมศึกษา)
              แต่สัดส่วนน้ำหนักคะแนนจะปรับตามประเภทห้องเรียน เช่น ห้อง Gifted จะเทน้ำหนักคะแนนคณิตศาสตร์และวิทยาศาสตร์สูงถึง 70-80%
            </p>
            <div className="pl-9">
              <button
                onClick={() => setActiveMainTab('subject-breakdown')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors shadow-xs"
              >
                <span>ดูเจาะลึกบทออกสอบ 5 วิชาหลัก</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 5 Subject In-Depth Breakdown */}
      {activeMainTab === 'subject-breakdown' && (
        <div className="space-y-6 animate-in fade-in-50 duration-300">
          {/* Subject Pills */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
            {Object.keys(SUBJECT_BREAKDOWNS).map((subjKey) => {
              const item = SUBJECT_BREAKDOWNS[subjKey];
              const IconComp = subjectIconMap[subjKey] || Calculator;
              const isSelected = selectedSubjectId === subjKey;

              return (
                <button
                  key={subjKey}
                  onClick={() => setSelectedSubjectId(subjKey)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-102'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <IconComp className="w-4 h-4" style={{ color: isSelected ? '#60A5FA' : item.color }} />
                  <span>{item.subjectName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Subject Detail */}
          <div className="space-y-6">
            {/* Tutor Quote & Analysis Box */}
            <div
              className="p-5 sm:p-6 rounded-2xl border space-y-3"
              style={{
                backgroundColor: selectedSubject.bgColor,
                borderColor: selectedSubject.borderColor,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  <Award className="w-4 h-4" style={{ color: selectedSubject.color }} />
                  <span>บทวิเคราะห์เจาะลึก: {selectedSubject.tutorName}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                  {selectedSubject.tutorTitle}
                </span>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-800 leading-relaxed italic font-medium">
                "{selectedSubject.tutorQuote}"
              </blockquote>
            </div>

            {/* Key Advice Bullets */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 space-y-3 shadow-2xs">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>จุดเน้นและข้อแนะนำสำคัญในการสอบวิชา{selectedSubject.subjectName}:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {selectedSubject.keyAdvice.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Must-Know Topics Checklist */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span>หัวข้อที่มักออกสอบบ่อยในวิชา{selectedSubject.subjectName} ({selectedSubject.mustKnowTopics.length} หมวด):</span>
                </h4>
                <span className="text-xs text-slate-500">เรียงตามระดับความสำคัญ</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedSubject.mustKnowTopics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-xl border border-slate-200/70 bg-white hover:border-slate-300 transition-all flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                        <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 text-[11px] flex items-center justify-center font-extrabold shrink-0">
                          {tIdx + 1}
                        </span>
                        <span>{topic.title}</span>
                      </div>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                          topic.importance === 'critical'
                            ? 'bg-rose-100 text-rose-700'
                            : topic.importance === 'high'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {topic.importance === 'critical' ? 'ห้ามพลาด' : topic.importance === 'high' ? 'ออกบ่อย' : 'พื้นฐาน'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 pl-7">{topic.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar: Direct Link to Practice This Subject */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs font-bold text-blue-400">พร้อมทดสอบทักษะแล้วหรือยัง?</div>
                <div className="text-sm font-extrabold">ฝึกทำข้อสอบวิชา{selectedSubject.subjectName} ในระบบ Tutor M.1 ทันที</div>
              </div>
              <Link
                href={`/subjects/${selectedSubject.id}`}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-xs shrink-0"
              >
                <span>เริ่มฝึกฝนวิชา{selectedSubject.subjectName}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Success Roadmap */}
      {activeMainTab === 'roadmap' && (
        <div className="space-y-6 animate-in fade-in-50 duration-300">
          <div className="space-y-4">
            {PREP_ROADMAP_DATA.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {step.phase}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700 self-start sm:self-auto">
                    {step.period}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 space-y-1.5">
                    <div className="font-extrabold text-blue-700 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      <span>สำหรับน้อง ๆ นักเรียน:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{step.studentFocus}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 space-y-1.5">
                    <div className="font-extrabold text-purple-700 flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4" />
                      <span>สำหรับผู้ปกครอง:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{step.parentFocus}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-700">Checklist ภารกิจในระยะนี้:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {step.checklist.map((chk, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
