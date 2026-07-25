import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';
import { ArrowRight, FileText, BookOpen, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights - Barbon',
  description:
    'Frameworks, guides, and technical intelligence from Barbon - covering cyber risk underwriting, AI risk assurance, vendor assurance methodology, and continuous monitoring.',
};

const resources = [
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'Cyber Insurance Underwriting in the Age of Continuous Risk',
    description: 'How continuous technical assessment changes the underwriting model - and why annual questionnaires are no longer sufficient for modern cyber risk.',
    href: '/resources/cyber-underwriting-guide',
  },
  {
    type: 'Framework',
    icon: FileText,
    title: 'AI Risk Assurance Framework',
    description: 'Barbon\'s structured methodology for independently evaluating autonomous AI systems - covering security, governance, reliability, and financial exposure.',
    href: '/resources/ai-risk-framework',
  },
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'Vendor Assurance Methodology',
    description: 'How Barbon independently validates whether cybersecurity vendors are reducing organizational risk - not just fulfilling contractual requirements.',
    href: '/resources/vendor-assurance',
  },
  {
    type: 'Overview',
    icon: BarChart3,
    title: 'Continuous Monitoring: What We Collect and Why',
    description: 'A technical overview of the signal sources, monitoring cadence, and intelligence transformations that power Barbon\'s risk scoring engine.',
    href: '/resources/continuous-monitoring',
  },
  {
    type: 'Framework',
    icon: FileText,
    title: 'Cyber Risk Scoring Methodology',
    description: 'The technical specification behind Barbon\'s proprietary Cyber Risk Score - inputs, weightings, model assumptions, and interpretation guidance.',
    href: '/resources/risk-scoring',
  },
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'AI Governance for Insurance Underwriters',
    description: 'A practical guide for underwriters evaluating AI risk - covering governance frameworks, regulatory landscape, and assessment criteria.',
    href: '/resources/ai-governance-guide',
  },
];

const typeColors: Record<string, string> = {
  Guide:     'bg-[#e8f0fe] text-[#0165FC]',
  Framework: 'bg-[#f7f8fa] text-[#6b7280]',
  Overview:  'bg-[#ecfdf5] text-[#059669]',
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Insights
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Frameworks &amp; intelligence.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Guides, methodologies, and technical frameworks for insurers, brokers,
              and organizations navigating the intersection of technology risk
              and insurance.
            </p>
          </div>
        </div>

        <section className="section-spacing bg-[#f7f8fa]" aria-labelledby="resources-list">
          <div className="container-site">
            <h2 id="resources-list" className="sr-only">All insights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((res) => (
                <Link
                  key={res.title}
                  href={res.href}
                  className="bg-white border border-[#e5e7eb] rounded-[6px] p-5 hover:border-[#d1d5db] hover:shadow-sm transition-all group block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-[3px] ${typeColors[res.type]}`}>
                      {res.type}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <res.icon size={16} className="text-[#9ca3af] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#0a0a0b] mb-1.5 group-hover:text-[#0165FC] transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-[13px] text-[#6b7280] leading-[1.6]">{res.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[12px] font-medium text-[#0165FC]">
                    Read more <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
