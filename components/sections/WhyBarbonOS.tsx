const comparisons = [
  {
    dimension: 'Assessment Frequency',
    legacy: 'Annual questionnaire completed at renewal. Posture changes throughout the year go undetected until the next cycle.',
    barbon: 'Continuous monitoring across the entire policy lifecycle. Material risk changes flagged in real time - not twelve months later.',
  },
  {
    dimension: 'Intelligence Source',
    legacy: 'Self-reported answers from insured organizations. No independent verification of the accuracy or completeness of responses.',
    barbon: 'Independent technical assessment of the actual environment. Validated against live infrastructure - not self-attestation.',
  },
  {
    dimension: 'Risk Measurement',
    legacy: 'Qualitative risk categories based on questionnaire scoring. Limited ability to quantify or compare risk across the portfolio.',
    barbon: 'Proprietary Cyber Risk Score (0–100) built from hundreds of technical signals. Quantified, explainable, and comparable.',
  },
  {
    dimension: 'AI Risk',
    legacy: 'No established framework for assessing autonomous AI systems. AI risk excluded or approximated using cyber questions.',
    barbon: 'Purpose-built AI Risk Assurance framework. Independent evaluation of AI agents before deployment and continuous monitoring once live.',
  },
  {
    dimension: 'Vendor Validation',
    legacy: 'Security vendors listed on questionnaires taken at face value. No verification of effective implementation or actual risk reduction.',
    barbon: 'Independent validation of every major security vendor - confirming effective deployment, correct configuration, and genuine risk reduction.',
  },
  {
    dimension: 'Underwriting Confidence',
    legacy: 'Underwriting decisions made on incomplete, unverified, and potentially outdated information about the insured\'s true posture.',
    barbon: 'Underwriting decisions supported by continuous, independently verified technical intelligence - reducing adverse selection and surprise losses.',
  },
];

export default function WhyBarbonOS() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="why-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Why Barbon
          </p>
          <h2
            id="why-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Built for the next decade
            <br />
            of technology risk.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Technology risk has outgrown traditional underwriting models. Cyber threats
            change every hour. AI systems evolve continuously. Barbon exists to close
            the gap between what technology actually does and what insurers can see.
          </p>
        </div>

        {/* Comparison table */}
        <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr,1fr,1fr] bg-white border-b border-[#e5e7eb]">
            <div className="px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]">
                Dimension
              </span>
            </div>
            <div className="px-5 py-3 border-l border-[#e5e7eb]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]">
                Traditional Approach
              </span>
            </div>
            <div className="px-5 py-3 border-l border-[#0165FC] bg-[#f0f6ff]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0165FC]">
                Barbon
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1fr,1fr,1fr] ${i < comparisons.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}
            >
              <div className="px-5 py-5 bg-white">
                <span className="text-[13px] font-semibold text-[#0a0a0b]">{row.dimension}</span>
              </div>
              <div className="px-5 py-5 bg-white border-l border-[#e5e7eb]">
                <p className="text-[13px] text-[#9ca3af] leading-[1.6]">{row.legacy}</p>
              </div>
              <div className="px-5 py-5 bg-[#f0f6ff] border-l border-[#0165FC]">
                <p className="text-[13px] text-[#0a0a0b] leading-[1.6]">{row.barbon}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
