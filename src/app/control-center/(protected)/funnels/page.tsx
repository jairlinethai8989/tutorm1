import React from 'react';
import { enforceServerPageAuth } from '@/lib/control-center/auth/guard';
import { getAggregatedTelemetry } from '@/lib/control-center/aggregation/service';

export const dynamic = 'force-dynamic';

export default async function FunnelsPage() {
  await enforceServerPageAuth('aggregate:read', '/control-center/funnels');

  const telemetry = await getAggregatedTelemetry('7d');
  const ga4Data = telemetry.ga4;
  const isUnavailable = ga4Data.status === 'DATA_SOURCE_UNAVAILABLE';
  const isSynthetic = ga4Data.source === 'synthetic_fallback';
  const { progression } = ga4Data;

  const mockExamRatioText =
    progression.mockExam.completionEventRatio !== null
      ? `${progression.mockExam.completionEventRatio}%`
      : 'N/A';

  const aiPracticeRatioText =
    progression.aiPractice.completionEventRatio !== null
      ? `${progression.aiPractice.completionEventRatio}%`
      : 'N/A';

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Event Progression &amp; Milestone Analytics
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Same-window event progression ratios and cumulative student achievement milestones (Last 7 Days)
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {isUnavailable ? (
            <div className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-rose-400">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              GA4 Telemetry Offline (DATA_SOURCE_UNAVAILABLE)
            </div>
          ) : isSynthetic ? (
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              Demo / Sandbox Mode (Calibrated Baseline)
            </div>
          ) : (
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Telemetry: GA4 batchRunReports
            </div>
          )}
        </div>
      </div>

      {isUnavailable ? (
        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-8 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white">GA4 Telemetry Source Unavailable</h2>
            <p className="max-w-xl mx-auto text-xs text-slate-400 leading-relaxed">
              Upstream Google Analytics 4 credentials are not configured or the reporting service is unreachable.
              Numeric event progression counts and ratios are suppressed to prevent zero-fabrication.
            </p>
            {ga4Data.error && (
              <p className="font-mono text-xs text-rose-400 mt-2">Error: {ga4Data.error}</p>
            )}
          </div>
        </div>
      ) : (
        <>
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
                Event Progression Ratio: {mockExamRatioText}
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
                  {mockExamRatioText} same-window event ratio
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
                Event Progression Ratio: {aiPracticeRatioText}
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
                  {aiPracticeRatioText} same-window event ratio
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

          {/* Milestone Events Recorded in Window */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
            <div>
              <h2 className="text-lg font-bold text-white">Milestone Events Recorded (Last 7 Days)</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Question answered milestone events logged in the selected window (same-window milestone counts)
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
        </>
      )}
    </div>
  );
}
