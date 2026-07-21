import { aboutHighlights, aboutPage } from "@/content/microcopy";
import { agencyCredentials, agencyStats } from "@/content/agency";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";
import { AnimatedCounter } from "@/motion/AnimatedCounter";

export const metadata = createMetadata({
  title: "Hakkımızda",
  description: aboutPage.description,
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  return (
    <section className="section-tone-elevated pt-28 pb-20 min-h-[70vh]">
      <Container>
        <div className="section-header__top">
          <span className="section-index">01</span>
          <p className="text-overline mb-0">HAKKIMIZDA</p>
        </div>
        <div className="divider-tagline mb-8 max-w-xs" />
        <h1 className="text-display max-w-3xl">{aboutPage.title}</h1>
        <p className="text-body-lg mt-6 max-w-2xl">{aboutPage.description}</p>

        <div className="agency-stats mt-12">
          {agencyStats.map((stat) => (
            <div key={stat.label} className="agency-stat">
              <AnimatedCounter value={stat.value} className="agency-stat__value" />
              <span className="agency-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="agency-credentials">
          {agencyCredentials.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <MotionReveal
          stagger
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {aboutHighlights.map((item) => (
            <MotionItem key={item.title}>
              <div className="about-highlight h-full">
                <p className="label-chip">{item.label}</p>
                <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{item.text}</p>
              </div>
            </MotionItem>
          ))}
        </MotionReveal>

        <div className="mt-14">
          <Button href="/iletisim" size="lg" className="btn-premium">
            {aboutPage.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
