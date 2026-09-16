'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Coffee, Heart, X, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

export const SupportCoffeeWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const elementStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef<boolean>(false);

  // Initialize position on client mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem('tutor_m1_coffee_pos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          const clampedX = Math.min(Math.max(12, parsed.x), window.innerWidth - 65);
          const clampedY = Math.min(Math.max(60, parsed.y), window.innerHeight - 65);
          setPosition({ x: clampedX, y: clampedY });
          return;
        }
      }
    } catch {}

    // Default position: top right
    const initialX = Math.max(16, window.innerWidth - 72);
    const initialY = 100;
    setPosition({ x: initialX, y: initialY });
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // If clicking the dismiss button, don't initiate drag
    if ((e.target as HTMLElement).closest('[data-no-drag]')) return;
    if (!position) return;

    hasMovedRef.current = false;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    elementStartPos.current = { x: position.x, y: position.y };
    setIsDragging(true);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - dragStartPos.current.x;
      const deltaY = moveEvent.clientY - dragStartPos.current.y;

      if (Math.hypot(deltaX, deltaY) > 5) {
        hasMovedRef.current = true;
      }

      if (hasMovedRef.current) {
        const nextX = Math.min(Math.max(12, elementStartPos.current.x + deltaX), window.innerWidth - 65);
        const nextY = Math.min(Math.max(50, elementStartPos.current.y + deltaY), window.innerHeight - 65);
        setPosition({ x: nextX, y: nextY });
      }
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      setIsDragging(false);

      if (hasMovedRef.current) {
        setPosition((curr) => {
          if (curr) {
            try {
              localStorage.setItem('tutor_m1_coffee_pos', JSON.stringify(curr));
            } catch {}
          }
          return curr;
        });
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <>
      {/* Draggable Floating Button (Only SVG Icons, No Text) */}
      <div
        className="fixed z-40 touch-none select-none"
        style={{
          left: position ? `${position.x}px` : undefined,
          top: position ? `${position.y}px` : undefined,
          right: !position ? '16px' : undefined,
          bottom: !position ? 'auto' : undefined,
          opacity: position ? 1 : 0,
        }}
        onPointerDown={handlePointerDown}
      >
        {!isOpen && (
          <div className="relative group">
            <button
              type="button"
              className={`relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl sm:rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-xl shadow-orange-500/35 border-2 border-white/90 backdrop-blur-md transition-transform ${
                isDragging ? 'cursor-grabbing scale-110 shadow-2xl' : 'cursor-grab hover:scale-108 active:scale-95'
              }`}
              aria-label="ร่วมสนับสนุน & ให้กำลังใจผู้พัฒนา"
            >
              {/* Main Coffee SVG Icon */}
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center shadow-inner">
                <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>

              {/* Heart Badge SVG Overlay */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white border border-white flex items-center justify-center shadow-xs">
                <Heart className="w-2.5 h-2.5 text-white fill-white" />
              </div>
            </button>

            {/* Tooltip on hover */}
            <div className="absolute top-full right-0 mt-2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl z-50">
              ☕ ให้กำลังใจผู้พัฒนา
              <div className="absolute -top-1 right-4 w-2 h-2 bg-slate-900/95 rotate-45" />
            </div>

            {/* Mini 'X' Button on top-right corner to dismiss */}
            <button
              data-no-drag="true"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-900 hover:bg-rose-600 text-white border border-white flex items-center justify-center shadow-md hover:scale-115 transition-all cursor-pointer z-50"
              aria-label="ปิดปุ่มนี้"
              title="ซ่อนปุ่มนี้"
            >
              <X className="w-3 h-3 stroke-[3]" />
            </button>
          </div>
        )}
      </div>

      {/* Floating Modal Card with Large Scan-friendly QR Code */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 text-center relative my-auto max-h-[94vh] flex flex-col">
            {/* Header: Warm Gold & Sunset Rose */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-5 text-white relative shrink-0 shadow-md">
              {/* Prominent Modal Close Button (X) */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-rose-600 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg z-50 border border-slate-200"
                aria-label="ปิดหน้าต่าง"
                title="ปิดหน้าต่าง"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="w-13 h-13 rounded-3xl bg-white/25 backdrop-blur-md flex items-center justify-center mx-auto mb-2 border border-white/40 text-white shadow-inner">
                <Coffee className="w-7 h-7 text-white" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 text-amber-100 text-[11px] font-extrabold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>เพื่อการศึกษาฟรี 100% สำหรับเด็กไทย</span>
              </div>

              <h3 className="font-black text-lg sm:text-xl drop-shadow-xs pr-8">
                ร่วมสนับสนุน & ให้กำลังใจผู้พัฒนา ☕💖
              </h3>
              <p className="text-xs text-orange-100 mt-1 max-w-xs mx-auto font-medium">
                ทุกการสนับสนุนช่วยเป็นค่าเซิร์ฟเวอร์ และเป็นแรงผลักดันในการพัฒนาข้อสอบคุณภาพอย่างต่อเนื่องครับ
              </p>
            </div>

            {/* Scrollable Content & High-Res QR Code */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 bg-gradient-to-b from-amber-50/40 to-white">
              {/* High-Resolution Large QR Code Card */}
              <div className="p-3.5 bg-white rounded-2xl border-2 border-amber-200/80 shadow-md inline-block mx-auto max-w-[320px] w-full">
                <div className="relative w-full aspect-[712/1000] rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-white">
                  <Image
                    src="/images/promptpay-qr.jpg"
                    alt="PromptPay QR Code ให้กำลังใจผู้พัฒนา ยชญ์สุรา น่วมสกนธ์"
                    fill
                    className="object-contain"
                    sizes="320px"
                    priority
                    unoptimized
                  />
                </div>

                <div className="mt-3 text-center space-y-1">
                  <div className="text-xs font-black text-slate-900 flex items-center justify-center gap-1">
                    <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                    <span>ชื่อบัญชี: ยชญ์สุรา น่วมสกนธ์</span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 py-1 px-2 rounded-lg border border-emerald-200 inline-block">
                    พร้อมเพย์ PromptPay (สแกนได้ทุกแอปธนาคาร)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    รหัสอ้างอิง: 088988000019978
                  </div>
                </div>
              </div>

              {/* Action Buttons: Close Button */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-black text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-102"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ขอบคุณทุกกำลังใจ / ปิดหน้าต่าง</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
