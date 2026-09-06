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
            กรวยวัดความก้าวหน้าและหมุดหมาย (Progression Funnels)
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            อัตราส่วนการทำข้อสอบจนจบ และเป้าหมายความสำเร็จของนักเรียน (ย้อนหลัง 7 วัน)
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {isUnavailable ? (
            <div className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-rose-400">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              แหล่งข้อมูล GA4 ออฟไลน์ (DATA_SOURCE_UNAVAILABLE)
            </div>
          ) : isSynthetic ? (
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              โหมดทดสอบจำลอง (Demo Baseline)
            </div>
          ) : (
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              เชื่อมต่อข้อมูลสด (Live GA4)
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
            <h2 className="text-lg font-bold text-white">แหล่งข้อมูล GA4 ยังไม่พร้อมใช้งาน</h2>
            <p className="max-w-xl mx-auto text-xs text-slate-400 leading-relaxed">
              ยังไม่ได้ตั้งค่า Credentials หรือปลายทางไม่สามารถเชื่อมต่อได้ ระบบระงับการแสดงตัวเลขเพื่อความถูกต้องตามนโยบาย Zero-Fabrication
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
                <h2 className="text-lg font-bold text-white">เส้นทางการทำข้อสอบจำลอง ม.1 (Mock Exam Journey)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  ขั้นตอน: เริ่มทำข้อสอบ &rarr; ส่งข้อสอบจนจบชุด &rarr; เปิดดูผลวิเคราะห์จุดอ่อน
                </p>
              </div>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                อัตราส่วนทำจบ: {mockExamRatioText}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">ขั้นที่ 1 (START)</span>
                <div className="text-sm font-bold text-white">เริ่มทำข้อสอบจำลอง</div>
                <div className="text-3xl font-extrabold text-slate-100">
                  {progression.mockExam.started.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">ครั้ง</span>
                </div>
                <div className="text-[11px] text-slate-500">จำนวนรอบการสอบที่ถูกเปิดเริ่มทำ</div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">ขั้นที่ 2 (COMPLETE)</span>
                <div className="text-sm font-bold text-white">ส่งข้อสอบจนเสร็จสมบูรณ์</div>
                <div className="text-3xl font-extrabold text-indigo-400">
                  {progression.mockExam.completed.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">ครั้ง</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  คิดเป็นอัตราส่วนทำจบ {mockExamRatioText} ในช่วงเวลา
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">ขั้นที่ 3 (DIAGNOSIS)</span>
                <div className="text-sm font-bold text-white">เปิดดูผลวิเคราะห์ AI รายบุคคล</div>
                <div className="text-3xl font-extrabold text-violet-400">
                  {progression.activity.diagnosticViews.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">ครั้ง</span>
                </div>
                <div className="text-[11px] text-slate-500">รายงานวิเคราะห์จุดอ่อนที่เด็กเปิดดู</div>
              </div>
            </div>
          </div>

          {/* AI Practice Journey Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white">เส้นทางการฝึกฝนโจทย์ AI (AI Practice Journey)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  ขั้นตอน: เริ่มฝึกฝน &rarr; ฝึกจบชุด &bull; ระบบสุ่มเก็บสถิติเรียลไทม์
                </p>
              </div>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                อัตราส่วนฝึกจบ: {aiPracticeRatioText}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">ขั้นที่ 1 (START)</span>
                <div className="text-sm font-bold text-white">เริ่มรอบฝึกฝน</div>
                <div className="text-3xl font-extrabold text-slate-100">
                  {progression.aiPractice.started.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">รอบ</span>
                </div>
                <div className="text-[11px] text-slate-500">จำนวนรอบการฝึกฝนที่เริ่มทำ</div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">ขั้นที่ 2 (COMPLETE)</span>
                <div className="text-sm font-bold text-white">ฝึกฝนจบครบชุด</div>
                <div className="text-3xl font-extrabold text-amber-400">
                  {progression.aiPractice.completed.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">รอบ</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  คิดเป็นอัตราส่วนฝึกจบ {aiPracticeRatioText} ในช่วงเวลา
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">กิจกรรม (ACTIVITY)</span>
                <div className="text-sm font-bold text-white">คำตอบที่บันทึก (Sampled)</div>
                <div className="text-3xl font-extrabold text-cyan-400">
                  {progression.activity.sampledQuestionsAnswered.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">ข้อ</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  {progression.activity.samplingStatus === 'enabled_5_percent'
                    ? 'สุ่มเก็บสถิติ 5% จากฝั่งผู้ใช้'
                    : progression.activity.samplingStatus === 'custom'
                      ? `สุ่มเก็บสถิติ ${((progression.activity.samplingRate ?? 0.05) * 100).toFixed(1)}%`
                      : 'โหมดตรวจนับปกติ'}
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Events Recorded in Window */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg space-y-4">
            <div>
              <h2 className="text-lg font-bold text-white">หมุดหมายการทำโจทย์สะสม (Milestones)</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                จำนวนครั้งที่นักเรียนทำโจทย์สะสมถึงเป้าหมายที่กำหนด (ย้อนหลัง 7 วัน)
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
                <span className="text-xs font-medium text-slate-400">เป้าหมาย 10 ข้อ (Milestone 10)</span>
                <div className="text-2xl font-extrabold text-amber-400">
                  {progression.milestones.questions10.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">คน</span>
                </div>
                <span className="text-[11px] text-slate-500">เริ่มสร้างนิสัยความสม่ำเสมอ</span>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
                <span className="text-xs font-medium text-slate-400">เป้าหมาย 50 ข้อ (Milestone 50)</span>
                <div className="text-2xl font-extrabold text-amber-500">
                  {progression.milestones.questions50.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">คน</span>
                </div>
                <span className="text-[11px] text-slate-500">มุ่งมั่นทบทวนเนื้อหาอย่างจริงจัง</span>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1">
                <span className="text-xs font-medium text-slate-400">เป้าหมาย 100 ข้อ (Milestone 100)</span>
                <div className="text-2xl font-extrabold text-orange-400">
                  {progression.milestones.questions100.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">คน</span>
                </div>
                <span className="text-[11px] text-slate-500">ระดับเชี่ยวชาญ / ทำโจทย์มาราธอน</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
