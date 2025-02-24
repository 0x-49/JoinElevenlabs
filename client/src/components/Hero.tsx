import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              AI-Powered Voice Generation for the Future
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your content with lifelike voices in any language. 
              Perfect for creators, businesses, and developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="large">Start Free Trial</Button>
              <Button size="large" variant="outline">Watch Demo</Button>
            </div>
          </div>
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="aspect-video rounded-lg bg-white/80 flex items-center justify-center">
              <span className="text-lg text-muted-foreground">Interactive Demo Animation</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
