import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIAssuranceCapabilities from '@/components/sections/ai/AIAssuranceCapabilities';
import CTAEditorial from '@/components/sections/home/CTAEditorial';

export const metadata: Metadata = {
  title: 'AI Risk Assurance — Barbon',
  description:
    'Barbon independently evaluates AI agents and autonomous systems before deployment and monitors them throughout their operational lifecycle — providing insurers with the technical foundation to underwrite AI risk.',
  alternates: {
    canonical: 'https://barbon.tech/ai',
  },
  openGraph: {
    url: 'https://barbon.tech/ai',
    title: 'AI Risk Assurance — Barbon',
    description:
      'Purpose-built technical evaluation framework for autonomous AI systems, covering Security, Governance & Reliability, and Exposure & Compliance.',
  },
};

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Header */}
        <div className="pt-32 pb-16 bg-[#FBFBF9] border-b border-[#E5E3DC]">
          <div className="container-site">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-5">
                Product · AI Risk Assurance
              </span>
              <h1 className="text-[42px] sm:text-[52px] font-serif font-normal text-[#141413] tracking-[-0.025em] leading-[1.08] mb-5">
                The emerging category: AI risk insurance.
              </h1>
              <p className="text-[17px] text-[#52524E] leading-[1.7] max-w-2xl">
                Businesses are deploying AI agents capable of approving purchases, managing infrastructure, and executing workflows autonomously. When an AI system independently causes financial loss, the question of accountability is unanswered. Barbon provides the independent technical assurance framework that enables insurers to underwrite autonomous AI risk with measurable confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Key Context Statement */}
        <div className="bg-[#0F2537] py-14 md:py-18">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="text-[20px] sm:text-[24px] font-serif font-normal text-[#FBFBF9] leading-[1.5]">
                "Before an AI system can be insured, it must be independently assessed. Barbon provides that assessment — evaluating the technical boundaries, decision reliability, and financial exposure of autonomous AI systems so insurers can offer meaningful coverage."
              </p>
            </div>
          </div>
        </div>

        <AIAssuranceCapabilities />
        <CTAEditorial />
      </main>
      <Footer />
    </>
  );
}
