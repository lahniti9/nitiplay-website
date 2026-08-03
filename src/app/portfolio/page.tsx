import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = createPageMetadata(
  "Portfolio",
  "Explore NitiPlay LLC's portfolio of premium mobile games and gaming utility apps for iOS and Android.",
  "/portfolio"
);

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Published Work"
            description="A curated showcase of mobile games and gaming utilities published by NitiPlay LLC — each built with premium design and engineering."
          />
          <PortfolioGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
