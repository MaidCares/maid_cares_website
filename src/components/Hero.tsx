'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function Hero() {
  const { lang } = useLang();
  const copy = t[lang].hero;

  return (
    <section className="relative bg-[#0B4D43] text-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute bottom-0 -left-10 w-48 h-48 rounded-full bg-white/5" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 pt-14 pb-16 text-center">
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

        {/* Salary teaser */}
        <div className="inline-flex flex-col items-center bg-white/10 rounded-2xl px-8 py-4 mb-8 fade-in delay-3">
          <span className="text-4xl font-extrabold">SAR 1,200+</span>
          <span className="text-white/70 text-sm mt-1">{copy.salaryLabel}</span>
          <span className="text-white/50 text-xs mt-0.5">{copy.salaryNote}</span>
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
