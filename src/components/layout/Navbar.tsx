'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Flame,
  BarChart3,
  Award,
  BookOpen,
  Clock,
  Sparkles,
  BookMarked,
  BookmarkCheck,
  Zap,
} from 'lucide-react';
import { getUserStats, getUnresolvedMistakeCount, getActiveStudentProfile } from '@/lib/storage';
import { UserOverallStats } from '@/types/analytics';
import { StudentProfile } from '@/types/student';

import { APP_CONFIG } from '@/lib/constants/app';
import { UserNoticeModal } from '@/components/home/UserNoticeModal';
import { StudentOnboardingModal } from '@/components/profile/StudentOnboardingModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [stats, setStats] = useState<UserOverallStats | null>(null);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [activeProfile, setActiveProfile] = useState<StudentProfile | null>(null);

  const refreshData = () => {
    setStats(getUserStats());
    setMistakeCount(getUnresolvedMistakeCount());
    setActiveProfile(getActiveStudentProfile());
  };

  useEffect(() => {
    refreshData();
    const handleProfileChange = () => refreshData();
    window.addEventListener('tutor_m1_student_profile_changed', handleProfileChange);
    return () => {
      window.removeEventListener('tutor_m1_student_profile_changed', handleProfileChange);
    };
  }, [pathname]);

  const navLinks = [
    {
      name: '5 วิชาหลัก',
      href: '/',
      icon: BookOpen,
      color: 'text-blue-600',
      activeBg: 'bg-blue-600 text-white shadow-md shadow-blue-500/25',
    },
    {
      name: 'จำลองสอบ',
      href: '/mock-exam',
      icon: Clock,
      color: 'text-violet-600',
      activeBg: 'bg-violet-600 text-white shadow-md shadow-violet-500/25',
    },
    {
      name: 'AI Practice',
      href: '/practice',
      icon: Sparkles,
      color: 'text-indigo-600',
      activeBg: 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25',
    },
    {
      name: 'สมุดจุดอ่อน',
      href: '/mistake-book',
      icon: BookMarked,
      color: 'text-rose-600',
      activeBg: 'bg-rose-600 text-white shadow-md shadow-rose-500/25',
      badge: mistakeCount > 0 ? mistakeCount : undefined,
    },
    {
      name: 'คลังสรุปสูตร',
      href: '/cheat-sheets',
      icon: BookmarkCheck,
      color: 'text-amber-600',
      activeBg: 'bg-amber-600 text-white shadow-md shadow-amber-500/25',
    },
    {
      name: 'Speed Run ⚡',
      href: '/speed-run',
      icon: Zap,
      color: 'text-orange-500',
      activeBg: 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/25',
    },
    {
      name: 'แดชบอร์ด AI',
      href: '/dashboard',
      icon: BarChart3,
      color: 'text-emerald-600',
      activeBg: 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs w-full">
      <div className="w-full px-3 sm:px-5 lg:px-7">
        <div className="flex items-center justify-between h-16 gap-2 lg:gap-4">
          {/* 1. Left: Official App Icon & Title */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
            <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform bg-blue-600 relative border border-blue-200/50">
              <Image
                src="/images/logo-icon.png"
                alt="Tutor M.1 Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  Tutor M.1
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded-md">
                  {APP_CONFIG.version}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                {APP_CONFIG.title}
              </p>
            </div>
          </Link>

          {/* 2. Center: Rich Full Navigation Segmented Bar */}
          <nav className="hidden md:flex items-center justify-center space-x-1 lg:space-x-1.5 flex-1 max-w-4xl mx-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-2xl text-xs font-black transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? `${link.activeBg} scale-[1.02]`
                      : 'bg-slate-50/90 text-slate-700 hover:text-indigo-600 hover:bg-white border border-slate-200/80 hover:border-indigo-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-white' : link.color}`} />
                  <span className="tracking-tight">{link.name}</span>

                  {/* Badge */}
                  {link.badge !== undefined && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-rose-500 text-white shadow-2xs animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Streak, Readiness & Far-Right User Profile Avatar */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Streak */}
            <div className="flex items-center space-x-1 bg-orange-50 border border-orange-200/80 px-2.5 py-1.5 rounded-full text-orange-600 text-xs font-bold shadow-2xs">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
              <span className="hidden sm:inline">{stats?.streakDays || 1} วัน</span>
            </div>

            {/* Readiness */}
            <div className="hidden xl:flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1.5 rounded-full text-emerald-700 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>พร้อม {stats?.examReadinessScore || 0}%</span>
            </div>

            {/* Compact Notice / Help Icon Button */}
            <UserNoticeModal triggerButton={true} />

            {/* Far-Right Circular Student Profile Avatar */}
            <StudentOnboardingModal triggerButton={true} />
          </div>
        </div>
      </div>
    </header>
  );
};
