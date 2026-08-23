'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface WeaknessStrengthListProps {
  strongest?: string[];
  weakest?: string[];
  totalQuestionsAttempted?: number;
}

export const WeaknessStrengthList: React.FC<WeaknessStrengthListProps> = ({
  strongest = [],
  weakest = [],
  totalQuestionsAttempted = 0,
}) => {
  const getTopicLink = (topicStr: string) => {
    const lower = topicStr.toLowerCase();
    if (lower.includes('วิทยาศาสตร์') || lower.includes('พืช') || lower.includes('สิ่งมีชีวิต') || lower.includes('ฟิสิกส์') || lower.includes('สาร') || lower.includes('เคมี') || lower.includes('ไฟฟ้า')) {
      return '/subjects/science';
    }
    if (lower.includes('อังกฤษ') || lower.includes('grammar') || lower.includes('reading') || lower.includes('vocab')) {
      return '/subjects/english';
    }
    if (lower.includes('ไทย') || lower.includes('ราชาศัพท์') || lower.includes('สำนวน')) {
      return '/subjects/thai';
    }
    if (lower.includes('สังคม') || lower.includes('ประวัติศาสตร์') || lower.includes('เศรษฐศาสตร์') || lower.includes('ภูมิศาสตร์')) {
      return '/subjects/social';
    }
    return '/subjects/math';
  };

  return (
    <div className="space-y-6">
      {/* Weakness Section (Action Needed: Accuracy < 70%) */}
      <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm">
            <AlertCircle className="w-5 h-5" />
            <span>จุดอ่อนที่ต้องเร่งซ่อมก่อนวันสอบ (Top Weaknesses):</span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700">
            {weakest.length > 0 ? 'คะแนน < 70%' : 'สถานะปกติ'}
          </span>
        </div>

        {weakest.length > 0 ? (
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
                  href={getTopicLink(topic)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 shrink-0 bg-white px-2.5 py-1 rounded-lg border border-rose-200 shadow-2xs hover:bg-rose-50 transition-colors"
                >
                  <span>ฝึกเพิ่ม</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center text-xs text-slate-500 space-y-1">
            {totalQuestionsAttempted === 0 ? (
              <>
                <p className="font-semibold text-slate-700">ยังไม่มีประวัติการทำข้อสอบ</p>
                <p>เริ่มทำแบบทดสอบเพื่อดูการวิเคราะห์จุดอ่อนที่ต้องเร่งพัฒนา</p>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold py-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>ยอดเยี่ยมมาก! ไม่มีหัวข้อที่ต่ำกว่าเกณฑ์ 70%</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Strength Section (Mastered: Accuracy >= 70%) */}
      <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600 font-extrabold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>จุดแข็งที่ทำได้ดีเยี่ยม (Top Strengths):</span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
            {strongest.length > 0 ? 'คะแนน ≥ 70%' : 'เป้าหมาย'}
          </span>
        </div>

        {strongest.length > 0 ? (
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

                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                  ✓ ชำนาญแล้ว
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center text-xs text-slate-500 space-y-1">
            {totalQuestionsAttempted === 0 ? (
              <>
                <p className="font-semibold text-slate-700">ยังไม่มีข้อมูลจุดแข็ง</p>
                <p>ทำข้อสอบให้ได้คะแนน $\ge 70\%$ ในแต่ละหมวดเพื่อสร้างจุดแข็ง</p>
              </>
            ) : (
              <div className="space-y-1 py-1">
                <p className="font-bold text-amber-700">กำลังสะสมความชำนาญ</p>
                <p className="text-slate-500">ฝึกฝนทำข้อสอบซ้ำเพิ่มเติมเพื่อยกระดับคะแนนเป็นจุดแข็ง ($\ge 70\%$)</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

