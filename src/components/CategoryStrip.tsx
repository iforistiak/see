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
      id: 'grammar',
      label: t.filterGrammar,
      sampleBook: books.find((b) => b.category === 'grammar'),
      accentBg: 'bg-indigo-50/80 dark:bg-[#14122D]',
    },
    {
      id: 'admission',
      label: t.filterAdmission,
      sampleBook: books.find((b) => b.category === 'admission'),
      accentBg: 'bg-orange-50/80 dark:bg-[#1C152B]',
    },
    {
      id: 'academic',
      label: t.filterAcademic,
      sampleBook: books.find((b) => b.category === 'academic'),
      accentBg: 'bg-red-50/80 dark:bg-[#1F1429]',
    },
    {
      id: 'translation',
      label: t.filterTranslation,
      sampleBook: books.find((b) => b.category === 'translation'),
      accentBg: 'bg-slate-100/90 dark:bg-[#141530]',
    },
    {
      id: 'upcoming',
      label: t.filterUpcoming,
      sampleBook: books.find((b) => b.category === 'upcoming'),
      accentBg: 'bg-indigo-50/60 dark:bg-[#161436]',
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
    <section
      aria-label={t.categorySectionTitle}
      className="py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-[#1E1B4B] dark:text-white sm:text-2xl">
            {t.categorySectionTitle}
          </h2>
          <button
            type="button"
            onClick={() => handleCategoryPick('all')}
            className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#312E81] transition-colors hover:text-[#FF5A1F] dark:text-indigo-300 dark:hover:text-orange-400 sm:text-sm"
          >
            <span>{t.viewAllLink}</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryPick(cat.id)}
                className="group flex cursor-pointer flex-col items-start text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div
                  className={`relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors ${
                    cat.accentBg
                  } ${
                    isSelected
                      ? 'border-[#FF5A1F] ring-2 ring-[#FF5A1F]/25 dark:border-orange-400'
                      : 'border-indigo-100/80 group-hover:border-[#FF5A1F]/60 dark:border-[#25224D] dark:group-hover:border-orange-400/50'
                  }`}
                >
                  {cat.sampleBook && (
                    <div className="scale-[0.62] transform transition-transform duration-200 group-hover:scale-[0.67]">
                      <BookCover3D book={cat.sampleBook} language={language} size="shelf" />
                    </div>
                  )}
                </div>

                <div className="mt-3 w-full px-0.5">
                  <h3 className="truncate text-sm font-bold text-[#1E1B4B] group-hover:text-[#FF5A1F] dark:text-slate-100 dark:group-hover:text-orange-400">
                    {cat.label}
                  </h3>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors group-hover:text-[#FF5A1F] dark:text-slate-400 dark:group-hover:text-orange-400">
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
