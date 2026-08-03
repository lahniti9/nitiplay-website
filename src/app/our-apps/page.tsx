import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { company, apps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppCard } from "@/components/ui/AppCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = createPageMetadata(
  "Our Apps",
  "Download NitiPlay LLC mobile games and gaming utility apps on the App Store and Google Play.",
  "/our-apps"
);

export default function OurAppsPage() {
  const games = apps.filter((a) => a.category === "Game");
  const utilities = apps.filter((a) => a.category === "Utility");

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Apps"
            title="Download & Play"
            description="Real apps built by NitiPlay — live on the App Store and Google Play, with more in development."
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

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Games
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {games.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Utilities
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {utilities.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
