import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import UnderwritingWorkbench from '@/components/mockups/UnderwritingWorkbench';

export default function HeroEditorial() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FBFBF9]" aria-labelledby="hero-title">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subject Tag */}
            <div className="mb-6">
              <span className="text-[12px] font-mono uppercase tracking-widest text-[#767670]">
                Technology Risk Intelligence · Insurtech
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-title"
              className="text-[42px] sm:text-[52px] lg:text-[58px] font-serif font-normal text-[#141413] tracking-[-0.025em] leading-[1.08] mb-6 text-balance"
            >
              The underwriting engine for cyber risk.
            </h1>

            {/* Supporting Sentence */}
            <p className="text-[17px] sm:text-[18px] text-[#52524E] leading-[1.7] mb-8 max-w-[520px]">
              Barbon continuously measures cyber and AI risk — providing insurers, reinsurers, and brokers with the independent intelligence needed to underwrite modern technology with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/demo"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-[#FBFBF9] bg-[#0F2537] hover:bg-[#1A3852] rounded-[2px] transition-colors"
              >
                <span>Request a Briefing</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/security"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-[14px] font-medium text-[#141413] hover:text-[#0F2537] transition-colors group"
              >
                <span>Explore our approach</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            {/* Quiet Trust Baseline */}
            <div className="pt-6 border-t border-[#E5E3DC]">
              <p className="text-[11.5px] font-mono text-[#767670] tracking-wide uppercase leading-relaxed">
                ISO 27001 · Independent & Vendor-Neutral · Continuous Telemetry · Insurer-Trusted
              </p>
            </div>
          </div>

          {/* Right Column: Refined Underwriting Workbench Artifact */}
          <div className="lg:col-span-6 lg:pt-2">
            <UnderwritingWorkbench />
          </div>
        </div>
      </div>
    </section>
  );
}

