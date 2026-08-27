'use client';

import React from 'react';

interface CuteAIBotIconProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const CuteAIBotIcon: React.FC<CuteAIBotIconProps> = ({
  className = '',
  size = 32,
  animated = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${animated ? 'hover:scale-110 transition-transform' : ''} ${className}`}
    >
      <defs>
        {/* Bright Outer Helmet Gradient */}
        <linearGradient id="brightHeadGrad" x1="15" y1="18" x2="85" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>

        {/* Bright Friendly Face Screen Gradient */}
        <linearGradient id="brightFaceGrad" x1="22" y1="32" x2="78" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F9FF" />
        </linearGradient>

        {/* Glowing Golden Antenna Gradient */}
        <linearGradient id="antennaGrad" x1="45" y1="4" x2="55" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Playful Ear Gradient */}
        <linearGradient id="earGrad" x1="0" y1="40" x2="15" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>

        {/* Eye Iris Gradient */}
        <linearGradient id="eyeIrisGrad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      {/* 1. Golden Glowing Antenna */}
      <rect x="47.5" y="10" width="5" height="14" rx="2.5" fill="#E2E8F0" />
      <circle cx="50" cy="9" r="8" fill="url(#antennaGrad)" />
      <circle cx="47.5" cy="6.5" r="3" fill="#FFFFFF" opacity="0.9" />
      {/* Radiant Ring */}
      <circle
        cx="50"
        cy="9"
        r="11"
        stroke="#FDE047"
        strokeWidth="1.5"
        strokeDasharray="3 2.5"
        opacity="0.8"
        className={animated ? 'animate-spin origin-center' : ''}
      />

      {/* 2. Playful Headphone Ears */}
      {/* Left Ear */}
      <rect x="6" y="42" width="9" height="24" rx="4.5" fill="url(#earGrad)" />
      <circle cx="10.5" cy="54" r="2.5" fill="#FFFFFF" opacity="0.85" />
      {/* Right Ear */}
      <rect x="85" y="42" width="9" height="24" rx="4.5" fill="url(#earGrad)" />
      <circle cx="89.5" cy="54" r="2.5" fill="#FFFFFF" opacity="0.85" />

      {/* 3. Outer Robot Helmet (Pastel Gradient with Gloss) */}
      <rect x="13" y="20" width="74" height="68" rx="24" fill="url(#brightHeadGrad)" />
      <rect x="14" y="21" width="72" height="66" rx="23" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" />

      {/* 4. Bright Porcelain Face Visor */}
      <rect x="21" y="30" width="58" height="50" rx="18" fill="url(#brightFaceGrad)" />
      <rect x="21" y="30" width="58" height="50" rx="18" stroke="#BAE6FD" strokeWidth="2" />

      {/* Soft Visor Glass Glare */}
      <path
        d="M 28 35 Q 50 32 72 38"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* 5. Big Bright Anime Sparkle Eyes */}
      {/* Left Eye */}
      <ellipse cx="37" cy="50" rx="7.5" ry="9" fill="#0F172A" />
      <ellipse cx="37" cy="51" rx="6" ry="7" fill="url(#eyeIrisGrad)" />
      {/* Highlights */}
      <circle cx="35" cy="46.5" r="3.2" fill="#FFFFFF" />
      <circle cx="39.5" cy="54" r="1.8" fill="#FFFFFF" />
      <circle cx="34" cy="53" r="1" fill="#38BDF8" />

      {/* Right Eye */}
      <ellipse cx="63" cy="50" rx="7.5" ry="9" fill="#0F172A" />
      <ellipse cx="63" cy="51" rx="6" ry="7" fill="url(#eyeIrisGrad)" />
      {/* Highlights */}
      <circle cx="61" cy="46.5" r="3.2" fill="#FFFFFF" />
      <circle cx="65.5" cy="54" r="1.8" fill="#FFFFFF" />
      <circle cx="60" cy="53" r="1" fill="#38BDF8" />

      {/* 6. Cute Pink Blushing Cheeks */}
      <ellipse cx="29" cy="61" rx="5" ry="2.8" fill="#FB7185" opacity="0.9" />
      <ellipse cx="71" cy="61" rx="5" ry="2.8" fill="#FB7185" opacity="0.9" />

      {/* 7. Cheerful Smiling Mouth with Tongue */}
      <path
        d="M 44 60 Q 50 69 56 60"
        stroke="#0F172A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="#F43F5E"
      />

      {/* 8. Star Sparkles */}
      <path
        d="M 80 18 L 82 23 L 87 25 L 82 27 L 80 32 L 78 27 L 73 25 L 78 23 Z"
        fill="#FDE047"
      />
      <circle cx="21" cy="24" r="2" fill="#FDE047" />
    </svg>
  );
};
