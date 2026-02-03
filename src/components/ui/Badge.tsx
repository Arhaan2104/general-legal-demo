import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "glow";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium";

  const variants = {
    default: "bg-surface text-text-muted",
    outline: "bg-transparent border border-accent-green/50 text-accent-green",
    glow: "bg-accent-green/10 border border-accent-green/30 text-accent-green shadow-[0_0_20px_rgba(161,198,153,0.15)]",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
