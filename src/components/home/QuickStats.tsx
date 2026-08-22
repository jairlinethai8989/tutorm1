'use client';

import React, { useEffect, useState } from 'react';
import { BookCheck, CheckCircle, Flame, Target } from 'lucide-react';
import { getUserStats } from '@/lib/storage';
import { UserOverallStats } from '@/types/analytics';

export const QuickStats: React.FC = () => {
  const [stats, setStats] = useState<UserOverallStats | null>(null);

  useEffect(() => {
    setStats(getUserStats());
  }, []);

  const items = [
    {
      label: 'ข้อสอบที่ฝึกทำแล้ว',
      value: stats?.totalQuestionsAttempted || 0,
      unit: 'ข้อ',
      icon: BookCheck,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    {
      label: 'อัตราความถูกต้อง',
      value: stats?.accuracyRate || 0,
      unit: '%',
      icon: CheckCircle,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
    },
    {
      label: 'การเรียนต่อเนื่อง (Streak)',
      value: stats?.streakDays || 1,
      unit: 'วัน',
      icon: Flame,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      border: 'border-orange-100',
    },
    {
      label: 'จำลองสอบสำเร็จ',
      value: stats?.mockExamsCompleted || 0,
      unit: 'ชุด',
      icon: Target,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
      border: 'border-violet-100',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className={`p-4 rounded-2xl bg-white border ${item.border} shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow`}
          >
            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">{item.label}</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900">{item.value}</span>
                <span className="text-xs text-slate-500 font-medium">{item.unit}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
