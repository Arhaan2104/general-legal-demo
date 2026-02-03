import { motion } from "motion/react";
import { Bot, Brain, Zap } from "lucide-react";
import { Section } from "../ui/Section";
import { AI_ADVANTAGE_CONTENT } from "../../lib/constants";
import { fadeInUp, slideInLeft, slideInRight } from "../../lib/animations";

const pointIcons = [Bot, Brain, Zap];

export function AIAdvantage() {
  return (
    <Section id="about" background="secondary">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div variants={slideInLeft}>
          <motion.h2 variants={fadeInUp} className="text-section mb-6">
            {AI_ADVANTAGE_CONTENT.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            {AI_ADVANTAGE_CONTENT.description}
          </motion.p>

          <div className="space-y-6">
            {AI_ADVANTAGE_CONTENT.points.map((point, index) => {
              const Icon = pointIcons[index];
              return (
                <motion.div
                  key={point.title}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-medium mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {point.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          variants={slideInRight}
          className="relative hidden lg:block"
        >
          {/* Abstract workflow visualization */}
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-64 h-64 rounded-full"
                style={{ border: "1px solid var(--border)" }}
              />
              <div
                className="absolute w-48 h-48 rounded-full"
                style={{ border: "1px solid var(--border)" }}
              />
              <div
                className="absolute w-32 h-32 rounded-full"
                style={{ border: "1px solid var(--accent)", opacity: 0.3 }}
              />
            </div>

            {/* AI Node */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(196, 174, 134, 0.2)",
                  border: "1px solid var(--accent)",
                }}
              >
                <Bot className="w-8 h-8" style={{ color: "var(--accent)" }} />
              </div>
            </motion.div>

            {/* Human Node */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(196, 174, 134, 0.15)",
                  border: "1px solid var(--accent-light)",
                }}
              >
                <Brain
                  className="w-8 h-8"
                  style={{ color: "var(--accent-light)" }}
                />
              </div>
            </motion.div>

            {/* Output Node */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <Zap
                  className="w-10 h-10"
                  style={{ color: "var(--text-primary)" }}
                />
              </div>
            </motion.div>

            {/* Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
            >
              <motion.path
                d="M 130 130 Q 200 100 270 130"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M 130 130 Q 150 200 200 270"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.path
                d="M 270 130 Q 250 200 200 270"
                stroke="url(#gradient3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#c4ae86" stopOpacity="0" />
                  <stop offset="50%" stopColor="#c4ae86" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d6c6a7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c4ae86" stopOpacity="0" />
                  <stop offset="50%" stopColor="#c4ae86" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d6c6a7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient3"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d6c6a7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#c4ae86" stopOpacity="1" />
                  <stop offset="100%" stopColor="#c4ae86" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
