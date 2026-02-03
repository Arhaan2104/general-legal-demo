import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Upload, Bot, FileCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { HOW_IT_WORKS_CONTENT } from "../../lib/constants";

const stepIcons = [Upload, Bot, FileCheck];

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: { number: string; title: string; description: string };
  index: number;
  isLast: boolean;
}) {
  const Icon = stepIcons[index];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline connector (not on last item) */}
      {!isLast && (
        <div
          className="absolute left-1/2 top-20 bottom-0 w-px -translate-x-1/2 hidden lg:block"
          style={{ backgroundColor: "var(--border)" }}
        />
      )}

      {/* Step content */}
      <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-16 items-center">
        {/* Left content (shows on even, empty on odd for desktop) */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`${isEven ? "lg:text-right" : "lg:order-3"}`}
        >
          <div className={`${isEven ? "lg:ml-auto" : ""} max-w-md`}>
            {/* Step number */}
            <span
              className="text-sm font-medium tracking-wider mb-2 block"
              style={{ color: "var(--accent)" }}
            >
              STEP {step.number}
            </span>

            {/* Title */}
            <h3
              className="text-2xl md:text-3xl font-display font-light mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {step.description}
            </p>
          </div>
        </motion.div>

        {/* Center - Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 hidden lg:flex items-center justify-center"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--bg-primary)",
              border: "2px solid var(--accent)",
              boxShadow: "0 0 30px rgba(196, 174, 134, 0.3)",
            }}
          >
            <Icon className="w-7 h-7" style={{ color: "var(--accent)" }} />
          </div>
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              backgroundColor: "rgba(196, 174, 134, 0.1)",
              filter: "blur(10px)",
            }}
          />
        </motion.div>

        {/* Right content (shows on odd, icon box on even for desktop) */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`${!isEven ? "lg:text-left" : "lg:order-3"}`}
        >
          <div
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Large faded number background */}
            <span
              className="absolute -top-8 -right-4 font-display text-[150px] font-extralight opacity-[0.03] select-none"
              style={{ color: "var(--text-primary)" }}
            >
              {step.number}
            </span>

            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10 lg:hidden mb-6"
              style={{ backgroundColor: "rgba(196, 174, 134, 0.15)" }}
            >
              <Icon className="w-10 h-10" style={{ color: "var(--accent)" }} />
            </div>

            {/* Visual placeholder area */}
            <div
              className="hidden lg:flex aspect-video rounded-xl items-center justify-center relative z-10"
              style={{ backgroundColor: "var(--bg-tertiary)" }}
            >
              <div className="text-center p-8">
                <Icon
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "var(--accent)", opacity: 0.4 }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Step {step.number} Illustration
                </span>
              </div>
            </div>

            {/* Mobile content */}
            <div className="lg:hidden">
              <h3
                className="text-xl font-medium mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {step.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-section">{HOW_IT_WORKS_CONTENT.headline}</h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Animated progress line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block overflow-hidden">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background:
                  "linear-gradient(to bottom, var(--accent), var(--accent) 80%, transparent)",
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                index={index}
                isLast={index === HOW_IT_WORKS_CONTENT.steps.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
