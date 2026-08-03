import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  appName: string;
  icon: string;
  screenshot: string;
  className?: string;
  showBadge?: boolean;
}

export function PhoneMockup({
  appName,
  icon,
  screenshot,
  className,
  showBadge = true,
}: PhoneMockupProps) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-[280px]", className)}
      aria-label={`${appName} app preview`}
    >
      {/* Ambient glow behind device */}
      <div className="absolute -inset-6 rounded-[3rem] bg-primary/20 blur-3xl" />

      {/* Device frame */}
      <div className="phone-frame relative overflow-hidden rounded-[2.25rem] border border-border-light bg-[#0a0a0a] shadow-[0_32px_64px_rgba(0,0,0,0.55)]">
        {/* Status bar area */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-11 items-end justify-center pb-1">
          <div className="h-[22px] w-[90px] rounded-full bg-black/80" />
        </div>

        {/* App screenshot */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden">
          <Image
            src={screenshot}
            alt={`${appName} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 280px, 320px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        {/* Home indicator */}
        <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center">
          <div className="h-1 w-28 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Optional floating badge — hidden on hero */}
      {showBadge && (
        <div className="absolute -bottom-4 -right-2 z-30 flex items-center gap-2.5 rounded-2xl glass-card px-3 py-2 shadow-xl">
          <Image
            src={icon}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="pr-1 font-display text-sm font-semibold text-foreground">
            {appName}
          </span>
        </div>
      )}
    </div>
  );
}
