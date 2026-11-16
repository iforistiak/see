export type Language = 'en' | 'bn';
export type Theme = 'light' | 'dark';

export type BookCategory =
  | 'grammar'
  | 'admission'
  | 'academic'
  | 'translation'
  | 'upcoming';

export type FilterCategory = 'all' | BookCategory;
export type BookStatus = 'published' | 'upcoming';
export type CoverTheme = 'blue' | 'red' | 'orange';

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
  pages: number;
  editionEn: string;
  editionBn: string;
  bindingEn: string;
  bindingBn: string;
  coverTheme: CoverTheme;
  coverImage?: string;
  badgeTextEn?: string;
  badgeTextBn?: string;
  descriptionEn: string;
  descriptionBn: string;
  highlightsEn: string[];
  highlightsBn: string[];
  tocEn: string[];
  tocBn: string[];
  publishYear: string;
  keywords: string[];
}
