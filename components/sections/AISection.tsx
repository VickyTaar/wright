import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ClaimsAIInterface from '@/components/mockups/ClaimsAIInterface';

const pipeline = [
  { step: '01', label: 'Signal Collection', detail: 'Continuous data ingestion from cloud, identity, email, endpoint, and threat intelligence sources' },
  { step: '02', label: 'Environment Analysis', detail: 'Full mapping of the insured\'s technology footprint — on-premise, cloud, and SaaS environments' },
  { step: '03', label: 'Threat Correlation', detail: 'Active threats correlated against the specific organization\'s exposed attack surface and technology stack' },
  { step: '04', label: 'Posture Scoring', detail: 'Proprietary risk model converts technical findings into an explainable Cyber Risk Score (0–100)' },
  { step: '05', label: 'Vendor Assurance', detail: 'Independent validation that existing security vendors are reducing risk — not just deployed on paper' },
  { step: '06', label: 'Underwriting Report', detail: 'Structured intelligence report delivered in the language of underwriting — with recommended actions' },
  { step: '07', label: 'Continuous Monitoring', detail: 'Ongoing surveillance flags posture changes, new threats, and material risk shifts throughout the policy term' },
];

export default function AISection() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="ai-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Our Underwriting Approach
          </p>
          <h2
            id="ai-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Beyond the questionnaire.
            <br />
            Into the infrastructure.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Rather than asking whether a client has antivirus software, Barbon answers
            the questions that actually determine underwriting outcomes. How likely is
            this organization to experience a cyber incident over the next twelve months?
            Is their posture improving or deteriorating? Should premiums be adjusted?
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Pipeline steps */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-8">
              Risk Intelligence Pipeline
            </h3>
            <ol className="space-y-0" aria-label="Risk intelligence processing steps">
              {pipeline.map((item, i) => (
                <li key={item.step} className="flex gap-5 pb-0">
                  {/* Step connector */}
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center">
                      <span className="text-[10px] font-mono font-semibold text-[#0165FC]">
                        {item.step}
                      </span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <div className="w-px flex-1 bg-[#e5e7eb] mt-2 mb-2" style={{ minHeight: 24 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6">
                    <p className="text-[14px] font-semibold text-[#0a0a0b] mb-0.5">{item.label}</p>
                    <p className="text-[13px] text-[#6b7280]">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0165FC] hover:text-[#0052d4] transition-colors group mt-2"
            >
              Explore our approach
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right: Animated interface */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-3">
              <span className="text-[11px] font-medium text-[#9ca3af] uppercase tracking-widest">
                Live Demo · Risk Assessment Engine
              </span>
            </div>
            <ClaimsAIInterface />

            {/* Feature chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Attack Surface',
                'Cloud Posture',
                'Identity Risk',
                'Dark Web',
                'BEC Indicators',
                'Vendor Risk',
              ].map((f) => (
                <span
                  key={f}
                  className="text-[11px] px-2.5 py-1 bg-white border border-[#e5e7eb] text-[#6b7280] rounded-[4px]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
