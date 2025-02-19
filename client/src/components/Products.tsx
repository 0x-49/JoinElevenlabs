import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const products = [
  {
    title: "Voice Lab",
    description: "Create and customize synthetic voices",
    features: [
      "Voice cloning technology",
      "Emotional expression control",
      "Multiple language support",
      "Real-time preview"
    ]
  },
  {
    title: "Speech Studio",
    description: "Professional audio production suite",
    features: [
      "Advanced audio editing",
      "Batch processing",
      "Project management",
      "Team collaboration"
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional tools for every voice generation need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden border-2">
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
