import React from 'react';
import { FadeUp as FuA, SectionTitle as StA, PageHero as PhA, GoldRule as GrA, PageCTA as CtaA } from '../components/shared';

const ADVISORY_SERVICES = [
  {
    id: 'liaisoning',
    t: 'Liaisoning Services',
    d: 'Professional coordination with government authorities (BMC, MBMC, TMC, Collector Office) for technical approvals, NOCs, and regulatory compliance. We bridge the gap between your property and government regulations.',
    pts: ['BMC / MBMC / TMC Approvals','NOC Coordination','Property Tax Assessment','Development Permission','Completion Certificates'],
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    img: '/uploads/liaisoning.png'
  },
  {
    id: 'jv-proposals',
    t: 'J.V. Proposals',
    d: 'Facilitating strategic Joint Ventures between land owners and premium developers. We ensure maximum asset value realization with transparent profit-sharing models and iron-clad legal agreements.',
    pts: ['Developer Shortlisting','Profit Sharing Strategy','Drafting JV Agreements','Project Feasibility Analysis','Risk Mitigation'],
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    img: '/uploads/jv.png'
  },
  {
    id: 'outright-deals',
    t: 'Outright Deals',
    d: 'Comprehensive support for outright purchase or sale of plots, land parcels, standalone buildings, and bungalows. We handle everything from title verification to final registration.',
    pts: ['Title Search & Verification','Market Valuation','Buyer/Seller Matching','Transaction Management','Registration Support'],
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M16 8l-8 8"/><path d="M8 8l8 8"/></svg>,
    img: '/uploads/outright.png'
  },
  {
    id: 'pre-leased',
    t: 'Pre-Leased Property',
    d: 'Stable, long-term investment opportunities in commercial and retail properties with existing high-yield lease agreements. Perfect for investors seeking immediate and secure rental income.',
    pts: ['Rental Yield Analysis','Tenant Due Diligence','Lease Audit','High-Traffic Locations','Asset Appreciation Potential'],
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    img: '/uploads/preleased.png'
  },
  {
    id: 'new-inventory',
    t: 'New Inventory (Flats & Commercial)',
    d: 'Exclusive access to newly launched residential and commercial inventory across Mumbai/MMR. We represent premium RERA-registered projects with developer-direct pricing.',
    pts: ['Premium Residential Flats','Commercial Office Spaces','RERA Verified Projects','Pre-Launch Offers','Investment Advisory'],
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>,
    img: '/uploads/inventory.png'
  }
];

const AdvisoryPage = () => (
  <div className="page-enter">
    <PhA label="Expert Solutions" title="Property Advisory" 
      subtitle="Navigating complex real estate transactions with transparency, verified market data, and expert legal oversight." />

    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="space-y-32 lg:space-y-48">
          {ADVISORY_SERVICES.map((s, i) => (
            <React.Fragment key={s.id}>
              <FuA delay={i * 50}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center text-gold bg-gold/5 mb-10 group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>
                  <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">{s.t}</h2>
                  <GrA className="mb-10" />
                  <p className="font-inter text-base text-white/72 leading-relaxed mb-10 italic border-l-2 border-gold/20 pl-6">
                    {s.d}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 bg-white/5 p-8 rounded-sm border border-white/5">
                    {s.pts.map(p => (
                      <div key={p} className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover/item:scale-150 transition-transform" />
                        <span className="font-inter text-sm text-white/85 group-hover/item:text-gold transition-colors">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image / Visual */}
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="premium-card p-2 group overflow-hidden shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                      <img 
                        src={s.img} 
                        alt={s.t}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 hidden flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-black/40 to-black/80">
                        <div className="absolute inset-0 hero-pattern opacity-10" />
                        <div className="font-cinzel text-6xl font-black text-white/5 mb-4 uppercase tracking-[0.5em] select-none">
                          {s.id.replace('-', ' ')}
                        </div>
                        <p className="font-inter text-[10px] text-gold/60 uppercase tracking-[0.4em] font-bold">BABA Properties Advisory</p>
                        <div className="w-12 h-[1px] bg-gold/30 mt-6" />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" />
                    </div>
                  </div>
                  
                  {/* Floating Stat or Tag */}
                  <div className="absolute -bottom-6 -left-6 glass-card px-6 py-4 border border-gold/20 shadow-xl hidden md:block">
                    <p className="font-cinzel text-gold text-xs tracking-widest uppercase mb-1">Expert Oversight</p>
                    <p className="font-inter text-white/80 text-[10px]">Professional Transaction Management</p>
                  </div>
                </div>
              </div>
            </FuA>
            {i < ADVISORY_SERVICES.length - 1 && (
              <div className="section-divider lg:hidden" />
            )}
          </React.Fragment>
        ))}
        </div>
      </div>
    </section>

    {/* Investment Philosophy */}
    <section className="section-pad" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <StA label="Our Values" title="The Advisory Standard" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'Verified Titles', d: 'Every outright deal or investment opportunity undergoes a rigorous 30-year title search before we recommend it.' },
            { t: 'Market Intelligence', d: 'We provide real-time transaction data and market trends to ensure you buy or sell at the right price.' },
            { t: 'Transparent Deals', d: 'Zero hidden commissions. Every transaction is documented and explained to all stakeholders clearly.' }
          ].map((c, i) => (
            <FuA key={i} delay={i * 90}>
              <div className="premium-card p-10 text-center h-full group hover:bg-gold/[0.02]">
                <div className="w-12 h-12 border border-gold/22 flex items-center justify-center text-gold mx-auto mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-white mb-4 tracking-wide">{c.t}</h3>
                <GrA center className="mb-6 opacity-40" />
                <p className="font-inter text-sm text-white/70 leading-relaxed">{c.d}</p>
              </div>
            </FuA>
          ))}
        </div>
      </div>
    </section>

    <CtaA headline="Looking for Exclusive Property Opportunities?" 
      sub="Connect with our advisory team to access off-market deals and high-yield investments." />
  </div>
);

export default AdvisoryPage;
