import React from 'react';

const Logo = ({ className = '', large = false, layout = 'vertical' }) => {
  const scale = large ? 'scale-125 origin-center' : 'scale-100 origin-left';
  
  const Graphic = () => (
    <div className="flex items-center justify-center gap-2">
      <div className="relative flex items-center justify-center">
        <span className="font-cinzel font-black text-gold text-4xl leading-none">B</span>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px] z-10 top-[2px]">
          <div className="w-6 h-[3px] bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)] opacity-90"></div>
          <div className="w-6 h-[3px] bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)] opacity-90 relative flex items-center justify-center">
             <div className="absolute w-[6px] h-[6px] bg-[#D32F2F] rounded-full z-20 shadow-[0_0_4px_rgba(211,47,47,0.8)]"></div>
          </div>
          <div className="w-6 h-[3px] bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)] opacity-90"></div>
        </div>
      </div>
      <div className="text-gold w-6 h-10">
        <svg viewBox="0 0 24 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_4px_rgba(200,155,60,0.4)]">
          <rect x="11.5" y="10" width="1" height="30" />
          <path d="M11 2 C11 2, 12 0, 13 2 L13 14 L11 14 Z" />
          <path d="M5 6 C5 6, 4 4, 6 4 C7 4, 9 10, 9 13 L8 14 C6 10, 5 8, 5 6 Z" />
          <path d="M19 6 C19 6, 20 4, 18 4 C17 4, 15 10, 15 13 L16 14 C18 10, 19 8, 19 6 Z" />
          <path d="M7 13 Q12 16 17 13 L17 14.5 Q12 17.5 7 14.5 Z" />
          <path d="M7 20 L17 20 L13 24 L17 28 L7 28 L11 24 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M7 20 Q5 24 7 28 M17 20 Q19 24 17 28" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="6.5" cy="24" r="1" />
          <circle cx="17.5" cy="24" r="1" />
        </svg>
      </div>
    </div>
  );

  const Text = () => (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-4 bg-gradient-to-r from-transparent to-gold/60"></div>
        <div className="font-cinzel font-black text-gold tracking-[0.35em] text-xl leading-none">BABA</div>
        <div className="h-[1px] w-4 bg-gradient-to-l from-transparent to-gold/60"></div>
      </div>
      <div className="font-cinzel tracking-[0.55em] text-white/90 text-[9px] leading-none mt-2 relative">
        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-white/40"></span>
        PROPERTIES
        <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-white/40"></span>
      </div>
      <div className="font-inter font-medium tracking-[0.15em] text-gold/80 text-[6px] uppercase mt-2">
        Redevelopment & PMC Services
      </div>
    </div>
  );

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-4 ${className} ${scale}`}>
        <div className="scale-75 origin-left"><Graphic /></div>
        <div className="flex flex-col items-start -ml-2">
          <div className="font-cinzel font-black text-gold tracking-[0.35em] text-lg leading-none">BABA</div>
          <div className="font-cinzel tracking-[0.55em] text-white/90 text-[8px] leading-none mt-1">PROPERTIES</div>
          <div className="font-inter font-medium tracking-[0.15em] text-gold/80 text-[5px] uppercase mt-1">
            Redevelopment & PMC Services
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className} ${scale}`}>
      <div className="mb-2"><Graphic /></div>
      <Text />
    </div>
  );
};

export default Logo;
