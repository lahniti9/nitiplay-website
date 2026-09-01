"use client";

import { useEffect } from "react";

export function PageSpotlight() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--glow-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--glow-y", `${event.clientY}px`);

      const card = (event.target as HTMLElement | null)?.closest(".glass-card");
      if (!(card instanceof HTMLElement)) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="page-spotlight pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
