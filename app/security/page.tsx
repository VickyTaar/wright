import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhyBarbonOS from '@/components/sections/WhyBarbonOS';
import AISection from '@/components/sections/AISection';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Our Approach — Barbon',
  description:
    'Barbon continuously collects technical signals, scores cyber and AI risk, and delivers insurer-grade intelligence. Learn how our approach differs from traditional questionnaire-based underwriting.',
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Our Approach
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              How we make technology risk
              <br />
              measurable.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              We continuously collect technical signals from across an organization&apos;s
              environment, correlate them against threat intelligence, and deliver
              structured underwriting reports that reflect actual posture — not
              self-reported answers to checkbox questions.
            </p>
          </div>
        </div>
        <AISection />
        <WhyBarbonOS />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
