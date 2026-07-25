import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Security from '@/components/sections/Security';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'AI Risk Assurance — Barbon',
  description:
    'Barbon independently evaluates AI systems before deployment and continuously monitors them once live — providing insurers with the technical confidence needed to underwrite autonomous AI risk.',
};

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              AI Risk Assurance
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              The emerging category:
              <br />
              AI risk insurance.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Businesses are deploying AI agents capable of approving purchases, managing
              infrastructure, and executing workflows autonomously. Traditional insurance
              products were never designed for this. Barbon provides the independent
              technical assurance that enables insurers to underwrite AI systems with
              measurable confidence.
            </p>
          </div>
        </div>

        <Security />

        {/* AI capabilities detail */}
        <section className="section-spacing bg-white border-t border-[#e5e7eb]">
          <div className="container-site">
            <div className="max-w-2xl mb-12">
              <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#0a0a0b] mb-4">
                Continuous AI monitoring — once deployed
              </h2>
              <p className="text-[17px] text-[#6b7280] leading-[1.7]">
                Our assessment does not end at deployment. Once an AI system is operational,
                Barbon continuously monitors for changes that may materially alter the risk
                profile — detecting increasing operational risk before financial loss occurs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden">
              {[
                {
                  name: 'Permission Changes',
                  detail: 'Detection of expansions in AI agent permissions that increase autonomous action scope beyond original assessment boundaries.',
                },
                {
                  name: 'Prompt & Model Updates',
                  detail: 'Monitoring of system prompt modifications and model upgrades that may alter decision behaviour or safety characteristics.',
                },
                {
                  name: 'Tool & API Changes',
                  detail: 'Continuous tracking of new tool integrations and API connections that extend the AI system\'s operational capabilities.',
                },
                {
                  name: 'Risk Drift Detection',
                  detail: 'Algorithmic monitoring for gradual degradation in safety, governance, or reliability metrics over time.',
                },
                {
                  name: 'Operational Anomalies',
                  detail: 'Real-time flagging of unexpected behaviour, unusual decision patterns, and outputs that deviate from established baselines.',
                },
                {
                  name: 'Cost & Compliance Monitoring',
                  detail: 'Tracking of cost anomalies, regulatory compliance drift, and changes in the legal or standards landscape affecting the AI system.',
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
