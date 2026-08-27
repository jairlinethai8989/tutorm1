'use client';

import React from 'react';
import { UserLevelInfo } from '@/types/gamification';
import { Award, Zap, Sparkles, ChevronRight, Crown } from 'lucide-react';

interface UserLevelWidgetProps {
  levelInfo: UserLevelInfo;
  onOpenBadges?: () => void;
}

export const UserLevelWidget: React.FC<UserLevelWidgetProps> = ({
  levelInfo,
  onOpenBadges,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-5 sm:p-6 shadow-lg border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
      {/* Left Level Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-black text-xl flex flex-col items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-white">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-800 -mb-1">
              LV.
            </span>
            <span className="text-2xl leading-none">{levelInfo.level}</span>
          </div>
          {levelInfo.level >= 5 && (
            <Crown className="w-5 h-5 text-amber-300 fill-amber-300 absolute -top-2.5 -right-2 transform rotate-12 drop-shadow-md" />
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-black text-white">
              {levelInfo.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-blue-100 font-semibold">
            <span className="flex items-center gap-1 text-amber-300">
              <Zap className="w-3.5 h-3.5 fill-amber-300" />
              <span>{levelInfo.currentExp.toLocaleString()} Total EXP</span>
            </span>
            <span>•</span>
            <span>อีก {levelInfo.expNeededForNextLevel.toLocaleString()} EXP สู่ Lv.{levelInfo.level + 1}</span>
          </div>

          {/* Level Progress Bar */}
          <div className="w-48 sm:w-64 bg-white/20 h-2.5 rounded-full overflow-hidden mt-2 p-0.5 border border-white/20">
            <div
              className="bg-gradient-to-r from-amber-300 to-yellow-400 h-full rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${levelInfo.progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right Button to open Badges */}
      <div className="self-start sm:self-auto shrink-0">
        <button
          type="button"
          onClick={onOpenBadges}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-extrabold text-xs backdrop-blur-md transition-all hover:scale-105 cursor-pointer shadow-sm"
        >
          <Award className="w-4 h-4 text-amber-300" />
          <span>เหรียญรางวัล (12 Badges)</span>
          <ChevronRight className="w-3.5 h-3.5 text-white/70" />
        </button>
      </div>
    </div>
  );
};
