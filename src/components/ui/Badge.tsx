import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "game" | "utility" | "accent";
  className?: string;
}

const variants = {
  default: "bg-surface-hover text-muted border-border",
  game: "bg-primary/10 text-primary border-primary/20",
  utility: "bg-surface-hover text-foreground border-border-light",
  accent: "bg-primary/10 text-primary border-primary/20",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
