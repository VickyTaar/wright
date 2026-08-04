import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Industries from '@/components/sections/Industries';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Who We Serve - Barbon',
  description:
    'Barbon serves insurers, brokers, MGAs, enterprise organizations, technology providers, and financial institutions - providing technology risk intelligence across the insurance ecosystem.',
  alternates: {
    canonical: 'https://barbon.tech/solutions',
  },
  openGraph: {
    url: 'https://barbon.tech/solutions',
  },
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
              Who We Serve
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Technology intelligence for
              <br />
              every stakeholder.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              From insurers and brokers to enterprise organizations and AI system
              developers - Barbon provides the independent technical intelligence
              each stakeholder needs to navigate the technology risk landscape with
              measurable confidence.
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
