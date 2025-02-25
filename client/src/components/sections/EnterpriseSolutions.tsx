import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { Building2, BarChart, Users, Clock, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "GlobalTech Solutions",
    industry: "Customer Service",
    challenge: "24/7 multilingual support",
    results: {
      efficiency: "85% faster response time",
      coverage: "24/7 availability",
      satisfaction: "92% customer satisfaction",
      savings: "$2.5M annual savings"
    }
  },
  {
    company: "StreamFlix Studios",
    industry: "Media & Entertainment",
    challenge: "Content localization",
    results: {
      efficiency: "70% faster dubbing",
      coverage: "40+ languages",
      satisfaction: "95% accuracy rate",
      savings: "$1.8M per project"
    }
  }
];

const metrics = [
  {
    icon: Clock,
    title: "Time Savings",
    value: "85%",
    description: "Reduction in content production time"
  },
  {
    icon: Users,
    title: "User Satisfaction",
    value: "92%",
    description: "Average customer satisfaction rate"
  },
  {
    icon: BarChart,
    title: "Cost Reduction",
    value: "65%",
    description: "Decrease in operational costs"
  }
];

const EnterpriseSolutions = () => {
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
            Enterprise Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with our enterprise-grade voice AI platform.
            Scale effortlessly, maintain security, and achieve measurable ROI.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto">
                    <metric.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.company}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {study.company}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Industry: {study.industry}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Challenge: {study.challenge}</p>
                  <Table>
                    <TableBody>
                      {Object.entries(study.results).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium capitalize">
                            {key.replace("_", " ")}
                          </TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mt-8">
            <a 
              href="https://try.elevenlabs.io/7qngyxyh42op" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Contact Enterprise Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
