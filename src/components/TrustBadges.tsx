'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const ICONS = [
  // Passport
  <svg key="passport" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M8 17c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
  </svg>,
  // Money
  <svg key="money" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v12M9 9h4.5a1.5 1.5 0 010 3H9m0 3h5"/>
  </svg>,
  // Home
  <svg key="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
    <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9"/>
  </svg>,
  // Shield
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
    <path d="M12 2l8 4v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V6l8-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>,
  // Heart
  <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>,
  // Certificate
  <svg key="cert" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
    <rect x="2" y="4" width="20" height="14" rx="2"/>
    <path d="M8 9h8M8 12h5"/>
    <circle cx="17" cy="17" r="3"/>
    <path d="M17 20v3l-1.5-1-1.5 1v-3"/>
  </svg>,
];

export default function TrustBadges() {
  const { lang } = useLang();
  const copy = t[lang].trust;

  return (
    <section className="py-14 bg-[#F0FAFA] reveal">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          {copy.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.items.map((item, i) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 items-start hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[#E8F9F9] flex items-center justify-center flex-shrink-0 text-[#1A8F8F]">
                {ICONS[i]}
              </div>
              <div className="pt-1">
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
