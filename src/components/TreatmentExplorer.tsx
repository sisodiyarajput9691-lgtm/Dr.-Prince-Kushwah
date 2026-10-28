import React, { useState, useMemo } from 'react';
import { 
  TREATMENTS, 
  TREATMENT_CATEGORIES, 
  Treatment, 
  TreatmentCategory 
} from '../data/treatments';
import { CLINIC_STATS } from '../data/reviews';
import { 
  Search, 
  Sparkles, 
  Check, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  X, 
  Info,
  Calendar,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface TreatmentExplorerProps {
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

export const TreatmentExplorer: React.FC<TreatmentExplorerProps> = ({ 
  onSelectTreatmentForBooking 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory>('All Treatments');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const filteredTreatments = useMemo(() => {
    return TREATMENTS.filter((t) => {
      const matchesCategory = 
        selectedCategory === 'All Treatments' || t.category === selectedCategory;
      const matchesSearch = 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppEnquiry = (treatmentName: string) => {
    const text = encodeURIComponent(
      `Hello Dr. Prince Kushwah Dental Clinic, I would like to enquire about: "${treatmentName}". Could you please provide details on appointment availability?`
    );
    window.open(`${CLINIC_STATS.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
            <span>Interactive Dental Care Directory</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123C3A] text-balance">
            Complete Care for <span className="italic font-normal text-[#C6A56B]">Healthier Smiles.</span>
          </h2>
          
          <p className="text-base text-[#252C2B]/75 leading-relaxed">
            From routine preventive checkups to complex maxillofacial trauma management, Dr. Prince Kushwah provides attentive clinical care across 22 specialized treatment options.
          </p>
        </div>

        {/* Filter Controls: Interactive Category Tabs + Search Bar */}
        <div className="space-y-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {TREATMENT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#123C3A] text-[#FAF9F6] shadow-sm font-semibold'
                      : 'bg-white text-[#252C2B]/80 hover:bg-[#E7EFEB] border border-[#123C3A]/10'
                  }`}
                >
                  {category}
                  {category === 'All Treatments' && (
                    <span className="ml-1.5 opacity-70 font-mono text-[11px]">(22)</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#123C3A]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search treatments (e.g. root canal, whitening, implants, trauma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-[#123C3A]/15 focus:outline-none focus:ring-2 focus:ring-[#123C3A] focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          
          {/* Active filter counter */}
          <div className="text-center text-xs text-[#252C2B]/60 font-mono tabular-nums">
            Showing {filteredTreatments.length} of 22 treatments
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl p-6 border border-[#123C3A]/10 shadow-sm hover:shadow-md hover:border-[#123C3A]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Unboxed metadata and action */}
                <div className="flex items-center justify-between text-xs text-[#252C2B]/60 mb-3">
                  <span className="font-medium text-[#C6A56B] uppercase tracking-wider text-[11px]">
                    {treatment.category}
                  </span>
                  {treatment.duration && (
                    <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-[#123C3A]/50" />
                      {treatment.duration}
                    </span>
                  )}
                </div>

                {/* Treatment Title */}
                <h3 className="font-serif text-xl font-bold text-[#123C3A] mb-2 group-hover:text-[#1c5552] transition-colors">
                  {treatment.name}
                </h3>

                {/* Tagline / patient-friendly excerpt */}
                <p className="text-xs sm:text-sm text-[#252C2B]/75 leading-relaxed mb-4 line-clamp-3">
                  {treatment.description}
                </p>

                {/* Key clinical benefits */}
                <div className="space-y-1.5 mb-6">
                  {treatment.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#252C2B]/80">
                      <Check className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Details & WhatsApp Enquiry */}
              <div className="pt-4 border-t border-[#123C3A]/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalTreatment(treatment)}
                  className="text-xs font-semibold text-[#123C3A] hover:text-[#C6A56B] transition-colors inline-flex items-center gap-1 py-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Learn More</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppEnquiry(treatment.name)}
                    className="p-2 text-[#123C3A] bg-[#E7EFEB] hover:bg-[#123C3A] hover:text-white rounded-lg transition-colors"
                    title={`Enquire about ${treatment.name} on WhatsApp`}
                    aria-label={`Enquire about ${treatment.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectTreatmentForBooking(treatment.name)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#FAF9F6] bg-[#123C3A] hover:bg-[#1a4a47] rounded-lg transition-colors"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3 text-[#C6A56B]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state when no treatments match search */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#123C3A]/20 p-8 max-w-md mx-auto">
            <AlertCircle className="w-8 h-8 text-[#C6A56B] mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-[#123C3A]">No treatments found</h4>
            <p className="text-xs text-[#252C2B]/70 mt-1 mb-4">
              We couldn't find any treatment matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Treatments');
              }}
              className="text-xs font-semibold text-[#123C3A] underline"
            >
              Reset filters to view all 22 services
            </button>
          </div>
        )}

        {/* Final CTA Banner: "Not Sure Which Treatment You Need?" */}
        <div className="mt-14 bg-gradient-to-r from-[#123C3A] to-[#1c5552] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C6A56B] flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Personalized Consultation</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF9F6]">
                Not Sure Which Treatment You Need?
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF9F6]/80 leading-relaxed">
                Contact Dr. Prince Kushwah’s clinic to discuss your specific dental symptoms or concern. We take time to evaluate your oral health before suggesting any treatment roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => onSelectTreatmentForBooking('General Dental Consultation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FAF9F6] text-[#123C3A] font-semibold text-xs hover:bg-[#E7EFEB] transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>Plan a Visit</span>
              </button>
              
              <button
                onClick={() => handleWhatsAppEnquiry('General Consultation / Oral Checkup')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#FAF9F6] font-semibold text-xs hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Treatment Detail Modal */}
      {activeModalTreatment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalTreatment(null)}
        >
          <div 
            className="bg-[#FAF9F6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalTreatment(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#123C3A] rounded-full hover:bg-[#E7EFEB] transition-colors"
              aria-label="Close treatment details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C6A56B]">
                {activeModalTreatment.category}
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#123C3A]">
                {activeModalTreatment.name}
              </h3>

              <p className="text-xs font-medium text-[#123C3A]/70 italic">
                "{activeModalTreatment.tagline}"
              </p>

              <p className="text-sm text-[#252C2B]/85 leading-relaxed">
                {activeModalTreatment.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-[#123C3A] uppercase tracking-wider mb-2">
                  Key Patient Benefits:
                </h4>
                <div className="space-y-2">
                  {activeModalTreatment.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#252C2B]">
                      <Check className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeModalTreatment.duration && (
                <div className="p-3 bg-white rounded-lg border border-[#123C3A]/10 text-xs flex items-center justify-between">
                  <span className="text-[#252C2B]/70">Typical Session Duration:</span>
                  <span className="font-mono font-semibold text-[#123C3A]">
                    {activeModalTreatment.duration}
                  </span>
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const treatmentName = activeModalTreatment.name;
                    setActiveModalTreatment(null);
                    onSelectTreatmentForBooking(treatmentName);
                  }}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#123C3A] text-white text-xs font-semibold hover:bg-[#1a4a47] transition-colors text-center"
                >
                  Book Appointment for This Treatment
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppEnquiry(activeModalTreatment.name);
                    setActiveModalTreatment(null);
                  }}
                  className="py-3 px-4 rounded-lg bg-[#E7EFEB] text-[#123C3A] text-xs font-semibold hover:bg-[#d9e5e0] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
