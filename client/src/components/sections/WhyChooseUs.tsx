import { Card, CardContent } from "../ui/card";
import { Sparkles, Zap, BarChart, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Captivating, Human-Like Voices",
    description: "Engage your audience with incredibly realistic and emotionally expressive AI voices. No more robotic-sounding content.",
    icon: Sparkles,
    stats: "99.8% human-like accuracy",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Instant Voiceovers, Lightning Fast",
    description: "No more waiting for voice actors or studio time. Generate professional voiceovers instantly and speed up your content production.",
    icon: Zap,
    stats: "<100ms generation time",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Global Reach, Multilingual Mastery",
    description: "Expand your audience worldwide with content in 29+ languages. Reach new markets effortlessly with native-sounding accents.",
    icon: BarChart,
    stats: "29+ languages supported",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Consistent Brand Voice",
    description: "Maintain a consistent voice across all your content. Perfect for scaling your brand's audio presence across channels.",
    icon: Shield,
    stats: "100% voice consistency",
    gradient: "from-red-500/20 to-pink-500/20"
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

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unlock the Power of AI Voices
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your content creation workflow while saving time and money. 
            Experience the future of voice production with solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="text-sm font-medium text-primary">
                    {benefit.stats}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
