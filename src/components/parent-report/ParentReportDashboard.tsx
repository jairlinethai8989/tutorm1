'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { generateParentDiagnosticReport } from '@/lib/parentReportGenerator';
import { ParentDiagnosticReport } from '@/types/parentReport';

const OfficialReportCard = dynamic(
  () => import('./OfficialReportCard').then((mod) => mod.OfficialReportCard),
  { ssr: false }
);
import {
  Printer,
  Sparkles,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  User,
  GraduationCap,
  Target,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';

export const ParentReportDashboard: React.FC = () => {
  const [report, setReport] = useState<ParentDiagnosticReport | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const data = generateParentDiagnosticReport();
    setReport(data);

    // Phase B Telemetry: Track Parent Report Viewed (Zero-PII Aggregate Only)
    try {
      const { trackParentReportViewed } = require('@/lib/analytics');
      trackParentReportViewed(data?.totalExamsDone || 0, (data?.totalExamsDone || 0) > 0);
    } catch (e) {
      console.debug('Telemetry trackParentReportViewed suppressed', e);
    }
  }, []);

  if (!report) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs font-bold text-slate-500">กำลังประมวลผลรายงานผลสำหรับผู้ปกครอง...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-yellow-300 text-xs font-black border border-white/10 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>มิติที่ 6: Parent Report & PDF Export</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              ระบบรายงานผู้ปกครอง & พิมพ์ใบสรุปผล
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              วิเคราะห์ความพร้อมและความเชี่ยวชาญ 5 วิชาหลัก เพื่อให้คุณพ่อคุณแม่ช่วยแนะนำและวางแผนส่งเสริมน้องได้อย่างตรงจุด ก่อนวันสอบจริง
            </p>

            <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
              <Calendar className="w-4 h-4" />
              <span>ข้อมูลประเมิน ณ วันที่: {report.assessmentDate}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setIsPrintModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer border border-white/20"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ใบสรุปผลประเมิน (PDF A4)</span>
            </button>
          </div>
        </div>

        {/* Decorative ambient lighting */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Student Profile Summary Card */}
      <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/90 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-xs shrink-0 overflow-hidden relative">
            {report.studentAvatar && report.studentAvatar.startsWith('/') ? (
              <img
                src={report.studentAvatar}
                alt={report.studentName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl">{report.studentAvatar || '🎓'}</span>
            )}
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">ผู้เข้าประเมิน</span>
            <h3 className="font-black text-slate-900 text-base sm:text-lg">{report.studentName}</h3>
            <span className="text-xs font-bold text-indigo-600">Level {report.currentLevel} ({report.currentExp} EXP)</span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">สถาบันเป้าหมาย</span>
            <p className="font-black text-slate-900 text-xs sm:text-sm line-clamp-1">{report.targetSchool}</p>
            <span className="text-[11px] text-slate-500 font-medium">เป้าหมายสอบเข้า ม.1</span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-3 lg:pt-0 lg:pl-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">สถิติการฝึกฝน</span>
            <p className="font-black text-slate-900 text-base">{report.totalQuestionsDone} ข้อ</p>
            <span className="text-[11px] text-slate-500 font-medium">{report.totalExamsDone} ชุดข้อสอบจำลอง</span>
          </div>
        </div>

        <div className="flex items-center gap-3.5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-3 lg:pt-0 lg:pl-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">ความพร้อมรวม</span>
            <p className="font-black text-emerald-700 text-base">{report.overallAccuracyPercent}%</p>
            <span className="text-[11px] font-bold text-emerald-600">
              {report.overallReadiness === 'excellent' ? 'พร้อมสอบระดับดีเยี่ยม' : 'ระดับปานกลาง (กำลังพัฒนา)'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. 5-Subject Mastery & Parental Advice */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              📊 ความเชี่ยวชาญ 5 วิชาหลัก & คำแนะนำสำหรับผู้ปกครอง
            </h2>
            <p className="text-xs text-slate-500">ผลการวิเคราะห์เจาะลึกรายวิชาเพื่อการส่งเสริมอย่างมีประสิทธิภาพ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {report.subjects.map((sub) => (
            <div
              key={sub.subjectId}
              className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">
                    {sub.subjectName}
                  </h3>
                  <span
                    className="text-xs font-black px-2.5 py-1 rounded-xl"
                    style={{ backgroundColor: `${sub.color}15`, color: sub.color }}
                  >
                    {sub.accuracyPercent}%
                  </span>
                </div>

                {/* Accuracy Progress Bar */}
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${sub.accuracyPercent}%`, backgroundColor: sub.color }}
                  />
                </div>

                <div className="text-[11px] space-y-1 text-slate-600">
                  <p><strong className="text-slate-700">🌟 จุดแข็ง: </strong>{sub.topStrengths.join(', ')}</p>
                  <p><strong className="text-amber-700">🎯 ควรเน้น: </strong>{sub.focusAreas.join(', ')}</p>
                </div>
              </div>

              {/* AI Advice Box for Parents */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <HeartHandshake className="w-3.5 h-3.5 text-indigo-600" />
                  <span>คำแนะนำคุณพ่อคุณแม่:</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {sub.aiAdviceForParents}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Study Plan Roadmap for Parents */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-base sm:text-lg">
              🗓️ แผนตารางเวลาเตรียมสอบ (Parent Action Roadmap)
            </h3>
            <p className="text-xs text-slate-500">
              ขั้นตอนการร่วมมือระหว่างผู้ปกครองและนักเรียนตามช่วงเวลา
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {report.studyPlanRoadmap.map((step, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-md">
                  ระยะที่ {idx + 1} ({step.duration})
                </span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">{step.phase}</h4>
              <p className="text-[11px] text-slate-600"><strong className="text-slate-700">เป้าหมาย: </strong>{step.focus}</p>
              <p className="text-[11px] text-indigo-900 bg-white p-2.5 rounded-xl border border-indigo-100 font-medium">
                <strong>บทบาทผู้ปกครอง: </strong>{step.parentAction}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Printable PDF View */}
      {isPrintModalOpen && (
        <OfficialReportCard
          report={report}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}
    </div>
  );
};
