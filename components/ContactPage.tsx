import React, { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert("Thank you for your inquiry. A logistics specialist will contact you shortly.");
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your inquiry. Please try again later.");
    }
  };

  const contactMethods = [
    {
      title: "Global Support",
      detail: "info.divyana@gmail.com",
      sub: "24/7 Monitoring & Logistics Support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      title: "Headquarters",
      detail: "Bandra, Mumbai",
      sub: "Maharashtra, India 400050",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      title: "Direct Line",
      detail: "9821121143 / 9004710415",
      sub: "Mon - Fri, 9am - 6pm IST",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      )
    }
  ];

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
              Connect With Us
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Let's Scale <br />Your Global <br /><span className="text-[#C5A059]">Operations</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Whether you are looking for integrated logistics solutions or strategic trade partnerships, our professional team is here to assist.
            </p>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"></div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#0F172A]">Reach Out</h2>
            <p className="text-slate-500 leading-relaxed">
              Divyana Operations & Solutions operates across multiple time zones. For urgent logistics inquiries, please use our global support channels for immediate attention.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-[#C5A059]/30 hover:bg-[#F8FAFC] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F172A] text-[#C5A059] rounded-xl flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{method.title}</h3>
                    <p className="text-lg font-bold text-[#0F172A] mb-1">{method.detail}</p>
                    <p className="text-sm text-slate-500">{method.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Network Network Image */}
            <div className="rounded-[2.5rem] overflow-hidden grayscale contrast-125 h-64 border border-slate-100 shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2068&auto=format&fit=crop" 
                 alt="Logistics Network" 
                 className="w-full h-full object-cover opacity-90"
               />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-[3.5rem] p-8 md:p-14 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-black text-[#0F172A] mb-8 uppercase tracking-tight">Business Inquiry</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                <input 
                  required
                  type="text"
                  placeholder="Global Trade Ltd."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
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
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Service Interest</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Integrated Logistics"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">How can we help?</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell us about your logistics requirements..."
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
                  Submit Inquiry
                </button>
              </div>
            </form>
            <p className="text-[10px] text-slate-400 mt-8 text-center uppercase tracking-widest">
             We Appreciate Your Interest In Our Professional Services.
            </p>
          </div>

        </div>
      </section>

      
    </div>
  );
};