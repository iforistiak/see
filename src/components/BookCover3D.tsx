import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Book, Language } from '../types/book';

interface BookCover3DProps {
  book: Book;
  language: Language;
  size?: 'shelf' | 'detail';
  flatMode?: boolean;
}

const THEME_PALETTES = {
  blue: {
    coverBg: 'from-[#0F2A6B] via-[#1D4ED8] to-[#172554]',
    spineBg: 'bg-[#0C1F52]',
    accentBar: 'bg-orange-500',
    accentText: 'text-orange-300',
    borderAccent: 'border-blue-400/30',
  },
  red: {
    coverBg: 'from-[#7F1D1D] via-[#DC2626] to-[#991B1B]',
    spineBg: 'bg-[#691313]',
    accentBar: 'bg-white',
    accentText: 'text-orange-200',
    borderAccent: 'border-red-300/30',
  },
  orange: {
    coverBg: 'from-[#9A3412] via-[#EA580C] to-[#7C2D12]',
    spineBg: 'bg-[#7A270B]',
    accentBar: 'bg-blue-800',
    accentText: 'text-white',
    borderAccent: 'border-orange-200/30',
  },
};

export function BookCover3D({
  book,
  language,
  size = 'shelf',
  flatMode = false,
}: BookCover3DProps) {
  const [imgError, setImgError] = useState(false);
  const palette = THEME_PALETTES[book.coverTheme];
  const title = language === 'bn' ? book.titleBn : book.titleEn;
  const edition = language === 'bn' ? book.editionBn : book.editionEn;
  const authorLine = language === 'bn' ? 'মোঃ সেলিম আখতার' : 'Md. Selim Aktar';

  const isDetail = size === 'detail';
  const dimensions = isDetail
    ? 'w-[220px] h-[308px] sm:w-[252px] sm:h-[352px]'
    : 'w-[152px] h-[214px] sm:w-[168px] sm:h-[236px]';

  const perspectiveClass = isDetail
    ? flatMode
      ? 'book-3d-flat'
      : 'book-3d-detail'
    : 'book-3d';

  return (
    <div className="book-stage relative flex items-center justify-center py-2">
      <div
        className={`${perspectiveClass} relative ${dimensions} select-none rounded-r-md rounded-l-[3px] shadow-[12px_18px_28px_-10px_rgba(15,23,42,0.45)] dark:shadow-[14px_20px_32px_-10px_rgba(0,0,0,0.78)]`}
      >
        {/* Left 3D Book Spine */}
        <div
          aria-hidden="true"
          className={`absolute top-0 bottom-0 -left-[16px] w-[16px] origin-right rounded-l-sm ${palette.spineBg} flex flex-col items-center justify-between py-3 text-[8px] font-semibold tracking-wider text-white/90 shadow-inner`}
          style={{ transform: 'rotateY(-88deg)' }}
        >
          <span className="font-mono text-[7px] opacity-80">{book.code}</span>
          <span className="[writing-mode:vertical-rl] rotate-180 truncate max-h-[130px] uppercase tracking-widest opacity-90">
            Selim Aktar
          </span>
          <span className={`h-2 w-2 rounded-full ${palette.accentBar}`} />
        </div>

        {/* Right Stacked Paper Page Edges */}
        <div
          aria-hidden="true"
          className="absolute top-[4px] bottom-[4px] -right-[7px] w-[8px] rounded-r-[2px] border-y border-r border-slate-300 bg-gradient-to-r from-amber-50 via-stone-100 to-amber-100/90 dark:border-slate-600"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, #faf7f0 0px, #faf7f0 1px, #e5e0d3 1px, #e5e0d3 2px)',
          }}
        />

        {/* Front Book Cover Surface */}
        <div
          className={`relative h-full w-full overflow-hidden rounded-r-md rounded-l-[2px] bg-gradient-to-br ${palette.coverBg} border ${palette.borderAccent} flex flex-col justify-between p-3.5 sm:p-4 text-white`}
        >
          {/* Optional Generated Editorial Cover Art Texture with Contrast Scrim */}
          {book.coverImage && !imgError ? (
            <>
              <img
                src={book.coverImage}
                alt={title}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/65" />
            </>
          ) : (
            /* Geometric Editorial Pattern Fallback */
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.4) 0%, transparent 45%), linear-gradient(135deg, rgba(255,255,255,0.12) 25%, transparent 25%)',
                backgroundSize: '100% 100%, 24px 24px',
              }}
            />
          )}

          {/* Left Spine Crease Groove */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/35 via-white/15 to-transparent"
          />

          {/* Top Cover Header */}
          <div className="relative z-10 flex items-center justify-between gap-2 pl-1">
            <span className="font-mono text-[9px] font-semibold tracking-wider text-white/85 uppercase">
              {book.code}
            </span>
            {book.status === 'upcoming' ? (
              <span className="text-[9px] font-semibold tracking-wide text-orange-300 uppercase">
                {language === 'bn' ? 'আসন্ন' : 'Upcoming'}
              </span>
            ) : (
              <BookOpen className="h-3.5 w-3.5 text-white/75" aria-hidden="true" />
            )}
          </div>

          {/* Center Book Title Typography */}
          <div className="relative z-10 my-auto pl-1">
            <div className={`mb-2 h-0.5 w-7 ${palette.accentBar}`} />
            <h4
              className={`font-display font-bold leading-snug text-white drop-shadow-xs ${
                isDetail ? 'text-lg sm:text-xl' : 'text-[13px] sm:text-sm line-clamp-4'
              }`}
            >
              {title}
            </h4>
            {isDetail && (
              <p className="mt-1.5 text-[11px] leading-snug text-white/80 line-clamp-2">
                {edition}
              </p>
            )}
          </div>

          {/* Bottom Author & Imprint */}
          <div className="relative z-10 border-t border-white/20 pt-2 pl-1">
            <p className="text-[10px] font-semibold tracking-wide text-white/95 truncate">
              {authorLine}
            </p>
            <p className="text-[8.5px] text-white/70 truncate">
              {language === 'bn' ? 'সেলিম ইংলিশ এডুকেশন' : 'Selim English Education'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
