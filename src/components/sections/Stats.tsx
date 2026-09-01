import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="pb-6 lg:pb-8" aria-label="Company statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-y divide-border rounded-2xl border border-border/80 bg-white/[0.02] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-7 sm:px-6">
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
