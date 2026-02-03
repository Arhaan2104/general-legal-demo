import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { TiltCard } from "../ui/TiltCard";
import { TESTIMONIALS } from "../../lib/constants";
import { fadeInUp } from "../../lib/animations";

// Placeholder company logos
const TRUSTED_LOGOS = [
  "TechFlow",
  "ScaleUp",
  "CloudBase",
  "DataSync",
  "Launchpad Labs",
  "Acme Corp",
  "InnovateCo",
  "GrowthHQ",
];

export function Trust() {
  return (
    <Section>
      {/* Logo Mosaic */}
      <motion.div variants={fadeInUp} className="mb-20">
        <p
          className="text-center text-sm mb-8"
          style={{ color: "var(--text-tertiary)" }}
        >
          Trusted by innovative companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {TRUSTED_LOGOS.map((logo) => (
            <motion.span
              key={logo}
              whileHover={{ scale: 1.05, color: "var(--text-secondary)" }}
              className="font-medium text-lg tracking-wide cursor-default transition-colors"
              style={{ color: "var(--text-tertiary)", opacity: 0.6 }}
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Real feedback from companies who've simplified their legal process"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <motion.div key={testimonial.name} variants={fadeInUp}>
            <TiltCard className="h-full">
              <div
                className="p-8 h-full flex flex-col"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote
                    className="w-8 h-8"
                    style={{ color: "var(--accent)", opacity: 0.3 }}
                  />
                </div>

                {/* Quote */}
                <blockquote
                  className="leading-relaxed mb-8 flex-grow"
                  style={{ color: "var(--text-primary)" }}
                >
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(196, 174, 134, 0.3), rgba(214, 198, 167, 0.3))",
                    }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
