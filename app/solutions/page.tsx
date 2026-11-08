import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhoWeServeDetailed from '@/components/sections/solutions/WhoWeServeDetailed';
import CTAEditorial from '@/components/sections/home/CTAEditorial';

export const metadata: Metadata = {
  title: 'Who We Serve — Barbon',
  description:
    'Barbon serves insurers, reinsurers, brokers, MGAs, enterprise organizations, AI developers, regulators, and financial institutions — providing technology risk intelligence across the full insurance ecosystem.',
  alternates: {
    canonical: 'https://barbon.tech/solutions',
  },
  openGraph: {
    url: 'https://barbon.tech/solutions',
    title: 'Who We Serve — Barbon',
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-[#FBFBF9] border-b border-[#E5E3DC]">
          <div className="container-site">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-5">
                Who We Serve
              </span>
              <h1 className="text-[42px] sm:text-[52px] font-serif font-normal text-[#141413] tracking-[-0.025em] leading-[1.08] mb-5">
                Technology intelligence for every stakeholder.
              </h1>
              <p className="text-[17px] text-[#52524E] leading-[1.7] max-w-2xl">
                From insurers and brokers to enterprise organizations and AI system developers — Barbon provides the independent technical intelligence each stakeholder needs to navigate technology risk with measurable confidence. We partner with insurers across Africa and beyond to pioneer cyber insurance in markets that need it most.
              </p>
            </div>
          </div>
        </div>

        <WhoWeServeDetailed />
        <CTAEditorial />
      </main>
      <Footer />
    </>
  );
}
