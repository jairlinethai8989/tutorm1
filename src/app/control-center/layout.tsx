import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Tutor M.1 Control Center & Telemetry',
  description: 'Executive Growth & Learning Analytics Cockpit',
};

export default function ControlCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {children}
    </div>
  );
}
