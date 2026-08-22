'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, Atom, Languages, BookMarked, Compass, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Subject } from '@/types/question';

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return Calculator;
      case 'Atom':
        return Atom;
      case 'Languages':
        return Languages;
      case 'BookMarked':
        return BookMarked;
      case 'Compass':
        return Compass;
      default:
        return Calculator;
    }
  };

  const IconComponent = getIcon(subject.icon);

  return (
    <div className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top Accent Color Bar */}
      <div className="h-2.5 w-full" style={{ backgroundColor: subject.color }} />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header with Icon and Badges */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
              style={{ backgroundColor: subject.color }}
            >
              <IconComponent className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {subject.topics.length} หมวดความรู้
            </span>
          </div>

          {/* Title & English Subtitle */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {subject.name}
          </h3>
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
            {subject.nameEn}
          </p>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {subject.description}
          </p>

          {/* Topics Preview Pills */}
          <div className="space-y-1.5 mb-6">
            <div className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>หัวข้อสำคัญแนว มศว./จภ.:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {subject.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic.id}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100"
                >
                  {topic.name.split(' (')[0]}
                </span>
              ))}
              {subject.topics.length > 3 && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600">
                  +{subject.topics.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/subjects/${subject.slug}`}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm shadow-md transition-all group-hover:opacity-95"
          style={{ backgroundColor: subject.color }}
        >
          <span>เข้าสู่แบบฝึกหัด & ข้อสอบ</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
