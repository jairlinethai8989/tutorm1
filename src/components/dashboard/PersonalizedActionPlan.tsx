'use client';

import React from 'react';
import Link from 'next/link';
import { ActionPlanItem } from '@/types/analytics';
import { Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface PersonalizedActionPlanProps {
  actionPlan?: ActionPlanItem[];
}

export const PersonalizedActionPlan: React.FC<PersonalizedActionPlanProps> = ({ actionPlan = [] }) => {
  if (actionPlan.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-indigo-900/50">
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-indigo-900/60">
        <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>AI Personalized Action Plan</span>
        </div>
        <span className="text-xs bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 px-3 py-1 rounded-full font-bold">
          แผนติวแนะนำเฉพาะบุคคล 3 ขั้นตอน
        </span>
      </div>

      <div className="space-y-4">
        {actionPlan.map((item) => {
          return (
            <div
              key={item.step}
              className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all space-y-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>
                    {item.priority === 'high' && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-extrabold flex items-center gap-1">
                        <Zap className="w-3 h-3" /> สำคัญเร่งด่วน
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <Link
                href={item.actionUrl}
                className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-xs shadow-md transition-all hover:scale-105"
              >
                <span>{item.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
