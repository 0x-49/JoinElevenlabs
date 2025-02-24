import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, GitBranch, Play, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "Comprehensive API",
    description: "Access our full suite of voice synthesis capabilities through RESTful endpoints.",
  },
  {
    icon: Terminal,
    title: "SDK Libraries",
    description: "Native SDKs for popular languages including Python, JavaScript, Java, and more.",
  },
  {
    icon: Play,
    title: "Sandbox Environment",
    description: "Test and experiment with voice synthesis in a safe development environment.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Track changes and manage voice models with built-in versioning.",
  },
];

const DeveloperHub: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Developer Tools & Resources
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Empower your development team with our robust API, extensive SDK libraries,
            and dedicated sandbox environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => window.open("https://try.elevenlabs.io/7qngyxyh42op", "_blank", "noopener,noreferrer")}
            size="large"
            variant="primary"
          >
            Access Developer Portal
          </Button>
        </div>

        {/* API Playground Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-muted rounded-lg p-6"
        >
          <pre className="text-sm overflow-x-auto p-4 bg-background rounded border">
            {`curl -X POST "https://api.elevenlabs.io/v1/text-to-speech" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello world!",
    "voice_id": "custom_voice_1",
    "settings": {
      "stability": 0.5,
      "similarity_boost": 0.8
    }
  }'`}
          </pre>
          <div className="mt-4 text-center">
            <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="small">
                Try it in Playground
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperHub;
