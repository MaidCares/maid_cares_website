'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const CERT_ICONS = [
  // Baby/childcare
  <svg key="child" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>,
  // Elder care
  <svg key="elder" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <circle cx="12" cy="7" r="4"/>
    <path d="M8 21v-2a4 4 0 014-4h.5M15 17l2 2 4-4"/>
  </svg>,
  // Household
  <svg key="house" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9"/>
  </svg>,
];

export default function Certification() {
  const { lang } = useLang();
  const copy = t[lang].certification;

  return (
    <section className="py-14 bg-[#F0FAFA] reveal">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{copy.heading}</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{copy.sub}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {copy.cards.map((card, i) => (
            <div key={card.title} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="w-14 h-14 rounded-full bg-[#E8F9F9] flex items-center justify-center text-[#1A8F8F] mb-3">
                {CERT_ICONS[i]}
              </div>
              <p className="font-bold text-gray-900 text-sm">{card.title}</p>
              <p className="text-gray-500 text-sm mt-1">{card.desc}</p>
              <p className="mt-3 text-[#1A8F8F] font-semibold text-xs">{card.benefit}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs">{copy.note}</p>
      </div>
    </section>
  );
}
