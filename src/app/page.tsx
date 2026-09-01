import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FeaturedApps } from "@/components/sections/FeaturedApps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn>
        <Stats />
      </FadeIn>
      <FadeIn delay={0.04}>
        <FeaturedApps />
      </FadeIn>
      <FadeIn delay={0.04}>
        <ServicesPreview />
      </FadeIn>
      <FadeIn delay={0.04}>
        <Testimonials />
      </FadeIn>
      <FadeIn delay={0.04}>
        <FAQSection />
      </FadeIn>
      <FadeIn delay={0.04}>
        <CTA />
      </FadeIn>
    </>
  );
}
