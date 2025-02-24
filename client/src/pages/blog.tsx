import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

const posts = [
  {
    title: "Introducing Advanced Voice Customization",
    excerpt: "New features for fine-tuning voice characteristics and emotional expression.",
    date: new Date("2025-02-15"),
    category: "Product Update",
    author: "Sarah Chen",
  },
  {
    title: "The Future of Multilingual Content Creation",
    excerpt: "How AI is breaking down language barriers in global communication.",
    date: new Date("2025-02-10"),
    category: "Industry Insights",
    author: "Michael Rodriguez",
  },
  {
    title: "Best Practices for Voice Synthesis in Gaming",
    excerpt: "Creating immersive gaming experiences with AI-powered voice acting.",
    date: new Date("2025-02-05"),
    category: "Tutorials",
    author: "Alex Kim",
  },
];

export default function Blog() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Insights, updates, and resources from the ElevenLabs team
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{post.category}</span>
                <span>•</span>
                <span>{formatDistanceToNow(post.date, { addSuffix: true })}</span>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">By {post.author}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
