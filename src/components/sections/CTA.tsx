import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-xl px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
          <div className="relative">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            >
              Ready to Build Something{" "}
              <span className="text-primary">Extraordinary?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Whether you&apos;re launching a game, building a gaming utility, or
              looking for a publishing partner — let&apos;s create something
              players will love.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg">
                Start a Conversation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="/our-apps" variant="secondary" size="lg">
                Browse Our Apps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
