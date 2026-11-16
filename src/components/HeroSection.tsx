import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { AUTHOR_CONTACT, BOOKS } from '../data/books';
import { Translations } from '../data/translations';
import { Language } from '../types/book';
import { BookCover3D } from './BookCover3D';

interface HeroSectionProps {
  t: Translations;
  language: Language;
  onExploreBookshelf: () => void;
  onSelectBook: (slug: string) => void;
}

const SLIDER_BOOK_IDS = ['book-01', 'book-02', 'book-03', 'book-04'];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection({
  t,
  language,
  onExploreBookshelf,
  onSelectBook,
}: HeroSectionProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [portraitError, setPortraitError] = useState(false);

  const sliderBooks = SLIDER_BOOK_IDS.map(
    (id) => BOOKS.find((b) => b.id === id) ?? BOOKS[0]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliderBooks.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused, sliderBooks.length]);

  const currentBook = sliderBooks[slideIndex];
  const bookTitle = language === 'bn' ? currentBook.titleBn : currentBook.titleEn;
  const bookSubtitle = language === 'bn' ? currentBook.subtitleBn : currentBook.subtitleEn;

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + sliderBooks.length) % sliderBooks.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % sliderBooks.length);
  };

  return (
    <section id="top" className="pt-5 pb-3 sm:pt-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Interactive Book Slider | Right Informative Author & Educator Card */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* LEFT SIDE (7 Cols): Staggered Animated Featured Book Slider */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E4F3] bg-gradient-to-br from-[#F4F3FF] via-white to-[#FFF3EC] p-6 shadow-xs dark:border-[#25224D] dark:from-[#14122D] dark:via-[#0F0D24] dark:to-[#1C142B] sm:p-9 lg:col-span-7"
          >
            {/* Subtle Ambient Indigo/Orange Accent Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-600/15 via-[#FF5A1F]/15 to-red-500/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-1 items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentBook.id}-${language}`}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-12"
                >
                  {/* Staggered Slide Text Copy */}
                  <div className="sm:col-span-7">
                    <motion.p
                      variants={staggerItem}
                      className="text-xs font-bold tracking-wider text-[#FF5A1F] uppercase"
                    >
                      {currentBook.code} ·{' '}
                      {language === 'bn' ? currentBook.editionBn : currentBook.editionEn}
                    </motion.p>

                    <motion.h1
                      variants={staggerItem}
                      className="mt-2.5 text-2xl font-bold leading-tight text-[#1E1B4B] [text-wrap:balance] dark:text-white sm:text-3xl lg:text-[2.15rem]"
                    >
                      {bookTitle}
                    </motion.h1>

                    <motion.p
                      variants={staggerItem}
                      className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      {bookSubtitle}
                    </motion.p>

                    <motion.div
                      variants={staggerItem}
                      className="mt-4 flex items-baseline gap-3"
                    >
                      <span className="text-2xl font-extrabold text-red-600 tabular-nums dark:text-red-400">
                        {t.bdtSymbol}
                        {currentBook.priceBdt}
                      </span>
                      <span className="text-xs font-medium text-slate-500 tabular-nums dark:text-slate-400">
                        {currentBook.pages} {t.pagesLabel}
                      </span>
                    </motion.div>

                    <motion.div
                      variants={staggerItem}
                      className="mt-6 flex flex-wrap items-center gap-3"
                    >
                      <button
                        type="button"
                        onClick={() => onSelectBook(currentBook.slug)}
                        className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-[#312E81] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1E1B4B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
                      >
                        <span>{t.sliderViewBook}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={onExploreBookshelf}
                        className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-xl border border-[#D4D6EC] bg-white/90 px-4 py-2.5 text-sm font-semibold text-[#1E1B4B] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] dark:border-[#2E2A5C] dark:bg-[#0B0A1A]/80 dark:text-slate-100 dark:hover:border-[#FF5A1F]"
                      >
                        <span>{t.sliderExploreAll}</span>
                      </button>
                    </motion.div>
                  </div>

                  {/* Slide 3D Floating Book */}
                  <motion.div
                    variants={staggerItem}
                    className="flex justify-center sm:col-span-5"
                  >
                    <button
                      type="button"
                      onClick={() => onSelectBook(currentBook.slug)}
                      aria-label={bookTitle}
                      className="animate-book-float cursor-pointer focus-visible:outline-2 focus-visible:outline-indigo-600"
                    >
                      <BookCover3D book={currentBook} language={language} size="shelf" />
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Slider Controls: Dots + Prev/Next */}
            <div className="relative z-10 mt-6 flex items-center justify-between border-t border-indigo-100 pt-4 dark:border-[#25224D]">
              <div className="flex items-center gap-2" role="tablist" aria-label="Featured book slides">
                {sliderBooks.map((sb, idx) => {
                  const active = idx === slideIndex;
                  return (
                    <button
                      key={sb.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`Slide ${idx + 1}`}
                      onClick={() => setSlideIndex(idx)}
                      className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${
                        active
                          ? 'w-8 bg-gradient-to-r from-[#312E81] to-[#FF5A1F]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                      }`}
                    />
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={t.sliderPrev}
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-indigo-200 bg-white text-[#1E1B4B] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-slate-200 dark:hover:border-[#FF5A1F]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={t.sliderNext}
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-indigo-200 bg-white text-[#1E1B4B] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-slate-200 dark:hover:border-[#FF5A1F]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (5 Cols): Redesigned Informative Author & Educator Card with Pulsing Cutout Portrait */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2D2A63] bg-gradient-to-b from-[#1E1B4B] via-[#17143B] to-[#0F0D2A] text-white shadow-md lg:col-span-5">
            {/* Upper Studio Stage: Deep Indigo Backdrop + Pulsing Orange/Indigo Aura + Cutout Portrait */}
            <div className="relative flex flex-col items-center px-6 pt-5 pb-0">
              {/* Top Kicker */}
              <div className="relative z-10 flex w-full items-center justify-between text-[11px] font-bold tracking-widest text-orange-300 uppercase">
                <span>{t.authorHeroTag}</span>
                <span className="text-indigo-200 tabular-nums">
                  {t.authorHeroBooksStat} · {t.authorHeroDeliveryStat}
                </span>
              </div>

              {/* Subtle Pulsing Glow Behind Portrait */}
              <div
                aria-hidden="true"
                className="animate-author-glow pointer-events-none absolute top-10 left-1/2 h-44 w-44 rounded-full bg-gradient-to-tr from-[#FF5A1F]/40 via-indigo-400/25 to-red-500/25 blur-2xl"
              />

              {/* Transparent Cutout Portrait with Subtle Pulse Animation */}
              {!portraitError && (
                <div className="relative z-10 mt-2 flex h-44 w-44 items-end justify-center sm:h-48 sm:w-48">
                  <img
                    src="/assets/author-portrait.png"
                    alt="Md. Selim Aktar — Author & English Educator"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitError(true)}
                    className="animate-author-pulse h-full w-full object-contain object-bottom drop-shadow-[0_14px_24px_rgba(0,0,0,0.65)]"
                  />
                </div>
              )}
            </div>

            {/* Lower Informative Credentials Sheet */}
            <div className="relative z-10 flex flex-1 flex-col justify-between border-t border-white/10 bg-white/98 p-5 text-slate-900 dark:bg-[#14122D] dark:text-slate-100 sm:p-6">
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-xl font-bold tracking-tight text-[#1E1B4B] dark:text-white">
                    {language === 'bn' ? AUTHOR_CONTACT.nameBn : AUTHOR_CONTACT.nameEn}
                  </h2>
                  <span className="text-xs font-semibold text-[#FF5A1F]">
                    {language === 'bn' ? 'রাজশাহী' : 'Rajshahi'}
                  </span>
                </div>

                {/* Informative Academic & Teaching Breakdown */}
                <ul className="mt-3 space-y-2 text-xs leading-snug text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <GraduationCap
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-400"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {t.authorHeroDegree}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF5A1F]"
                      aria-hidden="true"
                    />
                    <span>{t.authorHeroRole}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-400"
                      aria-hidden="true"
                    />
                    <span>{t.authorHeroInstitutions}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-400"
                      aria-hidden="true"
                    />
                    <span>{t.authorHeroLocation}</span>
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-slate-200/80 pt-3.5 dark:border-[#25224D]">
                <a
                  href={`tel:${AUTHOR_CONTACT.phoneTel}`}
                  className="inline-flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-red-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-all hover:brightness-110"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{t.authorHeroCall}</span>
                </a>

                <a
                  href={AUTHOR_CONTACT.fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/70 px-3.5 py-2 text-xs font-semibold text-[#1E1B4B] transition-colors hover:bg-indigo-100 dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-indigo-200 dark:hover:bg-[#1E1B4B]"
                >
                  <span>{t.authorHeroFb}</span>
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Horizontal Service & Trust Strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-b border-indigo-100 py-4 dark:border-[#25224D] sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF5A1F] dark:bg-[#FF5A1F]/15 dark:text-orange-400">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E1B4B] dark:text-white">{t.trust1Title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.trust1Desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-400">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E1B4B] dark:text-white">{t.trust2Title}</h3>
              <p className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                {t.trust2Desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#312E81] dark:bg-indigo-500/15 dark:text-indigo-300">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E1B4B] dark:text-white">{t.trust3Title}</h3>
              <p className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                {t.trust3Desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-[#14122D] dark:text-slate-300">
              <Headphones className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E1B4B] dark:text-white">{t.trust4Title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.trust4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
