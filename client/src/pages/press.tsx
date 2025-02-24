import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Newspaper } from "lucide-react";

const pressReleases = [
  {
    title: "ElevenLabs Raises $100M Series B to Advance AI Voice Technology",
    date: "February 20, 2025",
    source: "Business Wire",
  },
  {
    title: "ElevenLabs Launches Revolutionary Voice Lab Platform",
    date: "January 15, 2025",
    source: "PR Newswire",
  },
  {
    title: "ElevenLabs Partners with Major Gaming Studios",
    date: "December 10, 2024",
    source: "Gaming Industry News",
  },
];

const mediaKit = [
  {
    title: "Company Logos",
    format: "AI, SVG, PNG",
    size: "2.5 MB",
  },
  {
    title: "Brand Guidelines",
    format: "PDF",
    size: "1.8 MB",
  },
  {
    title: "Product Screenshots",
    format: "PNG, JPG",
    size: "15 MB",
  },
];

export default function Press() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Press Room</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Latest news, press releases, and media resources from ElevenLabs
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Press Releases</h2>
        <div className="space-y-4">
          {pressReleases.map((release) => (
            <Card key={release.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                  <Button variant="outline">Read More</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{release.date}</span>
                  <span>•</span>
                  <span>{release.source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Media Kit</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {mediaKit.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  <p>Format: {item.format}</p>
                  <p>Size: {item.size}</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Media Contact</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Newspaper className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Press Inquiries</h3>
                <p className="text-muted-foreground">For media and press inquiries</p>
              </div>
            </div>
            <Button className="w-full">Contact Press Team</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
