import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: "Cyber Insurance in Kenya: A CISO's Guide to Choosing the Right Provider",
  description:
    "Kenya's digital economy is creating new forms of cyber risk. For organizations considering cyber insurance, choosing the right provider requires a deeper understanding of technology risk.",
  alternates: {
    canonical: 'https://barbon.tech/resources/cyber-insurance-kenya',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/cyber-insurance-kenya',
  },
};

export default function CyberInsuranceKenyaPage() {
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
              Cyber Insurance in Kenya: A CISO&apos;s Guide to Choosing the Right Provider
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-2xl">
              Kenya&apos;s digital economy is creating new opportunities for businesses while introducing new forms
              of cyber risk. Choosing the right cyber insurance provider requires a deeper understanding of
              technology risk.
            </p>
          </div>
        </div>

        {/* Body */}
        <article className="section-spacing bg-white">
          <div className="container-site">
            <div className="max-w-2xl mx-auto">

              {/* Intro */}
              <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-12">
                <p>Kenya is one of Africa&apos;s most digitally connected business environments.</p>
                <p>
                  Financial services, mobile payments, fintech, e-commerce, cloud computing, digital platforms
                  and technology enabled businesses have transformed how organizations operate. A business can
                  now depend on dozens or hundreds of digital systems to deliver a single service.
                </p>
                <p>That creates efficiency. It also creates exposure.</p>
                <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 space-y-2 my-2">
                  {[
                    'A compromised identity can provide access to critical systems.',
                    'A ransomware attack can disrupt operations.',
                    'A cloud misconfiguration can expose sensitive information.',
                    'A compromised third party can introduce risk into an otherwise secure organization.',
                  ].map((item) => (
                    <p key={item} className="text-[14px] text-[#4b5563] leading-[1.7]">{item}</p>
                  ))}
                </div>
                <p>
                  Cyber insurance can help organizations transfer part of the financial risk associated with
                  these events. But not every cyber insurance provider approaches cyber risk in the same way.
                </p>
              </div>

              {/* What is cyber insurance */}
              <section aria-labelledby="what-is" className="mb-14">
                <h2 id="what-is" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What is cyber insurance?
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Cyber insurance provides financial protection against certain losses resulting from cyber
                  incidents and technology related events. Depending on the policy, this can include coverage
                  related to:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Data breaches',
                    'Cyber extortion',
                    'Ransomware',
                    'Business interruption',
                    'Incident response',
                    'Digital asset restoration',
                    'Forensic investigation',
                    'Legal expenses',
                    'Third party liability',
                    'Crisis management',
                    'Certain cybercrime losses',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] text-[#4b5563] leading-[1.8]">
                  Coverage varies between insurance providers and policies. Organizations should therefore
                  assess the policy itself, including its exclusions, conditions, limits and deductibles.
                </p>
              </section>

              {/* Why think differently */}
              <section aria-labelledby="think-differently" className="mb-14">
                <h2 id="think-differently" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Why Kenyan businesses need to think differently about cyber risk
                </h2>
                <div className="space-y-3 text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  <p>The modern Kenyan business environment depends heavily on technology.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Banks depend on digital infrastructure.',
                      'Fintech companies depend on APIs and cloud platforms.',
                      'Retailers depend on payment systems.',
                      'Professional services companies store confidential client information.',
                      'Manufacturers depend on connected operational systems.',
                      'Healthcare organizations manage sensitive patient information.',
                      'Technology companies may depend almost entirely on intellectual property.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[14px] text-[#4b5563]">
                        <span className="text-[#0165FC] font-bold mt-0.5">›</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    A technology failure can become a business failure.
                  </p>
                </blockquote>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mt-4">
                  Cyber risk is therefore no longer exclusively an IT issue. It is an enterprise risk.
                </p>
              </section>

              {/* CISO involvement */}
              <section aria-labelledby="ciso-involvement" className="mb-14">
                <h2 id="ciso-involvement" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Cyber insurance should involve the CISO
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  A cyber insurance purchase should not happen entirely within finance or procurement.
                  The CISO and technology leadership should be involved because they understand the
                  organization&apos;s actual risk environment. The CISO can help identify:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Critical systems',
                    'Critical data',
                    'Internet-facing assets',
                    'Identity risks',
                    'Cloud environments',
                    'Third party dependencies',
                    'Existing security controls',
                    'Business continuity requirements',
                    'Incident response capabilities',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#4b5563]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] text-[#4b5563] leading-[1.8]">
                  This information can help the organization determine what kind of cyber insurance
                  protection it actually needs.
                </p>
              </section>

              {/* Don't choose on price */}
              <section aria-labelledby="not-price" className="mb-14">
                <h2 id="not-price" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Don&apos;t choose cyber insurance based only on price
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  Price matters. But it should not be the only consideration. A lower premium may come
                  with different limits, exclusions, conditions or coverage.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Coverage', q: 'What losses are covered?' },
                    { label: 'Limits', q: 'Are the limits appropriate for the organization\'s exposure?' },
                    { label: 'Deductibles', q: 'How much risk does the organization retain?' },
                    { label: 'Exclusions', q: 'What situations are excluded?' },
                    { label: 'Conditions', q: 'What cybersecurity requirements must the organization maintain?' },
                    { label: 'Claims response', q: 'What happens when the organization suffers an incident?' },
                    { label: 'Underwriting', q: 'How does the insurer actually assess cyber risk?' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 pb-4 border-b border-[#e5e7eb] last:border-0">
                      <span className="text-[13px] font-semibold text-[#0165FC] w-32 flex-shrink-0 pt-0.5">{item.label}</span>
                      <p className="text-[14px] text-[#4b5563] leading-[1.7]">{item.q}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Static cyber risk */}
              <section aria-labelledby="static-risk" className="mb-14">
                <h2 id="static-risk" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  The problem with static cyber risk
                </h2>
                <div className="space-y-2 text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  <p>A company can improve its security posture. It can also deteriorate.</p>
                  <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 space-y-1.5 my-4">
                    {[
                      'New systems are deployed.',
                      'Employees join and leave.',
                      'Applications change.',
                      'Cloud environments expand.',
                      'New vulnerabilities emerge.',
                      'Attackers discover new techniques.',
                    ].map((item) => (
                      <p key={item} className="text-[14px] text-[#4b5563]">{item}</p>
                    ))}
                  </div>
                  <p>Cyber risk is dynamic. This creates an important question for insurers:</p>
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    How do you maintain visibility into the technology risk you&apos;re insuring?
                  </p>
                </blockquote>
              </section>

              {/* Barbon */}
              <section aria-labelledby="barbon-kenya" className="mb-14 bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8">
                <h2 id="barbon-kenya" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  Enter Barbon
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Barbon is a specialist technology risk intelligence company focused on improving the
                  relationship between cybersecurity and insurance. Barbon brings cybersecurity expertise
                  to the insurance industry.
                </p>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  Rather than asking insurance companies to become cybersecurity companies, Barbon provides
                  specialist technology risk capabilities that can support the cyber insurance ecosystem.
                  The goal is to help insurers and their customers develop a more informed understanding
                  of technology risk.
                </p>
                <blockquote className="border-l-4 border-[#0165FC] pl-4">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    Insurance transfers risk. Barbon helps the insurance industry understand it.
                  </p>
                </blockquote>
              </section>

              {/* Questions */}
              <section aria-labelledby="questions-kenya" className="mb-14">
                <h2 id="questions-kenya" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What should Kenyan organizations ask their insurer?
                </h2>
                <div className="space-y-5">
                  {[
                    { title: 'How do you assess our cyber risk?', body: 'Understand the methodology behind the underwriting process.' },
                    { title: 'How frequently is risk assessed?', body: 'Cyber risk can change after a policy is issued.' },
                    { title: 'What cybersecurity expertise supports the underwriting process?', body: 'Cyber insurance requires an understanding of technology as well as insurance.' },
                    { title: 'What happens during an incident?', body: 'Understand the claims and incident response process before an incident occurs.' },
                    { title: 'What exclusions apply?', body: "Don't wait until a claim to discover what isn't covered." },
                    { title: 'Do you work with specialist cyber risk companies?', body: 'This is an increasingly important question.' },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-[#0165FC] pl-4">
                      <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-1">{item.title}</h3>
                      <p className="text-[14px] text-[#4b5563] leading-[1.7]">{item.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-5 bg-[#0165FC] rounded-[8px]">
                  <p className="text-white text-[16px] font-semibold text-center">
                    Do you partner with Barbon?
                  </p>
                </div>
              </section>

              {/* Closing */}
              <section aria-labelledby="future-kenya" className="mb-8">
                <h2 id="future-kenya" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  Barbon and the future of cyber insurance in Kenya
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-4">
                  Kenya&apos;s technology economy will continue to expand. Cyber insurance will become an
                  increasingly important component of enterprise risk management. But the quality of
                  cyber insurance depends partly on how well cyber risk is understood.
                </p>
                <p className="text-[16px] font-semibold text-[#0a0a0b] mb-2">
                  Don&apos;t just compare premiums. Compare how insurers understand technology risk.
                </p>
                <p className="text-[16px] font-semibold text-[#0165FC]">
                  Ask your insurer whether they partner with Barbon.
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
