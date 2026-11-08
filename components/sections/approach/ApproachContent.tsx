import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const pipeline = [
  {
    step: '01',
    label: 'Signal Collection',
    detail: 'Continuous data ingestion from cloud, identity, endpoint, email, and threat intelligence sources — across all major vendors and environments.',
  },
  {
    step: '02',
    label: 'Environment Analysis',
    detail: 'Full mapping of the insured\'s technology footprint — cloud workloads, on-premise systems, SaaS tools, and third-party integrations.',
  },
  {
    step: '03',
    label: 'Threat Correlation',
    detail: 'Active threat intelligence feeds correlated against the organization\'s specific infrastructure, domains, and technology stack.',
  },
  {
    step: '04',
    label: 'Posture Scoring',
    detail: 'Proprietary Cyber Risk Score (0–100) calculated from empirical vulnerability density, exploitability, and control efficacy signals.',
  },
  {
    step: '05',
    label: 'Vendor Assurance',
    detail: 'Independent verification that deployed security tools are configured correctly, operational, and delivering genuine risk reduction.',
  },
  {
    step: '06',
    label: 'Underwriting Report',
    detail: 'Structured technical intelligence translated into underwriting language — with recommended limits, conditions, and pricing signals.',
  },
  {
    step: '07',
    label: 'Continuous Monitoring',
    detail: 'Ongoing surveillance flags material posture shifts, new exposures, and deteriorating accounts in real time throughout the policy term.',
  },
];

const comparisons = [
  {
    dimension: 'Assessment Frequency',
    legacy: 'Annual questionnaires at renewal only. Threat and posture changes throughout the year go undetected.',
    barbon: 'Continuous telemetry across the policy lifecycle. Material risk shifts flagged in real time.',
  },
  {
    dimension: 'Evidence Source',
    legacy: 'Self-reported answers. No technical verification of accuracy or completeness.',
    barbon: 'Direct read-only telemetry from live infrastructure — verified independently, not self-attested.',
  },
  {
    dimension: 'Risk Measurement',
    legacy: 'Qualitative risk bands from checkbox scoring. Limited ability to compare accounts.',
    barbon: 'An explainable 0–100 score built from empirical technical signals — consistent and comparable across the portfolio.',
  },
  {
    dimension: 'AI System Exposure',
    legacy: 'No established framework. Autonomous AI risk excluded or approximated with cyber questions.',
    barbon: 'Purpose-built AI Risk Assurance framework with pre-deployment evaluation and continuous post-deployment monitoring.',
  },
  {
    dimension: 'Vendor Verification',
    legacy: 'Security tools listed on questionnaires taken at face value without confirming deployment or efficacy.',
    barbon: 'Independent validation of every major security vendor — confirming active implementation and genuine risk reduction.',
  },
  {
    dimension: 'Underwriting Confidence',
    legacy: 'Decisions made on incomplete, unverified, potentially outdated self-declarations.',
    barbon: 'Decisions supported by continuous, independently verified technical intelligence — reducing adverse selection.',
  },
];

export default function ApproachContent() {
  return (
    <>
      {/* The 7-Step Pipeline */}
      <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="pipeline-approach-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              How the intelligence engine works
            </span>
            <h2
              id="pipeline-approach-heading"
              className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
            >
              Beyond the questionnaire. Into the infrastructure.
            </h2>
            <p className="text-[16px] text-[#52524E] leading-[1.7]">
              Rather than asking whether a client has antivirus installed, Barbon answers the questions that actually determine underwriting outcomes — how likely is this organization to experience a cyber loss in the next twelve months, and is their posture improving or deteriorating?
            </p>
          </div>

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
                <div className="col-span-12 sm:col-span-7 sm:pl-4 text-[14px] text-[#52524E] leading-[1.65]">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-[#F4F3EE] border-t border-[#E5E3DC]" aria-labelledby="comparison-approach-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              The Underwriting Shift
            </span>
            <h2
              id="comparison-approach-heading"
              className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
            >
              Built for the next decade of technology risk.
            </h2>
            <p className="text-[16px] text-[#52524E] leading-[1.7]">
              Technology risk has outgrown traditional models. Cyber threats change every hour. AI systems evolve continuously. Barbon exists to close the gap between what technology actually does and what insurers can see.
            </p>
          </div>

          <div className="border border-[#D5D2C7] bg-[#FFFFFF]">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E5E3DC] text-[12px] font-mono uppercase bg-[#FBFBF9]">
              <div className="md:col-span-3 p-4 md:p-5 text-[#767670] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
                Dimension
              </div>
              <div className="md:col-span-4 p-4 md:p-5 text-[#767670] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
                Traditional Approach
              </div>
              <div className="md:col-span-5 p-4 md:p-5 text-[#0F2537] font-semibold bg-[#F0F4F7]">
                The Barbon Intelligence Engine
              </div>
            </div>
            <div className="divide-y divide-[#E5E3DC]">
              {comparisons.map((row) => (
                <div key={row.dimension} className="grid grid-cols-1 md:grid-cols-12 text-[13.5px]">
                  <div className="md:col-span-3 p-4 md:p-5 font-medium text-[#141413] bg-[#FBFBF9] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
                    {row.dimension}
                  </div>
                  <div className="md:col-span-4 p-4 md:p-5 text-[#767670] leading-[1.6] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
                    {row.legacy}
                  </div>
                  <div className="md:col-span-5 p-4 md:p-5 text-[#141413] leading-[1.6]">
                    {row.barbon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-[#767670]">
            <p>
              Barbon is vendor-neutral and independent — we sell no security products and write no insurance policies.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1.5 font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors whitespace-nowrap group"
            >
              <span>Explore Cyber Risk Intelligence</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="principles-heading">
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              Principles
            </span>
            <h2
              id="principles-heading"
              className="text-[28px] sm:text-[36px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.15]"
            >
              What we believe.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              {
                title: 'Independent by design.',
                body: 'We are not a cybersecurity vendor. We are not an insurer. We have no commercial relationship with the technologies we assess — which means our intelligence is always objective, and our incentives always align with accuracy.',
              },
              {
                title: 'Continuous, not annual.',
                body: 'Technology risk changes every day. An annual questionnaire cannot reflect that reality. Our platform monitors continuously — giving insurers current intelligence, not last year\'s snapshot.',
              },
              {
                title: 'Intelligence, not compliance.',
                body: 'Compliance frameworks confirm whether controls exist. We confirm whether they are working — and whether they are reducing the actual probability of loss. Those are very different questions.',
              },
              {
                title: 'Insurers first.',
                body: 'Our primary obligation is to the insurers and brokers who depend on our intelligence to make underwriting decisions. Everything we build is designed to make technology risk measurable, explainable, and actionable.',
              },
            ].map((v) => (
              <div key={v.title} className="border-t border-[#D5D2C7] pt-5">
                <h3 className="font-serif text-[18px] font-medium text-[#141413] mb-3">{v.title}</h3>
                <p className="text-[14px] text-[#52524E] leading-[1.7]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

