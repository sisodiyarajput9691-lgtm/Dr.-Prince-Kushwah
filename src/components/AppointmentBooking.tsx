import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { CLINIC_STATS } from '../data/reviews';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface AppointmentBookingProps {
  preselectedTreatment?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  preselectedTreatment = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: preselectedTreatment || 'General Dental Consultation',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update treatment if parent prop changes
  React.useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  // Today's date in YYYY-MM-DD format for min attribute
  const todayDateString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }

    // Phone validation: Indian numbers 10 digits (allowing +91 or leading 0)
    const cleanedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    const phoneRegex = /^(?:91)?[6-9]\d{9}$/;
    if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date for your visit.';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge the appointment enquiry notice.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate WhatsApp text
    const messageLines = [
      `*APPOINTMENT ENQUIRY — DR. PRINCE KUSHWAH DENTAL CLINIC*`,
      `• Patient Name: ${formData.name.trim()}`,
      `• Contact Number: ${formData.phone.trim()}`,
      `• Requested Treatment: ${formData.treatment}`,
      `• Preferred Date: ${formData.preferredDate}`,
      `• Preferred Time: ${formData.preferredTime}`,
    ];

    if (formData.message.trim()) {
      messageLines.push(`• Notes / Dental Concern: ${formData.message.trim()}`);
    }

    messageLines.push(``);
    messageLines.push(`(Please confirm if this slot is available at the Ujjain clinic. Thank you!)`);

    const fullText = messageLines.join('\n');
    const encodedText = encodeURIComponent(fullText);
    const waUrl = `${CLINIC_STATS.whatsappUrl}?text=${encodedText}`;

    setGeneratedWhatsAppUrl(waUrl);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      treatment: 'General Dental Consultation',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
      message: '',
      consent: true,
    });
    setErrors({});
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#123C3A]">
            <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
            <span>Schedule Your Visit</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123C3A] text-balance">
            Let's Plan Your <span className="italic font-normal text-[#C6A56B]">Visit.</span>
          </h2>

          <p className="text-base text-[#252C2B]/75 leading-relaxed">
            Submit your appointment enquiry below. Dr. Prince Kushwah’s clinic will review slot availability and confirm your visit promptly via WhatsApp or phone.
          </p>
        </div>

        {/* Main Booking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#123C3A]/10 shadow-lg relative overflow-hidden">
          
          {/* Subtle curved top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#123C3A] via-[#C6A56B] to-[#123C3A] absolute top-0 left-0" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#123C3A] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Patient Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border text-sm bg-[#FAF9F6] text-[#252C2B] focus:outline-none focus:ring-2 focus:ring-[#123C3A] transition-colors ${
                      errors.name ? 'border-red-400' : 'border-[#123C3A]/15'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#123C3A] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Mobile Number (WhatsApp Preferred) *</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-500 font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98938 XXXXX"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg border text-sm bg-[#FAF9F6] text-[#252C2B] focus:outline-none focus:ring-2 focus:ring-[#123C3A] transition-colors font-mono tabular-nums ${
                        errors.phone ? 'border-red-400' : 'border-[#123C3A]/15'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Treatment / Reason for Visit */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#123C3A] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Reason for Visit / Treatment *</span>
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#123C3A]/15 text-sm bg-[#FAF9F6] text-[#252C2B] focus:outline-none focus:ring-2 focus:ring-[#123C3A] transition-colors"
                  >
                    <option value="General Dental Consultation">General Dental Consultation & Checkup</option>
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.category})
                      </option>
                    ))}
                    <option value="Acute Dental Pain / Emergency">Acute Dental Pain / Emergency Visit</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#123C3A] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Preferred Visit Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={todayDateString}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border text-sm bg-[#FAF9F6] text-[#252C2B] focus:outline-none focus:ring-2 focus:ring-[#123C3A] transition-colors ${
                      errors.preferredDate ? 'border-red-400' : 'border-[#123C3A]/15'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#123C3A] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Preferred Time Window *</span>
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#123C3A]/15 text-sm bg-[#FAF9F6] text-[#252C2B] focus:outline-none focus:ring-2 focus:ring-[#123C3A] transition-colors"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>

                {/* Optional Message or Dental Concern */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#123C3A] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Optional Note / Dental Concern</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sensitivity to cold, toothache since 2 days"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#123C3A]/15 text-sm bg-[#FAF9F6] text-[#252C2B] focus:outline-none focus:ring-2 focus:ring-[#123C3A] transition-colors"
                  />
                </div>

              </div>

              {/* Consent and Confirmation Notice */}
              <div className="p-4 rounded-xl bg-[#E7EFEB]/50 border border-[#123C3A]/10 space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded text-[#123C3A] focus:ring-[#123C3A]"
                  />
                  <span className="text-xs text-[#252C2B]/80 leading-relaxed">
                    I understand this is an appointment enquiry request. The clinic will review schedule availability and confirm the final appointment via WhatsApp or telephone call.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-[#FAF9F6] bg-[#123C3A] hover:bg-[#1a4a47] rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <Send className="w-4 h-4 text-[#C6A56B]" />
                  <span>Prepare Appointment Enquiry</span>
                </button>

                <div className="text-xs text-[#252C2B]/60 text-center sm:text-right">
                  Clinic Contact: <span className="font-mono font-bold text-[#123C3A]">{CLINIC_STATS.phone}</span>
                </div>
              </div>

            </form>
          ) : (
            /* Clear Success & WhatsApp Dispatch State */
            <div className="py-8 text-center space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#E7EFEB] text-[#123C3A] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-[#C6A56B]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#123C3A]">
                  Appointment Enquiry Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-[#252C2B]/75 leading-relaxed">
                  Your appointment details have been organized. To notify Dr. Prince Kushwah’s clinic immediately, click the button below to send your request via WhatsApp.
                </p>
              </div>

              {/* Details Summary Card */}
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#123C3A]/10 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-[#252C2B]/60">Patient Name:</span>
                  <span className="font-semibold text-[#123C3A]">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-[#252C2B]/60">Mobile Number:</span>
                  <span className="font-mono font-semibold text-[#123C3A]">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-[#252C2B]/60">Selected Treatment:</span>
                  <span className="font-semibold text-[#123C3A]">{formData.treatment}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-[#252C2B]/60">Preferred Date:</span>
                  <span className="font-mono font-semibold text-[#123C3A]">{formData.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#252C2B]/60">Preferred Window:</span>
                  <span className="font-semibold text-[#123C3A]">{formData.preferredTime}</span>
                </div>
              </div>

              {/* Clear notice that appointment must be confirmed */}
              <div className="text-[11px] text-[#252C2B]/60 bg-yellow-50/80 border border-yellow-200/80 p-3 rounded-lg text-left">
                <strong>Important Notice:</strong> Submitting an enquiry does not constitute a guaranteed booking. The clinic will confirm actual availability based on the daily operating schedule.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba59] transition-colors shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Enquiry via WhatsApp (+91 98938 88154)</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-lg border border-[#123C3A]/20 text-[#123C3A] text-xs font-semibold hover:bg-[#E7EFEB] transition-colors"
                >
                  Start Over
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
