import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Calculator, ArrowRight } from "lucide-react";

export default function ROICalculator() {
  const [wordCount, setWordCount] = useState<number>(1000);
  const [projectsPerMonth, setProjectsPerMonth] = useState<number>(5);
  const [voiceoverRate, setVoiceoverRate] = useState<number>(0.20); // per word

  // Calculate estimated savings
  const calculateSavings = () => {
    const traditionalCost = wordCount * voiceoverRate * projectsPerMonth;
    const aiVoiceCraftCost = 79; // Pro plan monthly cost
    const monthlySavings = traditionalCost - aiVoiceCraftCost;
    const annualSavings = monthlySavings * 12;
    
    return {
      traditional: traditionalCost,
      aiVoiceCraft: aiVoiceCraftCost,
      monthly: monthlySavings,
      annual: annualSavings
    };
  };

  const savings = calculateSavings();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">ROI Calculator</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how much you could save by switching to AiVoiceCraft for your voiceover needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Words per Project
                    </label>
                    <Input
                      type="number"
                      value={wordCount}
                      onChange={(e) => setWordCount(Number(e.target.value))}
                      className="w-full"
                      min="0"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Enter the typical number of words in your voiceover projects
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Projects per Month
                    </label>
                    <Input
                      type="number"
                      value={projectsPerMonth}
                      onChange={(e) => setProjectsPerMonth(Number(e.target.value))}
                      className="w-full"
                      min="0"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      How many voiceover projects do you typically do per month?
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Traditional Voiceover Rate ($ per word)
                    </label>
                    <Input
                      type="number"
                      value={voiceoverRate}
                      onChange={(e) => setVoiceoverRate(Number(e.target.value))}
                      className="w-full"
                      step="0.01"
                      min="0"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Average cost per word for traditional voiceover services
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Estimated Savings</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Traditional Voiceover Cost</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${savings.traditional.toFixed(2)}/mo
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">AiVoiceCraft Cost</p>
                    <p className="text-3xl font-bold text-primary">
                      ${savings.aiVoiceCraft.toFixed(2)}/mo
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Monthly Savings</p>
                    <p className="text-4xl font-bold text-green-600">
                      ${savings.monthly.toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Annual Savings</p>
                    <p className="text-4xl font-bold text-green-600">
                      ${savings.annual.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="https://try.elevenlabs.io/7qngyxyh42op" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="large"
                      variant="primary"
                      className="w-full"
                    >
                      Start Saving Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
