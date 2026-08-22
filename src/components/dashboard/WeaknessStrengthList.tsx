'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';

interface WeaknessStrengthListProps {
  strongest?: string[];
  weakest?: string[];
}

export const WeaknessStrengthList: React.FC<WeaknessStrengthListProps> = ({
  strongest = ['จำนวนนับและ ห.ร.ม./ค.ร.น. (90%)', 'พีชคณิตและสมการ (85%)', 'การสังเคราะห์ด้วยแสง (75%)'],
  weakest = ['ฟิสิกส์ & วงจรไฟฟ้า (55%)', 'เคมี & การแยกสาร (60%)', 'เรขาคณิตพื้นที่แรเงา (65%)'],
}) => {
  return (
    <div className="space-y-6">
      {/* Weakness Section (Action Needed) */}
      <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm">
            <AlertCircle className="w-5 h-5" />
            <span>จุดอ่อนที่ต้องเร่งซ่อมก่อนวันสอบ (Top Weaknesses):</span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700">
            สำคัญเร่งด่วน
          </span>
        </div>

        <div className="space-y-2.5">
          {weakest.map((topic, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200/60 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-rose-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm font-bold text-slate-900">{topic}</span>
              </div>

              <Link
                href="/subjects/math"
                className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 shrink-0"
              >
                <span>ฝึกเพิ่ม</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Strength Section */}
      <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600 font-extrabold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>จุดแข็งที่ทำได้ดีเยี่ยม (Top Strengths):</span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
            รักษามาตรฐาน
          </span>
        </div>

        <div className="space-y-2.5">
          {strongest.map((topic, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm font-bold text-slate-900">{topic}</span>
              </div>

              <span className="text-xs font-bold text-emerald-700">ชำนาญแล้ว</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
