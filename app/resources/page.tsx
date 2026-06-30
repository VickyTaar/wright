import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';
import { ArrowRight, FileText, BookOpen, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources — Barbon OS',
  description:
    'Documentation, guides, and technical resources for Barbon OS. Learn how to integrate, configure, and scale your insurance operations.',
};

const resources = [
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'Getting Started with Barbon OS',
    description: 'A step-by-step introduction to your Barbon OS environment — from initial configuration to your first policy.',
    href: '/resources/getting-started',
  },
  {
    type: 'Documentation',
    icon: FileText,
    title: 'API Reference',
    description: 'Complete OpenAPI 3.0 documentation for all Barbon OS endpoints — with request examples and response schemas.',
    href: '/resources/api-reference',
  },
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'Configuring Claims Workflows',
    description: 'How to design, test, and deploy automated claims workflows using the Barbon OS workflow builder.',
    href: '/resources/claims-workflows',
  },
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'RBAC and Permission Management',
    description: 'Best practices for designing role hierarchies, managing permissions at scale, and enforcing least-privilege.',
    href: '/resources/rbac',
  },
  {
    type: 'Documentation',
    icon: FileText,
    title: 'Integration Guide',
    description: 'How to connect Barbon OS to payment processors, banking APIs, identity providers, and third-party systems.',
    href: '/resources/integrations',
  },
  {
    type: 'Webinar',
    icon: Video,
    title: 'AI in Claims Processing',
    description: 'A recorded walkthrough of the AI claims pipeline — from document ingestion to settlement recommendation.',
    href: '/resources/ai-claims-webinar',
  },
];

const typeColors: Record<string, string> = {
  Guide: 'bg-[#e8f0fe] text-[#0165FC]',
  Documentation: 'bg-[#f7f8fa] text-[#6b7280]',
  Webinar: 'bg-[#ecfdf5] text-[#059669]',
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Resources
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Documentation &amp; guides.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Technical resources for teams implementing, operating, and extending
              Barbon OS across their insurance business.
            </p>
          </div>
        </div>

        <section className="section-spacing bg-[#f7f8fa]" aria-labelledby="resources-list">
          <div className="container-site">
            <h2 id="resources-list" className="sr-only">All resources</h2>
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
