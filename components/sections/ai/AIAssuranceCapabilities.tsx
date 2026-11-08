'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Test {
  name: string;
  description: string;
  deliverable: string;
}

interface ThemeGroup {
  id: string;
  themeNumber: string;
  title: string;
  tagline: string;
  summary: string;
  tests: Test[];
}

const aiThemes: ThemeGroup[] = [
  {
    id: 'security',
    themeNumber: '01',
    title: 'Security',
    tagline: 'Technical hardening & adversarial resistance',
    summary: 'Evaluating the AI system\'s infrastructure, boundaries, and resilience to deliberate manipulation — from unauthorized access attempts to prompt injection and jailbreaking.',
    tests: [
      {
        name: 'Security Assessment',
        description: 'Evaluation of the AI system\'s underlying infrastructure, API exposure, authentication mechanisms, and attack surface relative to the services and data it can access.',
        deliverable: 'Attack surface map and prioritized security risk register',
      },
      {
        name: 'Prompt Injection Resistance',
        description: 'Structured adversarial testing to determine whether the AI system can be manipulated through crafted or adversarial inputs to override its instructions or permissions.',
        deliverable: 'Injection resistance rating (1–5) and vulnerability disclosure report',
      },
      {
        name: 'Jailbreak & Constraint Evasion Testing',
        description: 'Assessment of the system\'s resilience to attempts to bypass its operational constraints, extract sensitive information, or obtain outputs the system was designed to refuse.',
        deliverable: 'Evasion test results with identified boundary weaknesses',
      },
      {
        name: 'Tool Permission Audit',
        description: 'Review of which actions the AI agent is permitted to execute autonomously — including read/write access, external API calls, and financial or infrastructure permissions — and whether those boundaries are technically enforced.',
        deliverable: 'Permission boundary audit with recommended restrictions',
      },
      {
        name: 'Data Leakage Analysis',
        description: 'Assessment of whether the AI system exposes sensitive organizational, customer, proprietary, or third-party data through its outputs, training, or intermediate reasoning steps.',
        deliverable: 'Data exposure risk assessment and mitigation roadmap',
      },
    ],
  },
  {
    id: 'governance',
    themeNumber: '02',
    title: 'Governance & Reliability',
    tagline: 'Human oversight, consistency & decision accountability',
    summary: 'Assessing the organizational governance structures, oversight mechanisms, and decision reliability properties that determine whether an AI system\'s outputs are trustworthy, consistent, and accountable.',
    tests: [
      {
        name: 'Governance & Accountability Framework Review',
        description: 'Assessment of the AI system\'s governance infrastructure — including change management processes, human approval workflows, board-level accountability, audit trails, and emergency shutdown capabilities.',
        deliverable: 'Governance maturity score and gap analysis',
      },
      {
        name: 'Reliability & Stress Testing',
        description: 'Systematic evaluation of AI system performance under degraded conditions, edge cases, high-volume loads, and unexpected input distributions — including assessment of fail-safe behaviour.',
        deliverable: 'Stress test report with failure mode analysis',
      },
      {
        name: 'Hallucination Risk & Factual Accuracy',
        description: 'Quantitative evaluation of the probability and potential financial consequences of the AI system generating confident but materially incorrect outputs in its operational domain.',
        deliverable: 'Hallucination frequency score and financial exposure estimate',
      },
      {
        name: 'Decision Consistency & Auditability',
        description: 'Testing whether the AI system produces consistent, reproducible, and explainable decisions across equivalent or similar inputs — a critical requirement for insurance regulatory review.',
        deliverable: 'Decision consistency coefficient and explainability rating',
      },
      {
        name: 'Human Oversight Verification',
        description: 'Verification that adequate human review workflows, approval gates, and emergency override controls are properly implemented and functional — including post-deployment monitoring loops.',
        deliverable: 'Human-in-the-loop architecture assessment',
      },
    ],
  },
  {
    id: 'exposure',
    themeNumber: '03',
    title: 'Exposure & Compliance',
    tagline: 'Regulatory alignment & financial loss boundaries',
    summary: 'Mapping the AI system\'s financial loss scenarios, regulatory obligations, and compliance posture — establishing the risk boundaries that determine insurability and pricing.',
    tests: [
      {
        name: 'Compliance Readiness Assessment',
        description: 'Evaluation against applicable AI regulatory frameworks and sector requirements, including the EU AI Act, NIST AI RMF, ISO/IEC 42001, and jurisdiction-specific obligations for autonomous AI systems.',
        deliverable: 'Compliance gap report with regulatory alignment roadmap',
      },
      {
        name: 'Financial Exposure Modelling',
        description: 'Actuarially structured quantification of maximum financial loss scenarios arising from AI system failures, erroneous decisions, unauthorized actions, and third-party liabilities.',
        deliverable: 'Financial exposure model with PML estimates by scenario',
      },
      {
        name: 'Autonomy Classification & Risk Banding',
        description: 'Systematic classification of the AI system\'s autonomy level — from advisory to fully autonomous — and mapping to insurance risk bands and appropriate policy structures.',
        deliverable: 'Autonomy classification certificate and recommended insurance class',
      },
    ],
  },
];

const continuousMonitoring = [
  {
    name: 'Permission & Capability Changes',
    detail: 'Detection of expansions in AI agent permissions, tool integrations, or autonomous action scope that exceed originally assessed boundaries.',
  },
  {
    name: 'Prompt & Model Version Changes',
    detail: 'Monitoring of system prompt modifications and model updates that may alter decision behaviour, safety characteristics, or refusal posture.',
  },
  {
    name: 'Tool & API Integrations',
    detail: 'Tracking of new tool connections, external API authorizations, and data source integrations that extend operational reach.',
  },
  {
    name: 'Risk Drift & Degradation Detection',
    detail: 'Algorithmic monitoring for gradual deterioration in safety, governance, reliability, and compliance metrics over time.',
  },
  {
    name: 'Operational Anomalies',
    detail: 'Real-time flagging of unexpected behaviour, unusual decision patterns, and outputs that deviate materially from established baselines.',
  },
  {
    name: 'Cost & Compliance Drift',
    detail: 'Tracking of cost anomalies, regulatory developments, and standards changes that affect the AI system\'s compliance and loss exposure profile.',
  },
];

export default function AIAssuranceCapabilities() {
  const [openThemes, setOpenThemes] = useState<Record<string, boolean>>({
    security: true,
    governance: true,
    exposure: false,
  });

  const toggle = (id: string) =>
    setOpenThemes((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      {/* Three-Theme Accordion */}
      <section className="py-16 md:py-24 bg-[#FBFBF9]" aria-labelledby="ai-tests-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              Assessment Framework
            </span>
            <h2
              id="ai-tests-heading"
              className="text-[32px] sm:text-[42px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
            >
              Twelve structured tests. Three independent themes.
            </h2>
            <p className="text-[16.5px] text-[#52524E] leading-[1.7]">
              The Barbon AI Assurance framework evaluates autonomous AI systems across Security, Governance & Reliability, and Exposure & Compliance — producing an AI Assurance Score that insurers can act on with confidence.
            </p>
          </div>

          <div className="border-t border-[#D5D2C7] divide-y divide-[#D5D2C7]">
            {aiThemes.map((theme) => {
              const isOpen = openThemes[theme.id];
              return (
                <div key={theme.id} className="py-8">
                  <button
                    type="button"
                    onClick={() => toggle(theme.id)}
                    className="w-full flex items-start justify-between text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`ai-theme-${theme.id}`}
                  >
                    <div className="max-w-3xl pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[12px] text-[#767670]">THEME {theme.themeNumber}</span>
                        <span className="text-[#9E9D96]">·</span>
                        <span className="text-[12.5px] font-mono text-[#0F2537] tracking-tight uppercase">{theme.tagline}</span>
                      </div>
                      <h3 className="text-[26px] sm:text-[32px] font-serif font-normal text-[#141413] group-hover:text-[#0F2537] transition-colors">
                        {theme.title}
                      </h3>
                      <p className="text-[14.5px] text-[#52524E] leading-[1.65] mt-2 max-w-2xl">{theme.summary}</p>
                    </div>
                    <div className="p-2 border border-[#E5E3DC] bg-[#F4F3EE] group-hover:bg-[#EDEBE3] transition-colors shrink-0 mt-1">
                      {isOpen ? <Minus size={15} className="text-[#141413]" /> : <Plus size={15} className="text-[#141413]" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`ai-theme-${theme.id}`}
                      className="mt-8 pt-6 border-t border-[#E5E3DC] divide-y divide-[#E5E3DC]"
                    >
                      {theme.tests.map((test) => (
                        <div key={test.name} className="py-5 grid md:grid-cols-12 gap-4 items-start">
                          <div className="md:col-span-4">
                            <h4 className="font-serif text-[18px] text-[#141413] font-medium leading-snug">{test.name}</h4>
                          </div>
                          <div className="md:col-span-8">
                            <p className="text-[14px] text-[#52524E] leading-[1.7] mb-3">{test.description}</p>
                            <div className="text-[12px] font-mono text-[#767670] border border-[#E5E3DC] bg-[#F4F3EE] px-3 py-1.5 inline-block">
                              Deliverable: {test.deliverable}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* AI Assurance Index Bar */}
          <div className="mt-10 pt-8 border-t border-[#D5D2C7]">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#767670] mb-4">
              AI Assurance Index Dimensions — Barbon Scoring Framework
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Overall AI Assurance Score',
                'Security Index',
                'Governance Rating',
                'Reliability Score',
                'Privacy Exposure',
                'Compliance Readiness',
                'Human Oversight Rating',
                'Financial Exposure (PML)',
                'Operational Stability',
                'Autonomy Classification',
                'Recommended Insurance Class',
              ].map((dim) => (
                <span
                  key={dim}
                  className="text-[12px] font-mono text-[#52524E] border border-[#D5D2C7] bg-[#F4F3EE] px-3 py-1.5"
                >
                  {dim}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuous AI Monitoring */}
      <section className="py-16 md:py-20 bg-[#F4F3EE] border-t border-[#E5E3DC]" aria-labelledby="ai-monitoring-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              Post-Deployment Telemetry
            </span>
            <h2
              id="ai-monitoring-heading"
              className="text-[28px] sm:text-[36px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
            >
              Assessment does not end at deployment.
            </h2>
            <p className="text-[15.5px] text-[#52524E] leading-[1.7]">
              Once an AI system is operational, Barbon continuously monitors for changes that may materially alter the risk profile — detecting increasing exposure before financial loss occurs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 border-t border-[#D5D2C7] pt-8">
            {continuousMonitoring.map((item) => (
              <div key={item.name} className="border-t border-[#D5D2C7] pt-5">
                <h3 className="font-serif text-[17px] font-medium text-[#141413] mb-2">{item.name}</h3>
                <p className="text-[13.5px] text-[#52524E] leading-[1.65]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

