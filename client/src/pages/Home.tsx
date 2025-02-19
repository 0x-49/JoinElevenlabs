import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import PricingSection from "@/components/sections/PricingSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <UseCases />
      <PricingSection />
      <Contact />
    </main>
  );
}
