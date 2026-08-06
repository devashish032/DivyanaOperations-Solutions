import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Globe } from './components/Globe';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { PartnerPage } from './components/PartnerPage';
import { ContactPage } from './components/ContactPage';

type Page = 'home' | 'services' | 'about' | 'contact' | 'partner';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onBack={() => handleNavigate('home')} onPartner={() => handleNavigate('partner')} />;
      case 'about':
        return <AboutPage onBack={() => handleNavigate('home')} onPartner={() => handleNavigate('partner')} />;
      case 'partner':
        return <PartnerPage onBack={() => handleNavigate('home')} />;
      case 'contact':
        return <ContactPage onBack={() => handleNavigate('home')} />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features />
            <div className="relative h-[600px] md:h-[800px] bg-[#0F172A] overflow-hidden">
              <Globe />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-4">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
                    Global Reach, <span className="text-[#C5A059]">Local Expertise</span>
                  </h2>
                  <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base font-medium">
                    Connecting continents with precision and care. Our logistics network spans the globe, 
                    ensuring your cargo reaches its destination safely and on time.
                  </p>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <footer className="bg-[#0B1120] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="https://i.postimg.cc/Z05jsMCb/logonotstra.png" 
              alt="Divyana Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-left">
              <div className="text-white text-sm font-black uppercase tracking-wider">Divyana Operations</div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">& Solutions</div>
            </div>
          </div>
          <p className="text-white/40 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Divyana Operations & Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
