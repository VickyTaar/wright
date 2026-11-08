import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  {
    dimension: 'Assessment Frequency',
    legacy: 'Annual questionnaires completed at renewal. Threat shifts throughout the policy year remain invisible until the next cycle.',
    barbon: 'Continuous telemetry monitoring across the policy lifecycle. Material posture shifts flagged in real time.',
  },
  {
    dimension: 'Evidence Source',
    legacy: 'Self-reported answers by the applicant. No independent technical verification of accuracy or completeness.',
    barbon: 'Direct, read-only telemetry from live infrastructure, cloud estates, and identity systems — verified objectively.',
  },
  {
    dimension: 'Risk Quantification',
    legacy: 'Subjective qualitative risk bands based on checkbox answers, making portfolio comparison difficult.',
    barbon: 'An explainable 0–100 Cyber Risk Score calibrated across empirical vulnerability density and exploitability.',
  },
  {
    dimension: 'AI System Exposure',
    legacy: 'No established underwriting framework. Autonomous AI agent liabilities either excluded or approximated.',
    barbon: 'Purpose-built AI Risk Assurance evaluating agentic permissions, data leakage, and financial loss boundaries.',
  },
  {
    dimension: 'Vendor Verification',
    legacy: 'Security tools listed on applications taken at face value without validating implementation or coverage.',
    barbon: 'Independent verification of major security tools to confirm active deployment and genuine loss reduction.',
  },
  {
    dimension: 'Underwriting Outcome',
    legacy: 'Decisions reliant on unverified, potentially outdated self-declarations, risking adverse selection.',
    barbon: 'Decisions grounded in continuous, independent technical telemetry — reducing claims and unexpected aggregate losses.',
  },
];

export default function ComparisonEditorial() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F3EE] border-y border-[#E5E3DC]" aria-labelledby="comparison-title">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
            The Underwriting Shift
          </span>
          <h2
            id="comparison-title"
            className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
          >
            Why Barbon vs. the traditional approach.
          </h2>
          <p className="text-[16px] text-[#52524E] leading-[1.7]">
            Cyber threats evolve hourly and AI systems learn continuously. Traditional insurance models relying on annual self-attestation cannot keep pace with modern technology risk.
          </p>
        </div>

        {/* Two-Column Comparison */}
        <div className="border border-[#D5D2C7] bg-[#FFFFFF]">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E5E3DC] text-[12px] font-mono uppercase bg-[#FBFBF9]">
            <div className="md:col-span-3 p-4 md:p-5 text-[#767670] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
              Dimension
            </div>
            <div className="md:col-span-4 p-4 md:p-5 text-[#767670] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
              The Traditional Approach
            </div>
            <div className="md:col-span-5 p-4 md:p-5 text-[#0F2537] font-semibold bg-[#F0F4F7]">
              The Barbon Intelligence Engine
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#E5E3DC]">
            {comparisons.map((row) => (
              <div key={row.dimension} className="grid grid-cols-1 md:grid-cols-12 text-[13.5px]">
                {/* Dimension */}
                <div className="md:col-span-3 p-4 md:p-5 font-medium text-[#141413] bg-[#FBFBF9] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
                  {row.dimension}
                </div>
                {/* Traditional */}
                <div className="md:col-span-4 p-4 md:p-5 text-[#767670] leading-[1.6] border-b md:border-b-0 md:border-r border-[#E5E3DC]">
                  {row.legacy}
                </div>
                {/* Barbon */}
                <div className="md:col-span-5 p-4 md:p-5 text-[#141413] leading-[1.6] bg-[#FFFFFF]">
                  {row.barbon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-[#767670]">
          <p>
            Barbon is vendor-neutral and independent. We neither sell security products nor write insurance policies.
          </p>
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors whitespace-nowrap group"
          >
            <span>Read full methodology</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

