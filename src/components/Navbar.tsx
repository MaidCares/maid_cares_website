'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const copy = t[lang].navbar;

  function toggle() {
    setLang(lang === 'taglish' ? 'english' : 'taglish');
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-[#0B4D43] font-bold text-lg tracking-tight">MaidCares</span>

        <div className="flex items-center gap-3">
          {/* Language toggle pill */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="relative flex items-center w-16 h-8 rounded-full border border-[#0B4D43] overflow-hidden text-xs font-semibold"
          >
            <span
              className={`absolute inset-y-0 left-0 w-1/2 flex items-center justify-center transition-colors duration-150 ${lang === 'taglish' ? 'bg-[#0B4D43] text-white' : 'bg-white text-[#0B4D43]'}`}
            >
              TL
            </span>
            <span
              className={`absolute inset-y-0 right-0 w-1/2 flex items-center justify-center transition-colors duration-150 ${lang === 'english' ? 'bg-[#0B4D43] text-white' : 'bg-white text-[#0B4D43]'}`}
            >
              EN
            </span>
          </button>

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
