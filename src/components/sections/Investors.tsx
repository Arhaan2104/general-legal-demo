import { motion } from "motion/react";
import { Container } from "../ui/Container";

// Y Combinator logo - official orange Y mark
const YCombinatorLogo = () => (
  <svg viewBox="0 0 200 50" className="h-8 md:h-10 w-auto">
    <rect x="0" y="5" width="40" height="40" rx="4" fill="#FF6600" />
    <text
      x="20"
      y="35"
      textAnchor="middle"
      fill="white"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fontSize="28"
    >
      Y
    </text>
    <text
      x="52"
      y="32"
      fill="currentColor"
      fontFamily="Arial, sans-serif"
      fontWeight="500"
      fontSize="18"
    >
      Combinator
    </text>
  </svg>
);

// SUSA Ventures logo
const SUSALogo = () => (
  <svg viewBox="0 0 140 40" className="h-7 md:h-9 w-auto">
    <text
      x="0"
      y="28"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="24"
      letterSpacing="0.15em"
    >
      SUSA
    </text>
    <text
      x="0"
      y="38"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="400"
      fontSize="8"
      letterSpacing="0.2em"
      opacity="0.7"
    >
      VENTURES
    </text>
  </svg>
);

// AME Cloud Ventures logo
const AMECloudLogo = () => (
  <svg viewBox="0 0 180 45" className="h-8 md:h-10 w-auto">
    <defs>
      <linearGradient id="ameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A90D9" />
        <stop offset="100%" stopColor="#67B8DE" />
      </linearGradient>
    </defs>
    {/* Cloud icon */}
    <path
      d="M35 28c0 3.3-2.7 6-6 6H12c-4.4 0-8-3.6-8-8 0-4 3-7.4 7-7.9 0-.4-.1-.7-.1-1.1 0-5 4-9 9-9 4.3 0 7.9 3 8.8 7 .4-.1.8-.1 1.3-.1 3.9 0 7 3.1 7 7 0 1.1-.3 2.1-.7 3 .5.9.7 1.9.7 3.1z"
      fill="url(#ameGradient)"
    />
    <text
      x="45"
      y="22"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="18"
      letterSpacing="0.05em"
    >
      AME
    </text>
    <text
      x="45"
      y="36"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="400"
      fontSize="10"
      letterSpacing="0.15em"
      opacity="0.7"
    >
      CLOUD VENTURES
    </text>
  </svg>
);

// Box Group logo
const BoxGroupLogo = () => (
  <svg viewBox="0 0 130 45" className="h-8 md:h-10 w-auto">
    {/* Stylized box icon */}
    <rect
      x="2"
      y="10"
      width="24"
      height="24"
      rx="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <line
      x1="2"
      y1="22"
      x2="26"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="14"
      y1="10"
      x2="14"
      y2="34"
      stroke="currentColor"
      strokeWidth="2"
    />
    <text
      x="35"
      y="20"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="600"
      fontSize="14"
    >
      BOX
    </text>
    <text
      x="35"
      y="34"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="600"
      fontSize="14"
    >
      GROUP
    </text>
  </svg>
);

const INVESTORS = [
  { name: "Y Combinator", Logo: YCombinatorLogo },
  { name: "SUSA Ventures", Logo: SUSALogo },
  { name: "AME Cloud Ventures", Logo: AMECloudLogo },
  { name: "Box Group", Logo: BoxGroupLogo },
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
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 md:gap-y-8"
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
                className="group relative px-4 py-3 transition-all duration-300"
                style={{
                  color: "var(--text-secondary)",
                  opacity: 0.7,
                }}
              >
                <div className="transition-opacity duration-300 group-hover:opacity-100">
                  <investor.Logo />
                </div>
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10"
                  style={{ backgroundColor: "rgba(196, 174, 134, 0.1)" }}
                />
              </motion.div>
            ))}
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
