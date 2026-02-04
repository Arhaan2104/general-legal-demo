import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export function EmailCapture({
  placeholder = "Enter your email",
  buttonText = "Get Started",
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future integration
    console.log("Email submitted:", email);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`email-capture-wrapper ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated border container */}
      <div
        className={`email-capture-border ${isFocused ? "email-capture-border-active" : ""}`}
      >
        {/* Inner container */}
        <div className="email-capture-inner">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="email-capture-input"
            required
          />
          <motion.button
            type="submit"
            className="email-capture-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
}
