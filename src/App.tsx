import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AuthorSection } from './components/AuthorSection';
import { BookDetailView } from './components/BookDetailView';
import { BookshelfSection } from './components/BookshelfSection';
import { CategoryStrip } from './components/CategoryStrip';
import { ControlBar } from './components/ControlBar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { SpeedPostSection } from './components/SpeedPostSection';
import { BOOKS } from './data/books';
import { TRANSLATIONS } from './data/translations';
import { FilterCategory, Language, Theme } from './types/book';

function getSlugFromHash(): string | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  if (hash.startsWith('#/book/')) {
    const slug = hash.slice('#/book/'.length).trim();
    return slug || null;
  }
  return null;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [activeBookSlug, setActiveBookSlug] = useState<string | null>(() => getSlugFromHash());
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('see_saved_books');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('see_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('see_saved_books', JSON.stringify(savedIds));
    } catch {
      // ignore storage errors
    }
  }, [savedIds]);

  useEffect(() => {
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
  }, [language]);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveBookSlug(getSlugFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleToggleSave = useCallback((bookId: string) => {
    setSavedIds((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    );
  }, []);

  const handleSelectBook = useCallback((slug: string) => {
    setActiveBookSlug(slug);
    window.location.hash = `#/book/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateHome = useCallback((sectionId?: string) => {
    setActiveBookSlug(null);
    if (window.location.hash.startsWith('#/book/')) {
      window.location.hash = '#/';
    }
    if (sectionId && sectionId !== 'top') {
      window.setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  const activeBook = useMemo(() => {
    if (!activeBookSlug) return null;
    return BOOKS.find((b) => b.slug === activeBookSlug) ?? null;
  }, [activeBookSlug]);

  const filteredBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BOOKS.filter((book) => {
      const matchesCat =
        selectedCategory === 'all' || book.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;

      const haystack = [
        book.code,
        book.titleEn,
        book.titleBn,
        book.subtitleEn,
        book.subtitleBn,
        book.descriptionEn,
        book.descriptionBn,
        ...book.keywords,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [searchQuery, selectedCategory]);

  const t = TRANSLATIONS[language];

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-slate-900 dark:bg-[#0B0A1A] dark:text-slate-100">
      {/* Subtle Premium Grain Texture Background Overlay */}
      <div
        aria-hidden="true"
        className="bg-grain-overlay pointer-events-none fixed inset-0 z-30"
      />

      <Navbar t={t} onNavigateHome={handleNavigateHome} />

      <ControlBar
        t={t}
        language={language}
        onToggleLanguage={setLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDetailView={Boolean(activeBook)}
        onBackToShelf={() => handleNavigateHome('bookshelf')}
        savedCount={savedIds.length}
      />

      <div className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          {activeBook ? (
            <motion.div
              key={`detail-${activeBook.slug}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <BookDetailView
                book={activeBook}
                allBooks={BOOKS}
                language={language}
                t={t}
                onBackToShelf={() => handleNavigateHome('bookshelf')}
                onSelectBook={handleSelectBook}
              />
            </motion.div>
          ) : (
            <motion.div
              key="storefront"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSection
                t={t}
                language={language}
                onExploreBookshelf={() => handleNavigateHome('bookshelf')}
                onSelectBook={handleSelectBook}
              />

              <CategoryStrip
                t={t}
                language={language}
                books={BOOKS}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <BookshelfSection
                t={t}
                language={language}
                books={filteredBooks}
                allBooks={BOOKS}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSelectBook={handleSelectBook}
                onResetFilters={handleResetFilters}
                savedIds={savedIds}
                onToggleSave={handleToggleSave}
              />

              <SpeedPostSection t={t} />

              <AuthorSection t={t} language={language} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer
        t={t}
        language={language}
        onNavigateHome={handleNavigateHome}
        onSelectCategory={setSelectedCategory}
      />
    </div>
  );
}
