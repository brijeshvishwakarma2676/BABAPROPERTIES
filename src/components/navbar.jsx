import React, { useState, useEffect } from 'react';
import { NavLink, useRouter } from './shared';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { page } = useRouter();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [page]);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const links = [
    ['/', 'Home', true],
    ['/about', 'About', false],
    ['/services', 'Services', false],
    ['/process', 'Process', false],
    ['/projects', 'Projects', false],
    ['/testimonials', 'Testimonials', false],
    ['/faq', 'FAQ', false],
    ['/contact', 'Contact', false],
  ];

  const bar = (scrolled || open)
    ? 'border-b border-[rgba(200,155,60,0.14)] shadow-[0_4px_40px_rgba(0,0,0,0.7)]'
    : 'backdrop-blur-md';

  const barStyle = (scrolled || open) ? { background: 'var(--nav-bg-solid)' } : { background: 'var(--nav-bg)' };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bar}`} style={barStyle}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <a href="#/" className="flex items-center group no-underline relative z-[60]">
          <Logo layout="horizontal" className="group-hover:opacity-90 transition-opacity" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {links.map(([path, label, end]) => (
            <NavLink
              key={path} to={path} end={end}
              className={({ isActive }) =>
                'font-inter text-[10px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 relative pb-0.5 ' +
                (isActive
                  ? 'text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold'
                  : 'text-white/75 hover:text-gold')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-black transition-colors" title="Toggle Theme">
            {theme === 'light' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
          <a href="#/contact" className="btn-gold py-2.5 px-5 text-[10px]">Free Consultation</a>
        </div>

        {/* Mobile Toggle & Hamburger */}
        <div className="xl:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 border border-gold/30 rounded-full text-gold transition-colors" title="Toggle Theme">
            {theme === 'light' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
          
          <button
            className="flex flex-col items-center justify-center gap-[5px] w-8 h-8"
            onClick={() => setOpen(o => !o)} aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-white/80 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-5 h-px bg-white/80 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-white/80 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-[rgba(200,155,60,0.1)] px-5 pt-2 pb-5" style={{ background: 'var(--nav-bg-solid)' }}>
          {links.map(([path, label, end]) => (
            <NavLink
              key={path} to={path} end={end}
              className={({ isActive }) =>
                'block py-3.5 font-inter text-[11px] font-bold tracking-[0.2em] uppercase border-b border-white/5 ' +
                (isActive ? 'text-gold' : 'text-white/75')
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-4 mt-4 flex flex-col gap-4">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-white/75 hover:text-gold text-[11px] font-inter font-bold tracking-[0.15em] uppercase">
              {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            </button>
            <a href="#/contact" className="btn-gold w-full justify-center text-[10px] py-3 block text-center">
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
