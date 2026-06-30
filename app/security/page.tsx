import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Security from '@/components/sections/Security';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Security — Barbon OS',
  description:
    'Enterprise-grade security for regulated industries. SOC 2 Type II, ISO 27001, zero-trust architecture, and full audit trails across every workflow.',
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Security & Compliance
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Security for regulated
              <br />
              industries.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Insurance is a regulated industry where a security incident is not
              an option. Barbon OS is designed from the ground up for enterprises
              that cannot afford compromise.
            </p>
          </div>
        </div>
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
