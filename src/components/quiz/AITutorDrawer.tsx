'use client';

import React, { useState } from 'react';
import { Question } from '@/types/exam';
import { generateAITutorAssistance, AITutorAssistance } from '@/lib/aiTutor';
import { MathText } from '@/components/shared/MathText';
import { CuteAIBotIcon } from '@/components/shared/CuteAIBotIcon';
import { addExp } from '@/lib/gamification';
import {
  Lightbulb,
  Sparkles,
  Zap,
  MessageCircle,
  X,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AITutorDrawerProps {
  question: Question;
  questionNumber?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const AITutorDrawer: React.FC<AITutorDrawerProps> = ({
  question,
  questionNumber,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'hint' | 'tricks' | 'kidExplanation'>('hint');
  const [hasUnlockedHint, setHasUnlockedHint] = useState<boolean>(false);

  React.useEffect(() => {
    setHasUnlockedHint(false);
    setActiveTab('hint');
  }, [question?.id]);

  if (!isOpen || !question) return null;

  const assistance: AITutorAssistance = generateAITutorAssistance(question);

  const handleUnlockHint = () => {
    setHasUnlockedHint(true);
    const res = addExp(10);
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-[999999] overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Header with Cute AI Tutor Robot Mascot */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white flex items-center justify-between shrink-0 relative shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner shrink-0 relative p-1">
              <CuteAIBotIcon size={40} animated={true} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base sm:text-lg drop-shadow-xs">
                  ครูผู้ช่วย AI ประจำข้อ
                </h3>
                <span className="text-[10px] font-extrabold bg-yellow-400 text-slate-950 px-2 py-0.5 rounded-full shadow-2xs">
                  AI Smart Tutor
                </span>
              </div>
              <p className="text-xs text-indigo-100 font-medium">
                {questionNumber !== undefined ? `ข้อที่ ${questionNumber}` : 'คำแนะนำและสูตรลัด'} • ไม่สปอยล์คำตอบ ให้น้องฝึกคิดเอง
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="ปิด"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2. Key Concepts Tags */}
        <div className="px-4 sm:px-5 py-2.5 bg-indigo-50/70 border-b border-indigo-100 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="font-extrabold text-indigo-900 shrink-0 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>หัวข้อที่เกี่ยวข้อง:</span>
          </span>
          {assistance.keyConcepts.map((concept, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-lg bg-white border border-indigo-200 text-indigo-700 font-bold shrink-0 shadow-2xs"
            >
              {concept}
            </span>
          ))}
        </div>

        {/* 3. Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('hint')}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'hint'
                ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>1. ขอคำใบ้</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tricks')}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'tricks'
                ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-yellow-500" />
            <span>2. สูตรลัด & เทคนิค</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('kidExplanation')}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'kidExplanation'
                ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>3. ภาษา ป.6</span>
          </button>
        </div>

        {/* 4. Scrollable Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-slate-800 text-xs sm:text-sm leading-relaxed">
          {/* Tab 1: Smart Hint */}
          {activeTab === 'hint' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 space-y-2.5">
                <div className="flex items-center gap-2 font-black text-amber-900 text-xs sm:text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span>คำใบ้จุดสังเกต (Step-by-Step Hint):</span>
                </div>
                <div className="font-semibold text-slate-800">
                  <MathText text={assistance.hint} />
                </div>
              </div>

              {!hasUnlockedHint ? (
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-600" />
                    <span className="text-[11px] font-bold text-indigo-900">
                      อ่านคำใบ้แล้วลองคิดต่อ รับทันที <strong>+10 EXP</strong>!
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleUnlockHint}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-xs transition-all cursor-pointer hover:scale-105 shrink-0"
                  >
                    💡 เก็ทแล้ว (+10 EXP)
                  </button>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ยอดเยี่ยมมาก! ได้รับ +10 EXP แล้ว ลองนำคำใบ้ไปหาคำตอบดูนะครับ 🚀</span>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Formula & Tricks */}
          {activeTab === 'tricks' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>สูตรลัดและหลักการสำคัญประจำเรื่อง:</span>
              </div>

              <div className="space-y-2.5">
                {assistance.formulaAndTricks.map((formula, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:bg-indigo-50/40 hover:border-indigo-200 transition-all font-medium text-slate-800"
                  >
                    <MathText text={formula} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Kid-Friendly Explanation */}
          {activeTab === 'kidExplanation' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                <span>ย่อยแนวคิดให้เข้าใจง่าย (สไตล์เด็ก ป.6):</span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-950 font-medium whitespace-pre-line leading-relaxed">
                <MathText text={assistance.kidExplanation} />
              </div>
            </div>
          )}
        </div>

        {/* 5. Footer CTA */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <span className="text-[11px] text-slate-500 font-medium">
            💡 คิดคำตอบได้แล้ว ปิดหน้าต่างแล้วเลือกช้อยส์ได้เลย
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-sm transition-all cursor-pointer"
          >
            ลุยตอบข้อสอบต่อ ➔
          </button>
        </div>
      </div>
    </div>
  );
};
