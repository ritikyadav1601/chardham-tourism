import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  metadataBase: new URL('https://chardhamyatra.in'),
  title: {
    default: 'Char Dham Yatra 2025 | Kedarnath, Badrinath, Gangotri, Yamunotri Packages',
    template: '%s | Char Dham Yatra'
  },
  description: 'Book your sacred Char Dham Yatra 2025 with expert guides. Complete pilgrimage packages for Yamunotri, Gangotri, Kedarnath & Badrinath with accommodation, transport & puja services.',
  keywords: ['Char Dham Yatra', 'Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri', 'Hindu pilgrimage', 'Uttarakhand tour packages', 'Chardham yatra 2025'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Char Dham Yatra',
    title: 'Char Dham Yatra 2025 - Sacred Pilgrimage Packages',
    description: 'Complete Char Dham Yatra packages with accommodation, transport & puja arrangements.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Char Dham Yatra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra 2025 Packages',
    description: 'Sacred Char Dham pilgrimage packages from Delhi',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://chardhamyatra.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Char Dham Yatra",
              "url": "https://chardhamyatra.in",
              "logo": "https://chardhamyatra.in/logo.png",
              "description": "Expert Char Dham Yatra pilgrimage tour operator",
              "telephone": "+91-9876543210",
              "email": "info@chardhamyatra.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15, Rajpur Road",
                "addressLocality": "Dehradun",
                "addressRegion": "Uttarakhand",
                "postalCode": "248001",
                "addressCountry": "IN"
              },
              "areaServed": "India",
              "priceRange": "₹₹₹"
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}