export type ProjectCategory = 'Brand Work' | 'Car Reels' | 'AI Pipeline' | 'Web/Dev';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  role: string;
  summary: string;
  outcome: string;
  brief?: string;
  concept?: string;
  process?: {
    step: string;
    description: string;
    tools: string[];
  }[];
  coverUrl: string;
  rawCoverUrl?: string; // For raw footage before grade
  galleryUrls: string[];
  tags: string[];
  externalLink?: string;
  featured: boolean;
  sortOrder: number;
  published: boolean;
}

export interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  enquiry_type: string;
  budget: string;
  preferred_date?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  photo_url?: string;
  published: boolean;
  sort_order: number;
}

export interface ServiceOffer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  targetAudience: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  details?: string;
  isMilestone?: boolean;
}
