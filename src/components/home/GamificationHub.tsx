'use client';

import React, { useState, useEffect } from 'react';
import {
  getGamificationState,
  calculateUserLevel,
  getDailyQuests,
  claimQuestReward,
  isCheckedInToday,
  checkInToday,
} from '@/lib/gamification';
import { UserLevelInfo, DailyQuest } from '@/types/gamification';
import { AchievementBadgesModal } from '@/components/gamification/AchievementBadgesModal';
import {
  Award,
  Zap,
  Flame,
  Target,
  Gift,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Brain,
  Crown,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const GamificationHub: React.FC = () => {
  const [levelInfo, setLevelInfo] = useState<UserLevelInfo | null>(null);
  const [quests, setQuests] = useState<DailyQuest[]>([]);
  const [checkedIn, setCheckedIn] = useState<boolean>(false);
  const [streakDays, setStreakDays] = useState<number>(1);
  const [isQuestsExpanded, setIsQuestsExpanded] = useState<boolean>(false);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);

  const refreshState = () => {
    const state = getGamificationState();
    setLevelInfo(calculateUserLevel(state.totalExp));
    setQuests(getDailyQuests());
    setCheckedIn(isCheckedInToday());
    setStreakDays(state.streakDays || 1);
  };

  useEffect(() => {
    refreshState();
  }, []);

  if (!levelInfo) return null;

  const completedQuestsCount = quests.filter((q) => q.isCompleted).length;
  const hasUnclaimedQuest = quests.some((q) => q.isCompleted && !q.isClaimed);

  const handleClaimQuest = (quest: DailyQuest) => {
    if (!quest.isCompleted || quest.isClaimed) return;
    const success = claimQuestReward(quest.id, quest.rewardExp);
    if (success) {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.7 },
      });
      refreshState();
    }
  };

  const handleCheckIn = () => {
    if (checkedIn) return;
    const res = checkInToday();
    if (res.success) {
      confetti({
        particleCount: 55,
        spread: 75,
        origin: { y: 0.7 },
      });
      refreshState();
    }
  };

  return (
    <section className="rounded-3xl border border-amber-300/80 shadow-md hover:shadow-lg transition-all overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-1">
      {/* 1. Main Vibrant Yellow-Orange Gamification Bar */}
      <div className="p-3.5 sm:p-4 rounded-[22px] flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-black/10 backdrop-blur-md">
        {/* Left: User Level, Title, EXP & Badges */}
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-white text-slate-950 font-black text-base flex flex-col items-center justify-center shadow-md shadow-black/20 border-2 border-white">
              <span className="text-[8px] uppercase font-extrabold tracking-widest text-amber-700 -mb-1">
                LV.
              </span>
              <span className="text-xl leading-none text-slate-900">{levelInfo.level}</span>
            </div>
            {levelInfo.level >= 5 && (
              <Crown className="w-4 h-4 text-yellow-300 fill-yellow-300 absolute -top-2 -right-1.5 transform rotate-12 drop-shadow-md" />
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-black text-white drop-shadow-xs">
                {levelInfo.title}
              </h3>
              <span className="text-[11px] font-extrabold text-white bg-black/25 px-2 py-0.5 rounded-lg flex items-center gap-1 border border-white/20">
                <Zap className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                {levelInfo.currentExp.toLocaleString()} EXP
              </span>

              {/* Achievement Badges Pill */}
              <button
                type="button"
                onClick={() => setIsBadgesModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white/20 hover:bg-white/30 border border-white/30 text-white font-extrabold text-[11px] transition-all hover:scale-105 cursor-pointer shadow-2xs"
              >
                <Award className="w-3.5 h-3.5 text-yellow-200" />
                <span>12 เหรียญรางวัล</span>
              </button>
            </div>

            {/* Slim EXP Progress Bar */}
            <div className="flex items-center gap-2 text-[10px] text-amber-100 font-medium">
              <div className="w-32 sm:w-48 bg-black/30 h-2 rounded-full overflow-hidden p-0.5 border border-white/30">
                <div
                  className="bg-gradient-to-r from-yellow-200 to-yellow-300 h-full rounded-full transition-all duration-500 shadow-xs"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                ></div>
              </div>
              <span>อีก {levelInfo.expNeededForNextLevel.toLocaleString()} EXP สู่ Lv.{levelInfo.level + 1}</span>
            </div>
          </div>
        </div>

        {/* Center & Right: Daily Streak, Quests Pill & Dedicated Collapse Icon Button */}
        <div className="flex items-center gap-2 flex-wrap self-start lg:self-auto">
          {/* Daily Streak / Check-in Button */}
          {checkedIn ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/25 border border-white/20 text-yellow-100 text-xs font-extrabold shadow-2xs">
              <Flame className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-pulse" />
              <span>เรียนต่อเนื่อง {streakDays} วัน</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleCheckIn}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-orange-700 hover:bg-orange-50 font-black text-xs shadow-md shadow-black/20 animate-pulse hover:animate-none cursor-pointer transition-all hover:scale-105"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>เช็คอิน (+50 EXP)</span>
            </button>
          )}

          {/* Daily Quests Status Pill */}
          <button
            type="button"
            onClick={() => setIsQuestsExpanded(!isQuestsExpanded)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
              hasUnclaimedQuest
                ? 'bg-white text-orange-700 border-white shadow-md animate-bounce hover:animate-none'
                : 'bg-black/20 hover:bg-black/30 border-white/25 text-white'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-yellow-300" />
            <span>ภารกิจประจำวัน ({completedQuestsCount}/{quests.length})</span>
          </button>

          {/* Dedicated Rounded Collapse/Expand Icon Button (Matching Roadmap Guide) */}
          <button
            type="button"
            onClick={() => setIsQuestsExpanded(!isQuestsExpanded)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/25 hover:bg-black/40 border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
            title={isQuestsExpanded ? 'ย่อแถบภารกิจ' : 'ขยายแถบภารกิจ'}
            aria-label={isQuestsExpanded ? 'ย่อแถบภารกิจ' : 'ขยายแถบภารกิจ'}
          >
            {isQuestsExpanded ? (
              <ChevronUp className="w-4 h-4 text-white" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* 2. Expandable Daily Quests Section */}
      {isQuestsExpanded && (
        <div className="p-4 sm:p-5 bg-white text-slate-800 rounded-b-[20px] animate-in slide-in-from-top-2 duration-200 mt-1">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>ภารกิจประจำวันเพื่อรับ EXP พิเศษ (รีเซ็ตทุกวัน 00:00 น.)</span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              สำเร็จแล้วกดรับรางวัลเพื่ออัปเลเวล
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {quests.map((quest) => {
              return (
                <div
                  key={quest.id}
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    quest.isClaimed
                      ? 'bg-slate-50 border-slate-200 opacity-80'
                      : quest.isCompleted
                      ? 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-400/40 shadow-xs'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-slate-900 text-xs">{quest.title}</span>
                      <span className="text-[10px] font-black px-1.5 py-0.2 rounded-md bg-purple-100 text-purple-700">
                        +{quest.rewardExp} EXP
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">{quest.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-200 h-1.5 rounded-full overflow-hidden">
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

                    {quest.isClaimed ? (
                      <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> รับแล้ว
                      </span>
                    ) : quest.isCompleted ? (
                      <button
                        type="button"
                        onClick={() => handleClaimQuest(quest)}
                        className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-[10px] shadow-xs cursor-pointer hover:scale-105 transition-all"
                      >
                        รับ +{quest.rewardExp} EXP
                      </button>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-semibold">กำลังทำ...</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Badges Modal */}
      <AchievementBadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
      />
    </section>
  );
};
