"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount(Math.min(value, increment * step));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, value]);

  const display =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1.5 text-xs font-medium text-muted sm:text-sm">{label}</p>
    </div>
  );
}
