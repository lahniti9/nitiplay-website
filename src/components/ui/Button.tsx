"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-shine bg-gradient-to-r from-[#3b82f6] via-[#4f8ef7] to-[#6366f1] text-white shadow-[0_8px_28px_rgba(59,130,246,0.28)] hover:shadow-[0_10px_36px_rgba(59,130,246,0.42)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "glass-card text-foreground hover:bg-[rgba(28,28,38,0.92)] hover:border-border-light",
  ghost: "text-muted hover:text-foreground hover:bg-[rgba(255,255,255,0.04)]",
  outline:
    "border border-border text-foreground hover:border-primary/45 hover:bg-[rgba(59,130,246,0.08)] active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  const content =
    href && external ? (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : href ? (
      <Link href={href} className={classes}>
        {children}
      </Link>
    ) : (
      <button className={classes} {...props}>
        {children}
      </button>
    );

  if (variant === "primary") {
    return (
      <Magnetic
        strength={size === "lg" ? 0.18 : 0.14}
        className={className?.includes("w-full") ? "flex w-full" : "inline-flex"}
      >
        {content}
      </Magnetic>
    );
  }

  return content;
}
