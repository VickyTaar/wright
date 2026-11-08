import React from 'react';

const portfolioAccounts = [
  { id: 'ORG-0291', name: 'Acacia Holdings Ltd', sector: 'Financial Services', score: 82, rating: 'A (Low Risk)', trend: 'Improving (+4)', action: 'Standard Renewal' },
  { id: 'ORG-0287', name: 'Meridian Corp', sector: 'Technology & Cloud', score: 54, rating: 'C (Elevated)', trend: 'Declining (-8)', action: 'Endorsement Review' },
  { id: 'ORG-0281', name: 'Rho Transport Group', sector: 'Logistics & Marine', score: 71, rating: 'B (Moderate)', trend: 'Stable', action: 'Standard Terms' },
  { id: 'ORG-0276', name: 'Port Logistics Ltd', sector: 'Infrastructure', score: 48, rating: 'D (Critical)', trend: 'Declining (-12)', action: 'Remediation Required' },
  { id: 'ORG-0264', name: 'Greenfield Holdings', sector: 'Enterprise SaaS', score: 89, rating: 'A (Low Risk)', trend: 'Improving (+2)', action: 'Preferred Pricing' },
];

export default function UnderwritingWorkbench() {
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#D5D2C7] text-[#141413] text-[13px] select-none">
      {/* Workbench Header */}
      <div className="border-b border-[#E5E3DC] bg-[#F4F3EE] px-5 py-3 flex items-center justify-between text-[11px] font-mono text-[#52524E]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[1px] bg-[#0F2537]" />
          <span className="text-[#141413] font-medium tracking-tight">BARBON RISK ENGINE</span>
          <span className="text-[#9E9D96]">/</span>
          <span>UNDERWRITING TELEMETRY</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#767670]">
          <span>PORTFOLIO: 147 ENTITIES</span>
          <span>VALIDATION: CONTINUOUS</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#E5E3DC] divide-x divide-[#E5E3DC]">
        <div className="p-4 bg-[#FFFFFF]">
          <div className="text-[11px] font-mono text-[#767670] uppercase tracking-wider mb-1">Portfolio Risk Index</div>
          <div className="text-[22px] font-serif font-bold text-[#0F2537] leading-none mb-1">74 <span className="text-[13px] font-sans font-normal text-[#767670]">/ 100</span></div>
          <div className="text-[11px] text-[#52524E]">+5.1 pts vs baseline</div>
        </div>
        <div className="p-4 bg-[#FFFFFF]">
          <div className="text-[11px] font-mono text-[#767670] uppercase tracking-wider mb-1">Active Accounts</div>
          <div className="text-[22px] font-serif font-bold text-[#0F2537] leading-none mb-1">147</div>
          <div className="text-[11px] text-[#52524E]">Continuous telemetry</div>
        </div>
        <div className="p-4 bg-[#FFFFFF]">
          <div className="text-[11px] font-mono text-[#767670] uppercase tracking-wider mb-1">Posture Trajectory</div>
          <div className="text-[22px] font-serif font-bold text-[#0F2537] leading-none mb-1">70.3%</div>
          <div className="text-[11px] text-[#52524E]">Improving or stable</div>
        </div>
        <div className="p-4 bg-[#FFFFFF]">
          <div className="text-[11px] font-mono text-[#767670] uppercase tracking-wider mb-1">Active Threat Signals</div>
          <div className="text-[22px] font-serif font-bold text-[#0F2537] leading-none mb-1">1,794</div>
          <div className="text-[11px] text-[#52524E]">-15.1% correlated risk</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-5">
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E5E3DC]">
          <div>
            <div className="font-serif font-semibold text-[15px] text-[#141413]">Underwriting Risk Register</div>
            <div className="text-[11px] text-[#767670]">Live telemetry feed mapped to insurer policy terms</div>
          </div>
          <div className="text-[11px] font-mono text-[#767670] border border-[#E5E3DC] px-2.5 py-1 bg-[#F4F3EE]">
            INDEPENDENT VALIDATION
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" aria-label="Organization Underwriting Register">
            <thead>
              <tr className="border-b border-[#E5E3DC] text-[11px] font-mono uppercase text-[#767670]">
                <th scope="col" className="py-2.5 pr-4 font-normal">Account</th>
                <th scope="col" className="py-2.5 pr-4 font-normal hidden sm:table-cell">Sector</th>
                <th scope="col" className="py-2.5 pr-4 font-normal">Score</th>
                <th scope="col" className="py-2.5 pr-4 font-normal">Rating</th>
                <th scope="col" className="py-2.5 pr-4 font-normal hidden md:table-cell">Trajectory</th>
                <th scope="col" className="py-2.5 font-normal text-right">Underwriting Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F3EE] text-[12.5px]">
              {portfolioAccounts.map((row) => (
                <tr key={row.id} className="hover:bg-[#F9F8F6] transition-colors">
                  <td className="py-3 pr-4">
                    <div className="font-medium text-[#141413]">{row.name}</div>
                    <div className="text-[11px] font-mono text-[#767670]">{row.id}</div>
                  </td>
                  <td className="py-3 pr-4 text-[#52524E] hidden sm:table-cell">{row.sector}</td>
                  <td className="py-3 pr-4 font-mono font-medium text-[#0F2537]">{row.score}</td>
                  <td className="py-3 pr-4">
                    <span className="text-[11px] font-mono px-2 py-0.5 border border-[#E5E3DC] bg-[#F4F3EE] text-[#141413]">
                      {row.rating}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-[#52524E] hidden md:table-cell">{row.trend}</td>
                  <td className="py-3 text-right font-mono text-[11px] text-[#52524E]">
                    {row.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[#E5E3DC] bg-[#F4F3EE] px-5 py-2.5 flex items-center justify-between text-[11px] text-[#767670] font-mono">
        <span>DATA PIPELINE: LIVE INGESTION</span>
        <span>TELEMETRY MODEL: BARBON BESS v2.4</span>
      </div>
    </div>
  );
}

