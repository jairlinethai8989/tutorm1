import React from 'react';

export default async function ControlCenterLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const error = typeof params.error === 'string' ? params.error : null;
  const status = typeof params.status === 'string' ? params.status : null;

  let errorMessage: string | null = null;
  if (error === 'identity_not_authorized') {
    errorMessage = 'บัญชี Google นี้ไม่ได้รับสิทธิ์เข้าถึง Control Center (Identity not in authorized allowlist)';
  } else if (error === 'permission_denied') {
    errorMessage = 'ไม่มีสิทธิ์ในการเข้าถึงทรัพยากรที่ร้องขอ (Insufficient role permissions)';
  } else if (error?.startsWith('oauth_')) {
    errorMessage = `Google OAuth ผิดพลาด: ${error.replace('oauth_', '')}`;
  } else if (error) {
    errorMessage = `การยืนยันตัวตนล้มเหลว: ${error}`;
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-sm">
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/20">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Tutor M.1 Control Center</h1>
          <p className="text-sm text-slate-400">ศูนย์บริหารและวิเคราะห์ข้อมูลการเรียนรู้ (Executive Growth &amp; Telemetry Cockpit)</p>
        </div>

        {status === 'logged_out' && (
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-400">
            ออกจากระบบเรียบร้อยแล้ว (Session successfully terminated)
          </div>
        )}

        {errorMessage && (
          <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400 space-y-2">
            <div>{errorMessage}</div>
            {typeof params.sub === 'string' && (
              <div className="mt-2 rounded bg-black/40 p-2 font-mono text-[11px] text-amber-300 select-all break-all border border-amber-500/20">
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">รหัส Google Subject ID ของท่าน:</span>
                {params.sub}
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          <a
            href="/api/control-center/auth/login"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow-md transition hover:bg-slate-100 active:scale-[0.98]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            เข้าสู่ระบบด้วย Google (Sign in with Google)
          </a>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 space-y-2.5 text-xs text-slate-400">
            <div className="flex items-center gap-2 font-medium text-slate-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              นโยบายความปลอดภัยและความเป็นส่วนตัว (Security &amp; Privacy)
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-slate-400">
              <li><strong className="text-slate-300">ปลอดข้อมูลส่วนบุคคลนักเรียน (Zero PII)</strong>: แยกข้อมูลตัวตนออกจากสถิติการสอบโดยสมบูรณ์</li>
              <li><strong className="text-slate-300">การยืนยันตัวตน 2 ขั้นตอน (NIST AAL2 MFA)</strong>: รองรับ Google Multi-Factor verification</li>
              <li><strong className="text-slate-300">อายุเซสชันคู่ (Dual Lifetime)</strong>: ตัดการเชื่อมต่อเมื่อไม่ใช้งาน 15 นาที &bull; สูงสุดไม่เกิน 8 ชม.</li>
              <li><strong className="text-slate-300">บันทึกประวัติความปลอดภัย (Immutable Audit)</strong>: แปลงรหัสนามแฝงด้วย HMAC ที่ไม่สามารถย้อนกลับได้</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
