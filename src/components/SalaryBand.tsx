'use client';

import { useLang } from '@/context/LanguageContext';
import { t } from '@/copy/translations';

export default function SalaryBand() {
  const { lang } = useLang();
  const copy = t[lang].salary;

  return (
    <section className="py-14 bg-gray-50 reveal">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          {copy.heading}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Saudi Arabia */}
          <div className="relative bg-white rounded-2xl border border-gray-200 p-6">
            {copy.sa.badge && (
              <span className="absolute top-4 right-4 bg-[#0B4D43] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {copy.sa.badge}
              </span>
            )}
            <p className="text-sm font-semibold text-[#0B4D43] mb-1">{copy.sa.country}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-gray-900">SAR 1,200</span>
              <span className="text-gray-500 text-sm">{copy.sa.per}</span>
            </div>
            <p className="mt-2 text-sm text-[#0B4D43] font-medium">{copy.sa.note}</p>
          </div>

          {/* UAE */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-sm font-semibold text-[#0B4D43] mb-1">{copy.uae.country}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-gray-900">AED 1,500</span>
              <span className="text-gray-500 text-sm">{copy.uae.per}</span>
            </div>
            <p className="mt-2 text-sm text-[#0B4D43] font-medium">{copy.uae.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
