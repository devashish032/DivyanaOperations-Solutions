import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { Globe } from './components/Globe';
import { Features } from './components/Features';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PartnerPage } from './components/PartnerPage';

const App: React.FC = () => {
  console.log('App component rendering');
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'contact' | 'partner'>('home');

  // Simple "routing" effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact' | 'partner') => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onBack={() => navigateTo('home')} onPartner={() => navigateTo('partner')} />;
      case 'about':
        return <AboutPage onBack={() => navigateTo('home')} onPartner={() => navigateTo('partner')} />;
      case 'contact':
        return <ContactPage onBack={() => navigateTo('home')} />;
      case 'partner':
        return <PartnerPage onBack={() => navigateTo('home')} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Services Preview Section */}
            <section id="services" className="py-20 md:py-32 px-6 bg-white">
              <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6 flex items-center justify-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#991B1B]"></span>
                  Our Core Competencies
                  <span className="w-2 h-2 rounded-full bg-[#991B1B]"></span>
                </p>
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter uppercase leading-none">
                  Comprehensive <br /> <span className="text-[#C5A059]">Trade Solutions</span>
                </h2>
                <div className="w-16 h-1 bg-[#C5A059] mx-auto mt-10"></div>
              </div>
              
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                <ServiceCard 
                  title="Integrated Logistics"
                  description="We focus on creating lasting relationships with our clients through consistent performance, ethical practices, and a dedication to excellence in every transaction. Trusted trade and logistics partner across all markets we serve."
                  image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                />
                <ServiceCard 
                  title="Global Supply Chain"
                  description="Simplifying international trade with reliability, speed, and transparency—building long-term global partnerships that drive mutual success. We use intelligent logistics systems to streamline your workflow."
                  image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
              <div className="mt-16 md:mt-20 text-center">
                <button 
                  onClick={() => navigateTo('services')}
                  className="group relative text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] hover:text-[#991B1B] transition-all"
                >
                  Explore All Capabilities
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#0F172A] group-hover:bg-[#991B1B] transition-all"></div>
                </button>
              </div>
            </section>

            {/* About Us (Brief) & Global Reach Visualization */}
            <section id="about" className="py-20 md:py-32 px-6 bg-[#F8FAFC] border-y border-slate-100 overflow-hidden">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">Global Infrastructure</p>
                  <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 md:mb-10 uppercase tracking-tight leading-none">Strategic <br /> <span className="text-[#C5A059]">Presence</span></h2>
                  <p className="text-base md:text-lg text-slate-600 mb-10 md:mb-12 leading-relaxed font-medium">
                    Divyana Operations & Solutions is a professional, compliance-driven, B2B trade and logistics services firm. 
                    From the trade hubs of the GCC and Europe to South East Asia and Africa, we provide a single window for 
                    Electronics, Medical Equipment, and Industrial Materials.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { name: 'GCC & Middle East', detail: 'UAE, Saudi, Qatar, Oman, Kuwait, Bahrain' },
                      { name: 'European Markets', detail: 'Western EU markets & Eastern expansion' },
                      { name: 'South East Asia', detail: 'Singapore, Malaysia, Indonesia, Thailand' },
                      { name: 'Africa', detail: 'East, West & North Africa focus' }
                    ].map(region => (
                      <div key={region.name} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center hover:border-[#991B1B] transition-all shadow-sm">
                        <span className="font-black text-[10px] md:text-xs tracking-widest text-[#0F172A] mb-2 uppercase">{region.name}</span>
                        <span className="text-[8px] md:text-[10px] text-slate-400 font-bold tracking-wider">{region.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Globe Container - Refined for mobile specifically */}
                <div className="relative mt-12 lg:mt-0 w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
                  {/* 3D Globe Visualization Container - Tighter padding on mobile */}
                  <div className="bg-[#0F172A]/5 rounded-[2rem] md:rounded-[3rem] p-2 sm:p-6 md:p-12 shadow-inner border border-slate-200/50">
                    <Globe />
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section Preview */}
            <section id="contact" className="py-20 md:py-32 px-6">
              <div className="max-w-7xl mx-auto bg-[#0F172A] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center overflow-hidden relative shadow-2xl border-t border-[#991B1B]/10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#991B1B]/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                    Scale Your <br /> <span className="text-[#C5A059]">Global Ambitions</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto font-medium">
                    Partner with Divyana for world-class logistics and trade solutions that scale with your enterprise's complex requirements.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                    <button 
                      onClick={() => navigateTo('partner')}
                      className="bg-[#C5A059] border border-[#991B1B]/30 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#991B1B] transition-all shadow-xl"
                    >
                      Establish Partnership
                    </button>
                    <button 
                      onClick={() => navigateTo('services')}
                      className="border-2 border-white/20 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                      Explore Verticals
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#991B1B] selection:text-white">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      {renderContent()}

      {/* Footer */}
      <footer className="py-16 md:py-20 px-6 bg-[#0B1120] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-10 text-center">
          <div className="space-y-4">
            <h3 className="text-[#C5A059] font-black uppercase tracking-[0.3em] text-sm">Divyana Operations & Solutions</h3>
            <div className="text-[10px] md:text-xs text-slate-500 font-medium tracking-widest">
              © 2026 Corporate Excellence in Trade & Logistics. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;