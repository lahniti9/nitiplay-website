import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
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
  ...props
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "glass-card rounded-xl p-6",
        hover && "hover:bg-[rgba(22,22,30,0.86)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
