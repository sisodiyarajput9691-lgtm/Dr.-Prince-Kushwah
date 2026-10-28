import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

export const FloatingActions: React.FC = () => {
  return (
    /* Desktop & Tablet Floating WhatsApp Button (hidden on mobile, bottom right) */
    <aside className="hidden sm:block fixed bottom-6 right-6 z-40 group" aria-label="Quick contact">
      <a
        href={CLINIC_STATS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        aria-label="Chat with Dr. Prince Kushwah Dental Clinic on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-semibold pr-1">WhatsApp Clinic</span>
      </a>
    </aside>
  );
};
