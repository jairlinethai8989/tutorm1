import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MainCategoryHub } from '@/components/home/MainCategoryHub';
import { QuickStats } from '@/components/home/QuickStats';
import { ExamStrategicGuide } from '@/components/guide/ExamStrategicGuide';

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero Welcome Banner */}
      <HeroSection />

      {/* Main 3 Categories Interactive Hub (5 วิชาหลัก, จำลองสอบจริง, AI Practice) */}
      <MainCategoryHub />

      {/* Strategic Exam Preparation Guide & Interactive Road Journey for Grade 6 & Parents */}
      <ExamStrategicGuide initialTab="roadmap" defaultCollapsed={false} />

      {/* Quick Performance & Streak Stats */}
      <QuickStats />
    </div>
  );
}


