"use client";

import { ctaBand } from "@/content/home";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";

export function ContactCtaSection() {
  const microParts = ctaBand.microcopy?.split(" · ") ?? [];

  return (
    <SectionShell
      sectionIndex="06"
      overline="HADİ BAŞLAYALIM"
      tone="default"
      compact
      className="relative !pb-[var(--section-py)]"
    >
      <div className="cta-scene">
        <div className="cta-panel mx-auto max-w-3xl text-center">
          <div className="cta-panel-glow" aria-hidden />
          <div className="cta-panel-vignette" aria-hidden />
          <MotionReveal stagger className="relative z-10">
            <MotionItem>
              <div className="divider-tagline-center mb-9" />
            </MotionItem>
            <MotionItem>
              <h2 className="text-section-title mx-auto max-w-[18ch] text-balance">
                {ctaBand.title}
              </h2>
            </MotionItem>
            {ctaBand.description && (
              <MotionItem>
                <p className="text-body-lg mx-auto mt-6 max-w-lg text-balance">
                  {ctaBand.description}
                </p>
              </MotionItem>
            )}
            <MotionItem>
              <div className="mt-12 flex flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
                {ctaBand.cta && (
                  <Button
                    href={ctaBand.cta.href}
                    size="lg"
                    className="btn-premium w-full min-w-[220px] sm:w-auto"
                  >
                    {ctaBand.cta.label}
                  </Button>
                )}
                {ctaBand.secondaryCta && (
                  <Button
                    href={ctaBand.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    external={ctaBand.secondaryCta.external}
                    className="w-full sm:w-auto"
                  >
                    {ctaBand.secondaryCta.label}
                  </Button>
                )}
              </div>
            </MotionItem>
            {ctaBand.microcopy && (
              <MotionItem>
                <div className="microcopy-row mt-9 justify-center">
                  {microParts.map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </div>
              </MotionItem>
            )}
          </MotionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
