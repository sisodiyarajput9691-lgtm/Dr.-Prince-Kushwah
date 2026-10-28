import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  ShieldCheck, 
  Sparkles,
  Stethoscope,
  Eye,
  Sliders,
  Layers
} from 'lucide-react';

export const SmileGallery: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveItemIndex(null);
  };

  const handleNext = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [activeItemIndex]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(
        (activeItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  }, [activeItemIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, handleNext, handlePrev]);

  const renderIcon = (type: GalleryItem['iconType']) => {
    switch (type) {
      case 'chair':
        return <Layers className="w-8 h-8 text-[#C6A56B]" />;
      case 'xray':
        return <Eye className="w-8 h-8 text-[#C6A56B]" />;
      case 'shield':
        return <ShieldCheck className="w-8 h-8 text-[#C6A56B]" />;
      case 'lounge':
        return <Sparkles className="w-8 h-8 text-[#C6A56B]" />;
      case 'tools':
        return <Sliders className="w-8 h-8 text-[#C6A56B]" />;
      case 'stethoscope':
        return <Stethoscope className="w-8 h-8 text-[#C6A56B]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#C6A56B]" />;
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#E7EFEB]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
            <span>Clinic Architecture & Technology</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123C3A] text-balance">
            The Clinic Environment. <br />
            <span className="italic font-normal text-[#C6A56B]">Sterility, Comfort & Care.</span>
          </h2>

          <p className="text-base text-[#252C2B]/75 leading-relaxed">
            Take a visual tour of our facilities at 5 No. Naka, Agar Road, Ujjain. Every suite is calibrated for clinical hygiene, diagnostic accuracy, and patient tranquility.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#123C3A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Presentation Area */}
              <div className={`relative aspect-[16/11] bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between text-white overflow-hidden`}>
                
                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A56B] bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {item.badge}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Central Emblem & Line Illustration */}
                <div className="my-auto text-center space-y-2 z-10 py-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {renderIcon(item.iconType)}
                  </div>
                </div>

                {/* Visual Title in Frame */}
                <div className="z-10">
                  <div className="text-xs text-[#C6A56B] font-mono uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#FAF9F6] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Geometric Overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
              </div>

              {/* Card Bottom Meta Description */}
              <div className="p-5 bg-white">
                <p className="text-xs text-[#252C2B]/75 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-[#123C3A] font-medium">
                  <span className="text-[11px] text-[#252C2B]/50 font-mono">Click to inspect</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[#C6A56B] font-bold">
                    View Fullscreen →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Responsible Transparency Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-white/80 border border-[#123C3A]/10 text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#252C2B]/70 leading-relaxed">
            <span className="font-semibold text-[#123C3A]">Respecting Patient Privacy:</span> Showcasing verified clinic treatment rooms, modern equipment, and sterilization protocols at Dr. Prince Kushwah’s practice. Identifiable patient photographs are protected under clinical privacy standards and are never fabricated.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation: Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-2xl w-full bg-[#123C3A] rounded-3xl overflow-hidden border border-white/20 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Visual Header Graphic */}
            <div className={`p-8 sm:p-12 bg-gradient-to-br ${GALLERY_ITEMS[activeItemIndex].gradient} flex flex-col justify-between min-h-[300px] sm:min-h-[360px] relative`}>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C6A56B] bg-black/40 px-3.5 py-1 rounded-full border border-white/15">
                  {GALLERY_ITEMS[activeItemIndex].badge}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {activeItemIndex + 1} of {GALLERY_ITEMS.length}
                </span>
              </div>

              <div className="my-auto text-center space-y-3 py-6">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-white/10 border-2 border-[#C6A56B] flex items-center justify-center shadow-lg">
                  {renderIcon(GALLERY_ITEMS[activeItemIndex].iconType)}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white max-w-md mx-auto">
                  {GALLERY_ITEMS[activeItemIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C6A56B] font-medium">
                  {GALLERY_ITEMS[activeItemIndex].subtitle}
                </p>
              </div>

              <div className="text-xs text-white/60 font-mono">
                Dr. Prince Kushwah Dental Clinic · Ujjain
              </div>
            </div>

            {/* Description Body */}
            <div className="p-6 sm:p-8 bg-[#FAF9F6] text-[#252C2B]">
              <h4 className="text-xs font-bold text-[#123C3A] uppercase tracking-wider mb-2">
                About This Clinical Facility:
              </h4>
              <p className="text-sm text-[#252C2B]/85 leading-relaxed">
                {GALLERY_ITEMS[activeItemIndex].description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-[#123C3A]/10 flex items-center justify-between text-xs text-[#252C2B]/60">
                <span>Use keyboard arrows ← → to navigate</span>
                <button
                  onClick={handleCloseLightbox}
                  className="font-semibold text-[#123C3A] hover:underline"
                >
                  Close View
                </button>
              </div>
            </div>

          </div>

        </div>
      )}
    </section>
  );
};
