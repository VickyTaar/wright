import { ArrowRight } from 'lucide-react';

const CORPORATE_URL = 'https://lms.barbon.tech/corporate-training';
const PARTNER_URL = 'https://lms.barbon.tech/partner';

const outcomes = [
  'Build internal cyber insurance knowledge across the team',
  'Improve client conversations about cyber risk and coverage',
  'Help staff understand cyber insurance products and coverage areas',
  'Develop cyber underwriting capability within the organisation',
  'Improve understanding of cyber claims and incident response',
  'Equip teams to identify and discuss cyber insurance opportunities',
  'Create a stronger internal cyber insurance culture',
];

export default function CIACorporate() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="cia-corporate-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — outcomes */}
          <div className="border border-[#e5e7eb] rounded-[8px] bg-[#f7f8fa] p-8 order-2 lg:order-1">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              What your team gains
            </p>
            <ul className="space-y-3" role="list">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-[14px] text-[#0a0a0b] leading-[1.6]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="8" fill="#e8f0fe" />
                    <path d="M5 8l2 2 4-4" stroke="#0165FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — description */}
          <div className="order-1 lg:order-2">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Corporate Training
            </p>
            <h2
              id="cia-corporate-heading"
              className="text-[32px] md:text-[38px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5 text-balance"
            >
              Corporate Cyber Insurance Training for Insurers and Brokers
            </h2>
            <div className="space-y-4 text-[16px] text-[#6b7280] leading-[1.75] mb-8">
              <p>
                Insurance companies, brokers and other organisations can engage Barbon
                to train their teams using the Barbon CIA curriculum. Rather than sending
                individual staff to enrol separately, corporate partners can run structured
                training programmes across their teams.
              </p>
              <p>
                Barbon can work with organisations to deliver cohort-based training using
                the CIA curriculum. For organisations with specific needs, customised
                delivery options are available.
              </p>
              <p>
                The goal is practical: equip your people with the knowledge to do their
                work in cyber insurance more effectively, from underwriting through to
                claims and client service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CORPORATE_URL}
                id="cia-corporate-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
              >
                Train Your Team
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={PARTNER_URL}
                id="cia-corporate-cta-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-[#0a0a0b] bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f7f8fa] rounded-[6px] transition-colors duration-150"
              >
                Partner With Barbon CIA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
