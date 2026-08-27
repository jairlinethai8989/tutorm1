'use client';

import React, { useState } from 'react';
import { Question } from '@/types/question';
import { MistakeRecord, toggleResolvedMistake, toggleBookmark, isBookmarked } from '@/lib/storage';
import { MathText } from '@/components/shared/MathText';
import { SolutionViewer } from '@/components/solution/SolutionViewer';
import {
  CheckCircle2,
  XCircle,
  Bookmark,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Calendar,
  Lightbulb,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MistakeCardProps {
  question: Question;
  record?: MistakeRecord;
  onStatusChange?: () => void;
}

export const MistakeCard: React.FC<MistakeCardProps> = ({
  question,
  record,
  onStatusChange,
}) => {
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isResolved, setIsResolved] = useState<boolean>(record?.isResolved || false);
  const [bookmarked, setBookmarked] = useState<boolean>(isBookmarked(question.id));

  const handleToggleResolved = () => {
    const nextState = toggleResolvedMistake(question.id);
    setIsResolved(nextState);
    if (nextState) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
    onStatusChange?.();
  };

  const handleToggleBookmark = () => {
    const nextState = toggleBookmark(question.id);
    setBookmarked(nextState);
    onStatusChange?.();
  };

  return (
    <div
      className={`rounded-3xl border transition-all overflow-hidden ${
        isResolved
          ? 'bg-slate-50/80 border-emerald-200 opacity-90'
          : 'bg-white border-rose-200/90 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Header Bar */}
      <div
        className={`px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-xs border-b ${
          isResolved
            ? 'bg-emerald-50/80 border-emerald-100 text-emerald-800'
            : 'bg-rose-50/70 border-rose-100 text-rose-800'
        }`}
      >
        <div className="flex items-center gap-2 font-bold flex-wrap">
          <span
            className={`px-2.5 py-1 rounded-lg font-extrabold ${
              isResolved
                ? 'bg-emerald-600 text-white'
                : 'bg-rose-600 text-white'
            }`}
          >
            {isResolved ? '✓ เข้าใจแล้ว (Mastered)' : '⚠️ ต้องทบทวน (Needs Review)'}
          </span>
          <span className="text-slate-600 font-semibold">{question.topicName || question.subjectId}</span>
          {question.school && (
            <span className="bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded-md font-medium">
              {question.school} {question.year ? `'${question.year.toString().slice(-2)}` : ''}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {record?.date && (
            <span className="text-slate-500 text-[11px] flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(record.date).toLocaleDateString('th-TH', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
          )}

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            title={bookmarked ? 'ยกเลิกติดดาว' : 'ติดดาวข้อนี้'}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              bookmarked
                ? 'bg-amber-100 border-amber-300 text-amber-600'
                : 'bg-white border-slate-200 text-slate-400 hover:text-amber-500'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-5 sm:p-6 space-y-4">
        <div className="text-base text-slate-900 font-semibold leading-relaxed">
          <MathText text={question.content} />
        </div>

        {/* Choices comparison */}
        {question.choices && question.choices.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {question.choices.map((c) => {
              const isUserChoice = c.id === record?.userSelectedChoiceId;
              const isRight = c.isCorrect;

              let choiceStyle = 'bg-slate-50 border-slate-200 text-slate-700';
              if (isRight) {
                choiceStyle = 'bg-emerald-50/90 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-400';
              } else if (isUserChoice && !isRight) {
                choiceStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through opacity-85';
              }

              return (
                <div
                  key={c.id}
                  className={`p-3 rounded-2xl border text-sm flex items-start gap-2.5 transition-all ${choiceStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isRight
                        ? 'bg-emerald-600 text-white'
                        : isUserChoice
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {c.label || c.id}
                  </span>
                  <div className="flex-1">
                    <MathText text={c.content} />
                  </div>
                  {isRight && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
                  {isUserChoice && !isRight && (
                    <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.5 rounded shrink-0">
                      เคยตอบข้อนี้
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* User Mistake Diagnostic Note */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">สรุปจุดที่ผิด & ข้อควรจำ:</span>
            <p className="text-slate-700 leading-normal">
              {question.solution?.summary || 'ตรวจสอบวิธีคิดและขั้นตอนการคำนวณที่ถูกต้องด้านล่าง'}
            </p>
          </div>
        </div>

        {/* Action Toggle Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{showSolution ? 'ซ่อนเฉลยละเอียด' : 'ดูเฉลยวิธีคิดแบบ Step-by-Step'}</span>
            {showSolution ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* Mark as Resolved Toggle */}
          <button
            type="button"
            onClick={handleToggleResolved}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              isResolved
                ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20 hover:scale-105'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isResolved ? 'ย้ายกลับไปรายการจุดอ่อน' : 'ทำเครื่องหมายว่า "เข้าใจแล้ว"'}</span>
          </button>
        </div>

        {/* Expandable Solution Section */}
        {showSolution && question.solution && (
          <div className="pt-2 animate-in fade-in duration-200">
            <SolutionViewer solution={question.solution} questionType={question.type} />
          </div>
        )}
      </div>
    </div>
  );
};
