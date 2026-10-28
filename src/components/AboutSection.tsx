import React from 'react';
import { MessageSquare, CheckCircle2, MapPin, FileCheck, ArrowRight, Shield } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#E7EFEB]/50 relative overflow-hidden">
      {/* Curved decorative background shape */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Desktop 5 cols): Doctor Portrait Framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Gold Offset Border Frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#C6A56B]/30 -z-10 translate-x-2 translate-y-2 pointer-events-none" />

              {/* Main Card */}
              <div className="bg-[#FAF9F6] p-6 rounded-2xl shadow-xl border border-white relative overflow-hidden">
                
                {/* Doctor Visual Presentation Box */}
                <div className="w-full aspect-[4/4.5] rounded-xl bg-gradient-to-br from-[#123C3A] via-[#184643] to-[#0e2c2b] p-6 text-white flex flex-col justify-between shadow-inner relative overflow-hidden">
                  
                  {/* Watermark-free subtle geometric pattern */}
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-[#C6A56B] bg-black/30 px-3 py-1 rounded-full border border-white/10">
                      Dental Surgeon
                    </span>
                    <Shield className="w-5 h-5 text-[#C6A56B]" />
                  </div>

                  <div className="my-auto text-center space-y-3 py-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-white/10 border-2 border-[#C6A56B] flex items-center justify-center shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-12 h-12 text-[#FAF9F6]"
                      >
                        <path d="M12 2C8.5 2 6 4.5 6 8.5c0 4 1.5 7.5 3 12 1-1 2-2.5 3-2.5s2 1.5 3 2.5c1.5-4.5 3-8 3-12C18 4.5 15.5 2 12 2z" />
                        <path d="M9.5 8c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
                      </svg>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      Dr. Prince Kushwah
                    </h3>
                    <p className="text-xs text-[#FAF9F6]/80 max-w-xs mx-auto">
                      Dedicated to clinical precision, patient empathy, and modern oral health in Ujjain.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C6A56B]" />
                      <span>Agar Road, Ujjain</span>
                    </div>
                    <span className="font-mono text-[#C6A56B] font-semibold">1,378 Reviews · 5.0 ★</span>
                  </div>
                </div>

                {/* Practice Values Summary */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#123C3A]/5">
                    <span className="font-semibold text-[#123C3A] block">Zero Rush Consultations</span>
                    <span className="text-[#252C2B]/60 text-[11px]">Adequate time for questions</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#123C3A]/5">
                    <span className="font-semibold text-[#123C3A] block">Hospital-Grade Asepsis</span>
                    <span className="text-[#252C2B]/60 text-[11px]">Class-B sterilization</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column (Desktop 7 cols): Editorial Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
              <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
              <span>About the Doctor & Practice</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123C3A] leading-tight text-balance">
              Care That Begins <br />
              <span className="italic font-normal text-[#C6A56B]">With Listening.</span>
            </h2>

            <div className="space-y-4 text-[#252C2B]/85 text-base sm:text-lg leading-relaxed">
              <p>
                Every smile is different. Dr. Prince Kushwah’s dental clinic offers a range of dental care services, with a focus on understanding patient concerns and helping patients explore suitable treatment options.
              </p>
              <p className="text-sm sm:text-base text-[#252C2B]/75 leading-relaxed">
                Whether you visit for a routine check-up, seek relief from severe dental pain, or require advanced restorative or trauma care, our approach is centered on gentle techniques, transparent clinical communication, and a calm, hygienic clinical environment.
              </p>
            </div>

            {/* Core Practice Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Transparent advice on necessary treatments',
                'Modern rotary and digital diagnostic tools',
                'Gentle protocols for anxious patients',
                'Comprehensive trauma & maxillofacial care',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#252C2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Clear Editable Placeholder for Verified Qualifications */}
            <div className="p-4 rounded-xl bg-white/80 border border-[#123C3A]/15 border-dashed space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#123C3A]">
                <FileCheck className="w-4 h-4 text-[#C6A56B]" />
                <span>Verified Credentials & Registration (Editable Placeholder)</span>
              </div>
              <p className="text-xs text-[#252C2B]/70 leading-normal">
                Dr. Prince Kushwah · Dental Surgeon · Practicing at 5 No. Naka, Agar Road, Makodia Aam, Ujjain, MP 456001. [Editable slot: Additional university degrees, state dental council registration numbers, or specialized fellowships can be updated here upon clinic provision without altering design balance].
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FAF9F6] bg-[#123C3A] hover:bg-[#184d4a] rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 group"
              >
                <MessageSquare className="w-4 h-4 text-[#C6A56B]" />
                <span>Get in Touch with Dr. Prince Kushwah</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
