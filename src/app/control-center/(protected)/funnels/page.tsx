import React from 'react';
import { fetchGA4TelemetryMetrics } from '@/lib/control-center/aggregation/ga4-adapter';

export const dynamic = 'force-dynamic';

export default async function FunnelsPage() {
  const ga4Data = await fetchGA4TelemetryMetrics('7d');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Progression Funnels &amp; Bottleneck Analysis
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Detailed step-by-step conversion drop-off across diagnostic tests and adaptive practice loops
        </p>
      </div>

      {/* Mock Exam Funnel Detailed Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Full Mock Exam Journey</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Flow: Exam Initiation &rarr; Question 15 Checkpoint &rarr; Submission &rarr; Diagnostic Report Review
            </p>
          </div>
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            End-to-End: {Math.round((ga4Data.diagnosticViews / ga4Data.examStarts) * 100)}% Conversion
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ga4Data.funnels.mockExamFunnel.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>STEP 0{idx + 1}</span>
                <span className="text-indigo-400 font-semibold">{step.stepConversionRate}% prev</span>
              </div>
              <div className="text-sm font-bold text-white">{step.stepName}</div>
              <div className="text-2xl font-extrabold text-slate-100">
                {step.count.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-500">
                {idx === 0 ? 'Baseline (100%)' : `${step.dropoffRate}% overall drop-off`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Practice Habit Funnel */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Adaptive Practice Milestone Funnel</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Progressive milestone ladder: Warmup (1) &rarr; Streak (5) &rarr; Mastery (10) &rarr; Marathon (20)
            </p>
          </div>
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            Marathon Retention: {Math.round((ga4Data.funnels.aiPracticeFunnel[4].count / ga4Data.practiceStarts) * 100)}%
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ga4Data.funnels.aiPracticeFunnel.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>MILESTONE {idx === 0 ? 'START' : `M${[1, 5, 10, 20][idx - 1]}`}</span>
                <span className="text-amber-400 font-semibold">{step.stepConversionRate}%</span>
              </div>
              <div className="text-sm font-bold text-white">{step.stepName}</div>
              <div className="text-2xl font-extrabold text-slate-100">
                {step.count.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-500">
                {idx === 0 ? 'Initiated sessions' : `${step.dropoffRate}% cumulative drop-off`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
