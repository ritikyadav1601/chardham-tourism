import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Tag, Calendar } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title + ' | Char Dham Yatra Blog',
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.image }] },
    alternates: { canonical: 'https://chardhamyatra.in/blog/' + post.slug },
  };
}

const blogContent = {
  'best-time-for-char-dham-yatra': {
    intro: 'Planning the Char Dham Yatra requires careful timing. The sacred shrines are open only for about six months a year, typically from May to November. Here is a comprehensive month-by-month breakdown to help you plan the perfect pilgrimage.',
    sections: [
      {
        heading: 'May – June: The Peak Season',
        content: 'This is the most popular time for Char Dham Yatra. The weather is pleasant, temples are newly opened after winter, and the atmosphere is charged with devotion. Expect large crowds, especially around Akshaya Tritiya (temple opening day). Book your accommodation and transport at least 2-3 months in advance. Temperatures range from 10°C to 20°C at higher altitudes.',
      },
      {
        heading: 'July – August: Monsoon Season (Avoid)',
        content: 'We strongly advise against Char Dham Yatra during July and August. Heavy rainfall causes frequent landslides on mountain roads, making travel dangerous. The trek to Kedarnath becomes especially treacherous. Gangotri and Yamunotri roads are frequently blocked. Only attempt if you are willing to accept significant disruption.',
      },
      {
        heading: 'September – October: The Sweet Spot',
        content: 'September and October offer the best balance of good weather, manageable crowds, and spiritual ambiance. Post-monsoon skies are crystal clear, offering spectacular views of the Himalayas. This is our top recommendation for first-time pilgrims, families with elderly members, and those seeking a more peaceful darshan.',
      },
      {
        heading: 'November: Closing Season',
        content: 'The temples close one by one starting in late October and November, culminating with a grand closing ceremony (usually on Diwali for Yamunotri/Gangotri, and Kartik Poornima for Kedarnath/Badrinath). Attending the closing ceremony is a rare and deeply moving spiritual experience.',
      },
      {
        heading: 'Quick Reference: Month-by-Month Summary',
        content: 'May: ⭐⭐⭐⭐ Great (crowds high). June: ⭐⭐⭐⭐⭐ Best. July–Aug: ❌ Avoid (monsoon). September: ⭐⭐⭐⭐⭐ Best. October: ⭐⭐⭐⭐ Very good. November: ⭐⭐⭐ Good (closing ceremonies).',
      },
    ],
    conclusion: 'Our expert recommendation: For first-timers or seniors, September-October is ideal. For those seeking the opening ceremony energy and lush landscape, late May is perfect. Whatever month you choose, register your yatra in advance and book with a trusted operator like us.',
  },
  'kedarnath-helicopter-booking-guide': {
    intro: 'The helicopter service to Kedarnath is one of the most sought-after conveniences for pilgrims who cannot undertake the 16 km trek. Here is everything you need to know to book your Kedarnath helicopter flight.',
    sections: [
      { heading: 'Why Choose Helicopter for Kedarnath?', content: 'The trek to Kedarnath is 16 km uphill with an altitude gain of over 1,500 meters. For senior citizens, those with health conditions, or pilgrims short on time, the helicopter offers a 15-minute flight versus 6-8 hours of strenuous trekking. Prices range from ₹3,500 to ₹7,000 one-way per person.' },
      { heading: 'Helicopter Operators & Helipads', content: 'Helicopters depart from Phata, Sersi, Guptkashi, or Sitapur helipads. Major operators include Himalayan Heli Services, Arrow Aviation, Pawan Hans, and Air Odyssey. The landing pad at Kedarnath is just 500 meters from the temple.' },
      { heading: 'How to Book Kedarnath Helicopter', content: 'Bookings open online via the official IRCTC website (irctc.co.in) and operator websites. Slots fill up extremely fast — book months in advance for May-June season. Our package handles all helicopter booking and coordination for you, with priority boarding privileges.' },
      { heading: 'Weight Limit & What to Carry', content: 'Most operators have a weight limit of 75 kg per person (including luggage). Carry only a small daypack with essentials: puja items, warm clothes, water, and ID proof. Leave heavy luggage at your hotel in Guptkashi.' },
    ],
    conclusion: 'Book the helicopter package with us and enjoy a stress-free, divinely arranged Kedarnath experience. We handle all bookings, coordination, and ensure priority darshan after your arrival.',
  },
  'char-dham-yatra-packing-list': {
    intro: 'Packing right for Char Dham Yatra is critical. The altitudes range from 1,400m to 3,583m, weather changes rapidly, and shops in the mountains are limited. Here is the definitive packing list.',
    sections: [
      { heading: 'Clothing & Footwear', content: 'Pack 3-4 sets of warm woollen clothing, a heavy jacket or down coat, rain poncho or waterproof jacket, thermal innerwear, comfortable walking shoes or trekking boots with good grip, and warm socks. For temple visits, bring traditional attire (dhoti/saree/salwar kameez).' },
      { heading: 'Medicines & Health', content: 'Altitude sickness medication (Diamox — consult doctor first), pain relievers, antacids, electrolyte sachets, bandages and antiseptic cream, personal prescription medicines for at least 5 extra days, and a blood pressure monitor if you are hypertensive. Our packages include a first aid kit.' },
      { heading: 'Religious / Puja Items', content: 'Puja thali, flowers and fruits for offerings, coconut, incense sticks (agarbatti), camphor (kapur), panchamrit ingredients if you plan a personal abhishek, sacred thread (mauli), and a small photo of your personal deity.' },
      { heading: 'Documents', content: 'Original photo ID (Aadhaar, Passport, or Voter ID), 4-6 passport-size photographs, Yatra registration slip (we provide this), medical certificate for seniors, and travel insurance documents.' },
      { heading: 'Technology & Miscellaneous', content: 'Power bank (phone charging is unreliable in mountains), offline Google Maps downloaded, water purification tablets or a UV purifier, sunscreen SPF 50+ (UV is intense at altitude), sunglasses, a walking stick for trekking, and warm hat and gloves.' },
    ],
    conclusion: 'Travel light — extra weight is exhausting at altitude. Our packages provide porter services for Kedarnath trek. When in doubt, consult our team before packing.',
  },
  'char-dham-yatra-cost-2025': {
    intro: 'Understanding the real cost of Char Dham Yatra helps you plan your budget accurately and avoid surprises. Here is a detailed breakdown of all expenses for 2025.',
    sections: [
      { heading: 'Package Cost: ₹15,000 – ₹50,000/person', content: 'Budget packages (standard hotels, AC vehicle, basic meals): ₹15,000–₹22,000. Standard packages (3-star hotels, all meals, guide): ₹22,000–₹35,000. Premium packages (4-star, helicopter to Kedarnath, VIP darshan): ₹40,000–₹60,000+. Our most popular Complete Char Dham (12-day) starts at ₹28,999/person.' },
      { heading: 'Helicopter (Optional): ₹4,000 – ₹8,000 one-way', content: 'Kedarnath helicopter costs ₹3,500–₹7,000 per person per way depending on operator and departure helipad. Full return helicopter package: ₹7,000–₹14,000. Prices increase during peak season (June, October).' },
      { heading: 'Puja & Donations: ₹1,000 – ₹20,000+', content: 'Free darshan is available at all temples. For special puja/abhishek: Yamunotri ₹500–₹2,000, Gangotri ₹500–₹3,000, Kedarnath ₹2,000–₹15,000 (VIP abhishek), Badrinath ₹1,000–₹10,000. Budget ₹5,000–₹8,000 for a meaningful puja experience across all four dhams.' },
      { heading: 'Porter & Pony: ₹3,000 – ₹8,000', content: 'Kedarnath trek porter (luggage only): ₹500–₹800. Pony (horse): ₹1,500–₹2,500 one-way. Palanquin (doli): ₹4,000–₹6,000 one-way. Yamunotri pony: ₹1,000–₹1,800 one-way.' },
      { heading: 'Hidden Costs to Budget For', content: 'Tips for guides and staff (₹500–₹1,000). Locker facilities at temples for shoes (₹10–₹20). Hot water/geyser in budget hotels (extra charge). Internet at mountain areas (limited, ₹50–₹100). Emergency medical expenses (buy travel insurance — ₹300–₹800).' },
    ],
    conclusion: 'A comfortable, well-organized 12-day Char Dham Yatra for two people typically costs ₹70,000–₹1,00,000 including flights to Dehradun. Our packages are competitively priced with no hidden costs. Call us for a customized budget plan for your group.',
  },
};

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[params.slug];
  const relatedPosts = blogPosts.filter(p => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8 text-white w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-amber-300 text-xs flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
            <span className="text-amber-300 text-xs flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
          </div>
          <h1 className="font-display text-2xl md:text-4xl font-bold leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-amber-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-orange-600">Blog</Link>
          <span>›</span>
          <span className="text-orange-600 truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        {/* Article */}
        <article className="lg:col-span-2" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={post.title} />
          <meta itemProp="datePublished" content={post.date} />

          {/* Intro */}
          {content && (
            <>
              <div className="bg-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl mb-8">
                <p className="text-gray-700 leading-relaxed italic" itemProp="description">{content.intro}</p>
              </div>

              <div className="prose max-w-none space-y-8" itemProp="articleBody">
                {content.sections.map((section, i) => (
                  <section key={i}>
                    <h2 className="font-display text-xl font-bold text-amber-900 mb-3 border-b border-orange-100 pb-2">{section.heading}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </section>
                ))}
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-amber-900 mb-2">✅ Key Takeaway</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{content.conclusion}</p>
              </div>
            </>
          )}

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                <Tag size={11} /> {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-6 text-white text-center">
            <div className="text-2xl mb-2">🙏</div>
            <h3 className="font-display text-xl font-bold mb-2">Ready to Begin Your Yatra?</h3>
            <p className="text-amber-200 text-sm mb-4">Our pilgrimage experts are ready to plan your perfect Char Dham journey.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors">Book Now</Link>
              <a href="https://wa.me/919068403363" className="bg-green-500 hover:bg-green-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-orange-600 text-white rounded-2xl p-5 text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-display text-lg font-bold mb-1">Need Expert Advice?</h3>
            <p className="text-orange-100 text-xs mb-3">Talk to our yatra specialists</p>
            <a href="tel:+919068403363" className="block bg-white text-orange-700 font-bold py-2 rounded-full text-sm mb-2">Call Now</a>
            <a href="https://wa.me/919068403363" className="block bg-green-500 text-white font-bold py-2 rounded-full text-sm">WhatsApp</a>
          </div>

          <div className="bg-amber-50 border border-orange-100 rounded-2xl p-5">
            <h3 className="font-display text-lg font-bold text-amber-900 mb-3">Related Articles</h3>
            <div className="space-y-4">
              {relatedPosts.map(rp => (
                <Link key={rp.id} href={"/blog/" + rp.slug} className="flex gap-3 group">
                  <img src={rp.image} alt={rp.title} className="w-16 h-16 object-cover rounded-lg shrink-0" loading="lazy" />
                  <div>
                    <div className="text-xs font-semibold text-amber-900 group-hover:text-orange-600 transition-colors leading-tight line-clamp-2">{rp.title}</div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Clock size={10} /> {rp.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white border border-orange-100 rounded-2xl p-5">
            <h3 className="font-display text-lg font-bold text-amber-900 mb-3">Popular Packages</h3>
            <div className="space-y-3">
              {[
                { name: '12-Day Char Dham', price: '₹28,999' },
                { name: '7-Day Do Dham', price: '₹15,999' },
                { name: 'Kedarnath Heli', price: '₹12,999' },
              ].map(p => (
                <Link key={p.name} href="/tour-packages" className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 hover:text-orange-600 transition-colors">
                  <span className="text-sm text-gray-700">{p.name}</span>
                  <span className="text-sm font-bold text-orange-600">{p.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "image": post.image,
        "url": "https://chardhamyatra.in/blog/" + post.slug,
        "publisher": { "@type": "Organization", "name": "Char Dham Yatra", "url": "https://chardhamyatra.in" },
        "author": { "@type": "Organization", "name": "Char Dham Yatra Team" },
        "keywords": post.tags.join(', '),
      })}} />
    </>
  );
}