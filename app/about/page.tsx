import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About — Wright',
  description:
    'Wright builds Barbon OS — the operating system for modern insurance companies. Learn about our mission, approach, and team.',
};

const values = [
  {
    name: 'Engineering first.',
    description: 'We believe insurance infrastructure should be built with the same rigour as the systems that power financial markets. Every design decision starts with the question: is this the right thing to build?',
  },
  {
    name: 'Specificity over generality.',
    description: 'Generic software forces insurance companies to adapt their operations to the tool. We build specifically for insurance — so the software adapts to the operation.',
  },
  {
    name: 'Security is not optional.',
    description: 'We operate in a regulated industry handling sensitive data. Security is a first-class concern in every product decision, not a compliance checkbox.',
  },
  {
    name: 'Long-term thinking.',
    description: 'Insurance is a long-duration business. We build systems designed to last — with stable APIs, backward compatibility, and sustainable architecture.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              About Wright
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Building the infrastructure
              <br />
              insurance deserves.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Wright is an enterprise software company. We build Barbon OS — a
              modern operating system for insurance companies that are serious
              about how their technology operates.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="section-spacing bg-white" aria-labelledby="mission-heading">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 id="mission-heading" className="text-[28px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  Why we exist
                </h2>
                <div className="space-y-4 text-[16px] text-[#6b7280] leading-[1.75]">
                  <p>
                    Insurance companies run on software that was never designed for
                    the demands of modern operations — AI-driven workflows, real-time
                    data, API-first integrations, and compliance at scale.
                  </p>
                  <p>
                    Barbon OS is our answer to that gap. A platform built from first
                    principles for what insurance operations actually need — not what
                    the legacy vendors have adapted their old products to claim they can do.
                  </p>
                  <p>
                    We are not an insurance company. We are the company that builds
                    the infrastructure other insurance companies run on.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-[28px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-5">
                  What we believe
                </h2>
                <div className="space-y-5">
                  {values.map((v) => (
                    <div key={v.name} className="border-l-2 border-[#0165FC] pl-4">
                      <h3 className="text-[14px] font-semibold text-[#0a0a0b] mb-1">{v.name}</h3>
                      <p className="text-[14px] text-[#6b7280] leading-[1.65]">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
