
import { processSection } from "@/content/home";
import { processSteps } from "@/content/process";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      sectionIndex="05"
      overline={processSection.overline}
      showDivider
      title={processSection.title}
      description={processSection.description}
      tone="default"
      actions={
        processSection.cta ? (
          <Button href={processSection.cta.href}>{processSection.cta.label}</Button>
        ) : undefined
      }
    >
      <MotionReveal stagger className="template-steps">
        {processSteps.map((step) => (
          <MotionItem key={step.step}>
            <div className="template-step">
              <span className="template-step__num">{step.step}</span>
              <h3 className="template-step__title">{step.title}</h3>
              <p className="template-step__desc">{step.description}</p>
            </div>
          </MotionItem>
        ))}
      </MotionReveal>
    </SectionShell>
  );
}
