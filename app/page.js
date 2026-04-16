import Link from 'next/link';
import { MapPin, Star, Shield, Clock, Users, Award, Phone, ChevronRight } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { destinations, packages, testimonials, faqs } from '@/lib/data';

export const metadata = {
  title: 'Char Dham Yatra 2025 | Sacred Pilgrimage Packages from Delhi & Haridwar',
  description: 'Plan your divine Char Dham Yatra 2025. Complete pilgrimage packages to Yamunotri, Gangotri, Kedarnath & Badrinath. Helicopter, budget & premium tours. Book now!',
};

const stats = [
  { label: 'Happy Pilgrims', value: '50,000+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Avg. Rating', value: '4.9/5' },
  { label: 'Safe Journeys', value: '100%' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 left-10 text-6xl text-amber-200/10 font-bold select-none">ॐ</div>
        <div className="absolute bottom-20 right-10 text-8xl text-amber-200/10 font-bold select-none">ॐ</div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20">
          <div className="inline-block bg-orange-600/90 backdrop-blur text-amber-100 text-sm font-medium px-5 py-1.5 rounded-full mb-6 tracking-wide">
            🕉️ Char Dham Yatra 2025 — Registrations Open
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
            Begin Your
            <span className="block text-amber-300">Sacred Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            The four most sacred pilgrimages of Hinduism — Yamunotri, Gangotri, Kedarnath & Badrinath — await your devotion in the divine Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/char-dham-yatra" className="btn-saffron px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2">
              Explore Packages <ChevronRight size={20} />
            </Link>
            <a href="https://wa.me/919876543210" className="bg-white/15 backdrop-blur hover:bg-white/25 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-all">
              WhatsApp Us
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-amber-300">{s.value}</div>
                <div className="text-xs text-amber-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Dhams */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">The Sacred Circuit</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-900">The Four Holy Dhams</h2>
            <div className="section-divider w-32 mx-auto mt-4" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Nestled in the Garhwal Himalayas of Uttarakhand, these four sacred shrines represent the divine quartet of Hindu pilgrimage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <Link key={dest.id} href={"/char-dham-yatra/" + dest.slug}>
                <article className="relative h-80 rounded-2xl overflow-hidden group card-hover cursor-pointer">
                  <img src={dest.image} alt={dest.name + " - " + dest.tagline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading={i < 2 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 pilgrimage-card" />
                  <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">{i + 1}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-xs text-amber-300 mb-1">{dest.deity}</div>
                    <h3 className="font-display text-xl font-bold">{dest.name}</h3>
                    <div className="text-xs text-amber-200 mb-2">{dest.tagline}</div>
                    <div className="flex items-center gap-3 text-xs text-amber-200">
                      <span>{dest.elevation}</span>
                      <span>•</span>
                      <span>{dest.trek}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Why Choose Us</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Your Trusted Yatra Partner</h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🕉️', title: 'Expert Priest-Guides', desc: 'Our qualified pandits perform authentic puja and abhishek ceremonies at each temple.' },
              { icon: '🚌', title: 'Comfortable Transport', desc: 'AC vehicles, experienced drivers familiar with mountain routes, and 24/7 support.' },
              { icon: '🏨', title: 'Curated Accommodation', desc: 'Handpicked hotels and dharamshalas close to temples for maximum convenience.' },
              { icon: '🩺', title: 'Medical Support', desc: 'First aid kits, oxygen cylinders for altitude, and coordination with local medical facilities.' },
              { icon: '📋', title: 'All Registrations Handled', desc: 'We manage all Uttarakhand Tourism Yatra registrations and documentation.' },
              { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock helpline during your yatra for any assistance or emergency.' },
            ].map(f => (
              <div key={f.title} className="bg-amber-800/50 rounded-xl p-6 flex gap-4">
                <div className="text-3xl shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-amber-100 mb-1">{f.title}</h3>
                  <p className="text-sm text-amber-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">Sacred Journeys</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-900">Featured Yatra Packages</h2>
            <div className="section-divider w-32 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
          <div className="text-center mt-8">
            <Link href="/tour-packages" className="btn-gold px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
              View All Packages <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">Pilgrim Stories</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-900">Blessed Journeys, Happy Pilgrims</h2>
            <div className="section-divider w-32 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-amber-50 border border-orange-100 rounded-2xl p-5 card-hover">
                <div className="star-rating text-sm mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="border-t border-orange-100 pt-3">
                  <div className="font-semibold text-amber-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.city} · {t.date}</div>
                  <div className="text-xs text-orange-600 mt-1">{t.package}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Start Your Journey</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Plan Your Divine Yatra</h2>
            <p className="text-amber-200 leading-relaxed mb-6">Our pilgrimage experts will help you plan the perfect Char Dham Yatra tailored to your schedule, budget, and spiritual needs.</p>
            <div className="space-y-3">
              {['Free itinerary planning consultation', 'Best price guarantee', 'Flexible departure dates', 'Senior citizen special care'].map(b => (
                <div key={b} className="flex items-center gap-2 text-amber-200 text-sm"><span className="text-amber-400">✓</span> {b}</div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-gray-800">
            <h3 className="font-display text-xl font-bold text-amber-900 mb-4 text-center">Quick Enquiry</h3>
            <ContactForm compact />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs.slice(0, 4)} />
    </>
  );
}