import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Container } from "../ui/Container";
import { COMPARISON_CONTENT } from "../../lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function ComparisonCard({
  title,
  points,
  variant,
}: {
  title: string;
  points: string[];
  variant: "positive" | "negative";
}) {
  const isPositive = variant === "positive";

  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
    >
      <div
        className="h-full rounded-2xl p-8 md:p-10 transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-tertiary)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Hover glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: isPositive
              ? "0 0 40px rgba(34, 197, 94, 0.1)"
              : "0 0 40px rgba(239, 68, 68, 0.1)",
          }}
        />

        {/* Title */}
        <h3
          className="text-xl md:text-2xl font-medium mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>

        {/* Points */}
        <ul className="space-y-5">
          {points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-4"
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{
                  backgroundColor: isPositive
                    ? "rgba(34, 197, 94, 0.15)"
                    : "rgba(239, 68, 68, 0.15)",
                }}
              >
                {isPositive ? (
                  <Check
                    className="w-4 h-4"
                    style={{ color: "#22c55e" }}
                  />
                ) : (
                  <X
                    className="w-4 h-4"
                    style={{ color: "#ef4444" }}
                  />
                )}
              </span>
              <span
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Comparison() {
  return (
    <section
      id="comparison"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-section text-center mb-16"
          >
            {COMPARISON_CONTENT.headline}
          </motion.h2>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ComparisonCard
              title={COMPARISON_CONTENT.generalLegal.title}
              points={COMPARISON_CONTENT.generalLegal.points}
              variant="positive"
            />
            <ComparisonCard
              title={COMPARISON_CONTENT.traditional.title}
              points={COMPARISON_CONTENT.traditional.points}
              variant="negative"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
