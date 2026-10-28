import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (hidden on mobile, bottom right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40 group">
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
      </div>

      {/* Mobile Slim Fixed Bottom Action Bar (<= 15% viewport height, safe area compliant) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#123C3A]/15 px-3 py-2.5 shadow-lg safe-area-pb">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Call Clinic */}
          <a
            href={`tel:${CLINIC_STATS.phoneRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white border border-[#123C3A]/10 text-[#123C3A] active:bg-[#E7EFEB] transition-colors"
            aria-label="Call clinic directly"
          >
            <Phone className="w-4 h-4 text-[#C6A56B]" />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">Call Clinic</span>
          </a>

          {/* WhatsApp */}
          <a
            href={CLINIC_STATS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-white active:bg-[#1eb857] transition-colors shadow-sm"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">WhatsApp</span>
          </a>

          {/* Book Appointment */}
          <button
            onClick={onBookClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#123C3A] text-[#FAF9F6] active:bg-[#1a4a47] transition-colors shadow-sm"
            aria-label="Book dental appointment"
          >
            <Calendar className="w-4 h-4 text-[#C6A56B]" />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">Book Visit</span>
          </button>

        </div>
      </div>
    </>
  );
};
