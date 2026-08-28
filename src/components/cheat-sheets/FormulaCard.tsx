'use client';

import React, { useState } from 'react';
import { FormulaItem } from '@/types/cheatSheet';
import { MathText } from '@/components/shared/MathText';
import { Star, Copy, Check, Printer, Tag, Sparkles, Lightbulb, Zap } from 'lucide-react';

interface FormulaCardProps {
  item: FormulaItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onPrintSingle?: (item: FormulaItem) => void;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark,
  onPrintSingle,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const textToCopy = `${item.title}\n${item.formula || ''}\n${item.description}\n${item.fastTrick || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSubjectBadge = (cat: string) => {
    switch (cat) {
      case 'math':
        return {
          label: '📐 คณิตศาสตร์',
          badgeStyle: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs',
          subStyle: 'bg-blue-50 text-blue-800 border-blue-200',
          bar: 'bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600',
          border: 'border-blue-100 hover:border-blue-400 hover:shadow-blue-500/10',
          formulaBox: 'bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-indigo-50/60 border-2 border-blue-200 text-blue-950 shadow-xs',
          printColor: 'text-blue-600 hover:text-blue-800',
        };
      case 'science':
        return {
          label: '🔬 วิทยาศาสตร์',
          badgeStyle: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs',
          subStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          bar: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-green-600',
          border: 'border-emerald-100 hover:border-emerald-400 hover:shadow-emerald-500/10',
          formulaBox: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-green-50/60 border-2 border-emerald-200 text-emerald-950 shadow-xs',
          printColor: 'text-emerald-600 hover:text-emerald-800',
        };
      case 'english':
        return {
          label: '🔤 ภาษาอังกฤษ',
          badgeStyle: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-xs',
          subStyle: 'bg-violet-50 text-violet-800 border-violet-200',
          bar: 'bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-600',
          border: 'border-violet-100 hover:border-violet-400 hover:shadow-violet-500/10',
          formulaBox: 'bg-gradient-to-br from-violet-50/90 via-purple-50/50 to-fuchsia-50/60 border-2 border-violet-200 text-violet-950 shadow-xs',
          printColor: 'text-violet-600 hover:text-violet-800',
        };
      case 'thai':
        return {
          label: '🇹🇭 ภาษาไทย',
          badgeStyle: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xs',
          subStyle: 'bg-amber-50 text-amber-800 border-amber-200',
          bar: 'bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500',
          border: 'border-amber-100 hover:border-amber-400 hover:shadow-amber-500/10',
          formulaBox: 'bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-yellow-50/60 border-2 border-amber-200 text-amber-950 shadow-xs',
          printColor: 'text-amber-600 hover:text-amber-800',
        };
      case 'social':
        return {
          label: '🌏 สังคมศึกษา',
          badgeStyle: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-xs',
          subStyle: 'bg-rose-50 text-rose-800 border-rose-200',
          bar: 'bg-gradient-to-r from-rose-500 via-pink-400 to-red-500',
          border: 'border-rose-100 hover:border-rose-400 hover:shadow-rose-500/10',
          formulaBox: 'bg-gradient-to-br from-rose-50/90 via-pink-50/50 to-red-50/60 border-2 border-rose-200 text-rose-950 shadow-xs',
          printColor: 'text-rose-600 hover:text-rose-800',
        };
      default:
        return {
          label: '📚 ทบทวน ม.1',
          badgeStyle: 'bg-gradient-to-r from-slate-600 to-slate-800 text-white shadow-xs',
          subStyle: 'bg-slate-50 text-slate-800 border-slate-200',
          bar: 'bg-slate-500',
          border: 'border-slate-200 hover:border-slate-400 hover:shadow-slate-500/10',
          formulaBox: 'bg-slate-50 border-2 border-slate-200 text-slate-900',
          printColor: 'text-slate-600 hover:text-slate-800',
        };
    }
  };

  const getImportanceBadge = (importance: FormulaItem['importance']) => {
    switch (importance) {
      case 'must_know':
        return { label: '🌟 ต้องจำก่อนเข้าห้องสอบ', color: 'bg-amber-100 text-amber-900 border-amber-300 font-extrabold' };
      case 'frequent':
        return { label: '📌 ออกสอบบ่อย', color: 'bg-sky-100 text-sky-900 border-sky-300 font-bold' };
      case 'advanced':
        return { label: '⚡ สูตรเด็ดระดับแข่งขัน', color: 'bg-purple-100 text-purple-900 border-purple-300 font-bold' };
      default:
        return { label: '💡 สูตรสำคัญ', color: 'bg-slate-100 text-slate-800 border-slate-200 font-bold' };
    }
  };

  const subjectInfo = getSubjectBadge(item.category);
  const importanceInfo = getImportanceBadge(item.importance);

  return (
    <div className={`bg-white rounded-3xl border-2 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden ${subjectInfo.border}`}>
      {/* Top Accent Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${subjectInfo.bar}`} />

      <div>
        {/* Flashcard Header: Subject Pill + Subcategory + Importance + Action Icons */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[11px] font-prompt font-extrabold px-3 py-1 rounded-full ${subjectInfo.badgeStyle}`}>
              {subjectInfo.label}
            </span>
            <span className={`text-[10px] font-prompt font-bold px-2.5 py-0.5 rounded-full border ${subjectInfo.subStyle}`}>
              {item.subCategory}
            </span>
            <span className={`text-[10px] font-prompt px-2.5 py-0.5 rounded-full border ${importanceInfo.color}`}>
              {importanceInfo.label}
            </span>
          </div>

          {/* Action buttons on top right */}
          <div className="flex items-center gap-1 shrink-0">
            {onPrintSingle && (
              <button
                type="button"
                onClick={() => onPrintSingle(item)}
                title="พิมพ์การ์ดใบนี้ (Flashcard ขนาด 3x5 นิ้ว)"
                className="w-8 h-8 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={handleCopy}
              title="คัดลอกสูตร"
              className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => onToggleBookmark(item.id)}
              title={isBookmarked ? 'ลบออกจากสูตรโปรด' : 'บันทึกเป็นสูตรโปรด'}
              className="w-8 h-8 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-amber-50 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Flashcard Title */}
        <h4 className="font-prompt font-black text-base sm:text-lg text-slate-900 leading-snug mb-2.5">
          {item.title}
        </h4>

        {/* Hero Formula Box (Flashcard Display - No Scrollbar, Responsive Fit) */}
        {item.formula && (
          <div className={`my-3 p-3.5 sm:p-4 rounded-2xl ${subjectInfo.formulaBox} font-bold text-center overflow-visible`}>
            <MathText content={item.formula} plainBlock={true} blockClassName="text-sm sm:text-base md:text-lg font-bold" />
          </div>
        )}

        {/* Description */}
        <div className="font-sarabun text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
          <MathText content={item.description} inline={true} />
        </div>

        {/* Example Box */}
        {item.example && (
          <div className="mt-2.5 text-xs font-sarabun text-slate-700 bg-slate-50/90 p-3 rounded-2xl border border-slate-200/80 leading-relaxed">
            <span className="font-prompt font-extrabold text-slate-900">💡 ตัวอย่าง: </span>
            <MathText content={item.example} inline={true} />
          </div>
        )}

        {/* Fast Trick / Memory Aid Box */}
        {item.fastTrick && (
          <div className="mt-3 text-xs font-sarabun text-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-2xl border-2 border-amber-200/90 font-bold leading-relaxed shadow-2xs">
            <MathText content={item.fastTrick} inline={true} />
          </div>
        )}
      </div>

      {/* Card Footer: Tags & Quick Print Link */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Tag className="w-3 h-3 text-slate-400 shrink-0" />
          {item.tags.map((t, idx) => (
            <span key={idx} className="text-[10px] font-prompt text-slate-500 font-medium hover:text-blue-600 transition-colors">
              #{t}
            </span>
          ))}
        </div>

        {onPrintSingle && (
          <button
            type="button"
            onClick={() => onPrintSingle(item)}
            className={`text-[11px] font-prompt font-extrabold flex items-center gap-1 transition-colors cursor-pointer ${subjectInfo.printColor}`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์การ์ดนี้ (3"x5")</span>
          </button>
        )}
      </div>
    </div>
  );
};
