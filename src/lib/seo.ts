import type { Metadata } from "next";
import { site } from "@/content/site";

const BASE_URL = site.url;

interface CreateMetadataOptions {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
}: CreateMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? title
      : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.seo.description,
  };
}
