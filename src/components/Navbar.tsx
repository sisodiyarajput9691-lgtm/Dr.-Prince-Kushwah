import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { CLINIC_STATS } from '../data/reviews';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Smile Gallery', href: '#gallery' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#123C3A]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Zone with custom tooth icon */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-[#123C3A] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#123C3A] flex items-center justify-center text-[#FAF9F6] shadow-sm group-hover:scale-105 transition-transform duration-200">
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
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#123C3A] leading-tight">
                Dr. Prince Kushwah
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#C6A56B] font-semibold -mt-0.5">
                Dental Clinic · Ujjain
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252C2B]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#123C3A] whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A56B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_STATS.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#123C3A] hover:bg-[#E7EFEB] rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Call Clinic Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span className="font-mono tabular-nums">{CLINIC_STATS.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF9F6] bg-[#123C3A] hover:bg-[#1a4a47] rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#FAF9F6] bg-[#123C3A] rounded-md"
            >
              <Calendar className="w-3 h-3 text-[#C6A56B]" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#123C3A] hover:bg-[#E7EFEB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#123C3A]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-[#123C3A]/10 shadow-lg px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#252C2B] hover:text-[#123C3A] py-1 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_STATS.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#E7EFEB] text-[#123C3A] font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#C6A56B]" />
              <span>Call: {CLINIC_STATS.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#123C3A] text-[#FAF9F6] font-semibold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#C6A56B]" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
