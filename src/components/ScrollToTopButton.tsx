import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ScrollToTopButtonProps {
  label: string;
  shortLabel?: string;
}

export function ScrollToTopButton({ label, shortLabel }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleScrollTop}
          aria-label={label}
          title={label}
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.9 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed right-5 bottom-6 z-50 inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-2xl border border-emerald-400/70 bg-[#059669] px-3.5 text-xs font-bold tracking-wide text-white shadow-[0_12px_26px_-6px_rgba(5,150,105,0.55)] ring-2 ring-white/85 transition-all duration-200 hover:-translate-y-1 hover:bg-[#047857] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-red-400/60 dark:bg-[#DC2626] dark:shadow-[0_12px_26px_-6px_rgba(220,38,38,0.55)] dark:ring-[#071024]/90 dark:hover:bg-[#B91C1C] sm:right-7 sm:bottom-8"
        >
          <ArrowUp
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          {shortLabel && <span>{shortLabel}</span>}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
