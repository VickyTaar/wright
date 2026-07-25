import {
  Cloud, Monitor, Shield, Users, Mail, AlertTriangle,
  Eye, Key, RefreshCw, HardDrive, Wifi, Database,
  Globe, Activity, ShieldCheck, TrendingUp
} from 'lucide-react';

const capabilities = [
  {
    icon: Cloud,
    name: 'Microsoft 365 & Azure',
    description: 'Continuous monitoring of Microsoft cloud environments — identity posture, conditional access, email security, and misconfiguration detection.',
  },
  {
    icon: Cloud,
    name: 'AWS Cloud Environments',
    description: 'Assessment of AWS configurations, IAM policies, public S3 buckets, security groups, and workload exposure across all regions.',
  },
  {
    icon: Users,
    name: 'Identity Providers',
    description: 'Continuous review of Okta, Azure AD, and Google Workspace — MFA adoption rates, privileged access, dormant accounts, and sign-in anomalies.',
  },
  {
    icon: Shield,
    name: 'Endpoint Protection',
    description: 'Real-time visibility into EDR deployment coverage, threat detections, unmanaged devices, and patch compliance across the endpoint fleet.',
  },
  {
    icon: Mail,
    name: 'Email Security',
    description: 'Assessment of DMARC, DKIM, SPF configuration and enforcement, plus monitoring for phishing simulation results and BEC indicators.',
  },
  {
    icon: AlertTriangle,
    name: 'Threat Intelligence Feeds',
    description: 'Correlation of global threat intelligence against the insured\'s specific infrastructure, domains, IP ranges, and technology stack.',
  },
  {
    icon: Eye,
    name: 'Dark Web Monitoring',
    description: 'Continuous scanning of dark web forums, paste sites, and criminal marketplaces for leaked credentials, data, and organizational references.',
  },
  {
    icon: Key,
    name: 'Credential Exposure',
    description: 'Real-time detection of compromised credentials — including employee accounts, service accounts, and third-party integration keys.',
  },
  {
    icon: RefreshCw,
    name: 'Patch Management',
    description: 'Assessment of patching cadence and coverage across operating systems, applications, and critical infrastructure components.',
  },
  {
    icon: Database,
    name: 'Configuration Drift',
    description: 'Continuous monitoring for deviations from security baselines across cloud, network, and application configurations.',
  },
  {
    icon: HardDrive,
    name: 'Backup Health',
    description: 'Verification of backup integrity, encryption, offline copies, and recovery testing — critical indicators for ransomware resilience.',
  },
  {
    icon: Monitor,
    name: 'Business Continuity Readiness',
    description: 'Assessment of incident response plans, disaster recovery procedures, tabletop exercise history, and recovery capability.',
  },
  {
    icon: Wifi,
    name: 'BEC & Fraud Indicators',
    description: 'Monitoring for business email compromise patterns, executive impersonation attempts, and financial fraud precursors.',
  },
  {
    icon: Globe,
    name: 'Domain & Brand Spoofing',
    description: 'Detection of typosquatted domains, lookalike sites, and domain infrastructure used in phishing campaigns targeting the organization.',
  },
  {
    icon: Activity,
    name: 'Security Awareness Metrics',
    description: 'Integration with phishing simulation platforms to assess employee susceptibility and training effectiveness across the organization.',
  },
  {
    icon: TrendingUp,
    name: 'Vulnerability Intelligence',
    description: 'Continuous scanning and enrichment of known vulnerabilities against the organization\'s technology inventory and exposure profile.',
  },
];

export default function Features() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="features-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Signal Coverage
          </p>
          <h2
            id="features-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Every signal.
            <br />
            Every environment. Continuously.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Our platform continuously collects and analyzes signals from across an
            organization&apos;s entire technology environment — transforming raw technical
            data into structured underwriting intelligence.
          </p>
        </div>

        {/* Capabilities grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden"
          role="list"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.name}
              role="listitem"
              className="bg-white p-5 hover:bg-[#f7f8fa] transition-colors group cursor-default"
            >
              <div className="w-7 h-7 rounded-[5px] bg-[#f7f8fa] border border-[#e5e7eb] flex items-center justify-center mb-3 group-hover:border-[#c7d8fd] group-hover:bg-[#e8f0fe] transition-colors">
                <cap.icon size={14} className="text-[#6b7280] group-hover:text-[#0165FC] transition-colors" />
              </div>
              <h3 className="text-[13px] font-semibold text-[#0a0a0b] mb-1.5">{cap.name}</h3>
              <p className="text-[12px] text-[#6b7280] leading-[1.55]">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
