
import React from 'react';
import { ServiceCardProps } from '../types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
      <div className="overflow-hidden rounded-xl aspect-[16/9] mb-8 bg-slate-200">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex-grow flex flex-col items-center text-center">
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
