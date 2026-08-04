
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About - Barbon Insurance Technologies',
  description:
    'Barbon Insurance Technologies is a Technology Risk Intelligence company. We sit between cybersecurity, artificial intelligence, and insurance - making emerging technology insurable.',
  alternates: {
    canonical: 'https://barbon.tech/about',
  },
  openGraph: {
    url: 'https://barbon.tech/about',
  },
};

const values = [
  {
    name: 'Independent by design.',
    description: 'We are not a cybersecurity vendor. We are not an insurer. We have no commercial relationship with the technologies we assess - which means our intelligence is always objective, and our incentives always align with accuracy.',
  },
  {
    name: 'Continuous, not annual.',
    description: 'Technology risk changes every day. An annual questionnaire cannot reflect reality. Our platform monitors continuously - so insurers have current intelligence, not last year\'s snapshot.',
  },
  {
    name: 'Intelligence, not compliance.',
    description: 'Compliance frameworks tell you whether controls exist. We tell you whether they are working - and whether they are actually reducing the probability of a loss. Those are very different questions.',
  },
  {
    name: 'Insurers first.',
    description: 'Our primary obligation is to the insurers and brokers who depend on our intelligence to make underwriting decisions. Everything we build is designed to make technology risk measurable, explainable, and actionable for them.',
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
              About Barbon
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Making technology risk
              <br />
              insurable.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Barbon Insurance Technologies is a Technology Risk Intelligence company.
              We sit between cybersecurity, artificial intelligence, and insurance - helping insurers understand, measure, and continuously manage the risks
              that define modern digital operations.
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
                    Traditional cybersecurity protects businesses. Traditional insurance
                    protects businesses after losses occur. Barbon continuously reduces the
                    probability that losses occur in the first place.
                  </p>
                  <p>
                    We believe insurance should no longer rely solely on questionnaires and
                    historical loss data. Technology changes every day. Cyber threats change
                    every hour. AI systems learn continuously. Traditional underwriting
                    cannot keep pace.
                  </p>
                  <p>
                    We don&apos;t sell cybersecurity products. We don&apos;t replace cybersecurity vendors.
                    We don&apos;t replace insurance companies. We make technology risk measurable.
                    We help insurers understand it. We help organizations reduce it.
                  </p>
                  <p>
                    Our mission is to become the global trust layer between technology and
                    insurance - enabling the confident underwriting of digital systems that
                    evolve faster than traditional models can assess.
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
