import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

interface LocationContactProps {
  onBookClick: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onBookClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_STATS.clinicAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#E7EFEB]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
            <span>Clinic Location & Enquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123C3A] text-balance">
            Visit Our Clinic in <span className="italic font-normal text-[#C6A56B]">Ujjain.</span>
          </h2>

          <p className="text-base text-[#252C2B]/75 leading-relaxed">
            Conveniently situated on Agar Road near Makodia Aam, welcoming patients with attentive care, pristine hygiene, and modern dental solutions.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (Desktop 6 cols): Contact Details */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-[#123C3A]/10 shadow-sm flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase text-[#C6A56B] tracking-wider font-semibold">
                  Dental Surgeon & Healthcare Practice
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C3A] mt-1">
                  Dr. Prince Kushwah Dental Clinic
                </h3>
              </div>

              {/* Address Lockup */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E7EFEB] text-[#123C3A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C6A56B]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#123C3A]">
                    Verified Clinic Address
                  </div>
                  <p className="text-xs sm:text-sm text-[#252C2B]/85 mt-1 leading-relaxed">
                    {CLINIC_STATS.clinicAddress}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#123C3A] hover:text-[#C6A56B] mt-2 font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Address copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Telephone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E7EFEB] text-[#123C3A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C6A56B]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#123C3A]">
                    Direct Telephone & WhatsApp
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-4">
                    <a
                      href={`tel:${CLINIC_STATS.phoneRaw}`}
                      className="text-base font-bold text-[#123C3A] font-mono hover:text-[#C6A56B] transition-colors"
                    >
                      {CLINIC_STATS.phone}
                    </a>
                    <a
                      href={CLINIC_STATS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-[#252C2B]/60 mt-1">
                    Call or message for appointment confirmations and dental queries.
                  </p>
                </div>
              </div>

              {/* Verified Hours Slot */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E7EFEB] text-[#123C3A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C6A56B]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#123C3A]">
                    Consultation Hours (Clinic Placeholder)
                  </div>
                  <p className="text-xs sm:text-sm text-[#252C2B]/85 mt-1 leading-relaxed">
                    Morning & Evening Consultations scheduled by appointment. Please verify daily timings with the clinic prior to your visit.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-[#123C3A]/10">
              <button
                onClick={onBookClick}
                className="w-full py-3.5 px-6 rounded-lg bg-[#123C3A] text-white text-xs font-semibold hover:bg-[#1a4a47] transition-all shadow-sm active:scale-95 text-center"
              >
                Plan an Appointment Visit
              </button>
            </div>

          </div>

          {/* Right Column (Desktop 6 cols): Location & Map Navigator Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#123C3A] to-[#1c5552] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Background Map Art Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF9F6_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C6A56B] bg-black/30 px-3 py-1 rounded-full border border-white/10">
                  Ujjain, Madhya Pradesh 456001
                </span>
                <Navigation className="w-5 h-5 text-[#C6A56B]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                How to Reach Dr. Prince Kushwah’s Clinic
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Located on Agar Road at 5 No. Naka near Makodia Aam, Khilachipur. Easily accessible via local transit, auto-rickshaw, and private vehicles with nearby street parking.
              </p>

              {/* Landmark Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-bold text-[#C6A56B] block">Key Landmark</span>
                  <span className="text-xs text-white/90">Makodia Aam, Agar Road</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-bold text-[#C6A56B] block">Location Landmark</span>
                  <span className="text-xs text-white/90">5 No. Naka, Khilachipur</span>
                </div>
              </div>

              {/* Google Verified Review Badge */}
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#C6A56B] font-bold">
                  <span>5.0 ★ Google Business Profile</span>
                </div>
                <p className="text-[11px] text-white/70">
                  Rated by 1,378+ patients for compassionate and hygienic dental care.
                </p>
              </div>

            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="relative z-10 pt-4 border-t border-white/15">
              <a
                href={CLINIC_STATS.googleReviewSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg bg-[#FAF9F6] text-[#123C3A] font-semibold text-xs hover:bg-[#E7EFEB] transition-colors shadow-md group"
              >
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#C6A56B] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
