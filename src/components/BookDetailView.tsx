import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Layers,
  ListOrdered,
  Phone,
  Star,
  Truck,
} from 'lucide-react';
import { AUTHOR_CONTACT, getDiscountPercent } from '../data/books';
import { getBookReviews } from '../data/reviews';
import { Translations } from '../data/translations';
import { Book, Language } from '../types/book';
import { BookCover3D } from './BookCover3D';

interface BookDetailViewProps {
  book: Book;
  allBooks: Book[];
  language: Language;
  t: Translations;
  onBackToShelf: () => void;
  onSelectBook: (slug: string) => void;
}

export function BookDetailView({
  book,
  allBooks,
  language,
  t,
  onBackToShelf,
  onSelectBook,
}: BookDetailViewProps) {
  const [copiedMethod, setCopiedMethod] = useState<'bkash' | 'nagad' | null>(null);

  const title = language === 'bn' ? book.titleBn : book.titleEn;
  const subtitle = language === 'bn' ? book.subtitleBn : book.subtitleEn;
  const description = language === 'bn' ? book.descriptionBn : book.descriptionEn;
  const edition = language === 'bn' ? book.editionBn : book.editionEn;
  const binding = language === 'bn' ? book.bindingBn : book.bindingEn;
  const highlights = language === 'bn' ? book.highlightsBn : book.highlightsEn;
  const toc = language === 'bn' ? book.tocBn : book.tocEn;
  const statusLabel = book.status === 'upcoming' ? t.statusUpcoming : t.statusPublished;
  const discountPct = getDiscountPercent(book);
  const { rating, totalCount, reviews } = getBookReviews(book);

  const currentIdx = allBooks.findIndex((b) => b.id === book.id);
  const prevBook = currentIdx > 0 ? allBooks[currentIdx - 1] : null;
  const nextBook = currentIdx >= 0 && currentIdx < allBooks.length - 1 ? allBooks[currentIdx + 1] : null;

  const relatedBooks = allBooks
    .filter((b) => b.id !== book.id && (b.category === book.category || b.status === 'published'))
    .slice(0, 4);

  const handleCopyNumber = async (method: 'bkash' | 'nagad') => {
    try {
      await navigator.clipboard.writeText(AUTHOR_CONTACT.paymentRaw);
      setCopiedMethod(method);
      window.setTimeout(() => setCopiedMethod(null), 2200);
    } catch {
      setCopiedMethod(method);
      window.setTimeout(() => setCopiedMethod(null), 2200);
    }
  };

  return (
    <main className="bg-white py-8 dark:bg-[#071024] sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Prev/Next Book Controls */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-sky-100 pb-4 dark:border-[#1B315E]">
          <button
            type="button"
            onClick={onBackToShelf}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-[#0F2557] transition-colors hover:text-[#059669] dark:text-sky-400 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{t.backToShelf}</span>
          </button>

          <div className="flex items-center gap-3">
            {prevBook && (
              <button
                type="button"
                onClick={() => onSelectBook(prevBook.slug)}
                className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 rounded-lg border border-sky-200 px-3 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-sky-50 dark:border-[#1B315E] dark:text-slate-200 dark:hover:bg-[#0D1B38]"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.prevBook}</span>
              </button>
            )}
            {nextBook && (
              <button
                type="button"
                onClick={() => onSelectBook(nextBook.slug)}
                className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 rounded-lg border border-sky-200 px-3 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-sky-50 dark:border-[#1B315E] dark:text-slate-200 dark:hover:bg-[#0D1B38]"
              >
                <span>{t.nextBook}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Main 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Showcase + Specifications */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Upright Editorial Book Showcase */}
              <div className="flex flex-col items-center rounded-2xl border border-sky-100 bg-gradient-to-b from-[#F0F9FF] via-white to-[#ECFDF5]/60 px-6 py-9 dark:border-[#1B315E] dark:from-[#0D1B38] dark:via-[#0D1B38] dark:to-[#071024]">
                <BookCover3D
                  book={book}
                  language={language}
                  size="detail"
                />
              </div>

              {/* Technical Specifications Table */}
              <div className="rounded-2xl border border-sky-100 bg-white p-5 dark:border-[#1B315E] dark:bg-[#0D1B38]">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0F2557] dark:text-white">
                  <Layers className="h-4 w-4 text-[#0EA5E9] dark:text-sky-400" aria-hidden="true" />
                  <span>{t.specsTitle}</span>
                </h3>
                <dl className="mt-4 divide-y divide-slate-100 text-sm dark:divide-slate-800">
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-slate-500 dark:text-slate-400">{t.specCode}</dt>
                    <dd className="font-mono font-semibold text-slate-900 tabular-nums dark:text-slate-100">
                      {book.code}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-slate-500 dark:text-slate-400">{t.specEdition}</dt>
                    <dd className="font-medium text-slate-900 dark:text-slate-100">{edition}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-slate-500 dark:text-slate-400">{t.specPages}</dt>
                    <dd className="font-mono font-medium text-slate-900 tabular-nums dark:text-slate-100">
                      {book.pages} {t.pagesLabel}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-slate-500 dark:text-slate-400">{t.specBinding}</dt>
                    <dd className="font-medium text-slate-900 dark:text-slate-100">{binding}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-slate-500 dark:text-slate-400">{t.specYear}</dt>
                    <dd className="font-mono font-medium text-slate-900 tabular-nums dark:text-slate-100">
                      {book.publishYear}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-slate-500 dark:text-slate-400">{t.specPublisher}</dt>
                    <dd className="text-right font-medium text-slate-900 dark:text-slate-100">
                      {t.publisherValue}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Right Contiguous Purchase, Payment & Speed Post Module */}
          <div className="lg:col-span-7 space-y-7">
            {/* Title, Status & Price */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span
                  className={
                    book.status === 'upcoming'
                      ? 'text-[#DC2626] dark:text-red-400'
                      : 'text-[#059669] dark:text-emerald-400'
                  }
                >
                  {statusLabel}
                </span>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {language === 'bn' ? 'লেখক: মোঃ সেলিম আখতার' : 'Author: Md. Selim Aktar'}
                </span>
              </div>

              <h1 className="font-display mt-2 text-2xl font-bold leading-tight text-[#0F2557] [text-wrap:balance] dark:text-white sm:text-3xl lg:text-4xl">
                {title}
              </h1>

              <p className="mt-2.5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {subtitle}
              </p>

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-3xl font-bold text-[#DC2626] tabular-nums dark:text-red-400">
                  {t.bdtSymbol}
                  {book.priceBdt}
                </span>
                {discountPct > 0 && (
                  <>
                    <span className="font-mono text-base font-medium text-slate-400 line-through tabular-nums dark:text-slate-500">
                      {t.bdtSymbol}
                      {book.originalPriceBdt}
                    </span>
                    <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-[#059669] tabular-nums dark:bg-emerald-950/60 dark:text-emerald-300">
                      {discountPct}
                      {t.discountOffLabel}
                    </span>
                  </>
                )}
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {language === 'bn' ? '(বাংলাদেশ ডাক স্পিড পোস্ট ডেলিভারি প্রযোজ্য)' : '(Nationwide Speed Post delivery available)'}
                </span>
              </div>
            </div>

            {/* Synopsis */}
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
              {description}
            </p>

            {/* Key Highlights */}
            <div className="border-t border-sky-100 pt-5 dark:border-[#1B315E]">
              <h2 className="text-sm font-semibold text-[#0F2557] dark:text-white">
                {t.highlightsTitle}
              </h2>
              <ul className="mt-3 space-y-2">
                {highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#059669] dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Call to Confirm Order Box */}
            <div className="rounded-xl border border-red-200 bg-red-50/70 p-5 dark:border-red-500/30 dark:bg-red-950/25 sm:p-6">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {t.orderBoxTitle}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {t.orderBoxNotice}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${AUTHOR_CONTACT.phoneTel}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{t.callOrderBtn}</span>
                </a>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  {t.callHoursNote}
                </span>
              </div>
            </div>

            {/* bKash & Nagad Payment Info Card */}
            <div className="rounded-2xl border border-sky-100 bg-[#F0F9FF]/75 p-5 dark:border-[#1B315E] dark:bg-[#0D1B38] sm:p-6">
              <h2 className="text-base font-bold text-[#0F2557] dark:text-white">
                {t.paymentCardTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {t.paymentCardSubtitle}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* bKash Card */}
                <div className="flex flex-col justify-between rounded-xl border border-rose-200 bg-white p-4 dark:border-rose-500/30 dark:bg-[#071024]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#D12053] dark:text-rose-400">
                        {t.bkashLabel}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Send Money / Payment
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-lg font-bold tracking-tight text-[#0F2557] tabular-nums dark:text-white">
                      {AUTHOR_CONTACT.paymentNumber}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyNumber('bkash')}
                    className="mt-3 inline-flex min-h-[38px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50/70 px-3 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-sky-100 dark:border-[#1B315E] dark:bg-[#0D1B38] dark:text-slate-200 dark:hover:bg-[#13264D]"
                  >
                    {copiedMethod === 'bkash' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#059669] dark:text-emerald-400" aria-hidden="true" />
                        <span>{t.copiedText}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{t.copyNumberBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Nagad Card */}
                <div className="flex flex-col justify-between rounded-xl border border-red-200 bg-white p-4 dark:border-red-500/30 dark:bg-[#071024]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#DC2626] dark:text-red-400">
                        {t.nagadLabel}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Send Money / Payment
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-lg font-bold tracking-tight text-[#0F2557] tabular-nums dark:text-white">
                      {AUTHOR_CONTACT.paymentNumber}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyNumber('nagad')}
                    className="mt-3 inline-flex min-h-[38px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50/70 px-3 py-1.5 text-xs font-semibold text-[#0F2557] transition-colors hover:bg-sky-100 dark:border-[#1B315E] dark:bg-[#0D1B38] dark:text-slate-200 dark:hover:bg-[#13264D]"
                  >
                    {copiedMethod === 'nagad' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#059669] dark:text-emerald-400" aria-hidden="true" />
                        <span>{t.copiedText}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{t.copyNumberBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t.sendMoneyNote}</p>
            </div>

            {/* Bangladesh Post Office Speed Post Info */}
            <div className="flex items-start gap-3.5 rounded-2xl border border-emerald-200 bg-emerald-50/75 p-5 dark:border-emerald-500/30 dark:bg-emerald-950/25">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#059669] dark:text-emerald-400" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-[#0F2557] dark:text-white">
                  {t.speedPostBadgeTitle}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {t.speedPostBadgeDesc}
                </p>
              </div>
            </div>

            {/* Table of Contents Preview */}
            <div className="border-t border-sky-100 pt-6 dark:border-[#1B315E]">
              <h2 className="flex items-center gap-2 text-base font-bold text-[#0F2557] dark:text-white">
                <ListOrdered className="h-4 w-4 text-[#0EA5E9] dark:text-sky-400" aria-hidden="true" />
                <span>{t.tocTitle}</span>
              </h2>
              <ol className="mt-4 divide-y divide-sky-100 rounded-2xl border border-sky-100 bg-white dark:divide-[#1B315E] dark:border-[#1B315E] dark:bg-[#0D1B38]">
                {toc.map((chapter, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <span className="font-mono text-xs font-semibold text-[#0284C7] tabular-nums dark:text-sky-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{chapter}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Related Books Row */}
        <section className="mt-16 border-t border-sky-100 pt-12 dark:border-[#1B315E]">
          <h2 className="font-display text-xl font-bold text-[#0F2557] dark:text-white sm:text-2xl">
            {t.relatedBooksTitle}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedBooks.map((rel) => {
              const relTitle = language === 'bn' ? rel.titleBn : rel.titleEn;
              const relDiscountPct = getDiscountPercent(rel);
              return (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => onSelectBook(rel.slug)}
                  className="group flex cursor-pointer flex-col items-center rounded-2xl border border-sky-100 bg-gradient-to-b from-[#F0F9FF]/60 to-white p-5 text-center transition-all hover:-translate-y-1 hover:border-[#0EA5E9]/50 hover:shadow-md dark:border-[#1B315E] dark:from-[#0D1B38] dark:to-[#0D1B38] dark:hover:border-sky-400/40"
                >
                  <BookCover3D book={rel} language={language} size="shelf" />
                  <h3 className="mt-4 line-clamp-2 text-sm font-semibold text-[#0F2557] group-hover:text-[#059669] dark:text-slate-100 dark:group-hover:text-emerald-400">
                    {relTitle}
                  </h3>
                  <div className="mt-1.5 flex items-baseline justify-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#DC2626] tabular-nums dark:text-red-400">
                      {t.bdtSymbol}
                      {rel.priceBdt}
                    </span>
                    {relDiscountPct > 0 && (
                      <span className="font-mono text-xs text-slate-400 line-through tabular-nums dark:text-slate-500">
                        {t.bdtSymbol}
                        {rel.originalPriceBdt}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Reader Reviews Section */}
        <section
          aria-label={t.readerReviewsTitle}
          className="mt-14 border-t border-sky-100 pt-10 dark:border-[#1B315E]"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold text-[#0F2557] dark:text-white sm:text-2xl">
                {t.readerReviewsTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {t.readerReviewsSubtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-sky-100 bg-[#F0F9FF] px-4 py-2 dark:border-[#1B315E] dark:bg-[#0D1B38]">
              <Star
                className="h-4 w-4 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
              <span className="font-mono text-sm font-bold text-[#0F2557] tabular-nums dark:text-white">
                {rating} / 5.0
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
                ·
              </span>
              <span className="text-xs font-semibold text-[#059669] tabular-nums dark:text-emerald-400">
                {totalCount} {t.readerReviewsCountLabel}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {reviews.map((rev) => {
              const reviewerName = language === 'bn' ? rev.reviewerBn : rev.reviewerEn;
              const reviewerRole = language === 'bn' ? rev.roleBn : rev.roleEn;
              const reviewerLoc = language === 'bn' ? rev.locationBn : rev.locationEn;
              const reviewDate = language === 'bn' ? rev.dateBn : rev.dateEn;
              const reviewComment = language === 'bn' ? rev.commentBn : rev.commentEn;

              return (
                <article
                  key={rev.id}
                  className="flex flex-col justify-between rounded-2xl border border-sky-100 bg-white p-5 shadow-xs dark:border-[#1B315E] dark:bg-[#0D1B38]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className="flex items-center gap-0.5"
                        aria-label={`${rev.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`h-3.5 w-3.5 ${
                              starIdx < rev.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-200 dark:text-slate-700'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 tabular-nums dark:text-slate-500">
                        {reviewDate}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      “{reviewComment}”
                    </p>
                  </div>

                  <div className="mt-4 border-t border-sky-100 pt-3 dark:border-[#1B315E]">
                    <p className="text-sm font-bold text-[#0F2557] dark:text-white">
                      {reviewerName}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {reviewerRole} · {reviewerLoc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
