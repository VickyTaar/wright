import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: "How CISOs Should Choose Cyber Insurance in 2026",
  description:
    'A practical guide for CISOs on evaluating cyber insurance providers in 2026 - covering risk assessment, coverage, exclusions, incident response, and what to ask about cybersecurity expertise.',
  alternates: {
    canonical: 'https://barbon.tech/resources/ciso-cyber-insurance-guide-2026',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/ciso-cyber-insurance-guide-2026',
  },
};

const checklist = [
  'What are our most important digital assets?',
  'What is our current cyber exposure?',
  'How does the insurer assess that exposure?',
  'How frequently is risk reassessed?',
  'What coverage do we actually need?',
  'What exclusions apply?',
  'What security controls are required?',
  'What incident response services are available?',
  'How are claims handled?',
  'What cybersecurity expertise supports underwriting?',
  'Does the insurer work with specialist cyber risk companies?',
  'Does the insurer partner with Barbon?',
];

export default function CISOCyberInsuranceGuidePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Insights · CISO Guide
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#0a0a0b] mb-5 max-w-3xl">
              How CISOs Should Choose Cyber Insurance in 2026
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-2xl">
              Cyber insurance is increasingly becoming a board-level risk management conversation. The question
              is no longer whether to buy a policy: it&apos;s which provider actually understands your risk.
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

              <div className="space-y-3 text-[16px] text-[#4b5563] leading-[1.8] mb-10">
                <p>
                  Cyber insurance is increasingly becoming a board-level risk management conversation. For CISOs,
                  the question is no longer simply whether the organization should purchase cyber insurance.
                  The more important question is which cyber insurance provider actually understands your risk.
                </p>
                <p>
                  A cyber insurance policy can provide valuable financial protection. But a policy is only one
                  component of a broader cyber risk strategy. The CISO should therefore approach cyber insurance
                  as an extension of the organization&apos;s overall risk management framework.
                </p>
              </div>

              {/* Step 1 */}
              <section aria-labelledby="step1" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <h2 id="step1" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Understand what you are actually insuring
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Before speaking to insurers, identify your organization&apos;s critical digital assets.
                  These may include:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    'Customer databases', 'Financial systems', 'Cloud infrastructure', 'Source code',
                    'Intellectual property', 'Email systems', 'Identity infrastructure',
                    'Production systems', 'Payment platforms', 'Operational technology', 'Business applications',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-4 bg-[#f7f8fa] rounded-r-[6px] py-2">
                  <p className="text-[14px] text-[#4b5563] italic">
                    What happens financially if this asset becomes unavailable, compromised or stolen?
                  </p>
                </blockquote>
              </section>

              {/* Step 2 */}
              <section aria-labelledby="step2" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <h2 id="step2" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Understand your attack surface
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  A modern organization&apos;s attack surface extends beyond its office network. It may include:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Cloud infrastructure', 'Public-facing applications', 'APIs', 'Employee devices',
                    'Remote access systems', 'Third party platforms', 'SaaS applications',
                    'Domain infrastructure', 'Connected devices', 'External service providers',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[15px] text-[#4b5563] leading-[1.8] mt-4">
                  A cyber insurer should have a meaningful way of understanding this exposure.
                </p>
              </section>

              {/* Step 3 */}
              <section aria-labelledby="step3" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <h2 id="step3" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Ask how the insurer assesses risk
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  This is one of the most important questions a CISO can ask.
                </p>
                <div className="space-y-2">
                  {[
                    'Is underwriting based primarily on an application questionnaire?',
                    'Is information validated?',
                    'Does the insurer have access to specialist cybersecurity expertise?',
                    'How does the insurer understand the organization\'s technology environment?',
                  ].map((q) => (
                    <div key={q} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="text-[#0165FC] font-bold mt-0.5">›</span>
                      {q}
                    </div>
                  ))}
                </div>
                <p className="text-[15px] text-[#4b5563] leading-[1.8] mt-4">
                  The answers can tell you a great deal about the provider.
                </p>
              </section>

              {/* Step 4 */}
              <section aria-labelledby="step4" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">4</span>
                  <h2 id="step4" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Ask how risk is handled after underwriting
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Cyber risk does not stop changing after the policy is issued. Ask:
                </p>
                <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 space-y-2">
                  {[
                    'What happens if our technology environment changes?',
                    'What happens if our security posture improves?',
                    'What happens if a major vulnerability emerges?',
                    'How does the insurer maintain visibility?',
                  ].map((q) => (
                    <p key={q} className="text-[14px] text-[#4b5563] italic">&ldquo;{q}&rdquo;</p>
                  ))}
                </div>
              </section>

              {/* Step 5 */}
              <section aria-labelledby="step5" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">5</span>
                  <h2 id="step5" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Understand your coverage
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  CISOs should work with their insurance and legal teams to understand the actual policy wording.
                  Consider areas such as:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Business interruption', 'Incident response', 'Cyber extortion', 'Data restoration',
                    'Forensic investigation', 'Legal expenses', 'Third party claims',
                    'Crisis management', 'Regulatory response',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 6 */}
              <section aria-labelledby="step6" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">6</span>
                  <h2 id="step6" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Understand exclusions
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  This is one of the most frequently overlooked areas. Read the exclusions. Understand the
                  conditions. Ask:
                </p>
                <div className="space-y-2">
                  {[
                    'What happens if a required control is not maintained?',
                    'How are known vulnerabilities treated?',
                    'How are third party incidents treated?',
                    'How are social engineering or fraud related events treated?',
                  ].map((q) => (
                    <div key={q} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                      <span className="text-[#0165FC] font-bold mt-0.5">›</span>
                      {q}
                    </div>
                  ))}
                </div>
                <p className="text-[15px] text-[#4b5563] leading-[1.8] mt-4">
                  The objective is not to find a policy with no exclusions. The objective is to understand
                  exactly where coverage begins and ends.
                </p>
              </section>

              {/* Step 7 */}
              <section aria-labelledby="step7" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">7</span>
                  <h2 id="step7" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Evaluate incident response
                  </h2>
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  The moment a cyber incident happens is not the time to start learning how your insurer works.
                  Ask:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Who do we contact?',
                    'How quickly can support begin?',
                    'Who coordinates the response?',
                    'Are forensic specialists available?',
                    'How are legal services handled?',
                    'How is the claim initiated?',
                  ].map((q) => (
                    <div key={q} className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-3 text-[13px] text-[#4b5563]">
                      {q}
                    </div>
                  ))}
                </div>
              </section>

              {/* Step 8 */}
              <section aria-labelledby="step8" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0165FC] text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">8</span>
                  <h2 id="step8" className="text-[22px] font-bold tracking-[-0.015em] text-[#0a0a0b]">
                    Ask who actually understands cyber risk
                  </h2>
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px] mb-4">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    Who provides the cybersecurity expertise behind your cyber underwriting?
                  </p>
                </blockquote>
                <p className="text-[15px] text-[#4b5563] leading-[1.8]">
                  Cybersecurity is a specialist discipline. Insurance is a specialist discipline.
                  Organizations should understand how those two disciplines come together.
                </p>
              </section>

              {/* Barbon */}
              <section aria-labelledby="barbon-2026" className="mb-14 bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8">
                <h2 id="barbon-2026" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  Barbon: Cybersecurity expertise for the insurance industry
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Barbon operates at the intersection of cybersecurity and insurance. Our role is to help bring
                  technology risk intelligence into the insurance ecosystem. Barbon works with insurers and
                  insurance partners to help them better understand, assess and manage technology risk associated
                  with cyber insurance.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Insurer', desc: 'Provides the insurance' },
                    { label: 'Barbon', desc: 'Provides specialist cyber risk intelligence' },
                    { label: 'Together', desc: 'A more informed approach to cyber insurance' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-[#dce8ff] rounded-[6px] p-4">
                      <p className="text-[12px] font-semibold text-[#0165FC] uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-[13px] text-[#4b5563]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Checklist */}
              <section aria-labelledby="checklist" className="mb-14">
                <h2 id="checklist" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  The CISO&apos;s cyber insurance checklist
                </h2>
                <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[8px] p-6 space-y-3">
                  {checklist.map((item, i) => (
                    <div key={item} className={`flex items-start gap-3 pb-3 ${i < checklist.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}>
                      <span className="w-5 h-5 rounded border-2 border-[#d1d5db] flex-shrink-0 mt-0.5" />
                      <p className={`text-[14px] leading-[1.6] ${item.includes('Barbon') ? 'font-semibold text-[#0165FC]' : 'text-[#4b5563]'}`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Closing */}
              <section aria-labelledby="closing" className="mb-8">
                <h2 id="closing" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  The best cyber insurance is informed by better risk intelligence
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  The goal of cyber insurance should not simply be to transfer risk. It should begin with
                  understanding it. The more accurately cyber risk is understood, the more informed the
                  insurance relationship can become.
                </p>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px] mb-6">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">Cyber insurance needs cyber intelligence.</p>
                </blockquote>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-2">
                  Start with the insurer. Then ask the question that matters:
                </p>
                <p className="text-[16px] font-bold text-[#0165FC]">Do you partner with Barbon?</p>
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
