import React from 'react';
import { Star, HeartHandshake, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Star,
      title: '5.0 ★ Google Rating',
      subtitle: '1,378 Verified Patient Reviews',
      accent: 'text-[#C6A56B]',
    },
    {
      icon: HeartHandshake,
      title: 'Patient-Focused Care',
      subtitle: 'Thoughtful listening & gentle techniques',
      accent: 'text-[#123C3A]',
    },
    {
      icon: Sparkles,
      title: '22+ Treatment Options',
      subtitle: 'Preventive, cosmetic & trauma care',
      accent: 'text-[#C6A56B]',
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Booking',
      subtitle: '+91 98938 88154 · Prompt response',
      accent: 'text-[#123C3A]',
    },
  ];

  return (
    <section className="bg-white border-y border-[#123C3A]/10 py-6 sm:py-8 relative z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#FAF9F6] transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E7EFEB] flex items-center justify-center shrink-0 border border-[#123C3A]/5">
                  <IconComponent className={`w-6 h-6 ${item.accent}`} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#123C3A] leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#252C2B]/70 mt-0.5 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
