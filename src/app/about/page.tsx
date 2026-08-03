import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Calendar, Award } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { company, founder } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Learn about NitiPlay LLC, founded by Ismail Lahniti — a mobile app developer from Morocco building premium iOS and Android games.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Crafting Mobile Experiences That Matter"
            description={company.description}
            align="left"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <GlassCard className="relative overflow-hidden p-0">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-square">
                <Image
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role} at ${company.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="font-display text-2xl font-bold text-white">
                    {founder.name}
                  </p>
                  <p className="mt-1 text-primary">{founder.role}</p>
                </div>
              </div>
            </GlassCard>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Meet the Founder
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{founder.bio}</p>

              <ul className="mt-8 space-y-4">
                {founder.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Award
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-muted" aria-hidden="true" />
                  {company.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Calendar className="h-4 w-4 text-muted" aria-hidden="true" />
                  Est. {company.founded}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Mail className="h-4 w-4 text-muted" aria-hidden="true" />
                  {company.email}
                </div>
              </div>

              <Button href="/contact" className="mt-8">
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mission"
            title="Our Philosophy"
            description="We believe mobile games and utilities should feel premium — fast, beautiful, and respectful of the player's time."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quality First",
                desc: "Every pixel, animation, and interaction is intentional. We ship products we're proud to put our name on.",
              },
              {
                title: "Player-Centric",
                desc: "Great apps solve real problems and create genuine joy. We build for players, not metrics alone.",
              },
              {
                title: "Global Reach",
                desc: "From Morocco to the world — our apps are designed for international audiences with localization in mind.",
              },
            ].map((item) => (
              <GlassCard key={item.title}>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
