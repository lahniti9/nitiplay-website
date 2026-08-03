import type { Metadata } from "next";
import {
  Gamepad2,
  Wrench,
  Sparkles,
  Handshake,
  Check,
} from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "NitiPlay LLC offers game publishing, gaming utility development, design, and partnership services for iOS and Android.",
  "/services"
);

const iconMap = {
  Gamepad2,
  Wrench,
  Sparkles,
  Handshake,
} as const;

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="End-to-End Mobile Publishing"
            description="From ideation to App Store launch and beyond — NitiPlay provides the expertise to bring your mobile game or gaming utility to life."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <GlassCard key={service.id} className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl icon-surface">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check
                          className="h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Tell us about your project and we&apos;ll recommend the best path
              forward — whether that&apos;s full publishing, co-development, or
              technical consulting.
            </p>
            <Button href="/contact" className="mt-8">
              Schedule a Consultation
            </Button>
          </GlassCard>
        </div>
      </section>

      <CTA />
    </>
  );
}
