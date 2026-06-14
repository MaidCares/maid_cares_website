// Replace with actual worker video embeds
export default function VideoTestimonials() {
  const placeholders = [
    { name: 'Maria, Saudi Arabia', quote: '"Libo na ang nakatulong sa amin..."' },
    { name: 'Ana, UAE / Dubai', quote: '"Safe, libre, at legit talaga."' },
  ];

  return (
    <section className="py-14 bg-white reveal">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs font-bold tracking-widest text-[#1A8F8F] mb-6 uppercase">
          Real Workers. Real Stories.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {placeholders.map((p) => (
            <div key={p.name}>
              <div className="relative w-full aspect-video rounded-2xl bg-[#0D2B2B] overflow-hidden">
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-white bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Bottom gradient bar with name */}
                <div className="absolute bottom-0 left-0 right-0 z-10 px-3 py-3"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                  <p className="text-white text-[13px] font-bold text-left">{p.name}</p>
                </div>
              </div>
              <p className="mt-3 text-[#6B7280] text-sm italic">{p.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
