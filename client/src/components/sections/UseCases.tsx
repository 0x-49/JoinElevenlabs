import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Youtube,
  Headphones,
  MessageSquare,
  Gamepad,
  BookOpen,
  Presentation,
  Mic2,
  Radio,
  Globe2,
  Laptop,
  Building2,
  GraduationCap
} from "lucide-react";

const useCases = [
  {
    icon: Youtube,
    title: "Content Creation",
    category: "Media",
    description: "Create engaging voiceovers for videos, podcasts, and social media content with natural-sounding voices that resonate with your audience.",
    benefits: ["Multiple voice styles", "Quick turnaround", "Consistent quality", "Cost-effective"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Gamepad,
    title: "Gaming",
    category: "Entertainment",
    description: "Bring game characters to life with dynamic voice acting that adapts to different scenarios and emotional contexts.",
    benefits: ["Character voices", "Real-time generation", "Emotional range", "Multiple languages"],
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: BookOpen,
    title: "Audiobooks",
    category: "Publishing",
    description: "Transform written content into immersive audio experiences with natural narration and character voices.",
    benefits: ["Long-form content", "Multiple voices", "Chapter marking", "Background scoring"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Presentation,
    title: "E-Learning",
    category: "Education",
    description: "Create engaging educational content with clear, natural voices that enhance the learning experience.",
    benefits: ["Clear pronunciation", "Paced delivery", "Multiple languages", "Interactive elements"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Mic2,
    title: "Podcasting",
    category: "Media",
    description: "Generate professional voiceovers and intros for podcasts with consistent quality and style.",
    benefits: ["Brand voice", "Quick edits", "Multiple formats", "Studio quality"],
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Radio,
    title: "Broadcasting",
    category: "Media",
    description: "Create automated news readings and radio content with natural-sounding voices.",
    benefits: ["24/7 operation", "Multiple languages", "Real-time updates", "Consistent delivery"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Globe2,
    title: "Localization",
    category: "Global",
    description: "Translate and voice content into multiple languages while maintaining natural speech patterns.",
    benefits: ["29+ languages", "Cultural nuance", "Accent control", "Rapid scaling"],
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    icon: MessageSquare,
    title: "Customer Service",
    category: "Business",
    description: "Power automated customer service with natural voice responses that understand context.",
    benefits: ["24/7 support", "Multiple languages", "Quick responses", "Consistent service"],
    color: "from-teal-500/20 to-green-500/20"
  },
  {
    icon: Laptop,
    title: "Software & Apps",
    category: "Technology",
    description: "Integrate voice capabilities into applications for enhanced user experience and accessibility.",
    benefits: ["API integration", "Real-time processing", "Custom voices", "Scalable solution"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Building2,
    title: "Corporate Communications",
    category: "Enterprise",
    description: "Create professional voice content for internal communications and training materials.",
    benefits: ["Brand consistency", "Multiple voices", "Quick updates", "Secure platform"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Headphones,
    title: "Entertainment",
    category: "Media",
    description: "Generate voice content for advertisements, trailers, and promotional materials.",
    benefits: ["Emotional range", "Quick production", "Multiple styles", "High quality"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    category: "Education",
    description: "Support research projects with voice synthesis capabilities for linguistic and cognitive studies.",
    benefits: ["Data collection", "Analysis tools", "Custom parameters", "Research API"],
    color: "from-violet-500/20 to-purple-500/20"
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Globe2 className="w-4 h-4" />
            <span className="text-sm font-medium">Industry Solutions</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Industries with Voice AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our AI voice technology is revolutionizing different sectors
            and creating new possibilities across industries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-8"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <useCase.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="mb-4">
                          {useCase.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            Explore All Use Cases
            <Globe2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}