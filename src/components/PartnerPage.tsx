import React, { useState } from 'react';

interface PartnerPageProps {
  onBack: () => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    contactPerson: '',
    email: '',
    phone: '',
    volume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest in partnering with us. Our partnership team will contact you shortly.");
  };

  return (
    <div className="pt-24 pb-12 animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Header Section */}
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
              Partner Program
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Grow Your <br />Business <br /><span className="text-[#C5A059]">With Us</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Join our global network of strategic partners and leverage our expertise to scale your operations and reach new markets.
            </p>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"></div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Benefits */}
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#0F172A]">Why Partner With Us?</h2>
            <div className="space-y-8">
              {[
                { title: "Global Network", desc: "Access to our extensive network of trade and logistics partners across major global hubs." },
                { title: "Expert Support", desc: "Dedicated partnership team to assist with strategic planning and operational excellence." },
                { title: "Compliance Assurance", desc: "Leverage our expertise in international trade regulations and regional compliance standards." },
                { title: "Scalable Solutions", desc: "Flexible and scalable logistics and trade solutions designed to grow with your business." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#C5A059]/30 hover:bg-[#F8FAFC] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F172A] text-[#C5A059] rounded-xl flex items-center justify-center font-black text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2 uppercase tracking-tight">{benefit.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Partner Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-[3.5rem] p-8 md:p-14 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-black text-[#0F172A] mb-8 uppercase tracking-tight">Partnership Application</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                <input 
                  required
                  type="text"
                  placeholder="Global Trade Ltd."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.companyName}
                  onChange={e => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Industry Sector</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Logistics, Manufacturing"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.industry}
                  onChange={e => setFormData({...formData, industry: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Person</label>
                <input 
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.contactPerson}
                  onChange={e => setFormData({...formData, contactPerson: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input 
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                <input 
                  required
                  type="tel"
                  placeholder="+91 98XXX XXXXX"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Anticipated Monthly Volume</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. 50+ Containers"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.volume}
                  onChange={e => setFormData({...formData, volume: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Partnership Proposal / Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell us about your business and how you'd like to partner with us..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#0F172A] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-xl hover:-translate-y-1"
                >
                  Submit Application
                </button>
              </div>
            </form>
            <p className="text-[10px] text-slate-400 mt-8 text-center uppercase tracking-widest">
             We Appreciate Your Interest In Our Professional Partnership Program.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
