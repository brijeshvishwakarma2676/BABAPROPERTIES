import React from 'react';
import { Link } from './shared';
import Logo from './Logo';

const MobileCTA = () => (
  <div className="mobile-cta-bar">
    <Link
      to="/contact"
      className="btn-gold flex-1 text-center text-[10px] py-3 justify-center block no-underline"
      style={{ height: '42px', display: 'flex', alignItems: 'center' }}
    >
      Consult Now
    </Link>
    <a
      href="https://wa.me/919769423830?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 text-[#25D366] text-[10px] font-bold tracking-widest uppercase border border-[#25D366] no-underline"
      style={{ height: '42px' }}
    >
      WhatsApp
    </a>
  </div>
);

const Footer = () => {
  const yr = new Date().getFullYear();
  const svcs = ['Redevelopment & PMC','Liaisoning','J.V. Proposals','Outright Deals','Pre-Leased Property','New Inventory','Agreement Guidance','Legal Support'];
  const pages = [['/','Home'],['/about','About Us'],['/services','Services'],['/advisory','Property Advisory'],['/process','Redevelopment Process'],['/projects','Projects'],['/testimonials','Testimonials'],['/faq','FAQs'],['/contact','Contact']];

  return (
    <>
      <MobileCTA />
      <footer style={{ background:'#07060400', borderTop:'1px solid rgba(200,155,60,0.14)' }}>
        <div style={{ background:'var(--bg-body)' }}>
          <div className="max-w-[1380px] mx-auto px-5 lg:px-10 pt-20 pb-8 footer-bottom-pad">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 pb-16 border-b border-white/5">

              {/* Brand */}
              <div className="col-span-3 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-7 flex justify-center lg:justify-start -ml-2">
                  <Logo layout="vertical" />
                </div>
                <p className="font-inter text-sm text-white/68 leading-relaxed mb-8 max-w-sm">
                  Trusted redevelopment consultancy for housing societies across the Mumbai Metropolitan Region.
                </p>
                <div className="flex gap-3 justify-center lg:justify-start">
                  {[['FB','https://facebook.com'],['IG','https://instagram.com'],['YT','https://youtube.com'],['LN','https://linkedin.com']].map(([s,h]) => (
                    <a key={s} href={h} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 border border-white/20 flex items-center justify-center font-cinzel text-[9px] text-white/70 hover:border-gold hover:text-gold transition-all duration-300">
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="col-span-1 flex flex-col items-start text-left">
                <h4 className="section-label mb-6 text-[10px]">Services</h4>
                <ul className="space-y-3">
                  {svcs.map(s => (
                    <li key={s}>
                      <Link to="/services" className="font-inter text-[11px] text-white/68 hover:text-gold transition-colors duration-300 flex items-center gap-2 no-underline">
                        <span style={{ width:3, height:3, background:'rgba(200,155,60,0.5)', flexShrink:0, display:'inline-block' }} />
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="col-span-1 flex flex-col items-start text-left">
                <h4 className="section-label mb-6 text-[10px]">Links</h4>
                <ul className="space-y-3">
                  {pages.map(([p,l]) => (
                    <li key={p}>
                      <Link to={p} className="font-inter text-[11px] text-white/68 hover:text-gold transition-colors duration-300 flex items-center gap-2 no-underline">
                        <span style={{ width:3, height:3, background:'rgba(200,155,60,0.5)', flexShrink:0, display:'inline-block' }} />
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-1 lg:col-span-1 flex flex-col items-start text-left border-t lg:border-t-0 border-white/5 pt-0 lg:pt-0">
                <h4 className="section-label mb-6 text-[10px]">Contact</h4>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 w-full">
                  <div>
                    <p className="font-inter text-[10px] text-white/52 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+919769423830" className="font-inter font-semibold text-white/90 hover:text-gold transition-colors no-underline">+91 97694 23830</a>
                  </div>
                  <div>
                    <p className="font-inter text-[10px] text-white/52 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:babaproperties188@gmail.com" className="font-inter text-sm text-white/90 hover:text-gold transition-colors no-underline break-all">babaproperties188@gmail.com</a>
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
