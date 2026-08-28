'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Flame, Award } from 'lucide-react';
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  const dockItems = [
    {
      id: 'subjects',
      name: '5 วิชาหลัก',
      fullName: '5 วิชาหลัก (ข้อสอบจริง & ฝึกหัด)',
      href: '/',
      image: '/images/nav-icons/icon-subjects.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(59,130,246,0.55)]',
    },
    {
      id: 'mock-exam',
      name: 'จำลองสอบ',
      fullName: 'จำลองสอบจริง จับเวลา 60 นาที',
      href: '/mock-exam',
      image: '/images/nav-icons/icon-mock-exam.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(139,92,246,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(139,92,246,0.55)]',
    },
    {
      id: 'practice',
      name: 'AI Practice',
      fullName: 'สุ่มโจทย์ AI ฝึกหัด 33 รูปแบบ',
      href: '/practice',
      image: '/images/nav-icons/icon-practice.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(217,70,239,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(217,70,239,0.55)]',
    },
    {
      id: 'mistake-book',
      name: 'สมุดจุดอ่อน',
      fullName: 'สมุดจุดอ่อน & ข้อที่เคยตอบผิด',
      href: '/mistake-book',
      image: '/images/nav-icons/icon-mistake-book.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(244,63,94,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(244,63,94,0.55)]',
    },
    {
      id: 'cheat-sheets',
      name: 'คลังสรุปสูตร',
      fullName: 'คลังสรุปสูตร & หัวใจสำคัญ 5 วิชา',
      href: '/cheat-sheets',
      image: '/images/nav-icons/icon-cheat-sheets.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(245,158,11,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(245,158,11,0.55)]',
    },
    {
      id: 'speed-run',
      name: 'Speed Run ⚡',
      fullName: 'โหมดจับเวลาประลองความเร็ว Speed Run',
      href: '/speed-run',
      image: '/images/nav-icons/icon-speed-run.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(249,115,22,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(249,115,22,0.55)]',
    },
    {
      id: 'dashboard',
      name: 'แดชบอร์ด AI',
      fullName: 'แดชบอร์ดสถิติ & รายงานผู้ปกครอง',
      href: '/dashboard',
      image: '/images/nav-icons/icon-dashboard.png',
      glowColor: 'group-hover:drop-shadow-[0_8px_16px_rgba(16,185,129,0.55)]',
      activeGlow: 'drop-shadow-[0_8px_16px_rgba(16,185,129,0.55)]',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xs w-full">
      <div className="w-full max-w-[1520px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Snug & Centered Balanced Row with Transparent 3D Clay Icons */}
        <div className="flex items-center justify-between xl:justify-center gap-2 sm:gap-4 lg:gap-6 h-20">
          {/* 1. Left: Official App Icon & Title */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform bg-blue-600 relative border border-blue-200/50">
              <Image
                src="/images/logo-icon.png"
                alt="Tutor M.1 Logo"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block text-left">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  Tutor M.1
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-purple-100 text-purple-700 font-extrabold px-1.5 py-0.2 rounded-md">
                  {APP_CONFIG.version}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium line-clamp-1">
                เตรียมสอบเข้า ม.1 ห้องพิเศษ โรงเรียนชั้นนำ
              </p>
            </div>
          </Link>

          {/* 2. Center: iPadOS Top Floating Capsule (Light Frosted Glass on all devices) */}
          <nav className="hidden md:flex items-center justify-center shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3.5 px-3 sm:px-4 py-1.5 rounded-3xl bg-slate-100/90 backdrop-blur-2xl border border-white shadow-inner ring-1 ring-slate-900/5">
              {dockItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));
                const isHovered = hoveredItem === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative flex flex-col items-center group py-0.5"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Floating Tooltip Pill */}
                    <div
                      className={`absolute top-full mt-2.5 pointer-events-none transition-all duration-200 z-50 flex flex-col items-center ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                    >
                      <div className="w-2 h-2 bg-slate-900 rotate-45 -mb-1 border-l border-t border-slate-700" />
                      <div className="px-3 py-1 rounded-xl bg-slate-900/95 text-white text-xs font-black shadow-xl border border-slate-700 whitespace-nowrap backdrop-blur-md">
                        {item.fullName}
                      </div>
                    </div>

                    {/* Transparent 3D Claymorphic Squircle Icon Button */}
                    <Link
                      href={item.href}
                      className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-2xl transition-all duration-200 ease-out transform cursor-pointer select-none group-hover:scale-120 group-hover:-translate-y-2 active:scale-95 ${
                        isActive
                          ? `ring-2 ring-blue-500 ring-offset-2 ring-offset-white scale-110 -translate-y-1 ${item.activeGlow}`
                          : `opacity-90 hover:opacity-100 ${item.glowColor}`
                      }`}
                      aria-label={item.name}
                    >
                      {/* 3D Clay Icon Image with True Transparent Background (100% Squircle Alpha) */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain transition-transform group-hover:scale-105"
                      />
                    </Link>

                    {/* Active Running App Indicator Dot */}
                    <div className="h-1 mt-1 flex items-center justify-center">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shadow-xs" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>

          {/* 3. Right: Streak, Readiness, Notice & Student Profile */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            {/* Streak */}
            <div className="flex items-center space-x-1 bg-orange-50 border border-orange-200/90 px-2.5 py-1.5 rounded-full text-orange-600 text-xs font-bold shadow-2xs">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{stats?.streakDays || 1} วัน</span>
            </div>

            {/* Readiness */}
            <div className="hidden sm:flex items-center space-x-1 bg-emerald-50 border border-emerald-200/90 px-2.5 py-1.5 rounded-full text-emerald-700 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>พร้อม {stats?.examReadinessScore || 0}%</span>
            </div>

            {/* Notice Capsule Button */}
            <UserNoticeModal triggerButton={true} />

            {/* Student Profile Capsule Badge */}
            <StudentOnboardingModal triggerButton={true} />
          </div>
        </div>
      </div>
    </header>
  );
};
