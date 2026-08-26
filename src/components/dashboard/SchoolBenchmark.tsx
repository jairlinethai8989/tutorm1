'use client';

import React from 'react';
import { Target, CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';

interface SchoolBenchmarkProps {
  currentAccuracy: number;
  readinessScore: number;
}

interface SchoolTarget {
  name: string;
  program: string;
  targetPercent: number;
  badgeColor: string;
}

const TARGET_SCHOOLS: SchoolTarget[] = [
  {
    name: 'รร.เบ็ญจะมะมหาราช',
    program: 'ห้อง SMA / Gifted',
    targetPercent: 65,
    badgeColor: '#1e40af',
  },
  {
    name: 'รร.วิทยาศาสตร์จุฬาภรณฯ (จภ.)',
    program: 'รอบคัดเลือก สพฐ.',
    targetPercent: 70,
    badgeColor: '#047857',
  },
  {
    name: 'รร.สวนกุหลาบ / สามเสนวิทยาลัย',
    program: 'ห้องเรียนพิเศษ วิทย์-คณิต',
    targetPercent: 75,
    badgeColor: '#b91c1c',
  },
  {
    name: 'รร.สาธิต มศว. / ปทุมวัน',
    program: 'โครงการพัฒนาอัจฉริยภาพ',
    targetPercent: 80,
    badgeColor: '#6d28d9',
  },
];

export const SchoolBenchmark: React.FC<SchoolBenchmarkProps> = ({
  currentAccuracy,
  readinessScore,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>Target School Benchmark</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 mt-1">
            เกณฑ์ประเมินความพร้อมเทียบกับโรงเรียนเป้าหมาย
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-xl text-xs font-extrabold self-start sm:self-auto">
          <span>ความแม่นยำปัจจุบันของคุณ: {currentAccuracy}%</span>
        </div>
      </div>

      <div className="space-y-4">
        {TARGET_SCHOOLS.map((school) => {
          const isPassed = currentAccuracy >= school.targetPercent;
          const diff = currentAccuracy - school.targetPercent;

          return (
            <div
              key={school.name}
              className="p-4 rounded-2xl border transition-all hover:shadow-xs bg-slate-50/50 border-slate-200/80 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: school.badgeColor }}
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{school.name}</h4>
                    <span className="text-xs text-slate-500">{school.program}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500">
                    เกณฑ์แนะนำ: <strong>{school.targetPercent}%</strong>
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-extrabold flex items-center gap-1 ${
                      isPassed
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {isPassed ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>ผ่านเกณฑ์ (+{diff}%)</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>ขาดอีก {Math.abs(diff)}%</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Progress Bar comparison */}
              <div className="relative w-full h-3 bg-slate-200/70 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isPassed
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}
                  style={{ width: `${Math.min(100, (currentAccuracy / school.targetPercent) * 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <span>
          💡 <strong>ข้อแนะนำ:</strong> เกณฑ์คะแนนประเมินจากสถิติคัดเลือกเข้าห้องพิเศษ ม.1 ย้อนหลัง 3 ปี หากทำคะแนนสอบจำลองสม่ำเสมอเกินเกณฑ์แนะนำ โอกาสสอบติดจะสูงกว่า 85%
        </span>
      </div>
    </div>
  );
};
