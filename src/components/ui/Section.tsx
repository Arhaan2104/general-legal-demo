import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { Container } from "./Container";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide";
  animate?: boolean;
  background?: "primary" | "secondary" | "tertiary";
}

export function Section({
  children,
  className,
  id,
  containerSize = "default",
  animate = true,
  background = "primary",
}: SectionProps) {
  const content = (
    <Container size={containerSize}>
      {animate ? (
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </Container>
  );

  return (
    <section
      id={id}
      className={cn("section relative", className)}
      style={{
        backgroundColor:
          background === "primary"
            ? "var(--bg-primary)"
            : background === "secondary"
            ? "var(--bg-secondary)"
            : "var(--bg-tertiary)",
      }}
    >
      {content}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn("mb-16", centered && "text-center", className)}
    >
      <h2 className="text-section mb-4">{title}</h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
