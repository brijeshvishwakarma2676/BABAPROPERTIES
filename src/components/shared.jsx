import React, { useState, useEffect, useRef, useContext, createContext, Children } from 'react';

// ══ Custom Hash Router ═══════════════════════════════════════════════════════
const RouterCtx = createContext({ page: '/', navigate: () => {} });

export const HashRouter = ({ children }) => {
  const get = () => { const h = window.location.hash.slice(1); return h || '/'; };
  const [page, setPage] = useState(get);
  useEffect(() => {
    const fn = () => { setPage(get()); window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);
  return (
    <RouterCtx.Provider value={{ page, navigate: p => { window.location.hash = p; } }}>
      {children}
    </RouterCtx.Provider>
  );
};

export const useRouter = () => useContext(RouterCtx);

export const Routes = ({ children }) => {
  const { page } = useRouter();
  const arr = Children.toArray(children);
  const match = arr.find(r => {
    const p = r.props.path;
    if (!p) return false;
    if (p === '/') return page === '/' || page === '';
    return page === p || page.startsWith(p + '/');
  });
  return match ? match.props.element : null;
};

export const Route = () => null;

export const Link = ({ to, children, className, style, onClick }) => (
  <a href={`#${to}`} className={className} style={style} onClick={onClick}>{children}</a>
);

export const NavLink = ({ to, children, className, end }) => {
  const { page } = useRouter();
  const active = end ? (page === to || (to === '/' && page === '')) : page === to;
  const cls = typeof className === 'function' ? className({ isActive: active }) : className;
  return <a href={`#${to}`} className={cls}>{children}</a>;
};

// ══ Scroll-reveal FadeUp ══════════════════════════════════════════════════════
export const FadeUp = ({ children, delay = 0, className = '', style = {} }) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : 'translateY(22px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
};

// ══ Animated Counter ══════════════════════════════════════════════════════════
export const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        const steps = Math.ceil(duration / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur = Math.min(cur + target / steps, target);
          setN(Math.floor(cur));
          if (cur >= target) clearInterval(t);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
};

// ══ Shared UI Components ══════════════════════════════════════════════════════
export const GoldRule = ({ center = false, className = '' }) => (
  <div className={className} style={{
    width: 48, height: 1,
    background: center ? 'linear-gradient(90deg,transparent,#C89B3C,transparent)' : '#C89B3C',
    margin: center ? '0 auto' : undefined,
  }} />
);

export const SectionTitle = ({ label, title, subtitle, center = true }) => (
  <FadeUp className={`mb-14 ${center ? 'text-center' : ''}`}>
    {label && <p className="section-label mb-4">{label}</p>}
    <h2 className="font-cinzel text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-5"
      style={{ textWrap: 'pretty' }}>{title}</h2>
    <GoldRule center={center} />
    {subtitle && (
      <p className={`font-inter text-base text-white/70 leading-relaxed mt-5 max-w-2xl ${center ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </FadeUp>
);

export const PageHero = ({ label, title, subtitle }) => (
  <section className="relative pt-44 pb-24 overflow-hidden hero-pattern">
    <div className="gold-ray" />
    <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#0B0B0B 0%,#12090420%,#0D0A07 60%,#0B0B0B 100%)' }} />
    <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10 text-center">
      <FadeUp>
        <p className="section-label mb-5">{label}</p>
        <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">{title}</h1>
        <GoldRule center />
        {subtitle && <p className="font-inter text-lg text-white/75 mt-5 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      </FadeUp>
    </div>
  </section>
);

export const PageCTA = ({ headline = 'Ready to Start Your Redevelopment Journey?', sub = 'Book a free consultation with our expert team today.' }) => {
  const { page } = useRouter();
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hero-pattern" style={{ background: '#0D0A07' }} />
      <div className="gold-ray" />
      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
        <FadeUp>
          <p className="section-label mb-5">Get In Touch</p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">{headline}</h2>
          <GoldRule center />
          <p className="font-inter text-base text-white/75 my-8 leading-relaxed">{sub}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
            <a href="tel:+919769423820" className="btn-ghost">+91 97694 23820</a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
