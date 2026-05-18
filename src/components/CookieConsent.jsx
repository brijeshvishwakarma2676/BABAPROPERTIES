import React, { useState, useEffect } from 'react';
import { GoldRule } from './shared';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('baba-cookie-consent');
    if (!consent) {
      // Show popup after a short delay for smooth entrance
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const animateClose = (status) => {
    setIsExiting(true);
    // Wait for the exit animation to complete (500ms) before unmounting
    setTimeout(() => {
      localStorage.setItem('baba-cookie-consent', status);
      setVisible(false);
    }, 500);
  };

  const handleAccept = () => {
    animateClose('accepted');
  };

  const handleDecline = () => {
    animateClose('declined');
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-[999] p-6 shadow-2xl border border-gold/30"
      style={{
        background: 'var(--nav-bg-solid)',
        backdropFilter: 'blur(16px)',
        animation: isExiting 
          ? 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' 
          : 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      {/* Decorative Gold Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold"></div>

      <div className="flex flex-col gap-4">
        <div>
          <p className="font-cinzel text-xs font-bold tracking-[0.25em] text-gold uppercase mb-2">
            Cookie Consent
          </p>
          <h4 className="font-cinzel text-sm font-bold text-white tracking-[0.1em] mb-3">
            Enhancing Your Experience
          </h4>
          <GoldRule />
        </div>

        <p className="font-inter text-xs text-white/70 leading-relaxed">
          We use premium cookies to optimize our property consultancy services, analyze site traffic, and personalize your luxury property browsing experience. By continuing, you agree to our standard terms of use.
        </p>

        <div className="flex gap-3 justify-end mt-2">
          <button 
            onClick={handleDecline}
            className="btn-ghost py-2 px-5 text-[9px] font-bold tracking-widest uppercase transition-all duration-300"
            style={{ minWidth: '80px' }}
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="btn-gold py-2 px-6 text-[9px] font-bold tracking-widest uppercase bg-gold text-black hover:bg-transparent hover:text-gold transition-all duration-300 shadow-md shadow-gold/10"
            style={{ minWidth: '100px' }}
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Slide animations CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(40px);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
};

export default CookieConsent;
