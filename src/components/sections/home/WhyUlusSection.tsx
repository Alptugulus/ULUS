import { whySection, whyPillars } from "@/content/home";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";

export function WhyUlusSection() {
  return (
    <SectionShell
      id="why"
      sectionIndex="04"
      overline={whySection.overline}
      showDivider
      title={whySection.title}
      description={whySection.description}
      tone="elevated"
      actions={
        whySection.cta ? (
          <Button href={whySection.cta.href} variant="ghost">
            {whySection.cta.label}
          </Button>
        ) : undefined
      }
    >
      <MotionReveal stagger className="template-grid template-grid--2">
        {whyPillars.map((pillar, i) => (
          <MotionItem key={pillar.title}>
            <article className="template-card template-card--static h-full">
              <div className="template-card__body">
                <div className="template-card__meta">
                  <span className="template-card__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="template-card__title">{pillar.title}</h3>
                <p className="template-card__desc">{pillar.description}</p>
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>
    </SectionShell>
  );
}
