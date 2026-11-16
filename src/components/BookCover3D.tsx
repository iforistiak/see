import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Book, Language } from '../types/book';

interface BookCover3DProps {
  book: Book;
  language: Language;
  size?: 'shelf' | 'detail';
  flatMode?: boolean;
}

const COVER_PALETTES = {
  navy: {
    coverBg: 'from-[#0F2557] via-[#133273] to-[#09173A]',
    accentStripe: 'bg-[#0EA5E9]',
    tagText: 'text-sky-200',
    borderAccent: 'border-sky-400/30',
  },
  sky: {
    coverBg: 'from-[#0369A1] via-[#0EA5E9] to-[#0C4A6E]',
    accentStripe: 'bg-[#10B981]',
    tagText: 'text-emerald-100',
    borderAccent: 'border-sky-200/40',
  },
  green: {
    coverBg: 'from-[#065F46] via-[#059669] to-[#064E3B]',
    accentStripe: 'bg-[#38BDF8]',
    tagText: 'text-emerald-100',
    borderAccent: 'border-emerald-300/35',
  },
  red: {
    coverBg: 'from-[#991B1B] via-[#DC2626] to-[#7F1D1D]',
    accentStripe: 'bg-white',
    tagText: 'text-red-100',
    borderAccent: 'border-red-300/35',
  },
};

export function BookCover3D({
  book,
  language,
  size = 'shelf',
}: BookCover3DProps) {
  const [imgError, setImgError] = useState(false);
  const palette = COVER_PALETTES[book.coverTheme];
  const title = language === 'bn' ? book.titleBn : book.titleEn;
  const edition = language === 'bn' ? book.editionBn : book.editionEn;
  const authorLine = language === 'bn' ? 'মোঃ সেলিম আখতার' : 'Md. Selim Aktar';

  const isDetail = size === 'detail';
  const dimensions = isDetail
    ? 'w-[228px] h-[312px] sm:w-[260px] sm:h-[356px]'
    : 'w-[148px] h-[204px] sm:w-[162px] sm:h-[224px]';

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`relative ${dimensions} select-none overflow-hidden rounded-r-xl rounded-l-[4px] border ${palette.borderAccent} bg-gradient-to-br ${palette.coverBg} shadow-[0_14px_28px_-10px_rgba(15,37,87,0.38)] transition-transform duration-300 group-hover:scale-[1.03] dark:shadow-[0_18px_32px_-10px_rgba(0,0,0,0.75)] flex flex-col justify-between p-4 text-white`}
      >
        {/* Optional Generated Editorial Cover Artwork Texture */}
        {book.coverImage && !imgError ? (
          <>
            <img
              src={book.coverImage}
              alt={title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060F26]/92 via-[#09173A]/55 to-[#09173A]/65" />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 85% 18%, rgba(255,255,255,0.45) 0%, transparent 45%), linear-gradient(135deg, rgba(255,255,255,0.14) 25%, transparent 25%)',
              backgroundSize: '100% 100%, 22px 22px',
            }}
          />
        )}

        {/* Left Book Binding Groove */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/35 via-white/20 to-transparent"
        />

        {/* Right Crisp Page-Edge Trim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-1 right-0 w-[3px] bg-gradient-to-l from-white/75 to-transparent"
        />

        {/* Top Cover Header */}
        <div className="relative z-10 flex items-center justify-between gap-2 pl-1.5">
          <span className="text-[10px] font-bold tracking-wider text-white/90 uppercase">
            {book.code}
          </span>
          <BookOpen className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
        </div>

        {/* Center Title Typography */}
        <div className="relative z-10 my-auto pl-1.5">
          <div className={`mb-2 h-1 w-8 rounded-full ${palette.accentStripe}`} />
          <h4
            className={`font-bold leading-snug text-white drop-shadow-xs ${
              isDetail ? 'text-lg sm:text-xl' : 'text-[13px] sm:text-sm line-clamp-4'
            }`}
          >
            {title}
          </h4>
          {isDetail && (
            <p className={`mt-1.5 text-[11px] font-medium ${palette.tagText}`}>
              {edition}
            </p>
          )}
        </div>

        {/* Bottom Author Signature */}
        <div className="relative z-10 border-t border-white/20 pt-2 pl-1.5">
          <p className="truncate text-[10.5px] font-semibold tracking-wide text-white/95">
            {authorLine}
          </p>
          <p className="truncate text-[9px] text-white/75">
            {language === 'bn' ? 'সেলিম ইংলিশ এডুকেশন' : 'Selim English Education'}
          </p>
        </div>
      </div>
    </div>
  );
}
