'use client';

import React from 'react';
import { SubjectCard } from './SubjectCard';
import { getSubjects } from '@/lib/data-loader';
import { BookOpen } from 'lucide-react';

export const SubjectGrid: React.FC = () => {
  const subjects = getSubjects();

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>5 วิชาหลักสำหรับสอบเข้า ม.1</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            เลือกวิชาที่ต้องการฝึกฝน
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </section>
  );
};
