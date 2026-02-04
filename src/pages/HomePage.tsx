import {
  Hero,
  Investors,
  Comparison,
  HowItWorks,
  Pricing,
  FAQ,
  FinalCTA,
} from "../components/sections";

function SectionDivider() {
  return <div className="section-divider my-8 md:my-12" />;
}

export function HomePage() {
  return (
    <main>
      <Hero />
      <Investors />
      <SectionDivider />
      <Comparison />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
