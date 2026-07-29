'use client';

import { Search, Bell, Filter, Download, ChevronDown, TrendingUp, TrendingDown, Eye } from 'lucide-react';

const organizations = [
  { id: 'ORG-2024-0291', name: 'Acacia Holdings Ltd',    sector: 'Financial Services', score: '82',  status: 'Stable',   trend: 'Improving', risk: 'Low'    },
  { id: 'ORG-2024-0287', name: 'Meridian Corp',           sector: 'Technology',         score: '54',  status: 'Elevated', trend: 'Declining', risk: 'High'   },
  { id: 'ORG-2024-0281', name: 'Rho Transport Group',     sector: 'Logistics',          score: '71',  status: 'Stable',   trend: 'Stable',    risk: 'Medium' },
  { id: 'ORG-2024-0276', name: 'Port Logistics Ltd',      sector: 'Maritime',           score: '48',  status: 'Critical', trend: 'Declining', risk: 'High'   },
  { id: 'ORG-2024-0264', name: 'Greenfield Holdings',     sector: 'Real Estate',        score: '89',  status: 'Stable',   trend: 'Improving', risk: 'Low'    },
  { id: 'ORG-2024-0258', name: 'SkyTravel PLC',           sector: 'Travel',             score: '67',  status: 'Stable',   trend: 'Stable',    risk: 'Medium' },
  { id: 'ORG-2024-0251', name: 'Helix Pharma',            sector: 'Healthcare',         score: '61',  status: 'Elevated', trend: 'Improving', risk: 'Medium' },
];

const statusStyles: Record<string, string> = {
  Stable:   'bg-[#ecfdf5] text-[#059669]',
  Elevated: 'bg-[#fffbeb] text-[#b45309]',
  Critical: 'bg-[#fef2f2] text-[#dc2626]',
};

const trendStyles: Record<string, string> = {
  Improving: 'text-[#059669]',
  Stable:    'text-[#b45309]',
  Declining: 'text-[#dc2626]',
};

const summaryCards = [
  { label: 'Portfolio Risk Score', value: '74 / 100', change: '+5.1pts',  up: true  },
  { label: 'Monitored Organizations', value: '147',   change: '+9.7%',   up: true  },
  { label: 'Posture Improving',   value: '70.3%',     change: '+7.1pp',  up: true  },
  { label: 'Active Threat Signals', value: '1,794',   change: '-15.1%',  up: false },
];

export default function DashboardSection() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="dashboard-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Risk Intelligence Platform
          </p>
          <h2
            id="dashboard-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Built for the underwriters
            <br />
            who decide.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Every signal from every corner of an organization&apos;s technology environment - transformed into insurance intelligence. Risk scores, posture trends, and
            threat indicators in one structured view.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div
          className="rounded-[8px] border border-[#e5e7eb] overflow-hidden shadow-sm"
          aria-label="Risk intelligence dashboard demonstration"
          role="img"
        >
          {/* Window chrome */}
          <div className="bg-[#f7f8fa] border-b border-[#e5e7eb] px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#e5e7eb]" />
              <span className="w-3 h-3 rounded-full bg-[#e5e7eb]" />
              <span className="w-3 h-3 rounded-full bg-[#e5e7eb]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-[4px] px-3 py-1 text-[11px] text-[#9ca3af]">
                <span>🔒</span>
                app.barbon.tech/risk-intelligence
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0165FC] flex items-center justify-center text-white text-[9px] font-bold">SP</div>
              <Bell size={13} className="text-[#9ca3af]" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-white p-6 space-y-5">
            {/* Summary metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {summaryCards.map((card) => (
                <div key={card.label} className="border border-[#e5e7eb] rounded-[6px] p-4">
                  <p className="text-[11px] text-[#9ca3af] mb-1.5">{card.label}</p>
                  <p className="text-[22px] font-bold text-[#0a0a0b] leading-none mb-1.5">{card.value}</p>
                  <div className={`flex items-center gap-1 text-[11px] font-medium ${card.up ? 'text-[#059669]' : 'text-[#dc2626]'}`}>
                    {card.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                    {card.change} vs prior period
                  </div>
                </div>
              ))}
            </div>

            {/* Table toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-[14px] font-semibold text-[#0a0a0b]">Organization Risk Register</h3>
                <p className="text-[12px] text-[#9ca3af]">147 organizations · Showing 7</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2 bg-[#f7f8fa] border border-[#e5e7eb] rounded-[5px] px-3 py-1.5">
                  <Search size={12} className="text-[#9ca3af]" />
                  <span className="text-[12px] text-[#9ca3af]">Search organizations...</span>
                </div>
                <button type="button" className="flex items-center gap-1.5 text-[12px] text-[#6b7280] border border-[#e5e7eb] px-3 py-1.5 rounded-[5px] hover:bg-[#f7f8fa] transition-colors">
                  <Filter size={12} />
                  Filter
                  <ChevronDown size={10} />
                </button>
                <button type="button" className="flex items-center gap-1.5 text-[12px] text-[#6b7280] border border-[#e5e7eb] px-3 py-1.5 rounded-[5px] hover:bg-[#f7f8fa] transition-colors">
                  <Download size={12} />
                  Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]" aria-label="Organization risk register table">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Org ID</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Organization</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4 hidden md:table-cell">Sector</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Risk Score</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Status</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4 hidden lg:table-cell">Risk Level</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 hidden lg:table-cell">Posture Trend</th>
                    <th scope="col" className="sr-only">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f7f8fa]">
                  {organizations.map((org) => (
                    <tr key={org.id} className="group hover:bg-[#f7f8fa] transition-colors">
                      <td className="py-2.5 pr-4">
                        <span className="font-mono text-[11px] text-[#6b7280]">{org.id}</span>
                      </td>
                      <td className="py-2.5 pr-4 font-medium text-[#0a0a0b]">{org.name}</td>
                      <td className="py-2.5 pr-4 text-[#6b7280] hidden md:table-cell">{org.sector}</td>
                      <td className="py-2.5 pr-4 font-semibold text-[#0a0a0b]">{org.score} / 100</td>
                      <td className="py-2.5 pr-4">
                        <span className={`text-[10px] px-2 py-0.5 rounded-[3px] font-medium ${statusStyles[org.status]}`}>
                          {org.status}
                        </span>
                      </td>
                      <td className="py-2.5 pr-4 font-medium text-[12px] hidden lg:table-cell text-[#6b7280]">
                        {org.risk}
                      </td>
                      <td className={`py-2.5 font-medium hidden lg:table-cell ${trendStyles[org.trend]}`}>{org.trend}</td>
                      <td className="py-2.5">
                        <button type="button" className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white transition-all" aria-label={`View organization ${org.id}`}>
                          <Eye size={12} className="text-[#6b7280]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-2 border-t border-[#e5e7eb]">
              <p className="text-[11px] text-[#9ca3af]">Showing 1–7 of 147</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 21].map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`w-6 h-6 text-[10px] rounded flex items-center justify-center ${
                      p === 1
                        ? 'bg-[#0165FC] text-white font-semibold'
                        : 'text-[#6b7280] hover:bg-[#f7f8fa] transition-colors'
                    }`}
                    aria-label={typeof p === 'number' ? `Page ${p}` : 'More pages'}
                    aria-current={p === 1 ? 'page' : undefined}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
