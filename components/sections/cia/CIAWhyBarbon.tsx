import Link from 'next/link';

const pillars = [
  {
    heading: 'At the intersection of three disciplines',
    body: 'Barbon operates at the point where technology risk, cybersecurity and insurance meet. This position informs the Academy curriculum: it is grounded in how technology risk actually behaves, not just how it is described on an application form.',
  },
  {
    heading: 'Designed for the insurance professional',
    body: 'The CIA curriculum is not a general cybersecurity course or a technology awareness programme. It is built specifically for people working in insurance, with the terminology, context and practical focus that insurance professionals need.',
  },
  {
    heading: 'Focused on practical knowledge',
    body: 'The goal of Barbon CIA is not academic. It is to equip insurance professionals with knowledge that helps them do their work better — whether that is assessing a cyber risk, explaining a policy, handling a claim or advising a client.',
  },
  {
    heading: 'A long-term commitment to the market',
    body: 'The Academy reflects Barbon\'s view that sustainable cyber insurance market development requires investment in people. Technology tools matter, but so do the professionals using them. Barbon CIA is part of that investment.',
  },
];

export default function CIAWhyBarbon() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="cia-why-barbon-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — intro */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Why Barbon CIA
            </p>
            <h2
              id="cia-why-barbon-heading"
              className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-6 text-balance"
            >
              Cyber risk and insurance education built by people who work at the intersection.
            </h2>
            <div className="space-y-4 text-[16px] text-[#6b7280] leading-[1.75]">
              <p>
                Barbon Insurance Technologies works continuously with cyber risk, threat
                intelligence and insurance. We help insurers assess and underwrite
                technology risk across a wide range of organisations and sectors.
              </p>
              <p>
                That work gives us a clear view of where knowledge gaps exist in the
                insurance market. The Barbon Cyber Insurance Academy exists because
                we believe those gaps need to be closed if cyber insurance is to develop
                well.
              </p>
              <p>
                We are not an online learning company that has added cyber insurance
                content to a catalogue. The Academy is a professional education
                initiative built specifically around the knowledge needs of the
                insurance industry.
              </p>
            </div>

            {/* Internal links */}
            <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
              <p className="text-[13px] font-semibold text-[#0a0a0b] mb-3">
                Related from Barbon
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'Cyber Risk Intelligence Platform', href: '/platform' },
                  { label: 'AI Risk Assurance', href: '/ai' },
                  { label: 'Who We Serve', href: '/solutions' },
                  { label: 'Barbon BCI Program', href: '/resources/barbon-bci-program' },
                  { label: 'Cyber Insurance in Africa', href: '/resources/cyber-insurance-africa' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-1.5 text-[13px] text-[#0165FC] hover:text-[#0052d4] transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div key={p.heading} className="border-l-2 border-[#0165FC] pl-5 py-1">
                <p className="text-[11px] font-mono text-[#9ca3af] mb-1">0{i + 1}</p>
                <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-2 leading-[1.4]">
                  {p.heading}
                </h3>
                <p className="text-[14px] text-[#6b7280] leading-[1.65]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
