
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
    description:
      'We are not a cybersecurity vendor. We are not an insurer. We have no commercial relationship with the technologies we assess — which means our intelligence is always objective, and our incentives always align with accuracy.',
  },
  {
    name: 'Continuous, not annual.',
    description:
      "Technology risk changes every day. An annual questionnaire cannot reflect reality. Our platform monitors continuously — so insurers have current intelligence, not last year's snapshot.",
  },
  {
    name: 'Intelligence, not compliance.',
    description:
      'Compliance frameworks tell you whether controls exist. We tell you whether they are working — and whether they are actually reducing the probability of a loss. Those are very different questions.',
  },
  {
    name: 'Insurers first.',
    description:
      'Our primary obligation is to the insurers and brokers who depend on our intelligence to make underwriting decisions. Everything we build is designed to make technology risk measurable, explainable, and actionable for them.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <div className="pt-32 pb-16 bg-[#FBFBF9] border-b border-[#E5E3DC]">
          <div className="container-site">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#767670] mb-4">
              About Barbon
            </p>
            <h1 className="font-serif text-[42px] md:text-[54px] leading-[1.08] tracking-[-0.02em] text-[#141413] mb-5 max-w-2xl">
              Making technology risk insurable.
            </h1>
            <p className="text-[18px] text-[#52524E] leading-[1.75] max-w-xl">
              Barbon Insurance Technologies is a Technology Risk Intelligence company. We sit between cybersecurity,
              artificial intelligence, and insurance — helping insurers understand, measure, and continuously manage the risks
              that define modern digital operations.
            </p>
          </div>
        </div>

        {/* Mission + Values */}
        <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="mission-heading">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 id="mission-heading" className="font-serif text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.015em] text-[#141413] mb-6">
                  Why we exist
                </h2>
                <div className="space-y-5 text-[16px] text-[#52524E] leading-[1.75]">
                  <p>
                    Traditional cybersecurity protects businesses. Traditional insurance protects businesses after losses occur.
                    Barbon continuously reduces the probability that losses occur in the first place.
                  </p>
                  <p>
                    We believe insurance should no longer rely solely on questionnaires and historical loss data.
                    Technology changes every day. Cyber threats change every hour. AI systems learn continuously.
                    Traditional underwriting cannot keep pace.
                  </p>
                  <p>
                    We don&apos;t sell cybersecurity products. We don&apos;t replace cybersecurity vendors.
                    We don&apos;t replace insurance companies. We make technology risk measurable.
                    We help insurers understand it. We help organizations reduce it.
                  </p>
                  <p>
                    Our mission is to become the global trust layer between technology and insurance — enabling
                    the confident underwriting of digital systems that evolve faster than traditional models can assess.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.015em] text-[#141413] mb-6">
                  What we believe
                </h2>
                <div className="space-y-6">
                  {values.map((v) => (
                    <div key={v.name} className="border-l border-[#D5D2C7] pl-5">
                      <h3 className="font-serif text-[18px] leading-[1.3] text-[#141413] mb-2">{v.name}</h3>
                      <p className="text-[15px] text-[#52524E] leading-[1.65]">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-[#F4F3EE] border-t border-[#E5E3DC]" aria-labelledby="about-cta-heading">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#767670] mb-4">Get in touch</p>
              <h2 id="about-cta-heading" className="font-serif text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#141413] mb-5">
                Ready to underwrite technology risk with confidence?
              </h2>
              <p className="text-[16px] text-[#52524E] leading-[1.75] mb-8">
                Talk to our team. We&apos;ll walk you through our risk intelligence platform, discuss how continuous
                assessment differs from traditional approaches, and help you determine the right programme for your
                underwriting operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#FBFBF9] bg-[#0F2537] hover:bg-[#1A3852] rounded-[2px] transition-colors"
                >
                  Request a Briefing
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#141413] border border-[#D5D2C7] hover:border-[#141413] rounded-[2px] transition-colors"
                >
                  Contact our team
                </a>
              </div>
              <p className="mt-6 text-[12px] text-[#767670] font-mono">
                We respond to all briefing requests within one business day.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
