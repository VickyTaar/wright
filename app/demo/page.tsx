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
  { step: '01', text: 'Submit your request - we respond within one business day.' },
  { step: '02', text: 'A brief discovery call to understand your business.' },
  { step: '03', text: 'A focused product demo, live, with your team.' },
  { step: '04', text: 'A follow-up environment configured for your evaluation.' },
];

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-0 bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 pb-16">
              {/* Left: info */}
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
                  Request Demo
                </p>
                <h1 className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5">
                  See Barbon OS
                  <br />
                  in your context.
                </h1>
                <p className="text-[16px] text-[#6b7280] leading-[1.7] mb-8 max-w-md">
                  A focused product walkthrough with a member of our team - configured around your business model, your lines, and your
                  operational requirements.
                </p>

                <ol className="space-y-4 mb-8" aria-label="Demo process steps">
                  {steps.map((s) => (
                    <li key={s.step} className="flex items-start gap-3">
                      <span className="text-[10px] font-mono font-bold text-[#0165FC] bg-[#e8f0fe] rounded-[3px] px-1.5 py-0.5 flex-shrink-0">
                        {s.step}
                      </span>
                      <p className="text-[14px] text-[#6b7280]">{s.text}</p>
                    </li>
                  ))}
                </ol>

                <div className="p-4 border border-[#e5e7eb] rounded-[6px] bg-[#f7f8fa]">
                  <p className="text-[13px] text-[#6b7280]">
                    Demos are available Monday to Friday.
                    We typically respond to all requests within one business day.
                  </p>
                </div>
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
