'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroDashboard from '@/components/mockups/HeroDashboard';

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid pattern */}
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

      <div className="container-site relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-[12px] font-medium text-[#0165FC] bg-[#e8f0fe] border border-[#c7d8fd] rounded-[4px] hover:bg-[#dae6fe] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0165FC]" />
                Introducing Barbon OS
                <ChevronRight size={12} />
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              className="text-[40px] md:text-[52px] lg:text-[56px] font-bold tracking-[-0.02em] leading-[1.05] text-[#0a0a0b] mb-6 text-balance"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            >
              The Operating System
              <br />
              for Modern Insurance.
            </motion.h1>

            {/* Body */}
            <motion.p
              className="text-[17px] md:text-[18px] text-[#6b7280] leading-[1.7] mb-10 max-w-[480px] text-pretty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              Barbon OS is an AI-powered insurance platform built for insurers,
              brokers, bancassurance providers, agencies, and embedded insurance
              businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              <Link
                href="/demo"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
              >
                Request Demo
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/platform"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium text-[#0a0a0b] bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f7f8fa] rounded-[6px] transition-colors duration-150"
              >
                Explore Platform
              </Link>
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
                  'SOC 2 Type II',
                  'ISO 27001',
                  'GDPR Compliant',
                  'API-First',
                  'Cloud Native',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="#0165FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            className="relative lg:mt-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          >
            {/* Decoration frame */}
            <div className="relative">
              {/* Window chrome */}
              <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-t-lg px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#e5e7eb]" />
                  <span className="w-3 h-3 rounded-full bg-[#e5e7eb]" />
                  <span className="w-3 h-3 rounded-full bg-[#e5e7eb]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-[4px] px-3 py-1 text-[11px] text-[#9ca3af]">
                    <span>🔒</span>
                    app.barbonos.io/dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard */}
              <div className="border border-t-0 border-[#e5e7eb] rounded-b-lg overflow-hidden shadow-lg">
                <HeroDashboard />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
