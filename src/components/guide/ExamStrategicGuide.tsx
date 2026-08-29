'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ChevronLeft,
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
  Printer,
  Edit3,
  Check,
  RotateCcw,
  Medal,
  Share2,
  Crown,
  Star,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  getUserProfileName,
  getActiveStudentProfile,
  saveUserProfileName,
} from '@/lib/storage';

interface ExamStrategicGuideProps {
  initialTab?: 'things-to-know' | 'subject-breakdown' | 'roadmap';
  initialSubject?: string;
  defaultCollapsed?: boolean;
  className?: string;
}

const STORAGE_KEY = 'tutor_m1_roadmap_checklist_v1';

// Distinct smooth gradient themes for each phase + destination
const ROADMAP_PHASE_THEMES = [
  {
    idx: 0,
    name: 'ระยะที่ 1',
    shortPhase: 'ปูพื้นฐาน 5 วิชาหลัก',
    gradient: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50/70',
    border: 'border-blue-200',
    activeBorder: 'border-blue-500',
    ring: 'ring-blue-500/25',
    badgeBg: 'bg-blue-100 text-blue-800',
    accentText: 'text-blue-600',
    progressBar: 'bg-blue-600',
    bannerGradient: 'from-blue-50 via-indigo-50 to-blue-50',
    cardBorder: 'border-blue-200',
  },
  {
    idx: 1,
    name: 'ระยะที่ 2',
    shortPhase: 'ตะลุยโจทย์แยกบท',
    gradient: 'from-teal-500 to-emerald-600',
    lightBg: 'bg-teal-50/70',
    border: 'border-teal-200',
    activeBorder: 'border-teal-500',
    ring: 'ring-teal-500/25',
    badgeBg: 'bg-teal-100 text-teal-800',
    accentText: 'text-teal-600',
    progressBar: 'bg-teal-500',
    bannerGradient: 'from-teal-50 via-emerald-50 to-teal-50',
    cardBorder: 'border-teal-200',
  },
  {
    idx: 2,
    name: 'ระยะที่ 3',
    shortPhase: 'ลงสนามสอบ Pre-Test',
    gradient: 'from-purple-600 to-violet-600',
    lightBg: 'bg-purple-50/70',
    border: 'border-purple-200',
    activeBorder: 'border-purple-500',
    ring: 'ring-purple-500/25',
    badgeBg: 'bg-purple-100 text-purple-800',
    accentText: 'text-purple-600',
    progressBar: 'bg-purple-600',
    bannerGradient: 'from-purple-50 via-violet-50 to-purple-50',
    cardBorder: 'border-purple-200',
  },
  {
    idx: 3,
    name: 'ระยะที่ 4',
    shortPhase: 'โค้งสุดท้ายก่อนสอบ',
    gradient: 'from-rose-500 to-orange-500',
    lightBg: 'bg-rose-50/70',
    border: 'border-rose-200',
    activeBorder: 'border-rose-500',
    ring: 'ring-rose-500/25',
    badgeBg: 'bg-rose-100 text-rose-800',
    accentText: 'text-rose-600',
    progressBar: 'bg-rose-500',
    bannerGradient: 'from-rose-50 via-orange-50 to-rose-50',
    cardBorder: 'border-rose-200',
  },
  {
    idx: 4,
    name: 'ปลายทางชัยชนะ',
    shortPhase: 'สอบติดห้องเรียน ม.1',
    gradient: 'from-amber-400 via-orange-500 to-amber-600',
    lightBg: 'bg-amber-50/80',
    border: 'border-amber-300',
    activeBorder: 'border-amber-500',
    ring: 'ring-amber-500/25',
    badgeBg: 'bg-amber-100 text-amber-900',
    accentText: 'text-amber-600',
    progressBar: 'bg-amber-500',
    bannerGradient: 'from-amber-50 via-orange-50 to-yellow-50',
    cardBorder: 'border-amber-300',
  },
];

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
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({ 0: true });
  const [activeRoadmapStep, setActiveRoadmapStep] = useState<number>(0);
  const [studentName, setStudentName] = useState<string>('น้องนักเรียน ป.6');
  const [targetSchoolName, setTargetSchoolName] = useState<string>('โรงเรียนห้องเรียนพิเศษ ม.1 ในฝัน');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [tempNameInput, setTempNameInput] = useState<string>('');

  // Load checked roadmap items & student profile dynamically from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }

    const loadProfileData = () => {
      try {
        const profile = getActiveStudentProfile();
        const storedName = getUserProfileName();
        if (profile && profile.name) {
          setStudentName(profile.name);
          setTempNameInput(profile.name);
          if (profile.targetSchool) {
            setTargetSchoolName(profile.targetSchool);
          }
        } else if (storedName) {
          setStudentName(storedName);
          setTempNameInput(storedName);
        }
      } catch {
        // ignore
      }
    };

    loadProfileData();
    window.addEventListener('tutor_m1_student_profile_changed', loadProfileData);
    return () => {
      window.removeEventListener('tutor_m1_student_profile_changed', loadProfileData);
    };
  }, []);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#F59E0B', '#10B981', '#3B82F6'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8B5CF6', '#EC4899', '#F59E0B'],
        });
      }, 250);
    } catch {
      // ignore
    }
  };

  const toggleStepExpand = (stepIdx: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepIdx]: prev[stepIdx] !== undefined ? !prev[stepIdx] : false,
    }));
  };

  // Toggle checklist item
  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      const count = Object.values(next).filter(Boolean).length;
      if (count === totalTasks && totalTasks > 0) {
        triggerCelebration();
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
              {/* Unified Master Progress Header & Continuous Full-Width Timeline Track */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200 shadow-sm space-y-4">
                {/* Header Info & Prev/Next Controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-xs font-extrabold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span>เส้นทางสู่ความสำเร็จ (Learning Journey Progress)</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      พิชิตไปแล้ว <span className="text-blue-600 font-extrabold">{completedTasks}</span> จากทั้งหมด{' '}
                      {totalTasks} ภารกิจ ({progressPercent}%)
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
                      {activeRoadmapStep < PREP_ROADMAP_DATA.length
                        ? `ระยะที่ ${activeRoadmapStep + 1} จาก ${PREP_ROADMAP_DATA.length}`
                        : '🎯 เป้าหมายปลายทาง'}
                    </span>

                    {/* Step Navigation Switcher */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveRoadmapStep((prev) => Math.max(0, prev - 1))}
                        disabled={activeRoadmapStep === 0}
                        className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-35 disabled:cursor-not-allowed text-slate-700 flex items-center gap-1 cursor-pointer transition-all shadow-2xs"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>ก่อนหน้า</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const nextStep = Math.min(PREP_ROADMAP_DATA.length, activeRoadmapStep + 1);
                          setActiveRoadmapStep(nextStep);
                          if (nextStep === PREP_ROADMAP_DATA.length) {
                            triggerCelebration();
                          }
                        }}
                        disabled={activeRoadmapStep === PREP_ROADMAP_DATA.length}
                        className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-35 disabled:cursor-not-allowed text-slate-700 flex items-center gap-1 cursor-pointer transition-all shadow-2xs"
                      >
                        <span>ถัดไป</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Continuous Master Progress Bar spanning across all phases */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>แถบความพร้อมสอบรวมทุกระยะ:</span>
                    </span>
                    <span className="text-blue-600 font-extrabold">{progressPercent}% พร้อมสอบ</span>
                  </div>

                  {/* Full-width continuous track */}
                  <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80 relative shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-teal-500 via-purple-500 via-rose-500 to-amber-500 transition-all duration-500 shadow-xs"
                      style={{ width: `${Math.max(4, progressPercent)}%` }}
                    />
                  </div>
                </div>

                {/* 5 Milestone Node Cards in Gradient Spectrum */}
                <div className="overflow-x-auto pb-1.5 pt-1 scrollbar-thin">
                  <div className="min-w-[660px] sm:min-w-0 grid grid-cols-5 gap-2.5 relative">
                    {PREP_ROADMAP_DATA.map((step, idx) => {
                      const theme = ROADMAP_PHASE_THEMES[idx];
                      const stepTaskIds = step.checklist.map((_, cIdx) => `step-${idx}-task-${cIdx}`);
                      const stepCompletedCount = stepTaskIds.filter((id) => checkedItems[id]).length;
                      const isStepFullyDone =
                        stepCompletedCount === step.checklist.length && step.checklist.length > 0;
                      const isSelected = activeRoadmapStep === idx;
                      const stepPercent =
                        step.checklist.length > 0
                          ? Math.round((stepCompletedCount / step.checklist.length) * 100)
                          : 0;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveRoadmapStep(idx)}
                          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between gap-2.5 ${
                            isSelected
                              ? `bg-white ${theme.activeBorder} shadow-md ring-2 ${theme.ring} scale-[1.02]`
                              : isStepFullyDone
                              ? `${theme.lightBg} ${theme.border} hover:shadow-xs`
                              : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1.5 w-full">
                            <div
                              className={`w-7 h-7 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 transition-all ${
                                isStepFullyDone
                                  ? 'bg-emerald-600 text-white shadow-xs'
                                  : isSelected
                                  ? `bg-gradient-to-r ${theme.gradient} text-white shadow-xs`
                                  : 'bg-slate-100 text-slate-600 border border-slate-200'
                              }`}
                            >
                              {isStepFullyDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                            </div>

                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                                isSelected ? theme.badgeBg : 'bg-slate-100 text-slate-600'
                              } shrink-0`}
                            >
                              {step.period.split(' ')[0]}
                            </span>
                          </div>

                          <div>
                            <div className="text-xs font-extrabold text-slate-900 line-clamp-1">
                              {theme.name}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 font-medium">
                              {theme.shortPhase}
                            </div>
                          </div>

                          {/* Mini Phase Progress Bar */}
                          <div className="w-full space-y-1 pt-1 border-t border-slate-100">
                            <div className="flex justify-between text-[10px] font-bold">
                              <span className={isStepFullyDone ? 'text-emerald-700' : 'text-slate-500'}>
                                {isStepFullyDone ? 'สำเร็จ 100%' : `${stepCompletedCount}/${step.checklist.length}`}
                              </span>
                              <span className="text-slate-400">{stepPercent}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  isStepFullyDone
                                    ? 'bg-emerald-500'
                                    : `bg-gradient-to-r ${theme.gradient}`
                                }`}
                                style={{ width: `${stepPercent}%` }}
                              />
                            </div>
                          </div>
                        </button>
                      );
                    })}

                    {/* Milestone 5: Final Destination / Victory Node */}
                    {(() => {
                      const destTheme = ROADMAP_PHASE_THEMES[4];
                      const isSelected = activeRoadmapStep === PREP_ROADMAP_DATA.length;
                      const isAllDone = progressPercent === 100;

                      return (
                        <button
                          type="button"
                          onClick={() => {
                            setActiveRoadmapStep(PREP_ROADMAP_DATA.length);
                            triggerCelebration();
                          }}
                          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between gap-2.5 ${
                            isSelected
                              ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white border-amber-500 shadow-md ring-2 ring-amber-400/40 scale-[1.02]'
                              : isAllDone
                              ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 hover:border-amber-400 text-slate-800'
                              : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1.5 w-full">
                            <div
                              className={`w-7 h-7 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 transition-all ${
                                isSelected
                                  ? 'bg-white text-orange-600 shadow-xs'
                                  : 'bg-amber-100 text-amber-800 border border-amber-200'
                              }`}
                            >
                              <Flag className="w-4 h-4" />
                            </div>
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                                isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              เป้าหมาย
                            </span>
                          </div>

                          <div>
                            <div
                              className={`text-xs font-extrabold line-clamp-1 ${
                                isSelected ? 'text-white' : 'text-slate-900'
                              }`}
                            >
                              ปลายทางชัยชนะ
                            </div>
                            <div
                              className={`text-[11px] line-clamp-1 ${
                                isSelected ? 'text-amber-100' : 'text-slate-500'
                              }`}
                            >
                              สอบติด ม.1
                            </div>
                          </div>

                          <div className="w-full pt-1 border-t border-amber-200/40 text-[10px] font-bold flex items-center justify-between">
                            <span className={isSelected ? 'text-amber-100' : 'text-amber-700'}>
                              {progressPercent}% พร้อม
                            </span>
                            <Trophy
                              className={`w-3.5 h-3.5 ${
                                isSelected ? 'text-amber-200' : 'text-amber-500'
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Selected Active Step Detailed Card (Phase 1-4) */}
              {activeRoadmapStep < PREP_ROADMAP_DATA.length ? (
                (() => {
                  const idx = activeRoadmapStep;
                  const step = PREP_ROADMAP_DATA[idx];
                  const theme = ROADMAP_PHASE_THEMES[idx];
                  const stepTaskIds = step.checklist.map((_, cIdx) => `step-${idx}-task-${cIdx}`);
                  const stepCompletedCount = stepTaskIds.filter((id) => checkedItems[id]).length;
                  const isStepFullyDone =
                    stepCompletedCount === step.checklist.length && step.checklist.length > 0;

                  const toggleAllStepTasks = (checkAll: boolean) => {
                    setCheckedItems((prev) => {
                      const next = { ...prev };
                      stepTaskIds.forEach((id) => {
                        next[id] = checkAll;
                      });
                      try {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                      } catch {
                        // ignore
                      }
                      return next;
                    });
                  };

                  return (
                    <div
                      key={idx}
                      className={`rounded-3xl p-5 sm:p-7 border transition-all duration-300 space-y-5 animate-in fade-in-50 ${
                        isStepFullyDone
                          ? 'bg-emerald-50/30 border-emerald-300 shadow-sm'
                          : `bg-white ${theme.cardBorder} shadow-sm`
                      }`}
                    >
                      {/* Step Header Banner */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-xs font-extrabold px-3 py-1 rounded-full bg-gradient-to-r ${theme.gradient} text-white shadow-xs flex items-center gap-1.5`}
                            >
                              <span>จุดแวะพักที่ {idx + 1} จาก 4</span>
                            </span>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                              🗓️ {step.period}
                            </span>
                            <span
                              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                isStepFullyDone
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200 font-extrabold'
                                  : `${theme.badgeBg} border ${theme.border}`
                              }`}
                            >
                              {isStepFullyDone
                                ? '🎉 ผ่านระยะนี้แล้ว 100%'
                                : `สำเร็จแล้ว ${stepCompletedCount}/${step.checklist.length} ภารกิจ`}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                            {step.phase}
                          </h3>
                        </div>

                        {/* Quick checklist buttons & Step switcher */}
                        <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
                          <button
                            type="button"
                            onClick={() => toggleAllStepTasks(!isStepFullyDone)}
                            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                          >
                            {isStepFullyDone ? 'ล้างที่เลือก' : 'เลือกทั้งหมด'}
                          </button>
                          <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
                            <button
                              type="button"
                              onClick={() => setActiveRoadmapStep((prev) => Math.max(0, prev - 1))}
                              disabled={idx === 0}
                              className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 cursor-pointer"
                              title="ระยะก่อนหน้า"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const nextIdx = Math.min(PREP_ROADMAP_DATA.length, idx + 1);
                                setActiveRoadmapStep(nextIdx);
                                if (nextIdx === PREP_ROADMAP_DATA.length) {
                                  triggerCelebration();
                                }
                              }}
                              className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 cursor-pointer"
                              title="ระยะถัดไป"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Dual Role Focus Grid with Theme Accents */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div
                          className={`p-4 rounded-2xl ${theme.lightBg} border ${theme.border} space-y-2 shadow-2xs`}
                        >
                          <div className={`font-extrabold ${theme.accentText} flex items-center gap-2 text-sm`}>
                            <GraduationCap className="w-4 h-4" />
                            <span>สำหรับน้อง ๆ นักเรียน:</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{step.studentFocus}</p>
                        </div>

                        <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2 shadow-2xs">
                          <div className="font-extrabold text-purple-800 flex items-center gap-2 text-sm">
                            <HeartHandshake className="w-4 h-4 text-purple-600" />
                            <span>สำหรับผู้ปกครอง:</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{step.parentFocus}</p>
                        </div>
                      </div>

                      {/* Interactive Granular Checklist Grid */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                            <CheckSquare className={`w-4 h-4 ${theme.accentText}`} />
                            <span>Checklist รายวิชา & กิจกรรมที่ต้องทำให้สำเร็จประจำระยะนี้:</span>
                          </div>
                          <span className="text-xs font-extrabold text-slate-500">
                            คลิกที่กล่องเพื่อติ๊กถูก
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {step.checklist.map((chk, cIdx) => {
                            const taskId = `step-${idx}-task-${cIdx}`;
                            const isChecked = Boolean(checkedItems[taskId]);

                            return (
                              <button
                                key={cIdx}
                                type="button"
                                onClick={() => toggleCheckItem(taskId)}
                                className={`w-full text-left p-3 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 transition-all cursor-pointer ${
                                  isChecked
                                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 font-semibold shadow-2xs'
                                    : 'bg-slate-50/70 border-slate-200/90 hover:border-blue-300 text-slate-700 hover:bg-white hover:shadow-2xs'
                                }`}
                              >
                                <div className="mt-0.5 shrink-0">
                                  {isChecked ? (
                                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 fill-emerald-100" />
                                  ) : (
                                    <Square className="w-4.5 h-4.5 text-slate-400 hover:text-blue-500" />
                                  )}
                                </div>
                                <span
                                  className={`leading-snug ${
                                    isChecked
                                      ? 'line-through text-slate-500 decoration-emerald-600/40'
                                      : 'text-slate-800 font-medium'
                                  }`}
                                >
                                  {chk}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step Completed Celebration */}
                      {isStepFullyDone && (
                        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-200 flex items-center justify-between gap-3 text-xs sm:text-sm">
                          <div className="flex items-center gap-2 text-emerald-900 font-bold">
                            <Sparkles className="w-4 h-4 text-emerald-600" />
                            <span>ยินดีด้วย! น้อง ๆ ผ่านเป้าหมายระยะที่ {idx + 1} ครบถ้วนแล้ว 👏</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const nextIdx = Math.min(PREP_ROADMAP_DATA.length, idx + 1);
                              setActiveRoadmapStep(nextIdx);
                              if (nextIdx === PREP_ROADMAP_DATA.length) {
                                triggerCelebration();
                              }
                            }}
                            className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                          >
                            <span>{idx < PREP_ROADMAP_DATA.length - 1 ? `ไปต่อระยะที่ ${idx + 2}` : 'ดูใบประกาศเกียรติคุณ'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()
              ) : (
                /* Milestone 5: Victory Celebration & Professional Printable Certificate */
                <div className="space-y-6 animate-in fade-in-50 duration-300">
                  {/* Top Celebration Banner */}
                  <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 print:hidden">
                    <div className="space-y-2 text-center md:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold backdrop-blur-md">
                        <Trophy className="w-3.5 h-3.5 text-amber-200" />
                        <span>เป้าหมายสูงสุดแห่งความสำเร็จ (Ultimate Milestone)</span>
                      </div>
                      <h3 className="font-black text-xl sm:text-2xl text-white tracking-tight">
                        🎉 ขอแสดงความยินดี! คุณพร้อมพิชิตข้อสอบเข้า ม.1 แล้ว 100%
                      </h3>
                      <p className="text-sm text-amber-100 max-w-2xl leading-relaxed">
                        เมื่อเดินครบทุกก้าวตาม Roadmap ตั้งแต่ระยะที่ 1 ถึง 4 น้อง ๆ มีทั้งความรู้ 5 วิชาหลัก ทักษะตัดชอยส์ และความมั่นใจเต็มร้อย
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={triggerCelebration}
                        className="px-4 py-2.5 rounded-2xl bg-white text-orange-600 hover:bg-amber-50 text-xs sm:text-sm font-extrabold shadow-md flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>จุดพลุฉลอง 🎉</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Print CSS to isolate ONLY this certificate and guarantee 100% clean single-page printing */}
                  <style>{`
                    @media print {
                      @page {
                        size: A4 landscape;
                        margin: 0;
                      }
                      html, body {
                        background: #ffffff !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        overflow: hidden !important;
                      }
                      header, footer, nav, aside, .no-print, [data-no-print="true"] {
                        display: none !important;
                      }
                      body {
                        visibility: hidden !important;
                      }
                      #roadmap-certificate-print-area,
                      #roadmap-certificate-print-area * {
                        visibility: visible !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                      }
                      #roadmap-certificate-print-area {
                        position: fixed !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100vw !important;
                        height: 100vh !important;
                        max-width: 100vw !important;
                        max-height: 100vh !important;
                        margin: 0 !important;
                        padding: 16px !important;
                        box-sizing: border-box !important;
                        z-index: 99999999 !important;
                        background: #FCFBF7 !important;
                        border: none !important;
                        box-shadow: none !important;
                        overflow: hidden !important;
                        page-break-after: avoid !important;
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                      }
                    }
                  `}</style>

                  {/* Professional Luxury Printable Certificate (Theme Exactly matching Image 2: Black & Gold Waves, Top-Right Medallion, Center Seal) */}
                  <div
                    id="roadmap-certificate-print-area"
                    className="relative w-full max-w-[1040px] mx-auto rounded-3xl bg-[#FAF7EE] border-4 border-amber-400 shadow-2xl text-slate-800 ring-4 ring-amber-100/70 overflow-hidden print:shadow-none print:border-none print:m-0 print:rounded-none"
                    style={{ fontFamily: "'TH Sarabun New', 'THSarabunPSK', var(--font-sarabun), 'Sarabun', sans-serif" }}
                  >
                    {/* SVG Gradient Definitions for Metallic Gold Waves & Accents */}
                    <svg className="absolute w-0 h-0 pointer-events-none">
                      <defs>
                        <linearGradient id="goldWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="50%" stopColor="#FDE047" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                        <linearGradient id="goldWaveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D97706" />
                          <stop offset="50%" stopColor="#FEF08A" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* TOP-RIGHT Dynamic Black & Gold Curved Waves (As in Image 2) */}
                    <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 pointer-events-none z-10 overflow-hidden">
                      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" preserveAspectRatio="none">
                        {/* Outer Dark Ribbon Wave */}
                        <path d="M180,0 C260,80 320,180 400,400 L400,0 Z" fill="#18181B" />
                        {/* Gold Trim Wave Band 1 */}
                        <path d="M145,0 C230,85 295,190 375,400 L400,400 C320,180 260,80 180,0 Z" fill="url(#goldWaveGrad1)" />
                        {/* Gold Trim Wave Band 2 */}
                        <path d="M115,0 C205,90 270,195 350,400 L368,400 C288,195 223,90 135,0 Z" fill="url(#goldWaveGrad2)" opacity="0.9" />
                      </svg>
                    </div>

                    {/* BOTTOM-LEFT Dynamic Black & Gold Curved Waves (As in Image 2) */}
                    <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-32 sm:h-44 pointer-events-none z-10 overflow-hidden">
                      <svg viewBox="0 0 400 180" className="w-full h-full" fill="none" preserveAspectRatio="none">
                        {/* Bottom Dark Curve */}
                        <path d="M0,80 C140,110 260,80 400,180 L0,180 Z" fill="#18181B" />
                        {/* Bottom Gold Trim Curve */}
                        <path d="M0,55 C140,85 260,55 400,160 L400,180 C260,80 140,110 0,80 Z" fill="url(#goldWaveGrad1)" />
                      </svg>
                    </div>

                    {/* TOP-RIGHT Gold Medallion & Ribbon Tails (Image 2 Best Award Badge) */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 select-none drop-shadow-2xl">
                      <div className="relative flex flex-col items-center">
                        {/* Gold Scalloped Medallion */}
                        <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-1.5 shadow-2xl ring-4 ring-amber-300/80 border-2 border-white flex flex-col items-center justify-center text-amber-950 text-center">
                          <div className="w-full h-full rounded-full border border-dashed border-amber-900/50 bg-[#18181B] flex flex-col items-center justify-center p-1.5 relative shadow-inner">
                            {/* 3 Gold Stars */}
                            <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                              <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-amber-400" />
                              <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-amber-400" />
                              <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-amber-400" />
                            </div>
                            {/* Medallion Title */}
                            <div className="text-[9px] sm:text-[12px] font-serif font-black uppercase tracking-wider text-amber-300 leading-tight">
                              BEST AWARD
                            </div>
                            <div className="text-[6px] sm:text-[7.5px] font-bold uppercase tracking-tighter text-amber-200/90 leading-tight mt-0.5">
                              GOLD STANDARD
                            </div>
                            <div className="text-[5.5px] sm:text-[7px] text-amber-400 font-bold tracking-tight mt-0.5">
                              ✦ 100% READY ✦
                            </div>
                          </div>
                        </div>

                        {/* Metallic Gold Ribbon Tails Draped Below */}
                        <div className="relative flex items-start justify-center -space-x-1 mt-[-6px] z-[-1]">
                          <div
                            className="w-5 sm:w-7 h-14 sm:h-18 bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 shadow-lg border-t-0 -rotate-15 transform origin-top"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)' }}
                          />
                          <div
                            className="w-5 sm:w-7 h-14 sm:h-18 bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 shadow-lg border-t-0 rotate-15 transform origin-top"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Inner Framed Content with Thin Double Gold Border (Image 2 Styling) */}
                    <div className="relative m-3 sm:m-5 border border-amber-400/80 rounded-2xl p-4 sm:p-7 md:p-8 space-y-3.5 sm:space-y-4 bg-[#FCFAF2]/95 backdrop-blur-xs">
                      {/* Inner Inset Thin Gold Line */}
                      <div className="absolute inset-1.5 sm:inset-2 border border-amber-300/60 rounded-xl pointer-events-none" />

                      {/* Header Section (Left / Center-Left Aligned with Elegant Serif Typography) */}
                      <div className="space-y-1 pr-24 sm:pr-36">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight flex items-center gap-2">
                          <span>Certificate</span>
                        </h1>
                        <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-800/90 font-serif">
                          OF APPRECIATION & READINESS • ใบประกาศนียบัตรเกียรติคุณ
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                          ความพร้อมและความมั่นใจในการสอบเข้า ม.1 ห้องเรียนพิเศษ
                        </p>
                      </div>

                      {/* Lead-in Text */}
                      <div className="pt-1">
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                          THIS CERTIFICATE IS PROUDLY PRESENTED TO / ขอมอบใบประกาศเกียรติคุณฉบับนี้ให้ไว้เพื่อแสดงว่า
                        </p>
                      </div>

                      {/* Recipient Name (Prominent Centered with Golden Accent Underline) */}
                      <div className="text-center py-1">
                        {isEditingName ? (
                          <div className="inline-flex items-center gap-2 max-w-md mx-auto">
                            <input
                              type="text"
                              value={tempNameInput}
                              onChange={(e) => setTempNameInput(e.target.value)}
                              placeholder="กรอกชื่อ-นามสกุล หรือชื่อเล่น"
                              className="px-3 py-1 rounded-xl border-2 border-amber-500 text-center font-bold text-2xl sm:text-4xl text-slate-900 bg-white shadow-xs outline-none focus:ring-2 focus:ring-amber-400"
                              autoFocus
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const trimmed = tempNameInput.trim();
                                if (trimmed) {
                                  setStudentName(trimmed);
                                  saveUserProfileName(trimmed);
                                }
                                setIsEditingName(false);
                              }}
                              className="p-1.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 cursor-pointer shadow-xs"
                              title="บันทึกชื่อ"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center gap-2 border-b-2 border-amber-400/90 pb-1 px-8 sm:px-16 min-w-[280px]">
                            <span className="text-3xl sm:text-5xl font-serif font-black text-slate-950 tracking-normal drop-shadow-2xs">
                              {studentName}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setTempNameInput(studentName);
                                setIsEditingName(true);
                              }}
                              className="p-1 rounded-lg text-slate-400 hover:text-amber-700 hover:bg-amber-100/60 transition-colors cursor-pointer print:hidden"
                              title="แก้ไขชื่อบนใบประกาศ"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                          </div>
                        )}

                        {/* Target School Badge */}
                        <div className="pt-2">
                          <div className="text-xs sm:text-sm font-bold text-amber-900 bg-amber-100/80 px-4 py-1 rounded-full inline-flex items-center gap-2 border border-amber-300 shadow-2xs">
                            <Target className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                            <span>
                              เป้าหมายความสำเร็จ:{' '}
                              <strong className="font-extrabold text-amber-950">{targetSchoolName}</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Body Description Text */}
                      <div className="max-w-3xl mx-auto text-center space-y-1 text-slate-700 font-medium px-4">
                        <p className="text-xs sm:text-sm leading-relaxed font-semibold">
                          ได้ผ่านการเตรียมตัว ทบทวนเนื้อหา 5 วิชาหลักอย่างเข้มข้น และพิชิตภารกิจตาม Roadmap ม.1<br className="hidden sm:inline" />
                          {' '}<strong className="text-emerald-700 font-black">สำเร็จครบถ้วน 100% (28 จาก 28 ภารกิจ)</strong>
                        </p>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium">
                          มีความรู้ความเข้าใจในโครงสร้างข้อสอบ มีทักษะการคิดวิเคราะห์อย่างเป็นระบบ บริหารเวลาได้อย่างแม่นยำ<br className="hidden sm:inline" />
                          {' '}และพร้อมก้าวสู่สนามสอบจริงด้วยความมั่นใจอย่างเต็มเปี่ยม
                        </p>
                      </div>

                      {/* 5 Core Subject Badges */}
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-0.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-blue-900 text-xs font-bold shadow-2xs">
                          <Calculator className="w-3 h-3 text-blue-600" />
                          <span>คณิตศาสตร์</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-bold shadow-2xs">
                          <Atom className="w-3 h-3 text-emerald-600" />
                          <span>วิทยาศาสตร์</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-purple-200 text-purple-900 text-xs font-bold shadow-2xs">
                          <Languages className="w-3 h-3 text-purple-600" />
                          <span>ภาษาอังกฤษ</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-amber-200 text-amber-900 text-xs font-bold shadow-2xs">
                          <BookMarked className="w-3 h-3 text-amber-700" />
                          <span>ภาษาไทย</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-rose-200 text-rose-900 text-xs font-bold shadow-2xs">
                          <Compass className="w-3 h-3 text-rose-600" />
                          <span>สังคมศึกษา</span>
                        </div>
                      </div>

                      {/* Bottom Section: Left Signature/Date + Center 3D Gold Seal + Right Official Logo Board */}
                      <div className="pt-2 border-t border-amber-300/70 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 text-slate-700">
                        {/* Left: Date & Verification ID */}
                        <div className="text-center sm:text-left space-y-0.5 pl-2">
                          <div className="font-bold text-slate-800 text-xs sm:text-sm">
                            วันที่รับรอง:{' '}
                            <span className="font-semibold text-slate-700">
                              {new Date().toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            รหัสยืนยัน: M1-GOLD-{Date.now().toString().slice(-6)}
                          </div>
                          <div className="text-[10px] text-emerald-700 font-bold flex items-center justify-center sm:justify-start gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>รับรองความพร้อม 100%</span>
                          </div>
                        </div>

                        {/* Center: Circular 3D Gold Seal (YOUR SEAL as shown in Image 2) */}
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 p-0.5 shadow-lg ring-2 ring-amber-300/80 border border-amber-900/30 flex items-center justify-center">
                            <div className="w-full h-full rounded-full bg-[#18181B] border border-amber-400/90 flex flex-col items-center justify-center p-1 text-center shadow-inner">
                              <Crown className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                              <div className="text-[6.5px] font-serif font-black uppercase tracking-widest text-amber-300 leading-none my-0.5">
                                OFFICIAL
                              </div>
                              <div className="text-[7.5px] font-black uppercase tracking-wider text-yellow-400 leading-none">
                                SEAL
                              </div>
                              <div className="text-[5px] font-bold text-amber-200/90 leading-tight mt-0.5">
                                TUTOR M.1
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Signature & Official App Logo */}
                        <div className="text-center sm:text-right space-y-1 flex flex-col items-center sm:items-end pr-2">
                          <div className="flex items-center gap-2 bg-white p-1 px-2 rounded-xl border border-amber-200 shadow-2xs">
                            <div className="w-7 h-7 rounded-lg overflow-hidden shadow-xs bg-blue-600 relative border border-blue-200 shrink-0">
                              <Image
                                src="/images/logo-icon.png"
                                alt="Tutor M.1 Logo"
                                width={28}
                                height={28}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <div className="font-black text-xs text-slate-900 tracking-tight leading-none">
                                Tutor M.1
                              </div>
                              <div className="text-[8.5px] text-slate-500 font-medium leading-tight mt-0.5">
                                ติวครบ จบมั่นใจ สอบติด ม.1
                              </div>
                            </div>
                          </div>

                          <div className="space-y-0.2">
                            <div className="font-bold text-slate-900 text-xs sm:text-sm tracking-normal">
                              คณะวิชาการและติวเตอร์ Tutor M.1
                            </div>
                            <div className="text-[9.5px] text-slate-500 italic">
                              Tutor M.1 Academic Examination Board
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Toolbar (Hidden when printing) */}
                    <div className="flex flex-wrap justify-between items-center gap-3 p-3 bg-white border-t border-amber-300/60 print:hidden">
                      <button
                        type="button"
                        onClick={() => setActiveRoadmapStep(0)}
                        className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>ย้อนกลับไปดูระยะที่ 1</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Printer className="w-4 h-4 text-amber-300" />
                          <span>พิมพ์ใบประกาศ (Print / PDF)</span>
                        </button>

                        <Link
                          href="/practice"
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-95 text-xs font-extrabold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>ฝึกทำโจทย์ AI Practice</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
