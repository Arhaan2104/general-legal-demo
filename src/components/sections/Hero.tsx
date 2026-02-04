import { motion } from "motion/react";
import { EmailCapture } from "../ui/EmailCapture";
import { HeroScene } from "../three/HeroScene";
import { HERO_CONTENT } from "../../lib/constants";

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
      <div className="container relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          {/* Text Content - 5 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-hero mb-6">
              <span className="whitespace-nowrap">The AI Native</span>
              <br />
              <span className="whitespace-nowrap">Law Firm</span>
              <br />
              <span className="whitespace-nowrap">for the</span>
              <br />
              <span className="whitespace-nowrap" style={{ color: 'var(--accent)' }}>Growth Stage</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-body-lg mb-10 max-w-xl">
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* Email Capture CTA */}
            <motion.div variants={itemVariants}>
              <EmailCapture
                placeholder="Enter your email"
                buttonText="Get Started"
              />
            </motion.div>
          </motion.div>

          {/* 3D Scene - 7 columns */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] hidden lg:block">
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile for more content space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
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
