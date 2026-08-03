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
    <section className="py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What We Do"
          description="From concept to App Store — we handle design, development, publishing, and growth for mobile games and gaming utilities."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <GlassCard key={service.id} className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl icon-surface">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
