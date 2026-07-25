'use client';

import { useState } from 'react';

const audiences = [
  {
    id: 'insurers',
    label: 'Insurers & Underwriters',
    headline: 'Underwrite cyber risk with measurable confidence.',
    body: 'Barbon provides insurers with continuous technical intelligence across their cyber book - enabling better risk selection, more accurate pricing, and earlier identification of deteriorating accounts before claims occur.',
    capabilities: ['Cyber Risk Scoring', 'Underwriting Reports', 'Portfolio Intelligence', 'Posture Trend Analysis', 'Renewal Intelligence', 'Loss Prevention Alerts'],
  },
  {
    id: 'brokers',
    label: 'Brokers & MGAs',
    headline: 'Differentiate your cyber proposition.',
    body: 'Barbon enables brokers and MGAs to offer clients something insurers increasingly require: independent, continuous evidence of cyber posture. Strengthen submissions, improve placement outcomes, and reduce claims across your book.',
    capabilities: ['Client Risk Reports', 'Submission Enhancement', 'Continuous Client Monitoring', 'Renewal Preparation', 'Insurer-Grade Intelligence', 'Client Dashboards'],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Organizations',
    headline: 'Demonstrate your cyber posture to insurers.',
    body: 'Barbon provides independently validated evidence of your security programme - moving beyond self-attestation to give insurers the technical confidence needed to extend coverage on favourable terms.',
    capabilities: ['Independent Validation', 'Posture Benchmarking', 'Vendor Assurance', 'Executive Reporting', 'Continuous Improvement', 'Insurance Readiness Score'],
  },
  {
    id: 'technology',
    label: 'Technology Providers',
    headline: 'Validate that your technology is reducing risk.',
    body: 'Barbon independently assesses whether cybersecurity technologies are actually delivering the risk reduction they claim. We help vendors demonstrate measurable impact - and help organizations verify that their investments are working together.',
    capabilities: ['Independent Validation', 'Efficacy Assessment', 'Gap Identification', 'Integration Verification', 'Risk Impact Reporting', 'Benchmark Scoring'],
  },
  {
    id: 'financial',
    label: 'Financial Institutions',
    headline: 'Proactive financial cyber fraud monitoring.',
    body: 'Through authorized read-only integrations, Barbon identifies indicators of cyber-enabled financial fraud - business email compromise, invoice manipulation, and account takeover - before transactions complete. The platform never initiates or modifies financial data.',
    capabilities: ['BEC Detection', 'Invoice Fraud Signals', 'Beneficiary Anomalies', 'Payroll Monitoring', 'Impossible Travel', 'Executive Impersonation'],
  },
  {
    id: 'ai-developers',
    label: 'AI System Developers',
    headline: 'Make your AI system insurable.',
    body: 'Before an AI system can be insured, it must be independently assessed. Barbon provides the technical assurance framework that enables insurers to understand, quantify, and underwrite autonomous AI systems - giving your deployment commercial viability.',
    capabilities: ['Pre-deployment Assessment', 'AI Agent Stress Testing', 'Governance Review', 'Continuous AI Monitoring', 'Compliance Validation', 'Insurer Certification Support'],
  },
  {
    id: 'government',
    label: 'Government & Regulators',
    headline: 'Technology risk intelligence for policy and oversight.',
    body: 'Barbon\'s independent assessment framework provides regulators and government bodies with objective, technical intelligence on cyber and AI risk - informing regulation, oversight programmes, and technology risk standards.',
    capabilities: ['Independent Risk Assessment', 'Sector Risk Intelligence', 'AI Governance Frameworks', 'Standards Alignment', 'Regulatory Reporting Support', 'Policy Intelligence'],
  },
  {
    id: 'cloud',
    label: 'Cloud Providers',
    headline: 'Validate cloud security at the workload level.',
    body: 'Barbon provides independent assessment of cloud security posture - going beyond native tooling to validate configurations, access controls, and workload security across multi-cloud environments for insurance and compliance purposes.',
    capabilities: ['Cloud Posture Assessment', 'Multi-cloud Coverage', 'Workload Security', 'IAM Review', 'Configuration Drift', 'Compliance Mapping'],
  },
];

export default function Industries() {
  const [active, setActive] = useState('insurers');
  const current = audiences.find((a) => a.id === active)!;

  return (
    <section
      className="section-spacing bg-white border-t border-[#e5e7eb]"
      aria-labelledby="industries-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Who We Serve
          </p>
          <h2
            id="industries-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Trusted across the
            <br />
            technology insurance ecosystem.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            One intelligence platform - configured for every stakeholder involved
            in underwriting, managing, and insuring modern technology risk.
          </p>
        </div>

        {/* Tab layout */}
        <div className="grid lg:grid-cols-[280px,1fr] gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden">
          {/* Tab list */}
          <div className="bg-[#f7f8fa]">
            <nav
              role="tablist"
              aria-label="Audience segments"
              className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible"
            >
              {audiences.map((aud) => (
                <button
                  key={aud.id}
                  role="tab"
                  id={`tab-${aud.id}`}
                  aria-selected={active === aud.id}
                  aria-controls={`panel-${aud.id}`}
                  onClick={() => setActive(aud.id)}
                  className={`flex-shrink-0 text-left px-4 py-3 text-[13px] font-medium transition-colors border-b border-[#e5e7eb] lg:border-b-0 lg:border-r-2 ${
                    active === aud.id
                      ? 'text-[#0165FC] bg-white border-[#0165FC]'
                      : 'text-[#6b7280] hover:text-[#0a0a0b] hover:bg-white border-transparent'
                  }`}
                >
                  {aud.label}
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
