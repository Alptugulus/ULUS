import { servicesHub } from "@/content/services";
import { serviceCategories } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { serviceCardCta } from "@/content/home";

export const metadata = createMetadata({
  title: servicesHub.title,
  description: servicesHub.description ?? "",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-background">
        <Container>
          <p className="text-overline mb-4">{servicesHub.overline}</p>
          <h1 className="text-display max-w-3xl">{servicesHub.title}</h1>
          <p className="text-body-lg mt-4 max-w-2xl">{servicesHub.description}</p>
          {servicesHub.cta && (
            <div className="mt-8">
              <Button href={servicesHub.cta.href}>{servicesHub.cta.label}</Button>
            </div>
          )}
        </Container>
      </section>
      <SectionShell tone="elevated">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceCategories.map((cat) => (
            <Card key={cat.slug} variant="service" href={`/hizmetler/${cat.slug}`}>
              <h2 className="text-xl font-semibold text-foreground">{cat.title}</h2>
              <p className="mt-2 text-sm text-foreground-muted">{cat.shortDescription}</p>
              <span className="mt-4 inline-block text-sm text-accent">
                {serviceCardCta.label} →
              </span>
            </Card>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
