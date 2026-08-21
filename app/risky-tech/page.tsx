import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RiskyTechHero from '@/components/sections/RiskyTechHero';
import RiskyTechTable from '@/components/sections/RiskyTechTable';
import RiskyTechOverview from '@/components/sections/RiskyTechOverview';
import RiskyTechCharts from '@/components/sections/RiskyTechCharts';
import RiskyTechCTA from '@/components/sections/RiskyTechCTA';

export const metadata: Metadata = {
  title: 'Barbon Risk Index 2026 - Technology Risk Index | Barbon',
  description:
    'Explore the 2026 Barbon Risk Index: A data-driven index evaluating commercial technology providers based on vulnerability exploitability, NIST CPE mapping, and threat score density.',
  alternates: {
    canonical: 'https://barbon.tech/risky-tech',
  },
  openGraph: {
    title: 'Barbon Risk Index 2026 | Barbon OS Risk Intelligence',
    description:
      'Continuous evaluation of technology vendors scored by exploitability and vulnerability density to empower informed cyber underwriting and enterprise technology decisions.',
    url: 'https://barbon.tech/risky-tech',
  },
};

export default function RiskyTechPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        <RiskyTechHero />
        <RiskyTechTable />
        <RiskyTechOverview />
        <RiskyTechCharts />
        <RiskyTechCTA />
      </main>
      <Footer />
    </>
  );
}
