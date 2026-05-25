import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  external?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: never;
  external?: boolean;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "btn-interactive btn-interactive--primary",
    "bg-gradient-to-b from-accent-bright via-accent to-accent-deep",
    "text-white font-semibold",
    "border border-accent-bright/20",
    "shadow-[var(--shadow-accent)]",
  ].join(" "),
  secondary: [
    "btn-interactive btn-interactive--secondary",
    "bg-white/[0.04] text-foreground",
    "border border-border-strong",
  ].join(" "),
  ghost: [
    "btn-interactive btn-interactive--ghost",
    "bg-transparent text-foreground-muted",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm rounded-[var(--radius-sm)] tracking-wide",
  md: "h-12 px-6 text-sm rounded-[var(--radius-md)]",
  lg: "h-14 px-8 text-[0.9375rem] rounded-[var(--radius-md)] tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}
