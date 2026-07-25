'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    role: '',
    vertical: '',
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

                <div className="space-y-4 mb-8">
                  {[
                    { step: '01', text: 'Submit your request - we respond within one business day.' },
                    { step: '02', text: 'A brief discovery call to understand your business.' },
                    { step: '03', text: 'A focused product demo, live, with your team.' },
                    { step: '04', text: 'A follow-up environment configured for your evaluation.' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <span className="text-[10px] font-mono font-bold text-[#0165FC] bg-[#e8f0fe] rounded-[3px] px-1.5 py-0.5 flex-shrink-0">
                        {s.step}
                      </span>
                      <p className="text-[14px] text-[#6b7280]">{s.text}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 border border-[#e5e7eb] rounded-[6px] bg-[#f7f8fa]">
                  <p className="text-[13px] text-[#6b7280]">
                    Demos are available Monday to Friday.
                    We typically respond to all requests within one business day.
                  </p>
                </div>
              </div>

              {/* Right: form */}
              <div>
                {submitted ? (
                  <div className="border border-[#e5e7eb] rounded-[8px] p-10 text-center bg-white">
                    <div className="w-12 h-12 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4.5 4.5 7.5-8" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-[18px] font-bold text-[#0a0a0b] mb-2">Demo request received.</h2>
                    <p className="text-[14px] text-[#6b7280] max-w-sm mx-auto">
                      Thank you. A member of our team will reach out within one business day to confirm your session.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="border border-[#e5e7eb] rounded-[8px] p-6 bg-white space-y-4"
                    aria-label="Demo request form"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="demo-name" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Full name <span aria-label="required">*</span>
                        </label>
                        <input
                          id="demo-name"
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
                        <label htmlFor="demo-email" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Work email <span aria-label="required">*</span>
                        </label>
                        <input
                          id="demo-email"
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
                        <label htmlFor="demo-company" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Company <span aria-label="required">*</span>
                        </label>
                        <input
                          id="demo-company"
                          type="text"
                          required
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                          placeholder="Acacia Insurance Ltd"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-size" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Company size
                        </label>
                        <select
                          id="demo-size"
                          value={form.size}
                          onChange={(e) => setForm({ ...form, size: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                        >
                          <option value="">Select size</option>
                          <option>1–50 employees</option>
                          <option>51–200 employees</option>
                          <option>201–1000 employees</option>
                          <option>1000+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="demo-role" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Your role
                        </label>
                        <select
                          id="demo-role"
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
                          <option>Developer / Architect</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="demo-vertical" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                          Insurance vertical
                        </label>
                        <select
                          id="demo-vertical"
                          value={form.vertical}
                          onChange={(e) => setForm({ ...form, vertical: e.target.value })}
                          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors"
                        >
                          <option value="">Select vertical</option>
                          <option>General Insurance</option>
                          <option>Health Insurance</option>
                          <option>Life Insurance</option>
                          <option>Bancassurance</option>
                          <option>Microinsurance</option>
                          <option>Broker / MGA</option>
                          <option>Agriculture</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-message" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
                        What are you hoping to achieve?
                      </label>
                      <textarea
                        id="demo-message"
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors resize-none"
                        placeholder="Briefly describe what you're trying to solve or build..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors group"
                    >
                      Request Demo
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
