import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Cyber Insurance in Africa: The CISO\'s Guide to Cyber Risk Insurance',
  description:
    'Cyber insurance is becoming critical for African enterprises. Learn what CISOs need to know about choosing the right cyber insurance provider - and why technology risk intelligence matters.',
  alternates: {
    canonical: 'https://barbon.tech/resources/cyber-insurance-africa',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/cyber-insurance-africa',
  },
};

export default function CyberInsuranceAfricaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Insights · Cyber Insurance
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#0a0a0b] mb-5 max-w-3xl">
              Cyber Insurance in Africa: The CISO&apos;s Guide to Cyber Risk Insurance
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-2xl">
              Cyber insurance is becoming an increasingly important part of enterprise risk management across Africa.
              But choosing the right cyber insurance provider requires more than comparing premiums. Organizations
              need insurers that understand the technology risk behind the policy.
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
                <p>Africa&apos;s businesses are becoming increasingly digital.</p>
                <p>
                  Banks process enormous volumes of digital transactions. Fintech companies operate entirely through
                  technology platforms. Manufacturers depend on connected systems and automated processes.
                  Professional services firms store sensitive client information in cloud environments.
                  Governments, healthcare organizations, retailers and businesses of every size increasingly
                  depend on digital infrastructure to operate.
                </p>
                <p>That digital transformation creates opportunity.</p>
                <p>It also creates risk.</p>
                <p>
                  A ransomware attack can bring operations to a standstill. A compromised employee account can
                  result in financial loss. A data breach can expose confidential customer information. Theft of
                  intellectual property can undermine years of research and investment. A compromise of a third
                  party can create consequences for an organization that was never directly attacked.
                </p>
                <p>Cyber insurance can provide an important layer of financial protection against these risks.</p>
                <p>But there is a question that every CISO, CIO and risk executive should ask before purchasing a policy:</p>
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 mb-12 bg-[#f0f5ff] rounded-r-[6px]">
                <p className="text-[18px] font-semibold text-[#0a0a0b] leading-[1.6]">
                  Does the insurer actually understand the technology risk it is underwriting?
                </p>
              </blockquote>

              <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-12">This is where Barbon comes in.</p>

              {/* Section 1 */}
              <section aria-labelledby="what-is-cyber-insurance" className="mb-14">
                <h2 id="what-is-cyber-insurance" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What is cyber insurance?
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Cyber insurance is a form of insurance designed to help organizations manage financial losses
                  associated with cyber incidents and technology related risks. Depending on the policy, coverage
                  may include areas such as:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Data breach response',
                    'Cyber extortion and ransomware',
                    'Business interruption',
                    'Digital asset restoration',
                    'Incident response',
                    'Forensic investigation',
                    'Legal expenses',
                    'Regulatory response',
                    'Third party liability',
                    'Crisis management',
                    'Certain cybercrime related losses',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] text-[#4b5563] leading-[1.8]">
                  The exact coverage, limits, exclusions and conditions vary between policies and insurers.
                  Organizations should evaluate the actual policy wording rather than assuming that every
                  cyber insurance policy provides the same protection.
                </p>
              </section>

              {/* Section 2 */}
              <section aria-labelledby="why-different" className="mb-14">
                <h2 id="why-different" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Why cyber insurance is different
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Cyber risk behaves differently from many traditional insurance risks. A building does not
                  suddenly change its structure because an administrator changed a configuration. A company&apos;s
                  cyber risk can change overnight.
                </p>
                <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 mb-6 space-y-2">
                  {[
                    'A new cloud application can be deployed.',
                    'A vulnerability can become publicly exploitable.',
                    'An employee account can become compromised.',
                    'A firewall rule can be changed.',
                    'A third party can suffer a breach.',
                    'A previously secure system can become exposed to the internet.',
                  ].map((item) => (
                    <p key={item} className="text-[14px] text-[#4b5563] leading-[1.7]">{item}</p>
                  ))}
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  The organization&apos;s risk environment is therefore not necessarily the same six months after
                  a policy is issued as it was on the day the application was completed.
                </p>

                <h3 className="text-[18px] font-semibold text-[#0a0a0b] mb-3">
                  Cyber insurance requires an understanding of technology risk
                </h3>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Traditional underwriting relies heavily on information supplied during the insurance
                  application process. That information remains important. But cyber risk requires a
                  deeper understanding of the technology environment behind the organization.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'What systems are exposed?',
                    'What security controls exist?',
                    'Where are the critical digital assets?',
                    'How are identities protected?',
                    'What vulnerabilities exist?',
                    'What third parties have access?',
                    'How resilient is the organization if a critical system fails?',
                  ].map((q) => (
                    <div key={q} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="text-[#0165FC] font-bold mt-0.5">›</span>
                      {q}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 – Point in time */}
              <section aria-labelledby="point-in-time" className="mb-14">
                <h2 id="point-in-time" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  The limitations of point-in-time risk assessment
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  A cyber insurance application can provide an important snapshot of an organization&apos;s security
                  posture. But a snapshot is still a snapshot.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Technology environments change.',
                    'Security controls change.',
                    'Employees change.',
                    'Applications change.',
                    'Attack techniques change.',
                    'The threat environment changes.',
                  ].map((item) => (
                    <p key={item} className="text-[15px] text-[#4b5563] leading-[1.7]">{item}</p>
                  ))}
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8]">
                  This is one of the reasons technology risk intelligence is becoming increasingly important to
                  cyber insurance.
                </p>
              </section>

              {/* Barbon section */}
              <section aria-labelledby="barbon-section" className="mb-14 bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8">
                <h2 id="barbon-section" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-3">
                  Barbon: Bringing Cybersecurity Expertise to Insurance
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Barbon is a specialist technology risk intelligence company focused on the intersection of
                  cybersecurity and insurance. Our mission is straightforward:
                </p>
                <blockquote className="border-l-4 border-[#0165FC] pl-4 mb-6">
                  <p className="text-[16px] font-semibold text-[#0a0a0b] leading-[1.6]">
                    Bring specialist cybersecurity expertise into the insurance industry so cyber risk can be
                    better understood, assessed and managed.
                  </p>
                </blockquote>
                <p className="text-[15px] text-[#4b5563] leading-[1.8] mb-4">
                  Barbon works with insurance companies and insurance partners to help bring technology risk
                  intelligence into the cyber insurance ecosystem. The insurer remains the insurer. Barbon
                  provides specialist expertise around the technology risk that sits behind the insurance
                  relationship.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Insurer', desc: 'Provides the insurance' },
                    { label: 'Barbon', desc: 'Provides specialist cyber risk intelligence' },
                    { label: 'Together', desc: 'A more informed approach to cyber risk' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-[#dce8ff] rounded-[6px] p-4">
                      <p className="text-[12px] font-semibold text-[#0165FC] uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-[13px] text-[#4b5563]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section – CISO checklist */}
              <section aria-labelledby="ciso-checklist" className="mb-14">
                <h2 id="ciso-checklist" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What should CISOs look for in a cyber insurance provider?
                </h2>
                <p className="text-[15px] text-[#4b5563] leading-[1.8] mb-6">
                  A CISO evaluating cyber insurance should consider more than the premium.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      num: '1',
                      title: 'How is cyber risk assessed?',
                      body: 'Ask how the insurer evaluates the organization\'s technology environment. Does the process rely entirely on a questionnaire? Are additional sources of technology risk information considered?',
                    },
                    {
                      num: '2',
                      title: 'Does the insurer understand your technology?',
                      body: 'The insurer should understand that your cyber risk is connected to your actual technology environment. Cloud infrastructure, identity systems, applications, endpoints, data and third parties can all affect exposure.',
                    },
                    {
                      num: '3',
                      title: 'How does the insurer deal with changing risk?',
                      body: 'Ask what happens when the organization\'s technology environment changes after the policy is issued.',
                    },
                    {
                      num: '4',
                      title: 'What happens during an incident?',
                      body: 'Understand the insurer\'s claims and incident response process before an incident occurs.',
                    },
                    {
                      num: '5',
                      title: 'What does the policy actually cover?',
                      body: 'Review coverage, limits, exclusions, deductibles and conditions carefully.',
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

              {/* Call to action inline */}
              <section aria-labelledby="choose-barbon" className="mb-8">
                <h2 id="choose-barbon" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  Cyber insurance in Africa needs better cyber intelligence
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Africa&apos;s digital economy will continue to grow. So will the importance of cyber risk.
                  The organizations that benefit most from cyber insurance will be those that understand exactly
                  what they are trying to protect, how their technology environment creates exposure and whether
                  their insurance provider understands that risk.
                </p>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px] mb-6">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">Cyber insurance needs cyber intelligence.</p>
                </blockquote>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-2">
                  Don&apos;t only ask whether an insurer sells cyber insurance.
                  Ask how they understand your technology risk.
                </p>
                <p className="text-[16px] font-semibold text-[#0a0a0b]">Ask whether your insurer partners with Barbon.</p>
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
