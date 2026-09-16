import { ArrowRight } from 'lucide-react';

const CERTIFICATION_URL = 'https://lms.barbon.tech/certification';

export default function CIACertification() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="cia-cert-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — description */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
              Cyber Insurance Certification
            </p>
            <h2
              id="cia-cert-heading"
              className="text-[32px] md:text-[38px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5 text-balance"
            >
              Cyber Insurance Certification from Barbon CIA
            </h2>
            <div className="space-y-4 text-[16px] text-[#6b7280] leading-[1.75] mb-8">
              <p>
                Professionals who successfully complete a Barbon CIA course and its
                associated assessment receive a Barbon Cyber Insurance Academy certificate.
              </p>
              <p>
                The certificate records the course completed, the level achieved and
                the date of completion. It provides a verifiable record of structured
                professional learning in cyber insurance.
              </p>
              <p>
                Barbon CIA certificates represent successful completion of Barbon&apos;s
                courses and assessments. Any external accreditation or CPD recognition
                will be stated separately where formally established.
              </p>
            </div>
            <a
              href={CERTIFICATION_URL}
              id="cia-cert-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium text-white bg-[#0165FC] hover:bg-[#0052d4] rounded-[6px] transition-colors duration-150 group"
            >
              View Certification Pathways
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — mock certificate */}
          <div aria-label="Sample Barbon CIA certificate" role="img">
            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute inset-0 rounded-[12px] border-2 border-[#0165FC]/20 translate-x-3 translate-y-3" aria-hidden="true" />
              {/* Certificate card */}
              <div className="relative bg-white border border-[#e5e7eb] rounded-[12px] overflow-hidden shadow-md">
                {/* Top bar */}
                <div className="bg-gradient-to-r from-[#0165FC] to-[#0052d4] px-8 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-1">
                      Barbon Insurance Technologies
                    </p>
                    <p className="text-[16px] font-bold text-white">
                      Cyber Insurance Academy
                    </p>
                  </div>
                  {/* Shield icon */}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>

                {/* Certificate body */}
                <div className="px-8 py-8 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
                    Certificate of Completion
                  </p>
                  <p className="text-[13px] text-[#6b7280] mb-3">This certifies that</p>

                  {/* Name placeholder */}
                  <div className="inline-block border-b-2 border-[#0165FC] pb-1 mb-4">
                    <p className="text-[20px] font-bold text-[#0a0a0b] tracking-wide">
                      [Participant Name]
                    </p>
                  </div>

                  <p className="text-[13px] text-[#6b7280] mb-1">has successfully completed</p>
                  <p className="text-[16px] font-semibold text-[#0a0a0b] mb-6">
                    [Course Name]
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
                    <div className="text-left">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1">
                        Certificate ID
                      </p>
                      <p className="text-[12px] font-mono text-[#0a0a0b]">CIA-XXXXXX</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1">
                        Date Issued
                      </p>
                      <p className="text-[12px] text-[#0a0a0b]">[Date]</p>
                    </div>
                  </div>
                </div>

                {/* Footer stripe */}
                <div className="bg-[#f7f8fa] border-t border-[#e5e7eb] px-8 py-3">
                  <p className="text-[11px] text-[#9ca3af] text-center">
                    Issued by Barbon CIA &mdash; barbon.tech/cyber-insurance-academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
