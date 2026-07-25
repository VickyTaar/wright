import { Cloud, Shield, Mail, Monitor, Wifi, AlertTriangle, Eye, Database, HardDrive, Globe, Activity, Lock, Building, Users, Code2, CreditCard } from 'lucide-react';

const signalSources = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    items: ['Microsoft Azure', 'Amazon Web Services', 'Google Cloud', 'Multi-cloud Environments'],
  },
  {
    category: 'Identity & Access',
    icon: Users,
    items: ['Azure Active Directory', 'Okta', 'Google Workspace', 'CyberArk PAM'],
  },
  {
    category: 'Email & Collaboration',
    icon: Mail,
    items: ['Microsoft Exchange', 'Google Workspace', 'Proofpoint', 'Mimecast'],
  },
  {
    category: 'Endpoint Protection',
    icon: Monitor,
    items: ['CrowdStrike Falcon', 'Microsoft Defender', 'SentinelOne', 'Carbon Black'],
  },
  {
    category: 'Network & Firewall',
    icon: Wifi,
    items: ['Palo Alto Networks', 'Fortinet', 'Cisco Meraki', 'Check Point'],
  },
  {
    category: 'Threat Intelligence',
    icon: AlertTriangle,
    items: ['VirusTotal', 'Recorded Future', 'CrowdStrike Intel', 'Mandiant'],
  },
  {
    category: 'Dark Web Sources',
    icon: Eye,
    items: ['Credential Markets', 'Paste Sites', 'Criminal Forums', 'Data Breach Feeds'],
  },
  {
    category: 'SIEM & Logging',
    icon: Database,
    items: ['Microsoft Sentinel', 'Splunk', 'IBM QRadar', 'Elastic Security'],
  },
  {
    category: 'Backup & Recovery',
    icon: HardDrive,
    items: ['Veeam', 'Cohesity', 'Commvault', 'Backup Health APIs'],
  },
  {
    category: 'Attack Surface',
    icon: Globe,
    items: ['Domain Intelligence', 'Certificate Transparency', 'Shodan', 'Open Port Scanning'],
  },
  {
    category: 'Vulnerability Management',
    icon: Activity,
    items: ['Tenable Nessus', 'Qualys', 'Rapid7', 'CVE Intelligence Feeds'],
  },
  {
    category: 'Security Awareness',
    icon: Shield,
    items: ['KnowBe4', 'Proofpoint TAP', 'Cofense', 'Phishing Simulation APIs'],
  },
  {
    category: 'Financial Systems',
    icon: CreditCard,
    items: ['Authorized Read-Only Access', 'Transaction Monitoring', 'BEC Detection', 'Anomaly Alerts'],
  },
  {
    category: 'Deception Environments',
    icon: Lock,
    items: ['Honeypots', 'Canary Tokens', 'Decoy Credentials', 'Attacker Profiling'],
  },
  {
    category: 'Business Applications',
    icon: Building,
    items: ['CRM Systems', 'ERP Platforms', 'HRIS Systems', 'Critical SaaS Tools'],
  },
  {
    category: 'Third-Party Vendors',
    icon: Code2,
    items: ['Vendor Risk APIs', 'Supply Chain Intelligence', 'Fourth-Party Exposure', 'Security Ratings'],
  },
];

export default function Integrations() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="integrations-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Signal Sources
          </p>
          <h2
            id="integrations-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Signals collected from
            <br />
            every layer of the environment.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Our platform aggregates intelligence from every layer of an organization&apos;s
            digital infrastructure — cloud platforms, identity providers, endpoint
            protection, threat intelligence feeds, and beyond.
          </p>
        </div>

        {/* Signal source grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden"
          role="list"
        >
          {signalSources.map((source) => (
            <div
              key={source.category}
              role="listitem"
              className="bg-white p-5 hover:bg-[#f7f8fa] transition-colors group cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-[5px] bg-[#f7f8fa] border border-[#e5e7eb] flex items-center justify-center flex-shrink-0 group-hover:border-[#c7d8fd] group-hover:bg-[#e8f0fe] transition-colors">
                  <source.icon size={14} className="text-[#6b7280] group-hover:text-[#0165FC] transition-colors" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#0a0a0b]">
                  {source.category}
                </h3>
              </div>
              <ul className="space-y-1">
                {source.items.map((item) => (
                  <li key={item} className="text-[11px] text-[#9ca3af] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#d1d5db] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* API note */}
        <div className="mt-8 p-4 border border-[#e5e7eb] rounded-[6px] bg-[#f7f8fa] flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-[#0165FC]" />
            <span className="text-[13px] font-semibold text-[#0a0a0b]">Secure read-only access — no business disruption</span>
          </div>
          <div className="sm:ml-auto font-mono text-[11px] text-[#6b7280] bg-white border border-[#e5e7eb] px-3 py-1.5 rounded-[4px]">
            GET /api/v1/organizations/{'{'}orgId{'}'}/risk-score
          </div>
        </div>
      </div>
    </section>
  );
}
