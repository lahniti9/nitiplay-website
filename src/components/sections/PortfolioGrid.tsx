"use client";

import { useState } from "react";
import { AppCard } from "@/components/ui/AppCard";
import { apps, portfolioCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? apps
      : filter === "Games"
        ? apps.filter((a) => a.category === "Game")
        : apps.filter((a) => a.category === "Utility");

  return (
    <>
      <div
        className="mt-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
                  "rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]",
                  filter === cat
                    ? "filter-active scale-[1.02]"
                    : "glass-card text-muted hover:text-foreground hover:border-border-light"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {filtered.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </>
  );
}
