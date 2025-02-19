import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Brain, 
  Network, 
  Activity, 
  Cpu,
  Lock,
  Timer,
  Binary,
  LineChart
} from "lucide-react";

const architectureFeatures = [
  {
    icon: Brain,
    title: "Neural Architecture",
    description: "Transformer-based model with 1.5B parameters",
    details: [
      "Multi-head attention mechanisms",
      "Custom positional encoding",
      "Advanced emotion embedding layer",
      "Context-aware synthesis pipeline"
    ]
  },
  {
    icon: Network,
    title: "Distributed Processing",
    description: "High-availability cluster deployment",
    details: [
      "Load-balanced API endpoints",
      "Auto-scaling capabilities",
      "Geographic redundancy",
      "99.99% uptime SLA"
    ]
  },
  {
    icon: Activity,
    title: "Audio Processing",
    description: "State-of-the-art voice synthesis",
    details: [
      "48kHz sampling rate",
      "Variable bitrate encoding",
      "Adaptive noise reduction",
      "Real-time processing"
    ]
  },
  {
    icon: Binary,
    title: "Data Pipeline",
    description: "Optimized data processing workflow",
    details: [
      "Parallel processing streams",
      "Custom memory management",
      "Efficient caching system",
      "Automated optimization"
    ]
  }
];

export default function TechnicalDeepDive() {
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
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium">Technical Architecture</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Neural Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into the technological foundation that powers our industry-leading voice synthesis
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border-2">
            <div className="grid grid-cols-3 gap-8 h-full">
              <div className="col-span-1 flex flex-col justify-between border-r border-primary/20 pr-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Input Layer</h4>
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Pre-processing</h4>
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 flex flex-col justify-center border-r border-primary/20 px-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Neural Core</h4>
                  <div className="space-y-2">
                    <div className="h-12 bg-primary/30 rounded" />
                    <div className="h-12 bg-primary/30 rounded" />
                    <div className="h-12 bg-primary/30 rounded" />
                    <div className="h-12 bg-primary/30 rounded" />
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 flex flex-col justify-between pl-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Post-processing</h4>
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Output Layer</h4>
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-8 bg-primary/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {architectureFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-primary/5"
          >
            <Timer className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary">100ms</div>
            <p className="text-sm text-gray-600">Average Latency</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-lg bg-primary/5"
          >
            <Lock className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary">256-bit</div>
            <p className="text-sm text-gray-600">AES Encryption</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg bg-primary/5"
          >
            <Cpu className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary">1.5B</div>
            <p className="text-sm text-gray-600">Model Parameters</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-lg bg-primary/5"
          >
            <LineChart className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary">99.99%</div>
            <p className="text-sm text-gray-600">System Uptime</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}