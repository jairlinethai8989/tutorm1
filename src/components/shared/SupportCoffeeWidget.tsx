'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Coffee, Heart, X, Sparkles, CheckCircle2, QrCode, ThumbsUp } from 'lucide-react';

export const SupportCoffeeWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Floating Pill Trigger Button (Top-Right Corner) */}
      <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 px-3.5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-xs shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/40 backdrop-blur-md"
            aria-label="ให้กำลังใจผู้พัฒนา สนับสนุนค่ากาแฟ"
          >
            <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
              <Coffee className="w-3.5 h-3.5 text-white animate-bounce" />
            </div>
            <span>ให้กำลังใจผู้พัฒนา</span>
            <Heart className="w-3.5 h-3.5 text-rose-200 fill-rose-200" />
          </button>
        )}
      </div>

      {/* Floating Modal Card with Large Scan-friendly QR Code */}
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 text-center relative my-auto max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-4 sm:p-5 text-white relative shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="ปิดหน้าต่าง"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-2 border border-white/30 text-white shadow-inner">
                <Coffee className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-black text-base sm:text-lg drop-shadow-xs">
                ร่วมให้กำลังใจ & สนับสนุนผู้พัฒนา ☕💖
              </h3>
              <p className="text-xs text-orange-100 mt-0.5">
                ระบบ Tutor M.1 เปิดให้ใช้งานฟรี 100% เพื่อเด็กไทยทุกคน
              </p>
            </div>

            {/* Scrollable Content & High-Res Large QR Code */}
            <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto flex-1">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                หากเห็นว่าระบบนี้มีประโยชน์ สามารถสนับสนุนค่ากาแฟและค่าเซิร์ฟเวอร์ เพื่อเป็นกำลังใจให้ทีมงานพัฒนาข้อสอบและฟีเจอร์ใหม่ ๆ ต่อเนื่องครับ
              </p>

              {/* High-Resolution Large QR Code Card */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner inline-block mx-auto max-w-[340px] w-full">
                <div className="relative w-full aspect-[712/1000] rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-white">
                  <Image
                    src="/images/promptpay-qr.jpg"
                    alt="PromptPay QR Code ให้กำลังใจผู้พัฒนา ยชญ์สุรา น่วมสกนธ์"
                    fill
                    className="object-contain"
                    sizes="340px"
                    priority
                    unoptimized
                  />
                </div>

                <div className="mt-2.5 text-center space-y-0.5">
                  <div className="text-xs font-black text-slate-900">
                    ชื่อบัญชี: ยชญ์สุรา น่วมสกนธ์
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700">
                    พร้อมเพย์ PromptPay (สแกนได้จากทุกแอปธนาคาร)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    รหัสอ้างอิง: 088988000019978
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all cursor-pointer"
                >
                  ขอบคุณมากครับ / ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
