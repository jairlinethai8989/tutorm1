'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
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
  Wrench,
  CheckCheck,
  Cpu,
  History,
  Coffee,
  Heart,
} from 'lucide-react';
import { APP_CONFIG, APP_CHANGELOG } from '@/lib/constants/app';
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
  const [activeTab, setActiveTab] = useState<'whatsNew' | 'guide' | 'support'>('whatsNew');
  const [userName, setUserName] = useState<string>('ผู้เรียน');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
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

  const openModal = (tab: 'whatsNew' | 'guide' | 'support' = 'whatsNew') => {
    setActiveTab(tab);
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
        <div className="relative group">
          <button
            type="button"
            onClick={() => openModal('whatsNew')}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full bg-amber-50 hover:bg-amber-100/90 border border-amber-200/90 text-amber-900 transition-all shadow-2xs hover:shadow-md hover:scale-102 cursor-pointer relative font-bold text-xs"
            aria-label="คำแนะนำ & มีอะไรใหม่"
          >
            <div className="relative flex items-center justify-center">
              <Bell className="w-4 h-4 text-amber-600 group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
            </div>
            <span className="text-amber-900 font-extrabold text-[11px] whitespace-nowrap">
              คำแนะนำ
            </span>
          </button>
          {/* Tooltip on hover */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-xl bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl z-50">
            คำแนะนำ & มีอะไรใหม่ ({APP_CONFIG.version})
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </div>
      )}

      {isModalOpen &&
        mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
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
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-base sm:text-lg font-bold">ศูนย์ข้อมูล & คู่มือผู้เรียน</h2>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white/20 text-blue-100">
                        {APP_CONFIG.version}
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/90">
                      มีอะไรใหม่ในเวอร์ชันนี้, คู่มือการใช้งาน และการจัดการข้อมูลผู้เรียน
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                  aria-label="ปิดหน้าต่าง"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="shrink-0 px-4 sm:px-6 pt-3 pb-2 bg-slate-100/80 border-b border-slate-200 flex gap-2 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('whatsNew')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeTab === 'whatsNew'
                      ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>มีอะไรใหม่ ({APP_CONFIG.version})</span>
                  <span className="px-1.5 py-0.2 text-[9px] bg-rose-500 text-white rounded-full font-bold">NEW</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('guide')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeTab === 'guide'
                      ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>คู่มือการใช้งาน & ผู้เรียน</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('support')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeTab === 'support'
                      ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-xs'
                      : 'text-amber-800 hover:text-amber-900 hover:bg-amber-100/60 bg-amber-50/70 border border-amber-200/60'
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>สนับสนุนผู้พัฒนา (Donate) 💖</span>
                </button>
              </div>

              {/* 2. Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-slate-700 text-xs sm:text-sm">
                {activeTab === 'whatsNew' ? (
                  <div className="space-y-4">
                    {APP_CHANGELOG.map((log) => (
                      <div
                        key={log.version}
                        className={`rounded-2xl border p-4 sm:p-5 space-y-3.5 transition-all ${
                          log.isLatest
                            ? 'bg-gradient-to-b from-blue-50/70 to-indigo-50/40 border-blue-200 ring-1 ring-blue-500/20'
                            : 'bg-slate-50/70 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap border-b border-slate-200/60 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-sm sm:text-base text-slate-900">
                              {log.version}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                log.isLatest
                                  ? 'bg-blue-600 text-white shadow-2xs'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {log.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {log.date}
                          </span>
                        </div>

                        <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                          {log.title}
                        </h4>

                        <div className="grid grid-cols-1 gap-2.5">
                          {log.changes.map((change, idx) => {
                            let icon = <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />;
                            let tagBg = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                            let tagText = 'Feature';

                            if (change.type === 'fix') {
                              icon = <Wrench className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />;
                              tagBg = 'bg-rose-50 text-rose-700 border-rose-200';
                              tagText = 'Bug Fix';
                            } else if (change.type === 'verify') {
                              icon = <CheckCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />;
                              tagBg = 'bg-indigo-50 text-indigo-700 border-indigo-200';
                              tagText = 'Verification';
                            } else if (change.type === 'system') {
                              icon = <Cpu className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />;
                              tagBg = 'bg-purple-50 text-purple-700 border-purple-200';
                              tagText = 'Quality / CI';
                            }

                            return (
                              <div
                                key={idx}
                                className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1 shadow-2xs"
                              >
                                <div className="flex items-center gap-2">
                                  {icon}
                                  <span className="font-bold text-xs text-slate-900">
                                    {change.title}
                                  </span>
                                  <span
                                    className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded border ml-auto uppercase ${tagBg}`}
                                  >
                                    {tagText}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                                  {change.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : activeTab === 'guide' ? (
                  <>
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
                          className="px-2.5 py-1 bg-rose-600 text-white rounded-lg text-[11px] font-bold cursor-pointer"
                        >
                          ยืนยันล้าง
                        </button>
                        <button
                          onClick={() => setShowResetConfirm(false)}
                          className="px-2 py-1 bg-slate-200 text-slate-700 rounded-lg text-[11px] cursor-pointer"
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
                        สุ่มตัวเลขและโจทย์ใหม่ 33 รูปแบบ ฝึกคิดคำนวณซ้ำไม่จำกัดชุด
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
                  </>
                ) : (
                  /* TAB 3: Support / Buy Me a Coffee */
                  <div className="space-y-5 text-center py-2">
                    <div className="max-w-md mx-auto space-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-500 text-white flex items-center justify-center mx-auto shadow-md shadow-orange-500/20">
                        <Coffee className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        ร่วมสนับสนุนค่ากาแฟ & เซิร์ฟเวอร์ ☕💖
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        แอปพลิเคชัน <strong>Tutor M.1</strong> ถูกพัฒนาขึ้นด้วยความตั้งใจให้เด็กไทยทุกคนได้ฝึกทำข้อสอบคุณภาพสูง <strong>ฟรี 100% โดยไม่มีค่าใช้จ่ายและไม่มีโฆษณาคั่น</strong>
                      </p>
                    </div>

                    {/* QR Code Card */}
                    <div className="p-3.5 bg-slate-50 rounded-3xl border border-slate-200 inline-block shadow-inner mx-auto max-w-[320px] w-full">
                      <div className="relative w-full aspect-[712/1000] rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white">
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
                      <div className="mt-3 space-y-0.5">
                        <div className="text-xs font-black text-slate-800">
                          ชื่อบัญชี: ยชญ์สุรา น่วมสกนธ์
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-700">
                          พร้อมเพย์ PromptPay (สแกนได้จากทุกแอปธนาคาร)
                        </div>
                        <div className="text-[10px] text-slate-400 pt-1">
                          รหัสอ้างอิง: 088988000019978
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3.5 text-xs text-amber-900/90 max-w-md mx-auto text-left leading-relaxed">
                      💡 <strong>เงินสนับสนุนทั้งหมดจะนำไปใช้สำหรับ:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-amber-800">
                        <li>ค่าเช่าและบำรุงรักษา Cloud Server สำหรับระบบ</li>
                        <li>ค่ากาแฟและพลังงานในการพัฒนาคลังข้อสอบและฟังก์ชันใหม่ ๆ ต่อเนื่อง</li>
                      </ul>
                    </div>

                    <p className="text-xs font-extrabold text-orange-600">
                      กราบขอบพระคุณทุกท่านที่ร่วมเป็นส่วนหนึ่งในการสนับสนุนการศึกษาของเด็กไทยครับ 🙏✨
                    </p>
                  </div>
                )}
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
          </div>,
          document.body
        )}
    </>
  );
};
