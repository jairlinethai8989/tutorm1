'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { User, Sparkles, School, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { getUserProfileName, saveUserProfileName } from '@/lib/storage';

interface StudentNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, targetSchool?: string) => void;
  title?: string;
  subtitle?: string;
}

const TARGET_SCHOOL_OPTIONS = [
  'รร.เบ็ญจะมะมหาราช (SMA/Gifted)',
  'รร.วิทยาศาสตร์จุฬาภรณราชวิทยาลัย',
  'รร.สวนกุหลาบวิทยาลัย (Gate/ห้องพิเศษ)',
  'รร.สตรีวิทยา (ห้องพิเศษ)',
  'รร.สาธิต มศว. / สาธิตจุฬาฯ',
  'ห้องเรียนพิเศษทั่วไป (Gifted/EP/SMTE)',
];

export const StudentNameModal: React.FC<StudentNameModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'ระบุชื่อผู้เรียนก่อนเริ่มทำข้อสอบ',
  subtitle = 'เพื่อบันทึกประวัติและประเมินผลความพร้อมเฉพาะบุคคลในระบบ Dashboard',
}) => {
  const [name, setName] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedName = getUserProfileName();
    if (savedName && savedName !== 'ผู้เรียน') {
      setName(savedName);
    }
  }, [isOpen]);

  if (!isOpen || !mounted || typeof document === 'undefined') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = name.trim() || 'ผู้เรียน';
    saveUserProfileName(finalName);
    onConfirm(finalName, selectedSchool || undefined);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors shrink-0 cursor-pointer"
            aria-label="ปิด"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              ชื่อผู้เรียน (หรือชื่อเล่น):
            </label>
            <div className="relative">
              <input
                type="text"
                autoFocus
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="เช่น น้องภูมิ, น้องอันดา, ด.ช. ภูมิภัทร"
                className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium bg-slate-50/50"
                maxLength={35}
              />
            </div>
          </div>

          {/* Target School (Optional) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 flex items-center gap-1">
              <School className="w-3.5 h-3.5 text-indigo-600" />
              <span>โรงเรียนเป้าหมายที่ต้องการสอบเข้า (เลือกได้):</span>
            </label>
            <div className="grid grid-cols-1 gap-1.5 max-h-36 overflow-y-auto pr-1">
              {TARGET_SCHOOL_OPTIONS.map((sch) => (
                <button
                  type="button"
                  key={sch}
                  onClick={() => setSelectedSchool(selectedSchool === sch ? '' : sch)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                    selectedSchool === sch
                      ? 'bg-blue-50 border-blue-500 text-blue-700 ring-1 ring-blue-500/20'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {sch}
                </button>
              ))}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-center gap-2 text-[11px] text-blue-900">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>ข้อมูลสถิติจะถูกบันทึกแยกในอุปกรณ์นี้ ปลอดภัย ไม่ส่งออกนอกเครื่อง</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
          >
            <span>ยืนยัน & เริ่มทำข้อสอบทันที</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};
