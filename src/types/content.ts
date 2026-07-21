import type { StaticImageData } from "next/image";

export interface SeoFields {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SectionContent {
  overline?: string;
  title: string;
  description?: string;
  cta?: CtaLink;
  secondaryCta?: CtaLink;
  microcopy?: string;
}

export interface TrustItem {
  title: string;
  description: string;
  label?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCardContent {
  lead: string;
  tags: string[];
  highlights: string[];
  metric?: CaseStudyMetric;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  card: ServiceCardContent;
  heroTitle: string;
  heroDescription: string;
  audience: string;
  cta: CtaLink;
  services: ServiceItem[];
  seo: SeoFields;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyPillar {
  title: string;
  description: string;
}

export type WorkPreviewType =
  | "website"
  | "branding"
  | "ads"
  | "social"
  | "dashboard"
  | "device";

export type WorkLayoutSlot = "featured" | "tall" | "wide" | "compact";

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyTheme {
  accent: string;
  surface: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  projectType: string;
  scope: string;
  services: string[];
  excerpt: string;
  caseNote?: string;
  coverImage?: StaticImageData;
  liveUrl?: string;
  preview: WorkPreviewType;
  layout: WorkLayoutSlot;
  year: string;
  metric?: CaseStudyMetric;
  theme?: CaseStudyTheme;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  phone: string;
  phoneHref: string;
  email: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  seo: SeoFields;
}
