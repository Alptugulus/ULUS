"use client";

import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";
import { HeroVisual } from "@/components/sections/home/HeroVisual";
import { HeroBackdrop } from "@/components/sections/home/HeroBackdrop";

export function HeroSection() {
  const lineOne = hero.title.split(hero.titleAccent)[0].trimEnd();
  const microParts = hero.microcopy.split(" · ");

  return (
    <section className="template-hero">
      <HeroBackdrop />
      <Container className="relative z-10">
        <div className="template-hero__inner">
          <div className="template-hero__content">
            <MotionReveal stagger>
              <MotionItem>
                <p className="text-overline-hero">{hero.overline}</p>
              </MotionItem>
              <MotionItem>
                <div className="divider-tagline mt-6 max-w-[12rem]" aria-hidden />
              </MotionItem>
              <MotionItem textReveal className="hero-title-motion">
                <h1 className="template-hero__title mt-6">
                  <span className="template-hero__title-lead">{lineOne} </span>
                  <span className="text-accent-line">{hero.titleAccent}</span>
                </h1>
              </MotionItem>
              <MotionItem>
                <p className="template-hero__lead">{hero.description}</p>
              </MotionItem>
              <MotionItem>
                <div className="template-hero__actions">
                  <Button href={hero.cta.href} size="lg" className="btn-hero-cta btn-premium">
                    {hero.cta.label}
                  </Button>
                  <Button
                    href={hero.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    className="btn-hero-secondary"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </MotionItem>
              <MotionItem>
                <div className="microcopy-row hero-microcopy mt-6">
                  {microParts.map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </div>
              </MotionItem>
            </MotionReveal>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
