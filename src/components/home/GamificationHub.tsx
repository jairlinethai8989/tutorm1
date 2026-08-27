'use client';

import React, { useState, useEffect } from 'react';
import { UserLevelWidget } from '@/components/gamification/UserLevelWidget';
import { DailyQuestCard } from '@/components/gamification/DailyQuestCard';
import { DailyCheckInWidget } from '@/components/gamification/DailyCheckInWidget';
import { AchievementBadgesModal } from '@/components/gamification/AchievementBadgesModal';
import { getGamificationState, calculateUserLevel } from '@/lib/gamification';
import { UserLevelInfo } from '@/types/gamification';

export const GamificationHub: React.FC = () => {
  const [levelInfo, setLevelInfo] = useState<UserLevelInfo | null>(null);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);

  const refreshState = () => {
    const state = getGamificationState();
    setLevelInfo(calculateUserLevel(state.totalExp));
  };

  useEffect(() => {
    refreshState();
  }, []);

  if (!levelInfo) return null;

  return (
    <section className="space-y-4">
      {/* 1. Level & EXP Widget */}
      <UserLevelWidget
        levelInfo={levelInfo}
        onOpenBadges={() => setIsBadgesModalOpen(true)}
      />

      {/* 2. Daily Check-in & Quests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <DailyCheckInWidget onCheckInSuccess={refreshState} />
        </div>
        <div className="lg:col-span-7">
          <DailyQuestCard onExpChange={refreshState} />
        </div>
      </div>

      {/* 3. Badges Modal */}
      <AchievementBadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
      />
    </section>
  );
};
