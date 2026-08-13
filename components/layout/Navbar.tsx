'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'Cyber Risk', href: '/platform' },
  { label: 'AI Assurance', href: '/ai' },
  { label: 'Risky Tech', href: '/risky-tech', badge: 'NEW' },
  { label: 'Our Approach', href: '/security' },
  { label: 'Who We Serve', href: '/solutions' },
  { label: 'Insights', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]'
          : 'bg-white/95 border-b border-[#f1f5f9]'
      }`}
    >
      <div className="container-site">
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 h-16"
        >
          {/* Logo — always visible, far left */}
          <Link
            href="/"
            aria-label="Barbon Insurance Technologies - Home"
            className="flex items-center gap-2 shrink-0"
          >
            <Logo size={32} />
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop Nav Links — centered pill */}
          <div className="hidden xl:flex items-center gap-0.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-full px-1.5 py-1.5">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[13px] font-medium transition-all duration-150 rounded-full flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#0a0a0b] shadow-sm font-semibold'
                      : 'text-[#64748b] hover:text-[#0f172a] hover:bg-white/70'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0 text-[9px] font-extrabold tracking-wider text-white uppercase bg-[#0165FC] rounded-full leading-4">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Medium screens: flat links */}
          <div className="hidden md:flex xl:hidden items-center gap-1">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0165FC] bg-[#e8f0fe] font-semibold'
                      : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0 text-[9px] font-extrabold tracking-wider text-white uppercase bg-[#0165FC] rounded-full leading-4">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Contact + CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className={`px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all whitespace-nowrap ${
                pathname === '/contact'
                  ? 'text-[#0165FC] bg-[#e8f0fe]'
                  : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/demo"
              id="nav-cta"
              className="group inline-flex items-center gap-2 px-4 py-2 text-[13.5px] font-semibold text-white bg-gradient-to-r from-[#0165FC] to-[#0052d4] hover:from-[#0052d4] hover:to-[#003db5] rounded-full shadow-md hover:shadow-lg hover:shadow-[#0165FC]/20 transition-all duration-200 whitespace-nowrap"
            >
              Request a Briefing
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col overflow-y-auto"
        >
          <nav className="flex flex-col gap-1 p-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 text-[15px] font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#e8f0fe] text-[#0165FC] font-semibold'
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
            <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
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
