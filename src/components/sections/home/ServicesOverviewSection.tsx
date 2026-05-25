"use client";

import { servicesSection, serviceCardCta } from "@/content/home";
import { serviceCategories } from "@/content/services";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";
import { ServiceBentoCard } from "@/components/sections/home/ServiceBentoCard";

export function ServicesOverviewSection() {
  return (
    <SectionShell
      sectionIndex="02"
      overline={servicesSection.overline}
      title={servicesSection.title}
      description={servicesSection.description}
      tone="subtle"
      showDivider
      actions={
        servicesSection.cta ? (
          <Button href={servicesSection.cta.href} variant="secondary">
            {servicesSection.cta.label}
          </Button>
        ) : undefined
      }
    >
      <MotionReveal stagger className="template-grid template-grid--2">
        {serviceCategories.map((cat, i) => (
          <MotionItem key={cat.slug}>
            <ServiceBentoCard
              index={i}
              title={cat.title}
              lead={cat.card.lead}
              tags={cat.card.tags}
              highlights={cat.card.highlights}
              metric={cat.card.metric}
              href={`/hizmetler/${cat.slug}`}
              ctaLabel={serviceCardCta.label}
            />
          </MotionItem>
        ))}
      </MotionReveal>
    </SectionShell>
  );
}
