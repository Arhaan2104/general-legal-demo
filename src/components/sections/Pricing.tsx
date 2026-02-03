import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Button } from "../ui/Button";
import { PRICING_CONTENT } from "../../lib/constants";
import { fadeInUp, scaleIn } from "../../lib/animations";

// Animated counter component
function AnimatedCounter({
  target,
  duration = 2,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return <span ref={ref}>${count}</span>;
}

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader title={PRICING_CONTENT.headline} />

      <motion.div variants={fadeInUp} className="flex justify-center">
        <motion.div variants={scaleIn} className="relative w-full max-w-lg">
          {/* Glow effect */}
          <div
            className="absolute -inset-2 rounded-3xl blur-2xl opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(196, 174, 134, 0.3), transparent 70%)",
            }}
          />

          {/* Card */}
          <div
            className="relative rounded-3xl p-10 animate-pulse-glow"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--accent)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            {/* Price */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span
                  className="font-mono text-7xl md:text-8xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  <AnimatedCounter target={500} duration={1.5} />
                </span>
              </motion.div>
              <p
                className="text-lg mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {PRICING_CONTENT.priceSubtitle}
              </p>
            </div>

            {/* Divider */}
            <div
              className="h-px mb-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--border-strong), transparent)",
              }}
            />

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {PRICING_CONTENT.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(196, 174, 134, 0.2)" }}
                  >
                    <Check
                      className="w-3 h-3"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <span style={{ color: "var(--text-primary)" }}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="accent" size="lg" className="w-full">
              {PRICING_CONTENT.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Note */}
            <p
              className="text-center text-sm mt-6"
              style={{ color: "var(--text-tertiary)" }}
            >
              {PRICING_CONTENT.note}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
