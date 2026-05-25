"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { getStoredTheme, toggleTheme, type Theme } from "@/lib/theme";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" />
    </svg>
  );
}

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    const current = stored ?? (document.documentElement.classList.contains("light") ? "light" : "dark");
    setThemeState(current);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const next = toggleTheme();
    setThemeState(next);
  };

  const isLight = theme === "light";
  const label = isLight ? "Koyu moda geç" : "Açık moda geç";

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "theme-toggle flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-white/[0.03] text-foreground-muted transition-colors duration-[380ms] hover:border-border-strong hover:bg-white/[0.06] hover:text-foreground",
        className
      )}
      style={{ transitionTimingFunction: "var(--ease-premium)" }}
      aria-label={label}
      title={label}
      disabled={!mounted}
    >
      {mounted ? (
        isLight ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )
      ) : (
        <span className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
