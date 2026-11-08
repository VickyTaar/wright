import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonAsButton extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: undefined;
}

interface ButtonAsLink extends ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#0F2537] text-[#FBFBF9] hover:bg-[#1A3852] border border-[#0F2537]',
  secondary:
    'bg-[#F4F3EE] text-[#141413] hover:bg-[#EDEBE3] border border-[#D5D2C7]',
  ghost:
    'bg-transparent text-[#4A4A45] hover:text-[#141413] hover:bg-[#F4F3EE] border border-transparent',
  outline:
    'bg-transparent text-[#0F2537] hover:bg-[#F0F4F7] border border-[#0F2537]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-[13px] tracking-tight',
  md: 'px-4 py-2.5 text-[14px] tracking-tight',
  lg: 'px-6 py-3 text-[15px] tracking-tight',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;

  const base =
    'inline-flex items-center justify-center font-medium rounded-[2px] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2537] whitespace-nowrap';
  const styles = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...linkProps } = props as ButtonAsLink;
    return (
      <Link className={styles} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...buttonProps } = props as ButtonAsButton & { href?: undefined };
  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
