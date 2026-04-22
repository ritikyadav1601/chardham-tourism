import Link from 'next/link';
import { Award, Users, Shield, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us | Char Dham Yatra - Trusted Pilgrimage Tour Operator',
  description: 'Learn about our 15+ years of expertise in Char Dham Yatra. Dedicated team of pilgrimage experts, priests, and guides ensuring a sacred and safe journey.',
};

export default function AboutPage() {
  const team = [
    { name: 'Pandit Ramakant Sharma', role: 'Head Priest & Founder', desc: '25+ years guiding pilgrims through Char Dham', emoji: '🕉️' },
    { name: 'Suresh Negi', role: 'Operations Director', desc: 'Expert in Uttarakhand mountain logistics', emoji: '🏔️' },
    { name: 'Dr. Meena Rawat', role: 'Medical Coordinator', desc: 'Ensures pilgrim health & safety at altitude', emoji: '🩺' },
    { name: 'Anita Dobhal', role: 'Customer Relations', desc: 'Your 24/7 yatra support companion', emoji: '📞' },
  ];

  const milestones = [
    { year: '2009', event: 'Founded with first Char Dham batch of 12 pilgrims' },
    { year: '2012', event: 'Expanded to helicopter services for Kedarnath' },
    { year: '2015', event: 'Served 5,000th happy pilgrim' },
    { year: '2018', event: 'Launched senior citizen special yatra program' },
    { year: '2020', event: 'Introduced virtual yatra guidance during COVID' },
    { year: '2025', event: '50,000+ pilgrims & counting — serving the divine journey' },
  ];

  return (
    <>
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600')" }} />
        <div className="absolute inset-0 bg-amber-950/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-amber-200 text-lg">15+ Years of Serving Sacred Journeys</p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>›</span>
          <span className="text-orange-600">About Us</span>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">Our Story</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-900 mb-4">Born from Devotion, Built on Trust</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Char Dham Yatra was founded in 2009 by Pandit Ramakant Sharma, a devout Uttarakhand native who had personally completed the Char Dham pilgrimage over a dozen times. Frustrated by disorganized tours that compromised the sanctity of the yatra, he set out to create a service that honored both the pilgrims and the divine journey.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Today, with over 50,000 pilgrims served and a 4.9/5 satisfaction rating, we remain committed to our founding mission: to make the sacred Char Dham journey accessible, comfortable, and spiritually authentic for every devotee.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: 'Years Experience', value: '15+' },
                { icon: Users, label: 'Happy Pilgrims', value: '50,000+' },
                { icon: Shield, label: 'Safety Record', value: '100%' },
                { icon: Heart, label: 'Satisfaction Rate', value: '4.9/5' },
              ].map(s => (
                <div key={s.label} className="bg-white border border-orange-100 rounded-xl p-4 flex items-center gap-3">
                  <s.icon size={24} className="text-orange-500 shrink-0" />
                  <div>
                    <div className="text-xl font-bold text-amber-900">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600" alt="Kedarnath Temple" className="rounded-2xl shadow-xl" />
            <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs">Years of Sacred Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🙏', title: 'Spiritual Authenticity', desc: 'We believe the yatra is a sacred ritual, not just a tour. Every ritual, puja, and darshan is conducted with full devotion and authenticity.' },
              { icon: '🛡️', title: 'Safety First', desc: 'From altitude acclimatization to emergency protocols, pilgrim safety is our non-negotiable priority on every journey.' },
              { icon: '💚', title: 'Transparent Service', desc: 'No hidden charges. Clear itineraries. Honest communication. What we promise is exactly what you receive.' },
            ].map(v => (
              <div key={v.title} className="bg-amber-800/60 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-amber-200 mb-2">{v.title}</h3>
                <p className="text-amber-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">The People Behind Your Journey</div>
            <h2 className="font-display text-3xl font-bold text-amber-900">Meet Our Team</h2>
            <div className="section-divider w-32 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-amber-50 border border-orange-100 rounded-2xl p-6 text-center card-hover">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">{member.emoji}</div>
                <h3 className="font-display font-bold text-amber-900 mb-0.5">{member.name}</h3>
                <div className="text-xs text-orange-600 font-semibold mb-2">{member.role}</div>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-amber-900">Our Journey</h2>
            <div className="section-divider w-32 mx-auto mt-4" />
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-6">
              {milestones.map(m => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white border border-orange-100 rounded-xl p-4 flex-1">
                    <div className="text-xs font-bold text-orange-600 mb-0.5">{m.year}</div>
                    <p className="text-sm text-gray-700">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-700 to-amber-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Start Your Sacred Journey With Us</h2>
          <p className="text-amber-200 mb-6">Join thousands of blessed pilgrims who have trusted us with their most sacred journey.</p>
          <Link href="/contact" className="bg-white text-orange-700 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold transition-colors inline-block">
            Book Your Yatra Today
          </Link>
        </div>
      </section>
    </>
  );
}