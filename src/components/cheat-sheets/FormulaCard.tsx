'use client';

import React, { useState } from 'react';
import { FormulaItem } from '@/types/cheatSheet';
import { MathText } from '@/components/shared/MathText';
import { Star, Copy, Check, Sparkles, Lightbulb, HelpCircle, Tag } from 'lucide-react';

interface FormulaCardProps {
  item: FormulaItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const textToCopy = `${item.title}\n${item.formula || ''}\n${item.description}\n${item.fastTrick || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBadgeColor = (importance: FormulaItem['importance']) => {
    switch (importance) {
      case 'must_know':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'frequent':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getImportanceLabel = (importance: FormulaItem['importance']) => {
    switch (importance) {
      case 'must_know':
        return '🌟 ต้องจำก่อนเข้าห้องสอบ';
      case 'frequent':
        return '📌 ออกสอบบ่อย';
      case 'advanced':
        return '⚡ สูตรเด็ดระดับแข่งขัน';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between group hover:border-indigo-300 relative overflow-hidden">
      {/* Top Accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        item.category === 'math' ? 'bg-blue-500' :
        item.category === 'science' ? 'bg-emerald-500' :
        item.category === 'english' ? 'bg-violet-500' :
        item.category === 'thai' ? 'bg-amber-500' : 'bg-rose-500'
      }`} />

      <div>
        {/* Header: SubCategory + Importance Badge + Actions */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
              {item.subCategory}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getBadgeColor(item.importance)}`}>
              {getImportanceLabel(item.importance)}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              title="คัดลอกสูตร"
              className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => onToggleBookmark(item.id)}
              title={isBookmarked ? 'ลบออกจากสูตรโปรด' : 'บันทึกเป็นสูตรโปรด'}
              className="w-7 h-7 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug mb-2">
          {item.title}
        </h4>

        {/* Formula Box (if LaTeX formula exists) */}
        {item.formula && (
          <div className="my-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-indigo-950 font-bold text-center text-xs sm:text-sm overflow-x-auto shadow-2xs">
            <MathText content={item.formula} />
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-2">
          {item.description}
        </p>

        {/* Example Box */}
        {item.example && (
          <div className="mt-2 text-[11px] text-slate-600 bg-slate-50/70 p-2.5 rounded-lg border border-slate-200/60 leading-relaxed">
            <span className="font-bold text-slate-700">ตัวอย่าง: </span>
            <MathText inline={true} content={item.example} />
          </div>
        )}

        {/* Fast Trick Box */}
        {item.fastTrick && (
          <div className="mt-2.5 text-xs text-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 p-2.5 rounded-xl border border-amber-200/80 font-bold leading-relaxed shadow-2xs">
            <MathText content={item.fastTrick} />
          </div>
        )}
      </div>

      {/* Tags Footer */}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
          <Tag className="w-3 h-3 text-slate-400 shrink-0" />
          {item.tags.map((t, idx) => (
            <span key={idx} className="text-[10px] text-slate-500 font-medium hover:text-indigo-600 transition-colors">
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
