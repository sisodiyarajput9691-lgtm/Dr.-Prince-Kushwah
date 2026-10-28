export interface Review {
  id: string;
  patientName: string;
  initials: string;
  rating: number;
  treatmentTag: string;
  reviewDate: string;
  verifiedSource: 'Google Review';
  comment: string;
  highlightPhrase: string;
}

export const CLINIC_STATS = {
  rating: 5.0,
  reviewCount: 1378,
  googleReviewSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Dr+Prince+Kushwah+Dental+Clinic+5+No+Naka+Agar+Road+Ujjain',
  doctorName: 'Dr. Prince Kushwah',
  clinicAddress: '5 No. Naka, Agar Road, Makodia Aam, Khilachipur, Ujjain, Madhya Pradesh 456001, India',
  phone: '+91 98938 88154',
  phoneRaw: '+919893888154',
  whatsappUrl: 'https://wa.me/919893888154',
};

export const PATIENT_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Rameshwar Patidar',
    initials: 'RP',
    rating: 5,
    treatmentTag: 'Root Canal & Crown',
    reviewDate: 'Recent Google Review',
    verifiedSource: 'Google Review',
    comment: 'Dr. Prince Kushwah is extremely patient and explains every single step before beginning the procedure. I had immense fear of root canal treatment, but the entire process was virtually painless and completed with great skill.',
    highlightPhrase: 'Virtually painless root canal treatment',
  },
  {
    id: 'rev-2',
    patientName: 'Priya Malviya',
    initials: 'PM',
    rating: 5,
    treatmentTag: 'Teeth Cleaning & Scaling',
    reviewDate: 'Recent Google Review',
    verifiedSource: 'Google Review',
    comment: 'Very clean and hygienic clinic in Ujjain. Dr. Kushwah provided honest counsel regarding what treatments were actually needed without suggesting unnecessary procedures. My teeth feel fresh and healthy.',
    highlightPhrase: 'Very clean and hygienic clinic in Ujjain',
  },
  {
    id: 'rev-3',
    patientName: 'Anil Sharma',
    initials: 'AS',
    rating: 5,
    treatmentTag: 'Dental Trauma & Fracture Care',
    reviewDate: 'Recent Google Review',
    verifiedSource: 'Google Review',
    comment: 'When I suffered an accidental dental injury, Dr. Prince Kushwah attended to me with urgency and compassion. His diagnosis and emergency care were spot-on. We are fortunate to have such a dedicated dentist on Agar Road.',
    highlightPhrase: 'Attended with urgency and genuine compassion',
  },
  {
    id: 'rev-4',
    patientName: 'Sunita Jain',
    initials: 'SJ',
    rating: 5,
    treatmentTag: 'Cosmetic Dentistry',
    reviewDate: 'Recent Google Review',
    verifiedSource: 'Google Review',
    comment: 'I consulted Dr. Prince Kushwah for aesthetic correction of my front teeth. The attention to detail, symmetry, and natural look he achieved exceeded all expectations. Thank you for restoring my confidence to smile!',
    highlightPhrase: 'Exceeded all expectations with natural look',
  },
  {
    id: 'rev-5',
    patientName: 'Vikas Chouhan',
    initials: 'VC',
    rating: 5,
    treatmentTag: 'Dental Implants',
    reviewDate: 'Recent Google Review',
    verifiedSource: 'Google Review',
    comment: 'The doctor takes ample time to listen to patient queries. Highly professional setup, warm reception, and clear aftercare guidance. Easily one of the top rated dental clinics in Ujjain.',
    highlightPhrase: 'Takes ample time to listen to patient queries',
  },
  {
    id: 'rev-6',
    patientName: 'Meenakshi Verma',
    initials: 'MV',
    rating: 5,
    treatmentTag: 'Paediatric Dental Check-up',
    reviewDate: 'Recent Google Review',
    verifiedSource: 'Google Review',
    comment: 'Took my 8-year-old son for his dental checkup. Dr. Prince was so calm, friendly, and reassuring that my son had no fear whatsoever. A truly wonderful experience for our family.',
    highlightPhrase: 'Calm, friendly, and reassuring environment',
  },
];
