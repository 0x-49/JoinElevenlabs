import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Anchor, Volume2, Clock, Smile, ArrowRight } from "lucide-react";

const VoiceLab = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Voice Lab: Customize Your Sound
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Fine-tune every nuance of your audio output with our state-of-the-art Voice Lab.
            Adjust tone, pitch, speed, and emotional cues with precision control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Voice Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5" />
                      <span>Pitch</span>
                    </div>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-5 h-5" />
                      <span>Stability</span>
                    </div>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Slider defaultValue={[60]} max={100} step={1} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>Speed</span>
                    </div>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Slider defaultValue={[85]} max={100} step={1} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smile className="w-5 h-5" />
                      <span>Emotion</span>
                    </div>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Slider defaultValue={[70]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button className="flex-1">Preview Voice</Button>
              </a>
              <Button variant="outline" className="flex-1">Reset Settings</Button>
            </div>
          </motion.div>

          {/* Voice Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square bg-muted rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-48 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-primary animate-pulse"
                >
                  <path
                    d="M50,2 L50,98"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  {[...Array(20)].map((_, i) => (
                    <path
                      key={i}
                      d={`M${50 - i * 2},${10 + Math.random() * 80} L${
                        50 + i * 2
                      },${10 + Math.random() * 80}`}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={() => window.open("https://try.elevenlabs.io/7qngyxyh42op", "_blank", "noopener,noreferrer")}
            size="lg"
            className="group"
          >
            Try Voice Lab
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VoiceLab;
