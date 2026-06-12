'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

export default function HowItWorks() {
  const { lang } = useLang();
  const copy = t[lang].howItWorks;

  return (
    <section className="py-14 bg-[#0B4D43] reveal">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">{copy.heading}</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {copy.steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-3xl mb-3">
                {step.icon}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/40 text-xs font-bold">0{i + 1}</span>
                <p className="text-white font-semibold text-sm">{step.title}</p>
              </div>
              <p className="text-white/70 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
