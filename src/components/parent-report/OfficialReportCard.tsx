'use client';

import React from 'react';
import { ParentDiagnosticReport } from '@/types/parentReport';
import { Printer, X, Award, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';

interface OfficialReportCardProps {
  report: ParentDiagnosticReport;
  onClose?: () => void;
}

export const OfficialReportCard: React.FC<OfficialReportCardProps> = ({
  report,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[999999] bg-slate-900/60 backdrop-blur-xs overflow-y-auto p-3 sm:p-6 print:p-0 print:bg-white flex justify-center items-start">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none print:w-full border border-slate-200 print:border-none p-6 sm:p-10 my-4 space-y-6">
        {/* Print & Action Bar (Hidden on Print) */}
        <div className="flex items-center justify-between border-b pb-4 print:hidden">
          <div className="flex items-center gap-2 text-slate-800 font-black">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>ใบรายงานผลการประเมินทักษะทางการเรียน (Official Report Card)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ใบรายงานผล / เซฟเป็น PDF</span>
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>ปิด</span>
              </button>
            )}
          </div>
        </div>

        {/* 1. Official Header */}
        <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="h-16 w-auto shrink-0 relative flex items-center">
              <img
                src="/images/logom1-2.png"
                alt="Tutor M.1 Logo"
                width={180}
                height={64}
                decoding="async"
                className="h-16 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                TUTOR M.1 ACADEMIC ASSESSMENT REPORT
              </h1>
              <p className="text-xs font-bold text-indigo-900">
                รายงานผลการประเมินทักษะและความพร้อมเพื่อสอบเข้า ม.1 (สำหรับผู้ปกครอง)
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right text-xs text-slate-600">
            <p className="font-bold text-slate-900">วันที่ประเมิน: {report.assessmentDate}</p>
            <p className="text-[11px] text-slate-500">รหัสรายงาน: TM1-{Date.now().toString().slice(-6)}</p>
          </div>
        </div>

        {/* 2. Student Info Box */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-slate-500 font-medium">ชื่อผู้เข้าประเมิน:</span>
            <p className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2 mt-0.5">
              {report.studentAvatar && report.studentAvatar.startsWith('/') ? (
                <img
                  src={report.studentAvatar}
                  alt={report.studentName}
                  className="w-6 h-6 rounded-md object-cover shrink-0"
                />
              ) : (
                <span>{report.studentAvatar || '🎓'}</span>
              )}
              <span>{report.studentName}</span>
            </p>
          </div>
          <div>
            <span className="text-slate-500 font-medium">สถาบันเป้าหมาย:</span>
            <p className="font-bold text-indigo-700 text-xs sm:text-sm mt-0.5">
              {report.targetSchool}
            </p>
          </div>
          <div>
            <span className="text-slate-500 font-medium">ระดับความพร้อมรวม:</span>
            <p className="font-black text-emerald-700 text-xs sm:text-sm mt-0.5 flex items-center gap-1">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>ความแม่นยำรวม {report.overallAccuracyPercent}% ({report.overallReadiness === 'excellent' ? 'พร้อมสอบระดับดีเยี่ยม' : 'ระดับปานกลาง'})</span>
            </p>
          </div>
        </div>

        {/* 3. 5-Subject Mastery Breakdown Table */}
        <div className="space-y-2">
          <h3 className="font-black text-slate-900 text-xs sm:text-sm">
            📊 ผลการประเมินรายวิชา 5 วิชาหลัก (5-Subject Mastery Matrix)
          </h3>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-2.5 px-3">วิชาที่สอบ</th>
                  <th className="py-2.5 px-3 text-center">ความแม่นยำ (%)</th>
                  <th className="py-2.5 px-3">ระดับความพร้อม</th>
                  <th className="py-2.5 px-3">จุดแข็งประจำวิชา</th>
                  <th className="py-2.5 px-3">จุดที่ต้องเร่งเสริม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {report.subjects.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{s.subjectName}</td>
                    <td className="py-2.5 px-3 text-center font-black" style={{ color: s.color }}>
                      {s.accuracyPercent}%
                    </td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        s.readinessLevel === 'excellent' ? 'bg-emerald-100 text-emerald-800' :
                        s.readinessLevel === 'moderate' ? 'bg-amber-100 text-amber-800' :
                        'bg-rose-100 text-rose-800'
                      }`}>
                        {s.readinessText}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 text-[11px]">{s.topStrengths.join(', ')}</td>
                    <td className="py-2.5 px-3 text-slate-600 text-[11px]">{s.focusAreas.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. AI Diagnostic Insights for Parents */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-2.5 text-xs text-indigo-950">
          <div className="flex items-center gap-2 font-black text-indigo-900 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span>ข้อคิดเห็นและข้อเสนอแนะจากระบบประเมิน AI (AI Recommendations for Parents):</span>
          </div>
          <p className="leading-relaxed text-slate-700">
            {report.overallAssessmentText}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white rounded-xl border border-indigo-100">
              <span className="font-bold text-emerald-800 block mb-1">🌟 จุดเด่นที่ควรชื่นชม:</span>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                {report.topGlobalStrengths.map((st, i) => (
                  <li key={i}>{st}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100">
              <span className="font-bold text-amber-800 block mb-1">🎯 จุดที่ผู้ปกครองควรช่วยส่งเสริม:</span>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                {report.topGlobalWeaknesses.map((wk, i) => (
                  <li key={i}>{wk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Signatures & Official Stamp Footer */}
        <div className="pt-6 border-t grid grid-cols-2 gap-8 text-center text-xs text-slate-600 items-end">
          {/* Left: Parent Signature */}
          <div className="space-y-4 pb-2">
            <div className="h-16 flex items-end justify-center">
              <div className="border-b border-dashed border-slate-400 w-48 mx-auto" />
            </div>
            <p className="font-bold text-slate-800">
              ( .................................................... )<br />
              <span className="text-[11px] text-slate-500 font-normal">ลายมือชื่อผู้ปกครอง / ผู้ดูแล</span>
            </p>
          </div>

          {/* Right: Official Mascot Stamp & AI Verification Seal */}
          <div className="space-y-2 flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center">
              <img
                src="/images/tutor-m1-official-seal.png"
                alt="Tutor M.1 Official Seal"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="border-b border-dashed border-slate-400 w-48 mx-auto" />
            <p className="font-bold text-slate-800">
              ระบบประเมินผลอัจฉริยะ Tutor M.1<br />
              <span className="text-[11px] text-slate-500 font-normal">AI Learning Diagnostic Engine • ตรวจสอบความถูกต้องแล้ว</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
