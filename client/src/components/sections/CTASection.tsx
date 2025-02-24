import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
  "24/7 support",
  "Full feature access",
  "Unlimited voice generations"
];

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of creators and businesses already using AiVoiceCraft
            to create professional AI voices for their content.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-700"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                variant="primary"
                className="w-full sm:w-auto text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                variant="outline"
                className="w-full sm:w-auto text-lg"
              >
                Schedule Demo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
