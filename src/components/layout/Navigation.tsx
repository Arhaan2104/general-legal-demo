import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { NAV_LINKS, SITE_CONFIG } from "../../lib/constants";
import { cn } from "../../lib/utils";

interface NavigationProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef(0);
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 100, damping: 30 });

  // Check if a link is active
  const isLinkActive = (href: string) => {
    // For page routes
    if (!href.includes("#")) {
      return location.pathname === href;
    }
    // For hash links on homepage
    if (location.pathname === "/" && href.startsWith("/#")) {
      return effectiveActiveSection === href.replace("/", "");
    }
    return false;
  };

  // Handle navigation for both page routes and hash links
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);

    // If it's a hash link
    if (href.includes("#")) {
      const hash = href.replace("/#", "#");

      // If we're not on the homepage, navigate there first
      if (location.pathname !== "/") {
        e.preventDefault();
        navigate("/");
        // Wait for navigation then scroll to section
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // We're on homepage, just let the hash link work
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // For page routes, Link component handles navigation
  };

  // Enhanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Update scroll progress
      scrollProgress.set(scrollHeight > 0 ? currentScrollY / scrollHeight : 0);

      // Scrolled state (for background blur)
      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up (with threshold)
      const scrollDelta = currentScrollY - lastScrollY.current;
      if (scrollDelta > 10 && currentScrollY > 100) {
        setIsHidden(true);
      } else if (scrollDelta < -10 || currentScrollY < 100) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgress]);

  // Derive effective active section (only valid on homepage)
  const effectiveActiveSection = location.pathname === "/" ? activeSection : "";

  // Active section tracking with IntersectionObserver (only on homepage)
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionIds = NAV_LINKS
      .filter(link => link.href.includes("#"))
      .map(link => link.href.replace("/#", ""));

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(`#${id}`);
              }
            });
          },
          { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [location.pathname]);

  // Render navigation link (either Link or anchor)
  const renderNavLink = (link: { label: string; href: string }, isMobile = false) => {
    const isActive = isLinkActive(link.href);
    const isPageRoute = !link.href.includes("#");

    const className = cn(
      isMobile
        ? cn(
            "block text-lg font-medium py-3 transition-colors relative",
            isActive && "pl-4"
          )
        : cn(
            "nav-link relative text-sm font-medium transition-all duration-200 py-1",
            isActive && "nav-link-active"
          )
    );

    const style = {
      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
    };

    const content = (
      <>
        {/* Mobile active indicator */}
        {isMobile && isActive && (
          <motion.span
            layoutId="mobileActiveIndicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        )}
        {link.label}
        {/* Desktop underline */}
        {!isMobile && (
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out",
              isActive ? "w-full" : "w-0"
            )}
            style={{ backgroundColor: "var(--accent)" }}
          />
        )}
      </>
    );

    if (isPageRoute) {
      return (
        <Link
          key={link.label}
          to={link.href}
          className={className}
          style={style}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        key={link.label}
        href={link.href}
        className={className}
        style={style}
        onClick={(e) => handleNavClick(link.href, e)}
      >
        {content}
      </a>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: isHidden && !isMobileMenuOpen ? -100 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "nav-blur nav-scrolled" : "bg-transparent"
        )}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-accent origin-left"
          style={{
            scaleX: smoothProgress,
            backgroundColor: "var(--accent)",
          }}
        />

        <div className="container">
          <nav
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="flex items-center gap-2">
                <motion.span
                  className="font-display font-medium transition-all duration-300"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: isScrolled ? "1.125rem" : "1.25rem",
                  }}
                >
                  {SITE_CONFIG.name}
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => renderNavLink(link))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <Link to="/contact">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                style={{ color: "var(--text-primary)" }}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Bottom border that fades in when scrolled */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{
            backgroundColor: "var(--border)",
            opacity: isScrolled ? 1 : 0,
          }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "fixed inset-x-0 z-40 nav-blur md:hidden",
              isScrolled ? "top-16" : "top-20"
            )}
          >
            <div className="container">
              <div className="py-6 space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {renderNavLink(link, true)}
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
