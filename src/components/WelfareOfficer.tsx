'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function WelfareOfficer() {
  const { lang } = useLang();
  const copy = t[lang].welfare;

  return (
    <section className="py-14 bg-white reveal">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-bold tracking-widest text-[#1A8F8F] mb-3">{copy.eyebrow}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{copy.heading}</h2>
            <p className="text-gray-600 text-base mb-7 leading-relaxed">{copy.body}</p>

            <ul className="inline-flex flex-col gap-3 mb-8 text-left">
              {copy.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1A8F8F] flex items-center justify-center flex-shrink-0">
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
              className="inline-block border-2 border-[#1A8F8F] text-[#1A8F8F] font-semibold px-6 py-3 rounded-full hover:bg-[#1A8F8F] hover:text-white transition-colors text-sm"
            >
              {copy.cta}
            </a>
          </div>

          {/* Photo side */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative w-full md:w-[320px] h-[380px] rounded-[20px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                alt="Welfare officer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <p className="mt-2 text-[#6B7280] text-xs italic text-center">
              Your welfare officer — assigned before you leave
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
