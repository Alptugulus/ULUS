import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustStripSection } from "@/components/sections/home/TrustStripSection";
import { ServicesOverviewSection } from "@/components/sections/home/ServicesOverviewSection";
import { FeaturedWorkSection } from "@/components/sections/home/FeaturedWorkSection";
import { WhyUlusSection } from "@/components/sections/home/WhyUlusSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { ContactCtaSection } from "@/components/sections/home/ContactCtaSection";
import { ContactSummarySection } from "@/components/sections/home/ContactSummarySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <ServicesOverviewSection />
      <FeaturedWorkSection />
      <WhyUlusSection />
      <ProcessSection />
      <ContactCtaSection />
      <ContactSummarySection />
    </>
  );
}
