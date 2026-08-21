'use client';

import { TrendingUp, BarChart2 } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { VENDOR_SCORE_TREND, VULNERABILITY_TREND } from '@/lib/riskyTechData';

export default function RiskyTechCharts() {
  return (
    <section id="vendor-comparison" className="py-16 bg-white border-b border-[#e5e7eb]">
      <div className="container-site">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0165FC] tracking-wider uppercase mb-2">
            <BarChart2 size={14} />
            <span>Quarterly Trends & Analytics</span>
          </div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0a0a0b] tracking-tight">
            How the Barbon Risk Index has evolved
          </h2>
          <p className="text-[16px] text-[#6b7280] mt-2">
            Historical progression of tech risk vulnerability severity and vendor exploit density over the past 5 quarters (Q2 2025 – Q2 2026).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Chart 1: Average Vendor Score */}
          <div className="p-6 md:p-8 bg-[#f8fafc] border border-[#e5e7eb] rounded-2xl shadow-xs">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[18px] font-bold text-[#0a0a0b]">
                  Average Vendor Score Over Time
                </h3>
                <p className="text-[14px] text-[#6b7280] mt-1">
                  In the past quarter, the average vendor score in the Barbon Risk Index increased <strong className="text-[#0a0a0b] font-semibold">11%</strong>.
                </p>
              </div>
              <div className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-semibold text-[12px] rounded-full flex items-center gap-1 shrink-0">
                <TrendingUp size={12} />
                +11% Q/Q
              </div>
            </div>

            <div className="h-[280px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={VENDOR_SCORE_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0165FC" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0165FC" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="period" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} domain={[0.1, 0.3]} tickFormatter={(val) => val.toFixed(3)} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                    labelStyle={{ color: '#94a3b8', fontSize: '12px', fontWeight: 'bold' }}
                    formatter={(value: any) => [`${value}`, 'Average Score']}
                  />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#0165FC"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#scoreGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Contributing Vulnerabilities */}
          <div className="p-6 md:p-8 bg-[#f8fafc] border border-[#e5e7eb] rounded-2xl shadow-xs">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[18px] font-bold text-[#0a0a0b]">
                  Contributing Vulnerabilities Over Time
                </h3>
                <p className="text-[14px] text-[#6b7280] mt-1">
                  In the past quarter, the number of contributing vulnerabilities in the Barbon Risk Index increased <strong className="text-[#0a0a0b] font-semibold">18%</strong>.
                </p>
              </div>
              <div className="px-2.5 py-1 bg-amber-50 text-amber-700 font-semibold text-[12px] rounded-full flex items-center gap-1 shrink-0">
                <TrendingUp size={12} />
                +18% Q/Q
              </div>
            </div>

            <div className="h-[280px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={VULNERABILITY_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="period" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis
                    stroke="#64748b"
                    fontSize={12}
                    domain={[30000, 65000]}
                    tickFormatter={(val) => `${(val / 1000).toFixed(0)}K`}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                    labelStyle={{ color: '#94a3b8', fontSize: '12px', fontWeight: 'bold' }}
                    formatter={(value: any) => [`${value.toLocaleString()}`, 'Vulnerabilities']}
                  />
                  <Bar dataKey="count" fill="#0f172a" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
