import React from 'react';
import { Metadata } from 'next';
import { CheatSheetHub } from '@/components/cheat-sheets/CheatSheetHub';

export const metadata: Metadata = {
  title: 'คลังสรุปสูตร & หัวใจสำคัญ 5 วิชาหลัก (Cheat Sheets & Formula Hub) | Tutor M.1',
  description: 'รวบรวมสูตรคณิตศาสตร์ วิทยาศาสตร์ ไวยากรณ์ภาษาอังกฤษ ภาษาไทย และสังคมศึกษา สำหรับเตรียมสอบเข้า ม.1',
};

export default function CheatSheetsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheatSheetHub />
      </div>
    </div>
  );
}
