// Replace with actual worker video embeds
export default function VideoTestimonials() {
  const placeholders = [
    { name: 'Maria, Saudi Arabia', quote: '"Libo na ang nakatulong sa amin..."' },
    { name: 'Ana, UAE / Dubai', quote: '"Safe, libre, at legit talaga."' },
  ];

  return (
    <section className="py-14 bg-gray-50 reveal">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-6">
          {placeholders.map((p) => (
            <div key={p.name}>
              <div className="w-full aspect-video rounded-2xl bg-gray-800 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="mt-3 font-semibold text-gray-900 text-sm">{p.name}</p>
              <p className="text-gray-500 text-sm">{p.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
