import { Language } from '../types/book';

export interface Translations {
  brandTitle: string;
  navHome: string;
  navBookshelf: string;
  navDelivery: string;
  navAuthor: string;
  navCallCta: string;
  sliderPrev: string;
  sliderNext: string;
  sliderViewBook: string;
  sliderExploreAll: string;
  authorHeroTag: string;
  authorHeroDegree: string;
  authorHeroRole: string;
  authorHeroInstitutions: string;
  authorHeroLocation: string;
  authorHeroBooksStat: string;
  authorHeroDeliveryStat: string;
  authorHeroCall: string;
  authorHeroFb: string;
  trust1Title: string;
  trust1Desc: string;
  trust2Title: string;
  trust2Desc: string;
  trust3Title: string;
  trust3Desc: string;
  trust4Title: string;
  trust4Desc: string;
  categorySectionTitle: string;
  viewAllLink: string;
  browseCategoryCta: string;
  searchPlaceholder: string;
  clearSearch: string;
  filterAll: string;
  filterGrammar: string;
  filterAdmission: string;
  filterAcademic: string;
  filterTranslation: string;
  filterUpcoming: string;
  shelfSectionTitle: string;
  viewModeShelf: string;
  viewModeGrid: string;
  shelfRow1Title: string;
  shelfRow2Title: string;
  shelfRow3Title: string;
  shelfFilteredTitle: string;
  viewDetails: string;
  saveBook: string;
  savedBook: string;
  savedCountLabel: string;
  pagesLabel: string;
  bdtSymbol: string;
  statusPublished: string;
  statusUpcoming: string;
  emptyTitle: string;
  emptyDesc: string;
  resetFilters: string;
  backToShelf: string;
  prevBook: string;
  nextBook: string;
  toggleAngle3D: string;
  toggleAngleFlat: string;
  specsTitle: string;
  specCode: string;
  specEdition: string;
  specPages: string;
  specBinding: string;
  specYear: string;
  specPublisher: string;
  publisherValue: string;
  highlightsTitle: string;
  tocTitle: string;
  orderBoxTitle: string;
  orderBoxNotice: string;
  callOrderBtn: string;
  callHoursNote: string;
  paymentCardTitle: string;
  paymentCardSubtitle: string;
  bkashLabel: string;
  nagadLabel: string;
  sendMoneyNote: string;
  copyNumberBtn: string;
  copiedText: string;
  speedPostBadgeTitle: string;
  speedPostBadgeDesc: string;
  relatedBooksTitle: string;
  deliverySectionTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  postOfficeBannerTitle: string;
  postOfficeBannerDesc: string;
  authorSectionTitle: string;
  authorSectionSubtitle: string;
  authorRole: string;
  authorBio: string;
  credentialsHeading: string;
  credentialsList: string[];
  fbPageBtn: string;
  fbProfileBtn: string;
  addressLabel: string;
  phoneLabel: string;
  footerSummary: string;
  footerQuickLinks: string;
  footerCategories: string;
  footerOrderPayment: string;
  footerPaymentNote: string;
  footerSpeedPostNote: string;
  footerRights: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandTitle: 'Selim English Education',
    navHome: 'Home',
    navBookshelf: 'Bookshelf',
    navDelivery: 'Speed Post',
    navAuthor: 'Author',
    navCallCta: '01705-70 50 21',
    sliderPrev: 'Previous slide',
    sliderNext: 'Next slide',
    sliderViewBook: 'View Book',
    sliderExploreAll: 'All 14 Books',
    authorHeroTag: 'AUTHOR & EDUCATOR',
    authorHeroDegree: 'B.A. (Hon’s), M.A. in English — Rajshahi University',
    authorHeroRole: '9th NTRCA Certified (College) · Former Lecturer, Rajshahi Court College',
    authorHeroInstitutions: 'Waymark Ideal College · UITS · The Royal, UCC, Omeca, Sunrise & Uniaid',
    authorHeroLocation: 'West of Nogor Bhobon, Rajshahi',
    authorHeroBooksStat: '14 Titles',
    authorHeroDeliveryStat: '64 Districts',
    authorHeroCall: 'Call to Order',
    authorHeroFb: 'FB Page',
    trust1Title: 'Speed Post Delivery',
    trust1Desc: 'Every Post Office in 64 Districts',
    trust2Title: 'Phone Confirmed',
    trust2Desc: 'Call 01705-70 50 21 to confirm',
    trust3Title: 'bKash & Nagad',
    trust3Desc: '01705-70 50 21 (Personal/Payment)',
    trust4Title: 'Single-Author Store',
    trust4Desc: 'All published & upcoming editions',
    categorySectionTitle: 'Browse by Category',
    viewAllLink: 'View all',
    browseCategoryCta: 'Explore',
    searchPlaceholder: 'Search books by title, exam (BCS, HSC, RU), or topic...',
    clearSearch: 'Clear',
    filterAll: 'All Books',
    filterGrammar: 'Grammar & Writing',
    filterAdmission: 'Admission & Job',
    filterAcademic: 'HSC & SSC',
    filterTranslation: 'Translation',
    filterUpcoming: 'Upcoming',
    shelfSectionTitle: '3D Bookshelf',
    viewModeShelf: '3D Shelf',
    viewModeGrid: 'Grid',
    shelfRow1Title: 'Shelf 01 · Grammar, Admission & Literature',
    shelfRow2Title: 'Shelf 02 · Academic, BCS & Job Preparation',
    shelfRow3Title: 'Shelf 03 · Foundations, Translation & Upcoming',
    shelfFilteredTitle: 'Filtered Books',
    viewDetails: 'Details',
    saveBook: 'Save book',
    savedBook: 'Saved',
    savedCountLabel: 'Saved',
    pagesLabel: 'pages',
    bdtSymbol: '৳',
    statusPublished: 'Published',
    statusUpcoming: 'Upcoming',
    emptyTitle: 'No matching books found',
    emptyDesc: 'Try another keyword or reset your category filter.',
    resetFilters: 'Show All Books',
    backToShelf: 'Back to Bookshelf',
    prevBook: 'Previous Book',
    nextBook: 'Next Book',
    toggleAngle3D: '3D Shelf View',
    toggleAngleFlat: 'Front Cover',
    specsTitle: 'Book Specifications',
    specCode: 'Catalog Code',
    specEdition: 'Edition',
    specPages: 'Length',
    specBinding: 'Binding',
    specYear: 'Publication',
    specPublisher: 'Publisher',
    publisherValue: 'Selim English Education, Rajshahi',
    highlightsTitle: 'Key Highlights',
    tocTitle: 'Contents Preview',
    orderBoxTitle: 'Order Confirmation via Phone',
    orderBoxNotice:
      'Orders are confirmed directly by phone call. Call between 9:00 AM – 10:00 PM to confirm stock and your Post Office address.',
    callOrderBtn: 'Call Now: 01705-70 50 21',
    callHoursNote: '9:00 AM – 10:00 PM Daily',
    paymentCardTitle: 'bKash & Nagad Payment',
    paymentCardSubtitle: 'Pay after confirming availability on the call.',
    bkashLabel: 'bKash',
    nagadLabel: 'Nagad',
    sendMoneyNote: 'Payment / Send Money Number:',
    copyNumberBtn: 'Copy Number',
    copiedText: 'Copied!',
    speedPostBadgeTitle: 'Bangladesh Post Office — Speed Post',
    speedPostBadgeDesc:
      'Delivered to every district, upazila, and union Post Office nationwide (2–4 working days).',
    relatedBooksTitle: 'More Books by Md. Selim Aktar',
    deliverySectionTitle: 'Phone Ordering & Speed Post',
    step1Title: '01. Choose Your Book',
    step1Desc: 'Browse the 3D bookshelf or search to inspect prices and chapter previews.',
    step2Title: '02. Call to Confirm',
    step2Desc: 'Call 01705-70 50 21 to confirm your order and pay via bKash or Nagad.',
    step3Title: '03. Speed Post Pickup',
    step3Desc: 'Receive your book via Bangladesh Post Speed Post at your nearest Post Office.',
    postOfficeBannerTitle: 'Delivered to Every Post Office Across Bangladesh',
    postOfficeBannerDesc:
      'Safe, tracked nationwide dispatch through Bangladesh Post Office Speed Post.',
    authorSectionTitle: 'Md. Selim Aktar',
    authorSectionSubtitle: 'ABOUT THE AUTHOR',
    authorRole: 'English Educator, Author & Translator',
    authorBio:
      'Md. Selim Aktar combines Rajshahi University English scholarship with years of college and admission coaching experience to author practical, exam-ready books for Bangladeshi learners.',
    credentialsHeading: 'Credentials & Experience',
    credentialsList: [
      'B.A. (Hon’s), M.A. in English — University of Rajshahi',
      '9th NTRCA Certified (College Level)',
      'Former Lecturer of English — Rajshahi Court College',
      'Former Lecturer of English — Waymark Ideal College, Rajshahi',
      'Faculty — University of Information Technology and Sciences (UITS)',
      'Senior Instructor — The Royal, UCC, Omeca, Sunrise, Uniaid & Coaching Centres',
    ],
    fbPageBtn: 'Selim English Education Page',
    fbProfileBtn: 'Teacher Profile',
    addressLabel: 'Address',
    phoneLabel: 'Order Helpline',
    footerSummary:
      'Official bookstore for Md. Selim Aktar’s published and upcoming English grammar, academic, admission, job, and literary books.',
    footerQuickLinks: 'Navigation',
    footerCategories: 'Categories',
    footerOrderPayment: 'Order & Payment',
    footerPaymentNote: 'bKash & Nagad: 01705-70 50 21',
    footerSpeedPostNote: 'Bangladesh Post Speed Post (64 Districts)',
    footerRights: '© 2026 Selim English Education · Md. Selim Aktar. All rights reserved.',
  },
  bn: {
    brandTitle: 'সেলিম ইংলিশ এডুকেশন',
    navHome: 'হোম',
    navBookshelf: 'বুকশেলফ',
    navDelivery: 'স্পিড পোস্ট',
    navAuthor: 'লেখক',
    navCallCta: '০১৭০৫-৭০ ৫০ ২১',
    sliderPrev: 'আগের স্লাইড',
    sliderNext: 'পরবর্তী স্লাইড',
    sliderViewBook: 'বইটি দেখুন',
    sliderExploreAll: 'সকল ১৪টি বই',
    authorHeroTag: 'লেখক ও ইংরেজি শিক্ষক',
    authorHeroDegree: 'বি.এ (অনার্স), এম.এ ইন ইংলিশ — রাজশাহী বিশ্ববিদ্যালয়',
    authorHeroRole: '৯ম এনটিআরসিএ সনদপ্রাপ্ত (কলেজ) · প্রাক্তন প্রভাষক, রাজশাহী কোর্ট কলেজ',
    authorHeroInstitutions: 'ওয়েমার্ক আইডিয়াল কলেজ · UITS · দ্য রয়েল, ইউসিসি, ওমেকা, সানরাইজ ও ইউনিএইড',
    authorHeroLocation: 'নগর ভবনের পশ্চিমে, রাজশাহী',
    authorHeroBooksStat: '১৪টি বই',
    authorHeroDeliveryStat: '৬৪ জেলায়',
    authorHeroCall: 'কল করে অর্ডার',
    authorHeroFb: 'ফেসবুক পেজ',
    trust1Title: 'স্পিড পোস্ট ডেলিভারি',
    trust1Desc: 'সারাদেশের ৬৪ জেলার পোস্ট অফিসে',
    trust2Title: 'ফোনে অর্ডার কনফার্ম',
    trust2Desc: 'কল করুন ০১৭০৫-৭০ ৫০ ২১',
    trust3Title: 'বিকাশ ও নগদ',
    trust3Desc: '০১৭০৫-৭০ ৫০ ২১',
    trust4Title: 'একক লেখকের সংগ্রহ',
    trust4Desc: 'প্রকাশিত ও আসন্ন সকল বই',
    categorySectionTitle: 'বিভাগ অনুযায়ী খুঁজুন',
    viewAllLink: 'সব দেখুন',
    browseCategoryCta: 'দেখুন',
    searchPlaceholder: 'বইয়ের নাম, পরীক্ষা (বিসিএস, এইচএসসি, রাবি) বা বিষয় লিখুন...',
    clearSearch: 'মুছুন',
    filterAll: 'সকল বই',
    filterGrammar: 'গ্রামার ও রাইটিং',
    filterAdmission: 'ভর্তি ও চাকরি',
    filterAcademic: 'এইচএসসি ও এসএসসি',
    filterTranslation: 'সাহিত্য ও অনুবাদ',
    filterUpcoming: 'আসন্ন বই',
    shelfSectionTitle: '৩ডি বুকশেলফ',
    viewModeShelf: '৩ডি শেলফ',
    viewModeGrid: 'গ্রিড',
    shelfRow1Title: 'শেলফ ০১ · গ্রামার, ভর্তি ও সাহিত্য',
    shelfRow2Title: 'শেলফ ০২ · একাডেমিক, বিসিএস ও চাকরি',
    shelfRow3Title: 'শেলফ ০৩ · ফাউন্ডেশন, অনুবাদ ও আসন্ন',
    shelfFilteredTitle: 'বাছাইকৃত বই',
    viewDetails: 'বিস্তারিত',
    saveBook: 'সংরক্ষণ করুন',
    savedBook: 'সংরক্ষিত',
    savedCountLabel: 'সংরক্ষিত',
    pagesLabel: 'পৃষ্ঠা',
    bdtSymbol: '৳',
    statusPublished: 'প্রকাশিত',
    statusUpcoming: 'আসন্ন',
    emptyTitle: 'কোনো বই পাওয়া যায়নি',
    emptyDesc: 'অন্য শব্দ দিয়ে সার্চ করুন অথবা ফিল্টার রিসেট করুন।',
    resetFilters: 'সব বই দেখুন',
    backToShelf: 'বুকশেলফে ফিরে যান',
    prevBook: 'আগের বই',
    nextBook: 'পরবর্তী বই',
    toggleAngle3D: '৩ডি শেলফ ভিউ',
    toggleAngleFlat: 'সম্মুখ কভার',
    specsTitle: 'বইয়ের বিবরণ',
    specCode: 'ক্যাটালগ কোড',
    specEdition: 'সংস্করণ',
    specPages: 'পৃষ্ঠা',
    specBinding: 'বাঁধাই',
    specYear: 'প্রকাশকাল',
    specPublisher: 'প্রকাশনা',
    publisherValue: 'সেলিম ইংলিশ এডুকেশন, রাজশাহী',
    highlightsTitle: 'বিশেষ বৈশিষ্ট্য',
    tocTitle: 'সূচিপত্র',
    orderBoxTitle: 'ফোনে কল করে অর্ডার কনফার্ম করুন',
    orderBoxNotice:
      'প্রতিদিন সকাল ৯টা থেকে রাত ১০টার মধ্যে কল করে বইয়ের প্রাপ্যতা ও আপনার নিকটস্থ পোস্ট অফিসের ঠিকানা নিশ্চিত করুন।',
    callOrderBtn: 'কল করুন: ০১৭০৫-৭০ ৫০ ২১',
    callHoursNote: 'প্রতিদিন সকাল ৯টা – রাত ১০টা',
    paymentCardTitle: 'বিকাশ ও নগদ পেমেন্ট',
    paymentCardSubtitle: 'ফোনে কনফার্ম হওয়ার পর পেমেন্ট সম্পন্ন করুন।',
    bkashLabel: 'বিকাশ',
    nagadLabel: 'নগদ',
    sendMoneyNote: 'পেমেন্ট / সেন্ড মানি নম্বর:',
    copyNumberBtn: 'নম্বর কপি করুন',
    copiedText: 'কপি হয়েছে!',
    speedPostBadgeTitle: 'বাংলাদেশ ডাক বিভাগ — স্পিড পোস্ট',
    speedPostBadgeDesc:
      'দেশের সকল জেলা, উপজেলা ও ইউনিয়ন পোস্ট অফিসে নিরাপদে পাঠানো হয় (২–৪ কর্মদিবস)।',
    relatedBooksTitle: 'মোঃ সেলিম আখতারের আরও বই',
    deliverySectionTitle: 'ফোনে অর্ডার ও স্পিড পোস্ট ডেলিভারি',
    step1Title: '০১. বই পছন্দ করুন',
    step1Desc: '৩ডি বুকশেলফ বা সার্চ থেকে পছন্দের বই ও মূল্য দেখে নিন।',
    step2Title: '০২. কল করে কনফার্ম করুন',
    step2Desc: '০১৭০৫-৭০ ৫০ ২১ নম্বরে কল করে অর্ডার কনফার্ম ও বিকাশ-নগদে পেমেন্ট করুন।',
    step3Title: '০৩. স্পিড পোস্টে বুঝে নিন',
    step3Desc: 'বাংলাদেশ ডাক বিভাগের স্পিড পোস্টের মাধ্যমে নিকটস্থ পোস্ট অফিস থেকে বই সংগ্রহ করুন।',
    postOfficeBannerTitle: 'সারাদেশের সকল পোস্ট অফিসে স্পিড পোস্ট ডেলিভারি',
    postOfficeBannerDesc:
      'বাংলাদেশ ডাক বিভাগের মাধ্যমে দেশের প্রতিটি প্রান্তে নিরাপদ ও নির্ভরযোগ্য ডেলিভারি।',
    authorSectionTitle: 'মোঃ সেলিম আখতার',
    authorSectionSubtitle: 'লেখক পরিচিতি',
    authorRole: 'ইংরেজি শিক্ষক, পাঠ্যবই লেখক ও অনুবাদক',
    authorBio:
      'রাজশাহী বিশ্ববিদ্যালয়ের ইংরেজি বিভাগের মেধাবী শিক্ষার্থী ও অভিজ্ঞ প্রভাষক মোঃ সেলিম আখতার দীর্ঘদিন ধরে সহজ ও কার্যকর পাঠ্যসহায়িকা রচনা করে আসছেন।',
    credentialsHeading: 'শিক্ষাগত যোগ্যতা ও অভিজ্ঞতা',
    credentialsList: [
      'বি.এ (অনার্স), এম.এ ইন ইংলিশ — রাজশাহী বিশ্ববিদ্যালয়',
      '৯ম এনটিআরসিএ নিবন্ধনকৃত (কলেজ পর্যায়)',
      'প্রাক্তন প্রভাষক (ইংরেজি) — রাজশাহী কোর্ট কলেজ',
      'প্রাক্তন প্রভাষক (ইংরেজি) — ওয়েমার্ক আইডিয়াল কলেজ, রাজশাহী',
      'শিক্ষক — ইউনিভার্সিটি অব ইনফরমেশন টেকনোলজি অ্যান্ড সায়েন্সেস (UITS)',
      'সিনিয়র ইনস্ট্রাক্টর — দ্য রয়েল, ইউসিসি, ওমেকা, সানরাইজ, ইউনিএইড ও অন্যান্য কোচিং সেন্টার',
    ],
    fbPageBtn: 'সেলিম ইংলিশ এডুকেশন পেজ',
    fbProfileBtn: 'শিক্ষকের প্রোফাইল',
    addressLabel: 'ঠিকানা',
    phoneLabel: 'অর্ডার হেল্পলাইন',
    footerSummary:
      'মোঃ সেলিম আখতারের প্রকাশিত ও আসন্ন সকল ইংরেজি গ্রামার, একাডেমিক, ভর্তি, চাকরি ও সাহিত্য বইয়ের অফিশিয়াল ওয়েবসাইট।',
    footerQuickLinks: 'মেনু',
    footerCategories: 'বইয়ের বিভাগ',
    footerOrderPayment: 'অর্ডার ও পেমেন্ট',
    footerPaymentNote: 'বিকাশ ও নগদ: ০১৭০৫-৭০ ৫০ ২১',
    footerSpeedPostNote: 'বাংলাদেশ ডাক স্পিড পোস্ট (৬৪ জেলা)',
    footerRights: '© ২০২৬ সেলিম ইংলিশ এডুকেশন · মোঃ সেলিম আখতার। সর্বস্বত্ব সংরক্ষিত।',
  },
};
