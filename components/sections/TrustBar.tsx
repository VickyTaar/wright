import { ShieldCheck, Eye, Scale, Zap } from 'lucide-react';

const pillars = [
  { icon: ShieldCheck, label: 'Independent & Vendor-Neutral' },
  { icon: Eye,         label: 'Continuously Validated' },
  { icon: Scale,       label: 'Insurer-Grade Intelligence' },
  { icon: Zap,         label: 'Real-Time Risk Signals' },
];

export default function TrustBar() {
  return (
    <section
      className="border-y border-[#e5e7eb] bg-[#f7f8fa] py-10"
      aria-label="Platform trust indicators"
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Statement */}
          <div className="flex-1 max-w-md">
            <p className="text-[15px] font-medium text-[#0a0a0b] leading-snug">
              Built for insurers that need to underwrite
              technology risk with measurable confidence.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-[#e5e7eb]" aria-hidden="true" />

          {/* Pillars */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={15} className="text-[#0165FC] flex-shrink-0" />
                <span className="text-[13px] font-medium text-[#6b7280]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
