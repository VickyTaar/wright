import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroEditorial from '@/components/sections/home/HeroEditorial';
import PillarsEditorial from '@/components/sections/home/PillarsEditorial';
import PipelineEditorial from '@/components/sections/home/PipelineEditorial';
import ComparisonEditorial from '@/components/sections/home/ComparisonEditorial';
import WhoWeServeEditorial from '@/components/sections/home/WhoWeServeEditorial';
import TeasersEditorial from '@/components/sections/home/TeasersEditorial';
import CTAEditorial from '@/components/sections/home/CTAEditorial';

export const metadata: Metadata = {
  title: 'Barbon — The Underwriting Engine for Cyber Risk',
  description:
    'Barbon continuously measures cyber and AI risk — providing insurers, reinsurers, and brokers with independent, insurer-grade telemetry to underwrite modern technology with confidence. Pioneering cyber insurance in Africa.',
  alternates: {
    canonical: 'https://barbon.tech',
  },
  openGraph: {
    url: 'https://barbon.tech',
    title: 'Barbon — The Underwriting Engine for Cyber Risk',
    description:
      'Continuous technical assessment, explainable risk scoring, and real-time loss prevention telemetry for cyber insurance underwriting.',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroEditorial />
        <PillarsEditorial />
        <PipelineEditorial />
        <ComparisonEditorial />
        <WhoWeServeEditorial />
        <TeasersEditorial />
        <CTAEditorial />
      </main>
      <Footer />
    </>
  );
}
