import React from 'react';
import { Metadata } from 'next';
import { AIDiagnosticHub } from '@/components/ai-analytics/AIDiagnosticHub';

export const metadata: Metadata = {
  title: 'AI Exam Analytics & Weakness Diagnostic (วิเคราะห์จุดอ่อน 16 บทย่อย 5 วิชา) | Tutor M.1',
  description: 'ระบบ AI วินิจฉัยจุดอ่อนรายบุคคล เจาะลึก 16 บทย่อย 5 วิชาหลัก พร้อมกราฟ Radar และชุดข้อสอบซ่อมจุดอ่อน One-Click',
};

export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIDiagnosticHub />
      </div>
    </div>
  );
}
