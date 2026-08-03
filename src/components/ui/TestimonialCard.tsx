import { Star } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: TestimonialCardProps) {
  return (
    <GlassCard className="flex h-full flex-col">
      <div className="mb-4 flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-white/20"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="flex-1 text-lg leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="mt-6 border-t border-border pt-4">
        <cite className="not-italic">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted">{role}</p>
        </cite>
      </footer>
    </GlassCard>
  );
}
