'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function WelfareOfficer() {
  const { lang } = useLang();
  const copy = t[lang].welfare;

  return (
    <section className="py-14 bg-gray-50 reveal">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-xs font-bold tracking-widest text-[#0B4D43] mb-3">{copy.eyebrow}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{copy.heading}</h2>
        <p className="text-gray-600 text-base mb-7 leading-relaxed">{copy.body}</p>

        <ul className="text-left inline-flex flex-col gap-3 mb-8">
          {copy.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-gray-700 text-sm">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0B4D43] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>

        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-[#0B4D43] text-[#0B4D43] font-semibold px-6 py-3 rounded-full hover:bg-[#0B4D43] hover:text-white transition-colors text-sm"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
