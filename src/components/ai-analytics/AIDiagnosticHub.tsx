'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { generateAIDiagnosticReport } from '@/lib/aiDiagnosticEngine';
import { AIDiagnosticResult } from '@/types/analytics';
import { DiagnosticSummaryBanner } from './DiagnosticSummaryBanner';
import { WeaknessPriorityBoard } from './WeaknessPriorityBoard';
import { SubTopicDrilldown } from './SubTopicDrilldown';
import { Sparkles, Brain, Award, AlertCircle } from 'lucide-react';

const SubjectRadarChart = dynamic(
  () => import('./SubjectRadarChart').then((mod) => mod.SubjectRadarChart),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm h-[400px] animate-pulse flex items-center justify-center text-slate-400 text-sm">
        กำลังโหลดกราฟ Radar...
      </div>
    ),
  }
);

const RemedialQuizModal = dynamic(
  () => import('./RemedialQuizModal').then((mod) => mod.RemedialQuizModal),
  { ssr: false }
);

export const AIDiagnosticHub: React.FC = () => {
  const [report, setReport] = useState<AIDiagnosticResult | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [remedialModal, setRemedialModal] = useState<{
    isOpen: boolean;
    topicId: string | null;
    topicName: string;
  }>({
    isOpen: false,
    topicId: null,
    topicName: '',
  });

  const refreshReport = useCallback(() => {
    const data = generateAIDiagnosticReport();
    setReport(data);
  }, []);

  useEffect(() => {
    refreshReport();

    const handleStatsChange = () => {
      refreshReport();
    };

    window.addEventListener('tutor_m1_stats_changed', handleStatsChange);
    return () => {
      window.removeEventListener('tutor_m1_stats_changed', handleStatsChange);
    };
  }, [refreshReport]);

  const handleStartRemedialQuiz = (topicId: string, topicName: string) => {
    setRemedialModal({
      isOpen: true,
      topicId,
      topicName,
    });
  };

  const handleCloseRemedialQuiz = () => {
    setRemedialModal((prev) => ({ ...prev, isOpen: false }));
    refreshReport();
  };

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    // Smooth scroll to subject card
    const el = document.getElementById(`subject-card-${subjectId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!report) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs font-bold text-slate-500">กำลังประมวลผลการวินิจฉัยจุดอ่อน AI...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 1. Top Summary Banner */}
      <DiagnosticSummaryBanner report={report} onRefresh={refreshReport} />

      {/* 2. Top Analytics Split Grid: Radar Chart + Weakness Priority Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 5-Subject Interactive Radar */}
        <div className="lg:col-span-5 h-full">
          <SubjectRadarChart
            data={report.subjectRadarData}
            selectedSubjectId={selectedSubjectId}
            onSelectSubject={handleSelectSubject}
          />
        </div>

        {/* Right: Top Weaknesses & Strengths Board */}
        <div className="lg:col-span-7 h-full">
          <WeaknessPriorityBoard
            rankedWeaknesses={report.rankedWeaknesses}
            rankedStrengths={report.rankedStrengths}
            totalQuestionsAnalyzed={report.totalQuestionsAnalyzed}
            onStartRemedialQuiz={handleStartRemedialQuiz}
          />
        </div>
      </div>

      {/* 3. Deep 16 Sub-Topic Drilldown Table */}
      <SubTopicDrilldown
        subjects={report.subjectResults}
        selectedSubjectId={selectedSubjectId}
        onSelectSubject={setSelectedSubjectId}
        onStartRemedialQuiz={handleStartRemedialQuiz}
      />

      {/* 4. One-Click Remedial Drill Modal */}
      <RemedialQuizModal
        isOpen={remedialModal.isOpen}
        topicId={remedialModal.topicId}
        topicName={remedialModal.topicName}
        onClose={handleCloseRemedialQuiz}
        onCompleted={refreshReport}
      />
    </div>
  );
};
