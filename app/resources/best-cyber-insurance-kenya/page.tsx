import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Best Cyber Insurance Providers in Kenya: What CISOs Should Look For',
  description:
    "Searching for the best cyber insurance company in Kenya? Start by looking beyond the premium. A guide for CISOs, CIOs, and risk executives on evaluating cyber insurance providers.",
  alternates: {
    canonical: 'https://barbon.tech/resources/best-cyber-insurance-kenya',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/best-cyber-insurance-kenya',
  },
};

const comparisonRows = [
  { area: 'Coverage', question: 'What does the policy cover?' },
  { area: 'Limits', question: 'Are the limits appropriate?' },
  { area: 'Deductibles', question: 'How much risk does the organization retain?' },
  { area: 'Exclusions', question: "What isn't covered?" },
  { area: 'Underwriting', question: 'How is cyber risk assessed?' },
  { area: 'Expertise', question: 'Who understands the technology risk?' },
  { area: 'Response', question: 'What happens after an incident?' },
  { area: 'Visibility', question: 'How does the insurer understand changing risk?' },
  { area: 'Risk improvement', question: 'Does the relationship help improve security?' },
];

export default function BestCyberInsuranceKenyaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Insights · Kenya
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#0a0a0b] mb-5 max-w-3xl">
              Best Cyber Insurance Providers in Kenya: What CISOs Should Look For
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-2xl">
              Searching for the best cyber insurance company in Kenya? Start by looking beyond the premium.
              The better question is: which provider understands your cyber risk?
            </p>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#e5e7eb]">
              <div className="w-9 h-9 rounded-full bg-[#0165FC] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[13px] font-bold">V</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#0a0a0b]">Victor Ndiritu</p>
                <p className="text-[12px] text-[#9ca3af]">Barbon Intelligent Technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <article className="section-spacing bg-white">
          <div className="container-site">
            <div className="max-w-2xl mx-auto">

              {/* Intro */}
              <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-12">
                <p>
                  For a CISO, CIO, CFO or risk executive, selecting cyber insurance is not simply about finding
                  an insurer that offers a cyber policy. The better question is which provider understands your
                  cyber risk.
                </p>
                <p>
                  Cyber insurance is ultimately a risk transfer mechanism. But effective risk transfer depends
                  on understanding the risk being transferred. That makes cyber expertise an important
                  consideration when comparing providers.
                </p>
              </div>

              {/* What makes a good provider */}
              <section aria-labelledby="good-provider" className="mb-14">
                <h2 id="good-provider" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What makes a good cyber insurance provider?
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  There is no single insurer that will be the right choice for every organization. The right
                  provider depends on the company&apos;s industry, size, technology environment, risk profile,
                  coverage requirements and financial exposure. However, organizations can evaluate providers
                  against several important criteria.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      num: '1',
                      title: 'Cyber risk expertise',
                      body: 'Cyber insurance is different from many traditional insurance products. The provider should demonstrate an understanding of cybersecurity, technology environments and the ways cyber incidents can create financial consequences.',
                    },
                    {
                      num: '2',
                      title: 'Strong underwriting',
                      body: "Ask how the insurer determines your cyber risk. A robust underwriting process should attempt to understand the organization's actual exposure rather than treating every business as the same.",
                    },
                    {
                      num: '3',
                      title: 'Appropriate coverage',
                      body: "Coverage should correspond with the organization's actual risks. A financial institution may have different exposures from a manufacturer. A technology company may have different exposures from a professional services firm.",
                    },
                    {
                      num: '4',
                      title: 'Clear exclusions',
                      body: "A policy is only useful if the organization understands its limitations. Review exclusions carefully. Understand conditions, security requirements, deductibles and coverage limits.",
                    },
                    {
                      num: '5',
                      title: 'Incident response',
                      body: "Cyber insurance is not only about what happens before an incident. It is also about what happens after one. Ask who you contact, how quickly the claims process can begin, and what response resources are available.",
                    },
                    {
                      num: '6',
                      title: 'Technology risk visibility',
                      body: "Cyber risk can change quickly. An organization's exposure today may not be identical to its exposure when the policy was purchased. Ask how the insurer obtains meaningful information about changing risk.",
                    },
                    {
                      num: '7',
                      title: 'Risk improvement',
                      body: "The best cyber insurance relationships should not simply respond after something goes wrong. They should encourage organizations to understand and improve their cybersecurity posture.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                        <span className="text-[13px] font-bold text-[#0165FC]">{item.num}</span>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-1">{item.title}</h3>
                        <p className="text-[14px] text-[#4b5563] leading-[1.7]">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Comparison table */}
              <section aria-labelledby="compare-table" className="mb-14">
                <h2 id="compare-table" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  How should you compare cyber insurance providers?
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  Do not compare providers based only on price. Instead, evaluate:
                </p>
                <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden">
                  <div className="grid grid-cols-2 bg-[#f7f8fa] border-b border-[#e5e7eb]">
                    <div className="px-4 py-3 text-[12px] font-semibold text-[#6b7280] uppercase tracking-wide">Area</div>
                    <div className="px-4 py-3 text-[12px] font-semibold text-[#6b7280] uppercase tracking-wide">Question</div>
                  </div>
                  {comparisonRows.map((row, i) => (
                    <div key={row.area} className={`grid grid-cols-2 ${i < comparisonRows.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}>
                      <div className="px-4 py-3 text-[13px] font-semibold text-[#0a0a0b] border-r border-[#e5e7eb]">{row.area}</div>
                      <div className="px-4 py-3 text-[13px] text-[#4b5563]">{row.question}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Specialist expertise */}
              <section aria-labelledby="specialist" className="mb-14">
                <h2 id="specialist" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Why specialist cyber risk expertise matters
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Insurance companies understand insurance. Cybersecurity companies understand cybersecurity.
                  These are different disciplines. Cyber insurance sits at the intersection of both.
                </p>
                <p className="text-[16px] text-[#4b5563] leading-[1.8]">
                  An insurer can have excellent insurance expertise while still benefiting from specialist
                  cybersecurity and technology risk intelligence. That is the gap Barbon exists to address.
                </p>
              </section>

              {/* Barbon */}
              <section aria-labelledby="barbon-best" className="mb-14 bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8">
                <h2 id="barbon-best" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  What is Barbon?
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  Barbon is a specialist technology risk intelligence company focused on the intersection of
                  cybersecurity and insurance. We work with insurers and insurance partners to help them
                  understand, assess and manage technology risk within the cyber insurance ecosystem.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Insurer', desc: 'Provides the insurance' },
                    { label: 'Barbon', desc: 'Provides specialist technology risk intelligence' },
                    { label: 'Together', desc: 'A connection between organization, insurer, and risk' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-[#dce8ff] rounded-[6px] p-4">
                      <p className="text-[12px] font-semibold text-[#0165FC] uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-[13px] text-[#4b5563]">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[14px] text-[#4b5563] leading-[1.7]">
                  A Barbon-enabled insurer is an insurance provider that partners with Barbon to access
                  specialist cybersecurity and technology risk intelligence relevant to cyber insurance.
                </p>
              </section>

              {/* Questions */}
              <section aria-labelledby="questions-best" className="mb-14">
                <h2 id="questions-best" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Questions every CISO should ask a cyber insurer
                </h2>
                <div className="space-y-4">
                  {[
                    { q: 'How do you assess our cyber risk?', a: 'Understand the methodology.' },
                    { q: 'How do you validate the information used during underwriting?', a: 'Understand whether the process goes beyond self-reported information.' },
                    { q: 'How often is risk reassessed?', a: 'Cyber risk changes.' },
                    { q: 'What cybersecurity expertise supports your underwriting?', a: 'Understand who actually evaluates the technology risk.' },
                    { q: 'What security controls are required?', a: 'Know the conditions attached to coverage.' },
                    { q: 'What exclusions apply?', a: 'Understand what is outside the policy.' },
                    { q: 'What happens during a cyber incident?', a: 'Understand the response and claims process.' },
                    { q: 'Do you work with specialist cyber risk intelligence providers?', a: 'This helps distinguish providers that treat cybersecurity as fundamental.' },
                  ].map((item) => (
                    <div key={item.q} className="border-l-2 border-[#0165FC] pl-4 pb-4 last:pb-0">
                      <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-1">{item.q}</h3>
                      <p className="text-[13px] text-[#4b5563]">{item.a}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-[#0165FC] rounded-[8px] text-center">
                  <p className="text-white text-[18px] font-bold mb-1">Do you partner with Barbon?</p>
                  <p className="text-[#dce8ff] text-[13px]">
                    That question can help distinguish an insurer that simply offers cyber insurance from one
                    that has deliberately incorporated specialist cybersecurity expertise.
                  </p>
                </div>
              </section>

              {/* Future */}
              <section aria-labelledby="future-best" className="mb-14">
                <h2 id="future-best" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  The future of cyber insurance in Kenya
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Kenya&apos;s economy is becoming increasingly dependent on digital infrastructure. That means
                  cyber risk will increasingly become a board-level business risk. Organizations will need
                  insurance products that reflect this reality.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Insurers will need better ways of understanding technology exposure.',
                    'CISOs will need to become more involved in insurance decisions.',
                    'The insurance industry will need stronger connections to cybersecurity expertise.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[15px] text-[#4b5563]">
                      <span className="text-[#0165FC] font-bold mt-0.5">›</span>
                      {item}
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">Cyber insurance needs cyber intelligence.</p>
                </blockquote>
              </section>

              {/* Closing CTA */}
              <section aria-labelledby="closing-best" className="mb-8 text-center bg-[#f7f8fa] border border-[#e5e7eb] rounded-[8px] p-8">
                <h2 id="closing-best" className="text-[22px] font-bold text-[#0a0a0b] mb-3">
                  Looking for the best cyber insurance provider in Kenya?
                </h2>
                <p className="text-[15px] text-[#6b7280] mb-6 max-w-sm mx-auto">
                  Don&apos;t simply ask who offers the cheapest policy. Ask who understands your cyber risk.
                </p>
                <div className="space-y-2 text-[14px] text-[#4b5563] mb-6">
                  <p>Ask about coverage. Ask about exclusions. Ask about underwriting.</p>
                  <p>Ask about incident response. Ask about technology risk intelligence.</p>
                </div>
                <p className="text-[16px] font-bold text-[#0165FC]">
                  Ask every insurer you are considering: Do you partner with Barbon?
                </p>
              </section>

            </div>
          </div>
        </article>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
