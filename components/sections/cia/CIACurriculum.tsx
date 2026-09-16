import { ArrowRight } from 'lucide-react';

const LMS_BASE = 'https://lms.barbon.tech/courses';

const levels = [
  {
    id: 'foundation',
    label: 'CIA Foundation',
    badge: 'Level 1',
    badgeColor: 'bg-[#e8f0fe] text-[#0165FC] border-[#c7d8fd]',
    url: `${LMS_BASE}/foundation`,
    description:
      'An introduction to cyber insurance for professionals entering the field or building a foundational understanding of cyber risk and coverage.',
    modules: [
      'Cyber risk fundamentals',
      'Cyber threats and business impact',
      'Cyber insurance terminology',
      'Cyber insurance products',
      'Common coverage areas',
      'Exclusions and limitations',
      'Understanding cyber policies',
    ],
    suitedFor: 'New entrants to cyber insurance, insurance generalists, sales teams and support staff.',
  },
  {
    id: 'professional',
    label: 'CIA Professional',
    badge: 'Level 2',
    badgeColor: 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]',
    url: `${LMS_BASE}/professional`,
    description:
      'For professionals directly involved in insurance and risk who need a working knowledge of cyber risk assessment, underwriting and policy construction.',
    modules: [
      'Cyber risk assessment',
      'Cyber underwriting',
      'Cyber insurance questionnaires',
      'Risk selection',
      'Pricing considerations',
      'Policy construction',
      'Claims and incident response',
      'Accumulation risk',
      'Third-party and supply chain risk',
      'Data protection and privacy risk',
      'Technology risk',
      'AI-related risks',
      'Cyber risk for SMEs and large enterprises',
    ],
    suitedFor: 'Underwriters, brokers, risk managers, claims professionals and compliance officers.',
  },
  {
    id: 'advanced',
    label: 'CIA Advanced',
    badge: 'Level 3',
    badgeColor: 'bg-[#f0fdf4] text-[#166534] border-[#bbf7d0]',
    url: `${LMS_BASE}/advanced`,
    description:
      'For experienced underwriters, brokers, claims specialists and risk professionals working on complex cyber risks and portfolios.',
    modules: [
      'Portfolio cyber risk',
      'Cyber accumulation',
      'Scenario analysis',
      'Cyber risk modelling',
      'Reinsurance considerations',
      'Incident response and claims management',
      'Technology E&O',
      'Silent cyber',
      'Parametric cyber insurance',
      'Emerging technology risks',
      'AI and insurability',
      'Cyber risk intelligence',
    ],
    suitedFor: 'Senior underwriters, specialist brokers, claims professionals and risk specialists.',
  },
];

export default function CIACurriculum() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="cia-curriculum-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Learning Pathways
          </p>
          <h2
            id="cia-curriculum-heading"
            className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Cyber Insurance Courses
          </h2>
          <p className="text-[16px] text-[#6b7280] leading-[1.7]">
            The CIA curriculum is structured as a professional learning pathway across
            three progressive levels. Each level is designed to build practical knowledge
            relevant to the insurance professional&apos;s role.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <article
              key={level.id}
              className="bg-white border border-[#e5e7eb] rounded-[8px] flex flex-col hover:border-[#c7d8fd] hover:shadow-sm transition-all duration-200"
              aria-labelledby={`level-${level.id}-heading`}
            >
              {/* Card header */}
              <div className="p-6 border-b border-[#e5e7eb]">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${level.badgeColor}`}>
                    {level.badge}
                  </span>
                </div>
                <h3
                  id={`level-${level.id}-heading`}
                  className="text-[18px] font-bold text-[#0a0a0b] mb-3"
                >
                  {level.label}
                </h3>
                <p className="text-[13px] text-[#6b7280] leading-[1.65]">
                  {level.description}
                </p>
              </div>

              {/* Modules */}
              <div className="p-6 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
                  Topics covered
                </p>
                <ul className="space-y-2" role="list">
                  {level.modules.map((mod) => (
                    <li key={mod} className="flex items-start gap-2 text-[13px] text-[#0a0a0b]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="#0165FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suited for + CTA */}
              <div className="p-6 border-t border-[#e5e7eb] bg-[#f7f8fa] rounded-b-[8px]">
                <p className="text-[12px] text-[#6b7280] leading-[1.5] mb-4">
                  <span className="font-medium text-[#0a0a0b]">Suited for: </span>
                  {level.suitedFor}
                </p>
                <a
                  href={level.url}
                  id={`cia-course-cta-${level.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0165FC] hover:text-[#0052d4] transition-colors group"
                >
                  View Course
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
