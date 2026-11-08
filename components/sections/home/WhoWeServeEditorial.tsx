import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stakeholders = [
  {
    role: 'Insurers & Reinsurers',
    summary: 'Price, underwrite, and manage cyber books with continuous technical telemetry. Eliminate questionnaire blind spots, improve risk selection, and detect deteriorating accounts before claims occur.',
    capabilities: 'Portfolio Scoring · Loss Prevention Alerts · Renewal Telemetry',
  },
  {
    role: 'Brokers & MGAs',
    summary: 'Deliver insurer-grade technical evidence on behalf of clients. Strengthen underwriting submissions, differentiate cyber advisory, and accelerate policy binding with validated posture reports.',
    capabilities: 'Submission Enhancement · Client Posture Reports · Renewal Preparation',
  },
  {
    role: 'Enterprises & Financial Institutions',
    summary: 'Demonstrate verified security posture to global underwriters on objective terms. Continuous read-only monitoring identifies fraud precursors, BEC indicators, and attack surface drift.',
    capabilities: 'Independent Validation · Exposure Audits · Fraud Telemetry',
  },
  {
    role: 'Regulators & AI Developers',
    summary: 'Establish clear technical boundaries and loss liability frameworks for autonomous AI systems. Independent assurance gives emerging technologies commercial insurability.',
    capabilities: 'AI Model Assurance · Regulatory Alignment · Liability Boundaries',
  },
];

export default function WhoWeServeEditorial() {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="whoweserve-title">
      <div className="container-site">
        {/* Header with African Mission */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
            Ecosystem Partners
          </span>
          <h2
            id="whoweserve-title"
            className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-6"
          >
            Built for the institutions underwriting digital risk.
          </h2>
          <p className="text-[17px] text-[#52524E] leading-[1.75] mb-4">
            We partner with insurers, reinsurers, brokers, and MGAs — with an explicit mission to pioneer cyber insurance in Africa, creating the technical underwriting foundation that allows digital enterprise to thrive with confidence.
          </p>
        </div>

        {/* Stakeholder Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {stakeholders.map((s) => (
            <div
              key={s.role}
              className="border-t border-[#D5D2C7] pt-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[20px] font-serif font-medium text-[#141413] mb-3">
                  {s.role}
                </h3>
                <p className="text-[14.5px] text-[#52524E] leading-[1.7] mb-4">
                  {s.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E3DC] text-[12px] font-mono text-[#767670]">
                {s.capabilities}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-14 pt-6 border-t border-[#E5E3DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[13px] text-[#767670]">
            From local brokerage networks to pan-African and international reinsurance syndicates.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors group whitespace-nowrap"
          >
            <span>Explore all ecosystem solutions</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

