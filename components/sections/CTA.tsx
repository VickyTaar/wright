import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className="section-spacing bg-white border-t border-[#e5e7eb]"
      aria-labelledby="cta-heading"
    >
      <div className="container-site">
        <div className="border border-[#e5e7eb] rounded-[8px] p-12 md:p-16 flex flex-col items-start max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-5">
            Get Started
          </p>
          <h2
            id="cta-heading"
            className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5 text-balance"
          >
            Ready to underwrite technology
            <br />
            risk with confidence?
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7] mb-8 max-w-lg">
            Talk to our team. We&apos;ll walk you through our risk intelligence platform,
            discuss how continuous assessment differs from traditional approaches, and
            help you determine the right programme for your underwriting operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/demo"
              id="cta-demo"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
            >
              Request a Briefing
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              id="cta-contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-[#0a0a0b] bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f7f8fa] rounded-[6px] transition-colors duration-150"
            >
              Contact Our Team
            </Link>
          </div>

          {/* Response time note */}
          <p className="mt-6 text-[12px] text-[#9ca3af]">
            We respond to all briefing requests within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
