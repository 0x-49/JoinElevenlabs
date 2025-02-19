import { Card, CardContent } from "@/components/ui/card";
import { Video, Headphones, MessageSquare, Gamepad } from "lucide-react";

const useCases = [
  {
    icon: <Video className="h-6 w-6" />,
    title: "Content Creation",
    description: "Perfect for YouTubers, podcasters, and video creators needing high-quality voiceovers."
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Audiobook Production",
    description: "Transform written content into engaging audio narratives with natural-sounding voices."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Customer Service",
    description: "Enhance customer interactions with AI-powered voice responses that sound human."
  },
  {
    icon: <Gamepad className="h-6 w-6" />,
    title: "Gaming & Entertainment",
    description: "Create dynamic character voices for games and interactive experiences."
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Transforming Industries with Voice AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how ElevenLabs is revolutionizing different sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
