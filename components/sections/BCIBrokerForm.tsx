'use client';

import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight } from 'lucide-react';

const FORMSPREE_ID = 'xoeqewjr';

export default function BCIBrokerForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="border border-[#e5e7eb] rounded-[8px] p-10 text-center bg-white">
        <div className="w-12 h-12 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10l4.5 4.5 7.5-8"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-[18px] font-bold text-[#0a0a0b] mb-2">
          Expression of interest received.
        </h3>
        <p className="text-[14px] text-[#6b7280] max-w-sm mx-auto">
          Thank you. A member of our team will be in touch with more information
          about the Barbon BCI Program.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#e5e7eb] rounded-[8px] p-6 bg-white space-y-4"
      aria-label="BCI Program broker interest form"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Full name */}
        <div>
          <label
            htmlFor="bci-name"
            className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
          >
            Full name <span aria-label="required">*</span>
          </label>
          <input
            id="bci-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="Amara Kamara"
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="mt-1 text-[11px] text-red-500"
          />
        </div>

        {/* Work email */}
        <div>
          <label
            htmlFor="bci-email"
            className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
          >
            Work email <span aria-label="required">*</span>
          </label>
          <input
            id="bci-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="amara@brokerage.com"
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-1 text-[11px] text-red-500"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Brokerage name */}
        <div>
          <label
            htmlFor="bci-brokerage"
            className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
          >
            Brokerage name <span aria-label="required">*</span>
          </label>
          <input
            id="bci-brokerage"
            type="text"
            name="brokerage"
            required
            autoComplete="organization"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="Acacia Insurance Brokers"
          />
          <ValidationError
            field="brokerage"
            errors={state.errors}
            className="mt-1 text-[11px] text-red-500"
          />
        </div>

        {/* Role */}
        <div>
          <label
            htmlFor="bci-role"
            className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
          >
            Your role
          </label>
          <select
            id="bci-role"
            name="role"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
          >
            <option value="">Select role</option>
            <option>Director / MD</option>
            <option>Senior Broker</option>
            <option>Account Executive</option>
            <option>Account Manager</option>
            <option>Head of Commercial Lines</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Portfolio size */}
        <div>
          <label
            htmlFor="bci-portfolio"
            className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
          >
            Commercial portfolio size
          </label>
          <select
            id="bci-portfolio"
            name="portfolio_size"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
          >
            <option value="">Select size</option>
            <option>Fewer than 50 commercial clients</option>
            <option>50–200 commercial clients</option>
            <option>201–500 commercial clients</option>
            <option>500+ commercial clients</option>
          </select>
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="bci-country"
            className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
          >
            Country
          </label>
          <input
            id="bci-country"
            type="text"
            name="country"
            autoComplete="country-name"
            disabled={state.submitting}
            className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
            placeholder="e.g. Kenya"
          />
        </div>
      </div>

      {/* Current cyber activity */}
      <div>
        <label
          htmlFor="bci-cyber-activity"
          className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
        >
          Current cyber insurance activity
        </label>
        <select
          id="bci-cyber-activity"
          name="cyber_activity"
          disabled={state.submitting}
          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors disabled:opacity-60"
        >
          <option value="">Select an option</option>
          <option>We actively place cyber insurance for clients</option>
          <option>We occasionally discuss cyber but rarely place it</option>
          <option>We have not yet started offering cyber insurance</option>
          <option>We are exploring how to add cyber to our offering</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="bci-message"
          className="block text-[12px] font-medium text-[#0a0a0b] mb-1.5"
        >
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="bci-message"
          name="message"
          rows={3}
          disabled={state.submitting}
          className="w-full px-3 py-2 text-[13px] border border-[#e5e7eb] rounded-[5px] bg-[#f7f8fa] focus:bg-white focus:border-[#0165FC] focus:outline-none transition-colors resize-none disabled:opacity-60"
          placeholder="Tell us about your brokerage or any questions you have about the BCI Program…"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="mt-1 text-[11px] text-red-500"
        />
      </div>

      {/* Form-level errors (network failures, spam blocks, etc.) */}
      <ValidationError errors={state.errors} className="text-[12px] text-red-500" />

      <button
        type="submit"
        id="bci-form-submit"
        disabled={state.submitting}
        className="flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Submitting…' : 'Register Interest'}
        {!state.submitting && (
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        )}
      </button>
    </form>
  );
}
