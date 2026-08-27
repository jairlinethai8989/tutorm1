'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Atom,
  Languages,
  BookMarked,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
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
    <Link
      href={`/subjects/${subject.slug}`}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer p-4 text-left"
    >
      {/* Top Accent Strip */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
        style={{ backgroundColor: subject.color }}
      />

      <div className="space-y-3 pt-1">
        {/* Header: Icon & Topic Count */}
        <div className="flex items-center justify-between gap-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs transition-transform group-hover:scale-105"
            style={{ backgroundColor: subject.color }}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
            {subject.topics.length} หมวด
          </span>
        </div>

        {/* Subject Name & English Title */}
        <div>
          <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
            {subject.name}
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
            {subject.nameEn}
          </p>
        </div>

        {/* Short Summary Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
          {subject.description}
        </p>

        {/* Key Topics Pills */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {subject.topics.slice(0, 2).map((topic) => (
            <span
              key={topic.id}
              className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60 line-clamp-1"
            >
              {topic.name.split(' (')[0]}
            </span>
          ))}
          {subject.topics.length > 2 && (
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
              +{subject.topics.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Action CTA Link */}
      <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold transition-all">
        <span
          className="text-xs font-extrabold group-hover:underline"
          style={{ color: subject.color }}
        >
          ฝึกทำข้อสอบ
        </span>
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center text-white transition-all group-hover:translate-x-1 shadow-2xs"
          style={{ backgroundColor: subject.color }}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
};
