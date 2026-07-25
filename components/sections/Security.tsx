import { Shield, Brain, CheckCircle2, Lock, Eye, AlertTriangle, Scale, Users, BarChart3, Cpu, RefreshCw, DollarSign } from 'lucide-react';

const assessmentAreas = [
  {
    icon: Shield,
    name: 'Security Assessment',
    description: 'Evaluation of the AI system\'s underlying infrastructure, API exposure, authentication mechanisms, and attack surface.',
  },
  {
    icon: Users,
    name: 'Governance Review',
    description: 'Assessment of AI governance frameworks, accountability structures, change management processes, and board oversight.',
  },
  {
    icon: CheckCircle2,
    name: 'Reliability Testing',
    description: 'Systematic testing of AI system performance under stress, edge cases, and degraded conditions - including fail-safe behaviour.',
  },
  {
    icon: AlertTriangle,
    name: 'Prompt Injection Resistance',
    description: 'Structured adversarial testing to determine whether the AI system can be manipulated through crafted inputs.',
  },
  {
    icon: Lock,
    name: 'Jailbreak & Evasion Testing',
    description: 'Assessment of the system\'s resilience to attempts to bypass its operating constraints or extract sensitive information.',
  },
  {
    icon: Shield,
    name: 'Tool Permission Audit',
    description: 'Review of what actions the AI agent is permitted to take autonomously - and whether those boundaries are enforced.',
  },
  {
    icon: Eye,
    name: 'Data Leakage Analysis',
    description: 'Assessment of whether the AI system exposes sensitive organizational, customer, or third-party data through its outputs.',
  },
  {
    icon: Brain,
    name: 'Hallucination Risk',
    description: 'Evaluation of the probability and potential financial impact of the AI system generating confidently incorrect outputs.',
  },
  {
    icon: RefreshCw,
    name: 'Decision Consistency',
    description: 'Testing whether the AI system produces consistent, auditable, and explainable decisions across identical or similar inputs.',
  },
  {
    icon: Cpu,
    name: 'Human Oversight Mechanisms',
    description: 'Verification that adequate human approval workflows, review processes, and emergency stop capabilities are in place.',
  },
  {
    icon: Scale,
    name: 'Compliance Readiness',
    description: 'Assessment against emerging AI regulatory frameworks - including EU AI Act, NIST AI RMF, and sector-specific requirements.',
  },
  {
    icon: DollarSign,
    name: 'Financial Exposure Modelling',
    description: 'Quantification of maximum financial loss scenarios arising from AI system failures, errors, and autonomous decision-making.',
  },
];

export default function Security() {
  return (
    <section
      className="section-spacing bg-[#0a0a0b]"
      aria-labelledby="security-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            AI Risk Assurance
          </p>
          <h2
            id="security-heading"
            className="text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] text-white mb-5"
          >
            Enabling insurers to confidently
            <br />
            underwrite AI systems.
          </h2>
          <p className="text-[17px] text-[#9ca3af] leading-[1.7]">
            Businesses are rapidly deploying AI agents capable of making autonomous
            decisions - approving purchases, managing infrastructure, executing
            workflows. Yet one question remains unanswered: who bears financial
            responsibility when an AI system independently causes loss? Barbon
            exists to answer that question.
          </p>
        </div>

        {/* Assessment grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#27272a] border border-[#27272a] rounded-[8px] overflow-hidden mb-10"
          role="list"
        >
          {assessmentAreas.map((area) => (
            <div
              key={area.name}
              role="listitem"
              className="bg-[#111113] p-5 hover:bg-[#18181b] transition-colors group cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-[5px] bg-[#27272a] border border-[#3f3f46] flex items-center justify-center flex-shrink-0 group-hover:border-[#0165FC] group-hover:bg-[#001f6b] transition-colors">
                  <area.icon size={14} className="text-[#71717a] group-hover:text-[#0165FC] transition-colors" />
                </div>
                <h3 className="text-[13px] font-semibold text-white">{area.name}</h3>
              </div>
              <p className="text-[12px] text-[#71717a] leading-[1.55]">{area.description}</p>
            </div>
          ))}
        </div>

        {/* AI Assurance Index */}
        <div className="border border-[#27272a] rounded-[6px] p-5 bg-[#111113]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#71717a] mb-4">
            AI Assurance Index - Barbon Scoring Framework
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Overall AI Assurance Score',
              'Security',
              'Governance',
              'Reliability',
              'Privacy',
              'Compliance',
              'Human Oversight',
              'Financial Exposure',
              'Operational Stability',
              'Autonomy Classification',
              'Recommended Insurance Class',
            ].map((dimension) => (
              <span
                key={dimension}
                className="text-[12px] px-3 py-1.5 bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] rounded-[4px] font-mono"
              >
                {dimension}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
