'use client';

import React, { useState } from 'react';
import { Pencil, CheckCircle2, XCircle } from 'lucide-react';

interface ShortAnswerProps {
  value: string;
  onChange: (val: string) => void;
  onSubmitAnswer?: () => void;
  showResult?: boolean;
  isCorrect?: boolean;
  correctAnswer?: string;
  placeholder?: string;
}

export const ShortAnswer: React.FC<ShortAnswerProps> = ({
  value,
  onChange,
  onSubmitAnswer,
  showResult = false,
  isCorrect = false,
  correctAnswer = '',
  placeholder = 'พิมพ์ตัวเลขหรือคำตอบสั้นๆ ที่นี่...',
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
        <label className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <Pencil className="w-3.5 h-3.5 text-blue-600" />
          <span>กรอกคำตอบอัตนัย:</span>
        </label>

        <div className="relative">
          <input
            type="text"
            value={value}
            disabled={showResult}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && onSubmitAnswer) {
                onSubmitAnswer();
              }
            }}
            placeholder={placeholder}
            className={`w-full px-4 py-3.5 rounded-xl border text-lg font-bold transition-all focus:outline-none ${
              showResult
                ? isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                  : 'border-rose-500 bg-rose-50 text-rose-900'
                : 'border-slate-300 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 bg-slate-50/50'
            }`}
          />
        </div>

        <p className="text-xs text-slate-400">
          💡 คำแนะนำ: สามารถพิมพ์ตัวเลขไทยหรืออารบิกได้ ระบบจะตรวจคำตอบโดยอัตโนมัติ
        </p>
      </div>

      {showResult && (
        <div
          className={`p-4 rounded-2xl border flex items-start gap-3 ${
            isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          {isCorrect ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <div>
            <div className="font-bold text-sm">
              {isCorrect ? 'ยอดเยี่ยมมาก! คุณตอบถูกต้อง' : 'ยังไม่ถูกต้อง'}
            </div>
            {!isCorrect && correctAnswer && (
              <div className="text-xs mt-1 flex items-center gap-1">
                <span>คำตอบที่ถูกต้องคือ:</span>
                <strong className="underline text-rose-900 font-bold">
                  <MathText content={correctAnswer} inline={true} />
                </strong>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
