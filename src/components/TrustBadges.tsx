'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

export default function TrustBadges() {
  const { lang } = useLang();
  const copy = t[lang].trust;

  return (
    <section className="py-14 reveal">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          {copy.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 items-start hover:-translate-y-0.5 transition-transform duration-200"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
