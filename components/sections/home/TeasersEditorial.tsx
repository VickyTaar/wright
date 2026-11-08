import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { RISKY_TECH_VENDORS } from '@/lib/riskyTechData';

export default function TeasersEditorial() {
  const topVendors = RISKY_TECH_VENDORS.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-[#F4F3EE] border-t border-[#E5E3DC]" aria-label="Research and Education Initiatives">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Teaser 1: Barbon Risk Index */}
          <div className="border border-[#D5D2C7] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E5E3DC]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670]">
                  Research & Benchmark
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F4F3EE] text-[#0F2537] border border-[#E5E3DC]">
                  2026 EDITION
                </span>
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-tight mb-3">
                Barbon Risk Index
              </h3>

              <p className="text-[14.5px] text-[#52524E] leading-[1.65] mb-6">
                An empirical ranking of commercial technology providers scored by exploitability and vulnerability density. Built using the Barbon Exploit Scoring System (BESS) and NIST CPE mapping.
              </p>

              {/* Top 5 Preview Table */}
              <div className="border border-[#E5E3DC] mb-6 divide-y divide-[#E5E3DC]">
                <div className="grid grid-cols-12 py-2 px-3 text-[11px] font-mono text-[#767670] bg-[#FBFBF9] uppercase">
                  <div className="col-span-1">#</div>
                  <div className="col-span-6">Vendor</div>
                  <div className="col-span-3 text-right">Vulns</div>
                  <div className="col-span-2 text-right">Score</div>
                </div>
                {topVendors.map((v) => (
                  <div key={v.vendor} className="grid grid-cols-12 py-2 px-3 text-[12.5px] items-center">
                    <div className="col-span-1 font-mono text-[#767670]">{v.rank}</div>
                    <div className="col-span-6 font-medium text-[#141413] truncate">{v.vendor}</div>
                    <div className="col-span-3 text-right font-mono text-[#52524E]">{v.vulnerabilities.toLocaleString()}</div>
                    <div className="col-span-2 text-right font-mono font-medium text-[#0F2537]">{v.weightedScore.toFixed(1)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/risky-tech"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors group"
              >
                <span>View full ranking of 20 vendors & methodology</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Teaser 2: Barbon CIA (Cyber Insurance Academy) */}
          <div className="border border-[#D5D2C7] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E5E3DC]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670]">
                  Professional Education
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F4F3EE] text-[#0F2537] border border-[#E5E3DC]">
                  BARBON CIA
                </span>
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-tight mb-3">
                Cyber Insurance Academy
              </h3>

              <p className="text-[14.5px] text-[#52524E] leading-[1.65] mb-6">
                Bridging the technical knowledge gap for underwriters, brokers, and risk managers across Africa and emerging markets. Learn to evaluate cyber questionnaires, structure complex cover, and confidently win and service cyber clients.
              </p>

              {/* Curriculum Pathways */}
              <div className="border border-[#E5E3DC] mb-6 divide-y divide-[#E5E3DC] text-[13px]">
                <div className="p-3 bg-[#FBFBF9]">
                  <div className="font-mono text-[11px] text-[#767670] uppercase">Pathway 01</div>
                  <div className="font-medium text-[#141413]">Foundation: Cyber Risk & Coverage Fundamentals</div>
                </div>
                <div className="p-3 bg-[#FFFFFF]">
                  <div className="font-mono text-[11px] text-[#767670] uppercase">Pathway 02</div>
                  <div className="font-medium text-[#141413]">Professional: Technical Underwriting & Risk Selection</div>
                </div>
                <div className="p-3 bg-[#FFFFFF]">
                  <div className="font-mono text-[11px] text-[#767670] uppercase">Pathway 03</div>
                  <div className="font-medium text-[#141413]">Executive & Broker: Winning and Servicing Cyber Clients</div>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/cyber-insurance-academy"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors group"
              >
                <span>Explore Academy certifications & enrolment</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

