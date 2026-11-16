import { ArrowRight } from 'lucide-react';
import { Book, FilterCategory, Language } from '../types/book';
import { Translations } from '../data/translations';
import { BookCover3D } from './BookCover3D';

interface CategoryStripProps {
  t: Translations;
  language: Language;
  books: Book[];
  selectedCategory: FilterCategory;
  onSelectCategory: (cat: FilterCategory) => void;
}

export function CategoryStrip({
  t,
  language,
  books,
  selectedCategory,
  onSelectCategory,
}: CategoryStripProps) {
  const categories: {
    id: Exclude<FilterCategory, 'all'>;
    label: string;
    sampleBook: Book | undefined;
    accentBg: string;
  }[] = [
    {
      id: 'class-6-8',
      label: t.filterClass68,
      sampleBook: books.find((b) => b.category === 'class-6-8'),
      accentBg: 'bg-sky-50/90 dark:bg-[#0D1B38]',
    },
    {
      id: 'ssc',
      label: t.filterSsc,
      sampleBook: books.find((b) => b.category === 'ssc'),
      accentBg: 'bg-emerald-50/85 dark:bg-[#0B232A]',
    },
    {
      id: 'hsc',
      label: t.filterHsc,
      sampleBook: books.find((b) => b.category === 'hsc'),
      accentBg: 'bg-slate-100/90 dark:bg-[#0E1D3D]',
    },
    {
      id: 'spoken-basic',
      label: t.filterSpokenBasic,
      sampleBook: books.find((b) => b.category === 'spoken-basic'),
      accentBg: 'bg-sky-50/80 dark:bg-[#0B213B]',
    },
    {
      id: 'admission',
      label: t.filterAdmission,
      sampleBook: books.find((b) => b.category === 'admission'),
      accentBg: 'bg-red-50/80 dark:bg-[#1F1228]',
    },
    {
      id: 'upcoming',
      label: t.filterUpcoming,
      sampleBook: books.find((b) => b.category === 'upcoming'),
      accentBg: 'bg-emerald-50/75 dark:bg-[#0A222E]',
    },
  ];

  const handleCategoryPick = (cat: FilterCategory) => {
    onSelectCategory(cat);
    const el = document.getElementById('bookshelf');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section aria-label={t.categorySectionTitle} className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-[#0F2557] dark:text-white sm:text-2xl">
            {t.categorySectionTitle}
          </h2>
          <button
            type="button"
            onClick={() => handleCategoryPick('all')}
            className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#0F2557] transition-colors hover:text-[#059669] dark:text-sky-400 dark:hover:text-emerald-400 sm:text-sm"
          >
            <span>{t.viewAllLink}</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryPick(cat.id)}
                className="group flex cursor-pointer flex-col items-start text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <div
                  className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors ${
                    cat.accentBg
                  } ${
                    isSelected
                      ? 'border-[#059669] ring-2 ring-[#059669]/25 dark:border-emerald-400'
                      : 'border-sky-100 group-hover:border-[#0EA5E9] dark:border-[#1B315E] dark:group-hover:border-sky-400'
                  }`}
                >
                  {cat.sampleBook && (
                    <div className="scale-[0.58] transform transition-transform duration-200 group-hover:scale-[0.63]">
                      <BookCover3D book={cat.sampleBook} language={language} size="shelf" />
                    </div>
                  )}
                </div>

                <div className="mt-3 w-full px-0.5">
                  <h3 className="truncate text-sm font-bold text-[#0F2557] group-hover:text-[#059669] dark:text-slate-100 dark:group-hover:text-emerald-400">
                    {cat.label}
                  </h3>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors group-hover:text-[#0EA5E9] dark:text-slate-400 dark:group-hover:text-sky-400">
                    <span>{t.browseCategoryCta}</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
