import React from 'react';

interface ServicesPageProps {
  onBack: () => void;
  onPartner: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onPartner }) => {
  const services = [
    {
      title: "Integrated Logistics",
      description: "End-to-end supply chain management with real-time tracking and optimization.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      features: ["Sea & Air Freight", "Custom Clearance", "Warehousing", "Last-Mile Delivery"]
    },
    {
      title: "Import & Export",
      description: "Facilitating seamless international trade with compliance and speed.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
      features: ["Global Sourcing", "Documentation", "Compliance", "Trade Finance"]
    },
    {
      title: "General Trading",
      description: "Diverse product portfolio across multiple sectors with quality assurance.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      features: ["Industrial Goods", "Consumer Products", "Raw Materials", "Equipment"]
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
              Our Expertise
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Global <br />Solutions <br /><span className="text-[#C5A059]">Tailored</span> For You
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Divyana Operations & Solutions provides a comprehensive suite of services designed to optimize your global trade and logistics operations.
            </p>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"></div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.description}</p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onPartner}
                  className="w-full py-4 border-2 border-slate-900 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
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
