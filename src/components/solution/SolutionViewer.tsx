'use client';

import React from 'react';
import { Question } from '@/types/question';
import { MathText } from '@/components/shared/MathText';
import { Illustration } from '@/components/shared/Illustration';
import { StepByStep } from './StepByStep';
import { TrickTip } from './TrickTip';
import { Sparkles, Award, Tag, BookOpen, CheckCircle } from 'lucide-react';

interface SolutionViewerProps {
  question: Question;
}

export const SolutionViewer: React.FC<SolutionViewerProps> = ({ question }) => {
  if (!question) return null;
  const correctChoice = question.choices?.find((c) => c.isCorrect);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          {question.topicName && (
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {question.topicName}
            </span>
          )}
          {question.source && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              {question.source}
            </span>
          )}
        </div>

        {question.points !== undefined && (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Award className="w-4 h-4 text-amber-500" />
            <span>{question.points} คะแนน</span>
          </div>
        )}
      </div>

      {/* Question Content */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
          <MathText content={question.content} />
        </h2>

        {/* Visual Graphic if available */}
        <Illustration type={question.id} />
      </div>

      {/* Correct Answer Highlight Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3.5 shadow-2xs">
        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
            คำตอบที่ถูกต้อง
          </div>
          <div className="text-base font-bold text-emerald-950">
            {question.type === 'multiple_choice' && correctChoice ? (
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center shrink-0">
                  {correctChoice.label}
                </span>
                <MathText content={correctChoice.content} inline={true} />
              </div>
            ) : (
              <MathText content={question.correctAnswer || question.solution?.summary || ''} inline={true} />
            )}
          </div>
        </div>
      </div>

      {/* Detailed Explanation Text (if provided and helpful) */}
      {question.solution?.text && (
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 space-y-2">
          <div className="text-xs font-extrabold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>คำอธิบายแนวคิด (Concept & Explanation):</span>
          </div>
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed pl-1 whitespace-pre-line">
            <MathText content={question.solution.text} />
          </div>
        </div>
      )}

      {/* Step by Step Breakdown */}
      {question.solution?.steps && question.solution.steps.length > 0 && (
        <StepByStep steps={question.solution.steps} />
      )}

      {/* Trick & Trap Box */}
      {question.solution && (
        <TrickTip
          trickTip={question.solution.trickTip || question.solution.fastTrick}
          commonMistake={question.solution.commonMistake}
        />
      )}

      {/* Academic Verification Note */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>💡 คำชี้แจง: เฉลยละเอียดจัดทำขึ้นตามแนวทางหลักสูตรแกนกลาง สพฐ. เพื่อการฝึกคิดวิเคราะห์</span>
        <span className="hidden sm:inline">Tutor M.1 Quality Checked ✓</span>
      </div>
    </div>
  );
};
