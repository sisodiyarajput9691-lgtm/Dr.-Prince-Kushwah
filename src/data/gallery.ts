export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Clinic Operatory' | 'Diagnostic Suite' | 'Sterilization' | 'Patient Comfort';
  description: string;
  badge: string;
  gradient: string;
  iconType: 'chair' | 'xray' | 'shield' | 'lounge' | 'tools' | 'stethoscope';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Ergonomic Dental Operatory',
    subtitle: 'Designed for patient comfort and surgical precision',
    category: 'Clinic Operatory',
    description: 'Our primary treatment suite features an ergonomic dental chair with integrated micromotors, shadowless LED illumination, and multi-positional cervical support to ensure comfort during lengthy procedures.',
    badge: 'Clinical Operatory',
    gradient: 'from-[#123C3A]/90 to-[#1e5451]',
    iconType: 'chair',
  },
  {
    id: 'gal-2',
    title: 'Digital Radiography & Diagnostic Station',
    subtitle: 'Low-radiation high-definition imaging',
    category: 'Diagnostic Suite',
    description: 'Equipped with digital radiography systems enabling instantaneous visualization of tooth roots, periodontal bone levels, and mandibular anatomy while minimizing radiation exposure.',
    badge: 'Diagnostics',
    gradient: 'from-[#1a4a47]/90 to-[#123C3A]',
    iconType: 'xray',
  },
  {
    id: 'gal-3',
    title: 'Medical-Grade Sterilization Protocols',
    subtitle: 'Class-B autoclaving & vacuum sealed instruments',
    category: 'Sterilization',
    description: 'We follow stringent multi-step infection control protocols. All surgical and restorative instruments undergo ultrasonic scrubbing, enzymatic cleaning, and high-pressure autoclaving in individual sealed pouches.',
    badge: 'Hygiene Standard',
    gradient: 'from-[#234b49]/90 to-[#173a38]',
    iconType: 'shield',
  },
  {
    id: 'gal-4',
    title: 'Tranquil Patient Consultation Lounge',
    subtitle: 'Welcoming, peaceful environment designed to ease anxiety',
    category: 'Patient Comfort',
    description: 'A serene, air-conditioned waiting environment with comfortable seating, warm lighting, and refreshing amenities, thoughtfully planned to make every dental visit stress-free from the moment you arrive.',
    badge: 'Comfort & Care',
    gradient: 'from-[#295956]/90 to-[#123C3A]',
    iconType: 'lounge',
  },
  {
    id: 'gal-5',
    title: 'Precision Endodontic & Restorative Trays',
    subtitle: 'Organized, sterilized, single-patient preparation',
    category: 'Clinic Operatory',
    description: 'Every clinical tray is individually prepared with sterile rotary endodontic files, biomimetic composite kits, and micro-precision applicators tailored specifically to your scheduled treatment.',
    badge: 'Precision Setup',
    gradient: 'from-[#1b4341]/90 to-[#143d3b]',
    iconType: 'tools',
  },
  {
    id: 'gal-6',
    title: 'Emergency Trauma & Surgical Readiness',
    subtitle: 'Equipped for prompt maxillofacial & mandibular care',
    category: 'Diagnostic Suite',
    description: 'Immediate surgical preparedness for acute dental emergencies, avulsed teeth stabilization, soft-tissue repair, and initial management of mandibular fractures.',
    badge: 'Emergency Care',
    gradient: 'from-[#123C3A]/95 to-[#244f4d]',
    iconType: 'stethoscope',
  },
];
