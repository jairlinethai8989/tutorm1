import React from 'react';

export const dynamic = 'force-dynamic';

export default function RetentionPage() {
  const cohortMetrics = [
    { day: 'Day 1', retention: '100%', activeLearners: 1240, color: 'bg-indigo-500' },
    { day: 'Day 3', retention: '64%', activeLearners: 793, color: 'bg-indigo-600' },
    { day: 'Day 7', retention: '48%', activeLearners: 595, color: 'bg-indigo-700' },
    { day: 'Day 14', retention: '38%', activeLearners: 471, color: 'bg-indigo-800' },
    { day: 'Day 30', retention: '29%', activeLearners: 360, color: 'bg-indigo-950' },
  ];

  const habitStreaks = [
    { streak: '1-2 Days (Exploring)', count: 520, percentage: 42 },
    { streak: '3-5 Days (Consistent)', count: 395, percentage: 32 },
    { streak: '7+ Days (Disciplined)', count: 215, percentage: 17 },
    { streak: '14+ Days (Elite Scholar)', count: 110, percentage: 9 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Practice Habits &amp; Student Retention
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Longitudinal engagement cohorts and question-answering streak distributions
        </p>
      </div>

      {/* Cohort Retention Grid */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Curriculum Cohort Retention</h2>
          <span className="text-xs font-mono text-emerald-400">Benchmark: +12% vs. EdTech Standard</span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cohortMetrics.map((c, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5"
            >
              <div className="text-xs font-medium text-slate-400">{c.day}</div>
              <div className="text-2xl font-extrabold text-white">{c.retention}</div>
              <div className="text-xs text-slate-500">{c.activeLearners.toLocaleString()} students</div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Streak Distribution */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
        <h2 className="text-lg font-bold text-white">Daily Practice Streak Distribution</h2>
        <div className="space-y-4">
          {habitStreaks.map((h, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-300">{h.streak}</span>
                <span className="text-slate-400">{h.count.toLocaleString()} students ({h.percentage}%)</span>
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
  );
}
