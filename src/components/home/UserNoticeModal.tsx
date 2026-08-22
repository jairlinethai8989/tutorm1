'use client';

import React, { useState } from 'react';
import {
  Bell,
  X,
  BookOpen,
  Clock,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';
import { APP_CONFIG } from '@/lib/constants/app';

interface UserNoticeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  triggerButton?: boolean;
}

export const UserNoticeModal: React.FC<UserNoticeModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  triggerButton = true,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false);

  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const closeModal = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const openModal = () => {
    setInternalIsOpen(true);
  };

  return (
    <>
      {triggerButton && (
        <button
          onClick={openModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-amber-800 text-xs font-bold transition-all shadow-2xs group"
          title="คำแนะนำ & ข้อควรทราบในการใช้งานโปรแกรม"
        >
          <Bell className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
          <span>คำแนะนำการใช้งาน</span>
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping ml-0.5" />
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Bell className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold">คำแนะนำ & ข้อควรทราบในการใช้งาน</h2>
                    <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-white/20 text-blue-100">
                      {APP_CONFIG.version}
                    </span>
                  </div>
                  <p className="text-xs text-blue-100">
                    คู่มือสรุปฟีเจอร์และการเตรียมตัวสอบให้ได้คะแนนสูงสุด
                  </p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-5 overflow-y-auto max-h-[calc(90vh-140px)] text-slate-700 text-sm">
              {/* Feature 1: 3 Core Modes */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>3 โหมดหลักในการฝึกฝน</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-blue-50/60 border border-blue-200/60 p-3.5 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs">
                      <BookOpen className="w-4 h-4" />
                      <span>1. ฝึก 5 วิชาหลัก</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      คลังข้อสอบจริง 500+ ข้อ พร้อมระบบเฉลย Step-by-Step และเทคนิคคิดลัด
                    </p>
                  </div>

                  <div className="bg-violet-50/60 border border-violet-200/60 p-3.5 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-violet-700 font-bold text-xs">
                      <Clock className="w-4 h-4" />
                      <span>2. จำลองสอบจริง</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      จับเวลาจริง มีกระดาัสคำตอบ และเกณฑ์ผ่านของแต่ละโรงเรียนดัง
                    </p>
                  </div>

                  <div className="bg-purple-50/60 border border-purple-200/60 p-3.5 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-purple-700 font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>3. AI Practice</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      สุ่มตัวเลขและโจทย์ใหม่ 33 รูปแบบ ฝึกคิดคำนวณซ้ำไม่จำกัด 0 บาท
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Accuracy & Exam Source Disclaimer */}
              <div className="rounded-2xl p-4 bg-blue-50/80 border border-blue-200 space-y-2.5">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>คำชี้แจงความถูกต้องทางวิชาการและแนวข้อสอบ (Academic Accuracy)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-blue-950/80 leading-relaxed pl-6 list-disc">
                  <li>
                    <strong>แหล่งที่มาของข้อสอบ:</strong> ข้อสอบในหมวด 5 วิชาหลักและ Mock Exam รวบรวมและเทียบเคียงจากแนวข้อสอบคัดเลือกเข้า ม.1 ห้องเรียนพิเศษ (Gifted, SMA, SMTE, EP) ของ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร) และกลุ่มโรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย
                  </li>
                  <li>
                    <strong>ความถูกต้องของเฉลย:</strong> เฉลยละเอียด Step-by-Step ทุกข้อ จัดทำและตรวจสอบตามมาตรฐานหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน (สพฐ.) กระทรวงศึกษาธิการ
                  </li>
                  <li>
                    <strong>ข้อสอบภาษาอังกฤษ:</strong> ทุกข้ออธิบายโครงสร้างไวยากรณ์ แปลเนื้อเรื่องและคำศัพท์ตัวเลือกเป็นภาษาไทยอย่างละเอียด เพื่อให้นักเรียนเข้าใจและจำไปใช้ได้จริง
                  </li>
                </ul>
              </div>

              {/* Warning Notice about AI Practice */}
              <div className="rounded-2xl p-4 bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>ข้อควรทราบเกี่ยวกับระบบสุ่มโจทย์ AI Practice (Dynamic Template Engine)</span>
                </div>
                <div className="text-xs text-amber-900/90 leading-relaxed pl-6 space-y-1">
                  <p>
                    • <strong>วัตถุประสงค์:</strong> โจทย์ในหมวด AI Practice (33 รูปแบบ) ถูกสร้างขึ้นด้วยอัลกอริทึมสุ่มตัวเลขแบบไดนามิก เพื่อให้นักเรียนฝึกคิดคำนวณซ้ำไม่จำกัดชุดโดยไม่มีค่าใช้จ่าย
                  </p>
                  <p>
                    • <strong>ความแม่นยำ:</strong> ผลเฉลยและตัวเลือกคำนวณผ่านสูตรคณิตศาสตร์และฟิสิกส์ 100% ทั้งนี้ตัวเลขและสถานการณ์เป็นโจทย์จำลองเพื่อฝึกทักษะ ไม่ใช่ข้อสอบจริงจากโรงเรียนโดยตรง
                  </p>
                </div>
              </div>

              {/* Tips for Best Results */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
                  เทคนิคการเรียนให้ได้ผลลัพธ์สูงสุด:
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>ดูเฉลยละเอียดและ Trick & Tip:</strong> เมื่อตอบผิด ให้อ่านคำอธิบายทุกครั้งเพื่อเข้าใจแนวคิดที่ถูกต้อง</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>ฝึกปั๊ม Streak:</strong> ฝึกอย่างน้อยวันละ 10-15 ข้อ เพื่อรักษาความสม่ำเสมอและความพร้อมสอบ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>ตรวจสอบจุดอ่อนในแดชบอร์ด:</strong> ระบบจะคำนวณบทเรียนที่นักเรียนตอบผิดบ่อยเพื่อให้กลับมาฝึกซ้ำ</span>
                  </li>
                </ul>
              </div>

              {/* Privacy & Zero-cost */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> ข้อมูลบันทึกในเครื่องปลอดภัย 100% (ไม่มีการส่งข้อมูลออกภายนอก)
                </span>
                <span>{APP_CONFIG.versionLabel}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                เข้าใจแล้ว เริ่มฝึกเลย
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
