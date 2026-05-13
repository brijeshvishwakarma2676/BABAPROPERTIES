import React from 'react';
import { FadeUp as Fu5, SectionTitle as St5, PageHero as Ph5, GoldRule as Gr5, PageCTA as Cta5 } from '../components/shared';

const PROJECTS = [
  { name:'Shiv Sai CHS', loc:'Mira Bhayander', units:48, type:'G+12 Redevelopment', benefit:'28% extra area + ₹8L corpus/flat', yr:2023, tag:'Completed' },
  { name:'Sunrise Cooperative Society', loc:'Thane (W)', units:64, type:'G+16 Redevelopment', benefit:'32% extra area + ₹10L corpus/flat', yr:2023, tag:'Completed' },
  { name:'Sai Heights CHS', loc:'Andheri, Mumbai', units:36, type:'G+10 Redevelopment', benefit:'25% extra area + ₹12L corpus/flat', yr:2022, tag:'Completed' },
  { name:'Om Sai Residency', loc:'Virar, Palghar', units:80, type:'G+18 Redevelopment', benefit:'30% extra area + ₹7L corpus/flat', yr:2024, tag:'In Progress' },
  { name:'Ganesh Kripa CHS', loc:'Borivali, Mumbai', units:52, type:'G+14 Redevelopment', benefit:'27% extra area + ₹11L corpus/flat', yr:2024, tag:'In Progress' },
  { name:'Laxmi Niwas Society', loc:'Bhayandar (E)', units:40, type:'G+11 Redevelopment', benefit:'24% extra area + ₹9L corpus/flat', yr:2022, tag:'Completed' },
];

const ProjectsPage = () => (
  <div className="page-enter">
    <Ph5 label="Projects & Case Studies" title="Society Transformations"
      subtitle="Real redevelopments, real outcomes. Every project represents families whose futures we helped secure." />

    {/* Stats */}
    <section className="py-14 border-y border-gold/10" style={{ background:'#0D0A07' }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:divide-x divide-gold/12">
          {[['50+','Societies Consulted'],['4000+','Families Benefited'],['28%','Avg. Extra Area Secured'],['₹9L+','Avg. Corpus Per Flat']].map(([v,l],i) => (
            <Fu5 key={i} delay={i*70} className="text-center lg:px-8 py-3">
              <div className="font-cinzel text-3xl font-black text-gold mb-2">{v}</div>
              <p className="font-inter text-[10px] text-white/68 uppercase tracking-wider">{l}</p>
            </Fu5>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Grid */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <St5 label="Case Studies" title="Featured Projects" center />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map((p,i) => (
            <Fu5 key={i} delay={i*60}>
              <div className="premium-card overflow-hidden group">
                {/* Visual header */}
                <div className="relative overflow-hidden" style={{ height:180, background:'linear-gradient(135deg,#1A1008,#0D0A06)' }}>
                  <div className="absolute inset-0 hero-pattern opacity-40" />
                  {/* Building graphic */}
                  <div className="absolute inset-0 flex items-end justify-center pb-0" style={{ opacity:0.12 }}>
                    <svg viewBox="0 0 200 140" width="100%">
                      <rect x="60" y="20" width="80" height="120" fill="#C89B3C"/>
                      <rect x="75" y="5" width="50" height="20" fill="#C89B3C"/>
                      <rect x="15" y="60" width="40" height="80" fill="#C89B3C"/>
                      <rect x="145" y="50" width="40" height="90" fill="#C89B3C"/>
                      {[...Array(5)].map((_,j) => (
                        <g key={j}>
                          <rect x={70} y={25+j*20} width={12} height={14} fill="#0D0A06"/>
                          <rect x={90} y={25+j*20} width={12} height={14} fill="#0D0A06"/>
                          <rect x={110} y={25+j*20} width={12} height={14} fill="#0D0A06"/>
                        </g>
                      ))}
                    </svg>
                  </div>
                  {/* Tag */}
                  <div className="absolute top-4 right-4">
                    <span className={`font-inter text-[10px] font-bold tracking-widest uppercase px-3 py-1 ${p.tag==='Completed' ? 'text-gold border border-gold/40 bg-gold/8' : 'text-green-400 border border-green-400/40 bg-green-400/8'}`}>
                      {p.tag}
                    </span>
                  </div>
                  {/* Year */}
                  <div className="absolute bottom-4 left-5">
                    <span className="font-cinzel text-xs text-white/60 tracking-widest">{p.yr}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-cinzel text-base font-semibold text-white mb-1">{p.name}</h3>
                  <p className="font-inter text-xs text-gold/85 mb-4 tracking-wide">{p.loc}</p>
                  <div className="space-y-2 mb-5">
                    {[['Type', p.type],['Units', p.units + ' Families'],['Benefit', p.benefit]].map(([k,v]) => (
                      <div key={k} className="flex justify-between items-center">
                        <span className="font-inter text-[11px] text-white/60 uppercase tracking-wider">{k}</span>
                        <span className="font-inter text-[11px] text-white/85">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ height:1, background:'rgba(200,155,60,0.12)', marginBottom:16 }} />
                  <p className="font-inter text-xs text-gold/75 tracking-wide uppercase">Society Members Benefited</p>
                </div>
              </div>
            </Fu5>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="pb-16">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10 text-center">
        <Fu5>
          <p className="font-inter text-xs text-white/55 max-w-xl mx-auto leading-relaxed">
            Project details are indicative. Actual outcomes vary by society size, location, and builder terms.
            All cases represent societies where BABA Properties provided consultancy services.
          </p>
        </Fu5>
      </div>
    </section>

    <Cta5 headline="Your Society Could Be Our Next Success Story"
      sub="Every successful project began with a single consultation. Take that step today." />
  </div>
);

export default ProjectsPage;
