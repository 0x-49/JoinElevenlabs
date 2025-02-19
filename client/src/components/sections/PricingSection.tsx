import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for trying out our services",
    features: [
      "Limited character quota",
      "Basic voice styles",
      "Standard quality audio",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$22",
    period: "/month",
    popular: true,
    description: "Ideal for content creators and small businesses",
    features: [
      "100,000 characters/month",
      "Advanced voice styles",
      "Premium quality audio",
      "Priority support",
      "Voice cloning capability",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale implementations",
    features: [
      "Unlimited characters",
      "Custom voice creation",
      "Highest quality audio",
      "24/7 dedicated support",
      "Custom API integration",
      "SLA guarantee"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border-2 p-8 ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
