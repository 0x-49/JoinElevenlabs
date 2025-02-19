import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import TechnicalDeepDive from "@/components/sections/TechnicalDeepDive";
import SuccessStories from "@/components/sections/SuccessStories";
import SecurityCompliance from "@/components/sections/SecurityCompliance";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import PricingSection from "@/components/sections/PricingSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <UseCases />
      <TechnicalDeepDive />
      <SuccessStories />
      <SecurityCompliance />
      <InteractiveDemo />
      <PricingSection />
      <Contact />
      <Footer />
    </main>
  );
}