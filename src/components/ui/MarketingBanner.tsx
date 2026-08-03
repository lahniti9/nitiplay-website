import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarketingBannerProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Shorter ratios for card layouts; poster keeps the original tall format */
  variant?: "card" | "poster";
}

export function MarketingBanner({
  src,
  alt,
  className,
  priority = false,
  variant = "card",
}: MarketingBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border-light shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full",
          variant === "poster" ? "aspect-[9/16]" : "aspect-[4/5]"
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 400px"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
      </div>
    </div>
  );
}
