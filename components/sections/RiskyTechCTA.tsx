'use client';

import Link from 'next/link';

export default function RiskyTechCTA() {
  return (
    <section id="methodology-section" className="py-16 bg-[#0a0a0b] text-white">
      <div className="container-site">
        {/* Methodology & Legal Disclaimers */}
        <div className="space-y-6 text-[12px] md:text-[13px] text-[#a1a1aa] leading-relaxed">
          <p className="font-mono text-[#cbd5e1]">
            ¹ Barbon Inc., Barbon Exploit Scoring System Pat. No. US 12,028,359 B1 issued July 2, 2024
          </p>

          <p>
            The <strong>Risky Tech Ranking</strong> is based on publicly available data and is intended for general, informational purposes only, and not as legal, professional, or consulting advice; use of the Risky Tech Ranking is solely at your own risk. The Risky Tech Ranking is a list of unaffiliated third-party technology providers ranked by a methodology based on Barbon’s Exploit Scoring System (Barbon ESS), which is powered by generative AI, machine learning, and an underlying algorithm that provides assessment of all publicly disclosed vulnerabilities and evaluates a technology vendor's risk based on the exploitability of reported vulnerabilities over a set time period. Barbon disclaims all warranties, express or implied. Risky Tech Ranking results may vary or fluctuate based on factors outside of Barbon's control.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[#71717a] pt-4 border-t border-[#27272a]">
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
