import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PlatformOverview from '@/components/sections/PlatformOverview';
import Features from '@/components/sections/Features';
import Integrations from '@/components/sections/Integrations';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Cyber Risk Intelligence - Barbon',
  description:
    'Barbon enables insurers to confidently issue and manage cyber insurance through continuous technical assessment, independent risk scoring, and real-time threat intelligence.',
  alternates: {
    canonical: 'https://barbon.tech/platform',
  },
  openGraph: {
    url: 'https://barbon.tech/platform',
  },
};

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page header */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Cyber Risk Intelligence
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Continuous technical assessment
              <br />
              for cyber underwriting.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Barbon evaluates organizations throughout the policy lifecycle - not just at
              renewal. Our platform continuously collects technical signals, scores cyber
              risk, and delivers insurer-grade intelligence that supports confident
              underwriting decisions.
            </p>
          </div>
        </div>
        <PlatformOverview />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
