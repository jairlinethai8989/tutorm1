'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Award,
  Target,
  FileCheck2,
  AlertTriangle,
  TrendingUp,
  RotateCcw,
  Printer,
  ChevronLeft,
  Flame,
} from 'lucide-react';
import { AIDiagnosticResult } from '@/types/analytics';

interface DiagnosticSummaryBannerProps {
  report: AIDiagnosticResult;
  onRefresh?: () => void;
}

export const DiagnosticSummaryBanner: React.FC<DiagnosticSummaryBannerProps> = ({
  report,
  onRefresh,
}) => {
  const criticalCount = report.rankedWeaknesses.length;

  return (
    <div className="space-y-6">
      {/* 1. Header Hero Card */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-6 sm:p-8 shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full backdrop-blur-md transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>กลับแดชบอร์ด</span>
              </Link>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Deep Diagnostic System • 16 บทย่อย 5 วิชา</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              วิเคราะห์จุดอ่อน & ประเมินความพร้อมรายบุคคล
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ระบบ AI วินิจฉัยข้อสอบจริงเจาะลึก 16 บทย่อย เพื่อค้นหาจุดอ่อนที่ต้องเร่งซ่อม พร้อมประเมินโอกาสสอบติด{' '}
              <strong className="text-yellow-300">{report.targetSchool}</strong>
            </p>

            <div className="flex items-center gap-4 text-xs text-indigo-200 pt-1 flex-wrap">
              <span>👤 ผู้เรียน: <strong className="text-white font-bold">{report.studentName}</strong></span>
              <span>📅 วันที่ประเมิน: <strong className="text-white font-bold">{report.assessmentDate}</strong></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            {onRefresh && (
              <button
                type="button"
                onClick={onRefresh}
                className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>รีเฟรชข้อมูล</span>
              </button>
            )}

            <Link
              href="/parent-report"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 hover:scale-105 transition-all border border-white/20 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์รายงานผู้ปกครอง (PDF)</span>
            </Link>
          </div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Four Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Metric 1: Total Analyzed */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500">ข้อสอบที่วิเคราะห์แล้ว</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">
              {report.totalQuestionsAnalyzed} <span className="text-xs font-bold text-slate-400">ข้อ</span>
            </p>
            <p className="text-[11px] text-blue-600 font-semibold mt-0.5">
              {report.totalMockExamsDone} ชุดจำลองสอบ
            </p>
          </div>
        </div>

        {/* Metric 2: Overall Accuracy */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500">ความแม่นยำรวม 5 วิชา</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">
              {report.overallAccuracy}%
            </p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
              {report.overallAccuracy >= 75 ? '🟢 ระดับความพร้อมสูง' : report.overallAccuracy >= 60 ? '🟡 ระดับปานกลาง' : '🔴 ต้องเร่งพัฒนา'}
            </p>
          </div>
        </div>

        {/* Metric 3: Exam Readiness Index */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500">ดัชนีความพร้อมสอบ</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">
              {report.overallReadiness} <span className="text-xs font-bold text-slate-400">/ 100</span>
            </p>
            <p className="text-[11px] text-purple-600 font-semibold mt-0.5">
              คำนวณถ่วงน้ำหนัก 3 มิติ
            </p>
          </div>
        </div>

        {/* Metric 4: Critical Weaknesses Count */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl ${criticalCount > 0 ? 'bg-rose-50 border border-rose-100 text-rose-600' : 'bg-emerald-50 border border-emerald-100 text-emerald-600'} flex items-center justify-center shrink-0`}>
            {criticalCount > 0 ? <AlertTriangle className="w-6 h-6" /> : <Flame className="w-6 h-6" />}
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500">บทที่ต้องเร่งซ่อม</p>
            <p className={`text-2xl font-black ${criticalCount > 0 ? 'text-rose-600' : 'text-emerald-600'} mt-0.5`}>
              {criticalCount} <span className="text-xs font-bold text-slate-400">บทย่อย</span>
            </p>
            <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
              {criticalCount > 0 ? 'คะแนนยังไม่ถึง 70%' : 'ผ่านเกณฑ์ทุกบทแล้ว 🎉'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
