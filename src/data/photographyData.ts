export interface LocationItem {
  id: string;
  name: string;
  area: string;
  borough: string;
  description: string;
  bestTime: string;
  sessionTypes: string[];
  image: string;
  featured: boolean;
  highlights: string[];
  coordinates: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  locationId: string;
  locationName: string;
  category: 'couples' | 'portraits';
  categoryLabel: string;
  image: string;
  gear: string;
  settings: string;
  story: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: string;
  locationsCount: number;
  editedPhotos: number;
  outfitChanges: number;
  features: string[];
  popular?: boolean;
}

export interface AddOnItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'booking' | 'locations' | 'weather' | 'delivery';
}

export const NYC_LOCATIONS: LocationItem[] = [
  {
    id: 'central-park',
    name: 'Central Park & Bow Bridge',
    area: 'Upper West / East Side',
    borough: 'Manhattan',
    description: 'Timeless NYC romance surrounded by natural trees, serene lake waters, classic stone arches, and the elegant curves of Bow Bridge overlooking San Remo towers.',
    bestTime: 'Early Morning (7:00 AM - 9:00 AM)',
    sessionTypes: ['Romantic Couples', 'Solo Portraits', 'Wedding Portraits', 'Maternity'],
    image: 'images/central_park.jpg',
    featured: true,
    highlights: ['Bow Bridge Lake Reflection', 'Bethesda Terrace Arcade', 'The Mall Elm Tree Canopy', 'Conservatory Water'],
    coordinates: '40.7757° N, 73.9712° W'
  },
  {
    id: 'soho',
    name: 'SoHo Cast-Iron District',
    area: 'Lower Manhattan',
    borough: 'Manhattan',
    description: 'Urban architectural aesthetic featuring 19th-century cast-iron architecture, cobblestone avenues, black wrought iron fire escapes, and chic store fronts.',
    bestTime: 'Morning (8:00 AM - 10:30 AM)',
    sessionTypes: ['Street Portraits', 'Personal Branding', 'Modeling Portfolios', 'Chic Streetwear'],
    image: 'images/soho_fashion.jpg',
    featured: true,
    highlights: ['Greene St Cast-Iron Lofts', 'Spring Street Cobblestones', 'Black Fire Escape Architecture', 'Chic Urban Vibe'],
    coordinates: '40.7233° N, 74.0030° W'
  },
  {
    id: 'brooklyn-bridge',
    name: 'Brooklyn Bridge Walkway',
    area: 'East River Span',
    borough: 'Manhattan / Brooklyn',
    description: 'Gothic stone arches and geometric steel cables floating high above the East River with Lower Manhattan financial district towering in the light.',
    bestTime: 'Sunrise (6:00 AM - 7:30 AM strictly recommended)',
    sessionTypes: ['Anniversary & Couples', 'Fine Art Portraits', 'Graduation', 'Fitness & Lifestyle'],
    image: 'images/brooklyn_bridge.jpg',
    featured: false,
    highlights: ['Gothic Stone Towers', 'Wooden Promenade Planks', 'Lower Manhattan Skyline', 'Sunrise Light Flare'],
    coordinates: '40.7061° N, 73.9969° W'
  },
  {
    id: 'dumbo',
    name: 'DUMBO & Washington St',
    area: 'Brooklyn Waterfront',
    borough: 'Brooklyn',
    description: 'Classic NYC setting featuring cobblestone streets framed by historic red brick loft buildings with the Manhattan Bridge rising in the backdrop.',
    bestTime: 'Sunrise to 8:30 AM or Golden Hour (1 hr before sunset)',
    sessionTypes: ['Couples', 'Solo Portraits', 'Anniversary Shoots', 'Street Portraits'],
    image: 'images/hero_dumbo.jpg',
    featured: false,
    highlights: ['Washington St Bridge Framing', 'Jane’s Carousel Waterfront', 'Pebble Beach Skyline Views', 'Classic Cobblestone Alleyways'],
    coordinates: '40.7033° N, 73.9881° W'
  },
  {
    id: 'gantry-park',
    name: 'Gantry Plaza State Park',
    area: 'Hunters Point Waterfront',
    borough: 'Queens (LIC)',
    description: 'Unobstructed panoramic views of the Midtown Manhattan skyline, East River piers, manicured lawns, and the vintage red neon Pepsi-Cola sign.',
    bestTime: 'Sunset to Twilight (Golden & Blue Hour)',
    sessionTypes: ['Couples', 'Family Portraits', 'Personal Branding', 'Sunset Romance'],
    image: 'images/gantry_park.jpg',
    featured: false,
    highlights: ['Historic Pepsi-Cola Neon Sign', 'Midtown Skyline (Empire State & Chrysler)', 'Restored Industrial Gantries', 'Waterfront Wooden Loungers'],
    coordinates: '40.7456° N, 73.9582° W'
  },
  {
    id: 'times-square',
    name: 'Times Square & Neon Lights',
    area: 'Midtown Theatre District',
    borough: 'Manhattan',
    description: 'Vibrant, high-contrast urban energy illuminated by thousands of multi-colored digital billboards, taxi yellow flashes, and dramatic city lights.',
    bestTime: 'Night / Evening Twilight (8:00 PM - 11:00 PM)',
    sessionTypes: ['Night Portraits', 'Celebration Sessions', 'Music/Artist Portfolios', 'High Contrast Urban'],
    image: 'images/times_square.jpg',
    featured: false,
    highlights: ['Multi-colored Neon Glow', 'Yellow Cab Motion Blurs', 'Red Glass Stairs', 'Urban Pavement Reflections'],
    coordinates: '40.7580° N, 73.9855° W'
  }
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Autumn Golden Hour Promenade',
    client: 'David & Sarah',
    locationId: 'dumbo',
    locationName: 'DUMBO, Brooklyn',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'images/hero_dumbo.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/800s @ f/2.8, ISO 100',
    story: 'Captured on a crisp November evening. The golden hour sun peeked right through the Manhattan Bridge superstructure, creating a warm magical glow.'
  },
  {
    id: 'p2',
    title: 'Midtown Skyline Sunset Magic',
    client: 'Elena Vance',
    locationId: 'gantry-park',
    locationName: 'Gantry Plaza State Park',
    category: 'portraits',
    categoryLabel: 'Solo Portraits',
    image: 'images/gantry_park.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/1250s @ f/2.8, ISO 100',
    story: 'Elena requested a sleek branding shoot with the iconic Pepsi-Cola sign and Empire State building glowing in sunset tones.'
  },
  {
    id: 'p3',
    title: 'Chic Cast-Iron Avenue',
    client: 'Maya Lin',
    locationId: 'soho',
    locationName: 'SoHo, Manhattan',
    category: 'portraits',
    categoryLabel: 'Solo Portraits',
    image: 'images/soho_fashion.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/2000s @ f/2.8, ISO 100',
    story: 'Morning light falling across cobblestones on Greene Street in SoHo. The classic trench coat and autumn tones harmonized effortlessly with historical cast-iron facades.'
  },
  {
    id: 'p4',
    title: 'Bow Bridge Autumn Walk',
    client: 'Michael & Claire',
    locationId: 'central-park',
    locationName: 'Central Park, NYC',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'images/central_park.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/640s @ f/2.8, ISO 200',
    story: 'A romantic couples walk captured along the lakeside bank of Bow Bridge amidst peak autumn foliage.'
  },
  {
    id: 'p5',
    title: 'Sunrise Archway Journey',
    client: 'James & Jessica',
    locationId: 'brooklyn-bridge',
    locationName: 'Brooklyn Bridge Walkway',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'images/brooklyn_bridge.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/1000s @ f/2.8, ISO 100',
    story: 'We met at 6:15 AM at the Brooklyn Bridge entrance. Having the bridge almost entirely to ourselves at sunrise produced this unforgettable cinematic portrait.'
  },
  {
    id: 'p6',
    title: 'Midnight Electric Glow',
    client: 'Sienna Miller',
    locationId: 'times-square',
    locationName: 'Times Square, Manhattan',
    category: 'portraits',
    categoryLabel: 'Solo Portraits',
    image: 'images/times_square.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/250s @ f/2.8, ISO 400',
    story: 'Shot right after a fresh night rain in Times Square. The wet asphalt reflected neon cyan and crimson lights into a cinematic dream aesthetic.'
  }
];

export const SERVICE_PACKAGES: PackageItem[] = [
  {
    id: 'express',
    name: 'The 30-Minute NYC Express',
    tagline: 'Ideal for quick solo portraits, simple headshots, or a fast couples shoot in 1 NYC spot.',
    price: 275,
    duration: '30 Minutes',
    locationsCount: 1,
    editedPhotos: 15,
    outfitChanges: 1,
    features: [
      '1 Iconic NYC Location',
      '15 High-Res Hand-Edited Digital Photos',
      'Online Private High-Res Digital Gallery',
      'Full Personal Digital Usage & Downloading Rights',
      'Location & Outfit Preparation Guide',
      '5-7 Day Standard Photo Delivery'
    ]
  },
  {
    id: 'signature',
    name: 'The Signature 1-Hour Session',
    tagline: 'Our most popular session for couples and individual portrait shoots.',
    price: 450,
    duration: '60 Minutes (1 Hr Max)',
    locationsCount: 1,
    editedPhotos: 30,
    outfitChanges: 2,
    popular: true,
    features: [
      '1 Iconic NYC Location (60 Mins Maximum)',
      '30 High-Res Hand-Edited Digital Photos',
      'Up to 2 Outfit Changes included',
      'Pre-session Location & Route Strategy',
      'Sneak Peek Preview (5 photos within 48 hours)',
      'Online Private High-Res Digital Gallery',
      'Full Personal Digital Usage & Downloading Rights',
      'Golden Hour Timing Strategy'
    ]
  },
  {
    id: 'deluxe',
    name: 'The Deluxe 1-Hour Storybook',
    tagline: 'Maximum edited photos and priority turnaround packed into a focused 1-hour session.',
    price: 650,
    duration: '60 Minutes (1 Hr Max)',
    locationsCount: 1,
    editedPhotos: 50,
    outfitChanges: 2,
    features: [
      '1 Iconic NYC Location (60 Mins Maximum)',
      '50+ High-Res Hand-Edited Digital Photos',
      '2 Outfit Changes included',
      '24-Hour Expedited Sneak Peek Gallery (10 photos)',
      'Private High-Res Digital Gallery & Custom Slideshow',
      'Priority 3-Day Full Gallery Turnaround',
      'Full Personal & Commercial Digital Usage Rights'
    ]
  }
];

export const ADD_ONS: AddOnItem[] = [
  {
    id: 'expedited-delivery',
    name: '24-Hour Express Gallery Turnaround',
    price: 175,
    description: 'Get your full edited high-resolution digital photo gallery within 24 hours of your shoot.'
  },
  {
    id: 'extra-edits',
    name: '15 Extra Edited High-Res Photos',
    price: 125,
    description: 'Receive 15 additional hand-edited high-resolution digital photos in your final gallery.'
  },
  {
    id: 'raw-files',
    name: 'Complete Unedited RAW Image Archive',
    price: 200,
    description: 'Receive all full-resolution unedited RAW files from your session alongside your edited gallery.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sarah & Andrew Sterling',
    role: 'Couples',
    location: 'Central Park & Bow Bridge',
    quote: 'Jeff made us feel so comfortable in front of the camera! We took our couple photos at Central Park during golden hour, and people literally gasp when they see our photos. He knew every hidden angle away from crowds!',
    rating: 5,
    date: 'October 2025',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't2',
    name: 'Jonathan Rivera',
    role: 'Couples',
    location: 'Brooklyn Bridge Walkway',
    quote: 'We took sunrise photos on the Brooklyn Bridge walkway with the Midtown skyline glowing behind us. Jeff helped us plan the exact spot, timed the light flawlessly, and caught every raw emotion. 1000% recommend!',
    rating: 5,
    date: 'December 2025',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't3',
    name: 'Chloe Bennett',
    role: 'Solo Portraits',
    location: 'SoHo Cast-Iron District',
    quote: 'As a traveler visiting New York from London, I needed portrait photos that captured true NYC elegance. Jeff is an absolute master of natural light. Turned around my gallery super fast and every shot looks incredible.',
    rating: 5,
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'weather',
    question: 'What happens if it rains on our scheduled shoot day?',
    answer: 'If rain or inclement weather is forecasted on your scheduled shoot date, we will gladly reschedule your session to a clear backup date or time during your stay, or issue a full refund of your deposit. We do not shoot in the rain so you always get crisp, beautiful, dry photos!'
  },
  {
    category: 'locations',
    question: 'Which NYC photoshoot locations do you recommend?',
    answer: 'We recommend iconic NYC spots such as Central Park & Bow Bridge, SoHo Cast-Iron District, Brooklyn Bridge, and waterfront parks. Each location provides a distinct NYC backdrop, from classic architectural drama to serene natural paths.'
  },
  {
    category: 'booking',
    question: 'How far in advance should I book my session?',
    answer: 'For prime sunrise or golden hour slots in popular spots like Central Park, SoHo, or Brooklyn Bridge, we recommend booking 2 to 4 weeks in advance. However, we always keep a few flexible rush slots open for travelers visiting NYC on short notice!'
  },
  {
    category: 'delivery',
    question: 'How and when will I receive my edited high-resolution photos?',
    answer: 'You will receive an invite to your private online high-resolution gallery within 5–7 business days. You can view and download high-resolution files directly to your phone or desktop. We also offer 24-hour express turnaround if you need them urgently!'
  },
  {
    category: 'locations',
    question: 'Do you help with styling and posing advice?',
    answer: 'Absolutely! Upon booking, you will receive our exclusive NYC Style & Location Guide packed with color palette recommendations tailored to your shoot location, footwear advice for cobblestones, and during the shoot Jeff directs gentle, natural movement so you never feel stiff or staged.'
  }
];

