'use client';

import React from 'react';
import { UserOverallStats } from '@/types/analytics';
import { BookCheck, CheckCircle2, Flame, Award, Clock, Sparkles } from 'lucide-react';
import { formatDuration } from '@/lib/utils';

interface OverviewCardsProps {
  stats: UserOverallStats;
}

export const OverviewCards: React.FC<OverviewCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Questions Attempted */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <BookCheck className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold">ข้อสอบที่ทำแล้ว</div>
          <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
            {stats.totalQuestionsAttempted} <span className="text-xs font-normal text-slate-400">ข้อ</span>
          </div>
        </div>
      </div>

      {/* 2. Accuracy Rate */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold">ความแม่นยำรวม</div>
          <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
            {stats.accuracyRate}%
          </div>
        </div>
      </div>

      {/* 3. Study Streak */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
          <Flame className="w-6 h-6 fill-orange-500 animate-pulse" />
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold">การเรียนต่อเนื่อง</div>
          <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
            {stats.streakDays} <span className="text-xs font-normal text-slate-400">วัน</span>
          </div>
        </div>
      </div>

      {/* 4. Exam Readiness Score */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs text-slate-500 font-semibold">ดัชนีความพร้อมสอบ</div>
          <div className="text-2xl font-extrabold text-violet-700 mt-0.5">
            {stats.examReadinessScore}%
          </div>
        </div>
      </div>
    </div>
  );
};
