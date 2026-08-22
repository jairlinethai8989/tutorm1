import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickStats } from '@/components/home/QuickStats';
import { MainCategoryHub } from '@/components/home/MainCategoryHub';

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <HeroSection />

      {/* Quick Performance & Streak Stats */}
      <QuickStats />

      {/* Main 3 Categories Interactive Hub (5 วิชาหลัก, จำลองสอบจริง, AI Practice) */}
      <MainCategoryHub />
    </div>
  );
}
