import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact' | 'partner') => void;
  currentPage: 'home' | 'services' | 'about' | 'contact' | 'partner';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';

  const navLinkClass = (page: string) => `
    relative py-1.5 px-3 md:px-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500
    hover:text-[#C5A059] group flex items-center justify-center overflow-hidden rounded-full
    ${currentPage === page ? 'text-[#C5A059] scale-105' : 'text-white/70 hover:scale-105'}
  `;

  const mobileNavLinkClass = (page: string) => `
    w-full py-4 px-8 text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-300
    flex items-center justify-between border-b border-white/5
    ${currentPage === page ? 'text-[#C5A059] bg-white/5' : 'text-white/70'}
  `;

  const activeIndicatorClass = (page: string) => `
    absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#991B1B] transition-all duration-500
    ${currentPage === page ? 'opacity-100 shadow-[0_0_8px_#991B1B] scale-125' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'}
  `;

  const activeBgClass = (page: string) => `
    absolute inset-0 bg-white/5 transition-opacity duration-500 rounded-full -z-10
    ${currentPage === page ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
  `;

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleMobileNavigate = (id: any) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <div className={`
          flex items-center justify-between w-full max-w-7xl px-4 md:px-6 py-1.5 
          transition-all duration-700 rounded-full border pointer-events-auto
          ${isScrolled || !isHome || isMenuOpen
            ? 'bg-[#0B1120]/95 backdrop-blur-2xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] scale-[0.98]' 
            : 'bg-[#0F172A]/40 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
          }
        `}>
          {/* Logo Section */}
          <button 
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }} 
            className="flex items-center gap-2 md:gap-3 group shrink-0"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
               <img 
                 src="https://i.postimg.cc/Z05jsMCb/logonotstra.png" 
                 alt="Divyana Logo" 
                 className="w-full h-full object-contain block drop-shadow-lg"
                 loading="eager"
               />
            </div>
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="text-white text-[9px] md:text-[12px] font-extrabold tracking-[0.05em] uppercase transition-all duration-300 group-hover:text-[#C5A059]">
                Divyana Operations
              </span>
              <span className="text-white/40 text-[7px] md:text-[9px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-white/80">
                & Solutions
              </span>
            </div>
          </button>

          {/* Central Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={navLinkClass(item.id)}
              >
                <span className={activeBgClass(item.id)}></span>
                {item.label}
                <span className={activeIndicatorClass(item.id)}></span>
              </button>
            ))}
          </div>

          {/* Right Section: Mobile Toggle + CTA */}
          <div className="flex items-center gap-2">
            <div className="shrink-0">
              <button 
                onClick={() => {
                  onNavigate('partner');
                  setIsMenuOpen(false);
                }}
                className={`
                  px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] 
                  transition-all duration-500 shadow-xl transform hover:scale-105 active:scale-95
                  ${isScrolled || !isHome
                    ? 'bg-[#C5A059] text-white hover:bg-[#D9B775]' 
                    : 'bg-white text-[#0F172A] hover:bg-[#C5A059] hover:text-white'
                  }
                `}
              >
                Partner Up
              </button>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0B1120]/60 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`
          absolute top-24 left-4 right-4 bg-[#0B1120] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 transform
          ${isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'}
        `}>
          <div className="flex flex-col py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMobileNavigate(item.id as any)}
                className={mobileNavLinkClass(item.id)}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B] shadow-[0_0_8px_#991B1B]"></span>
                )}
              </button>
            ))}
            <div className="p-8 mt-4 text-center">
              <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold">
                Divyana Operations & Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};