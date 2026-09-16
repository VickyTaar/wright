import { ArrowRight } from 'lucide-react';

const COURSES_URL = 'https://lms.barbon.tech/courses';
const CORPORATE_URL = 'https://lms.barbon.tech/corporate-training';

export default function CIAFinalCTA() {
  return (
    <section
      className="section-spacing bg-white border-t border-[#e5e7eb]"
      aria-labelledby="cia-final-cta-heading"
    >
      <div className="container-site">
        <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Individual CTA */}
            <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#e5e7eb]">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
                Individual enrolment
              </p>
              <h2
                id="cia-final-cta-heading"
                className="text-[24px] md:text-[28px] font-bold tracking-[-0.015em] leading-[1.15] text-[#0a0a0b] mb-4 text-balance"
              >
                Start building your cyber insurance knowledge today.
              </h2>
              <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-7">
                Browse the Barbon CIA course catalogue and enrol in the level that
                matches your role and experience.
              </p>
              <a
                href={COURSES_URL}
                id="cia-final-individual-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
              >
                Explore Courses
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Corporate CTA */}
            <div className="p-10 lg:p-12 bg-[#f7f8fa]">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
                Corporate training
              </p>
              <h3 className="text-[24px] md:text-[28px] font-bold tracking-[-0.015em] leading-[1.15] text-[#0a0a0b] mb-4 text-balance">
                Train your whole team in cyber insurance.
              </h3>
              <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-7">
                Bring structured cyber insurance training to your organisation.
                Barbon CIA works with insurers, brokers and other organisations to
                deliver team training programmes.
              </p>
              <a
                href={CORPORATE_URL}
                id="cia-final-corporate-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium text-[#0a0a0b] bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-white rounded-[6px] transition-colors duration-150 group"
              >
                Train Your Team
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
