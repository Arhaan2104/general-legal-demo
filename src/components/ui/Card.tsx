import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className,
  hover = false,
  glow = false,
}: CardProps) {
  const baseStyles = {
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "1rem",
  };

  const glowStyles = glow
    ? {
        boxShadow: "var(--shadow-glow)",
        borderColor: "var(--accent)",
      }
    : {};

  if (hover) {
    return (
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: "var(--shadow-lg)",
          transition: { duration: 0.3 },
        }}
        className={cn("overflow-hidden transition-all duration-300", className)}
        style={{ ...baseStyles, ...glowStyles }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{ ...baseStyles, ...glowStyles }}
    >
      {children}
    </div>
  );
}
