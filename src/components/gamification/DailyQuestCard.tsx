'use client';

import React, { useState, useEffect } from 'react';
import { DailyQuest } from '@/types/gamification';
import { getDailyQuests, claimQuestReward } from '@/lib/gamification';
import {
  Brain,
  Zap,
  Target,
  CheckCircle2,
  Gift,
  Award,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyQuestCardProps {
  onExpChange?: () => void;
}

export const DailyQuestCard: React.FC<DailyQuestCardProps> = ({ onExpChange }) => {
  const [quests, setQuests] = useState<DailyQuest[]>([]);

  const loadQuests = () => {
    setQuests(getDailyQuests());
  };

  useEffect(() => {
    loadQuests();
  }, []);

  const handleClaim = (quest: DailyQuest) => {
    if (!quest.isCompleted || quest.isClaimed) return;

    const success = claimQuestReward(quest.id, quest.rewardExp);
    if (success) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
      });
      loadQuests();
      onExpChange?.();
    }
  };

  const completedCount = quests.filter((q) => q.isCompleted).length;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              ภารกิจประจำวัน (Daily Quests)
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              รีเซ็ตทุกวันเวลา 00:00 น. ทำภารกิจเพื่อรับ EXP พิเศษ
            </p>
          </div>
        </div>

        <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
          สำเร็จ {completedCount}/{quests.length}
        </span>
      </div>

      {/* Quests List */}
      <div className="space-y-3">
        {quests.map((quest) => {
          return (
            <div
              key={quest.id}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                quest.isClaimed
                  ? 'bg-slate-50 border-slate-200 opacity-75'
                  : quest.isCompleted
                  ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/40'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    quest.isCompleted
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {quest.iconName === 'brain' && <Brain className="w-4 h-4" />}
                  {quest.iconName === 'zap' && <Zap className="w-4 h-4" />}
                  {quest.iconName === 'target' && <Target className="w-4 h-4" />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{quest.title}</h4>
                    <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-md bg-purple-100 text-purple-700">
                      +{quest.rewardExp} EXP
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{quest.description}</p>

                  {/* Progress mini bar */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-28 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-500 h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(100, (quest.current / quest.target) * 100)}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold">
                      {quest.current}/{quest.target}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action / Claim Button */}
              <div className="self-end sm:self-center shrink-0">
                {quest.isClaimed ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>รับแล้ว</span>
                  </span>
                ) : quest.isCompleted ? (
                  <button
                    type="button"
                    onClick={() => handleClaim(quest)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-md shadow-amber-500/30 animate-bounce hover:animate-none cursor-pointer"
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>กดรับ +{quest.rewardExp} EXP</span>
                  </button>
                ) : (
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                    กำลังทำ...
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
