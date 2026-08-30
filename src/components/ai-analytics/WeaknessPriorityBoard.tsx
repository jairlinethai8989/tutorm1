'use client';

import React from 'react';
import { SubTopicDiagnostic } from '@/types/analytics';
import {
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowRight,
  Sparkles,
  Flame,
  Award,
} from 'lucide-react';

interface WeaknessPriorityBoardProps {
  rankedWeaknesses: SubTopicDiagnostic[];
  rankedStrengths: SubTopicDiagnostic[];
  totalQuestionsAnalyzed: number;
  onStartRemedialQuiz: (topicId: string, topicName: string) => void;
}

const SUBJECT_NAMES: Record<string, { name: string; bg: string; text: string }> = {
  math: { name: 'คณิตศาสตร์', bg: 'bg-blue-100', text: 'text-blue-700' },
  science: { name: 'วิทยาศาสตร์', bg: 'bg-emerald-100', text: 'text-emerald-700' },
  english: { name: 'ภาษาอังกฤษ', bg: 'bg-purple-100', text: 'text-purple-700' },
  thai: { name: 'ภาษาไทย', bg: 'bg-amber-100', text: 'text-amber-700' },
  social: { name: 'สังคมศึกษา', bg: 'bg-rose-100', text: 'text-rose-700' },
};

export const WeaknessPriorityBoard: React.FC<WeaknessPriorityBoardProps> = ({
  rankedWeaknesses,
  rankedStrengths,
  totalQuestionsAnalyzed,
  onStartRemedialQuiz,
}) => {
  const topWeaknesses = rankedWeaknesses.slice(0, 5);
  const topStrengths = rankedStrengths.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* 1. Critical Weaknesses Section */}
      <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-2 border-b border-rose-100 pb-3">
          <div className="flex items-center gap-2 text-rose-600 font-black text-base">
            <AlertTriangle className="w-5 h-5" />
            <span>5 อันดับจุดอ่อนวิกฤต (Priority Weaknesses)</span>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
            {topWeaknesses.length > 0 ? `พบ ${topWeaknesses.length} บทที่ต้องเร่งซ่อม` : 'สถานะปลอดภัย'}
          </span>
        </div>

        {topWeaknesses.length > 0 ? (
          <div className="space-y-3">
            {topWeaknesses.map((topic, idx) => {
              const subjInfo = SUBJECT_NAMES[topic.subjectId] || {
                name: 'ทั่วไป',
                bg: 'bg-slate-100',
                text: 'text-slate-700',
              };

              return (
                <div
                  key={topic.topicId}
                  className="p-4 rounded-2xl bg-gradient-to-r from-rose-50/70 to-amber-50/40 border border-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                      #{idx + 1}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${subjInfo.bg} ${subjInfo.text}`}>
                          {subjInfo.name}
                        </span>
                        <h4 className="text-sm font-extrabold text-slate-900 truncate">
                          {topic.topicName}
                        </h4>
                      </div>

                      <p className="text-xs text-rose-700 font-semibold mt-0.5">
                        ความแม่นยำเพียง <strong>{topic.accuracyPercent}%</strong> (ทำถูก {topic.totalCorrect}/{topic.totalAttempted} ข้อ)
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartRemedialQuiz(topic.topicId, topic.topicName)}
                    className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black shadow-md shadow-rose-500/20 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer shrink-0"
                  >
                    <Zap className="w-4 h-4" />
                    <span>เริ่มชุดฝึกซ่อม 10 ข้อทันที</span>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-extrabold text-emerald-900">
              {totalQuestionsAnalyzed === 0
                ? 'ยังไม่มีประวัติการทำข้อสอบ'
                : 'ยอดเยี่ยมมาก! ไม่พบบทที่ต่ำกว่าเกณฑ์ 70%'}
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              {totalQuestionsAnalyzed === 0
                ? 'เริ่มทำแบบทดสอบหรือสอบจำลอง เพื่อให้ระบบ AI ช่วยวิเคราะห์จุดอ่อนเฉพาะบุคคล'
                : 'สมรรถนะของน้องอยู่ในระดับ Safe Zone สำหรับทุกหมวดวิชา หมั่นฝึกซ้อมรักษาความแม่นยำต่อเนื่อง!'}
            </p>
          </div>
        )}
      </div>

      {/* 2. Top Mastered Strengths Section */}
      <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-2 border-b border-emerald-100 pb-3">
          <div className="flex items-center gap-2 text-emerald-700 font-black text-base">
            <Award className="w-5 h-5" />
            <span>จุดแข็งที่ทำได้ดีเยี่ยม (Mastered Strengths)</span>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            คะแนน ≥ 70%
          </span>
        </div>

        {topStrengths.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topStrengths.map((topic, idx) => {
              const subjInfo = SUBJECT_NAMES[topic.subjectId] || {
                name: 'ทั่วไป',
                bg: 'bg-slate-100',
                text: 'text-slate-700',
              };

              return (
                <div
                  key={topic.topicId}
                  className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-slate-900 truncate">
                        {topic.topicName}
                      </p>
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${subjInfo.bg} ${subjInfo.text}`}>
                        {subjInfo.name}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-black text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-lg shrink-0">
                    {topic.accuracyPercent}%
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-center text-xs text-slate-500">
            {totalQuestionsAnalyzed === 0
              ? 'เริ่มทำแบบทดสอบเพื่อสะสมจุดแข็งในแต่ละบทย่อย'
              : 'ทำข้อสอบให้ได้คะแนน ≥ 70% เพื่อปลดล็อกจุดแข็ง'}
          </div>
        )}
      </div>
    </div>
  );
};
