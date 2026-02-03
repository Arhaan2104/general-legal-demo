import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { HeroScene } from "../three/HeroScene";
import { HERO_CONTENT } from "../../lib/constants";

const COMPANY_LOGOS = [
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
  "Figma",
  "Loom",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-24 rounded-full hidden lg:block" style={{ backgroundColor: 'var(--accent)' }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main content grid */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          {/* Text Content - 5 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)'
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                {HERO_CONTENT.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-hero mb-6">
              The AI native law firm
              <br />
              for the <span style={{ color: 'var(--accent)' }}>growth stage</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-body-lg mb-10 max-w-xl">
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button variant="primary" size="lg">
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                {HERO_CONTENT.secondaryCta}
              </Button>
            </motion.div>

            {/* Trust Section */}
            <motion.div variants={itemVariants}>
              <p className="text-label mb-6">{HERO_CONTENT.trustText}</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {COMPANY_LOGOS.map((company, i) => (
                  <motion.span
                    key={company}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="text-sm font-medium tracking-wide"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Scene - 7 columns */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] hidden lg:block">
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '1.5px solid var(--border-strong)' }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: 'var(--text-tertiary)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
