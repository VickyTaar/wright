import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerNav = {
  services: {
    label: 'Risk Intelligence',
    links: [
      { label: 'Cyber Risk Intelligence', href: '/platform' },
      { label: 'AI Risk Assurance', href: '/ai' },
      { label: 'Continuous Monitoring', href: '/platform#monitoring' },
      { label: 'Vendor Assurance', href: '/platform#vendor' },
      { label: 'Underwriting Reports', href: '/platform#underwriting' },
    ],
  },
  for: {
    label: 'Who We Serve',
    links: [
      { label: 'Insurers & Underwriters', href: '/solutions#insurers' },
      { label: 'Brokers & MGAs', href: '/solutions#brokers' },
      { label: 'Enterprise Organizations', href: '/solutions#enterprise' },
      { label: 'Technology Providers', href: '/solutions#technology' },
      { label: 'Financial Institutions', href: '/solutions#financial' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'About Barbon', href: '/about' },
      { label: 'Barbon CIA (Academy)', href: '/cyber-insurance-academy' },
      { label: 'Our Approach', href: '/security' },
      { label: 'Barbon Risk Index', href: '/risky-tech' },
      { label: 'Insights & Research', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  legal: {
    label: 'Legal & Standards',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'Data Processing Agreement', href: '/legal/dpa' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-[#E5E3DC] bg-[#F4F3EE]">
      {/* Main footer content */}
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo size={26} />
            </Link>
            <p className="text-[14px] text-[#52524E] leading-relaxed max-w-[280px] mb-6">
              The underwriting engine for cyber and AI risk. Partnering with insurers, reinsurers, brokers, and MGAs to pioneer cyber insurance across Africa and beyond.
            </p>
            {/* Contact & Socials */}
            <div className="flex flex-col gap-2 text-[13px] text-[#767670]">
              <a
                href="mailto:hello@barbon.tech"
                className="hover:text-[#141413] transition-colors inline-flex items-center gap-2"
              >
                <Mail size={14} className="text-[#0F2537]" />
                hello@barbon.tech
              </a>
              <a
                href="tel:+25470696363"
                className="hover:text-[#141413] transition-colors inline-flex items-center gap-2"
              >
                <Phone size={14} className="text-[#0F2537]" />
                +254 706 963 63
              </a>
              <a
                href="https://linkedin.com/company/barbon-insurance-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#141413] transition-colors mt-1 inline-flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.values(footerNav).map((section) => (
            <div key={section.label} className="col-span-1">
              <h3 className="text-[12px] font-mono uppercase tracking-wider text-[#141413] mb-4">
                {section.label}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-[#52524E] hover:text-[#141413] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E5E3DC]">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#767670]">
          <p>
            © {currentYear} Barbon Intelligent Technologies Ltd. All rights reserved.
          </p>
          <p>
            Independent Technology Risk Intelligence & Underwriting Telemetry.
          </p>
        </div>
      </div>
    </footer>
  );
}
