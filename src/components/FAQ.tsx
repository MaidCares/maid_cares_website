'use client';

import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

export default function FAQ() {
  const { lang } = useLang();
  const copy = t[lang].faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 reveal">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          {copy.heading}
        </h2>

        <div className="flex flex-col gap-2">
          {copy.items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between px-5 py-4 gap-3"
              >
                <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 text-[#0B4D43] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
