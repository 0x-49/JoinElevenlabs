import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building2, Globe2, Shield, Crown } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "ElevenLabs has revolutionized our content production. We've seen a 300% increase in output while maintaining high quality.",
    author: "Sarah Chen",
    role: "Head of Content",
    company: "TechStream Media",
    rating: 5
  },
  {
    content: "The voice quality is incredible. Our audiobooks now sound completely natural, and production time has been cut in half.",
    author: "Michael Rodriguez",
    role: "Production Director",
    company: "AudioBooks Plus",
    rating: 5
  },
  {
    content: "Game-changing technology for our e-learning platform. Students love the natural-sounding voices in multiple languages.",
    author: "Emma Thompson",
    role: "CEO",
    company: "EduTech Global",
    rating: 5
  }
];

const stats = [
  { label: "Active Users", value: "100,000+", icon: Users },
  { label: "Enterprise Clients", value: "500+", icon: Building2 },
  { label: "Languages", value: "29+", icon: Globe2 },
  { label: "Uptime", value: "99.99%", icon: Shield }
];

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "/month",
    description: "Perfect for testing and small projects",
    features: [
      "10,000 characters/month",
      "3 voice samples",
      "Standard voices",
      "Basic support"
    ],
    url: "https://try.elevenlabs.io/7qngyxyh42op",
    popular: false
  },
  {
    name: "Creator Pro",
    price: "$49",
    period: "/month",
    description: "For professional content creators",
    features: [
      "100,000 characters/month",
      "10 custom voices",
      "Priority generation",
      "Advanced voice controls",
      "Email support"
    ],
    url: "https://try.elevenlabs.io/7qngyxyh42op",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited characters",
      "Unlimited custom voices",
      "Dedicated account manager",
      "Custom API integration",
      "24/7 priority support",
      "SLA guarantees"
    ],
    url: "https://try.elevenlabs.io/7qngyxyh42op",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Perfect Plan for Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From individual creators to enterprise solutions, we have a plan that fits your needs
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 h-full hover:shadow-lg transition-shadow ${plan.popular ? 'border-2 border-primary relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 right-6">
                    <Badge className="bg-primary text-white">
                      <Crown className="w-4 h-4 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "primary" : "outline"}
                    onClick={() => window.open(plan.url, '_blank')}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-primary text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Content?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Join thousands of creators and businesses already using ElevenLabs to create
              engaging, high-quality voice content.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => window.open('https://try.elevenlabs.io/7qngyxyh42op', '_blank')}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="large" 
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://try.elevenlabs.io/7qngyxyh42op', '_blank')}
              >
                Contact Sales
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
