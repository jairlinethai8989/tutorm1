'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Heart, Code2 } from 'lucide-react';
import { APP_CONFIG } from '@/lib/constants/app';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16 pt-8 pb-10 text-center sm:text-left text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Layout: Mascot Card on Left + Details on Right (matching design) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {/* 1. Left Mascot Image Card */}
          <div className="shrink-0">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 p-2 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tutor-m1-mascot.png"
                  alt="Tutor M.1 Mascot Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 144px, 160px"
                />
              </div>
            </div>
          </div>

          {/* 2. Right Text & Badges Content */}
          <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Title */}
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Tutor M.1 — ติวครบ จบมั่นใจ สอบติด ม.1</span>
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            </h3>

            {/* Subtitle */}
            <p className="text-xs text-slate-500 font-medium max-w-xl leading-relaxed">
              สำหรับน้อง ป.6 เตรียมสอบเข้า ม.1 ห้องเรียนพิเศษ (Gifted, SMA, SMTE, EP, และห้องปกติ) โรงเรียนแข่งขันสูงทั่วประเทศ
            </p>

            {/* Badges Row */}
            <div className="flex items-center gap-2 sm:gap-3 text-xs flex-wrap justify-center sm:justify-start pt-1">
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> สื่อการเรียนรู้ฟรี 100%
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-rose-700 bg-rose-50 border border-rose-200/80 px-2.5 py-1 rounded-xl">
                พัฒนาด้วย <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> เพื่อเด็กไทยทุกคน
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-xl">
                <Code2 className="w-3.5 h-3.5 text-blue-600" /> ผู้พัฒนา: jairlinethai
              </span>
            </div>

            {/* Version Pill */}
            <div className="pt-1">
              <span className="inline-block text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200/80 px-3 py-1 rounded-full">
                {APP_CONFIG.versionLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
