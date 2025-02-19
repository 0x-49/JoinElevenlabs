import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Shield,
  Lock,
  FileCheck,
  ServerCog,
  Key,
  Filter,
  Scale,
  CloudCog
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption for all data in transit and at rest",
    details: [
      "256-bit AES encryption",
      "TLS 1.3 for data in transit",
      "Secure key management",
      "Regular security audits"
    ]
  },
  {
    icon: FileCheck,
    title: "Compliance & Certifications",
    description: "Meeting global security standards and regulations",
    details: [
      "SOC 2 Type II certified",
      "GDPR compliant",
      "HIPAA compliant",
      "ISO 27001 certified"
    ]
  },
  {
    icon: ServerCog,
    title: "Infrastructure Security",
    description: "Robust cloud infrastructure with multiple security layers",
    details: [
      "24/7 monitoring",
      "DDoS protection",
      "Regular penetration testing",
      "Automated threat detection"
    ]
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Granular control over data access and permissions",
    details: [
      "Role-based access control",
      "Multi-factor authentication",
      "Single sign-on (SSO)",
      "Audit logging"
    ]
  }
];

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Comprehensive security controls and practices",
    status: "Certified"
  },
  {
    name: "GDPR",
    description: "European data protection standards",
    status: "Compliant"
  },
  {
    name: "HIPAA",
    description: "Healthcare data security requirements",
    status: "Compliant"
  },
  {
    name: "ISO 27001",
    description: "Information security management",
    status: "Certified"
  }
];

export default function SecurityCompliance() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Enterprise Security</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bank-Grade Security & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your data security is our top priority. We maintain the highest standards of security and regulatory compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border-2">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Compliance & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{standard.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{standard.description}</p>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      <FileCheck className="w-3 h-3" />
                      {standard.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-600">
            Our security measures and compliance standards are regularly audited by independent third parties to ensure the highest level of protection for your data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
