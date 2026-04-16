'use client';
import { useState } from 'react';
import { Phone, Send } from 'lucide-react';

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', package: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to your backend/API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', package: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="font-display text-xl font-bold text-amber-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We will contact you within 24 hours. Jai Char Dham!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-sm font-medium text-amber-900 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Your full name"
            className="w-full px-4 py-2.5 border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-900 mb-1">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-amber-900 mb-1">Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-amber-900 mb-1">Package Interest</label>
        <select
          value={form.package}
          onChange={e => setForm(f => ({ ...f, package: e.target.value }))}
          className="w-full px-4 py-2.5 border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
        >
          <option value="">Select a package</option>
          <option>Complete Char Dham (12 Days)</option>
          <option>Do Dham Yatra (7 Days)</option>
          <option>Kedarnath Helicopter Package</option>
          <option>Kedarnath Yatra</option>
          <option>Badrinath Yatra</option>
          <option>Gangotri Yatra</option>
          <option>Yamunotri Yatra</option>
          <option>Custom Package</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-900 mb-1">Message / Requirements</label>
        <textarea
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Number of pilgrims, dates, special requirements..."
          className="w-full px-4 py-2.5 border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        />
      </div>

      <div className="flex gap-3">
        <button type="submit" className="flex-1 btn-saffron flex items-center justify-center gap-2 py-3 rounded-xl font-semibold">
          <Send size={16} /> Send Enquiry
        </button>
        <a
          href="https://wa.me/919876543210"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
        <Phone size={13} className="text-orange-500" />
        Or call us: <a href="tel:+919876543210" className="text-orange-600 font-semibold">+91-98765-43210</a>
      </div>
    </form>
  );
}