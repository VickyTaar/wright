import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ApproachContent from '@/components/sections/approach/ApproachContent';
import CTAEditorial from '@/components/sections/home/CTAEditorial';

export const metadata: Metadata = {
  title: 'Our Approach — Barbon',
  description:
    'Barbon continuously collects technical telemetry, scores cyber and AI risk independently, and delivers structured underwriting intelligence. Learn how our approach differs from traditional questionnaire-based models.',
  alternates: {
    canonical: 'https://barbon.tech/security',
  },
  openGraph: {
    url: 'https://barbon.tech/security',
    title: 'Our Approach — Barbon',
  },
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-[#FBFBF9] border-b border-[#E5E3DC]">
          <div className="container-site">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-5">
                Our Approach
              </span>
              <h1 className="text-[42px] sm:text-[52px] font-serif font-normal text-[#141413] tracking-[-0.025em] leading-[1.08] mb-5">
                How we make technology risk measurable.
              </h1>
              <p className="text-[17px] text-[#52524E] leading-[1.7] max-w-2xl">
                We continuously collect technical signals from across an organization&apos;s environment, correlate them against global threat intelligence, and deliver structured underwriting reports that reflect actual posture — not self-reported answers to checkbox questions.
              </p>
            </div>
          </div>
        </div>

        <ApproachContent />
        <CTAEditorial />
      </main>
      <Footer />
    </>
  );
}
