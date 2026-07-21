"use client";

import Link from "next/link";
import { useState, type CSSProperties, type MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/motion/useReducedMotion";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  /** İmleci hafifçe kendine çeken, parlayan hover — sadece öne çıkan CTA'larda kullan */
  magnetic?: boolean;
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
  magnetic = false,
  ...props
}: ButtonProps) {
  const reducedMotion = useReducedMotion();
  const magneticActive = magnetic && !reducedMotion;
  const [magneticStyle, setMagneticStyle] = useState<CSSProperties>({});

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright",
    magneticActive && "btn-magnetic",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (!magneticActive) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;
    setMagneticStyle({
      transform: `translate(${(relX - rect.width / 2) * 0.25}px, ${(relY - rect.height / 2) * 0.25}px) scale(1.02)`,
      "--mx": `${(relX / rect.width) * 100}%`,
      "--my": `${(relY / rect.height) * 100}%`,
    } as CSSProperties);
  }

  function handleMouseLeave() {
    if (!magneticActive) return;
    setMagneticStyle({ transform: "translate(0, 0) scale(1)" });
  }

  const magneticProps = magneticActive
    ? { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, style: magneticStyle }
    : {};

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...magneticProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...magneticProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      onClick={props.onClick}
      {...magneticProps}
    >
      {children}
    </button>
  );
}
