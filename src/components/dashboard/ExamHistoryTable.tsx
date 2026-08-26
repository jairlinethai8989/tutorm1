'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExamAttempt } from '@/types/exam';
import { formatTime } from '@/lib/utils';
import { History, Award, Clock, ArrowRight, Filter, CheckCircle2, XCircle } from 'lucide-react';

interface ExamHistoryTableProps {
  attempts: ExamAttempt[];
}

export const ExamHistoryTable: React.FC<ExamHistoryTableProps> = ({ attempts = [] }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  if (attempts.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <History className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-slate-800 text-base">ยังไม่มีประวัติการทำข้อสอบ</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            เมื่อทำข้อสอบจำลองหรือแบบฝึกหัดเสร็จสิ้น ประวัติคะแนนและการวิเคราะห์จะถูกบันทึกที่นี่โดยอัตโนมัติ
          </p>
        </div>
        <Link
          href="/mock-exam"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all"
        >
          <span>เริ่มทำข้อสอบชุดแรก</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  const filteredAttempts = attempts.filter((att) => {
    if (selectedSubject === 'all') return true;
    return att.subjectId === selectedSubject;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 uppercase tracking-wider">
            <History className="w-4 h-4" />
            <span>Detailed Exam History</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 mt-1">
            ประวัติการทดสอบและผลคะแนนล่าสุด ({attempts.length} ครั้ง)
          </h3>
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'ทั้งหมด' },
            { id: 'math', label: 'คณิตศาสตร์' },
            { id: 'science', label: 'วิทยาศาสตร์' },
            { id: 'english', label: 'ภาษาอังกฤษ' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSubject(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSubject === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
              <th className="pb-3 pl-2">ชื่อชุดข้อสอบ / หมวด</th>
              <th className="pb-3">ประเภท</th>
              <th className="pb-3 text-center">คะแนน</th>
              <th className="pb-3 text-center">ความแม่นยำ</th>
              <th className="pb-3 text-center">เวลาที่ใช้</th>
              <th className="pb-3 text-right pr-2">วันที่ทำ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {filteredAttempts.map((att) => {
              const dateStr = new Date(att.completedAt).toLocaleDateString('th-TH', {
                day: 'numeric',
                month: 'short',
                year: '2-digit',
              });
              const isHigh = att.scorePercentage >= 70;

              return (
                <tr key={att.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 pl-2">
                    <div className="font-bold text-slate-900">{att.examTitle}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      ตอบถูก {att.correctCount} จาก {att.totalQuestions} ข้อ
                    </div>
                  </td>
                  <td className="py-3.5">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-600">
                      {att.mode === 'mock_exam' ? '🏛️ สอบจำลอง' : '🎲 ฝึกทำโจทย์'}
                    </span>
                  </td>
                  <td className="py-3.5 text-center font-bold text-blue-600">
                    {att.totalScore}/{att.maxPossibleScore}
                  </td>
                  <td className="py-3.5 text-center">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold ${
                        isHigh ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {att.scorePercentage}%
                    </span>
                  </td>
                  <td className="py-3.5 text-center text-slate-500 font-mono text-xs">
                    {formatTime(att.timeSpentSeconds)}
                  </td>
                  <td className="py-3.5 text-right pr-2 text-slate-400 text-xs">
                    {dateStr}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
