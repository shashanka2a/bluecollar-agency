import { SectionData } from './types';

export const COLORS = {
  voidBlack: '#000000',
  warmWhite: '#FAFAF9',
  copper: '#E8B4A0',
  steelBlue: '#3B82F6',
};

export const SECTION_ORDER: SectionData['id'][] = [
  'intro',
  'roofing',
  'hvac',
  'plumbing',
  'electrical',
  'exterior',
  'reassemble'
];

export const SECTIONS: Record<string, SectionData> = {
  intro: {
    id: 'intro',
    label: 'BLUECOLLAR',
    headline: 'Grow home service businesses with high-trust websites + SEO.',
    subline: 'We turn "need it now" searches into booked jobs.',
    projects: [],
  },
  roofing: {
    id: 'roofing',
    label: 'ROOFING',
    headline: 'Dominate the storm season.',
    subline: 'High-converting pages for repairs and full replacements.',
    projects: [
      { id: 'r1', clientName: 'Apex Roofs', description: 'Full rebranding & funnel', stat: '+62% calls', image: 'https://picsum.photos/400/300?random=1' },
      { id: 'r2', clientName: 'Summit Shield', description: 'Storm damage SEO', stat: '2.1x leads', image: 'https://picsum.photos/400/300?random=2' },
      { id: 'r3', clientName: 'Titan Cover', description: 'Commercial roofing PPC', stat: '-38% CPL', image: 'https://picsum.photos/400/300?random=3' },
    ],
  },
  hvac: {
    id: 'hvac',
    label: 'HVAC',
    headline: 'Comfort when it counts.',
    subline: 'Capture emergency searches instantly.',
    projects: [
      { id: 'h1', clientName: 'CoolBreeze', description: 'AC Repair landing pages', stat: '4.5x ROAS', image: 'https://picsum.photos/400/300?random=4' },
      { id: 'h2', clientName: 'HeatWave', description: 'Furnace install SEO', stat: '#1 Rank', image: 'https://picsum.photos/400/300?random=5' },
      { id: 'h3', clientName: 'AirPro', description: 'Membership upsell flow', stat: '+20% MMR', image: 'https://picsum.photos/400/300?random=6' },
    ],
  },
  plumbing: {
    id: 'plumbing',
    label: 'PLUMBING',
    headline: 'Flowing leads, 24/7.',
    subline: 'Trust-building designs for local plumbers.',
    projects: [
      { id: 'p1', clientName: 'RapidRooter', description: 'Emergency drain service', stat: '< 5m response', image: 'https://picsum.photos/400/300?random=7' },
      { id: 'p2', clientName: 'PurePipe', description: 'Repipe specialist site', stat: '300% ROI', image: 'https://picsum.photos/400/300?random=8' },
      { id: 'p3', clientName: 'CityPlumb', description: 'Local SEO domination', stat: '+85 calls/mo', image: 'https://picsum.photos/400/300?random=9' },
    ],
  },
  electrical: {
    id: 'electrical',
    label: 'ELECTRICAL',
    headline: 'Power up your pipeline.',
    subline: 'Showcase safety and expertise.',
    projects: [
      { id: 'e1', clientName: 'VoltMaster', description: 'Panel upgrade funnel', stat: '$12k/mo new', image: 'https://picsum.photos/400/300?random=10' },
      { id: 'e2', clientName: 'BrightSpark', description: 'Lighting design gallery', stat: '2x consults', image: 'https://picsum.photos/400/300?random=11' },
      { id: 'e3', clientName: 'SafeWire', description: 'Safety inspection leads', stat: '+40% conv.', image: 'https://picsum.photos/400/300?random=12' },
    ],
  },
  exterior: {
    id: 'exterior',
    label: 'FENCING • LANDSCAPING • PAINTING',
    headline: 'Curb appeal that converts.',
    subline: 'Visual-heavy portfolios for aesthetic trades.',
    projects: [
      { id: 'ex1', clientName: 'GreenGuard', description: 'Landscape architecture', stat: 'Award Winning', image: 'https://picsum.photos/400/300?random=13' },
      { id: 'ex2', clientName: 'ColorCoat', description: 'Exterior painting', stat: 'Booked 3mo', image: 'https://picsum.photos/400/300?random=14' },
      { id: 'ex3', clientName: 'SecureFence', description: 'Privacy fence builder', stat: '+50% quotes', image: 'https://picsum.photos/400/300?random=15' },
    ],
  },
  reassemble: {
    id: 'reassemble',
    label: 'FULL SERVICE',
    headline: 'Every trade that makes a house a home.',
    subline: 'One agency to rule them all.',
    projects: [],
  },
};