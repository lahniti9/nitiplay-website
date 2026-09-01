import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary",
            align === "center" && "w-full justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
