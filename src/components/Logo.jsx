import React from 'react';

const Logo = ({ className = '', large = false, layout = 'vertical' }) => {
  const scale = large ? 'scale-125 origin-center' : 'scale-100 origin-left';

  const Graphic = () => (
    <div className="flex items-center justify-center">
      <img src="/uploads/ChatGPT Image May 14, 2026, 01_07_38 PM.png" alt="BABA Symbol" className="w-16 md:w-20 object-contain drop-shadow-[0_2px_8px_rgba(200,155,60,0.3)] max-w-none" />
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
        <div className="origin-left"><Graphic /></div>
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
