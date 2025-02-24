import React from "react";
import { Link } from "wouter";
import { Twitter, Linkedin, Youtube, Github, MessageCircle, Mail, Phone, ArrowRight, Globe, Book, Headphones, Shield, Users } from "lucide-react";

const Footer = () => {
  const productLinks = [
    { name: "Voice Library", href: "/voices", icon: Headphones },
    { name: "Voice Lab", href: "/voice-lab", icon: Globe },
    { name: "API Documentation", href: "/docs", icon: Book },
    { name: "Case Studies", href: "/case-studies", icon: Users }
  ];

  const resourceLinks = [
    { name: "Help Center", href: "/help" },
    { name: "API Status", href: "/status" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/elevenlabsio", icon: Twitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/elevenlabsio", icon: Linkedin },
    { name: "YouTube", href: "https://www.youtube.com/@elevenlabsio", icon: Youtube },
    { name: "GitHub", href: "https://github.com/elevenlabs", icon: Github },
    { name: "Discord", href: "https://discord.gg/elevenlabs", icon: MessageCircle }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="block">
              <img 
                src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_logo_2.png" 
                alt="ElevenLabs Logo" 
                className="h-8 w-auto mb-6"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              ElevenLabs is revolutionizing content creation with AI-powered voice technology. 
              Our mission is to make high-quality voice content accessible to everyone, in any language 
              and any voice.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-gray-600 hover:text-primary transition-colors">
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+18006145475" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (800) 614-5475
              </a>
              <a href="mailto:team@elevenlabs.io" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                team@elevenlabs.io
              </a>
              <div className="pt-4">
                <a 
                  href="https://try.elevenlabs.io/7qngyxyh42op" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ElevenLabs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-primary">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
