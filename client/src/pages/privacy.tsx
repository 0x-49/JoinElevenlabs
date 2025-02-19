import { Separator } from "@/components/ui/separator";

export default function Privacy() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>At ElevenLabs, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Provide and improve our services</li>
                <li>Process payments</li>
                <li>Send important updates</li>
                <li>Analyze and optimize performance</li>
              </ul>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
