"use client";

import Link from "next/link";
import { mainNav, headerCta } from "@/content/navigation";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "mobile-nav-overlay fixed inset-0 top-16 z-40 bg-background/96 backdrop-blur-xl md:hidden",
        open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
      )}
    >
      <nav className="flex flex-col gap-1 p-6" aria-label="Mobil menü">
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="mobile-nav-link rounded-[var(--radius-sm)] px-4 py-3.5 text-lg text-foreground-muted hover:bg-white/[0.05] hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-6 border-t border-border pt-6">
          <Button href={headerCta.href} className="btn-premium w-full">
            {headerCta.label}
          </Button>
          <a
            href={site.phoneHref}
            className="link-interactive mt-4 block text-center text-sm text-foreground-muted"
          >
            {site.phone}
          </a>
        </div>
      </nav>
    </div>
  );
}
