import { ArrowRight } from 'lucide-react';

const CONTACT_URL = 'https://lms.barbon.tech/contact';

const outcomes = [
  'Build internal cyber insurance knowledge',
  'Improve conversations with clients about cyber risk',
  'Help teams understand cyber insurance products',
  'Develop cyber underwriting capability',
  'Improve understanding of cyber claims and risk',
  'Equip teams to identify cyber insurance opportunities',
  'Create a stronger internal cyber insurance culture',
];

export default function CIAPartner() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="cia-partner-heading"
    >
      <div className="container-site">
        {/* Full-width card */}
        <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left — dark blue panel */}
            <div className="bg-gradient-to-br from-[#0165FC] to-[#0044cc] p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-widest text-white/60 mb-4">
                  Corporate Partnership
                </p>
                <h2
                  id="cia-partner-heading"
                  className="text-[28px] md:text-[34px] font-bold text-white leading-[1.15] mb-5 text-balance"
                >
                  Build Cyber Insurance Capability Within Your Team
                </h2>
                <p className="text-[15px] text-white/80 leading-[1.7]">
                  Barbon can partner with your organisation to deliver structured cyber
                  insurance training using the CIA curriculum. Whether you are an insurer,
                  a broker or another organisation working with cyber risk, we can work
                  with you to build the knowledge your team needs.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={CONTACT_URL}
                  id="cia-partner-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium text-[#0165FC] bg-white hover:bg-[#f7f8fa] rounded-[6px] transition-colors duration-150 group"
                >
                  Talk to Barbon CIA
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right — outcomes list */}
            <div className="p-10 lg:p-12 bg-[#f7f8fa]">
              <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-6">
                What a partnership delivers for your organisation
              </h3>
              <ul className="space-y-4" role="list">
                {outcomes.map((o, i) => (
                  <li key={o} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8f0fe] border border-[#c7d8fd] flex items-center justify-center text-[10px] font-bold text-[#0165FC] mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-[14px] text-[#0a0a0b] leading-[1.6]">{o}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
                <p className="text-[13px] text-[#6b7280] leading-[1.6]">
                  Training programmes can be delivered as cohorts using the standard CIA
                  curriculum. For organisations with specific requirements, tailored
                  delivery options are available to discuss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
