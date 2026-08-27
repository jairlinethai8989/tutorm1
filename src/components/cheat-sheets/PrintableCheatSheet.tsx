'use client';

import React from 'react';
import { FormulaItem } from '@/types/cheatSheet';
import { MathText } from '@/components/shared/MathText';
import { Printer, X } from 'lucide-react';

interface PrintableCheatSheetProps {
  items: FormulaItem[];
  title?: string;
  onClose: () => void;
}

export const PrintableCheatSheet: React.FC<PrintableCheatSheetProps> = ({
  items,
  title = 'ชีทสรุปสูตร & หัวใจสำคัญ สอบเข้า ม.1',
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[999999] bg-white overflow-y-auto p-4 sm:p-8 print:p-0">
      {/* Non-printable action bar */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden border-b pb-4">
        <div>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="text-xs text-slate-500">พร้อมสั่งพิมพ์หรือบันทึกเป็น PDF ({items.length} รายการ)</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md cursor-pointer transition-all hover:scale-105"
          >
            <Printer className="w-4 h-4" />
            <span>สั่งพิมพ์ / เซฟ PDF</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
            <span>ปิด</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet Document */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center border-b-2 border-slate-900 pb-4">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            📚 สรุปสูตร & หัวใจสำคัญ พิชิตข้อสอบเข้า ม.1
          </h1>
          <p className="text-xs text-slate-600 mt-1 font-medium">
            Tutor M.1 — รวมสูตรลัดและเทคนิคสำคัญ 5 วิชาหลัก (ทบทวนก่อนสอบ)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-300 bg-white space-y-1.5 break-inside-avoid"
            >
              <div className="flex items-center justify-between gap-2 border-b pb-1">
                <span className="text-xs font-black text-slate-900">
                  {idx + 1}. {item.title}
                </span>
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                  {item.subCategory}
                </span>
              </div>

              {item.formula && (
                <div className="p-2 rounded bg-slate-50 border border-slate-200 text-xs font-bold text-center">
                  <MathText content={item.formula} />
                </div>
              )}

              <p className="text-[11px] text-slate-700 leading-snug">
                {item.description}
              </p>

              {item.fastTrick && (
                <div className="text-[11px] font-bold text-amber-900 bg-amber-50 p-1.5 rounded border border-amber-200">
                  <MathText content={item.fastTrick} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center text-[10px] text-slate-400 pt-6 border-t print:pt-4">
          สร้างโดย Tutor M.1 • ขอให้น้อง ๆ โชคดีในการสอบเข้า ม.1 ทุกคน! ✨
        </div>
      </div>
    </div>
  );
};
