import React, { useState } from 'react';

interface PartnerPageProps {
  onBack: () => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    contactName: '',
    email: '',
    partnershipType: 'Client',
    volume: '',
    regions: [] as string[],
    description: ''
  });

  const regionsList = ['GCC', 'Europe', 'South East Asia', 'Africa', 'Middle East', 'Americas'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Onboarding successful. Our partnership team will review your profile and reach out within 48 business hours.");
        onBack();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your application. Please try again later.");
    }
  };

  const toggleRegion = (region: string) => {
    setFormData(prev => ({
      ...prev,
      regions: prev.regions.includes(region) 
        ? prev.regions.filter(r => r !== region)
        : [...prev.regions, region]
    }));
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
              Strategic Collaboration
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8">
              Corporate <br />Partnership <br /><span className="text-[#C5A059]">Onboarding</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Join the Divyana network. We are looking for professional organizations to build long-term, compliance-driven global logistics ecosystems.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"></div>
      </section>

      {/* Onboarding Form */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] p-8 md:p-20 border border-slate-100 shadow-2xl relative">
          <div className="absolute top-10 right-10 opacity-5 text-[#C5A059]">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M13 13h-2V7h2v6zm0 4h-2v-2h2v2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </div>

          <h2 className="text-3xl font-black text-[#0F172A] mb-12 uppercase tracking-tight border-b border-slate-100 pb-6">Business Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Step 1: Identity */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Legal Name</label>
                <input 
                  required
                  type="text"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  placeholder="Enter Registered Name"
                  value={formData.companyName}
                  onChange={e => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Industry Sector</label>
                <input 
                  required
                  type="text"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  placeholder="e.g. Electronics, Medical, etc."
                  value={formData.industry}
                  onChange={e => setFormData({...formData, industry: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Authority Name</label>
                <input 
                  required
                  type="text"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  placeholder="Full Name of Representative"
                  value={formData.contactName}
                  onChange={e => setFormData({...formData, contactName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Professional Email</label>
                <input 
                  required
                  type="email"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Step 2: Logistics Profile */}
            <div className="pt-8">
              <h2 className="text-3xl font-black text-[#0F172A] mb-12 uppercase tracking-tight border-b border-slate-100 pb-6">Operational Requirements</h2>
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Partnership Category</label>
                  <div className="flex flex-wrap gap-2">
                    {['Client', 'Logistics Provider', 'Agent', 'Vendor'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, partnershipType: type})}
                        className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${formData.partnershipType === type ? 'bg-[#0F172A] text-[#C5A059] shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Anticipated Monthly Volume</label>
                  <input 
                    required
                    type="text"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all"
                    placeholder="e.g. 50 shipments / month"
                    value={formData.volume}
                    onChange={e => setFormData({...formData, volume: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Operational Regions of Interest</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {regionsList.map(region => (
                    <div 
                      key={region}
                      onClick={() => toggleRegion(region)}
                      className={`p-5 border-2 rounded-2xl cursor-pointer transition-all flex items-center gap-4 ${formData.regions.includes(region) ? 'border-[#0F172A] bg-[#0F172A] text-white shadow-xl' : 'border-slate-100 bg-[#F8FAFC] hover:border-[#C5A059]/30'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 ${formData.regions.includes(region) ? 'bg-[#C5A059] border-[#C5A059]' : 'border-slate-300'}`}></div>
                      <span className="text-[11px] font-bold uppercase tracking-widest">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Brief Overview of Partnership Objectives</label>
              <textarea 
                rows={4}
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all resize-none"
                placeholder="How do you envision our cooperation?"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div className="pt-10">
              <button 
                type="submit"
                className="w-full bg-[#0F172A] text-white px-10 py-6 rounded-full font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-2xl hover:-translate-y-2"
              >
                Apply for Partnership
              </button>
              <p className="text-center text-slate-400 text-[10px] mt-8 uppercase tracking-widest leading-relaxed">
                By submitting, you agree to our professional compliance vetting process. <br /> Your data is protected by enterprise-grade encryption.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};