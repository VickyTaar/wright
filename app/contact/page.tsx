import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Barbon',
  description:
    'Reach out to Barbon Intelligent Technologies for product questions, partnership enquiries, or technical discussions about cyber risk intelligence and AI risk assurance.',
  alternates: {
    canonical: 'https://barbon.tech/contact',
  },
  openGraph: {
    title: 'Contact - Barbon',
    description:
      'Reach out to Barbon Intelligent Technologies for product questions, partnership enquiries, or technical discussions.',
    url: 'https://barbon.tech/contact',
  },
};

const contactDetails = [
  { label: 'General Enquiries', value: 'hello@barbon.tech' },
  { label: 'Sales & Partnerships', value: 'sales@barbon.tech' },
  { label: 'Technical Support', value: 'support@barbon.tech' },
  { label: 'Security Disclosures', value: 'security@barbon.tech' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="pt-32 pb-16 bg-white border-b border-[#e5e7eb]">
          <div className="container-site">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Contact
            </p>
            <h1 className="text-[40px] md:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 max-w-2xl">
              Get in touch.
            </h1>
            <p className="text-[18px] text-[#6b7280] leading-[1.7] max-w-xl">
              Reach out to our team for product questions, partnership enquiries,
              or technical discussions.
            </p>
          </div>
        </div>

        <section className="section-spacing bg-[#f7f8fa]" aria-labelledby="contact-section-heading">
          <div className="container-site">
            <h2 id="contact-section-heading" className="sr-only">Contact details and form</h2>
            <div className="grid lg:grid-cols-2 gap-16 max-w-4xl">
              {/* Contact info */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#0a0a0b] mb-6">Contact details</h3>
                <div className="space-y-4">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="border border-[#e5e7eb] rounded-[6px] px-4 py-3 bg-white">
                      <p className="text-[11px] text-[#9ca3af] mb-0.5">{item.label}</p>
                      <a
                        href={`mailto:${item.value}`}
                        className="text-[14px] font-medium text-[#0165FC] hover:text-[#0052d4] transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 border border-[#e5e7eb] rounded-[6px] bg-white">
                  <p className="text-[13px] text-[#6b7280] leading-[1.6]">
                    We respond to all enquiries within one business day.
                    For urgent matters, please indicate this in your message subject.
                  </p>
                </div>
              </div>

              {/* Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
