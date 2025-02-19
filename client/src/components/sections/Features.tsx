import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Globe2, Zap, PersonStanding, Cpu, Lock, ArrowRight, BarChart, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Natural Voice Synthesis",
    description: "Generate human-like voices with advanced emotional intelligence and contextual awareness",
    details: "Our proprietary deep learning models understand tone, inflection, and emotional context",
    icon: Sparkles,
    stats: "99.8% human-like accuracy"
  },
  {
    title: "Multilingual Excellence",
    description: "Create content in 29+ languages with native-sounding accents and cultural nuances",
    details: "Powered by neural networks trained on native speakers across multiple dialects",
    icon: Globe2,
    stats: "29+ languages supported"
  },
  {
    title: "Real-time Generation",
    description: "Generate voice content instantly with our high-performance API",
    details: "Industry-leading latency of <100ms for real-time applications",
    icon: Zap,
    stats: "<100ms latency"
  },
  {
    title: "Advanced Voice Cloning",
    description: "Clone voices with minimal training data while preserving emotional range",
    details: "Create custom voices with just 3 minutes of high-quality audio",
    icon: PersonStanding,
    stats: "3 min training time"
  },
  {
    title: "Neural Architecture",
    description: "State-of-the-art deep learning models for unprecedented voice quality",
    details: "Built on transformer architecture with 1.5B parameters",
    icon: Cpu,
    stats: "1.5B parameters"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption for your voice data",
    details: "SOC 2 Type II certified with 256-bit AES encryption",
    icon: Lock,
    stats: "SOC 2 certified"
  },
  {
    title: "Advanced Analytics",
    description: "Detailed insights into voice generation performance and usage",
    details: "Real-time monitoring and analytics dashboard",
    icon: BarChart,
    stats: "Real-time metrics"
  },
  {
    title: "Seamless Integration",
    description: "Easy integration with your existing tech stack via REST API",
    details: "Comprehensive SDK support for major platforms",
    icon: Network,
    stats: "99.9% uptime"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium">Advanced Technology</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-edge Voice AI Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced voice synthesis technology powers the next generation of human-like interactions
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="flex items-start justify-between">
                    <span>{feature.title}</span>
                    <span className="text-sm text-primary font-normal">{feature.stats}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button size="lg" variant="outline" className="group">
            Explore Technical Documentation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}