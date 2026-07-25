'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Cyber Risk', href: '/platform' },
  { label: 'AI Assurance', href: '/ai' },
  { label: 'Our Approach', href: '/security' },
  { label: 'Who We Serve', href: '/solutions' },
  { label: 'Insights', href: '/resources' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-site flex items-center justify-between h-16"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Barbon Insurance Technologies — Home"
          className="flex items-center gap-2 group"
        >
          <div className="flex items-center gap-2">
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
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-[14px] text-[#6b7280] hover:text-[#0a0a0b] transition-colors duration-150 rounded-md hover:bg-[#f7f8fa]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[14px] text-[#6b7280] hover:text-[#0a0a0b] transition-colors duration-150 px-3 py-2"
          >
            Contact
          </Link>
          <Link
            href="/demo"
            id="nav-cta"
            className="inline-flex items-center justify-center px-4 py-2 text-[14px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150"
          >
            Request a Briefing
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-[#6b7280] hover:text-[#0a0a0b] hover:bg-[#f7f8fa] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col"
        >
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-[15px] text-[#0a0a0b] hover:bg-[#f7f8fa] rounded-md transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-3 text-[15px] text-[#0a0a0b] hover:bg-[#f7f8fa] rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
              <Link
                href="/demo"
                className="flex items-center justify-center w-full px-4 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Request a Briefing
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
