import React from 'react';
import Link from 'next/link';
import { enforceServerPageAuth } from '@/lib/control-center/auth/guard';

export default async function ProtectedControlCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await enforceServerPageAuth('aggregate:read');
  const isAdmin = session.role === 'telemetry_admin';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Executive Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/control-center" className="flex items-center gap-3 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <svg
                  className="h-5 w-5 text-white"
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
              <div>
                <span className="font-bold text-sm tracking-tight text-white block">TUTOR M.1</span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider">CONTROL CENTER</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <Link
                href="/control-center"
                className="rounded-md px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
              >
                Cockpit
              </Link>
              <Link
                href="/control-center/funnels"
                className="rounded-md px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
              >
                Progression Funnels
              </Link>
              <Link
                href="/control-center/retention"
                className="rounded-md px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
              >
                Practice Habits
              </Link>
              {isAdmin && (
                <Link
                  href="/control-center/audit"
                  className="rounded-md px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
                >
                  Audit Stream
                </Link>
              )}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-xs font-mono text-slate-300">{session.actorId}</span>
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    isAdmin ? 'bg-indigo-400' : 'bg-emerald-400'
                  }`}
                />
                <span className="text-[10px] uppercase font-semibold text-slate-400">
                  {session.role.replace('_', ' ')}
                </span>
              </div>
            </div>

            <a
              href="/api/control-center/auth/logout"
              className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition active:scale-95"
            >
              Sign out
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
