import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickStats } from '@/components/home/QuickStats';
import { MainCategoryHub } from '@/components/home/MainCategoryHub';
import { ExamStrategicGuide } from '@/components/guide/ExamStrategicGuide';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Welcome Banner */}
      <HeroSection />

      {/* Strategic Exam Preparation Guide for Grade 6 & Parents */}
      <ExamStrategicGuide />

      {/* Quick Performance & Streak Stats */}
      <QuickStats />

      {/* Main 3 Categories Interactive Hub (5 วิชาหลัก, จำลองสอบจริง, AI Practice) */}
      <MainCategoryHub />
    </div>
  );
}

