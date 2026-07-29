import Image from 'next/image';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export default function Logo({
  size = 28,
  showText = true,
  className = '',
  textClassName = 'text-[15px] font-semibold tracking-tight text-[#0a0a0b]',
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="Barbon Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
      {showText && (
        <span className={textClassName}>
          Barbon
        </span>
      )}
    </div>
  );
}
