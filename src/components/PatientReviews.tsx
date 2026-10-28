import React from 'react';
import { Star, ExternalLink, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_STATS } from '../data/reviews';

export const PatientReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
            <span>Verified Google Reviews</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123C3A] text-balance">
            Patient Experiences <span className="italic font-normal text-[#C6A56B]">Matter.</span>
          </h2>

          <p className="text-base text-[#252C2B]/75 leading-relaxed">
            Real feedback from patients in Ujjain and surrounding regions who entrusted their dental health and smiles to Dr. Prince Kushwah.
          </p>
        </div>

        {/* Google Rating Overview Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123C3A]/10 shadow-sm max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Big 5.0 Rating Number */}
            <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-[#123C3A]/10 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#C6A56B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#C6A56B]" />
                ))}
              </div>
              <div className="font-serif text-5xl font-bold text-[#123C3A] font-mono tabular-nums">
                5.0 <span className="text-2xl font-normal text-[#252C2B]/50">/ 5.0</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#123C3A]">
                Google Business Profile Rating
              </div>
              <div className="text-xs text-[#252C2B]/70 font-mono tabular-nums">
                Based on approximately 1,378 verified patient ratings
              </div>
            </div>

            {/* Distribution and Google CTA */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-2">
                {[
                  { star: '5 Star', pct: '98%', count: '1,350+' },
                  { star: '4 Star', pct: '2%', count: '28' },
                  { star: '3 Star', pct: '0%', count: '0' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <span className="w-12 text-[#252C2B]/70 font-medium">{row.star}</span>
                    <div className="flex-1 h-2 rounded-full bg-[#E7EFEB] overflow-hidden">
                      <div
                        className="h-full bg-[#123C3A] rounded-full"
                        style={{ width: row.pct }}
                      />
                    </div>
                    <span className="w-12 text-right font-mono text-[#252C2B]/60">{row.count}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={CLINIC_STATS.googleReviewSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#123C3A] text-[#FAF9F6] text-xs font-semibold hover:bg-[#1a4a47] transition-colors"
                >
                  <span>Search Clinic on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C6A56B]" />
                </a>

                <span className="text-[11px] text-[#252C2B]/60 text-center sm:text-right">
                  [Verified Google profile link placeholder]
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Patient Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#123C3A]/10 shadow-sm flex flex-col justify-between hover:border-[#123C3A]/30 transition-all duration-200"
            >
              <div>
                {/* Header: Stars & Verification */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-[#C6A56B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A56B]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#123C3A] font-semibold bg-[#E7EFEB] px-2 py-0.5 rounded-md">
                    <CheckCircle className="w-3 h-3 text-[#123C3A]" />
                    <span>{review.verifiedSource}</span>
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif text-base font-bold text-[#123C3A] mb-3">
                  "{review.highlightPhrase}"
                </h3>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#252C2B]/80 leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Author Lockup */}
              <div className="pt-4 border-t border-[#123C3A]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#123C3A] text-white flex items-center justify-center font-bold text-xs">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#123C3A]">
                      {review.patientName}
                    </div>
                    <div className="text-[11px] text-[#252C2B]/60">
                      {review.treatmentTag}
                    </div>
                  </div>
                </div>

                <Quote className="w-5 h-5 text-[#C6A56B]/30" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
