import Link from 'next/link';
import { Clock, Users, CheckCircle, XCircle, Star } from 'lucide-react';

export default function PackageCard({ pkg, showDetails = false }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-orange-100">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 pilgrimage-card" />
        {pkg.badge && (
          <div className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {pkg.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <div className="flex gap-1">
            {pkg.destinations.map(d => (
              <span key={d} className="bg-white/20 backdrop-blur text-white text-xs px-2 py-0.5 rounded-full border border-white/30">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-amber-900 mb-1">{pkg.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1"><Clock size={13} /> {pkg.duration}</span>
          <span className="flex items-center gap-1"><Users size={13} /> {pkg.groupSize}</span>
          <span className="flex items-center gap-1"><Star size={13} className="text-amber-400" fill="currentColor" /> 4.9</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1 mb-4">
          {pkg.highlights.slice(0, 4).map(h => (
            <li key={h} className="flex items-center gap-1.5 text-xs text-gray-700">
              <CheckCircle size={13} className="text-green-500 shrink-0" /> {h}
            </li>
          ))}
        </ul>

        {showDetails && (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Inclusions</div>
                {pkg.inclusions.slice(0, 4).map(i => (
                  <div key={i} className="flex items-center gap-1 text-xs text-gray-600">
                    <CheckCircle size={11} className="text-green-400" /> {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Exclusions</div>
                {pkg.exclusions.slice(0, 4).map(e => (
                  <div key={e} className="flex items-center gap-1 text-xs text-gray-600">
                    <XCircle size={11} className="text-red-400" /> {e}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-orange-100">
          <div>
            <div className="text-xs text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</div>
            <div className="text-2xl font-bold text-orange-600">
              ₹{pkg.price.toLocaleString('en-IN')}
              <span className="text-sm font-normal text-gray-500"> /person</span>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="https://wa.me/919876543210"
              className="px-3 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-xs font-medium border border-green-200 transition-colors"
            >
              Enquire
            </a>
            <Link href="/contact" className="btn-saffron px-4 py-2 rounded-lg text-xs font-medium">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}