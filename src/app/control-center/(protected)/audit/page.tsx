import React from 'react';
import { enforceServerPageAuth } from '@/lib/control-center/auth/guard';
import { getSessionStore } from '@/lib/control-center/auth/sessionStore';

export const dynamic = 'force-dynamic';

export default async function AuditPage() {
  // Guard specifically for audit:read permission with exact resource path
  await enforceServerPageAuth('audit:read', '/control-center/audit');

  const store = getSessionStore();
  const records = await store.getRecentAuditRecords(7);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            บันทึกประวัติความปลอดภัยและการเข้าถึง (Immutable Audit Stream)
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            บันทึกเหตุการณ์ความปลอดภัย การตัดสินสิทธิ์การเข้าถึง และการแปลงรหัสระบุตัวตนด้วย HMAC (ย้อนหลัง 7 วัน)
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>ระยะเวลาจัดเก็บบันทึก (Retention): 90 วันแบบแบ่งส่วน (Partitioned Sink)</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">บันทึกการตัดสินใจและการเข้าถึงระบบ (Access Decisions &amp; Security Log)</h2>
          <span className="text-xs font-mono text-slate-400">{records.length} รายการที่บันทึก (events logged)</span>
        </div>

        {records.length === 0 ? (
          <div className="p-12 text-center text-sm text-slate-500">
            ไม่พบรายการบันทึกประวัติในช่วงเวลาที่เลือก (No audit records found)
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-950/40 text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-semibold">วัน-เวลา (Timestamp)</th>
                  <th className="py-3 px-4 font-semibold">ผลการตรวจสอบ (Decision)</th>
                  <th className="py-3 px-4 font-semibold">รหัสผู้ใช้งานนามแฝง (Actor ID)</th>
                  <th className="py-3 px-4 font-semibold">สิทธิ์ที่ร้องขอ (Permission)</th>
                  <th className="py-3 px-4 font-semibold">ปลายทาง (Resource)</th>
                  <th className="py-3 px-4 font-semibold">แฮชไอพีแบบหยาบ (Coarse IP Hash)</th>
                  <th className="py-3 px-4 font-semibold">อุปกรณ์ (Device)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {records.map((r) => (
                  <tr key={r.eventId} className="hover:bg-slate-800/30 transition font-mono">
                    <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                      {new Date(r.timestamp).toLocaleString('en-US', {
                        timeZone: 'Asia/Bangkok',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          r.decision === 'ALLOW'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {r.decision}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-300 font-semibold">{r.pseudonymousActorId}</td>
                    <td className="py-3 px-4 text-slate-400">{r.permissionTested}</td>
                    <td className="py-3 px-4 text-slate-400 max-w-xs truncate" title={r.resource}>
                      {r.resource}
                    </td>
                    <td className="py-3 px-4 text-slate-500">{r.ipHashCoarse}</td>
                    <td className="py-3 px-4 text-slate-400 capitalize">{r.clientCategory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
