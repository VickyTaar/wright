'use client';

import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_ID = 'xjybbojv';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="border border-[#e5e7eb] rounded-[6px] p-8 bg-white text-center">
        <div className="w-10 h-10 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 9l4 4 7-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-[16px] font-semibold text-[#0a0a0b] mb-2">Message sent.</h3>
        <p className="text-[14px] text-[#6b7280]">We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
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
            name="name"
            required
            autoComplete="name"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="Amara Kamara"
          />
          <ValidationError field="name" errors={state.errors} className="mt-1 text-[11px] text-red-500" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
            Work email <span aria-label="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="amara@company.com"
          />
          <ValidationError field="email" errors={state.errors} className="mt-1 text-[11px] text-red-500" />
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
            name="company"
            autoComplete="organization"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="Acacia Insurance Ltd"
          />
        </div>
        <div>
          <label htmlFor="contact-role" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
            Role
          </label>
          <select
            id="contact-role"
            name="role"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
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
          name="message"
          required
          rows={4}
          disabled={state.submitting}
          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors resize-none disabled:opacity-60"
          placeholder="Tell us about your business and what you're looking to achieve..."
        />
        <ValidationError field="message" errors={state.errors} className="mt-1 text-[11px] text-red-500" />
      </div>

      {/* Form-level errors (e.g. network, spam block) */}
      <ValidationError errors={state.errors} className="text-[12px] text-red-500" />

      {/* Uiverse animated send button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="send-btn"
      >
        <div className="outline" />

        {/* Default state — plane + "Send message" */}
        <div className="state state--default">
          <div className="icon">
            {/* Paper-plane SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          <p>
            {/* "Send" — span 4 (d) gets margin-right via CSS nth-child(4) */}
            {['S','e','n','d','m','e','s','s','a','g','e'].map((letter, i) => (
              <span key={i} style={{ '--i': i } as React.CSSProperties}>{letter}</span>
            ))}
          </p>
        </div>

        {/* Sent state — checkmark + "Sent!" */}
        <div className="state state--sent">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0165FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <p>
            {['S','e','n','t','!'].map((letter, i) => (
              <span key={i} style={{ '--i': i } as React.CSSProperties}>{letter}</span>
            ))}
          </p>
        </div>
      </button>
    </form>
  );
}
