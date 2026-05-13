import React from 'react';
import { FadeUp as Fu4, SectionTitle as St4, PageHero as Ph4, GoldRule as Gr4, Link as Lk4, PageCTA as Cta4 } from '../components/shared';

const PROCESS_STEPS = [
  { n:'01', t:'Initial Society Consultation', d:'We begin with a comprehensive meeting with your committee to understand the society\'s needs, member expectations, and redevelopment aspirations. This sets the foundation for everything that follows.', dur:'1–2 Weeks' },
  { n:'02', t:'Feasibility Study', d:'Technical and financial feasibility analysis: plot size, FSI potential, TDR calculation, projected corpus, area increase per flat, and overall project viability assessment.', dur:'2–4 Weeks' },
  { n:'03', t:'Builder Shortlisting', d:'We identify and shortlist reputed builders based on financial health, RERA ratings, past project delivery, and suitability for your society\'s scale and location.', dur:'3–4 Weeks' },
  { n:'04', t:'Technical Evaluation', d:'Detailed structural survey of the existing building, soil testing, technical drawings review, and construction quality benchmarking against the developer\'s proposals.', dur:'2–3 Weeks' },
  { n:'05', t:'Agreement Drafting & Review', d:'Expert review of the Development Agreement — every clause scrutinized for corpus protection, transit rent security, possession timelines, penalty clauses, and member safeguards.', dur:'3–5 Weeks' },
  { n:'06', t:'Legal Verification', d:'Comprehensive legal due diligence: title search, encumbrance check, RERA verification, society NOCs, government approvals, and all statutory compliance review.', dur:'2–4 Weeks' },
  { n:'07', t:'Society Coordination & Consent', d:'Managing member meetings, addressing individual concerns, obtaining the required 51%+ special resolution, and ensuring full society consensus before finalizing the builder.', dur:'4–8 Weeks' },
  { n:'08', t:'Construction Monitoring', d:'Stage-wise inspections, quality audits, timeline tracking, resolving builder-society disputes, and ensuring agreed specifications are maintained throughout the build.', dur:'Ongoing' },
  { n:'09', t:'Project Delivery & Possession', d:'Final defect inspection, OC documentation verification, flat allocation oversight, member-wise possession scheduling, and complete handover support until every family is settled.', dur:'Final Phase' },
];

const ProcessPage = () => (
  <div className="page-enter">
    <Ph4 label="Redevelopment Process" title="9 Steps to Successful Redevelopment"
      subtitle="A transparent, proven methodology designed to protect your society's interests at every stage — from consultation to possession." />

    {/* Timeline */}
    <section className="section-pad">
      <div className="max-w-[900px] mx-auto px-5 lg:px-10">
        {PROCESS_STEPS.map((s,i) => (
          <Fu4 key={i} delay={50}>
            <div className="flex gap-5 md:gap-8 mb-8">
              {/* Number col */}
              <div className="relative flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{ background:'#0D0A07', boxShadow:'0 0 16px rgba(200,155,60,0.12)' }}>
                  <span className="font-cinzel text-sm font-bold text-gold">{s.n}</span>
                </div>
                {i < PROCESS_STEPS.length-1 && (
                  <div className="absolute top-12 bottom-[-32px] left-1/2 -translate-x-1/2 w-[1px]"
                    style={{ background:'linear-gradient(180deg,rgba(200,155,60,0.35),rgba(200,155,60,0.06))' }} />
                )}
              </div>

              {/* Card */}
              <div className="premium-card p-6 flex-1 mb-2 group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="font-cinzel text-base font-semibold text-white leading-snug pr-4">{s.t}</h3>
                  <span className="font-inter text-[10px] text-gold/75 tracking-wider uppercase inline-block whitespace-nowrap border border-gold/18 px-3 py-1 self-start sm:self-auto flex-shrink-0">
                    {s.dur}
                  </span>
                </div>
                <p className="font-inter text-sm text-white/72 leading-relaxed">{s.d}</p>
              </div>
            </div>
          </Fu4>
        ))}
      </div>
    </section>

    {/* Key Principles */}
    <section className="section-pad" style={{ background:'#0D0A07' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St4 label="Our Principles" title="How We Protect Your Society" center />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t:'Transparency First', d:'Every decision is communicated clearly. No hidden processes, no surprises for members.' },
            { t:'Member-Only Mandate', d:'We work exclusively for the society — never for the builder. Zero conflict of interest.' },
            { t:'Legal Safeguards', d:'Every document, every clause, every agreement is reviewed for maximum member protection.' },
            { t:'Ongoing Support', d:'We stay engaged until every member receives possession. Our job ends at handover, not signing.' },
          ].map((p,i) => (
            <Fu4 key={i} delay={i*80}>
              <div className="premium-card p-7 h-full text-center">
                <Gr4 center className="mb-6" />
                <h3 className="font-cinzel text-sm font-semibold text-white mb-3">{p.t}</h3>
                <p className="font-inter text-sm text-white/70 leading-relaxed">{p.d}</p>
              </div>
            </Fu4>
          ))}
        </div>
      </div>
    </section>

    <Cta4 headline="Start Your Society's Redevelopment Journey"
      sub="Our 9-step process has guided 50+ societies to successful outcomes. Yours can be next." />
  </div>
);

export default ProcessPage;
