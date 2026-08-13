'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowUpDown, ShieldAlert, AlertTriangle, Info, Download } from 'lucide-react';
import { RISKY_TECH_VENDORS, VendorRisk } from '@/lib/riskyTechData';

export default function RiskyTechTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortField, setSortField] = useState<'rank' | 'weightedScore' | 'vulnerabilities' | 'exploitabilityScore'>('rank');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: 'rank' | 'weightedScore' | 'vulnerabilities' | 'exploitabilityScore') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false); // default descending for risk scores
    }
  };

  const filteredAndSortedVendors = useMemo(() => {
    let list = RISKY_TECH_VENDORS.filter(
      (v) =>
        v.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    list.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return list;
  }, [searchTerm, sortField, sortAsc]);

  const displayedVendors = isExpanded ? filteredAndSortedVendors : filteredAndSortedVendors.slice(0, 10);

  return (
    <section id="vendor-ranking-table" className="py-12 bg-white border-b border-[#e5e7eb]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#0a0a0b] tracking-tight">
              Risky Tech Vendor Ranking
            </h2>
            <p className="text-[14px] text-[#6b7280] mt-1">
              Showing tech providers mapped via NIST Common Platform Enumeration (CPE) weighted by exploit density.
            </p>
          </div>

          {/* Search bar & Export */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
              <input
                type="text"
                placeholder="Search vendors or tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-[14px] bg-[#f7f8fa] border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0165FC] focus:bg-white transition-all placeholder:text-[#9ca3af]"
              />
            </div>
            <button
              type="button"
              onClick={() => alert('Downloading full 2026 Risky Tech Ranking dataset CSV...')}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 text-[13px] font-medium text-[#0a0a0b] bg-[#f7f8fa] border border-[#e5e7eb] hover:bg-[#e8f0fe] rounded-lg transition-colors shrink-0"
              title="Export CSV dataset"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e5e7eb] text-[12px] font-bold uppercase tracking-wider text-[#475569]">
                  <th className="py-3.5 px-4 md:px-6 w-16">
                    <button
                      type="button"
                      onClick={() => handleSort('rank')}
                      className="flex items-center gap-1 hover:text-[#0165FC] transition-colors"
                    >
                      # <ArrowUpDown size={12} />
                    </button>
                  </th>
                  <th className="py-3.5 px-4 md:px-6">Vendor Name</th>
                  <th className="py-3.5 px-4 md:px-6 hidden md:table-cell">Category</th>
                  <th className="py-3.5 px-4 md:px-6 text-right">
                    <button
                      type="button"
                      onClick={() => handleSort('vulnerabilities')}
                      className="inline-flex items-center gap-1 hover:text-[#0165FC] transition-colors ml-auto"
                    >
                      Vulnerabilities <ArrowUpDown size={12} />
                    </button>
                  </th>
                  <th className="py-3.5 px-4 md:px-6 text-right hidden sm:table-cell">
                    <button
                      type="button"
                      onClick={() => handleSort('exploitabilityScore')}
                      className="inline-flex items-center gap-1 hover:text-[#0165FC] transition-colors ml-auto"
                      title="Exploitability Score (0.0 to 1.0)"
                    >
                      Exploit Score <Info size={12} />
                    </button>
                  </th>
                  <th className="py-3.5 px-4 md:px-6 text-right">
                    <button
                      type="button"
                      onClick={() => handleSort('weightedScore')}
                      className="inline-flex items-center gap-1 hover:text-[#0165FC] transition-colors ml-auto"
                    >
                      Weighted Risk Score <ArrowUpDown size={12} />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-[14px]">
                {displayedVendors.length > 0 ? (
                  displayedVendors.map((item) => (
                    <tr
                      key={item.vendor}
                      className="hover:bg-[#f8fafc] transition-colors group cursor-default"
                    >
                      <td className="py-4 px-4 md:px-6 font-semibold text-[#6b7280]">
                        {item.rank}.
                      </td>
                      <td className="py-4 px-4 md:px-6">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-[#0a0a0b] group-hover:text-[#0165FC] transition-colors">
                            {item.vendor}
                          </span>
                          {item.rank <= 3 && (
                            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 rounded-full">
                              Top Risk
                            </span>
                          )}
                        </div>
                        <div className="text-[12px] text-[#9ca3af] md:hidden mt-0.5">
                          {item.category}
                        </div>
                      </td>
                      <td className="py-4 px-4 md:px-6 text-[#6b7280] hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-right font-mono font-medium text-[#0a0a0b]">
                        {item.vulnerabilities.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-right font-mono text-[#6b7280] hidden sm:table-cell">
                        {item.exploitabilityScore.toFixed(2)}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-right font-mono font-bold text-[#0f172a]">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f1f5f9] border border-[#e2e8f0] rounded-md">
                          {item.weightedScore.toFixed(1)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-[#6b7280]">
                      No technology vendor found matching "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Expand button */}
          <div className="p-4 bg-[#f8fafc] border-t border-[#e5e7eb] flex items-center justify-between">
            <div className="text-[13px] text-[#6b7280]">
              Showing <strong className="text-[#0a0a0b]">{displayedVendors.length}</strong> of{' '}
              <strong className="text-[#0a0a0b]">{filteredAndSortedVendors.length}</strong> ranked vendors
            </div>
            {filteredAndSortedVendors.length > 10 && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-[#0165FC] bg-white border border-[#c7d8fd] hover:bg-[#e8f0fe] rounded-lg transition-colors shadow-xs"
              >
                <span>{isExpanded ? 'Collapse List' : 'Expand Full List (20 Vendors)'}</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
