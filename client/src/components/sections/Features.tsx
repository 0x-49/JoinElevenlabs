import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Globe2, Zap, PersonStanding, Cpu, Lock } from "lucide-react";

const features = [
  {
    title: "Natural Voice Synthesis",
    description: "Generate human-like voices with emotion and context awareness",
    icon: Sparkles,
  },
  {
    title: "Multilingual Support",
    description: "Create content in 29+ languages with native-sounding accents",
    icon: Globe2,
  },
  {
    title: "Real-time Generation",
    description: "Instantly create voice content for your applications",
    icon: Zap,
  },
  {
    title: "Voice Cloning",
    description: "Clone voices with just a few minutes of audio samples",
    icon: PersonStanding,
  },
  {
    title: "Advanced AI Models",
    description: "Powered by state-of-the-art deep learning technology",
    icon: Cpu,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security for your voice generation needs",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-edge Voice AI Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the power of our advanced voice synthesis technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
