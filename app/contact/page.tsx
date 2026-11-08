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
  { label: 'General Enquiries', value: 'hello@barbon.tech', href: 'mailto:hello@barbon.tech' },
  { label: 'Direct Contact', value: 'victor@barbon.tech', href: 'mailto:victor@barbon.tech' },
  { label: 'Phone', value: '+254 706 963 63', href: 'tel:+254706 96363' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <div className="pt-36 pb-16 bg-[#FBFBF9] border-b border-[#E5E3DC]">
          <div className="container-site">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#767670] mb-4">
              Contact
            </p>
            <h1 className="font-serif text-[42px] md:text-[54px] leading-[1.08] tracking-[-0.02em] text-[#141413] mb-5 max-w-2xl">
              Get in touch.
            </h1>
            <p className="text-[18px] text-[#52524E] leading-[1.75] max-w-xl">
              Reach out to our team for product questions, partnership enquiries,
              or technical discussions.
            </p>
          </div>
        </div>

        {/* Contact content */}
        <section className="py-20 md:py-28 bg-[#FBFBF9]" aria-labelledby="contact-section-heading">
          <div className="container-site">
            <h2 id="contact-section-heading" className="sr-only">Contact details and form</h2>
            <div className="grid lg:grid-cols-2 gap-16 max-w-4xl">
              {/* Contact info */}
              <div>
                <h3 className="font-serif text-[20px] leading-[1.2] text-[#141413] mb-6">Contact details</h3>
                <div className="divide-y divide-[#E5E3DC]">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="py-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#767670] mb-1">{item.label}</p>
                      <a
                        href={item.href}
                        className="text-[15px] text-[#141413] hover:text-[#0F2537] transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E3DC]">
                  <p className="text-[14px] text-[#52524E] leading-[1.65]">
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
