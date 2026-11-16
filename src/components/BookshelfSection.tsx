import { useState } from 'react';
import { ArrowRight, BookOpen, Heart, LayoutGrid, Library, RotateCcw } from 'lucide-react';
import { Book, FilterCategory, Language } from '../types/book';
import { Translations } from '../data/translations';
import { BookCover3D } from './BookCover3D';

interface BookshelfSectionProps {
  t: Translations;
  language: Language;
  books: Book[];
  allBooks: Book[];
  selectedCategory: FilterCategory;
  onCategoryChange: (cat: FilterCategory) => void;
  searchQuery: string;
  onSelectBook: (slug: string) => void;
  onResetFilters: () => void;
  savedIds: string[];
  onToggleSave: (bookId: string) => void;
}

interface ShelfRowProps {
  title: string;
  books: Book[];
  language: Language;
  t: Translations;
  onSelectBook: (slug: string) => void;
  savedIds: string[];
  onToggleSave: (bookId: string) => void;
}

function ShelfRow({
  title,
  books,
  language,
  t,
  onSelectBook,
  savedIds,
  onToggleSave,
}: ShelfRowProps) {
  if (books.length === 0) return null;

  return (
    <div className="mb-10 last:mb-0">
      <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-indigo-100 pb-2 dark:border-[#25224D]">
        <h3 className="text-sm font-bold tracking-tight text-[#1E1B4B] dark:text-slate-200 sm:text-base">
          {title}
        </h3>
        <span className="text-xs font-semibold text-[#FF5A1F] tabular-nums">
          {books.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book) => {
          const bookTitle = language === 'bn' ? book.titleBn : book.titleEn;
          const isSaved = savedIds.includes(book.id);
          const statusText =
            book.status === 'upcoming' ? t.statusUpcoming : t.statusPublished;

          return (
            <article key={book.id} className="group relative flex flex-col items-center">
              <button
                type="button"
                aria-label={isSaved ? t.savedBook : t.saveBook}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(book.id);
                }}
                className={`absolute top-2.5 right-2.5 z-20 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors ${
                  isSaved
                    ? 'border-red-200 bg-red-50 text-red-600 dark:border-red-500/40 dark:bg-red-950/60 dark:text-red-400'
                    : 'border-indigo-100 bg-white/90 text-slate-400 hover:text-red-600 dark:border-[#2E2A5C] dark:bg-[#0B0A1A]/90 dark:text-slate-400 dark:hover:text-red-400'
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => onSelectBook(book.slug)}
                className="flex w-full cursor-pointer flex-col items-center text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div className="relative flex w-full flex-col items-center rounded-2xl bg-[#F4F3FF] px-3 pt-5 pb-3 transition-all duration-200 group-hover:bg-[#EAE8FF] dark:bg-[#14122D] dark:group-hover:bg-[#1D1A42]">
                  <div className="relative z-10 flex justify-center">
                    <BookCover3D book={book} language={language} size="shelf" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-1 h-2 w-28 rounded-full bg-indigo-950/20 blur-[4px] transition-transform duration-200 group-hover:scale-90 dark:bg-black/60"
                  />

                  <div
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-full rounded-sm border-b-2 border-amber-900/25 bg-gradient-to-b from-amber-100 via-amber-200/80 to-amber-300/70 shadow-xs dark:border-[#0B0A1A] dark:from-[#2C2859] dark:via-[#221F47] dark:to-[#181536]"
                  />
                </div>

                <div className="mt-3 w-full px-1">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <span
                      className={
                        book.status === 'upcoming'
                          ? 'font-semibold text-[#FF5A1F]'
                          : 'font-semibold text-[#312E81] dark:text-indigo-300'
                      }
                    >
                      {statusText}
                    </span>
                    <span className="tabular-nums">
                      {book.pages} {t.pagesLabel}
                    </span>
                  </div>

                  <h4 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-[#1E1B4B] transition-colors group-hover:text-[#FF5A1F] dark:text-slate-100 dark:group-hover:text-orange-400">
                    {bookTitle}
                  </h4>

                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600 tabular-nums dark:text-red-400">
                      {t.bdtSymbol}
                      {book.priceBdt}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#312E81] dark:text-indigo-300">
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function BookshelfSection({
  t,
  language,
  books,
  allBooks,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSelectBook,
  onResetFilters,
  savedIds,
  onToggleSave,
}: BookshelfSectionProps) {
  const [viewMode, setViewMode] = useState<'shelf' | 'grid'>('shelf');

  const tabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'grammar', label: t.filterGrammar },
    { id: 'admission', label: t.filterAdmission },
    { id: 'academic', label: t.filterAcademic },
    { id: 'translation', label: t.filterTranslation },
    { id: 'upcoming', label: t.filterUpcoming },
  ];

  const isUnfiltered = selectedCategory === 'all' && searchQuery.trim() === '';
  const shelf1 = isUnfiltered ? allBooks.slice(0, 5) : [];
  const shelf2 = isUnfiltered ? allBooks.slice(5, 10) : [];
  const shelf3 = isUnfiltered ? allBooks.slice(10, 14) : [];

  return (
    <section id="bookshelf" className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 border-b border-indigo-100 pb-3 dark:border-[#25224D]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#1E1B4B] dark:text-white">
              {t.shelfSectionTitle}
            </h2>

            <div className="inline-flex items-center rounded-lg border border-indigo-200/80 bg-[#F5F5FF] p-0.5 dark:border-[#2E2A5C] dark:bg-[#14122D]">
              <button
                type="button"
                onClick={() => setViewMode('shelf')}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  viewMode === 'shelf'
                    ? 'bg-white text-[#312E81] shadow-xs dark:bg-[#0B0A1A] dark:text-orange-400'
                    : 'text-slate-500 hover:text-[#1E1B4B] dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <Library className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.viewModeShelf}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#312E81] shadow-xs dark:bg-[#0B0A1A] dark:text-orange-400'
                    : 'text-slate-500 hover:text-[#1E1B4B] dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.viewModeGrid}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter bookshelf"
              className="flex items-center gap-6 overflow-x-auto"
            >
              {tabs.map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => onCategoryChange(tab.id)}
                    className={`cursor-pointer whitespace-nowrap shrink-0 border-b-2 pb-2 text-xs font-semibold transition-colors sm:text-sm ${
                      active
                        ? 'border-[#FF5A1F] text-[#1E1B4B] dark:border-[#FF5A1F] dark:text-orange-400'
                        : 'border-transparent text-slate-500 hover:text-[#1E1B4B] dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {!isUnfiltered && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap shrink-0 pb-2 text-xs font-semibold text-[#FF5A1F] hover:underline"
              >
                <span>{t.viewAllLink}</span>
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {books.length === 0 ? (
          <div className="rounded-2xl border border-indigo-100 bg-[#F5F5FF] px-6 py-14 text-center dark:border-[#25224D] dark:bg-[#14122D]">
            <BookOpen className="mx-auto h-10 w-10 text-indigo-400" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-bold text-[#1E1B4B] dark:text-white">
              {t.emptyTitle}
            </h3>
            <p className="mx-auto mt-1.5 max-w-md text-sm text-slate-600 dark:text-slate-300">
              {t.emptyDesc}
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-5 inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[#312E81] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E1B4B]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>{t.resetFilters}</span>
            </button>
          </div>
        ) : viewMode === 'shelf' ? (
          isUnfiltered ? (
            <>
              <ShelfRow
                title={t.shelfRow1Title}
                books={shelf1}
                language={language}
                t={t}
                onSelectBook={onSelectBook}
                savedIds={savedIds}
                onToggleSave={onToggleSave}
              />
              <ShelfRow
                title={t.shelfRow2Title}
                books={shelf2}
                language={language}
                t={t}
                onSelectBook={onSelectBook}
                savedIds={savedIds}
                onToggleSave={onToggleSave}
              />
              <ShelfRow
                title={t.shelfRow3Title}
                books={shelf3}
                language={language}
                t={t}
                onSelectBook={onSelectBook}
                savedIds={savedIds}
                onToggleSave={onToggleSave}
              />
            </>
          ) : (
            <ShelfRow
              title={t.shelfFilteredTitle}
              books={books}
              language={language}
              t={t}
              onSelectBook={onSelectBook}
              savedIds={savedIds}
              onToggleSave={onToggleSave}
            />
          )
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => {
              const bookTitle = language === 'bn' ? book.titleBn : book.titleEn;
              const isSaved = savedIds.includes(book.id);

              return (
                <article
                  key={book.id}
                  className="group relative flex flex-col rounded-2xl border border-indigo-100 bg-white p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF5A1F]/60 hover:shadow-md dark:border-[#25224D] dark:bg-[#14122D] dark:hover:border-orange-400/50"
                >
                  <button
                    type="button"
                    aria-label={isSaved ? t.savedBook : t.saveBook}
                    onClick={() => onToggleSave(book.id)}
                    className={`absolute top-5 right-5 z-20 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors ${
                      isSaved
                        ? 'border-red-200 bg-red-50 text-red-600 dark:border-red-500/40 dark:bg-red-950/60 dark:text-red-400'
                        : 'border-indigo-100 bg-white text-slate-400 hover:text-red-600 dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-slate-400 dark:hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-3.5 w-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectBook(book.slug)}
                    className="flex flex-1 cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:outline-indigo-600"
                  >
                    <div className="flex w-full items-center justify-center rounded-xl bg-[#F4F3FF] py-5 dark:bg-[#0B0A1A]">
                      <BookCover3D book={book} language={language} size="shelf" />
                    </div>

                    <div className="mt-3.5 flex flex-1 flex-col justify-between px-1">
                      <div>
                        <p className="text-[11px] font-semibold text-[#312E81] dark:text-indigo-300">
                          {book.status === 'upcoming' ? t.statusUpcoming : t.statusPublished}
                          {' · '}
                          <span className="text-slate-500 tabular-nums dark:text-slate-400">
                            {book.pages} {t.pagesLabel}
                          </span>
                        </p>
                        <h4 className="mt-1 line-clamp-2 text-sm font-bold text-[#1E1B4B] group-hover:text-[#FF5A1F] dark:text-white dark:group-hover:text-orange-400">
                          {bookTitle}
                        </h4>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-indigo-50 pt-2.5 dark:border-[#25224D]">
                        <span className="text-base font-bold text-red-600 tabular-nums dark:text-red-400">
                          {t.bdtSymbol}
                          {book.priceBdt}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#312E81] dark:text-indigo-300">
                          <span>{t.viewDetails}</span>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
