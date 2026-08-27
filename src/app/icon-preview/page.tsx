'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export default function IconPreviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับหน้าหลัก</span>
          </Link>
          <div className="text-right">
            <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Tutor M.1 Icon Design Showcase
            </span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            🎨 เปรียบเทียบชุดไอคอน 3D Squircle (7 วิชา)
          </h1>
          <p className="text-sm text-slate-500 font-medium max-w-xl mx-auto">
            ออกแบบใหม่ตามธีม iPadOS นำป้ายตัวเลข 5 สีแดงออกจากสมุดจุดอ่อนเรียบร้อยแล้วครับ
          </p>
        </div>

        {/* Style 1: Claymorphic Soft 3D */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>แบบที่ 1: Claymorphic Soft 3D</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                เนื้อเนียนนุ่ม สไตล์ดินน้ำมัน 3D ละมุนตา (Soft Matte Clay)
              </h2>
              <p className="text-xs text-slate-500">
                โทนสีสดใสสบายตา ผิวสัมผัสแบบด้าน 3D ดูน่ารัก เป็นมิตร เหมาะสำหรับเด็กเตรียมสอบ ม.1
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-white">
            <Image
              src="/images/icon_style_1_clay.jpg"
              alt="แบบที่ 1: Claymorphic Soft 3D"
              fill
              className="object-contain"
              sizes="1000px"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Style 2: Glossy Glass & Vivid 3D */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-black mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>แบบที่ 2: Glossy Glass & Vivid 3D</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                ขอบกระจกเงาวาว มิติสีสันสดเข้ม นีออน (Glass Sheen)
              </h2>
              <p className="text-xs text-slate-500">
                มีมิติขอบสะท้อนแสงเงาวาว สีสันสดเข้มตัดกันชัดเจน ดูทันสมัยระดับพรีเมียม
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-white">
            <Image
              src="/images/icon_style_2_glossy.jpg"
              alt="แบบที่ 2: Glossy Glass & Vivid 3D"
              fill
              className="object-contain"
              sizes="1000px"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
