export type CoffeeCategory = "washed" | "natural" | "experimental" | "rare";

export interface PriceTier {
  kg: number;
  price?: number;
  sold_out?: boolean;
}

export interface Coffee {
  id: string;
  name: string;
  name_en?: string;
  category: CoffeeCategory;
  origin: string;
  farm?: string;
  altitude?: string;
  process: string;
  variety: string;
  grade?: string;
  harvest_year?: string;
  roast_level: string;
  notes: string[];
  notes_source?: string;
  description: string;
  price_per_kg?: number;
  min_order_kg?: number;
  price_tiers?: PriceTier[];
  delivery_note?: string;
  image: string;
  gallery?: string[];
  featured: boolean;
  product_url?: string;
}

export interface Strength {
  icon: string;
  title: string;
  desc: string;
}

export interface Company {
  name: string;
  name_kr: string;
  slogan: string;
  tagline_en: string;
  description: string;
  founded_year: string;
  representative: string;
  strengths: Strength[];
  philosophy: string[];
}

export interface Contact {
  email: string;
  instagram: string;
  instagram_handle: string;
  smartstore_url?: string;
  address: string;
}
