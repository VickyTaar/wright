'use client';

import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface CapabilityItem {
  name: string;
  description: string;
  signals?: string[];
}

interface ThemeGroup {
  id: string;
  themeNumber: string;
  title: string;
  tagline: string;
  summary: string;
  capabilities: CapabilityItem[];
}

const themeGroups: ThemeGroup[] = [
  {
    id: 'assess',
    themeNumber: '01',
    title: 'Assess',
    tagline: 'Baseline evaluation & exposure discovery',
    summary: 'Objective technical assessments of an organization’s attack surface, cloud configurations, and identity structures before policy inception or renewal.',
    capabilities: [
      {
        name: 'Cyber Insurance Risk Assessments',
        description: 'Independent technical evaluations providing underwriters with empirical risk parameters ahead of policy binding, replacing checkbox self-declarations.',
        signals: ['External perimeter scan', 'DNS configuration', 'SSL/TLS maturity', 'Exposed management interfaces'],
      },
      {
        name: 'Attack Surface Monitoring',
        description: 'Continuous discovery and mapping of internet-facing digital assets, identifying unmanaged infrastructure, open ports, and orphaned assets before threat actors exploit them.',
        signals: ['Certificate transparency logs', 'Subdomain enumeration', 'Shadow IT discovery', 'Port exposure telemetry'],
      },
      {
        name: 'Cloud Security Validation',
        description: 'In-depth assessment of AWS, Microsoft Azure, and Google Cloud environments to identify misconfigurations, permissive IAM policies, public storage buckets, and policy drift.',
        signals: ['Public S3/Blob storage', 'Over-privileged IAM roles', 'Security group sprawl', 'Multi-cloud workload telemetry'],
      },
      {
        name: 'Identity Risk Monitoring',
        description: 'Evaluation of enterprise identity infrastructure across Okta, Azure AD, and Google Workspace — assessing MFA coverage, dormant accounts, privileged access, and sign-in anomalies.',
        signals: ['MFA enforcement rate', 'Privileged access management (PAM)', 'Dormant service accounts', 'Suspicious geolocation logins'],
      },
      {
        name: 'Compliance & Regulatory Validation',
        description: 'Independent verification against sector-specific frameworks and national data protection standards, delivering verifiable technical proof beyond self-attestation.',
        signals: ['Data sovereignty controls', 'Encryption at rest & transit', 'Regulatory audit readiness', 'Security baseline conformance'],
      },
    ],
  },
  {
    id: 'monitor',
    themeNumber: '02',
    title: 'Monitor',
    tagline: 'Continuous surveillance across the policy lifecycle',
    summary: '24/7 telemetry ingestion flagging emerging threat indicators, credential exposures, and configuration drift in real time throughout the twelve-month policy term.',
    capabilities: [
      {
        name: 'Continuous Cyber Risk Monitoring',
        description: 'Ongoing telemetry across the insured’s digital infrastructure, detecting material changes in risk posture between annual renewals rather than twelve months later.',
        signals: ['Daily perimeter delta', 'Threat feed correlation', 'Asset lifecycle changes', 'Real-time alert thresholding'],
      },
      {
        name: 'Threat Intelligence Correlation',
        description: 'Active adversary campaigns and emerging zero-day vulnerabilities cross-referenced against the insured’s specific technology stack and software inventory.',
        signals: ['Targeted industry threat feeds', 'CVE exploitability scoring (EPSS)', 'Active C2 communication indicators', 'Ransomware precursor detection'],
      },
      {
        name: 'Dark Web & Credential Exposure',
        description: 'Continuous scanning of illicit marketplaces, paste sites, and threat group channels for leaked corporate credentials, database dumps, and organizational mentions.',
        signals: ['Compromised employee credentials', 'Exposed API tokens & keys', 'Corporate data dump verification', 'Dark web chatter tracking'],
      },
      {
        name: 'Configuration Drift & Patch Management',
        description: 'Longitudinal tracking of security hygiene — measuring how rapidly known vulnerabilities are patched and detecting unauthorized configuration changes.',
        signals: ['Patch cycle latency', 'Critical CVE remediation velocity', 'Baseline configuration variance', 'End-of-life OS/software tracking'],
      },
      {
        name: 'BEC & Brand Impersonation Indicators',
        description: 'Monitoring for business email compromise precursors, domain typosquatting, executive lookalike registrations, and email authentication failures (DMARC/DKIM/SPF).',
        signals: ['Typosquatted domain registrations', 'DMARC policy enforcement', 'Executive name impersonation', 'Mail server routing anomalies'],
      },
    ],
  },
  {
    id: 'validate',
    themeNumber: '03',
    title: 'Validate',
    tagline: 'Control efficacy & vendor assurance',
    summary: 'Verifying that security investments, third-party vendors, and disaster recovery mechanisms actually operate effectively to reduce loss probability.',
    capabilities: [
      {
        name: 'Security Control Validation',
        description: 'Empirical verification that existing cybersecurity defenses are active, configured properly, and delivering their intended protective value under real-world conditions.',
        signals: ['Endpoint protection coverage %', 'EDR tamper-resistance status', 'Firewall rule hygiene', 'Network segmentation verification'],
      },
      {
        name: 'Vendor Assurance & Efficacy Review',
        description: 'Independent validation that third-party cybersecurity vendors are actively reducing risk rather than merely fulfilling contractual checkboxes.',
        signals: ['Vendor SLA verification', 'Coverage gap analysis', 'Security tool overlap audit', 'Vendor risk reduction scoring'],
      },
      {
        name: 'Backup Health & Ransomware Resilience',
        description: 'Verification of enterprise backup integrity, immutable storage status, air-gapped copies, and tested recovery time objectives (RTO) — the prime indicators of ransomware survivability.',
        signals: ['Immutable backup verification', 'Offline air-gap validation', 'Restoration test recency', 'Backup encryption standards'],
      },
      {
        name: 'Third-Party & Supply Chain Reviews',
        description: 'Assessment of digital supply chain dependencies and external vendor integrations that could propagate systemic risk into the insured organization.',
        signals: ['Fourth-party concentration risk', 'SaaS integration permission audits', 'Vendor breach notifications', 'Critical API dependency mapping'],
      },
      {
        name: 'Security Governance & Human Readiness',
        description: 'Evaluation of organizational security governance, employee phishing simulation susceptibility, board-level accountability, and incident response readiness.',
        signals: ['Phishing simulation click rates', 'Incident response plan currency', 'Tabletop exercise documentation', 'Security policy sign-off records'],
      },
    ],
  },
  {
    id: 'report',
    themeNumber: '04',
    title: 'Report',
    tagline: 'Actuarial scoring & underwriting telemetry',
    summary: 'Translating thousands of raw technical signals into structured underwriting reports, explainable 0–100 scores, and executive-level risk telemetry.',
    capabilities: [
      {
        name: 'Underwriting Intelligence Reports',
        description: 'Structured risk dossiers engineered specifically for underwriters and risk committees — highlighting exposure limits, policy condition recommendations, and loss mitigation requirements.',
        signals: ['Executive risk summary', 'Policy endorsement recommendations', 'Subjectivity conditions', 'Pricing tier calibration'],
      },
      {
        name: 'Proprietary Cyber Risk Scoring (0–100)',
        description: 'A transparent, explainable scoring model built from empirical technical parameters that allows underwriters to benchmark risk objectively across an entire insurance portfolio.',
        signals: ['Weighted BESS score', 'Vulnerability exploitability index', 'Posture stability rating', 'Portfolio percentiles'],
      },
      {
        name: 'Executive & Underwriter Dashboards',
        description: 'Institutional-grade interfaces translating technical infrastructure data into underwriting vocabulary — risk trends, portfolio concentration, and renewal timelines.',
        signals: ['Portfolio aggregation views', 'Account posture shifts', 'Sector-wide exposure tracking', 'Renewal alert workflows'],
      },
      {
        name: 'Longitudinal Trend Analysis',
        description: 'Historical tracking of an organization’s security posture over weeks, quarters, and years — demonstrating whether risk is improving, stable, or deteriorating.',
        signals: ['Quarterly score deltas', 'Hygiene trajectory trends', 'Loss probability movement', 'Renewal pricing adjustments'],
      },
      {
        name: 'Loss Prevention Early Warnings',
        description: 'Automated early warning notifications sent to underwriters and insureds when high-risk conditions appear, preventing incidents before they materialize into policy claims.',
        signals: ['Active zero-day exposure alerts', 'Critical credential breach alerts', 'Rapid posture drop triggers', 'Mitigation advisory broadcasts'],
      },
    ],
  },
];

export default function CyberRiskCapabilities() {
  const [openThemes, setOpenThemes] = useState<Record<string, boolean>>({
    assess: true,
    monitor: true,
    validate: false,
    report: false,
  });

  const toggleTheme = (id: string) => {
    setOpenThemes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FBFBF9]" aria-labelledby="capabilities-heading">
      <div className="container-site">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
            Capabilities & Signal Depth
          </span>
          <h2
            id="capabilities-heading"
            className="text-[32px] sm:text-[42px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12] mb-4"
          >
            Structured into four disciplined themes.
          </h2>
          <p className="text-[16.5px] text-[#52524E] leading-[1.7]">
            Rather than disparate checklists, Barbon organizes all 15 cyber risk capabilities and 16 signal categories into a cohesive technical architecture: Assess, Monitor, Validate, and Report.
          </p>
        </div>

        {/* Themed Accordion / List */}
        <div className="border-t border-[#D5D2C7] divide-y divide-[#D5D2C7]">
          {themeGroups.map((theme) => {
            const isOpen = openThemes[theme.id];
            return (
              <div key={theme.id} className="py-8 transition-colors">
                {/* Theme Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleTheme(theme.id)}
                  className="w-full flex items-start justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`theme-content-${theme.id}`}
                >
                  <div className="max-w-3xl pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[12px] text-[#767670]">
                        THEME {theme.themeNumber}
                      </span>
                      <span className="text-[#9E9D96]">·</span>
                      <span className="text-[12.5px] font-mono text-[#0F2537] tracking-tight uppercase">
                        {theme.tagline}
                      </span>
                    </div>
                    <h3 className="text-[26px] sm:text-[32px] font-serif font-normal text-[#141413] group-hover:text-[#0F2537] transition-colors">
                      {theme.title}
                    </h3>
                    <p className="text-[14.5px] text-[#52524E] leading-[1.65] mt-2 max-w-2xl">
                      {theme.summary}
                    </p>
                  </div>
                  <div className="p-2 border border-[#E5E3DC] bg-[#F4F3EE] group-hover:bg-[#EDEBE3] transition-colors shrink-0 mt-1">
                    {isOpen ? (
                      <Minus size={15} className="text-[#141413]" />
                    ) : (
                      <Plus size={15} className="text-[#141413]" />
                    )}
                  </div>
                </button>

                {/* Expanded Capabilities List */}
                {isOpen && (
                  <div
                    id={`theme-content-${theme.id}`}
                    className="mt-8 pt-6 border-t border-[#E5E3DC] divide-y divide-[#E5E3DC]"
                  >
                    {theme.capabilities.map((cap) => (
                      <div
                        key={cap.name}
                        className="py-5 grid md:grid-cols-12 gap-4 items-start"
                      >
                        <div className="md:col-span-4">
                          <h4 className="font-serif text-[18px] text-[#141413] font-medium leading-snug">
                            {cap.name}
                          </h4>
                        </div>
                        <div className="md:col-span-8">
                          <p className="text-[14px] text-[#52524E] leading-[1.7] mb-3">
                            {cap.description}
                          </p>
                          {cap.signals && cap.signals.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-[11px] font-mono text-[#767670] uppercase mr-1">
                                Signals:
                              </span>
                              {cap.signals.map((sig) => (
                                <span
                                  key={sig}
                                  className="text-[11px] font-mono text-[#52524E] bg-[#F4F3EE] border border-[#E5E3DC] px-2 py-0.5"
                                >
                                  {sig}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

