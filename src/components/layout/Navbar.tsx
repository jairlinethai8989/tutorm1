'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Flame, BarChart3, Award, BookOpen, Clock, Sparkles, BookMarked } from 'lucide-react';
import { getUserStats, getUnresolvedMistakeCount } from '@/lib/storage';
import { UserOverallStats } from '@/types/analytics';

import { APP_CONFIG } from '@/lib/constants/app';
import { UserNoticeModal } from '@/components/home/UserNoticeModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [stats, setStats] = useState<UserOverallStats | null>(null);
  const [mistakeCount, setMistakeCount] = useState<number>(0);

  useEffect(() => {
    setStats(getUserStats());
    setMistakeCount(getUnresolvedMistakeCount());
  }, [pathname]);

  const navLinks = [
    { name: '5 วิชาหลัก', href: '/', icon: BookOpen },
    { name: 'จำลองสอบจริง', href: '/mock-exam', icon: Clock },
    { name: 'AI Practice', href: '/practice', icon: Sparkles },
    { name: 'สมุดจุดอ่อน', href: '/mistake-book', icon: BookMarked, badge: mistakeCount > 0 ? mistakeCount : undefined },
    { name: 'แดชบอร์ด AI', href: '/dashboard', icon: BarChart3 },
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
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  Tutor M.1
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded-md">
                  {APP_CONFIG.version}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
                {APP_CONFIG.title}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-slate-50/90 text-slate-700 hover:text-blue-600 hover:bg-white border border-slate-200/80 hover:border-blue-300/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-blue-500 group-hover:text-blue-600'}`} />
                  <span>{link.name}</span>
                  {link.badge !== undefined && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-black bg-rose-500 text-white shadow-2xs animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Streak, Readiness & Notice Widget */}
          <div className="flex items-center space-x-2">
            <UserNoticeModal triggerButton={true} />

            {/* Streak */}
            <div className="flex items-center space-x-1 bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-full text-orange-600 text-xs font-bold shadow-2xs">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{stats?.streakDays || 1} วัน</span>
            </div>

            {/* Readiness */}
            <div className="hidden lg:flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full text-emerald-700 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>พร้อม {stats?.examReadinessScore || 0}%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
