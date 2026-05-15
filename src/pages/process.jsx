import React from 'react';
import { FadeUp as Fu4, SectionTitle as St4, PageHero as Ph4, GoldRule as Gr4, Link as Lk4, PageCTA as Cta4 } from '../components/shared';

const PROCESS_STEPS = [
  { n:'01', t:'SOCIETY UNDERSTANDING', d:'We understand the society\'s requirements, expectations, concerns and redevelopment goals through detailed discussions.', dur:'Step 1' },
  { n:'02', t:'FEASIBILITY & PLANNING', d:'We analyse project feasibility, FSI potential, development options and create the right redevelopment strategy.', dur:'Step 2' },
  { n:'03', t:'BUILDER EVALUATION', d:'We evaluate and compare developers based on track record, financial strength, proposal terms and project capability.', dur:'Step 3' },
  { n:'04', t:'DOCUMENTATION & COORDINATION', d:'We handle meetings, society coordination, approvals and all necessary documentation through proper liaison support.', dur:'Step 4' },
  { n:'05', t:'PMC & EXECUTION SUPPORT', d:'We provide PMC support, monitor progress, coordinate with all stakeholders and ensure process-driven execution.', dur:'Step 5' },
  { n:'06', t:'COMPLETION & TRANSITION SUPPORT', d:'We assist societies towards smooth project completion, handover and transition to their new homes.', dur:'Step 6' },
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
                  style={{ background:'var(--bg-section)', boxShadow:'0 0 16px rgba(200,155,60,0.12)' }}>
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
    <section className="section-pad" style={{ background:'var(--bg-section)' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St4 label="Our Principles" title="How We Protect Your Society" center />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t:'TRANSPARENCY', d:'Clear processes and open communication.' },
            { t:'PROFESSIONALISM', d:'Expert guidance at every step of redevelopment.' },
            { t:'COMMITMENT', d:'Dedicated to society\'s best interests.' },
            { t:'INTEGRITY', d:'Ethical approach with complete accountability.' },
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
