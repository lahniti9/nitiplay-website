import { Star } from "lucide-react";
import { type App } from "@/lib/data";
import { GlassCard } from "./GlassCard";
import { Badge } from "./Badge";
import { StoreBadges } from "./StoreBadges";
import { MarketingBanner } from "./MarketingBanner";

interface AppCardProps {
  app: App;
  featured?: boolean;
}

export function AppCard({ app, featured = false }: AppCardProps) {
  const isPublished = app.status === "published";

  return (
    <GlassCard
      as="article"
      className={`group flex h-full flex-col overflow-hidden p-0 ${featured ? "lg:flex-row" : ""}`}
    >
      <div
        className={`relative flex items-center justify-center p-4 sm:p-5 ${
          featured ? "lg:w-[42%] lg:p-6" : ""
        }`}
      >
        <MarketingBanner
          src={app.banner}
          alt={`${app.name} marketing banner`}
          variant="card"
          className={`w-full ${featured ? "max-w-[240px] lg:max-w-[300px]" : "max-w-[220px]"}`}
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant={app.category === "Game" ? "game" : "utility"}>
            {app.category}
          </Badge>
          {app.featured && isPublished && <Badge variant="accent">Featured</Badge>}
          {app.status === "coming-soon" && (
            <Badge variant="default">Coming Soon</Badge>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
          {app.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">{app.tagline}</p>
        <p className="mt-3 flex-1 text-muted leading-relaxed">{app.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          {isPublished && app.rating > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="font-semibold text-foreground">{app.rating}</span>
              {app.ratingCount && (
                <span className="text-muted">({app.ratingCount} reviews)</span>
              )}
            </span>
          )}
          {app.highlight && <span>{app.highlight}</span>}
        </div>

        {isPublished && (
          <div className="mt-6">
            <StoreBadges
              appStoreUrl={app.platforms.includes("ios") ? app.appStoreUrl : undefined}
              playStoreUrl={
                app.platforms.includes("android") ? app.playStoreUrl : undefined
              }
              size="sm"
            />
          </div>
        )}
      </div>
    </GlassCard>
  );
}
