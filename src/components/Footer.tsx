import React from 'react';
import { CLINIC_STATS } from '../data/reviews';
import { TREATMENT_CATEGORIES } from '../data/treatments';
import { MapPin, Phone, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onCategoryClick?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onCategoryClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123C3A] text-[#FAF9F6] pt-16 pb-16 border-t border-[#1a4a47] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Clinic Bio (Desktop 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#123C3A]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#C6A56B]"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8.5c0 4 1.5 7.5 3 12 1-1 2-2.5 3-2.5s2 1.5 3 2.5c1.5-4.5 3-8 3-12C18 4.5 15.5 2 12 2z" />
                  <path d="M9.5 8c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Dr. Prince Kushwah
              </span>
            </div>

            <p className="text-xs text-[#FAF9F6]/80 leading-relaxed max-w-sm">
              Modern Dentistry. Thoughtful Care. Confident Smiles. Offering 22+ specialized dental treatments from preventive care to complex trauma surgery in Ujjain.
            </p>

            <div className="pt-2 text-xs text-[#C6A56B] font-mono">
              5.0 ★ Google Rated · 1,378 Patient Reviews
            </div>
          </div>

          {/* Quick Navigation (Desktop 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A56B]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F6]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Dr. Prince</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Treatments Directory</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Book an Appointment</a>
              </li>
            </ul>
          </div>

          {/* Treatment Categories (Desktop 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A56B]">
              Treatment Spectrum
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F6]/80">
              {TREATMENT_CATEGORIES.slice(1).map((cat) => (
                <li key={cat}>
                  <a
                    href="#treatments"
                    onClick={() => onCategoryClick && onCategoryClick(cat)}
                    className="hover:text-[#C6A56B] transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Clinic Contact (Desktop 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A56B]">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF9F6]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CLINIC_STATS.clinicAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                <a
                  href={`tel:${CLINIC_STATS.phoneRaw}`}
                  className="font-mono hover:text-[#C6A56B] transition-colors"
                >
                  {CLINIC_STATS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={CLINIC_STATS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Direct Enquiry
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={CLINIC_STATS.googleReviewSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#C6A56B] hover:underline"
                >
                  <span>Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/60">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>
              © {currentYear} Dr. Prince Kushwah Dental Clinic. All rights reserved.
            </span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onPrivacyClick}
              className="hover:text-white underline transition-colors"
            >
              Privacy & Appointment Policy
            </button>
            <span aria-hidden="true">·</span>
            <span>Ujjain, Madhya Pradesh 456001</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#FAF9F6]/80 hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C6A56B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
