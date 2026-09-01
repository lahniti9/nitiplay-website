import Image from "next/image";
import { Star } from "lucide-react";
import { isNewRelease, type App, type AppCategory } from "@/lib/data";
import { GlassCard } from "./GlassCard";
import { Badge } from "./Badge";
import { StoreBadges } from "./StoreBadges";
import { PhoneMockup } from "./PhoneMockup";

interface AppCardProps {
  app: App;
  featured?: boolean;
  compact?: boolean;
}

const categoryVariant: Record<AppCategory, "game" | "utility"> = {
  Game: "game",
  Utility: "utility",
};

function AppMeta({ app }: { app: App }) {
  const isPublished = app.status === "published";
  const showRating = isPublished && app.rating > 0 && (app.ratingCount ?? 0) > 0;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
      {showRating && (
        <span className="inline-flex items-center gap-1">
          <Star
            className="h-4 w-4 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
          <span className="font-semibold text-foreground">
            {app.rating.toFixed(1)}
          </span>
          {app.ratingCount && (
            <span className="text-muted">({app.ratingCount})</span>
          )}
        </span>
      )}
      {app.highlight && <span>{app.highlight}</span>}
    </div>
  );
}

function AppBadges({ app }: { app: App }) {
  const isPublished = app.status === "published";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant={categoryVariant[app.category]}>{app.category}</Badge>
      {app.featured && isPublished && <Badge variant="accent">Featured</Badge>}
      {isNewRelease(app) && isPublished && <Badge variant="new">New</Badge>}
      {app.status === "coming-soon" && (
        <Badge variant="default">Coming Soon</Badge>
      )}
    </div>
  );
}

function FeaturedAppCard({ app }: { app: App }) {
  const isPublished = app.status === "published";

  return (
    <GlassCard
      as="article"
      className="group overflow-hidden p-0"
      style={{ "--app-accent": app.accent } as React.CSSProperties}
    >
      <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-10 lg:p-10">
        <div className="relative mx-auto w-full max-w-[220px] lg:max-w-[260px]">
          <div
            className="pointer-events-none absolute -inset-8 rounded-[3rem] opacity-40 blur-3xl"
            style={{ background: "var(--app-accent)" }}
            aria-hidden="true"
          />
          {app.screenshot ? (
            <PhoneMockup
              appName={app.name}
              icon={app.icon}
              screenshot={app.screenshot}
              showBadge={false}
              priority
            />
          ) : (
            <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-[2rem] border border-border-light shadow-2xl">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col">
          <AppBadges app={app} />
          <div className="mt-4 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-border-light shadow-lg">
              <Image
                src={app.icon}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {app.name}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {app.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            {app.description}
          </p>
          <div className="mt-5">
            <AppMeta app={app} />
          </div>
          {isPublished && (
            <div className="mt-6">
              <StoreBadges
                appStoreUrl={
                  app.platforms.includes("ios") ? app.appStoreUrl : undefined
                }
                playStoreUrl={
                  app.platforms.includes("android")
                    ? app.playStoreUrl
                    : undefined
                }
                size="sm"
              />
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function CatalogAppCard({ app, compact = false }: { app: App; compact?: boolean }) {
  const isPublished = app.status === "published";
  const platforms = [
    app.platforms.includes("ios") ? "iOS" : null,
    app.platforms.includes("android") ? "Android" : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <GlassCard
      as="article"
      className={`group flex h-full flex-col ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6"}`}
      style={{ "--app-accent": app.accent } as React.CSSProperties}
    >
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.1rem] border border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(59,130,246,0.2)]">
          <Image
            src={app.icon}
            alt={`${app.name} icon`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <AppBadges app={app} />
          <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-foreground">
            {app.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-primary">{app.tagline}</p>
        </div>
      </div>

      <p
        className={`mt-3 flex-1 text-sm leading-relaxed text-muted ${compact ? "line-clamp-2" : ""}`}
      >
        {app.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
        <AppMeta app={app} />
        {platforms && <span className="text-sm text-muted">{platforms}</span>}
      </div>

      {isPublished && (
        <div className="mt-4">
          <StoreBadges
            appStoreUrl={
              app.platforms.includes("ios") ? app.appStoreUrl : undefined
            }
            playStoreUrl={
              app.platforms.includes("android") ? app.playStoreUrl : undefined
            }
            size="sm"
          />
        </div>
      )}
    </GlassCard>
  );
}

export function AppCard({
  app,
  featured = false,
  compact = false,
}: AppCardProps) {
  return featured ? (
    <FeaturedAppCard app={app} />
  ) : (
    <CatalogAppCard app={app} compact={compact} />
  );
}
