'use client';

import { useState } from 'react';
import { ShieldAlert, BookOpen, Layers, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RiskyTechHero() {
  const [activeTab, setActiveTab] = useState<'ranking' | 'why' | 'comparison' | 'methodology'>('ranking');

  const scrollToSection = (id: string, tab: 'ranking' | 'why' | 'comparison' | 'methodology') => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-[#e5e7eb] overflow-hidden">
      {/* Background Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-[12px] font-semibold tracking-wider text-[#0165FC] uppercase bg-[#e8f0fe] border border-[#c7d8fd] rounded-full"
          >
            <ShieldAlert size={14} className="text-[#0165FC]" />
            <span>BARBON OS RISK INDEX • 2026 EDITION</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] md:text-[54px] lg:text-[62px] font-extrabold tracking-[-0.03em] leading-[1.06] text-[#0a0a0b] mb-6 text-balance"
          >
            Risky Tech Ranking
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-[#6b7280] leading-[1.6] mb-10 text-pretty max-w-3xl"
          >
            The <strong className="text-[#0a0a0b] font-semibold">Risky Tech Ranking</strong> is a continuous index of technology providers whose products were vulnerable to exploitation by threat actors. The ranking leverages public data, threat intelligence, and machine learning exploitability models to help underwriters, brokers, and enterprise security leaders make better-informed technology adoption and cyber risk decisions.
          </motion.p>

          {/* Navigation Pills / Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 pt-2 border-t border-[#e5e7eb]"
          >
            {[
              { id: 'vendor-ranking-table', tab: 'ranking', label: 'Risky Tech Ranking', icon: ShieldAlert },
              { id: 'why-we-built-this', tab: 'why', label: 'Why We Built This', icon: BookOpen },
              { id: 'vendor-comparison', tab: 'comparison', label: 'Vendor Comparison & Analytics', icon: Layers },
              { id: 'methodology-section', tab: 'methodology', label: 'Methodology & CPE Mapping', icon: Cpu },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  type="button"
                  onClick={() => scrollToSection(item.id, item.tab as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#0a0a0b] text-white shadow-sm'
                      : 'bg-[#f7f8fa] text-[#6b7280] hover:text-[#0a0a0b] hover:bg-[#e8f0fe]/60 border border-[#e5e7eb]'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Methodology Highlight Callout Box */}
        <motion.div
          id="why-we-built-this"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 md:p-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border border-[#cbd5e1] rounded-2xl shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-[#0165FC] font-semibold text-[13px] tracking-wide uppercase">
                <CheckCircle2 size={16} />
                <span>How the Risky Tech Ranking was created</span>
              </div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#0f172a] tracking-tight">
                Empowered by the Coalition Exploit Scoring System (CESS)¹ & NIST CPE Dictionary
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#475569] leading-[1.65]">
                To create the Risky Tech Ranking, we use the <strong>Coalition Exploit Scoring System (CESS)¹</strong> to score vulnerabilities that appear in the National Institute of Standards and Technology’s (NIST) Official Common Platform Enumeration (CPE) Dictionary. We map vulnerabilities from the National Vulnerability Database (NVD) to vendors using NIST enrichment, scoring vendors by adding up all of their vulnerabilities weighted by real-world exploitability over time.
              </p>
            </div>
            <a
              href="#methodology-section"
              className="inline-flex items-center gap-2 shrink-0 px-4 py-2.5 text-[14px] font-medium text-[#0f172a] bg-white border border-[#cbd5e1] hover:bg-[#f8fafc] hover:border-[#94a3b8] rounded-lg shadow-xs transition-colors"
            >
              <span>Full Methodology</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
