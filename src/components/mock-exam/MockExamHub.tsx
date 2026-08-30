'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { MockExam } from '@/types/exam';
import { getStoredAttempts } from '@/lib/storage';
import {
  Clock,
  Target,
  ArrowRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Search,
  LayoutGrid,
  List,
  Sparkles,
  School,
  X,
  BookOpen,
  Filter,
  CheckCircle,
  AlertCircle,
  BarChart2,
} from 'lucide-react';

interface MockExamHubProps {
  exams: MockExam[];
}

type ViewMode = 'grid' | 'list';
type SubjectFilter = 'all' | 'math' | 'science' | 'english';
type SchoolFilter = 'all' | 'benchama' | 'chulabhorn' | 'suankularb' | 'samsen' | 'satriwit' | 'patumwan' | 'others';

export const MockExamHub: React.FC<MockExamHubProps> = ({ exams }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<SchoolFilter>('all');
  const [selectedSubject, setSelectedSubject] = useState<SubjectFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [attemptHistory, setAttemptHistory] = useState<Record<string, { count: number; bestScore: number; isPassed: boolean; lastDate: string }>>({});

  // Load student's past attempt records for each mock exam
  useEffect(() => {
    const attempts = getStoredAttempts();
    const map: Record<string, { count: number; bestScore: number; isPassed: boolean; lastDate: string }> = {};

    exams.forEach((exam) => {
      const examAttempts = attempts.filter((a) => a.examId === exam.id);
      if (examAttempts.length > 0) {
        const scores = examAttempts.map((a) => a.scorePercentage || 0);
        const bestScore = Math.max(...scores);
        const latest = examAttempts[0];
        map[exam.id] = {
          count: examAttempts.length,
          bestScore,
          isPassed: bestScore >= exam.passingScorePercent,
          lastDate: latest.completedAt || latest.startedAt,
        };
      }
    });

    setAttemptHistory(map);
  }, [exams]);

  // School filter definitions
  const schoolFilters: { id: SchoolFilter; label: string; count: number; color: string }[] = useMemo(() => {
    const counts: Record<SchoolFilter, number> = {
      all: exams.length,
      benchama: 0,
      chulabhorn: 0,
      suankularb: 0,
      samsen: 0,
      satriwit: 0,
      patumwan: 0,
      others: 0,
    };

    exams.forEach((e) => {
      const s = e.targetSchoolEn?.toLowerCase() || '';
      if (s.includes('benchama')) counts.benchama++;
      else if (s.includes('chulabhorn')) counts.chulabhorn++;
      else if (s.includes('suankularb')) counts.suankularb++;
      else if (s.includes('samsen')) counts.samsen++;
      else if (s.includes('satriwit')) counts.satriwit++;
      else if (s.includes('patumwan')) counts.patumwan++;
      else counts.others++;
    });

    return [
      { id: 'all', label: 'ทุกโรงเรียน', count: counts.all, color: 'bg-slate-900 text-white' },
      { id: 'benchama', label: 'เบ็ญจะมะมหาราช', count: counts.benchama, color: 'bg-blue-600 text-white' },
      { id: 'chulabhorn', label: 'จุฬาภรณราชวิทยาลัย', count: counts.chulabhorn, color: 'bg-purple-600 text-white' },
      { id: 'suankularb', label: 'สวนกุหลาบวิทยาลัย', count: counts.suankularb, color: 'bg-rose-600 text-white' },
      { id: 'samsen', label: 'สามเสนวิทยาลัย', count: counts.samsen, color: 'bg-emerald-600 text-white' },
      { id: 'satriwit', label: 'สตรีวิทยา', count: counts.satriwit, color: 'bg-pink-600 text-white' },
      { id: 'patumwan', label: 'สาธิตปทุมวัน', count: counts.patumwan, color: 'bg-amber-600 text-white' },
      { id: 'others', label: 'รร.ชั้นนำอื่นๆ', count: counts.others, color: 'bg-indigo-600 text-white' },
    ];
  }, [exams]);

  // Filtered exams logic
  const filteredExams = useMemo(() => {
    return exams.filter((exam) => {
      // 1. Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = exam.name.toLowerCase().includes(query);
        const matchSchool = exam.targetSchool.toLowerCase().includes(query);
        const matchSubject = (exam.subjectName || '').toLowerCase().includes(query);
        const matchDesc = (exam.description || '').toLowerCase().includes(query);
        if (!matchTitle && !matchSchool && !matchSubject && !matchDesc) {
          return false;
        }
      }

      // 2. School Filter
      if (selectedSchool !== 'all') {
        const s = exam.targetSchoolEn?.toLowerCase() || '';
        if (selectedSchool === 'benchama' && !s.includes('benchama')) return false;
        if (selectedSchool === 'chulabhorn' && !s.includes('chulabhorn')) return false;
        if (selectedSchool === 'suankularb' && !s.includes('suankularb')) return false;
        if (selectedSchool === 'samsen' && !s.includes('samsen')) return false;
        if (selectedSchool === 'satriwit' && !s.includes('satriwit')) return false;
        if (selectedSchool === 'patumwan' && !s.includes('patumwan')) return false;
        if (
          selectedSchool === 'others' &&
          (s.includes('benchama') ||
            s.includes('chulabhorn') ||
            s.includes('suankularb') ||
            s.includes('samsen') ||
            s.includes('satriwit') ||
            s.includes('patumwan'))
        ) {
          return false;
        }
      }

      // 3. Subject Filter
      if (selectedSubject !== 'all') {
        const sub = exam.subjectId?.toLowerCase() || '';
        const name = (exam.subjectName || '').toLowerCase();
        if (selectedSubject === 'math' && !sub.includes('math') && !name.includes('คณิต')) return false;
        if (selectedSubject === 'science' && !sub.includes('sci') && !name.includes('วิทย์')) return false;
        if (selectedSubject === 'english' && !sub.includes('eng') && !name.includes('อังกฤษ')) return false;
      }

      return true;
    });
  }, [exams, searchQuery, selectedSchool, selectedSubject]);

  // Quick stats summary
  const totalCompletedCount = Object.keys(attemptHistory).length;
  const totalPassedCount = Object.values(attemptHistory).filter((h) => h.isPassed).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSchool('all');
    setSelectedSubject('all');
  };

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Top Navigation & Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group"
        >
          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-300 shadow-2xs transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span>กลับหน้าหลัก</span>
        </Link>

        {/* User Progress Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-700">
          <Award className="w-4 h-4 text-amber-500" />
          <span>ประวัติการสอบ:</span>
          <span className="text-blue-600 font-black">{totalCompletedCount}/{exams.length} ชุด</span>
          {totalPassedCount > 0 && (
            <span className="text-[10px] font-black px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-700">
              ผ่าน {totalPassedCount} ชุด 🟢
            </span>
          )}
        </div>
      </div>

      {/* 2. Main Title Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-extrabold border border-white/10 backdrop-blur-md">
              <Clock className="w-3.5 h-3.5" />
              <span>ระบบจำลองสอบเสมือนจริง (Timed Mock Exam)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              ชุดข้อสอบจำลอง ม.1 โรงเรียนชั้นนำ
            </h1>
            <p className="text-xs sm:text-sm text-slate-200/90 max-w-2xl leading-relaxed">
              ฝึกจับเวลาจริง กระดาษคำตอบดิจิทัล และเกณฑ์ตัดตัวห้องเรียนพิเศษ (Gifted, SMA, EP, สสวท.) จาก 7 โรงเรียนชั้นนำของประเทศ
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-2xl font-black text-amber-300">{exams.length}</div>
              <div className="text-[10px] font-bold text-slate-200 uppercase mt-0.5">ชุดข้อสอบทั้งหมด</div>
            </div>
            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-4 text-center min-w-[100px]">
              <div className="text-2xl font-black text-cyan-300">7</div>
              <div className="text-[10px] font-bold text-slate-200 uppercase mt-0.5">โรงเรียนดัง</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Smart Search & Filter Control Toolbar */}
      <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-4 sm:p-6 shadow-xs space-y-4">
        {/* Row 1: Search Box & View Mode Toggle */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่อชุดข้อสอบ, โรงเรียน, วิชา, ปี พ.ศ. ..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl border-2 border-slate-200 bg-slate-50/70 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none text-xs sm:text-sm font-semibold transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Subject Filter Chips (No Scrollbar - Clean Wrap) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedSubject('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shadow-2xs ${
                selectedSubject === 'all'
                  ? 'bg-slate-900 text-white ring-2 ring-slate-900/30 border border-slate-950'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 font-bold'
              }`}
            >
              ทุกวิชา
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubject('math')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shadow-2xs ${
                selectedSubject === 'math'
                  ? 'bg-blue-600 text-white ring-2 ring-blue-400/40 border border-blue-700'
                  : 'bg-blue-50/70 hover:bg-blue-100 text-blue-900 border-2 border-blue-200 font-bold'
              }`}
            >
              📐 คณิตศาสตร์
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubject('science')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shadow-2xs ${
                selectedSubject === 'science'
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400/40 border border-emerald-700'
                  : 'bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 border-2 border-emerald-200 font-bold'
              }`}
            >
              🧪 วิทยาศาสตร์
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubject('english')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shadow-2xs ${
                selectedSubject === 'english'
                  ? 'bg-purple-600 text-white ring-2 ring-purple-400/40 border border-purple-700'
                  : 'bg-purple-50/70 hover:bg-purple-100 text-purple-900 border-2 border-purple-200 font-bold'
              }`}
            >
              🔤 ภาษาอังกฤษ
            </button>
          </div>

          {/* Dual View Switcher Toggle (High Contrast & Clear) */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-200/90 border-2 border-slate-300 gap-1.5 shrink-0 self-start lg:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/40 border border-blue-700'
                  : 'bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 font-extrabold border border-slate-200'
              }`}
            >
              <LayoutGrid className={`w-3.5 h-3.5 ${viewMode === 'grid' ? 'text-white' : 'text-blue-600'}`} />
              <span>การ์ด</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-400/40 border border-indigo-700'
                  : 'bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 font-extrabold border border-slate-200'
              }`}
            >
              <List className={`w-3.5 h-3.5 ${viewMode === 'list' ? 'text-white' : 'text-indigo-600'}`} />
              <span>ตารางสรุป</span>
            </button>
          </div>
        </div>

        {/* Row 2: School Filter Pills (Wrapping Grid - Zero Horizontal Scrolling) */}
        <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 shrink-0 mr-1">
            <School className="w-4 h-4 text-indigo-600" />
            <span>โรงเรียน:</span>
          </div>

          {schoolFilters.map((school) => {
            const isSelected = selectedSchool === school.id;
            return (
              <button
                key={school.id}
                type="button"
                onClick={() => setSelectedSchool(school.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all shrink-0 cursor-pointer select-none active:scale-95 shadow-2xs ${
                  isSelected
                    ? `${school.color} shadow-md ring-2 ring-indigo-400/40 border-2 border-slate-900`
                    : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 border-2 border-slate-200 font-bold'
                }`}
              >
                <span>{school.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}>
                  {school.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Results Header Counter */}
      <div className="flex items-center justify-between px-1">
        <div className="text-xs sm:text-sm font-extrabold text-slate-700 flex items-center gap-2">
          <span>พบข้อสอบทั้งหมด:</span>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60 font-black">
            {filteredExams.length} ชุด
          </span>
          {(searchQuery || selectedSchool !== 'all' || selectedSubject !== 'all') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-blue-600 hover:text-blue-700 underline font-bold cursor-pointer ml-2"
            >
              ล้างตัวกรอง
            </button>
          )}
        </div>

        <div className="text-xs text-slate-500 font-medium hidden sm:block">
          โหมดแสดงผล: {viewMode === 'grid' ? '🎴 การ์ดกะทัดรัด (Card Grid)' : '📋 ตารางแถวเดียว (Compact Table)'}
        </div>
      </div>

      {/* 5. Main Exam View Content */}
      {filteredExams.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
            <Search className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900">ไม่พบชุดข้อสอบที่ตรงกับเงื่อนไขค้นหา</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              ลองเปลี่ยนคำค้นหา หรือรีเซ็ตตัวกรองโรงเรียนและรายวิชาเพื่อดูชุดข้อสอบทั้งหมด
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
          >
            ล้างตัวกรองและแสดงทั้งหมด
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* VIEW 1: Compact Claymorphic Card Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredExams.map((exam) => {
            const history = attemptHistory[exam.id];

            return (
              <div
                key={exam.id}
                className="bg-white rounded-3xl border-2 border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-indigo-400 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Top Bar: School & Subject Badge + Status */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[11px] font-black px-3 py-1 rounded-full text-white shadow-2xs"
                        style={{ backgroundColor: exam.badgeColor || '#4F46E5' }}
                      >
                        {exam.targetSchool}
                      </span>
                      {exam.subjectName && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {exam.subjectName}
                        </span>
                      )}
                    </div>

                    {/* Student Past History Status Badge */}
                    {history ? (
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full border ${
                          history.isPassed
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                            : 'bg-amber-50 text-amber-800 border-amber-300'
                        }`}
                      >
                        {history.isPassed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <BarChart2 className="w-3.5 h-3.5 text-amber-600" />
                        )}
                        <span>
                          {history.isPassed ? 'ผ่านแล้ว' : 'เคยสอบ'} ({history.bestScore}%)
                        </span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200">
                        ⚪ ยังไม่เคยสอบ
                      </span>
                    )}
                  </div>

                  {/* Exam Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                    {exam.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {exam.description}
                  </p>

                  {/* 3-Column Compact Specs Box */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 text-center">
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold">จำนวนข้อสอบ</div>
                      <div className="text-sm font-black text-slate-900 mt-0.5">{exam.totalQuestions} ข้อ</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold">เวลาสอบ</div>
                      <div className="text-sm font-black text-indigo-700 mt-0.5">{exam.timeLimitMinutes} นาที</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold">เกณฑ์ผ่าน</div>
                      <div className="text-sm font-black text-emerald-600 mt-0.5">{exam.passingScorePercent}%</div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 mt-2">
                  <Link
                    href={`/mock-exam/${exam.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-md transition-all duration-150 active:scale-[0.98] cursor-pointer group-hover:shadow-lg"
                  >
                    <span>{history ? 'เริ่มสอบใหม่อีกครั้ง' : 'เข้าสู่ห้องสอบจำลอง'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* VIEW 2: Compact List Table View (ตารางแถวเดียว ได้สัดส่วน สมดุล) */
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-xs overflow-hidden divide-y divide-slate-100">
          {/* Table Header (Hidden on Mobile) */}
          <div className="bg-slate-100/90 px-6 py-3.5 hidden lg:grid grid-cols-12 gap-4 text-xs font-black text-slate-700 uppercase tracking-wider items-center">
            <div className="col-span-5">ชุดข้อสอบ & โรงเรียนเป้าหมาย</div>
            <div className="col-span-3 text-center">สเปกข้อสอบ & เกณฑ์</div>
            <div className="col-span-2 text-center">ผลการสอบของน้อง</div>
            <div className="col-span-2 text-center">ห้องสอบ</div>
          </div>

          {/* Table Row Items */}
          {filteredExams.map((exam) => {
            const history = attemptHistory[exam.id];

            return (
              <div
                key={exam.id}
                className="p-4 sm:p-5 hover:bg-indigo-50/40 transition-all duration-150 flex flex-col lg:grid lg:grid-cols-12 gap-3.5 lg:gap-4 items-start lg:items-center group select-none"
              >
                {/* Col 1: School & Title (5 cols on desktop) */}
                <div className="lg:col-span-5 space-y-1.5 min-w-0 w-full">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-black px-2.5 py-0.5 rounded-full text-white shadow-2xs shrink-0"
                      style={{ backgroundColor: exam.badgeColor || '#4F46E5' }}
                    >
                      {exam.targetSchool}
                    </span>
                    {exam.subjectName && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                        {exam.subjectName}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {exam.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-1">
                    {exam.description}
                  </p>
                </div>

                {/* Col 2: Specs (3 cols on desktop - Balanced Horizontal Pill Badges) */}
                <div className="lg:col-span-3 flex flex-wrap items-center justify-start lg:justify-center gap-1.5 w-full">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100/90 border border-slate-200/90 text-slate-800 text-xs font-black">
                    <span>📝</span>
                    <span>{exam.totalQuestions} ข้อ</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-black">
                    <span>⏱️</span>
                    <span>{exam.timeLimitMinutes} นาที</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-black">
                    <span>🎯</span>
                    <span>ผ่าน {exam.passingScorePercent}%</span>
                  </span>
                </div>

                {/* Col 3: Student History Status (2 cols on desktop - Centered Pill) */}
                <div className="lg:col-span-2 flex items-center justify-start lg:justify-center w-full">
                  {history ? (
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-2xl border shadow-2xs ${
                        history.isPassed
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-amber-50 text-amber-900 border-amber-300'
                      }`}
                    >
                      {history.isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <BarChart2 className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                      <span>
                        {history.isPassed ? 'ผ่าน' : 'เคยทำ'} ({history.bestScore}%)
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-3 py-1.5 rounded-2xl bg-slate-100 text-slate-500 border border-slate-200 shadow-2xs">
                      ⚪ ยังไม่เคยสอบ
                    </span>
                  )}
                </div>

                {/* Col 4: Action Button (2 cols on desktop - Proportional Full Width Button) */}
                <div className="lg:col-span-2 flex items-center justify-end w-full">
                  <Link
                    href={`/mock-exam/${exam.id}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-md transition-all duration-150 active:scale-95 cursor-pointer group-hover:shadow-lg"
                  >
                    <span>{history ? 'สอบใหม่' : 'เข้าสู่ห้องสอบ'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
