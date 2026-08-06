
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact' | 'partner') => void;
  currentPage: 'home' | 'services' | 'about' | 'contact' | 'partner';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeTop = !isScrolled && currentPage === 'home';
  const textColor = isHomeTop ? 'text-white' : 'text-slate-900';
  const bgColor = isHomeTop ? 'bg-transparent' : 'bg-white shadow-sm';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgColor} py-4`}>
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* Logo - Left */}
        <button 
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="flex items-center gap-3 group z-10"
        >
          <img 
            src="https://i.postimg.cc/Z05jsMCb/logonotstra.png" 
            alt="Divyana Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
          <div className="text-left">
            <div className={`text-[10px] md:text-sm font-black uppercase tracking-wider ${textColor}`}>Divyana Operations</div>
            <div className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ${textColor}`}>& Solutions</div>
          </div>
        </button>

        {/* Navigation Links - Centered */}
        <div className="hidden xl:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => onNavigate('services')}
            className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${currentPage === 'services' ? 'opacity-100' : 'opacity-70'} ${textColor}`}
          >
            Service
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${currentPage === 'about' ? 'opacity-100' : 'opacity-70'} ${textColor}`}
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${currentPage === 'contact' ? 'opacity-100' : 'opacity-70'} ${textColor}`}
          >
            Contact Us
          </button>
        </div>

        {/* CTA Button - Right */}
        <div className="hidden lg:block z-10">
          <button 
            onClick={() => onNavigate('partner')}
            className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Be Our Partner
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${textColor === 'text-white' ? 'bg-white' : 'bg-black'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${textColor === 'text-white' ? 'bg-white' : 'bg-black'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${textColor === 'text-white' ? 'bg-white' : 'bg-black'}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full p-8 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6">
            <button onClick={() => { onNavigate('services'); setIsMobileMenuOpen(false); }} className="text-sm font-black uppercase tracking-widest text-slate-900 text-left">Service</button>
            <button onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }} className="text-sm font-black uppercase tracking-widest text-slate-900 text-left">About Us</button>
            <button onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }} className="text-sm font-black uppercase tracking-widest text-slate-900 text-left">Contact Us</button>
            <button onClick={() => { onNavigate('partner'); setIsMobileMenuOpen(false); }} className="bg-black text-white px-6 py-4 rounded-full text-center font-black uppercase tracking-widest">Be Our Partner</button>
          </div>
        </div>
      )}
    </nav>
  );
};
