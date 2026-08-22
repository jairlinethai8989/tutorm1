'use client';

import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'trapezoid':
    case 'math-geo-001':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-blue-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 200" className="w-full max-w-sm h-auto">
            <defs>
              <linearGradient id="trapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Polygon Trapezoid */}
            <polygon points="90,40 230,40 310,160 30,160" fill="url(#trapGrad)" stroke="#2563EB" strokeWidth="3" />
            
            {/* Height Line */}
            <line x1="90" y1="40" x2="90" y2="160" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
            <rect x="90" y="145" width="15" height="15" fill="none" stroke="#EF4444" strokeWidth="1.5" />
            <text x="50" y="105" fill="#DC2626" fontSize="13" fontWeight="bold">h = 6 ซม.</text>

            {/* Vertices Labels */}
            <text x="80" y="30" fill="#1E293B" fontSize="14" fontWeight="bold">A</text>
            <text x="235" y="30" fill="#1E293B" fontSize="14" fontWeight="bold">D</text>
            <text x="15" y="170" fill="#1E293B" fontSize="14" fontWeight="bold">B</text>
            <text x="320" y="170" fill="#1E293B" fontSize="14" fontWeight="bold">C</text>

            {/* Dimension Labels */}
            <text x="145" y="30" fill="#1D4ED8" fontSize="13" fontWeight="bold">8 ซม.</text>
            <text x="150" y="185" fill="#1D4ED8" fontSize="13" fontWeight="bold">14 ซม.</text>

            {/* Parallel arrows */}
            <path d="M 155 35 L 165 40 L 155 45" fill="none" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M 165 155 L 175 160 L 165 165" fill="none" stroke="#1D4ED8" strokeWidth="2" />
          </svg>
          <span className="text-xs text-slate-500 mt-2">รูปที่ 1: รูปสี่เหลี่ยมคางหมู ABCD ด้าน AD // BC</span>
        </div>
      );

    case 'circle-in-square':
    case 'math-geo-002':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-blue-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 240 240" className="w-full max-w-xs h-auto">
            {/* Square */}
            <rect x="20" y="20" width="200" height="200" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" rx="4" />
            {/* Circle */}
            <circle cx="120" cy="120" r="100" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
            {/* Radius line */}
            <line x1="120" y1="120" x2="220" y2="120" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="120" cy="120" r="4" fill="#DC2626" />
            <text x="150" y="112" fill="#DC2626" fontSize="13" fontWeight="bold">r = 7 ซม.</text>
            {/* Dimension label */}
            <text x="95" y="12" fill="#92400E" fontSize="13" fontWeight="bold">14 ซม.</text>
            <text x="225" y="125" fill="#92400E" fontSize="13" fontWeight="bold">14 ซม.</text>
          </svg>
          <span className="text-xs text-slate-500 mt-2">รูปที่ 2: วงกลมแนบในสี่เหลี่ยมจัตุรัส (พื้นที่สีเหลืองคือส่วนแรเงา)</span>
        </div>
      );

    case 'circuit':
    case 'sci-phy-001':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 200" className="w-full max-w-sm h-auto">
            {/* Battery */}
            <line x1="40" y1="60" x2="40" y2="140" stroke="#059669" strokeWidth="3" />
            <line x1="40" y1="100" x2="80" y2="100" stroke="#059669" strokeWidth="2.5" />
            <line x1="70" y1="85" x2="70" y2="115" stroke="#059669" strokeWidth="4" />
            <line x1="80" y1="75" x2="80" y2="125" stroke="#059669" strokeWidth="2" />
            <text x="25" y="95" fill="#047857" fontSize="14" fontWeight="bold">+</text>
            <text x="90" y="95" fill="#047857" fontSize="14" fontWeight="bold">-</text>
            <text x="45" y="160" fill="#047857" fontSize="12" fontWeight="bold">แบตเตอรี่</text>

            {/* Top Branch (Series A and B) */}
            <line x1="80" y1="100" x2="120" y2="100" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="100" x2="120" y2="50" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="50" x2="150" y2="50" stroke="#334155" strokeWidth="2.5" />

            {/* Bulb A */}
            <circle cx="170" cy="50" r="16" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="165" y="55" fill="#854D0E" fontSize="13" fontWeight="bold">A</text>
            <line x1="186" y1="50" x2="220" y2="50" stroke="#334155" strokeWidth="2.5" />

            {/* Bulb B */}
            <circle cx="240" cy="50" r="16" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="235" y="55" fill="#854D0E" fontSize="13" fontWeight="bold">B</text>
            <line x1="256" y1="50" x2="290" y2="50" stroke="#334155" strokeWidth="2.5" />
            <line x1="290" y1="50" x2="290" y2="100" stroke="#334155" strokeWidth="2.5" />

            {/* Bottom Branch (Parallel Bulb C) */}
            <line x1="120" y1="100" x2="120" y2="150" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="150" x2="190" y2="150" stroke="#334155" strokeWidth="2.5" />

            {/* Bulb C */}
            <circle cx="205" cy="150" r="16" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="200" y="155" fill="#854D0E" fontSize="13" fontWeight="bold">C</text>
            <line x1="221" y1="150" x2="290" y2="150" stroke="#334155" strokeWidth="2.5" />
            <line x1="290" y1="150" x2="290" y2="100" stroke="#334155" strokeWidth="2.5" />

            {/* Complete Circuit */}
            <line x1="290" y1="100" x2="330" y2="100" stroke="#334155" strokeWidth="2.5" />
            <line x1="330" y1="100" x2="330" y2="180" stroke="#334155" strokeWidth="2.5" />
            <line x1="330" y1="180" x2="40" y2="180" stroke="#334155" strokeWidth="2.5" />
            <line x1="40" y1="180" x2="40" y2="140" stroke="#334155" strokeWidth="2.5" />
          </svg>
          <span className="text-xs text-slate-500 mt-2">รูปที่ 3: วงจรไฟฟ้าผสม (หลอด A และ B อนุกรมกัน ขนานกับหลอด C)</span>
        </div>
      );

    case 'chromatography':
    case 'sci-chem-001':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 280 220" className="w-full max-w-xs h-auto">
            {/* Paper Strip */}
            <rect x="70" y="20" width="140" height="180" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" rx="4" />
            
            {/* Solvent Front */}
            <line x1="70" y1="50" x2="210" y2="50" stroke="#0284C7" strokeWidth="2" strokeDasharray="3,3" />
            <text x="215" y="55" fill="#0284C7" fontSize="11" fontWeight="bold">ตัวทำละลาย (10 ซม.)</text>

            {/* Spot B */}
            <circle cx="140" cy="90" r="10" fill="#EC4899" stroke="#BE185D" strokeWidth="2" />
            <text x="140" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">B</text>
            <text x="160" y="95" fill="#BE185D" fontSize="11" fontWeight="bold">สาร B (6 ซม.)</text>

            {/* Spot A */}
            <circle cx="140" cy="120" r="10" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <text x="140" y="124" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">A</text>
            <text x="160" y="125" fill="#B45309" fontSize="11" fontWeight="bold">สาร A (3 ซม.)</text>

            {/* Origin Line */}
            <line x1="70" y1="150" x2="210" y2="150" stroke="#475569" strokeWidth="2" />
            <text x="15" y="155" fill="#475569" fontSize="11" fontWeight="bold">จุดเริ่มต้น (Origin)</text>
          </svg>
          <span className="text-xs text-slate-500 mt-2">รูปที่ 4: การทดสอบโครมาโทกราฟีกระดาษ</span>
        </div>
      );

    default:
      return null;
  }
};
