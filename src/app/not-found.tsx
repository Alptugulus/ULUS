import { notFound } from "@/content/microcopy";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-28 pb-20 bg-background min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="text-display">{notFound.title}</h1>
        <p className="text-body-lg mt-4 max-w-md mx-auto">{notFound.description}</p>
        <div className="mt-10">
          <Button href="/">{notFound.cta}</Button>
        </div>
      </Container>
    </section>
  );
}
