import React, { useState } from 'react';
import { FeatureAccordionProps } from '../types';

const AccordionItem: React.FC<FeatureAccordionProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 py-8 first:border-t">
      <button 
        onClick={onToggle}
        className="w-full flex justify-between items-center group text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#C5A059] transition-colors tracking-tight">
          {title}
        </span>
        <span className={`text-3xl font-light transition-transform duration-500 ease-out ${isOpen ? 'rotate-45 text-[#991B1B]' : 'text-slate-300'}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          {content}
        </p>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const features = [
    {
      title: 'Strategic Location',
      content: 'Operating from global trade hubs to serve the GCC (UAE, Saudi, Qatar, Oman, Kuwait, Bahrain), Europe, South East Asia (Singapore, Malaysia, Indonesia, Thailand), and Pan Africa. We ensure your products reach high-growth markets efficiently.'
    },
    {
      title: 'Compliance-Focused',
      content: 'Our professional team ensures all trade and logistics activities adhere to the highest international standards, including local regional regulations and global maritime laws.'
    },
    {
      title: 'Single-Window Solutions',
      content: 'From procurement and custom clearance to sea freight and warehousing, we manage the entire supply chain through one integrated, transparent platform.'
    },
    {
      title: 'Strong Network',
      content: 'A robust ecosystem of global partners and local logistics experts dedicated to excellence in every single transaction, ensuring reliability across borders.'
    },
    {
      title: 'Timely Execution',
      content: 'Leveraging technology and optimized operational processes to ensure high-speed delivery and reliable turnarounds across all our business verticals.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="flex gap-2 mb-8">
            <div className="w-12 h-1 bg-[#C5A059]"></div>
            <div className="w-4 h-1 bg-[#991B1B]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tighter uppercase">
            Why Choose <br /> 
            Divyana <br />
            Operations & <br />
            Solutions
          </h2>
          <p className="mt-8 text-slate-500 text-lg max-w-sm">
            Professional excellence driven by trust and global compliance.
          </p>
        </div>
        
        <div className="lg:col-span-7">
          <div className="flex flex-col">
            {features.map((feature, idx) => (
              <AccordionItem
                key={idx}
                title={feature.title}
                content={feature.content}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
