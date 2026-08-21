'use client';

import Link from 'next/link';
import { ShieldAlert, ArrowRight, TrendingUp, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { RISKY_TECH_VENDORS } from '@/lib/riskyTechData';

export default function RiskyTechHighlight() {
  const topVendors = RISKY_TECH_VENDORS.slice(0, 5);

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white border-y border-[#e5e7eb] relative overflow-hidden">
      <div className="container-site relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[12px] font-bold text-[#0165FC] tracking-wider uppercase bg-[#e8f0fe] border border-[#c7d8fd] rounded-full"
            >
              <ShieldAlert size={14} />
              <span>BARBON RISK INDEX • 2026 EDITION RELEASED</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] text-[#0a0a0b] leading-[1.1]"
            >
              Barbon Risk Index 2026
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-[#6b7280] leading-relaxed"
            >
              Discover which technology providers were most vulnerable to exploitation. Built using the Barbon Exploit Scoring System (BESS) and NIST CPE mapping to help insurers and enterprises make data-driven technology decisions.
            </motion.p>

            {/* Metric Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 py-2"
            >
              <div className="p-4 bg-white border border-[#e5e7eb] rounded-xl shadow-2xs">
                <div className="text-[12px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                  Vulnerabilities Assessed
                </div>
                <div className="text-[26px] font-extrabold text-[#0a0a0b] font-mono">
                  58,098
                </div>
                <div className="text-[12px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                  <TrendingUp size={12} />
                  +18% in Q2 2026
                </div>
              </div>

              <div className="p-4 bg-white border border-[#e5e7eb] rounded-xl shadow-2xs">
                <div className="text-[12px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                  Vendors Scored
                </div>
                <div className="text-[26px] font-extrabold text-[#0a0a0b] font-mono">
                  10,530
                </div>
                <div className="text-[12px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                  <TrendingUp size={12} />
                  +11% avg score growth
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                href="/risky-tech"
                id="homepage-risky-tech-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-[15px] font-semibold text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-xl transition-all shadow-md hover:shadow-[#0165FC]/25 group"
              >
                <span>Explore Full Barbon Risk Index</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Preview Ranking Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#e5e7eb] rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 bg-[#0f172a] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0165FC] flex items-center justify-center font-bold text-[14px]">
                    #1
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px]">Top Barbon Risk Snapshot</h3>
                    <p className="text-[12px] text-[#94a3b8]">Barbon Risk Score Index</p>
                  </div>
                </div>
                <Link
                  href="/risky-tech"
                  className="text-[12px] text-[#60a5fa] hover:text-white font-medium flex items-center gap-1 transition-colors"
                >
                  View All 20 <ChevronRight size={14} />
                </Link>
              </div>

              {/* Vendors List Preview */}
              <div className="divide-y divide-[#e5e7eb]">
                {topVendors.map((item) => (
                  <div
                    key={item.vendor}
                    className="p-4 flex items-center justify-between hover:bg-[#f8fafc] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-[14px] font-bold text-[#6b7280]">
                        {item.rank}.
                      </span>
                      <div>
                        <div className="font-bold text-[15px] text-[#0a0a0b]">
                          {item.vendor}
                        </div>
                        <div className="text-[12px] text-[#6b7280]">
                          {item.vulnerabilities.toLocaleString()} vulnerabilities
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider font-semibold">
                        Weighted Score
                      </div>
                      <div className="font-mono font-bold text-[15px] text-[#0165FC]">
                        {item.weightedScore.toFixed(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-[#f8fafc] border-t border-[#e5e7eb] flex items-center justify-between text-[13px]">
                <span className="text-[#6b7280]">Data sourced via NIST CPE & Barbon ESS</span>
                <Link
                  href="/risky-tech"
                  className="font-bold text-[#0165FC] hover:underline"
                >
                  Full Ranking & Methodology →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
