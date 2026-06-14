'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const copy = t[lang].navbar;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-[#1A8F8F] font-bold text-lg tracking-tight">MaidCares</span>

        <div className="flex items-center gap-3">
          {/* Language toggle pill — 64×32px, two clickable halves */}
          <div className="flex w-16 h-8 rounded-full border border-[#1A8F8F] overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang('taglish')}
              aria-pressed={lang === 'taglish'}
              className={`flex-1 flex items-center justify-center transition-colors duration-150 ${lang === 'taglish' ? 'bg-[#1A8F8F] text-white' : 'bg-white text-[#1A8F8F]'}`}
            >
              TL
            </button>
            <button
              onClick={() => setLang('english')}
              aria-pressed={lang === 'english'}
              className={`flex-1 flex items-center justify-center transition-colors duration-150 ${lang === 'english' ? 'bg-[#1A8F8F] text-white' : 'bg-white text-[#1A8F8F]'}`}
            >
              EN
            </button>
          </div>

          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:brightness-95 transition-all"
          >
            {copy.whatsapp}
          </a>
        </div>
      </div>
    </nav>
  );
}
