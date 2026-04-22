import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export const metadata = {
  title: 'Char Dham Yatra Blog | Travel Tips, Guides & Pilgrimage Advice',
  description: 'Expert advice, travel tips, and guides for Char Dham Yatra. Best time to visit, packing lists, cost breakdown, helicopter booking — everything you need to plan your pilgrimage.',
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-700" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Knowledge Center</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Yatra Blog</h1>
          <p className="text-amber-200">Expert guides, tips & insights for your sacred journey</p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>›</span>
          <span className="text-orange-600">Blog</span>
        </div>
      </div>

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured post */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100 mb-10 md:flex card-hover">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">{featuredPost.category}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={11} /> {featuredPost.readTime}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-amber-900 mb-3 leading-tight">{featuredPost.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-5">
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-5">
                {featuredPost.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
              <Link href={"/blog/" + featuredPost.slug} className="btn-saffron px-5 py-2.5 rounded-full text-sm font-semibold inline-block self-start">
                Read Full Guide →
              </Link>
            </div>
          </article>

          {/* Other posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow border border-orange-100 card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-amber-900 mb-2 leading-tight">{post.title}</h2>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link href={"/blog/" + post.slug} className="text-orange-600 hover:text-orange-800 text-xs font-semibold">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 bg-amber-900 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-2">Get Yatra Updates & Tips</h2>
          <p className="text-amber-300 text-sm mb-5">Subscribe for opening dates, travel tips, and exclusive package offers.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 rounded-full text-gray-800 text-sm focus:outline-none" />
            <button className="btn-saffron px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Char Dham Yatra Blog",
        "description": "Expert guides and tips for Hindu pilgrimage in Uttarakhand",
        "blogPost": blogPosts.map(p => ({
          "@type": "BlogPosting",
          "headline": p.title,
          "description": p.excerpt,
          "datePublished": p.date,
          "url": "https://chardhamyatra.in/blog/" + p.slug,
        }))
      })}} />
    </>
  );
}