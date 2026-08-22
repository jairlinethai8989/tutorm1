'use client';

import React from 'react';
import { SolutionStep } from '@/types/question';
import { MathText } from '@/components/shared/MathText';
import { CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface StepByStepProps {
  steps: SolutionStep[];
}

export const StepByStep: React.FC<StepByStepProps> = ({ steps }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        <span>ขั้นตอนวิธีทำอย่างละเอียด (Step-by-Step Solution):</span>
      </h3>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-3"
          >
            {/* Step Header */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                {step.stepNumber}
              </span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                {step.title}
              </h4>
            </div>

            {/* Step Content */}
            <div className="pl-8 text-sm sm:text-base text-slate-700 leading-relaxed">
              <MathText content={step.content} />
            </div>

            {/* Optional Step Image / Diagram */}
            {step.imageUrl && (
              <div className="pl-8 pt-2">
                <div className="p-3 bg-white rounded-xl border border-slate-200 inline-block shadow-2xs">
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                    <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
                    <span>{step.imageCaption || 'แผนภาพประกอบ'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
