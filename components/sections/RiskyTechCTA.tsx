'use client';

import Link from 'next/link';
import { Download, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export default function RiskyTechCTA() {
  return (
    <section id="methodology-section" className="py-16 bg-[#0a0a0b] text-white">
      <div className="container-site">
        {/* Playbook Download Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-[#111827] via-[#1e293b] to-[#0f172a] border border-[#334155] rounded-3xl relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#0165FC]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0165FC]/20 border border-[#0165FC]/40 text-[#60a5fa] text-[12px] font-semibold tracking-wider uppercase rounded-full">
                <FileText size={14} />
                <span>Featured Report • Cyber Threat Index 2026</span>
              </div>
              <h2 className="text-[30px] md:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Explore the Ransomware & Tech Threat Playbook
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#94a3b8] leading-relaxed max-w-2xl">
                The Cyber Threat Index 2026 examines common ransomware attack tactics, zero-day vulnerabilities, and provides actionable insights on how businesses and insurers can protect themselves.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                type="button"
                onClick={() => alert('Downloading Cyber Threat Index 2026 PDF Playbook...')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-xl transition-all shadow-lg hover:shadow-[#0165FC]/30 shrink-0"
              >
                <Download size={18} />
                <span>Download Now (PDF)</span>
              </button>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all shrink-0"
              >
                <span>Request Vendor Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Methodology & Legal Disclaimers */}
        <div className="space-y-6 pt-6 border-t border-[#27272a] text-[12px] md:text-[13px] text-[#a1a1aa] leading-relaxed">
          <p className="font-mono text-[#cbd5e1]">
            ¹ Coalition Inc., Coalition Exploit Scoring System Pat. No. US 12,028,359 B1 issued July 2, 2024
          </p>

          <p>
            The <strong>Risky Tech Ranking</strong> is based on publicly available data and is intended for general, informational purposes only, and not as legal, professional, or consulting advice; use of the Risky Tech Ranking is solely at your own risk. The Risky Tech Ranking is a list of unaffiliated third-party technology providers ranked by a methodology based on Coalition’s Exploit Scoring System (Coalition ESS), which is powered by generative AI, machine learning, and an underlying algorithm that provides assessment of all publicly disclosed vulnerabilities and evaluates a technology vendor's risk based on the exploitability of reported vulnerabilities over a set time period. Coalition disclaims all warranties, express or implied. Risky Tech Ranking results may vary or fluctuate based on factors outside of Coalition's control.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[#71717a] pt-2">
            <span>Barbon Technology Risk Platform</span>
            <span>•</span>
            <Link href="/security" className="hover:text-white transition-colors underline">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/security" className="hover:text-white transition-colors underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/resources" className="hover:text-white transition-colors underline">
              Additional Research & Reports
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
