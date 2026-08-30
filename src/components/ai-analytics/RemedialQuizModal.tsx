'use client';

import React, { useState, useEffect } from 'react';
import { Question } from '@/types/question';
import { ExamAttempt, UserAnswer } from '@/types/exam';
import { MathText } from '@/components/shared/MathText';
import {
  generateRemedialQuiz,
  extractQuestionHints,
  QuestionHintBundle,
} from '@/lib/remedialQuizGenerator';
import { evaluateAnswer, calculateAttemptSummary } from '@/lib/scoring';
import { saveAttempt, toggleResolvedMistake, getResolvedMistakeIds } from '@/lib/storage';
import {
  X,
  Zap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Search,
  AlertTriangle,
  Flame,
  Award,
  ChevronRight,
} from 'lucide-react';

interface RemedialQuizModalProps {
  isOpen: boolean;
  topicId: string | null;
  topicName?: string;
  onClose: () => void;
  onCompleted?: () => void;
}

type ActiveHintTab = 'concept' | 'stepGuide' | 'pitfall' | null;

export const RemedialQuizModal: React.FC<RemedialQuizModalProps> = ({
  isOpen,
  topicId,
  topicName = 'แบบฝึกหัดซ่อมจุดอ่อน',
  onClose,
  onCompleted,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [fromMistakeCount, setFromMistakeCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [selectedChoiceId, setSelectedChoiceId] = useState<string>('');
  const [textAnswer, setTextAnswer] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [currentResult, setCurrentResult] = useState<UserAnswer | null>(null);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [finalSummary, setFinalSummary] = useState<ExamAttempt | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

  // State คำใบ้ 3 ระดับ
  const [activeHintTab, setActiveHintTab] = useState<ActiveHintTab>(null);
  const [currentHints, setCurrentHints] = useState<QuestionHintBundle | null>(null);

  // Initialize Quiz: 10 Questions
  useEffect(() => {
    if (isOpen && topicId) {
      const generated = generateRemedialQuiz(topicId, 10);
      setQuestions(generated.questions);
      setFromMistakeCount(generated.fromMistakeCount);
      setCurrentIndex(0);
      setUserAnswers({});
      setSelectedChoiceId('');
      setTextAnswer('');
      setIsAnswerSubmitted(false);
      setCurrentResult(null);
      setIsFinished(false);
      setFinalSummary(null);
      setActiveHintTab(null);
      setStartTime(Date.now());
      setQuestionStartTime(Date.now());

      if (generated.questions[0]) {
        setCurrentHints(extractQuestionHints(generated.questions[0]));
      }
    }
  }, [isOpen, topicId]);

  // Update hints when current question changes
  useEffect(() => {
    if (questions[currentIndex]) {
      setCurrentHints(extractQuestionHints(questions[currentIndex]));
      setActiveHintTab(null); // Reset hint tab on new question
    }
  }, [currentIndex, questions]);

  if (!isOpen || !topicId) return null;

  const currentQ = questions[currentIndex];

  const handleSubmitAnswer = () => {
    if (!currentQ || isAnswerSubmitted) return;

    const timeSpent = Math.max(1, Math.round((Date.now() - questionStartTime) / 1000));
    const evaluated = evaluateAnswer(
      currentQ,
      {
        selectedChoiceId: currentQ.type === 'multiple_choice' ? selectedChoiceId : undefined,
        textAnswer: currentQ.type !== 'multiple_choice' ? textAnswer : undefined,
        timeSpentSeconds: timeSpent,
      }
    );

    setCurrentResult(evaluated);
    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: evaluated,
    }));

    // Auto-resolve if this question was in mistake book and student answered correctly
    if (evaluated.isCorrect) {
      const resolvedList = getResolvedMistakeIds();
      if (!resolvedList.includes(currentQ.id)) {
        toggleResolvedMistake(currentQ.id);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoiceId('');
      setTextAnswer('');
      setIsAnswerSubmitted(false);
      setCurrentResult(null);
      setActiveHintTab(null);
      setQuestionStartTime(Date.now());
    } else {
      // Finished Quiz
      const totalTimeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
      const summary = calculateAttemptSummary(
        `remedial_${topicId}`,
        `ชุดฝึกซ่อม 10 ข้อ: ${topicName}`,
        questions[0]?.subjectId || 'math',
        'practice',
        questions,
        userAnswers,
        600, // 10 minutes limit benchmark
        totalTimeSpent,
        new Date(startTime).toISOString()
      );

      // Save to localStorage
      saveAttempt(summary);
      setFinalSummary(summary);
      setIsFinished(true);

      // Confetti effect if mastery achieved (score >= 80%)
      if (summary.scorePercentage >= 80 && typeof window !== 'undefined') {
        import('canvas-confetti')
          .then((mod) => {
            const fireConfetti = mod.default || mod;
            fireConfetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 },
            });
          })
          .catch(() => {
            // ignore
          });
      }

      if (onCompleted) {
        onCompleted();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* 1. Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-4 sm:p-5 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shrink-0 shadow-md">
              <Zap className="w-5 h-5 fill-slate-950" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-white/10 text-cyan-300 border border-white/10">
                  <Sparkles className="w-3 h-3" />
                  <span>Adaptive Remedial Drill • 10 ข้อ</span>
                </span>
                {fromMistakeCount > 0 && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-400/30">
                    ดึงจากจุดอ่อนเดิม {fromMistakeCount} ข้อ
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-black truncate mt-0.5">{topicName}</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Question Navigation Step Palette (1-10 Pills) */}
        {!isFinished && questions.length > 0 && (
          <div className="px-4 py-2.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto">
            <span className="text-[11px] font-extrabold text-slate-600 shrink-0">
              ความก้าวหน้า:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
              {questions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCur = idx === currentIndex;
                let pillStyle = 'bg-white text-slate-600 border-slate-300';

                if (ans) {
                  pillStyle = ans.isCorrect
                    ? 'bg-emerald-600 text-white border-emerald-600 font-black shadow-2xs'
                    : 'bg-rose-500 text-white border-rose-500 font-black shadow-2xs';
                } else if (isCur) {
                  pillStyle = 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-400/40 font-black scale-110';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    disabled={!isAnswerSubmitted && idx > currentIndex}
                    onClick={() => {
                      if (isAnswerSubmitted || idx <= currentIndex) {
                        setCurrentIndex(idx);
                        setSelectedChoiceId(userAnswers[q.id]?.selectedChoiceId || '');
                        setTextAnswer(userAnswers[q.id]?.textAnswer || '');
                        setIsAnswerSubmitted(!!userAnswers[q.id]);
                        setCurrentResult(userAnswers[q.id] || null);
                      }
                    }}
                    className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center border transition-all cursor-pointer ${pillStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {!isFinished ? (
            currentQ ? (
              <div className="space-y-5">
                {/* Question Info Badge */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-black">
                      ข้อที่ {currentIndex + 1} / {questions.length}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600 font-semibold">{currentQ.topicName || topicName}</span>
                  </div>

                  {currentQ.difficulty && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {currentQ.difficulty === 'easy' ? 'ระดับง่าย' : currentQ.difficulty === 'hard' ? 'ระดับยาก' : 'ระดับปานกลาง'}
                    </span>
                  )}
                </div>

                {/* Question Content */}
                <div className="space-y-3">
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    <MathText content={currentQ.content} />
                  </div>

                  {currentQ.contentImage && (
                    <div className="rounded-2xl overflow-hidden border border-slate-200 my-2 max-h-60 flex justify-center bg-slate-50">
                      <img
                        src={currentQ.contentImage}
                        alt="โจทย์รูปภาพ"
                        className="max-h-60 object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* 🌟 Clear High-Contrast 3-Tab Hint Menu Bar */}
                {currentHints && !isAnswerSubmitted && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>แถบผู้ช่วยใบ้คำตอบ AI (กดเพื่อเปิดคำใบ้):</span>
                    </p>

                    {/* 3 Distinctly Colored Action Tabs */}
                    <div className="grid grid-cols-3 gap-2">
                      {/* 1. Amber/Gold: Concept & Formula */}
                      <button
                        type="button"
                        onClick={() => setActiveHintTab(activeHintTab === 'concept' ? null : 'concept')}
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-center sm:justify-start gap-2 transition-all cursor-pointer ${
                          activeHintTab === 'concept'
                            ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-400/30 font-black'
                            : 'bg-amber-50 hover:bg-amber-100/80 text-amber-900 border-amber-300/80 font-bold'
                        }`}
                      >
                        <Lightbulb className={`w-4 h-4 shrink-0 ${activeHintTab === 'concept' ? 'text-white' : 'text-amber-600'}`} />
                        <span className="text-xs truncate">สูตร/ทฤษฎี</span>
                      </button>

                      {/* 2. Cyan/Blue: Step Guidance */}
                      <button
                        type="button"
                        onClick={() => setActiveHintTab(activeHintTab === 'stepGuide' ? null : 'stepGuide')}
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-center sm:justify-start gap-2 transition-all cursor-pointer ${
                          activeHintTab === 'stepGuide'
                            ? 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-400/30 font-black'
                            : 'bg-blue-50 hover:bg-blue-100/80 text-blue-900 border-blue-300/80 font-bold'
                        }`}
                      >
                        <Search className={`w-4 h-4 shrink-0 ${activeHintTab === 'stepGuide' ? 'text-white' : 'text-blue-600'}`} />
                        <span className="text-xs truncate">ไกด์แนวคิด</span>
                      </button>

                      {/* 3. Orange/Rose: Pitfall Alert */}
                      <button
                        type="button"
                        onClick={() => setActiveHintTab(activeHintTab === 'pitfall' ? null : 'pitfall')}
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-center sm:justify-start gap-2 transition-all cursor-pointer ${
                          activeHintTab === 'pitfall'
                            ? 'bg-rose-600 text-white border-rose-700 shadow-md ring-2 ring-rose-400/30 font-black'
                            : 'bg-rose-50 hover:bg-rose-100/80 text-rose-900 border-rose-300/80 font-bold'
                        }`}
                      >
                        <AlertTriangle className={`w-4 h-4 shrink-0 ${activeHintTab === 'pitfall' ? 'text-white' : 'text-rose-600'}`} />
                        <span className="text-xs truncate">จุดลวงที่ต้องระวัง</span>
                      </button>
                    </div>

                    {/* Active Hint Content Card */}
                    {activeHintTab === 'concept' && (
                      <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 text-xs font-semibold leading-relaxed animate-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center gap-1.5 font-black text-amber-900 mb-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-600" />
                          <span>สูตร / ทฤษฎีสำคัญของข้อนี้:</span>
                        </div>
                        <MathText content={currentHints.concept} />
                      </div>
                    )}

                    {activeHintTab === 'stepGuide' && (
                      <div className="p-3.5 rounded-2xl bg-blue-50 border-2 border-blue-300 text-blue-950 text-xs font-semibold leading-relaxed animate-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center gap-1.5 font-black text-blue-900 mb-1.5">
                          <Search className="w-4 h-4 text-blue-600" />
                          <span>แนวทางเริ่มต้นวิเคราะห์:</span>
                        </div>
                        <MathText content={currentHints.stepGuide} />
                      </div>
                    )}

                    {activeHintTab === 'pitfall' && (
                      <div className="p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 text-xs font-semibold leading-relaxed animate-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center gap-1.5 font-black text-rose-900 mb-1.5">
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                          <span>กับดักโจทย์ที่เด็กมักโดนหลอก:</span>
                        </div>
                        <MathText content={currentHints.pitfall} />
                      </div>
                    )}
                  </div>
                )}

                {/* Choices (Multiple Choice) */}
                {currentQ.type === 'multiple_choice' && currentQ.choices && (
                  <div className="space-y-3 pt-2">
                    {currentQ.choices.map((choice) => {
                      const isSelected = selectedChoiceId === choice.id;
                      let choiceStyle = 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 text-slate-800 shadow-2xs';
                      let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

                      if (isAnswerSubmitted) {
                        if (choice.isCorrect) {
                          choiceStyle = 'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400/40 shadow-sm';
                          badgeStyle = 'bg-emerald-600 text-white border-emerald-600 shadow-xs';
                        } else if (isSelected && !choice.isCorrect) {
                          choiceStyle = 'bg-rose-50/90 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-400/40 shadow-sm';
                          badgeStyle = 'bg-rose-600 text-white border-rose-600 shadow-xs';
                        } else {
                          choiceStyle = 'bg-slate-50/50 border-slate-200/80 text-slate-400 opacity-50';
                          badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
                        }
                      } else if (isSelected) {
                        choiceStyle = 'bg-indigo-50/90 border-indigo-600 text-indigo-950 font-bold ring-4 ring-indigo-500/20 shadow-md -translate-y-0.5';
                        badgeStyle = 'bg-indigo-600 text-white border-indigo-600 shadow-xs';
                      }

                      return (
                        <button
                          key={choice.id}
                          type="button"
                          disabled={isAnswerSubmitted}
                          onClick={() => setSelectedChoiceId(choice.id)}
                          className={`w-full p-4 sm:p-4.5 rounded-2xl sm:rounded-3xl border-2 text-left flex items-center justify-between gap-3.5 transition-all duration-150 active:scale-[0.98] cursor-pointer select-none ${choiceStyle}`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <span className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl border flex items-center justify-center font-black text-sm shrink-0 transition-colors ${badgeStyle}`}>
                              {choice.label}
                            </span>
                            <span className="text-sm sm:text-base font-semibold leading-snug">
                              <MathText content={choice.content} inline={true} />
                            </span>
                          </div>

                          {isAnswerSubmitted && choice.isCorrect && (
                            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                          )}
                          {isAnswerSubmitted && isSelected && !choice.isCorrect && (
                            <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 shadow-2xs">
                              <AlertCircle className="w-5 h-5" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Short Answer Input */}
                {currentQ.type !== 'multiple_choice' && (
                  <div className="space-y-2 pt-2">
                    <input
                      type="text"
                      disabled={isAnswerSubmitted}
                      value={textAnswer}
                      onChange={(e) => setTextAnswer(e.target.value)}
                      placeholder="พิมพ์คำตอบของคุณที่นี่ (เช่น ตัวเลข หรือข้อความ)..."
                      className="w-full p-4 rounded-2xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-base font-bold"
                    />
                  </div>
                )}

                {/* Solution Explanation Box (When Submitted) */}
                {isAnswerSubmitted && currentResult && (
                  <div className={`p-4 rounded-2xl border animate-in slide-in-from-top-2 duration-200 ${
                    currentResult.isCorrect
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/80 border-rose-200 text-rose-950'
                  }`}>
                    <div className="flex items-center gap-2 font-black text-sm mb-2">
                      {currentResult.isCorrect ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span className="text-emerald-700">ถูกต้อง! ยอดเยี่ยมมาก 🎉</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-rose-600" />
                          <span className="text-rose-700">ยังไม่ถูกต้อง ลองศึกษาเฉลยด้านล่าง</span>
                        </>
                      )}
                    </div>

                    <div className="text-xs font-semibold leading-relaxed text-slate-800 space-y-1">
                      <p className="font-bold">💡 เฉลยละเอียด:</p>
                      <MathText content={currentQ.solution?.summary || 'ดูขั้นตอนการคิดด้านล่าง'} />
                    </div>

                    {currentQ.solution?.fastTrick && (
                      <div className="mt-2.5 p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <span>เทคนิคคิดลัด: </span>
                          <MathText content={currentQ.solution.fastTrick} inline={true} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-10 text-slate-500 text-sm">
                ไม่พบข้อสอบในหมวดนี้
              </div>
            )
          ) : (
            /* 4. Quiz Complete Celebration Screen (10 Questions Summary) */
            <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className={`w-20 h-20 rounded-3xl ${
                finalSummary && finalSummary.scorePercentage >= 80
                  ? 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 shadow-amber-500/30'
                  : finalSummary && finalSummary.scorePercentage >= 60
                  ? 'bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-blue-500/30'
                  : 'bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-rose-500/30'
              } flex items-center justify-center mx-auto shadow-lg`}>
                {finalSummary && finalSummary.scorePercentage >= 80 ? (
                  <Trophy className="w-10 h-10 fill-slate-950" />
                ) : (
                  <Award className="w-10 h-10" />
                )}
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black shadow-2xs border bg-indigo-50 text-indigo-700 border-indigo-200">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>
                    {finalSummary && finalSummary.scorePercentage >= 80
                      ? '🎉 ปลดล็อกความชำนาญสำเร็จ (Mastery Unlocked)'
                      : finalSummary && finalSummary.scorePercentage >= 60
                      ? '🟡 กำลังพัฒนาสู่จุดแข็ง (Improving)'
                      : '🔴 ควรฝึกซ้อมทบทวนเพิ่มเติม'}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  ฝึกซ่อมครบ 10 ข้อเรียบร้อยแล้ว!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  {finalSummary && finalSummary.scorePercentage >= 80
                    ? `ยอดเยี่ยมมาก! คุณทำคะแนนได้ ${finalSummary.scorePercentage}% จุดอ่อนเรื่องนี้ได้รับการปลดล็อกเป็นจุดแข็งแล้ว`
                    : `คุณทำคะแนนได้ ${finalSummary?.scorePercentage}% สามารถเปิดอ่านสรุปสูตรแล้วฝึกทำซ้ำเพื่อยกระดับคะแนน`}
                </p>
              </div>

              {/* 3 Metric Result Tiles */}
              {finalSummary && (
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                    <p className="text-[11px] text-slate-500 font-bold">ทำถูก</p>
                    <p className="text-2xl font-black text-blue-600 mt-0.5">
                      {finalSummary.correctCount}/10
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <p className="text-[11px] text-slate-500 font-bold">ความแม่นยำ</p>
                    <p className="text-2xl font-black text-emerald-600 mt-0.5">
                      {finalSummary.scorePercentage}%
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                    <p className="text-[11px] text-slate-500 font-bold">โบนัส EXP</p>
                    <p className="text-2xl font-black text-amber-600 mt-0.5">
                      +{finalSummary.scorePercentage >= 80 ? '250' : finalSummary.scorePercentage >= 60 ? '150' : '50'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 5. Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            {isFinished ? 'ปิดหน้าต่าง' : 'ยกเลิก'}
          </button>

          {!isFinished ? (
            !isAnswerSubmitted ? (
              <button
                type="button"
                disabled={!selectedChoiceId && !textAnswer}
                onClick={handleSubmitAnswer}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-black shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
              >
                ตรวจคำตอบ
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105"
              >
                <span>{currentIndex < questions.length - 1 ? `ข้อถัดไป (${currentIndex + 2}/10)` : 'ดูสรุปผลคะแนน 10 ข้อ'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md shadow-emerald-500/20 transition-all cursor-pointer hover:scale-105"
            >
              กลับหน้าวิเคราะห์ผล (อัปเดตสถิติแล้ว)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
