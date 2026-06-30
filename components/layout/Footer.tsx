import Link from 'next/link';
import { Mail } from 'lucide-react';

const footerNav = {
  product: {
    label: 'Product',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'Policy Administration', href: '/platform#policy' },
      { label: 'Claims Management', href: '/platform#claims' },
      { label: 'Underwriting', href: '/platform#underwriting' },
      { label: 'AI Capabilities', href: '/ai' },
      { label: 'Integrations', href: '/platform#integrations' },
    ],
  },
  solutions: {
    label: 'Solutions',
    links: [
      { label: 'General Insurance', href: '/solutions#general' },
      { label: 'Life Insurance', href: '/solutions#life' },
      { label: 'Health Insurance', href: '/solutions#health' },
      { label: 'Bancassurance', href: '/solutions#bancassurance' },
      { label: 'Microinsurance', href: '/solutions#micro' },
      { label: 'Broker Platforms', href: '/solutions#brokers' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'About Wright', href: '/about' },
      { label: 'Security', href: '/security' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request Demo', href: '/demo' },
    ],
  },
  legal: {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'Data Processing', href: '/legal/dpa' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-[#e5e7eb] bg-white">
      {/* Main footer content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#0165FC" />
                <path
                  d="M7 8h14M7 14h8M7 20h11"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[15px] font-semibold tracking-tight text-[#0a0a0b]">
                Wright
              </span>
            </Link>
            <p className="text-[14px] text-[#6b7280] leading-relaxed max-w-[240px] mb-6">
              Building the operating system for modern insurance companies.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/wright"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wright on LinkedIn"
                className="p-2 text-[#9ca3af] hover:text-[#0165FC] transition-colors rounded-md hover:bg-[#f7f8fa]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://github.com/wright"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wright on GitHub"
                className="p-2 text-[#9ca3af] hover:text-[#0165FC] transition-colors rounded-md hover:bg-[#f7f8fa]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@wrightinsurance.io"
                aria-label="Email Wright"
                className="p-2 text-[#9ca3af] hover:text-[#0165FC] transition-colors rounded-md hover:bg-[#f7f8fa]"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(footerNav).map((section) => (
            <div key={section.label} className="col-span-1">
              <h3 className="text-[12px] font-semibold uppercase tracking-widest text-[#0a0a0b] mb-4">
                {section.label}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#6b7280] hover:text-[#0a0a0b] transition-colors"
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
      <div className="border-t border-[#e5e7eb]">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[#9ca3af]">
            © {currentYear} Wright Technologies, Inc. All rights reserved.
          </p>
          <p className="text-[13px] text-[#9ca3af]">
            Barbon OS is built for the future of insurance.
          </p>
        </div>
      </div>
    </footer>
  );
}
