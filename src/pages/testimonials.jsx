import React from 'react';
import { FadeUp as Fu6, SectionTitle as St6, PageHero as Ph6, GoldRule as Gr6, AnimatedCounter as Ac6, PageCTA as Cta6 } from '../components/shared';

const TESTIMONIALS_FULL = [
  { name:'Rajesh Sharma', role:'Chairman, Shiv Sai CHS', loc:'Mira Bhayander', text:'BABA Properties guided our 48-member society through the entire redevelopment process with extraordinary professionalism. Their expertise saved us from a predatory builder deal and ultimately secured 28% extra area plus a generous corpus for every member. I cannot recommend them highly enough.', tag:'Society Chairman' },
  { name:'Priya Mehta', role:'Secretary, Sunrise Cooperative Society', loc:'Thane (West)', text:'Their commitment to our society was truly unmatched. Virendra sir was available day and night during the critical negotiation phases. Because of their relentless guidance and legal expertise, we secured premium terms with a reputed builder. Every family in our society is grateful.', tag:'Society Secretary' },
  { name:'Vikram Patel', role:'Committee Member, Sai Heights CHS', loc:'Andheri, Mumbai', text:'Redevelopment felt impossibly complex until BABA Properties stepped in. They simplified every step, handled the legal complexity with precision, and fought for our rights at every stage. The outcome was far better than we ever expected.', tag:'Committee Member' },
  { name:'Sunita Joshi', role:'Chairman, Ganesh Kripa CHS', loc:'Borivali, Mumbai', text:'We had been stuck in redevelopment discussions for 3 years before we consulted BABA Properties. Within 8 months of engaging them, we had a signed agreement with a top developer. Their structured process and strong negotiation skills made all the difference.', tag:'Society Chairman' },
  { name:'Manoj Desai', role:'Secretary, Laxmi Niwas Society', loc:'Bhayandar East', text:'What impressed me most was their total transparency. Every step was communicated to members clearly. There were no surprises, no hidden processes. Our society members went from fearful and confused to confident and excited about redevelopment.', tag:'Society Secretary' },
  { name:'Anita Kulkarni', role:'Committee Member, Om Sai Residency', loc:'Virar, Palghar', text:'BABA Properties reviewed our proposed development agreement and found 12 problematic clauses that could have cost our society crores. Their legal expertise protected every family\'s investment. Worth every rupee of the consultancy fee — and more.', tag:'Committee Member' },
];

const TestimonialsPage = () => (
  <div className="page-enter">
    <Ph6 label="Client Experiences" title="Testimonials"
      subtitle="The trust and gratitude of thousands of families across Mumbai, Thane, MMR & Palghar is our greatest achievement." />

    {/* Trust Stats */}
    <section className="py-14 border-y border-gold/10" style={{ background:'var(--bg-section)' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:divide-x divide-gold/12">
          {[['50','+','Societies Served'],['4000','+','Families Benefited'],['100','%','Client Satisfaction'],['15','+','Years of Trust']].map(([v,s,l],i) => (
            <Fu6 key={i} delay={i*70} className="text-center lg:px-8 py-3">
              <div className="font-cinzel text-3xl font-black text-gold mb-2"><Ac6 target={parseInt(v)} suffix={s} /></div>
              <p className="font-inter text-[10px] text-white/68 uppercase tracking-wider">{l}</p>
            </Fu6>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Grid */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {TESTIMONIALS_FULL.map((t,i) => (
            <Fu6 key={i} delay={i*70}>
              <div className="glass-card p-8 border border-[rgba(200,155,60,0.1)] hover:border-[rgba(200,155,60,0.3)] transition-all duration-400 h-full flex flex-col group">
                {/* Quote mark */}
                <div className="font-cinzel text-6xl leading-none mb-4 group-hover:text-gold transition-colors duration-400"
                  style={{ color:'rgba(200,155,60,0.28)', fontWeight:900, lineHeight:0.9 }}>
                  &#8220;
                </div>
                <p className="font-inter text-sm text-white/70 leading-relaxed flex-1 mb-6 italic">{t.text}</p>
                {/* Divider */}
                <div style={{ height:1, background:'rgba(255,255,255,0.06)', marginBottom:20 }} />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-inter font-semibold text-sm text-white">{t.name}</p>
                    <p className="font-inter text-xs text-gold/80 mt-0.5">{t.role}</p>
                    <p className="font-inter text-[10px] text-white/60 mt-0.5">{t.loc}</p>
                  </div>
                  <span className="font-inter text-[9px] text-gold/70 border border-gold/18 px-2.5 py-1 whitespace-nowrap uppercase tracking-wider flex-shrink-0">
                    {t.tag}
                  </span>
                </div>
              </div>
            </Fu6>
          ))}
        </div>
      </div>
    </section>

    {/* Video Placeholder Section */}
    <section className="section-pad" style={{ background:'var(--bg-section)' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St6 label="Video Testimonials" title="Hear It From Them Directly" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { name:'Chairman speaks', loc:'Mira Bhayander CHS', dur:'3:24' },
            { name:'Society Secretary', loc:'Thane Cooperative', dur:'4:51' },
            { name:'Member Review', loc:'Andheri Housing Society', dur:'2:38' },
          ].map((v,i) => (
            <Fu6 key={i} delay={i*90}>
              <div className="premium-card overflow-hidden group cursor-pointer">
                <div className="relative flex items-center justify-center" style={{ height:180, background:'linear-gradient(135deg,#3F342E,var(--bg-section))' }}>
                  <div className="absolute inset-0 hero-pattern opacity-30" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300"
                      style={{ background:'rgba(200,155,60,0.06)' }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-gold ml-1">
                        <path d="M5 3l14 9-14 9V3z"/>
                      </svg>
                    </div>
                    <span className="font-inter text-[10px] text-white/65 tracking-widest uppercase">Watch Video</span>
                  </div>
                  <div className="absolute top-3 right-3 font-inter text-[10px] text-white/60 bg-black/50 px-2 py-0.5">{v.dur}</div>
                </div>
                <div className="p-5">
                  <p className="font-cinzel text-sm font-semibold text-white mb-1">{v.name}</p>
                  <p className="font-inter text-xs text-gold/75">{v.loc}</p>
                </div>
              </div>
            </Fu6>
          ))}
        </div>
        <Fu6 className="text-center mt-8">
          <p className="font-inter text-sm text-white/60">Video testimonials coming soon. Contact us to speak with past clients directly.</p>
        </Fu6>
      </div>
    </section>

    <Cta6 headline="Join 50+ Societies That Trust BABA Properties"
      sub="Your society's success story begins with a single conversation." />
  </div>
);

export default TestimonialsPage;
