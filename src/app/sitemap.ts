import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { serviceCategories } from "@/content/services";
import { caseStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/hizmetler`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/isler`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/hakkimizda`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/iletisim`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/gizlilik`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/kvkk`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceCategories.map((cat) => ({
    url: `${site.url}/hizmetler/${cat.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${site.url}/isler/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
