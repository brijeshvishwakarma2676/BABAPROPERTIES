import React from 'react';
import { FadeUp as Fu3, SectionTitle as St3, PageHero as Ph3, Link as Lk3, PageCTA as Cta3 } from '../components/shared';

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
];

const ADVISORY_DATA = [
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    t: 'Liaisoning',
    d: 'Professional coordination with government authorities (BMC, MBMC, etc.) for all technical approvals, NOCs, and regulatory compliance.',
    pts: ['Authority Approvals','NOC Coordination','Property Tax Support','Legal Compliance'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    t: 'J.V. Proposals',
    d: 'Strategic Joint Venture facilitation between land owners and premium developers to maximize asset value and minimize risk.',
    pts: ['Developer Matching','Profit Sharing Models','Agreement Drafting','Project Feasibility'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M16 8l-8 8"/><path d="M8 8l8 8"/></svg>,
    t: 'Outright Deals',
    d: 'End-to-end support for outright purchase or sale of plots, land parcels, and standalone buildings with clean title verification.',
    pts: ['Title Search','Valuation Analysis','Transaction Support','Registration Assistance'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    t: 'Pre-Leased Property',
    d: 'Exclusive investment opportunities in commercial and retail properties with active, high-yield lease agreements and stable rental income.',
    pts: ['Yield Analysis','Tenant Verification','Lease Term Audit','Rental Income Security'],
  },
  {
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>,
    t: 'New Inventory (Flats & Commercial)',
    d: 'Direct access to newly launched residential and commercial inventory across Mumbai/MMR with exclusive pricing and verified RERA status.',
    pts: ['New Launch Access','Investor Pricing','Commercial Spaces','Premium Apartments'],
  },
];

const ServicesPage = () => (
  <div className="page-enter">
    <Ph3 label="Our Expertise" title="Services"
      subtitle="Complete real estate solutions — from redevelopment planning to high-value property investments." />

    {/* Section 1: Redevelopment */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St3 label="Primary Verticals" title="Redevelopment & PMC Consultancy"
          subtitle="Specialized services designed to protect housing society interests and maximize member benefits." />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {SVC_DATA.map((s,i) => (
            <Fu3 key={i} delay={i*60}>
              <div className="premium-card p-8 group flex gap-6 h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[rgba(200,155,60,0.22)] rounded-full flex items-center justify-center text-gold group-hover:bg-[rgba(200,155,60,0.08)] transition-colors duration-300">
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

    <div className="section-divider lg:hidden" />

    {/* Section 2: Property Advisory */}
    <section className="section-pad" style={{ background:'var(--bg-section)' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St3 label="Investment & Advisory" title="Real Estate Advisory & Solutions"
          subtitle="Navigating complex property transactions with transparency, expertise, and verified market intelligence." />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ADVISORY_DATA.map((s,i) => (
            <Fu3 key={i} delay={i*60}>
              <div className="premium-card p-8 group flex flex-col h-full">
                <div className="w-12 h-12 border border-[rgba(200,155,60,0.22)] rounded-full flex items-center justify-center text-gold group-hover:bg-[rgba(200,155,60,0.08)] transition-colors duration-300 mb-6">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-base font-semibold text-white mb-3">{s.t}</h3>
                  <p className="font-inter text-sm text-white/72 leading-relaxed mb-6">{s.d}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
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
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St3 label="Our Approach" title="The BABA Properties Advantage"
          subtitle="Partial guidance leads to partial outcomes. Our end-to-end approach ensures nothing falls through the cracks." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { n:'01', t:'Expert Planning', d:'Feasibility, builder evaluation, agreement review, legal due diligence — before you sign anything.' },
            { n:'02', t:'Execution Oversight', d:'Timeline monitoring, quality inspections, builder coordination, member communication — throughout construction.' },
            { n:'03', t:'Verified Inventory', d:'Only RERA registered projects and clear-title deals are recommended to our investors.' },
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

    <section className="pb-16 mt-[-40px]">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10 text-center">
        <Fu3>
          <p className="font-inter text-xs text-white/55 max-w-xl mx-auto leading-relaxed">
            Service outcomes and project benefits are indicative. Actual results vary by society size, location, 
            and specific developer terms. BABA Properties acts as a professional consultancy to secure 
            the best possible terms for your society.
          </p>
        </Fu3>
      </div>
    </section>

    <Cta3 headline="Get Expert Property Solutions"
      sub="Whether it's redevelopment or your next big investment, we provide the clarity you need." />
  </div>
);

export default ServicesPage;
