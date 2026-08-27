import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MainCategoryHub } from '@/components/home/MainCategoryHub';
import { GamificationHub } from '@/components/home/GamificationHub';
import { QuickStats } from '@/components/home/QuickStats';
import { ExamStrategicGuide } from '@/components/guide/ExamStrategicGuide';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Welcome Banner */}
      <HeroSection />

      {/* Sleek Vibrant Gamification Bar: Level, Streak Check-in, Quests & Badges */}
      <GamificationHub />

      {/* Main 3 Categories Interactive Hub (5 วิชาหลัก, จำลองสอบจริง, AI Practice) */}
      <MainCategoryHub />

      {/* Strategic Exam Preparation Guide & Interactive Road Journey for Grade 6 & Parents */}
      <ExamStrategicGuide initialTab="roadmap" defaultCollapsed={false} />

      {/* Quick Performance & Streak Stats */}
      <QuickStats />
    </div>
  );
}


