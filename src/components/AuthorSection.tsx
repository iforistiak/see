import { useState } from 'react';
import { Clock, ExternalLink, GraduationCap, MapPin, Phone } from 'lucide-react';
import { AUTHOR_CONTACT } from '../data/books';
import { Translations } from '../data/translations';
import { Language } from '../types/book';
import { publicAsset } from '../utils/assets';

interface AuthorSectionProps {
  t: Translations;
  language: Language;
}

export function AuthorSection({ t, language }: AuthorSectionProps) {
  const [portraitError, setPortraitError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="author"
      className="border-t border-sky-100 bg-gradient-to-b from-[#F4FAFF]/70 to-white py-12 dark:border-[#1B315E] dark:from-[#0A1530] dark:to-[#071024] sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-sky-100 pb-5 dark:border-[#1B315E]">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#059669] uppercase dark:text-emerald-400">
              {t.authorSectionSubtitle}
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#0F2557] dark:text-white sm:text-3xl">
              {t.authorSectionTitle}
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#0284C7] dark:text-sky-400">
              {t.authorRole}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={AUTHOR_CONTACT.fbPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-[#0F2557] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#09173A] sm:text-sm"
            >
              <span>{t.fbPageBtn}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={AUTHOR_CONTACT.fbProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold text-[#0F2557] transition-colors hover:border-[#059669] hover:text-[#059669] dark:border-[#1B315E] dark:bg-[#0D1B38] dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300 sm:text-sm"
            >
              <span>{t.fbProfileBtn}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Asymmetric Executive Editorial Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column (4 cols): Portrait Pedestal + Brand Banner + Contact Strip */}
          <div className="overflow-hidden rounded-2xl border border-sky-200/80 bg-white shadow-xs dark:border-[#1B315E] dark:bg-[#0D1B38] lg:col-span-4">
            <div className="relative flex justify-center bg-gradient-to-br from-[#0F2557] via-[#0B2A5B] to-[#065F46] px-6 pt-6">
              {!portraitError ? (
                <img
                  src={publicAsset('assets/author-portrait-v2.png')}
                  alt="Md. Selim Aktar — Rajshahi University"
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitError(true)}
                  className="h-56 w-auto object-contain object-bottom drop-shadow-[0_14px_24px_rgba(0,0,0,0.45)]"
                />
              ) : (
                <div className="flex h-52 items-center justify-center text-white">
                  <span className="text-xl font-bold">{t.authorSectionTitle}</span>
                </div>
              )}
            </div>

            <div className="space-y-3 p-5">
              {!logoError && (
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-white p-2.5 dark:border-[#1B315E]">
                  <img
                    src={publicAsset('assets/aistudio/image_92932d13.png')}
                    alt="Selim English Education — West of Nogor Bhobon, Rajshahi"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
              )}

              <div className="space-y-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#DC2626] dark:text-red-400" aria-hidden="true" />
                  <span>
                    {language === 'bn' ? AUTHOR_CONTACT.addressBn : AUTHOR_CONTACT.addressEn}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-[#059669] dark:text-emerald-400" aria-hidden="true" />
                  <span className="tabular-nums">{t.callHoursNote}</span>
                </p>
                <a
                  href={`tel:${AUTHOR_CONTACT.phoneTel}`}
                  className="inline-flex items-center gap-2 font-bold text-[#0F2557] hover:text-[#DC2626] dark:text-sky-300 dark:hover:text-red-400"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#0EA5E9]" aria-hidden="true" />
                  <span className="tabular-nums">{AUTHOR_CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Bio + Numbered Institutional Credentials Grid */}
          <div className="space-y-6 lg:col-span-8">
            <div className="rounded-2xl border border-sky-100 bg-white p-6 dark:border-[#1B315E] dark:bg-[#0D1B38]">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                {t.authorBio}
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#0F2557] dark:text-white">
                <GraduationCap className="h-4 w-4 text-[#059669] dark:text-emerald-400" aria-hidden="true" />
                <span>{t.credentialsHeading}</span>
              </h3>

              <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.credentialsList.map((cred, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white p-4 transition-colors hover:border-[#0EA5E9]/60 dark:border-[#1B315E] dark:bg-[#0D1B38] dark:hover:border-sky-400/50"
                  >
                    <span className="font-mono text-xs font-bold text-[#0EA5E9] tabular-nums dark:text-sky-400">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-[13px]">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
