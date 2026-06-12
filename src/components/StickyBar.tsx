'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const WA_HREF = 'https://wa.me/1234567890?text=Hi%20MaidCares!%20Gusto%20kong%20mag-apply.';

export default function StickyBar() {
  const { lang } = useLang();
  const copy = t[lang].stickyBar;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#25D366] transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full py-4 text-white font-bold text-base"
      >
        {copy}
      </a>
    </div>
  );
}
