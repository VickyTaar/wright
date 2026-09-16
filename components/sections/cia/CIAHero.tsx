'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LMS_BASE = 'https://lms.barbon.tech';
const COURSES_URL = `${LMS_BASE}/courses`;
const CORPORATE_URL = `${LMS_BASE}/corporate-training`;

export default function CIAHero() {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden"
      aria-labelledby="cia-hero-heading"
    >
      {/* Subtle grid pattern — matches homepage hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: 0.4,
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Blue accent glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(1,101,252,0.06) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-[12px] font-semibold text-[#0165FC] bg-[#e8f0fe] border border-[#c7d8fd] rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0165FC]" aria-hidden="true" />
              <span>Barbon CIA &mdash; Cyber Insurance Academy</span>
            </div>
          </motion.div>

          {/* H1 — primary SEO keyword */}
          <motion.h1
            id="cia-hero-heading"
            className="text-[40px] md:text-[52px] lg:text-[60px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-5 text-balance"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            Cyber Insurance Academy
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-[20px] md:text-[22px] font-semibold text-[#0165FC] mb-5 leading-[1.4]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.18 }}
          >
            Building the people who will build Africa&apos;s cyber insurance market.
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            className="text-[17px] md:text-[18px] text-[#6b7280] leading-[1.7] mb-10 max-w-[560px] text-pretty"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          >
            Professional education for the people shaping the future of cyber insurance.
            Barbon CIA offers structured cyber insurance training and certification for
            insurance professionals across Africa and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.33 }}
          >
            <a
              href={COURSES_URL}
              id="cia-hero-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
            >
              Explore Courses
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={CORPORATE_URL}
              id="cia-hero-cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-[#0a0a0b] bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f7f8fa] rounded-[6px] transition-colors duration-150"
            >
              Train Your Team
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-px bg-[#e5e7eb] w-full" />
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                'Professional Curriculum',
                'Individual Enrolment',
                'Corporate Training',
                'Cyber Insurance Focus',
                'Africa-Relevant',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="#0165FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
