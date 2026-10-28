import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#123C3A] rounded-full hover:bg-[#E7EFEB] transition-colors"
          aria-label="Close privacy notice"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C6A56B]">
            <ShieldCheck className="w-4 h-4" />
            <span>Patient Privacy & Data Policy</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#123C3A]">
            Privacy & Appointment Notice
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-[#252C2B]/85 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
            <p>
              At <strong>Dr. Prince Kushwah Dental Clinic</strong>, we treat your personal contact details with the highest standards of professional confidentiality and clinical ethics.
            </p>

            <div className="p-3 rounded-lg bg-white border border-[#123C3A]/10 space-y-1">
              <span className="font-semibold text-[#123C3A] block flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>Enquiry-Only Information</span>
              </span>
              <p className="text-xs text-[#252C2B]/75">
                We only collect your name, mobile contact number, preferred date, and stated dental concern strictly to facilitate your appointment scheduling. We never sell, lease, or share patient contact details with any third parties or advertisers.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#123C3A]/10 space-y-1">
              <span className="font-semibold text-[#123C3A] block flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>Direct WhatsApp Communication</span>
              </span>
              <p className="text-xs text-[#252C2B]/75">
                Appointment requests are sent directly to the official clinic WhatsApp line ({CLINIC_STATS.phone}). Conversations are end-to-end encrypted under WhatsApp standard protocols.
              </p>
            </div>

            <p className="text-xs text-[#252C2B]/70">
              For any questions regarding clinical records or data policies, you may contact the clinic directly at 5 No. Naka, Agar Road, Makodia Aam, Ujjain, MP 456001.
            </p>
          </div>

          <div className="pt-4 border-t border-[#123C3A]/10">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-lg bg-[#123C3A] text-white text-xs font-semibold hover:bg-[#1a4a47] transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
