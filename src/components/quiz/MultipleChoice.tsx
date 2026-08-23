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

        let containerStyle = 'bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/30';
        let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

        if (isSelected) {
          containerStyle = 'bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20';
          badgeStyle = 'bg-blue-600 text-white border-blue-600';
        }

        if (showResult) {
          if (isCorrect) {
            containerStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20';
            badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
          } else if (isSelected && !isCorrect) {
            containerStyle = 'bg-rose-50 border-rose-500 ring-2 ring-rose-500/20';
            badgeStyle = 'bg-rose-600 text-white border-rose-600';
          }
        }

        return (
          <button
            key={choice.id}
            type="button"
            onClick={() => onSelectChoice(choice.id)}
            className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer shadow-2xs ${containerStyle}`}
          >
            {/* Choice Label (ก ข ค ง) */}
            <span
              className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 border transition-colors ${badgeStyle}`}
            >
              {choice.label}
            </span>

            {/* Choice Content */}
            <span className="flex-1 pt-1 font-medium text-slate-800 text-base block text-left">
              <MathText content={choice.content} inline={true} />
            </span>

            {/* Selected Indicator */}
            {isSelected && !showResult && (
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            )}

            {showResult && isCorrect && (
              <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs shrink-0 mt-1">
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
