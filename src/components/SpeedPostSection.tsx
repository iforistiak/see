import { useState } from 'react';
import { Check, Copy, Mail, Phone, Truck } from 'lucide-react';
import { AUTHOR_CONTACT } from '../data/books';
import { Translations } from '../data/translations';

interface SpeedPostSectionProps {
  t: Translations;
}

export function SpeedPostSection({ t }: SpeedPostSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(AUTHOR_CONTACT.paymentRaw);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="speed-post"
      className="border-t border-indigo-100 bg-[#F5F5FF]/70 py-12 dark:border-[#25224D] dark:bg-[#110F27]/80 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#1E1B4B] dark:text-white">
          {t.deliverySectionTitle}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-indigo-100 bg-white p-5 dark:border-[#25224D] dark:bg-[#14122D]">
            <h3 className="text-sm font-bold text-[#312E81] dark:text-indigo-300">
              {t.step1Title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.step1Desc}
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-white p-5 dark:border-[#25224D] dark:bg-[#14122D]">
            <h3 className="text-sm font-bold text-red-600 dark:text-red-400">
              {t.step2Title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.step2Desc}
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-white p-5 dark:border-[#25224D] dark:bg-[#14122D]">
            <h3 className="text-sm font-bold text-[#FF5A1F]">
              {t.step3Title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.step3Desc}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] p-6 text-white lg:col-span-7 sm:p-7">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FF5A1F] uppercase">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Bangladesh Post Office · Speed Post</span>
              </div>
              <h3 className="mt-2.5 text-xl font-bold sm:text-2xl">
                {t.postOfficeBannerTitle}
              </h3>
              <p className="mt-2 text-sm text-indigo-100">{t.postOfficeBannerDesc}</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${AUTHOR_CONTACT.phoneTel}`}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#FF5A1F] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">{t.callOrderBtn}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-100">
                <Truck className="h-4 w-4 text-orange-300" aria-hidden="true" />
                <span>2–4 Days Nationwide</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-indigo-100 bg-white p-6 dark:border-[#25224D] dark:bg-[#14122D] lg:col-span-5 sm:p-7">
            <div>
              <h3 className="text-base font-bold text-[#1E1B4B] dark:text-white">
                {t.paymentCardTitle}
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {t.sendMoneyNote}
              </p>

              <div className="mt-3.5 flex items-center gap-4 border-y border-indigo-50 py-2.5 dark:border-[#25224D]">
                <span className="text-sm font-bold text-[#D12053] dark:text-rose-400">
                  {t.bkashLabel}
                </span>
                <span className="text-slate-300 dark:text-slate-600">/</span>
                <span className="text-sm font-bold text-[#FF5A1F]">
                  {t.nagadLabel}
                </span>
              </div>

              <p className="mt-3.5 text-2xl font-bold tracking-tight text-[#1E1B4B] tabular-nums dark:text-white">
                {AUTHOR_CONTACT.paymentNumber}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="mt-4 inline-flex min-h-[40px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-[#F5F5FF] px-4 py-2 text-xs font-semibold text-[#1E1B4B] transition-colors hover:bg-indigo-100 dark:border-[#2E2A5C] dark:bg-[#0B0A1A] dark:text-slate-100 dark:hover:bg-[#1E1B4B]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
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
      </div>
    </section>
  );
}
