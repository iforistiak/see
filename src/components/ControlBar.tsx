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
      className="relative z-20 border-b border-sky-100 bg-[#F0F7FF]/90 py-2.5 dark:border-[#1B315E] dark:bg-[#0B1733]/95"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-[240px] flex-1 items-center gap-3">
          {isDetailView && (
            <button
              type="button"
              onClick={onBackToShelf}
              className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full bg-[#0F2557]/10 px-3.5 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-[#0F2557]/20 dark:bg-sky-500/20 dark:text-sky-200"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.backToShelf}</span>
            </button>
          )}

          <div className="relative flex-1 max-w-lg">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0EA5E9]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="min-h-[38px] w-full rounded-full border border-sky-200 bg-white pl-10 pr-16 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20 dark:border-[#1B315E] dark:bg-[#071024] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
            />
            {searchQuery.trim().length > 0 && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-slate-500 hover:bg-sky-50 hover:text-[#0F2557] dark:text-slate-400 dark:hover:bg-[#1B315E] dark:hover:text-white"
              >
                <X className="h-3 w-3" aria-hidden="true" />
                <span>{t.clearSearch}</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {savedCount > 0 && (
            <button
              type="button"
              onClick={onBackToShelf}
              className="hidden items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-[#DC2626] dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 sm:inline-flex"
            >
              <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              <span className="tabular-nums">
                {t.savedCountLabel} ({savedCount})
              </span>
            </button>
          )}

          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center rounded-full border border-sky-200 bg-white p-0.5 dark:border-[#1B315E] dark:bg-[#071024]"
          >
            <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-[#059669] dark:text-emerald-400" aria-hidden="true" />
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`min-h-[30px] cursor-pointer whitespace-nowrap shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'en'
                  ? 'bg-[#0F2557] text-white dark:bg-[#0EA5E9] dark:text-[#071024]'
                  : 'text-slate-600 hover:text-[#0F2557] dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('bn')}
              className={`min-h-[30px] cursor-pointer whitespace-nowrap shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'bn'
                  ? 'bg-[#0F2557] text-white dark:bg-[#0EA5E9] dark:text-[#071024]'
                  : 'text-slate-600 hover:text-[#0F2557] dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              বাংলা
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-sky-500 dark:border-[#1B315E] dark:bg-[#071024] dark:text-slate-200 dark:hover:bg-[#0D1B38]"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                <span>{language === 'en' ? 'Light' : 'লাইট'}</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-[#0F2557]" aria-hidden="true" />
                <span>{language === 'en' ? 'Dark' : 'ডার্ক'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
