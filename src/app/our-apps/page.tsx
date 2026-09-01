import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { company, apps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppCard } from "@/components/ui/AppCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = createPageMetadata(
  "Our Apps",
  "Download every NitiPlay LLC app — games and utilities on the App Store and Google Play.",
  "/our-apps"
);

const catalogSections = [
  { title: "Games", category: "Game" as const },
  { title: "Utilities", category: "Utility" as const },
];

export default function OurAppsPage() {
  const sections = catalogSections
    .map((section) => ({
      ...section,
      items: apps.filter((app) => app.category === section.category),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Apps"
            title="Download & Play"
            description="Every NitiPlay title — live on the App Store, with selected games and tools also on Google Play."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={company.appStoreDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-light"
            >
              View on App Store →
            </a>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.title}
          className={index === sections.length - 1 ? "pb-20" : "pb-12"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              {section.title}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {section.items.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  );
}
