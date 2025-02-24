import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const positions = [
  {
    title: "Senior ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Voice AI Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

export default function Careers() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Help us shape the future of voice technology and content accessibility.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why ElevenLabs?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Innovation First</CardTitle>
            </CardHeader>
            <CardContent>
              Work on cutting-edge AI technology that's changing how the world communicates.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Remote Culture</CardTitle>
            </CardHeader>
            <CardContent>
              Work from anywhere in the world with our distributed team.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Growth & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              Develop your skills while making a real impact on global content accessibility.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="space-y-4">
          {positions.map((position) => (
            <Card key={position.title}>
              <CardHeader>
                <CardTitle>{position.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-sm bg-muted px-2 py-1 rounded">
                    {position.department}
                  </span>
                  <span className="text-sm bg-muted px-2 py-1 rounded">
                    {position.location}
                  </span>
                  <span className="text-sm bg-muted px-2 py-1 rounded">
                    {position.type}
                  </span>
                </div>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
