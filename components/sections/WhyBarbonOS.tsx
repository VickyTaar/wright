const comparisons = [
  {
    dimension: 'Deployment',
    legacy: 'Months of implementation. Custom configuration. On-premise hardware provisioning.',
    barbon: 'Cloud-native deployment in weeks. Infrastructure provisioned automatically. No hardware to manage.',
  },
  {
    dimension: 'AI',
    legacy: 'AI added as an afterthought. Separate tools, disconnected data, manual re-entry.',
    barbon: 'AI embedded in every workflow — claims, underwriting, fraud detection, documents — from a shared data layer.',
  },
  {
    dimension: 'API Access',
    legacy: 'Proprietary interfaces. Limited or no API access. Integration requires vendor involvement.',
    barbon: 'Full OpenAPI 3.0 specification. Every function accessible via REST. Self-service integration in hours.',
  },
  {
    dimension: 'User Experience',
    legacy: 'Legacy interfaces designed for data entry. High training overhead. Low adoption.',
    barbon: 'Role-optimised interfaces built for decision making. Intuitive design reduces training time significantly.',
  },
  {
    dimension: 'Architecture',
    legacy: 'Monolithic systems with expensive upgrade cycles. Difficult to extend or customise.',
    barbon: 'Modular, event-driven architecture. Independent modules share one data platform. Scale what you need.',
  },
  {
    dimension: 'Scalability',
    legacy: 'Fixed infrastructure capacity. Performance degrades under peak load. Manual intervention required.',
    barbon: 'Auto-scaling cloud infrastructure. Handles high-volume batch processing and real-time workloads.',
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
            Why Barbon OS
          </p>
          <h2
            id="why-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Built for the next
            <br />
            decade of insurance.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Insurance technology has been underinvested for decades.
            Barbon OS is what happens when a team that understands both
            modern software and insurance builds the stack from scratch.
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
                Conventional Systems
              </span>
            </div>
            <div className="px-5 py-3 border-l border-[#0165FC] bg-[#f0f6ff]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0165FC]">
                Barbon OS
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
