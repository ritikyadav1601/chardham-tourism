import Link from 'next/link';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/lib/data';

export const metadata = {
  title: 'Char Dham Yatra Tour Packages 2025 | Budget to Luxury Pilgrimage Tours',
  description: 'Choose from our range of Char Dham Yatra packages 2025. Budget, standard, premium and helicopter packages for complete Char Dham, Do Dham & individual dhams.',
};

export default function TourPackagesPage() {
  const categories = [
    { id: 'popular', label: 'Most Popular', icon: '⭐' },
    { id: 'budget', label: 'Budget Friendly', icon: '💰' },
    { id: 'luxury', label: 'Premium / VIP', icon: '👑' },
  ];

  return (
    <>
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625477710566-cb5d8a799d3c?w=1600')" }} />
        <div className="absolute inset-0 bg-amber-950/70" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">2025 Season</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Yatra Packages</h1>
          <p className="text-amber-200 text-lg">Curated pilgrimage packages for every budget and need</p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>›</span>
          <span className="text-orange-600">Tour Packages</span>
        </div>
      </div>

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map(cat => (
              <div key={cat.id} className="flex items-center gap-2 bg-white border border-orange-200 rounded-full px-5 py-2 text-sm font-medium text-amber-800 shadow-sm">
                <span>{cat.icon}</span> {cat.label}
              </div>
            ))}
          </div>

          {/* Packages grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} showDetails />
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section for Featured Package */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">Sample Itinerary</div>
            <h2 className="font-display text-3xl font-bold text-amber-900">12-Day Complete Char Dham Yatra</h2>
            <div className="section-divider w-32 mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {packages[0].itinerary.map(day => (
              <div key={day.day} className="flex gap-4 bg-amber-50 border border-orange-100 rounded-xl p-4">
                <div className="shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex flex-col items-center justify-center text-xs font-bold">
                  <span className="text-xs leading-none">Day</span>
                  <span className="text-base leading-none">{day.day}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">{day.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://wa.me/919068403363?text=I want to book the 12-Day Char Dham Yatra package" className="btn-saffron px-8 py-3 rounded-full font-semibold inline-block">
              Book This Package
            </a>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-12 bg-gradient-to-r from-amber-900 to-orange-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-amber-200 mb-6">We create personalized Char Dham Yatra itineraries tailored to your group size, dates, budget, and special requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919068403363" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2">
              WhatsApp for Custom Tour
            </a>
            <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-full font-semibold transition-colors">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Char Dham Yatra Packages 2025",
        "itemListElement": packages.map((pkg, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Product",
            "name": pkg.name,
            "description": pkg.description,
            "offers": {
              "@type": "Offer",
              "price": pkg.price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            }
          }
        }))
      })}} />
    </>
  );
}