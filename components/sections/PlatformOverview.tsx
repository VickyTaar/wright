import Link from 'next/link';
import { ArrowRight, FileText, ShieldCheck, BarChart3, Users, Building2, UserCircle, CreditCard, LineChart, FolderOpen, Plug, Brain, Scale, Lock } from 'lucide-react';

const modules = [
  {
    icon: FileText,
    name: 'Policy Administration',
    description: 'Full lifecycle management — quote, bind, endorse, renew, and cancel across all lines of business.',
  },
  {
    icon: ShieldCheck,
    name: 'Claims Management',
    description: 'End-to-end claims processing with automated workflows, reserve management, and adjuster tools.',
  },
  {
    icon: BarChart3,
    name: 'Underwriting Workbench',
    description: 'Structured risk assessment, pricing tools, and approval workflows for underwriting teams.',
  },
  {
    icon: Users,
    name: 'CRM',
    description: 'Customer relationship management built specifically for insurance — policies, history, and communications.',
  },
  {
    icon: Building2,
    name: 'Broker Portal',
    description: 'A dedicated portal for brokers to quote, submit business, and track commissions in real time.',
  },
  {
    icon: UserCircle,
    name: 'Agency Portal',
    description: 'Agency management with performance dashboards, policy access, and revenue tracking.',
  },
  {
    icon: Users,
    name: 'Customer Portal',
    description: 'Self-service portal for policyholders — view coverage, file claims, make payments, download documents.',
  },
  {
    icon: CreditCard,
    name: 'Payments',
    description: 'Premium collection, instalment plans, refunds, and reconciliation — integrated with major payment rails.',
  },
  {
    icon: LineChart,
    name: 'Analytics',
    description: 'Business intelligence dashboards with portfolio analysis, loss ratios, and regulatory reporting.',
  },
  {
    icon: FolderOpen,
    name: 'Document Management',
    description: 'Centralised document store with AI extraction, version control, and compliant archival.',
  },
  {
    icon: Plug,
    name: 'Integrations',
    description: 'Connect to any third-party system via REST APIs, webhooks, and a growing library of pre-built connectors.',
  },
  {
    icon: Brain,
    name: 'AI Engine',
    description: 'Fraud detection, document intelligence, risk scoring, and natural language query across your data.',
  },
  {
    icon: Scale,
    name: 'Compliance',
    description: 'Regulatory reporting, audit trails, data residency controls, and jurisdiction-specific rule engines.',
  },
  {
    icon: Lock,
    name: 'Security',
    description: 'Role-based access, MFA, SSO, zero-trust architecture, and enterprise-grade encryption at rest and in transit.',
  },
];

export default function PlatformOverview() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="platform-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            Platform
          </p>
          <h2
            id="platform-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            One platform.
            <br />
            Every insurance function.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Barbon OS is a modular operating system for insurance companies.
            Each module works independently, or together — sharing the same data
            platform, the same identity layer, and the same AI engine.
          </p>
        </div>

        {/* Module grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden mb-10"
          role="list"
        >
          {modules.map((mod) => (
            <div
              key={mod.name}
              role="listitem"
              className="bg-white p-5 hover:bg-[#f7f8fa] transition-colors duration-150 group cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-[5px] bg-[#e8f0fe] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c7d8fd] transition-colors">
                  <mod.icon size={14} className="text-[#0165FC]" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#0a0a0b]">{mod.name}</h3>
              </div>
              <p className="text-[12px] text-[#6b7280] leading-[1.55]">{mod.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/platform"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0165FC] hover:text-[#0052d4] transition-colors group"
        >
          Explore the full platform
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
