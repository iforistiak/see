export type Language = 'en' | 'bn';
export type Theme = 'light' | 'dark';

export type BookCategory =
  | 'class-6-8'
  | 'ssc'
  | 'hsc'
  | 'spoken-basic'
  | 'admission'
  | 'upcoming';

export type FilterCategory = 'all' | BookCategory;
export type BookStatus = 'published' | 'upcoming';
export type CoverTheme = 'navy' | 'sky' | 'green' | 'red';

export interface Book {
  id: string;
  slug: string;
  code: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  category: BookCategory;
  status: BookStatus;
  priceBdt: number;
  originalPriceBdt: number;
  pages: number;
  editionEn: string;
  editionBn: string;
  bindingEn: string;
  bindingBn: string;
  coverTheme: CoverTheme;
  coverImage?: string;
  descriptionEn: string;
  descriptionBn: string;
  highlightsEn: string[];
  highlightsBn: string[];
  tocEn: string[];
  tocBn: string[];
  publishYear: string;
  keywords: string[];
}
