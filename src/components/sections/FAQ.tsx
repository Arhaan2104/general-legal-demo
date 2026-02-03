import { motion } from "motion/react";
import { Section, SectionHeader } from "../ui/Section";
import { Accordion } from "../ui/Accordion";
import { FAQ_CONTENT } from "../../lib/constants";
import { fadeInUp } from "../../lib/animations";

export function FAQ() {
  const accordionItems = FAQ_CONTENT.faqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <Section id="faq" background="secondary" containerSize="narrow">
      <SectionHeader title={FAQ_CONTENT.headline} />

      <motion.div
        variants={fadeInUp}
        className="rounded-2xl p-8"
        style={{
          backgroundColor: "var(--bg-primary)",
          border: "1px solid var(--border)",
        }}
      >
        <Accordion items={accordionItems} />
      </motion.div>
    </Section>
  );
}
