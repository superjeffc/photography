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
  originalPrice?: number;
  duration: string;
  partySize: string;
  locationsCount: number;
  editedPhotos: number;
  outfitChanges: number;
  features: string[];
  popular?: boolean;
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

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Iconic DUMBO Cobblestone Perspective',
    client: 'David & Sarah',
    locationId: 'dumbo',
    locationName: 'DUMBO',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'https://assets.superjeffc.com/apps/dumbo1.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/1000s @ f/2.8, ISO 100',
    story: 'Framed between historic red-brick warehouse facades on Washington Street with the Manhattan Bridge tower centered behind.'
  },
  {
    id: 'p1_b',
    title: 'Autumn Golden Hour Promenade',
    client: 'David & Sarah',
    locationId: 'dumbo',
    locationName: 'Little Island',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'https://assets.superjeffc.com/apps/little-island.jpg',
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
    image: 'https://assets.superjeffc.com/apps/gantry-state-park1.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/1250s @ f/2.8, ISO 100',
    story: 'Sleek session with the iconic Pepsi-Cola sign and Empire State building glowing in sunset tones.'
  },
  {
    id: 'p3',
    title: 'Gantry Plaza Waterfront Glow',
    client: 'Maya Lin',
    locationId: 'gantry-park',
    locationName: 'Chinatown',
    category: 'portraits',
    categoryLabel: 'Solo Portraits',
    image: 'https://assets.superjeffc.com/apps/chinatown1.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/2000s @ f/2.8, ISO 100',
    story: 'Sunset light reflecting off the East River piers at Gantry Plaza State Park with clear views of the Midtown Manhattan skyline.'
  },
  {
    id: 'p4',
    title: 'Poconos Nature Trail Escape',
    client: 'Michael & Claire',
    locationId: 'poconos',
    locationName: 'Poconos Mountains',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'https://assets.superjeffc.com/apps/hiking.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/640s @ f/2.8, ISO 200',
    story: 'A serene outdoor adventure session captured along lush forest trails in the Poconos — available as part of custom Tri-State day trip packages.'
  },
  {
    id: 'p5',
    title: 'Gantry Pier Twilight Promenade',
    client: 'James & Jessica',
    locationId: 'gantry-park',
    locationName: 'Chinatown',
    category: 'couples',
    categoryLabel: 'Couples',
    image: 'https://assets.superjeffc.com/apps/chinatown2.jpg',
    gear: 'Sony A7C II + FE 24-50mm f/2.8 G',
    settings: '1/1000s @ f/2.8, ISO 100',
    story: 'A serene twilight session along the restored industrial gantries and East River wooden promenade at Gantry Plaza State Park.'
  }
];

export const SERVICE_PACKAGES: PackageItem[] = [
  {
    id: 'express',
    name: 'Express 30-Minute Session',
    tagline: 'Ideal for quick solo portraits, simple headshots, or a fast couples shoot in 1 NYC spot.',
    price: 150,
    originalPrice: 225,
    duration: '30 Minutes',
    partySize: 'Up to 2 People',
    locationsCount: 1,
    editedPhotos: 10,
    outfitChanges: 1,
    features: [
      'One Location (30 Mins Maximum)',
      'Up to 2 People Included',
      '10 High-Resolution Edited Digital Photos',
      '7 Day Standard Photo Delivery'
    ]
  },
  {
    id: 'signature',
    name: 'Signature 1-Hour Session',
    tagline: 'Our most popular session for couples and individual portrait shoots.',
    price: 225,
    originalPrice: 325,
    duration: '60 Minutes (1 Hr Max)',
    partySize: 'Up to 2 People',
    locationsCount: 1,
    editedPhotos: 15,
    outfitChanges: 1,
    popular: true,
    features: [
      'One Location (60 Mins Maximum)',
      'Up to 2 People Included',
      '15 High-Resolution Edited Digital Photos',
      '7 Day Standard Photo Delivery'
    ]
  },
  {
    id: 'deluxe',
    name: 'Deluxe 1-Hour Session',
    tagline: 'More photos and extended coverage for a complete gallery of memories.',
    price: 275,
    originalPrice: 400,
    duration: '60 Minutes (1 Hr Max)',
    partySize: 'Up to 2 People',
    locationsCount: 1,
    editedPhotos: 30,
    outfitChanges: 1,
    features: [
      'One Location (60 Mins Maximum)',
      'Up to 2 People Included',
      '30 High-Resolution Edited Digital Photos',
      '7 Day Standard Photo Delivery'
    ]
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
    answer: 'If rain or inclement weather is forecasted on your scheduled shoot date, we will gladly reschedule your session to a clear backup date or time during your stay. All packages and retainer bookings are non-refundable.'
  },
  {
    category: 'booking',
    question: 'What is your cancellation and refund policy?',
    answer: 'All session fees and deposits are non-refundable once booked, as that time slot is reserved exclusively for you. If your travel plans change or unexpected circumstances arise, we offer flexible rescheduling with at least 48 hours notice (or complimentary rescheduling in the event of inclement weather).'
  },
  {
    category: 'locations',
    question: 'Which NYC photoshoot locations do you recommend?',
    answer: 'We recommend iconic NYC spots such as Central Park, DUMBO, and waterfront parks. Each location provides a distinct NYC backdrop, from classic architectural drama to serene natural paths.'
  },
  {
    category: 'booking',
    question: 'How far in advance should I book my session?',
    answer: 'We recommend booking 2 to 4 weeks in advance. However, we always keep a few flexible rush slots open for travelers visiting NYC on short notice!'
  },
  {
    category: 'delivery',
    question: 'How and when will I receive my edited high-resolution photos?',
    answer: 'You will receive an invite to your private online high-resolution gallery within 7 business days. You can view and download high-resolution files directly to your phone or desktop.'
  },
  {
    category: 'locations',
    question: 'Do you help with posing and direction during the shoot?',
    answer: 'Absolutely! Throughout the entire shoot, Jeff will guide and direct you with gentle, natural prompts and movement so you never have to worry about how to pose or feel stiff or staged.'
  },
  {
    category: 'booking',
    question: 'How many people can join the photoshoot?',
    answer: 'All packages include up to 2 people, making them perfect for solo portraits, couples, or friends. If you are bringing a family or larger group (3+ people), additional guests can be added for $50 per person. For groups and families, we recommend our 60-Minute Signature or Deluxe sessions to ensure plenty of camera time for both group portraits and individual photos.'
  }
];

