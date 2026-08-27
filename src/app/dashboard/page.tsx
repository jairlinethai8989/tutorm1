'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { OverviewCards } from '@/components/dashboard/OverviewCards';
import { RadarCompetency } from '@/components/dashboard/RadarCompetency';
import { WeaknessStrengthList } from '@/components/dashboard/WeaknessStrengthList';
import { ScoreHistoryChart } from '@/components/dashboard/ScoreHistoryChart';
import { SchoolBenchmark } from '@/components/dashboard/SchoolBenchmark';
import { PersonalizedActionPlan } from '@/components/dashboard/PersonalizedActionPlan';
import { ExamHistoryTable } from '@/components/dashboard/ExamHistoryTable';
import { StudentNameModal } from '@/components/shared/StudentNameModal';
import { getUserStats, getStoredAttempts, getUserProfileName, getUnresolvedMistakeCount } from '@/lib/storage';
import { UserOverallStats } from '@/types/analytics';
import { ExamAttempt } from '@/types/exam';
import {
  BarChart3,
  Target,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  Clock,
  ArrowLeft,
  User,
  Edit3,
  BookMarked,
  Zap,
} from 'lucide-react';

export default function DashboardPage() {
  const [stats, setStats] = useState<UserOverallStats | null>(null);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [studentName, setStudentName] = useState<string>('ผู้เรียน');
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);

  const refreshData = () => {
    setStats(getUserStats());
    setAttempts(getStoredAttempts());
    setStudentName(getUserProfileName());
    setMistakeCount(getUnresolvedMistakeCount());
  };

  useEffect(() => {
    refreshData();
  }, []);

  if (!stats) return null;

  return (
    <div className="space-y-8 pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับหน้าหลัก</span>
          </Link>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            <span>Smart Performance Analytics</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            ประเมินผลความพร้อม & วิเคราะห์จุดอ่อน
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/mistake-book"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white border border-rose-200 hover:bg-rose-50 text-rose-700 font-bold text-xs shadow-xs transition-all cursor-pointer"
          >
            <BookMarked className="w-4 h-4 text-rose-600" />
            <span>สมุดจุดอ่อน {mistakeCount > 0 && `(${mistakeCount})`}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsNameModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-xs transition-all cursor-pointer"
          >
            <User className="w-4 h-4 text-blue-600" />
            <span>ผู้เรียน: <strong className="text-blue-700">{studentName}</strong></span>
            <Edit3 className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </button>

          <Link
            href="/mock-exam"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-105"
          >
            <Clock className="w-4 h-4" />
            <span>เริ่มสอบจำลองเพิ่มสถิติ</span>
          </Link>
        </div>
      </div>

      {/* Student Profile Card */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-5 sm:p-6 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-inner shrink-0">
            <User className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold">
                ผลการประเมินรายบุคคล: {studentName}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-0.5">
              ระบบประเมินผลคำนวณจากประวัติการทำข้อสอบจริง 100% เพื่อเตรียมความพร้อมสอบเข้า ม.1 ห้องเรียนพิเศษ
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsNameModalOpen(true)}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition-all border border-white/30 cursor-pointer shrink-0"
        >
          แก้ไขชื่อ / เปลี่ยนผู้เรียน
        </button>
      </div>

      {/* Smart Mistake Alert Banner (if mistakes exist) */}
      {mistakeCount > 0 && (
        <div className="bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 rounded-3xl p-5 sm:p-6 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shrink-0">
              <Zap className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black flex items-center gap-2">
                <span>⚠️ ตรวจพบข้อที่คุณเคยทำผิด {mistakeCount} ข้อที่ยังไม่ได้ซ่อม!</span>
              </h3>
              <p className="text-xs sm:text-sm text-rose-100 mt-0.5">
                เปิดสมุดบันทึกจุดอ่อนเพื่อฝึกทำซ้ำเฉพาะข้อที่ผิด ช่วยเปลี่ยนจุดอ่อนให้เป็นคะแนนสอบติด
              </p>
            </div>
          </div>

          <Link
            href="/mistake-book"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-rose-700 hover:bg-rose-50 font-black text-xs shadow-md transition-all hover:scale-105 shrink-0 cursor-pointer"
          >
            <span>⚡ เปิดสมุดจุดอ่อน & ซ้อมสอบซ่อม</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Overview Cards (Questions, Accuracy, Streak, Readiness) */}
      <OverviewCards stats={stats} />

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Radar Chart & Benchmark */}
        <div className="lg:col-span-6 space-y-6">
          <RadarCompetency data={stats.radarCompetencyData} />
          <SchoolBenchmark
            currentAccuracy={stats.accuracyRate}
            readinessScore={stats.examReadinessScore}
          />
          <ScoreHistoryChart attempts={attempts} />
        </div>

        {/* Right Column: Weaknesses & Strengths & Action Plan */}
        <div className="lg:col-span-6 space-y-6">
          <WeaknessStrengthList
            strongest={stats.strongestTopics}
            weakest={stats.weakestTopics}
            totalQuestionsAttempted={stats.totalQuestionsAttempted}
          />

          {/* AI Personalized Action Plan */}
          <PersonalizedActionPlan actionPlan={stats.actionPlan} />

          {/* Strategy Tip Box */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>คำแนะนำจากติวเตอร์ระบบ AI:</span>
            </div>

            <h3 className="text-lg font-bold">
              กลยุทธ์พิชิตห้องพิเศษ โรงเรียนชั้นนำของไทย
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              สำหรับข้อสอบแนว มศว. และ จภ. คะแนนตัดตัวมักอยู่ที่ <strong>วิชาคณิตศาสตร์ (โจทย์ประยุกต์และเรขาคณิต)</strong> และ <strong>วิทยาศาสตร์ (การวิเคราะห์ตารางทดลองและวงจรไฟฟ้า)</strong> แนะนำให้เน้นทำข้อสอบอัตนัยแสดงวิธีทำเพิ่มเติมเพื่อฝึกการเขียนคำอธิบายอย่างเป็นระบบ
            </p>

            <div className="pt-2">
              <Link
                href="/subjects/math"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-md hover:bg-slate-100 transition-colors"
              >
                <span>ฝึกทำโจทย์คณิตศาสตร์เพิ่มเติม</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Exam History Table */}
      <ExamHistoryTable attempts={attempts} />

      {/* Student Name Modal */}
      <StudentNameModal
        isOpen={isNameModalOpen}
        onClose={() => setIsNameModalOpen(false)}
        onConfirm={(name) => {
          setStudentName(name);
          setIsNameModalOpen(false);
          refreshData();
        }}
        title="จัดการโปรไฟล์ผู้เรียน"
        subtitle="ระบุชื่อผู้เรียนเพื่อแสดงผลการประเมินเฉพาะบุคคล"
      />
    </div>
  );
}

