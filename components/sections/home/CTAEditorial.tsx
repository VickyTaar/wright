import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTAEditorial() {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="final-cta-heading">
      <div className="container-site">
        <div className="border border-[#D5D2C7] bg-[#FFFFFF] p-8 sm:p-12 md:p-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              Institutional Partnership
            </span>
            <h2
              id="final-cta-heading"
              className="text-[32px] sm:text-[42px] font-serif font-normal text-[#141413] tracking-[-0.025em] leading-[1.1] mb-5 text-balance"
            >
              Underwrite technology risk with measurable confidence.
            </h2>
            <p className="text-[16.5px] text-[#52524E] leading-[1.7] mb-8">
              Speak with our underwriting team. We will review your portfolio objectives, walk through our continuous telemetry pipeline, and configure a briefing tailored to your specific lines and territorial focus.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/demo"
                id="cta-briefing-primary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-[#FBFBF9] bg-[#0F2537] hover:bg-[#1A3852] rounded-[2px] transition-colors"
              >
                <span>Request a Briefing</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                id="cta-contact-secondary"
                className="inline-flex items-center justify-center px-5 py-3.5 text-[14px] font-medium text-[#141413] hover:text-[#0F2537] transition-colors group"
              >
                <span>Contact our team</span>
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-[#E5E3DC] flex flex-wrap items-center gap-x-8 gap-y-2 text-[12.5px] text-[#767670]">
              <span className="inline-flex items-center gap-1.5">
                <Mail size={13} className="text-[#0F2537]" />
                hello@barbon.tech
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={13} className="text-[#0F2537]" />
                +254 706 963 63
              </span>
              <span className="text-[#9E9D96]">·</span>
              <span>Briefing responses within one business day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

