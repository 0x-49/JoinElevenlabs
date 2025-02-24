import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, FileCheck } from "lucide-react";

const complianceFeatures = [
  {
    icon: Shield,
    title: "Content Moderation",
    description: "AI-powered content screening and real-time moderation to prevent misuse.",
    badges: ["Real-time", "AI-Powered"]
  },
  {
    icon: CheckCircle,
    title: "Ethical Guidelines",
    description: "Comprehensive policies ensuring responsible AI voice synthesis usage.",
    badges: ["Industry Standard", "Transparent"]
  },
  {
    icon: AlertTriangle,
    title: "Security Measures",
    description: "Enterprise-grade security protocols protecting voice data and user privacy.",
    badges: ["GDPR", "CCPA", "SOC 2"]
  },
  {
    icon: FileCheck,
    title: "Compliance Auditing",
    description: "Regular third-party audits ensuring adherence to industry standards.",
    badges: ["ISO 27001", "Annual Review"]
  }
];

const EthicsCompliance = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Responsible AI Usage
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            We take ethical AI seriously. Our platform integrates robust moderation tools
            and clear usage policies to ensure secure and responsible voice synthesis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        {feature.badges.map((badge) => (
                          <Badge key={badge} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Compliance Documentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="outline" size="large">
              View Ethics Guidelines
            </Button>
            <Button variant="outline" size="large">
              Compliance Documentation
            </Button>
            <Button variant="outline" size="large">
              Security Whitepaper
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EthicsCompliance;
