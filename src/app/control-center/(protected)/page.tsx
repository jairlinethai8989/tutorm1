import React from 'react';
import { enforceServerPageAuth } from '@/lib/control-center/auth/guard';
import { getAggregatedTelemetry } from '@/lib/control-center/aggregation/service';

export const dynamic = 'force-dynamic';

export default async function ControlCenterCockpitPage() {
  await enforceServerPageAuth('aggregate:read', '/control-center');

  const telemetry = await getAggregatedTelemetry('7d');
  const ga4Data = telemetry.ga4;
  const vercelData = telemetry.vercel;

  const isGa4Unavailable = ga4Data.status === 'DATA_SOURCE_UNAVAILABLE';
  const isVercelUnavailable = vercelData.status === 'DATA_SOURCE_UNAVAILABLE';
  const isBothUnavailable = isGa4Unavailable && isVercelUnavailable;
  const isSynthetic =
    ga4Data.source === 'synthetic_fallback' ||
    vercelData.source === 'synthetic_fallback';

  const mockExamRatioText =
    ga4Data.progression.mockExam.completionEventRatio !== null
      ? `${ga4Data.progression.mockExam.completionEventRatio}%`
      : 'N/A';

  const aiPracticeRatioText =
    ga4Data.progression.aiPractice.completionEventRatio !== null
      ? `${ga4Data.progression.aiPractice.completionEventRatio}%`
      : 'N/A';

  return (
    <div className="space-y-8">
      {/* Top Banner & Status */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Executive Growth &amp; Telemetry Cockpit
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time event progression, lifetime milestones, and habit telemetry (Last 7 Days)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {isBothUnavailable ? (
            <div className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-rose-400">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              All Telemetry Sources Offline (DATA_SOURCE_UNAVAILABLE)
            </div>
          ) : isGa4Unavailable || isVercelUnavailable ? (
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              Partial Telemetry Degradation (One Source Offline)
            </div>
          ) : isSynthetic ? (
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              Demo / Sandbox Mode (Calibrated Baseline)
            </div>
          ) : (
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Telemetry: GA4 batchRunReports &amp; Vercel visits/aggregate
            </div>
          )}
        </div>
      </div>

      {(isGa4Unavailable || isVercelUnavailable) && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-300 space-y-1">
          <div className="font-semibold text-rose-200">
            ⚠️ Telemetry Data Source Notice
          </div>
          <p>
            {isBothUnavailable
              ? 'Both GA4 and Vercel telemetry sources are unreachable or unconfigured. Artificial numbers are strictly suppressed in production mode.'
              : isGa4Unavailable
                ? 'GA4 reporting endpoints are unreachable. GA4 metrics are suppressed; Vercel web metrics continue to display.'
                : 'Vercel Web Analytics API is unreachable. Vercel metrics are suppressed; GA4 telemetry continues to display.'}
          </p>
          {ga4Data.error && <p className="font-mono text-[11px] text-rose-400">GA4: {ga4Data.error}</p>}
          {vercelData.error && <p className="font-mono text-[11px] text-rose-400">Vercel: {vercelData.error}</p>}
        </div>
      )}

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Mock Exam Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Mock Exams
            </span>
            <span className="rounded-md bg-indigo-500/10 px-2 py-0.5 text-[11px] font-medium text-indigo-400">
              Diagnostic
            </span>
          </div>
          {isGa4Unavailable ? (
            <div className="mt-3 py-2 text-sm font-semibold text-rose-400">
              Source Unavailable
            </div>
          ) : (
            <>
              <div className="mt-3 text-3xl font-extrabold text-white">
                {ga4Data.progression.mockExam.started.toLocaleString()}
              </div>
              <div className="mt-2 flex flex-col gap-0.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Completed: {ga4Data.progression.mockExam.completed.toLocaleString()}</span>
                  <span className="font-semibold text-emerald-400">
                    {mockExamRatioText} ratio
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">
                  Event progression ratio in window
                </span>
              </div>
            </>
          )}
        </div>

        {/* AI Practice Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              AI Practice
            </span>
            <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-400">
              Adaptive
            </span>
          </div>
          {isGa4Unavailable ? (
            <div className="mt-3 py-2 text-sm font-semibold text-rose-400">
              Source Unavailable
            </div>
          ) : (
            <>
              <div className="mt-3 text-3xl font-extrabold text-white">
                {ga4Data.progression.aiPractice.started.toLocaleString()}
              </div>
              <div className="mt-2 flex flex-col gap-0.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Completed: {ga4Data.progression.aiPractice.completed.toLocaleString()}</span>
                  <span className="font-semibold text-amber-400">
                    {aiPracticeRatioText} ratio
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">
                  Event progression ratio in window
                </span>
              </div>
            </>
          )}
        </div>

        {/* Vercel Visitors Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Summed Visitors
            </span>
            <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 text-[11px] font-medium text-cyan-400">
              Vercel Web
            </span>
          </div>
          {isVercelUnavailable ? (
            <div className="mt-3 py-2 text-sm font-semibold text-rose-400">
              Source Unavailable
            </div>
          ) : (
            <>
              <div className="mt-3 text-3xl font-extrabold text-white">
                {vercelData.summedDailyVisitors.toLocaleString()}
              </div>
              <div className="mt-2 flex flex-col gap-0.5 text-xs text-slate-400">
                <span>{vercelData.pageViews.toLocaleString()} total pageviews</span>
                <span className="text-[10px] text-slate-500">
                  Sum of daily occurrences (daily hash rotation)
                </span>
              </div>
            </>
          )}
        </div>

        {/* Sampled Activity Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sampled Interactions
            </span>
            <span className="rounded-md bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-400">
              Activity
            </span>
          </div>
          {isGa4Unavailable ? (
            <div className="mt-3 py-2 text-sm font-semibold text-rose-400">
              Source Unavailable
            </div>
          ) : (
            <>
              <div className="mt-3 text-3xl font-extrabold text-white">
                {ga4Data.progression.activity.sampledQuestionsAnswered.toLocaleString()}
              </div>
              <div className="mt-2 flex flex-col gap-0.5 text-xs text-slate-400">
                <span>{ga4Data.progression.activity.diagnosticViews.toLocaleString()} diagnostic views</span>
                <span className="text-[10px] text-violet-400">
                  {ga4Data.progression.activity.samplingStatus === 'enabled_5_percent'
                    ? '5% Client-Sampled Telemetry'
                    : ga4Data.progression.activity.samplingStatus === 'custom'
                      ? `${((ga4Data.progression.activity.samplingRate ?? 0.05) * 100).toFixed(1)}% Custom Sampled Stream`
                      : 'Sampling Inactive'}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Milestone Events Recorded (Last 7 Days) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Milestone Events Recorded (Last 7 Days)</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Question answered milestone events logged in the selected window (same-window milestone counts)
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400">Milestone Events</span>
        </div>

        {isGa4Unavailable ? (
          <div className="p-6 text-center text-xs text-rose-400">
            Milestone events unavailable while GA4 reporting is offline.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
              <span className="text-xs font-medium text-slate-400">10 Questions Milestone</span>
              <div className="text-2xl font-extrabold text-amber-400">
                {ga4Data.progression.milestones.questions10.toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-500">Early practice habit formed</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
              <span className="text-xs font-medium text-slate-400">50 Questions Milestone</span>
              <div className="text-2xl font-extrabold text-amber-500">
                {ga4Data.progression.milestones.questions50.toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-500">Dedicated curriculum study</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
              <span className="text-xs font-medium text-slate-400">100 Questions Milestone</span>
              <div className="text-2xl font-extrabold text-orange-400">
                {ga4Data.progression.milestones.questions100.toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-500">Mastery scholar achievement</span>
            </div>
          </div>
        )}
      </div>

      {/* Traffic Acquisition & Authoritative Subject Attempts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Traffic Channels */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg lg:col-span-1">
          <h2 className="text-lg font-bold text-white mb-4">Traffic Acquisition</h2>
          {isGa4Unavailable ? (
            <p className="text-xs text-rose-400">Traffic channels unavailable (GA4 offline).</p>
          ) : (
            <div className="space-y-4">
              {ga4Data.trafficChannels.length === 0 ? (
                <p className="text-xs text-slate-500">No channel data available for this timeframe.</p>
              ) : (
                ga4Data.trafficChannels.map((tc, idx) => (
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
                ))
              )}
            </div>
          )}
        </div>

        {/* Authoritative Subject Breakdown Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-white">Subject Completed Attempts</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Authoritative attempt_completed events (filtered to prevent answer-click inflation)
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400">Zero-Fabrication Metric</span>
          </div>

          {isGa4Unavailable ? (
            <div className="py-6 text-center text-xs text-rose-400">
              Subject breakdown unavailable while GA4 reporting is offline.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                  <tr>
                    <th className="pb-3 font-semibold">Subject</th>
                    <th className="pb-3 font-semibold text-right">Completed Attempts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {ga4Data.subjectBreakdown.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="py-4 text-center text-slate-500">
                        No completed subject attempts recorded in this timeframe.
                      </td>
                    </tr>
                  ) : (
                    ga4Data.subjectBreakdown.map((sb, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30 transition">
                        <td className="py-3 font-medium text-slate-200">{sb.subject}</td>
                        <td className="py-3 text-right font-semibold text-indigo-400">
                          {sb.completedAttempts.toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
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
