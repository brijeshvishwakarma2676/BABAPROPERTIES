import React, { useState, useEffect } from 'react';
import { NavLink, useRouter } from './shared';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { page } = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [page]);

  const links = [
    ['/', 'Home', true],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/process', 'Process'],
    ['/projects', 'Projects'],
    ['/testimonials', 'Testimonials'],
    ['/faq', 'FAQ'],
    ['/contact', 'Contact'],
  ];

  const bar = (scrolled || open)
    ? 'bg-[#0A0A0A]/97 backdrop-blur-xl border-b border-[rgba(200,155,60,0.14)] shadow-[0_4px_40px_rgba(0,0,0,0.7)]'
    : 'bg-[#0A0A0A]/40 backdrop-blur-md';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bar}`}>
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
          <a href="#/contact" className="btn-gold py-2.5 px-5 text-[10px]">Free Consultation</a>
        </div>

        {/* Hamburger */}
        <button
          className="xl:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8"
          onClick={() => setOpen(o => !o)} aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-white/80 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`w-5 h-px bg-white/80 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-white/80 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0A0A0A]/98 border-t border-[rgba(200,155,60,0.1)] px-5 pt-2 pb-5">
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
          <a href="#/contact" className="btn-gold w-full mt-4 justify-center text-[10px] py-3 block text-center">
            Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
