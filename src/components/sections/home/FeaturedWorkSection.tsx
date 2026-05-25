"use client";

import { workSection, workEmpty } from "@/content/home";
import { caseStudies } from "@/content/work";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";
import { WorkShowcaseCard } from "@/components/sections/home/WorkShowcaseCard";

export function FeaturedWorkSection() {
  return (
    <SectionShell
      sectionIndex="03"
      overline={workSection.overline}
      title={workSection.title}
      description={workSection.description}
      tone="default"
      showDivider
      actions={
        workSection.cta ? (
          <Button href={workSection.cta.href} variant="secondary">
            {workSection.cta.label}
          </Button>
        ) : undefined
      }
    >
      {caseStudies.length === 0 ? (
        <div className="rounded-[var(--radius-lg)] border border-dashed border-border bg-white/[0.02] p-14 text-center md:p-16">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-foreground-muted">
            {workEmpty}
          </p>
        </div>
      ) : (
        <MotionReveal stagger className="template-grid template-grid--3">
          {caseStudies.map((project, i) => (
            <MotionItem key={project.slug}>
              <WorkShowcaseCard index={i} project={project} />
            </MotionItem>
          ))}
        </MotionReveal>
      )}
    </SectionShell>
  );
}
