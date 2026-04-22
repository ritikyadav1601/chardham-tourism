import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100">
      {/* Om divider */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-600 to-amber-800 py-3 text-center text-white text-sm tracking-widest">
        ॐ नमः शिवाय · जय यमुनोत्री · जय गंगोत्री · जय केदारनाथ · जय बद्रीनाथ · ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white text-xl">🕉️</div>
            <div>
              <div className="font-display font-bold text-white text-lg">Char Dham Yatra</div>
              <div className="text-xs text-amber-400">Sacred Pilgrimage Tours</div>
            </div>
          </div>
          <p className="text-sm text-amber-300 leading-relaxed mb-4">
            Your trusted companion for the sacred Char Dham Yatra. With 15+ years of experience, we ensure a blessed, comfortable, and spiritually enriching journey.
          </p>
          <div className="flex gap-3">
            {['Facebook', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" className="w-8 h-8 rounded-full bg-amber-800 hover:bg-orange-600 flex items-center justify-center text-xs transition-colors">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-white text-lg mb-4 border-b border-amber-800 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/char-dham-yatra', label: 'Char Dham Yatra' },
              { href: '/char-dham-yatra/kedarnath', label: 'Kedarnath Yatra' },
              { href: '/char-dham-yatra/badrinath', label: 'Badrinath Yatra' },
              { href: '/char-dham-yatra/gangotri', label: 'Gangotri Yatra' },
              { href: '/char-dham-yatra/yamunotri', label: 'Yamunotri Yatra' },
              { href: '/tour-packages', label: 'Tour Packages' },
              { href: '/blog', label: 'Travel Blog' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact Us' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-amber-300 hover:text-orange-400 transition-colors flex items-center gap-1">
                  <span className="text-orange-500">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Packages */}
        <div>
          <h3 className="font-display font-bold text-white text-lg mb-4 border-b border-amber-800 pb-2">Popular Packages</h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: '12-Day Complete Char Dham', price: '₹28,999' },
              { label: '7-Day Do Dham Yatra', price: '₹15,999' },
              { label: 'Kedarnath Helicopter', price: '₹12,999' },
              { label: '5-Day Badrinath Yatra', price: '₹9,999' },
              { label: 'Senior Special Yatra', price: '₹22,999' },
            ].map(p => (
              <li key={p.label} className="flex justify-between items-center">
                <Link href="/tour-packages" className="text-amber-300 hover:text-orange-400 transition-colors">{p.label}</Link>
                <span className="text-orange-400 font-semibold text-xs">{p.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-white text-lg mb-4 border-b border-amber-800 pb-2">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-amber-300">
              <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
              15, Rajpur Road, Dehradun, Uttarakhand - 248001
            </li>
            <li className="flex items-center gap-2 text-amber-300">
              <Phone size={16} className="text-orange-500 shrink-0" />
              <a href="tel:+919068403363" className="hover:text-orange-400">+91-90684-03363</a>
            </li>
            <li className="flex items-center gap-2 text-amber-300">
              <Mail size={16} className="text-orange-500 shrink-0" />
              <a href="mailto:info@chardhamyatra.in" className="hover:text-orange-400">info@chardhamyatra.in</a>
            </li>
            <li className="flex items-start gap-2 text-amber-300">
              <Clock size={16} className="text-orange-500 mt-0.5 shrink-0" />
              Mon–Sat: 8:00 AM – 8:00 PM IST
            </li>
          </ul>
          <a href="https://wa.me/919068403363" target="_blank" rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-amber-900 py-4 text-center text-xs text-amber-500">
        <p>© 2025 Char Dham Yatra. All rights reserved. | Designed with 🙏 for divine pilgrims</p>
        <p className="mt-1">
          <Link href="/sitemap.xml" className="hover:text-orange-400 mr-3">Sitemap</Link>
          <Link href="/privacy-policy" className="hover:text-orange-400 mr-3">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-orange-400">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}