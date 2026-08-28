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
        return { label: '📐 คณิตศาสตร์', color: 'bg-blue-50 text-blue-700 border-blue-200', bar: 'bg-blue-500' };
      case 'science':
        return { label: '🔬 วิทยาศาสตร์', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-500' };
      case 'english':
        return { label: '🔤 ภาษาอังกฤษ', color: 'bg-violet-50 text-violet-700 border-violet-200', bar: 'bg-violet-500' };
      case 'thai':
        return { label: '🇹🇭 ภาษาไทย', color: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'bg-amber-500' };
      case 'social':
        return { label: '🌏 สังคมศึกษา', color: 'bg-rose-50 text-rose-700 border-rose-200', bar: 'bg-rose-500' };
      default:
        return { label: '📚 ทบทวน ม.1', color: 'bg-slate-50 text-slate-700 border-slate-200', bar: 'bg-slate-500' };
    }
  };

  const getImportanceBadge = (importance: FormulaItem['importance']) => {
    switch (importance) {
      case 'must_know':
        return { label: '🌟 ต้องจำก่อนเข้าห้องสอบ', color: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'frequent':
        return { label: '📌 ออกสอบบ่อย', color: 'bg-blue-100 text-blue-900 border-blue-300' };
      case 'advanced':
        return { label: '⚡ สูตรเด็ดระดับแข่งขัน', color: 'bg-purple-100 text-purple-900 border-purple-300' };
      default:
        return { label: '💡 สูตรสำคัญ', color: 'bg-slate-100 text-slate-800 border-slate-200' };
    }
  };

  const subjectInfo = getSubjectBadge(item.category);
  const importanceInfo = getImportanceBadge(item.importance);

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group hover:border-blue-400 relative overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${subjectInfo.bar}`} />

      <div>
        {/* Flashcard Header: Subject Pill + Subcategory + Importance + Action Icons */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[11px] font-prompt font-extrabold px-2.5 py-0.5 rounded-full border ${subjectInfo.color}`}>
              {subjectInfo.label}
            </span>
            <span className="text-[10px] font-prompt font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {item.subCategory}
            </span>
            <span className={`text-[10px] font-prompt font-bold px-2 py-0.5 rounded-full border ${importanceInfo.color}`}>
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

        {/* Hero Formula Box (Flashcard Display) */}
        {item.formula && (
          <div className="my-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50 border-2 border-indigo-100/80 text-indigo-950 font-bold text-center text-sm sm:text-base overflow-x-auto shadow-inner">
            <MathText content={item.formula} />
          </div>
        )}

        {/* Description (with full MathText support so LaTeX doesn't leak as raw text) */}
        <div className="font-sarabun text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
          <MathText content={item.description} inline={true} />
        </div>

        {/* Example Box */}
        {item.example && (
          <div className="mt-2.5 text-xs font-sarabun text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 leading-relaxed">
            <span className="font-prompt font-extrabold text-slate-900">💡 ตัวอย่าง: </span>
            <MathText content={item.example} inline={true} />
          </div>
        )}

        {/* Fast Trick / Memory Aid Box */}
        {item.fastTrick && (
          <div className="mt-3 text-xs font-sarabun text-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-2xl border-2 border-amber-200/80 font-bold leading-relaxed shadow-2xs">
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
            className="text-[11px] font-prompt font-extrabold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์การ์ดนี้ (3"x5")</span>
          </button>
        )}
      </div>
    </div>
  );
};
