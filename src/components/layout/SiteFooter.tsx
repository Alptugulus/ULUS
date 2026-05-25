import Link from "next/link";
import { site } from "@/content/site";
import { footerBrand } from "@/content/home";
import { footerNav, footerCta } from "@/content/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-premium relative">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <BrandLogo variant="footer" />
            <p className="mt-7 max-w-sm text-sm leading-[1.75] text-foreground-muted">
              {footerBrand}
            </p>
            <p className="mt-5 max-w-sm text-xs leading-relaxed tracking-wide text-foreground-subtle">
              {site.tagline}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-overline mb-6">Hizmetler</h3>
            <ul className="space-y-3.5">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted transition-colors duration-[380ms] hover:text-foreground"
                    style={{ transitionTimingFunction: "var(--ease-premium)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-overline mb-6">Kurumsal</h3>
            <ul className="space-y-3.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted transition-colors duration-[380ms] hover:text-foreground"
                    style={{ transitionTimingFunction: "var(--ease-premium)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-overline mb-6">İletişim</h3>
            <ul className="space-y-3.5 text-sm text-foreground-muted">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors duration-[380ms] hover:text-accent-bright"
                  style={{ transitionTimingFunction: "var(--ease-premium)" }}
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-[380ms] hover:text-accent-bright"
                  style={{ transitionTimingFunction: "var(--ease-premium)" }}
                >
                  {site.email}
                </a>
              </li>
              <li className="text-foreground-subtle">{site.domain}</li>
            </ul>
            <div className="mt-9">
              <Button href={footerCta.href} size="sm" variant="secondary">
                {footerCta.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="footer-divider mt-16 md:mt-20" />

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-subtle">
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-foreground-subtle transition-colors duration-[380ms] hover:text-foreground-muted"
                style={{ transitionTimingFunction: "var(--ease-premium)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
