'use client';

import React from 'react';
import { ExamAttempt } from '@/types/exam';
import { formatTime } from '@/lib/utils';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

interface ScoreHistoryChartProps {
  attempts: ExamAttempt[];
}

export const ScoreHistoryChart: React.FC<ScoreHistoryChartProps> = ({ attempts }) => {
  if (attempts.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs text-center py-10">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
          <TrendingUp className="w-6 h-6" />
        </div>
        <h4 className="font-bold text-slate-700 text-base">ยังไม่มีประวัติการสอบจำลอง</h4>
        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          เมื่อคุณทำข้อสอบในระบบจำลองสอบจริง (Mock Exam) ประวัติและพัฒนาการคะแนนจะแสดงที่นี่
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span>ประวัติและพัฒนาการคะแนนล่าสุด</span>
        </h3>
        <span className="text-xs font-semibold text-slate-500">
          บันทึก {attempts.length} ครั้งล่าสุด
        </span>
      </div>

      <div className="space-y-3">
        {attempts.slice(0, 5).map((att) => (
          <div
            key={att.id}
            className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <div className="font-bold text-slate-900 text-sm">{att.examTitle}</div>
              <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {formatTime(att.timeSpentSeconds)}
                </span>
                <span>•</span>
                <span>ถูก {att.correctCount} จาก {att.totalQuestions} ข้อ</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-lg font-extrabold text-blue-600">
                  {att.scorePercentage}%
                </div>
                <div className="text-[11px] font-bold text-slate-500">
                  {att.totalScore}/{att.maxPossibleScore} คะแนน
                </div>
              </div>

              <div
                className={`w-2 h-10 rounded-full ${
                  att.scorePercentage >= 70 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
