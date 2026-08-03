"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, Smartphone, Globe } from "lucide-react";
import { apps, company, stats } from "@/lib/data";
import { LogoIcon } from "@/components/ui/Logo";

const activities = [
  {
    icon: Gamepad2,
    title: "Mobile Games",
    description: "Puzzle & arcade titles on iOS & Android",
  },
  {
    icon: Smartphone,
    title: "Gaming Utilities",
    description: "Tools and companion apps for players",
  },
  {
    icon: Globe,
    title: "Global Publishing",
    description: "Shipped on App Store & Google Play",
  },
];

export function HeroShowcase() {
  const portfolioApps = apps.slice(0, 4);

  return (
    <div className="relative w-full max-w-[400px] lg:max-w-[420px]">
      <div className="relative overflow-hidden rounded-2xl border border-border-light bg-[#0c0c0e]/90 p-5 shadow-[0_24px_48px_rgba(0,0,0,0.4)] sm:p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-3">
            <LogoIcon size={44} />
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">
                {company.name}
              </p>
              <p className="text-sm text-muted">{company.tagline}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            We design, build, and publish mobile games and gaming utility apps
            from Morocco — polished experiences for a worldwide audience.
          </p>

          <ul className="mt-5 space-y-3">
            {activities.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{title}</span>
                  <span className="block text-xs text-muted">{description}</span>
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex -space-x-2">
              {portfolioApps.map((app) => (
                <Link
                  key={app.id}
                  href="/our-apps"
                  className="relative h-9 w-9 overflow-hidden rounded-lg border-2 border-[#0c0c0e] transition-transform hover:z-10 hover:scale-110"
                  title={app.name}
                >
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </Link>
              ))}
            </div>
            <Link
              href="/our-apps"
              className="text-xs font-medium text-primary transition-colors hover:text-primary-hover"
            >
              View portfolio →
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-white/[0.03] px-2 py-2 text-center"
              >
                <p className="font-display text-sm font-semibold text-foreground">
                  {stat.decimals
                    ? stat.value.toFixed(stat.decimals)
                    : stat.value}
                  {stat.suffix}
                </p>
                <p className="text-[10px] leading-tight text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
