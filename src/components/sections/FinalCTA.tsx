import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { FINAL_CTA_CONTENT } from "../../lib/constants";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function FinalCTA() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-tertiary)" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(196, 174, 134, 0.1)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(214, 198, 167, 0.08)" }}
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

      <Container size="narrow" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-section mb-6">
            {FINAL_CTA_CONTENT.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl mb-10 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {FINAL_CTA_CONTENT.subheadline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="accent" size="lg">
              {FINAL_CTA_CONTENT.primaryCta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              {FINAL_CTA_CONTENT.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
