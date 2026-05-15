import React, { useState, useEffect, useId } from "react";
import { NavLink, useRouter } from "./shared";
import Logo from "./Logo";

const ClassicToggle = ({ theme, toggleTheme, showLabel = false }) => {
  const toggleId = useId();
  const clipMainId = `toggles.dev-classic-main-${toggleId}`;
  const duration = 400;

  // Map theme to the 'dark' state expected by the SVG component
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        title="Toggle theme"
        aria-label="Toggle theme"
        onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
        className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${theme === 'light' ? 'text-black hover:bg-black/5' : 'text-gold hover:bg-white/5'}`}
      >
        <svg
          width="1.4em"
          height="1.4em"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ "--toggles-dot-dev--duration": `${duration}ms` }}
          className="transition-transform duration-500"
        >
          <defs>
            <clipPath id={clipMainId}>
              <path
                d={isDark ? "M0 2h13a1 1 0 0010 10v14H0Z" : "M0 0h25a1 1 0 0010 10v14H0Z"}
                className="transition-[d,translate] duration-[var(--toggles-dot-dev--duration)]"
                style={{
                  transitionProperty: 'd, transform',
                  transitionDelay: isDark ? `${duration * 0.15}ms` : '0ms',
                }}
              />
            </clipPath>
          </defs>
          <g stroke="currentColor" strokeLinecap="round">
            <circle
              cx={12}
              cy={12}
              r={5}
              fill="currentColor"
              clipPath={`url(#${clipMainId})`}
              className="origin-center transition-transform duration-[var(--toggles-dot-dev--duration)]"
              style={{ transform: isDark ? 'scale(1.7)' : 'scale(1)' }}
            />
            
            {/* Rays */}
            {[
              "M12 1.4v2.4",
              "m20.3 3.7-2.5 2.5",
              "M22.6 12h-2.4",
              "M12 22.6v-2.4",
              "M1.4 12h2.4",
              "m20.3 20.3-2.5-2.5",
              "m3.7 20.3 2.5-2.5",
              "m3.7 3.7 2.5 2.5"
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeMiterlimit={0}
                className="[transform-box:view-box] [transform-origin:center] transition-all duration-[var(--toggles-dot-dev--duration)]"
                style={{ 
                  opacity: isDark ? 0 : 1,
                  transform: isDark ? 'scale(0)' : 'scale(1)',
                  transitionDelay: isDark ? '0ms' : `${duration * 0.15}ms`
                }}
              />
            ))}
          </g>
        </svg>
      </button>
      {showLabel && (
        <span className="font-inter text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-gold transition-colors">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { page } = useRouter();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [page]);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle Selective Background Blur and Scroll Lock
  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    const applyBlur = (el, blurVal) => {
      if (el) {
        el.style.filter = blurVal ? `blur(${blurVal}px)` : '';
        el.style.transition = 'filter 0.4s ease';
        el.style.pointerEvents = blurVal ? 'none' : '';
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      applyBlur(main, 8);
      applyBlur(footer, 8);
    } else {
      document.body.style.overflow = '';
      applyBlur(main, null);
      applyBlur(footer, null);
    }
    
    return () => {
      document.body.style.overflow = '';
      applyBlur(main, null);
      applyBlur(footer, null);
    };
  }, [open]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const links = [
    ["/", "Home", true],
    ["/about", "About", false],
    ["/services", "Services", false],
    ["/advisory", "Advisory", false],
    ["/process", "Process", false],
    ["/projects", "Projects", false],
    ["/testimonials", "Testimonials", false],
    ["/faq", "FAQ", false],
    ["/contact", "Contact", false],
  ];

  const bar = scrolled
    ? "border-b border-[rgba(200,155,60,0.14)] shadow-[0_4px_40px_rgba(0,0,0,0.7)]"
    : "backdrop-blur-md";

  const barStyle = scrolled
    ? { background: "var(--nav-bg-solid)" }
    : { background: "var(--nav-bg)" };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bar}`}
      style={barStyle}
    >
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#/"
          className="flex items-center group no-underline relative z-[60]"
        >
          <Logo
            layout="horizontal"
            className="group-hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {links.map(([path, label, end]) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                "font-inter text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 relative pb-1 " +
                (isActive
                  ? "text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold"
                  : "text-white/75 hover:text-gold")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-8">
          <ClassicToggle theme={theme} toggleTheme={toggleTheme} />
          <a href="#/contact" className="btn-gold py-2.5 px-6 text-[10px] font-bold tracking-widest">
            Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-5">
          <ClassicToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            className="flex flex-col items-center justify-center gap-[5.5px] w-8 h-8"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-[1.5px] transition-all duration-300 ${theme === "light" ? "bg-black" : "bg-white/80"}`} />
            <span className={`w-6 h-[1.5px] transition-all duration-300 ${theme === "light" ? "bg-black" : "bg-white/80"}`} />
            <span className={`w-4 h-[1.5px] self-end transition-all duration-300 ${theme === "light" ? "bg-black" : "bg-white/80"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xl z-[100] transition-opacity duration-500 xl:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div
        className={`fixed top-0 left-0 h-screen w-[290px] z-[105] transition-transform duration-500 xl:hidden transform ${open ? "translate-x-0" : "-translate-x-full shadow-none"}`}
        style={{
          background: "var(--nav-bg-solid)",
          borderRight: "1px solid rgba(200,155,60,0.12)",
          boxShadow: open ? "20px 0 50px rgba(0,0,0,0.5)" : "none"
        }}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/5">
            <Logo layout="horizontal" className="scale-75 origin-left" />
            <button 
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
            <div className="space-y-1">
              {links.map(([path, label, end]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={end}
                  className={({ isActive }) =>
                    "block py-4 font-inter text-[11px] font-bold tracking-[0.25em] uppercase border-b border-white/[0.03] transition-all " +
                    (isActive ? "text-gold pl-2" : "text-white/60 hover:text-white hover:pl-2")
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-white/10 bg-black/5">
            <div className="mb-8">
              <ClassicToggle theme={theme} toggleTheme={toggleTheme} showLabel />
            </div>

            <a
              href="#/contact"
              className="btn-gold w-full justify-center text-[11px] py-4 block text-center font-bold tracking-[0.2em] uppercase mb-4 shadow-lg shadow-gold/10"
            >
              Free Consultation
            </a>
            <div className="text-center">
              <p className="text-[9px] text-white/30 tracking-[0.3em] uppercase">Complete Property Solutions</p>
              <div className="w-8 h-[1px] bg-gold/20 mx-auto mt-3" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
