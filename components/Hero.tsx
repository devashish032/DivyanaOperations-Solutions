import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#C5A059] mb-8 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-[#991B1B]/30">
          Global Strategic Partner
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-10 tracking-tighter uppercase">
          Moving <br />
          Commerce <br />
          <span className="text-white/40">Forward</span>
        </h1>
        <div className="flex justify-center gap-2 mb-10">
          <div className="w-12 h-1 bg-[#C5A059]"></div>
          <div className="w-4 h-1 bg-[#991B1B]"></div>
        </div>
        <p className="text-xs md:text-lg text-slate-300 max-w-2xl mx-auto uppercase tracking-widest font-medium leading-relaxed opacity-90">
          Connecting enterprises worldwide with integrated <br className="hidden md:block" /> logistics and professional trade solutions.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/10 via-[#991B1B]/50 to-transparent" />
      </div>
    </section>
  );
};