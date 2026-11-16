import { useState } from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { AUTHOR_CONTACT } from '../data/books';
import { Translations } from '../data/translations';
import { Language } from '../types/book';

interface AuthorSectionProps {
  t: Translations;
  language: Language;
}

export function AuthorSection({ t }: AuthorSectionProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="author"
      className="border-t border-indigo-100 py-12 dark:border-[#25224D] sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-indigo-100 bg-[#F5F5FF] p-5 dark:border-[#25224D] dark:bg-[#14122D]">
              {!logoError ? (
                <div className="overflow-hidden rounded-xl bg-white p-3 shadow-xs">
                  <img
                    src="/assets/aistudio/image_92932d13.png"
                    alt="Selim English Education — West of Nogor Bhobon, Rajshahi"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <div className="rounded-xl bg-[#312E81] p-6 text-center text-white">
                  <p className="text-xl font-bold">{t.brandTitle}</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest text-[#FF5A1F] uppercase">
              {t.authorSectionSubtitle}
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#1E1B4B] dark:text-white sm:text-3xl">
              {t.authorSectionTitle}
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#312E81] dark:text-indigo-300">
              {t.authorRole}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.authorBio}
            </p>

            <div className="mt-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#1E1B4B] dark:text-white">
                <GraduationCap className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                <span>{t.credentialsHeading}</span>
              </h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {t.credentialsList.map((cred, index) => (
                  <li
                    key={index}
                    className="rounded-xl border border-indigo-100 bg-[#F5F5FF]/70 px-3.5 py-2 text-xs font-medium leading-snug text-slate-700 dark:border-[#25224D] dark:bg-[#14122D] dark:text-slate-200"
                  >
                    {cred}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={AUTHOR_CONTACT.fbPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#312E81] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1E1B4B] sm:text-sm"
              >
                <span>{t.fbPageBtn}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={AUTHOR_CONTACT.fbProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-indigo-200 bg-white px-5 py-2 text-xs font-semibold text-[#1E1B4B] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] dark:border-[#2E2A5C] dark:bg-[#14122D] dark:text-slate-200 dark:hover:border-orange-400 sm:text-sm"
              >
                <span>{t.fbProfileBtn}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
