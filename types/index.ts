export type CoffeeCategory = "africa" | "americas" | "asia";

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
  description: string;
  price_per_kg: number;
  min_order_kg: number;
  image: string;
  featured: boolean;
  product_url?: string;
}

export interface Strength {
  icon: string;
  title: string;
  desc: string;
}

export interface Value {
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
  philosophy: string;
  values: Value[];
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface ServicePolicy {
  title: string;
  desc: string;
  freshness_policy?: string;
}

export interface AdditionalService {
  title: string;
  desc: string;
}

export interface Services {
  intro: string;
  process: ProcessStep[];
  delivery: ServicePolicy;
  min_order: ServicePolicy;
  pricing_note: ServicePolicy;
  additional_services: AdditionalService[];
}

export interface Contact {
  phone: string;
  email: string;
  kakao_channel: string;
  instagram: string;
  instagram_handle: string;
  address: string;
  business_hours: string;
  inquiry_lead_time: string;
}
