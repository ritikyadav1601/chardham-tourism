'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const destinations = [
  { name: 'Yamunotri', href: '/char-dham-yatra/yamunotri', icon: '🏔️' },
  { name: 'Gangotri', href: '/char-dham-yatra/gangotri', icon: '🌊' },
  { name: 'Kedarnath', href: '/char-dham-yatra/kedarnath', icon: '🕉️' },
  { name: 'Badrinath', href: '/char-dham-yatra/badrinath', icon: '🪷' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      {/* Top bar */}
      <div className={`hidden md:flex items-center justify-between px-6 py-1 text-sm transition-all duration-300 ${
        isScrolled ? 'hidden' : 'bg-amber-900 text-amber-100'
      }`}>
        <span>🕉️ Jai Char Dham — Your Sacred Journey Begins Here</span>
        <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-white">
          <Phone size={14} /> +91-98765-43210
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
            🕉️
          </div>
          <div>
            <div className={`font-display font-bold text-lg leading-tight ${isScrolled ? 'text-orange-700' : 'text-white'}`}>
              Char Dham Yatra
            </div>
            <div className={`text-xs ${isScrolled ? 'text-amber-600' : 'text-amber-200'}`}>
              Sacred Pilgrimage Tours
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={`nav-link text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-amber-200'}`}>
            Home
          </Link>

          {/* Destinations Dropdown */}
          <div className="relative" onMouseEnter={() => setDestOpen(true)} onMouseLeave={() => setDestOpen(false)}>
            <button className={`nav-link text-sm font-medium flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-amber-200'}`}>
              Char Dham <ChevronDown size={14} className={`transition-transform ${destOpen ? 'rotate-180' : ''}`} />
            </button>
            {destOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-orange-100 overflow-hidden">
                <Link href="/char-dham-yatra" className="block px-4 py-3 text-sm font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 border-b border-orange-100">
                  All 4 Dhams →
                </Link>
                {destinations.map(d => (
                  <Link key={d.name} href={d.href} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700">
                    <span>{d.icon}</span> {d.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/tour-packages" className={`nav-link text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-amber-200'}`}>
            Packages
          </Link>
          <Link href="/blog" className={`nav-link text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-amber-200'}`}>
            Blog
          </Link>
          <Link href="/about" className={`nav-link text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-amber-200'}`}>
            About
          </Link>
          <Link href="/contact" className={`nav-link text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-amber-200'}`}>
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <Link href="/contact" className="btn-saffron px-4 py-1.5 rounded-full text-sm font-medium">
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-xl">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Home</Link>
            <div className="py-2 border-b border-gray-100">
              <div className="font-medium text-gray-700 mb-1">Char Dham</div>
              {destinations.map(d => (
                <Link key={d.name} href={d.href} className="flex items-center gap-2 py-1.5 pl-3 text-sm text-gray-600 hover:text-orange-600" onClick={() => setMobileOpen(false)}>
                  {d.icon} {d.name}
                </Link>
              ))}
            </div>
            <Link href="/tour-packages" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Packages</Link>
            <Link href="/blog" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/about" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="flex gap-2 pt-3 pb-2">
              <a href="https://wa.me/919876543210" className="flex-1 text-center bg-green-500 text-white py-2 rounded-full text-sm font-medium">WhatsApp</a>
              <Link href="/contact" className="flex-1 text-center btn-saffron py-2 rounded-full text-sm font-medium" onClick={() => setMobileOpen(false)}>Book Now</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}