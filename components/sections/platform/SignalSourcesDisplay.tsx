import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const signalSourceCategories = [
  {
    group: 'Cloud & Infrastructure',
    sources: [
      { name: 'Microsoft Azure', note: 'Identity, compliance, cloud posture' },
      { name: 'Amazon Web Services', note: 'IAM, S3, Security Hub, GuardDuty' },
      { name: 'Google Cloud', note: 'GKE, IAM, Cloud Armor, Chronicle' },
      { name: 'Multi-cloud Environments', note: 'Cross-cloud posture correlation' },
    ],
  },
  {
    group: 'Identity & Access Management',
    sources: [
      { name: 'Azure Active Directory', note: 'Conditional access, MFA, sign-in risk' },
      { name: 'Okta', note: 'SSO, lifecycle management, MFA compliance' },
      { name: 'Google Workspace', note: 'Identity, email, admin security' },
      { name: 'CyberArk PAM', note: 'Privileged credential vaulting' },
    ],
  },
  {
    group: 'Endpoint Protection',
    sources: [
      { name: 'CrowdStrike Falcon', note: 'EDR coverage, threat detections' },
      { name: 'Microsoft Defender', note: 'Endpoint and email telemetry' },
      { name: 'SentinelOne', note: 'Autonomous endpoint response' },
      { name: 'Carbon Black', note: 'Behavioral threat analytics' },
    ],
  },
  {
    group: 'Email & Collaboration Security',
    sources: [
      { name: 'Microsoft Exchange Online', note: 'DMARC, SPF, spoofing analysis' },
      { name: 'Proofpoint', note: 'BEC detection, phishing simulation' },
      { name: 'Mimecast', note: 'Email continuity and filtering' },
      { name: 'Google Workspace Mail', note: 'DKIM/DMARC policy monitoring' },
    ],
  },
  {
    group: 'Network & Perimeter',
    sources: [
      { name: 'Palo Alto Networks', note: 'Next-gen firewall telemetry' },
      { name: 'Fortinet', note: 'SD-WAN, FortiGate policy audits' },
      { name: 'Cisco Meraki', note: 'Network health and traffic analytics' },
      { name: 'Check Point', note: 'Threat prevention gateway logs' },
    ],
  },
  {
    group: 'Threat Intelligence',
    sources: [
      { name: 'VirusTotal', note: 'File, URL, domain reputation' },
      { name: 'Recorded Future', note: 'Adversary and campaign intelligence' },
      { name: 'CrowdStrike Intel', note: 'APT tracking and IOC feeds' },
      { name: 'Mandiant', note: 'Incident attribution intelligence' },
    ],
  },
  {
    group: 'Dark Web Monitoring',
    sources: [
      { name: 'Credential Markets', note: 'Real-time credential exposure feeds' },
      { name: 'Paste Sites', note: 'Pastebin, Ghostbin, public dumps' },
      { name: 'Criminal Forums', note: 'BreachForums, XSS, Exploit[.]in monitoring' },
      { name: 'Data Breach Feeds', note: 'HIBP and proprietary breach datasets' },
    ],
  },
  {
    group: 'SIEM & Log Management',
    sources: [
      { name: 'Microsoft Sentinel', note: 'Cloud-native SIEM/SOAR' },
      { name: 'Splunk', note: 'Enterprise event correlation' },
      { name: 'IBM QRadar', note: 'Network anomaly detection' },
      { name: 'Elastic Security', note: 'Open detection pipeline' },
    ],
  },
  {
    group: 'Backup & Recovery Verification',
    sources: [
      { name: 'Veeam', note: 'Backup job integrity and restoration testing' },
      { name: 'Cohesity', note: 'Immutability and air-gap status' },
      { name: 'Commvault', note: 'Recovery point objective tracking' },
      { name: 'Backup Health APIs', note: 'Custom read-only integration' },
    ],
  },
  {
    group: 'Attack Surface Intelligence',
    sources: [
      { name: 'Certificate Transparency', note: 'Subdomain and cert issuance monitoring' },
      { name: 'Shodan', note: 'Open port and service discovery' },
      { name: 'Domain Intelligence', note: 'WHOIS, typosquatting, DNS monitoring' },
      { name: 'Open Port Scanning', note: 'Passive internet-facing exposure mapping' },
    ],
  },
  {
    group: 'Vulnerability Management',
    sources: [
      { name: 'Tenable Nessus', note: 'Authenticated vulnerability scanning' },
      { name: 'Qualys', note: 'Cloud-native VA platform' },
      { name: 'Rapid7 InsightVM', note: 'Risk-scored vulnerability prioritization' },
      { name: 'NIST CVE / EPSS Feeds', note: 'Exploitability scoring integration' },
    ],
  },
  {
    group: 'Human Risk & Awareness',
    sources: [
      { name: 'KnowBe4', note: 'Phishing simulation click-rate telemetry' },
      { name: 'Proofpoint TAP', note: 'Targeted attack protection metrics' },
      { name: 'Cofense', note: 'Phishing incident reporting pipeline' },
      { name: 'Phishing Simulation APIs', note: 'Custom platform integrations' },
    ],
  },
  {
    group: 'Business & Financial Systems',
    sources: [
      { name: 'Authorized Read-Only ERP Access', note: 'BEC detection without write permissions' },
      { name: 'Transaction Anomaly Monitoring', note: 'Payroll and wire transfer outliers' },
      { name: 'CRM & HRIS Systems', note: 'Privileged data exposure indicators' },
      { name: 'Critical SaaS Tools', note: 'Permission and sharing policy audits' },
    ],
  },
  {
    group: 'Deception & Adversary Detection',
    sources: [
      { name: 'Honeypots', note: 'Internal lateral movement detection' },
      { name: 'Canary Tokens', note: 'File and document access alerting' },
      { name: 'Decoy Credentials', note: 'Insider and external attacker detection' },
      { name: 'Attacker Profiling', note: 'Early-stage adversary attribution' },
    ],
  },
  {
    group: 'Third-Party & Supply Chain',
    sources: [
      { name: 'Vendor Risk APIs', note: 'Security ratings and questionnaire automation' },
      { name: 'Supply Chain Intelligence', note: 'Software component and dependency exposure' },
      { name: 'Fourth-Party Exposure Mapping', note: 'Downstream vendor concentration risk' },
      { name: 'SaaS Permission Audits', note: 'OAuth and API delegation reviews' },
    ],
  },
];

export default function SignalSourcesDisplay() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F3EE] border-t border-[#E5E3DC]" aria-labelledby="signals-heading">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#767670] block mb-3">
              Data Infrastructure
            </span>
            <h2
              id="signals-heading"
              className="text-[32px] sm:text-[40px] font-serif font-normal text-[#141413] tracking-[-0.02em] leading-[1.12]"
            >
              15 signal categories. 60+ integrations.
            </h2>
          </div>
          <p className="text-[14px] text-[#52524E] max-w-xs text-balance">
            All integrations operate on a secure, read-only basis with no business disruption.
          </p>
        </div>

        {/* Signal Source Typographic List — No tiles, no logos, no gloss */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {signalSourceCategories.map((cat) => (
            <div key={cat.group}>
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#0F2537] border-b border-[#D5D2C7] pb-2 mb-3">
                {cat.group}
              </h3>
              <ul className="space-y-2.5">
                {cat.sources.map((src) => (
                  <li key={src.name} className="text-[13.5px]">
                    <span className="font-medium text-[#141413]">{src.name}</span>
                    <span className="text-[#767670] text-[12px] ml-2">— {src.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 pt-6 border-t border-[#D5D2C7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12.5px] text-[#767670]">
          <p className="font-mono">
            Secure read-only integration across all sources. No agents installed. No write permissions required.
          </p>
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 font-medium text-[#0F2537] hover:text-[#1A3852] transition-colors whitespace-nowrap group"
          >
            <span>Read the full methodology</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

