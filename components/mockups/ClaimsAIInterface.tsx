'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, ScanLine, BarChart3, ShieldAlert, FileText, GitBranch, Loader2 } from 'lucide-react';

const steps = [
  {
    id: 'mapping',
    icon: ScanLine,
    label: 'Environment Mapping',
    detail: 'ORG-2024-0291 — TechCorp Holdings',
    sub: 'Azure · Microsoft 365 · AWS · 14 connected systems',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'signals',
    icon: BarChart3,
    label: 'Signal Collection',
    detail: '1,847 signals ingested',
    sub: 'Identity · Endpoint · Cloud Posture · Email · Threat Feeds',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'threats',
    icon: AlertTriangle,
    label: 'Threat Intelligence',
    detail: '3 active threat indicators',
    sub: 'Credential exposure · Phishing campaign · Lateral movement patterns',
    status: 'warning',
    color: '#b45309',
  },
  {
    id: 'posture',
    icon: ShieldAlert,
    label: 'Posture Analysis',
    detail: 'Cyber Risk Score: 54 / 100',
    sub: 'MFA gaps · Unpatched endpoints · Misconfigured cloud storage',
    status: 'risk',
    color: '#dc2626',
  },
  {
    id: 'vendor',
    icon: CheckCircle2,
    label: 'Vendor Assurance',
    detail: '6 security vendors validated',
    sub: 'EDR · SIEM · Email Gateway · PAM · WAF · Backup',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'report',
    icon: FileText,
    label: 'Underwriting Intelligence',
    detail: 'Risk report generated',
    sub: 'Confidence: 96.1% · Incident probability: Elevated',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'routing',
    icon: GitBranch,
    label: 'Insurer Delivery',
    detail: 'Routed to underwriting team',
    sub: 'S. Patel · Priority: High · Premium adjustment recommended',
    status: 'active',
    color: '#0165FC',
  },
];

const statusIcon = {
  done:    <CheckCircle2 size={13} className="text-[#059669]" />,
  warning: <AlertTriangle size={13} className="text-[#b45309]" />,
  risk:    <AlertTriangle size={13} className="text-[#dc2626]" />,
  active:  <Loader2 size={13} className="text-[#0165FC] animate-spin" />,
};

export default function ClaimsAIInterface() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < steps.length) {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleCount(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleCount]);

  return (
    <div
      className="w-full rounded-lg border border-[#e5e7eb] bg-white overflow-hidden shadow-sm"
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb] bg-[#f7f8fa]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#0165FC] rounded-[4px] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 2h8M1 5h5M1 8h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-[#0a0a0b]">Risk Assessment Engine</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[#9ca3af]">Assessment</span>
          <span className="text-[10px] font-mono font-medium text-[#0a0a0b]">ORG-2024-0291</span>
          <span className="w-2 h-2 rounded-full bg-[#0165FC] animate-pulse" />
        </div>
      </div>

      {/* Org info */}
      <div className="px-4 py-3 border-b border-[#e5e7eb] bg-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[13px] font-semibold text-[#0a0a0b]">TechCorp Holdings — Cyber Risk Assessment</p>
            <p className="text-[11px] text-[#9ca3af]">Initiated 14 Jun 2024 · Mid-Market · Cyber Liability Renewal</p>
          </div>
          <span className="text-[10px] px-2 py-1 bg-[#fef2f2] text-[#dc2626] border border-[#fecaca] rounded-[4px] font-medium">Elevated Risk</span>
        </div>
      </div>

      {/* Pipeline */}
      <div className="p-4 space-y-0">
        {steps.map((step, i) => {
          const isVisible = i < visibleCount;
          const isLast = i === steps.length - 1;

          return (
            <div key={step.id} className="flex gap-3">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isVisible
                      ? step.status === 'risk'
                        ? 'border-[#dc2626] bg-[#fef2f2]'
                        : step.status === 'warning'
                        ? 'border-[#b45309] bg-[#fffbeb]'
                        : step.status === 'active'
                        ? 'border-[#0165FC] bg-[#e8f0fe]'
                        : 'border-[#059669] bg-[#ecfdf5]'
                      : 'border-[#e5e7eb] bg-[#f7f8fa]'
                  }`}
                >
                  {isVisible && statusIcon[step.status as keyof typeof statusIcon]}
                </div>
                {!isLast && (
                  <div
                    className={`w-px flex-1 min-h-[20px] transition-colors duration-500 ${
                      isVisible ? 'bg-[#e5e7eb]' : 'bg-[#f7f8fa]'
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`pb-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[12px] font-semibold text-[#0a0a0b]">{step.label}</p>
                </div>
                {isVisible && (
                  <>
                    <p className="text-[11px] text-[#6b7280]">{step.detail}</p>
                    <p className="text-[10px] text-[#9ca3af]">{step.sub}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action bar */}
      {visibleCount === steps.length && (
        <div className="px-4 pb-4">
          <div className="border border-[#e5e7eb] rounded-[6px] p-3 flex items-center justify-between bg-[#f7f8fa]">
            <div>
              <p className="text-[11px] font-semibold text-[#0a0a0b]">Risk report ready for underwriter</p>
              <p className="text-[10px] text-[#9ca3af]">Assessment complete · 31s · Premium review recommended</p>
            </div>
            <button type="button" className="text-[10px] bg-[#0165FC] text-white px-3 py-1.5 rounded-[4px] font-medium">
              Review →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
