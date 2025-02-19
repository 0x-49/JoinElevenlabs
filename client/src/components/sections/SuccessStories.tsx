import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Trophy,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Building2,
  Film,
  Headphones
} from "lucide-react";

const caseStudies = [
  {
    company: "StreamFlix Studios",
    industry: "Entertainment",
    icon: Film,
    logo: "SF",
    challenge: "Needed to dub content into 15 languages while maintaining emotional authenticity",
    solution: "Implemented ElevenLabs' voice cloning for consistent character voices across languages",
    results: [
      "95% reduction in dubbing time",
      "73% cost savings compared to traditional dubbing",
      "Expanded to 25 new markets",
      "4.8/5 viewer satisfaction rating"
    ],
    metrics: {
      roi: "312%",
      timeframe: "6 months",
      scale: "1000+ hours of content"
    }
  },
  {
    company: "GlobalTech Solutions",
    industry: "Enterprise Software",
    icon: Building2,
    logo: "GT",
    challenge: "Required scalable voice solution for customer service in multiple languages",
    solution: "Deployed ElevenLabs API for automated response generation in 29 languages",
    results: [
      "24/7 multilingual support coverage",
      "85% reduction in response time",
      "92% customer satisfaction rate",
      "Handling 50,000+ daily interactions"
    ],
    metrics: {
      roi: "425%",
      timeframe: "12 months",
      scale: "5M+ interactions"
    }
  },
  {
    company: "EduTech Pioneers",
    industry: "Education",
    icon: Headphones,
    logo: "EP",
    challenge: "Needed to convert textbooks into accessible audio content for diverse learner needs",
    solution: "Utilized ElevenLabs' voice generation for creating engaging educational content",
    results: [
      "10x faster content production",
      "89% student engagement increase",
      "Accessible to visually impaired students",
      "Supporting 200+ educational institutions"
    ],
    metrics: {
      roi: "250%",
      timeframe: "9 months",
      scale: "10,000+ hours of content"
    }
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Industries with Voice AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how leading companies are achieving unprecedented results with our technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {study.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{study.company}</h3>
                      <p className="text-sm text-gray-500">{study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                    <div className="text-center">
                      <DollarSign className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-primary">{study.metrics.roi}</div>
                      <p className="text-xs text-gray-500">ROI</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-primary">{study.metrics.timeframe}</div>
                      <p className="text-xs text-gray-500">Timeframe</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-primary">
                        <span className="text-xs">Scale</span>
                      </div>
                      <p className="text-xs text-gray-500">{study.metrics.scale}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
            <p className="text-gray-600">Customer Savings</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">300%</div>
            <p className="text-gray-600">Average ROI</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15M+</div>
            <p className="text-gray-600">Voice Generations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
