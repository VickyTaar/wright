'use client';

import { useState } from 'react';

const audiences = [
  {
    id: 'insurers',
    label: 'Insurers & Underwriters',
    headline: 'Underwrite cyber risk with measurable confidence.',
    body: 'Barbon provides insurers with continuous technical intelligence across their cyber book — enabling better risk selection, more accurate pricing, and earlier identification of deteriorating accounts before claims occur. Replace the annual questionnaire with a live telemetry feed.',
    capabilities: [
      'Proprietary Cyber Risk Scoring (0–100)',
      'Portfolio Risk Intelligence',
      'Underwriting Intelligence Reports',
      'Posture Trend & Trajectory Analysis',
      'Renewal Telemetry',
      'Loss Prevention Early Alerts',
    ],
  },
  {
    id: 'reinsurers',
    label: 'Reinsurers',
    headline: 'Manage accumulation risk across the cyber book.',
    body: 'Reinsurers require aggregate visibility into correlated cyber exposure. Barbon provides portfolio-level telemetry that reveals concentration risk, systemic technology dependencies, and sector-wide vulnerability clusters — before they become catastrophe losses.',
    capabilities: [
      'Portfolio Accumulation Mapping',
      'Sector-Wide Exposure Concentration',
      'Correlated Technology Dependency Analysis',
      'Catastrophe Scenario Modelling Support',
      'Treaty Underwriting Intelligence',
      'Cedant Portfolio Benchmarking',
    ],
  },
  {
    id: 'brokers',
    label: 'Brokers & MGAs',
    headline: 'Differentiate your cyber proposition.',
    body: 'Barbon enables brokers and MGAs to offer clients what insurers increasingly require: independent, continuous evidence of cyber posture. Strengthen submissions, improve placement outcomes, and reduce claims frequency across your book — while building deeper, evidence-led client relationships.',
    capabilities: [
      'Client Posture Reports',
      'Submission Enhancement Intelligence',
      'Continuous Client Monitoring',
      'Renewal Preparation Dossiers',
      'Insurer-Grade Risk Documentation',
      'Client Cyber Benchmarking',
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Organizations',
    headline: 'Demonstrate your cyber posture to insurers.',
    body: 'Barbon provides independently validated evidence of your security programme — moving beyond self-attestation to give insurers the technical confidence needed to extend coverage on favourable terms. Our continuous monitoring also surfaces risks that internal teams miss.',
    capabilities: [
      'Independent Posture Validation',
      'Sector Benchmarking',
      'Vendor Assurance Reviews',
      'Executive Risk Reporting',
      'Insurance Readiness Assessment',
      'Continuous Improvement Telemetry',
    ],
  },
  {
    id: 'financial',
    label: 'Financial Institutions',
    headline: 'Proactive cyber-financial fraud monitoring.',
    body: 'Through authorized read-only integrations, Barbon identifies indicators of cyber-enabled financial fraud — business email compromise, invoice manipulation, payroll fraud, and account takeover — before transactions complete. The platform never initiates or modifies financial data.',
    capabilities: [
      'BEC Detection Signals',
      'Invoice Fraud Indicators',
      'Beneficiary Anomaly Monitoring',
      'Payroll Manipulation Alerts',
      'Impossible Travel Detection',
      'Executive Impersonation Signals',
    ],
  },
  {
    id: 'ai-developers',
    label: 'AI System Developers',
    headline: 'Make your AI system insurable.',
    body: 'Before an AI system can be insured, it must be independently assessed. Barbon provides the technical assurance framework that enables insurers to understand, quantify, and underwrite autonomous AI systems — giving your deployment commercial viability and stakeholder confidence.',
    capabilities: [
      'Pre-deployment AI Assessment',
      'Adversarial Stress Testing',
      'Governance & Accountability Review',
      'Continuous AI Monitoring',
      'Compliance Validation',
      'Insurer-Grade Assurance Certificate',
    ],
  },
  {
    id: 'government',
    label: 'Government & Regulators',
    headline: 'Technology risk intelligence for policy and oversight.',
    body: 'Barbon\'s independent assessment framework provides regulators and government bodies with objective technical intelligence on cyber and AI risk — informing regulatory design, national cyber oversight programmes, and technology risk standards across public and private sectors.',
    capabilities: [
      'Independent Risk Assessment',
      'Sector Risk Intelligence',
      'AI Governance Frameworks',
      'Standards Alignment Review',
      'Regulatory Reporting Support',
      'Policy Scenario Intelligence',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Providers',
    headline: 'Validate cloud security at the workload level.',
    body: 'Barbon provides independent assessment of cloud security posture — going beyond native cloud tooling to validate configurations, access controls, and workload security across multi-cloud environments for insurance, compliance, and enterprise assurance purposes.',
    capabilities: [
      'Multi-Cloud Posture Assessment',
      'IAM & Permission Boundary Review',
      'Workload Security Validation',
      'Configuration Drift Monitoring',
      'Compliance Framework Mapping',
      'Third-Party Assurance Reports',
    ],
  },
];

export default function WhoWeServeDetailed() {
  const [active, setActive] = useState('insurers');
  const current = audiences.find((a) => a.id === active)!;

  return (
    <section className="py-16 md:py-24 bg-[#FBFBF9]" aria-labelledby="solutions-heading">
      <div className="container-site">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
            Ecosystem Intelligence
          </span>
          <h2
            id="solutions-heading"
            className="text-[32px] sm:text-[42px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
          >
            One intelligence engine. Every stakeholder.
          </h2>
          <p className="text-[16px] text-[#52524E] leading-[1.7]">
            From reinsurance treaty underwriters to African brokerage networks — Barbon configures to the specific intelligence needs of every party in the technology insurance value chain.
          </p>
        </div>

        {/* Tab Layout */}
        <div className="border border-[#D5D2C7] bg-[#FFFFFF]">
          <div className="grid lg:grid-cols-[260px,1fr]">
            {/* Tab Sidebar */}
            <div className="border-b lg:border-b-0 lg:border-r border-[#E5E3DC] bg-[#F4F3EE]">
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
                    className={`flex-shrink-0 text-left px-4 py-3.5 text-[13px] transition-colors border-b border-[#E5E3DC] lg:border-b-0 lg:border-l-2 cursor-pointer ${
                      active === aud.id
                        ? 'text-[#141413] font-semibold bg-[#FFFFFF] border-[#0F2537]'
                        : 'text-[#52524E] hover:text-[#141413] hover:bg-[#EDEBE3] border-transparent'
                    }`}
                  >
                    {aud.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Panel */}
            <div
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              className="p-7 md:p-10"
            >
              <h3 className="text-[24px] sm:text-[28px] font-serif font-normal text-[#141413] tracking-[-0.02em] mb-4 leading-tight">
                {current.headline}
              </h3>
              <p className="text-[15px] text-[#52524E] leading-[1.7] mb-8 max-w-xl">
                {current.body}
              </p>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#767670] mb-3">
                  Capabilities delivered
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-[12.5px] font-mono text-[#52524E] border border-[#D5D2C7] bg-[#F4F3EE] px-3 py-1.5"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Africa Mission Note */}
        <div className="mt-10 pt-8 border-t border-[#E5E3DC]">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              Mission
            </span>
            <p className="text-[16px] text-[#141413] leading-[1.7]">
              Barbon partners with insurers, reinsurers, brokers, and MGAs with an explicit mission to <strong className="font-semibold">pioneer cyber insurance in Africa</strong> — building the independent technical underwriting infrastructure that makes meaningful cyber coverage possible in emerging markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

