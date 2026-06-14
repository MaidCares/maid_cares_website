'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return value;
}

export default function SalaryBand() {
  const { lang } = useLang();
  const copy = t[lang].salary;
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sarVal = useCountUp(2100, started);
  const aedVal = useCountUp(2700, started);

  return (
    <section ref={ref} className="py-14 bg-white reveal">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          {copy.heading}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Saudi Arabia */}
          <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            {copy.sa.badge && (
              <span className="absolute top-4 right-4 bg-[#1A8F8F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {copy.sa.badge}
              </span>
            )}
            <p className="text-sm font-semibold text-[#1A8F8F] mb-1">{copy.sa.country}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-gray-900">
                SAR 1,500–{sarVal.toLocaleString()}
              </span>
              <span className="text-gray-500 text-sm">{copy.sa.per}</span>
            </div>
            <p className="mt-2 text-sm text-[#1A8F8F] font-medium">{copy.sa.note}</p>
          </div>

          {/* UAE */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#1A8F8F] mb-1">{copy.uae.country}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-gray-900">
                AED 2,000–{aedVal.toLocaleString()}
              </span>
              <span className="text-gray-500 text-sm">{copy.uae.per}</span>
            </div>
            <p className="mt-2 text-sm text-[#1A8F8F] font-medium">{copy.uae.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
