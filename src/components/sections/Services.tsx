import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FileCode,
  ShieldCheck,
  Users,
  Truck,
  Handshake,
  ScrollText,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SERVICES_CONTENT } from "../../lib/constants";

const serviceIcons = [
  FileCode,
  ShieldCheck,
  Users,
  Truck,
  Handshake,
  ScrollText,
];

const gridConfig = [
  { className: "md:col-span-2 md:row-span-2", featured: true },
  { className: "md:col-span-1 md:row-span-1", featured: false },
  { className: "md:col-span-1 md:row-span-1", featured: false },
  { className: "md:col-span-1 md:row-span-1", featured: false },
  { className: "md:col-span-1 md:row-span-1", featured: false },
  { className: "md:col-span-2 md:row-span-1", featured: false },
];

function BentoCard({
  service,
  icon: Icon,
  config,
  index,
}: {
  service: { title: string; description: string };
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  config: { className: string; featured: boolean };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative ${config.className}`}
    >
      <div
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
          config.featured ? "p-10" : "p-6"
        }`}
        style={{
          backgroundColor: "var(--bg-primary)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Shine effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(196, 174, 134, 0.08) 40%, rgba(196, 174, 134, 0.15) 50%, rgba(196, 174, 134, 0.08) 60%, transparent 80%)",
            transform: "translateX(-100%)",
            animation: "none",
          }}
        />
        <style>
          {`
            .group:hover .shine-effect {
              animation: shine 0.8s ease-in-out forwards;
            }
            @keyframes shine {
              from { transform: translateX(-100%); }
              to { transform: translateX(100%); }
            }
          `}
        </style>
        <div className="shine-effect absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "linear-gradient(115deg, transparent 20%, rgba(196, 174, 134, 0.08) 40%, rgba(196, 174, 134, 0.15) 50%, rgba(196, 174, 134, 0.08) 60%, transparent 80%)",
          }}
        />

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            border: "1px solid var(--accent)",
            boxShadow: "0 0 20px rgba(196, 174, 134, 0.15)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div
            className={`rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
              config.featured ? "w-16 h-16" : "w-12 h-12"
            }`}
            style={{ backgroundColor: "var(--bg-tertiary)" }}
          >
            <Icon
              className={`transition-colors duration-300 group-hover:text-[var(--accent)] ${
                config.featured ? "w-8 h-8" : "w-6 h-6"
              }`}
              style={{ color: "var(--text-secondary)" }}
            />
          </div>

          {/* Title */}
          <h3
            className={`font-medium mb-3 transition-colors duration-300 ${
              config.featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}
            style={{ color: "var(--text-primary)" }}
          >
            {service.title}
          </h3>

          {/* Description - revealed on hover for non-featured, always visible for featured */}
          <p
            className={`leading-relaxed transition-all duration-300 ${
              config.featured
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            } ${config.featured ? "text-base" : "text-sm"}`}
            style={{ color: "var(--text-secondary)" }}
          >
            {service.description}
          </p>

          {/* Featured badge */}
          {config.featured && (
            <div className="mt-auto pt-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(196, 174, 134, 0.15)",
                  color: "var(--accent)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                Most Popular
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section">{SERVICES_CONTENT.headline}</h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {SERVICES_CONTENT.services.map((service, index) => (
            <BentoCard
              key={service.title}
              service={service}
              icon={serviceIcons[index]}
              config={gridConfig[index]}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
