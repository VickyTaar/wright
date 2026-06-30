'use client';

import { Search, Bell, Filter, Download, ChevronDown, TrendingUp, TrendingDown, Eye } from 'lucide-react';

const policies = [
  { id: 'POL-2024-48291', holder: 'Acacia Holdings Ltd', type: 'Commercial Property', premium: '$124,000', status: 'Active', expires: '31 Dec 2024', risk: 'Low' },
  { id: 'POL-2024-48285', holder: 'Meridian Corp', type: 'Fire & Allied Perils', premium: '$89,500', status: 'Active', expires: '15 Nov 2024', risk: 'Medium' },
  { id: 'POL-2024-48279', holder: 'Rho Transport Group', type: 'Fleet Motor', premium: '$54,200', status: 'Renewal Due', expires: '12 Jul 2024', risk: 'Low' },
  { id: 'POL-2024-48271', holder: 'Port Logistics Ltd', type: 'Marine Cargo', premium: '$210,000', status: 'Active', expires: '28 Feb 2025', risk: 'High' },
  { id: 'POL-2024-48264', holder: 'Greenfield Farms', type: 'Agriculture', premium: '$38,700', status: 'Active', expires: '30 Jun 2025', risk: 'Medium' },
  { id: 'POL-2024-48258', holder: 'SkyTravel PLC', type: 'Travel Group', premium: '$22,100', status: 'Lapsed', expires: '01 May 2024', risk: 'Low' },
  { id: 'POL-2024-48251', holder: 'Helix Pharma', type: 'Product Liability', premium: '$175,000', status: 'Active', expires: '31 Aug 2025', risk: 'High' },
];

const statusStyles: Record<string, string> = {
  Active: 'bg-[#ecfdf5] text-[#059669]',
  'Renewal Due': 'bg-[#fffbeb] text-[#b45309]',
  Lapsed: 'bg-[#fef2f2] text-[#dc2626]',
};

const riskStyles: Record<string, string> = {
  Low: 'text-[#059669]',
  Medium: 'text-[#b45309]',
  High: 'text-[#dc2626]',
};

const summaryCards = [
  { label: 'Total Premium GWP', value: '$18.4M', change: '+12.3%', up: true },
  { label: 'Active Policies', value: '24,819', change: '+3.2%', up: true },
  { label: 'Renewal Rate', value: '87.4%', change: '+1.8pp', up: true },
  { label: 'Average Premium', value: '$740', change: '-2.1%', up: false },
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
            Policy Administration
          </p>
          <h2
            id="dashboard-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Built for the teams
            <br />
            who run the business.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Barbon OS puts every policy, claim, and customer in one place — with
            role-based views, audit trails, and the performance to handle
            enterprise-scale portfolios without compromise.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div
          className="rounded-[8px] border border-[#e5e7eb] overflow-hidden shadow-sm"
          aria-label="Policy administration dashboard demonstration"
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
                app.barbonos.io/policies
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0165FC] flex items-center justify-center text-white text-[9px] font-bold">AK</div>
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
                <h3 className="text-[14px] font-semibold text-[#0a0a0b]">Policy Register</h3>
                <p className="text-[12px] text-[#9ca3af]">24,819 policies · Showing 7</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2 bg-[#f7f8fa] border border-[#e5e7eb] rounded-[5px] px-3 py-1.5">
                  <Search size={12} className="text-[#9ca3af]" />
                  <span className="text-[12px] text-[#9ca3af]">Search policies...</span>
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
              <table className="w-full text-[12px]" aria-label="Policy register table">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Policy ID</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Policyholder</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4 hidden md:table-cell">Type</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Premium</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4">Status</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 pr-4 hidden lg:table-cell">Risk</th>
                    <th scope="col" className="text-left text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider pb-2 hidden lg:table-cell">Expires</th>
                    <th scope="col" className="sr-only">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f7f8fa]">
                  {policies.map((p) => (
                    <tr key={p.id} className="group hover:bg-[#f7f8fa] transition-colors">
                      <td className="py-2.5 pr-4">
                        <span className="font-mono text-[11px] text-[#6b7280]">{p.id}</span>
                      </td>
                      <td className="py-2.5 pr-4 font-medium text-[#0a0a0b]">{p.holder}</td>
                      <td className="py-2.5 pr-4 text-[#6b7280] hidden md:table-cell">{p.type}</td>
                      <td className="py-2.5 pr-4 font-semibold text-[#0a0a0b]">{p.premium}</td>
                      <td className="py-2.5 pr-4">
                        <span className={`text-[10px] px-2 py-0.5 rounded-[3px] font-medium ${statusStyles[p.status]}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className={`py-2.5 pr-4 font-medium text-[12px] hidden lg:table-cell ${riskStyles[p.risk]}`}>
                        {p.risk}
                      </td>
                      <td className="py-2.5 text-[#6b7280] hidden lg:table-cell">{p.expires}</td>
                      <td className="py-2.5">
                        <button type="button" className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white transition-all" aria-label={`View policy ${p.id}`}>
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
              <p className="text-[11px] text-[#9ca3af]">Showing 1–7 of 24,819</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 3545].map((p, i) => (
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

        {/* Note for future screenshot replacement */}
        <p className="text-[11px] text-[#9ca3af] mt-3">
          {/* SCREENSHOT PLACEHOLDER: Replace with /images/screenshots/policy-administration.png (1440×900) */}
        </p>
      </div>
    </section>
  );
}
