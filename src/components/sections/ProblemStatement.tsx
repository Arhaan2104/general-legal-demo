import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { DollarSign, Clock, FileX } from "lucide-react";
import { Container } from "../ui/Container";
import { PROBLEM_CONTENT } from "../../lib/constants";

const iconMap = {
  DollarSign,
  Clock,
  FileX,
};

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CountUp target={value} />
        </motion.span>
      ) : (
        "0"
      )}
      %
    </span>
  );
}

function CountUp({ target }: { target: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.3 }}
      >
        {target}
      </motion.span>
    </motion.span>
  );
}

function ProblemCard({
  number,
  title,
  description,
  icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  const Icon = iconMap[icon as keyof typeof iconMap];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ x: 8 }}
      className="group relative"
    >
      <div
        className="relative p-8 rounded-2xl transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-primary)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Large faded number */}
        <span
          className="absolute top-4 right-6 font-display text-7xl font-extralight opacity-[0.08] select-none"
          style={{ color: "var(--accent)" }}
        >
          {number}
        </span>

        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: "var(--bg-tertiary)" }}
            >
              <Icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <span
                className="text-sm font-medium tracking-wider block mb-1"
                style={{ color: "var(--accent)" }}
              >
                {number}
              </span>
              <h3
                className="text-xl font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </h3>
            </div>
          </div>
          <p
            className="leading-relaxed pl-16"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        </div>

        {/* Hover border accent */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ border: "1px solid var(--accent)", opacity: 0 }}
        />
      </div>
    </motion.div>
  );
}

export function ProblemStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const underlineWidth = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-label mb-4"
              style={{ color: "var(--accent)" }}
            >
              THE PROBLEM
            </motion.p>

            {/* Headline with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-section relative inline-block">
                {PROBLEM_CONTENT.headline.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    {PROBLEM_CONTENT.headline.split(" ").slice(-2).join(" ")}
                  </span>
                  <motion.span
                    className="absolute bottom-2 left-0 h-[3px] rounded-full"
                    style={{
                      backgroundColor: "var(--accent)",
                      width: underlineWidth,
                    }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-12 max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Traditional legal services weren't built for modern businesses.
              Here's what you're probably dealing with:
            </motion.p>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-6xl md:text-7xl font-display font-extralight mb-2"
                style={{ color: "var(--accent)" }}
              >
                <AnimatedCounter value={73} />
              </div>
              <p
                className="text-sm max-w-[200px]"
                style={{ color: "var(--text-secondary)" }}
              >
                of startups cite legal costs as a major barrier to growth
              </p>
            </motion.div>
          </div>

          {/* Right Column - Problem Cards */}
          <div className="space-y-6">
            {PROBLEM_CONTENT.problems.map((problem, index) => (
              <ProblemCard
                key={problem.title}
                number={`0${index + 1}`}
                title={problem.title}
                description={problem.description}
                icon={problem.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
