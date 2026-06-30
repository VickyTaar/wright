import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ClaimsAIInterface from '@/components/mockups/ClaimsAIInterface';

const pipeline = [
  { step: '01', label: 'Claim Received', detail: 'Documents uploaded — PDF, images, structured data ingested' },
  { step: '02', label: 'AI Extraction', detail: 'Policy terms, incident details, and supporting evidence parsed' },
  { step: '03', label: 'Inconsistency Detection', detail: 'Cross-referenced against policy, historical data, and third-party sources' },
  { step: '04', label: 'Preliminary Assessment', detail: 'Estimated loss calculated with model confidence score' },
  { step: '05', label: 'Fraud Risk Scoring', detail: 'Behavioural patterns and anomalies evaluated against fraud signals' },
  { step: '06', label: 'Settlement Recommendation', detail: 'Suggested settlement generated with supporting rationale' },
  { step: '07', label: 'Approval Routing', detail: 'Routed to the appropriate adjuster or auto-approved by policy rules' },
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
            AI Engine
          </p>
          <h2
            id="ai-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            AI that does the work,
            <br />
            not just the reporting.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Barbon OS embeds AI across every workflow — from document ingestion to
            settlement recommendation. Every model is purpose-built for insurance,
            not adapted from a generic foundation.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Pipeline steps */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-8">
              AI Claims Pipeline
            </h3>
            <ol className="space-y-0" aria-label="AI claims processing steps">
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
              href="/ai"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0165FC] hover:text-[#0052d4] transition-colors group mt-2"
            >
              Explore AI capabilities
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right: Animated interface */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-3">
              <span className="text-[11px] font-medium text-[#9ca3af] uppercase tracking-widest">
                Live Demo · AI Claims Assistant
              </span>
            </div>
            <ClaimsAIInterface />

            {/* Feature chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Fraud Detection',
                'Document Intelligence',
                'Risk Scoring',
                'Auto-Routing',
                'Audit Trail',
                'Explainable AI',
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
