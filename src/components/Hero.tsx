'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function Hero() {
  const { lang } = useLang();
  const copy = t[lang].hero;

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=1200&q=80"
        alt=""
        fill
        priority
        className="object-cover object-center-top"
        sizes="100vw"
      />
      {/* Dark teal overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(26,143,143,0.82) 0%, rgba(10,60,60,0.90) 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-14 pb-16 text-center">
        <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 fade-in">
          {copy.badge}
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2 fade-in delay-1">
          {copy.headline1}
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 fade-in delay-2">
          {copy.headline2}
        </h1>

        <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8 fade-in delay-3">
          {copy.sub}
        </p>

        {/* Salary teaser — solid white box */}
        <div className="inline-flex flex-col items-center bg-white rounded-2xl px-8 py-4 mb-8 fade-in delay-3 shadow-lg">
          <span className="text-4xl font-extrabold text-gray-900">SAR 1,500–2,100</span>
          <span className="text-gray-500 text-sm mt-1">{copy.salaryLabel}</span>
          <span className="text-gray-400 text-xs mt-0.5">{copy.salaryNote}</span>
        </div>

        <div className="fade-in delay-4">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:brightness-95 active:scale-95 transition-all"
          >
            {copy.cta}
          </a>
        </div>

        <p className="mt-5 text-white/50 text-sm fade-in delay-4">{copy.trustLine}</p>
      </div>
    </section>
  );
}
