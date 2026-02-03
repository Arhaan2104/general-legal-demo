import { motion } from "motion/react";
import { Container } from "../ui/Container";

const INVESTORS = [
  { name: "SUSA Ventures", logo: "SUSA" },
  { name: "Y Combinator", logo: "Y Combinator" },
  { name: "AME Cloud Ventures", logo: "AME CLOUD" },
  { name: "Box Group", logo: "Box Group" },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Investors() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border-strong), transparent)",
        }}
      />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-label mb-10"
            style={{ color: "var(--text-tertiary)" }}
          >
            BACKED BY GREAT INVESTORS
          </motion.p>

          {/* Investor logos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mb-10"
          >
            {INVESTORS.map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05 }}
                className="group relative px-6 py-3"
              >
                <span
                  className="text-lg md:text-xl font-medium tracking-wide transition-all duration-300 group-hover:opacity-100"
                  style={{
                    color: "var(--text-secondary)",
                    opacity: 0.6,
                  }}
                >
                  {investor.logo}
                </span>
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10"
                  style={{ backgroundColor: "rgba(196, 174, 134, 0.1)" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Y Combinator badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="w-6 h-6 rounded flex items-center justify-center font-bold text-sm"
              style={{
                backgroundColor: "#FF6600",
                color: "#FFFFFF",
              }}
            >
              Y
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Y Combinator W24 Batch
            </span>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border-strong), transparent)",
        }}
      />
    </section>
  );
}
