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
  filterClass68: string;
  filterSsc: string;
  filterHsc: string;
  filterSpokenBasic: string;
  filterAdmission: string;
  filterUpcoming: string;
  shelfSectionTitle: string;
  shelfGroupClass68: string;
  shelfGroupSsc: string;
  shelfGroupHsc: string;
  shelfGroupSpokenBasic: string;
  shelfGroupAdmission: string;
  shelfGroupUpcoming: string;
  shelfFilteredTitle: string;
  viewDetails: string;
  saveBook: string;
  savedBook: string;
  savedCountLabel: string;
  pagesLabel: string;
  bdtSymbol: string;
  discountOffLabel: string;
  statusPublished: string;
  statusUpcoming: string;
  emptyTitle: string;
  emptyDesc: string;
  resetFilters: string;
  backToShelf: string;
  prevBook: string;
  nextBook: string;
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
  readerReviewsTitle: string;
  readerReviewsSubtitle: string;
  readerReviewsCountLabel: string;
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
  footerCredit: string;
  scrollToTopLabel: string;
  scrollToTopShort: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandTitle: 'Selim English Education',
    navHome: 'Home',
    navBookshelf: 'Books',
    navDelivery: 'Speed Post',
    navAuthor: 'Author',
    navCallCta: '01705-70 50 21',
    sliderPrev: 'Previous slide',
    sliderNext: 'Next slide',
    sliderViewBook: 'View Book',
    sliderExploreAll: 'All Books',
    authorHeroTag: 'AUTHOR & EDUCATOR',
    authorHeroDegree: 'B.A. (Hon’s), M.A. in English — Rajshahi University',
    authorHeroRole: '9th NTRCA Certified (College) · Former Lecturer, Rajshahi Court College',
    authorHeroInstitutions: 'Waymark Ideal College · UITS · The Royal, UCC, Omeca, Sunrise & Uniaid',
    authorHeroLocation: 'West of Nogor Bhobon, Rajshahi',
    authorHeroBooksStat: '18 Books',
    authorHeroDeliveryStat: '64 Districts',
    authorHeroCall: 'Call to Order',
    authorHeroFb: 'FB Page',
    trust1Title: 'Speed Post Delivery',
    trust1Desc: 'Every Post Office in 64 Districts',
    trust2Title: 'Order Office Time',
    trust2Desc: '8:00 AM – 8:00 PM · 01705-70 50 21',
    trust3Title: 'bKash & Nagad',
    trust3Desc: '01705-70 50 21 (Personal/Payment)',
    trust4Title: 'Single-Author Store',
    trust4Desc: '14 published & 4 upcoming books',
    categorySectionTitle: 'Browse by Category',
    viewAllLink: 'View all',
    browseCategoryCta: 'Explore',
    searchPlaceholder: 'Search books by title, class (Six-Eight, SSC, HSC), Spoken, or Upcoming...',
    clearSearch: 'Clear',
    filterAll: 'All Books',
    filterClass68: 'Class 6–8',
    filterSsc: 'Nine–Ten / SSC',
    filterHsc: 'HSC',
    filterSpokenBasic: 'Spoken & Basic',
    filterAdmission: 'Admission',
    filterUpcoming: 'Upcoming',
    shelfSectionTitle: 'Books by Category',
    shelfGroupClass68: 'Class Six to Eight Books',
    shelfGroupSsc: 'Class Nine–Ten & SSC Books',
    shelfGroupHsc: 'HSC English & Question Bank',
    shelfGroupSpokenBasic: 'Spoken English & Basic Grammar',
    shelfGroupAdmission: 'University Admission Preparation',
    shelfGroupUpcoming: 'Upcoming Books (Pre-Booking Open)',
    shelfFilteredTitle: 'Matching Books',
    viewDetails: 'View Details',
    saveBook: 'Save book',
    savedBook: 'Saved',
    savedCountLabel: 'Saved',
    pagesLabel: 'pages',
    bdtSymbol: '৳',
    discountOffLabel: '% OFF',
    statusPublished: 'Published',
    statusUpcoming: 'Upcoming',
    emptyTitle: 'No matching books found',
    emptyDesc: 'Try another keyword or reset your category filter.',
    resetFilters: 'Show All Books',
    backToShelf: 'Back to Books',
    prevBook: 'Previous Book',
    nextBook: 'Next Book',
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
      'Orders are confirmed directly by phone call. Call during Order Office Time (8:00 AM – 8:00 PM) to confirm stock and your Post Office address.',
    callOrderBtn: 'Call Now: 01705-70 50 21',
    callHoursNote: 'Order Office Time: 8:00 AM – 8:00 PM',
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
    readerReviewsTitle: 'Reader Reviews',
    readerReviewsSubtitle: 'Verified feedback from students, guardians, and educators',
    readerReviewsCountLabel: 'reviews',
    deliverySectionTitle: 'Phone Ordering & Speed Post',
    step1Title: '01. Choose Your Book',
    step1Desc: 'Browse categories or search to inspect discounted prices and chapter previews.',
    step2Title: '02. Call to Confirm',
    step2Desc: 'Call 01705-70 50 21 (8:00 AM – 8:00 PM) to confirm your order and pay via bKash or Nagad.',
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
      'Official bookstore for Md. Selim Aktar’s Class 6–8, SSC, HSC, Spoken, Admission & Upcoming English books.',
    footerQuickLinks: 'Navigation',
    footerCategories: 'Categories',
    footerOrderPayment: 'Order & Office Time',
    footerPaymentNote: 'bKash & Nagad: 01705-70 50 21',
    footerSpeedPostNote: 'Bangladesh Post Speed Post (64 Districts)',
    footerRights: '© 2026 Selim English Education · Md. Selim Aktar. All rights reserved.',
    footerCredit: 'Credit: Md. Istiak Islam (Amin)',
    scrollToTopLabel: 'Scroll to top',
    scrollToTopShort: 'Top',
  },
  bn: {
    brandTitle: 'সেলিম ইংলিশ এডুকেশন',
    navHome: 'হোম',
    navBookshelf: 'বইসমূহ',
    navDelivery: 'স্পিড পোস্ট',
    navAuthor: 'লেখক',
    navCallCta: '০১৭০৫-৭০ ৫০ ২১',
    sliderPrev: 'আগের স্লাইড',
    sliderNext: 'পরবর্তী স্লাইড',
    sliderViewBook: 'বইটি দেখুন',
    sliderExploreAll: 'সকল বই',
    authorHeroTag: 'লেখক ও ইংরেজি শিক্ষক',
    authorHeroDegree: 'বি.এ (অনার্স), এম.এ ইন ইংলিশ — রাজশাহী বিশ্ববিদ্যালয়',
    authorHeroRole: '৯ম এনটিআরসিএ সনদপ্রাপ্ত (কলেজ) · প্রাক্তন প্রভাষক, রাজশাহী কোর্ট কলেজ',
    authorHeroInstitutions: 'ওয়েমার্ক আইডিয়াল কলেজ · UITS · দ্য রয়েল, ইউসিসি, ওমেকা, সানরাইজ ও ইউনিএইড',
    authorHeroLocation: 'নগর ভবনের পশ্চিমে, রাজশাহী',
    authorHeroBooksStat: '১৮টি বই',
    authorHeroDeliveryStat: '৬৪ জেলায়',
    authorHeroCall: 'কল করে অর্ডার',
    authorHeroFb: 'ফেসবুক পেজ',
    trust1Title: 'স্পিড পোস্ট ডেলিভারি',
    trust1Desc: 'সারাদেশের ৬৪ জেলার পোস্ট অফিসে',
    trust2Title: 'অর্ডার অফিস সময়',
    trust2Desc: 'সকাল ৮:০০ – রাত ৮:০০ · ০১৭০৫-৭০ ৫০ ২১',
    trust3Title: 'বিকাশ ও নগদ',
    trust3Desc: '০১৭০৫-৭০ ৫০ ২১',
    trust4Title: 'একক লেখকের সংগ্রহ',
    trust4Desc: '১৪টি প্রকাশিত ও ৪টি আসন্ন বই',
    categorySectionTitle: 'বিভাগ অনুযায়ী খুঁজুন',
    viewAllLink: 'সব দেখুন',
    browseCategoryCta: 'দেখুন',
    searchPlaceholder: 'বইয়ের নাম, শ্রেণি (৬ষ্ঠ-৮ম, এসএসসি, এইচএসসি) বা আসন্ন লিখে খুঁজুন...',
    clearSearch: 'মুছুন',
    filterAll: 'সকল বই',
    filterClass68: '৬ষ্ঠ–৮ম শ্রেণি',
    filterSsc: 'নবম–দশম / এসএসসি',
    filterHsc: 'এইচএসসি',
    filterSpokenBasic: 'স্পোকেন ও বেসিক',
    filterAdmission: 'এডমিশন',
    filterUpcoming: 'আসন্ন বই',
    shelfSectionTitle: 'বিভাগভিত্তিক বইয়ের তালিকা',
    shelfGroupClass68: '৬ষ্ঠ থেকে ৮ম শ্রেণির বই',
    shelfGroupSsc: 'নবম–দশম ও এসএসসি বইসমূহ',
    shelfGroupHsc: 'এইচএসসি ইংরেজি ও প্রশ্নব্যাংক',
    shelfGroupSpokenBasic: 'স্পোকেন ইংলিশ ও বেসিক গ্রামার',
    shelfGroupAdmission: 'বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি',
    shelfGroupUpcoming: 'আসন্ন বইসমূহ (প্রি-বুকিং চলছে)',
    shelfFilteredTitle: 'বাছাইকৃত বই',
    viewDetails: 'বিস্তারিত',
    saveBook: 'সংরক্ষণ করুন',
    savedBook: 'সংরক্ষিত',
    savedCountLabel: 'সংরক্ষিত',
    pagesLabel: 'পৃষ্ঠা',
    bdtSymbol: '৳',
    discountOffLabel: '% ছাড়',
    statusPublished: 'প্রকাশিত',
    statusUpcoming: 'আসন্ন',
    emptyTitle: 'কোনো বই পাওয়া যায়নি',
    emptyDesc: 'অন্য শব্দ দিয়ে সার্চ করুন অথবা ফিল্টার রিসেট করুন।',
    resetFilters: 'সব বই দেখুন',
    backToShelf: 'বইয়ের তালিকায় ফিরুন',
    prevBook: 'আগের বই',
    nextBook: 'পরবর্তী বই',
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
      'অর্ডার অফিস সময় (সকাল ৮:০০ থেকে রাত ৮:০০) এর মধ্যে কল করে বইয়ের প্রাপ্যতা ও আপনার নিকটস্থ পোস্ট অফিসের ঠিকানা নিশ্চিত করুন।',
    callOrderBtn: 'কল করুন: ০১৭০৫-৭০ ৫০ ২১',
    callHoursNote: 'অর্ডার অফিস সময়: সকাল ৮:০০ – রাত ৮:০০',
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
    readerReviewsTitle: 'পাঠকদের মতামত',
    readerReviewsSubtitle: 'শিক্ষার্থী, অভিভাবক ও শিক্ষকদের অভিজ্ঞতা ও রেটিং',
    readerReviewsCountLabel: 'টি রিভিউ',
    deliverySectionTitle: 'ফোনে অর্ডার ও স্পিড পোস্ট ডেলিভারি',
    step1Title: '০১. বই পছন্দ করুন',
    step1Desc: 'বিভাগ বা সার্চ থেকে পছন্দের বই, ডিসকাউন্ট মূল্য ও সূচিপত্র দেখে নিন।',
    step2Title: '০২. কল করে কনফার্ম করুন',
    step2Desc: '০১৭০৫-৭০ ৫০ ২১ নম্বরে (সকাল ৮:০০ – রাত ৮:০০) কল করে অর্ডার কনফার্ম ও বিকাশ-নগদে পেমেন্ট করুন।',
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
      'মোঃ সেলিম আখতারের ৬ষ্ঠ-৮ম, এসএসসি, এইচএসসি, স্পোকেন, এডমিশন ও আসন্ন ইংরেজি বইয়ের অফিশিয়াল ওয়েবসাইট।',
    footerQuickLinks: 'মেনু',
    footerCategories: 'বইয়ের বিভাগ',
    footerOrderPayment: 'অর্ডার ও অফিস সময়',
    footerPaymentNote: 'বিকাশ ও নগদ: ০১৭০৫-৭০ ৫০ ২১',
    footerSpeedPostNote: 'বাংলাদেশ ডাক স্পিড পোস্ট (৬৪ জেলা)',
    footerRights: '© ২০২৬ সেলিম ইংলিশ এডুকেশন · মোঃ সেলিম আখতার। সর্বস্বত্ব সংরক্ষিত।',
    footerCredit: 'ক্রেডিট: মোঃ ইশতিয়াক ইসলাম (আমিন)',
    scrollToTopLabel: 'উপরে যান',
    scrollToTopShort: 'উপরে',
  },
};
