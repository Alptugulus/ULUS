import { placeholderPages } from "@/content/microcopy";
import { caseStudies } from "@/content/work";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WorkShowcaseCard } from "@/components/sections/home/WorkShowcaseCard";
import { MotionReveal, MotionItem } from "@/motion/MotionReveal";

export const metadata = createMetadata({
  title: placeholderPages.work.title,
  description: placeholderPages.work.description,
  path: "/isler",
});

export default function IslerPage() {
  return (
    <section className="section-tone-subtle work-section pt-28 pb-20 min-h-[70vh]">
      <Container>
        <div className="section-header__top">
          <span className="section-index">03</span>
          <p className="text-overline mb-0">{placeholderPages.work.overline}</p>
        </div>
        <div className="divider-tagline mb-8 max-w-xs" />
        <h1 className="text-display max-w-3xl">{placeholderPages.work.title}</h1>
        <p className="text-body-lg mt-5 max-w-2xl">{placeholderPages.work.description}</p>

        <MotionReveal stagger className="template-grid template-grid--3 mt-14">
          {caseStudies.map((project, i) => (
            <MotionItem
              key={project.slug}
              >
              <WorkShowcaseCard index={i} project={project} />
            </MotionItem>
          ))}
        </MotionReveal>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/iletisim" size="lg" className="btn-premium">
            Proje Başlat
          </Button>
          <p className="text-sm text-foreground-subtle">
            Benzer bir proje mi planlıyorsunuz? Kısa bir görüşmeyle başlayalım.
          </p>
        </div>
      </Container>
    </section>
  );
}
