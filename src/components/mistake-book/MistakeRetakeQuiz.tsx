'use client';

import React, { useState } from 'react';
import { Question } from '@/types/question';
import { toggleResolvedMistake } from '@/lib/storage';
import { MathText } from '@/components/shared/MathText';
import { SolutionViewer } from '@/components/solution/SolutionViewer';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Award,
  Flame,
  Check,
  X,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MistakeRetakeQuizProps {
  questions: Question[];
  onFinish?: () => void;
  onExit?: () => void;
}

export const MistakeRetakeQuiz: React.FC<MistakeRetakeQuizProps> = ({
  questions,
  onFinish,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({});
  const [textAnswers, setTextAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">ยอดเยี่ยมมาก! ไม่มีข้อที่ต้องทบทวน</h3>
        <p className="text-sm text-slate-600">
          คุณทำถูกทุกข้อหรือเคลียร์จุดอ่อนในสมุดบันทึกครบถ้วนแล้ว
        </p>
        <button
          type="button"
          onClick={onExit}
          className="px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 cursor-pointer"
        >
          กลับสู่สมุดจุดอ่อน
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isSubmitted = submittedQuestions[currentQ.id];
  const isCorrect = results[currentQ.id];

  const handleSelectChoice = (choiceId: string) => {
    if (isSubmitted) return;
    setSelectedChoices((prev) => ({ ...prev, [currentQ.id]: choiceId }));
  };

  const handleCheckAnswer = () => {
    if (isSubmitted) return;

    let correct = false;
    if (currentQ.type === 'multiple_choice') {
      const chosen = selectedChoices[currentQ.id];
      const correctChoice = currentQ.choices?.find((c) => c.isCorrect);
      correct = chosen === correctChoice?.id;
    } else if (currentQ.type === 'short_answer') {
      const typed = (textAnswers[currentQ.id] || '').trim();
      const expected = (currentQ.correctAnswer || '').trim();
      correct = typed.toLowerCase() === expected.toLowerCase();
    }

    setSubmittedQuestions((prev) => ({ ...prev, [currentQ.id]: true }));
    setResults((prev) => ({ ...prev, [currentQ.id]: correct }));

    if (correct) {
      // Auto-resolve this mistake in storage
      toggleResolvedMistake(currentQ.id);
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const correctCount = Object.values(results).filter(Boolean).length;
  const accuracy = Math.round((correctCount / questions.length) * 100);

  if (isFinished) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
          <Award className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Re-Test Quiz Completed!
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            ผลการซ้อมสอบซ่อมจุดอ่อน
          </h2>
          <p className="text-sm text-slate-600">
            คุณได้ทบทวนและแก้ไขข้อที่เคยตอบผิดเรียบร้อยแล้ว
          </p>
        </div>

        {/* Score Summary Box */}
        <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 rounded-3xl p-5">
          <div className="text-center">
            <span className="text-xs text-slate-500 font-bold block mb-1">ตอบถูกซ้ำ</span>
            <span className="text-3xl font-black text-emerald-600">
              {correctCount} / {questions.length}
            </span>
          </div>
          <div className="text-center border-l border-slate-200">
            <span className="text-xs text-slate-500 font-bold block mb-1">ความแม่นยำใหม่</span>
            <span className="text-3xl font-black text-blue-600">{accuracy}%</span>
          </div>
        </div>

        <p className="text-xs text-emerald-700 bg-emerald-50 p-3 rounded-2xl border border-emerald-200 font-semibold">
          🎉 ข้อที่คุณตอบถูกในรอบนี้ ระบบได้เปลี่ยนสถานะเป็น "เข้าใจแล้ว (Mastered)" ให้โดยอัตโนมัติ!
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setIsFinished(false);
              setCurrentIndex(0);
              setSubmittedQuestions({});
              setResults({});
            }}
            className="px-5 py-3 rounded-2xl border border-slate-200 hover:bg-slate-100 font-bold text-xs text-slate-700 cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ฝึกซ้ำอีกรอบ</span>
          </button>

          <button
            type="button"
            onClick={onFinish || onExit}
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 hover:scale-105 cursor-pointer"
          >
            กลับสู่สมุดจุดอ่อน
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Progress & Exit */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onExit}
          className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ออกจากการฝึกซ่อม</span>
        </button>

        {/* Progress Bar & Index */}
        <div className="flex items-center gap-3">
          <div className="w-36 sm:w-48 bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="text-xs font-extrabold text-slate-800">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 text-xs">
          <span className="bg-purple-100 text-purple-800 font-bold px-2.5 py-1 rounded-xl">
            {currentQ.topicName || currentQ.subjectId}
          </span>
          {currentQ.school && (
            <span className="text-slate-500 font-semibold">{currentQ.school}</span>
          )}
        </div>

        <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
          <MathText text={currentQ.content} />
        </div>

        {/* Multiple Choice Options */}
        {currentQ.type === 'multiple_choice' && currentQ.choices && (
          <div className="space-y-3">
            {currentQ.choices.map((choice) => {
              const isSelected = selectedChoices[currentQ.id] === choice.id;
              const isChoiceCorrect = choice.isCorrect;

              let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
              if (isSubmitted) {
                if (isChoiceCorrect) {
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-400';
                } else if (isSelected && !isChoiceCorrect) {
                  style = 'bg-rose-50 border-rose-300 text-rose-950 line-through opacity-85';
                }
              } else if (isSelected) {
                style = 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-2 ring-blue-400';
              }

              return (
                <button
                  key={choice.id}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleSelectChoice(choice.id)}
                  className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${style}`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                      isSubmitted
                        ? isChoiceCorrect
                          ? 'bg-emerald-600 text-white'
                          : isSelected
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                        : isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {choice.label || choice.id}
                  </span>
                  <div className="flex-1 text-sm font-medium pt-0.5">
                    <MathText text={choice.content} />
                  </div>
                  {isSubmitted && isChoiceCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {isSubmitted && isSelected && !isChoiceCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Short Answer Input */}
        {currentQ.type === 'short_answer' && (
          <div className="space-y-3">
            <input
              type="text"
              disabled={isSubmitted}
              value={textAnswers[currentQ.id] || ''}
              onChange={(e) => setTextAnswers({ ...textAnswers, [currentQ.id]: e.target.value })}
              placeholder="พิมพ์คำตอบของคุณที่นี่..."
              className="w-full p-4 rounded-2xl border border-slate-300 text-base font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
            {isSubmitted && (
              <div
                className={`p-3 rounded-2xl text-xs font-bold ${
                  isCorrect
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {isCorrect
                  ? '✓ คำตอบถูกต้อง!'
                  : `❌ คำตอบที่ถูกต้องคือ: ${currentQ.correctAnswer}`}
              </div>
            )}
          </div>
        )}

        {/* Feedback & Solution on Submit */}
        {isSubmitted && currentQ.solution && (
          <div className="pt-4 border-t border-slate-100 animate-in fade-in duration-200 space-y-3">
            <div
              className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 ${
                isCorrect
                  ? 'bg-emerald-100/80 text-emerald-900 border border-emerald-300'
                  : 'bg-rose-100/80 text-rose-900 border border-rose-300'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>เก่งมาก! คุณตอบถูกในรอบนี้ และข้อนี้ถูกเปลี่ยนเป็น "เข้าใจแล้ว" ทันที</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>ยังไม่ถูกต้อง ไม่เป็นไร ลองศึกษาเฉลยวิธีคิดด้านล่างแล้วจำไปใช้ในรอบต่อไปนะ!</span>
                </>
              )}
            </div>
            <SolutionViewer solution={currentQ.solution} questionType={currentQ.type} />
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={handlePrev}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ข้อก่อนหน้า</span>
          </button>

          {!isSubmitted ? (
            <button
              type="button"
              disabled={
                currentQ.type === 'multiple_choice'
                  ? !selectedChoices[currentQ.id]
                  : !textAnswers[currentQ.id]?.trim()
              }
              onClick={handleCheckAnswer}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold shadow-md shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:scale-105 transition-all"
            >
              ตรวจคำตอบ
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md shadow-emerald-500/20 cursor-pointer hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <span>{currentIndex < questions.length - 1 ? 'ข้อถัดไป' : 'ดูสรุปผล'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
