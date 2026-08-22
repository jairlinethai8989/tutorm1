'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { OverviewCards } from '@/components/dashboard/OverviewCards';
import { RadarCompetency } from '@/components/dashboard/RadarCompetency';
import { WeaknessStrengthList } from '@/components/dashboard/WeaknessStrengthList';
import { ScoreHistoryChart } from '@/components/dashboard/ScoreHistoryChart';
import { getUserStats, getStoredAttempts } from '@/lib/storage';
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
} from 'lucide-react';

export default function DashboardPage() {
  const [stats, setStats] = useState<UserOverallStats | null>(null);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);

  useEffect(() => {
    setStats(getUserStats());
    setAttempts(getStoredAttempts());
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

        <Link
          href="/mock-exam"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-105"
        >
          <Clock className="w-4 h-4" />
          <span>เริ่มสอบจำลองเพิ่มสถิติ</span>
        </Link>
      </div>

      {/* Overview Cards (Questions, Accuracy, Streak, Readiness) */}
      <OverviewCards stats={stats} />

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Radar Chart */}
        <div className="lg:col-span-6 space-y-6">
          <RadarCompetency />
          <ScoreHistoryChart attempts={attempts} />
        </div>

        {/* Right Column: Weaknesses & Strengths */}
        <div className="lg:col-span-6 space-y-6">
          <WeaknessStrengthList
            strongest={stats.strongestTopics}
            weakest={stats.weakestTopics}
          />

          {/* Action Recommendations Box */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>คำแนะนำจากติวเตอร์ระบบ AI:</span>
            </div>

            <h3 className="text-lg font-bold">
              กลยุทธ์พิชิตห้องพิเศษ รร.เบ็ญจะมะฯ & จุฬาภรณ์มุกดาหาร
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
    </div>
  );
}
