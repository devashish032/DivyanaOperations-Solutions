import React from 'react';

interface AboutPageProps {
  onBack: () => void;
  onPartner: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onPartner }) => {
  const values = [
    { title: 'Reliability', desc: 'Consistency in performance and delivery schedules is our hallmark.' },
    { title: 'Compliance', desc: 'Adhering to strict international standards and local regional regulations.' },
    { title: 'Transparency', desc: 'Clear communication and honest dealings with every partner.' },
    { title: 'Innovation', desc: 'Constantly evolving our logistics systems for maximum efficiency.' },
  ];

  return (
    <div className="pt-24 pb-12 animate-in fade-in duration-700 bg-white">
      {/* About Header */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-slate-100 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest"
          >
            <span className="text-xl">←</span> Back to Home
          </button>
          <div className="max-w-4xl">
            <p className="text-white bg-[#0F172A] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Who We Are
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Excellence <br />In Trade & <br /><span className="text-[#C5A059]">Logistics</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              Divyana Operations & Solutions is a professional, compliance-driven, B2B trade and logistics services firm. 
              We are dedicated to building trust and simplifying the complexities of global commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story / Detailed Description */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tight mb-8">Our Firm</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded on the principles of integrity and operational excellence, Divyana Operations & Solutions has emerged as a trusted partner for businesses across the GCC & Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), Europe, South East Asia, and Africa.
              </p>
              <p>
                We provide a single-window solution for global trade, bridging the gap between manufacturers and markets through a robust network of logistics, warehousing, and strategic sourcing. Our approach is compliance-heavy, ensuring that every shipment meets the highest regulatory standards.
              </p>
            </div>
          </div>
          <div className="bg-[#0B1120] text-white p-12 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-black uppercase mb-8 tracking-tighter text-[#C5A059]">Our Mission</h3>
            <p className="text-xl leading-relaxed italic mb-12 text-slate-100">
              "To revolutionize the B2B supply chain by providing transparent, efficient, and ethical trade and logistics services that empower businesses to scale globally with confidence."
            </p>
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter text-[#C5A059]">Our Vision</h3>
              <p className="text-slate-400">
                To become the world's most reliable 'single window' for international B2B commerce, recognized for our compliance, reach, and dedication to partner success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight">Our Core Values</h2>
            <div className="w-16 h-1 bg-[#C5A059] mx-auto mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-1 bg-[#C5A059] mb-6 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-[#0F172A]">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Find Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0B1120] text-white rounded-[3.5rem] p-12 md:p-20 overflow-hidden relative shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <p className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-4">Visit Us</p>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">Our Headquarters</h2>
                <div className="space-y-4 text-xl">
                  <p className="font-bold text-[#C5A059]">Divyana Operations & Solutions</p>
                  <p className="text-slate-300">Bandra, Mumbai,</p>
                  <p className="text-slate-300">Maharashtra, India.</p>
                </div>
                <div className="mt-12">
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=Bandra+West+Mumbai+Maharashtra" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-[#C5A059] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#0B1120] transition-all inline-block shadow-lg"
                   >
                     View on Maps
                   </a>
                </div>
              </div>
              <div className="h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.68445226012!2d72.8090546548857!3d19.05447790729573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x437996b49a236a78!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1770637509055!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full blur-[120px] opacity-5 -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* Global Reach Grid */}
      <section className="py-24 px-6 bg-[#0B1120] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16">Global Reach, <span className="text-[#C5A059]">Local Expertise</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-4xl font-black text-[#C5A059] mb-4">GCC</div>
              <p className="text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2">Middle East Hub</p>
              <p className="text-slate-500 text-[9px] uppercase leading-relaxed">UAE, Saudi Arabia, Qatar, <br/> Oman, Kuwait, Bahrain</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#C5A059] mb-4">EU</div>
              <p className="text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2">European Markets</p>
              <p className="text-slate-500 text-[9px] uppercase leading-relaxed">Western Europe Presence, <br/> Eastern expansion</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#C5A059] mb-4">SEA</div>
              <p className="text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2">South East Asia</p>
              <p className="text-slate-500 text-[9px] uppercase leading-relaxed">Singapore, Malaysia, <br/> Indonesia, Thailand</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#C5A059] mb-4">AF</div>
              <p className="text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2">Africa</p>
              <p className="text-slate-500 text-[9px] uppercase leading-relaxed">East, West & North Africa <br/> Emerging markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-[#0F172A] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              Let's Shape The <br /> <span className="text-[#C5A059]">Future Of Trade</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Experience the Divyana difference. Professional, compliance-driven, and partner-focused.
            </p>
            <button 
              onClick={onPartner}
              className="bg-[#C5A059] text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#0F172A] transition-all shadow-xl"
            >
              Be Our Partner
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A059]/5 to-transparent"></div>
        </div>
      </section>
    </div>
  );
};