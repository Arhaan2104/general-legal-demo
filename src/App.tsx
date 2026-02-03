import { useEffect } from "react";
import { Navigation, Footer } from "./components/layout";
import {
  Hero,
  Investors,
  ProblemStatement,
  HowItWorks,
  Services,
  Pricing,
  AIAdvantage,
  Trust,
  FAQ,
  FinalCTA,
} from "./components/sections";
import { useTheme } from "./hooks/useTheme";
import { useLenis } from "./hooks/useLenis";

function App() {
  const { theme, toggleTheme } = useTheme();

  // Initialize smooth scroll
  useLenis();

  // Set theme on document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {/* Navigation */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main>
        <Hero />
        <Investors />
        <ProblemStatement />
        <HowItWorks />
        <Services />
        <Pricing />
        <AIAdvantage />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
