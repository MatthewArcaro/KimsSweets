export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-2 md:order-1 shadow-2xl border-8 border-pink-50">
            <img 
              src="/home-kitchen-baking-scene.jpg" 
              alt="Our kitchen" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Text Column */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-bold tracking-wide uppercase">
              Our Story ✨
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-balance text-gray-900 leading-tight">
              Baked in a Real
              <br />
              <span className="text-pink-500 italic">Home Kitchen</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
              <p>
                Kim's Sweets started in 2018 when Kim began sharing her grandmother's recipes with friends and neighbors.
                What began as a weekend hobby soon became a passion for bringing homemade comfort to the community.
              </p>
              <p>
                Every morning, we wake up early to prepare fresh batches of bread, pastries, and treats. We believe in
                using real butter, organic flour, and locally-sourced ingredients whenever possible.
              </p>
              <p>
                Our home kitchen is where the magic happens—no industrial equipment, just traditional methods,
                time-honored recipes, and a whole lot of love.
              </p>
            </div>
            
            {/* Optional signature or decorative element */}
            <div className="pt-4">
              <p className="font-serif text-2xl text-pink-500">— Kim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}