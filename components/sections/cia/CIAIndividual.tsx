import { ArrowRight, UserCheck, FileText, Award } from 'lucide-react';

const COURSES_URL = 'https://lms.barbon.tech/courses';

const steps = [
  {
    icon: UserCheck,
    label: 'Enrol',
    description: 'Create an account and enrol directly on the Barbon CIA learning platform.',
  },
  {
    icon: FileText,
    label: 'Complete the course',
    description: 'Work through the structured curriculum at your own pace, including assessments and required learning activities.',
  },
  {
    icon: Award,
    label: 'Receive your certificate',
    description: 'On successful completion, receive your Barbon Cyber Insurance Academy certificate.',
  },
];

const audiences = [
  'Insurance underwriters',
  'Insurance brokers',
  'Claims professionals',
  'Risk professionals',
  'Compliance officers',
  'Insurance sales teams',
  'Corporate insurance teams',
  'Professionals transitioning into cyber insurance',
];

export default function CIAIndividual() {
  return (
    <section
      className="section-spacing bg-[#f7f8fa] border-y border-[#e5e7eb]"
      aria-labelledby="cia-individual-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Individual Learning
            </p>
            <h2
              id="cia-individual-heading"
              className="text-[32px] md:text-[38px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5 text-balance"
            >
              Cyber Insurance Training for Insurance Professionals
            </h2>
            <p className="text-[16px] text-[#6b7280] leading-[1.75] mb-8">
              Professionals can enrol directly through the Barbon CIA platform. Choose
              the course level that fits your experience, work through the curriculum
              and assessments, and receive your certificate upon successful completion.
            </p>

            {/* Steps */}
            <div className="space-y-5 mb-10">
              {steps.map((step, i) => (
                <div key={step.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e8f0fe] border border-[#c7d8fd] flex items-center justify-center text-[12px] font-bold text-[#0165FC]">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon size={13} className="text-[#0165FC]" aria-hidden="true" />
                      <span className="text-[14px] font-semibold text-[#0a0a0b]">{step.label}</span>
                    </div>
                    <p className="text-[13px] text-[#6b7280] leading-[1.6]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={COURSES_URL}
              id="cia-individual-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
            >
              Explore Courses
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — who should enrol */}
          <div className="border border-[#e5e7eb] rounded-[8px] bg-white p-8">
            <h3 className="text-[16px] font-semibold text-[#0a0a0b] mb-2">
              Who should enrol?
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[1.65] mb-6">
              Barbon CIA courses are designed for professionals working in or around insurance
              who want to build structured knowledge in cyber insurance and cyber risk.
              No cybersecurity background is required.
            </p>
            <ul className="space-y-2.5" role="list">
              {audiences.map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-[14px] text-[#0a0a0b]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="7" fill="#e8f0fe" />
                    <path d="M4 7l2 2 4-4" stroke="#0165FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
