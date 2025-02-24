import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import VoiceLab from "@/components/sections/VoiceLab";
import TechnicalDeepDive from "@/components/sections/TechnicalDeepDive";
import EnterpriseSolutions from "@/components/sections/EnterpriseSolutions";
import EthicsCompliance from "@/components/sections/EthicsCompliance";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <UseCases />
      <VoiceLab />
      <TechnicalDeepDive />
      <EnterpriseSolutions />
      <EthicsCompliance />
      <InteractiveDemo />
      <PricingSection />
      <Footer />
    </main>
  );
}