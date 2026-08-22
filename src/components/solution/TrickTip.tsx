'use client';

import React from 'react';
import { Zap, AlertTriangle } from 'lucide-react';
import { MathText } from '@/components/shared/MathText';

interface TrickTipProps {
  trickTip?: string;
  commonMistake?: string;
}

export const TrickTip: React.FC<TrickTipProps> = ({ trickTip, commonMistake }) => {
  if (!trickTip && !commonMistake) return null;

  return (
    <div className="space-y-3 pt-2">
      {/* Trick Tip Box */}
      {trickTip && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm">
            <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>เทคนิคคิดเร็ว & ดักทางข้อสอบ (Fast Track):</span>
          </div>
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium pl-6">
            <MathText content={trickTip} />
          </div>
        </div>
      )}

      {/* Common Mistake Alert */}
      {commonMistake && (
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/80 border border-rose-200 text-rose-950 space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>จุดที่เด็กมักโดนหลอกบ่อย (Common Trap):</span>
          </div>
          <div className="text-xs sm:text-sm text-rose-900 leading-relaxed font-medium pl-6">
            <MathText content={commonMistake} />
          </div>
        </div>
      )}
    </div>
  );
};
