'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Coffee, Heart, X, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export const SupportCoffeeWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  if (isDismissed) {
    return null;
  }

  return (
    <>
      {/* Floating Pill Trigger Button with mini 'X' close button on top-right (Image 3) */}
      <div className="fixed top-20 sm:top-24 right-3 sm:right-6 z-40">
        {!isOpen && (
          <div className="relative group">
            {/* Main Pill Button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 pl-3 pr-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-xs sm:text-sm shadow-xl shadow-orange-500/35 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-white/60 backdrop-blur-md"
              aria-label="ร่วมสนับสนุน & ให้กำลังใจผู้พัฒนา"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center shadow-inner">
                <Coffee className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <span className="tracking-tight drop-shadow-xs">☕ ให้กำลังใจผู้พัฒนา</span>
              <Heart className="w-3.5 h-3.5 text-rose-200 fill-rose-300" />
            </button>

            {/* Mini 'X' Button on top-right corner to dismiss floating pill (Image 3) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-slate-900 hover:bg-rose-600 text-white border-2 border-white flex items-center justify-center shadow-md hover:scale-115 transition-all cursor-pointer z-50 group/x"
              aria-label="ปิดปุ่มนี้"
              title="ซ่อนปุ่มนี้"
            >
              <X className="w-3.5 h-3.5 stroke-[3]" />
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
