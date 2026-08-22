'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Clock, BarChart3, HelpCircle } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'เลือกวิชา', href: '/', icon: BookOpen },
    { label: 'จำลองสอบ', href: '/mock-exam', icon: Clock },
    { label: 'สถิติ/จุดอ่อน', href: '/dashboard', icon: BarChart3 },
    { label: 'คลังเฉลย', href: '/solutions/math-geo-001', icon: HelpCircle },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 flex items-center justify-around shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
              isActive ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
            <span className="text-[11px] mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
