'use client';

import React, { useState, useEffect } from 'react';
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
  ChevronDown,
  ChevronUp,
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
  MapPin,
  Flag,
  CheckSquare,
  Square,
  Trophy,
} from 'lucide-react';

interface ExamStrategicGuideProps {
  initialTab?: 'things-to-know' | 'subject-breakdown' | 'roadmap';
  initialSubject?: string;
  defaultCollapsed?: boolean;
  className?: string;
}

const STORAGE_KEY = 'tutor_m1_roadmap_checklist_v1';

export const ExamStrategicGuide: React.FC<ExamStrategicGuideProps> = ({
  initialTab = 'roadmap',
  initialSubject = 'math',
  defaultCollapsed = false,
  className = '',
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
  const [activeMainTab, setActiveMainTab] = useState<'things-to-know' | 'subject-breakdown' | 'roadmap'>(
    initialTab
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubject);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load checked roadmap items from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Toggle checklist item
  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Calculate total roadmap progress
  const totalTasks = PREP_ROADMAP_DATA.reduce((acc, step) => acc + step.checklist.length, 0);
  const completedTasks = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

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
    <div className={`bg-white rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 overflow-hidden ${className}`}>
      {/* Header Bar with Quick Collapse / Expand Toggle */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 cursor-pointer select-none" onClick={() => setIsCollapsed(!isCollapsed)}>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>เจาะลึกข้อสอบเข้า ม.1 โรงเรียนแข่งขันสูง & คู่มือผู้ปกครอง</span>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
              คู่มือกลยุทธ์สอบเข้า ม.1 & แผนการเดินทางสู่ความสำเร็จ
            </h2>
            <span className="text-xs text-blue-300 font-medium">
              {isCollapsed ? '(คลิกเพื่อขยาย)' : '(คลิกเพื่อย่อ)'}
            </span>
          </div>
        </div>

        {/* 3 Main Mode Selectors & Collapse Button */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="flex items-center p-1 bg-white/10 backdrop-blur-md rounded-2xl shrink-0 overflow-x-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCollapsed(false);
                setActiveMainTab('roadmap');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                !isCollapsed && activeMainTab === 'roadmap'
                  ? 'bg-white text-slate-900 shadow-xs scale-102'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>เส้นทาง Roadmap</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCollapsed(false);
                setActiveMainTab('subject-breakdown');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                !isCollapsed && activeMainTab === 'subject-breakdown'
                  ? 'bg-white text-slate-900 shadow-xs scale-102'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-blue-400" />
              <span>เจาะลึก 5 วิชา</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCollapsed(false);
                setActiveMainTab('things-to-know');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                !isCollapsed && activeMainTab === 'things-to-know'
                  ? 'bg-white text-slate-900 shadow-xs scale-102'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              <span>3 สิ่งที่ต้องรู้</span>
            </button>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            title={isCollapsed ? 'ขยายคู่มือ' : 'ย่อคู่มือ'}
          >
            {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Collapsed Preview Summary */}
      {isCollapsed && (
        <div
          onClick={() => setIsCollapsed(false)}
          className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 cursor-pointer hover:bg-slate-100/80 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-800">
              📊 ความคืบหน้าเส้นทางเตรียมตัวสอบ: {completedTasks}/{totalTasks} ภารกิจ ({progressPercent}%)
            </span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden hidden sm:block">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-1 text-blue-600 font-bold">
            <span>เปิดอ่านเจาะลึก 5 วิชา & แผนที่ Roadmap</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Expanded Main Content Body */}
      {!isCollapsed && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* TAB 1: Roadmap as Interactive Learning Road / Path */}
          {activeMainTab === 'roadmap' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300">
              {/* Progress Summary Header */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                    <Trophy className="w-4 h-4 text-emerald-600" />
                    <span>เส้นทางสู่ความสำเร็จ (Learning Journey Progress)</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-emerald-950">
                    พิชิตไปแล้ว {completedTasks} จากทั้งหมด {totalTasks} ภารกิจ ({progressPercent}%)
                  </div>
                </div>

                <div className="w-full sm:w-64 space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-emerald-800">
                    <span>ความพร้อมสอบ</span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="w-full h-3 bg-emerald-200/60 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-500 shadow-xs"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Connected Roadmap Road Journey */}
              <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-blue-600 before:via-purple-600 before:to-emerald-600 before:rounded-full">
                {PREP_ROADMAP_DATA.map((step, idx) => {
                  const stepTaskIds = step.checklist.map((_, cIdx) => `step-${idx}-task-${cIdx}`);
                  const stepCompletedCount = stepTaskIds.filter((id) => checkedItems[id]).length;
                  const isStepFullyDone = stepCompletedCount === step.checklist.length && step.checklist.length > 0;

                  return (
                    <div key={idx} className="relative group">
                      {/* Milestone Pin on the Road */}
                      <div
                        className={`absolute -left-6 sm:-left-10 top-0 w-7 sm:w-9 h-7 sm:h-9 rounded-2xl flex items-center justify-center font-extrabold text-xs sm:text-sm border-2 shadow-md transition-all ${
                          isStepFullyDone
                            ? 'bg-emerald-600 text-white border-white scale-110 ring-4 ring-emerald-100'
                            : 'bg-white text-blue-600 border-blue-600 ring-4 ring-slate-100'
                        }`}
                      >
                        {isStepFullyDone ? <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5" /> : idx + 1}
                      </div>

                      {/* Milestone Card */}
                      <div
                        className={`bg-slate-50/90 rounded-3xl p-5 sm:p-6 border transition-all duration-200 space-y-4 hover:shadow-md ${
                          isStepFullyDone ? 'border-emerald-300 bg-emerald-50/30' : 'border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {/* Milestone Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                จุดแวะพักที่ {idx + 1}
                              </span>
                              <span className="text-xs text-slate-500 font-bold">
                                {stepCompletedCount}/{step.checklist.length} ภารกิจสำเร็จ
                              </span>
                            </div>
                            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                              {step.phase}
                            </h3>
                          </div>
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-800 self-start sm:self-auto shrink-0 shadow-2xs">
                            {step.period}
                          </span>
                        </div>

                        {/* Dual Role Focus Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
                            <div className="font-extrabold text-blue-700 flex items-center gap-1.5">
                              <GraduationCap className="w-4 h-4" />
                              <span>สำหรับน้อง ๆ นักเรียน:</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{step.studentFocus}</p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
                            <div className="font-extrabold text-purple-700 flex items-center gap-1.5">
                              <HeartHandshake className="w-4 h-4" />
                              <span>สำหรับผู้ปกครอง:</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{step.parentFocus}</p>
                          </div>
                        </div>

                        {/* Interactive Checklist */}
                        <div className="space-y-2 pt-1">
                          <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                            <CheckSquare className="w-3.5 h-3.5 text-blue-600" />
                            <span>Checklist กิจกรรมที่ต้องทำให้สำเร็จ (คลิกเพื่อเช็คถูก):</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.checklist.map((chk, cIdx) => {
                              const taskId = `step-${idx}-task-${cIdx}`;
                              const isChecked = Boolean(checkedItems[taskId]);

                              return (
                                <button
                                  key={cIdx}
                                  type="button"
                                  onClick={() => toggleCheckItem(taskId)}
                                  className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-all cursor-pointer ${
                                    isChecked
                                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold line-through decoration-emerald-600/40'
                                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                                  }`}
                                >
                                  <div className="mt-0.5 shrink-0">
                                    {isChecked ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                                    ) : (
                                      <Square className="w-4 h-4 text-slate-400" />
                                    )}
                                  </div>
                                  <span className="leading-snug">{chk}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Final Destination Goal Badge */}
                <div className="relative pl-0">
                  <div className="absolute -left-6 sm:-left-10 top-1 w-7 sm:w-9 h-7 sm:h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg border-2 border-white ring-4 ring-amber-100">
                    <Flag className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-3xl p-5 sm:p-6 shadow-md space-y-1">
                    <h4 className="font-extrabold text-base sm:text-lg">
                      🎯 ปลายทางแห่งชัยชนะ: สอบติดห้องเรียนในฝัน ม.1
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-100">
                      เมื่อเดินครบทุกก้าวตาม Roadmap น้อง ๆ จะมีความพร้อมทั้งด้านความรู้ ทักษะทำโจทย์ และสมาธิ 100%
                    </p>
                  </div>
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
                      className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-102'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
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
                    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-xs shrink-0 cursor-pointer"
                  >
                    <span>เริ่มฝึกฝนวิชา{selectedSubject.subjectName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 3 Things to Know */}
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>ดูเจาะลึกบทออกสอบ 5 วิชาหลัก</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
