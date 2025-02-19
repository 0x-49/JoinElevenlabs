import { Separator } from "@/components/ui/separator";

export default function Terms() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing and using ElevenLabs' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
              <p>Our services are designed to provide AI-powered voice synthesis solutions. You agree to use these services only for lawful purposes and in accordance with these Terms.</p>
              <ul className="list-disc pl-6 mt-4">
                <li>You must be at least 18 years old to use our services</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You agree not to misuse our services or help anyone else do so</li>
              </ul>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
              <p>All content, features, and functionality of our services are owned by ElevenLabs and are protected by international copyright, trademark, and other intellectual property laws.</p>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
