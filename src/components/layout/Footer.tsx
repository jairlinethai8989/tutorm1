import React from 'react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { APP_CONFIG } from '@/lib/constants/app';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div className="flex items-center justify-center space-x-2 text-slate-700 font-semibold">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span>{APP_CONFIG.title} — ออกแบบตามแนวข้อสอบ มศว. & สสวท.</span>
        </div>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          {APP_CONFIG.description}
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-100 flex-wrap">
          <span className="font-extrabold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
            {APP_CONFIG.versionLabel}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> ฟรี 100% ไม่ต้องลงทะเบียน
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            พัฒนาด้วย <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> เพื่อเด็กไทยทุกคน
          </span>
        </div>
      </div>
    </footer>
  );
};
