'use client';

import React, { useState } from 'react';
import { SubjectDiagnosticResult, SubTopicDiagnostic } from '@/types/analytics';
import {
  Calculator,
  Atom,
  Languages,
  BookMarked,
  Compass,
  ChevronDown,
  ChevronUp,
  Zap,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
} from 'lucide-react';

interface SubTopicDrilldownProps {
  subjects: SubjectDiagnosticResult[];
  selectedSubjectId?: string | null;
  onSelectSubject?: (subjectId: string) => void;
  onStartRemedialQuiz: (topicId: string, topicName: string) => void;
}

const SUBJECT_ICONS: Record<string, React.ReactNode> = {
  math: <Calculator className="w-5 h-5" />,
  science: <Atom className="w-5 h-5" />,
  english: <Languages className="w-5 h-5" />,
  thai: <BookMarked className="w-5 h-5" />,
  social: <Compass className="w-5 h-5" />,
};

export const SubTopicDrilldown: React.FC<SubTopicDrilldownProps> = ({
  subjects,
  selectedSubjectId,
  onSelectSubject,
  onStartRemedialQuiz,
}) => {
  // State ควบคุมการเปิดปิด Accordion รายวิชา (default เปิดทุกวิชา หรือเปิดวิชาที่เลือก)
  const [openSubjects, setOpenSubjects] = useState<Record<string, boolean>>({
    math: true,
    science: true,
    english: true,
    thai: true,
    social: true,
  });

  const toggleSubject = (subjectId: string) => {
    setOpenSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }));
    if (onSelectSubject) {
      onSelectSubject(subjectId);
    }
  };

  const getStatusBadge = (status: SubTopicDiagnostic['status'], accuracy: number, total: number) => {
    if (total === 0 || status === 'no_data') {
      return (
        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
          ยังไม่ได้ฝึก
        </span>
      );
    }
    if (accuracy >= 80) {
      return (
        <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>ยอดเยี่ยม ({accuracy}%)</span>
        </span>
      );
    }
    if (accuracy >= 65) {
      return (
        <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
          ระดับดี ({accuracy}%)
        </span>
      );
    }
    if (accuracy >= 50) {
      return (
        <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-amber-600" />
          <span>ควรทบทวน ({accuracy}%)</span>
        </span>
      );
    }
    return (
      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 flex items-center gap-1 animate-pulse">
        <AlertCircle className="w-3 h-3 text-rose-600" />
        <span>จุดอ่อนวิกฤต ({accuracy}%)</span>
      </span>
    );
  };

  const getProgressBarColor = (accuracy: number, total: number) => {
    if (total === 0) return 'bg-slate-200';
    if (accuracy >= 80) return 'bg-gradient-to-r from-emerald-500 to-teal-500';
    if (accuracy >= 65) return 'bg-gradient-to-r from-blue-500 to-indigo-500';
    if (accuracy >= 50) return 'bg-gradient-to-r from-amber-500 to-yellow-500';
    return 'bg-gradient-to-r from-rose-500 to-red-500';
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>เจาะลึกสมรรถนะ 16 บทย่อย (Sub-topic Diagnostic)</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            คลิกที่แต่ละวิชาเพื่อดูรายละเอียดบทย่อย และกดปุ่ม &quot;ฝึกซ่อม&quot; เพื่อทำข้อสอบตรงจุดทันที
          </p>
        </div>
      </div>

      {/* Subject Accordions */}
      <div className="space-y-4">
        {subjects.map((subj) => {
          const isOpen = openSubjects[subj.subjectId] ?? true;
          const isSelected = selectedSubjectId === subj.subjectId;

          return (
            <div
              key={subj.subjectId}
              id={`subject-card-${subj.subjectId}`}
              className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                isSelected
                  ? 'border-indigo-400 shadow-md ring-2 ring-indigo-400/20'
                  : 'border-slate-200/90 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleSubject(subj.subjectId)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: subj.color }}
                  >
                    {SUBJECT_ICONS[subj.subjectId] || <Calculator className="w-5 h-5" />}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-extrabold text-slate-900 truncate">
                        {subj.subjectName}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400">
                        ({subj.subjectNameEn})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-0.5 flex-wrap">
                      <span>ทำแล้ว {subj.totalAttempted} ข้อ (ถูก {subj.totalCorrect} ข้อ)</span>
                      <span>•</span>
                      <span>ความแม่นยำรวม <strong style={{ color: subj.color }}>{subj.overallAccuracy}%</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden sm:block text-right">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      subj.overallAccuracy >= 75
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : subj.overallAccuracy >= 60
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : subj.totalAttempted === 0
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {subj.totalAttempted === 0 ? 'ยังไม่มีข้อมูล' : `${subj.overallAccuracy}% ความพร้อม`}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Sub-Topics List */}
              {isOpen && (
                <div className="px-4 pb-5 pt-1 border-t border-slate-100 space-y-2.5">
                  {subj.subTopics.map((topic, tIdx) => {
                    const isWeak = topic.totalAttempted > 0 && topic.accuracyPercent < 70;

                    return (
                      <div
                        key={topic.topicId}
                        className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                          isWeak
                            ? 'bg-rose-50/40 border-rose-200/80 hover:bg-rose-50/70'
                            : topic.totalAttempted === 0
                            ? 'bg-slate-50/60 border-slate-200/60'
                            : 'bg-white border-slate-200/80 hover:bg-slate-50/50'
                        }`}
                      >
                        {/* Left: Topic Info & Progress Bar */}
                        <div className="space-y-2 flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-md bg-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                                {tIdx + 1}
                              </span>
                              <span className="text-sm font-bold text-slate-900 truncate">
                                {topic.topicName}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {getStatusBadge(topic.status, topic.accuracyPercent, topic.totalAttempted)}
                            </div>
                          </div>

                          {/* Progress Bar Container */}
                          <div className="space-y-1">
                            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden relative">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${getProgressBarColor(
                                  topic.accuracyPercent,
                                  topic.totalAttempted
                                )}`}
                                style={{
                                  width: `${topic.totalAttempted > 0 ? Math.max(5, topic.accuracyPercent) : 0}%`,
                                }}
                              />
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                              <span>
                                ทำแล้ว {topic.totalAttempted} ข้อ (ถูก {topic.totalCorrect} / ผิด {topic.totalAttempted - topic.totalCorrect})
                              </span>
                              <div className="flex items-center gap-2">
                                {topic.trend === 'improving' && (
                                  <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                                    <TrendingUp className="w-3 h-3" /> ดีขึ้น
                                  </span>
                                )}
                                {topic.trend === 'declining' && (
                                  <span className="text-rose-600 font-bold flex items-center gap-0.5">
                                    <TrendingDown className="w-3 h-3" /> ลดลง
                                  </span>
                                )}
                                <span className="font-bold text-slate-700">
                                  {topic.totalAttempted > 0 ? `${topic.accuracyPercent}%` : '-'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Quick Action Remedial Button */}
                        <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 justify-end">
                          <button
                            type="button"
                            onClick={() => onStartRemedialQuiz(topic.topicId, topic.topicName)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs hover:scale-105 ${
                              isWeak
                                ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20'
                                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'
                            }`}
                          >
                            <Zap className="w-3.5 h-3.5" />
                            <span>{isWeak ? '⚡ ซ่อมจุดอ่อน 10 ข้อ' : '🎯 ฝึกโจทย์ 10 ข้อ'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
