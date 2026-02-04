import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, FileText, Briefcase, Users } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, SectionHeader } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { THE_FIRM_CONTENT } from "../lib/constants";
import { fadeInUp, staggerContainer } from "../lib/animations";

const serviceIcons = {
  "Commercial Contract Review": FileText,
  "Contract Negotiation": Scale,
  "Business Law": Briefcase,
  "Outside Counsel Services": Users,
};

export function TheFirm() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-28"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-hero mb-6"
            >
              {THE_FIRM_CONTENT.hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {THE_FIRM_CONTENT.hero.subheadline}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Mission Section */}
      <Section background="secondary">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-section mb-6"
          >
            {THE_FIRM_CONTENT.mission.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {THE_FIRM_CONTENT.mission.description}
          </motion.p>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section background="primary">
        <SectionHeader
          title={THE_FIRM_CONTENT.services.headline}
          centered={true}
        />
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {THE_FIRM_CONTENT.services.items.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || FileText;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-5 sm:p-6 md:p-8 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  style={{ backgroundColor: "var(--accent-muted)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <h3
                  className="text-xl font-display font-medium mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
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
          <motion.h2
            variants={fadeInUp}
            className="text-section mb-4"
          >
            {THE_FIRM_CONTENT.cta.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {THE_FIRM_CONTENT.cta.description}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                {THE_FIRM_CONTENT.cta.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  );
}
