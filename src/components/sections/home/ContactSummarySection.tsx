
import { contactSection } from "@/content/home";
import { consultationMicrocopy, consultationSteps } from "@/content/agency";
import { site } from "@/content/site";
import { whatsappHref, whatsappCtaLabel } from "@/content/microcopy";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";

export function ContactSummarySection() {
  return (
    <SectionShell
      sectionIndex="07"
      overline={contactSection.overline}
      title={contactSection.title}
      description={contactSection.description}
      tone="elevated"
      showDivider
    >
      <MotionReveal stagger className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <MotionItem>
          <div className="consultation-panel">
            <div className="consultation-panel__glow" aria-hidden />
            <div className="relative z-10 space-y-7">
              <p className="label-chip">Doğrudan kanallar</p>
              <div>
                <p className="text-overline mb-1.5">Telefon</p>
                <a href={site.phoneHref} className="link-interactive text-lg text-foreground">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-overline mb-1.5">E-posta</p>
                <a href={`mailto:${site.email}`} className="link-interactive text-lg text-foreground">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-overline mb-1.5">Konum</p>
                <span className="text-lg text-foreground-muted">İstanbul · Türkiye geneli</span>
              </div>
            </div>
          </div>
        </MotionItem>
        <MotionItem>
          <div className="space-y-8">
            <div>
              <p className="label-chip mb-4">İlk adım</p>
              <div className="consultation-steps">
                {consultationSteps.map((step) => (
                  <div key={step.step} className="consultation-step">
                    <span className="consultation-step__num">{step.step}</span>
                    <div>
                      <p className="consultation-step__title">{step.title}</p>
                      <p className="consultation-step__desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {contactSection.cta && (
                <Button href={contactSection.cta.href} size="lg" className="btn-premium">
                  {contactSection.cta.label}
                </Button>
              )}
              <Button href={whatsappHref} variant="secondary" size="lg" external>
                {whatsappCtaLabel}
              </Button>
            </div>
            <p className="microcopy-row text-sm">{consultationMicrocopy}</p>
          </div>
        </MotionItem>
      </MotionReveal>
    </SectionShell>
  );
}
