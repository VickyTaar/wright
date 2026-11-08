import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CyberRiskCapabilities from '@/components/sections/platform/CyberRiskCapabilities';
import SignalSourcesDisplay from '@/components/sections/platform/SignalSourcesDisplay';
import CTAEditorial from '@/components/sections/home/CTAEditorial';

export const metadata: Metadata = {
  title: 'Cyber Risk Intelligence — Barbon',
  description:
    'Barbon provides continuous technical cyber risk assessments and real-time underwriting telemetry — replacing annual questionnaires with an empirical, insurer-grade intelligence pipeline.',
  alternates: {
    canonical: 'https://barbon.tech/platform',
  },
  openGraph: {
    url: 'https://barbon.tech/platform',
    title: 'Cyber Risk Intelligence — Barbon',
    description:
      'Continuous technical telemetry, explainable risk scoring, and independent control validation for confident cyber underwriting.',
  },
};

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Header */}
        <div className="pt-32 pb-16 bg-[#FBFBF9] border-b border-[#E5E3DC]">
          <div className="container-site">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-5">
                Product · Cyber Risk Intelligence
              </span>
              <h1 className="text-[42px] sm:text-[52px] font-serif font-normal text-[#141413] tracking-[-0.025em] leading-[1.08] mb-5">
                Continuous technical assessment for cyber underwriting.
              </h1>
              <p className="text-[17px] text-[#52524E] leading-[1.7] max-w-2xl">
                Barbon evaluates organizations throughout the entire policy lifecycle — not just at renewal. We continuously collect technical telemetry, score cyber risk independently, and deliver structured underwriting intelligence that enables confident risk decisions without relying on self-attestation.
              </p>
            </div>
          </div>
        </div>

        <CyberRiskCapabilities />
        <SignalSourcesDisplay />
        <CTAEditorial />
      </main>
      <Footer />
    </>
  );
}
