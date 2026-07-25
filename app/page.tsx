import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import PlatformOverview from '@/components/sections/PlatformOverview';
import AISection from '@/components/sections/AISection';
import DashboardSection from '@/components/sections/DashboardSection';
import Features from '@/components/sections/Features';
import Integrations from '@/components/sections/Integrations';
import Security from '@/components/sections/Security';
import Industries from '@/components/sections/Industries';
import WhyBarbonOS from '@/components/sections/WhyBarbonOS';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Barbon — Technology Risk Intelligence for Insurance',
  description:
    'Barbon enables insurers to confidently underwrite cyber and AI risks through continuous technical assessment, real-time risk intelligence, and independent validation. We make technology risk measurable.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <PlatformOverview />
        <AISection />
        <DashboardSection />
        <Features />
        <Integrations />
        <Security />
        <Industries />
        <WhyBarbonOS />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
