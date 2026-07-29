import Link from 'next/link';
import { Mail } from 'lucide-react';

const footerNav = {
  services: {
    label: 'Services',
    links: [
      { label: 'Cyber Risk Intelligence', href: '/platform' },
      { label: 'AI Risk Assurance', href: '/ai' },
      { label: 'Continuous Monitoring', href: '/platform#monitoring' },
      { label: 'Vendor Assurance', href: '/platform#vendor' },
      { label: 'Underwriting Intelligence', href: '/platform#underwriting' },
    ],
  },
  for: {
    label: 'For',
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
      { label: 'Our Approach', href: '/security' },
      { label: 'Insights', href: '/resources' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request a Briefing', href: '/demo' },
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
                Barbon
              </span>
            </Link>
            <p className="text-[14px] text-[#6b7280] leading-relaxed max-w-[240px] mb-6">
              The technology intelligence layer between cybersecurity, AI, and insurance.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/barbon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Barbon on LinkedIn"
                className="p-2 text-[#9ca3af] hover:text-[#0165FC] transition-colors rounded-md hover:bg-[#f7f8fa]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="mailto:hello@barbon.tech"
                aria-label="Email Barbon"
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
            © {currentYear} Barbon Insurance Technologies Ltd. All rights reserved.
          </p>
          <p className="text-[13px] text-[#9ca3af]">
            Technology Risk Intelligence for the Insurance Industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
