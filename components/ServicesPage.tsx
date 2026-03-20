import React from 'react';

interface ServicesPageProps {
  onBack: () => void;
  onPartner: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onPartner }) => {
  const products = [
    { name: 'Beauty & Wellness', icon: '✨' },
    { name: 'Food & Agriculture', icon: '🌾' },
    { name: 'Construction', icon: '🏗️' },
    { name: 'Textiles & Apparel', icon: '👕' },
    { name: 'Leather & Footwear', icon: '👞' },
    { name: 'Industrial Materials', icon: '⚙️' },
    { name: 'Medical Equipment', icon: '🏥' },
    { name: 'Electronics', icon: '📱' },
  ];

  const verticals = [
    { 
      title: 'General Trading', 
      desc: 'Our trading division specializes in sourcing and distributing a diverse range of high-quality products globally. We focus on value creation, ethical sourcing, and market-leading reliability.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Import & Export', 
      desc: 'Facilitating seamless cross-border trade with deep expertise in international regulations. We handle the complexities of documentation and compliance to ensure your goods move across borders without friction.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Integrated Logistics', 
      desc: 'A comprehensive approach to supply chain management. We synchronize every moving part of your logistics operations to create a single, efficient window for your global commerce needs.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop'
    },
  ];

  const logisticsFeatures = [
    { 
      title: 'Sea Freight', 
      desc: 'Strategic ocean transport solutions offering cost-effective and reliable delivery for LCL and FCL shipments across all major global trade lanes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a2 2 0 012-2m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
      )
    },
    { 
      title: 'Air Freight', 
      desc: 'High-speed global transport solutions for time-critical cargo, ensuring rapid transit across continents with maximum security and precision.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    { 
      title: 'Warehousing', 
      desc: 'State-of-the-art storage facilities equipped with advanced inventory tracking systems to ensure the safety and accessibility of your assets.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    { 
      title: 'Custom Clearance', 
      desc: 'Expert regulatory guidance and rapid processing. Our compliance-driven team ensures your cargo meets all legal requirements for timely transit.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    { 
      title: 'Last-Mile Delivery', 
      desc: 'Optimized end-to-end distribution services ensuring your products reach their final destination efficiently, reliably, and on schedule.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" /></svg>
      )
    },
  ];

  return (
    <div className="pt-24 pb-12 animate-in fade-in duration-700 bg-white">
      {/* Services Header */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest"
          >
            <span className="text-xl">←</span> Back to Overview
          </button>
          <div className="max-w-3xl">
            <p className="text-[#C5A059] border border-[#C5A059] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Our Expertise
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Core <br />Business <br />Verticals
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
              Divyana Operations & Solutions provides a professional, compliance-driven framework for international trade, 
              connecting global supply with regional demand in the GCC, Europe, SE Asia, and Africa through precision logistics.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-0 hidden lg:block"></div>
      </section>

      {/* Business Verticals Detail */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {verticals.map((v, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="text-4xl font-black text-slate-100 mb-4">0{i + 1}</div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-6 uppercase tracking-tight border-l-4 border-[#C5A059] pl-6">{v.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  {v.desc}
                </p>
              </div>
              <div className="flex-1 w-full h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Logistics & Supply Chain */}
      <section className="py-24 px-6 bg-[#0B1120] text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Logistics & Supply Chain</h2>
            <div className="w-20 h-1 bg-[#C5A059] mx-auto mb-8"></div>
            <p className="text-slate-400">Leveraging deep operational expertise to provide high-speed, transparent, and secure movement of cargo worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsFeatures.map((f, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-[#C5A059]/40 hover:bg-white/10 transition-all group">
                <div className="text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Product Portfolio */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">Market Versatility</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight">Product Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <div key={i} className="group p-8 border border-slate-100 rounded-2xl flex flex-col items-center text-center hover:bg-[#0B1120] hover:border-[#0B1120] transition-all duration-300 shadow-sm hover:shadow-xl">
                <span className="text-5xl mb-6 group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100">{p.icon}</span>
                <span className="font-bold text-[#0F172A] group-hover:text-[#C5A059] tracking-tight uppercase text-sm">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F172A] rounded-[3.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
            <div className="max-w-xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                Scale Your <br />Global Trade <br /><span className="text-[#C5A059]">With Confidence</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Our team is ready to provide a customized solution for your logistics and trading requirements. Let's build a lasting partnership.
              </p>
            </div>
            <div className="relative z-10">
              <button 
                onClick={onPartner}
                className="bg-[#C5A059] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-[#0F172A] transition-all duration-300 shadow-2xl hover:-translate-y-2 uppercase tracking-widest"
              >
                Ready To Partner
              </button>
            </div>
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          </div>
        </div>
      </section>
    </div>
  );
};