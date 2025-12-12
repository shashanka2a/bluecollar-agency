import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BlueCollar | Web + SEO for Home Services',
    template: '%s | BlueCollar Agency',
  },
  description: 'Grow home service businesses with high-trust websites + SEO. We turn "need it now" searches into booked jobs for roofing, HVAC, plumbing, electrical, and exterior services.',
  keywords: [
    'home services SEO',
    'local SEO for contractors',
    'roofing website design',
    'HVAC marketing',
    'plumbing SEO',
    'electrical contractor marketing',
    'home service agency',
    'contractor website',
    'local home service marketing',
  ],
  authors: [{ name: 'BlueCollar Agency' }],
  creator: 'BlueCollar Agency',
  publisher: 'BlueCollar Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bluecollar.agency'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BlueCollar | Web + SEO for Home Services',
    description: 'Grow home service businesses with high-trust websites + SEO. We turn "need it now" searches into booked jobs.',
    siteName: 'BlueCollar Agency',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'BlueCollar Agency - Web + SEO for Home Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueCollar | Web + SEO for Home Services',
    description: 'Grow home service businesses with high-trust websites + SEO. We turn "need it now" searches into booked jobs.',
    images: ['/opengraph-image'],
    creator: '@bluecollaragency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BlueCollar Agency',
  description: 'Grow home service businesses with high-trust websites + SEO. We turn "need it now" searches into booked jobs.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bluecollar.agency',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bluecollar.agency'}/icon.svg`,
  serviceType: 'Web Design and SEO Services',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Home Service Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roofing Website Design & SEO',
          description: 'High-converting pages for repairs and full replacements',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HVAC Marketing & SEO',
          description: 'Capture emergency searches instantly',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plumbing SEO & Web Design',
          description: 'Trust-building designs for local plumbers',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical Contractor Marketing',
          description: 'Showcase safety and expertise',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

