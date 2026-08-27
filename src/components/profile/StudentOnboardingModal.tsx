'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import {
  StudentProfile,
  TARGET_SCHOOL_OPTIONS,
  STUDENT_AVATARS,
  AvatarItem,
} from '@/types/student';
import {
  getActiveStudentProfile,
  getAllStudentProfiles,
  saveStudentProfile,
  setActiveStudentProfileId,
  deleteStudentProfile,
  hasStudentProfile,
} from '@/lib/storage';
import {
  GraduationCap,
  Sparkles,
  UserPlus,
  Users,
  CheckCircle2,
  X,
  Trash2,
  ArrowRight,
  ShieldCheck,
  School,
  ChevronDown,
  ChevronUp,
  Edit3,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StudentOnboardingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  triggerButton?: boolean;
}

export const StudentOnboardingModal: React.FC<StudentOnboardingModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  triggerButton = false,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeProfile, setActiveProfile] = useState<StudentProfile | null>(null);
  const [allProfiles, setAllProfiles] = useState<StudentProfile[]>([]);
  
  // Form State
  const [name, setName] = useState<string>('');
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(TARGET_SCHOOL_OPTIONS[0].id);
  const [customSchoolName, setCustomSchoolName] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(STUDENT_AVATARS[0].src);
  const [grade, setGrade] = useState<string>('ป.6');
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);
  const [isAvatarDrawerOpen, setIsAvatarDrawerOpen] = useState<boolean>(false);
  const [avatarCategory, setAvatarCategory] = useState<'all' | 'boys' | 'girls' | 'animals' | 'explorers'>('all');

  const refreshProfiles = () => {
    const active = getActiveStudentProfile();
    const list = getAllStudentProfiles();
    setActiveProfile(active);
    setAllProfiles(list);

    if (active && !isAddingNew) {
      setName(active.name);
      setSelectedAvatar(active.avatar || STUDENT_AVATARS[0].src);
      setGrade(active.grade || 'ป.6');
      
      const matchSchool = TARGET_SCHOOL_OPTIONS.find(
        (s) => s.name === active.targetSchool || s.shortName === active.targetSchoolShort
      );
      if (matchSchool) {
        setSelectedSchoolId(matchSchool.id);
        setCustomSchoolName(active.customSchoolName || '');
      } else {
        setSelectedSchoolId('other');
        setCustomSchoolName(active.targetSchoolShort || active.targetSchool || '');
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    refreshProfiles();

    // Auto-popup on first visit if no profile exists yet
    if (!hasStudentProfile()) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }

    const handleProfileChange = () => {
      refreshProfiles();
    };

    window.addEventListener('tutor_m1_student_profile_changed', handleProfileChange);
    return () => {
      window.removeEventListener('tutor_m1_student_profile_changed', handleProfileChange);
    };
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
    refreshProfiles();
    setInternalIsOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    let targetSchool = '';
    let targetSchoolShort = '';

    if (selectedSchoolId === 'other') {
      const custom = customSchoolName.trim() || 'โรงเรียนทั่วไป';
      targetSchool = custom;
      targetSchoolShort = custom;
    } else {
      const schoolObj = TARGET_SCHOOL_OPTIONS.find((s) => s.id === selectedSchoolId) || TARGET_SCHOOL_OPTIONS[0];
      targetSchool = schoolObj.name;
      targetSchoolShort = schoolObj.shortName;
    }

    saveStudentProfile({
      name: name.trim(),
      targetSchool,
      targetSchoolShort,
      customSchoolName: selectedSchoolId === 'other' ? customSchoolName.trim() : undefined,
      avatar: selectedAvatar,
      grade,
    });

    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.6 },
    });

    setIsAddingNew(false);
    refreshProfiles();
    closeModal();
  };

  const handleSwitch = (profileId: string) => {
    setActiveStudentProfileId(profileId);
    refreshProfiles();
    closeModal();
  };

  const handleDelete = (profileId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('ต้องการลบโปรไฟล์ผู้เรียนนี้ออกจากเครื่องใช่หรือไม่?')) {
      deleteStudentProfile(profileId);
      refreshProfiles();
    }
  };

  const filteredAvatars = avatarCategory === 'all'
    ? STUDENT_AVATARS
    : STUDENT_AVATARS.filter((a) => a.category === avatarCategory);

  return (
    <>
      {triggerButton && (
        <div className="relative group">
          <button
            type="button"
            onClick={openModal}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-blue-50 border-2 border-blue-400/90 hover:border-blue-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-md hover:scale-105 cursor-pointer overflow-hidden p-0.5 relative group-hover:ring-2 group-hover:ring-blue-400/30"
            aria-label={activeProfile ? `โปรไฟล์: ${activeProfile.name}` : 'สร้างโปรไฟล์ผู้เรียน'}
          >
            {activeProfile ? (
              activeProfile.avatar?.startsWith('/avatars/') ? (
                <Image
                  src={activeProfile.avatar}
                  alt={activeProfile.name}
                  width={36}
                  height={36}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-base flex items-center justify-center h-full">
                  {activeProfile.avatar || '🎓'}
                </span>
              )
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              </div>
            )}
          </button>

          {/* Tooltip on hover */}
          <div className="absolute top-full right-0 mt-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl z-50 text-right">
            {activeProfile ? (
              <>
                <span className="block text-amber-200 text-xs">
                  {activeProfile.name}
                </span>
                <span className="text-[10px] text-slate-300 block font-medium">
                  {activeProfile.targetSchoolShort} ({activeProfile.grade})
                </span>
                <span className="block text-[9px] text-blue-300 font-normal mt-0.5">
                  คลิกเพื่อสลับ / จัดการโปรไฟล์ 👤
                </span>
              </>
            ) : (
              <span>✨ คลิกเพื่อกรอกชื่อ & สถาบันเป้าหมาย</span>
            )}
            <div className="absolute -top-1 right-3.5 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </div>
      )}

      {isModalOpen &&
        mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999999] overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col my-auto max-h-[92vh] overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 1. Header (Warm Gradient & Cute Greeting) */}
              <div className="shrink-0 p-4 sm:p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 overflow-hidden shadow-inner shrink-0 relative">
                    {selectedAvatar.startsWith('/avatars/') ? (
                      <Image
                        src={selectedAvatar}
                        alt="Avatar"
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <span className="text-2xl">{selectedAvatar}</span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black flex items-center gap-1.5">
                      <span>ยินดีต้อนรับสู่ Tutor M.1</span>
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </h2>
                    <p className="text-xs text-blue-100 font-medium mt-0.5">
                      ระบุชื่อผู้เรียน & สถาบันเป้าหมายเพื่อเริ่มบันทึกสถิติ
                    </p>
                  </div>
                </div>

                {hasStudentProfile() && (
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors shrink-0 cursor-pointer"
                    aria-label="ปิด"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* 2. Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-slate-700 text-xs sm:text-sm">
                {/* Form to Register / Edit Profile */}
                <form onSubmit={handleSave} className="space-y-4">
                  {/* Avatar Picker Drawer */}
                  <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <label className="font-extrabold text-slate-900 text-xs flex items-center gap-1.5">
                        <span>เลือกรูป Avatar ประจำตัว (มี 31 แบบ):</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsAvatarDrawerOpen(!isAvatarDrawerOpen)}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isAvatarDrawerOpen ? 'ย่อลิ้นชัก' : 'เปิดดูทั้งหมด 31 แบบ'}</span>
                        {isAvatarDrawerOpen ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Quick Preview Row (First 6 Avatars) */}
                    {!isAvatarDrawerOpen ? (
                      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-1">
                        {STUDENT_AVATARS.slice(0, 8).map((av) => (
                          <button
                            key={av.id}
                            type="button"
                            onClick={() => setSelectedAvatar(av.src)}
                            className={`w-11 h-11 rounded-2xl overflow-hidden relative transition-all shrink-0 cursor-pointer ${
                              selectedAvatar === av.src
                                ? 'border-2 border-blue-600 ring-2 ring-blue-400/30 scale-105 shadow-sm'
                                : 'border border-slate-200 hover:border-blue-300 opacity-85 hover:opacity-100'
                            }`}
                          >
                            <Image
                              src={av.src}
                              alt={av.title}
                              fill
                              className="object-cover"
                              sizes="44px"
                            />
                            {selectedAvatar === av.src && (
                              <div className="absolute inset-0 bg-blue-600/15 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-white" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    ) : (
                      /* Full Drawer Grid with Category Filter */
                      <div className="space-y-2.5 pt-1 animate-in fade-in duration-200">
                        {/* Category Tabs */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
                          {[
                            { id: 'all', label: 'ทั้งหมด (31)' },
                            { id: 'boys', label: '👦 นร.ชาย' },
                            { id: 'girls', label: '👧 นร.หญิง' },
                            { id: 'animals', label: '🐾 สัตว์น่ารัก' },
                            { id: 'explorers', label: '🔍 นักกิจกรรม' },
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              type="button"
                              onClick={() => setAvatarCategory(tab.id as any)}
                              className={`px-2.5 py-1 rounded-xl font-extrabold transition-all cursor-pointer ${
                                avatarCategory === tab.id
                                  ? 'bg-blue-600 text-white shadow-2xs'
                                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        {/* Avatars Grid */}
                        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-48 overflow-y-auto p-1 bg-white rounded-xl border border-slate-200 shadow-inner">
                          {filteredAvatars.map((av) => (
                            <button
                              key={av.id}
                              type="button"
                              onClick={() => setSelectedAvatar(av.src)}
                              title={av.title}
                              className={`aspect-square rounded-xl overflow-hidden relative transition-all cursor-pointer ${
                                selectedAvatar === av.src
                                  ? 'border-2 border-blue-600 ring-2 ring-blue-400/40 scale-105 shadow-xs'
                                  : 'border border-slate-200 hover:border-blue-300 opacity-85 hover:opacity-100'
                              }`}
                            >
                              <Image
                                src={av.src}
                                alt={av.title}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                              {selectedAvatar === av.src && (
                                <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600 fill-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Student Name */}
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-slate-900 text-xs flex items-center justify-between">
                      <span>ชื่อเล่น / ชื่อผู้เรียน:</span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        (บันทึกเฉพาะในอุปกรณ์เครื่องนี้)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="เช่น น้องภูมิ, น้องมะลิ, น้องอันดา"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                      maxLength={30}
                      required
                    />
                  </div>

                  {/* Target School */}
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-slate-900 text-xs flex items-center gap-1">
                      <School className="w-3.5 h-3.5 text-indigo-600" />
                      <span>เป้าหมายโรงเรียน / โครงการที่ต้องการสอบเข้า:</span>
                    </label>
                    <select
                      value={selectedSchoolId}
                      onChange={(e) => setSelectedSchoolId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-800 bg-slate-50/50 text-xs"
                    >
                      {TARGET_SCHOOL_OPTIONS.map((school) => (
                        <option key={school.id} value={school.id}>
                          {school.name}
                        </option>
                      ))}
                    </select>

                    {/* Custom School Input if 'other' is selected */}
                    {selectedSchoolId === 'other' && (
                      <div className="pt-1 animate-in fade-in duration-200">
                        <input
                          type="text"
                          value={customSchoolName}
                          onChange={(e) => setCustomSchoolName(e.target.value)}
                          placeholder="พิมพ์ชื่อโรงเรียนที่ต้องการ (เช่น รร.ขอนแก่นวิทยายน, รร.หาดใหญ่วิทยาลัย)"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 bg-blue-50/40 text-xs"
                          maxLength={50}
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* Level / Grade */}
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-slate-900 text-xs">
                      ระดับชั้นปัจจุบัน:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['ป.5', 'ป.6', 'เตรียมสอบ ม.1'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGrade(g)}
                          className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            grade === g
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>🎉 บันทึกโปรไฟล์ & เริ่มลุยข้อสอบ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Multi-Student Profile Switcher (สำหรับเครื่องที่ใช้ร่วมกัน เช่น พี่-น้อง) */}
                {allProfiles.length > 0 && (
                  <div className="pt-3 border-t border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                        <Users className="w-4 h-4 text-indigo-600" />
                        <span>สลับผู้เรียนในเครื่องนี้ ({allProfiles.length} คน):</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddingNew(true);
                          setName('');
                          setCustomSchoolName('');
                          setSelectedSchoolId(TARGET_SCHOOL_OPTIONS[0].id);
                        }}
                        className="text-[11px] font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>+ เพิ่มผู้เรียนใหม่</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {allProfiles.map((p) => {
                        const isActive = activeProfile?.id === p.id;
                        return (
                          <div
                            key={p.id}
                            onClick={() => handleSwitch(p.id)}
                            className={`p-2.5 sm:p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                              isActive
                                ? 'bg-blue-50/80 border-blue-300 ring-1 ring-blue-500/20'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-xl overflow-hidden relative border border-slate-200 bg-white shrink-0">
                                {p.avatar?.startsWith('/avatars/') ? (
                                  <Image
                                    src={p.avatar}
                                    alt={p.name}
                                    fill
                                    className="object-cover"
                                    sizes="36px"
                                  />
                                ) : (
                                  <span className="text-lg flex items-center justify-center h-full">
                                    {p.avatar || '🎓'}
                                  </span>
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-black text-slate-900 text-xs">
                                    {p.name}
                                  </span>
                                  {isActive && (
                                    <span className="text-[9px] font-black bg-blue-600 text-white px-1.5 py-0.2 rounded-md">
                                      กำลังใช้งาน
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-500 block">
                                  เป้าหมาย: {p.targetSchoolShort} ({p.grade})
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              {!isActive && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSwitch(p.id);
                                  }}
                                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold cursor-pointer"
                                >
                                  สลับ
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={(e) => handleDelete(p.id, e)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                                title="ลบผู้เรียนนี้"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Local Storage Privacy Note */}
                <div className="p-2.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-[11px] text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    ข้อมูลผู้เรียน สถิติ และเลเวลจะถูกจดจำเฉพาะในเบราว์เซอร์เครื่องนี้ ปลอดภัย 100%
                  </span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
