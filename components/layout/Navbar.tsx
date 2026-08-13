'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'Cyber Risk', href: '/platform' },
  { label: 'AI Assurance', href: '/ai' },
  { label: 'Risky Tech', href: '/risky-tech', badge: 'NEW' },
  { label: 'Our Approach', href: '/security' },
  { label: 'Who We Serve', href: '/solutions' },
  { label: 'Insights', href: '/resources' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] shadow-sm py-2'
          : 'bg-white/95 backdrop-blur-sm border-b border-[#f1f5f9] py-3'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-site flex items-center justify-between h-14"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Barbon Insurance Technologies - Home"
          className="flex items-center gap-2 group"
        >
          <Logo size={34} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#f8fafc] p-1.5 rounded-full border border-[#e2e8f0]/80">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-150 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-[#0a0a0b] shadow-2xs font-semibold'
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-white/60'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.2 text-[9.5px] font-extrabold tracking-wider text-white uppercase bg-gradient-to-r from-[#0165FC] to-[#2563eb] rounded-full shadow-2xs">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[14px] font-medium text-[#64748b] hover:text-[#0f172a] transition-colors duration-150 px-3 py-2 rounded-lg hover:bg-[#f1f5f9]"
          >
            Contact
          </Link>
          <Link
            href="/demo"
            id="nav-cta"
            className="group relative inline-flex items-center justify-center gap-2 px-4.5 py-2.5 text-[13.5px] font-semibold text-white bg-gradient-to-r from-[#0165FC] to-[#0052d4] hover:from-[#0052d4] hover:to-[#0041ab] rounded-full shadow-md hover:shadow-lg hover:shadow-[#0165FC]/20 transition-all duration-200"
          >
            <span>Request a Briefing</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="lg:hidden fixed inset-0 top-16 bg-white/98 backdrop-blur-xl z-40 flex flex-col p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 text-[15px] font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0165FC]/10 text-[#0165FC] font-semibold'
                      : 'text-[#0f172a] hover:bg-[#f8fafc]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-white uppercase bg-[#0165FC] rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="px-4 py-3 text-[15px] font-medium text-[#0f172a] hover:bg-[#f8fafc] rounded-xl transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
              <Link
                href="/demo"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#0165FC] to-[#0052d4] rounded-xl shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                <span>Request a Briefing</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
