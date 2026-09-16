import { BookOpen, Users, TrendingUp, Shield } from 'lucide-react';

const points = [
  {
    icon: BookOpen,
    heading: 'Cyber risk is complex and evolving',
    body: 'Cyber threats, attack techniques and technology systems change constantly. Insurance professionals need a reliable foundation to keep pace with what they are underwriting, selling and advising on.',
  },
  {
    icon: Users,
    heading: 'The knowledge gap is real',
    body: 'Many insurance professionals enter cyber insurance without a background in technology or cybersecurity. This makes it harder to assess risk accurately, explain coverage clearly or identify the right opportunities.',
  },
  {
    icon: TrendingUp,
    heading: 'Demand for cyber insurance is growing',
    body: 'Across Africa and globally, demand for cyber insurance is increasing. Organisations are seeking cover, but the insurance industry needs professionals who can confidently support this growth.',
  },
  {
    icon: Shield,
    heading: 'Better knowledge means better outcomes',
    body: 'Professionals who understand cyber risk can underwrite it more accurately, serve clients more effectively, and help the market develop in a sustainable direction.',
  },
];

export default function CIAWhy() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="cia-why-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Why it matters
            </p>
            <h2
              id="cia-why-heading"
              className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-6 text-balance"
            >
              Cyber insurance cannot grow without people who understand cyber risk.
            </h2>
            <div className="space-y-4 text-[16px] text-[#6b7280] leading-[1.75]">
              <p>
                The cyber insurance market is expanding, but it faces a persistent challenge:
                the people responsible for underwriting, selling and advising on cyber
                insurance often have limited exposure to the technology and threat landscape
                they are working with.
              </p>
              <p>
                This knowledge gap affects the quality of risk assessment, client
                conversations and claims handling. It also slows the development of a
                sustainable, well-priced cyber insurance market.
              </p>
              <p>
                Barbon CIA exists to close that gap. Through structured cyber insurance
                training, practical curriculum and professional certification, the Academy
                equips insurance professionals with the knowledge they need to work
                confidently in cyber insurance.
              </p>
            </div>
          </div>

          {/* Right — points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden">
            {points.map((pt) => (
              <div key={pt.heading} className="bg-white p-6 group hover:bg-[#f7f8fa] transition-colors">
                <div className="w-8 h-8 rounded-[6px] bg-[#f7f8fa] border border-[#e5e7eb] flex items-center justify-center mb-4 group-hover:border-[#c7d8fd] group-hover:bg-[#e8f0fe] transition-colors">
                  <pt.icon size={15} className="text-[#6b7280] group-hover:text-[#0165FC] transition-colors" />
                </div>
                <h3 className="text-[14px] font-semibold text-[#0a0a0b] mb-2 leading-[1.4]">
                  {pt.heading}
                </h3>
                <p className="text-[13px] text-[#6b7280] leading-[1.6]">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
