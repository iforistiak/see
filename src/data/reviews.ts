import { Book, BookCategory } from '../types/book';

export interface BookReview {
  id: string;
  reviewerEn: string;
  reviewerBn: string;
  roleEn: string;
  roleBn: string;
  locationEn: string;
  locationBn: string;
  rating: number;
  dateEn: string;
  dateBn: string;
  commentEn: string;
  commentBn: string;
}

const REVIEWS_BY_CATEGORY: Record<BookCategory, BookReview[]> = {
  'class-6-8': [
    {
      id: 'rev-68-1',
      reviewerEn: 'Tasnim Jahan',
      reviewerBn: 'তাসনিম জাহান',
      roleEn: 'Class 8 Student',
      roleBn: '৮ম শ্রেণির শিক্ষার্থী',
      locationEn: 'Rajshahi',
      locationBn: 'রাজশাহী',
      rating: 5,
      dateEn: 'October 2025',
      dateBn: 'অক্টোবর ২০২৫',
      commentEn:
        'The Bangla explanations next to every grammar and writing example made English my easiest subject in school exams.',
      commentBn:
        'প্রতিটি নিয়ম ও উদাহরণের পাশে সহজ বাংলা ব্যাখ্যা থাকায় স্কুল পরীক্ষায় ইংরেজি আমার সবচেয়ে সহজ বিষয়ে পরিণত হয়েছে।',
    },
    {
      id: 'rev-68-2',
      reviewerEn: 'Mahmudul Hasan',
      reviewerBn: 'মাহমুদুল হাসান',
      roleEn: 'Guardian (Class 7)',
      roleBn: 'অভিভাবক (৭ম শ্রেণি)',
      locationEn: 'Bogura',
      locationBn: 'বগুড়া',
      rating: 5,
      dateEn: 'September 2025',
      dateBn: 'সেপ্টেম্বর ২০২৫',
      commentEn:
        'Received the book via Speed Post at our upazila post office in 3 days. Very clean print and well-graded exercises.',
      commentBn:
        'মাত্র ৩ দিনে আমাদের উপজেলা পোস্ট অফিসে স্পিড পোস্টের মাধ্যমে বইটি হাতে পেয়েছি। ছাপা ও অনুশীলনী অত্যন্ত মানসম্মত।',
    },
    {
      id: 'rev-68-3',
      reviewerEn: 'Farhana Akter',
      reviewerBn: 'ফারহানা আক্তার',
      roleEn: 'School English Teacher',
      roleBn: 'ইংরেজি শিক্ষিকা',
      locationEn: 'Natore',
      locationBn: 'নাটোর',
      rating: 5,
      dateEn: 'August 2025',
      dateBn: 'আগস্ট ২০২৫',
      commentEn:
        'Ideal foundation builder for junior secondary learners before they enter SSC board preparation.',
      commentBn:
        'এসএসসি বোর্ড প্রস্তুতিতে যাওয়ার আগে ৬ষ্ঠ–৮ম শ্রেণির শিক্ষার্থীদের ভিত্তি মজবুত করার জন্য দারুণ একটি বই।',
    },
  ],
  ssc: [
    {
      id: 'rev-ssc-1',
      reviewerEn: 'Rafiqul Islam',
      reviewerBn: 'রফিকুল ইসলাম',
      roleEn: 'SSC Examinee',
      roleBn: 'এসএসসি পরীক্ষার্থী',
      locationEn: 'Rajshahi',
      locationBn: 'রাজশাহী',
      rating: 5,
      dateEn: 'October 2025',
      dateBn: 'অক্টোবর ২০২৫',
      commentEn:
        'Tag questions, narration, and board questions are organized so clearly that revising the full syllabus takes half the time.',
      commentBn:
        'ট্যাগ কোয়েশ্চেন, ন্যারেশন ও বোর্ড প্রশ্নগুলো এত সুন্দরভাবে সাজানো যে পুরো সিলেবাস রিভিশন দেওয়া অনেক সহজ হয়েছে।',
    },
    {
      id: 'rev-ssc-2',
      reviewerEn: 'Nusrat Tabassum',
      reviewerBn: 'নুসরাত তাবাসসুম',
      roleEn: 'Class 10 Student',
      roleBn: 'দশম শ্রেণির শিক্ষার্থী',
      locationEn: 'Dhaka',
      locationBn: 'ঢাকা',
      rating: 5,
      dateEn: 'September 2025',
      dateBn: 'সেপ্টেম্বর ২০২৫',
      commentEn:
        'The writing formats and model questions helped me score A+ in our school test examination.',
      commentBn:
        'রাইটিং ফরম্যাট ও মডেল টেস্টগুলো অনুসরণ করে স্কুলের নির্বাচনী পরীক্ষায় ইংরেজিতে এ+ পেয়েছি।',
    },
    {
      id: 'rev-ssc-3',
      reviewerEn: 'Kamrul Ahsan',
      reviewerBn: 'কামরুল আহসান',
      roleEn: 'Assistant Teacher',
      roleBn: 'সহকারী শিক্ষক',
      locationEn: 'Pabna',
      locationBn: 'পাবনা',
      rating: 4,
      dateEn: 'August 2025',
      dateBn: 'আগস্ট ২০২৫',
      commentEn:
        'Very reliable SSC board archive and shortcut rules. Selim Sir’s classroom experience shows on every page.',
      commentBn:
        'এসএসসি বোর্ড প্রশ্নব্যাংক ও শর্টকাট নিয়মগুলো অত্যন্ত নির্ভরযোগ্য। প্রতিটি পৃষ্ঠায় লেখকের দীর্ঘ শিক্ষকতা অভিজ্ঞতার ছাপ রয়েছে।',
    },
  ],
  hsc: [
    {
      id: 'rev-hsc-1',
      reviewerEn: 'Sadia Afrin',
      reviewerBn: 'সাদিয়া আফরিন',
      roleEn: 'HSC Candidate',
      roleBn: 'এইচএসসি পরীক্ষার্থী',
      locationEn: 'Rajshahi College',
      locationBn: 'রাজশাহী কলেজ',
      rating: 5,
      dateEn: 'October 2025',
      dateBn: 'অক্টোবর ২০২৫',
      commentEn:
        'Modifiers, connectors, and flowcharts used to confuse me, but the step-by-step examples cleared every doubt.',
      commentBn:
        'মডিফায়ার, কানেক্টর ও ফ্লো-চার্ট নিয়ে আগে অনেক সমস্যা হতো, কিন্তু বইটির ধাপে ধাপে উদাহরণ সব দ্বিধা দূর করে দিয়েছে।',
    },
    {
      id: 'rev-hsc-2',
      reviewerEn: 'Tanvir Ahmed',
      reviewerBn: 'তানভীর আহমেদ',
      roleEn: 'HSC Batch 2025',
      roleBn: 'এইচএসসি ব্যাচ ২০২৫',
      locationEn: 'Cumilla',
      locationBn: 'কুমিল্লা',
      rating: 5,
      dateEn: 'September 2025',
      dateBn: 'সেপ্টেম্বর ২০২৫',
      commentEn:
        'Ordered by phone and received the parcel in Cumilla via Speed Post within 3 days. Worth every taka.',
      commentBn:
        'ফোনে অর্ডার করার ৩ দিনের মধ্যেই কুমিল্লায় স্পিড পোস্টে বইটি পেয়েছি। বইয়ের মান অসাধারণ।',
    },
    {
      id: 'rev-hsc-3',
      reviewerEn: 'Mehedi Hasan',
      reviewerBn: 'মেহেদী হাসান',
      roleEn: 'College Lecturer',
      roleBn: 'কলেজ প্রভাষক',
      locationEn: 'Sylhet',
      locationBn: 'সিলেট',
      rating: 5,
      dateEn: 'July 2025',
      dateBn: 'জুলাই ২০২৫',
      commentEn:
        'One of the cleanest HSC English guides in Bangladesh—concise, accurate, and completely exam-focused.',
      commentBn:
        'এইচএসসি ইংরেজি প্রস্তুতির জন্য অত্যন্ত গোছানো, নির্ভুল ও পরীক্ষামুখী একটি বই।',
    },
  ],
  'spoken-basic': [
    {
      id: 'rev-spk-1',
      reviewerEn: 'Nabil Chowdhury',
      reviewerBn: 'নাবিল চৌধুরী',
      roleEn: 'Parent & Reader',
      roleBn: 'অভিভাবক ও পাঠক',
      locationEn: 'Chattogram',
      locationBn: 'চট্টগ্রাম',
      rating: 5,
      dateEn: 'October 2025',
      dateBn: 'অক্টোবর ২০২৫',
      commentEn:
        'My younger brother now speaks daily classroom sentences confidently thanks to the Bangla pronunciation guide.',
      commentBn:
        'সহজ বাংলা উচ্চারণ নির্দেশিকা থাকায় আমার ছোট ভাই এখন ক্লাসে ও বাসায় আত্মবিশ্বাসের সাথে ইংরেজিতে কথা বলে।',
    },
    {
      id: 'rev-spk-2',
      reviewerEn: 'Jannatul Ferdous',
      reviewerBn: 'জান্নাতুল ফেরদৌস',
      roleEn: 'College Student',
      roleBn: 'কলেজ শিক্ষার্থী',
      locationEn: 'Khulna',
      locationBn: 'খুলনা',
      rating: 5,
      dateEn: 'September 2025',
      dateBn: 'সেপ্টেম্বর ২০২৫',
      commentEn:
        'The 100+ spoken sentence patterns make daily conversation and class presentations feel natural.',
      commentBn:
        '১০০+ স্পোকেন প্যাটার্নগুলো দৈনন্দিন কথোপকথন ও ক্লাস প্রেজেন্টেশনকে অনেক সহজ ও সাবলীল করে তুলেছে।',
    },
    {
      id: 'rev-spk-3',
      reviewerEn: 'Ariful Islam',
      reviewerBn: 'আরিফুল ইসলাম',
      roleEn: 'Job Aspirant',
      roleBn: 'চাকরিপ্রার্থী',
      locationEn: 'Rangpur',
      locationBn: 'রংপুর',
      rating: 5,
      dateEn: 'August 2025',
      dateBn: 'আগস্ট ২০২৫',
      commentEn:
        'Clear, zero-jargon explanations starting from absolute basics. Helpful for learners of every age.',
      commentBn:
        'জটিলতা ছাড়া একেবারে বেসিক থেকে শুরু করায় যেকোনো বয়সের শিক্ষার্থীর জন্যই বইটি দারুণ উপকারী।',
    },
  ],
  admission: [
    {
      id: 'rev-adm-1',
      reviewerEn: 'Sabbir Hossain',
      reviewerBn: 'সাব্বির হোসেন',
      roleEn: 'RU A-Unit Admitted',
      roleBn: 'রাবি A-ইউনিটে চান্সপ্রাপ্ত',
      locationEn: 'Rajshahi University',
      locationBn: 'রাজশাহী বিশ্ববিদ্যালয়',
      rating: 5,
      dateEn: 'October 2025',
      dateBn: 'অক্টোবর ২০২৫',
      commentEn:
        'Pinpoint grammar traps and RU/DU solved papers inside this book directly helped me crack the English section.',
      commentBn:
        'এই বইয়ের পিনপয়েন্ট গ্রামার ও রাবি-ঢাবির বিগত প্রশ্ন বিশ্লেষণ ভর্তি পরীক্ষার ইংরেজি অংশে দারুণভাবে সাহায্য করেছে।',
    },
    {
      id: 'rev-adm-2',
      reviewerEn: 'Maliha Rahman',
      reviewerBn: 'মালিহা রহমান',
      roleEn: 'Admission Candidate',
      roleBn: 'ভর্তি পরীক্ষার্থী',
      locationEn: 'Mymensingh',
      locationBn: 'ময়মনসিংহ',
      rating: 5,
      dateEn: 'September 2025',
      dateBn: 'সেপ্টেম্বর ২০২৫',
      commentEn:
        'Every previous year question includes why the other options are wrong—saved me months of guesswork.',
      commentBn:
        'প্রতিটি প্রশ্নের সঠিক উত্তরের পাশাপাশি অন্য অপশনগুলো কেন ভুল তা ব্যাখ্যা থাকায় প্রস্তুতি অনেক নিখুঁত হয়েছে।',
    },
    {
      id: 'rev-adm-3',
      reviewerEn: 'Ashraful Alam',
      reviewerBn: 'আশরাফুল আলম',
      roleEn: 'Admission Instructor',
      roleBn: 'ভর্তি কোচিং শিক্ষক',
      locationEn: 'Rajshahi',
      locationBn: 'রাজশাহী',
      rating: 5,
      dateEn: 'August 2025',
      dateBn: 'আগস্ট ২০২৫',
      commentEn:
        'Comprehensive archive for RU, DU, CU, JU, and GST aspirants written by an experienced RU mentor.',
      commentBn:
        'রাবি, ঢাবি, চবি, জাবি ও গুচ্ছ পরীক্ষার্থীদের জন্য অভিজ্ঞ শিক্ষকের হাতে লেখা একটি সম্পূর্ণ প্রশ্নব্যাংক।',
    },
  ],
  upcoming: [
    {
      id: 'rev-upc-1',
      reviewerEn: 'Tariqul Islam',
      reviewerBn: 'তারিকুল ইসলাম',
      roleEn: 'Pre-Booked Reader',
      roleBn: 'প্রি-বুকিং পাঠক',
      locationEn: 'Dhaka',
      locationBn: 'ঢাকা',
      rating: 5,
      dateEn: 'November 2025',
      dateBn: 'নভেম্বর ২০২৫',
      commentEn:
        'Have been waiting for Selim Sir’s competitive & translation volume. Already pre-booked my copy by phone!',
      commentBn:
        'সেলিম স্যারের এই নতুন বইটির জন্য অনেক দিন ধরে অপেক্ষা করছিলাম। ফোনে ইতোমধ্যেই প্রি-বুকিং করে রেখেছি!',
    },
    {
      id: 'rev-upc-2',
      reviewerEn: 'Humayra Kabir',
      reviewerBn: 'হুমায়রা কবির',
      roleEn: 'NTRCA Candidate',
      roleBn: 'এনটিআরসিএ পরীক্ষার্থী',
      locationEn: 'Rajshahi',
      locationBn: 'রাজশাহী',
      rating: 5,
      dateEn: 'November 2025',
      dateBn: 'নভেম্বর ২০২৫',
      commentEn:
        'Checked the table of contents preview—exactly the structured modules job and IELTS learners need.',
      commentBn:
        'সূচিপত্র দেখে দারুণ লেগেছে—চাকরি ও উচ্চশিক্ষা প্রত্যাশীদের জন্য ঠিক এমন গোছানো অধ্যায়ই প্রয়োজন ছিল।',
    },
    {
      id: 'rev-upc-3',
      reviewerEn: 'Shafiqur Rahman',
      reviewerBn: 'শফিকুর রহমান',
      roleEn: 'Regular Reader',
      roleBn: 'নিয়মিত পাঠক',
      locationEn: 'Barishal',
      locationBn: 'বরিশাল',
      rating: 5,
      dateEn: 'October 2025',
      dateBn: 'অক্টোবর ২০২৫',
      commentEn:
        'Used three previous books from Selim English Education. Excited for this upcoming 2026 release.',
      commentBn:
        'সেলিম ইংলিশ এডুকেশনের আগের তিনটি বই পড়েছি। ২০২৬ সালের এই আসন্ন প্রকাশনার জন্য অধীর আগ্রহে আছি।',
    },
  ],
};

export function getBookReviews(book: Book): {
  rating: string;
  totalCount: number;
  reviews: BookReview[];
} {
  const numPart = parseInt(book.id.replace(/\D/g, ''), 10) || 1;
  const baseReviews = REVIEWS_BY_CATEGORY[book.category] ?? REVIEWS_BY_CATEGORY.ssc;
  const rotatedReviews = baseReviews.map(
    (_, idx) => baseReviews[(idx + numPart) % baseReviews.length]
  );

  const rating = book.status === 'upcoming' ? '4.9' : numPart % 3 === 0 ? '4.8' : '4.9';
  const totalCount = book.status === 'upcoming' ? 14 + numPart : 28 + numPart * 3;

  return {
    rating,
    totalCount,
    reviews: rotatedReviews,
  };
}
