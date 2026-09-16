export default function CIAWhatIs() {
  return (
    <section
      className="section-spacing bg-white"
      aria-labelledby="cia-whatis-heading"
    >
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#0165FC] mb-4">
            The Academy
          </p>
          <h2
            id="cia-whatis-heading"
            className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0a0a0b] mb-5 text-balance"
          >
            What is Barbon CIA?
          </h2>
          <p className="text-[17px] text-[#6b7280] leading-[1.7] text-pretty">
            Barbon CIA is the professional education initiative of Barbon Insurance Technologies,
            focused on building cyber insurance knowledge and capability across the insurance industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-[8px] overflow-hidden">
          {/* Pillar 1 */}
          <div className="bg-white p-8">
            <div className="w-10 h-10 rounded-[6px] bg-[#e8f0fe] border border-[#c7d8fd] flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0165FC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-3">
              Built for insurance professionals
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">
              The Academy is designed specifically for underwriters, brokers, claims teams,
              risk professionals and others working in or around insurance. No prior
              cybersecurity background is required.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8">
            <div className="w-10 h-10 rounded-[6px] bg-[#e8f0fe] border border-[#c7d8fd] flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0165FC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-3">
              Structured learning pathways
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">
              The CIA curriculum is organised into three progressive levels: Foundation,
              Professional and Advanced. Each level builds on the previous, allowing
              professionals to develop at the right pace for their role and experience.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8">
            <div className="w-10 h-10 rounded-[6px] bg-[#e8f0fe] border border-[#c7d8fd] flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0165FC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0b] mb-3">
              Certificate upon completion
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">
              Professionals who complete a course and pass the associated assessment
              receive a Barbon Cyber Insurance Academy certificate, providing a record
              of structured professional learning.
            </p>
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mt-12 border-l-4 border-[#0165FC] pl-6 max-w-2xl">
          <p className="text-[16px] text-[#0a0a0b] font-medium leading-[1.65]">
            Barbon sits at the intersection of technology risk, cybersecurity and
            insurance. The Academy draws on that position to deliver education that is
            technically grounded and practically relevant to the insurance industry.
          </p>
        </div>
      </div>
    </section>
  );
}
