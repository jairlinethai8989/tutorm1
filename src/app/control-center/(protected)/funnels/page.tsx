import React from 'react';
import { getAggregatedTelemetry } from '@/lib/control-center/aggregation/service';

export const dynamic = 'force-dynamic';

export default async function FunnelsPage() {
  const telemetry = await getAggregatedTelemetry('7d');
  const ga4Data = telemetry.ga4;
  const { progression } = ga4Data;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Event Progression &amp; Milestone Analytics
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Same-window event progression ratios and cumulative student achievement milestones (Last 7 Days)
        </p>
      </div>

      {/* Mock Exam Journey Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Mock Exam Journey</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Flow: Exam Started &rarr; Exam Completed &rarr; Diagnostic Report Viewed
            </p>
          </div>
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            Event Progression Ratio: {progression.mockExam.completionEventRatio}%
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <span className="text-xs font-mono text-slate-400">EVENT 01</span>
            <div className="text-sm font-bold text-white">Mock Exam Started</div>
            <div className="text-3xl font-extrabold text-slate-100">
              {progression.mockExam.started.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Initiated exam sessions</div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <span className="text-xs font-mono text-slate-400">EVENT 02</span>
            <div className="text-sm font-bold text-white">Mock Exam Completed</div>
            <div className="text-3xl font-extrabold text-indigo-400">
              {progression.mockExam.completed.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">
              {progression.mockExam.completionEventRatio}% same-window event ratio
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <span className="text-xs font-mono text-slate-400">EVENT 03</span>
            <div className="text-sm font-bold text-white">AI Diagnostic Viewed</div>
            <div className="text-3xl font-extrabold text-violet-400">
              {progression.activity.diagnosticViews.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Diagnostic reports inspected</div>
          </div>
        </div>
      </div>

      {/* AI Practice Journey Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white">AI Practice Journey</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Flow: Practice Started &rarr; Practice Completed &bull; In-flight Sampled Telemetry
            </p>
          </div>
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            Event Progression Ratio: {progression.aiPractice.completionEventRatio}%
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <span className="text-xs font-mono text-slate-400">EVENT 01</span>
            <div className="text-sm font-bold text-white">Practice Started</div>
            <div className="text-3xl font-extrabold text-slate-100">
              {progression.aiPractice.started.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Practice sessions initiated</div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <span className="text-xs font-mono text-slate-400">EVENT 02</span>
            <div className="text-sm font-bold text-white">Practice Completed</div>
            <div className="text-3xl font-extrabold text-amber-400">
              {progression.aiPractice.completed.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">
              {progression.aiPractice.completionEventRatio}% same-window event ratio
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
            <span className="text-xs font-mono text-slate-400">ACTIVITY</span>
            <div className="text-sm font-bold text-white">Sampled Answers</div>
            <div className="text-3xl font-extrabold text-cyan-400">
              {progression.activity.sampledQuestionsAnswered.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">
              {progression.activity.samplingStatus === 'enabled_5_percent'
                ? '5% Client-Sampled Stream'
                : progression.activity.samplingStatus === 'custom'
                  ? `${((progression.activity.samplingRate ?? 0.05) * 100).toFixed(1)}% Custom Stream`
                  : 'Sampling Inactive'}
            </div>
          </div>
        </div>
      </div>

      {/* Lifetime Student Achievement Milestones */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white">Lifetime Student Achievement Milestones</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Cumulative question answered milestones reached by student accounts (Lifetime cohort metrics)
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
            <span className="text-xs font-medium text-slate-400">10 Questions Milestone</span>
            <div className="text-2xl font-extrabold text-amber-400">
              {progression.milestones.questions10.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-500">Early practice habit established</span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
            <span className="text-xs font-medium text-slate-400">50 Questions Milestone</span>
            <div className="text-2xl font-extrabold text-amber-500">
              {progression.milestones.questions50.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-500">Persistent revision mastery</span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
            <span className="text-xs font-medium text-slate-400">100 Questions Milestone</span>
            <div className="text-2xl font-extrabold text-orange-400">
              {progression.milestones.questions100.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-500">Advanced scholar marathon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
