/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Award, Compass, Heart, Shield, Landmark, Flame } from 'lucide-react';

interface ChartBarData {
  year: string;
  co2Offset: number; // in thousand tons
  treesPlanted: number; // in millions
}

const BAR_DATA: ChartBarData[] = [
  { year: '2020', co2Offset: 12.4, treesPlanted: 1.2 },
  { year: '2021', co2Offset: 22.8, treesPlanted: 2.1 },
  { year: '2022', co2Offset: 38.5, treesPlanted: 3.5 },
  { year: '2023', co2Offset: 54.2, treesPlanted: 4.8 },
  { year: '2024', co2Offset: 72.1, treesPlanted: 6.5 },
  { year: '2025', co2Offset: 85.0, treesPlanted: 7.8 },
];

interface DonutData {
  id: string;
  label: string;
  value: number; // percentage
  color: string;
  icon: string;
}

const DONUT_DATA: DonutData[] = [
  { id: 'forestry', label: 'Forest Reforestation', value: 40, color: '#6ced15', icon: '🌿' },
  { id: 'marine', label: 'Marine & Coast Protection', value: 35, color: '#5AB6E6', icon: '🌊' },
  { id: 'renewable', label: 'Renewable Power Transition', value: 15, color: '#F2C94C', icon: '⚡' },
  { id: 'lobbying', label: 'Lobbying & Advocacy', value: 10, color: '#ff0d72', icon: '📢' },
];

export default function ImpactCharts() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null);

  // SVG dimensions for Bar Chart
  const svgWidth = 500;
  const svgHeight = 260;
  const paddingX = 40;
  const paddingY = 45;
  const graphWidth = svgWidth - paddingX * 2;
  const graphHeight = svgHeight - paddingY * 2;

  // Max value calculation for scale
  const maxVal = 100;

  // Donut values
  let cumulativePercent = 0;
  const donutRadius = 70;
  const donutStrokeWidth = 24;
  const donutCircumference = 2 * Math.PI * donutRadius;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Bar Chart Panel (Columns: 7) */}
      <div className="lg:col-span-7 bg-white border border-light-grey rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="font-bold text-primary-dark text-base flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-lime inline-block" />
              Annual Conservation Scaling
            </h4>
            <p className="text-xs text-primary-dark/60 mt-0.5">CO₂ offset in thousand tons annually</p>
          </div>
          {hoveredBar !== null ? (
            <div className="bg-primary-light/15 border border-primary-light/25 px-3 py-1 rounded-xl text-xs font-semibold text-primary-light animate-fade-in shrink-0">
              {BAR_DATA[hoveredBar].year}: <strong className="font-bold">{BAR_DATA[hoveredBar].co2Offset}k Tons</strong> CO₂ offset
            </div>
          ) : (
            <div className="text-[11px] text-primary-dark/40 font-bold border border-light-grey px-2.5 py-1 rounded-xl uppercase shrink-0">
              Hover bars for audit metrics
            </div>
          )}
        </div>

        {/* Bar chart SVG */}
        <div className="relative w-full overflow-x-auto">
          <svg 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            className="w-full min-w-[380px] h-auto font-sans text-[10px] text-primary-dark/50"
          >
            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map((tick) => {
              const y = paddingY + graphHeight - (tick / maxVal) * graphHeight;
              return (
                <g key={tick} className="opacity-40">
                  <line 
                    x1={paddingX} 
                    y1={y} 
                    x2={svgWidth - paddingX} 
                    y2={y} 
                    stroke="#e5e7eb" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                  />
                  <text x={paddingX - 10} y={y + 3} textAnchor="end" className="font-semibold text-[9px] fill-primary-dark/40">
                    {tick}k
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {BAR_DATA.map((item, idx) => {
              const barWidth = 32;
              const spacing = graphWidth / BAR_DATA.length;
              const x = paddingX + idx * spacing + (spacing - barWidth) / 2;
              const barHeight = (item.co2Offset / maxVal) * graphHeight;
              const y = paddingY + graphHeight - barHeight;
              const isHovered = hoveredBar === idx;

              return (
                <g 
                  key={item.year}
                  onMouseEnter={() => setHoveredBar(idx)}
                  onMouseLeave={() => setHoveredBar(null)}
                  className="cursor-pointer"
                >
                  {/* Subtle hover backdrop glow */}
                  {isHovered && (
                    <rect 
                      x={x - 6} 
                      y={paddingY} 
                      width={barWidth + 12} 
                      height={graphHeight} 
                      fill="#ff0d72" 
                      fillOpacity="0.04" 
                      rx="8"
                    />
                  )}

                  {/* Main bar */}
                  <rect 
                    x={x} 
                    y={y} 
                    width={barWidth} 
                    height={Math.max(barHeight, 4)} 
                    fill={isHovered ? '#ff0d72' : '#6ced15'} 
                    rx="6" 
                    className="transition-all duration-300"
                  />

                  {/* Highlight core dot for hover */}
                  {isHovered && (
                    <circle 
                      cx={x + barWidth / 2} 
                      cy={y} 
                      r="4" 
                      fill="#F2C94C" 
                    />
                  )}

                  {/* Value text above bar */}
                  <text 
                    x={x + barWidth / 2} 
                    y={y - 8} 
                    textAnchor="middle" 
                    className={`font-bold text-[9px] ${isHovered ? 'fill-primary-light scale-105' : 'fill-primary-dark/70'}`}
                  >
                    {item.co2Offset}k
                  </text>

                  {/* Year labels on X Axis */}
                  <text 
                    x={x + barWidth / 2} 
                    y={paddingY + graphHeight + 18} 
                    textAnchor="middle" 
                    className={`text-[11px] font-semibold ${isHovered ? 'fill-primary-light font-bold' : 'fill-primary-dark/60'}`}
                  >
                    {item.year}
                  </text>
                </g>
              );
            })}

            {/* Base line */}
            <line 
              x1={paddingX} 
              y1={paddingY + graphHeight} 
              x2={svgWidth - paddingX} 
              y2={paddingY + graphHeight} 
              stroke="#cbd5e1" 
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="flex gap-6 mt-4 pt-4 border-t border-light-grey text-[11px] font-semibold text-primary-dark/60 justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-primary-lime inline-block" />
            <span>Trees Planted Count (1M+ in 2025)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-primary-light inline-block" />
            <span>Metric Carbon Equivalencies</span>
          </div>
        </div>

      </div>

      {/* Donut Chart Panel (Columns: 5) */}
      <div className="lg:col-span-5 bg-white border border-light-grey rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
        
        <div>
          <h4 className="font-bold text-primary-dark text-base flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue inline-block" />
            Resource Allocation Blueprint
          </h4>
          <p className="text-xs text-primary-dark/60 mt-0.5">Where your donations generate field results</p>
        </div>

        {/* Concentric Donut SVG Layout */}
        <div className="flex flex-col sm:flex-row items-center gap-6 my-6">
          <div className="relative w-40 h-40 shrink-0">
            <svg viewBox="0 0 160 160" className="w-full h-full transform -rotate-90">
              {/* Donut pieces */}
              {DONUT_DATA.map((slice) => {
                const percent = slice.value;
                const dashArray = (percent / 100) * donutCircumference;
                const dashOffset = donutCircumference - (cumulativePercent / 100) * donutCircumference;
                cumulativePercent += percent;

                const isHovered = hoveredSlice === slice.id;

                return (
                  <circle
                    key={slice.id}
                    cx="80"
                    cy="80"
                    r={donutRadius}
                    fill="none"
                    stroke={slice.color}
                    strokeWidth={isHovered ? donutStrokeWidth + 4 : donutStrokeWidth}
                    strokeDasharray={donutCircumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    onMouseEnter={() => setHoveredSlice(slice.id)}
                    onMouseLeave={() => setHoveredSlice(null)}
                    className="transition-all duration-300 cursor-pointer"
                  />
                );
              })}
            </svg>

            {/* Inner overlay details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
              {hoveredSlice ? (
                (() => {
                  const slice = DONUT_DATA.find(s => s.id === hoveredSlice)!;
                  return (
                    <div className="animate-fade-in">
                      <div className="text-xl select-none leading-none">{slice.icon}</div>
                      <div className="text-lg font-black text-primary-dark mt-0.5">{slice.value}%</div>
                      <div className="text-[9px] uppercase tracking-wider font-extrabold text-primary-dark/50 truncate max-w-[100px]">
                        {slice.label.split(' ')[0]}
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div>
                  <div className="text-[9px] uppercase tracking-widest font-extrabold text-primary-dark/50">Total Budget</div>
                  <div className="text-lg font-black text-primary-dark leading-tight">$3.4M</div>
                  <div className="text-[10px] text-secondary-lime font-bold">100% Green</div>
                </div>
              )}
            </div>
          </div>

          {/* Legends */}
          <div className="space-y-2.5 w-full">
            {DONUT_DATA.map((slice) => {
              const isHovered = hoveredSlice === slice.id;
              return (
                <div 
                  key={slice.id}
                  onMouseEnter={() => setHoveredSlice(slice.id)}
                  onMouseLeave={() => setHoveredSlice(null)}
                  className={`flex items-center justify-between p-1.5 rounded-xl transition-all cursor-pointer ${
                    isHovered ? 'bg-light-grey' : 'hover:bg-light-grey/40'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary-dark/85">
                    <span className="text-base select-none">{slice.icon}</span>
                    <span className={isHovered ? 'text-primary-light font-bold' : ''}>{slice.label}</span>
                  </div>
                  <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
                    isHovered ? 'bg-primary-dark text-white' : 'text-primary-dark/70'
                  }`}>
                    {slice.value}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info seal */}
        <div className="bg-light-grey/45 border border-light-grey rounded-2xl p-4 flex items-center gap-3">
          <Landmark className="w-5 h-5 text-primary-light shrink-0" />
          <p className="text-[10px] text-primary-dark/70 leading-normal font-semibold">
            All financials are fully audited, meeting international standards of NGO transparency. 85% of all funds map directly into field programs.
          </p>
        </div>

      </div>

    </div>
  );
}
