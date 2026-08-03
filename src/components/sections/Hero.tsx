"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { apps, company } from "@/lib/data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const featuredApp =
    apps.find((a) => a.id === "arrow-maze-rush") ??
    apps.find((a) => a.featured) ??
    apps[0];

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-muted">iOS & Android Publishing</span>
            </motion.div>

            <h1
              id="hero-heading"
              className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Games & Apps
              <br />
              <span className="text-primary">Built to Play</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              NitiPlay LLC publishes high-quality mobile games and gaming utility
              apps — crafted with Apple-level polish for players who expect the
              best.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/our-apps" size="lg">
                Explore Our Apps
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Partner With Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mt-10"
            >
              <StoreBadges
                appStoreUrl={company.appStoreDeveloperUrl}
                playStoreUrl={featuredApp.playStoreUrl}
                size="sm"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease }}
            className="relative flex justify-center lg:justify-end"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
