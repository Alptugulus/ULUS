"use client";

import { cn } from "@/lib/cn";

function UiCard({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("hero-ui-card", `hero-ui-card--${id}`, className)} aria-hidden>
      {children}
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground-subtle">
      {children}
    </span>
  );
}

function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[0.625rem] font-medium text-foreground-muted">
      {children}
    </span>
  );
}

function Sparkline() {
  const points = "4,28 16,22 28,24 40,14 52,18 64,8 76,12 88,6";
  return (
    <svg
      viewBox="0 0 92 32"
      className="mt-3 h-8 w-full text-accent-bright"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`${points} 88,32 4,32`} fill="url(#hero-spark-fill)" />
      <polyline
        points={points}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}


function AdsCard() {
  return (
    <UiCard id="ads">
      <div className="flex items-start justify-between gap-2">
        <CardLabel>Google Ads</CardLabel>
        <StatusPill>Aktif</StatusPill>
      </div>
      <p className="mt-2 text-[0.8125rem] font-medium leading-snug text-foreground">
        Kampanya performansı
      </p>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-xl font-semibold tracking-tight text-foreground">+48%</span>
        <span className="text-[0.6875rem] text-foreground-subtle">ROAS</span>
      </div>
      <div className="hero-ui-meter mt-2.5">
        <div className="hero-ui-meter__fill" style={{ width: "72%" }} />
      </div>
    </UiCard>
  );
}

function GrowthCard() {
  return (
    <UiCard id="growth">
      <CardLabel>Büyüme analitiği</CardLabel>
      <p className="mt-1.5 text-[0.8125rem] font-medium text-foreground">Aylık trafik</p>
      <Sparkline />
      <p className="mt-1 text-[0.6875rem] font-medium text-accent-bright">↑ 38% bu çeyrek</p>
    </UiCard>
  );
}

function MetricCard() {
  return (
    <UiCard id="metric">
      <CardLabel>Dönüşüm</CardLabel>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">3.2%</p>
      <p className="mt-0.5 text-[0.6875rem] text-foreground-subtle">Son 30 gün</p>
    </UiCard>
  );
}

function SocialCard() {
  return (
    <UiCard id="social">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 shrink-0 rounded-full border border-white/10 bg-gradient-to-br from-accent/35 to-accent-deep/50" />
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-foreground">ulusmedia</p>
          <p className="text-[0.625rem] text-foreground-subtle">Reels · Story</p>
        </div>
      </div>
      <div className="hero-ui-preview mt-2.5 flex aspect-[5/3] items-center justify-center">
        <span className="text-[0.625rem] uppercase tracking-wider text-foreground-subtle">
          İçerik önizleme
        </span>
      </div>
    </UiCard>
  );
}

function WebCard() {
  return (
    <UiCard id="web">
      <div className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-black/50 px-2 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-2/3 rounded bg-white/12" />
        <div className="h-1.5 w-full rounded bg-white/[0.06]" />
        <div className="h-10 rounded-md border border-white/[0.05] bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
      </div>
      <p className="mt-2 text-[0.6875rem] text-foreground-subtle">Kurumsal web</p>
    </UiCard>
  );
}

function ProcessCard() {
  const steps = ["Strateji", "Tasarım", "Performans"];
  return (
    <UiCard id="process" className="hidden xl:flex xl:flex-col">
      <CardLabel>Yaratıcı süreç</CardLabel>
      <ul className="mt-2 space-y-1.5">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2 text-[0.6875rem] text-foreground-muted">
            <span
              className={cn(
                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[0.5625rem] font-semibold",
                i === 1
                  ? "bg-accent-muted text-accent-bright"
                  : "border border-white/10 bg-white/[0.03]"
              )}
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ul>
    </UiCard>
  );
}

export function HeroFloatingCards() {
  return (
    <aside className="hero-visual select-none pointer-events-none" aria-hidden>
      <div className="hero-visual__ambient" />
      <div className="hero-visual__glow" />
      <div className="hero-visual__stage">
        <SocialCard />
        <AdsCard />
        <MetricCard />
        <GrowthCard />
        <WebCard />
        <ProcessCard />
      </div>
    </aside>
  );
}
