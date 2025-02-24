import { Button } from "../ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Say Goodbye to Traditional Voiceover Hassles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Tired of Expensive, Slow
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"> Voiceovers?</span>
            <br />Create Professional AI Voices in Minutes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12"
          >
            Revolutionize your content creation workflow with human-like AI voices in 29+ languages.
            Perfect for videos, podcasts, e-learning, games, and more. Scale your content effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                variant="primary"
                className="w-full sm:w-auto text-lg"
              >
                Start Creating Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                variant="outline"
                className="w-full sm:w-auto text-lg"
              >
                Try Demo Voice
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-4xl font-bold text-primary mb-2">29+</h4>
              <p className="text-gray-600 font-medium">Languages</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-4xl font-bold text-primary mb-2">1M+</h4>
              <p className="text-gray-600 font-medium">Voice Generations</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-4xl font-bold text-primary mb-2">10k+</h4>
              <p className="text-gray-600 font-medium">Active Users</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-4xl font-bold text-primary mb-2">99%</h4>
              <p className="text-gray-600 font-medium">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}