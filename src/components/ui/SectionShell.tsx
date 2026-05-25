import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionTone = "default" | "elevated" | "subtle" | "glow";

interface SectionShellProps {
  id?: string;
  sectionIndex?: string;
  overline?: string;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  showDivider?: boolean;
  compact?: boolean;
}

const toneStyles: Record<SectionTone, string> = {
  default: "section-tone-base",
  elevated: "section-tone-elevated",
  subtle: "section-tone-subtle",
  glow: "section-tone-base relative overflow-hidden",
};

export function SectionShell({
  id,
  sectionIndex,
  overline,
  title,
  description,
  actions,
  children,
  className,
  tone = "default",
  showDivider = false,
  compact = false,
}: SectionShellProps) {
  const hasHeader = overline || title || description || actions;

  return (
    <section
      id={id}
      className={cn(
        compact ? "py-[var(--section-py-compact)]" : "py-[var(--section-py)]",
        toneStyles[tone],
        className
      )}
    >
      <Container className="relative z-10">
        {hasHeader && (
          <header
            className={cn(
              "section-header",
              actions && "section-header--with-actions"
            )}
          >
            <div
              className={cn(
                "section-header__copy w-full max-w-full",
                actions && "md:min-w-0 md:flex-1 md:w-auto"
              )}
            >
              {(sectionIndex || overline) && (
                <div className="section-header__top">
                  {sectionIndex && (
                    <span className="section-index" aria-hidden>
                      {sectionIndex}
                    </span>
                  )}
                  {overline && <p className="text-overline mb-0">{overline}</p>}
                </div>
              )}
              {showDivider && <div className="divider-tagline mb-6 max-w-xs" />}
              {title && (
                <h2 className="text-section-title section-header__title max-w-none text-balance">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-body-lg section-header__desc">{description}</p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
