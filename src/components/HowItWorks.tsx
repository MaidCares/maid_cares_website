'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

const STEP_ICONS = ['💬', '📞', '✈️'];

const Arrow = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="hidden md:block flex-shrink-0 mt-6">
    <path d="M0 12h36M28 4l8 8-8 8" stroke="white" strokeOpacity="0.4" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function HowItWorks() {
  const { lang } = useLang();
  const copy = t[lang].howItWorks;

  return (
    <section className="py-14 bg-[#1A8F8F] reveal">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">{copy.heading}</h2>

        <div className="flex flex-col sm:flex-row items-start justify-center gap-6">
          {copy.steps.map((step, i) => (
            <>
              <div key={step.title} className="flex flex-col items-center flex-1">
                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-3xl mb-3">
                  {STEP_ICONS[i]}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white/40 text-xs font-bold">0{i + 1}</span>
                  <p className="text-white font-semibold text-sm">{step.title}</p>
                </div>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
              {i < copy.steps.length - 1 && <Arrow key={`arrow-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
