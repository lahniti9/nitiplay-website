"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { apps, company } from "@/lib/data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const featuredApp =
    apps.find((app) => app.featured) ?? apps[0];

  return (
    <section
      className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-14"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-primary" />
              NitiPlay LLC · App Store & Google Play
            </p>

            <h1
              id="hero-heading"
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Games and apps
              <br />
              <span className="text-gradient">built to play</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              We design, build, and publish mobile games and useful apps.
              Download them below, or partner with us on your next release.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#apps" size="lg">
                See our apps
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact us
              </Button>
            </div>

            <div className="mt-8">
              <StoreBadges
                appStoreUrl={company.appStoreDeveloperUrl}
                playStoreUrl={featuredApp.playStoreUrl}
                size="sm"
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {apps.map((app) => (
                  <Link
                    key={app.id}
                    href="#apps"
                    title={app.name}
                    className="relative h-10 w-10 overflow-hidden rounded-xl border-2 border-[#050508] transition-transform hover:z-10 hover:scale-110"
                  >
                    <Image
                      src={app.icon}
                      alt={app.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted">{apps.length} titles live now</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border-light shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hero-devices.png"
                alt="NitiPlay games and apps shown on iPhone screens"
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
