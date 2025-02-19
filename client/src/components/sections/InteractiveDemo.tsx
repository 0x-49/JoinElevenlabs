import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Languages, Mic, Wand2 } from "lucide-react";

const languages = [
  { value: "en-US", label: "English (US)" },
  { value: "es-ES", label: "Spanish" },
  { value: "fr-FR", label: "French" },
  { value: "de-DE", label: "German" },
  { value: "it-IT", label: "Italian" }
];

const voices = [
  { value: "rachel", label: "Rachel - Professional" },
  { value: "james", label: "James - Business" },
  { value: "sophia", label: "Sophia - Natural" },
  { value: "alex", label: "Alex - Casual" }
];

export default function InteractiveDemo() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium">Try It Yourself</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Magic of AI Voice
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your text into natural speech with our cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg border-2 p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Select Language</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        <div className="flex items-center gap-2">
                          <Languages className="w-4 h-4" />
                          {lang.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Voice</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {voices.map((voice) => (
                      <SelectItem key={voice.value} value={voice.value}>
                        <div className="flex items-center gap-2">
                          <Wand2 className="w-4 h-4" />
                          {voice.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Enter Text</label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste your text here..."
                className="min-h-[150px]"
              />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button
                size="lg"
                className="w-full md:w-auto group"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Stop Playback
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Generate & Play
                  </>
                )}
              </Button>

              <div className="flex items-center gap-4 flex-1">
                <Volume2 className="w-4 h-4 text-gray-500" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500 min-w-[3ch]">{volume}%</span>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Try our demo with up to 1000 characters. Sign up for full access.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
        >
          <div>
            <h4 className="text-lg font-semibold mb-2">Natural Speech</h4>
            <p className="text-gray-600">Lifelike voices with emotional intelligence</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Real-time Generation</h4>
            <p className="text-gray-600">Instant voice synthesis with low latency</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Multiple Languages</h4>
            <p className="text-gray-600">Support for 29+ languages and accents</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
