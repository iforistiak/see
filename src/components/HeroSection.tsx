import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  GraduationCap,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { AUTHOR_CONTACT, BOOKS, getDiscountPercent } from '../data/books';
import { Translations } from '../data/translations';
import { Language } from '../types/book';
import { publicAsset } from '../utils/assets';
import { BookCover3D } from './BookCover3D';

interface HeroSectionProps {
  t: Translations;
  language: Language;
  onExploreBookshelf: () => void;
  onSelectBook: (slug: string) => void;
}

const SLIDER_BOOK_IDS = ['book-03', 'book-07', 'book-12', 'book-15'];

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
  const discountPct = getDiscountPercent(currentBook);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + sliderBooks.length) % sliderBooks.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % sliderBooks.length);
  };

  return (
    <section id="top" className="pt-5 pb-3 sm:pt-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* LEFT SIDE (7 Cols): Staggered Book Slider */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-200/80 bg-gradient-to-br from-[#EEF7FF] via-white to-[#ECFDF5] p-6 shadow-xs dark:border-[#1B315E] dark:from-[#0C1D42] dark:via-[#081229] dark:to-[#072125] sm:p-9 lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#0EA5E9]/20 via-[#10B981]/15 to-[#DC2626]/10 blur-3xl"
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
                  <div className="sm:col-span-7">
                    <motion.p
                      variants={staggerItem}
                      className="text-xs font-bold tracking-wider text-[#059669] uppercase dark:text-emerald-400"
                    >
                      {currentBook.code} ·{' '}
                      {language === 'bn' ? currentBook.editionBn : currentBook.editionEn}
                    </motion.p>

                    <motion.h1
                      variants={staggerItem}
                      className="mt-2.5 text-2xl font-bold leading-tight text-[#0F2557] [text-wrap:balance] dark:text-white sm:text-3xl lg:text-[2.15rem]"
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
                      className="mt-4 flex flex-wrap items-baseline gap-2.5"
                    >
                      <span className="text-2xl font-extrabold text-[#DC2626] tabular-nums dark:text-red-400">
                        {t.bdtSymbol}
                        {currentBook.priceBdt}
                      </span>
                      {discountPct > 0 && (
                        <>
                          <span className="text-sm font-medium text-slate-400 line-through tabular-nums dark:text-slate-500">
                            {t.bdtSymbol}
                            {currentBook.originalPriceBdt}
                          </span>
                          <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-[#059669] tabular-nums dark:bg-emerald-950/60 dark:text-emerald-300">
                            {discountPct}
                            {t.discountOffLabel}
                          </span>
                        </>
                      )}
                      <span className="text-xs font-medium text-slate-500 tabular-nums dark:text-slate-400">
                        · {currentBook.pages} {t.pagesLabel}
                      </span>
                    </motion.div>

                    <motion.div
                      variants={staggerItem}
                      className="mt-6 flex flex-wrap items-center gap-3"
                    >
                      <button
                        type="button"
                        onClick={() => onSelectBook(currentBook.slug)}
                        className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-[#0F2557] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#09173A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-[#0EA5E9] dark:text-[#071024] dark:hover:bg-sky-300"
                      >
                        <span>{t.sliderViewBook}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={onExploreBookshelf}
                        className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-xl border border-sky-200 bg-white/95 px-4 py-2.5 text-sm font-semibold text-[#0F2557] transition-colors hover:border-[#059669] hover:text-[#059669] dark:border-[#1B315E] dark:bg-[#071024]/85 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                      >
                        <span>{t.sliderExploreAll}</span>
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={staggerItem}
                    className="flex justify-center sm:col-span-5"
                  >
                    <button
                      type="button"
                      onClick={() => onSelectBook(currentBook.slug)}
                      aria-label={bookTitle}
                      className="animate-book-float cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-500"
                    >
                      <BookCover3D book={currentBook} language={language} size="shelf" />
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10 mt-6 flex items-center justify-between border-t border-sky-100 pt-4 dark:border-[#1B315E]">
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
                          ? 'w-8 bg-gradient-to-r from-[#0F2557] via-[#0EA5E9] to-[#059669]'
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
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-sky-200 bg-white text-[#0F2557] transition-colors hover:border-[#0EA5E9] hover:text-[#0EA5E9] dark:border-[#1B315E] dark:bg-[#071024] dark:text-slate-200 dark:hover:border-sky-400"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={t.sliderNext}
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-sky-200 bg-white text-[#0F2557] transition-colors hover:border-[#0EA5E9] hover:text-[#0EA5E9] dark:border-[#1B315E] dark:bg-[#071024] dark:text-slate-200 dark:hover:border-sky-400"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (5 Cols): Redesigned Editorial Author & Educator Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-200/80 bg-white shadow-sm dark:border-[#1B315E] dark:bg-[#0D1B38] lg:col-span-5">
            {/* Top Executive Portrait Showcase */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0F2557] via-[#0D2E6E] to-[#065F46] px-5 pt-5 pb-0 text-white sm:px-6">
              <div
                aria-hidden="true"
                className="animate-author-glow pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#0EA5E9]/35 blur-2xl"
              />

              <div className="relative z-10 grid grid-cols-12 items-end gap-3">
                <div className="col-span-7 pb-5">
                  <p className="text-[10.5px] font-bold tracking-widest text-[#38BDF8] uppercase">
                    {t.authorHeroTag}
                  </p>
                  <h2 className="mt-1 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                    {language === 'bn' ? AUTHOR_CONTACT.nameBn : AUTHOR_CONTACT.nameEn}
                  </h2>
                  <p className="mt-1 text-xs font-medium text-emerald-200">
                    {language === 'bn' ? 'সেলিম ইংলিশ এডুকেশন' : 'Selim English Education'}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-sky-100 tabular-nums">
                    <span>{t.authorHeroBooksStat}</span>
                    <span aria-hidden="true" className="text-sky-300/60">
                      ·
                    </span>
                    <span>{t.authorHeroDeliveryStat}</span>
                  </div>
                </div>

                <div className="col-span-5 flex items-end justify-end">
                  {!portraitError && (
                    <div className="relative h-36 w-36 sm:h-44 sm:w-44">
                      <img
                        src={publicAsset('assets/author-portrait-v2.png')}
                        alt="Md. Selim Aktar — Author & English Educator"
                        referrerPolicy="no-referrer"
                        onError={() => setPortraitError(true)}
                        className="animate-author-pulse h-full w-full object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Clean Credential Rows & Direct Order Actions */}
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <ul className="space-y-2.5 text-xs leading-snug text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <GraduationCap
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0F2557] dark:text-sky-400"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-[#0F2557] dark:text-slate-100">
                    {t.authorHeroDegree}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#059669] dark:text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>{t.authorHeroRole}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <BookOpen
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0EA5E9]"
                    aria-hidden="true"
                  />
                  <span>{t.authorHeroInstitutions}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#DC2626] dark:text-red-400"
                    aria-hidden="true"
                  />
                  <span>{t.authorHeroLocation}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#059669] dark:text-emerald-400"
                    aria-hidden="true"
                  />
                  <span className="font-medium tabular-nums">{t.callHoursNote}</span>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-sky-100 pt-3.5 dark:border-[#1B315E]">
                <a
                  href={`tel:${AUTHOR_CONTACT.phoneTel}`}
                  className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#DC2626] px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-red-700"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{t.authorHeroCall}</span>
                </a>

                <a
                  href={AUTHOR_CONTACT.fbPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50/80 px-4 py-2 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-sky-100 dark:border-[#1B315E] dark:bg-[#071024] dark:text-sky-300 dark:hover:bg-[#132B66]"
                >
                  <span>{t.authorHeroFb}</span>
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Horizontal Service & Trust Strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-b border-sky-100 py-4 dark:border-[#1B315E] sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#059669] dark:bg-emerald-500/15 dark:text-emerald-400">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F2557] dark:text-white">{t.trust1Title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.trust1Desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#DC2626] dark:bg-red-500/15 dark:text-red-400">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F2557] dark:text-white">{t.trust2Title}</h3>
              <p className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                {t.trust2Desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0EA5E9] dark:bg-sky-500/15 dark:text-sky-400">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F2557] dark:text-white">{t.trust3Title}</h3>
              <p className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                {t.trust3Desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#0F2557] dark:bg-[#0D1B38] dark:text-sky-300">
              <Headphones className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F2557] dark:text-white">{t.trust4Title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.trust4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
