import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AISection from '@/components/sections/AISection';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'AI — Barbon OS',
  description:
    'Insurance-specific AI built into every workflow. Fraud detection, document intelligence, risk scoring, and natural language analytics — all on your data.',
};

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              AI Engine
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              AI that understands
              <br />
              insurance.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Barbon OS embeds purpose-built insurance AI across every workflow.
              Not a chatbot layer on top of legacy software. AI native from the ground up.
            </p>
          </div>
        </div>

        <AISection />

        {/* AI capabilities detail */}
        <section className="section-spacing bg-white border-t border-[#e5e7eb]">
          <div className="container-site">
            <div className="max-w-2xl mb-12">
              <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#0a0a0b] mb-4">
                AI capabilities across the platform
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden">
              {[
                {
                  name: 'Claims AI',
                  detail: 'Automated document extraction, inconsistency detection, preliminary assessment, and settlement recommendation.',
                },
                {
                  name: 'Fraud Detection',
                  detail: 'ML models trained on insurance fraud patterns score every claim and flag high-risk submissions before adjuster review.',
                },
                {
                  name: 'Document Intelligence',
                  detail: 'Extract structured data from PDFs, images, spreadsheets, and handwritten forms — at scale, with high accuracy.',
                },
                {
                  name: 'Underwriting AI',
                  detail: 'Risk scoring models assist underwriters with preliminary assessments, suggested pricing, and portfolio exposure analysis.',
                },
                {
                  name: 'NLP Analytics',
                  detail: 'Query your entire insurance portfolio in plain language. Ask questions, get structured answers with sources.',
                },
                {
                  name: 'Predictive Renewals',
                  detail: 'Identify policies at risk of lapsing before renewal date and surface recommendations to retention teams.',
                },
              ].map((cap) => (
                <div key={cap.name} className="bg-white p-6">
                  <h3 className="text-[14px] font-semibold text-[#0a0a0b] mb-2">{cap.name}</h3>
                  <p className="text-[13px] text-[#6b7280] leading-[1.6]">{cap.detail}</p>
                </div>
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
