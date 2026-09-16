'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 'what-is-barbon-cia',
    question: 'What is Barbon CIA?',
    answer:
      'Barbon CIA is the Cyber Insurance Academy — the professional education initiative of Barbon Insurance Technologies. It offers structured cyber insurance training and certification for insurance professionals, including individual enrolment and corporate team training.',
  },
  {
    id: 'what-is-cyber-insurance-training',
    question: 'What is cyber insurance training?',
    answer:
      'Cyber insurance training is structured professional education that helps insurance professionals understand cyber risk, cyber threats and cyber insurance products. It covers topics such as cyber risk assessment, underwriting, policy construction, claims and coverage — equipping professionals to work confidently in the cyber insurance market.',
  },
  {
    id: 'what-does-course-cover',
    question: 'What does a cyber insurance course cover?',
    answer:
      'The Barbon CIA curriculum covers cyber risk fundamentals, cyber threats and their business impact, cyber insurance products, coverage areas and exclusions, underwriting and risk assessment, policy construction, claims and incident response, and emerging risks such as AI-related exposures. The depth varies by course level — Foundation, Professional and Advanced.',
  },
  {
    id: 'who-should-enrol',
    question: 'Who should take a cyber insurance course?',
    answer:
      'Barbon CIA courses are suited to insurance underwriters, brokers, claims professionals, risk managers, compliance officers, insurance sales teams, corporate insurance teams and professionals looking to specialise in cyber insurance. No prior cybersecurity background is needed.',
  },
  {
    id: 'cybersecurity-background',
    question: 'Do I need a cybersecurity background to enrol?',
    answer:
      'No. The Barbon CIA curriculum is designed for insurance professionals, not for cybersecurity specialists. The Foundation course begins with the fundamentals and assumes no prior technical knowledge. Each level builds progressively from there.',
  },
  {
    id: 'certificate',
    question: 'Do I receive a certificate?',
    answer:
      'Yes. Professionals who successfully complete a Barbon CIA course and pass the associated assessment receive a Barbon Cyber Insurance Academy certificate. The certificate records the course name, your name, the certificate ID and the date of completion.',
  },
  {
    id: 'accreditation',
    question: 'Are the certificates accredited?',
    answer:
      'Barbon CIA certificates represent successful completion of Barbon\'s courses and assessments. They are not a regulatory qualification and do not imply external accreditation unless separately stated. Any formal accreditation or CPD recognition arrangements will be communicated clearly where they exist.',
  },
  {
    id: 'corporate-training',
    question: 'Can an insurance company train an entire team?',
    answer:
      'Yes. Barbon offers corporate training for insurance companies, brokers and other organisations. Teams can complete structured cyber insurance training programmes using the CIA curriculum. Contact Barbon CIA to discuss options for your organisation.',
  },
  {
    id: 'customised-training',
    question: 'Can Barbon customise training for our organisation?',
    answer:
      'Customised delivery options are available for organisations with specific requirements. Barbon can discuss tailored corporate cohorts depending on the size and needs of the team. Reach out through the corporate training or partner enquiry page to start a conversation.',
  },
  {
    id: 'how-to-enrol',
    question: 'How do I enrol in a cyber insurance course?',
    answer:
      'Individual enrolment is available directly through the Barbon CIA learning platform. Visit the courses page, select the course level that fits your experience and role, and complete the enrolment process. For corporate or group enrolment, contact Barbon CIA directly.',
  },
  {
    id: 'cyber-insurance-africa',
    question: 'Is cyber insurance available in Africa?',
    answer:
      'Yes. Cyber insurance is available in a number of African markets, including Kenya. The market is at an early stage of development in many countries, which is one of the reasons Barbon CIA exists — to build the professional knowledge base that will help the market grow sustainably.',
  },
  {
    id: 'what-does-cyber-insurance-cover',
    question: 'What does cyber insurance cover?',
    answer:
      'Cyber insurance typically covers losses arising from cyber incidents, including data breaches, ransomware attacks, business interruption caused by cyber events, notification and crisis management costs, and cyber-related liability. Coverage varies by policy. The Barbon CIA curriculum covers common coverage areas, exclusions and policy structures in detail.',
  },
];

export default function CIAFAQ() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="cia-faq-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left heading */}
          <div className="lg:col-span-1">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              FAQ
            </p>
            <h2
              id="cia-faq-heading"
              className="text-[28px] md:text-[32px] font-bold tracking-[-0.015em] leading-[1.15] text-[#0a0a0b] mb-4"
            >
              Frequently asked questions
            </h2>
            <p className="text-[15px] text-[#6b7280] leading-[1.65]">
              Common questions about Barbon CIA, our cyber insurance courses, certification
              and corporate training options.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-2">
            <dl className="divide-y divide-[#e5e7eb]">
              {faqs.map((faq) => {
                const isOpen = open === faq.id;
                return (
                  <div key={faq.id} className="py-4">
                    <dt>
                      <button
                        type="button"
                        id={`faq-btn-${faq.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        onClick={() => toggle(faq.id)}
                        className="flex w-full items-center justify-between gap-4 text-left py-1 group"
                      >
                        <span className="text-[15px] font-medium text-[#0a0a0b] leading-[1.5] group-hover:text-[#0165FC] transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`flex-shrink-0 text-[#9ca3af] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pt-3' : 'max-h-0'}`}
                    >
                      <p className="text-[14px] text-[#6b7280] leading-[1.7]">
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
