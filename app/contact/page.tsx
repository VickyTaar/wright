'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        <section className="section-spacing bg-[#f7f8fa]">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 max-w-4xl">
              {/* Contact info */}
              <div>
                <h2 className="text-[18px] font-semibold text-[#0a0a0b] mb-6">Contact details</h2>
                <div className="space-y-4">
                  {[
                    { label: 'General Enquiries', value: 'hello@barbon.tech' },
                    { label: 'Sales & Partnerships', value: 'sales@barbon.tech' },
                    { label: 'Technical Support', value: 'support@barbon.tech' },
                    { label: 'Security Disclosures', value: 'security@barbon.tech' },
                  ].map((item) => (
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
              <div>
                {submitted ? (
                  <div className="border border-[#e5e7eb] rounded-[6px] p-8 bg-white text-center">
                    <div className="w-10 h-10 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3.5 9l4 4 7-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#0a0a0b] mb-2">Message sent.</h3>
                    <p className="text-[14px] text-[#6b7280]">We&apos;ll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="border border-[#e5e7eb] rounded-[6px] p-6 bg-white space-y-4"
                    aria-label="Contact form"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Full name <span aria-label="required">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                          placeholder="Amara Kamara"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Work email <span aria-label="required">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                          placeholder="amara@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-company" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Company
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                          placeholder="Acacia Insurance Ltd"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-role" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Role
                        </label>
                        <select
                          id="contact-role"
                          value={form.role}
                          onChange={(e) => setForm({ ...form, role: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                        >
                          <option value="">Select role</option>
                          <option>CTO / CIO</option>
                          <option>CEO / MD</option>
                          <option>Head of Operations</option>
                          <option>Head of IT</option>
                          <option>Product Manager</option>
                          <option>Developer</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                        Message <span aria-label="required">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your business and what you're looking to achieve..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[5px] transition-colors"
                    >
                      Send message
                      <Send size={13} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
