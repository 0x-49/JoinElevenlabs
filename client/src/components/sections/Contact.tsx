import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaTwitter, FaLinkedin, FaYoutube, FaGithub, FaDiscord } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: FaTwitter, href: "https://twitter.com/elevenlabsio", label: "Twitter" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/elevenlabsio", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://www.youtube.com/@elevenlabsio", label: "YouTube" },
  { icon: FaGithub, href: "https://github.com/elevenlabs", label: "GitHub" },
  { icon: FaDiscord, href: "https://discord.gg/elevenlabs", label: "Discord" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our AI voice technology? We'd love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
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
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-2">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}