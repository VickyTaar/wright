import Link from 'next/link';
import { ArrowRight, Search, ShieldCheck, BarChart3, Eye, AlertTriangle, Monitor, Cloud, Users, Globe, FileCheck, TrendingUp, Target, BookOpen, Activity } from 'lucide-react';

const services = [
  {
    icon: Search,
    name: 'Cyber Insurance Risk Assessments',
    description: 'Independent technical assessments that provide insurers with objective risk intelligence ahead of policy inception and renewal.',
  },
  {
    icon: BarChart3,
    name: 'Underwriting Intelligence',
    description: 'Structured risk reports built for underwriting decisions - not compliance reports. Actionable, measurable, and continuously updated.',
  },
  {
    icon: Eye,
    name: 'Continuous Cyber Risk Monitoring',
    description: 'Ongoing surveillance across an organization\'s entire technology environment throughout the policy lifecycle - not just at renewal.',
  },
  {
    icon: Target,
    name: 'Cyber Risk Scoring',
    description: 'A proprietary scoring model that quantifies cyber risk into a single, explainable metric that insurers can act on with confidence.',
  },
  {
    icon: AlertTriangle,
    name: 'Threat Intelligence',
    description: 'Real-time threat feeds correlated against each insured\'s specific environment - surfacing exposure before it becomes a claim.',
  },
  {
    icon: Monitor,
    name: 'Executive Dashboards',
    description: 'Clear, executive-friendly reporting translating technical risk signals into the language of insurance underwriting and loss prevention.',
  },
  {
    icon: ShieldCheck,
    name: 'Security Validation',
    description: 'Verification that existing security controls are correctly implemented, functioning as intended, and reducing actual risk.',
  },
  {
    icon: Users,
    name: 'Vendor Assurance',
    description: 'Independent validation that cybersecurity vendors are delivering meaningful risk reduction - not just meeting contractual requirements.',
  },
  {
    icon: Globe,
    name: 'Attack Surface Monitoring',
    description: 'Continuous discovery and monitoring of internet-facing assets, identifying exposed infrastructure before threat actors do.',
  },
  {
    icon: Cloud,
    name: 'Cloud Security Validation',
    description: 'Assessment of cloud environment configurations across AWS, Azure, and Google Cloud - identifying misconfigurations and policy drift.',
  },
  {
    icon: Activity,
    name: 'Identity Risk Monitoring',
    description: 'Continuous assessment of identity provider health, privileged access, MFA adoption, and credential compromise indicators.',
  },
  {
    icon: Search,
    name: 'Third-Party Risk Reviews',
    description: 'Evaluation of supply chain and vendor exposure - assessing how third-party risk propagates into the insured\'s environment.',
  },
  {
    icon: BookOpen,
    name: 'Security Governance Reviews',
    description: 'Assessment of security programme maturity, policy frameworks, awareness culture, and board-level accountability.',
  },
  {
    icon: FileCheck,
    name: 'Compliance Validation',
    description: 'Independent verification of regulatory and standards compliance - providing insurers with evidence beyond self-attestation.',
  },
  {
    icon: TrendingUp,
    name: 'Cyber Risk Trend Analysis',
    description: 'Longitudinal tracking of an organization\'s cyber posture over time - identifying whether risk is improving, stable, or deteriorating.',
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
            Cyber Risk Intelligence
          </p>
          <h2
            id="platform-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5"
          >
            Continuous risk intelligence.
            <br />
            Across the entire policy lifecycle.
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7]">
            Barbon enables insurers and brokers to confidently issue and manage
            cyber insurance through continuous technical assessment - replacing
            the annual questionnaire with ongoing, measurable intelligence.
          </p>
        </div>

        {/* Service grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden mb-10"
          role="list"
        >
          {services.map((svc) => (
            <div
              key={svc.name}
              role="listitem"
              className="bg-white p-5 hover:bg-[#f7f8fa] transition-colors duration-150 group cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-[5px] bg-[#e8f0fe] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c7d8fd] transition-colors">
                  <svc.icon size={14} className="text-[#0165FC]" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#0a0a0b]">{svc.name}</h3>
              </div>
              <p className="text-[12px] text-[#6b7280] leading-[1.55]">{svc.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/platform"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0165FC] hover:text-[#0052d4] transition-colors group"
        >
          Explore Cyber Risk Intelligence
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
