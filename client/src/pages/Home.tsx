import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import UseCases from "../components/sections/UseCases";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ROICalculator from "../components/sections/ROICalculator";
import PricingSection from "../components/sections/PricingSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <UseCases />
      <WhyChooseUs />
      <ROICalculator />
      <PricingSection />
      <CTASection />
    </main>
  );
}