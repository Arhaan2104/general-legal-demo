import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Navigation, Footer } from "./components/layout";
import { HomePage, TheFirm, Attorneys, Contact, Careers } from "./pages";
import { useTheme } from "./hooks/useTheme";
import { useLenis } from "./hooks/useLenis";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  // Initialize smooth scroll
  useLenis();

  // Set theme on document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ScrollToTop />
      {/* Navigation */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-firm" element={<TheFirm />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
