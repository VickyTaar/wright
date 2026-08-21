import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: "Cyber Insurance for Intellectual Property: Protecting Your Company's Most Valuable Digital Assets",
  description:
    "For many modern organizations, the most valuable assets are digital. Learn how cyber insurance and technology risk intelligence can protect intellectual property from cyber threats.",
  alternates: {
    canonical: 'https://barbon.tech/resources/cyber-insurance-intellectual-property',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/cyber-insurance-intellectual-property',
  },
};

export default function CyberInsuranceIPPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Insights · Intellectual Property
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#0a0a0b] mb-5 max-w-3xl">
              Cyber Insurance for Intellectual Property: Protecting Your Company&apos;s Most Valuable Digital Assets
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-2xl">
              For many modern organizations, the most valuable assets are no longer physical. They are digital.
              Understanding what&apos;s at risk — and whether your insurer understands it — is essential.
            </p>
          </div>
        </div>

        {/* Body */}
        <article className="section-spacing bg-white">
          <div className="container-site">
            <div className="max-w-2xl mx-auto">

              {/* Intro */}
              <div className="mb-12">
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  For many modern organizations, the most valuable assets are no longer physical. They are digital.
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {[
                    'Source code', 'Customer databases', 'Algorithms', 'Research', 'Trade secrets',
                    'Product designs', 'AI models', 'Financial models', 'Proprietary processes',
                    'Strategic documents',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8]">
                  These assets can represent years of investment and millions in potential future revenue.
                  A cyberattack that compromises them can create consequences that go far beyond the cost
                  of repairing a computer.
                </p>
              </div>

              {/* IP cyber risk */}
              <section aria-labelledby="ip-risk" className="mb-14">
                <h2 id="ip-risk" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What is intellectual property cyber risk?
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Intellectual property cyber risk refers to the risk that cyber incidents could compromise,
                  steal, destroy, expose or disrupt access to valuable proprietary information. This can include:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {[
                    'Source code', 'Trade secrets', 'Proprietary algorithms', 'Product designs',
                    'Research and development', 'Customer information', 'Business strategies',
                    'AI models', 'Training data', 'Financial information', 'Confidential contracts',
                    'Internal documentation',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8]">
                  Cyberattacks can expose these assets through several routes.
                </p>
              </section>

              {/* Attack routes */}
              <section aria-labelledby="attack-routes" className="mb-14">
                <h2 id="attack-routes" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  How IP is compromised
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Ransomware',
                      body: 'Ransomware can prevent an organization from accessing critical information and systems. Even where data is not permanently destroyed, the interruption can create significant operational and financial consequences.',
                    },
                    {
                      title: 'Credential compromise',
                      body: 'A compromised employee or administrator account can provide attackers with access to highly sensitive systems.',
                    },
                    {
                      title: 'Cloud exposure',
                      body: 'Cloud platforms can contain enormous amounts of intellectual property. Misconfiguration, compromised credentials or excessive permissions can increase exposure significantly.',
                    },
                    {
                      title: 'Third party risk',
                      body: "An organization's intellectual property may also be accessible to suppliers, technology providers, contractors and other third parties. A security incident at one of those organizations can create consequences for the company that owns the data.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border border-[#e5e7eb] rounded-[6px] p-5">
                      <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-2">{item.title}</h3>
                      <p className="text-[14px] text-[#4b5563] leading-[1.7]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cybersecurity + insurance */}
              <section aria-labelledby="cyber-plus-insurance" className="mb-14">
                <h2 id="cyber-plus-insurance" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Cybersecurity protects IP. Cyber insurance can help transfer some of the financial risk.
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Strong cybersecurity controls should remain the first line of defense. Organizations should
                  implement appropriate access controls, monitoring, security awareness, vulnerability
                  management, backup strategies and incident response capabilities.
                </p>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  But no cybersecurity program can guarantee that an incident will never occur. Cyber insurance
                  can provide another layer of risk management.
                </p>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    The question is whether the insurer understands what is actually at risk.
                  </p>
                </blockquote>
              </section>

              {/* What to consider */}
              <section aria-labelledby="consider-ip" className="mb-14">
                <h2 id="consider-ip" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What should companies consider when insuring intellectual property?
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0a0a0b] mb-3">Identify the critical assets</h3>
                    <p className="text-[15px] text-[#4b5563] leading-[1.8] mb-4">
                      Before purchasing coverage, determine which digital assets are genuinely critical to the
                      business. Not all data has the same value.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: 'Software company', asset: 'Source code may be the most important asset' },
                        { label: 'Pharmaceutical company', asset: 'Research data may be critical' },
                        { label: 'Financial company', asset: 'Customer and transaction information may represent significant exposure' },
                        { label: 'AI company', asset: 'Models and training data may represent its competitive advantage' },
                      ].map((item) => (
                        <div key={item.label} className="flex gap-4 text-[14px]">
                          <span className="font-semibold text-[#0165FC] w-48 flex-shrink-0">{item.label}</span>
                          <span className="text-[#4b5563]">{item.asset}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0a0a0b] mb-3">Understand the consequences of loss</h3>
                    <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 space-y-2">
                      {[
                        'What happens if this information is stolen?',
                        'What happens if it becomes publicly available?',
                        'What happens if employees cannot access it?',
                        'What happens if an attacker modifies it?',
                        'What happens if a competitor obtains it?',
                      ].map((q) => (
                        <p key={q} className="text-[14px] text-[#4b5563] italic">&ldquo;{q}&rdquo;</p>
                      ))}
                    </div>
                    <p className="text-[14px] text-[#4b5563] mt-3">
                      These questions help translate technology risk into business risk.
                    </p>
                  </div>
                </div>
              </section>

              {/* Questions for insurer */}
              <section aria-labelledby="questions-ip" className="mb-14">
                <h2 id="questions-ip" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What should you ask your cyber insurer?
                </h2>
                <div className="space-y-3">
                  {[
                    'How do you assess our technology risk?',
                    'How do you understand our critical digital assets?',
                    'What coverage applies to business interruption?',
                    'What incident response costs are covered?',
                    'What legal and regulatory costs are covered?',
                    'What exclusions apply?',
                    'What security controls are required?',
                    'How is cyber risk evaluated during underwriting?',
                  ].map((q) => (
                    <div key={q} className="flex items-start gap-3 pb-3 border-b border-[#e5e7eb] last:border-0">
                      <span className="text-[#0165FC] font-bold mt-0.5">›</span>
                      <p className="text-[14px] text-[#4b5563]">{q}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-5 bg-[#0165FC] rounded-[8px]">
                  <p className="text-white text-[15px] font-semibold text-center">
                    Who provides the cybersecurity expertise behind your cyber insurance?
                  </p>
                </div>
              </section>

              {/* Barbon */}
              <section aria-labelledby="barbon-ip" className="mb-14 bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8">
                <h2 id="barbon-ip" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  Where Barbon fits
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Barbon is a specialist technology risk intelligence company focused on the intersection of
                  cybersecurity and insurance. Barbon helps bring cybersecurity expertise into the insurance industry.
                </p>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  For organizations whose most valuable assets are digital, this distinction matters. An insurer
                  needs to understand the financial consequences of cyber risk. But understanding those
                  consequences starts with understanding the technology environment that creates the risk.
                </p>
                <p className="text-[15px] text-[#4b5563] leading-[1.8]">
                  Barbon helps provide that specialist technology risk perspective.
                </p>
              </section>

              {/* Policy alignment */}
              <section aria-labelledby="policy-align" className="mb-14">
                <h2 id="policy-align" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Cyber insurance should understand the asset it is protecting
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  If a company has millions of dollars invested in source code, confidential information or
                  proprietary technology, its cyber insurance strategy should be considered alongside the
                  systems and controls protecting those assets. That means understanding:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Where critical data is stored',
                    'Who can access it',
                    'How access is controlled',
                    'What systems process it',
                    'What third parties can access it',
                    'How it is backed up',
                    'How it can be restored',
                    'What happens if it becomes unavailable',
                    'What happens if it is stolen',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Closing */}
              <section aria-labelledby="closing-ip" className="mb-8">
                <h2 id="closing-ip" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  Your most valuable asset may be digital. Your insurance should understand that.
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Cyber risk is not simply about computers. It is about the business value that depends on
                  those computers. Barbon is helping connect that technology risk with the insurance industry.
                </p>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-2">
                  Start by understanding the risk. Then choose an insurer that understands it too.
                </p>
                <p className="text-[16px] font-bold text-[#0165FC]">
                  Ask whether your insurer partners with Barbon.
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
