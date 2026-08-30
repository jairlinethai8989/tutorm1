'use client';

import React, { useState } from 'react';
import { SubjectRadarPoint } from '@/types/analytics';
import { Sparkles, Info, Target, ChevronRight } from 'lucide-react';

interface SubjectRadarChartProps {
  data: SubjectRadarPoint[];
  selectedSubjectId?: string | null;
  onSelectSubject?: (subjectId: string) => void;
}

export const SubjectRadarChart: React.FC<SubjectRadarChartProps> = ({
  data,
  selectedSubjectId,
  onSelectSubject,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const size = 380;
  const center = size / 2;
  const radius = 110;
  const totalAxes = data.length || 5;

  const getCoordinates = (index: number, valueRatio: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const x = center + radius * valueRatio * Math.cos(angle);
    const y = center + radius * valueRatio * Math.sin(angle);
    return { x, y };
  };

  // User polygon data points
  const userPoints = data
    .map((d, i) => {
      const ratio = Math.max(0.06, Math.min(1, d.score / d.fullMark));
      const { x, y } = getCoordinates(i, ratio);
      return `${x},${y}`;
    })
    .join(' ');

  // 70% Benchmark polygon points
  const benchmark70Points = data
    .map((_, i) => {
      const { x, y } = getCoordinates(i, 0.7);
      return `${x},${y}`;
    })
    .join(' ');

  const hasAnyData = data.some((d) => d.questionsCount > 0 || d.score > 0);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between h-full">
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              5-Subject Competency Radar
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              สมรรถนะความพร้อม 5 วิชาหลัก เทียบเกณฑ์ตัดตัว
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
            <Target className="w-3 h-3" />
            <span>เกณฑ์เป้าหมาย 70%</span>
          </span>
        </div>
      </div>

      {/* SVG Chart Container */}
      <div className="relative my-2 w-full flex justify-center items-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="max-w-full h-auto overflow-visible select-none"
        >
          <defs>
            {/* User Polygon Gradient */}
            <linearGradient id="userRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3578F6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#8257F5" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* 1. Concentric Grid Webs (25%, 50%, 75%, 100%) */}
          {[0.25, 0.5, 0.75, 1].map((level, lIdx) => {
            const levelPoints = data
              .map((_, i) => {
                const { x, y } = getCoordinates(i, level);
                return `${x},${y}`;
              })
              .join(' ');
            return (
              <polygon
                key={lIdx}
                points={levelPoints}
                fill={level === 1 ? '#F8FAFC' : 'none'}
                stroke="#E2E8F0"
                strokeWidth={level === 1 ? '2' : '1.2'}
                strokeDasharray={level < 1 ? '3,3' : 'none'}
              />
            );
          })}

          {/* 2. 70% Target Benchmark Line (Dashed Rose/Amber Line) */}
          <polygon
            points={benchmark70Points}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.8"
            strokeDasharray="4,4"
          />

          {/* 3. Radial Axis Lines */}
          {data.map((d, i) => {
            const { x, y } = getCoordinates(i, 1);
            const isSelected = selectedSubjectId === d.subjectId;
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={isSelected ? d.color : '#CBD5E1'}
                strokeWidth={isSelected ? '2.5' : '1.2'}
              />
            );
          })}

          {/* 4. User Filled Area */}
          {hasAnyData && (
            <polygon
              points={userPoints}
              fill="url(#userRadarGrad)"
              stroke="#3578F6"
              strokeWidth="2.8"
              className="transition-all duration-500 ease-out"
            />
          )}

          {/* 5. Axis Data Points & Labels */}
          {data.map((d, i) => {
            const ratio = Math.max(0.06, Math.min(1, d.score / d.fullMark));
            const pt = getCoordinates(i, ratio);
            const labelPt = getCoordinates(i, 1.34);
            const isHovered = hoveredIdx === i;
            const isSelected = selectedSubjectId === d.subjectId;

            return (
              <g
                key={i}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onSelectSubject && onSelectSubject(d.subjectId)}
              >
                {/* Point Dot */}
                {hasAnyData && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered || isSelected ? '6.5' : '4.5'}
                    fill={d.color || '#3578F6'}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    className="transition-all drop-shadow-sm"
                  />
                )}

                {/* Subject Label Pill Background */}
                <rect
                  x={labelPt.x - 48}
                  y={labelPt.y - 12}
                  width="96"
                  height="24"
                  rx="12"
                  fill={isSelected ? d.color : isHovered ? '#EEF2FF' : '#FFFFFF'}
                  stroke={isSelected ? d.color : isHovered ? '#818CF8' : '#E2E8F0'}
                  strokeWidth="1.5"
                  className="transition-all shadow-2xs"
                />

                {/* Text Label */}
                <text
                  x={labelPt.x}
                  y={labelPt.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-[11px] font-black ${
                    isSelected ? 'fill-white' : 'fill-slate-800'
                  }`}
                >
                  {d.subject} {d.score}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend & Interactive Subject Tabs */}
      <div className="space-y-3 pt-2 border-t border-slate-100 mt-2">
        <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
            <span>คะแนนปัจจุบัน</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 border-t-2 border-dashed border-amber-500 inline-block" />
            <span>เกณฑ์ตัดตัวสอบติด (70%)</span>
          </div>
        </div>

        {/* 5 Subject Quick Pills */}
        <div className="grid grid-cols-5 gap-1.5 pt-1">
          {data.map((d) => {
            const isSelected = selectedSubjectId === d.subjectId;
            return (
              <button
                key={d.subjectId}
                type="button"
                onClick={() => onSelectSubject && onSelectSubject(d.subjectId)}
                className={`px-1.5 py-2 rounded-xl text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs scale-102'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/70'
                }`}
              >
                <p className="text-[10px] font-bold truncate">{d.subject}</p>
                <p
                  className="text-xs font-black mt-0.5"
                  style={{ color: isSelected ? '#FFFFFF' : d.color }}
                >
                  {d.score}%
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
