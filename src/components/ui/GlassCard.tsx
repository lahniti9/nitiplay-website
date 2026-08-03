import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export function GlassCard({
  children,
  className,
  hover = true,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "glass-card rounded-xl p-6",
        hover &&
          "hover:bg-[rgba(24,24,28,0.8)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </Component>
  );
}
