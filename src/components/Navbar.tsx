import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { AUTHOR_CONTACT } from '../data/books';
import { Translations } from '../data/translations';

interface NavbarProps {
  t: Translations;
  onNavigateHome: (sectionId?: string) => void;
}

export function Navbar({ t, onNavigateHome }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateHome(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-indigo-100/80 bg-white/95 shadow-[0_1px_12px_-4px_rgba(30,27,75,0.08)] backdrop-blur-md dark:border-[#25224D]/80 dark:bg-[#0B0A1A]/95 dark:shadow-[0_1px_16px_-4px_rgba(0,0,0,0.65)]">
      {/* Top Deep Indigo -> Vibrant Orange -> Crimson Brand Accent Line */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-gradient-to-r from-[#1E1B4B] via-[#FF5A1F] to-red-600"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Emblem + Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('top')}
          className="group flex cursor-pointer items-center gap-2.5 whitespace-nowrap shrink-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          {!logoError && (
            <img
              src="/assets/see-logo-mark.png"
              alt="Selim English Education emblem"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-9 w-9 shrink-0 rounded-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          )}
          <span className="text-lg font-bold tracking-tight text-[#1E1B4B] transition-colors group-hover:text-[#FF5A1F] dark:text-white dark:group-hover:text-orange-400 sm:text-xl">
            {t.brandTitle}
          </span>
        </button>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex"
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
              onClick={() => handleNavClick(item.id)}
              className="group relative cursor-pointer whitespace-nowrap shrink-0 py-1.5 transition-colors hover:text-[#1E1B4B] dark:hover:text-orange-400"
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#312E81] to-[#FF5A1F] transition-all duration-200 group-hover:w-full"
              />
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Call CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${AUTHOR_CONTACT.phoneTel}`}
            className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap shrink-0 rounded-full bg-gradient-to-r from-[#FF5A1F] to-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="tabular-nums">{t.navCallCta}</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex min-h-[42px] min-w-[42px] items-center justify-center rounded-lg border border-indigo-200 text-slate-700 transition-colors hover:bg-indigo-50 dark:border-[#2E2A5C] dark:text-slate-200 dark:hover:bg-[#14122D] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-indigo-100 bg-white px-4 py-3 dark:border-[#25224D] dark:bg-[#0B0A1A] md:hidden">
          <nav className="flex flex-col gap-1">
            {[
              { id: 'top', label: t.navHome },
              { id: 'bookshelf', label: t.navBookshelf },
              { id: 'speed-post', label: t.navDelivery },
              { id: 'author', label: t.navAuthor },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="min-h-[44px] rounded-lg px-3 text-left text-sm font-medium text-slate-800 hover:bg-indigo-50 dark:text-slate-100 dark:hover:bg-[#14122D]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
