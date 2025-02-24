import { Link } from "wouter";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">About ElevenLabs</h1>
      <div className="prose max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          We're on a mission to make content accessible in any language and in any voice.
        </p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            ElevenLabs was founded with a vision to break down language barriers and revolutionize
            how we create and consume content. Our cutting-edge AI technology enables natural,
            expressive voice synthesis that maintains the emotion and nuance of human speech.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            We believe that everyone should have access to information and content in their
            preferred language and voice. Through advanced AI technology, we're making this
            vision a reality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <p className="mb-4">
            Our proprietary AI models combine the latest advances in machine learning with
            deep expertise in linguistics and audio processing. This allows us to create
            voices that are not just natural-sounding, but truly expressive.
          </p>
        </section>

        <div className="mt-8">
          <Link href="/contact">
            <a className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
