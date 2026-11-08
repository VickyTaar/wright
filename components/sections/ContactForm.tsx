'use client';

import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_ID = 'xjybbojv';

const inputClass =
  'w-full px-3 py-2.5 text-[14px] text-[#141413] border border-[#D5D2C7] rounded-[2px] bg-[#F4F3EE] hover:border-[#52524E] hover:bg-[#FBFBF9] focus:bg-[#FBFBF9] focus:border-[#0F2537] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-[#767670]';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="border border-[#E5E3DC] rounded-[4px] p-8 bg-[#FBFBF9]">
        <div className="w-8 h-8 border border-[#D5D2C7] rounded-[2px] flex items-center justify-center mb-4">
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 9l4 4 7-7" stroke="#0F2537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-serif text-[18px] text-[#141413] mb-2">Message sent.</h3>
        <p className="text-[14px] text-[#52524E]">We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#E5E3DC] rounded-[4px] p-6 bg-[#FBFBF9] space-y-5"
      aria-label="Contact form"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-[#767670] mb-2">
            Full name <span aria-label="required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            disabled={state.submitting}
            className={inputClass}
            placeholder="Amara Kamara"
          />
          <ValidationError field="name" errors={state.errors} className="mt-1 text-[11px] text-red-600" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-[#767670] mb-2">
            Work email <span aria-label="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={state.submitting}
            className={inputClass}
            placeholder="amara@company.com"
          />
          <ValidationError field="email" errors={state.errors} className="mt-1 text-[11px] text-red-600" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-company" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-[#767670] mb-2">
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            autoComplete="organization"
            disabled={state.submitting}
            className={inputClass}
            placeholder="Acacia Insurance Ltd"
          />
        </div>
        <div>
          <label htmlFor="contact-role" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-[#767670] mb-2">
            Role
          </label>
          <select
            id="contact-role"
            name="role"
            disabled={state.submitting}
            className={inputClass + ' cursor-pointer'}
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
        <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-[#767670] mb-2">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          disabled={state.submitting}
          className={inputClass + ' resize-none'}
          placeholder="Tell us about your business and what you're looking to achieve..."
        />
        <ValidationError field="message" errors={state.errors} className="mt-1 text-[11px] text-red-600" />
      </div>

      {/* Form-level errors */}
      <ValidationError errors={state.errors} className="text-[12px] text-red-600" />

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#FBFBF9] bg-[#0F2537] hover:bg-[#1A3852] rounded-[2px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2537]"
      >
        <span>{state.submitting ? 'Sending...' : 'Send message'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </form>
  );
}
