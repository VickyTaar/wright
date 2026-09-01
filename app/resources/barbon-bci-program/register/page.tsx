import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BCIBrokerForm from '@/components/sections/BCIBrokerForm';

export const metadata: Metadata = {
  title: 'Register Interest - Barbon BCI Program | Barbon',
  description:
    'Register your interest in the Barbon BCI Program. A structured program for insurance brokers to identify cyber risk in their existing commercial portfolios and turn it into cyber insurance opportunities.',
  alternates: {
    canonical: 'https://barbon.tech/resources/barbon-bci-program/register',
  },
  openGraph: {
    url: 'https://barbon.tech/resources/barbon-bci-program/register',
  },
};

const journey = [
  { step: 'Identify', body: 'Identify clients in your existing portfolio with significant cyber exposure.' },
  { step: 'Assess', body: "Use Barbon's technology risk intelligence to understand the client's risk environment." },
  { step: 'Prepare', body: 'Help clients understand areas that need attention and become better prepared for cyber insurance.' },
  { step: 'Insure', body: 'Use better risk information to support the cyber insurance conversation and placement.' },
  { step: 'Monitor', body: 'Maintain continued visibility into technology risk beyond the initial insurance placement.' },
];

export default function BCIRegisterPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <Link
              href="/resources/barbon-bci-program"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0165FC] mb-6 hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M8.5 3L5 7l3.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to BCI Program
            </Link>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Barbon BCI Program
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] text-[#0a0a0b] mb-4 max-w-2xl">
              Register your interest
            </h1>
            <p className="text-[18px] text-[#4b5563] max-w-xl leading-[1.7]">
              For insurance brokers who want to build cyber insurance into their client offering and identify new opportunities within their existing commercial portfolios.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="section-spacing bg-white">
          <div className="container-site">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

              {/* Left: Program summary */}
              <div>
                <h2 className="text-[20px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-4">
                  What is the Barbon BCI Program?
                </h2>
                <div className="space-y-3 text-[15px] text-[#4b5563] leading-[1.8] mb-8">
                  <p>
                    The <strong className="text-[#0a0a0b]">Barbon BCI Program (Barbon Cyber Insurance Program)</strong> gives insurance brokers a structured way to identify clients with meaningful technology exposure, understand their risk, and create a pathway toward cyber insurance.
                  </p>
                  <p>
                    The broker remains at the centre of the client relationship. Barbon provides the technology risk intelligence that supports it.
                  </p>
                </div>

                {/* Journey */}
                <h3 className="text-[14px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-4">
                  The BCI Journey
                </h3>
                <div className="space-y-0 border border-[#e5e7eb] rounded-[8px] overflow-hidden mb-8">
                  {journey.map((item, i) => (
                    <div key={item.step} className={`flex gap-4 p-4 ${i < journey.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}>
                      <span className="text-[12px] font-semibold text-[#0165FC] w-[72px] flex-shrink-0 pt-0.5">
                        {item.step}
                      </span>
                      <p className="text-[14px] text-[#4b5563] leading-[1.6]">{item.body}</p>
                    </div>
                  ))}
                </div>

                {/* Value division */}
                <div className="bg-[#f0f5ff] border border-[#dce8ff] rounded-[8px] p-6 space-y-3">
                  {[
                    { label: 'The broker', value: 'brings the relationship and insurance expertise.' },
                    { label: 'Barbon', value: 'brings technology risk intelligence.' },
                    { label: 'The insurer', value: 'provides capacity and underwriting expertise.' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 pb-3 border-b border-[#dce8ff] last:border-0 last:pb-0">
                      <span className="text-[12px] font-semibold text-[#0165FC] w-24 flex-shrink-0 pt-0.5">
                        {item.label}
                      </span>
                      <p className="text-[13px] text-[#4b5563] leading-[1.6]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:sticky lg:top-28">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
                  Broker registration
                </p>
                <BCIBrokerForm />
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
