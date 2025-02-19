import { Separator } from "@/components/ui/separator";

export default function Cookies() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device to help our website provide a better user experience. This policy explains how we use cookies and similar technologies.</p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Track effectiveness of our marketing efforts
                </li>
              </ul>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
