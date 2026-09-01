import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';
import BCIBrokerForm from '@/components/sections/BCIBrokerForm';

export const metadata: Metadata = {
  title: 'Introducing the Barbon BCI Program | Barbon',
  description:
    'Barbon BCI — the Barbon Cyber Insurance Program — gives insurance brokers a structured way to identify clients with meaningful technology exposure, understand their risk, and create a pathway toward cyber insurance.',
  alternates: {
    canonical: 'https://barbon.tech/resources/barbon-bci-program',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/barbon-bci-program',
  },
};

export default function BarbonBCIProgramPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Insights · Brokers
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#0a0a0b] mb-4 max-w-3xl">
              Introducing the Barbon BCI Program
            </h1>
            <p className="text-[20px] font-medium text-[#4b5563] mb-6 max-w-2xl">
              Turning Cyber Risk Into Cyber Insurance Opportunities for Brokers
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
                <p>Cyber risk is no longer a concern reserved for technology companies.</p>
                <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 space-y-1.5">
                  {[
                    'Banks',
                    'Hotels',
                    'Manufacturers',
                    'Healthcare providers',
                    'Professional firms',
                    'Retailers',
                    'Schools',
                    'Logistics companies',
                  ].map((item) => (
                    <p key={item} className="text-[14px] text-[#4b5563]">
                      <span className="text-[#0165FC] font-bold mr-2">›</span>
                      {item}
                    </p>
                  ))}
                  <p className="text-[14px] text-[#4b5563] pt-1">
                    …and virtually every modern business now depends on technology to operate.
                  </p>
                </div>
                <p>And where there is technology dependency, there is cyber risk.</p>
                <p>Yet one question remains increasingly important for insurance brokers:</p>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    How do we turn that growing cyber exposure into meaningful cyber insurance opportunities?
                  </p>
                </blockquote>
                <p>
                  That is where <strong className="text-[#0a0a0b]">Barbon BCI Program, the Barbon Cyber Insurance Program</strong>, comes in.
                </p>
              </div>

              {/* A new opportunity */}
              <section aria-labelledby="new-opportunity" className="mb-14">
                <h2 id="new-opportunity" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  A new opportunity for insurance brokers
                </h2>
                <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  <p>
                    Insurance brokers already have something incredibly valuable:{' '}
                    <strong className="text-[#0a0a0b]">trusted relationships with businesses.</strong>
                  </p>
                  <p>
                    You understand your clients. You understand their operations, their existing insurance
                    portfolios and the risks they face.
                  </p>
                  <p>But cyber insurance can sometimes be a difficult conversation to start.</p>
                  <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5 space-y-1.5">
                    {[
                      'A client may not know whether they need cyber insurance.',
                      'They may believe their existing cybersecurity controls are sufficient.',
                      'They may not understand the financial consequences of a cyber incident.',
                    ].map((item) => (
                      <p key={item} className="text-[14px] text-[#4b5563]">{item}</p>
                    ))}
                  </div>
                  <p>
                    And from the broker&apos;s perspective, identifying which clients represent the strongest
                    cyber insurance opportunities can be challenging.
                  </p>
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    Barbon BCI is designed to change that.
                  </p>
                </blockquote>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mt-5">
                  The program gives brokers a structured way to identify clients with meaningful technology
                  exposure, understand their risk, engage them around that risk and ultimately create a
                  pathway toward cyber insurance.
                </p>
              </section>

              {/* Existing portfolio */}
              <section aria-labelledby="existing-portfolio" className="mb-14">
                <h2 id="existing-portfolio" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Your clients already have cyber risk
                </h2>
                <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  <p>The opportunity isn&apos;t necessarily to find new clients.</p>
                  <p>It may already exist within your existing portfolio.</p>
                  <p>Consider a business that:</p>
                  <ul className="space-y-2">
                    {[
                      'Processes customer information',
                      'Relies heavily on cloud applications',
                      'Accepts digital payments',
                      'Operates online systems',
                      'Has employees accessing corporate networks remotely',
                      'Depends on third party technology providers',
                      'Stores sensitive or commercially valuable information',
                      'Could suffer significant financial disruption following a cyber incident',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-[#4b5563]">
                        <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>That business already has cyber exposure.</p>
                  <p>The question is:</p>
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-6 py-1 bg-[#f0f5ff] rounded-r-[6px]">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    Does it understand that exposure, and is it adequately insured against it?
                  </p>
                </blockquote>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mt-5">
                  BCI helps brokers turn that question into a conversation.
                </p>
              </section>

              {/* Journey */}
              <section aria-labelledby="bci-journey" className="mb-14">
                <h2 id="bci-journey" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-2">
                  From risk identification to insurance
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-8">
                  The Barbon BCI Program is built around a simple journey:
                </p>

                {/* Journey steps */}
                <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                  {['Identify', 'Assess', 'Prepare', 'Insure', 'Monitor'].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2 flex-shrink-0">
                      <div className="bg-[#0165FC] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full">
                        {step}
                      </div>
                      {i < arr.length - 1 && (
                        <span className="text-[#d1d5db] text-[18px]">›</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  {[
                    {
                      id: 'step-identify',
                      step: 'Identify',
                      body: 'Identify clients within your existing portfolio that may have significant cyber exposure and could benefit from cyber insurance.',
                    },
                    {
                      id: 'step-assess',
                      step: 'Assess',
                      body: "Use Barbon's technology risk intelligence to develop a clearer understanding of the client's technology environment and cyber risk.",
                    },
                    {
                      id: 'step-prepare',
                      step: 'Prepare',
                      body: 'Give the client visibility into areas that may require attention and help them become better prepared for cyber insurance.',
                    },
                    {
                      id: 'step-insure',
                      step: 'Insure',
                      body: 'Use better risk information to support the cyber insurance conversation and facilitate the placement process with insurance markets.',
                    },
                    {
                      id: 'step-monitor',
                      step: 'Monitor',
                      body: 'Cyber risk doesn\u2019t remain static. Technology changes. Systems change. Employees change. Vendors change. Threats change. BCI enables continued visibility into technology risk beyond the initial insurance placement.',
                    },
                  ].map((item) => (
                    <div key={item.id} className="flex gap-5 pb-6 border-b border-[#e5e7eb] last:border-0">
                      <div className="flex-shrink-0 w-[90px]">
                        <span className="text-[13px] font-semibold text-[#0165FC]">{item.step}</span>
                      </div>
                      <p className="text-[15px] text-[#4b5563] leading-[1.7]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* More than assessment */}
              <section aria-labelledby="more-than-assessment" className="mb-14">
                <h2 id="more-than-assessment" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  More than a cyber assessment
                </h2>
                <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-8">
                  <p>BCI isn&apos;t designed to turn insurance brokers into cybersecurity consultants.</p>
                  <p>And it isn&apos;t designed to replace the broker.</p>
                  <p>
                    <strong className="text-[#0a0a0b]">The broker remains at the centre of the client relationship.</strong>
                  </p>
                  <p>Barbon provides the technology risk intelligence that supports that relationship.</p>
                  <p>This creates a simple division of value:</p>
                </div>
                <div className="bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8 space-y-4">
                  {[
                    {
                      label: 'The broker',
                      value: 'brings the relationship and insurance expertise.',
                    },
                    {
                      label: 'Barbon',
                      value: 'brings technology risk intelligence.',
                    },
                    {
                      label: 'The insurer',
                      value: 'provides insurance capacity and underwriting expertise.',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 pb-4 border-b border-[#dce8ff] last:border-0 last:pb-0">
                      <span className="text-[13px] font-semibold text-[#0165FC] w-28 flex-shrink-0 pt-0.5">
                        {item.label}
                      </span>
                      <p className="text-[14px] text-[#4b5563] leading-[1.7]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mt-6">
                  The result is a more informed journey from technology risk to insurance.
                </p>
              </section>

              {/* Portfolio opportunity */}
              <section aria-labelledby="portfolio-opportunity" className="mb-14">
                <h2 id="portfolio-opportunity" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Turn your existing portfolio into a cyber opportunity
                </h2>
                <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  <p>
                    For brokers, one of the biggest opportunities may not be finding another client.
                  </p>
                  <p>
                    It may be finding another insurance opportunity{' '}
                    <strong className="text-[#0a0a0b]">within the clients you already have.</strong>
                  </p>
                  <p>
                    A commercial client that already purchases property, liability, professional indemnity,
                    business interruption or other forms of insurance may also have significant cyber
                    exposure.
                  </p>
                  <p>BCI provides brokers with a way to introduce that conversation.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-[6px] p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-2">
                      Instead of simply asking
                    </p>
                    <p className="text-[15px] text-[#6b7280] leading-[1.6] italic">
                      &ldquo;Would you like cyber insurance?&rdquo;
                    </p>
                  </div>
                  <div className="bg-[#0165FC] rounded-[6px] p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-[#93bbfe] mb-2">
                      The conversation becomes
                    </p>
                    <p className="text-[15px] text-white font-medium leading-[1.6]">
                      &ldquo;Let&apos;s first understand your technology risk, then determine what protection
                      makes sense for your business.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-[16px] text-[#4b5563] leading-[1.8]">
                  <p>That is a fundamentally different conversation.</p>
                  <p>It starts with the client&apos;s risk rather than the insurance product.</p>
                </div>
              </section>

              {/* Ecosystem */}
              <section aria-labelledby="ecosystem" className="mb-14 bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-8">
                <h2 id="ecosystem" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Building a stronger cyber insurance ecosystem
                </h2>
                <div className="space-y-4 text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  <p>
                    We believe the future of cyber insurance requires closer alignment between technology
                    risk and insurance.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Businesses need better visibility into their cyber exposure.',
                      'Brokers need better tools to identify and develop cyber insurance opportunities.',
                      'Insurers need better information to understand the risks they are underwriting.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-[15px] text-[#4b5563]">
                        <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p>BCI is designed to help connect these three parts of the ecosystem.</p>
                </div>
                <blockquote className="border-l-4 border-[#0165FC] pl-4">
                  <p className="text-[16px] font-semibold text-[#0a0a0b]">
                    Better risk visibility can lead to better risk conversations, better preparation and
                    ultimately better insurance decisions.
                  </p>
                </blockquote>
              </section>

              {/* BCI Program summary */}
              <section aria-labelledby="bci-summary" className="mb-14">
                <h2 id="bci-summary" className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Barbon BCI Program
                </h2>
                <div className="space-y-3 text-[16px] text-[#4b5563] leading-[1.8] mb-8">
                  <p>
                    The <strong className="text-[#0a0a0b]">Barbon BCI Program</strong> is being introduced
                    for insurance brokers who want to build cyber insurance into their client offering and
                    develop new opportunities within their existing commercial portfolios.
                  </p>
                  <p>If you are an insurance broker looking to:</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Identify more cyber insurance opportunities',
                    'Understand your clients\u2019 technology risk',
                    'Create stronger cyber insurance conversations',
                    'Prepare clients for cyber insurance',
                    'Differentiate your brokerage',
                    'Build a recurring cyber risk relationship with clients',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] font-semibold text-[#0a0a0b]">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#0165FC] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-8">
                  …then BCI is built for you.
                </p>
                <div className="bg-[#0a0a0b] rounded-[8px] p-8 text-center space-y-2">
                  <p className="text-white text-[20px] font-bold tracking-[-0.01em]">
                    Your clients already have cyber risk.
                  </p>
                  <p className="text-[#a1a1aa] text-[16px]">
                    Let&apos;s turn that risk into an insurance opportunity.
                  </p>
                  <div className="pt-4 space-y-1">
                    <p className="text-[#0165FC] text-[15px] font-semibold">Barbon BCI Program</p>
                    <p className="text-[#6b7280] text-[13px] italic">Barbon Cyber Insurance Program</p>
                    <p className="text-[#a1a1aa] text-[13px] mt-2">From cyber risk to cyber insurance.</p>
                  </div>
                </div>
              </section>

              {/* Register Interest Form */}
              <section aria-labelledby="bci-register" className="mb-14">
                <h2
                  id="bci-register"
                  className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-2"
                >
                  Register your interest
                </h2>
                <p className="text-[16px] text-[#4b5563] leading-[1.8] mb-6">
                  If you are an insurance broker interested in the Barbon BCI
                  Program, fill in the form below and a member of our team will
                  be in touch.
                </p>
                <BCIBrokerForm />
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
