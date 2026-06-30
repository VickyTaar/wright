'use client';

import { useState } from 'react';

const industries = [
  {
    id: 'general',
    label: 'General Insurance',
    headline: 'Full-cycle P&C management.',
    body: 'Policy administration, claims, underwriting, and analytics for fire, motor, property, liability, and all-risk lines. Multi-currency, multi-territory, multi-company — from a single platform.',
    capabilities: ['Motor & Fleet', 'Fire & Allied', 'Property Damage', 'Liability', 'Engineering', 'Multi-territory Policies'],
  },
  {
    id: 'health',
    label: 'Health Insurance',
    headline: 'End-to-end health plan management.',
    body: 'Member enrolment, benefits administration, pre-authorisation workflows, provider management, and claims adjudication — purpose-built for health insurers and managed care organisations.',
    capabilities: ['Member Enrolment', 'Benefits Management', 'Pre-authorisation', 'Provider Network', 'Claims Adjudication', 'NHIA Integration'],
  },
  {
    id: 'life',
    label: 'Life Insurance',
    headline: 'Long-duration policy administration.',
    body: 'Whole life, term, endowment, and annuity product management with actuarial integration, surrender value calculation, and beneficiary management built in.',
    capabilities: ['Term & Whole Life', 'Endowment Plans', 'Annuities', 'Beneficiary Management', 'Surrender Calculations', 'Actuarial APIs'],
  },
  {
    id: 'agriculture',
    label: 'Agriculture',
    headline: 'Index-based and indemnity crop insurance.',
    body: 'Parametric triggers, satellite data integration, farmer enrolment at scale, and rapid claims settlement — built for the complexity of agricultural risk.',
    capabilities: ['Crop Insurance', 'Livestock Coverage', 'Satellite Data APIs', 'Index-based Triggers', 'Farmer Portals', 'Government Schemes'],
  },
  {
    id: 'marine',
    label: 'Marine',
    headline: 'Cargo, hull, and marine liability.',
    body: 'Multi-voyage certificate management, cargo tracking integration, P&I club connectivity, and specialised marine claims handling for open cover and fleet policies.',
    capabilities: ['Cargo Insurance', 'Hull Coverage', 'Open Cover Management', 'Certificate Issuance', 'Voyage Tracking', 'P&I Integration'],
  },
  {
    id: 'bancassurance',
    label: 'Bancassurance',
    headline: 'Bank-embedded insurance distribution.',
    body: 'Deep core banking integrations, automatic policy attachment to loan facilities, premium deduction from accounts, and branch-level performance reporting.',
    capabilities: ['Core Banking Integration', 'Loan-linked Insurance', 'Auto-debit Premiums', 'Branch Reporting', 'Embedded Distribution', 'Regulatory Separation'],
  },
  {
    id: 'micro',
    label: 'Microinsurance',
    headline: 'High-volume, low-cost insurance at scale.',
    body: 'Mobile-first product design, USSD and WhatsApp distribution, bulk enrolment, and automated claims for underserved markets — without compromising compliance.',
    capabilities: ['Mobile-first Issuance', 'USSD & WhatsApp', 'Bulk Enrolment', 'Automated Claims', 'Low-cost Operations', 'Financial Inclusion'],
  },
  {
    id: 'employee',
    label: 'Employee Benefits',
    headline: 'Group scheme management for employers.',
    body: 'Group life, group health, keyman, and voluntary benefits — with HR system integration, real-time member management, and employer self-service portals.',
    capabilities: ['Group Life', 'Group Health', 'Voluntary Benefits', 'HR System Integration', 'Employer Portals', 'Certificate Issuance'],
  },
];

export default function Industries() {
  const [active, setActive] = useState('general');
  const current = industries.find((i) => i.id === active)!;

  return (
    <section
      className="section-spacing bg-white border-t border-[#e5e7eb]"
      aria-labelledby="industries-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Solutions
          </p>
          <h2
            id="industries-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Built for every vertical
            <br />
            in insurance.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            One platform. Purpose-configured for every insurance model — from
            general insurance carriers to microinsurance distributors.
          </p>
        </div>

        {/* Tab layout */}
        <div className="grid lg:grid-cols-[280px,1fr] gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden">
          {/* Tab list */}
          <div className="bg-[#f7f8fa]">
            <nav
              role="tablist"
              aria-label="Insurance verticals"
              className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible"
            >
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  role="tab"
                  id={`tab-${ind.id}`}
                  aria-selected={active === ind.id}
                  aria-controls={`panel-${ind.id}`}
                  onClick={() => setActive(ind.id)}
                  className={`flex-shrink-0 text-left px-4 py-3 text-[13px] font-medium transition-colors border-b border-[#e5e7eb] lg:border-b-0 lg:border-r-2 ${
                    active === ind.id
                      ? 'text-[#0165FC] bg-white border-[#0165FC]'
                      : 'text-[#6b7280] hover:text-[#0a0a0b] hover:bg-white border-transparent'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab panel */}
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="bg-white p-8"
          >
            <h3 className="text-[24px] font-bold tracking-[-0.015em] text-[#0a0a0b] mb-3">
              {current.headline}
            </h3>
            <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-6 max-w-xl">
              {current.body}
            </p>
            <div className="flex flex-wrap gap-2">
              {current.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-[12px] px-3 py-1.5 border border-[#e5e7eb] text-[#6b7280] rounded-[4px] bg-[#f7f8fa]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
