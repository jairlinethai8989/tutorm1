import React from 'react';
import { enforceServerPageAuth } from '@/lib/control-center/auth/guard';

export const dynamic = 'force-dynamic';

export default async function RetentionPage() {
  await enforceServerPageAuth('aggregate:read', '/control-center/retention');

  const isProduction = process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true';

  const cohortMetrics = [
    { day: 'วันที่ 1 (Day 1)', retention: '100%', activeLearners: 1240, color: 'bg-indigo-500' },
    { day: 'วันที่ 3 (Day 3)', retention: '64%', activeLearners: 793, color: 'bg-indigo-600' },
    { day: 'วันที่ 7 (Day 7)', retention: '48%', activeLearners: 595, color: 'bg-indigo-700' },
    { day: 'วันที่ 14 (Day 14)', retention: '38%', activeLearners: 471, color: 'bg-indigo-800' },
    { day: 'วันที่ 30 (Day 30)', retention: '29%', activeLearners: 360, color: 'bg-indigo-950' },
  ];

  const habitStreaks = [
    { streak: '1-2 วันต่อเนื่อง (Exploring - เริ่มต้นทดลอง)', count: 520, percentage: 42 },
    { streak: '3-5 วันต่อเนื่อง (Consistent - ฝึกสม่ำเสมอ)', count: 395, percentage: 32 },
    { streak: '7+ วันต่อเนื่อง (Disciplined - มีวินัยสูง)', count: 215, percentage: 17 },
    { streak: '14+ วันต่อเนื่อง (Elite Scholar - ยอดเยี่ยม)', count: 110, percentage: 9 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            พฤติกรรมการเรียนรู้และอัตราการกลับมาเรียนซ้ำ (Habits &amp; Retention)
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            สถิติการเรียนรู้ระยะยาวตามกลุ่มรุ่น (Cohorts) และการกระจายตัวของความต่อเนื่องในการทำโจทย์ (Streaks)
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {isProduction ? (
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              ระบบประมวลผลอยู่ระหว่างการเชื่อมต่อ (Phase D / Warehouse Integration)
            </div>
          ) : (
            <div className="flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-400">
              <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
              โหมดทดสอบ (Sandbox Mode: Calibrated Baseline Model)
            </div>
          )}
        </div>
      </div>

      {isProduction ? (
        /* Strict Zero-Fabrication Notice: Zero synthetic numbers in production */
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white">ข้อมูลการกลับมาเรียนซ้ำระยะยาวยังไม่เปิดให้บริการ (Retention Telemetry Unavailable)</h2>
            <p className="max-w-xl mx-auto text-xs text-slate-400 leading-relaxed">
              ตาม<strong>นโยบายห้ามแต่งตัวเลขเด็ดขาด (Zero-Fabrication Policy)</strong> ของ Tutor M.1 ระบบจะไม่แสดงตัวเลขคาดเดาหรือตัวเลขจำลองในระบบจริง (Production) การวิเคราะห์พฤติกรรมข้ามวัน (Multi-day Retention) และความต่อเนื่อง (Streaks) ต้องอาศัยระบบรวบรวมข้อมูลคลัง Data Warehouse ใน Phase D
            </p>
          </div>
          <div className="pt-2">
            <span className="inline-flex items-center rounded-md border border-slate-800 bg-slate-950/80 px-3 py-1 font-mono text-[11px] text-slate-400">
              สถานะ: DATA_SOURCE_UNAVAILABLE (ท่อประมวลผล Phase D)
            </span>
          </div>
        </div>
      ) : (
        /* Sandbox / Development Preview with Prominent Disclosure */
        <div className="space-y-8">
          <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-xs text-indigo-300">
            <strong>ตัวอย่างโหมดทดสอบ (Sandbox Preview):</strong> ตัวเลขด้านล่างนี้เป็นแบบจำลองอ้างอิง (Baseline Model) สำหรับการพัฒนาและทดสอบระบบจำลองในเครื่องเท่านั้น
          </div>

          {/* Cohort Retention Grid */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">การกลับมาเรียนซ้ำตามกลุ่มผู้เรียน (Curriculum Cohort Retention)</h2>
              <span className="text-xs font-mono text-emerald-400">เกณฑ์เปรียบเทียบ: +12% สูงกว่าค่าเฉลี่ย EdTech</span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {cohortMetrics.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5"
                >
                  <div className="text-xs font-medium text-slate-400">{c.day}</div>
                  <div className="text-2xl font-extrabold text-white">{c.retention}</div>
                  <div className="text-xs text-slate-500">{c.activeLearners.toLocaleString()} คน (Students)</div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Streak Distribution */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
            <h2 className="text-lg font-bold text-white">การกระจายตัวของความต่อเนื่องในการทำโจทย์ (Daily Practice Streaks)</h2>
            <div className="space-y-4">
              {habitStreaks.map((h, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-300">{h.streak}</span>
                    <span className="text-slate-400">{h.count.toLocaleString()} คน ({h.percentage}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-indigo-500"
                      style={{ width: `${h.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
