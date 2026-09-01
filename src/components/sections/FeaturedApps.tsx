"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HomeAppCard } from "@/components/ui/HomeAppCard";
import { Button } from "@/components/ui/Button";
import { apps, filterAppsByCategory, portfolioCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FeaturedApps() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filterAppsByCategory(apps, filter);

  return (
    <section
      id="apps"
      className="scroll-mt-28 py-16 lg:py-24"
      aria-labelledby="featured-apps-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="featured-apps-heading"
          eyebrow="Our apps"
          title="Everything we shipped"
          description="Official App Store and Google Play titles from NitiPlay — tap a store badge to download."
        />

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter apps by category"
        >
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === category
                  ? "filter-active"
                  : "glass-card text-muted hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((app) => (
            <HomeAppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/our-apps" variant="secondary">
            View full store pages
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
