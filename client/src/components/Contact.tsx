import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Discord
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? Reach out to our team for expert support and guidance.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>team@elevenlabs.io</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>(800) 614-5475</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>169 Madison Ave #2484, New York, NY 10016</span>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://twitter.com/elevenlabsio" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/elevenlabsio" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@elevenlabsio" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://github.com/elevenlabs" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://discord.gg/elevenlabs" target="_blank" rel="noopener noreferrer">
                  <Discord className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
