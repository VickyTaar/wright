import Image from 'next/image';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export default function Logo({
  size = 26,
  showText = true,
  className = '',
  textClassName = 'text-[17px] font-serif font-semibold tracking-tight text-[#141413]',
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="Barbon"
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
