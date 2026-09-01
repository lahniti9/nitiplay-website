import Link from "next/link";
import {
  Gamepad2,
  Wrench,
  Sparkles,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";

const iconMap = {
  Gamepad2,
  Wrench,
  Sparkles,
  Handshake,
} as const;

export function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="How we can help"
          description="Design, build, and publish — or partner with us on your next mobile app."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Link key={service.id} href="/services" className="block h-full">
                <GlassCard className="group flex h-full flex-col">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl icon-surface transition-all group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </GlassCard>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            See all services
          </Button>
        </div>
      </div>
    </section>
  );
}
