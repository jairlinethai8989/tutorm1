'use client';

import React from 'react';
import { Choice } from '@/types/question';
import { MathText } from '@/components/shared/MathText';
import { Check, CheckCircle2 } from 'lucide-react';

interface MultipleChoiceProps {
  choices: Choice[];
  selectedChoiceId?: string;
  onSelectChoice: (choiceId: string) => void;
  showResult?: boolean;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  choices,
  selectedChoiceId,
  onSelectChoice,
  showResult = false,
}) => {
  return (
    <div className="space-y-3">
      {choices.map((choice) => {
        const isSelected = selectedChoiceId === choice.id;
        const isCorrect = choice.isCorrect;

        let containerStyle = 'bg-white border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/20 text-slate-800 shadow-2xs';
        let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

        if (isSelected) {
          containerStyle = 'bg-blue-50/90 border-blue-600 ring-4 ring-blue-500/20 shadow-md -translate-y-0.5 text-blue-950 font-bold';
          badgeStyle = 'bg-blue-600 text-white border-blue-600 shadow-xs';
        }

        if (showResult) {
          if (isCorrect) {
            containerStyle = 'bg-emerald-50/90 border-emerald-500 ring-4 ring-emerald-500/20 shadow-md text-emerald-950 font-bold';
            badgeStyle = 'bg-emerald-600 text-white border-emerald-600 shadow-xs';
          } else if (isSelected && !isCorrect) {
            containerStyle = 'bg-rose-50/90 border-rose-500 ring-4 ring-rose-500/20 shadow-md text-rose-950 font-bold';
            badgeStyle = 'bg-rose-600 text-white border-rose-600 shadow-xs';
          } else {
            containerStyle = 'bg-slate-50/50 border-slate-200/70 text-slate-400 opacity-50';
            badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
          }
        }

        return (
          <button
            key={choice.id}
            type="button"
            onClick={() => onSelectChoice(choice.id)}
            className={`w-full p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 text-left transition-all duration-150 active:scale-[0.98] flex items-start gap-3.5 sm:gap-4 cursor-pointer select-none ${containerStyle}`}
          >
            {/* Choice Label (ก ข ค ง) */}
            <span
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl font-black text-sm flex items-center justify-center shrink-0 border transition-colors ${badgeStyle}`}
            >
              {choice.label}
            </span>

            {/* Choice Content */}
            <span className="flex-1 pt-1 font-semibold text-slate-900 text-base sm:text-lg block text-left leading-relaxed">
              <MathText content={choice.content} inline={true} />
            </span>

            {/* Selected Indicator */}
            {isSelected && !showResult && (
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            )}

            {showResult && isCorrect && (
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-xs shrink-0 mt-0.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>คำตอบที่ถูก</span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
