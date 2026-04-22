import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Char Dham Yatra Booking & Enquiry',
  description: 'Contact our Char Dham Yatra experts for bookings, enquiries, and custom packages. Call, WhatsApp or email us for the best pilgrimage advice.',
};

export default function ContactPage() {
  const contactInfo = [
    { icon: Phone, label: 'Call / WhatsApp', value: '+91-90684-03363', href: 'tel:+919068403363' },
    { icon: Mail, label: 'Email', value: 'info@chardhamyatra.in', href: 'mailto:info@chardhamyatra.in' },
    { icon: MapPin, label: 'Office', value: '15, Rajpur Road, Dehradun, Uttarakhand - 248001', href: '#' },
    { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 8:00 AM – 8:00 PM', href: '#' },
  ];

  return (
    <>
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-800" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')", backgroundSize: 'cover' }} />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-amber-200 text-lg">Begin your sacred journey — we're here to help</p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>›</span>
          <span className="text-orange-600">Contact</span>
        </div>
      </div>

      <section className="py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-amber-900 mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map(item => (
                <a key={item.label} href={item.href} className="flex items-start gap-4 bg-white border border-orange-100 rounded-xl p-4 hover:border-orange-300 transition-colors card-hover">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                    <div className="font-medium text-amber-900 text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/919068403363?text=Namaste! I want to enquire about Char Dham Yatra packages." target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg transition-colors mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp Now
            </a>
            <a href="tel:+919068403363" className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl font-semibold transition-colors">
              <Phone size={20} /> Call Us: +91-90684-03363
            </a>

            {/* Embedded Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-orange-100 h-48 bg-amber-100 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={32} className="mx-auto mb-2 text-orange-400" />
                <div className="text-sm">15, Rajpur Road, Dehradun</div>
                <div className="text-xs text-gray-400">Uttarakhand - 248001</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-lg">
            <h2 className="font-display text-2xl font-bold text-amber-900 mb-2">Send Us an Enquiry</h2>
            <p className="text-gray-600 text-sm mb-6">Fill out the form and our yatra experts will respond within 24 hours. 🙏</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-10 bg-amber-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <MessageSquare size={32} className="mx-auto mb-3 text-amber-400" />
          <h2 className="font-display text-2xl font-bold mb-2">Have Questions?</h2>
          <p className="text-amber-300 mb-4">Check our frequently asked questions for quick answers about Char Dham Yatra registration, trek difficulty, best time, and more.</p>
          <Link href="/#faq" className="border border-amber-400 text-amber-300 hover:bg-amber-800 px-6 py-2 rounded-full text-sm font-medium transition-colors inline-block">
            View FAQ
          </Link>
        </div>
      </section>
    </>
  );
}