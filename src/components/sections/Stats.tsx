import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-16 lg:py-20" aria-label="Company statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card grid grid-cols-2 gap-8 rounded-xl p-8 sm:grid-cols-4 sm:p-10">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
