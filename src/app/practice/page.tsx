import React from 'react';
import Link from 'next/link';
import { ALL_TEMPLATES } from '@/lib/template-engine';
import { SUBJECTS } from '@/lib/constants/subjects';
import { PracticeMode } from '@/components/practice/PracticeMode';
import { PracticeHubTracker } from '@/components/practice/PracticeHubTracker';
import { ExamStrategicGuide } from '@/components/guide/ExamStrategicGuide';
import { Sparkles, ArrowLeft, Layers, ArrowRight, Dna } from 'lucide-react';

export default function PracticeHubPage() {
  const mathTemplates = ALL_TEMPLATES.filter((t) => t.subjectId === 'math');
  const sciTemplates = ALL_TEMPLATES.filter((t) => t.subjectId === 'science');

  return (
    <div className="space-y-8 pb-16">
      <PracticeHubTracker />
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>กลับหน้าหลัก</span>
      </Link>

      {/* Hero Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-800 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Dynamic Question Generator (33 Templates)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            ฝึกทำโจทย์ไม่จำกัด (สุ่มอัตโนมัติ)
          </h1>

          <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
            ระบบสุ่มโจทย์และตัวเลขแบบไดนามิก ครอบคลุมคณิตศาสตร์และฟิสิกส์คำนวณ ฝึกแก้โจทย์ปัญหาเดิมด้วยตัวเลขใหม่ไม่ซ้ำ เพื่อความแม่นยำ 100%
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs font-semibold">
            <div className="bg-black/20 px-3 py-1.5 rounded-lg">
              คณิตศาสตร์ {mathTemplates.length} รูปแบบ
            </div>
            <div className="bg-black/20 px-3 py-1.5 rounded-lg">
              วิทยาศาสตร์คำนวณ {sciTemplates.length} รูปแบบ
            </div>
          </div>
        </div>
      </div>

      {/* Quick Launch Full Random Practice */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                เริ่มฝึกซ้อมแบบสุ่มรวมทุกหมวด
              </h2>
              <p className="text-xs text-slate-500">
                สุ่มข้อสอบจากคลัง Template ทั้ง 33 แบบผสมกัน
              </p>
            </div>
          </div>
        </div>

        <PracticeMode title="สุ่มโจทย์รวมทุกหมวด (Infinite Random Pool)" />
      </div>

      {/* In-depth Strategic Exam Guide for 5 Subjects */}
      <ExamStrategicGuide initialTab="roadmap" />
    </div>
  );
}
