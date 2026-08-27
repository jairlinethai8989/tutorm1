'use client';

import React, { useState, useEffect } from 'react';
import { isCheckedInToday, checkInToday, getGamificationState } from '@/lib/gamification';
import { Flame, CheckCircle2, Calendar, Sparkles, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyCheckInWidgetProps {
  onCheckInSuccess?: () => void;
}

export const DailyCheckInWidget: React.FC<DailyCheckInWidgetProps> = ({ onCheckInSuccess }) => {
  const [checkedIn, setCheckedIn] = useState<boolean>(false);
  const [streakDays, setStreakDays] = useState<number>(1);

  const refreshStatus = () => {
    setCheckedIn(isCheckedInToday());
    const state = getGamificationState();
    setStreakDays(state.streakDays || 1);
  };

  useEffect(() => {
    refreshStatus();
  }, []);

  const handleCheckIn = () => {
    if (checkedIn) return;

    const result = checkInToday();
    if (result.success) {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.7 },
      });
      refreshStatus();
      onCheckInSuccess?.();
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner shrink-0">
          <Flame className="w-8 h-8 fill-white animate-pulse" />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded-md">
              Daily Streak
            </span>
            <span className="text-xs font-bold text-orange-100">
              เรียนต่อเนื่อง {streakDays} วัน
            </span>
          </div>
          <h3 className="text-lg font-black">
            {checkedIn ? '🎉 คุณเช็คอินประจำวันเรียบร้อยแล้ว!' : 'เช็คอินประจำวันรับโบนัส EXP พิเศษ'}
          </h3>
          <p className="text-xs text-orange-100/90">
            {checkedIn
              ? `รักษาไฟการเรียนต่อเนื่อง รับโบนัส EXP ประจำวันแล้ว (${streakDays} วันติด)`
              : 'กดเช็คอินวันนี้เพื่อเพิ่มวันต่อเนื่องและรับโบนัส +50 EXP ทันที'}
          </p>
        </div>
      </div>

      <div className="self-start sm:self-auto shrink-0">
        {checkedIn ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/20 border border-white/30 text-white font-extrabold text-xs backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>เช็คอินแล้ววันนี้</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleCheckIn}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-orange-700 hover:bg-orange-50 font-black text-xs shadow-lg transition-all hover:scale-105 cursor-pointer animate-pulse"
          >
            <Gift className="w-4 h-4" />
            <span>กดเช็คอิน (+50 EXP)</span>
          </button>
        )}
      </div>
    </div>
  );
};
