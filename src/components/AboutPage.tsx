import React from 'react';

interface AboutPageProps {
  onBack: () => void;
  onPartner: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onPartner }) => {
  const regions = [
    {
      title: "GCC & Middle East",
      description: "Strategic hubs in UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain, facilitating rapid trade and logistics.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Europe",
      description: "Strong connections to major European ports and logistics networks, ensuring seamless import and export.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "South East Asia",
      description: "Optimized trade routes serving Singapore, Malaysia, Indonesia, and Thailand with high-speed logistics.",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Africa",
      description: "Pan-Africa reach with specialized logistics solutions for emerging markets and resource-rich regions.",
      image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-12 animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest"
          >
            <span className="text-xl">←</span> Back to Home
          </button>
          <div className="max-w-4xl">
            <p className="text-[#C5A059] border border-[#C5A059] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Our Story
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Excellence <br />In Global <br /><span className="text-[#C5A059]">Operations</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Divyana Operations & Solutions is a premier global trade and logistics firm dedicated to excellence, compliance, and strategic partnerships.
            </p>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#0F172A] mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                To provide seamless, integrated, and compliant global trade and logistics solutions that empower businesses to scale and succeed in international markets.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#0F172A] mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                To be the most trusted and innovative global partner for operations and solutions, setting the standard for excellence in the supply chain industry.
              </p>
            </div>
          </div>
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl grayscale contrast-125">
            <img 
              src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070&auto=format&fit=crop" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter mb-8">
            Global <span className="text-[#C5A059]">Presence</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We operate across major global trade hubs, ensuring your products reach their destination with speed and precision.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={region.image} 
                  alt={region.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">{region.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{region.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter mb-8">
            Find Us <span className="text-[#C5A059]">On Map</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12">
            Our headquarters is located in the heart of Mumbai's business district.
          </p>
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-200 h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3771.189569201525!2d72.8277271!3d19.0553754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c913d031f559%3A0x1089984d1d08e4e!2sBandra%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712038684000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#0F172A] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">
              Ready to <span className="text-[#C5A059]">Partner</span> With Us?
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Join our network of global partners and experience excellence in trade and logistics.
            </p>
            <button 
              onClick={onPartner}
              className="bg-[#C5A059] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
            >
              Become a Partner
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A059]/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C5A059]/10 blur-[120px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
};
