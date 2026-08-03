import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppCard } from "@/components/ui/AppCard";
import { Button } from "@/components/ui/Button";
import { apps } from "@/lib/data";

export function FeaturedApps() {
  const featured = apps.filter((a) => a.featured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="featured-apps-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Apps"
          title="Featured Releases"
          description="Discover our latest games and gaming utilities — polished, performant, and loved by players worldwide."
        />

        <div className="mt-16 space-y-8">
          {featured.map((app, i) => (
            <AppCard key={app.id} app={app} featured={i === 0} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/our-apps" variant="secondary">
            View All Apps
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
