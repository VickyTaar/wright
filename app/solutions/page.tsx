import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Industries from '@/components/sections/Industries';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Solutions — Barbon OS',
  description:
    'Barbon OS powers general insurance, health, life, agriculture, marine, bancassurance, microinsurance, and employee benefits operations.',
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page header */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Solutions
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Purpose-built for every
              <br />
              insurance vertical.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              From general insurers to microinsurance platforms — Barbon OS is
              configured for your specific model, not adapted from a generic template.
            </p>
          </div>
        </div>
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
