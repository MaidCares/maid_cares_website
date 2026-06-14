'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function FinalCTA() {
  const { lang } = useLang();
  const copy = t[lang].finalCta;

  return (
    <section className="py-16 bg-[#1A8F8F] reveal">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{copy.heading}</h2>
        <p className="text-white/70 mb-8">{copy.sub}</p>

        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:brightness-95 active:scale-95 transition-all"
        >
          {copy.cta}
        </a>

        <p className="mt-5 text-white/40 text-sm">{copy.note}</p>
      </div>
    </section>
  );
}
