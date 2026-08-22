'use client';

import React from 'react';
import { FileEdit, CheckCircle2, Sparkles } from 'lucide-react';
import { MathText } from '@/components/shared/MathText';

interface LongAnswerProps {
  value: string;
  onChange: (val: string) => void;
  showResult?: boolean;
  modelAnswer?: string;
  placeholder?: string;
}

export const LongAnswer: React.FC<LongAnswerProps> = ({
  value,
  onChange,
  showResult = false,
  modelAnswer = '',
  placeholder = 'เขียนแสดงวิธีทำ หรืออธิบายแนวคิดทางวิทยาศาสตร์/คณิตศาสตร์เป็นลำดับขั้นตอน...',
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
        <label className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <FileEdit className="w-3.5 h-3.5 text-purple-600" />
          <span>เขียนอธิบาย / แสดงวิธีทำ (อัตนัยข้อเขียน):</span>
        </label>

        <textarea
          rows={5}
          value={value}
          disabled={showResult}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-500 focus:ring-3 focus:ring-purple-500/20 bg-slate-50/50 text-base font-normal text-slate-800 transition-all resize-y"
        />

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>ฝึกเขียนอธิบายเหตุผลและวิธีทำตามหลักเกณฑ์ข้อสอบรอบสอง</span>
          <span>{value.length} ตัวอักษร</span>
        </div>
      </div>

      {showResult && modelAnswer && (
        <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-purple-800">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>แนวทางการตอบที่ได้คะแนนเต็ม (Model Answer):</span>
          </div>
          <div className="text-sm bg-white/80 p-3.5 rounded-xl border border-purple-100 leading-relaxed font-medium">
            <MathText content={modelAnswer} />
          </div>
        </div>
      )}
    </div>
  );
};
