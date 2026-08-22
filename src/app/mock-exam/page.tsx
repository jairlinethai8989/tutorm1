import React from 'react';
import Link from 'next/link';
import { getMockExams } from '@/lib/data-loader';
import { Clock, Target, ArrowRight, Award, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function MockExamListPage() {
  const exams = getMockExams();

  return (
    <div className="space-y-8 pb-16">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>กลับหน้าหลัก</span>
      </Link>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold">
          <Clock className="w-3.5 h-3.5" />
          <span>ระบบจำลองสอบเสมือนจริง (Timed Mock Exam)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          ชุดข้อสอบจำลอง ม.1 โรงเรียนชั้นนำ
        </h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          ฝึกจับเวลาจริง มีกระดาษคำตอบดิจิทัลและระบบประเมินผลความพร้อมสอบทันที เพื่อเตรียมความพร้อมสูงสุดสำหรับสนามสอบเบ็ญจะมะมหาราช และ จุฬาภรณราชวิทยาลัย มุกดาหาร
        </p>
      </div>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-violet-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-xs font-extrabold px-3 py-1 rounded-full text-white shadow-xs"
                  style={{ backgroundColor: exam.badgeColor }}
                >
                  {exam.targetSchool}
                </span>

                <span className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {exam.timeLimitMinutes} นาที
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 leading-snug">
                {exam.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {exam.description}
              </p>

              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-center">
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">จำนวนข้อสอบ</div>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">{exam.totalQuestions} ข้อ</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">เวลาสอบ</div>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">{exam.timeLimitMinutes} นาที</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">เกณฑ์ผ่าน</div>
                  <div className="text-base font-extrabold text-emerald-600 mt-0.5">{exam.passingScorePercent}%</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href={`/mock-exam/${exam.id}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-violet-600 text-white font-extrabold text-sm shadow-md shadow-slate-900/10 transition-all hover:shadow-violet-500/20"
              >
                <span>เข้าสู่ห้องสอบจำลอง</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
