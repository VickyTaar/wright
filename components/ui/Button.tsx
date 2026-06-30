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
    'bg-[#0165FC] text-white hover:bg-[#0052d4] border border-transparent',
  secondary:
    'bg-[#f7f8fa] text-[#0a0a0b] hover:bg-[#e5e7eb] border border-[#e5e7eb]',
  ghost:
    'bg-transparent text-[#6b7280] hover:text-[#0a0a0b] hover:bg-[#f7f8fa] border border-transparent',
  outline:
    'bg-transparent text-[#0165FC] hover:bg-[#e8f0fe] border border-[#0165FC]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-[13px]',
  md: 'px-4 py-2 text-[14px]',
  lg: 'px-5 py-2.5 text-[15px]',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;

  const base =
    'inline-flex items-center justify-center font-medium rounded-[6px] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0165FC] whitespace-nowrap';
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
