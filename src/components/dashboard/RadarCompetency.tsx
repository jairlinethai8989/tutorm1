'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface RadarCompetencyProps {
  data?: { subject: string; score: number; fullMark: number; questionsCount?: number }[];
}

export const RadarCompetency: React.FC<RadarCompetencyProps> = ({
  data = [
    { subject: 'พีชคณิต/สมการ', score: 0, fullMark: 100 },
    { subject: 'เรขาคณิต/พื้นที่', score: 0, fullMark: 100 },
    { subject: 'จำนวน/การคำนวณ', score: 0, fullMark: 100 },
    { subject: 'ฟิสิกส์/ไฟฟ้า', score: 0, fullMark: 100 },
    { subject: 'เคมี/การแยกสาร', score: 0, fullMark: 100 },
    { subject: 'ชีววิทยา/สิ่งมีชีวิต', score: 0, fullMark: 100 },
  ],
}) => {
  const size = 360;
  const center = size / 2;
  const radius = 95;
  const totalAxes = data.length;

  const getCoordinates = (index: number, valueRatio: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const x = center + radius * valueRatio * Math.cos(angle);
    const y = center + radius * valueRatio * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points for data
  const dataPoints = data.map((d, i) => {
    const ratio = Math.max(0.05, Math.min(1, d.score / d.fullMark));
    const { x, y } = getCoordinates(i, ratio);
    return `${x},${y}`;
  }).join(' ');

  const hasAnyAttempt = data.some((d) => (d.questionsCount ? d.questionsCount > 0 : d.score > 0));

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col items-center justify-between">
      <div className="w-full flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Radar Chart: สมรรถนะ 6 ด้านหลัก</span>
        </h3>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
          เทียบเกณฑ์สอบติด
        </span>
      </div>

      {/* SVG Radar Chart */}
      <div className="relative my-2 w-full flex justify-center overflow-visible">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="max-w-full h-auto overflow-visible">
          {/* Concentric Grid Webs */}
          {[0.25, 0.5, 0.75, 1].map((level, lIdx) => {
            const levelPoints = data.map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            }).join(' ');
            return (
              <polygon
                key={lIdx}
                points={levelPoints}
                fill={level === 1 ? '#F8FAFC' : 'none'}
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeDasharray={level < 1 ? '3,3' : 'none'}
              />
            );
          })}

          {/* Axes from center to outer points */}
          {data.map((_, i) => {
            const { x, y } = getCoordinates(i, 1);
            return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#CBD5E1" strokeWidth="1.5" />;
          })}

          {/* Data Filled Polygon */}
          {hasAnyAttempt && (
            <polygon
              points={dataPoints}
              fill="rgba(59, 130, 246, 0.25)"
              stroke="#2563EB"
              strokeWidth="3"
            />
          )}

          {/* Data Points Dots & Labels */}
          {data.map((d, i) => {
            const ratio = Math.max(0.05, Math.min(1, d.score / d.fullMark));
            const pt = getCoordinates(i, ratio);
            const labelPt = getCoordinates(i, 1.35);

            return (
              <g key={i}>
                {hasAnyAttempt && (
                  <circle cx={pt.x} cy={pt.y} r="4.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                )}
                <text
                  x={labelPt.x}
                  y={labelPt.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[10px] sm:text-[11px] font-bold fill-slate-700"
                >
                  {d.subject} ({d.score}%)
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="text-xs text-slate-500 text-center mt-2">
        {hasAnyAttempt
          ? 'พื้นที่สีฟ้าแสดงระดับความเชี่ยวชาญปัจจุบัน ยิ่งขยายเต็มวงกลมยิ่งมีความพร้อมสูง'
          : 'ทำแบบฝึกหัดและจำลองสอบเพื่อเริ่มสร้างแผนภาพสมรรถนะเฉพาะบุคคล'}
      </p>
    </div>
  );
};
