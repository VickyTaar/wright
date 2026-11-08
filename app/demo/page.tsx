import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DemoForm from '@/components/sections/DemoForm';

export const metadata: Metadata = {
  title: 'Request a Briefing - Barbon',
  description:
    'Request a product briefing with the Barbon team. See how our cyber risk intelligence and AI risk assurance platform works in your specific underwriting context.',
  alternates: {
    canonical: 'https://barbon.tech/demo',
  },
  openGraph: {
    title: 'Request a Briefing - Barbon',
    description:
      'A focused product walkthrough with the Barbon team - configured around your business model, your lines, and your operational requirements.',
    url: 'https://barbon.tech/demo',
  },
};

const steps = [
  { step: '01', text: 'Submit your request — we respond within one business day.' },
  { step: '02', text: 'A brief discovery call to understand your business.' },
  { step: '03', text: 'A focused product demo, live, with your team.' },
  { step: '04', text: 'A follow-up environment configured for your evaluation.' },
];

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-0 bg-[#FBFBF9]">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 pb-20 md:pb-28">
              {/* Left: info */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#767670] mb-4">
                  Request a Briefing
                </p>
                <h1 className="font-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[#141413] mb-5">
                  See Barbon in your context.
                </h1>
                <p className="text-[16px] text-[#52524E] leading-[1.75] mb-10 max-w-md">
                  A focused product walkthrough with a member of our team — configured around your business model, your lines, and your
                  operational requirements.
                </p>

                <ol className="space-y-0 mb-10" aria-label="Demo process steps">
                  {steps.map((s, i) => (
                    <li key={s.step} className={`flex items-start gap-4 py-4 ${i < steps.length - 1 ? 'border-b border-[#E5E3DC]' : ''}`}>
                      <span className="font-mono text-[11px] text-[#767670] flex-shrink-0 mt-0.5 w-6">
                        {s.step}
                      </span>
                      <p className="text-[15px] text-[#52524E] leading-[1.65]">{s.text}</p>
                    </li>
                  ))}
                </ol>

                <p className="text-[13px] text-[#767670] font-mono border-t border-[#E5E3DC] pt-5">
                  Demos are available Monday to Friday. We typically respond within one business day.
                </p>
              </div>

              {/* Right: form */}
              <DemoForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
