import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles = "btn";

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  };

  const sizes = {
    sm: "!px-4 !py-2.5 !text-sm min-h-[40px]",
    md: "min-h-[44px]",
    lg: "!px-6 !py-3.5 sm:!px-8 sm:!py-4 !text-base min-h-[48px]",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}
