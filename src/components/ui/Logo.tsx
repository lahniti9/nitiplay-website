import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  priority?: boolean;
}

const sizes = {
  sm: { icon: 28, text: "text-lg", gap: "gap-2" },
  md: { icon: 36, text: "text-xl", gap: "gap-2.5" },
  lg: { icon: 48, text: "text-2xl", gap: "gap-3" },
};

function LogoMark({ size, priority = false }: { size: number; priority?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      priority={priority}
      className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.04]"
    />
  );
}

export function Logo({
  className,
  showText = true,
  size = "md",
  variant = "full",
  priority = false,
}: LogoProps) {
  const { icon, text, gap } = sizes[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", gap, className)}
      aria-label="NitiPlay LLC — Home"
    >
      <LogoMark size={icon} priority={priority} />
      {showText && variant === "full" && (
        <span
          className={cn(
            "font-display font-semibold tracking-tight text-foreground",
            text
          )}
        >
          Niti
          <span className="text-gradient">Play</span>
        </span>
      )}
    </Link>
  );
}

export function LogoIcon({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={cn("group inline-flex", className)}>
      <LogoMark size={size} />
    </div>
  );
}
