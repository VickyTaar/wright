'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'Cyber Risk', href: '/platform' },
  { label: 'AI Assurance', href: '/ai' },
  { label: 'Risk Index', href: '/risky-tech' },
  { label: 'Our Approach', href: '/security' },
  { label: 'Who We Serve', href: '/solutions' },
  { label: 'Barbon CIA', href: '/cyber-insurance-academy' },
  { label: 'Insights', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-[#FBFBF9] ${
        scrolled ? 'border-b border-[#D5D2C7]' : 'border-b border-[#E5E3DC]'
      }`}
    >
      <div className="container-site">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between h-18"
        >
          {/* Brand mark */}
          <Link
            href="/"
            aria-label="Barbon - Technology Risk Intelligence"
            className="flex items-center gap-2 shrink-0 py-2"
          >
            <Logo size={24} />
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13.5px] transition-colors py-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-[#141413] font-semibold border-b border-[#141413]'
                      : 'text-[#52524E] hover:text-[#141413]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Medium screen links */}
          <div className="hidden md:flex xl:hidden items-center gap-5">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#141413] font-semibold border-b border-[#141413]'
                      : 'text-[#52524E] hover:text-[#141413]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right actions: Contact + Request a Briefing */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className={`text-[13.5px] transition-colors ${
                pathname === '/contact'
                  ? 'text-[#141413] font-semibold'
                  : 'text-[#52524E] hover:text-[#141413]'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/demo"
              id="nav-cta"
              className="inline-flex items-center gap-2 px-4 py-2 text-[13.5px] font-medium text-[#FBFBF9] bg-[#0F2537] hover:bg-[#1A3852] rounded-[2px] transition-colors whitespace-nowrap"
            >
              Request a Briefing
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-[#52524E] hover:text-[#141413] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden fixed inset-0 top-18 bg-[#FBFBF9] z-40 flex flex-col overflow-y-auto border-t border-[#E5E3DC]"
        >
          <nav className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-[16px] transition-colors border-b border-[#F4F3EE] ${
                    isActive
                      ? 'text-[#141413] font-semibold'
                      : 'text-[#52524E]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-6">
              <Link
                href="/demo"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-[15px] font-medium text-[#FBFBF9] bg-[#0F2537] hover:bg-[#1A3852] rounded-[2px] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span>Request a Briefing</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
