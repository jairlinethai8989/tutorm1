import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickStats } from '@/components/home/QuickStats';
import { SubjectGrid } from '@/components/home/SubjectGrid';
import { MockExamSection } from '@/components/home/MockExamSection';

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* Hero Welcome Banner */}
      <HeroSection />

      {/* Quick Performance & Streak Stats */}
      <QuickStats />

      {/* Core 5 Subjects */}
      <SubjectGrid />

      {/* Mock Exam Simulation Hub */}
      <MockExamSection />
    </div>
  );
}
