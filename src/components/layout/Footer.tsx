import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import { Container } from "../ui/Container";
import { SITE_CONFIG, FOOTER_CONTENT } from "../../lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper to render link (internal vs external vs hash)
  const renderLink = (link: { label: string; href: string }) => {
    // External links
    if (link.href.startsWith("http")) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:underline"
          style={{ color: "var(--text-secondary)" }}
        >
          {link.label}
        </a>
      );
    }

    // Hash links (scroll to section)
    if (link.href.includes("#")) {
      return (
        <a
          href={link.href}
          className="transition-colors hover:underline"
          style={{ color: "var(--text-secondary)" }}
        >
          {link.label}
        </a>
      );
    }

    // Internal page routes
    return (
      <Link
        to={link.href}
        className="transition-colors hover:underline"
        style={{ color: "var(--text-secondary)" }}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <Container>
        <div className="py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="inline-block">
                <span
                  className="font-display text-2xl font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p
                className="mt-4 max-w-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {FOOTER_CONTENT.tagline}
              </p>
              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 mt-6">
                <a
                  href={FOOTER_CONTENT.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={FOOTER_CONTENT.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4
                className="font-medium mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {FOOTER_CONTENT.services.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4
                className="font-medium mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {FOOTER_CONTENT.company.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4
                className="font-medium mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_CONTENT.legal.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            Contact:{" "}
            <a
              href={`mailto:${FOOTER_CONTENT.contact.email}`}
              className="transition-colors hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              {FOOTER_CONTENT.contact.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
