import { ArrowRight, BookOpen, Heart, RotateCcw } from 'lucide-react';
import { getDiscountPercent } from '../data/books';
import { Translations } from '../data/translations';
import { Book, BookCategory, FilterCategory, Language } from '../types/book';
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

const CATEGORY_BORDER_ACCENT: Record<BookCategory, string> = {
  'class-6-8': 'from-[#0F2557] to-[#0EA5E9]',
  ssc: 'from-[#059669] to-[#0EA5E9]',
  hsc: 'from-[#0F2557] to-[#DC2626]',
  'spoken-basic': 'from-[#059669] to-[#38BDF8]',
  admission: 'from-[#DC2626] to-[#0F2557]',
  upcoming: 'from-[#0EA5E9] to-[#059669]',
};

interface CategoryGridProps {
  title: string;
  books: Book[];
  language: Language;
  t: Translations;
  onSelectBook: (slug: string) => void;
  savedIds: string[];
  onToggleSave: (bookId: string) => void;
}

function CategoryBookGrid({
  title,
  books,
  language,
  t,
  onSelectBook,
  savedIds,
  onToggleSave,
}: CategoryGridProps) {
  if (books.length === 0) return null;

  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-sky-100 pb-2.5 dark:border-[#1B315E]">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-5 w-1.5 rounded-full bg-gradient-to-b from-[#059669] to-[#0EA5E9]"
          />
          <h3 className="text-base font-bold tracking-tight text-[#0F2557] dark:text-white sm:text-lg">
            {title}
          </h3>
        </div>
        <span className="text-xs font-bold text-[#059669] tabular-nums dark:text-emerald-400">
          {books.length} {language === 'bn' ? 'টি বই' : books.length === 1 ? 'Book' : 'Books'}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => {
          const bookTitle = language === 'bn' ? book.titleBn : book.titleEn;
          const bookSubtitle = language === 'bn' ? book.subtitleBn : book.subtitleEn;
          const isSaved = savedIds.includes(book.id);
          const topAccent = CATEGORY_BORDER_ACCENT[book.category];
          const discountPct = getDiscountPercent(book);

          return (
            <article
              key={book.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_36px_-12px_rgba(15,37,87,0.16)] dark:border-[#1B315E] dark:bg-[#0D1B38] dark:hover:border-sky-500/50 dark:hover:shadow-[0_20px_38px_-12px_rgba(0,0,0,0.65)]"
            >
              {/* Crisp Top Color Accent Line */}
              <div
                aria-hidden="true"
                className={`h-1 w-full bg-gradient-to-r ${topAccent}`}
              />

              {/* Save / Bookmark Heart Button */}
              <button
                type="button"
                aria-label={isSaved ? t.savedBook : t.saveBook}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(book.id);
                }}
                className={`absolute top-4 right-4 z-20 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-xs transition-colors ${
                  isSaved
                    ? 'border-red-200 bg-red-50 text-red-600 dark:border-red-500/40 dark:bg-red-950/70 dark:text-red-400'
                    : 'border-slate-200 bg-white/95 text-slate-400 hover:text-red-600 dark:border-[#1B315E] dark:bg-[#071024]/90 dark:text-slate-400 dark:hover:text-red-400'
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => onSelectBook(book.slug)}
                className="flex flex-1 cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                {/* Upright Book Visual Showcase Area */}
                <div className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F6FAFF] to-white px-4 py-6 dark:from-[#0A1630] dark:via-[#0D1B38] dark:to-[#0D1B38]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 h-24 w-36 rounded-full bg-sky-400/15 blur-xl transition-opacity group-hover:opacity-100 dark:bg-sky-500/10"
                  />
                  <BookCover3D book={book} language={language} size="shelf" />
                </div>

                {/* Editorial Card Details */}
                <div className="flex flex-1 flex-col justify-between p-4 pt-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                      <span
                        className={
                          book.status === 'upcoming'
                            ? 'text-[#0EA5E9] dark:text-sky-400'
                            : 'text-[#059669] dark:text-emerald-400'
                        }
                      >
                        {book.status === 'upcoming' ? t.statusUpcoming : t.statusPublished}
                      </span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
                        ·
                      </span>
                      <span className="text-slate-500 tabular-nums dark:text-slate-400">
                        {book.pages} {t.pagesLabel}
                      </span>
                    </div>

                    <h4 className="mt-1.5 line-clamp-2 text-[15px] font-bold leading-snug text-[#0F2557] transition-colors group-hover:text-[#0EA5E9] dark:text-white dark:group-hover:text-sky-400">
                      {bookTitle}
                    </h4>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-300">
                      {bookSubtitle}
                    </p>
                  </div>

                  {/* Card Footer Price + Discount % + Action */}
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 dark:border-[#1B315E]">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-[#DC2626] tabular-nums dark:text-red-400">
                        {t.bdtSymbol}
                        {book.priceBdt}
                      </span>
                      {discountPct > 0 && (
                        <>
                          <span className="text-xs font-medium text-slate-400 line-through tabular-nums dark:text-slate-500">
                            {t.bdtSymbol}
                            {book.originalPriceBdt}
                          </span>
                          <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10.5px] font-bold text-[#059669] tabular-nums dark:bg-emerald-950/60 dark:text-emerald-300">
                            -{discountPct}%
                          </span>
                        </>
                      )}
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0F2557]/6 px-2.5 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors group-hover:bg-[#0F2557] group-hover:text-white dark:bg-sky-500/15 dark:text-sky-300 dark:group-hover:bg-sky-500 dark:group-hover:text-white">
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
  const tabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'class-6-8', label: t.filterClass68 },
    { id: 'ssc', label: t.filterSsc },
    { id: 'hsc', label: t.filterHsc },
    { id: 'spoken-basic', label: t.filterSpokenBasic },
    { id: 'admission', label: t.filterAdmission },
    { id: 'upcoming', label: t.filterUpcoming },
  ];

  const isUnfiltered = selectedCategory === 'all' && searchQuery.trim() === '';

  const categoryGroups: { key: BookCategory; title: string }[] = [
    { key: 'class-6-8', title: t.shelfGroupClass68 },
    { key: 'ssc', title: t.shelfGroupSsc },
    { key: 'hsc', title: t.shelfGroupHsc },
    { key: 'spoken-basic', title: t.shelfGroupSpokenBasic },
    { key: 'admission', title: t.shelfGroupAdmission },
    { key: 'upcoming', title: t.shelfGroupUpcoming },
  ];

  return (
    <section id="bookshelf" className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 border-b border-sky-100 pb-3 dark:border-[#1B315E]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2557] dark:text-white">
              {t.shelfSectionTitle}
            </h2>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter books by category"
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
                        ? 'border-[#059669] text-[#0F2557] dark:border-emerald-400 dark:text-emerald-400'
                        : 'border-transparent text-slate-500 hover:text-[#0F2557] dark:text-slate-400 dark:hover:text-sky-300'
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
                className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap shrink-0 pb-2 text-xs font-semibold text-[#DC2626] hover:underline dark:text-red-400"
              >
                <span>{t.viewAllLink}</span>
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {books.length === 0 ? (
          <div className="rounded-2xl border border-sky-100 bg-[#F0F7FF] px-6 py-14 text-center dark:border-[#1B315E] dark:bg-[#0D1B38]">
            <BookOpen className="mx-auto h-10 w-10 text-[#0EA5E9]" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-bold text-[#0F2557] dark:text-white">
              {t.emptyTitle}
            </h3>
            <p className="mx-auto mt-1.5 max-w-md text-sm text-slate-600 dark:text-slate-300">
              {t.emptyDesc}
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-5 inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl bg-[#0F2557] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#09173A]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>{t.resetFilters}</span>
            </button>
          </div>
        ) : isUnfiltered ? (
          categoryGroups.map((group) => (
            <CategoryBookGrid
              key={group.key}
              title={group.title}
              books={allBooks.filter((b) => b.category === group.key)}
              language={language}
              t={t}
              onSelectBook={onSelectBook}
              savedIds={savedIds}
              onToggleSave={onToggleSave}
            />
          ))
        ) : (
          <CategoryBookGrid
            title={t.shelfFilteredTitle}
            books={books}
            language={language}
            t={t}
            onSelectBook={onSelectBook}
            savedIds={savedIds}
            onToggleSave={onToggleSave}
          />
        )}
      </div>
    </section>
  );
}
