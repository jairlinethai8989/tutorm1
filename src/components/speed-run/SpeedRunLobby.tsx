'use client';

import React, { useState, useEffect } from 'react';
import { SpeedRunGameMode, HighScoreRecord } from '@/types/speedRun';
import { SPEED_RUN_MODES, getHighScores } from '@/lib/speedRunEngine';
import {
  Zap,
  Flame,
  Crown,
  Trophy,
  Sparkles,
  ArrowRight,
  Clock,
  Heart,
  Target,
  Award,
} from 'lucide-react';

interface SpeedRunLobbyProps {
  onStartGame: (mode: SpeedRunGameMode) => void;
}

export const SpeedRunLobby: React.FC<SpeedRunLobbyProps> = ({ onStartGame }) => {
  const [highScores, setHighScores] = useState<Record<SpeedRunGameMode, HighScoreRecord | null>>({
    blitz: null,
    marathon: null,
    boss_rush: null,
  });

  useEffect(() => {
    setHighScores(getHighScores());
  }, []);

  const getModeIcon = (id: SpeedRunGameMode) => {
    switch (id) {
      case 'blitz':
        return Zap;
      case 'marathon':
        return Flame;
      case 'boss_rush':
        return Crown;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Hero Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-yellow-200 text-xs font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>มิติที่ 7: Speed Run & Time-Attack Challenge</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            โหมดประลองจับเวลา Speed Run ⚡
          </h1>

          <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">
            ทดสอบไหวพริบ ความแม่นยำ และความเร็วในการตัดช้อยส์! สะสมคอมโบไฟลุก 🔥 ไต่คะแนน High Score และรับ EXP โบนัสพิเศษ
          </p>
        </div>

        {/* Decorative lighting */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. 3 Game Modes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {SPEED_RUN_MODES.map((mode) => {
          const Icon = getModeIcon(mode.id);
          const hs = highScores[mode.id];

          return (
            <div
              key={mode.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:border-orange-300 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${mode.gradient}`} />

              <div className="space-y-4">
                {/* Header Icon + High score badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: mode.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {hs && (
                    <div className="flex items-center gap-1 text-[11px] font-black text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-xl border border-amber-200 shadow-2xs">
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>{hs.score.toLocaleString()} PTS</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {mode.name}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 mt-0.5">
                    {mode.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => onStartGame(mode.id)}
                  className="w-full py-3 px-4 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg transition-all hover:scale-102 cursor-pointer"
                  style={{ backgroundColor: mode.color }}
                >
                  <span>เริ่มประลอง {mode.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. High Scores Hall of Fame */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-base sm:text-lg">
              🏆 กระดานสถิติคะแนนสูงสุดในเครื่อง (Hall of Fame)
            </h3>
            <p className="text-xs text-slate-500">
              บันทึกสถิติที่ดีที่สุดของคุณในแต่ละโหมดประลอง
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {SPEED_RUN_MODES.map((mode) => {
            const hs = highScores[mode.id];
            return (
              <div key={mode.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-slate-600 block">{mode.name}</span>
                {hs ? (
                  <div>
                    <span className="text-2xl font-black text-slate-900">{hs.score.toLocaleString()}</span>
                    <span className="text-xs font-bold text-slate-500 ml-1">คะแนน</span>
                    <div className="text-[11px] text-slate-500 space-y-0.5 mt-1">
                      <p>🔥 คอมโบสูงสุด: <strong>x{hs.maxCombo}</strong></p>
                      <p>🎯 ตอบถูก: <strong>{hs.correctCount} / {hs.totalAnswered} ข้อ</strong></p>
                      <p className="text-[10px] text-slate-400">วันที่: {hs.date}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 font-medium py-3">ยังไม่มีสถิติ (เริ่มเล่นเป็นคนแรก!)</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
