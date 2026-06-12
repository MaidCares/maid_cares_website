'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

export default function Certification() {
  const { lang } = useLang();
  const copy = t[lang].certification;

  return (
    <section className="py-14 reveal">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{copy.heading}</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{copy.sub}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {copy.cards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-gray-200 p-5">
              <span className="text-3xl">{card.icon}</span>
              <p className="font-bold text-gray-900 mt-3 text-sm">{card.title}</p>
              <p className="text-gray-500 text-sm mt-1">{card.desc}</p>
              <p className="mt-3 text-[#0B4D43] font-semibold text-xs">{card.benefit}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs">{copy.note}</p>
      </div>
    </section>
  );
}
