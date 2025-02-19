import { Card, CardContent } from "@/components/ui/card";
import { Mic2, Globe2, Zap, Brain } from "lucide-react";

const features = [
  {
    icon: <Mic2 className="h-8 w-8" />,
    title: "Voice Cloning",
    description: "Clone voices with just a few minutes of audio data, maintaining natural expressiveness and emotion."
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "Multilingual Support",
    description: "Generate content in over 29 languages with native-level pronunciation and cultural awareness."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-time Generation",
    description: "Create high-quality voice content instantly with our powerful API and integrations."
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Emotional Intelligence",
    description: "Advanced AI that understands context and delivers emotionally appropriate responses."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Cutting-edge Voice AI Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI solutions power the next generation of voice interactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
