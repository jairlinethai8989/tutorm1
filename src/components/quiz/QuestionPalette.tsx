'use client';

import React from 'react';
import { Question } from '@/types/question';
import { Flag, Check } from 'lucide-react';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  answers: Record<string, { selectedChoiceId?: string; textAnswer?: string; markedForReview?: boolean; isCorrect?: boolean }>;
  showResult?: boolean;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentIndex,
  onSelectIndex,
  answers,
  showResult = false,
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          แผงข้อสอบ ({questions.length} ข้อ)
        </h4>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
        {questions.map((q, idx) => {
          const ans = answers[q.id];
          const isCurrent = idx === currentIndex;
          const isAnswered =
            (q.type === 'multiple_choice' && !!ans?.selectedChoiceId) ||
            (q.type !== 'multiple_choice' && !!ans?.textAnswer && ans.textAnswer.trim() !== '');
          const isFlagged = ans?.markedForReview;

          let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';

          if (isAnswered) {
            btnClass = 'bg-blue-600 text-white border-blue-600 font-bold shadow-2xs';
          }

          if (showResult && ans) {
            if (ans.isCorrect) {
              btnClass = 'bg-emerald-600 text-white border-emerald-600 font-bold';
            } else if (isAnswered) {
              btnClass = 'bg-rose-500 text-white border-rose-500 font-bold';
            }
          }

          if (isCurrent) {
            btnClass += ' ring-2 ring-blue-500 ring-offset-2 scale-105';
          }

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectIndex(idx)}
              className={`relative h-9 w-full rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer border ${btnClass}`}
            >
              <span>{idx + 1}</span>

              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 text-amber-950 rounded-full flex items-center justify-center shadow-xs">
                  <Flag className="w-2 h-2 fill-current" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" /> ตอบแล้ว
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" /> ยังไม่ตอบ
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> ปักหมุดทบทวน
        </span>
      </div>
    </div>
  );
};
