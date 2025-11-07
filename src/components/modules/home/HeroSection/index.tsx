export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      {/* Glow Elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-300 opacity-30 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-300 opacity-30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="relative z-10">
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            🔥 New Arrivals!
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover a <span className="text-indigo-600">New Style</span> for
            You
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            Shop the trendiest outfits with premium quality. Redefine your
            fashion — make everyday stylish!
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Shop Now
            </button>
            <button className="px-8 py-3 bg-white shadow-sm border border-gray-200 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
              Explore Collection
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <span>✅ Free Shipping</span>
            <span>✅ Easy Returns</span>
            <span>✅ 24/7 Support</span>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="relative flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-4 relative z-10">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="Featured Product"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
