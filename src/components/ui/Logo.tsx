import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

const sizes = {
  sm: { icon: 28, text: "text-lg", gap: "gap-2" },
  md: { icon: 36, text: "text-xl", gap: "gap-2.5" },
  lg: { icon: 48, text: "text-2xl", gap: "gap-3" },
};

function LogoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.04]"
    >
      {/* App icon base */}
      <rect width="48" height="48" rx="12" fill="#3B82F6" />
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="11"
        stroke="white"
        strokeOpacity="0.12"
        fill="none"
      />

      {/* N stem — "Niti" */}
      <rect x="14" y="15" width="3.5" height="18" rx="1.75" fill="white" fillOpacity="0.95" />

      {/* Play triangle — "Play" */}
      <path
        d="M22.5 16.5V31.5L34.5 24Z"
        fill="white"
        fillOpacity="0.95"
      />
    </svg>
  );
}

export function Logo({
  className,
  showText = true,
  size = "md",
  variant = "full",
}: LogoProps) {
  const { icon, text, gap } = sizes[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", gap, className)}
      aria-label="NitiPlay LLC — Home"
    >
      <LogoMark size={icon} />
      {showText && variant === "full" && (
        <span
          className={cn(
            "font-display font-semibold tracking-tight text-foreground",
            text
          )}
        >
          Niti
          <span className="text-primary">Play</span>
        </span>
      )}
    </Link>
  );
}

export function LogoIcon({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <div className={cn("group inline-flex", className)}>
      <LogoMark size={size} />
    </div>
  );
}
