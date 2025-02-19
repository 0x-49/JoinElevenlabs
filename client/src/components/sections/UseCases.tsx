import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Youtube, Film, Headphones, Building2 } from "lucide-react";

const useCases = [
  {
    id: "content",
    label: "Content Creation",
    icon: Youtube,
    title: "Perfect for Content Creators",
    description: "Create engaging voiceovers for videos, podcasts, and social media content with natural-sounding voices that connect with your audience.",
    features: [
      "High-quality voice generation",
      "Multiple voice styles",
      "Quick turnaround time",
      "Cost-effective solution"
    ]
  },
  {
    id: "entertainment",
    label: "Entertainment",
    icon: Film,
    title: "Revolutionize Entertainment",
    description: "Transform gaming experiences and film productions with dynamic voice acting and seamless language dubbing.",
    features: [
      "Character voice creation",
      "Multiple language support",
      "Emotional expression",
      "Real-time voice generation"
    ]
  },
  {
    id: "education",
    label: "Education",
    icon: Headphones,
    title: "Enhance Learning",
    description: "Make educational content accessible in multiple languages and create engaging audio materials for diverse learning needs.",
    features: [
      "Clear pronunciation",
      "Multiple languages",
      "Consistent quality",
      "Scalable solution"
    ]
  },
  {
    id: "business",
    label: "Enterprise",
    icon: Building2,
    title: "Empower Business",
    description: "Scale your customer service and corporate communications with AI-powered voice solutions.",
    features: [
      "Custom voice creation",
      "Integration APIs",
      "Security compliance",
      "24/7 support"
    ]
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how ElevenLabs is revolutionizing different sectors
          </p>
        </div>

        <Tabs defaultValue="content" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="gap-2">
                <useCase.icon className="h-4 w-4" />
                <span className="hidden md:inline">{useCase.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <useCase.icon className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg border-2">
                  <useCase.icon className="h-32 w-32 mx-auto text-primary opacity-20" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
