import Link from 'next/link';
import PackageCard from '@/components/PackageCard';
import FAQSection from '@/components/FAQSection';
import { destinations, packages, faqs } from '@/lib/data';

export const metadata = {
  title: 'Char Dham Yatra 2025 Packages | Complete Pilgrimage Tour Operator',
  description: 'Book complete Char Dham Yatra 2025 packages. Yamunotri, Gangotri, Kedarnath, Badrinath. Helicopter options, budget tours, senior citizen specials. Best rates guaranteed.',
};

export default function CharDhamPage() {
  return (
    <>
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')" }} />
        <div className="absolute inset-0 bg-amber-950/70" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">The Sacred Circuit</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Char Dham Yatra 2025</h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">Complete pilgrimage packages to all four divine shrines in the Himalayas</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-amber-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>›</span>
          <span className="text-orange-600">Char Dham Yatra</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-900 mb-4">The Sacred Journey of a Lifetime</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Char Dham Yatra is the most revered pilgrimage in Hinduism, encompassing four sacred shrines situated in the Garhwal Himalayas of Uttarakhand, India. Visiting all four dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath — is believed to cleanse all sins and grant moksha (liberation) to the devout pilgrim.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((d, i) => (
              <Link key={d.id} href={"/char-dham-yatra/" + d.slug} className="bg-white border border-orange-100 rounded-xl p-4 card-hover text-center">
                <div className="text-2xl mb-1">{['🏔️','🌊','🕉️','🪷'][i]}</div>
                <div className="font-display font-bold text-amber-900 text-sm">{d.name}</div>
                <div className="text-xs text-gray-500 mt-1">{d.elevation}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All 4 Destination Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">The Four Sacred Shrines</h2>
          <div className="space-y-8">
            {destinations.map((dest, i) => (
              <article key={dest.id} className="flex flex-col md:flex-row gap-6 bg-amber-50 rounded-2xl overflow-hidden border border-orange-100">
                <div className="md:w-80 h-56 md:h-auto shrink-0 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{i+1}</span>
                    <span className="text-xs text-orange-600 font-semibold">{dest.deity}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-amber-900 mb-1">{dest.name}</h3>
                  <p className="text-sm text-orange-700 italic mb-3">"{dest.tagline}"</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{dest.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      ['Elevation', dest.elevation],
                      ['Best Time', dest.bestTime],
                      ['Distance', dest.distance],
                      ['Trek', dest.trek],
                    ].map(([k,v]) => (
                      <div key={k} className="text-xs">
                        <span className="text-gray-400">{k}: </span>
                        <span className="text-gray-700 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={"/char-dham-yatra/" + dest.slug} className="btn-saffron px-4 py-2 rounded-lg text-sm font-medium">
                      Learn More
                    </Link>
                    <a href="https://wa.me/919876543210" className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">Char Dham Yatra Packages 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} showDetails />)}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Char Dham Yatra 2025",
        "description": "Complete Hindu pilgrimage to Yamunotri, Gangotri, Kedarnath and Badrinath",
        "itinerary": destinations.map(d => ({ "@type": "City", "name": d.name })),
        "touristType": "Religious",
        "provider": { "@type": "TravelAgency", "name": "Char Dham Yatra" },
        "offers": packages.map(p => ({
          "@type": "Offer",
          "name": p.name,
          "price": p.price,
          "priceCurrency": "INR",
        }))
      })}} />
    </>
  );
}