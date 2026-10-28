/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { TreatmentExplorer } from './components/TreatmentExplorer';
import { SmileGallery } from './components/SmileGallery';
import { PatientReviews } from './components/PatientReviews';
import { AppointmentBooking } from './components/AppointmentBooking';
import { LocationContact } from './components/LocationContact';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('General Dental Consultation');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);

  const scrollToBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const treatmentsElement = document.getElementById('treatments');
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#252C2B] selection:bg-[#123C3A] selection:text-[#FAF9F6] relative">
      {/* Top Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main>
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreClick={scrollToTreatments}
        />

        {/* Trust & Credibility Strip */}
        <TrustStrip />

        {/* About Dr. Prince Kushwah */}
        <AboutSection onContactClick={scrollToContact} />

        {/* Signature Interactive Feature: 22 Treatments Explorer */}
        <TreatmentExplorer
          onSelectTreatmentForBooking={(treatmentName) => scrollToBooking(treatmentName)}
        />

        {/* Smile Gallery & Clinic Facilities with Lightbox */}
        <SmileGallery />

        {/* Patient Reviews & Google Rating Overview */}
        <PatientReviews />

        {/* Appointment Booking Experience & WhatsApp Dispatch */}
        <AppointmentBooking preselectedTreatment={selectedTreatment} />

        {/* Location, Contact & Google Maps Directions */}
        <LocationContact onBookClick={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onCategoryClick={() => scrollToTreatments()}
      />

      {/* Floating WhatsApp Action */}
      <FloatingActions />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
