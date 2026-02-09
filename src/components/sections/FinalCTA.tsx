import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { FINAL_CTA_CONTENT } from "../../lib/constants";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function FinalCTA() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-tertiary)" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(196, 174, 134, 0.1)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(214, 198, 167, 0.08)" }}
        />
        <div
          className="absolute top-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(196, 174, 134, 0.06)" }}
        />
      </div>

      {/* Decorative border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border-strong), transparent)",
        }}
      />

      {/* Legal section mark watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[280px] md:text-[360px] font-serif opacity-[0.02] select-none pointer-events-none"
        style={{ color: 'var(--accent)' }}
      >
        §
      </div>

      <Container size="narrow" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-light mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-primary)" }}
          >
            {FINAL_CTA_CONTENT.headline}
            <br />
            {FINAL_CTA_CONTENT.subline}
          </motion.h2>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="whitespace-nowrap">
                {FINAL_CTA_CONTENT.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
