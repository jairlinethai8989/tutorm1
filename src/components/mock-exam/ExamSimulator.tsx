'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MockExam } from '@/types/exam';
import { Question } from '@/types/question';
import { MultipleChoice } from '@/components/quiz/MultipleChoice';
import { ShortAnswer } from '@/components/quiz/ShortAnswer';
import { LongAnswer } from '@/components/quiz/LongAnswer';
import { QuestionPalette } from '@/components/quiz/QuestionPalette';
import { MathText } from '@/components/shared/MathText';
import { Illustration } from '@/components/shared/Illustration';
import { SolutionViewer } from '@/components/solution/SolutionViewer';
import { StudentNameModal } from '@/components/shared/StudentNameModal';
import { calculateAttemptSummary } from '@/lib/scoring';
import { saveAttempt, getUserProfileName } from '@/lib/storage';
import { formatTime } from '@/lib/utils';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Flag,
  Send,
  Award,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  Sparkles,
  HelpCircle,
  User,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamSimulatorProps {
  exam: MockExam;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({ exam }) => {
  const questions = exam.questions || [];
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(exam.timeLimitMinutes * 60);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [reviewMode, setReviewMode] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('ผู้เรียน');
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setStudentName(getUserProfileName());
  }, []);

  // User answers state
  const [answers, setAnswers] = useState<
    Record<
      string,
      {
        selectedChoiceId?: string;
        textAnswer?: string;
        timeSpentSeconds?: number;
        markedForReview?: boolean;
        isCorrect?: boolean;
      }
    >
  >({});

  const [attemptResult, setAttemptResult] = useState<any>(null);

  // Countdown timer
  useEffect(() => {
    if (!hasStarted || isFinished) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isFinished]);

  const currentQuestion = questions[currentIndex];

  const handleSelectChoice = (choiceId: string) => {
    if (isFinished) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        selectedChoiceId: choiceId,
      },
    }));
  };

  const handleTextAnswerChange = (text: string) => {
    if (isFinished) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        textAnswer: text,
      },
    }));
  };

  const handleToggleFlag = () => {
    if (isFinished) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        markedForReview: !prev[currentQuestion.id]?.markedForReview,
      },
    }));
  };

  const handleSubmitExam = () => {
    setShowConfirmModal(false);
    setIsFinished(true);

    const timeSpent = exam.timeLimitMinutes * 60 - secondsRemaining;
    const summary = calculateAttemptSummary(
      exam.id,
      exam.name,
      exam.subjectId,
      'mock_exam',
      questions,
      answers,
      exam.timeLimitMinutes * 60,
      timeSpent,
      new Date().toISOString()
    );

    setAttemptResult(summary);
    saveAttempt(summary);

    if (summary.scorePercentage >= exam.passingScorePercent) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }
  };

  // Pre-exam Start Screen
  if (!hasStarted) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 py-8">
        <Link
          href="/mock-exam"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>กลับไปเลือกชุดข้อสอบ</span>
        </Link>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg text-center space-y-6">
          <div
            className="inline-flex px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-xs"
            style={{ backgroundColor: exam.badgeColor }}
          >
            {exam.targetSchool}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            {exam.name}
          </h1>

          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {exam.description}
          </p>

          {/* Student Profile Info */}
          <div className="flex items-center justify-between p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-2xl max-w-xl mx-auto text-xs">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600 shrink-0" />
              <span>ผู้เข้าสอบ: <strong className="text-slate-900 text-sm font-bold">{studentName}</strong></span>
            </div>
            <button
              type="button"
              onClick={() => setIsNameModalOpen(true)}
              className="text-blue-600 hover:text-blue-700 font-bold hover:underline cursor-pointer"
            >
              {studentName === 'ผู้เรียน' ? '✏️ ระบุชื่อผู้เรียน' : 'เปลี่ยนชื่อ'}
            </button>
          </div>

          {/* Exam Rules & Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-xs text-slate-500 font-semibold">จำนวนข้อสอบ</div>
              <div className="text-xl font-extrabold text-slate-900 mt-1">{questions.length} ข้อ</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-xs text-slate-500 font-semibold">เวลาสอบ</div>
              <div className="text-xl font-extrabold text-slate-900 mt-1">{exam.timeLimitMinutes} นาที</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-xs text-slate-500 font-semibold">รูปแบบ</div>
              <div className="text-xs font-bold text-slate-900 mt-2">ปรนัย + อัตนัย</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-xs text-slate-500 font-semibold">เกณฑ์ผ่าน</div>
              <div className="text-xl font-extrabold text-emerald-600 mt-1">{exam.passingScorePercent}%</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 space-y-1.5 max-w-xl mx-auto">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>คำแนะนำก่อนเริ่มสอบ:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>ระบบจะเริ่มจับเวลาทันทีหลังจากกดปุ่มเริ่มทำข้อสอบ</li>
              <li>สามารถกดปักหมุดข้อที่ต้องการกลับมาทบทวนได้ตลอดเวลา</li>
              <li>เมื่อหมดเวลาระบบจะส่งกระดาษคำตอบและบันทึกประเมินผลอัตโนมัติ</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => {
              if (studentName === 'ผู้เรียน') {
                setIsNameModalOpen(true);
              } else {
                setHasStarted(true);
              }
            }}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
          >
            เริ่มทำข้อสอบจำลองทันที
          </button>
        </div>

        {/* Student Name Modal */}
        <StudentNameModal
          isOpen={isNameModalOpen}
          onClose={() => setIsNameModalOpen(false)}
          onConfirm={(name) => {
            setStudentName(name);
            setIsNameModalOpen(false);
            setHasStarted(true);
          }}
          title="ระบุชื่อผู้เรียนก่อนเข้าห้องสอบ"
          subtitle={`กำลังจะเข้าสอบ: ${exam.name}`}
        />
      </div>
    );
  }

  // Post-exam Result Screen (when finished)
  if (isFinished && attemptResult && !reviewMode) {
    const isPassed = attemptResult.scorePercentage >= exam.passingScorePercent;

    return (
      <div className="max-w-4xl mx-auto space-y-6 py-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg text-center space-y-6">
          <div
            className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-white shadow-lg ${
              isPassed ? 'bg-emerald-500 shadow-emerald-500/30' : 'bg-amber-500 shadow-amber-500/30'
            }`}
          >
            <Award className="w-10 h-10" />
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
              ผลการสอบจำลองเสมือนจริง
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {exam.name}
            </h1>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mt-2">
              <User className="w-3.5 h-3.5" />
              <span>ผู้เข้าสอบ: {studentName}</span>
            </div>
            <div className="text-sm font-semibold mt-2">
              สถานะ:{' '}
              <span className={`font-bold ${isPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
                {isPassed ? '🎉 ผ่านเกณฑ์การคัดเลือก (Passed)' : '⚡ ยังไม่ผ่านเกณฑ์ (Needs Improvement)'}
              </span>
            </div>
          </div>

          {/* Score Overview Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 max-w-2xl mx-auto">
            <div>
              <div className="text-xs text-slate-500 font-semibold">คะแนนที่ได้</div>
              <div className="text-2xl font-extrabold text-blue-600 mt-1">
                {attemptResult.totalScore} / {attemptResult.maxPossibleScore}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">คิดเป็นเปอร์เซ็นต์</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {attemptResult.scorePercentage}%
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">ตอบถูก / ทั้งหมด</div>
              <div className="text-2xl font-extrabold text-emerald-600 mt-1">
                {attemptResult.correctCount} / {attemptResult.totalQuestions}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">เวลาที่ใช้</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {formatTime(attemptResult.timeSpentSeconds)}
              </div>
            </div>
          </div>

          {/* Topic Breakdown */}
          {attemptResult.topicBreakdown && (
            <div className="text-left max-w-2xl mx-auto space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-800">คะแนนแยกตามหัวข้อความรู้:</h3>
              <div className="space-y-2">
                {Object.entries(attemptResult.topicBreakdown).map(([topic, stats]: any) => {
                  const percent = Math.round((stats.correct / stats.total) * 100);
                  return (
                    <div key={topic} className="p-3 bg-white rounded-xl border border-slate-200">
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="text-slate-800">{topic}</span>
                        <span className={percent >= 70 ? 'text-emerald-600' : 'text-amber-600'}>
                          {stats.correct}/{stats.total} ข้อ ({percent}%)
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${percent >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setReviewMode(true);
                setCurrentIndex(0);
              }}
              className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>ดูเฉลยละเอียด & วิธีคิดทุกข้อ</span>
            </button>

            <Link
              href="/dashboard"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
            >
              ไปที่ Dashboard วิเคราะห์จุดอ่อน
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active Exam Simulator or Review Mode
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFlagged = answers[currentQuestion?.id]?.markedForReview;
  const currentAnswer = answers[currentQuestion?.id];

  const totalQuestionsCount = questions.length;
  const answeredQuestionsCount = questions.filter(
    (q) =>
      (q.type === 'multiple_choice' && !!answers[q.id]?.selectedChoiceId) ||
      (q.type !== 'multiple_choice' && !!answers[q.id]?.textAnswer && answers[q.id]!.textAnswer!.trim() !== '')
  ).length;
  const remainingQuestionsCount = Math.max(0, totalQuestionsCount - answeredQuestionsCount);
  const examProgressPercentage =
    totalQuestionsCount > 0 ? Math.round((answeredQuestionsCount / totalQuestionsCount) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Header with Timer and School Badge */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-md text-white mr-2"
            style={{ backgroundColor: exam.badgeColor }}
          >
            {exam.targetSchool}
          </span>
          <span className="font-bold text-slate-900 text-sm sm:text-base">{exam.name}</span>
        </div>

        {/* Timer Box */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-extrabold text-sm shadow-2xs ${
              secondsRemaining <= 300
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-slate-900 text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{isFinished ? 'หมดเวลาสอบ' : formatTime(secondsRemaining)}</span>
          </div>

          {!isFinished && (
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>ส่งกระดาษคำตอบ</span>
            </button>
          )}

          {reviewMode && (
            <button
              type="button"
              onClick={() => setReviewMode(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              กลับหน้ารวมคะแนน
            </button>
          )}
        </div>
      </div>

      {/* Real-time Exam Progress Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between text-xs flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-slate-700">📊 ความคืบหน้าการทำข้อสอบ:</span>
            <span className="font-extrabold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-lg">
              ทำไปแล้ว {answeredQuestionsCount} จาก {totalQuestionsCount} ข้อ
            </span>
            {remainingQuestionsCount > 0 && !isFinished && (
              <span className="text-slate-500 font-medium hidden sm:inline">
                (ยังไม่ได้ทำอีก {remainingQuestionsCount} ข้อ)
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 font-extrabold text-slate-900 text-sm">
            <span className="text-blue-600">{examProgressPercentage}%</span>
          </div>
        </div>

        {/* Visual Progress Bar Track */}
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-300 shadow-xs"
            style={{ width: `${Math.max(answeredQuestionsCount > 0 ? 4 : 0, examProgressPercentage)}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Question Card */}
        <div className="lg:col-span-8 space-y-6">
          {currentQuestion && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                    ข้อที่ {currentIndex + 1} จาก {questions.length}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {currentQuestion.topicName}
                  </span>
                </div>

                {!isFinished && (
                  <button
                    type="button"
                    onClick={handleToggleFlag}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      isFlagged
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
                    <span>{isFlagged ? 'ปักหมุดแล้ว' : 'ปักหมุดทบทวน'}</span>
                  </button>
                )}
              </div>

              {/* Question Text */}
              <div className="space-y-4">
                <div className="text-lg font-bold text-slate-900 leading-relaxed">
                  <MathText content={currentQuestion.content} />
                </div>

                <Illustration type={currentQuestion.id} />
              </div>

              {/* Input Types */}
              <div className="pt-2">
                {currentQuestion.type === 'multiple_choice' && currentQuestion.choices && (
                  <MultipleChoice
                    choices={currentQuestion.choices}
                    selectedChoiceId={currentAnswer?.selectedChoiceId}
                    onSelectChoice={handleSelectChoice}
                    showResult={reviewMode}
                  />
                )}

                {currentQuestion.type === 'short_answer' && (
                  <ShortAnswer
                    value={currentAnswer?.textAnswer || ''}
                    onChange={handleTextAnswerChange}
                    showResult={reviewMode}
                    isCorrect={currentAnswer?.isCorrect}
                    correctAnswer={currentQuestion.correctAnswer}
                  />
                )}

                {currentQuestion.type === 'long_answer' && (
                  <LongAnswer
                    value={currentAnswer?.textAnswer || ''}
                    onChange={handleTextAnswerChange}
                    showResult={reviewMode}
                    modelAnswer={currentQuestion.correctAnswer || currentQuestion.solution.summary}
                  />
                )}
              </div>

              {/* Solution Viewer in Review Mode */}
              {reviewMode && (
                <div className="pt-4 border-t border-slate-100">
                  <SolutionViewer question={currentQuestion} />
                </div>
              )}

              {/* Navigation Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>ข้อก่อนหน้า</span>
                </button>

                {!isLastQuestion ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold shadow-xs cursor-pointer"
                  >
                    <span>ข้อถัดไป</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  !isFinished && (
                    <button
                      type="button"
                      onClick={() => setShowConfirmModal(true)}
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-xs cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>ส่งข้อสอบ</span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Question Palette (Answer Sheet) */}
        <div className="lg:col-span-4 space-y-4">
          <QuestionPalette
            questions={questions}
            currentIndex={currentIndex}
            onSelectIndex={(idx) => setCurrentIndex(idx)}
            answers={answers}
            showResult={reviewMode}
          />
        </div>
      </div>

      {/* Confirm Submission Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
              <Send className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900">ยืนยันการส่งกระดาษคำตอบ?</h3>
              <p className="text-xs text-slate-500">
                คุณตอบไปแล้ว{' '}
                <strong className="text-slate-900">
                  {Object.values(answers).filter((a) => a.selectedChoiceId || a.textAnswer).length}
                </strong>{' '}
                จาก {questions.length} ข้อ เวลาคงเหลือ {formatTime(secondsRemaining)}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
              >
                กลับไปทำต่อ
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
              >
                ยืนยันส่งข้อสอบ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
