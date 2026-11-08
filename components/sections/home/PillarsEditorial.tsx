import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Cyber Risk Intelligence',
    description: 'Continuous technical telemetry and independent risk scoring that replace the annual questionnaire with real-time exposure monitoring across the policy lifecycle.',
    href: '/platform',
    linkLabel: 'Explore Cyber Risk Intelligence',
  },
  {
    num: '02',
    title: 'AI Risk Assurance',
    description: 'Independent technical evaluation and continuous operational monitoring for autonomous AI agents, ensuring algorithms are measurable, bounded, and insurable.',
    href: '/ai',
    linkLabel: 'Explore AI Risk Assurance',
  },
  {
    num: '03',
    title: 'Barbon CIA (Academy)',
    description: 'Professional cyber insurance training and certification for agents, brokers, and underwriters — building the expertise to win, structure, and service cyber clients.',
    href: '/cyber-insurance-academy',
    linkLabel: 'Explore Barbon Academy',
  },
];

export default function PillarsEditorial() {
  return (
    <section className="py-20 md:py-28 border-y border-[#E5E3DC] bg-[#F4F3EE]" aria-labelledby="pillars-title">
      <div className="container-site">
        {/* Section Lead */}
        <div className="max-w-xl mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
            Core Architecture
          </span>
          <h2
            id="pillars-title"
            className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12]"
          >
            Three pillars of technology risk underwriting.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between border-t border-[#D5D2C7] pt-6"
            >
              <div>
                <div className="font-mono text-[12px] text-[#767670] mb-4">
                  {pillar.num}
                </div>
                <h3 className="text-[21px] font-serif font-medium text-[#141413] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[14.5px] text-[#52524E] leading-[1.65] mb-6">
                  {pillar.description}
                </p>
              </div>
              <div>
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors group"
                >
                  <span>{pillar.linkLabel}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

