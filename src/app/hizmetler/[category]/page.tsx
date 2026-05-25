import { notFound } from "next/navigation";
import { getServiceCategory } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const { serviceCategories } = await import("@/content/services");
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) return {};
  return createMetadata({
    title: category.seo.title,
    description: category.seo.description,
    path: `/hizmetler/${slug}`,
  });
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) notFound();

  return (
    <>
      <section className="pt-28 pb-12 bg-background">
        <Container>
          <p className="text-overline mb-4">HİZMETLER</p>
          <h1 className="text-display max-w-3xl">{category.heroTitle}</h1>
          <p className="text-body-lg mt-4 max-w-2xl">{category.heroDescription}</p>
          <p className="mt-4 text-sm text-foreground-subtle">
            Kimler için: {category.audience}
          </p>
          <div className="mt-8">
            <Button href={category.cta.href}>{category.cta.label}</Button>
          </div>
        </Container>
      </section>

      <section className="py-[var(--section-py)] bg-background-elevated">
        <Container>
          <h2 className="text-section-title mb-10">Hizmetler</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {category.services.map((service) => (
              <li
                key={service.title}
                className="border border-border rounded-[var(--radius-lg)] p-6 bg-background"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
