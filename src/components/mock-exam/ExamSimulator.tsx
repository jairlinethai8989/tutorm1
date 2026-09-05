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
import { AITutorDrawer } from '@/components/quiz/AITutorDrawer';
import { CuteAIBotIcon } from '@/components/shared/CuteAIBotIcon';
import { calculateAttemptSummary } from '@/lib/scoring';
import { saveAttempt, getUserProfileName, getAdmissionChanceTier, calculatePaceAnalysis } from '@/lib/storage';
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
  Printer,
  Pause,
  Play,
  Save,
  AlertTriangle,
  BookMarked,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamSimulatorProps {
  exam: MockExam;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({ exam }) => {
  const questions = exam.questions || [];
  const activeExamStorageKey = `tutor_m1_active_exam_${exam.id}`;

  // All state hooks MUST be declared at the top of the component before any conditional returns
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(exam.timeLimitMinutes * 60);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [reviewMode, setReviewMode] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong_only'>('all');
  const [studentName, setStudentName] = useState<string>('ผู้เรียน');
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);
  const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);
  const [savedSessionInfo, setSavedSessionInfo] = useState<{ answeredCount: number; remainingTime: number } | null>(null);
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);

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

  // Check profile name and saved in-progress session on mount
  useEffect(() => {
    setStudentName(getUserProfileName());

    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(activeExamStorageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.answers && Object.keys(parsed.answers).length > 0) {
            const answeredCount = Object.values(parsed.answers).filter(
              (a: any) => a.selectedChoiceId || (a.textAnswer && a.textAnswer.trim() !== '')
            ).length;
            setHasSavedSession(true);
            setSavedSessionInfo({
              answeredCount,
              remainingTime: parsed.secondsRemaining || exam.timeLimitMinutes * 60,
            });
          }
        }
      } catch (e) {
        console.error('Error loading saved exam session', e);
      }
    }
  }, [activeExamStorageKey, exam.timeLimitMinutes]);

  // Auto-save active in-progress exam session to localStorage
  useEffect(() => {
    if (hasStarted && !isFinished && typeof window !== 'undefined') {
      try {
        const sessionData = {
          answers,
          secondsRemaining,
          currentIndex,
          updatedAt: Date.now(),
        };
        localStorage.setItem(activeExamStorageKey, JSON.stringify(sessionData));
      } catch (e) {
        console.error('Error saving in-progress exam session', e);
      }
    }
  }, [hasStarted, isFinished, answers, secondsRemaining, currentIndex, activeExamStorageKey]);

  // Phase B Telemetry: Helper to track mock_exam_started with Zero-PII
  const triggerExamStartedTelemetry = () => {
    try {
      const { trackMockExamStarted } = require('@/lib/analytics');
      trackMockExamStarted({
        examId: exam.id,
        examCategory: exam.subjectId || 'general',
        examType: 'mock_exam',
        timeLimitMinutes: exam.timeLimitMinutes,
      });
    } catch (e) {
      console.debug('Telemetry trackMockExamStarted suppressed', e);
    }
  };

  // Resume saved session handler
  const handleResumeSavedSession = () => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(activeExamStorageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.answers) setAnswers(parsed.answers);
          if (parsed.secondsRemaining !== undefined) setSecondsRemaining(parsed.secondsRemaining);
          if (parsed.currentIndex !== undefined) setCurrentIndex(parsed.currentIndex);
          setHasStarted(true);
          setIsPaused(false);
          triggerExamStartedTelemetry();
          return;
        }
      } catch (e) {
        console.error('Error resuming session', e);
      }
    }
    setHasStarted(true);
    triggerExamStartedTelemetry();
  };

  // Clear saved session and start fresh
  const handleStartFreshSession = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(activeExamStorageKey);
      } catch {}
    }
    setAnswers({});
    setSecondsRemaining(exam.timeLimitMinutes * 60);
    setCurrentIndex(0);
    setHasSavedSession(false);
    setHasStarted(true);
    triggerExamStartedTelemetry();
  };

  // Countdown timer
  useEffect(() => {
    if (!hasStarted || isFinished || isPaused) return;

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
  }, [hasStarted, isFinished, isPaused]);

  const currentQuestion = questions[currentIndex];

  const handleSelectChoice = (choiceId: string) => {
    if (isFinished || isPaused) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        selectedChoiceId: choiceId,
      },
    }));
  };

  const handleTextAnswerChange = (text: string) => {
    if (isFinished || isPaused) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        textAnswer: text,
      },
    }));
  };

  const handleToggleFlag = () => {
    if (isFinished || isPaused) return;
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
    setIsPaused(false);

    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(activeExamStorageKey);
      } catch {}
    }

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

    // Phase B Telemetry: Track Mock Exam Completed
    try {
      const { trackMockExamCompleted } = require('@/lib/analytics');
      trackMockExamCompleted({
        examId: exam.id,
        score: summary.totalScore || 0,
        durationSeconds: timeSpent,
        totalQuestions: questions.length,
      });
    } catch (e) {
      console.debug('Telemetry trackMockExamCompleted suppressed', e);
    }

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

          {/* Saved in-progress Session Alert & Resume Prompt */}
          {hasSavedSession && savedSessionInfo && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-left max-w-xl mx-auto space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-blue-800">
                <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>คุณมีข้อสอบชุดนี้ที่ทำค้างไว้</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                ระบบตรวจพบบันทึกการทำข้อสอบค้างไว้ <strong>ทำไปแล้ว {savedSessionInfo.answeredCount} ข้อ</strong> (เวลาคงเหลือ {formatTime(savedSessionInfo.remainingTime)})
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleResumeSavedSession}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>ทำข้อสอบต่อจากเดิม</span>
                </button>
                <button
                  type="button"
                  onClick={handleStartFreshSession}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>เริ่มทำใหม่ตั้งแต่ต้น</span>
                </button>
              </div>
            </div>
          )}

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
              <li>สามารถกดปุ่ม <strong>"พักชั่วคราว"</strong> เพื่อหยุดเวลาและกลับมาทำต่อได้</li>
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
                triggerExamStartedTelemetry();
              }
            }}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
          >
            {hasSavedSession ? 'ทำข้อสอบต่อจากเดิม' : 'เริ่มทำข้อสอบจำลองทันที'}
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
            triggerExamStartedTelemetry();
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
    const admissionTier = getAdmissionChanceTier(attemptResult.scorePercentage);
    const paceAnalysis = calculatePaceAnalysis(attemptResult.timeSpentSeconds, attemptResult.totalQuestions);

    const wrongQuestions = questions.filter((q) => !answers[q.id]?.isCorrect);
    const wrongCount = wrongQuestions.length;

    // Filter topics into strengths and weaknesses for this specific exam
    const examTopics = attemptResult.topicBreakdown
      ? Object.entries(attemptResult.topicBreakdown).map(([name, stats]: any) => ({
          name,
          total: stats.total,
          correct: stats.correct,
          percent: Math.round((stats.correct / stats.total) * 100),
        }))
      : [];

    const examStrengths = examTopics.filter((t) => t.percent >= 70);
    const examWeaknesses = examTopics.filter((t) => t.percent < 70);

    return (
      <div className="max-w-4xl mx-auto space-y-6 py-6 print:py-0 print:max-w-none">
        {/* Printable & Visual Exam Report Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-8 text-center print:border-none print:shadow-none print:p-4">
          {/* Header Info */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-lg text-white"
                  style={{ backgroundColor: exam.badgeColor }}
                >
                  {exam.targetSchool}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {exam.subjectId === 'math' ? 'คณิตศาสตร์' : exam.subjectId === 'science' ? 'วิทยาศาสตร์' : 'ภาษาอังกฤษ'}
                </span>
              </div>

              {/* Print / Save PDF Button */}
              <button
                type="button"
                onClick={() => window.print()}
                className="print:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>พิมพ์ / บันทึกผลสอบ (PDF)</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-left sm:text-center">
              {exam.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                <User className="w-3.5 h-3.5" />
                <span>ผู้เข้าสอบ: {studentName}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                <span>เกณฑ์ผ่านโรงเรียน: {exam.passingScorePercent}%</span>
              </div>
            </div>
          </div>

          {/* Admission Probability Tier Banner */}
          <div
            className={`p-6 rounded-3xl border text-left flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs ${admissionTier.bgLight}`}
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-lg ${admissionTier.badgeBg}`}>
                  {admissionTier.title}
                </span>
                <span className={`font-bold text-sm ${admissionTier.color}`}>
                  {admissionTier.probabilityText}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {admissionTier.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/60 shadow-2xs">
              <div className="text-right">
                <div className="text-[11px] text-slate-500 font-bold">ผลการสอบ</div>
                <div className={`text-xl font-extrabold ${isPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {isPassed ? '✓ ผ่านเกณฑ์' : '⚡ กำลังพัฒนา'}
                </div>
              </div>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-xs ${
                  isPassed ? 'bg-emerald-600' : 'bg-amber-600'
                }`}
              >
                {attemptResult.scorePercentage}%
              </div>
            </div>
          </div>

          {/* Key 4 Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="text-xs text-slate-500 font-semibold">คะแนนที่ได้</div>
              <div className="text-2xl font-extrabold text-blue-600">
                {attemptResult.totalScore} <span className="text-xs font-semibold text-slate-400">/ {attemptResult.maxPossibleScore}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="text-xs text-slate-500 font-semibold">ความแม่นยำ</div>
              <div className="text-2xl font-extrabold text-slate-900">
                {attemptResult.scorePercentage}%
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="text-xs text-slate-500 font-semibold">ตอบถูก / ทั้งหมด</div>
              <div className="text-2xl font-extrabold text-emerald-600">
                {attemptResult.correctCount} <span className="text-xs font-semibold text-slate-400">/ {attemptResult.totalQuestions} ข้อ</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="text-xs text-slate-500 font-semibold">เวลาที่ใช้</div>
              <div className="text-2xl font-extrabold text-slate-900">
                {formatTime(attemptResult.timeSpentSeconds)}
              </div>
            </div>
          </div>

          {/* Time Pacing Analysis Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-indigo-950 flex items-center gap-2">
                  <span>⏱️ การวิเคราะห์ความเร็ว (Time Pacing):</span>
                  <strong className="text-indigo-700">{paceAnalysis.formattedPace}</strong>
                </div>
                <div className="text-xs text-indigo-900/80 mt-0.5">{paceAnalysis.tip}</div>
              </div>
            </div>
            <div className="self-start sm:self-auto text-xs font-extrabold px-3 py-1 rounded-lg bg-white border border-indigo-200 text-indigo-800 shrink-0">
              {paceAnalysis.statusText}
            </div>
          </div>

          {/* Topic Strengths vs Weaknesses in this Exam */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* Strengths */}
            <div className="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
                <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>จุดแข็งในชุดนี้ (ทำได้ดีเยี่ยม):</span>
                </div>
                <span className="text-xs font-bold text-emerald-700">{examStrengths.length} หัวข้อ</span>
              </div>

              {examStrengths.length > 0 ? (
                <div className="space-y-2">
                  {examStrengths.map((t) => (
                    <div key={t.name} className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-emerald-100 text-xs">
                      <span className="font-bold text-slate-800">{t.name}</span>
                      <span className="font-extrabold text-emerald-600">{t.correct}/{t.total} ข้อ ({t.percent}%)</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic py-2">
                  ยังไม่มีหัวข้อที่ผ่านเกณฑ์ 70% แนะนำให้เริ่มทบทวนจุดอ่อนด้านขวามือ
                </p>
              )}
            </div>

            {/* Weaknesses / Need Work */}
            <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-amber-100">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>จุดที่ต้องเสริมด่วน (หลุดคะแนน):</span>
                </div>
                <span className="text-xs font-bold text-amber-700">{examWeaknesses.length} หัวข้อ</span>
              </div>

              {examWeaknesses.length > 0 ? (
                <div className="space-y-2">
                  {examWeaknesses.map((t) => (
                    <div key={t.name} className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-amber-200 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-800">{t.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-amber-600">{t.correct}/{t.total} ข้อ ({t.percent}%)</span>
                        <Link
                          href="/practice"
                          className="print:hidden px-2 py-0.5 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold text-[10px] transition-colors"
                        >
                          ติวเพิ่ม →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-emerald-700 font-bold py-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ยอดเยี่ยมมาก! ไม่มีหัวข้อใดที่ได้คะแนนต่ำกว่า 70%
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="print:hidden flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
            {/* View All Solutions */}
            <button
              type="button"
              onClick={() => {
                setReviewFilter('all');
                setReviewMode(true);
                setCurrentIndex(0);
              }}
              className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <HelpCircle className="w-4 h-4" />
              <span>ดูเฉลยละเอียดทุกข้อ ({questions.length} ข้อ)</span>
            </button>

            {/* View Mistakes Only */}
            {wrongCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setReviewFilter('wrong_only');
                  setReviewMode(true);
                  // Find first wrong question index
                  const firstWrongIndex = questions.findIndex((q) => !answers[q.id]?.isCorrect);
                  setCurrentIndex(firstWrongIndex >= 0 ? firstWrongIndex : 0);
                }}
                className="px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-500/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <XCircle className="w-4 h-4" />
                <span>ทบทวนเฉพาะข้อที่ตอบผิด ({wrongCount} ข้อ)</span>
              </button>
            )}

            {/* Go to Mistake Book */}
            {wrongCount > 0 && (
              <Link
                href="/mistake-book"
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center gap-2 hover:scale-105"
              >
                <BookMarked className="w-4 h-4" />
                <span>เปิดในสมุดจุดอ่อน (Mistake Book)</span>
              </Link>
            )}

            {/* Go to Dashboard */}
            <Link
              href="/dashboard"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 hover:scale-105"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>ดูสรุปภาพรวมใน Dashboard</span>
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

        {/* Timer & Actions Box */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Pause Button */}
          {!isFinished && !reviewMode && (
            <button
              type="button"
              onClick={() => setIsPaused(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 font-bold text-xs shadow-2xs transition-all cursor-pointer hover:scale-102"
              title="หยุดเวลาและพักการทำข้อสอบชั่วคราว"
            >
              <Pause className="w-3.5 h-3.5" />
              <span>พักชั่วคราว</span>
            </button>
          )}

          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-extrabold text-sm shadow-2xs ${
              secondsRemaining <= 300
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-slate-900 text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{isFinished ? 'หมดเวลาสอบ' : isPaused ? '⏸️ หยุดเวลา' : formatTime(secondsRemaining)}</span>
          </div>

          {!isFinished && (
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-xs transition-colors cursor-pointer hover:scale-102"
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

      {/* Review Mode Banner & Filter */}
      {reviewMode && (
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </span>
            <div>
              <div className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                <span>โหมดตรวจทานเฉลยละเอียด (Review Mode)</span>
                {reviewFilter === 'wrong_only' && (
                  <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[10px] font-extrabold">
                    เฉพาะข้อที่ตอบผิด
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                เลือกข้อสอบจากแถบด้านขวาหรือสลับตัวกรองเพื่อทบทวนจุดที่เสียคะแนน
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setReviewFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              ดูทั้งหมด ({questions.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setReviewFilter('wrong_only');
                const firstWrongIndex = questions.findIndex((q) => !answers[q.id]?.isCorrect);
                if (firstWrongIndex >= 0) setCurrentIndex(firstWrongIndex);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'wrong_only'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              เฉพาะข้อผิด ({questions.filter((q) => !answers[q.id]?.isCorrect).length})
            </button>
          </div>
        </div>
      )}

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

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAITutorOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-xs font-black transition-all hover:scale-105 cursor-pointer shadow-xs"
                    title="ขอคำใบ้และสูตรลัดจากครู AI"
                  >
                    <CuteAIBotIcon size={18} animated={true} />
                    <span>ครู AI ช่วยใบ้</span>
                  </button>

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

      {/* Pause Exam Modal */}
      {isPaused && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto shadow-xs">
              <Pause className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
                ⏸️ พักการสอบชั่วคราว
              </span>
              <h2 className="text-xl font-extrabold text-slate-900">
                เวลาสอบถูกหยุดไว้ชั่วคราวแล้ว
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                คำตอบและเวลาคงเหลือของคุณได้รับการบันทึกไว้ในระบบเรียบร้อย สามารถพักสายตา ดื่มน้ำ หรือกลับมาทำต่อได้ตลอดเวลา
              </p>
            </div>

            {/* Progress summary inside pause modal */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
              <div>
                <div className="text-[11px] text-slate-400 font-bold">ทำไปแล้ว</div>
                <div className="text-lg font-extrabold text-blue-600">
                  {answeredQuestionsCount} / {totalQuestionsCount} ข้อ
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-bold">เวลาคงเหลือ</div>
                <div className="text-lg font-extrabold text-slate-900">
                  {formatTime(secondsRemaining)}
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsPaused(false)}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>กลับมาทำข้อสอบต่อ</span>
              </button>

              <Link
                href="/mock-exam"
                className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-3.5 h-3.5" />
                <span>บันทึกความคืบหน้า & กลับหน้าหลัก</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* AI Tutor Assistant Drawer */}
      {currentQuestion && (
        <AITutorDrawer
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          isOpen={isAITutorOpen}
          onClose={() => setIsAITutorOpen(false)}
        />
      )}
    </div>
  );
};
