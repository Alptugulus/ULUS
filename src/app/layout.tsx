import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { site } from "@/content/site";
import { createMetadata, createOrganizationSchema } from "@/lib/seo";
/** Ayrı CSS modülleri — Turbopack HMR; @import zinciri tek pakette takılı kalıyordu */
import "@/styles/tokens.css";
import "./globals.css";
import "@/styles/typography.css";
import "@/styles/template.css";
import "@/styles/hero.css";
import "@/styles/services.css";
import "@/styles/work.css";
import "@/styles/motion.css";
import "@/styles/brand.css";

/** Kurumsal gövde — okunaklı, nötr, Türkçe karakter desteği */
const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

/** Kurumsal başlık — modern, güven veren geometrik sans */
const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-family",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = createMetadata({
  title: site.seo.title,
  description: site.seo.description,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { color: "#070b12" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = createOrganizationSchema();

  return (
    <html
      lang="tr"
      className={`${sourceSans.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <SiteHeader />
        <main className="min-w-0 overflow-x-clip pb-[4.25rem] md:pb-0">{children}</main>
        <SiteFooter />
        <MobileStickyBar />
      </body>
    </html>
  );
}
