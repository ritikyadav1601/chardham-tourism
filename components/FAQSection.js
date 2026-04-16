'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">Know Before You Go</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-900">Frequently Asked Questions</h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-orange-100 shadow-sm"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-orange-50 transition-colors"
              >
                <span className="font-semibold text-amber-900 pr-4" itemProp="name">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-orange-500 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-orange-50"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="pt-3">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}