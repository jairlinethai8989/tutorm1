'use client';

import React, { useState, useEffect } from 'react';
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
  User,
  RotateCcw,
  Info,
} from 'lucide-react';
import { APP_CONFIG } from '@/lib/constants/app';
import {
  getUserProfileName,
  saveUserProfileName,
  clearAllUserData,
} from '@/lib/storage';

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
  const [userName, setUserName] = useState<string>('ผู้เรียน');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  useEffect(() => {
    setUserName(getUserProfileName());
  }, []);

  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const closeModal = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const openModal = () => {
    setUserName(getUserProfileName());
    setInternalIsOpen(true);
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserProfileName(userName);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleResetData = () => {
    clearAllUserData();
    setShowResetConfirm(false);
    alert('ล้างข้อมูลสถิติและประวัติการทำข้อสอบในเครื่องนี้เรียบร้อยแล้ว');
    window.location.reload();
  };

  return (
    <>
      {triggerButton && (
        <button
          onClick={openModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-amber-800 text-xs font-bold transition-all shadow-2xs group cursor-pointer"
          title="คำแนะนำ & ข้อควรทราบในการใช้งานโปรแกรม"
        >
          <Bell className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
          <span>คำแนะนำการใช้งาน</span>
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping ml-0.5" />
        </button>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col my-auto max-h-[85vh] sm:max-h-[88vh] overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Header (Fixed & Pinned) */}
            <div className="shrink-0 p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                  <Bell className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base sm:text-lg font-bold">คำแนะนำ & ข้อควรทราบในการใช้งาน</h2>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white/20 text-blue-100">
                      {APP_CONFIG.version}
                    </span>
                  </div>
                  <p className="text-xs text-blue-100/90">
                    คู่มือการใช้งาน, ความถูกต้องของข้อมูล และการจัดการข้อมูลผู้เรียน
                  </p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition-colors shrink-0 ml-2"
                aria-label="ปิดหน้าต่าง"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 2. Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-slate-700 text-xs sm:text-sm">
              
              {/* Profile & Device Isolation Box */}
              <div className="rounded-2xl p-4 bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>ข้อมูลผู้เรียนประจำเครื่องนี้ (Device Storage)</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> ข้อมูลแยกแต่ละเครื่อง 100%
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  ระบบบันทึกคะแนนและสถิติการทำข้อสอบลงในเบราว์เซอร์ของอุปกรณ์นี้โดยอัตโนมัติ ไม่ปะปนกับผู้ใช้อื่น หากต้องการเปลี่ยนชื่อผู้เรียน หรือล้างสถิติเพื่อให้น้องคนใหม่เริ่มทำ ให้จัดการที่นี่:
                </p>

                <form onSubmit={handleSaveName} className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="ระบุชื่อผู้เรียน (เช่น น้องภูมิ, น้องอันดา)"
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium"
                    maxLength={30}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    {isSaved ? '✓ บันทึกแล้ว' : 'บันทึกชื่อ'}
                  </button>
                </form>

                {/* Reset Data Button */}
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">ต้องการล้างประวัติการทำข้อสอบทั้งหมดในเครื่องนี้?</span>
                  {!showResetConfirm ? (
                    <button
                      type="button"
                      onClick={() => setShowResetConfirm(true)}
                      className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> ล้างข้อมูลเครื่องนี้
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-rose-600 font-bold text-[11px]">ยืนยันลบข้อมูลทั้งหมด?</span>
                      <button
                        onClick={handleResetData}
                        className="px-2.5 py-1 bg-rose-600 text-white rounded-lg text-[11px] font-bold"
                      >
                        ยืนยันล้าง
                      </button>
                      <button
                        onClick={() => setShowResetConfirm(false)}
                        className="px-2 py-1 bg-slate-200 text-slate-700 rounded-lg text-[11px]"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* 3 Core Modes Overview */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
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
                      คลังข้อสอบจริง 500+ ข้อ พร้อมระบบเฉลยละเอียดภาษาไทย Step-by-Step และสูตรลัด
                    </p>
                  </div>

                  <div className="bg-violet-50/60 border border-violet-200/60 p-3.5 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-violet-700 font-bold text-xs">
                      <Clock className="w-4 h-4" />
                      <span>2. จำลองสอบจริง</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      จับเวลาจริง มีกระดาษคำตอบดิจิทัล และเกณฑ์ผ่านของโรงเรียนดัง
                    </p>
                  </div>

                  <div className="bg-purple-50/60 border border-purple-200/60 p-3.5 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-purple-700 font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>3. AI Practice</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      สุ่มตัวเลขและโจทย์ใหม่ 33 รูปแบบ ฝึกคิดคำนวณซ้ำไม่จำกัดชุด 0 บาท
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Accuracy & Exam Source Disclaimer */}
              <div className="rounded-2xl p-4 bg-blue-50/80 border border-blue-200 space-y-2.5">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>คำเตือนและคำชี้แจงความถูกต้องทางวิชาการ (Academic Accuracy & Disclaimers)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-blue-950/85 leading-relaxed pl-5 list-disc">
                  <li>
                    <strong>แหล่งที่มาและแนวข้อสอบ:</strong> คลังข้อสอบ 5 วิชาหลักและแบบทดสอบจำลองสอบจริง รวบรวม เรียบเรียง และเทียบเคียงจากแนวข้อสอบคัดเลือกเข้า ม.1 ห้องเรียนพิเศษ (Gifted, SMA, SMTE, EP) ของ รร.เบ็ญจะมะมหาราช (แนว มศว.ประสานมิตร) และกลุ่มโรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย
                  </li>
                  <li>
                    <strong>ความถูกต้องของเฉลย:</strong> เฉลยละเอียดและสูตรคิดลัดทุกข้อ จัดทำและตรวจทานตามมาตรฐานหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน (สพฐ.) กระทรวงศึกษาธิการ
                  </li>
                  <li>
                    <strong>วิชาภาษาอังกฤษ:</strong> ทุกข้อแปลโจทย์ เนื้อเรื่อง บทสนทนา และอธิบายโครงสร้างไวยากรณ์พร้อมตัวเลือกเป็นภาษาไทยอย่างละเอียด เพื่อให้นักเรียนเข้าใจได้ง่ายที่สุด
                  </li>
                  <li>
                    <strong>ข้อจำกัดและคำแนะนำ:</strong> จัดทำขึ้นเพื่อเป็นสื่อการเรียนรู้และการเตรียมสอบส่วนบุคคล หากพบข้อสงสัยหรือการตีความโจทย์เฉพาะด้าน สามารถศึกษาและตรวจสอบเทียบเคียงกับตำราเรียนมาตรฐานของ สพฐ. และ สสวท.
                  </li>
                </ul>
              </div>

              {/* Warning Notice about AI Practice */}
              <div className="rounded-2xl p-4 bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>ข้อควรทราบเกี่ยวกับระบบสุ่มโจทย์ AI Practice (Dynamic Template Engine)</span>
                </div>
                <div className="text-xs text-amber-900/90 leading-relaxed pl-5 space-y-1">
                  <p>
                    • <strong>วัตถุประสงค์:</strong> โจทย์ในหมวด AI Practice (33 รูปแบบ) สุ่มตัวเลขและเงื่อนไขแบบไดนามิกด้วยอัลกอริทึม เพื่อให้นักเรียนฝึกคิดคำนวณซ้ำไม่จำกัดชุดโดยไม่มีค่าใช้จ่าย API
                  </p>
                  <p>
                    • <strong>ความแม่นยำ:</strong> ผลเฉลยและตัวเลือกคำนวณผ่านสูตรคณิตศาสตร์และฟิสิกส์ 100% ตัวเลขและสถานการณ์เป็นโจทย์จำลองเพื่อฝึกทักษะ ไม่ใช่ข้อสอบจริงจากโรงเรียนโดยตรง
                  </p>
                </div>
              </div>

              {/* Tips for Best Results */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
                  เทคนิคการฝึกฝนให้ได้คะแนนสูงสุด:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>อ่านเฉลยละเอียดและ Trick & Tip:</strong> เมื่อตอบผิด ให้อ่านคำอธิบายทุกครั้งเพื่อเข้าใจแนวคิดที่ถูกต้อง</span>
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

              {/* Privacy & Zero-cost Footer Note */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> ข้อมูลบันทึกในเครื่องปลอดภัย 100% (ไม่ส่งข้อมูลออกนอกเครื่อง)
                </span>
                <span>{APP_CONFIG.versionLabel}</span>
              </div>
            </div>

            {/* 3. Footer (Fixed & Pinned) */}
            <div className="shrink-0 p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 hidden sm:inline">
                พร้อมที่จะพิชิตข้อสอบเข้า ม.1 แล้วหรือยัง?
              </span>
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
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
