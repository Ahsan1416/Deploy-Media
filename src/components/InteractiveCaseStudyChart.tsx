"use client";

import { useState } from "react";
import { 
  TrendingUp, 
  BarChart3, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export interface ChartDataPoint {
  month: string;
  spend: number;
  metric1: number; // e.g. Pipeline Value ($)
  metric2: number; // e.g. MQLs or Demos
  cpa: number;
}

interface InteractiveCaseStudyChartProps {
  platformName?: string;
  accountName?: string;
  platformColor?: string;
  metric1Label?: string;
  metric2Label?: string;
  totalSpend?: string;
  totalMetric2?: string;
  costPerMetric2?: string;
  totalMetric1?: string;
  data?: ChartDataPoint[];
}

const defaultData: ChartDataPoint[] = [
  { month: "Jun", spend: 4000, metric1: 38000, metric2: 24, cpa: 166.67 },
  { month: "Jul", spend: 9500, metric1: 54000, metric2: 48, cpa: 197.91 },
  { month: "Aug", spend: 16000, metric1: 66000, metric2: 68, cpa: 235.29 },
  { month: "Sep", spend: 28000, metric1: 94000, metric2: 82, cpa: 341.46 },
  { month: "Oct", spend: 42000, metric1: 110000, metric2: 92, cpa: 456.52 },
  { month: "Nov", spend: 50000, metric1: 133000, metric2: 123, cpa: 406.50 },
];

export default function InteractiveCaseStudyChart({
  platformName = "LinkedIn Campaign Manager",
  accountName = "Acme Corp SaaS",
  metric1Label = "Pipeline ($)",
  metric2Label = "MQLs",
  totalSpend = "$50,000",
  totalMetric2 = "437",
  costPerMetric2 = "$114.41",
  totalMetric1 = "$495,000",
  data = defaultData,
}: InteractiveCaseStudyChartProps) {
  // Default active index to October (index 4) matching user's screenshot
  const [activeIdx, setActiveIdx] = useState<number | null>(4);

  // SVG dimensions for responsive coordinate mapping
  const width = 800;
  const height = 280;
  const paddingX = 60;
  const paddingY = 40;

  // Max values for scale
  const maxMetric1 = 140000;
  const maxMetric2 = 130;

  // Helper coordinate calculators
  const getX = (idx: number) => {
    return paddingX + (idx / (data.length - 1)) * (width - paddingX * 2);
  };

  const getYMetric1 = (val: number) => {
    const usableH = height - paddingY * 2;
    return height - paddingY - (val / maxMetric1) * usableH;
  };

  const getYMetric2 = (val: number) => {
    const usableH = height - paddingY * 2;
    return height - paddingY - (val / maxMetric2) * usableH;
  };

  // Build SVG Path strings with smooth cubic bezier curve
  const buildSmoothPath = (getYFunc: (val: number) => number) => {
    return data.reduce((acc, point, i) => {
      const x = getX(i);
      const y = getYFunc(i === 0 ? point.metric1 : (getYFunc === getYMetric1 ? point.metric1 : point.metric2));
      if (i === 0) return `M ${x} ${y}`;
      const prevX = getX(i - 1);
      const prevY = getYFunc(getYFunc === getYMetric1 ? data[i - 1].metric1 : data[i - 1].metric2);
      const cx1 = prevX + (x - prevX) / 2;
      const cy1 = prevY;
      const cx2 = prevX + (x - prevX) / 2;
      const cy2 = y;
      return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`;
    }, "");
  };

  const path1 = buildSmoothPath(getYMetric1);
  const path2 = buildSmoothPath(getYMetric2);

  // Area paths for rich neon glows
  const firstX = getX(0);
  const lastX = getX(data.length - 1);
  const bottomY = height - paddingY;
  const areaPath1 = `${path1} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;

  const activePoint = activeIdx !== null ? data[activeIdx] : data[4];
  const activeX = activeIdx !== null ? getX(activeIdx) : getX(4);
  const activeY1 = activeIdx !== null ? getYMetric1(activePoint.metric1) : getYMetric1(data[4].metric1);
  const activeY2 = activeIdx !== null ? getYMetric2(activePoint.metric2) : getYMetric2(data[4].metric2);

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden font-sans text-white">
      {/* 1. Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center font-bold text-white text-sm shadow-sm select-none">
            in
          </div>
          <div>
            <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
              <span>{platformName}</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Attribution
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
            Account: <strong className="text-slate-200">{accountName}</strong>
          </span>
        </div>
      </div>

      {/* 2. Top Metric Tiles (Interactively responsive to hovered month) */}
      <div className="p-4 sm:p-6 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* Tile 1: Total Spend */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/30 transition-all">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {activeIdx !== null ? `${activePoint.month} Spend` : "Total Spend"}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              {activeIdx !== null ? `$${activePoint.spend.toLocaleString()}` : totalSpend}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              Target Capped
            </div>
          </div>

          {/* Tile 2: MQLs Generated */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/30 transition-all">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {activeIdx !== null ? `${activePoint.month} ${metric2Label}` : `${metric2Label} Generated`}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 tracking-tight">
              {activeIdx !== null ? activePoint.metric2 : totalMetric2}
            </div>
            <div className="text-[10px] text-emerald-400/80 mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>CRM Verified</span>
            </div>
          </div>

          {/* Tile 3: Cost Per MQL */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/30 transition-all">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {activeIdx !== null ? `${activePoint.month} Cost/Lead` : `Cost Per ${metric2Label}`}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              {activeIdx !== null ? `$${activePoint.cpa.toFixed(2)}` : costPerMetric2}
            </div>
            <div className="text-[10px] text-sky-400 mt-0.5">
              -38% Reduction
            </div>
          </div>

          {/* Tile 4: Pipeline Value */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/30 transition-all">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {activeIdx !== null ? `${activePoint.month} ${metric1Label}` : "Pipeline Value"}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 mt-1 tracking-tight">
              {activeIdx !== null ? `$${activePoint.metric1.toLocaleString()}` : totalMetric1}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              Closed Deals Synced
            </div>
          </div>

        </div>
      </div>

      {/* 3. Interactive SVG Dual-Line Chart with Live Tooltip */}
      <div className="px-3 sm:px-6 py-4 relative">
        
        {/* Metric Legend & Toggle Help */}
        <div className="flex items-center justify-between text-xs px-2 mb-2 text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span>{metric1Label} (Left Axis)</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>{metric2Label} (Right Axis)</span>
            </span>
          </div>
          <div className="hidden sm:inline-flex text-[11px] text-slate-400 italic">
            Hover points to inspect live monthly breakdown
          </div>
        </div>

        {/* Chart Viewport */}
        <div className="relative w-full overflow-hidden select-none">
          
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible cursor-crosshair"
          >
            <defs>
              <linearGradient id="pipelineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </linearGradient>

              <linearGradient id="mqlGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Horizontal Grid Lines */}
            {[0, 35000, 70000, 105000, 140000].map((val) => {
              const y = getYMetric1(val);
              const mqlVal = Math.round((val / maxMetric1) * maxMetric2);
              return (
                <g key={val}>
                  <line
                    x1={paddingX}
                    y1={y}
                    x2={width - paddingX}
                    y2={y}
                    stroke="#1e293b"
                    strokeWidth="1"
                    strokeDasharray={val === 0 ? "none" : "3,3"}
                  />
                  {/* Left Y-axis label (Pipeline $) */}
                  <text
                    x={paddingX - 10}
                    y={y + 4}
                    fill="#64748b"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    ${val === 0 ? "0k" : `${val / 1000}k`}
                  </text>
                  {/* Right Y-axis label (MQLs) */}
                  <text
                    x={width - paddingX + 12}
                    y={y + 4}
                    fill="#64748b"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="start"
                  >
                    {mqlVal}
                  </text>
                </g>
              );
            })}

            {/* Area Fill Under Pipeline Curve */}
            <path d={areaPath1} fill="url(#pipelineGrad)" />

            {/* Curve 1: Pipeline Value ($) - Sky Blue */}
            <path
              d={path1}
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            <path
              d={path1}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Curve 2: MQLs - Emerald Green */}
            <path
              d={path2}
              fill="none"
              stroke="#059669"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            <path
              d={path2}
              fill="none"
              stroke="#34d399"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Data Points on Curves */}
            {data.map((point, idx) => {
              const x = getX(idx);
              const y1 = getYMetric1(point.metric1);
              const y2 = getYMetric2(point.metric2);
              const isSelected = activeIdx === idx;

              return (
                <g key={point.month}>
                  {/* Point for Curve 1 */}
                  <circle
                    cx={x}
                    cy={y1}
                    r={isSelected ? "6" : "4"}
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth={isSelected ? "2.5" : "1.5"}
                    className="transition-all duration-200"
                  />
                  {/* Point for Curve 2 */}
                  <circle
                    cx={x}
                    cy={y2}
                    r={isSelected ? "6" : "4"}
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth={isSelected ? "2.5" : "1.5"}
                    className="transition-all duration-200"
                  />

                  {/* X-axis Month Label */}
                  <text
                    x={x}
                    y={height - paddingY + 22}
                    fill={isSelected ? "#38bdf8" : "#94a3b8"}
                    fontSize="11"
                    fontWeight={isSelected ? "bold" : "normal"}
                    fontFamily="sans-serif"
                    textAnchor="middle"
                  >
                    {point.month}
                  </text>
                </g>
              );
            })}

            {/* Active Vertical Guideline Cursor Line */}
            {activeIdx !== null && (
              <g>
                <line
                  x1={activeX}
                  y1={paddingY - 10}
                  x2={activeX}
                  y2={height - paddingY}
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="2,2"
                  className="transition-all duration-150 pointer-events-none"
                />
                {/* Active Outer Glow Rings */}
                <circle
                  cx={activeX}
                  cy={activeY1}
                  r="9"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  opacity="0.8"
                  className="animate-ping"
                />
                <circle
                  cx={activeX}
                  cy={activeY2}
                  r="9"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  opacity="0.8"
                  className="animate-ping"
                />
              </g>
            )}

            {/* Invisible Large Hover Columns for Smooth Interactive Scrubbing */}
            {data.map((point, idx) => {
              const colW = (width - paddingX * 2) / (data.length - 1);
              const colX = getX(idx) - colW / 2;
              return (
                <rect
                  key={idx}
                  x={colX}
                  y={paddingY}
                  width={colW}
                  height={height - paddingY * 2}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onTouchStart={() => setActiveIdx(idx)}
                />
              );
            })}
          </svg>

          {/* 4. Sleek Floating Detail Tooltip Card on Hover */}
          {activeIdx !== null && (
            <div
              className="absolute z-20 pointer-events-none transition-all duration-150 ease-out"
              style={{
                left: `${(activeX / width) * 100}%`,
                top: `${(Math.min(activeY1, activeY2) / height) * 100}%`,
                transform: activeIdx > 3 
                  ? "translate(-110%, -30%)" 
                  : "translate(15%, -30%)",
              }}
            >
              <div className="rounded-xl bg-slate-950/95 border border-slate-700 p-3 shadow-2xl backdrop-blur-md min-w-[170px] text-xs space-y-1.5 font-sans">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="font-bold text-white text-sm">
                    {activePoint.month} Performance
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Verified
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>{metric1Label}:</span>
                  </span>
                  <span className="font-bold text-white">
                    ${activePoint.metric1.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{metric2Label}:</span>
                  </span>
                  <span className="font-bold text-emerald-400">
                    {activePoint.metric2}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-400 border-t border-slate-800 pt-1 text-[11px]">
                  <span>Spend:</span>
                  <span className="font-semibold text-slate-200">
                    ${activePoint.spend.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Effective CPA:</span>
                  <span className="font-semibold text-sky-300">
                    ${activePoint.cpa.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 5. Bottom Interactive Scrubber Buttons */}
        <div className="mt-3 pt-3 border-t border-slate-900 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 text-[11px] mr-1">Select Month:</span>
            {data.map((point, idx) => (
              <button
                key={point.month}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-sans transition-all ${
                  activeIdx === idx
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/30 scale-105"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {point.month}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Ad Spend Target: <strong>$50,000/mo</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}
