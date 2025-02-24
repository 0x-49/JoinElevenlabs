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
import * as Lucide from "lucide-react";

const useCases = [
  //#12
  {
    icon: Lucide.Youtube,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_12.png",
    title: "Content Creation",
    category: "Media",
    description: "Create engaging voiceovers for videos, podcasts, and social media content with natural-sounding voices that resonate with your audience.",
    benefits: ["Multiple voice styles", "Quick turnaround", "Consistent quality", "Cost-effective"],
    color: "from-red-500/20 to-orange-500/20"
  },
  //#11
  {
    icon: Lucide.Gamepad,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_11.png",
    title: "Gaming",
    category: "Entertainment",
    description: "Bring game characters to life with dynamic voice acting that adapts to different scenarios and emotional contexts.",
    benefits: ["Character voices", "Real-time generation", "Emotional range", "Multiple languages"],
    color: "from-purple-500/20 to-blue-500/20"
  },
  //#10
  {
    icon: Lucide.BookOpen,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_10.png",
    title: "Audiobooks",
    category: "Publishing",
    description: "Transform written content into immersive audio experiences with natural narration and character voices.",
    benefits: ["Long-form content", "Multiple voices", "Chapter marking", "Background scoring"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  //#9
  {
    icon: Lucide.Presentation,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_9.png",
    title: "E-Learning",
    category: "Education",
    description: "Create engaging educational content with clear, natural voices that enhance the learning experience.",
    benefits: ["Clear pronunciation", "Paced delivery", "Multiple languages", "Interactive elements"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  //#8
  {
    icon: Lucide.Mic2,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_8.png",
    title: "Podcasting",
    category: "Media",
    description: "Generate professional voiceovers and intros for podcasts with consistent quality and style.",
    benefits: ["Brand voice", "Quick edits", "Multiple formats", "Studio quality"],
    color: "from-yellow-500/20 to-amber-500/20"
  },
  //#7
  {
    icon: Lucide.Radio,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_7.png",
    title: "Broadcasting",
    category: "Media",
    description: "Create automated news readings and radio content with natural-sounding voices.",
    benefits: ["24/7 operation", "Multiple languages", "Real-time updates", "Consistent delivery"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  //#6
  {
    icon: Lucide.Globe2,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_6.png",
    title: "Localization",
    category: "Global",
    description: "Translate and voice content into multiple languages while maintaining natural speech patterns.",
    benefits: ["29+ languages", "Cultural nuance", "Accent control", "Rapid scaling"],
    color: "from-indigo-500/20 to-violet-500/20"
  },
  //#5
  {
    icon: Lucide.MessageSquare,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_5.png",
    title: "Customer Service",
    category: "Business",
    description: "Power automated customer service with natural voice responses that understand context.",
    benefits: ["24/7 support", "Multiple languages", "Quick responses", "Consistent service"],
    color: "from-teal-500/20 to-green-500/20"
  },
  //#4
  {
    icon: Lucide.Laptop,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_4.png",
    title: "Software & Apps",
    category: "Technology",
    description: "Integrate voice capabilities into applications for enhanced user experience and accessibility.",
    benefits: ["API integration", "Real-time processing", "Custom voices", "Scalable solution"],
    color: "from-orange-500/20 to-red-500/20"
  },
  //#3
  {
    icon: Lucide.Building2,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_3.png",
    title: "Corporate Communications",
    category: "Enterprise",
    description: "Create professional voice content for internal communications and training materials.",
    benefits: ["Brand consistency", "Multiple voices", "Quick updates", "Secure platform"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  //#2
  {
    icon: Lucide.Headphones,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_2.png",
    title: "Entertainment",
    category: "Media",
    description: "Generate voice content for advertisements, trailers, and promotional materials.",
    benefits: ["Emotional range", "Quick production", "Multiple styles", "High quality"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  //#1
  {
    icon: Lucide.GraduationCap,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_1.png",
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
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary mb-10">
            <Lucide.Globe2 className="w-5 h-5" />
            <span className="text-base font-medium">Industry Solutions</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Versatile Voice AI Solutions
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover how our advanced voice technology can transform your industry
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              containScroll: "trimSnaps",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className={`relative w-full h-[212px] sm:h-[260px] rounded-t-xl bg-gradient-to-br ${useCase.color}`}>
                          <img 
                            src={useCase.image} 
                            alt={useCase.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="p-7">
                          <div className="flex items-center gap-5 mb-5">
                            <div className={`p-2.5 rounded-lg bg-gradient-to-br ${useCase.color}`}>
                              <useCase.icon className="w-7 h-7 text-gray-800" />
                            </div>
                            <div>
                              <Badge variant="secondary" className="mb-2.5 text-base">
                                {useCase.category}
                              </Badge>
                              <h3 className="text-2xl font-semibold text-gray-900">
                                {useCase.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-lg text-gray-600 mb-5">{useCase.description}</p>
                          <div className="flex flex-wrap gap-2.5">
                            {useCase.benefits.map((benefit, benefitIndex) => (
                              <Badge key={benefitIndex} variant="outline" className="text-base">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex absolute -left-10 h-12 w-12" />
            <CarouselNext className="hidden md:flex absolute -right-10 h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}