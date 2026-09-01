import Image from "next/image";
import { Star } from "lucide-react";
import { isNewRelease, type App } from "@/lib/data";
import { GlassCard } from "./GlassCard";
import { Badge } from "./Badge";
import { StoreBadges } from "./StoreBadges";

export function HomeAppCard({ app }: { app: App }) {
  const showRating = app.status === "published" && app.rating > 0 && (app.ratingCount ?? 0) > 0;
  const platforms = [
    app.platforms.includes("ios") ? "iOS" : null,
    app.platforms.includes("android") ? "Android" : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <GlassCard as="article" className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={app.cover}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={app.category === "Game" ? "game" : "utility"}>
            {app.category}
          </Badge>
          {isNewRelease(app) && <Badge variant="new">New</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border-light shadow-md">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {app.name}
            </h3>
            <p className="truncate text-sm text-muted">{app.tagline}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          {showRating && (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="font-medium text-foreground">{app.rating.toFixed(1)}</span>
            </span>
          )}
          <span>{platforms}</span>
        </div>

        {app.status === "published" && (
          <div className="mt-4">
            <StoreBadges
              appStoreUrl={app.appStoreUrl}
              playStoreUrl={app.playStoreUrl}
              size="sm"
            />
          </div>
        )}
      </div>
    </GlassCard>
  );
}
