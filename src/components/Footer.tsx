import { useState } from 'react';
import { ExternalLink, MapPin, Phone, Truck, Wallet } from 'lucide-react';
import { AUTHOR_CONTACT } from '../data/books';
import { Translations } from '../data/translations';
import { FilterCategory, Language } from '../types/book';

interface FooterProps {
  t: Translations;
  language: Language;
  onNavigateHome: (sectionId?: string) => void;
  onSelectCategory: (cat: FilterCategory) => void;
}

export function Footer({
  t,
  language,
  onNavigateHome,
  onSelectCategory,
}: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  const handleCategoryJump = (cat: FilterCategory) => {
    onSelectCategory(cat);
    onNavigateHome('bookshelf');
  };

  return (
    <footer className="relative z-20 border-t border-indigo-900/30 bg-[#12102E] text-slate-300 dark:border-[#25224D] dark:bg-[#070614]">
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-gradient-to-r from-[#312E81] via-[#FF5A1F] to-red-600"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand Logo + Summary + Address */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigateHome('top')}
              className="flex cursor-pointer items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-orange-400"
            >
              {!logoError && (
                <img
                  src="/assets/see-logo-mark.png"
                  alt="Selim English Education logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-11 w-11 shrink-0 rounded-full bg-white p-0.5 object-contain"
                />
              )}
              <span className="text-lg font-bold text-white">
                {t.brandTitle}
              </span>
            </button>

            <p className="max-w-sm text-sm leading-relaxed text-indigo-100/75">
              {t.footerSummary}
            </p>

            <div className="flex items-start gap-2 text-xs text-indigo-100/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
              <span>
                {language === 'bn' ? AUTHOR_CONTACT.addressBn : AUTHOR_CONTACT.addressEn}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              {t.footerQuickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { id: 'top', label: t.navHome },
                { id: 'bookshelf', label: t.navBookshelf },
                { id: 'speed-post', label: t.navDelivery },
                { id: 'author', label: t.navAuthor },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateHome(item.id)}
                    className="cursor-pointer text-indigo-100/75 transition-colors hover:text-[#FF5A1F]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Book Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              {t.footerCategories}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {(
                [
                  { id: 'grammar', label: t.filterGrammar },
                  { id: 'admission', label: t.filterAdmission },
                  { id: 'academic', label: t.filterAcademic },
                  { id: 'translation', label: t.filterTranslation },
                  { id: 'upcoming', label: t.filterUpcoming },
                ] as const
              ).map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => handleCategoryJump(cat.id)}
                    className="cursor-pointer text-indigo-100/75 transition-colors hover:text-[#FF5A1F]"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Order, Payment & Social */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              {t.footerOrderPayment}
            </h3>

            <a
              href={`tel:${AUTHOR_CONTACT.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-red-600 px-4 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="tabular-nums">{AUTHOR_CONTACT.phoneDisplay}</span>
            </a>

            <div className="space-y-2 pt-1 text-xs text-indigo-100/75">
              <p className="flex items-center gap-2">
                <Wallet className="h-3.5 w-3.5 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
                <span className="tabular-nums">{t.footerPaymentNote}</span>
              </p>
              <p className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 shrink-0 text-indigo-300" aria-hidden="true" />
                <span>{t.footerSpeedPostNote}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium">
              <a
                href={AUTHOR_CONTACT.fbPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-200 transition-colors hover:text-[#FF5A1F]"
              >
                <span>{t.fbPageBtn}</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href={AUTHOR_CONTACT.fbProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-200 transition-colors hover:text-[#FF5A1F]"
              >
                <span>{t.fbProfileBtn}</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-indigo-900/50 pt-6 text-center text-xs text-indigo-200/60 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>{t.footerRights}</p>
          <p className="mt-2 sm:mt-0">{t.callHoursNote}</p>
        </div>
      </div>
    </footer>
  );
}
