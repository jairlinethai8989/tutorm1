'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Flame, BarChart3, Award, BookOpen, Clock } from 'lucide-react';
import { getUserStats } from '@/lib/storage';
import { UserOverallStats } from '@/types/analytics';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [stats, setStats] = useState<UserOverallStats | null>(null);

  useEffect(() => {
    setStats(getUserStats());
  }, [pathname]);

  const navLinks = [
    { name: 'เลือกวิชา', href: '/', icon: BookOpen },
    { name: 'จำลองสอบจริง', href: '/mock-exam', icon: Clock },
    { name: 'ประเมินผล & จุดอ่อน', href: '/dashboard', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & School Badge */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                  Tutor M.1
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-md">
                  มศว. & สสวท.
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                เตรียมสอบ รร.เบ็ญจะมะมหาราช & จุฬาภรณราชวิทยาลัย มุกดาหาร
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Streak & Readiness Widget */}
          <div className="flex items-center space-x-3">
            {/* Streak */}
            <div className="flex items-center space-x-1.5 bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-full text-orange-600 text-xs font-bold shadow-2xs">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{stats?.streakDays || 1} วันติดกัน</span>
            </div>

            {/* Readiness */}
            <div className="hidden lg:flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full text-emerald-700 text-xs font-bold">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>ความพร้อม {stats?.examReadinessScore || 0}%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
