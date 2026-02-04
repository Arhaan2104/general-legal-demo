import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Heart, TrendingUp, Mail } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, SectionHeader } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { CAREERS_CONTENT } from "../lib/constants";
import { fadeInUp, staggerContainer } from "../lib/animations";

const valueIcons = [Lightbulb, Heart, TrendingUp];

export function Careers() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeInUp} className="text-hero mb-6">
              {CAREERS_CONTENT.hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {CAREERS_CONTENT.hero.subheadline}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Culture Section */}
      <Section background="secondary">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-section mb-6">
            {CAREERS_CONTENT.culture.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {CAREERS_CONTENT.culture.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {CAREERS_CONTENT.culture.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-2xl text-center"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: "var(--accent-muted)" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="text-xl font-display font-medium mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value.title}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Open Positions Section */}
      <Section background="primary">
        <SectionHeader
          title={CAREERS_CONTENT.openings.headline}
          centered={true}
        />
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl text-center"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
              style={{ backgroundColor: "var(--accent-muted)" }}
            >
              <Mail className="w-8 h-8" style={{ color: "var(--accent)" }} />
            </div>
            <p
              className="text-lg mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {CAREERS_CONTENT.openings.empty}
            </p>
            <a
              href="mailto:careers@general.legal"
              className="inline-flex items-center font-medium transition-colors"
              style={{ color: "var(--accent)" }}
            >
              {CAREERS_CONTENT.openings.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="secondary">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-section mb-4">
            {CAREERS_CONTENT.cta.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {CAREERS_CONTENT.cta.description}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                {CAREERS_CONTENT.cta.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  );
}
