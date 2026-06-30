'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, FileSearch, Calculator, ShieldAlert, Scale, GitBranch, Loader2 } from 'lucide-react';

const steps = [
  {
    id: 'upload',
    icon: FileSearch,
    label: 'Document Ingestion',
    detail: 'Claim #CLM-2024-8840 received',
    sub: '14 documents · PDF, XLSX, JPG',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'extract',
    icon: FileSearch,
    label: 'AI Extraction',
    detail: 'Structured data extracted',
    sub: 'Policy terms · Incident report · Photos',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'inconsistencies',
    icon: AlertTriangle,
    label: 'Inconsistency Detection',
    detail: '2 discrepancies identified',
    sub: 'Date mismatch · Location variance',
    status: 'warning',
    color: '#b45309',
  },
  {
    id: 'assessment',
    icon: Calculator,
    label: 'Preliminary Assessment',
    detail: 'Estimated loss: $82,500',
    sub: 'Confidence: 94.2%',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'fraud',
    icon: ShieldAlert,
    label: 'Fraud Risk Analysis',
    detail: 'Risk score: 0.71 / 1.0',
    sub: 'Elevated · Requires adjuster review',
    status: 'risk',
    color: '#dc2626',
  },
  {
    id: 'settlement',
    icon: Scale,
    label: 'Settlement Recommendation',
    detail: 'Suggested: $71,200',
    sub: 'After deductibles and exclusions',
    status: 'done',
    color: '#0165FC',
  },
  {
    id: 'routing',
    icon: GitBranch,
    label: 'Approval Routing',
    detail: 'Routed to Senior Adjuster',
    sub: 'A. Kamara · Priority: High',
    status: 'active',
    color: '#0165FC',
  },
];

const statusIcon = {
  done: <CheckCircle2 size={13} className="text-[#059669]" />,
  warning: <AlertTriangle size={13} className="text-[#b45309]" />,
  risk: <AlertTriangle size={13} className="text-[#dc2626]" />,
  active: <Loader2 size={13} className="text-[#0165FC] animate-spin" />,
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
      // Restart the animation loop
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
          <span className="text-[12px] font-semibold text-[#0a0a0b]">AI Claims Assistant</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[#9ca3af]">Claim</span>
          <span className="text-[10px] font-mono font-medium text-[#0a0a0b]">CLM-2024-8840</span>
          <span className="w-2 h-2 rounded-full bg-[#0165FC] animate-pulse" />
        </div>
      </div>

      {/* Claim info */}
      <div className="px-4 py-3 border-b border-[#e5e7eb] bg-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[13px] font-semibold text-[#0a0a0b]">Meridian Corp — Property Damage</p>
            <p className="text-[11px] text-[#9ca3af]">Submitted 14 Jun 2024 · Commercial Property · LOB: Fire & Allied</p>
          </div>
          <span className="text-[10px] px-2 py-1 bg-[#fef2f2] text-[#dc2626] border border-[#fecaca] rounded-[4px] font-medium">High Risk</span>
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
              <p className="text-[11px] font-semibold text-[#0a0a0b]">Ready for adjuster review</p>
              <p className="text-[10px] text-[#9ca3af]">AI processing complete · 23s</p>
            </div>
            <button type="button" className="text-[10px] bg-[#0165FC] text-white px-3 py-1.5 rounded-[4px] font-medium">
              Assign →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
