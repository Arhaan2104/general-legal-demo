import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Clock, MapPin, Linkedin, Twitter, Send } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { CONTACT_CONTENT } from "../lib/constants";
import { fadeInUp, staggerContainer } from "../lib/animations";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    const mailtoLink = `mailto:${CONTACT_CONTENT.info.email}?subject=Contact from ${formData.name} at ${formData.company}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <motion.h1 variants={fadeInUp} className="text-hero mb-6">
              {CONTACT_CONTENT.hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {CONTACT_CONTENT.hero.subheadline}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Content */}
      <Section background="secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-display font-medium mb-6 sm:mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Get in Touch
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_CONTENT.info.email}`}
                className="flex items-start gap-4 p-4 rounded-xl transition-colors"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--accent-muted)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {CONTACT_CONTENT.info.email}
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--accent-muted)" }}
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Hours
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {CONTACT_CONTENT.info.hours}
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--accent-muted)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Service Area
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    United States
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="mt-8">
              <p
                className="font-medium mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {CONTACT_CONTENT.social.headline}
              </p>
              <div className="flex gap-3">
                <a
                  href={CONTACT_CONTENT.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT_CONTENT.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              {CONTACT_CONTENT.info.response}
            </motion.p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="p-5 sm:p-6 md:p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-xl sm:text-2xl font-display font-medium mb-5 sm:mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                {CONTACT_CONTENT.form.headline}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {CONTACT_CONTENT.form.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-colors outline-none"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {CONTACT_CONTENT.form.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-colors outline-none"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {CONTACT_CONTENT.form.fields.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg transition-colors outline-none"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {CONTACT_CONTENT.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg transition-colors outline-none resize-none sm:min-h-[140px]"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  {CONTACT_CONTENT.form.button}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
