import React, { useState } from 'react';
import { FadeUp, SectionTitle, PageHero, GoldRule, Link } from '../components/shared';

const ServiceDetailLayout = ({ service }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  if (!service) return null;

  // Map service ID to contact select values
  const serviceMap = {
    'liaisoning': 'liaisoning',
    'jv-proposals': 'jv',
    'outright-deals': 'outright',
    'pre-leased': 'pre-leased',
    'new-inventory': 'new-inventory'
  };

  const contactValue = serviceMap[service.id] || '';

  return (
    <div className="page-enter">
      {/* Dynamic Hero Section */}
      <PageHero 
        label="Service Excellence" 
        title={service.t} 
        subtitle={service.tagline} 
      />

      {/* Split Details Section */}
      <section className="section-pad">
        <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="font-cinzel text-xs font-semibold text-gold tracking-widest uppercase">Overview</p>
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
                  Elite Property Advisory
                </h2>
                <GoldRule />
              </div>
              
              <p className="font-inter text-base text-white/72 leading-relaxed italic border-l-2 border-gold/30 pl-6 bg-white/[0.01] py-3 rounded-r">
                {service.longDesc}
              </p>

              {/* Core Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {service.features.map((feat, idx) => (
                  <FadeUp key={idx} delay={idx * 50}>
                    <div className="premium-card p-6 h-full hover:bg-gold/[0.02] border-white/5 transition-all duration-300">
                      <div className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center text-gold bg-gold/5 mb-4 font-cinzel text-xs font-bold">
                        {idx + 1}
                      </div>
                      <h3 className="font-cinzel text-sm font-bold text-white mb-2 tracking-wider">{feat.title}</h3>
                      <p className="font-inter text-xs text-white/65 leading-relaxed">{feat.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="premium-card p-2.5 group overflow-hidden shadow-2xl relative z-10">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img 
                    src={service.img} 
                    alt={service.t}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Backup Placeholder */}
                  <div className="absolute inset-0 hidden flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-black/40 to-black/80">
                    <div className="absolute inset-0 hero-pattern opacity-10" />
                    <div className="font-cinzel text-6xl font-black text-white/5 mb-4 uppercase tracking-[0.5em] select-none">
                      {service.id.replace('-', ' ')}
                    </div>
                    <p className="font-inter text-[10px] text-gold/60 uppercase tracking-[0.4em] font-bold">BABA Properties</p>
                  </div>

                  {/* Aesthetic Corner Frames */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" />
                </div>
              </div>

              {/* Decorative Glow Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Floating Trust Indicator */}
              <div className="absolute -bottom-6 right-6 glass-card px-6 py-4 border border-gold/20 shadow-xl hidden md:block">
                <p className="font-cinzel text-gold text-xs tracking-widest uppercase mb-1">RERA Audited</p>
                <p className="font-inter text-white/80 text-[10px]">100% Legally Clear Assets</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Structured Process Workflow Section */}
      <section className="section-pad" style={{ background: 'var(--bg-section)' }}>
        <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
          <SectionTitle label="Execution Roadmap" title="Operational Process" center />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
            {/* Horizontal Timeline Connector Bar on Desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2 hidden md:block pointer-events-none" />
            
            {service.process.map((step, idx) => (
              <FadeUp key={idx} delay={idx * 80}>
                <div className="premium-card p-8 text-center h-full relative z-10 group hover:border-gold/40 transition-colors">
                  <div className="w-12 h-12 border border-gold/22 rounded-full flex items-center justify-center text-gold mx-auto mb-6 bg-[var(--bg-body)] font-cinzel text-sm font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white mb-4 tracking-wide group-hover:text-gold transition-colors">{step.title}</h3>
                  <div className="w-8 h-[1px] bg-gold/30 mx-auto mb-4" />
                  <p className="font-inter text-xs text-white/65 leading-relaxed">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-pad">
          <div className="max-w-[960px] mx-auto px-5">
            <SectionTitle label="Common Queries" title="Service FAQs" center />
            
            <div className="space-y-4 mt-12">
              {service.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <FadeUp key={idx} delay={idx * 50}>
                    <div className="premium-card border-white/5 overflow-hidden transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-white/[0.01] hover:bg-white/[0.02] transition-colors"
                      >
                        <span className="font-cinzel text-sm md:text-base font-semibold text-white tracking-wide">{faq.q}</span>
                        <span className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      
                      <div 
                        className="acc-body"
                        style={{
                          maxHeight: isOpen ? '200px' : '0',
                          opacity: isOpen ? 1 : 0
                        }}
                      >
                        <div className="p-6 border-t border-white/5 bg-white/[0.005] font-inter text-sm text-white/70 leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Conversion Banner Section */}
      <section className="section-pad" style={{ background: 'var(--bg-section)', borderTop: '1px solid rgba(200,155,60,0.1)' }}>
        <div className="max-w-[1380px] mx-auto px-5 lg:px-10 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="section-label">Consultation Booking</p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
              Partner With BABA Properties Today
            </h2>
            <div className="gold-line-center" />
            <p className="font-inter text-sm text-white/70 leading-relaxed">
              Have specific questions regarding {service.t}? Connect directly with our senior partners for private, diligence-backed consultation guidance.
            </p>
            <div className="pt-4">
              <Link 
                to={`/contact#${contactValue}`} 
                className="btn-gold px-10 py-4 font-inter text-xs tracking-widest font-bold inline-flex items-center gap-3"
              >
                Book Free {service.t} Consultation
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;
