import { useState } from 'react';
import { Clock, ExternalLink, MapPin, Truck } from 'lucide-react';
import { AUTHOR_CONTACT } from '../data/books';
import { Translations } from '../data/translations';
import { Language } from '../types/book';
import { publicAsset } from '../utils/assets';

interface FooterProps {
  t: Translations;
  language: Language;
  onNavigateHome: (sectionId?: string) => void;
}

export function Footer({
  t,
  language,
  onNavigateHome,
}: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="relative z-20 border-t border-sky-900/30 bg-[#09173A] text-slate-300 dark:border-[#1B315E] dark:bg-[#050C1D]">
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-gradient-to-r from-[#059669] via-[#0EA5E9] to-[#DC2626]"
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
          {/* Brand, Address & Social */}
          <div className="space-y-1.5 md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigateHome('top')}
              className="flex cursor-pointer items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-sky-400"
            >
              {!logoError && (
                <img
                  src={publicAsset('assets/see-logo-mark.png')}
                  alt="Selim English Education logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-8 w-8 shrink-0 rounded-full bg-white p-0.5 object-contain"
                />
              )}
              <span className="text-base font-bold text-white">
                {t.brandTitle}
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sky-100/75">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#10B981]" aria-hidden="true" />
                <span>
                  {language === 'bn' ? AUTHOR_CONTACT.addressBn : AUTHOR_CONTACT.addressEn}
                </span>
              </span>
              <a
                href={AUTHOR_CONTACT.fbPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-200 transition-colors hover:text-[#34D399]"
              >
                <span>{t.authorHeroFb}</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <nav
            aria-label={t.footerQuickLinks}
            className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs md:col-span-3 md:justify-center"
          >
            {[
              { id: 'top', label: t.navHome },
              { id: 'bookshelf', label: t.navBookshelf },
              { id: 'speed-post', label: t.navDelivery },
              { id: 'author', label: t.navAuthor },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigateHome(item.id)}
                className="cursor-pointer font-medium text-sky-100/80 transition-colors hover:text-[#38BDF8]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Office Time & Speed Post Note */}
          <div className="flex flex-col gap-1 text-xs text-sky-100/80 md:col-span-4 md:items-end">
            <p className="inline-flex items-center gap-1.5 tabular-nums">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#38BDF8]" aria-hidden="true" />
              <span>{t.callHoursNote}</span>
            </p>
            <p className="inline-flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 shrink-0 text-[#34D399]" aria-hidden="true" />
              <span>{t.footerSpeedPostNote}</span>
            </p>
          </div>
        </div>

        {/* Compact Bottom Rights & Credit Bar */}
        <div className="mt-3.5 border-t border-sky-900/50 pt-3 text-center text-xs text-sky-200/70 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>{t.footerRights}</p>
          <p className="mt-1 font-medium text-emerald-300 sm:mt-0">
            {t.footerCredit}
          </p>
        </div>
      </div>
    </footer>
  );
}
