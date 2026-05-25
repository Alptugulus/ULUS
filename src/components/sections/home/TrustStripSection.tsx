import { trustSection, trustFooter } from "@/content/home";
import { trustItems } from "@/content/trust";
import { agencyCredentials, agencyStats } from "@/content/agency";
import { SectionShell } from "@/components/ui/SectionShell";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";

export function TrustStripSection() {
  return (
    <SectionShell
      sectionIndex="01"
      overline={trustSection.overline}
      title={trustSection.title}
      description={trustSection.description}
      tone="elevated"
      compact
      showDivider
    >
      <div className="template-stat-bar">
        {agencyStats.map((stat) => (
          <div key={stat.label} className="template-stat-bar__item">
            <span className="template-stat-bar__value">{stat.value}</span>
            <span className="template-stat-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>

      <MotionReveal stagger className="template-grid template-grid--4">
        {trustItems.map((item, i) => (
          <MotionItem key={item.title}>
            <article className="template-card template-card--static h-full">
              <div className="template-card__body">
                <div className="template-card__meta">
                  <span className="template-card__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label && <span>{item.label}</span>}
                </div>
                <h3 className="template-card__title">{item.title}</h3>
                <p className="template-card__desc">{item.description}</p>
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>

      <div className="agency-credentials mt-10">
        {agencyCredentials.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <p className="mt-8 text-center text-sm leading-relaxed text-foreground-subtle md:mt-10">
        {trustFooter}
      </p>
    </SectionShell>
  );
}
