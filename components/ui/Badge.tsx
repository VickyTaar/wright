import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'blue' | 'green' | 'amber' | 'red' | 'mono';
  className?: string;
}

const badgeVariants = {
  default: 'bg-[#f7f8fa] text-[#6b7280] border border-[#e5e7eb]',
  blue: 'bg-[#e8f0fe] text-[#0165FC] border border-[#c7d8fd]',
  green: 'bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]',
  amber: 'bg-[#fffbeb] text-[#b45309] border border-[#fde68a]',
  red: 'bg-[#fef2f2] text-[#dc2626] border border-[#fecaca]',
  mono: 'bg-[#0a0a0b] text-[#e5e7eb] border border-[#27272a] font-mono',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-[4px] ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
