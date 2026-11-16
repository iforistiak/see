import { ArrowLeft, Globe, Heart, Moon, Search, Sun, X } from 'lucide-react';
import { Language, Theme } from '../types/book';
import { Translations } from '../data/translations';

interface ControlBarProps {
  t: Translations;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDetailView: boolean;
  onBackToShelf: () => void;
  savedCount: number;
}

export function ControlBar({
  t,
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
  isDetailView,
  onBackToShelf,
  savedCount,
}: ControlBarProps) {
  const handleSearchInput = (value: string) => {
    onSearchChange(value);
    if (isDetailView && value.trim().length > 0) {
      onBackToShelf();
    } else if (!isDetailView && value.trim().length > 0) {
      const shelf = document.getElementById('bookshelf');
      if (shelf && window.scrollY < 160) {
        shelf.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      aria-label="Store search, language and theme controls"
      className="relative z-20 border-b border-indigo-100/80 bg-[#F5F5FF]/90 py-2.5 dark:border-[#25224D] dark:bg-[#110F27]/95"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Left: Back button on detail view OR Fast Search Bar */}
        <div className="flex min-w-[240px] flex-1 items-center gap-3">
          {isDetailView && (
            <button
              type="button"
              onClick={onBackToShelf}
              className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full bg-[#312E81]/10 px-3.5 py-1.5 text-xs font-semibold text-[#1E1B4B] transition-colors hover:bg-[#312E81]/20 dark:bg-indigo-500/20 dark:text-indigo-200"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.backToShelf}</span>
            </button>
          )}

          <div className="relative flex-1 max-w-lg">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="min-h-[38px] w-full rounded-full border border-indigo-200/80 bg-white pl-10 pr-16 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#FF5A1F] focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-[#FF5A1F]"
            />
            {searchQuery.trim().length > 0 && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-slate-500 hover:bg-indigo-50 hover:text-[#1E1B4B] dark:text-slate-400 dark:hover:bg-[#1E1B4B] dark:hover:text-white"
              >
                <X className="h-3 w-3" aria-hidden="true" />
                <span>{t.clearSearch}</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Saved Indicator + Bilingual Switch + Light/Dark Mode */}
        <div className="flex items-center gap-2.5 shrink-0">
          {savedCount > 0 && (
            <button
              type="button"
              onClick={onBackToShelf}
              className="hidden items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 sm:inline-flex"
            >
              <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              <span className="tabular-nums">
                {t.savedCountLabel} ({savedCount})
              </span>
            </button>
          )}

          {/* Bilingual EN / বাংলা Switch */}
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center rounded-full border border-indigo-200 bg-white p-0.5 dark:border-[#2E2A5C] dark:bg-[#0B0A1A]"
          >
            <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-[#312E81] dark:text-indigo-400" aria-hidden="true" />
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`min-h-[30px] cursor-pointer whitespace-nowrap shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'en'
                  ? 'bg-[#312E81] text-white'
                  : 'text-slate-600 hover:text-[#1E1B4B] dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('bn')}
              className={`min-h-[30px] cursor-pointer whitespace-nowrap shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'bn'
                  ? 'bg-[#312E81] text-white'
                  : 'text-slate-600 hover:text-[#1E1B4B] dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              বাংলা
            </button>
          </div>

          {/* Light / Dark Mode Switch */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#1E1B4B] transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-indigo-600 dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-slate-200 dark:hover:bg-[#1E1B4B]"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
                <span>{language === 'en' ? 'Light' : 'লাইট'}</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-[#312E81]" aria-hidden="true" />
                <span>{language === 'en' ? 'Dark' : 'ডার্ক'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
