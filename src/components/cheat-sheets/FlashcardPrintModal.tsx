'use client';

import React, { useState } from 'react';
import { FormulaItem } from '@/types/cheatSheet';
import { MathText } from '@/components/shared/MathText';
import { FormulaDiagram } from './FormulaDiagram';
import { Printer, X, Scissors, Layers, FileText, Sparkles, Check } from 'lucide-react';

interface FlashcardPrintModalProps {
  items: FormulaItem[];
  singleItem?: FormulaItem | null;
  onClose: () => void;
}

export const FlashcardPrintModal: React.FC<FlashcardPrintModalProps> = ({
  items,
  singleItem,
  onClose,
}) => {
  const [printMode, setPrintMode] = useState<'single' | 'deck'>(singleItem ? 'single' : 'deck');
  const [selectedSingleId, setSelectedSingleId] = useState<string>(singleItem ? singleItem.id : (items[0]?.id || ''));

  const activeSingleItem = singleItem || items.find((i) => i.id === selectedSingleId) || items[0];

  const handlePrint = () => {
    window.print();
  };

  const getSubjectInfo = (cat: string) => {
    switch (cat) {
      case 'math':
        return { name: 'คณิตศาสตร์', badge: 'bg-blue-600 text-white', formulaBox: 'bg-blue-50/80 border-blue-200 text-blue-950', dot: 'bg-blue-600' };
      case 'science':
        return { name: 'วิทยาศาสตร์', badge: 'bg-emerald-600 text-white', formulaBox: 'bg-emerald-50/80 border-emerald-200 text-emerald-950', dot: 'bg-emerald-600' };
      case 'english':
        return { name: 'ภาษาอังกฤษ', badge: 'bg-violet-600 text-white', formulaBox: 'bg-violet-50/80 border-violet-200 text-violet-950', dot: 'bg-violet-600' };
      case 'thai':
        return { name: 'ภาษาไทย', badge: 'bg-amber-600 text-white', formulaBox: 'bg-amber-50/80 border-amber-200 text-amber-950', dot: 'bg-amber-600' };
      case 'social':
        return { name: 'สังคมศึกษา', badge: 'bg-rose-600 text-white', formulaBox: 'bg-rose-50/80 border-rose-200 text-rose-950', dot: 'bg-rose-600' };
      default:
        return { name: 'ทบทวน ม.1', badge: 'bg-slate-700 text-white', formulaBox: 'bg-slate-50 border-slate-200 text-slate-900', dot: 'bg-slate-600' };
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-md overflow-y-auto p-2 sm:p-4 md:p-6 print:p-0 print:bg-white print:static print:overflow-visible">
      {/* Dynamic Print CSS to isolate ONLY this print container and print instantly in 0.1s */}
      <style jsx global>{`
        @media print {
          /* Hide all main app content outside the flashcard print container */
          body > * {
            visibility: hidden !important;
          }
          header, footer, nav, aside, .no-print, [data-no-print="true"] {
            display: none !important;
          }
          #flashcard-print-container,
          #flashcard-print-container * {
            visibility: visible !important;
          }
          #flashcard-print-container {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            display: block !important;
          }
          @page {
            size: A4 portrait;
            margin: 8mm;
          }
        }
      `}</style>

      {/* 1. Interactive Toolbar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-4 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 print:hidden flex flex-col sm:flex-row items-center justify-between gap-3 sticky top-2 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
            <Printer className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-prompt font-extrabold text-base text-slate-900">
              🖨️ พิมพ์การ์ดสรุปสูตร Flashcard
            </h3>
            <p className="font-sarabun text-xs text-slate-500">
              {printMode === 'single'
                ? `พิมพ์การ์ดใบเดียว: ${activeSingleItem?.title} (1 แผ่น)`
                : `พิมพ์ชุดการ์ด 4 ใบ/แผ่น A4 (ทั้งหมด ${items.length} การ์ด)`}
            </p>
          </div>
        </div>

        {/* Mode Selector & Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-end w-full sm:w-auto">
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold font-prompt">
            <button
              type="button"
              onClick={() => setPrintMode('single')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                printMode === 'single'
                  ? 'bg-white text-blue-600 shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>การ์ดใบเดียว (3"x5")</span>
            </button>
            <button
              type="button"
              onClick={() => setPrintMode('deck')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                printMode === 'deck'
                  ? 'bg-white text-blue-600 shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>พิมพ์ทั้งชุด ({items.length} ใบ)</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-prompt font-black text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>สั่งพิมพ์เลย (Ctrl + P)</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selector dropdown if in single mode and not locked to 1 item */}
      {printMode === 'single' && !singleItem && (
        <div className="max-w-4xl mx-auto mb-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-md border border-slate-200 print:hidden flex items-center justify-between gap-3">
          <span className="font-prompt text-xs font-bold text-slate-700">
            เลือกการ์ดที่ต้องการพิมพ์:
          </span>
          <select
            value={selectedSingleId}
            onChange={(e) => setSelectedSingleId(e.target.value)}
            className="flex-1 max-w-md p-2 rounded-xl border border-slate-300 text-xs font-prompt font-semibold text-slate-800 bg-white"
          >
            {items.map((i) => (
              <option key={i.id} value={i.id}>
                [{i.subCategory}] {i.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 2. Print Container (What actually gets printed) */}
      <div
        id="flashcard-print-container"
        className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 print:shadow-none print:border-none print:p-0 print:max-w-none print:w-full"
      >
        {/* ================= MODE 1: SINGLE FLASHCARD (3x5 Inch Size) ================= */}
        {printMode === 'single' && activeSingleItem && (() => {
          const sInfo = getSubjectInfo(activeSingleItem.category);
          return (
            <div className="flex flex-col items-center justify-center py-6 print:py-4 print:h-[95vh] print:justify-start">
              {/* Single Card Container - Scaled like 3" x 5" Index Card */}
              <div className="w-full max-w-[480px] min-h-[300px] border-2 border-dashed border-slate-400 rounded-3xl p-5 bg-white relative shadow-lg print:shadow-none print:border-2 print:border-dashed print:border-slate-500 print:m-auto print:max-w-[460px]">
                {/* Scissor Cut Mark */}
                <div className="absolute -top-3 left-6 bg-white px-2 text-[10px] text-slate-500 font-bold font-prompt flex items-center gap-1 print:text-slate-700">
                  <Scissors className="w-3 h-3 text-slate-600" />
                  <span>ตัดตามรอยประ (ขนาดการ์ดพกพา 3" x 5")</span>
                </div>

                {/* Card Header */}
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-6 h-6 rounded-lg ${sInfo.dot} text-white flex items-center justify-center font-black text-[10px]`}>
                      M.1
                    </div>
                    <div>
                      <span className="font-prompt font-extrabold text-xs text-slate-800">
                        Tutor M.1 Flashcard
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className={`text-[10px] font-extrabold font-prompt px-2.5 py-0.5 rounded-full ${sInfo.badge}`}>
                      {sInfo.name}
                    </span>
                    <span className="text-[10px] font-bold font-prompt bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {activeSingleItem.subCategory}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-prompt font-black text-base text-slate-900 mb-2 leading-tight">
                  {activeSingleItem.title}
                </h3>

                {/* Hero Formula Box */}
                {activeSingleItem.formula && (
                  <div className={`my-2.5 p-3 rounded-2xl ${sInfo.formulaBox} border-2 font-bold text-center text-sm shadow-2xs overflow-visible`}>
                    <MathText content={activeSingleItem.formula} plainBlock={true} blockClassName="text-sm sm:text-base font-bold" />
                  </div>
                )}

                {/* Visual Diagram */}
                <FormulaDiagram item={activeSingleItem} />

                {/* Description */}
                <div className="font-sarabun text-xs text-slate-700 leading-relaxed mb-2.5">
                  <MathText content={activeSingleItem.description} inline={true} />
                </div>

                {/* Example */}
                {activeSingleItem.example && (
                  <div className="mb-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sarabun text-slate-700 leading-relaxed">
                    <span className="font-bold font-prompt text-slate-900">ตัวอย่าง: </span>
                    <MathText content={activeSingleItem.example} inline={true} />
                  </div>
                )}

                {/* Fast Trick / Memory Aid */}
                {activeSingleItem.fastTrick && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/90 text-xs font-sarabun font-bold text-amber-900 leading-relaxed">
                    <MathText content={activeSingleItem.fastTrick} inline={true} />
                  </div>
                )}

                {/* Card Footer */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-prompt text-slate-400">
                  <span>📚 ติวเข้มเข้า ม.1 • tutorm1.online</span>
                  <span>ID: {activeSingleItem.id}</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ================= MODE 2: DECK (4 FLASHCARDS PER A4 PAGE) ================= */}
        {printMode === 'deck' && (
          <div className="space-y-6">
            <div className="text-center border-b-2 border-slate-900 pb-3 mb-4 print:mb-2 print:pb-2">
              <h2 className="font-prompt font-black text-xl text-slate-900">
                📚 การ์ดสรุปสูตร & หัวใจสำคัญ (Flashcard Deck)
              </h2>
              <p className="font-sarabun text-xs text-slate-600 mt-0.5">
                Tutor M.1 — ตัดตามรอยประเป็นแผ่นพกพาท่องจำ ({items.length} การ์ด • 4 ใบต่อ 1 แผ่น A4)
              </p>
            </div>

            {/* 2x2 Grid per page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
              {items.map((item, idx) => {
                const sInfo = getSubjectInfo(item.category);
                return (
                  <div
                    key={item.id}
                    className="border-2 border-dashed border-slate-400 rounded-3xl p-4 bg-white relative flex flex-col justify-between break-inside-avoid print:p-3.5 print:rounded-2xl"
                  >
                    {/* Scissor Marker */}
                    <div className="absolute -top-2.5 right-4 bg-white px-1.5 text-[8px] text-slate-400 font-prompt flex items-center gap-0.5">
                      <Scissors className="w-2.5 h-2.5" />
                      <span>ตัดตามรอยประ</span>
                    </div>

                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
                        <div className="flex items-center gap-1">
                          <span className={`w-4 h-4 rounded ${sInfo.dot} text-white flex items-center justify-center font-black text-[8px]`}>
                            {idx + 1}
                          </span>
                          <span className="font-prompt font-extrabold text-[11px] text-slate-800">
                            {sInfo.name}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold font-prompt bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded">
                          {item.subCategory}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-prompt font-extrabold text-sm text-slate-900 mb-1.5 leading-snug">
                        {item.title}
                      </h4>

                      {/* Formula */}
                      {item.formula && (
                        <div className={`my-1.5 p-2 rounded-xl ${sInfo.formulaBox} border font-bold text-center text-xs overflow-visible`}>
                          <MathText content={item.formula} plainBlock={true} blockClassName="text-xs sm:text-sm font-bold" />
                        </div>
                      )}

                      {/* Visual Diagram */}
                      <FormulaDiagram item={item} />

                      {/* Description */}
                      <div className="font-sarabun text-[11px] text-slate-700 leading-snug mb-1.5">
                        <MathText content={item.description} inline={true} />
                      </div>

                      {/* Example */}
                      {item.example && (
                        <div className="mb-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-sarabun text-slate-600 leading-tight">
                          <span className="font-bold font-prompt text-slate-800">ตัวอย่าง: </span>
                          <MathText content={item.example} inline={true} />
                        </div>
                      )}

                      {/* Fast Trick */}
                      {item.fastTrick && (
                        <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200/90 text-[10px] font-sarabun font-bold text-amber-900 leading-tight">
                          <MathText content={item.fastTrick} inline={true} />
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between text-[8px] font-prompt text-slate-400">
                      <span>Tutor M.1 Flashcard</span>
                      <span>tutorm1.online</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center text-[10px] font-prompt text-slate-400 pt-4 border-t print:pt-2">
              สร้างโดย Tutor M.1 • ดาวน์โหลดและฝึกทำข้อสอบฟรีที่ tutorm1.online ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
