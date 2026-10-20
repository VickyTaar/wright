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
            className="w-full px-3 py-2 text-[13px] text-[#0a0a0b] border border-[#d1d5db] rounded-[5px] bg-[#f7f8fa] hover:border-[#9ca3af] hover:bg-white focus:bg-white focus:border-[#0165FC] focus:ring-1 focus:ring-[#0165FC] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-[#6b7280]"
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
            className="w-full px-3 py-2 text-[13px] text-[#0a0a0b] border border-[#d1d5db] rounded-[5px] bg-[#f7f8fa] hover:border-[#9ca3af] hover:bg-white focus:bg-white focus:border-[#0165FC] focus:ring-1 focus:ring-[#0165FC] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-[#6b7280]"
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
            className="w-full px-3 py-2 text-[13px] text-[#0a0a0b] border border-[#d1d5db] rounded-[5px] bg-[#f7f8fa] hover:border-[#9ca3af] hover:bg-white focus:bg-white focus:border-[#0165FC] focus:ring-1 focus:ring-[#0165FC] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-[#6b7280]"
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
            className="w-full px-3 py-2 text-[13px] text-[#0a0a0b] border border-[#d1d5db] rounded-[5px] bg-[#f7f8fa] hover:border-[#9ca3af] hover:bg-white focus:bg-white focus:border-[#0165FC] focus:ring-1 focus:ring-[#0165FC] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            <option value="">Select role</option>
            <option value="CTO / CIO">CTO / CIO</option>
            <option value="CEO / MD">CEO / MD</option>
            <option value="Head of Operations">Head of Operations</option>
            <option value="Head of IT">Head of IT</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Developer">Developer</option>
            <option value="Other">Other</option>
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
          className="w-full px-3 py-2 text-[13px] text-[#0a0a0b] border border-[#d1d5db] rounded-[5px] bg-[#f7f8fa] hover:border-[#9ca3af] hover:bg-white focus:bg-white focus:border-[#0165FC] focus:ring-1 focus:ring-[#0165FC] focus:outline-none transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-[#6b7280]"
          placeholder="Tell us about your business and what you're looking to achieve..."
        />
        <ValidationError field="message" errors={state.errors} className="mt-1 text-[11px] text-red-500" />
      </div>

      {/* Form-level errors (e.g. network, spam block) */}
      <ValidationError errors={state.errors} className="text-[12px] text-red-500" />

      {/* Submit button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[14px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] active:bg-[#003db5] rounded-[6px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0165FC]"
      >
        <span>{state.submitting ? 'Sending...' : 'Send message'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </form>
  );
}
