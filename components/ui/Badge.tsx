import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'navy' | 'paper' | 'muted';
  className?: string;
}

const badgeVariants = {
  default: 'bg-[#F4F3EE] text-[#4A4A45] border border-[#E5E3DC]',
  navy: 'bg-[#F0F4F7] text-[#0F2537] border border-[#C8D6E2]',
  paper: 'bg-[#FFFFFF] text-[#141413] border border-[#D5D2C7]',
  muted: 'bg-transparent text-[#767670] border border-[#E5E3DC]',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono tracking-tight uppercase rounded-[2px] ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
