import React from 'react';
import { Link } from './shared';

const WhatsAppBtn = () => (
  <a
    href="https://wa.me/919769423820?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation."
    target="_blank" rel="noopener noreferrer"
    title="Chat on WhatsApp"
    className="animate-glow floating-wa-btn"
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

const Footer = () => {
  const yr = new Date().getFullYear();
  const svcs = ['Redevelopment Planning','PMC Services','Agreement Guidance','Society Representation','Risk Management','Legal & Technical Support','Builder Evaluation','Project Monitoring'];
  const pages = [['/','Home'],['/about','About Us'],['/services','Services'],['/process','Redevelopment Process'],['/projects','Projects'],['/testimonials','Testimonials'],['/faq','FAQs'],['/contact','Contact']];

  return (
    <>
      <WhatsAppBtn />
      <footer style={{ background:'#07060400', borderTop:'1px solid rgba(200,155,60,0.14)' }}>
        <div style={{ background:'#080603' }}>
          <div className="max-w-[1380px] mx-auto px-5 lg:px-10 pt-20 pb-8 footer-bottom-pad">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">

              {/* Brand */}
              <div>
                <div className="mb-7">
                  <div className="font-cinzel font-black text-2xl tracking-[0.38em] text-gold leading-none">BABA</div>
                  <div className="font-cinzel text-[9px] tracking-[0.6em] text-white/65 mt-0.5 mb-1">PROPERTIES</div>
                  <div className="section-label text-[8px] tracking-[0.3em]" style={{ color:'rgba(200,155,60,0.5)' }}>Redevelopment & PMC Services</div>
                </div>
                <p className="font-inter text-sm text-white/68 leading-relaxed mb-8">
                  Trusted redevelopment consultancy for housing societies across the Mumbai Metropolitan Region.
                </p>
                <div className="flex gap-3">
                  {[['FB','https://facebook.com'],['IG','https://instagram.com'],['YT','https://youtube.com'],['LN','https://linkedin.com']].map(([s,h]) => (
                    <a key={s} href={h} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 border border-white/14 flex items-center justify-center font-cinzel text-[9px] text-white/60 hover:border-gold hover:text-gold transition-all duration-300">
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="section-label mb-6">Our Services</h4>
                <ul className="space-y-3">
                  {svcs.map(s => (
                    <li key={s}>
                      <Link to="/services" className="font-inter text-sm text-white/68 hover:text-gold transition-colors duration-300 flex items-center gap-2 no-underline">
                        <span style={{ width:4, height:4, background:'rgba(200,155,60,0.5)', flexShrink:0, display:'inline-block' }} />
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="section-label mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {pages.map(([p,l]) => (
                    <li key={p}>
                      <Link to={p} className="font-inter text-sm text-white/68 hover:text-gold transition-colors duration-300 flex items-center gap-2 no-underline">
                        <span style={{ width:4, height:4, background:'rgba(200,155,60,0.5)', flexShrink:0, display:'inline-block' }} />
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="section-label mb-6">Contact Us</h4>
                <div className="space-y-5">
                  <div>
                    <p className="font-inter text-[10px] text-white/52 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+919769423820" className="font-inter font-semibold text-white/90 hover:text-gold transition-colors no-underline">+91 97694 23820</a>
                  </div>
                  <div>
                    <p className="font-inter text-[10px] text-white/52 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:babaproperties188@gmail.com" className="font-inter text-sm text-white/90 hover:text-gold transition-colors no-underline break-all">babaproperties188@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-inter text-[10px] text-white/52 uppercase tracking-widest mb-1">Service Areas</p>
                    <p className="font-inter text-sm text-white/72 leading-relaxed">Mira Bhayander · Mumbai<br />Thane · Palghar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="font-inter text-xs text-white/52">© {yr} BABA Properties. All Rights Reserved.</p>
              <p className="font-inter text-xs text-white/52 flex items-center gap-1">
                <span className="opacity-60">Crafted by</span>
                <a href="https://vernoratech.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 no-underline transition-opacity font-bold ml-1">
                  <span style={{ color: '#2563EB' }}>Vernora</span>
                  <span style={{ color: '#0EA5E9' }}>Tech</span>
                </a>
              </p>
              <p className="font-inter text-xs text-white/52 tracking-widest uppercase">Complete Support · Planning to Execution</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
