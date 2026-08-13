'use client';

import { ShieldCheck, AlertCircle, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RiskyTechOverview() {
  return (
    <section className="py-16 bg-[#f8fafc] border-b border-[#e5e7eb]">
      <div className="container-site">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0165FC] tracking-wider uppercase mb-2">
            <Layers size={14} />
            <span>Overview & Key Metrics</span>
          </div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0a0a0b] tracking-tight">
            Risky Tech Ranking Overview
          </h2>
          <p className="text-[16px] text-[#6b7280] mt-2">
            A snapshot of the technology providers highlighted in the Risky Tech Ranking and the vulnerabilities assessed across global commercial exposures.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Contributing Vulnerabilities */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white border border-[#e5e7eb] rounded-2xl shadow-xs relative overflow-hidden group hover:border-[#0165FC]/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[14px] font-bold tracking-wider text-[#6b7280] uppercase">
                Contributing Vulnerabilities
              </span>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <AlertCircle size={20} />
              </div>
            </div>

            <div className="text-[44px] md:text-[56px] font-extrabold text-[#0a0a0b] tracking-tight font-mono mb-2">
              58,098
            </div>

            <p className="text-[15px] text-[#475569] leading-relaxed">
              Total number of vulnerabilities evaluated by Barbon in the Risky Tech Ranking during the current 12-month review period.
            </p>

            <div className="mt-6 pt-4 border-t border-[#e5e7eb] flex items-center justify-between text-[13px]">
              <span className="text-[#6b7280]">Quarterly Growth Rate</span>
              <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                <TrendingUp size={14} />
                +18% vs previous quarter
              </span>
            </div>
          </motion.div>

          {/* Card 2: Total Vendors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-white border border-[#e5e7eb] rounded-2xl shadow-xs relative overflow-hidden group hover:border-[#0165FC]/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[14px] font-bold tracking-wider text-[#6b7280] uppercase">
                Total Vendors Scored
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0165FC]">
                <ShieldCheck size={20} />
              </div>
            </div>

            <div className="text-[44px] md:text-[56px] font-extrabold text-[#0a0a0b] tracking-tight font-mono mb-2">
              10,530
            </div>

            <p className="text-[15px] text-[#475569] leading-relaxed">
              Total number of commercial technology software and hardware vendors scored using NIST CPE enrichment algorithms.
            </p>

            <div className="mt-6 pt-4 border-t border-[#e5e7eb] flex items-center justify-between text-[13px]">
              <span className="text-[#6b7280]">Average Vendor Score Increase</span>
              <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                <TrendingUp size={14} />
                +11% score increase
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
