import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Revolutionary AI Voice Technology</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Transform Content with
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"> Lifelike Voices</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12">
            Experience the future of voice synthesis with our advanced AI technology. 
            Create natural, emotive voiceovers in any language with unprecedented quality 
            and control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Try Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}