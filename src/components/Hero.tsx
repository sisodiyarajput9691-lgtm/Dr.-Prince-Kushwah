import React from 'react';
import { Star, ShieldCheck, ArrowRight, Sparkles, MapPin, Phone } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden smile-curve-bg">
      {/* Subtle background smile curve decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#E7EFEB]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Desktop 7 cols): Editorial Typography & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small premium unboxed kicker with golden accent dot */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
              <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
              <span>Personalized Dental Care · Ujjain</span>
            </div>

            {/* Main Headline with balanced wrapping */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#123C3A] leading-[1.15] text-balance">
              Your Smile Deserves <span className="italic font-normal text-[#C6A56B]">Thoughtful Care.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#252C2B]/85 leading-relaxed max-w-2xl">
              Discover comfortable, personalized dental care designed around your needs, your comfort, and your confidence. Under the dedicated care of Dr. Prince Kushwah, every treatment begins with listening.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#FAF9F6] bg-[#123C3A] hover:bg-[#184d4a] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#123C3A] bg-white hover:bg-[#E7EFEB] border border-[#123C3A]/20 rounded-lg shadow-sm hover:border-[#123C3A]/40 transition-all duration-200"
              >
                <span>Explore 22 Treatments</span>
              </button>
            </div>

            {/* Social Proof Strip: Google Rating & Reviews Adjacency */}
            <div className="pt-4 border-t border-[#123C3A]/10 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#C6A56B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A56B]" />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#123C3A] font-mono tabular-nums">5.0 ★ Google Rating</div>
                  <div className="text-[#252C2B]/60">1,378 Verified Reviews</div>
                </div>
              </div>

              <div className="h-8 w-px bg-[#123C3A]/15 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs text-[#252C2B]/80">
                <ShieldCheck className="w-4 h-4 text-[#123C3A] shrink-0" />
                <span>Strict Aseptic Sterilization & Patient Comfort</span>
              </div>
            </div>

          </div>

          {/* Right Column (Desktop 5 cols): Editorial Doctor & Clinic Art Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Teal Curved Organic Backdrop */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#123C3A] to-[#1c5552] rounded-[2.5rem] opacity-90 transform rotate-1 sm:rotate-2 shadow-2xl -z-10" />
              
              {/* Subtle Gold Accent Ring */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-[#C6A56B]/40 rounded-full -z-10 pointer-events-none" />

              {/* Main Visual Frame: Doctor Presentation Card */}
              <div className="relative bg-[#FAF9F6] p-4 sm:p-5 rounded-[2.2rem] shadow-xl border border-white/60 overflow-hidden">
                
                {/* Doctor Art Presentation Container with zero-broken fallback */}
                <div className="relative w-full aspect-[4/3.8] rounded-2xl overflow-hidden bg-gradient-to-br from-[#123C3A] via-[#1a4a47] to-[#0d2a28] flex flex-col justify-between p-6 text-white shadow-inner">
                  
                  {/* Top Badge: Verified Dental Surgeon */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A56B] bg-black/25 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Dental Surgeon · Ujjain
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#C6A56B]/20 flex items-center justify-center text-[#C6A56B] border border-[#C6A56B]/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Doctor Center Emblem & Visual Presentation */}
                  <div className="my-auto text-center space-y-3 z-10">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-md border-2 border-[#C6A56B] flex items-center justify-center shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 text-[#FAF9F6]"
                      >
                        <path d="M12 2C8.5 2 6 4.5 6 8.5c0 4 1.5 7.5 3 12 1-1 2-2.5 3-2.5s2 1.5 3 2.5c1.5-4.5 3-8 3-12C18 4.5 15.5 2 12 2z" />
                        <path d="M9.5 8c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
                      </svg>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-bold text-white tracking-wide">
                        Dr. Prince Kushwah
                      </h2>
                      <p className="text-xs text-[#FAF9F6]/80 font-light mt-0.5">
                        Dental Surgeon · Comprehensive Oral Care
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-[#C6A56B] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>5 No. Naka, Agar Road, Ujjain</span>
                    </div>
                  </div>

                  {/* Bottom Stats Inside Frame */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/15 text-center text-xs z-10">
                    <div>
                      <span className="block text-[#C6A56B] font-bold font-mono">5.0 ★ Rating</span>
                      <span className="text-[10px] text-white/70">1,378 Reviews</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold font-mono">22+</span>
                      <span className="text-[10px] text-white/70">Treatments Offered</span>
                    </div>
                  </div>

                  {/* Decorative subtle curved grid overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                </div>

                {/* Overlapping Clinic-Detail Sub-Card */}
                <div className="mt-3 p-3 bg-white rounded-xl border border-[#123C3A]/10 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E7EFEB] flex items-center justify-center text-[#123C3A]">
                      <Phone className="w-5 h-5 text-[#C6A56B]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#252C2B]/60 font-medium">Direct Clinic Hotline</div>
                      <a
                        href={`tel:${CLINIC_STATS.phoneRaw}`}
                        className="text-xs font-bold text-[#123C3A] font-mono hover:text-[#C6A56B] transition-colors"
                      >
                        {CLINIC_STATS.phone}
                      </a>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#123C3A] bg-[#E7EFEB] px-2.5 py-1 rounded-md">
                    Makodia Aam
                  </span>
                </div>

              </div>

              {/* Floating Reassurance Pill Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-[#123C3A]/10 flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-full bg-[#E7EFEB] flex items-center justify-center text-[#123C3A]">
                  <Sparkles className="w-4 h-4 text-[#C6A56B]" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#123C3A]">Gentle & Thoughtful Care</div>
                  <div className="text-[10px] text-[#252C2B]/60">Patient Comfort Always First</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
