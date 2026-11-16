import { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language } from '../types/book';
import { publicAsset } from '../utils/assets';

interface LoadingScreenProps {
  language: Language;
  brandTitle: string;
}

const LAST_VISIT_KEY = 'see_last_visit_ts';
const RELOAD_THRESHOLD_MS = 5 * 60 * 1000;

function shouldShowIntroLoader(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const navEntries = window.performance?.getEntriesByType?.('navigation') as
      | PerformanceNavigationTiming[]
      | undefined;
    const navType = navEntries?.[0]?.type;
    const lastVisitRaw = window.localStorage.getItem(LAST_VISIT_KEY);
    const now = Date.now();
    window.localStorage.setItem(LAST_VISIT_KEY, String(now));

    if (!lastVisitRaw) return true;
    if (navType === 'reload') return true;
    const elapsed = now - Number(lastVisitRaw);
    return Number.isNaN(elapsed) || elapsed > RELOAD_THRESHOLD_MS;
  } catch {
    return true;
  }
}

export function LoadingScreen({ language, brandTitle }: LoadingScreenProps) {
  const [visible, setVisible] = useState<boolean>(() => shouldShowIntroLoader());
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 950);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="see-intro-loader"
          role="status"
          aria-live="polite"
          aria-label={language === 'bn' ? 'লোড হচ্ছে...' : 'Loading Selim English Education'}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-white/98 px-6 backdrop-blur-md dark:bg-[#071024]/98"
        >
          {/* Iconic Dual-Ring Orbital Emblem */}
          <motion.div
            initial={{ scale: 0.84, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-28 w-28 items-center justify-center"
          >
            {/* Outer Spinning Tri-Color Ring */}
            <motion.span
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#059669] border-r-[#0EA5E9] border-b-[#DC2626]"
            />

            {/* Inner Counter-Spinning Navy Ring */}
            <motion.span
              aria-hidden="true"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.9, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2.5 rounded-full border-2 border-dashed border-[#0F2557]/35 dark:border-sky-400/40"
            />

            {/* Center Brand Icon / Mark */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-sky-100 dark:bg-[#0D1B38] dark:ring-[#1B315E]"
            >
              {!logoError ? (
                <img
                  src={publicAsset('assets/see-logo-mark.png')}
                  alt={brandTitle}
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-12 w-12 object-contain"
                />
              ) : (
                <BookOpen className="h-7 w-7 text-[#0F2557] dark:text-sky-400" aria-hidden="true" />
              )}
            </motion.div>
          </motion.div>

          {/* Brand Title & Animated Accent Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.3 }}
            className="mt-5 flex flex-col items-center text-center"
          >
            <p className="text-base font-bold tracking-tight text-[#0F2557] dark:text-white sm:text-lg">
              {brandTitle}
            </p>
            <p className="mt-0.5 text-xs font-medium text-[#059669] dark:text-emerald-400">
              {language === 'bn' ? 'মোঃ সেলিম আখতার · রাজশাহী' : 'Md. Selim Aktar · Rajshahi'}
            </p>

            <div className="mt-4 h-1 w-36 overflow-hidden rounded-full bg-sky-100 dark:bg-[#1B315E]">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full rounded-full bg-gradient-to-r from-[#059669] via-[#0EA5E9] to-[#DC2626]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
