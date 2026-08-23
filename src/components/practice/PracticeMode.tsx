'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Question } from '@/types/question';
import { generateQuestionFromTemplate, getTemplatesByTopic, getTemplatesBySubject, ALL_TEMPLATES } from '@/lib/template-engine';
import { QuestionTemplate } from '@/lib/template-engine/types';
import { MathText } from '@/components/shared/MathText';
import { SolutionViewer } from '@/components/solution/SolutionViewer';
import { StudentNameModal } from '@/components/shared/StudentNameModal';
import { saveAttempt, getUserProfileName } from '@/lib/storage';
import { ExamAttempt, UserAnswer } from '@/types/exam';
import {
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  AlertTriangle,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RefreshCw,
  Trophy,
  User,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PracticeModeProps {
  topicId?: string;
  subjectId?: string;
  topicName?: string;
  title?: string;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({
  topicId,
  subjectId,
  topicName,
  title,
}) => {
  const [templatePool, setTemplatePool] = useState<QuestionTemplate[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState<QuestionTemplate | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | undefined>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  // Student Profile
  const [studentName, setStudentName] = useState<string>('ผู้เรียน');
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);

  // Statistics
  const [totalAttempted, setTotalAttempted] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, UserAnswer>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [sessionStartTime] = useState<string>(new Date().toISOString());

  useEffect(() => {
    setStudentName(getUserProfileName());
  }, []);

  // Initialize templates pool
  useEffect(() => {
    let pool: QuestionTemplate[] = [];
    if (topicId) {
      pool = getTemplatesByTopic(topicId);
    } else if (subjectId) {
      pool = getTemplatesBySubject(subjectId);
    }

    if (pool.length === 0) {
      pool = ALL_TEMPLATES;
    }

    setTemplatePool(pool);
    loadNextQuestion(pool);
  }, [topicId, subjectId]);

  const loadNextQuestion = (pool: QuestionTemplate[] = templatePool) => {
    if (pool.length === 0) return;
    const randomTemplate = pool[Math.floor(Math.random() * pool.length)];
    const q = generateQuestionFromTemplate(randomTemplate);

    setCurrentTemplate(randomTemplate);
    setCurrentQuestion(q);
    setSelectedChoiceId(undefined);
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowSolution(false);
  };

  const regenerateSameTemplate = () => {
    if (!currentTemplate) return;
    const q = generateQuestionFromTemplate(currentTemplate);
    setCurrentQuestion(q);
    setSelectedChoiceId(undefined);
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowSolution(false);
  };

  const handleSelectChoice = (choiceId: string) => {
    if (isSubmitted) return;
    setSelectedChoiceId(choiceId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedChoiceId || !currentQuestion || isSubmitted) return;

    const selectedChoice = currentQuestion.choices?.find((c) => c.id === selectedChoiceId);
    const correct = selectedChoice?.isCorrect === true;

    setIsSubmitted(true);
    setIsCorrect(correct);
    setShowSolution(true);

    const newAttempted = totalAttempted + 1;
    const newCorrect = correct ? correctCount + 1 : correctCount;
    const newStreak = correct ? streak + 1 : 0;
    const newMaxStreak = Math.max(maxStreak, newStreak);

    setTotalAttempted(newAttempted);
    setCorrectCount(newCorrect);
    setStreak(newStreak);
    setMaxStreak(newMaxStreak);

    // Save answer into session answers
    const currentAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      questionType: 'multiple_choice',
      selectedChoiceId,
      isCorrect: correct,
      scoreAwarded: correct ? currentQuestion.points : 0,
      maxScore: currentQuestion.points,
      timeSpentSeconds: 45,
    };
    setSessionAnswers((prev) => ({ ...prev, [currentQuestion.id]: currentAnswer }));

    if (correct) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleFinishSession = () => {
    if (totalAttempted > 0) {
      // Save stats to LocalStorage using existing storage API
      const attempt: ExamAttempt = {
        id: `practice-session-${Date.now()}`,
        examId: topicId || subjectId || 'general-practice',
        examTitle: title || topicName || 'ฝึกทำโจทย์ไม่จำกัด (Template Engine)',
        subjectId: subjectId || currentQuestion?.subjectId || 'math',
        mode: 'practice',
        startedAt: sessionStartTime,
        completedAt: new Date().toISOString(),
        totalQuestions: totalAttempted,
        correctCount,
        wrongCount: totalAttempted - correctCount,
        unansweredCount: 0,
        totalScore: correctCount * 2,
        maxPossibleScore: totalAttempted * 2,
        scorePercentage: Math.round((correctCount / totalAttempted) * 100),
        timeSpentSeconds: totalAttempted * 45,
        timeLimitSeconds: totalAttempted * 90,
        answers: sessionAnswers,
        topicBreakdown: {
          [topicName || 'โจทย์สุ่มอัตโนมัติ']: {
            total: totalAttempted,
            correct: correctCount,
            score: correctCount * 2,
            maxScore: totalAttempted * 2,
          },
        },
      };
      saveAttempt(attempt);
    }
    setIsFinished(true);
  };

  const accuracyRate = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-lg">
          <Trophy className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            สรุปผลการฝึกทำโจทย์แบบสุ่ม
          </h1>
          <p className="text-slate-600 text-sm">
            {title || topicName || 'ระบบสุ่มโจทย์อัตโนมัติ (Template Engine)'}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {correctCount}/{totalAttempted}
            </div>
            <div className="text-xs text-slate-500 font-semibold">ข้อที่ตอบถูก</div>
          </div>
          <div className="space-y-1 border-x border-slate-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
              {accuracyRate}%
            </div>
            <div className="text-xs text-slate-500 font-semibold">ความแม่นยำ</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 flex items-center justify-center gap-1">
              <Flame className="w-5 h-5" />
              <span>{maxStreak}</span>
            </div>
            <div className="text-xs text-slate-500 font-semibold">Streak สูงสุด</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => {
              setTotalAttempted(0);
              setCorrectCount(0);
              setStreak(0);
              setMaxStreak(0);
              setSessionAnswers({});
              setIsFinished(false);
              loadNextQuestion();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>เริ่มฝึกชุดใหม่</span>
          </button>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
          >
            กลับสู่แดชบอร์ด
          </Link>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-500">
        <RefreshCw className="w-6 h-6 animate-spin mr-2" />
        <span>กำลังสร้างโจทย์อัตโนมัติ...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-700 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>ฝึกทำโจทย์ไม่จำกัด</span>
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentQuestion.topicName}
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {title || topicName || currentQuestion.topicName}
            </h1>
          </div>
        </div>
        {/* Stats & Student Badge */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setIsNameModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors cursor-pointer border border-blue-200/60"
          >
            <User className="w-3.5 h-3.5" />
            <span>{studentName}</span>
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
            <span className="text-slate-400">ทำแล้ว:</span>
            <strong className="text-slate-900">{totalAttempted}</strong>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-700 font-bold">
            <span>ถูก:</span>
            <strong>{correctCount}</strong>
          </div>

          {streak > 1 && (
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-700 font-extrabold animate-bounce">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{streak} Streak!</span>
            </div>
          )}
        </div>
      </div>

      {/* AI Generated & Disclaimer Warning Banner */}
      <div className="rounded-2xl p-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-purple-200/80 space-y-2">
        <div className="flex items-center gap-2 text-purple-800 font-bold text-xs">
          <span className="px-2 py-0.5 rounded-md bg-purple-600 text-white text-[11px] font-extrabold flex items-center gap-1">
            🎲 AI-Generated
          </span>
          <span>ระบบสุ่มโจทย์และตัวเลขแบบไดนามิก (Template Engine)</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-purple-900/80 leading-relaxed pl-1">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>คำเตือน:</strong> โจทย์และตัวเลขในข้อนี้ถูกสร้างขึ้นด้วยอัลกอริทึมสุ่มตัวเลขอัจฉริยะ เพื่อให้นักเรียนฝึกคิดคำนวณและแก้ปัญหาซ้ำได้ไม่จำกัดรอบโดยไม่มีวันซ้ำเดิม
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-extrabold text-sm flex items-center justify-center border border-blue-100">
              Q
            </span>
            <span className="text-xs font-semibold text-slate-500">
              แบบฝึกหัดคำนวณแบบสุ่ม (ปรนัย 4 ตัวเลือก)
            </span>
          </div>

          <button
            onClick={regenerateSameTemplate}
            title="สุ่มเปลี่ยนเฉพาะตัวเลขในข้อนี้"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
            <span>สุ่มตัวเลขใหม่</span>
          </button>
        </div>

        {/* Content */}
        <div className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
          <MathText content={currentQuestion.content} />
        </div>

        {/* Multiple Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {currentQuestion.choices?.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            let choiceStyle = 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 text-slate-800';

            if (isSubmitted) {
              if (choice.isCorrect) {
                choiceStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-xs';
              } else if (isSelected && !choice.isCorrect) {
                choiceStyle = 'bg-rose-50 border-rose-400 text-rose-900 line-through opacity-80';
              } else {
                choiceStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            } else if (isSelected) {
              choiceStyle = 'bg-blue-50 border-blue-600 text-blue-900 font-semibold shadow-xs';
            }

            return (
              <button
                key={choice.id}
                onClick={() => handleSelectChoice(choice.id)}
                disabled={isSubmitted}
                className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 ${choiceStyle}`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {choice.label}
                  </span>
                  <span className="text-sm font-medium">
                    <MathText content={choice.content} inline={true} />
                  </span>
                </span>

                {isSubmitted && choice.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && isSelected && !choice.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Submit & Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handleFinishSession}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors"
          >
            สิ้นสุดการฝึกซ้อม
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {!isSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedChoiceId}
                className={`w-full sm:w-auto px-8 py-3 rounded-2xl font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  selectedChoiceId
                    ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02]'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>ตรวจคำตอบ</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => loadNextQuestion()}
                className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>ข้อถัดไป</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Solution Viewer */}
      {showSolution && currentQuestion.solution && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <SolutionViewer solution={currentQuestion.solution} />
        </div>
      )}

      {/* Student Name Modal */}
      <StudentNameModal
        isOpen={isNameModalOpen}
        onClose={() => setIsNameModalOpen(false)}
        onConfirm={(name) => {
          setStudentName(name);
          setIsNameModalOpen(false);
        }}
        title="จัดการโปรไฟล์ผู้เรียน"
        subtitle="ระบุชื่อผู้เรียนเพื่อบันทึกประวัติการฝึกซ้อมใน Dashboard"
      />
    </div>
  );
};
