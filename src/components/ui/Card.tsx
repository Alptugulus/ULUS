import Link from "next/link";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "service" | "work";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  href?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-background-elevated border border-border rounded-[var(--radius-lg)] p-6",
  service: [
    "group relative overflow-hidden",
    "border border-border rounded-[var(--radius-xl)] p-6 md:p-8",
    "bg-gradient-to-b from-[rgba(14,17,24,0.9)] to-[rgba(6,8,12,0.95)]",
    "transition-[transform,box-shadow,border-color] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:border-border-accent",
    "hover:shadow-[var(--shadow-card-hover)]",
    "hover:-translate-y-[3px]",
  ].join(" "),
  work: [
    "group relative overflow-hidden",
    "bg-background-elevated border border-border rounded-[var(--radius-lg)]",
    "transition-[transform,border-color] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-accent hover:-translate-y-[2px]",
  ].join(" "),
};

export function Card({
  children,
  className,
  variant = "default",
  href,
}: CardProps) {
  const classes = cn(variantStyles[variant], className);

  const accentEdge = variant === "service" ? (
    <span className="card-accent-edge" aria-hidden />
  ) : null;

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block h-full")}>
        {accentEdge}
        {children}
      </Link>
    );
  }

  return (
    <div className={classes}>
      {accentEdge}
      {children}
    </div>
  );
}
