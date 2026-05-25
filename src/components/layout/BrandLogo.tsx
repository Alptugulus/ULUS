import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const LOGO_WIDTH = site.logoWidth;
const LOGO_HEIGHT = site.logoHeight;

type BrandLogoVariant = "header" | "footer" | "hero";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  priority?: boolean;
  linked?: boolean;
  className?: string;
}

const variantConfig: Record<
  BrandLogoVariant,
  { className: string; width: number; height: number; sizes: string }
> = {
  header: {
    className:
      "h-[3.35rem] w-auto min-w-[12rem] sm:h-[3.65rem] sm:min-w-[13.5rem] md:h-[4rem] md:min-w-[15.5rem] lg:h-[4.85rem] lg:min-w-[18rem] drop-shadow-[0_0_22px_rgba(255,255,255,0.18)]",
    width: 340,
    height: 183,
    sizes: "(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px",
  },
  footer: {
    className: "h-11 w-auto md:h-12",
    width: 212,
    height: 114,
    sizes: "212px",
  },
  hero: {
    className: "h-auto w-full max-w-[min(320px,85vw)]",
    width: 320,
    height: 172,
    sizes: "320px",
  },
};

export function BrandLogo({
  variant = "header",
  priority = false,
  linked = true,
  className,
}: BrandLogoProps) {
  const config = variantConfig[variant];

  const image = (
    <Image
      src={site.logo}
      alt={variant === "hero" ? "" : site.name}
      width={config.width}
      height={config.height}
      sizes={config.sizes}
      className={cn(config.className, "object-contain object-left", className)}
      priority={priority}
      quality={90}
      aria-hidden={variant === "hero" ? true : undefined}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center transition-[opacity,transform] duration-[380ms] hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]",
        variant === "hero" && "pointer-events-none"
      )}
      style={{ transitionTimingFunction: "var(--ease-premium)" }}
      aria-label={variant === "hero" ? undefined : `${site.name} — Ana sayfa`}
    >
      {image}
    </Link>
  );
}

export { LOGO_WIDTH, LOGO_HEIGHT };
