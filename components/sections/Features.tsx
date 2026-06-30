import {
  Cloud, Code2, Brain, Shield, ShieldCheck, ClipboardList, Users,
  FileText, AlertTriangle, Workflow, BarChart3, LineChart,
  Building2, Globe, Zap, Plug
} from 'lucide-react';

const features = [
  {
    icon: Cloud,
    name: 'Cloud Native',
    description: 'Built on modern cloud infrastructure with auto-scaling, multi-region failover, and zero-downtime deployments.',
  },
  {
    icon: Code2,
    name: 'API First',
    description: 'Every function is accessible via REST API. Build custom workflows or connect to your existing tech stack.',
  },
  {
    icon: Brain,
    name: 'AI Powered',
    description: 'Insurance-specific AI models embedded across underwriting, claims, fraud detection, and document processing.',
  },
  {
    icon: ShieldCheck,
    name: 'Compliance Ready',
    description: 'Jurisdiction-specific rule engines, regulatory reporting, and audit trails built into every workflow.',
  },
  {
    icon: Shield,
    name: 'Secure by Design',
    description: 'Zero-trust architecture, encryption at rest and in transit, with enterprise identity management from day one.',
  },
  {
    icon: ClipboardList,
    name: 'Full Audit Trails',
    description: 'Every action logged, timestamped, and attributed — providing complete accountability across all operations.',
  },
  {
    icon: Users,
    name: 'Role-Based Access',
    description: 'Granular permissions at the field level. Define exactly what each role can see, do, and approve.',
  },
  {
    icon: FileText,
    name: 'Document Automation',
    description: 'Generate policy documents, certificates, endorsements, and schedules automatically from structured data.',
  },
  {
    icon: AlertTriangle,
    name: 'Fraud Detection',
    description: 'Machine learning models trained on insurance fraud patterns score every claim before adjuster review.',
  },
  {
    icon: Workflow,
    name: 'Workflow Automation',
    description: 'Visual workflow builder for approvals, escalations, notifications, and business process automation.',
  },
  {
    icon: BarChart3,
    name: 'Reporting',
    description: 'Scheduled and on-demand reports for regulators, management, actuaries, and reinsurers — in standard formats.',
  },
  {
    icon: LineChart,
    name: 'Analytics',
    description: 'Real-time portfolio analytics — loss ratios, premium trends, retention rates, and exposure concentration.',
  },
  {
    icon: Building2,
    name: 'Multi-Branch',
    description: 'Manage multiple branches, regional offices, and business units from a single platform with consolidated reporting.',
  },
  {
    icon: Globe,
    name: 'Multi-Company',
    description: 'Run separate insurance entities on one platform — each with independent books, teams, and compliance rules.',
  },
  {
    icon: Zap,
    name: 'Real-Time Insights',
    description: 'Live operational dashboards with millisecond data freshness — no ETL delay, no stale reports.',
  },
  {
    icon: Plug,
    name: 'Integrations',
    description: 'Pre-built connectors for payment processors, banks, identity providers, reinsurers, and government registries.',
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
            Capabilities
          </p>
          <h2
            id="features-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Everything your team needs.
            <br />
            Nothing they don&apos;t.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Barbon OS ships with the capabilities that enterprise insurance
            operations require — and the discipline to not ship what they don&apos;t.
          </p>
        </div>

        {/* Features grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden"
          role="list"
        >
          {features.map((feature) => (
            <div
              key={feature.name}
              role="listitem"
              className="bg-white p-5 hover:bg-[#f7f8fa] transition-colors group cursor-default"
            >
              <div className="w-7 h-7 rounded-[5px] bg-[#f7f8fa] border border-[#e5e7eb] flex items-center justify-center mb-3 group-hover:border-[#c7d8fd] group-hover:bg-[#e8f0fe] transition-colors">
                <feature.icon size={14} className="text-[#6b7280] group-hover:text-[#0165FC] transition-colors" />
              </div>
              <h3 className="text-[13px] font-semibold text-[#0a0a0b] mb-1.5">{feature.name}</h3>
              <p className="text-[12px] text-[#6b7280] leading-[1.55]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
