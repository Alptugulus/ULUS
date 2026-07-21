"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headerCta, mainNav } from "@/content/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed top-0 left-0 right-0 z-50 border-b",
        scrolled
          ? "site-header--scrolled border-border"
          : "site-header--top border-transparent"
      )}
    >
      <span className="site-header__rule" aria-hidden />
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between gap-8 lg:gap-10">
          <div className="site-header__brand min-w-0">
            <BrandLogo variant="header" priority />
          </div>

          <nav
            className="hidden items-center gap-0.5 md:flex lg:gap-1"
            aria-label="Ana menü"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link px-5 py-3 text-base font-medium tracking-wide text-foreground-muted md:px-6 md:py-3.5 md:text-[1.0625rem] lg:px-7 lg:text-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button
              href={headerCta.href}
              size="lg"
              className="btn-premium min-h-[3.25rem] px-8 text-base shadow-[var(--shadow-accent)] lg:min-h-[3.5rem] lg:px-9 lg:text-[1.0625rem]"
              magnetic
            >
              {headerCta.label}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-border bg-white/[0.03] transition-colors duration-[380ms] hover:border-border-strong hover:bg-white/[0.05] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-foreground transition-transform duration-[380ms]",
                mobileOpen && "translate-y-2 rotate-45"
              )}
              style={{ transitionTimingFunction: "var(--ease-premium)" }}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-opacity duration-[380ms]",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-foreground transition-transform duration-[380ms]",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
              style={{ transitionTimingFunction: "var(--ease-premium)" }}
            />
          </button>
          </div>
        </div>
      </Container>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
