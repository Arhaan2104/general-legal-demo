import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { PRICING_CONTENT } from "../../lib/constants";

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
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Pricing() {
  // Split services: first is featured, rest are secondary
  const featuredService = PRICING_CONTENT.services[0];
  const secondaryServices = PRICING_CONTENT.services.slice(1);

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-section mb-6">{PRICING_CONTENT.headline}</h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              {PRICING_CONTENT.subheadline}
            </p>
          </motion.div>

          {/* Featured Service Card */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative w-full max-w-2xl">
              {/* Glow effect */}
              <div
                className="absolute -inset-3 rounded-2xl blur-2xl opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(196, 174, 134, 0.4), transparent 70%)",
                }}
              />

              {/* Featured Card */}
              <div
                className="relative rounded-2xl p-6 sm:p-8 md:p-10 text-center"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--accent)",
                  boxShadow: "var(--shadow-xl)",
                }}
              >
                {/* Service Name */}
                <h3
                  className="text-sm font-medium uppercase tracking-widest mb-6"
                  style={{ color: "var(--accent)" }}
                >
                  {featuredService.service}
                </h3>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <span
                    className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {featuredService.price}
                  </span>
                  <span
                    className="text-lg ml-2"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {featuredService.unit}
                  </span>
                </div>

                {/* Scope Description */}
                <p
                  className="text-base md:text-lg max-w-md mx-auto mb-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {featuredService.scope}
                </p>

                {/* CTA Button */}
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Secondary Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto"
          >
            {secondaryServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Service Name */}
                <h4
                  className="text-xs font-medium uppercase tracking-wider mb-4"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {service.service}
                </h4>

                {/* Price */}
                <div className="mb-2 sm:mb-3">
                  <span
                    className="font-mono text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {service.price}
                  </span>
                  <span
                    className="text-sm ml-1"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {service.unit}
                  </span>
                </div>

                {/* Scope */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.scope}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.p
            variants={itemVariants}
            className="text-center mt-12"
            style={{ color: "var(--text-secondary)" }}
          >
            {PRICING_CONTENT.cta}{" "}
            <Link
              to="/contact"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--text-primary)]"
              style={{ color: "var(--accent)" }}
            >
              {PRICING_CONTENT.ctaLink}
            </Link>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
