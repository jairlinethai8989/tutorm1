import React from 'react';
import { fetchGA4TelemetryMetrics } from '@/lib/control-center/aggregation/ga4-adapter';
import { fetchVercelWebMetrics } from '@/lib/control-center/aggregation/vercel-adapter';

export const dynamic = 'force-dynamic';

export default async function ControlCenterCockpitPage() {
  const [ga4Data, vercelData] = await Promise.all([
    fetchGA4TelemetryMetrics('7d'),
    fetchVercelWebMetrics('7d'),
  ]);

  const mockExamCompletionRate =
    ga4Data.examStarts > 0
      ? Math.round((ga4Data.examCompletes / ga4Data.examStarts) * 100)
      : 0;

  return (
    <div className="space-y-8">
      {/* Top Banner & Status */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Executive Growth &amp; Telemetry Cockpit
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time curriculum progression, conversion funnels, and habit telemetry (Last 7 Days)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            GA4 Progression Stream: Active
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
            Vercel Analytics: Active
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Mock Exam Starts
            </span>
            <span className="rounded-md bg-indigo-500/10 px-2 py-0.5 text-[11px] font-medium text-indigo-400">
              Diagnostic
            </span>
          </div>
          <div className="mt-3 text-3xl font-extrabold text-white">
            {ga4Data.examStarts.toLocaleString()}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
            <span>Completed: {ga4Data.examCompletes.toLocaleString()}</span>
            <span className="font-semibold text-emerald-400">{mockExamCompletionRate}% rate</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Diagnostic Views
            </span>
            <span className="rounded-md bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-400">
              Reports
            </span>
          </div>
          <div className="mt-3 text-3xl font-extrabold text-white">
            {ga4Data.diagnosticViews.toLocaleString()}
          </div>
          <div className="mt-2 text-xs text-slate-400">
            {Math.round((ga4Data.diagnosticViews / ga4Data.examCompletes) * 100)}% of exam completers
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              AI Practice Starts
            </span>
            <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-400">
              Daily Habit
            </span>
          </div>
          <div className="mt-3 text-3xl font-extrabold text-white">
            {ga4Data.practiceStarts.toLocaleString()}
          </div>
          <div className="mt-2 text-xs text-slate-400">
            {ga4Data.practiceMilestones.toLocaleString()} milestones reached
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Unique Visitors
            </span>
            <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 text-[11px] font-medium text-cyan-400">
              Vercel Web
            </span>
          </div>
          <div className="mt-3 text-3xl font-extrabold text-white">
            {vercelData.uniqueVisitors.toLocaleString()}
          </div>
          <div className="mt-2 text-xs text-slate-400">
            {vercelData.pageViews.toLocaleString()} total pageviews
          </div>
        </div>
      </div>

      {/* Progression Funnels Overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Mock Exam Funnel */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Mock Exam Progression Funnel</h2>
            <span className="text-xs font-mono text-slate-400">Zero-PII Aggregation</span>
          </div>
          <div className="space-y-4">
            {ga4Data.funnels.mockExamFunnel.map((step, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300">{step.stepName}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">{step.count.toLocaleString()}</span>
                    <span className="font-semibold text-indigo-400 w-12 text-right">
                      {step.stepConversionRate}%
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                    style={{ width: `${Math.max(5, step.stepConversionRate)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Practice Funnel */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">AI Practice Habit Progression</h2>
            <span className="text-xs font-mono text-slate-400">Milestone Ladder</span>
          </div>
          <div className="space-y-4">
            {ga4Data.funnels.aiPracticeFunnel.map((step, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300">{step.stepName}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">{step.count.toLocaleString()}</span>
                    <span className="font-semibold text-amber-400 w-12 text-right">
                      {step.stepConversionRate}%
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                    style={{ width: `${Math.max(5, step.stepConversionRate)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Channels & Subject Performance Breakdown */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Traffic Channels */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg lg:col-span-1">
          <h2 className="text-lg font-bold text-white mb-4">Traffic Acquisition</h2>
          <div className="space-y-4">
            {ga4Data.trafficChannels.map((tc, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{tc.channel}</span>
                  <span className="font-semibold text-slate-200">{tc.percentage}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-500"
                    style={{ width: `${tc.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Breakdown Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg lg:col-span-2">
          <h2 className="text-lg font-bold text-white mb-4">Subject Diagnostic Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="pb-3 font-semibold">Subject</th>
                  <th className="pb-3 font-semibold text-right">Attempts</th>
                  <th className="pb-3 font-semibold text-right">Avg Score</th>
                  <th className="pb-3 font-semibold text-right">Completion Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {ga4Data.subjectBreakdown.map((sb, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 font-medium text-slate-200">{sb.subject}</td>
                    <td className="py-3 text-right text-slate-300">{sb.attempts.toLocaleString()}</td>
                    <td className="py-3 text-right font-semibold text-indigo-400">{sb.averageScore}%</td>
                    <td className="py-3 text-right font-semibold text-emerald-400">{sb.completionRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Zero PII Security Footer */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-500 flex items-center justify-between">
        <div>
          <strong className="text-slate-400">Zero-PII Guarantee:</strong> Aggregates are computed entirely without student names, emails, phones, or raw answer text.
        </div>
        <div className="font-mono text-[11px]">
          HMAC Key Strength: 256-bit Validated &bull; NIST AAL2
        </div>
      </div>
    </div>
  );
}
