import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Users, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default function Hero() {
  const handleRedirect = () => {
    window.location.href = "https://try.elevenlabs.io/7qngyxyh42op";
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Revolutionary AI Voice Technology</span>
          </div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Content with
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"> Lifelike Voices</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of voice synthesis with our advanced AI technology. 
            Create natural, emotive voiceovers in any language with unprecedented quality 
            and control.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              link="https://try.elevenlabs.io/7qngyxyh42op"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              link="https://try.elevenlabs.io/7qngyxyh42op"
              className="w-full sm:w-auto"
            >
              Try Demo
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm">
              <h4 className="text-4xl font-bold text-primary mb-2">29+</h4>
              <p className="text-gray-600">Languages</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm">
              <h4 className="text-4xl font-bold text-primary mb-2">1M+</h4>
              <p className="text-gray-600">Voice Generations</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm">
              <h4 className="text-4xl font-bold text-primary mb-2">10k+</h4>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm">
              <h4 className="text-4xl font-bold text-primary mb-2">99%</h4>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" 
                fill="white" className="fill-current text-white"/>
        </svg>
      </div>
    </section>
  );
}