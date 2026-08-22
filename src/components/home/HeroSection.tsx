'use client';

import React from 'react';
import Link from 'next/link';
import { Target, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 text-white p-6 sm:p-10 shadow-xl shadow-blue-500/10 mb-10">
      {/* Background Decorative Rings */}
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Heading & Badges */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-100 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>แนวข้อสอบคณาจารย์ มศว. & สสวท. เจาะลึกคิดวิเคราะห์</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            พิชิตสอบเข้า ม.1 <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
              รร.เบ็ญจะมะมหาราช & จุฬาภรณ์มุกดาหาร
            </span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            ระบบฝึกทำข้อสอบทั้งแบบ <strong>ปรนัย 4 ตัวเลือก</strong> และ <strong>อัตนัยเติมคำตอบ/แสดงวิธีทำ</strong> พร้อมระบบเฉลยละเอียดแบบ Step-by-Step มีภาพประกอบชัดเจน และระบบวิเคราะห์จุดอ่อนรายบุคคล
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 pt-2 text-xs text-blue-100 font-medium">
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> ห้อง SMA / Gifted / ปกติ
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> รอบคัดเลือก & รอบสอง จภ.
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> จำลองสอบจับเวลาจริง
            </span>
          </div>
        </div>

        {/* Right Column: Call to Action Cards */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Link
            href="/mock-exam"
            className="group flex items-center justify-between p-4 rounded-2xl bg-white text-slate-900 font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-600 font-semibold uppercase">Mock Exam</div>
                <div className="text-base text-slate-900">เริ่มสอบจำลองเสมือนจริง</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/dashboard"
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs text-amber-300 font-semibold uppercase">Analytics</div>
                <div className="text-base">ตรวจเช็คจุดอ่อนที่ต้องซ่อม</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};
