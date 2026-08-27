'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { UserBadge } from '@/types/gamification';
import { getAllUserBadges } from '@/lib/gamification';
import {
  Award,
  X,
  Sparkles,
  Lock,
  CheckCircle2,
  Calculator,
  Atom,
  Languages,
  Flame,
  Crown,
  Clock,
  Zap,
  Shield,
  Footprints,
} from 'lucide-react';

interface AchievementBadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AchievementBadgesModal: React.FC<AchievementBadgesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const badges = getAllUserBadges();
  const unlockedCount = badges.filter((b) => b.isUnlocked).length;

  const renderBadgeIcon = (iconName: string, isUnlocked: boolean) => {
    const iconClass = `w-6 h-6 ${isUnlocked ? 'text-amber-500' : 'text-slate-400'}`;
    switch (iconName) {
      case 'footprints':
        return <Footprints className={iconClass} />;
      case 'calculator':
        return <Calculator className={iconClass} />;
      case 'atom':
        return <Atom className={iconClass} />;
      case 'languages':
        return <Languages className={iconClass} />;
      case 'flame':
        return <Flame className={`w-6 h-6 ${isUnlocked ? 'text-orange-500 fill-orange-500' : 'text-slate-400'}`} />;
      case 'crown':
        return <Crown className={`w-6 h-6 ${isUnlocked ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'clock':
        return <Clock className={iconClass} />;
      case 'zap':
        return <Zap className={iconClass} />;
      default:
        return <Award className={iconClass} />;
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 p-6 text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black">
                  หอเกียรติยศเหรียญรางวัล (Achievement Badges)
                </h2>
              </div>
              <p className="text-xs text-amber-100 mt-0.5">
                ปลดล็อกเหรียญรางวัลจากการฝึกฝนและพิชิตข้อสอบเข้า ม.1 ห้องเรียนพิเศษ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black border border-white/30">
              ปลดล็อกแล้ว {unlockedCount} / {badges.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Badges Grid */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map((badge) => {
              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between min-h-[140px] ${
                    badge.isUnlocked
                      ? 'bg-gradient-to-b from-amber-50/70 to-orange-50/40 border-amber-300 ring-1 ring-amber-400/30 shadow-xs'
                      : 'bg-slate-50 border-slate-200 opacity-75'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          badge.isUnlocked
                            ? 'bg-amber-100 border border-amber-300 shadow-xs'
                            : 'bg-slate-200 border border-slate-300'
                        }`}
                      >
                        {renderBadgeIcon(badge.iconName, badge.isUnlocked)}
                      </div>

                      {badge.isUnlocked ? (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>ปลดล็อกแล้ว</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center gap-1">
                          <Lock className="w-3 h-3 text-slate-500" />
                          <span>ยังล็อคอยู่</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{badge.name}</h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {badge.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar for Locked / Unlocked */}
                  <div className="pt-2 border-t border-slate-200/60 mt-2 space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                      <span>ความคืบหน้า</span>
                      <span className={badge.isUnlocked ? 'text-amber-700 font-extrabold' : ''}>
                        {badge.progressLabel}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          badge.isUnlocked ? 'bg-amber-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${badge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            💡 ทำข้อสอบจำลองและซ่อมจุดอ่อนในแต่ละวิชาเพื่อสะสมเหรียญรางวัลให้ครบ 12 เหรียญ
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
