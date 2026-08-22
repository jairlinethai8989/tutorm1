'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Award, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { getMockExams } from '@/lib/data-loader';

export const MockExamSection: React.FC = () => {
  const exams = getMockExams();

  return (
    <section className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="flex items-center gap-2 text-violet-600 font-bold text-sm uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            <span>Timed Exam Simulation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ระบบจำลองสอบเสมือนจริง (Mock Exam)
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          จับเวลาจริง มีกระดาษคำตอบดิจิทัล และสรุปผลวิเคราะห์ความพร้อมทันทีหลังส่งสอบ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="group relative bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs hover:shadow-xl hover:border-violet-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className="text-xs font-extrabold px-3 py-1 rounded-full text-white shadow-xs"
                  style={{ backgroundColor: exam.badgeColor }}
                >
                  {exam.targetSchool}
                </span>

                <span className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {exam.timeLimitMinutes} นาที
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-2">
                {exam.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {exam.description}
              </p>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6">
                <div>
                  ข้อสอบทั้งหมด: <span className="font-bold text-slate-900">{exam.totalQuestions} ข้อ</span>
                </div>
                <div>•</div>
                <div>
                  เกณฑ์ผ่านแนะนำ: <span className="font-bold text-emerald-600">{exam.passingScorePercent}%</span>
                </div>
              </div>
            </div>

            <Link
              href={`/mock-exam/${exam.id}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-violet-600 text-white font-bold text-sm shadow-md transition-all group-hover:shadow-violet-500/20"
            >
              <span>เข้าห้องสอบจำลอง</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
