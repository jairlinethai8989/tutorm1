'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Question } from '@/types/question';
import { MultipleChoice } from './MultipleChoice';
import { ShortAnswer } from './ShortAnswer';
import { LongAnswer } from './LongAnswer';
import { MathText } from '@/components/shared/MathText';
import { Illustration } from '@/components/shared/Illustration';
import { SolutionViewer } from '@/components/solution/SolutionViewer';
import { StudentNameModal } from '@/components/shared/StudentNameModal';
import { AITutorDrawer } from '@/components/quiz/AITutorDrawer';
import { CuteAIBotIcon } from '@/components/shared/CuteAIBotIcon';
import { evaluateAnswer } from '@/lib/scoring';
import { saveAttempt, isBookmarked, toggleBookmark, getUserProfileName } from '@/lib/storage';
import { shuffleQuestionChoices } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Award,
  User,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizPlayerProps {
  question: Question;
  allQuestions?: Question[];
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({ question, allQuestions = [] }) => {
  const [activeQuestion, setActiveQuestion] = useState<Question>(() => shuffleQuestionChoices(question));
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | undefined>();
  const [textAnswer, setTextAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('ผู้เรียน');
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);

  useEffect(() => {
    setStudentName(getUserProfileName());
  }, []);

  useEffect(() => {
    setActiveQuestion(shuffleQuestionChoices(question));
    setSelectedChoiceId(undefined);
    setTextAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowSolution(false);
    setBookmarked(isBookmarked(question.id));
  }, [question.id]);

  const handleToggleBookmark = () => {
    const newState = toggleBookmark(question.id);
    setBookmarked(newState);
  };

  const handleSubmit = () => {
    if (isSubmitted) return;

    const evalResult = evaluateAnswer(activeQuestion, {
      selectedChoiceId,
      textAnswer,
      timeSpentSeconds: 30,
    });

    setIsSubmitted(true);
    setIsCorrect(evalResult.isCorrect || false);

    if (evalResult.isCorrect) {
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {}
    }

    // Save individual attempt
    saveAttempt({
      id: `att_${Date.now()}`,
      examId: `practice_${question.id}`,
      examTitle: `ฝึกทำโจทย์: ${question.topicName}`,
      subjectId: question.subjectId,
      mode: 'practice',
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      totalQuestions: 1,
      correctCount: evalResult.isCorrect ? 1 : 0,
      wrongCount: evalResult.isCorrect ? 0 : 1,
      unansweredCount: 0,
      totalScore: evalResult.scoreAwarded || 0,
      maxPossibleScore: question.points,
      scorePercentage: evalResult.isCorrect ? 100 : 0,
      timeSpentSeconds: 30,
      timeLimitSeconds: question.timeEstimateSeconds,
      answers: {
        [question.id]: evalResult,
      },
      topicBreakdown: {
        [question.topicName]: {
          total: 1,
          correct: evalResult.isCorrect ? 1 : 0,
          score: evalResult.scoreAwarded || 0,
          maxScore: question.points,
        },
      },
    });
  };

  const handleReset = () => {
    setSelectedChoiceId(undefined);
    setTextAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowSolution(false);
  };

  const currentIndex = allQuestions.findIndex((q) => q.id === question.id);
  const nextQuestion = currentIndex >= 0 && currentIndex < allQuestions.length - 1 ? allQuestions[currentIndex + 1] : null;
  const prevQuestion = currentIndex > 0 ? allQuestions[currentIndex - 1] : null;

  const totalInSet = allQuestions.length;
  const currentPos = currentIndex >= 0 ? currentIndex + 1 : 1;
  const progressPercent = totalInSet > 0 ? Math.round((currentPos / totalInSet) * 100) : 0;

  const canSubmit =
    question.type === 'multiple_choice' ? !!selectedChoiceId : textAnswer.trim().length > 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href={`/subjects/${question.subjectId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>กลับไปหน้าหัวข้อวิชา</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsNameModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors cursor-pointer border border-blue-200/60"
          >
            <User className="w-3.5 h-3.5" />
            <span>{studentName}</span>
          </button>

          <button
            type="button"
            onClick={handleToggleBookmark}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
              bookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{bookmarked ? 'บันทึกแล้ว' : 'บันทึกทบทวน'}</span>
          </button>
        </div>
      </div>

      {/* Quiz Progress Bar (when multiple questions in set) */}
      {totalInSet > 1 && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between text-xs flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-700">📊 ความคืบหน้าแบบฝึกหัด:</span>
              <span className="font-extrabold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-lg">
                ข้อที่ {currentPos} จากทั้งหมด {totalInSet} ข้อ
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-extrabold text-slate-900 text-sm">
              <span className="text-blue-600">{progressPercent}%</span>
            </div>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-300 shadow-xs"
              style={{ width: `${Math.max(4, progressPercent)}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        {/* Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {question.topicName}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              {question.source}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setIsAITutorOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-xs font-black transition-all shadow-sm hover:scale-105 cursor-pointer"
            >
              <CuteAIBotIcon size={18} animated={true} />
              <span>ครู AI ช่วยใบ้ & สูตรลัด</span>
            </button>

            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-2xl border border-slate-200">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>{question.points} คะแนน</span>
            </div>
          </div>
        </div>

        {/* Question Text */}
        <div className="space-y-4">
          <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            <MathText content={question.content} />
          </div>

          {/* Diagram Illustration if matching */}
          <Illustration type={question.id} />
        </div>

        {/* Input Types */}
        <div className="pt-2">
          {activeQuestion.type === 'multiple_choice' && activeQuestion.choices && (
            <MultipleChoice
              choices={activeQuestion.choices}
              selectedChoiceId={selectedChoiceId}
              onSelectChoice={(id) => {
                if (!isSubmitted) setSelectedChoiceId(id);
              }}
              showResult={isSubmitted}
            />
          )}

          {question.type === 'short_answer' && (
            <ShortAnswer
              value={textAnswer}
              onChange={setTextAnswer}
              onSubmitAnswer={handleSubmit}
              showResult={isSubmitted}
              isCorrect={isCorrect}
              correctAnswer={question.correctAnswer}
            />
          )}

          {question.type === 'long_answer' && (
            <LongAnswer
              value={textAnswer}
              onChange={setTextAnswer}
              showResult={isSubmitted}
              modelAnswer={question.correctAnswer || question.solution.summary}
            />
          )}
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          {!isSubmitted ? (
            <button
              type="button"
              disabled={!canSubmit}
              onClick={handleSubmit}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4" />
              <span>ตรวจคำตอบ</span>
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setShowSolution(!showSolution)}
                className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showSolution ? 'ซ่อนเฉลย' : 'ดูเฉลยละเอียด & วิธีคิดเร็ว'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>ทำใหม่อีกครั้ง</span>
              </button>
            </div>
          )}

          {/* Next Question Shortcut */}
          {nextQuestion && (
            <Link
              href={`/quiz/${nextQuestion.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <span>ข้อถัดไป</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Embedded Solution Box when toggled */}
      {showSolution && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <SolutionViewer question={question} />
        </div>
      )}

      {/* AI Tutor Assistant Drawer */}
      <AITutorDrawer
        question={question}
        questionNumber={currentPos}
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
      />

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
