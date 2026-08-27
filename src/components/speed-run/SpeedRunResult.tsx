'use client';

import React, { useEffect, useState } from 'react';
import { SpeedRunGameState, SpeedRunGameMode } from '@/types/speedRun';
import { saveHighScore, SPEED_RUN_MODES } from '@/lib/speedRunEngine';
import { addExp } from '@/lib/gamification';
import { MathText } from '@/components/shared/MathText';
import {
  Trophy,
  Flame,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Award,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpeedRunResultProps {
  gameState: SpeedRunGameState;
  onPlayAgain: () => void;
  onBackToLobby: () => void;
}

export const SpeedRunResult: React.FC<SpeedRunResultProps> = ({
  gameState,
  onPlayAgain,
  onBackToLobby,
}) => {
  const [isNewHighScore, setIsNewHighScore] = useState<boolean>(false);
  const [expEarned, setExpEarned] = useState<number>(0);
  const [showSolutions, setShowSolutions] = useState<boolean>(false);

  const modeConfig = SPEED_RUN_MODES.find((m) => m.id === gameState.mode);

  useEffect(() => {
    // Calculate EXP based on score & correct answers
    const baseExp = Math.round(gameState.score / 15) + (gameState.correctCount * 10) + (gameState.maxCombo * 5);
    setExpEarned(baseExp);
    addExp(baseExp);

    // Save High Score
    const isNew = saveHighScore({
      mode: gameState.mode,
      score: gameState.score,
      maxCombo: gameState.maxCombo,
      correctCount: gameState.correctCount,
      totalAnswered: gameState.totalAnswered,
      date: new Date().toLocaleDateString('th-TH'),
    });
    setIsNewHighScore(isNew);

    // Fire celebration confetti
    confetti({
      particleCount: isNew ? 100 : 50,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, [gameState]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-in zoom-in-95 duration-200">
      {/* 1. Trophy Result Card */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-900 text-white p-6 sm:p-10 shadow-2xl text-center space-y-4 relative overflow-hidden">
        {isNewHighScore && (
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-yellow-400 text-slate-950 text-xs font-black shadow-md animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span>สถิติใหม่สูงสุด! (NEW HIGH SCORE)</span>
          </div>
        )}

        <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-yellow-400 mx-auto shadow-inner border border-white/20">
          <Trophy className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest block">
            {modeConfig?.name}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-1">
            {gameState.score.toLocaleString()} <span className="text-xl sm:text-2xl font-bold text-yellow-400">PTS</span>
          </h1>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-[10px] font-bold text-slate-400 block">ตอบถูกต้อง</span>
            <p className="text-lg sm:text-xl font-black text-emerald-400">{gameState.correctCount} / {gameState.totalAnswered}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-[10px] font-bold text-slate-400 block">คอมโบสูงสุด</span>
            <p className="text-lg sm:text-xl font-black text-orange-400 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4" />
              <span>x{gameState.maxCombo}</span>
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <span className="text-[10px] font-bold text-slate-400 block">EXP ที่ได้รับ</span>
            <p className="text-lg sm:text-xl font-black text-yellow-300">+{expEarned}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={onPlayAgain}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ประลองใหม่อีกครั้ง</span>
          </button>
          <button
            type="button"
            onClick={onBackToLobby}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer border border-white/20"
          >
            <span>กลับหน้าเลือกโหมด</span>
          </button>
        </div>
      </div>

      {/* 2. Review Detailed Solutions Toggle */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-slate-900 text-base sm:text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>เฉลยและวิธีคิด ({gameState.history.length} ข้อที่ทำไป)</span>
          </h3>
          <button
            type="button"
            onClick={() => setShowSolutions(!showSolutions)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
          >
            {showSolutions ? 'ซ่อนเฉลย' : 'ดูเฉลยทั้งหมด'}
          </button>
        </div>

        {showSolutions && (
          <div className="space-y-4">
            {gameState.history.map((record, idx) => {
              const correctChoice = record.question.choices?.find((c) => c.isCorrect);
              const userChoice = record.question.choices?.find((c) => c.id === record.selectedChoiceId);
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border bg-white shadow-xs space-y-3 ${
                    record.isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-slate-900">
                      ข้อที่ {idx + 1} • {record.question.topicName || record.question.subjectId}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        record.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {record.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      <span>{record.isCorrect ? 'ถูกต้อง (+แต้ม)' : 'ตอบผิด'}</span>
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    <MathText content={record.question.content} />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <p className="text-slate-600">
                      <strong>คำตอบของคุณ: </strong>
                      {userChoice ? `${userChoice.label}. ${userChoice.content}` : 'ไม่ได้ตอบ'}
                    </p>
                    <p className="text-emerald-700 font-bold">
                      <strong>คำตอบที่ถูกต้อง: </strong>
                      {correctChoice ? `${correctChoice.label}. ${correctChoice.content}` : '-'}
                    </p>
                    {record.question.solution?.summary && (
                      <p className="text-indigo-900 pt-1 border-t border-slate-200">
                        <strong>💡 แนวคิด: </strong>{record.question.solution.summary}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
