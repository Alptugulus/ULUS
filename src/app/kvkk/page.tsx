import { kvkkPage } from "@/content/microcopy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: kvkkPage.title,
  description: kvkkPage.description,
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <section className="section-tone-base pt-28 pb-20 min-h-[70vh]">
      <Container className="max-w-3xl">
        <p className="text-overline mb-4">YASAL</p>
        <h1 className="text-display">{kvkkPage.title}</h1>
        <p className="text-body-lg mt-6">{kvkkPage.description}</p>

        <div className="mt-12 space-y-10">
          {kvkkPage.sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-section-title text-xl">{section.title}</h2>
              <p className="text-body-lg mt-3 text-foreground-muted">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Button href="/gizlilik" variant="secondary">
            Gizlilik Politikası
          </Button>
          <Button href="/">Ana Sayfaya Dön</Button>
        </div>
      </Container>
    </section>
  );
}
