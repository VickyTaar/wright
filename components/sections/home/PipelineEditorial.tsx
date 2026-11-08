import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const pipeline = [
  {
    step: '01',
    label: 'Signal Collection',
    detail: 'Continuous data ingestion from cloud, identity, endpoint, email, and threat intelligence sources.',
  },
  {
    step: '02',
    label: 'Environment Analysis',
    detail: 'Comprehensive mapping of the insured’s technology footprint across cloud, on-premise, and SaaS environments.',
  },
  {
    step: '03',
    label: 'Threat Correlation',
    detail: 'Active threat intelligence correlated against the organization’s specific exposed attack surface and tech stack.',
  },
  {
    step: '04',
    label: 'Posture Scoring',
    detail: 'Proprietary risk model converts technical telemetry into an explainable, actuarially sound Cyber Risk Score (0–100).',
  },
  {
    step: '05',
    label: 'Vendor Assurance',
    detail: 'Independent verification that deployed security tools are configured correctly and reducing actual loss probability.',
  },
  {
    step: '06',
    label: 'Underwriting Report',
    detail: 'Structured intelligence delivered in the language of insurance underwriting — with recommended terms and limits.',
  },
  {
    step: '07',
    label: 'Continuous Monitoring',
    detail: 'Real-time telemetry flags posture drift, new vulnerabilities, and material risk shifts throughout the policy term.',
  },
];

export default function PipelineEditorial() {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="pipeline-title">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E5E3DC]">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              How It Works
            </span>
            <h2
              id="pipeline-title"
              className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12]"
            >
              The 7-step risk intelligence pipeline.
            </h2>
          </div>
          <div className="text-[14px] text-[#52524E] max-w-sm">
            Replacing point-in-time questionnaires with an automated telemetry pipeline that runs from policy inception through renewal.
          </div>
        </div>

        {/* 7-Step Sequence — Clean, quiet list with hairline dividers */}
        <div className="divide-y divide-[#E5E3DC]">
          {pipeline.map((item) => (
            <div
              key={item.step}
              className="py-5 sm:py-6 grid grid-cols-12 gap-4 items-baseline hover:bg-[#F4F3EE]/50 transition-colors px-2 -mx-2"
            >
              <div className="col-span-2 sm:col-span-1 font-mono text-[12px] text-[#767670]">
                {item.step}
              </div>
              <div className="col-span-10 sm:col-span-4 font-serif text-[18px] text-[#141413] font-medium">
                {item.label}
              </div>
              <div className="col-span-12 sm:col-span-7 sm:pl-4 text-[14px] text-[#52524E] leading-[1.6]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet secondary link */}
        <div className="mt-12 pt-6 border-t border-[#E5E3DC] flex items-center justify-between">
          <span className="text-[12px] font-mono text-[#767670]">
            INDEPENDENT TELEMETRY ENGINE
          </span>
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors group"
          >
            <span>Learn more about our methodology</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

