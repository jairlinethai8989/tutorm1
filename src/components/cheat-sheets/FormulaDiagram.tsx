'use client';

import React from 'react';
import { FormulaItem } from '@/types/cheatSheet';

interface FormulaDiagramProps {
  item: FormulaItem;
}

export const FormulaDiagram: React.FC<FormulaDiagramProps> = ({ item }) => {
  const cat = item.category;
  const id = item.id.toLowerCase();
  const title = item.title.toLowerCase();
  const tags = item.tags.map((t) => t.toLowerCase());

  // ==========================================
  // 1. MATHEMATICS DIAGRAMS (Strict category: 'math')
  // ==========================================
  if (cat === 'math') {
    // 1.1 Triangle (General)
    if (id === 'm-geo-01' || (tags.includes('สามเหลี่ยม') && !title.includes('ด้านเท่า'))) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-blue-50/80 to-indigo-50/40 rounded-2xl border border-blue-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="triGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
              </linearGradient>
              <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1E40AF" floodOpacity="0.15" />
              </filter>
            </defs>
            {/* Main Triangle Polygon */}
            <polygon points="30,85 200,85 105,20" fill="url(#triGrad)" stroke="#2563EB" strokeWidth="2.5" strokeLinejoin="round" filter="url(#softGlow)" />
            {/* Height Altitude Line (Dashed Red with Arrow) */}
            <line x1="105" y1="20" x2="105" y2="85" stroke="#E11D48" strokeWidth="2" strokeDasharray="3,3" />
            {/* Right Angle Box */}
            <rect x="105" y="77" width="8" height="8" fill="#FEE2E2" stroke="#E11D48" strokeWidth="1.5" />
            {/* Labels with Background Badges */}
            <g transform="translate(112, 48)">
              <rect x="-2" y="-9" width="46" height="15" rx="4" fill="#FFFFFF" stroke="#FECDD3" strokeWidth="1" />
              <text x="21" y="2" fill="#BE123C" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">สูง (h)</text>
            </g>
            <g transform="translate(115, 99)">
              <rect x="-30" y="-9" width="60" height="15" rx="4" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="1" />
              <text x="0" y="2" fill="#1D4ED8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ฐาน (b)</text>
            </g>
            {/* Dimension Bracket for Base */}
            <line x1="30" y1="89" x2="200" y2="89" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="30" y1="86" x2="30" y2="92" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="200" y1="86" x2="200" y2="92" stroke="#3B82F6" strokeWidth="1.5" />
          </svg>
        </div>
      );
    }

    // 1.2 Equilateral Triangle
    if (id === 'm-geo-02' || title.includes('ด้านเท่า')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-indigo-50/80 to-purple-50/40 rounded-2xl border border-indigo-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="eqGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <polygon points="45,85 195,85 120,18" fill="url(#eqGrad)" stroke="#4F46E5" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Equality ticks on sides */}
            <line x1="78" y1="48" x2="88" y2="54" stroke="#4F46E5" strokeWidth="2" />
            <line x1="152" y1="54" x2="162" y2="48" stroke="#4F46E5" strokeWidth="2" />
            <line x1="117" y1="82" x2="123" y2="88" stroke="#4F46E5" strokeWidth="2" />
            {/* Side Label badges */}
            <text x="70" y="44" fill="#3730A3" fontSize="11" fontWeight="bold">a</text>
            <text x="165" y="44" fill="#3730A3" fontSize="11" fontWeight="bold">a</text>
            <g transform="translate(120, 100)">
              <rect x="-42" y="-9" width="84" height="15" rx="4" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="1" />
              <text x="0" y="2" fill="#4338CA" fontSize="9" fontWeight="bold" textAnchor="middle">a (3 ด้านเท่ากัน)</text>
            </g>
            {/* 60 deg arc */}
            <path d="M 65,85 A 20,20 0 0,0 55,68" fill="none" stroke="#EA580C" strokeWidth="2" />
            <text x="68" y="78" fill="#C2410C" fontSize="9" fontWeight="extrabold">60°</text>
          </svg>
        </div>
      );
    }

    // 1.3 Parallelogram & Rhombus
    if (id === 'm-geo-03' || title.includes('สี่เหลี่ยมด้านขนาน') || title.includes('ขนมเปียกปูน')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-sky-50/80 to-blue-50/40 rounded-2xl border border-sky-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="paraGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon points="50,85 205,85 175,22 20,22" fill="url(#paraGrad)" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Height Line */}
            <line x1="65" y1="22" x2="65" y2="85" stroke="#E11D48" strokeWidth="2" strokeDasharray="3,3" />
            <rect x="65" y="77" width="8" height="8" fill="#FEE2E2" stroke="#E11D48" strokeWidth="1.5" />
            <g transform="translate(75, 52)">
              <rect x="-2" y="-9" width="46" height="15" rx="4" fill="#FFFFFF" stroke="#FECDD3" strokeWidth="1" />
              <text x="21" y="2" fill="#BE123C" fontSize="10" fontWeight="bold" textAnchor="middle">สูง (h)</text>
            </g>
            <g transform="translate(127, 99)">
              <rect x="-28" y="-9" width="56" height="15" rx="4" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1" />
              <text x="0" y="2" fill="#0369A1" fontSize="10" fontWeight="bold" textAnchor="middle">ฐาน (b)</text>
            </g>
            {/* Diagonal line */}
            <line x1="20" y1="22" x2="205" y2="85" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="145" y="42" fill="#6D28D9" fontSize="9" fontWeight="bold">เส้นทแยงมุม d</text>
          </svg>
        </div>
      );
    }

    // 1.4 Trapezoid
    if (id === 'm-geo-04' || title.includes('คางหมู')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-indigo-50/80 to-blue-50/40 rounded-2xl border border-indigo-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="trapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon points="25,85 205,85 165,22 65,22" fill="url(#trapGrad)" stroke="#4F46E5" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Top side a */}
            <g transform="translate(115, 14)">
              <rect x="-42" y="-9" width="84" height="15" rx="4" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="1" />
              <text x="0" y="2" fill="#3730A3" fontSize="9" fontWeight="bold" textAnchor="middle">ด้านคู่ขนาน a</text>
            </g>
            {/* Bottom side b */}
            <g transform="translate(115, 99)">
              <rect x="-42" y="-9" width="84" height="15" rx="4" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="1" />
              <text x="0" y="2" fill="#3730A3" fontSize="9" fontWeight="bold" textAnchor="middle">ด้านคู่ขนาน b</text>
            </g>
            {/* Height Line */}
            <line x1="65" y1="22" x2="65" y2="85" stroke="#E11D48" strokeWidth="2" strokeDasharray="3,3" />
            <rect x="65" y="77" width="8" height="8" fill="#FEE2E2" stroke="#E11D48" strokeWidth="1.5" />
            <text x="74" y="55" fill="#BE123C" fontSize="10" fontWeight="bold">สูง (h)</text>
          </svg>
        </div>
      );
    }

    // 1.5 Circle
    if (id === 'm-geo-05' || title.includes('วงกลม')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-cyan-50/80 to-blue-50/40 rounded-2xl border border-cyan-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <radialGradient id="circGrad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
              </radialGradient>
            </defs>
            <circle cx="75" cy="52" r="38" fill="url(#circGrad)" stroke="#0284C7" strokeWidth="2.5" />
            <circle cx="75" cy="52" r="3" fill="#0369A1" />
            {/* Radius line */}
            <line x1="75" y1="52" x2="113" y2="52" stroke="#E11D48" strokeWidth="2" />
            <g transform="translate(94, 44)">
              <rect x="-14" y="-8" width="28" height="13" rx="3" fill="#FFFFFF" stroke="#FECDD3" strokeWidth="1" />
              <text x="0" y="2" fill="#BE123C" fontSize="9" fontWeight="bold" textAnchor="middle">r</text>
            </g>
            {/* Info cards on right */}
            <g transform="translate(130, 32)">
              <rect x="0" y="0" width="98" height="20" rx="6" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1" />
              <text x="49" y="14" fill="#0369A1" fontSize="10" fontWeight="bold" textAnchor="middle">เส้นรอบวง = 2πr</text>
            </g>
            <g transform="translate(130, 60)">
              <rect x="0" y="0" width="98" height="20" rx="6" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1" />
              <text x="49" y="14" fill="#0369A1" fontSize="10" fontWeight="bold" textAnchor="middle">พื้นที่ = πr²</text>
            </g>
          </svg>
        </div>
      );
    }

    // 1.6 3D Box (Cuboid)
    if (id === 'm-3d-01' || title.includes('ทรงสี่เหลี่ยมมุมฉาก') || title.includes('กล่อง')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-blue-50/80 to-indigo-50/40 rounded-2xl border border-blue-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* Front Face */}
            <polygon points="40,45 130,45 130,90 40,90" fill="#93C5FD" stroke="#2563EB" strokeWidth="2" />
            {/* Top Face */}
            <polygon points="40,45 80,18 170,18 130,45" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
            {/* Right Face */}
            <polygon points="130,45 170,18 170,63 130,90" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
            {/* Dimension badges */}
            <text x="85" y="100" fill="#1E40AF" fontSize="10" fontWeight="bold" textAnchor="middle">ยาว (l)</text>
            <text x="25" y="70" fill="#1E40AF" fontSize="10" fontWeight="bold" textAnchor="middle">สูง (h)</text>
            <text x="155" y="35" fill="#1E40AF" fontSize="10" fontWeight="bold" textAnchor="middle">กว้าง (w)</text>
            {/* Volume Pill */}
            <g transform="translate(195, 80)">
              <rect x="-20" y="-8" width="48" height="16" rx="4" fill="#1E40AF" />
              <text x="4" y="4" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">V = lwh</text>
            </g>
          </svg>
        </div>
      );
    }

    // 1.7 3D Cylinder
    if (id === 'm-3d-02' || title.includes('ทรงกระบอก')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-emerald-50/80 to-teal-50/40 rounded-2xl border border-emerald-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="cylBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A7F3D0" />
                <stop offset="50%" stopColor="#D1FAE5" />
                <stop offset="100%" stopColor="#6EE7B7" />
              </linearGradient>
            </defs>
            {/* Body */}
            <path d="M 60,32 L 60,78 A 38,13 0 0,0 136,78 L 136,32" fill="url(#cylBody)" stroke="#059669" strokeWidth="2" />
            {/* Top Base */}
            <ellipse cx="98" cy="32" rx="38" ry="13" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
            {/* Radius line */}
            <line x1="98" y1="32" x2="136" y2="32" stroke="#E11D48" strokeWidth="1.5" />
            <text x="117" y="27" fill="#BE123C" fontSize="9" fontWeight="bold" textAnchor="middle">r</text>
            {/* Height arrow */}
            <line x1="148" y1="32" x2="148" y2="78" stroke="#047857" strokeWidth="1.5" />
            <line x1="145" y1="32" x2="151" y2="32" stroke="#047857" strokeWidth="1.5" />
            <line x1="145" y1="78" x2="151" y2="78" stroke="#047857" strokeWidth="1.5" />
            <text x="165" y="58" fill="#047857" fontSize="10" fontWeight="bold">สูง (h)</text>
            <g transform="translate(98, 100)">
              <rect x="-35" y="-8" width="70" height="15" rx="4" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1" />
              <text x="0" y="2" fill="#065F46" fontSize="9" fontWeight="bold" textAnchor="middle">V = πr²h</text>
            </g>
          </svg>
        </div>
      );
    }

    // 1.8 Speed $s = vt$ Magic Triangle
    if (id.includes('speed') || title.includes('อัตราเร็ว') || title.includes('s = vt')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-amber-50/80 to-yellow-50/40 rounded-2xl border border-amber-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="goldTri" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <polygon points="35,90 195,90 115,15" fill="url(#goldTri)" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="68" y1="56" x2="162" y2="56" stroke="#D97706" strokeWidth="2" />
            <line x1="115" y1="56" x2="115" y2="90" stroke="#D97706" strokeWidth="2" />
            <text x="115" y="44" fill="#92400E" fontSize="15" fontWeight="black" textAnchor="middle">s (ระยะทาง)</text>
            <text x="85" y="78" fill="#92400E" fontSize="12" fontWeight="black" textAnchor="middle">v (ความเร็ว)</text>
            <text x="115" y="76" fill="#D97706" fontSize="14" fontWeight="bold" textAnchor="middle">×</text>
            <text x="145" y="78" fill="#92400E" fontSize="12" fontWeight="black" textAnchor="middle">t (เวลา)</text>
          </svg>
        </div>
      );
    }
  }

  // ==========================================
  // 2. SCIENCE DIAGRAMS (Strict category: 'science')
  // ==========================================
  if (cat === 'science') {
    // 2.1 Ohm's Law ($V = IR$)
    if (id.includes('ohm') || title.includes('โอห์ม') || title.includes('v = ir')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-emerald-50/80 to-teal-50/40 rounded-2xl border border-emerald-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="ohmTri" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A7F3D0" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <polygon points="35,90 195,90 115,15" fill="url(#ohmTri)" stroke="#059669" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="68" y1="56" x2="162" y2="56" stroke="#059669" strokeWidth="2" />
            <line x1="115" y1="56" x2="115" y2="90" stroke="#059669" strokeWidth="2" />
            <text x="115" y="44" fill="#065F46" fontSize="15" fontWeight="black" textAnchor="middle">V (โวลต์)</text>
            <text x="85" y="78" fill="#065F46" fontSize="12" fontWeight="black" textAnchor="middle">I (แอมแปร์)</text>
            <text x="115" y="76" fill="#059669" fontSize="14" fontWeight="bold" textAnchor="middle">×</text>
            <text x="145" y="78" fill="#065F46" fontSize="12" fontWeight="black" textAnchor="middle">R (โอห์ม)</text>
          </svg>
        </div>
      );
    }

    // 2.2 Circuit Series vs Parallel
    if (id.includes('circuit') || title.includes('วงจรไฟฟ้า') || title.includes('อนุกรม') || title.includes('ขนาน')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-teal-50/80 to-cyan-50/40 rounded-2xl border border-teal-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 100" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* Series */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="100" height="60" rx="8" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2" />
              <circle cx="32" cy="0" r="8" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <circle cx="68" cy="0" r="8" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <text x="50" y="78" fill="#0F766E" fontSize="10" fontWeight="bold" textAnchor="middle">อนุกรม (I เท่ากัน)</text>
            </g>
            {/* Parallel */}
            <g transform="translate(130, 10)">
              <rect x="0" y="0" width="100" height="60" rx="8" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="#0D9488" strokeWidth="2" />
              <circle cx="50" cy="0" r="8" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <circle cx="50" cy="30" r="8" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <text x="50" y="78" fill="#0F766E" fontSize="10" fontWeight="bold" textAnchor="middle">ขนาน (V เท่ากัน)</text>
            </g>
          </svg>
        </div>
      );
    }

    // 2.3 Light Prism Refraction (Rainbow dispersion)
    if (id.includes('prism') || title.includes('แสง') || title.includes('หักเห') || tags.includes('แสง')) {
      return (
        <div className="my-2.5 p-2 bg-gradient-to-b from-indigo-50/80 to-blue-50/40 rounded-2xl border border-indigo-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 100" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <linearGradient id="prismGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Prism Glass */}
            <polygon points="75,85 155,85 115,18" fill="url(#prismGlass)" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Incoming Beam */}
            <line x1="15" y1="62" x2="95" y2="52" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
            <text x="45" y="48" fill="#334155" fontSize="10" fontWeight="bold">แสงขาว</text>
            {/* 7 Color Spectrum */}
            <line x1="135" y1="52" x2="215" y2="30" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="135" y1="54" x2="215" y2="40" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="56" x2="215" y2="50" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="58" x2="215" y2="60" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="60" x2="215" y2="70" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="62" x2="215" y2="80" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
            <text x="218" y="32" fill="#DC2626" fontSize="9" fontWeight="bold">แดง (หักเหน้อย)</text>
            <text x="218" y="82" fill="#7C3AED" fontSize="9" fontWeight="bold">ม่วง (หักเหมาก)</text>
          </svg>
        </div>
      );
    }
  }

  // ==========================================
  // 3. SOCIAL STUDIES DIAGRAMS (Strict category: 'social')
  // ==========================================
  if (cat === 'social') {
    // 3.1 Latitude vs Longitude (Globe with Red Latitude & Blue Longitude)
    if (id === 's-geo-01' || title.includes('ละติจูด') || title.includes('เส้นสมมุติ')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-rose-50/80 to-pink-50/40 rounded-2xl border border-rose-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            <defs>
              <radialGradient id="globeGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#FFE4E6" />
                <stop offset="100%" stopColor="#FDA4AF" />
              </radialGradient>
            </defs>
            {/* 3D Globe Sphere */}
            <circle cx="70" cy="52" r="38" fill="url(#globeGrad)" stroke="#E11D48" strokeWidth="2" />
            {/* Latitude: Horizontal Red Ring (Equator) */}
            <ellipse cx="70" cy="52" rx="38" ry="12" fill="none" stroke="#E11D48" strokeWidth="2.5" />
            <ellipse cx="70" cy="32" rx="32" ry="9" fill="none" stroke="#FB7185" strokeWidth="1" strokeDasharray="2,2" />
            <ellipse cx="70" cy="72" rx="32" ry="9" fill="none" stroke="#FB7185" strokeWidth="1" strokeDasharray="2,2" />
            {/* Longitude: Vertical Blue Ring (Prime Meridian) */}
            <ellipse cx="70" cy="52" rx="14" ry="38" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="70" y1="14" x2="70" y2="90" stroke="#1D4ED8" strokeWidth="2.5" />

            {/* Clear Memorization Pills on Right */}
            <g transform="translate(120, 24)">
              <rect x="0" y="0" width="112" height="24" rx="6" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.5" />
              <text x="56" y="16" fill="#BE123C" fontSize="9.5" fontWeight="bold" textAnchor="middle">ละติจูด (นอน = อากาศ)</text>
            </g>
            <g transform="translate(120, 56)">
              <rect x="0" y="0" width="112" height="24" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
              <text x="56" y="16" fill="#1D4ED8" fontSize="9.5" fontWeight="bold" textAnchor="middle">ลองจิจูด (ตั้ง = เวลา)</text>
            </g>
          </svg>
        </div>
      );
    }

    // 3.2 World Time Zones (15 deg = 1 hr)
    if (id === 's-geo-02' || title.includes('เวลาโลก') || title.includes('time zones')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-rose-50/80 to-amber-50/40 rounded-2xl border border-rose-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 100" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* Clock / Globe Dial */}
            <circle cx="65" cy="50" r="36" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
            <line x1="65" y1="14" x2="65" y2="86" stroke="#D97706" strokeWidth="2" />
            <line x1="29" y1="50" x2="101" y2="50" stroke="#D97706" strokeWidth="1.5" strokeDasharray="2,2" />
            {/* Clock Hands */}
            <line x1="65" y1="50" x2="65" y2="28" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
            <line x1="65" y1="50" x2="88" y2="50" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="65" cy="50" r="3" fill="#78350F" />
            <text x="65" y="24" fill="#92400E" fontSize="8" fontWeight="bold" textAnchor="middle">0° กรีนิช</text>

            {/* Formula Badges */}
            <g transform="translate(115, 20)">
              <rect x="0" y="0" width="118" height="26" rx="6" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="1.5" />
              <text x="59" y="17" fill="#B45309" fontSize="10.5" fontWeight="black" textAnchor="middle">15° ลองจิจูด = 1 ชม.</text>
            </g>
            <g transform="translate(115, 54)">
              <rect x="0" y="0" width="118" height="26" rx="6" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
              <text x="59" y="17" fill="#047857" fontSize="10" fontWeight="bold" textAnchor="middle">ไทย (105°E) = GMT+7</text>
            </g>
          </svg>
        </div>
      );
    }

    // 3.3 Map Scale (มาตราส่วนแผนที่)
    if (id === 's-geo-03' || title.includes('มาตราส่วน') || tags.includes('มาตราส่วน')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-rose-50/80 to-pink-50/40 rounded-2xl border border-rose-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 100" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* Map Paper Graphic */}
            <rect x="25" y="15" width="190" height="40" rx="8" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" />
            <path d="M 40,35 Q 80,20 120,40 T 200,30" fill="none" stroke="#FDA4AF" strokeWidth="2" strokeDasharray="3,3" />
            <circle cx="50" cy="35" r="4" fill="#E11D48" />
            <circle cx="170" cy="35" r="4" fill="#E11D48" />
            <line x1="50" y1="35" x2="170" y2="35" stroke="#BE123C" strokeWidth="2" />
            <text x="110" y="30" fill="#9F1239" fontSize="10" fontWeight="black" textAnchor="middle">วัดในแผนที่ = 1 ซม.</text>

            {/* Scale Bar Below */}
            <g transform="translate(45, 68)">
              <rect x="0" y="0" width="150" height="22" rx="6" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.5" />
              <text x="75" y="15" fill="#BE123C" fontSize="10" fontWeight="bold" textAnchor="middle">
                1 : 50,000 ➔ 1 ซม. = 500 ม.
              </text>
            </g>
          </svg>
        </div>
      );
    }

    // 3.4 Demand & Supply (อุปสงค์ - อุปทาน)
    if (id === 's-eco-01' || title.includes('อุปสงค์') || title.includes('อุปทาน')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-rose-50/80 to-amber-50/40 rounded-2xl border border-rose-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 105" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* Axis */}
            <line x1="35" y1="15" x2="35" y2="85" stroke="#475569" strokeWidth="2" />
            <line x1="35" y1="85" x2="205" y2="85" stroke="#475569" strokeWidth="2" />
            <text x="30" y="15" fill="#334155" fontSize="9" fontWeight="bold" textAnchor="end">ราคา (P)</text>
            <text x="205" y="98" fill="#334155" fontSize="9" fontWeight="bold">ปริมาณ (Q)</text>
            {/* Demand Curve (Downward Red) */}
            <line x1="50" y1="25" x2="185" y2="80" stroke="#EF4444" strokeWidth="2.5" />
            <text x="190" y="82" fill="#DC2626" fontSize="11" fontWeight="black">D (ซื้อ)</text>
            {/* Supply Curve (Upward Green) */}
            <line x1="50" y1="80" x2="185" y2="25" stroke="#10B981" strokeWidth="2.5" />
            <text x="190" y="28" fill="#059669" fontSize="11" fontWeight="black">S (ขาย)</text>
            {/* Equilibrium Point */}
            <circle cx="118" cy="52" r="4.5" fill="#7C3AED" />
            <text x="126" y="50" fill="#6D28D9" fontSize="9.5" fontWeight="black">จุดดุลยภาพ (E)</text>
          </svg>
        </div>
      );
    }

    // 3.5 Factors of Production (ปัจจัยการผลิต 4 ประการ)
    if (id === 's-eco-02' || title.includes('ปัจจัยการผลิต')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-amber-50/80 to-rose-50/40 rounded-2xl border border-amber-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 100" className="w-full max-w-[230px] h-24 overflow-visible">
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="105" height="35" rx="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="52" y="16" fill="#92400E" fontSize="9.5" fontWeight="black" textAnchor="middle">🏞️ ที่ดิน ➔ ค่าเช่า</text>
              <text x="52" y="29" fill="#B45309" fontSize="8" textAnchor="middle">ทรัพยากรธรรมชาติ</text>
            </g>
            <g transform="translate(125, 10)">
              <rect x="0" y="0" width="105" height="35" rx="6" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="52" y="16" fill="#1E40AF" fontSize="9.5" fontWeight="black" textAnchor="middle">👷 แรงงาน ➔ ค่าจ้าง</text>
              <text x="52" y="29" fill="#1D4ED8" fontSize="8" textAnchor="middle">กำลังกาย & สติปัญญา</text>
            </g>
            <g transform="translate(10, 52)">
              <rect x="0" y="0" width="105" height="35" rx="6" fill="#DCFCE7" stroke="#10B981" strokeWidth="1.5" />
              <text x="52" y="16" fill="#065F46" fontSize="9.5" fontWeight="black" textAnchor="middle">🏭 ทุน ➔ ดอกเบี้ย</text>
              <text x="52" y="29" fill="#047857" fontSize="8" textAnchor="middle">เครื่องจักร/โรงงาน</text>
            </g>
            <g transform="translate(125, 52)">
              <rect x="0" y="0" width="105" height="35" rx="6" fill="#FCE7F3" stroke="#EC4899" strokeWidth="1.5" />
              <text x="52" y="16" fill="#9D174D" fontSize="9.5" fontWeight="black" textAnchor="middle">💼 ผู้ประกอบการ ➔ กำไร</text>
              <text x="52" y="29" fill="#831843" fontSize="8" textAnchor="middle">บริหารรวบรวมปัจจัย</text>
            </g>
          </svg>
        </div>
      );
    }

    // 3.6 Buddhist Holy Days (วันสำคัญทางพระพุทธศาสนา 3 เพ็ญ)
    if (id === 's-rel-01' || title.includes('พุทธศาสนา') || title.includes('มาฆบูชา')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-amber-50/80 to-yellow-50/40 rounded-2xl border border-amber-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 100" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* 3 Full Moons */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="68" height="78" rx="8" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
              <circle cx="34" cy="20" r="11" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
              <text x="34" y="42" fill="#92400E" fontSize="9.5" fontWeight="black" textAnchor="middle">มาฆะ (เพ็ญ 3)</text>
              <text x="34" y="56" fill="#B45309" fontSize="8" textAnchor="middle">โอวาทปาติโมกข์</text>
              <text x="34" y="68" fill="#78350F" fontSize="7.5" fontWeight="bold" textAnchor="middle">สงฆ์ 1,250 รูป</text>
            </g>
            <g transform="translate(86, 10)">
              <rect x="0" y="0" width="68" height="78" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
              <circle cx="34" cy="20" r="11" fill="#FECDD3" stroke="#E11D48" strokeWidth="1" />
              <text x="34" y="42" fill="#991B1B" fontSize="9.5" fontWeight="black" textAnchor="middle">วิสาขะ (เพ็ญ 6)</text>
              <text x="34" y="56" fill="#B91C1C" fontSize="8" textAnchor="middle">ประสูติ ตรัสรู้</text>
              <text x="34" y="68" fill="#7F1D1D" fontSize="7.5" fontWeight="bold" textAnchor="middle">ปรินิพพาน (สากล)</text>
            </g>
            <g transform="translate(162, 10)">
              <rect x="0" y="0" width="68" height="78" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
              <circle cx="34" cy="20" r="11" fill="#A7F3D0" stroke="#059669" strokeWidth="1" />
              <text x="34" y="42" fill="#065F46" fontSize="9" fontWeight="black" textAnchor="middle">อาสาฬหะ (เพ็ญ 8)</text>
              <text x="34" y="56" fill="#047857" fontSize="8" textAnchor="middle">ปฐมเทศนา</text>
              <text x="34" y="68" fill="#064E3B" fontSize="7.5" fontWeight="bold" textAnchor="middle">สงฆ์องค์แรก ครบ 3</text>
            </g>
          </svg>
        </div>
      );
    }

    // 3.7 Sovereignty 3-Pillars Flowchart (อำนาจอธิปไตย 3 ฝ่าย Check & Balance)
    if (id === 's-civ-01' || title.includes('อำนาจอธิปไตย') || title.includes('ประชาธิปไตย')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-indigo-50/80 to-blue-50/40 rounded-2xl border border-indigo-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 115" className="w-full max-w-[230px] h-28 overflow-visible">
            {/* Top Crown Box: Sovereignty */}
            <g transform="translate(45, 8)">
              <rect x="0" y="0" width="150" height="26" rx="6" fill="#1E1B4B" stroke="#4F46E5" strokeWidth="1.5" />
              <text x="75" y="17" fill="#FDE047" fontSize="10.5" fontWeight="black" textAnchor="middle">👑 อำนาจอธิปไตย 3 ฝ่าย</text>
            </g>
            {/* Branch Lines from Top */}
            <line x1="120" y1="34" x2="120" y2="44" stroke="#6366F1" strokeWidth="2" />
            <line x1="45" y1="44" x2="195" y2="44" stroke="#6366F1" strokeWidth="2" />
            <line x1="45" y1="44" x2="45" y2="52" stroke="#6366F1" strokeWidth="2" />
            <line x1="120" y1="44" x2="120" y2="52" stroke="#6366F1" strokeWidth="2" />
            <line x1="195" y1="44" x2="195" y2="52" stroke="#6366F1" strokeWidth="2" />

            {/* 3 Pillar Boxes */}
            {/* Pillar 1: Legislative */}
            <g transform="translate(10, 52)">
              <rect x="0" y="0" width="70" height="42" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
              <text x="35" y="16" fill="#3730A3" fontSize="9.5" fontWeight="black" textAnchor="middle">🏛️ นิติบัญญัติ</text>
              <text x="35" y="28" fill="#4338CA" fontSize="7.5" textAnchor="middle">รัฐสภา (ส.ส.+ส.ว.)</text>
              <text x="35" y="38" fill="#1D4ED8" fontSize="8" fontWeight="bold" textAnchor="middle">ออกกฎหมาย</text>
            </g>
            {/* Pillar 2: Executive */}
            <g transform="translate(85, 52)">
              <rect x="0" y="0" width="70" height="42" rx="6" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
              <text x="35" y="16" fill="#991B1B" fontSize="9.5" fontWeight="black" textAnchor="middle">🏢 บริหาร</text>
              <text x="35" y="28" fill="#B91C1C" fontSize="7.5" textAnchor="middle">ครม. / นายกฯ</text>
              <text x="35" y="38" fill="#DC2626" fontSize="8" fontWeight="bold" textAnchor="middle">บริหารประเทศ</text>
            </g>
            {/* Pillar 3: Judiciary */}
            <g transform="translate(160, 52)">
              <rect x="0" y="0" width="70" height="42" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
              <text x="35" y="16" fill="#065F46" fontSize="9.5" fontWeight="black" textAnchor="middle">⚖️ ตุลาการ</text>
              <text x="35" y="28" fill="#047857" fontSize="7.5" textAnchor="middle">ศาลยุติธรรมฯ</text>
              <text x="35" y="38" fill="#059669" fontSize="8" fontWeight="bold" textAnchor="middle">ตัดสินคดีความ</text>
            </g>
            {/* Check & Balance Footer Indicator */}
            <text x="120" y="108" fill="#6366F1" fontSize="8" fontWeight="bold" textAnchor="middle">🔄 ตรวจสอบและถ่วงดุลอำนาจ (Check & Balance)</text>
          </svg>
        </div>
      );
    }
  }

  // ==========================================
  // 4. ENGLISH DIAGRAMS (Strict category: 'english')
  // ==========================================
  if (cat === 'english') {
    if (id.includes('tense') || title.includes('tense')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-violet-50/80 to-purple-50/40 rounded-2xl border border-violet-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 95" className="w-full max-w-[230px] h-24 overflow-visible">
            <line x1="20" y1="48" x2="220" y2="48" stroke="#7C3AED" strokeWidth="2.5" />
            <circle cx="45" cy="48" r="5" fill="#A78BFA" />
            <circle cx="120" cy="48" r="7" fill="#7C3AED" stroke="#EDE9FE" strokeWidth="2" />
            <circle cx="195" cy="48" r="5" fill="#A78BFA" />
            <text x="45" y="28" fill="#6D28D9" fontSize="11" fontWeight="black" textAnchor="middle">PAST</text>
            <text x="45" y="68" fill="#5B21B6" fontSize="9" fontWeight="bold" textAnchor="middle">V.2</text>
            <text x="120" y="26" fill="#4338CA" fontSize="12" fontWeight="black" textAnchor="middle">PRESENT</text>
            <text x="120" y="68" fill="#4338CA" fontSize="9" fontWeight="bold" textAnchor="middle">V.1 (s, es)</text>
            <text x="195" y="28" fill="#6D28D9" fontSize="11" fontWeight="black" textAnchor="middle">FUTURE</text>
            <text x="195" y="68" fill="#5B21B6" fontSize="9" fontWeight="bold" textAnchor="middle">will + V.inf</text>
          </svg>
        </div>
      );
    }
  }

  // ==========================================
  // 5. THAI LANGUAGE DIAGRAMS (Strict category: 'thai')
  // ==========================================
  if (cat === 'thai') {
    if (id.includes('triyang') || title.includes('อักษร') || title.includes('ไตรยางศ์')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-amber-50/80 to-orange-50/40 rounded-2xl border border-amber-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 95" className="w-full max-w-[230px] h-24 overflow-visible">
            {/* Middle Class */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="68" height="75" rx="8" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <text x="34" y="22" fill="#854D0E" fontSize="10" fontWeight="black" textAnchor="middle">อักษรกลาง</text>
              <text x="34" y="42" fill="#A16207" fontSize="14" fontWeight="black" textAnchor="middle">9 ตัว</text>
              <text x="34" y="58" fill="#713F12" fontSize="7.5" textAnchor="middle">ไก่จิกเด็กตาย...</text>
              <text x="34" y="70" fill="#15803D" fontSize="8" fontWeight="bold" textAnchor="middle">ผัน 5 เสียง</text>
            </g>
            {/* High Class */}
            <g transform="translate(86, 10)">
              <rect x="0" y="0" width="68" height="75" rx="8" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
              <text x="34" y="22" fill="#9A3412" fontSize="10" fontWeight="black" textAnchor="middle">อักษรสูง</text>
              <text x="34" y="42" fill="#C2410C" fontSize="14" fontWeight="black" textAnchor="middle">11 ตัว</text>
              <text x="34" y="58" fill="#7C2D12" fontSize="7.5" textAnchor="middle">ผีฝากถุงข้าว...</text>
              <text x="34" y="70" fill="#B45309" fontSize="8" fontWeight="bold" textAnchor="middle">ผัน 3 เสียง</text>
            </g>
            {/* Low Class */}
            <g transform="translate(162, 10)">
              <rect x="0" y="0" width="68" height="75" rx="8" fill="#FECDD3" stroke="#E11D48" strokeWidth="1.5" />
              <text x="34" y="22" fill="#9F1239" fontSize="10" fontWeight="black" textAnchor="middle">อักษรต่ำ</text>
              <text x="34" y="42" fill="#BE123C" fontSize="14" fontWeight="black" textAnchor="middle">24 ตัว</text>
              <text x="34" y="58" fill="#881337" fontSize="7.5" textAnchor="middle">เดี่ยว 10/คู่ 14</text>
              <text x="34" y="70" fill="#BE123C" fontSize="8" fontWeight="bold" textAnchor="middle">ผัน 3 เสียง</text>
            </g>
          </svg>
        </div>
      );
    }

    if (id.includes('samas') || title.includes('สมาส') || title.includes('สนธิ')) {
      return (
        <div className="my-2.5 p-2.5 bg-gradient-to-b from-orange-50/80 to-amber-50/40 rounded-2xl border border-orange-200/90 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 240 90" className="w-full max-w-[230px] h-24 overflow-visible">
            <g transform="translate(15, 12)">
              <rect x="0" y="0" width="100" height="66" rx="8" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2" />
              <text x="50" y="24" fill="#9A3412" fontSize="13" fontWeight="black" textAnchor="middle">สมาส = ชน</text>
              <text x="50" y="42" fill="#C2410C" fontSize="9" textAnchor="middle">คำบาลี-สันสกฤต</text>
              <text x="50" y="58" fill="#7C2D12" fontSize="9" fontWeight="bold" textAnchor="middle">แปลหลังไปหน้า</text>
            </g>
            <g transform="translate(125, 12)">
              <rect x="0" y="0" width="100" height="66" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
              <text x="50" y="24" fill="#991B1B" fontSize="13" fontWeight="black" textAnchor="middle">สนธิ = เชื่อม</text>
              <text x="50" y="42" fill="#B91C1C" fontSize="9" textAnchor="middle">กลืนเสียงสระ/พยัญชนะ</text>
              <text x="50" y="58" fill="#7F1D1D" fontSize="9" fontWeight="bold" textAnchor="middle">เสียงเชื่อมติดกัน</text>
            </g>
          </svg>
        </div>
      );
    }
  }

  return null;
};
