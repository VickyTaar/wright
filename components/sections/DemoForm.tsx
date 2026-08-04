'use client';

import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight } from 'lucide-react';

const FORMSPREE_ID = 'xjybbojv';

export default function DemoForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
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
    );
  }

  return (
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
          <label htmlFor="demo-email" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
            Work email <span aria-label="required">*</span>
          </label>
          <input
            id="demo-email"
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
          <label htmlFor="demo-company" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
            Company <span aria-label="required">*</span>
          </label>
          <input
            id="demo-company"
            type="text"
            name="company"
            required
            autoComplete="organization"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="Acacia Insurance Ltd"
          />
          <ValidationError field="company" errors={state.errors} className="mt-1 text-[11px] text-red-500" />
        </div>
        <div>
          <label htmlFor="demo-size" className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5">
            Company size
          </label>
          <select
            id="demo-size"
            name="company_size"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
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
            name="insurance_vertical"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
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
          name="message"
          rows={3}
          disabled={state.submitting}
          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors resize-none disabled:opacity-60"
          placeholder="Briefly describe what you're trying to solve or build..."
        />
        <ValidationError field="message" errors={state.errors} className="mt-1 text-[11px] text-red-500" />
      </div>

      {/* Form-level errors (e.g. network failure, spam block) */}
      <ValidationError errors={state.errors} className="text-[12px] text-red-500" />

      <button
        type="submit"
        disabled={state.submitting}
        className="flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Submitting…' : 'Request Demo'}
        {!state.submitting && (
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        )}
      </button>
    </form>
  );
}
