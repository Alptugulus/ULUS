import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WorkPreview } from "@/components/sections/home/WorkPreview";
import { WorkShowcaseCard } from "@/components/sections/home/WorkShowcaseCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};
  return createMetadata({
    title: `${project.title} — ${project.client}`,
    description: project.excerpt,
    path: `/isler/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const otherProjects = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-12 bg-background">
        <Container>
          <p className="text-overline mb-4">
            {project.sector} · {project.projectType}
          </p>
          <h1 className="text-display max-w-3xl">{project.title}</h1>
          <p className="text-body-lg mt-4 max-w-2xl">{project.excerpt}</p>
          {project.caseNote && (
            <p className="mt-4 text-sm text-foreground-subtle max-w-2xl">
              {project.caseNote}
            </p>
          )}
          {project.liveUrl && (
            <div className="mt-7">
              <Button href={project.liveUrl} variant="secondary" external>
                Siteyi Ziyaret Et
                <span aria-hidden>↗</span>
              </Button>
            </div>
          )}
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div
            className="template-card__media aspect-auto overflow-hidden rounded-[var(--radius-lg)] border border-border"
            style={
              project.theme
                ? ({
                    "--preview-accent": project.theme.accent,
                    "--preview-surface": project.theme.surface,
                  } as React.CSSProperties)
                : undefined
            }
          >
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`${project.client} web sitesi önizlemesi`}
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 960px"
                className="w-full h-auto object-cover object-top"
                priority
              />
            ) : (
              <WorkPreview type={project.preview} client={project.client} theme={project.theme} featured />
            )}
          </div>
        </Container>
      </section>

      <section className="pb-[var(--section-py-compact)]">
        <Container>
          <div className="template-stat-bar">
            <div className="template-stat-bar__item">
              <span className="template-stat-bar__value">{project.client}</span>
              <span className="template-stat-bar__label">Müşteri</span>
            </div>
            <div className="template-stat-bar__item">
              <span className="template-stat-bar__value">{project.scope}</span>
              <span className="template-stat-bar__label">Kapsam</span>
            </div>
            <div className="template-stat-bar__item">
              <span className="template-stat-bar__value">{project.year}</span>
              <span className="template-stat-bar__label">Yıl</span>
            </div>
            <div className="template-stat-bar__item">
              <span className="template-stat-bar__value">
                {project.metric ? project.metric.value : project.sector}
              </span>
              <span className="template-stat-bar__label">
                {project.metric ? project.metric.label : "Sektör"}
              </span>
            </div>
          </div>

          <div className="template-card__tags">
            {project.services.map((service) => (
              <span key={service} className="template-card__tag">
                {service}
              </span>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/iletisim" size="lg" className="btn-premium">
              Benzer Bir Proje Başlat
            </Button>
            <Button href="/isler" variant="secondary" size="lg">
              Tüm İşlere Dön
            </Button>
          </div>
        </Container>
      </section>

      {otherProjects.length > 0 && (
        <section className="section-tone-subtle py-[var(--section-py-compact)]">
          <Container>
            <h2 className="text-section-title mb-10">Diğer projeler</h2>
            <div className="template-grid template-grid--3">
              {otherProjects.map((p, i) => (
                <WorkShowcaseCard key={p.slug} index={i} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
