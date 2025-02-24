import { Card, CardContent } from "@/components/ui/card";
import { Video, Briefcase, GraduationCap, Gamepad, BookOpen, Code, ArrowRight, Play, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Solution {
  title: string;
  description: string;
  icon: any;
  features: string[];
  gradient: string;
  cta: string;
  demoText: string;
  demoVoice: string;
}

const solutions: Solution[] = [
  {
    title: "Content Creators",
    description: "Create engaging voiceovers for YouTube videos, podcasts, social media, and more. Produce professional-quality audio quickly and affordably.",
    icon: Video,
    features: ["Wide range of voice styles", "Voice cloning for personal brand", "Fast generation", "Easy editing"],
    gradient: "from-blue-500/20 to-purple-500/20",
    cta: "Explore Voices for Creators",
    demoText: "Welcome to my channel! Today we're exploring the amazing world of AI voice technology.",
    demoVoice: "creator-demo"
  },
  {
    title: "Businesses",
    description: "Scale your content production with consistent brand voices for marketing, training, and customer service across all channels.",
    icon: Briefcase,
    features: ["Brand voice consistency", "Multi-language support", "Enterprise security", "Analytics dashboard"],
    gradient: "from-green-500/20 to-emerald-500/20",
    cta: "Discover Business Solutions",
    demoText: "Thank you for contacting our customer service. How may I assist you today?",
    demoVoice: "business-demo"
  },
  {
    title: "E-Learning",
    description: "Transform your educational content with engaging AI voices. Perfect for online courses, tutorials, and training materials.",
    icon: GraduationCap,
    features: ["Multiple teaching voices", "29+ languages", "Emotional expression", "Cost-effective scaling"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    cta: "Start E-Learning Journey",
    demoText: "Welcome to our online course! Today we're going to explore the basics of AI voice technology.",
    demoVoice: "e-learning-demo"
  },
  {
    title: "Game Developers",
    description: "Create dynamic game narratives with diverse character voices. Streamline your voice production pipeline.",
    icon: Gamepad,
    features: ["Character voice design", "Real-time generation", "Emotional range", "Unity/Unreal SDK"],
    gradient: "from-pink-500/20 to-rose-500/20",
    cta: "Explore Game Audio",
    demoText: "Get ready to embark on an epic adventure! Our game features a diverse cast of characters, each with their own unique voice.",
    demoVoice: "game-demo"
  },
  {
    title: "Audiobook Publishers",
    description: "Produce high-quality audiobooks with consistent narrator voices. Reduce production time and costs significantly.",
    icon: BookOpen,
    features: ["Long-form narration", "Character voices", "Consistent quality", "Fast production"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    cta: "Start Publishing",
    demoText: "Welcome to our audiobook! Today we're going to explore the world of fantasy and adventure.",
    demoVoice: "audiobook-demo"
  },
  {
    title: "Developers",
    description: "Integrate professional AI voices into your applications with our robust API and comprehensive SDKs.",
    icon: Code,
    features: ["REST API access", "Multiple SDKs", "Real-time generation", "Custom voice models"],
    gradient: "from-violet-500/20 to-purple-500/20",
    cta: "View API Docs",
    demoText: "Welcome to our API documentation! Today we're going to explore the possibilities of integrating AI voices into your applications.",
    demoVoice: "developer-demo"
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

export default function Solutions() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playDemo = (voiceId: string) => {
    setActiveDemo(voiceId);
    setIsPlaying(true);
    // Simulated audio playback - in real implementation, this would use the actual API
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Voice Solutions Tailored to Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how AiVoiceCraft can transform your specific industry or use case with 
            our specialized voice AI solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Demo Section */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">Demo Voice Sample:</p>
                    <p className="text-sm text-gray-700 italic mb-3">&quot;{solution.demoText}&quot;</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => playDemo(solution.demoVoice)}
                      disabled={isPlaying && activeDemo === solution.demoVoice}
                    >
                      {isPlaying && activeDemo === solution.demoVoice ? (
                        <Volume2 className="w-4 h-4 mr-2 animate-pulse" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {isPlaying && activeDemo === solution.demoVoice ? "Playing..." : "Play Demo"}
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}