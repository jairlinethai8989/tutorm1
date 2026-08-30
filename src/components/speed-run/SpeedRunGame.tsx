'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Question } from '@/types/question';
import { SpeedRunGameMode, SpeedRunGameState, SpeedRunQuestionAnswer } from '@/types/speedRun';
import { SPEED_RUN_MODES, generateQuestionsForMode, calculateQuestionScore } from '@/lib/speedRunEngine';
import { MathText } from '@/components/shared/MathText';
import {
  Clock,
  Flame,
  Heart,
  Zap,
  Sparkles,
  CheckCircle2,
  XCircle,
  X,
  Trophy,
} from 'lucide-react';

interface SpeedRunGameProps {
  mode: SpeedRunGameMode;
  onEndGame: (finalState: SpeedRunGameState) => void;
  onBackToLobby: () => void;
}

export const SpeedRunGame: React.FC<SpeedRunGameProps> = ({
  mode,
  onEndGame,
  onBackToLobby,
}) => {
  const modeConfig = SPEED_RUN_MODES.find((m) => m.id === mode)!;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(modeConfig.initialTimeSeconds);
  const [lives, setLives] = useState<number>(modeConfig.initialLives || 3);
  const [score, setScore] = useState<number>(0);
  const [currentCombo, setCurrentCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [totalAnswered, setTotalAnswered] = useState<number>(0);
  const [history, setHistory] = useState<SpeedRunQuestionAnswer[]>([]);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [timeDeltaText, setTimeDeltaText] = useState<string | null>(null);

  const questionStartTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Single source of truth Ref to eliminate stale closures in timers and callbacks
  const latestStateRef = useRef<SpeedRunGameState>({
    mode,
    timeRemaining: modeConfig.initialTimeSeconds,
    lives: modeConfig.initialLives || 3,
    score: 0,
    currentCombo: 0,
    maxCombo: 0,
    correctCount: 0,
    totalAnswered: 0,
    isGameOver: false,
    history: [],
  });

  // Initialize questions on mount
  useEffect(() => {
    const qList = generateQuestionsForMode(mode);
    setQuestions(qList);
    questionStartTimeRef.current = Date.now();
    latestStateRef.current = {
      mode,
      timeRemaining: modeConfig.initialTimeSeconds,
      lives: modeConfig.initialLives || 3,
      score: 0,
      currentCombo: 0,
      maxCombo: 0,
      correctCount: 0,
      totalAnswered: 0,
      isGameOver: false,
      history: [],
    };
  }, [mode, modeConfig]);

  const finishGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const final = {
      ...latestStateRef.current,
      timeRemaining: 0,
      isGameOver: true,
    };
    onEndGame(final);
  };

  // Main countdown timer loop
  useEffect(() => {
    if (questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        const next = prev - 1;
        latestStateRef.current.timeRemaining = Math.max(0, next);

        if (next <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          finishGame();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [questions]);

  const handleSelectChoice = (choiceId: string) => {
    if (feedback !== null || !questions[currentIndex]) return;

    setSelectedChoiceId(choiceId);
    const currentQ = questions[currentIndex];
    const isCorrect = currentQ.choices?.find((c) => c.id === choiceId)?.isCorrect || false;
    const timeSpent = (Date.now() - questionStartTimeRef.current) / 1000;

    const prev = latestStateRef.current;
    const newCombo = isCorrect ? prev.currentCombo + 1 : 0;
    const newMaxCombo = Math.max(prev.maxCombo, newCombo);
    const addedScore = isCorrect ? calculateQuestionScore(true, newCombo, timeSpent) : 0;
    const newScore = prev.score + addedScore;
    const newCorrectCount = prev.correctCount + (isCorrect ? 1 : 0);
    const newTotalAnswered = prev.totalAnswered + 1;
    let newLives = prev.lives;
    let newTimeRemaining = prev.timeRemaining;

    if (isCorrect) {
      setFeedback('correct');
      if (mode === 'blitz') {
        newTimeRemaining = Math.min(99, newTimeRemaining + 5);
        setTimeDeltaText('+5s ⚡');
      }
    } else {
      setFeedback('wrong');
      if (mode === 'blitz') {
        newTimeRemaining = Math.max(1, newTimeRemaining - 3);
        setTimeDeltaText('-3s ⚠️');
      } else if (mode === 'marathon') {
        newLives = Math.max(0, prev.lives - 1);
      }
    }

    const record: SpeedRunQuestionAnswer = {
      question: currentQ,
      selectedChoiceId: choiceId,
      isCorrect,
      timeSpentSeconds: timeSpent,
    };
    const updatedHistory = [...prev.history, record];

    // Atomically sync Ref immediately
    latestStateRef.current = {
      mode,
      timeRemaining: newTimeRemaining,
      lives: newLives,
      score: newScore,
      currentCombo: newCombo,
      maxCombo: newMaxCombo,
      correctCount: newCorrectCount,
      totalAnswered: newTotalAnswered,
      isGameOver: false,
      history: updatedHistory,
    };

    // Update React UI states
    setScore(newScore);
    setCurrentCombo(newCombo);
    setMaxCombo(newMaxCombo);
    setCorrectCount(newCorrectCount);
    setTotalAnswered(newTotalAnswered);
    setLives(newLives);
    setTimeRemaining(newTimeRemaining);
    setHistory(updatedHistory);

    // Short transition before moving to next question (350ms for lightning speed)
    setTimeout(() => {
      setFeedback(null);
      setSelectedChoiceId(null);
      setTimeDeltaText(null);

      // Check if Marathon lives run out
      if (mode === 'marathon' && newLives <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        onEndGame({
          ...latestStateRef.current,
          lives: 0,
          isGameOver: true,
        });
        return;
      }

      // Check target count (e.g. Marathon 10 or Boss Rush 5)
      const nextIndex = currentIndex + 1;
      const targetCount = modeConfig.targetCount || 999;
      if (nextIndex >= targetCount || nextIndex >= questions.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        onEndGame({
          ...latestStateRef.current,
          isGameOver: true,
        });
        return;
      }

      setCurrentIndex(nextIndex);
      questionStartTimeRef.current = Date.now();
    }, 350);
  };

  const currentQ = questions[currentIndex];
  if (!currentQ) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs font-bold text-slate-500">กำลังเตรียมข้อสอบประลองความเร็ว...</p>
      </div>
    );
  }

  const getTimerColor = () => {
    if (timeRemaining > 20) return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40';
    if (timeRemaining > 10) return 'text-yellow-400 border-yellow-500/30 bg-yellow-950/40';
    return 'text-rose-400 border-rose-500/50 bg-rose-950/60 animate-pulse';
  };

  const getComboMultiplier = () => {
    if (currentCombo >= 8) return '5x';
    if (currentCombo >= 5) return '3x';
    if (currentCombo >= 3) return '2x';
    return '1x';
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 select-none">
      {/* 1. Top HUD Bar */}
      <div className="bg-slate-900 text-white p-4 rounded-3xl shadow-xl flex items-center justify-between border border-slate-800">
        {/* Timer */}
        <div className="flex items-center gap-2">
          <div className={`px-3 py-1.5 rounded-2xl border font-black text-sm sm:text-base flex items-center gap-1.5 shadow-inner ${getTimerColor()}`}>
            <Clock className="w-4 h-4" />
            <span>{timeRemaining}s</span>
          </div>
          {timeDeltaText && (
            <span className={`text-xs font-black animate-bounce ${timeDeltaText.includes('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
              {timeDeltaText}
            </span>
          )}
        </div>

        {/* Combo & Multiplier */}
        <div className="flex items-center gap-2">
          {currentCombo >= 2 ? (
            <div className="px-3 py-1 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-xs sm:text-sm flex items-center gap-1 shadow-md animate-pulse">
              <Flame className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span>COMBO {currentCombo} ({getComboMultiplier()})</span>
            </div>
          ) : (
            <span className="text-xs text-slate-400 font-bold hidden sm:inline">
              คะแนนสะสม:
            </span>
          )}
          <span className="font-black text-sm sm:text-lg text-yellow-400">
            {score.toLocaleString()}
          </span>
        </div>

        {/* Lives (if marathon mode) or Question Count */}
        <div className="flex items-center gap-3">
          {mode === 'marathon' && (
            <div className="flex items-center gap-0.5">
              {[1, 2, 3].map((heart) => (
                <Heart
                  key={heart}
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                    heart <= lives ? 'fill-rose-500 text-rose-500 scale-100' : 'fill-slate-700 text-slate-700 scale-90 opacity-40'
                  }`}
                />
              ))}
            </div>
          )}

          {mode !== 'marathon' && (
            <span className="text-xs font-black text-slate-300 bg-slate-800 px-2.5 py-1 rounded-xl">
              ข้อที่ {currentIndex + 1} {modeConfig.targetCount ? `/ ${modeConfig.targetCount}` : ''}
            </span>
          )}

          <button
            type="button"
            onClick={onBackToLobby}
            title="ออกจากการประลอง"
            className="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Question Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md space-y-4">
        {/* Subject & SubCategory */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b pb-2">
          <span>{currentQ.topicName || currentQ.subjectId.toUpperCase()}</span>
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
            ความเร็วคือชัยชนะ ⚡
          </span>
        </div>

        {/* Content */}
        <div className="text-sm sm:text-base font-black text-slate-900 leading-relaxed min-h-[60px]">
          <MathText content={currentQ.content} />
        </div>

        {/* 3. Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {currentQ.choices?.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            let choiceStyle = 'bg-slate-50 hover:bg-indigo-50/70 border-slate-200 text-slate-800 hover:border-indigo-300';

            if (feedback !== null) {
              if (choice.isCorrect) {
                choiceStyle = 'bg-emerald-500 text-white border-emerald-600 scale-[1.02] shadow-md';
              } else if (isSelected && !choice.isCorrect) {
                choiceStyle = 'bg-rose-500 text-white border-rose-600 animate-shake';
              } else {
                choiceStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-50';
              }
            }

            return (
              <button
                key={choice.id}
                type="button"
                disabled={feedback !== null}
                onClick={() => handleSelectChoice(choice.id)}
                className={`p-3.5 rounded-2xl border-2 text-left font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-150 cursor-pointer active:scale-95 ${choiceStyle}`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                  feedback !== null && choice.isCorrect
                    ? 'bg-white text-emerald-700'
                    : feedback !== null && isSelected
                    ? 'bg-white text-rose-700'
                    : 'bg-white border text-slate-700 shadow-2xs'
                }`}>
                  {choice.label}
                </span>
                <span className="flex-1">
                  <MathText inline={true} content={choice.content} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
