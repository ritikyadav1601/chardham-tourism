import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-4">🕉️</div>
        <h1 className="font-display text-5xl font-bold text-amber-900 mb-2">404</h1>
        <h2 className="font-display text-2xl font-bold text-amber-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">Like a pilgrim who has wandered off the path, this page cannot be found. Let us guide you back.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-saffron px-6 py-3 rounded-full font-semibold">Return Home</Link>
          <Link href="/char-dham-yatra" className="border-2 border-orange-400 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">Explore Char Dham</Link>
        </div>
      </div>
    </div>
  );
}

