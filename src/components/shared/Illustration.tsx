'use client';

import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  switch (type) {
    // ----------------------------------------------------
    // เรขาคณิตและคณิตศาสตร์
    // ----------------------------------------------------
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
            <polygon points="90,40 230,40 310,160 30,160" fill="url(#trapGrad)" stroke="#2563EB" strokeWidth="3" />
            <line x1="90" y1="40" x2="90" y2="160" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
            <rect x="90" y="145" width="15" height="15" fill="none" stroke="#EF4444" strokeWidth="1.5" />
            <text x="50" y="105" fill="#DC2626" fontSize="13" fontWeight="bold">h = 6 ซม.</text>
            <text x="80" y="30" fill="#1E293B" fontSize="14" fontWeight="bold">A</text>
            <text x="235" y="30" fill="#1E293B" fontSize="14" fontWeight="bold">D</text>
            <text x="15" y="170" fill="#1E293B" fontSize="14" fontWeight="bold">B</text>
            <text x="320" y="170" fill="#1E293B" fontSize="14" fontWeight="bold">C</text>
            <text x="145" y="30" fill="#1D4ED8" fontSize="13" fontWeight="bold">8 ซม.</text>
            <text x="150" y="185" fill="#1D4ED8" fontSize="13" fontWeight="bold">14 ซม.</text>
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
            <rect x="20" y="20" width="200" height="200" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" rx="4" />
            <circle cx="120" cy="120" r="100" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
            <line x1="120" y1="120" x2="220" y2="120" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="120" cy="120" r="4" fill="#DC2626" />
            <text x="150" y="112" fill="#DC2626" fontSize="13" fontWeight="bold">r = 7 ซม.</text>
            <text x="95" y="12" fill="#92400E" fontSize="13" fontWeight="bold">14 ซม.</text>
            <text x="225" y="125" fill="#92400E" fontSize="13" fontWeight="bold">14 ซม.</text>
          </svg>
          <span className="text-xs text-slate-500 mt-2">รูปที่ 2: วงกลมแนบในสี่เหลี่ยมจัตุรัส (พื้นที่สีเหลืองคือส่วนแรเงา)</span>
        </div>
      );

    // ----------------------------------------------------
    // สวนกุหลาบวิทยาลัย (Suankularb)
    // ----------------------------------------------------
    // ข้อ 31: แผนภาพสายใยอาหาร (Food Web E, F -> C, A, D -> B)
    case 'sk-sci-64-031':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 380 230" className="w-full max-w-md h-auto">
            <defs>
              <marker id="arrowFood" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#059669" />
              </marker>
            </defs>

            {/* Top: Predator B */}
            <circle cx="190" cy="35" r="22" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.5" />
            <text x="190" y="41" textAnchor="middle" fill="#991B1B" fontSize="16" fontWeight="bold">B</text>

            {/* Middle row: C, A, D */}
            <circle cx="90" cy="115" r="20" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <text x="90" y="121" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="bold">C</text>

            <circle cx="190" cy="115" r="20" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <text x="190" y="121" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="bold">A</text>

            <circle cx="290" cy="115" r="20" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <text x="290" y="121" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="bold">D</text>

            {/* Bottom row: Producers E, F */}
            <rect x="100" y="180" width="60" height="34" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
            <text x="130" y="202" textAnchor="middle" fill="#065F46" fontSize="15" fontWeight="bold">E</text>

            <rect x="220" y="180" width="60" height="34" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
            <text x="250" y="202" textAnchor="middle" fill="#065F46" fontSize="15" fontWeight="bold">F</text>

            {/* Arrows from E, F to C, A, D */}
            <line x1="120" y1="180" x2="95" y2="138" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowFood)" />
            <line x1="135" y1="180" x2="180" y2="138" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowFood)" />
            <line x1="245" y1="180" x2="200" y2="138" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowFood)" />
            <line x1="260" y1="180" x2="285" y2="138" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowFood)" />

            {/* Arrows from C, A, D to B */}
            <line x1="105" y1="98" x2="170" y2="52" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowFood)" />
            <line x1="190" y1="95" x2="190" y2="60" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowFood)" />
            <line x1="275" y1="98" x2="210" y2="52" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowFood)" />
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">แผนภาพสายใยอาหาร (Food Web) ข้อที่ 31</span>
        </div>
      );

    // ข้อ 32: ส่วนประกอบของดอกไม้ (A..F)
    case 'sk-sci-64-032':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-rose-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 240" className="w-full max-w-sm h-auto">
            {/* Petal (B) */}
            <path d="M 120 180 C 40 120, 70 30, 180 30 C 290 30, 320 120, 240 180 Z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2" />
            <text x="290" y="80" fill="#BE185D" fontSize="14" fontWeight="bold">B (กลีบดอก)</text>

            {/* Sepal (F) & Receptacle */}
            <path d="M 140 180 Q 110 195 100 185 Q 130 170 145 180" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" />
            <path d="M 220 180 Q 250 195 260 185 Q 230 170 215 180" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" />
            <rect x="170" y="195" width="20" height="35" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" rx="3" />
            <text x="45" y="195" fill="#15803D" fontSize="13" fontWeight="bold">F (กลีบเลี้ยง)</text>

            {/* Ovary (D) & Ovule (C) */}
            <ellipse cx="180" cy="165" rx="32" ry="25" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="235" y="165" fill="#A16207" fontSize="13" fontWeight="bold">D (รังไข่)</text>

            <circle cx="173" cy="165" r="7" fill="#F97316" />
            <circle cx="187" cy="165" r="7" fill="#F97316" />
            <text x="180" y="145" textAnchor="middle" fill="#EA580C" fontSize="12" fontWeight="bold">C (ออวุล)</text>

            {/* Style & Stigma (E) */}
            <line x1="180" y1="140" x2="180" y2="70" stroke="#16A34A" strokeWidth="4" />
            <ellipse cx="180" cy="65" rx="14" ry="8" fill="#4ADE80" stroke="#15803D" strokeWidth="2" />
            <text x="180" y="50" textAnchor="middle" fill="#15803D" fontSize="13" fontWeight="bold">E (ยอดเกสรเพศเมีย)</text>

            {/* Stamen (A) */}
            <line x1="165" y1="150" x2="135" y2="85" stroke="#EAB308" strokeWidth="2.5" />
            <ellipse cx="135" cy="80" rx="8" ry="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <line x1="195" y1="150" x2="225" y2="85" stroke="#EAB308" strokeWidth="2.5" />
            <ellipse cx="225" cy="80" rx="8" ry="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <text x="80" y="85" fill="#A16207" fontSize="13" fontWeight="bold">A (อับเรณู)</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">ภาพส่วนประกอบของดอกไม้ ข้อที่ 32</span>
        </div>
      );

    // ข้อ 38: อวัยวะในระบบย่อยอาหาร (1..7)
    case 'sk-sci-64-038':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-amber-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 260" className="w-full max-w-sm h-auto">
            {/* Esophagus (1) */}
            <rect x="175" y="15" width="12" height="50" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
            <text x="195" y="35" fill="#C2410C" fontSize="12" fontWeight="bold">1. หลอดอาหาร</text>

            {/* Liver (3) */}
            <path d="M 120 70 Q 165 65 175 90 Q 160 120 110 100 Z" fill="#FCA5A5" stroke="#DC2626" strokeWidth="2" />
            <text x="50" y="85" fill="#B91C1C" fontSize="12" fontWeight="bold">3. ตับ (สร้างน้ำดี)</text>

            {/* Gallbladder (4) */}
            <circle cx="150" cy="100" r="7" fill="#86EFAC" stroke="#15803D" strokeWidth="1.5" />
            <text x="60" y="115" fill="#15803D" fontSize="11" fontWeight="bold">4. ถุงน้ำดี</text>

            {/* Stomach (2) */}
            <path d="M 180 65 Q 230 75 220 115 Q 185 130 175 110 Z" fill="#FDBA74" stroke="#EA580C" strokeWidth="2" />
            <text x="235" y="90" fill="#C2410C" fontSize="12" fontWeight="bold">2. กระเพาะอาหาร</text>

            {/* Pancreas (5) */}
            <path d="M 160 120 Q 200 115 210 130 Q 180 135 160 120" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="225" y="125" fill="#A16207" fontSize="12" fontWeight="bold">5. ตับอ่อน (ไลเปส)</text>

            {/* Large & Small Intestines (6) */}
            <rect x="130" y="140" width="100" height="70" rx="15" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
            <circle cx="180" cy="175" r="22" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
            <text x="245" y="175" fill="#475569" fontSize="12" fontWeight="bold">6. ลำไส้</text>

            {/* Anus (7) */}
            <rect x="175" y="215" width="10" height="20" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
            <text x="200" y="230" fill="#334155" fontSize="12" fontWeight="bold">7. ทวารหนัก</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">แผนผังอวัยวะในระบบย่อยอาหาร ข้อที่ 38</span>
        </div>
      );

    // ข้อ 45: วงโคจรระบบสุริยะ (X, A, B, C, D, E)
    case 'sk-sci-64-045':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 220" className="w-full max-w-sm h-auto">
            {/* Center Star X */}
            <circle cx="180" cy="110" r="18" fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
            <text x="180" y="115" textAnchor="middle" fill="#78350F" fontSize="13" fontWeight="bold">ดาว X</text>

            {/* Orbit A */}
            <ellipse cx="180" cy="110" rx="45" ry="25" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="225" cy="110" r="6" fill="#38BDF8" />
            <text x="233" y="108" fill="#0369A1" fontSize="11" fontWeight="bold">A</text>

            {/* Orbit B */}
            <ellipse cx="180" cy="110" rx="75" ry="42" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="180" cy="68" r="8" fill="#F472B6" />
            <text x="188" y="65" fill="#BE185D" fontSize="11" fontWeight="bold">B</text>

            {/* Orbit C */}
            <ellipse cx="180" cy="110" rx="110" ry="60" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="70" cy="110" r="9" fill="#34D399" />
            <text x="52" y="108" fill="#047857" fontSize="11" fontWeight="bold">C</text>

            {/* Orbit D */}
            <ellipse cx="180" cy="110" rx="140" ry="78" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="180" cy="188" r="11" fill="#A78BFA" />
            <text x="195" y="193" fill="#6D28D9" fontSize="11" fontWeight="bold">D</text>

            {/* Orbit E */}
            <ellipse cx="180" cy="110" rx="168" ry="94" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="348" cy="110" r="10" fill="#FB923C" />
            <text x="345" y="98" fill="#C2410C" fontSize="11" fontWeight="bold">E</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">ภาพจำลองวงโคจรของระบบสุริยะ ข้อที่ 45</span>
        </div>
      );

    // ข้อ 47: ข้างขึ้นข้างแรม
    case 'sk-sci-64-047':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-sky-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 340 180" className="w-full max-w-sm h-auto">
            {/* Sun rays */}
            <rect x="15" y="20" width="30" height="140" fill="#FEF08A" stroke="#EAB308" strokeWidth="2" rx="4" />
            <text x="30" y="95" textAnchor="middle" fill="#854D0E" fontSize="12" fontWeight="bold" transform="rotate(-90,30,95)">แสงอาทิตย์</text>

            {/* Earth */}
            <circle cx="170" cy="90" r="28" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
            <text x="170" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">โลก</text>

            {/* Moon Positions */}
            {/* Full moon */}
            <circle cx="280" cy="90" r="16" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
            <text x="280" y="125" textAnchor="middle" fill="#854D0E" fontSize="11" fontWeight="bold">ขึ้น 15 ค่ำ</text>

            {/* Waning half moon (แรม 8 ค่ำ) */}
            <circle cx="170" cy="25" r="16" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
            <path d="M 170 9 A 16 16 0 0 0 170 41 Z" fill="#FDE047" />
            <text x="170" y="165" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">แรม 8 ค่ำ (+8 วัน = สว่างครึ่งดวงซ้าย)</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">ข้างขึ้นข้างแรมของดวงจันทร์ ข้อที่ 47</span>
        </div>
      );

    // ข้อ 49: การวัดมุมเงยด้วยมือ
    case 'sk-sci-64-049':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 140" className="w-full max-w-sm h-auto">
            {/* A: Fist = 10 */}
            <rect x="20" y="25" width="55" height="55" rx="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
            <text x="47" y="56" textAnchor="middle" fill="#6D28D9" fontSize="14" fontWeight="bold">A (กำปั้น)</text>
            <text x="47" y="100" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="bold">10°</text>

            {/* B: Rock = 15 */}
            <rect x="85" y="25" width="55" height="55" rx="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
            <text x="112" y="56" textAnchor="middle" fill="#6D28D9" fontSize="14" fontWeight="bold">B (ชี้+ก้อย)</text>
            <text x="112" y="100" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="bold">15°</text>

            {/* C: Spread = 20 */}
            <rect x="150" y="25" width="55" height="55" rx="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
            <text x="177" y="56" textAnchor="middle" fill="#6D28D9" fontSize="14" fontWeight="bold">C (กางสุด)</text>
            <text x="177" y="100" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="bold">20°</text>

            {/* D: One finger = 1 */}
            <rect x="215" y="25" width="55" height="55" rx="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
            <text x="242" y="56" textAnchor="middle" fill="#6D28D9" fontSize="14" fontWeight="bold">D (1 นิ้ว)</text>
            <text x="242" y="100" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="bold">1°</text>

            {/* E: Three fingers = 5 */}
            <rect x="280" y="25" width="55" height="55" rx="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
            <text x="307" y="56" textAnchor="middle" fill="#6D28D9" fontSize="14" fontWeight="bold">E (3 นิ้ว)</text>
            <text x="307" y="100" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="bold">5°</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">การประมาณมุมเงยด้วยมือเปล่า ข้อที่ 49</span>
        </div>
      );

    // ข้อ 51: วัฏจักรหิน (A, B, C)
    case 'sk-sci-64-051':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 shadow-sm ${className}`}>
          <svg viewBox="0 0 360 200" className="w-full max-w-sm h-auto">
            {/* Magma */}
            <rect x="130" y="15" width="100" height="35" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
            <text x="180" y="37" textAnchor="middle" fill="#B91C1C" fontSize="13" fontWeight="bold">แมกมา / ลาวา</text>

            {/* Igneous */}
            <rect x="20" y="80" width="90" height="35" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
            <text x="65" y="102" textAnchor="middle" fill="#B45309" fontSize="13" fontWeight="bold">หินอัคนี</text>

            {/* Sedimentary */}
            <rect x="250" y="80" width="90" height="35" rx="8" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" />
            <text x="295" y="102" textAnchor="middle" fill="#4338CA" fontSize="13" fontWeight="bold">หินตะกอน</text>

            {/* Metamorphic */}
            <rect x="130" y="145" width="100" height="35" rx="8" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
            <text x="180" y="167" textAnchor="middle" fill="#047857" fontSize="13" fontWeight="bold">หินแปร</text>

            {/* Arrow A: Sedimentary -> Metamorphic */}
            <path d="M 270 120 L 220 145" stroke="#3B82F6" strokeWidth="2" />
            <text x="260" y="145" fill="#1D4ED8" fontSize="12" fontWeight="bold">A (แปรสภาพ)</text>

            {/* Arrow B: Metamorphic -> Magma */}
            <path d="M 140 145 L 140 55" stroke="#EF4444" strokeWidth="2" />
            <text x="90" y="70" fill="#DC2626" fontSize="12" fontWeight="bold">B (หลอม)</text>

            {/* Arrow C: Igneous -> Sediment */}
            <path d="M 65 120 L 100 160" stroke="#10B981" strokeWidth="2" />
            <text x="40" y="150" fill="#047857" fontSize="12" fontWeight="bold">C (ผุพัง)</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">แผนภาพวัฏจักรหิน (Rock Cycle) ข้อที่ 51</span>
        </div>
      );

    // ข้อ 54: วงจรไฟฟ้าผสม (ก ขนานกับ ข+ค อนุกรม)
    case 'sk-sci-64-054':
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
            <text x="45" y="160" fill="#047857" fontSize="12" fontWeight="bold">เซลล์ไฟฟ้า</text>

            {/* Top Branch (Bulb ก) */}
            <line x1="80" y1="100" x2="120" y2="100" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="100" x2="120" y2="50" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="50" x2="180" y2="50" stroke="#334155" strokeWidth="2.5" />

            <circle cx="205" cy="50" r="16" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="200" y="55" fill="#854D0E" fontSize="13" fontWeight="bold">ก</text>
            <line x1="221" y1="50" x2="290" y2="50" stroke="#334155" strokeWidth="2.5" />
            <line x1="290" y1="50" x2="290" y2="100" stroke="#334155" strokeWidth="2.5" />

            {/* Bottom Branch (Series Bulbs ข and ค) */}
            <line x1="120" y1="100" x2="120" y2="150" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="150" x2="150" y2="150" stroke="#334155" strokeWidth="2.5" />

            <circle cx="170" cy="150" r="16" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <text x="165" y="155" fill="#854D0E" fontSize="13" fontWeight="bold">ข</text>
            <line x1="186" y1="150" x2="220" y2="150" stroke="#334155" strokeWidth="2.5" />

            <circle cx="240" cy="150" r="16" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" strokeDasharray="2,2" />
            <text x="235" y="155" fill="#991B1B" fontSize="13" fontWeight="bold">ค</text>
            <text x="220" y="180" fill="#DC2626" fontSize="11" fontWeight="bold">(ชำรุด)</text>
            <line x1="256" y1="150" x2="290" y2="150" stroke="#334155" strokeWidth="2.5" />
            <line x1="290" y1="150" x2="290" y2="100" stroke="#334155" strokeWidth="2.5" />

            {/* Complete Circuit */}
            <line x1="290" y1="100" x2="330" y2="100" stroke="#334155" strokeWidth="2.5" />
            <line x1="330" y1="100" x2="330" y2="180" stroke="#334155" strokeWidth="2.5" />
            <line x1="330" y1="180" x2="40" y2="180" stroke="#334155" strokeWidth="2.5" />
            <line x1="40" y1="180" x2="40" y2="140" stroke="#334155" strokeWidth="2.5" />
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">วงจรไฟฟ้า ข้อที่ 54 (กิ่งบนขนานกับกิ่งล่าง)</span>
        </div>
      );

    // ข้อ 58: การเคลื่อนที่แนวดิ่งภายใต้แรงโน้มถ่วง (ก ข ค)
    case 'sk-sci-64-058':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-blue-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 340 210" className="w-full max-w-sm h-auto">
            {/* Trajectory Parabola / Vertical Path */}
            <path d="M 90 170 Q 170 20 250 170" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4,4" />

            {/* Peak ข */}
            <circle cx="170" cy="40" r="12" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
            <text x="170" y="25" textAnchor="middle" fill="#78350F" fontSize="13" fontWeight="bold">ข (จุดสูงสุด v=0)</text>
            <path d="M 170 55 L 170 85" stroke="#EF4444" strokeWidth="2" />
            <polygon points="166,85 170,92 174,85" fill="#EF4444" />
            <text x="185" y="75" fill="#DC2626" fontSize="11" fontWeight="bold">a = g</text>

            {/* Ascending ก */}
            <circle cx="110" cy="110" r="12" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
            <text x="65" y="115" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold">ก (ขาขึ้น)</text>
            <path d="M 110 125 L 110 155" stroke="#EF4444" strokeWidth="2" />
            <polygon points="106,155 110,162 114,155" fill="#EF4444" />
            <text x="125" y="145" fill="#DC2626" fontSize="11" fontWeight="bold">a = g</text>

            {/* Descending ค */}
            <circle cx="230" cy="110" r="12" fill="#34D399" stroke="#059669" strokeWidth="2" />
            <text x="275" y="115" textAnchor="middle" fill="#065F46" fontSize="13" fontWeight="bold">ค (ขาลง)</text>
            <path d="M 230 125 L 230 155" stroke="#EF4444" strokeWidth="2" />
            <polygon points="226,155 230,162 234,155" fill="#EF4444" />
            <text x="245" y="145" fill="#DC2626" fontSize="11" fontWeight="bold">a = g</text>

            {/* Ground */}
            <line x1="40" y1="180" x2="300" y2="180" stroke="#334155" strokeWidth="3" />
            <text x="170" y="200" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">พื้นดิน (ความเร่ง a = g มีทิศพุ่งลงสู่พื้นโลกเสมอทุกจุด)</text>
          </svg>
          <span className="text-xs text-slate-600 font-semibold mt-2">การเคลื่อนที่แนวดิ่ง ข้อที่ 58</span>
        </div>
      );

    // ----------------------------------------------------
    // สตรีวิทยา (Satriwit)
    // ----------------------------------------------------
    case 'free-fall':
    case 'sw-sci-026':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-blue-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 320 200" className="w-full max-w-sm h-auto">
            <rect x="20" y="20" width="280" height="15" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" rx="3" />
            <text x="160" y="12" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">ความสูง h เท่ากัน (ปล่อยพร้อมกัน u=0)</text>
            <circle cx="90" cy="55" r="22" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
            <text x="90" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">A (2m)</text>
            <path d="M 90 85 L 90 145" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4,4" />
            <polygon points="85,145 90,155 95,145" fill="#EF4444" />
            <text x="50" y="120" fill="#DC2626" fontSize="12" fontWeight="bold">a = g</text>
            <circle cx="230" cy="55" r="14" fill="#10B981" stroke="#047857" strokeWidth="2" />
            <text x="230" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">B (m)</text>
            <path d="M 230 75 L 230 145" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4,4" />
            <polygon points="225,145 230,155 235,145" fill="#EF4444" />
            <text x="245" y="120" fill="#DC2626" fontSize="12" fontWeight="bold">a = g</text>
            <line x1="20" y1="170" x2="300" y2="170" stroke="#334155" strokeWidth="3" />
            <text x="160" y="190" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">ความเร็วขณะกระทบพื้น v_A = v_B = √(2gh)</text>
          </svg>
          <span className="text-xs text-slate-500 mt-2">ภาพประกอบ: การตกอิสระในสุญญากาศ ความเร่ง g เท่ากัน</span>
        </div>
      );

    case 'friction-stacked':
    case 'sw-sci-029':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 340 180" className="w-full max-w-sm h-auto">
            <rect x="110" y="30" width="100" height="40" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" rx="4" />
            <text x="160" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">วัตถุ A</text>
            <path d="M 160 20 L 210 20" stroke="#059669" strokeWidth="2.5" />
            <polygon points="210,16 220,20 210,24" fill="#059669" />
            <text x="160" y="14" fill="#059669" fontSize="11" fontWeight="bold">f_A (ไปทางขวา)</text>
            <rect x="70" y="75" width="180" height="45" fill="#FBBF24" stroke="#D97706" strokeWidth="2" rx="4" />
            <text x="160" y="103" textAnchor="middle" fill="#78350F" fontSize="14" fontWeight="bold">วัตถุ B</text>
            <path d="M 255 97 L 310 97" stroke="#DC2626" strokeWidth="3" />
            <polygon points="310,92 322,97 310,102" fill="#DC2626" />
            <text x="280" y="90" fill="#DC2626" fontSize="13" fontWeight="bold">แรง F</text>
            <path d="M 130 130 L 70 130" stroke="#059669" strokeWidth="2.5" />
            <polygon points="70,126 60,130 70,134" fill="#059669" />
            <text x="80" y="145" fill="#059669" fontSize="11" fontWeight="bold">f_พื้น (ต้านไปทางซ้าย)</text>
            <line x1="20" y1="125" x2="320" y2="125" stroke="#475569" strokeWidth="2.5" strokeDasharray="6,4" />
          </svg>
          <span className="text-xs text-slate-500 mt-2">ภาพประกอบ: แรงเสียดทานระหว่างวัตถุที่วางซ้อนกัน</span>
        </div>
      );

    case 'sound-glasses':
    case 'sw-sci-030':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-teal-100 shadow-sm ${className}`}>
          <svg viewBox="0 0 340 180" className="w-full max-w-sm h-auto">
            <rect x="30" y="40" width="60" height="90" fill="#F1F5F9" stroke="#475569" strokeWidth="2" rx="3" />
            <rect x="32" y="85" width="56" height="43" fill="#93C5FD" opacity="0.8" />
            <text x="60" y="145" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">แก้ว A (น้ำ 1/2)</text>
            <text x="60" y="160" textAnchor="middle" fill="#2563EB" fontSize="11">เสียงกลาง</text>
            <rect x="140" y="40" width="60" height="90" fill="#F1F5F9" stroke="#475569" strokeWidth="2" rx="3" />
            <rect x="142" y="85" width="56" height="43" fill="#93C5FD" opacity="0.8" />
            <rect x="150" y="123" width="40" height="8" fill="#78350F" rx="2" />
            <text x="170" y="145" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">แก้ว B (+ดินน้ำมัน)</text>
            <text x="170" y="160" textAnchor="middle" fill="#DC2626" fontSize="11">เสียงต่ำสุด (มวลมาก)</text>
            <rect x="250" y="40" width="60" height="90" fill="#F1F5F9" stroke="#475569" strokeWidth="2" rx="3" />
            <rect x="252" y="108" width="56" height="20" fill="#93C5FD" opacity="0.8" />
            <text x="280" y="145" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">แก้ว C (น้ำ 1/4)</text>
            <text x="280" y="160" textAnchor="middle" fill="#059669" fontSize="11">เสียงสูงสุด (มวลน้อย)</text>
          </svg>
          <span className="text-xs text-slate-500 mt-2">ภาพประกอบ: การเคาะแก้วน้ำ เรียงความถี่ C &gt; A &gt; B</span>
        </div>
      );

    default:
      return null;
  }
};
