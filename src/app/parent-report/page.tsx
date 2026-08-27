import React from 'react';
import { Metadata } from 'next';
import { ParentReportDashboard } from '@/components/parent-report/ParentReportDashboard';

export const metadata: Metadata = {
  title: 'ระบบรายงานผู้ปกครอง & พิมพ์ใบสรุปผล (Parent Report & PDF) | Tutor M.1',
  description: 'รายงานผลการประเมินทักษะและความพร้อมในการสอบเข้า ม.1 สำหรับผู้ปกครอง พร้อมดาวน์โหลดและพิมพ์ใบสรุปผลทางการ',
};

export default function ParentReportPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParentReportDashboard />
      </div>
    </div>
  );
}
