import React from 'react';
import { FadeUp as Fu3, SectionTitle as St3, PageHero as Ph3, GoldRule as Gr3, Link as Lk3, PageCTA as Cta3 } from '../components/shared';

const SVC_DATA = [
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
    t: 'Redevelopment Planning',
    d: 'Complete feasibility studies covering TDR potential, FSI utilization, corpus projections, area calculations, and total member benefit mapping.',
    pts: ['TDR / FSI Analysis','Corpus Calculation','Area Benefit Study','Market Rate Benchmarking'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
    t: 'PMC Services',
    d: 'End-to-end Project Management Consultancy — from first builder meeting to final OC receipt and member possession handover.',
    pts: ['Builder Coordination','Timeline Management','Quality Monitoring','Member Communication'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    t: 'Agreement Guidance',
    d: 'Expert review and negotiation of the Development Agreement (DA), ensuring all clauses protect your society\'s interests completely.',
    pts: ['DA Clause Review','Term Negotiation','Corpus Protection','Delivery Guarantee Clauses'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    t: 'Society Representation',
    d: 'Strong, member-first representation in all builder negotiations, committee meetings, government offices, and legal proceedings.',
    pts: ['Builder Negotiation','Committee Support','Government Liaison','Member Advocacy'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    t: 'Risk Management',
    d: 'Proactive identification and mitigation of financial, legal, and construction risks before they become costly problems for your society.',
    pts: ['Financial Risk Audit','Builder Default Prevention','Legal Risk Review','Construction Quality Control'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    t: 'Legal & Technical Support',
    d: 'Complete due diligence including title search, RERA compliance verification, structural surveys, and all legal documentation.',
    pts: ['Title Search','RERA Compliance','Structural Survey','NOC & Approvals'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    t: 'Builder Evaluation',
    d: 'Rigorous evaluation of shortlisted builders — financial health, past project delivery, legal standing, RERA ratings, and member feedback.',
    pts: ['Financial Background Check','RERA Rating Verification','Site Visit & Assessment','Reference Verification'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    t: 'Project Monitoring',
    d: 'Ongoing construction monitoring to ensure quality standards, timelines, and agreed specifications are met at every stage of the build.',
    pts: ['Stage-wise Inspections','Quality Audits','Timeline Tracking','Defect Resolution'],
  },
];

const ServicesPage = () => (
  <div className="page-enter">
    <Ph3 label="Our Services" title="Complete Redevelopment Support"
      subtitle="Eight specialized services — each designed to protect your society's interests and maximize member benefits." />

    {/* Services Grid */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {SVC_DATA.map((s,i) => (
            <Fu3 key={i} delay={i*60}>
              <div className="premium-card p-8 group flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[rgba(200,155,60,0.22)] flex items-center justify-center text-gold group-hover:bg-[rgba(200,155,60,0.08)] transition-colors duration-300">
                    {s.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-base font-semibold text-white mb-3">{s.t}</h3>
                  <p className="font-inter text-sm text-white/72 leading-relaxed mb-4">{s.d}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.pts.map(p => (
                      <span key={p} className="font-inter text-[10px] text-white/70 border border-[rgba(200,155,60,0.15)] px-3 py-1 tracking-wide">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Fu3>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Full-Service */}
    <section className="section-pad" style={{ background:'#0D0A07' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St3 label="Our Approach" title="Why Full-Service Consultancy Matters"
          subtitle="Partial guidance leads to partial outcomes. Our end-to-end approach ensures nothing falls through the cracks." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { n:'01', t:'Before Redevelopment', d:'Feasibility, builder evaluation, agreement review, legal due diligence — before you sign anything.' },
            { n:'02', t:'During Redevelopment', d:'Timeline monitoring, quality inspections, builder coordination, member communication — throughout construction.' },
            { n:'03', t:'At Possession', d:'Defect inspection, OC verification, flat allocation oversight, final handover — until every member is settled.' },
          ].map((c,i) => (
            <Fu3 key={i} delay={i*90}>
              <div className="premium-card p-8 h-full text-center">
                <div className="font-cinzel text-5xl font-black mb-4" style={{ color:'rgba(200,155,60,0.1)' }}>{c.n}</div>
                <h3 className="font-cinzel text-base font-semibold text-white mb-3">{c.t}</h3>
                <p className="font-inter text-sm text-white/70 leading-relaxed">{c.d}</p>
              </div>
            </Fu3>
          ))}
        </div>
      </div>
    </section>

    <Cta3 headline="Get Expert Guidance for Your Society"
      sub="Every service is customized to your society's specific needs, scale, and goals." />
  </div>
);

export default ServicesPage;
