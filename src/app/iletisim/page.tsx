import { contactPage } from "@/content/microcopy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ContactConsultation } from "@/components/sections/contact/ContactConsultation";

export const metadata = createMetadata({
  title: "İletişim",
  description: contactPage.description,
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <section className="section-tone-base pt-28 pb-20 min-h-[85vh]">
      <Container>
        <ContactConsultation />
      </Container>
    </section>
  );
}
